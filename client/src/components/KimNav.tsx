import { Fragment, useState } from "react";
import { useLocation } from "wouter";

/**
 * KimNav – fælles responsiv navigationskomponent til alle Kim Bondos sider.
 * Desktop: vandret række med aktiv-tilstand (grøn farve + understregning).
 * Mobil: hamburger-knap åbner en lodret dropdown-menu.
 */

const NAV_LINKS = [
  { 
    href: "/priser/", 
    label: "Priser",
    children: [
      { href: "/priser/", label: "Prisliste" },
      { href: "/prisberegner/", label: "Prisberegner" },
      { href: "/hvad-koster-en-begravelse/", label: "Hvad koster det?" },
    ]
  },
  { 
    href: "/afskeder/", 
    label: "Afskeder",
    children: [
      { href: "/afskeder/", label: "Alle afskeder" },
      { href: "/bisaettelse/", label: "Bisættelse" },
      { href: "/begravelse/", label: "Begravelse" },
      { href: "/afsked-uden-ceremoni/", label: "Uden ceremoni" },
      { href: "/askespredning/", label: "Askespredning" },
    ]
  },
  { 
    href: "/hvad-sker-der/", 
    label: "Vejledning",
    children: [
      { href: "/hvad-sker-der/", label: "Hvad sker der, når nogen dør?" },
      { href: "/bisaettelse-nordsjaelland/", label: "Bisættelse i Nordsjælland" },
      { href: "/huskeliste/", label: "Huskeliste" },
      { href: "/min-sidste-vilje/", label: "Min Sidste Vilje" },
      { href: "/faq/", label: "FAQ" },
    ]
  },
  { 
    href: "/nordsjaelland/", 
    label: "Områder",
    children: [
      { href: "/nordsjaelland/", label: "Nordsjælland" },
      { href: "/omraade/", label: "Alle områder" },
      { href: "/helsingor/", label: "Helsingør" },
      { href: "/hornbaek/", label: "Hornbæk" },
      { href: "/alsgaarde/", label: "Ålsgårde" },
      { href: "/humlebaek/", label: "Humlebæk" },
      { href: "/hillerod/", label: "Hillerød" },
      { href: "/horsholm/", label: "Hørsholm" },
      { href: "/lyngby/", label: "Lyngby" },
      { href: "/fredensborg/", label: "Fredensborg" },
      { href: "/rudersdal/", label: "Rudersdal" },
      { href: "/gentofte/", label: "Gentofte" },
    ],
    // København vises som egen kolonne ved siden af Nordsjælland
    koebenhavn: [
      { href: "/frederiksberg/", label: "Frederiksberg" },
      { href: "/amager/", label: "Amager" },
      { href: "/osterbro/", label: "Østerbro" },
      { href: "/norrebro/", label: "Nørrebro" },
      { href: "/vesterbro/", label: "Vesterbro" },
      { href: "/soborg/", label: "Søborg & Gladsaxe" },
    ],
    // Sidste punkt under Områder – vises under begge kolonner og i mobilmenuen
    sidst: { href: "/sjaelland/", label: "Resten af Sjælland" },
  },
  { href: "/produkter/", label: "Produkter" },
  { href: "/om-kim/", label: "Om Kim", exact: true },
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
  fontSize: "clamp(13px, 1.05vw, 15px)",
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
          gap: clamp(10px, 1.1vw, 20px);
          flex-wrap: wrap;
        }
        .has-dropdown:hover .dropdown-menu {
          opacity: 1 !important;
          visibility: visible !important;
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
        {NAV_LINKS.map(({ href, label, exact, hash, children, koebenhavn, sidst }) => (
          <div key={href} style={{ position: "relative" }} className={children ? "has-dropdown" : ""}>
            <a
              href={href}
              style={isActive(href, exact, hash) ? ACTIVE : INACTIVE}
              onClick={hash ? (e) => { e.preventDefault(); goToKontakt(); } : undefined}
            >
              {label}
            </a>
            {children && (
              <div className="dropdown-menu" style={{
                position: "absolute",
                top: "100%",
                left: 0,
                minWidth: "180px",
                background: "#fff",
                border: "1px solid #e0dcd6",
                borderRadius: "4px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                padding: "8px 0",
                opacity: 0,
                visibility: "hidden",
                transition: "opacity 0.15s ease",
                zIndex: 100,
              }}>
                <div style={{ display: "flex" }}>
                  {[children, koebenhavn].filter(Boolean).map((kolonne, i) => (
                    <div key={i} style={i > 0 ? { borderLeft: "1px solid #ede9e4" } : undefined}>
                      {i > 0 && (
                        <div style={{ padding: "10px 16px 4px", fontFamily: "'Open Sans', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a8f99" }}>
                          København
                        </div>
                      )}
                      {kolonne!.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "10px 16px",
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: "14px",
                            color: "#2F3E46",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "#f0f7f3"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
                {sidst && (
                  <a
                    href={sidst.href}
                    style={{
                      display: "block",
                      padding: "10px 16px",
                      marginTop: "4px",
                      borderTop: "1px solid #ede9e4",
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "14px",
                      color: "#2F3E46",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#f0f7f3"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    {sidst.label}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
        <a
          href="tel:+4528146011"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 1.2vw, 18px)",
            color: "#3D6B4F",
            textDecoration: "none",
            whiteSpace: "nowrap",
            letterSpacing: "0.03em",
          }}
        >
          Tlf: 28 14 60 11
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
            {NAV_LINKS.map(({ href, label, exact, hash, sidst }) => (
              <Fragment key={href}>
              <a
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
              {sidst && (
                <a
                  href={sidst.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: isActive(sidst.href) ? 700 : 600,
                    fontSize: "14px",
                    color: isActive(sidst.href) ? "#3D6B4F" : "#3d5260",
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                    padding: "8px 20px 8px 36px",
                    borderBottom: "1px solid #ede9e4",
                    display: "block",
                  }}
                >
                  {sidst.label}
                </a>
              )}
              </Fragment>
            ))}
            <a
              href="tel:+4528146011"
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
              📞 Ring: 28 14 60 11
            </a>
          </div>
        )}
      </div>
    </>
  );
}
