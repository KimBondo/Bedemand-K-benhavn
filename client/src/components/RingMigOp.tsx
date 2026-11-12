/**
 * «Ring mig op» – minimal, uforpligtende formular (navn, telefon, hvornår).
 *
 * RingMigOpDialog monteres én gang globalt (App.tsx). Knapper rundt på siden
 * åbner den med aabnRingMigOp(). Selve formularen er ContactForm variant="ringop",
 * så nøgle, honeypot, privatlivstekst og måling er de samme som alle andre steder.
 */

import { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";

const EVENT = "aabn-ring-mig-op";

export function aabnRingMigOp() {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(EVENT));
}

/** Knap, der åbner «Ring mig op». Udseendet styres af den, der bruger den. */
export function RingMigOpKnap({ style, className, children = "Ring mig op" }: { style?: React.CSSProperties; className?: string; children?: React.ReactNode }) {
  return (
    <button type="button" onClick={aabnRingMigOp} className={className} style={{ cursor: "pointer", ...style }}>
      {children}
    </button>
  );
}

export default function RingMigOpDialog() {
  const [aaben, setAaben] = useState(false);
  const [noegle, setNoegle] = useState(0);
  const lukRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const aabn = () => {
      setNoegle((n) => n + 1);
      setAaben(true);
    };
    window.addEventListener(EVENT, aabn);
    return () => window.removeEventListener(EVENT, aabn);
  }, []);

  useEffect(() => {
    if (!aaben) return;
    lukRef.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAaben(false);
    window.addEventListener("keydown", esc);
    const gammel = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = gammel;
    };
  }, [aaben]);

  if (!aaben) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ringop-titel"
      onClick={(e) => e.target === e.currentTarget && setAaben(false)}
      style={{ position: "fixed", inset: 0, zIndex: 10000, background: "rgba(47,62,70,0.55)", display: "flex", alignItems: "flex-start", justifyContent: "center", overflowY: "auto", padding: "24px 16px" }}
    >
      <div style={{ background: "#F9F8F6", borderRadius: "6px", width: "100%", maxWidth: "460px", padding: "28px 24px 24px", boxShadow: "0 12px 40px rgba(0,0,0,0.25)", position: "relative", marginTop: "4vh" }}>
        <button
          ref={lukRef}
          type="button"
          onClick={() => setAaben(false)}
          aria-label="Luk"
          style={{ position: "absolute", top: "10px", right: "10px", background: "transparent", border: "none", fontSize: "26px", lineHeight: 1, color: "#3d5260", cursor: "pointer", padding: "6px 10px" }}
        >
          ×
        </button>
        <h2 id="ringop-titel" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "24px", color: "#2F3E46", margin: "0 0 8px" }}>
          Ring mig op
        </h2>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", lineHeight: 1.7, color: "#3d5260", margin: "0 0 20px" }}>
          Skriv jeres navn og nummer, så ringer jeg til jer, så hurtigt jeg kan. Det er ikke bindende.
        </p>
        <ContactForm key={noegle} variant="ringop" idPrefix="ringop" />
      </div>
    </div>
  );
}
