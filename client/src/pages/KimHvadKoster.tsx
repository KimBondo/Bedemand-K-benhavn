import SEO from "@/components/SEO";
import KimNav from "@/components/KimNav";
import SchemaOrg from "@/components/SchemaOrg";

/**
 * Kim Bondo – Hvad koster en begravelse?
 * SEO landing page targeting high-volume search queries.
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

const NAV = (
  <KimNav />
);

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" } as React.CSSProperties,
};


export default function KimHvadKoster() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Hvad koster en begravelse i 2026? – Kim Bondo"
        description="Hvad koster en begravelse eller bisættelse? Se mine priser, hvad der kommer oveni, og hvordan jeg søger begravelseshjælp for jer. Ring til mig på 28 14 60 11."
        url="https://www.bedemandkobenhavn.dk/hvad-koster-en-begravelse/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="both"
        article={{ headline: "Hvad koster en begravelse eller bisættelse?", url: "https://www.bedemandkobenhavn.dk/hvad-koster-en-begravelse/", dateModified: "2026-11-08" }}
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Hvad koster en begravelse?", url: "https://www.bedemandkobenhavn.dk/hvad-koster-en-begravelse/" }
        ]}
      />

      {/* ── HEADER ── */}
      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6", position: "relative" }}>
<style>{`
  @media (max-width: 768px) {
    .mobile-call-btn {
      display: inline-flex !important;
      align-items: center;
      gap: 8px;
      background: #3D6B4F;
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
          <a href="/" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2, textDecoration: "none" }}>Bedemand København og Nordsjælland</a>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Hvad koster en begravelse?</span>
        </div>
        <KimNav />
        {/* ── MOBIL RING-KNAP (kun synlig på mobil) ── */}
        <a
          href="tel:+4528146011"
          style={{
            display: "none",
          }}
          className="mobile-call-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Ring til mig
        </a>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px 56px", textAlign: "center" }}>
        <p style={s.label}>Priser og økonomi 2026</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto 24px" }}>
          Hvad koster en begravelse eller bisættelse?
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#5a7a6a", margin: "-8px auto 24px", letterSpacing: "0.02em" }}>
          Opdateret <time dateTime="2026-11-08">november 2026</time> · Skrevet af <a href="/om-kim/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F" }}>Kim Bondo</a>, bedemand
        </p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "660px", margin: "0 auto", lineHeight: 1.7 }}>
          Prisen afhænger af, hvilken afsked I ønsker. Jeg hjælper jer med at få overblik og gennemgår både min pris og udgifterne til andre, før I beslutter jer.
        </p>
      </section>

      <section style={{ background: "#fff", padding: "56px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={s.h2}>Mine priser</h2>
          <ul style={{ margin: "0 0 20px", paddingLeft: "20px", fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.9, color: "#3d4f5a" }}>
            <li>Afsked uden ceremoni: fast pris 13.550 kr.</li>
            <li>Bisættelse: fra 18.300 kr.</li>
            <li>Begravelse: fra 19.300 kr.</li>
          </ul>
          <p style={{ ...s.body, marginBottom: 0 }}>
            Priserne gælder de beskrevne standardforløb på hverdage. På <a href="/priser/" style={s.link}>prissiden</a> kan I se, hvad pakkerne indeholder, og hvilke tillæg der kan være relevante.
          </p>
        </div>
      </section>

      <section style={{ background: "#F9F8F6", padding: "56px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={s.h2}>Hvad kommer oveni?</h2>
          <p style={s.body}>
            Afhængigt af afskedsformen kan der komme udgifter til kremering, gravsted, gravning eller urnenedsættelse, gravsten, kapelleje og kisteophold. Blomster og avisannonce afhænger af jeres ønsker.
          </p>
          <p style={{ ...s.body, marginBottom: 0 }}>
            Ikke alle udgifter gælder alle afskedsformer. Jeg indhenter de relevante priser og samler dem i et overslag til jer.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "56px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={s.h2}>Kørsel</h2>
          <p style={s.body}>
            Afstanden regnes fra mit kontor i Søborg. En rustvognskørsel koster 1.595 kr., og de første 25 km er med i prisen. Derefter koster det 35 kr. pr. km, kun den ene vej, ad den billigste rute. I hele København og Nordsjælland koster en kørsel højst 2.000 kr. Uden for det område er der intet loft.
          </p>
          <p style={{ ...s.body, marginBottom: 0 }}>
            Pakkerne med ceremoni har tre kørsler. Bliver der brug for færre, trækkes 1.595 kr. fra for hver kørsel, der ikke bliver brugt.
          </p>
        </div>
      </section>

      <section style={{ background: "#F9F8F6", padding: "56px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={s.h2}>Kan vi få begravelseshjælp?</h2>
          <p style={s.body}>
            I 2026 kan voksne få op til 13.550 kr. i offentlig begravelseshjælp. Beløbet afhænger blandt andet af afdødes og en eventuel ægtefælles formue. Var afdøde født før 1. april 1957 og havde ret til dansk sygesikring, er begravelseshjælpen mindst 1.050 kr., uanset formue.
          </p>
          <p style={{ ...s.body, marginBottom: 0 }}>
            Jeg sørger for ansøgningen om begravelseshjælp for jer. Det er Udbetaling Danmark, der afgør, hvor meget I kan få. Derfor viser jeg prisen før støtte og hjælpen særskilt.
          </p>
        </div>
      </section>

      <section style={{ background: "#EEF3EF", padding: "56px 24px 64px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={s.h2}>Vi finder ud af det sammen</h2>
          <p style={{ ...s.body, marginBottom: "28px" }}>
            I behøver ikke kende alle mulighederne, før I ringer. Vi kan tale i telefonen, jeg kan komme hjem til jer, eller I kan komme på mit kontor i Søborg.
          </p>
          <a href="tel:+4528146011" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 32px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.03em" }}>Ring til mig på 28 14 60 11</a>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
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
            color: "rgba(255,255,255,0.82)",
            marginBottom: "16px",
            letterSpacing: "0.03em",
          }}
        >
          Kim Bondo
        </p>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.82)",
            marginBottom: "32px",
            lineHeight: 1.7,
          }}
        >
          Vandtårnsvej 62A, kontor 11, 2860 Søborg
        </p>
        <a
          href="/#kontakt"
          style={{
            display: "inline-block",
            background: "#3D6B4F",
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
            color: "rgba(255,255,255,0.78)",
            marginTop: "16px",
          }}
        >
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, kontor 11, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a
            href="tel:+4528146011"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Tlf.: 28 14 60 11
          </a>
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="mailto:kim@bedemandkobenhavn.dk"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            kim@bedemandkobenhavn.dk
          </a>
          {" "}&nbsp;·&nbsp; CVR.: 45084159
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="/min-sidste-vilje/"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Min Sidste Vilje
          </a>
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="/persondatapolitik/"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Persondatapolitik
          </a>
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="#cookieindstillinger"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Cookieindstillinger
          </a>
        </p>
      </footer>
    </div>
  );
}
