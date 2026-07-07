import SEO from "@/components/SEO";

/**
 * Kim Bondo – Begravelseshjælp
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

export default function KimBegravelseshjaelp() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Begravelseshjælp 2026 – Bedemand Kim Bondo, København og Nordsjælland"
        description="Hvad er begravelseshjælp, hvem kan søge, og hvad er satserne i 2026? Kim Bondo hjælper med ansøgningen som en del af sit arbejde — uden ekstra besvær for jer."
        url="https://bedemandkobenhavn.dk/kim-bondo/begravelseshjaelp"
      />

      {/* ── HEADER ── */}
      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Begravelseshjælp</span>
        </div>
        {NAV}
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
        <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
          Kontakt mig
        </a>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#84A98C" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
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
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", color: "#84A98C", textTransform: "uppercase", marginBottom: "8px" }}>{item.title}</p>
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
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Se priser", href: "/kim-bondo/priser" },
            { label: "Huskeliste ved dødsfald", href: "/kim-bondo/huskeliste" },
            { label: "Se alle afskeder", href: "/kim-bondo/afskeder" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#fff", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <footer style={{ background: "#2F3E46", color: "#fff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "12px" }}>Jeg hjælper med begravelseshjælpen</p>
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
