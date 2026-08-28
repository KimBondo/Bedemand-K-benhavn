import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Askespredning
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

export default function KimAskespredning() {
  return (
    <div
      role="main"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        background: "#F9F8F6",
        color: "#2F3E46",
        margin: 0,
        padding: 0,
      }}
    >
      <SEO
        title="Askespredning – Bedemand Kim Bondo, København"
        description="Askespredning til søs eller på land i Danmark. Kim Bondo hjælper med tilladelse og ceremoni. Ring 22 21 14 37 – døgnet rundt."
        url="https://www.bedemandkobenhavn.dk/askespredning/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />

      <SchemaOrg
        type="both"
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Askespredning", url: "https://www.bedemandkobenhavn.dk/askespredning/" }
        ]}
        faqItems={[
          { question: "Er askespredning tilladt i Danmark?", answer: "Ja, askespredning over havet er tilladt i Danmark, men kræver at afdøde har udtrykt ønske om det. Hvis der ikke foreligger en skriftlig erklæring, kan pårørende udfylde en tro og love-erklæring. Jeg hjælper gerne med det." },
          { question: "Kan askespredning kombineres med en ceremoni?", answer: "Ja. Askespredning kan kombineres med en kirkelig eller borgerlig bisættelse inden kremeringen. Nogle vælger at lade selve spredningen være en lille ceremoni for de nærmeste." },
          { question: "Kan man sprede asken selv?", answer: "Ja. Pårørende afhenter typisk urnen ved krematoriet og forestår selv spredningen. Jeg kan koordinere det på jeres vegne, hvis I foretrækker det." },
          { question: "Hvad sker der med urnen efter spredningen?", answer: "Urnen må ikke efterlades i havet. Den tages med tilbage og bortskaffes. Jeg hjælper med dette, hvis det ønskes." },
          { question: "Kan man sprede asken i en skov?", answer: "Nej, reglerne i Danmark tillader kun askespredning over åbent hav eller større fjorde og bugter. Det er ikke tilladt at sprede asken på land, i skove, søer eller vandløb." },
        ]}
        pageUrl="https://www.bedemandkobenhavn.dk/askespredning"
      />
      {/* ── HEADER ── */}
      <header
        style={{
          background: "#F9F8F6",
          padding: "20px 24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          gap: "8px",
          borderBottom: "1px solid #e0dcd6",
        }}
      >
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
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>
            Kim Bondo – Askespredning
          </span>
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
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase", marginBottom: "16px" }}>
          Askespredning
        </p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, marginBottom: "24px", maxWidth: "700px", margin: "0 auto 24px" }}>
          Askespredning over havet – en fri og naturlig afsked
        </h1>
        <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", color: "#5a7a6a", lineHeight: 1.7, maxWidth: "620px", margin: "0 auto 40px" }}>
          For dem der ønsker en afsked i forbundenhed med naturen og havet. Jeg hjælper med alt det praktiske – regler, dokumentation og koordinering – så I kan fokusere på at sige farvel.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a href="/#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.05em" }}>
            Kontakt mig
          </a>
          <a href="/priser/" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>
            Se priser
          </a>
        </div>
        <p style={{ fontSize: "14px", color: "#9aacb4", marginTop: "16px" }}>
          eller ring på{" "}
          <a href="tel:22211437" style={{ color: "#3D6B4F", fontWeight: 600, textDecoration: "none" }}>22 21 14 37</a>
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── HVAD ER ASKESPREDNING ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 30px)", color: "#2F3E46", marginBottom: "20px", lineHeight: 1.3 }}>
          Hvad er askespredning?
        </h2>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
          Askespredning er en afskedsform, hvor afdødes aske spredes over havet i stedet for at blive stedfæstet på en kirkegård. Det er en smuk og symbolsk afsked, der giver en følelse af frihed og forbundenhed med naturen.
        </p>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
          Askespredning foregår som en forlængelse af en <a href="/bisaettelse/" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>bisættelse</a>: afdøde kremeres, asken samles i en urne, og asken spredes derefter over åbent hav. Det kan ske med eller uden en forudgående ceremoni.
        </p>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8 }}>
          Mange familier vælger selve spredningen som en lille, intim ceremoni for de nærmeste – ude på havet, i det åbne og frie.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── REGLER ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 30px)", color: "#2F3E46", marginBottom: "20px", lineHeight: 1.3 }}>
          Regler for askespredning i Danmark
        </h2>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
          Askespredning over havet er tilladt i Danmark, men der er regler, der skal følges. Jeg hjælper jer med at sikre, at alt foregår korrekt.
        </p>
        <div style={{ display: "grid", gap: "20px" }}>
          {[
            { title: "Afdødes ønske", text: "Afdøde skal have udtrykt ønske om askespredning – fx i et testamente eller et brev. Hvis der ikke foreligger en skriftlig erklæring, kan pårørende udfylde en tro og love-erklæring. Jeg hjælper med at udarbejde den." },
            { title: "Åbent hav", text: "Asken skal spredes over åbent hav eller større fjorde og bugter – ikke i søer eller vandløb. Spredningen bør ske langt nok ude til, at asken ikke driver tilbage til land." },
            { title: "Urnen må ikke efterlades", text: "Det er ikke tilladt at efterlade urnen i havet. Asken spredes, og urnen tages med tilbage og bortskaffes." },
            { title: "Diskret og respektfuld", text: "Askespredningen skal foregå diskret og uden at tiltrække unødig opmærksomhed." },
          ].map((rule, i) => (
            <div key={i} style={{ background: "#f0f4f2", borderRadius: "4px", padding: "24px 28px" }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(15px, 1.7vw, 18px)", color: "#2F3E46", marginBottom: "8px" }}>{rule.title}</h3>
              <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#4a6270", lineHeight: 1.8 }}>{rule.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── FORLØBET ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 30px)", color: "#2F3E46", marginBottom: "32px", lineHeight: 1.3 }}>
          Sådan foregår askespredning
        </h2>
        {[
          { num: "1", title: "Første kontakt og dokumentation", text: "Vi taler om jeres ønsker og sikrer, at den nødvendige dokumentation er på plads. Jeg hjælper med tro og love-erklæringen, hvis det er nødvendigt." },
          { num: "2", title: "Bisættelse med eller uden ceremoni", text: "Afdøde kremeres efter en ceremoni eller direkte uden ceremoni. Asken samles i en urne." },
          { num: "3", title: "Askespredningen", text: "Pårørende afhenter typisk urnen ved krematoriet og forestår selv spredningen. I kan også lade mig koordinere det på jeres vegne. Spredningen kan være en lille, intim ceremoni for de nærmeste." },
        ].map((step) => (
          <div key={step.num} style={{ display: "flex", gap: "24px", marginBottom: "40px", alignItems: "flex-start" }}>
            <div style={{ minWidth: "44px", height: "44px", borderRadius: "50 %", background: "#3D6B4F", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "18px", flexShrink: 0 }}>
              {step.num}
            </div>
            <div>
              <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(16px, 1.8vw, 20px)", color: "#2F3E46", marginBottom: "8px" }}>{step.title}</h3>
              <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#4a6270", lineHeight: 1.8 }}>{step.text}</p>
            </div>
          </div>
        ))}
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── PRIS ── */}
      <section style={{ background: "#f0f4f2", padding: "80px 32px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 30px)", color: "#2F3E46", marginBottom: "20px" }}>
          Hvad koster askespredning?
        </h2>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, maxWidth: "620px", margin: "0 auto 32px" }}>
          Prisen afhænger af, om der ønskes en ceremoni inden kremeringen, og hvilken kiste og urne I vælger. En afsked uden ceremoni med efterfølgende askespredning starter fra <strong>13.550 kr.</strong> Kremering og gravsted kommer oveni – jeg hjælper med at indhente tilbud og holde overblikket.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a href="/priser/" style={{ display: "inline-block", background: "#3D6B4F", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.05em" }}>
            Se den fulde prisliste
          </a>
          <a href="/#kontakt" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>
            Kontakt mig
          </a>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── FAQ ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 30px)", color: "#2F3E46", marginBottom: "40px", lineHeight: 1.3 }}>
          Ofte stillede spørgsmål om askespredning
        </h2>
        {[
          { q: "Er askespredning tilladt i Danmark?", a: "Ja, askespredning over havet er tilladt i Danmark, men kræver at afdøde har udtrykt ønske om det. Hvis der ikke foreligger en skriftlig erklæring, kan pårørende udfylde en tro og love-erklæring. Jeg hjælper gerne med det.", link: null, linkText: null },
          { q: "Kan askespredning kombineres med en ceremoni?", a: "Ja. Askespredning kan kombineres med en kirkelig eller borgerlig bisættelse inden kremeringen. Nogle vælger at lade selve spredningen være en lille ceremoni for de nærmeste.", link: "/bisaettelse/", linkText: "Læs mere om bisættelse" },
          { q: "Kan man sprede asken selv?", a: "Ja. Pårørende afhenter typisk urnen ved krematoriet og forestår selv spredningen. Jeg kan koordinere det på jeres vegne, hvis I foretrækker det.", link: null, linkText: null },
          { q: "Hvad sker der med urnen efter spredningen?", a: "Urnen må ikke efterlades i havet. Den tages med tilbage og bortskaffes. Jeg hjælper med dette, hvis det ønskes.", link: null, linkText: null },
          { q: "Kan man sprede asken i en skov?", a: "Nej, reglerne i Danmark tillader kun askespredning over åbent hav eller større fjorde og bugter. Det er ikke tilladt at sprede asken på land, i skove, søer eller vandløb.", link: null, linkText: null },
        ].map((item, i) => (
          <div key={i} style={{ borderTop: "1px solid #e0dcd6", paddingTop: "28px", paddingBottom: "28px" }}>
            <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(15px, 1.7vw, 18px)", color: "#2F3E46", marginBottom: "12px", lineHeight: 1.4 }}>{item.q}</h3>
            <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#4a6270", lineHeight: 1.8 }}>
              {item.a}{" "}
              {item.link && <a href={item.link} style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>{item.linkText}</a>}
            </p>
          </div>
        ))}
      </section>

      {/* ── FOOTER / RELATEREDE ── */}
      <section style={{ background: "#2F3E46", padding: "64px 32px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.82)", textTransform: "uppercase", marginBottom: "24px" }}>
          Andre afskeder
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginBottom: "48px" }}>
          {[
            { label: "Bisættelse", href: "/bisaettelse/" },
            { label: "Begravelse", href: "/begravelse/" },
            { label: "Afsked uden ceremoni", href: "/afsked-uden-ceremoni/" },
            { label: "Se alle afskeder", href: "/afskeder/" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="/#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(15px, 1.8vw, 18px)", padding: "18px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.05em" }}>
          Kontakt mig
        </a>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.78)", marginTop: "16px" }}>
          eller ring på{" "}
          <a href="tel:22211437" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none" }}>22 21 14 37</a>
        </p>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.78)", marginTop: "40px" }}>
          © {new Date().getFullYear()} Bedemand København ApS · Kim Bondo · Vandtårnsvej 62A, 2860 Søborg
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
      </section>
    </div>
  );
}
