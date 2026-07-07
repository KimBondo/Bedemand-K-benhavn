import SEO from "@/components/SEO";

/**
 * Kim Bondo – Dækningsområde
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

const NAV = (
  <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
    <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Om Kim</a>
    <a href="/kim-bondo/afskeder" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Afskeder</a>
    <a href="/kim-bondo/priser" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Priser</a>
          <a href="/kim-bondo/huskeliste" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Huskeliste</a>
          <a href="/kim-bondo/begravelseshjaelp" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Begravelseshjælp</a>
            <a href="/kim-bondo/hvad-koster-en-begravelse" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Hvad koster det?</a>
    <a href="/kim-bondo#kontakt" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Kontakt</a>
    <a href="tel:22211437" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(14px, 1.6vw, 18px)", color: "#84A98C", textDecoration: "none", whiteSpace: "nowrap", letterSpacing: "0.03em" }}>Tlf: 22 21 14 37</a>
  </div>
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
        title="Dækningsområde – Bedemand Kim Bondo, København og Nordsjælland"
        description="Kim Bondo arbejder som bedemand i København og Nordsjælland — herunder Helsingør, Hillerød, Gentofte, Lyngby og hele Storkøbenhavn. Ring på 22 21 14 37."
        url="https://bedemandkobenhavn.dk/kim-bondo/omraade"
      />

      {/* ── HEADER ── */}
      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Dækningsområde</span>
        </div>
        {NAV}
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

      {/* ── CTA ── */}
      <footer style={{ background: "#2F3E46", color: "#fff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "12px" }}>Jeg hjælper jer — uanset hvor i området I bor</p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#b0c4b1", marginBottom: "32px" }}>Ring eller skriv — jeg er tilgængelig hele døgnet.</p>
        <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
          Kontakt mig
        </a>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#84A98C" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
        <p style={{ marginTop: "40px", fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#5a7a6a" }}>
          © {new Date().getFullYear()} Bedemand København ApS · <a href="/kim-bondo/priser" style={{ color: "#5a7a6a", textDecoration: "none" }}>Priser</a> · <a href="/kim-bondo/afskeder" style={{ color: "#5a7a6a", textDecoration: "none" }}>Afskeder</a>
        </p>
      </footer>
    </div>
  );
}
