import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import ContactForm from "@/components/ContactForm";

/**
 * Kim Bondo – Bedemand København (lokal SEO-landingsside)
 * Det mest søgte lokale søgeord for Kim.
 */

const NAV = (
  <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
    <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Om Kim</a>
    <a href="/kim-bondo/afskeder" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Afskeder</a>
    <a href="/kim-bondo/priser" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Priser</a>
    <a href="/kim-bondo/huskeliste" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Huskeliste</a>
    <a href="/kim-bondo/begravelseshjaelp" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Begravelseshjælp</a>
    <a href="/kim-bondo/hvad-koster-en-begravelse" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Hvad koster det?</a>
    <a href="#kontakt" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Kontakt</a>
    <a href="tel:22211437" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(14px, 1.6vw, 18px)", color: "#84A98C", textDecoration: "none", whiteSpace: "nowrap", letterSpacing: "0.03em" }}>Tlf: 22 21 14 37</a>
  </div>
);

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#84A98C", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#84A98C", textDecoration: "none", borderBottom: "1px solid #84A98C", paddingBottom: "1px" } as React.CSSProperties,
};

export default function KimKobenhavn() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Bedemand København – Kim Bondo | Bisættelse og begravelse i København"
        description="Søger du en bedemand i København? Kim Bondo er personlig bedemand i hele København og Nordsjælland. Hjælp til bisættelse, begravelse og afsked – gennemsigtige priser fra 15.500 kr. Ring 22 21 14 37 døgnet rundt."
        url="https://bedemandkbh-8wuvn9as.manus.space/kim-bondo/kobenhavn"
      />
      <SchemaOrg type="both" faqItems={[
        { question: "Hvem er bedemand i København?", answer: "Kim Bondo er selvstændig bedemand og dækker hele København og Nordsjælland. Ring på 22 21 14 37 – tilgængelig døgnet rundt." },
        { question: "Hvad koster en begravelse i København?", answer: "En afsked uden ceremoni starter fra 15.500 kr. En bisættelse med ceremoni fra 17.395 kr. En begravelse i kiste fra 19.500 kr. Dertil kommer kremering, blomster og eventuelle kapellejeudgifter." },
        { question: "Hvad er forskellen på bisættelse og begravelse?", answer: "Ved en bisættelse kremeres afdøde. Ved en begravelse sættes kisten i jord. Begge kan have kirkelig eller borgerlig ceremoni." },
        { question: "Kan jeg vælge en borgerlig ceremoni i København?", answer: "Ja — Kim Bondo hjælper med borgerlige ceremonier i kapel eller anden egnet ramme, uden religiøse ritualer." },
        { question: "Hvad er begravelseshjælp?", answer: "Begravelseshjælp er et tilskud fra Udbetaling Danmark til dækning af begravelsesudgifter. Kim hjælper med ansøgningen." },
      ]} />

      {/* ── HEADER ── */}
      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – personlig bedemand i hele København</span>
        </div>
        {NAV}
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px 56px", textAlign: "center" }}>
        <p style={s.label}>Bedemand i København</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto 24px" }}>
          Personlig bedemand i København
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "660px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          Jeg er selvstændig bedemand og hjælper familier i hele København med at skabe en værdig og rolig afsked — fra første opkald til den sidste hilsen. Tilgængelig døgnet rundt.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a href="#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Kontakt mig</a>
          <a href="/kim-bondo/priser" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>Se priser</a>
        </div>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#84A98C" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
      </section>

      {/* ── OM KIM I KBH ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Personlig og nærværende</p>
          <h2 style={s.h2}>Bedemand i hele København</h2>
          <p style={s.body}>
            Jeg dækker alle Københavns bydele — fra Indre By og Frederiksberg til Amager, Valby, Vanløse og Brønshøj. Jeg kender de lokale kirker, kapeller og krematorier og koordinerer direkte med de rette instanser, så I ikke skal stå med det selv.
          </p>
          <p style={s.body}>
            Som selvstændig bedemand er jeg den person, I taler med fra første kontakt til afskeden er overstået. Ingen mellemled — bare direkte kontakt med mig, Kim Bondo. Jeg er tilgængelig hele døgnet, også i weekender og på helligdage.
          </p>
          <a href="/kim-bondo" style={s.link}>Læs mere om Kim Bondo →</a>
        </div>
      </section>

      {/* ── YDELSER ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={s.label}>Mine ydelser</p>
          <h2 style={s.h2}>Hvad hjælper jeg med i København?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { title: "Bisættelse", desc: "Kremering med kirkelig eller borgerlig ceremoni. Koordinering med kirke, kapel og krematorium i hele København.", href: "/kim-bondo/bisaettelse" },
              { title: "Begravelse", desc: "Kiste i jord på en af Københavns kirkegårde. Jeg koordinerer med kordegn, præst og kirkegård.", href: "/kim-bondo/begravelse" },
              { title: "Afsked uden ceremoni", desc: "En enkel og diskret afsked, direkte til krematoriet. Den mest enkle løsning — priser fra 15.500 kr.", href: "/kim-bondo/afsked-uden-ceremoni" },
              { title: "Kirkelig afsked", desc: "Traditionel kirkelig ceremoni med jordpåkastelse, salmer og præst i en af Københavns kirker.", href: "/kim-bondo/kirkelig-afsked" },
              { title: "Borgerlig afsked", desc: "Fri ceremoni i kapel eller anden egnet ramme — uden religiøse ritualer, men med fuld personlighed.", href: "/kim-bondo/borgerlig-afsked" },
              { title: "Askespredning", desc: "Spredning af aske over havet ud for Sjællands kyst. En fri og naturlig afsked.", href: "/kim-bondo/askespredning" },
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

      {/* ── PRISER ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Gennemsigtige priser</p>
          <h2 style={s.h2}>Hvad koster en begravelse i København?</h2>
          <p style={s.body}>
            Priserne hos Kim Bondo er faste og gennemsigtige. Der er ingen skjulte gebyrer — det du ser, er det du betaler for mit honorar.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginTop: "32px" }}>
            {[
              { type: "Afsked uden ceremoni", price: "15.500 kr.", href: "/kim-bondo/afsked-uden-ceremoni" },
              { type: "Bisættelse med ceremoni", price: "17.395 kr.", href: "/kim-bondo/bisaettelse" },
              { type: "Begravelse i kiste", price: "19.500 kr.", href: "/kim-bondo/begravelse" },
            ].map((p) => (
              <div key={p.type} style={{ background: "#F9F8F6", padding: "28px 24px", borderRadius: "3px", border: "1px solid #e0dcd6", textAlign: "center" }}>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", color: "#84A98C", textTransform: "uppercase", marginBottom: "8px" }}>{p.type}</p>
                <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "28px", color: "#2F3E46", marginBottom: "16px" }}>fra {p.price}</p>
                <a href={p.href} style={{ ...s.link, fontSize: "14px" }}>Læs mere →</a>
              </div>
            ))}
          </div>
          <p style={{ ...s.body, fontSize: "14px", color: "#7a8f99", marginTop: "20px" }}>
            Dertil kommer udgifter til kremering, gravsted, blomster og kapelleje — <a href="/kim-bondo/hvad-koster-en-begravelse" style={s.link}>læs mere om hvad der påvirker prisen</a>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Spørgsmål og svar</p>
          <h2 style={s.h2}>Spørgsmål om bedemand i København</h2>
          {[
            { q: "Hvem er bedemand i København?", a: "Kim Bondo er selvstændig bedemand og dækker hele København og Nordsjælland. Ring på 22 21 14 37 — tilgængelig døgnet rundt." },
            { q: "Hvad koster en begravelse i København?", a: "En afsked uden ceremoni starter fra 15.500 kr. En bisættelse med ceremoni fra 17.395 kr. En begravelse i kiste fra 19.500 kr. Dertil kommer kremering, blomster og eventuelle kapellejeudgifter." },
            { q: "Hvad er forskellen på bisættelse og begravelse?", a: "Ved en bisættelse kremeres afdøde — asken kan efterfølgende nedsættes, spredes eller opbevares. Ved en begravelse sættes kisten i jord på en kirkegård. Begge kan have kirkelig eller borgerlig ceremoni." },
            { q: "Kan jeg vælge en borgerlig ceremoni i København?", a: "Ja — Kim Bondo hjælper med borgerlige ceremonier i kapel eller anden egnet ramme, uden religiøse ritualer. Du bestemmer selv indholdet." },
            { q: "Hvad er begravelseshjælp, og kan jeg søge det?", a: "Begravelseshjælp er et tilskud fra Udbetaling Danmark til dækning af begravelsesudgifter. Kim hjælper med ansøgningen — læs mere på begravelseshjælp-siden." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>{faq.a}</p>
            </div>
          ))}
          <a href="/kim-bondo/faq" style={s.link}>Se alle spørgsmål og svar →</a>
        </div>
      </section>

      {/* ── SE OGSÅ ── */}
      <section style={{ background: "#fff", padding: "56px 32px", textAlign: "center" }}>
        <p style={s.label}>Se også</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Bedemand Gentofte", href: "/kim-bondo/gentofte" },
            { label: "Bedemand Lyngby", href: "/kim-bondo/lyngby" },
            { label: "Bedemand Helsingør", href: "/kim-bondo/helsingor" },
            { label: "Dækningsområde", href: "/kim-bondo/omraade" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#F9F8F6", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>{link.label}</a>
          ))}
        </div>
      </section>

      {/* ── KONTAKT ── */}
      <section id="kontakt" style={{ background: "#F9F8F6", padding: "80px 32px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ ...s.label, textAlign: "center" }}>Kontakt Kim</p>
          <h2 style={{ ...s.h2, textAlign: "center", marginBottom: "12px" }}>Skriv til mig</h2>
          <p style={{ ...s.body, textAlign: "center", maxWidth: "480px", margin: "0 auto 40px" }}>
            Udfyld formularen herunder, så vender jeg tilbage hurtigst muligt.
          </p>
          <ContactForm />
          <p style={{ marginTop: "24px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#84A98C", textAlign: "center" }}>
            eller ring direkte på <a href="tel:22211437" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2F3E46", color: "#fff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "12px" }}>Bedemand i København – Kim Bondo</p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#b0c4b1", marginBottom: "32px" }}>Ring eller skriv — jeg er tilgængelig hele døgnet.</p>
        <a href="#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Kontakt mig</a>
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
