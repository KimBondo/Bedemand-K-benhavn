import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import ContactForm from "@/components/ContactForm";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Samlet FAQ-side
 * Samler alle spørgsmål og svar fra de øvrige sider ét sted.
 * Stærk SEO-side for long-tail søgninger.
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

const FAQ_SECTIONS = [
  {
    title: "Om bedemand og processen",
    items: [
      { q: "Hvad laver en bedemand?", a: "En bedemand hjælper de pårørende med alt det praktiske i forbindelse med et dødsfald — fra afhentning af afdøde, koordinering med kirke, krematorium og myndigheder, til valg af kiste eller urne og planlægning af ceremonien. Jeg er med jer hele vejen.", link: null },
      { q: "Hvornår skal jeg kontakte en bedemand?", a: "Du kan kontakte mig så snart du har behov — enten umiddelbart efter dødsfaldet eller allerede inden, hvis du ved at det nærmer sig. Jeg er tilgængelig døgnet rundt på 22 21 14 37.", link: null },
      { q: "Hvad sker der, når jeg ringer til dig?", a: "Jeg tager telefonen personligt. Vi taler om situationen, og jeg guider jer igennem de første skridt. Der er ingen forpligtelse ved at ringe — bare menneskelig kontakt.", link: null },
      { q: "Kan jeg planlægge begravelsen på forhånd?", a: "Ja. Mange vælger at planlægge deres egen afsked på forhånd, så de pårørende slipper for at træffe svære beslutninger i en svær tid. Ring til mig, så taler vi om mulighederne.", link: null },
    ],
  },
  {
    title: "Typer af afsked",
    items: [
      { q: "Hvad er forskellen på bisættelse og begravelse?", a: "Ved en bisættelse kremeres afdøde — asken kan efterfølgende nedsættes på en kirkegård, spredes over havet eller opbevares. Ved en begravelse sættes kisten i jord på en kirkegård. Begge kan have kirkelig eller borgerlig ceremoni.", link: "/kim-bondo/bisaettelse" },
      { q: "Hvad er en afsked uden ceremoni?", a: "En afsked uden ceremoni er den mest enkle form for afsked, hvor afdøde køres direkte til krematoriet uden en formel ceremoni. Det er den billigste løsning og vælges ofte, hvis afdøde ønskede det enkelt.", link: "/kim-bondo/afsked-uden-ceremoni" },
      { q: "Hvad er en borgerlig ceremoni?", a: "En borgerlig ceremoni er en afsked uden religiøse ritualer. I bestemmer selv indholdet — musik, taler, tekster — og ceremonien holdes typisk i et kapel eller en anden egnet ramme.", link: "/kim-bondo/borgerlig-afsked" },
      { q: "Hvad er en kirkelig ceremoni?", a: "En kirkelig ceremoni følger den danske folkekirkes ritualer med jordpåkastelse, salmer og præst. Ceremonien holdes typisk i en kirke, men kan også holdes i et kapel.", link: "/kim-bondo/kirkelig-afsked" },
      { q: "Hvad er askespredning, og hvem kan vælge det?", a: "Askespredning betyder, at afdødes aske spredes over havet eller i naturen. Det kræver tilladelse fra myndighederne, og jeg hjælper med det hele — fra ansøgning til selve spredningen.", link: "/kim-bondo/askespredning" },
    ],
  },
  {
    title: "Priser og økonomi",
    items: [
      { q: "Hvad koster en begravelse?", a: "Mit honorar er 3.500 kr. ved afsked uden ceremoni og 4.500 kr. ved begravelse eller bisættelse med ceremoni. Den samlede pakkepris – inkl. kiste, urne, transport og koordinering – starter fra 13.550 kr. (uden ceremoni), 19.500 kr. (bisættelse med ceremoni) og 21.500 kr. (begravelse i kiste). Dertil kommer udgifter til kremering, gravsted, blomster og kapelleje.", link: "/kim-bondo/hvad-koster-en-begravelse" },
      { q: "Hvad er ikke inkluderet i prisen?", a: "Gravsten, gravsted, leje af kapel, kisteophold, urnenedsættelse og kremering er ikke en del af mit honorar. Jeg hjælper med at indhente tilbud og holde overblikket over alle udgifter.", link: "/kim-bondo/priser" },
      { q: "Hvad er begravelseshjælp?", a: "Begravelseshjælp er et tilskud fra Udbetaling Danmark til dækning af begravelsesudgifter. Tilskuddet afhænger af afdødes formue. Jeg hjælper med ansøgningen.", link: "/kim-bondo/begravelseshjaelp" },
      { q: "Er der ekstra betaling i weekenden?", a: "Ja — rustvognskørslen i weekenden (lørdag og søndag) er 50 % dyrere end på hverdage. Det fremgår tydeligt af prislisten.", link: "/kim-bondo/priser" },
      { q: "Kan jeg få en fast pris på forhånd?", a: "Ja. Mit honorar er fast og gennemsigtigt. Du ved præcis hvad du betaler for, inden du underskriver noget.", link: "/kim-bondo/priser" },
    ],
  },
  {
    title: "Praktiske spørgsmål",
    items: [
      { q: "Hvad skal jeg gøre, når nogen dør?", a: "Første skridt er at kontakte en læge, der kan konstatere dødsfaldet og udstede en dødsattest. Derefter kontakter du mig, og jeg guider dig igennem resten.", link: "/kim-bondo/huskeliste" },
      { q: "Hvad skal jeg huske at ordne efter et dødsfald?", a: "Der er mange praktiske ting at ordne — fra myndighederne og banken til opsigelse af abonnementer. Jeg har lavet en huskeliste, der guider dig igennem de vigtigste trin.", link: "/kim-bondo/huskeliste" },
      { q: "Hvilke områder dækker Kim?", a: "Jeg dækker hele København og Nordsjælland — herunder Helsingør, Hillerød, Gentofte, Lyngby, Hørsholm og alle Storkøbenhavns kommuner.", link: "/kim-bondo/omraade" },
      { q: "Er Kim tilgængelig om natten og i weekenden?", a: "Ja — jeg er tilgængelig hele døgnet, alle ugens dage. Ring på 22 21 14 37 uanset tidspunktet.", link: null },
    ],
  },
];

const allFaqItems = FAQ_SECTIONS.flatMap(s => s.items.map(i => ({ question: i.q, answer: i.a })));

export default function KimFaq() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="FAQ – Begravelse og bisættelse, Kim Bondo"
        description="Svar på de mest stillede spørgsmål om begravelse, bisættelse, priser og begravelseshjælp. Kim Bondo bedemand i København. Ring 22 21 14 37."
        url="https://bedemandkobenhavn.dk/kim-bondo/faq"
        image="https://bedemandkbh-8wuvn9as.manus.space/manus-storage/kim-beach-solo_609d5ab7.png"
      />
      <SchemaOrg
        type="FAQPage"
        faqItems={allFaqItems}
        breadcrumbs={[
          { name: "Forside", url: "https://bedemandkobenhavn.dk/" },
          { name: "Kim Bondo", url: "https://bedemandkobenhavn.dk/kim-bondo" },
          { name: "FAQ", url: "https://bedemandkobenhavn.dk/kim-bondo/faq" }
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
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Spørgsmål og svar</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Bedemand København og Nordsjælland</span>
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
        <p style={s.label}>FAQ</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "760px", margin: "0 auto 24px" }}>
          Spørgsmål og svar om begravelse og bisættelse
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Her har jeg samlet svar på de spørgsmål, jeg oftest får. Finder du ikke svar på dit spørgsmål, er du altid velkommen til at ringe.
        </p>
        <a href="tel:22211437" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "14px 32px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Ring på 22 21 14 37</a>
      </section>

      {/* ── FAQ SEKTIONER ── */}
      {FAQ_SECTIONS.map((section, si) => (
        <section key={si} style={{ background: si % 2 === 0 ? "#fff" : "#F9F8F6", padding: "72px 32px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={s.label}>{section.title}</p>
            {section.items.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
                <h2 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.q}</h2>
                <p style={{ ...s.body, marginBottom: faq.link ? "12px" : "0" }}>{faq.a}</p>
                {faq.link && (
                  <a href={faq.link} style={s.link}>Læs mere →</a>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* ── KONTAKT ── */}
      <section id="kontakt" style={{ background: "#F9F8F6", padding: "80px 32px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ ...s.label, textAlign: "center" }}>Fik du ikke svar?</p>
          <h2 style={{ ...s.h2, textAlign: "center", marginBottom: "12px" }}>Skriv til mig</h2>
          <p style={{ ...s.body, textAlign: "center", maxWidth: "480px", margin: "0 auto 40px" }}>
            Udfyld formularen herunder, så vender jeg tilbage hurtigst muligt.
          </p>
          <ContactForm />
          <p style={{ marginTop: "24px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F", textAlign: "center" }}>
            eller ring direkte på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
          </p>
        </div>
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
