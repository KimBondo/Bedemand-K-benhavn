// POST /api/prisanmodning – prisberegnerens «Send mig prisen og ring mig op».
//
// Sender to mails via Simplys SMTP (smtp.simply.com, port 587 med STARTTLS):
//   1. til Kim – samme indhold og emne som før ("Prisanmodning fra hjemmesiden – {navn}")
//   2. hvis familien har skrevet en e-mail: én kvittering med det vejledende overslag
//
// Adgangskoden ligger KUN som Cloudflare-hemmeligheden SMTP_PASSWORD (Production og Preview).
// Mangler den, svarer vi 503, og siden sender i stedet via Web3Forms som før.
//
// Der logges aldrig personoplysninger: kun trin og SMTP-statuskode.

import { connect } from "cloudflare:sockets";

const SMTP_HOST = "smtp.simply.com";
const SMTP_USER = "kim@bedemandkobenhavn.dk";
const KIM = "kim@bedemandkobenhavn.dk";
const FRA_NAVN = "Kim Bondo – Bedemand København";
const DOMAENE = "bedemandkobenhavn.dk";

const PAKKER = {
  uden: "Bisættelse uden ceremoni",
  begravelse: "Begravelse",
  bisaettelse: "Bisættelse med ceremoni",
};
const STEDER = ["Hospital eller hospice", "Plejehjem", "Hjemme", "Kapel", "Ved ikke endnu", "Andet"];

const MAX_PR_IP = 5; // anmodninger pr. time pr. IP
const MAX_KOPI_PR_EMAIL = 2; // kvitteringer pr. time pr. e-mail

// ── Svar ─────────────────────────────────────────────────────────────────────
const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
  }
  return behandl(context);
}

// ── Kun egne sider ───────────────────────────────────────────────────────────
function tilladtOprindelse(request) {
  const kilde = request.headers.get("Origin") || request.headers.get("Referer");
  if (!kilde) return false;
  let host;
  try {
    host = new URL(kilde).hostname;
  } catch {
    return false;
  }
  return (
    host === "www.bedemandkobenhavn.dk" ||
    host === "bedemandkobenhavn.pages.dev" ||
    host.endsWith(".bedemandkobenhavn.pages.dev") ||
    host === "localhost" ||
    host === "127.0.0.1"
  );
}

// ── Validering ───────────────────────────────────────────────────────────────
// Enkeltlinjefelter: ingen linjeskift eller kontroltegn (beskytter mailens headere).
const KONTROL = /[\u0000-\u001f\u007f\u2028\u2029]/;
const KONTROL_FLERLINJE = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f\u2028\u2029]/;
const LINK = /(https?:|www\.|:\/\/|<|>)/i;
const EMAIL = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

function enLinje(v, max, { kraevet = false } = {}) {
  if (v === undefined || v === null || v === "") return kraevet ? null : "";
  if (typeof v !== "string") return null;
  const s = v.trim();
  if (KONTROL.test(s) || s.length > max) return null;
  if (kraevet && !s) return null;
  return s;
}

function flereLinjer(v, max) {
  if (v === undefined || v === null || v === "") return "";
  if (typeof v !== "string") return null;
  const s = v.replace(/\r\n?/g, "\n").trim();
  if (KONTROL_FLERLINJE.test(s) || s.length > max) return null;
  return s;
}

function valider(d) {
  if (!d || typeof d !== "object") return null;
  const navn = enLinje(d.navn, 100, { kraevet: true });
  const telefon = enLinje(d.telefon, 30, { kraevet: true });
  const emailRaa = enLinje(d.email, 254);
  const sted = enLinje(d.sted, 40, { kraevet: true });
  const stedTekst = enLinje(d.stedTekst, 200);
  const pakke = enLinje(d.pakke, 20, { kraevet: true });
  const pris = d.vejledendePris;
  const tidspunkt = enLinje(d.tidspunkt, 200, { kraevet: true });
  const bemaerkning = flereLinjer(d.bemaerkning, 2000);
  const overslag = flereLinjer(d.overslag, 3000);
  const side = enLinje(d.side, 200);

  if ([navn, telefon, emailRaa, sted, stedTekst, pakke, tidspunkt, bemaerkning, overslag, side].some((x) => x === null)) return null;
  if (LINK.test(navn)) return null;
  if (!/^[0-9+()\-. ]{6,30}$/.test(telefon)) return null;
  if (emailRaa && !EMAIL.test(emailRaa)) return null;
  if (!STEDER.includes(sted)) return null;
  if (!Object.prototype.hasOwnProperty.call(PAKKER, pakke)) return null;
  if (pris !== undefined && pris !== null && !(Number.isInteger(pris) && pris >= 0 && pris < 1000000)) return null;
  // Overslaget kommer fra prisberegneren og indeholder aldrig links.
  if (overslag && (!overslag.startsWith("Mit overslag fra prisberegneren:") || LINK.test(overslag))) return null;
  if (side && !side.startsWith("/")) return null;

  return {
    navn,
    telefon,
    email: emailRaa,
    sted,
    stedTekst,
    pakke,
    pakkeNavn: PAKKER[pakke],
    prisTekst: Number.isInteger(pris) ? `${pris.toLocaleString("da-DK")} kr.` : "",
    tidspunkt,
    bemaerkning,
    overslag,
    side,
  };
}

// ── Grænse for antal (Cache API, fast vindue på én time) ──────────────────────
async function sha256(tekst) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(tekst));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function taelOp(request, noegle, max) {
  // Nøglen er en hash, så hverken IP eller e-mail står i cachen.
  try {
    const cache = caches.default;
    // Nøglen ligger på samme host som funktionen (virker både på preview og www).
    const url = new URL(`/__graense/${await sha256(noegle)}`, request.url).href;
    const nu = Date.now();
    let antal = 0;
    let start = nu;
    const gammel = await cache.match(url);
    if (gammel) {
      const v = await gammel.json().catch(() => null);
      if (v && nu - v.start < 3600_000) {
        antal = v.antal;
        start = v.start;
      }
    }
    if (antal >= max) return false;
    const tilbage = Math.max(60, Math.ceil((start + 3600_000 - nu) / 1000));
    await cache.put(
      url,
      new Response(JSON.stringify({ antal: antal + 1, start }), {
        headers: { "Content-Type": "application/json", "Cache-Control": `max-age=${tilbage}` },
      }),
    );
    return true;
  } catch {
    return true; // virker cachen ikke, lader vi anmodningen gå igennem
  }
}

// ── Indhold ──────────────────────────────────────────────────────────────────
function kimTekst(f) {
  const l = [
    `Navn: ${f.navn}`,
    `Telefon: ${f.telefon}`,
    `E-mail: ${f.email || "(ikke oplyst)"}`,
    `Hvor afdøde er nu: ${[f.sted, f.stedTekst].filter(Boolean).join(" – ")}`,
    `Valgt pakke: ${f.pakkeNavn}`,
  ];
  if (f.prisTekst) l.push(`Vejledende pris: ${f.prisTekst}`);
  l.push(`Hvornår passer det at ringe: ${f.tidspunkt}`);
  if (f.bemaerkning) l.push("", "Bemærkning:", f.bemaerkning);
  if (f.overslag) l.push("", f.overslag);
  if (f.side) l.push("", `Side: ${f.side}`);
  return l.join("\n");
}

function kvitteringTekst(f) {
  return [
    `Hej ${f.navn}`,
    "",
    "Tak for jeres anmodning. Her er det vejledende overslag fra prisberegneren.",
    "",
    f.overslag,
    "",
    "Det er ikke bindende. I har ikke købt noget.",
    "",
    "Jeg ringer til jer, så hurtigt jeg kan.",
    "I er også velkomne til at ringe til mig på 28 14 60 11.",
    "",
    "Venlig hilsen",
    "Kim Bondo",
    "Bedemand København",
    "28 14 60 11",
    "https://www.bedemandkobenhavn.dk",
  ].join("\n");
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function html(tekst, { ramme } = {}) {
  // Rolig, enkel HTML: samme tekst som den rene tekstudgave.
  const afsnit = tekst
    .split("\n\n")
    .map((blok) => {
      const indre = esc(blok).replace(/\n/g, "<br>");
      if (ramme && blok === ramme)
        return `<p style="margin:0 0 16px;padding:14px 16px;background:#F9F8F6;border:1px solid #e0dcd6;border-radius:4px;font-size:14px;line-height:1.7">${indre}</p>`;
      return `<p style="margin:0 0 16px">${indre}</p>`;
    })
    .join("\n")
    .replace("https://www.bedemandkobenhavn.dk</p>", '<a href="https://www.bedemandkobenhavn.dk" style="color:#3D6B4F">www.bedemandkobenhavn.dk</a></p>')
    .replace("28 14 60 11.</p>", '<a href="tel:+4528146011" style="color:#3D6B4F">28 14 60 11</a>.</p>');
  return `<!doctype html><html lang="da"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head><body style="margin:0;padding:24px;background:#ffffff"><div style="max-width:560px;margin:0 auto;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:#2F3E46">${afsnit}</div></body></html>`;
}

// ── MIME ─────────────────────────────────────────────────────────────────────
const enc = new TextEncoder();
function b64(tekst) {
  const bytes = enc.encode(tekst);
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}
const ombryd = (s) => s.replace(/.{1,76}/g, "$&\r\n");
const ordKode = (s) => (/^[\x20-\x7e]*$/.test(s) ? s : `=?UTF-8?B?${b64(s)}?=`);

function lavMail({ til, svarTil, emne, tekst, htmlTekst }) {
  const graense = `=_${crypto.randomUUID()}`;
  const linjer = [
    `From: ${ordKode(FRA_NAVN)} <${KIM}>`,
    `To: <${til}>`,
    `Reply-To: <${svarTil}>`,
    `Subject: ${ordKode(emne)}`,
    `Date: ${new Date().toUTCString().replace("GMT", "+0000")}`,
    `Message-ID: <${crypto.randomUUID()}@${DOMAENE}>`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${graense}"`,
    "",
    `--${graense}`,
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: base64",
    "",
    ombryd(b64(tekst)),
    `--${graense}`,
    "Content-Type: text/html; charset=utf-8",
    "Content-Transfer-Encoding: base64",
    "",
    ombryd(b64(htmlTekst)),
    `--${graense}--`,
    "",
  ];
  return linjer.join("\r\n");
}

// ── SMTP over cloudflare:sockets ─────────────────────────────────────────────
class SmtpFejl extends Error {
  constructor(trin, kode) {
    super(`SMTP ${trin} ${kode}`);
    this.trin = trin;
    this.kode = kode;
  }
}

class Smtp {
  constructor(socket) {
    this.brug(socket);
  }
  brug(socket) {
    this.socket = socket;
    this.reader = socket.readable.getReader();
    this.writer = socket.writable.getWriter();
    this.dek = new TextDecoder();
    this.buf = "";
  }
  async linje(ms) {
    const frist = Date.now() + ms;
    while (!this.buf.includes("\r\n")) {
      const rest = frist - Date.now();
      if (rest <= 0) throw new SmtpFejl("timeout", 0);
      let t;
      const { value, done } = await Promise.race([
        this.reader.read(),
        new Promise((_, rej) => (t = setTimeout(() => rej(new SmtpFejl("timeout", 0)), rest))),
      ]).finally(() => clearTimeout(t));
      if (done) throw new SmtpFejl("lukket", 0);
      this.buf += this.dek.decode(value, { stream: true });
    }
    const i = this.buf.indexOf("\r\n");
    const l = this.buf.slice(0, i);
    this.buf = this.buf.slice(i + 2);
    return l;
  }
  // Læser et (evt. flerlinjet) svar og tjekker koden. Svarteksten logges aldrig.
  async svar(trin, forventet, ms = 15000) {
    const linjer = [];
    for (;;) {
      const l = await this.linje(ms);
      linjer.push(l);
      if (l.length < 4 || l[3] !== "-") break;
    }
    const kode = Number(linjer[linjer.length - 1].slice(0, 3));
    if (!forventet.includes(kode)) throw new SmtpFejl(trin, kode);
    return linjer;
  }
  async send(tekst) {
    await this.writer.write(enc.encode(tekst));
  }
  async kmd(tekst, trin, forventet, ms) {
    await this.send(`${tekst}\r\n`);
    return this.svar(trin, forventet, ms);
  }
  async startTls() {
    this.reader.releaseLock();
    this.writer.releaseLock();
    this.brug(this.socket.startTls());
  }
  async log_ind(kode) {
    await this.kmd(`AUTH PLAIN ${b64(`\0${SMTP_USER}\0${kode}`)}`, "auth", [235]);
  }
  async mail(fra, til, data) {
    await this.kmd(`MAIL FROM:<${fra}>`, "mail", [250]);
    await this.kmd(`RCPT TO:<${til}>`, "rcpt", [250, 251]);
    await this.kmd("DATA", "data", [354]);
    // Dot-stuffing (base64-delene kan ikke starte med punktum, men headere i teorien kan)
    await this.send(`${data.replace(/\r\n\./g, "\r\n..")}\r\n.\r\n`);
    await this.svar("data-slut", [250], 30000);
  }
  async luk() {
    try {
      await this.send("QUIT\r\n");
    } catch {}
    try {
      await this.socket.close();
    } catch {}
  }
}

async function aabn(kode) {
  // Først 587 med STARTTLS. Kun hvis selve forbindelsen fejler, prøver vi 465 med TLS fra start.
  try {
    const s = new Smtp(connect({ hostname: SMTP_HOST, port: 587 }, { secureTransport: "starttls" }));
    try {
      await s.svar("hilsen", [220]);
      await s.kmd(`EHLO ${DOMAENE}`, "ehlo", [250]);
      await s.kmd("STARTTLS", "starttls", [220]);
      await s.startTls();
      await s.kmd(`EHLO ${DOMAENE}`, "ehlo-tls", [250]);
    } catch (e) {
      await s.luk();
      throw e;
    }
    await s.log_ind(kode).catch(async (e) => {
      await s.luk();
      throw Object.assign(e, { ikkeForbindelse: true });
    });
    return s;
  } catch (e) {
    if (e.ikkeForbindelse) throw e; // forkert adgangskode o.l. – 465 hjælper ikke
    console.log(`prisanmodning: 587 fejlede (${e.trin || "forbindelse"} ${e.kode ?? ""}), prøver 465`);
  }
  const s = new Smtp(connect({ hostname: SMTP_HOST, port: 465 }, { secureTransport: "on" }));
  try {
    await s.svar("hilsen-465", [220]);
    await s.kmd(`EHLO ${DOMAENE}`, "ehlo-465", [250]);
    await s.log_ind(kode);
    return s;
  } catch (e) {
    await s.luk();
    throw e;
  }
}

// ── Hovedforløb ──────────────────────────────────────────────────────────────
async function behandl({ request, env }) {
  if (!tilladtOprindelse(request)) return json({ ok: false, fejl: "forbudt" }, 403);
  if (!(request.headers.get("Content-Type") || "").includes("application/json")) return json({ ok: false, fejl: "ugyldig" }, 415);

  const raa = await request.text();
  if (raa.length > 12000) return json({ ok: false, fejl: "ugyldig" }, 413);
  let data;
  try {
    data = JSON.parse(raa);
  } catch {
    return json({ ok: false, fejl: "ugyldig" }, 400);
  }

  // Honeypot: svar som om alt gik godt. Send intet, log intet.
  if (data && data.botcheck) return json({ ok: true, kopiSendt: false });

  const f = valider(data);
  if (!f) return json({ ok: false, fejl: "ugyldig" }, 400);

  if (!env.SMTP_PASSWORD) return json({ ok: false, fejl: "ikke_konfigureret" }, 503);

  const ip = request.headers.get("CF-Connecting-IP") || "ukendt";
  if (!(await taelOp(request, `ip:${ip}`, MAX_PR_IP))) return json({ ok: false, fejl: "for_mange" }, 429);

  let smtp;
  try {
    smtp = await aabn(env.SMTP_PASSWORD);
  } catch (e) {
    console.log(`prisanmodning: ingen forbindelse til SMTP (${e.trin || "forbindelse"} ${e.kode ?? ""})`);
    return json({ ok: false, fejl: "mail", trin: e.trin || "forbindelse", kode: e.kode ?? 0 }, 502);
  }

  // 1. Mail til Kim – må ikke fejle i stilhed
  try {
    const tekst = kimTekst(f);
    await smtp.mail(
      KIM,
      KIM,
      lavMail({
        til: KIM,
        svarTil: f.email || KIM,
        emne: `Prisanmodning fra hjemmesiden – ${f.navn}`,
        tekst,
        htmlTekst: html(tekst),
      }),
    );
  } catch (e) {
    console.log(`prisanmodning: mail til Kim fejlede (${e.trin || "ukendt"} ${e.kode ?? ""})`);
    await smtp.luk();
    return json({ ok: false, fejl: "mail", trin: e.trin || "ukendt", kode: e.kode ?? 0 }, 502);
  }

  // 2. Kvittering til familien – kun med e-mail og overslag, og højst 2 pr. time pr. adresse
  let kopiSendt = false;
  let kopiFejl;
  if (f.email && f.overslag && (await taelOp(request, `email:${f.email.toLowerCase()}`, MAX_KOPI_PR_EMAIL))) {
    try {
      const tekst = kvitteringTekst(f);
      await smtp.mail(
        KIM,
        f.email,
        lavMail({
          til: f.email,
          svarTil: KIM,
          emne: "Jeres overslag fra Bedemand København",
          tekst,
          htmlTekst: html(tekst, { ramme: f.overslag }),
        }),
      );
      kopiSendt = true;
    } catch (e) {
      console.log(`prisanmodning: kvittering fejlede (${e.trin || "ukendt"} ${e.kode ?? ""})`);
      kopiFejl = `${e.trin || "ukendt"} ${e.kode ?? 0}`;
    }
  }

  await smtp.luk();
  return json({ ok: true, kopiSendt, ...(kopiFejl ? { kopiFejl } : {}) });
}
