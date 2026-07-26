import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";
import KimNav from "@/components/KimNav";
import SchemaOrg from "@/components/SchemaOrg";

/**
 * Kim Bondo – Bedemand Gentofte (lokal SEO-landingsside)
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

export default function KimGentofte() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Bedemand Gentofte – Kim Bondo, døgnet rundt"
        description="Personlig bedemand i Gentofte. Bisættelse og begravelse med nærvær og gennemsigtige priser. Ring 22 21 14 37 – altid tilgængelig."
        url="https://bedemandkobenhavn.dk/kim-bondo/gentofte"
        image="https://bedemandkobenhavn.dk/manus-storage/kim-beach-solo_609d5ab7.png"
      />
      <SchemaOrg type="both" faqItems={[
        { question: "Hvem er bedemand i Gentofte?", answer: "Jeg er selvstændig bedemand og dækker Gentofte, Hellerup, Charlottenlund og hele Nordsjælland. Ring på 22 21 14 37 – tilgængelig døgnet rundt." },
        { question: "Hvad koster en bisættelse i Gentofte?", answer: "En bisættelse med ceremoni starter fra 17.395 kr. hos mig. Dertil kommer kremering, blomster og eventuelle kapellejeudgifter." },
        { question: "Hvilke kirker bruges i Gentofte?", answer: "Jeg koordinerer med Gentofte Kirke, Hellerup Kirke, Charlottenlund Kirke og øvrige kirker og kapeller i Gentofte Kommune." },
      ]} />

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
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand Gentofte</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Gentofte, Hellerup og omegn</span>
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
      {/* ── BRØDKRUMMESTI ── */}
      <nav aria-label="breadcrumb" style={{ background: "#F0EDE8", padding: "10px 24px", borderBottom: "1px solid #e0dcd6" }}>
        <ol style={{ display: "flex", alignItems: "center", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#7a8f99", flexWrap: "wrap" }}>
          <li>
            <a href="/" style={{ color: "#3D6B4F", textDecoration: "none" }}>Forsiden</a>
          </li>
          <li style={{ color: "#b0b8bc" }}>›</li>
          <li>
            <a href="/kim-bondo" style={{ color: "#3D6B4F", textDecoration: "none" }}>Kim Bondo</a>
          </li>
          <li style={{ color: "#b0b8bc" }}>›</li>
          <li style={{ color: "#3d4f5a", fontWeight: 600 }}>
            Bedemand Gentofte
          </li>
        </ol>
      </nav>


      {/* ── HERO ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px 56px", textAlign: "center" }}>
        <p style={s.label}>Bedemand i Gentofte</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto 24px" }}>
          Personlig bedemand i Gentofte
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          Jeg hjælper familier i Gentofte, Hellerup, Charlottenlund og omegn med at skabe en værdig og rolig afsked — fra første opkald til den sidste hilsen.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a href="#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Kontakt mig</a>
          <a href="/kim-bondo/priser" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>Se priser</a>
        </div>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
      </section>

      {/* ── OM KIM I GENTOFTE ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Lokal og personlig</p>
          <h2 style={s.h2}>Bedemand med kendskab til Gentofte</h2>
          <p style={s.body}>
            Gentofte Kommune — Hellerup, Charlottenlund, Vangede og Dyssegård — er en del af mit primære dækningsområde. Jeg kender de lokale kirker, kapeller og krematorier, og koordinerer direkte med de rette instanser.
          </p>
          <p style={s.body}>
            Som selvstændig bedemand er jeg den person, I taler med fra første kontakt til afskeden er overstået. Ingen mellemled — bare direkte kontakt med mig, Kim Bondo.
          </p>
        </div>
      </section>

      {/* ── YDELSER ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={s.label}>Mine ydelser</p>
          <h2 style={s.h2}>Hvad hjælper jeg med i Gentofte?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { title: "Bisættelse", desc: "Kremering med kirkelig eller borgerlig ceremoni. Koordinering med Gentofte Kirke, Hellerup Kirke og øvrige kirker.", href: "/kim-bondo/bisaettelse" },
              { title: "Begravelse", desc: "Kiste i jord på en af Gentoftes kirkegårde. Jeg koordinerer med kordegn, præst og kirkegård.", href: "/kim-bondo/begravelse" },
              { title: "Afsked uden ceremoni", desc: "En enkel og diskret afsked, direkte til krematoriet. Priser fra 15.500 kr.", href: "/kim-bondo/afsked-uden-ceremoni" },
              { title: "Kirkelig afsked", desc: "Traditionel kirkelig ceremoni med jordpåkastelse, salmer og præst.", href: "/kim-bondo/kirkelig-afsked" },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", padding: "28px 24px", borderRadius: "3px", border: "1px solid #e0dcd6" }}>
                <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ ...s.body, fontSize: "15px", marginBottom: "16px" }}>{item.desc}</p>
                <a href={item.href} style={s.link}>Læs mere →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Spørgsmål og svar</p>
          <h2 style={s.h2}>Spørgsmål om bedemand i Gentofte</h2>
          {[
            { q: "Hvem er bedemand i Gentofte?", a: "Jeg er selvstændig bedemand og dækker Gentofte, Hellerup, Charlottenlund og hele Nordsjælland. Ring på 22 21 14 37 — tilgængelig døgnet rundt." },
            { q: "Hvad koster en bisættelse i Gentofte?", a: "En bisættelse med ceremoni starter fra 17.395 kr. hos mig. Dertil kommer kremering, blomster og eventuelle kapellejeudgifter." },
            { q: "Hvilke kirker bruges i Gentofte?", a: "Jeg koordinerer med Gentofte Kirke, Hellerup Kirke, Charlottenlund Kirke og øvrige kirker og kapeller i Gentofte Kommune." },
            { q: "Dækker Kim også Hellerup og Charlottenlund?", a: "Ja — Hellerup, Charlottenlund, Vangede og Dyssegård er alle en del af mit dækningsområde." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SE OGSÅ ── */}
      <section style={{ background: "#F9F8F6", padding: "56px 32px", textAlign: "center" }}>
        <p style={s.label}>Se også</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Bedemand Helsingør", href: "/kim-bondo/helsingor" },
            { label: "Bedemand Hørsholm", href: "/kim-bondo/horsholm" },
            { label: "Dækningsområde", href: "/kim-bondo/omraade" },
            { label: "Se priser", href: "/kim-bondo/priser" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#fff", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>{link.label}</a>
          ))}
        </div>
      </section>


      {/* ── KONTAKT ── */}
      <section id="kontakt" style={{ background: "#F9F8F6", padding: "80px 32px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>Kontakt Kim</p>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0", textAlign: "center" }}>Skriv til mig</h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px", textAlign: "center", maxWidth: "480px", margin: "0 auto 40px" }}>
            Udfyld formularen herunder, så vender jeg tilbage hurtigst muligt.
          </p>
          <ContactForm />
          <p style={{ marginTop: "24px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F", textAlign: "center" }}>
            eller ring direkte på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
          </p>
        </div>
      </section>

      {/* ── DEL PÅ FACEBOOK ── */}
      <section style={{ background: "#fff", padding: "40px 32px", textAlign: "center", borderTop: "1px solid #e0dcd6" }}>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#5a7a6a", marginBottom: "16px" }}>
          Kender du nogen i Gentofte, der kan have brug for en bedemand? Del denne side.
        </p>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://bedemandkobenhavn.dk/kim-bondo/gentofte")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "#1877F2",
            color: "#fff",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            padding: "12px 28px",
            borderRadius: "3px",
            textDecoration: "none",
            letterSpacing: "0.03em",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          Del på Facebook
        </a>
      </section>



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
            href="mailto:kim@bedemandkobenhavn.dk"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}
          >
            kim@bedemandkobenhavn.dk
          </a>
          {" "}&nbsp;·&nbsp; CVR.: 45084159
        </p>
      </footer>
    </div>
  );
}
