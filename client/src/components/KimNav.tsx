import { useLocation } from "wouter";

/**
 * KimNav – fælles navigationskomponent til alle Kim Bondos sider.
 * Fremhæver det aktuelle menupunkt med grøn farve og en understregning.
 */

const NAV_LINKS = [
  { href: "/kim-bondo", label: "Om Kim", exact: true },
  { href: "/kim-bondo/afskeder", label: "Afskeder" },
  { href: "/kim-bondo/priser", label: "Priser" },
  { href: "/kim-bondo/produkter", label: "Produkter" },
  { href: "/kim-bondo/huskeliste", label: "Huskeliste" },
  { href: "/kim-bondo/begravelseshjaelp", label: "Begravelseshjælp" },
  { href: "/kim-bondo/hvad-koster-en-begravelse", label: "Hvad koster det?" },
  { href: "/kim-bondo/omraade", label: "Alle byer" },
  { href: "/kim-bondo/faq", label: "FAQ" },
];

const BASE_STYLE: React.CSSProperties = {
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: 600,
  fontSize: "clamp(13px, 1.4vw, 15px)",
  textDecoration: "none",
  letterSpacing: "0.02em",
  paddingBottom: "2px",
  transition: "color 0.15s ease",
};

const ACTIVE_STYLE: React.CSSProperties = {
  ...BASE_STYLE,
  color: "#84A98C",
  borderBottom: "2px solid #84A98C",
};

const INACTIVE_STYLE: React.CSSProperties = {
  ...BASE_STYLE,
  color: "#3d5260",
  borderBottom: "2px solid transparent",
};

export default function KimNav() {
  const [location] = useLocation();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
      {NAV_LINKS.map(({ href, label, exact }) => {
        const isActive = exact
          ? location === href
          : location === href || location.startsWith(href + "/") || location.startsWith(href + "?");
        return (
          <a
            key={href}
            href={href}
            style={isActive ? ACTIVE_STYLE : INACTIVE_STYLE}
          >
            {label}
          </a>
        );
      })}
      {/* Kontakt-link (hash-link, aldrig "aktiv") */}
      <a href="/kim-bondo#kontakt" style={INACTIVE_STYLE}>Kontakt</a>
      {/* Telefon */}
      <a
        href="tel:22211437"
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(14px, 1.6vw, 18px)",
          color: "#84A98C",
          textDecoration: "none",
          whiteSpace: "nowrap",
          letterSpacing: "0.03em",
        }}
      >
        Tlf: 22 21 14 37
      </a>
    </div>
  );
}
