import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Begravelseshjælp
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

const NAV = (
  <KimNav />
);

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" },
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" },
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" },
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" },
};

export default function KimBegravelseshjaelp() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Begravelseshjælp – søg tilskud, Kim Bondo"
        description="Få hjælp til at søge begravelseshjælp fra det offentlige. Tilskud fra 1.050–13.550 kr. Kim Bondo guider jer igennem ansøgningen. Ring 22 21 14 37."
        url="https://www.bedemandkobenhavn.dk/begravelseshjaelp/"
        image="/images/kim-beach-solo_609d5ab7.webp"
      />

      <SchemaOrg
        type="both"
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Begravelseshjælp", url: "https://www.bedemandkobenhavn.dk/begravelseshjaelp/" }
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
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Begravelseshjælp</span>
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
        <p style={s.label}>Økonomi og støtte</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "760px", margin: "0 auto 24px" }}>
          Begravelseshjælp — hvad kan I søge?
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          En begravelse eller bisættelse koster penge — og mange ved ikke, at der kan søges offentlig støtte. Jeg hjælper med ansøgningen som en del af mit arbejde.
        </p>
        <a href="/#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
          Kontakt mig
        </a>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
      </section>

      {/* ── SATSER ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Satser 2026</p>
          <h2 style={s.h2}>Hvad kan man få i begravelseshjælp?</h2>
          <p style={s.body}>
            Begravelseshjælpen fra det offentlige afhænger af afdødes formue. I 2026 er satserne:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {[
              { title: "Maksimalt tilskud", amount: "13.550 kr.", note: "Afhænger af afdødes formue" },
              { title: "Minimumstilskud", amount: "1.050 kr.", note: "Alle berettigede modtager mindst dette" },
              { title: "Sygeforsikring 'danmark'", amount: "Op til 1.400 kr.", note: "Gruppe 1 og 2 — tjek dit medlemskab" },
            ].map((item) => (
              <div key={item.title} style={{ background: "#F9F8F6", padding: "28px 24px", borderRadius: "3px", border: "1px solid #e0dcd6", textAlign: "center" }}>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", color: "#3D6B4F", textTransform: "uppercase", marginBottom: "8px" }}>{item.title}</p>
                <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "28px", color: "#2F3E46", marginBottom: "8px" }}>{item.amount}</p>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#5a7a6a", marginBottom: 0 }}>{item.note}</p>
              </div>
            ))}
          </div>
          <p style={s.body}>
            Derudover har enkelte fagforeninger fortsat ordninger med begravelseshjælp. Afdødes fagforening kan oplyse om dette — jeg hjælper gerne med at undersøge det.
          </p>
        </div>
      </section>

      {/* ── HVEM KAN SØGE ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Betingelser</p>
          <h2 style={s.h2}>Hvem kan søge begravelseshjælp?</h2>
          <p style={s.body}>
            Alle afdøde, der er omfattet af dansk sygesikring, kan have ret til begravelseshjælp. For afdøde født før 1. april 1957 udbetales hjælpen uanset formue. For øvrige afhænger tilskuddet af afdødes formue på tidspunktet for dødsfaldet.
          </p>
          <p style={s.body}>
            Begravelseshjælpen søges via Udbetaling Danmark. Jeg hjælper med ansøgningen som en del af mit arbejde, så I ikke selv skal stå med det i en svær tid.
          </p>

          <div style={{ background: "#fff", padding: "32px", borderRadius: "3px", border: "1px solid #e0dcd6", marginTop: "16px" }}>
            <h3 style={{ ...s.h3, fontSize: "18px" }}>Hvad hjælper Kim med?</h3>
            <ul style={{ paddingLeft: "24px", marginBottom: 0 }}>
              {[
                "Ansøgning om offentlig begravelseshjælp via Udbetaling Danmark",
                "Ansøgning om tilskud fra Sygeforsikring 'danmark' (gruppe 1 og 2)",
                "Undersøgelse af eventuel fagforeningshjælp",
                "Overblik over alle udgifter og mulige tilskud på forhånd",
              ].map((item) => (
                <li key={item} style={{ ...s.body, marginBottom: "10px" }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Ofte stillede spørgsmål</p>
          <h2 style={s.h2}>Spørgsmål om begravelseshjælp</h2>
          {[
            { q: "Søger jeg selv, eller hjælper Kim med det?", a: "Jeg hjælper med ansøgningen som en del af mit arbejde. I behøver ikke selv stå med det." },
            { q: "Hvornår udbetales begravelseshjælpen?", a: "Begravelseshjælpen udbetales typisk direkte til den person, der har bestilt og betalt for begravelsen, efter at ansøgningen er behandlet af Udbetaling Danmark." },
            { q: "Hvad sker der, hvis afdøde havde en stor formue?", a: "Begravelseshjælpen reduceres eller bortfalder, hvis afdødes formue overstiger et vist beløb. Minimumstilskuddet på 1.050 kr. udbetales dog altid, uanset formue." },
            { q: "Kan man søge begravelseshjælp, hvis afdøde var selvstændig?", a: "Ja, det afgørende er, at afdøde var omfattet af dansk sygesikring — ikke om vedkommende var lønmodtager eller selvstændig." },
            { q: "Er der andre tilskud end det offentlige?", a: "Ja. Er afdøde eller den efterlevende ægtefælle/samlever medlem af Sygeforsikring 'danmark' gruppe 1 eller 2, kan der søges om op til 1.400 kr. Enkelte fagforeninger har også begravelseshjælp." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

     {/* ── LINKS ── */}
     <section style={{ background: "#F9F8F6", padding: "64px 32px", textAlign: "center" }}>
       <p style={s.label}>Relaterede sider</p>
        {/* ── FREMHÆVET INTERN LINK TIL GUIDE ── */}
        <div style={{ maxWidth: "760px", margin: "0 auto 32px", background: "#fff", border: "1px solid #e0dcd6", borderLeft: "4px solid #3D6B4F", borderRadius: "3px", padding: "24px 28px", textAlign: "left" }}>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.10em", color: "#3D6B4F", textTransform: "uppercase", marginBottom: "8px" }}>Læs videre</p>
          <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(17px, 2vw, 20px)", color: "#2F3E46", marginBottom: "10px" }}>
            Hvad koster en begravelse reelt — inkl. kremering og gravsted?
          </p>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#3d5260", lineHeight: 1.75, marginBottom: "16px" }}>
            Begravelseshjælpen dækker en del af udgifterne — men hvad er de samlede udgifter? Se min komplette guide med officielle 2026-takster for kremering, gravsted, kapelleje og et realistisk priseksempel.
          </p>
          <a href="/hvad-koster-en-begravelse/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px" }}>
            Se den komplette prisguide →
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Se priser", href: "/priser/" },
            { label: "Huskeliste ved dødsfald", href: "/huskeliste/" },
            { label: "Se alle afskeder", href: "/afskeder/" },
            { label: "Hvad koster det reelt?", href: "/hvad-koster-en-begravelse/" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#fff", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>
              {link.label}
            </a>
          ))}
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
          Vandtårnsvej 62A, 2860 Søborg
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
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a
            href="tel:22211437"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Tlf.: 22 21 14 37
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
