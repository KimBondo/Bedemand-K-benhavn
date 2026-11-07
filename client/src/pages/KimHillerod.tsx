import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";
import KimNav from "@/components/KimNav";
import SchemaOrg from "@/components/SchemaOrg";
import KimPortraet from "@/components/KimPortraet";

/**
 * Kim Bondo – Bedemand Hillerød (lokal SEO-landingsside)
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

export default function KimHillerod() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Bedemand Hillerød – Kim Bondo, døgnet rundt"
        description="Personlig bedemand i Hillerød og omegn. Faste priser. Ring til mig på 28 14 60 11."
        url="https://www.bedemandkobenhavn.dk/hillerod/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="both"
        areaServed={["Hillerød", "Skævinge", "Nødebo", "Ny Hammersholt"]}
        pageUrl="https://www.bedemandkobenhavn.dk/hillerod/"
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Områder", url: "https://www.bedemandkobenhavn.dk/omraade/" },
          { name: "Bedemand Hillerød", url: "https://www.bedemandkobenhavn.dk/hillerod/" },
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
          <a href="/" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2, textDecoration: "none" }}>Bedemand Hillerød</a>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Hillerød og Nordsjælland</span>
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
      {/* ── BRØDKRUMMESTI ── */}
      <nav aria-label="breadcrumb" style={{ background: "#F0EDE8", padding: "10px 24px", borderBottom: "1px solid #e0dcd6" }}>
        <ol style={{ display: "flex", alignItems: "center", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#7a8f99", flexWrap: "wrap" }}>
          <li>
            <a href="/" style={{ color: "#3D6B4F", textDecoration: "none" }}>Forsiden</a>
          </li>
          <li style={{ color: "#b0b8bc" }}>›</li>
          <li>
            <a href="/omraade/" style={{ color: "#3D6B4F", textDecoration: "none" }}>Områder</a>
          </li>
          <li style={{ color: "#b0b8bc" }}>›</li>
          <li style={{ color: "#3d4f5a", fontWeight: 600 }}>
            Bedemand Hillerød
          </li>
        </ol>
      </nav>

      <section style={{ background: "#F9F8F6", padding: "64px 24px 56px", textAlign: "center" }}>
        <p style={s.label}>Bedemand i Hillerød</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto 24px" }}>
          Personlig bedemand i Hillerød
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Jeg er selvstændig bedemand og hjælper familier i Hillerød og omegn med en rolig og værdig afsked. Det er mig, I taler med – hele vejen.
        </p>
        <KimPortraet />
        <a href="tel:+4528146011" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 32px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.03em" }}>Ring til mig på 28 14 60 11</a>
      </section>

      <section style={{ background: "#fff", padding: "56px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={s.h2}>Den første samtale</h2>
          <p style={s.body}>
            I behøver ikke have besluttet noget, før vi taler sammen. Vi kan tale i telefonen, jeg kan komme hjem til jer, eller I kan komme på mit kontor i Søborg.
          </p>

          <h2 style={{ ...s.h2, marginTop: "40px" }}>Kirker, kapeller og kirkegårde</h2>
          <p style={s.body}>
            Kirkegårde i området er Skansekirkegården, Hillerød Kirkegård og Nyhuse Kirkegård. Afskeden kan holdes i en kirke, i Skansekapellet eller i Nyhuse Kapel – I vælger selv, hvad der passer jer.
          </p>
          <h3 style={s.h3}>Kirker</h3>
          <ul style={{ margin: 0, paddingLeft: "20px", fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.9, color: "#3d4f5a" }}>
            <li>Hillerød Kirke</li>
            <li>Præstevang Kirke</li>
            <li>Frederiksborg Slotskirke</li>
          </ul>
        </div>
      </section>

      <section style={{ background: "#EEF3EF", padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={s.h2}>Vil I læse mere først?</h2>
          <ul style={{ margin: 0, paddingLeft: "20px", fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 2 }}>
            <li><a href="/hvad-sker-der/" style={s.link}>Hvad sker der, når nogen dør?</a></li>
            <li><a href="/priser/" style={s.link}>Mine priser – og udgifter, der ikke går til mig</a></li>
          </ul>
        </div>
      </section>

      <section id="kontakt" style={{ background: "#F9F8F6", padding: "64px 24px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ ...s.h2, textAlign: "center" }}>Skriv til mig</h2>
          <p style={{ ...s.body, textAlign: "center", marginBottom: "32px" }}>
            Udfyld formularen herunder, så vender jeg tilbage hurtigst muligt.
          </p>
          <ContactForm />
          <p style={{ marginTop: "36px", fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(17px, 2vw, 19px)", fontWeight: 600, color: "#2F3E46", textAlign: "center", lineHeight: 1.6 }}>
            Ring trygt til mig på <a href="tel:+4528146011" style={{ color: "#3D6B4F", fontWeight: 700, textDecoration: "none", borderBottom: "1px solid #3D6B4F", whiteSpace: "nowrap" }}>28 14 60 11</a>
          </p>
        </div>
      </section>

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
