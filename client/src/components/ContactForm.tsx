/**
 * ContactForm – Kim Bondo
 *
 * Sender henvendelsen via Web3Forms (https://web3forms.com) direkte til
 * kim@bedemandkobenhavn.dk. Kræver ingen backend — siden er statisk.
 *
 * OPSÆTNING:
 *   Formularen styres på app.web3forms.com (konto: kontakt@bedemandsservice.dk).
 *   Nøglen står i ACCESS_KEY nedenfor.
 *
 * Hvis afsendelsen fejler, kan familien ringe eller sende beskeden som almindelig
 * e-mail (mailto), så en henvendelse aldrig går tabt i stilhed.
 *
 * Varianter (samme nøgle, samme honeypot, samme privatlivstekst):
 *   variant="default"        → navn + telefon + valgfri e-mail + besked
 *   variant="ringop"         → «Ring mig op»: navn + telefon + hvornår
 *   variant="priser"         → samme som "ringop" (bruges på /priser/)
 *   variant="prisanmodning"  → prisberegnerens «Send mig prisen og ring mig op»
 */

import { useState } from "react";

// ── Konfiguration ────────────────────────────────────────────────────────────
const RECIPIENT = "kim@bedemandkobenhavn.dk";
const PHONE_DISPLAY = "28 14 60 11";
const PHONE_HREF = "+4528146011";

// Web3Forms access key (offentlig nøgle) for formularen "Kontaktformular" på kontoen
// kontakt@bedemandsservice.dk. Nøglen står fast her med vilje; en miljøvariabel
// overstyrer den ikke.
const ACCESS_KEY = "157fe0c6-d375-45d5-b1a0-5615eb395327";

// ── GTM dataLayer helper ─────────────────────────────────────────────────────
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function pushEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  }
}

// ── Typer ────────────────────────────────────────────────────────────────────
export type PakkeNoegle = "uden" | "begravelse" | "bisaettelse";

export const PAKKE_NAVNE: Record<PakkeNoegle, string> = {
  uden: "Bisættelse uden ceremoni",
  begravelse: "Begravelse",
  bisaettelse: "Bisættelse med ceremoni",
};

const AFDOEDE_STEDER = ["Hospital eller hospice", "Plejehjem", "Hjemme", "Kapel", "Ved ikke endnu", "Andet"];

interface ContactFormProps {
  variant?: "default" | "priser" | "ringop" | "prisanmodning";
  /** Forudfyldt besked (default-varianten). Sendes aldrig automatisk. */
  initialMessage?: string;
  /** Prisanmodning: den valgte pakke i beregneren. */
  pakke?: PakkeNoegle | null;
  /** Prisanmodning: skift pakke (ændrer også beregnerens valg). */
  onPakkeChange?: (p: PakkeNoegle) => void;
  /** Prisanmodning: hele overslaget fra beregneren – hentes, når der sendes. */
  overslag?: () => string;
  /** Prisanmodning: den vejledende pris i kr. */
  vejledendePris?: number;
  /** Unikt præfiks til felt-id'er, når flere formularer står på samme side. */
  idPrefix?: string;
}

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export default function ContactForm({
  variant = "default",
  initialMessage = "",
  pakke = null,
  onPakkeChange,
  overslag,
  vejledendePris,
  idPrefix = "cf",
}: ContactFormProps) {
  const ringop = variant === "ringop" || variant === "priser";
  const prisanmodning = variant === "prisanmodning";
  const formType = prisanmodning ? "prisanmodning" : ringop ? "ring_op" : "product_contact";

  const [status, setStatus] = useState<Status>("idle");
  const [mangler, setMangler] = useState<string[]>([]);
  const [sendtOverslag, setSendtOverslag] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: initialMessage,
    timing: "",
    sted: "",
    stedTekst: "",
    // Honeypot — udfyldes kun af bots
    botcheck: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const stedTekst = () => [form.sted, form.stedTekst].filter(Boolean).join(" – ");
  const pakkeNavn = pakke ? PAKKE_NAVNE[pakke] : "(ikke valgt)";
  const prisTekst = typeof vejledendePris === "number" ? `${vejledendePris.toLocaleString("da-DK")} kr.` : "";

  const buildSubject = () =>
    prisanmodning
      ? `Prisanmodning fra hjemmesiden – ${form.name || "ukendt afsender"}`
      : ringop
        ? `Ring mig op – ${form.name || "ukendt afsender"}`
        : `Henvendelse fra hjemmesiden – ${form.name || "ukendt afsender"}`;

  const buildBody = (overslagTekst = "") => {
    const linjer = [`Navn: ${form.name}`, `Telefon: ${form.phone}`];
    if (prisanmodning) {
      linjer.push(`E-mail: ${form.email || "(ikke oplyst)"}`);
      linjer.push(`Hvor afdøde er nu: ${stedTekst()}`);
      linjer.push(`Valgt pakke: ${pakkeNavn}`);
      if (prisTekst) linjer.push(`Vejledende pris: ${prisTekst}`);
      linjer.push(`Hvornår passer det at ringe: ${form.timing}`);
      if (form.message) linjer.push("", "Bemærkning:", form.message);
      if (overslagTekst) linjer.push("", overslagTekst);
    } else if (ringop) {
      linjer.push(`Hvornår passer det at ringe: ${form.timing}`);
    } else {
      linjer.push(`E-mail: ${form.email || "(ikke oplyst)"}`, "", "Besked:", form.message);
    }
    return linjer.join("\n");
  };

  const mailtoHref = (overslagTekst = "") =>
    `mailto:${RECIPIENT}?subject=${encodeURIComponent(buildSubject())}&body=${encodeURIComponent(buildBody(overslagTekst))}`;

  // Felter, der skal være udfyldt, før der sendes
  const paakraevet = (): string[] => {
    const m: string[] = [];
    if (!form.name.trim()) m.push("navn");
    if (!form.phone.trim()) m.push("telefon");
    if (prisanmodning) {
      if (!form.sted) m.push("hvor afdøde er nu");
      if (!pakke) m.push("pakke");
    }
    if ((ringop || prisanmodning) && !form.timing.trim()) m.push("hvornår jeg må ringe");
    if (variant === "default" && !form.message.trim()) m.push("besked");
    return m;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    // Bot fanget i honeypot — lad som om alt gik godt, send intet og mål intet.
    if (form.botcheck) {
      setStatus("sent");
      return;
    }

    const m = paakraevet();
    setMangler(m);
    if (m.length) return;

    // Overslaget hentes nu, så det altid følger det aktuelle valg i beregneren
    const overslagTekst = prisanmodning && overslag ? overslag() : "";
    setSendtOverslag(overslagTekst);

    pushEvent("form_submit", {
      form_type: variant === "default" ? "product_contact" : variant === "priser" ? "priser_contact" : formType,
      has_phone: !!form.phone,
    });

    setStatus("sending");

    try {
      const felter: Record<string, string | undefined> = prisanmodning
        ? {
            Navn: form.name,
            Telefon: form.phone,
            email: form.email || undefined,
            "Hvor afdøde er nu": stedTekst(),
            "Valgt pakke": pakkeNavn,
            "Vejledende pris": prisTekst || undefined,
            "Hvornår passer det at ringe": form.timing,
            Bemærkning: form.message || undefined,
            Overslag: overslagTekst,
          }
        : ringop
          ? {
              Navn: form.name,
              Telefon: form.phone,
              "Hvornår passer det at ringe": form.timing,
            }
          : {
              Navn: form.name,
              Telefon: form.phone,
              email: form.email || undefined,
              Besked: form.message,
            };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: buildSubject(),
          from_name: "Bedemand København",
          // replyto sætter Svar-til i mailen, så der kan svares direkte
          replyto: form.email || undefined,
          ...felter,
          Side: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus("sent");
        const page_path = typeof window !== "undefined" ? window.location.pathname : "";

        if (prisanmodning) {
          // Kvitteringen vises her (med overslaget), så familien kan gemme en kopi.
          pushEvent("prisanmodning_sendt", { form_type: "prisanmodning", pakke: pakke || undefined, page_path });
          pushEvent("form_submit_success", { form_type: "prisanmodning" });
          return;
        }

        if (ringop) pushEvent("ring_op_sendt", { form_type: "ring_op", page_path });

        // Videre til tak-siden, når GTM har modtaget begivenheden (højst 1,5 sek.).
        // Lykkes det ikke, står tak-beskeden stadig her.
        let videre = false;
        const tilTak = () => {
          if (videre) return;
          videre = true;
          window.location.assign("/tak/");
        };
        pushEvent("form_submit_success", {
          form_type: variant === "default" ? "product_contact" : variant === "priser" ? "priser_contact" : formType,
          eventCallback: tilTak,
          eventTimeout: 1500,
        });
        window.setTimeout(tilTak, 1500);
      } else {
        console.error("Web3Forms-fejl:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Kunne ikke sende formularen:", err);
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "15px",
    fontFamily: "'Open Sans', sans-serif",
    color: "#2F3E46",
    background: "#ffffff",
    border: "1.5px solid #d6d0c8",
    borderRadius: "3px",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: "20px",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#2F3E46",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "8px",
  };

  // ── Kvittering ─────────────────────────────────────────────────────────────
  if (status === "sent" || status === "mailto") {
    const kopiHref = form.email && sendtOverslag
      ? `mailto:${form.email}?subject=${encodeURIComponent("Mit overslag fra Bedemand København")}&body=${encodeURIComponent(sendtOverslag)}`
      : "";
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          background: "#eaf2eb",
          border: "1.5px solid #3D6B4F",
          borderRadius: "4px",
          padding: "32px 28px",
          textAlign: prisanmodning ? "left" : "center",
        }}
      >
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "20px", color: "#2F3E46", marginBottom: "12px" }}>
          {prisanmodning ? "Tak – jeg har modtaget jeres anmodning" : ringop ? "Tak – jeg ringer til jer" : "Tak for din besked"}
        </p>
        <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.7 }}>
          {status === "mailto"
            ? "Jeres e-mailprogram er åbnet med beskeden klar til afsendelse. I er også velkomne til at ringe på "
            : prisanmodning
              ? `Det er ikke en bestilling, og I har ikke købt noget. Jeg har fået overslaget og ringer til jer, så hurtigt jeg kan.${form.email ? " Jeg kan også svare jer på skrift." : ""} I er også velkomne til at ringe på `
              : ringop
                ? "Jeg ringer til jer, så hurtigt jeg kan. I er også velkomne til at ringe på "
                : "Din besked er sendt. Jeg vender tilbage hurtigst muligt — og du er altid velkommen til at ringe på "}
          <a href={`tel:${PHONE_HREF}`} style={{ color: "#3D6B4F", fontWeight: 600 }}>
            {PHONE_DISPLAY}
          </a>
          .
        </p>
        {prisanmodning && sendtOverslag && (
          <>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#2F3E46", margin: "20px 0 8px" }}>Det overslag, jeg har fået</p>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#3d4f5a", whiteSpace: "pre-wrap", overflowWrap: "anywhere", background: "#fff", border: "1px solid #d6e3d9", borderRadius: "3px", padding: "14px 16px", margin: 0 }}>
              {sendtOverslag}
            </p>
            {kopiHref && (
              <p style={{ fontSize: "14px", color: "#3d5260", marginTop: "14px" }}>
                <a href={kopiHref} style={{ color: "#3D6B4F", fontWeight: 600 }}>Send en kopi af overslaget til jer selv</a> (åbner jeres e-mailprogram).
              </p>
            )}
          </>
        )}
      </div>
    );
  }

  const sending = status === "sending";
  const id = (navn: string) => `${idPrefix}-${navn}`;

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — skjult for mennesker, udfyldes af bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        checked={!!form.botcheck}
        onChange={(e) => setForm({ ...form, botcheck: e.target.checked ? "1" : "" })}
        style={{ display: "none" }}
        aria-hidden="true"
      />

      <label style={labelStyle} htmlFor={id("name")}>Navn</label>
      <input id={id("name")} name="name" type="text" placeholder="Dit fulde navn" value={form.name} onChange={handleChange} required autoComplete="name" style={inputStyle} />

      <label style={labelStyle} htmlFor={id("phone")}>Telefon</label>
      <input id={id("phone")} name="phone" type="tel" placeholder="Dit telefonnummer" value={form.phone} onChange={handleChange} required autoComplete="tel" style={inputStyle} />

      {prisanmodning && (
        <>
          <label style={labelStyle} htmlFor={id("sted")}>Hvor er afdøde nu?</label>
          <select id={id("sted")} name="sted" value={form.sted} onChange={handleChange} required style={inputStyle}>
            <option value="">Vælg</option>
            {AFDOEDE_STEDER.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <input
            id={id("sted-tekst")}
            name="stedTekst"
            type="text"
            aria-label="Uddyb gerne, hvor afdøde er nu"
            placeholder="Uddyb gerne – fx hvilket hospital eller plejehjem (valgfrit)"
            value={form.stedTekst}
            onChange={handleChange}
            style={{ ...inputStyle, marginTop: "-8px" }}
          />

          <label style={labelStyle} htmlFor={id("pakke")}>Valgt pakke</label>
          <select
            id={id("pakke")}
            name="pakke"
            value={pakke || ""}
            onChange={(e) => onPakkeChange?.(e.target.value as PakkeNoegle)}
            required
            style={inputStyle}
          >
            <option value="" disabled>Vælg pakke</option>
            {(Object.keys(PAKKE_NAVNE) as PakkeNoegle[]).map((k) => (
              <option key={k} value={k}>{PAKKE_NAVNE[k]}</option>
            ))}
          </select>
        </>
      )}

      {(ringop || prisanmodning) && (
        <>
          <label style={labelStyle} htmlFor={id("timing")}>Hvornår passer det, jeg ringer?</label>
          <input id={id("timing")} name="timing" type="text" placeholder="F.eks. nu, i aften efter kl. 18 eller i morgen formiddag" value={form.timing} onChange={handleChange} required style={inputStyle} />
        </>
      )}

      {!ringop && (
        <>
          <label style={labelStyle} htmlFor={id("email")}>E-mail (valgfrit)</label>
          <input id={id("email")} name="email" type="email" placeholder="Så kan jeg også svare jer på skrift" value={form.email} onChange={handleChange} autoComplete="email" style={inputStyle} />
        </>
      )}

      {variant === "default" && (
        <>
          <label style={labelStyle} htmlFor={id("message")}>Besked</label>
          <textarea
            id={id("message")}
            name="message"
            placeholder="Skriv gerne kort, hvad det drejer sig om – der er ingen forkerte spørgsmål."
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
          />
        </>
      )}

      {prisanmodning && (
        <>
          <label style={labelStyle} htmlFor={id("message")}>Bemærkning (valgfrit)</label>
          <textarea
            id={id("message")}
            name="message"
            placeholder="Er der noget, jeg skal vide, før jeg ringer?"
            value={form.message}
            onChange={handleChange}
            rows={3}
            style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
          />
        </>
      )}

      <p style={{ fontSize: "13px", color: "#7a8f99", lineHeight: 1.6, marginBottom: "24px", fontStyle: "italic" }}>
        {prisanmodning
          ? "Oplysningerne – også hvor afdøde er nu, den valgte pakke og overslaget – sendes til min indbakke gennem en ekstern formulartjeneste (Web3Forms). Jeg bruger dem kun til at ringe tilbage og tale om overslaget. Læs mere i "
          : ringop
            ? "Navn, telefon og tidspunkt sendes til min indbakke gennem en ekstern formulartjeneste (Web3Forms). Jeg bruger dem kun til at ringe jer op. Læs mere i "
            : "Din besked sendes til min indbakke gennem en ekstern formulartjeneste (Web3Forms). Oplysningerne bruges udelukkende til at besvare din henvendelse — de sælges ikke og bruges ikke til markedsføring. Læs mere i "}
        <a href="/persondatapolitik/" style={{ color: "#5a7a6a" }}>persondatapolitikken</a>.
      </p>

      {mangler.length > 0 && (
        <div role="alert" style={{ background: "#fdf6ec", border: "1.5px solid #c9a35b", borderRadius: "4px", padding: "14px 18px", marginBottom: "20px", fontSize: "14px", color: "#6b4f1d", lineHeight: 1.7 }}>
          Udfyld venligst {mangler.join(", ")}, så jeg kan ringe jer op.
        </div>
      )}

      {status === "error" && (
        <div role="alert" style={{ background: "#fdf2f0", border: "1.5px solid #c0665a", borderRadius: "4px", padding: "16px 18px", marginBottom: "20px", fontSize: "14px", color: "#7a3b33", lineHeight: 1.7 }}>
          Beskeden kunne desværre ikke sendes lige nu. Ring endelig på{" "}
          <a href={`tel:${PHONE_HREF}`} style={{ color: "#7a3b33", fontWeight: 700 }}>{PHONE_DISPLAY}</a>{" "}
          — eller{" "}
          <a href={mailtoHref(prisanmodning && overslag ? overslag() : "")} onClick={() => setStatus("mailto")} style={{ color: "#7a3b33", fontWeight: 700 }}>
            send den som almindelig e-mail
          </a>
          .
        </div>
      )}

      {(ringop || prisanmodning) && (
        <p style={{ fontSize: "14px", color: "#3d5260", lineHeight: 1.6, margin: "0 0 14px" }}>
          {prisanmodning
            ? "Det er ikke bindende. I køber ikke noget her. Jeg får overslaget og ringer til jer, så hurtigt jeg kan."
            : "Det er ikke bindende. Jeg ringer til jer, så hurtigt jeg kan."}
        </p>
      )}

      <button
        type="submit"
        disabled={sending || (prisanmodning && !pakke)}
        style={{
          width: "100%",
          background: sending || (prisanmodning && !pakke) ? "#7d9a89" : "#3D6B4F",
          color: "#ffffff",
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 700,
          fontSize: "15px",
          padding: "16px 24px",
          border: "none",
          borderRadius: "3px",
          letterSpacing: "0.05em",
          cursor: sending ? "default" : "pointer",
        }}
      >
        {sending ? "Sender …" : prisanmodning ? "Send mig prisen og ring mig op" : ringop ? "Ring mig op" : "Send besked"}
      </button>
    </form>
  );
}
