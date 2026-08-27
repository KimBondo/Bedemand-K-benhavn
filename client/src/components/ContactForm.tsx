/**
 * ContactForm – Kim Bondo
 *
 * Sender henvendelsen via Web3Forms (https://web3forms.com) direkte til
 * kim@bedemandkobenhavn.dk. Kræver ingen backend — siden er statisk.
 *
 * OPSÆTNING (engangs, ca. 1 minut):
 *   1. Gå til https://web3forms.com, skriv kim@bedemandkobenhavn.dk og få en access key på mail.
 *   2. Sæt nøglen ind som VITE_WEB3FORMS_KEY i .env — eller indsæt den direkte i
 *      FALLBACK_ACCESS_KEY nedenfor.
 *   3. Bekræft adressen via mailen fra Web3Forms, ellers sendes der intet.
 *
 * Hvis nøglen mangler, eller hvis afsendelsen fejler, falder formularen tilbage
 * til den gamle mailto:-løsning, så en henvendelse aldrig går tabt i stilhed.
 *
 * Props:
 *   variant="default"  → navn + telefon + besked (produktsiden)
 *   variant="priser"   → navn + telefon + hvornår (prissiden)
 */

import { useState } from "react";

// ── Konfiguration ────────────────────────────────────────────────────────────
const RECIPIENT = "kim@bedemandkobenhavn.dk";
const PHONE_DISPLAY = "22 21 14 37";
const PHONE_HREF = "+4522211437";

// Indsæt din Web3Forms access key her hvis du ikke bruger .env-filen:
const FALLBACK_ACCESS_KEY = "c89cef24-833d-4af6-87cb-ca108350220c";

const ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) || FALLBACK_ACCESS_KEY;

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

// ── Component ────────────────────────────────────────────────────────────────
interface ContactFormProps {
  variant?: "default" | "priser";
}

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    timing: "",
    // Honeypot — udfyldes kun af bots
    botcheck: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildBody = () =>
    variant === "priser"
      ? `Navn: ${form.name}\nTelefon: ${form.phone}\nE-mail: ${form.email || "(ikke oplyst)"}\n\nHvornår passer det at ringe:\n${form.timing}`
      : `Navn: ${form.name}\nTelefon: ${form.phone}\nE-mail: ${form.email || "(ikke oplyst)"}\n\nBesked:\n${form.message}`;

  const buildSubject = () =>
    `Henvendelse fra hjemmesiden – ${form.name || "ukendt afsender"}`;

  const mailtoHref = () =>
    `mailto:${RECIPIENT}?subject=${encodeURIComponent(buildSubject())}&body=${encodeURIComponent(buildBody())}`;

  const openMailClient = () => {
    window.location.href = mailtoHref();
    setStatus("mailto");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    // Bot fanget i honeypot — lad som om alt gik godt, send intet.
    if (form.botcheck) {
      setStatus("sent");
      return;
    }

    pushEvent("form_submit", {
      form_type: variant === "priser" ? "priser_contact" : "product_contact",
      has_phone: !!form.phone,
    });

    // Ingen nøgle konfigureret endnu → brug den gamle mailto-løsning
    if (!ACCESS_KEY) {
      openMailClient();
      return;
    }

    setStatus("sending");

    try {
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
          // replyto sætter Svar-til i mailen, så Kim kan svare direkte
          replyto: form.email || undefined,
          Navn: form.name,
          Telefon: form.phone,
          "E-mail": form.email || "(ikke oplyst)",
          ...(variant === "priser"
            ? { "Hvornår passer det at ringe": form.timing }
            : { Besked: form.message }),
          Side: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        pushEvent("form_submit_success", {
          form_type: variant === "priser" ? "priser_contact" : "product_contact",
        });
        setStatus("sent");
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
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          background: "#eaf2eb",
          border: "1.5px solid #3D6B4F",
          borderRadius: "4px",
          padding: "36px 32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "20px",
            color: "#2F3E46",
            marginBottom: "12px",
          }}
        >
          Tak for din besked
        </p>
        <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.7 }}>
          {status === "sent"
            ? "Din besked er sendt. Kim vender tilbage hurtigst muligt — og du er altid velkommen til at ringe på "
            : "Din e-mail-klient er åbnet med beskeden klar til afsendelse. Du er også velkommen til at ringe på "}
          <a
            href={`tel:${PHONE_HREF}`}
            style={{ color: "#3D6B4F", fontWeight: 600 }}
          >
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — skjult for mennesker, udfyldes af bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        checked={!!form.botcheck}
        onChange={(e) =>
          setForm({ ...form, botcheck: e.target.checked ? "1" : "" })
        }
        style={{ display: "none" }}
        aria-hidden="true"
      />

      <label style={labelStyle} htmlFor="cf-name">
        Navn
      </label>
      <input
        id="cf-name"
        name="name"
        type="text"
        placeholder="Dit fulde navn"
        value={form.name}
        onChange={handleChange}
        required
        autoComplete="name"
        style={inputStyle}
      />

      <label style={labelStyle} htmlFor="cf-phone">
        Telefon
      </label>
      <input
        id="cf-phone"
        name="phone"
        type="tel"
        placeholder="Dit telefonnummer"
        value={form.phone}
        onChange={handleChange}
        required
        autoComplete="tel"
        style={inputStyle}
      />

      <label style={labelStyle} htmlFor="cf-email">
        E-mail (valgfrit)
      </label>
      <input
        id="cf-email"
        name="email"
        type="email"
        placeholder="Så kan Kim også svare dig på skrift"
        value={form.email}
        onChange={handleChange}
        autoComplete="email"
        style={inputStyle}
      />

      {variant === "priser" ? (
        <>
          <label style={labelStyle} htmlFor="cf-timing">
            Hvornår passer det, jeg ringer?
          </label>
          <input
            id="cf-timing"
            name="timing"
            type="text"
            placeholder="F.eks. hverdage efter kl. 16, eller hvornår som helst"
            value={form.timing}
            onChange={handleChange}
            style={inputStyle}
          />
        </>
      ) : (
        <>
          <label style={labelStyle} htmlFor="cf-message">
            Besked
          </label>
          <textarea
            id="cf-message"
            name="message"
            placeholder="Skriv gerne kort, hvad det drejer sig om – der er ingen forkerte spørgsmål."
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            style={{
              ...inputStyle,
              resize: "vertical",
              lineHeight: 1.7,
            }}
          />
        </>
      )}

      <p
        style={{
          fontSize: "13px",
          color: "#7a8f99",
          lineHeight: 1.6,
          marginBottom: "28px",
          fontStyle: "italic",
        }}
      >
        Din besked sendes til Kims indbakke gennem en ekstern formulartjeneste
        (Web3Forms). Oplysningerne bruges udelukkende til at besvare din
        henvendelse — de sælges ikke og bruges ikke til markedsføring. Læs mere i{" "}
        <a href="/persondatapolitik/" style={{ color: "#5a7a6a" }}>
          persondatapolitikken
        </a>
        .
      </p>

      {status === "error" && (
        <div
          role="alert"
          style={{
            background: "#fdf2f0",
            border: "1.5px solid #c0665a",
            borderRadius: "4px",
            padding: "16px 18px",
            marginBottom: "20px",
            fontSize: "14px",
            color: "#7a3b33",
            lineHeight: 1.7,
          }}
        >
          Beskeden kunne desværre ikke sendes lige nu. Ring endelig på{" "}
          <a
            href={`tel:${PHONE_HREF}`}
            style={{ color: "#7a3b33", fontWeight: 700 }}
          >
            {PHONE_DISPLAY}
          </a>{" "}
          — eller{" "}
          <a
            href={mailtoHref()}
            onClick={() => setStatus("mailto")}
            style={{ color: "#7a3b33", fontWeight: 700 }}
          >
            send den som almindelig e-mail
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        style={{
          width: "100%",
          background: sending ? "#7d9a89" : "#3D6B4F",
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
        {sending ? "Sender …" : "Send besked"}
      </button>
    </form>
  );
}
