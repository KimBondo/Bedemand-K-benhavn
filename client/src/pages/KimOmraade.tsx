import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Dækningsområde
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

const NAV = (
  <KimNav />
);

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" },
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" },
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" },
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#84A98C", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#84A98C", textDecoration: "none", borderBottom: "1px solid #84A98C", paddingBottom: "1px" },
};

const KOBENHAVN = [
  "København K", "København N", "København NV", "København S", "København SV",
  "København V", "København Ø", "Frederiksberg", "Gentofte", "Gladsaxe",
  "Herlev", "Lyngby", "Ballerup", "Rødovre", "Brøndby",
  "Vallensbæk", "Albertslund", "Glostrup", "Hvidovre", "Ishøj",
];

const NORDSJAELLAND = [
  "Helsingør", "Hellerup", "Charlottenlund", "Klampenborg", "Skodsborg",
  "Vedbæk", "Rungsted", "Hørsholm", "Kokkedal", "Humlebæk",
  "Fredensborg", "Hillerød", "Allerød", "Birkerød", "Holte",
  "Virum", "Nærum", "Farum", "Værløse", "Bagsværd",
];

export default function KimOmraade() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Dækningsområde – Bedemand Kim Bondo"
        description="Kim Bondo dækker København og Nordsjælland – Helsingør, Hillerød, Gentofte, Lyngby og hele Storkøbenhavn. Ring 22 21 14 37 – døgnet rundt."
        url="https://bedemandkobenhavn.dk/kim-bondo/omraade"
        image="https://bedemandkbh-8wuvn9as.manus.space/manus-storage/kim-beach-solo_609d5ab7.png"
      />

      {/* ── HEADER ── */}
      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6", position: "relative" }}>
<style>{`
  @media (max-width: 768px) {
    .mobile-call-btn {
      display: inline-flex !important;
      align-items: center;
      gap: 8px;
      background: #84A98C;
      color: #fff;
      font-family: 'Open Sans', sans-serif;
      font-weight: 700;
      font-size: 15px;
      padding: 10px 20px;
      border-radius: 3px;
      text-decoration: none;
      letter-spacing: 0.04em;
      white-space: nowrap;
    }
  }
`}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Dækningsområde</span>
        </div>
        <KimNav />
        {/* ── MOBIL RING-KNAP (kun synlig på mobil) ── */}
        <a
          href="tel:22211437"
          style={{
            display: "none",
          }}
          className="mobile-call-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Ring op
        </a>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px 56px", textAlign: "center" }}>
        <p style={s.label}>Dækningsområde</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "760px", margin: "0 auto 24px" }}>
          Bedemand i København og Nordsjælland
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          Jeg hjælper familier i hele Storkøbenhavn og Nordsjælland. Er du i tvivl om, om jeg dækker dit område — ring bare.
        </p>
        <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
          Kontakt mig
        </a>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#84A98C" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
      </section>

      {/* ── OMRÅDER ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={s.label}>Byer og områder</p>
          <h2 style={s.h2}>Hvor arbejder jeg?</h2>
          <p style={s.body}>
            Jeg er bedemand i København og Nordsjælland og dækker hele Storkøbenhavn samt kommunerne langs kysten og ind i landet mod nord. Nedenfor er en oversigt over de byer og områder, jeg typisk arbejder i.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", marginTop: "40px" }}>
            <div>
              <h3 style={s.h3}>København og omegn</h3>
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                {KOBENHAVN.map((by) => (
                  <li key={by} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#3d4f5a", lineHeight: 1.8 }}>{by}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={s.h3}>Nordsjælland</h3>
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                {NORDSJAELLAND.map((by) => (
                  <li key={by} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#3d4f5a", lineHeight: 1.8 }}>{by}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ background: "#F9F8F6", padding: "32px", borderRadius: "3px", border: "1px solid #e0dcd6", marginTop: "48px" }}>
            <h3 style={{ ...s.h3, fontSize: "18px" }}>Ikke sikker på om jeg dækker dit område?</h3>
            <p style={{ ...s.body, marginBottom: "16px" }}>
              Ring til mig på <a href="tel:22211437" style={s.link}>22 21 14 37</a> — jeg finder altid en løsning. Befinder afdøde sig uden for mit primære område, kan vi i mange tilfælde stadig hjælpe med transport og koordinering.
            </p>
            <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "15px", padding: "12px 28px", borderRadius: "3px", textDecoration: "none" }}>
              Kontakt mig
            </a>
          </div>
        </div>
      </section>

      {/* ── OM KIM ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Om Kim Bondo</p>
          <h2 style={s.h2}>Lokal og personlig bedemand</h2>
          <p style={s.body}>
            Jeg er selvstændig bedemand og kender København og Nordsjælland godt — de lokale kirker, kapeller, krematorier og kirkegårde. Det betyder, at jeg kan rådgive jer om de praktiske muligheder i jeres område og koordinere direkte med de rette instanser.
          </p>
          <p style={s.body}>
            Som selvstændig bedemand er jeg den person, I taler med fra første kontakt til afskeden er overstået. Ingen mellemled, ingen omstilling — bare direkte kontakt med mig.
          </p>
          <a href="/kim-bondo" style={s.link}>Læs mere om Kim Bondo →</a>
        </div>
      </section>

      {/* ── BYSIDER ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={s.label}>Læs mere om dit område</p>
          <h2 style={{ ...s.h2, textAlign: "center" }}>Bedemand i din by</h2>
          <p style={{ ...s.body, maxWidth: "580px", margin: "0 auto 40px", textAlign: "center" }}>
            Jeg har skrevet mere om, hvad jeg hjælper med i de største byer i mit område. Vælg din by herunder.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            {[
              { label: "Bedemand Helsingør", href: "/kim-bondo/helsingor" },
              { label: "Bedemand Hørsholm", href: "/kim-bondo/horsholm" },
              { label: "Bedemand Gentofte", href: "/kim-bondo/gentofte" },
              { label: "Bedemand Lyngby", href: "/kim-bondo/lyngby" },
              { label: "Bedemand Hillerød", href: "/kim-bondo/hillerod" },
              { label: "Bedemand København", href: "/kim-bondo/kobenhavn" },
              { label: "Bedemand Nordsjælland", href: "/kim-bondo/nordsjaelland" },
              { label: "Bedemand Frederiksberg", href: "/kim-bondo/frederiksberg" },
              { label: "Bedemand Amager", href: "/kim-bondo/amager" },
              { label: "Bedemand Østerbro", href: "/kim-bondo/osterbro" },
              { label: "Bedemand Nørrebro", href: "/kim-bondo/norrebro" },
              { label: "Bedemand Vesterbro", href: "/kim-bondo/vesterbro" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#F9F8F6", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "16px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#2F3E46",
          color: "#ffffff",
          textAlign: "center",
          padding: "80px 32px",
        }}
      >
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "clamp(18px, 2.5vw, 26px)",
            marginBottom: "16px",
            letterSpacing: "0.02em",
          }}
        >
          Bedemand København og Nordsjælland
        </p>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 1.6vw, 18px)",
            color: "rgba(255,255,255,0.70)",
            marginBottom: "16px",
            letterSpacing: "0.03em",
          }}
        >
          Kim Bondo
        </p>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "32px",
            lineHeight: 1.7,
          }}
        >
          Vandtårnsvej 62A, 2860 Søborg
        </p>
        <a
          href="/kim-bondo#kontakt"
          style={{
            display: "inline-block",
            background: "#84A98C",
            color: "#ffffff",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(15px, 1.8vw, 18px)",
            padding: "18px 40px",
            borderRadius: "3px",
            textDecoration: "none",
            letterSpacing: "0.05em",
            marginBottom: "48px",
          }}
        >
          Kontakt mig
        </a>
        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.35)",
            marginTop: "16px",
          }}
        >
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a
            href="tel:22211437"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}
          >
            Tlf.: 22 21 14 37
          </a>
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="mailto:kontakt@bedemandkøbenhavn.dk"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}
          >
            kontakt@bedemandkøbenhavn.dk
          </a>
          {" "}&nbsp;·&nbsp; CVR.: 45084159
        </p>
      </footer>
    </div>
  );
}
