/**
 * CookieConsent – Bedemand København
 *
 * Google Tag Manager indlæses IKKE, før den besøgende aktivt har sagt ja.
 * Uden samtykke sættes der ingen statistikcookies overhovedet.
 *
 * Valget gemmes i localStorage i 12 måneder. Herefter spørges der igen.
 * Footeren linker til #cookieindstillinger, som åbner banneret igen,
 * så samtykket kan trækkes tilbage lige så let, som det blev givet.
 */

import { useEffect, useState } from "react";

const STORAGE_KEY = "bk_cookiesamtykke";
const GTM_ID = "GTM-5N2WMPLQ";
const TWELVE_MONTHS_MS = 365 * 24 * 60 * 60 * 1000;

type Valg = "accepteret" | "afvist";

interface Gemt {
  valg: Valg;
  tid: number;
}

function laesGemt(): Gemt | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const g = JSON.parse(raw) as Gemt;
    if (g?.valg !== "accepteret" && g?.valg !== "afvist") return null;
    if (typeof g.tid !== "number" || Date.now() - g.tid > TWELVE_MONTHS_MS) return null;
    return g;
  } catch {
    return null;
  }
}

function gem(valg: Valg) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ valg, tid: Date.now() }));
  } catch {
    /* privat browsing o.l. — så spørger vi bare igen næste gang */
  }
}

/** Indlæser Google Tag Manager. Kaldes kun efter et aktivt ja. */
function indlaesGTM() {
  if (typeof window === "undefined") return;
  if (document.getElementById("gtm-script")) return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.id = "gtm-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

/** Rydder de statistikcookies Google måtte have sat tidligere. */
function sletStatistikCookies() {
  if (typeof document === "undefined") return;
  const navne = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid" || n.startsWith("_gat"));
  const vaert = window.location.hostname;
  const domaener = [vaert, "." + vaert, "." + vaert.replace(/^www\./, "")];
  for (const navn of navne) {
    for (const d of domaener) {
      document.cookie = `${navn}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
    }
    document.cookie = `${navn}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

export default function CookieConsent() {
  // Starter altid som false, så første klient-render matcher SSR-HTML'en.
  const [synlig, setSynlig] = useState(false);

  useEffect(() => {
    const gemt = laesGemt();
    if (gemt?.valg === "accepteret") indlaesGTM();
    if (!gemt) setSynlig(true);

    const aabnVedHash = () => {
      if (window.location.hash === "#cookieindstillinger") setSynlig(true);
    };
    aabnVedHash();
    window.addEventListener("hashchange", aabnVedHash);
    return () => window.removeEventListener("hashchange", aabnVedHash);
  }, []);

  const vaelg = (valg: Valg) => {
    gem(valg);
    if (valg === "accepteret") indlaesGTM();
    else sletStatistikCookies();
    setSynlig(false);
    if (window.location.hash === "#cookieindstillinger") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  if (!synlig) return null;

  const knapBase: React.CSSProperties = {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    fontSize: "15px",
    padding: "11px 26px",
    borderRadius: "3px",
    letterSpacing: "0.04em",
    cursor: "pointer",
    whiteSpace: "nowrap",
    flex: "1 1 auto",
  };

  return (
    <div
      role="dialog"
      aria-label="Cookies"
      aria-live="polite"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: "#2F3E46",
        color: "#ffffff",
        padding: "16px 24px",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.18)",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.85)",
            margin: 0,
            flex: "1 1 320px",
          }}
        >
          Jeg bruger cookies til statistik.{" "}
          <a
            href="/persondatapolitik/"
            style={{ color: "#b0c4b1", textDecoration: "underline" }}
          >
            Persondatapolitik
          </a>
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flex: "1 1 300px",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => vaelg("afvist")}
            style={{
              ...knapBase,
              background: "transparent",
              color: "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.55)",
            }}
          >
            Afvis
          </button>
          <button
            type="button"
            onClick={() => vaelg("accepteret")}
            style={{
              ...knapBase,
              background: "#3D6B4F",
              color: "#ffffff",
              border: "1.5px solid #3D6B4F",
            }}
          >
            Tillad cookies
          </button>
        </div>
      </div>
    </div>
  );
}
