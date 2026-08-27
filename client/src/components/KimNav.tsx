import { useState } from "react";
import { useLocation } from "wouter";

/**
 * KimNav – fælles responsiv navigationskomponent til alle Kim Bondos sider.
 * Desktop: vandret række med aktiv-tilstand (grøn farve + understregning).
 * Mobil: hamburger-knap åbner en lodret dropdown-menu.
 */

const NAV_LINKS = [
  { href: "/priser", label: "Priser" },
  { href: "/afskeder", label: "Afskeder" },
  { href: "/produkter", label: "Produkter" },
  { href: "/huskeliste", label: "Huskeliste" },
  { href: "/omraade", label: "Områder" },
  { href: "/faq", label: "FAQ" },
  { href: "/om-kim", label: "Om Kim", exact: true },
  { href: "/#kontakt", label: "Kontakt", exact: false, hash: true },
];

/**
 * Kontakt-punktet: har den aktuelle side sin egen kontaktsektion, ruller vi
 * derhen i stedet for at sende folk væk til forsiden.
 */
function goToKontakt() {
  const lokal = typeof document !== "undefined" ? document.getElementById("kontakt") : null;
  if (lokal) {
    lokal.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof history !== "undefined") history.replaceState(null, "", "#kontakt");
  } else {
    window.location.href = "/#kontakt";
  }
}

const BASE: React.CSSProperties = {
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: 600,
  fontSize: "clamp(13px, 1.4vw, 15px)",
  textDecoration: "none",
  letterSpacing: "0.02em",
  paddingBottom: "2px",
  transition: "color 0.15s ease",
  whiteSpace: "nowrap",
};

const ACTIVE: React.CSSProperties = {
  ...BASE,
  color: "#3D6B4F",
  borderBottom: "2px solid #3D6B4F",
};

const INACTIVE: React.CSSProperties = {
  ...BASE,
  color: "#3d5260",
  borderBottom: "2px solid transparent",
};

export default function KimNav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  function isActive(href: string, exact?: boolean, hash?: boolean) {
    if (hash) return false;
    if (exact) return location === href;
    return location === href || location.startsWith(href + "/") || location.startsWith(href + "?");
  }

  return (
    <>
      <style>{`
        .kimnav-desktop {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .kimnav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: #3d5260;
        }
        .kimnav-mobile-menu {
          display: none;
        }
        @media (max-width: 900px) {
          .kimnav-desktop {
            display: none !important;
          }
          .kimnav-hamburger {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .kimnav-mobile-menu {
            display: block;
          }
        }
      `}</style>

      {/* ── DESKTOP NAV ── */}
      <nav className="kimnav-desktop" aria-label="Kim Bondo navigation">
        {NAV_LINKS.map(({ href, label, exact, hash }) => (
          <a
            key={href}
            href={href}
            style={isActive(href, exact, hash) ? ACTIVE : INACTIVE}
            onClick={hash ? (e) => { e.preventDefault(); goToKontakt(); } : undefined}
          >
            {label}
          </a>
        ))}
        <a
          href="tel:22211437"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 1.6vw, 18px)",
            color: "#3D6B4F",
            textDecoration: "none",
            whiteSpace: "nowrap",
            letterSpacing: "0.03em",
          }}
        >
          Tlf: 22 21 14 37
        </a>
      </nav>

      {/* ── MOBILE HAMBURGER ── */}
      <div className="kimnav-mobile-menu" style={{ position: "relative" }}>
        <button
          className="kimnav-hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Luk menu" : "Åbn menu"}
          aria-expanded={open}
        >
          {open ? (
            /* X icon */
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {open && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              left: "auto",
              minWidth: "220px",
              background: "#F9F8F6",
              border: "1px solid #e0dcd6",
              borderRadius: "4px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
              zIndex: 200,
              padding: "8px 0 12px",
              display: "flex",
              flexDirection: "column",
              gap: "0px",
            }}
          >
            {NAV_LINKS.map(({ href, label, exact, hash }) => (
              <a
                key={href}
                href={href}
                onClick={hash ? (e) => { e.preventDefault(); setOpen(false); goToKontakt(); } : () => setOpen(false)}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: isActive(href, exact, hash) ? 700 : 600,
                  fontSize: "15px",
                  color: isActive(href, exact, hash) ? "#3D6B4F" : "#3d5260",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  padding: "10px 20px",
                  borderBottom: "1px solid #ede9e4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {label}
                {isActive(href, exact, hash) && (
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3D6B4F", flexShrink: 0 }} />
                )}
              </a>
            ))}
            <a
              href="tel:22211437"
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#3D6B4F",
                textDecoration: "none",
                letterSpacing: "0.03em",
                padding: "12px 20px 4px",
                display: "block",
              }}
            >
              📞 Ring: 22 21 14 37
            </a>
          </div>
        )}
      </div>
    </>
  );
}
