import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";

/**
 * Praktisk guide: Hvad sker der, når nogen dør?
 * Klar, faktuel side, som AI og Google nemt kan citere.
 */

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 30px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" } as React.CSSProperties,
};

const FAQ = [
  { question: "Hvad skal man gøre først, når nogen dør?", answer: "Kontakt en læge, som konstaterer dødsfaldet og udsteder dødsattest. Derefter kan bedemanden kontaktes. Jeg hjælper med anmeldelse til myndighederne og den videre planlægning." },
  { question: "Hvor kremeres man i Nordsjælland?", answer: "I vælger selv. I Nordsjælland kan kremeringen ske i Hillerød, hvor det eneste krematorium ligger, eller via indlevering i Helsingør. I København sker kremering på Bispebjerg, Sundby, Ballerup eller Glostrup." },
  { question: "Hvem anmelder dødsfaldet?", answer: "Bedemanden anmelder dødsfaldet til hjemsognet. Jeg sørger for det som en del af arbejdet, så de pårørende ikke selv skal kontakte myndighederne." },
  { question: "Hvad koster en begravelse eller bisættelse?", answer: "Hos mig starter en afsked uden ceremoni ved 13.550 kr., en bisættelse med ceremoni ved 18.300 kr. og en begravelse i kiste ved 19.300 kr. Oveni kommer krematorium, gravsted og eventuel kapelleje, som kommunen fastsætter." },
  { question: "Kan man få begravelseshjælp?", answer: "Ja, i mange tilfælde. I 2026 er det maksimale offentlige tilskud op til 13.550 kr. Jeg hjælper med at ansøge om den." },
];

export default function KimHvadSkerDer() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Hvad sker der, når nogen dør? – Praktisk guide | Kim Bondo"
        description="Klar oversigt over de første skridt ved dødsfald i København og Nordsjælland. Læge, dødsattest, anmeldelse, krematorium og priser. Ring 22 21 14 37."
        url="https://www.bedemandkobenhavn.dk/hvad-sker-der/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="both"
        faqItems={FAQ}
        article={{ headline: "Hvad sker der, når nogen dør?", url: "https://www.bedemandkobenhavn.dk/hvad-sker-der/", dateModified: "2026-10-12" }}
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Hvad sker der, når nogen dør?", url: "https://www.bedemandkobenhavn.dk/hvad-sker-der/" },
        ]}
      />

      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", textDecoration: "none" }}>Bedemand København og Nordsjælland</a>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a" }}>Kim Bondo</span>
        </div>
        <KimNav />
      </header>

      <nav aria-label="breadcrumb" style={{ background: "#F0EDE8", padding: "10px 24px", borderBottom: "1px solid #e0dcd6" }}>
        <ol style={{ display: "flex", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontSize: "13px", color: "#7a8f99" }}>
          <li><a href="/" style={{ color: "#3D6B4F", textDecoration: "none" }}>Forsiden</a></li>
          <li>›</li>
          <li style={{ color: "#3d4f5a", fontWeight: 600 }}>Hvad sker der, når nogen dør?</li>
        </ol>
      </nav>

      <section style={{ background: "#F9F8F6", padding: "64px 32px 40px", textAlign: "center" }}>
        <p style={s.label}>Praktisk guide</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 46px)", color: "#2F3E46", margin: "0 auto 16px", maxWidth: "720px" }}>
          Hvad sker der, når nogen dør?
        </h1>
        <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
          En klar oversigt over de første skridt i København og Nordsjælland. Jeg står for det praktiske, så I kan bruge energien på hinanden.
        </p>
      </section>

      <section style={{ background: "#fff", padding: "48px 32px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={s.h2}>De første timer</h2>
          <p style={s.body}>
            Når et menneske dør, skal en læge konstaterer dødsfaldet og udstede en dødsattest. Det sker som regel på hospitalet, på et hospice eller i hjemmet. Først når dødsattesten er klar, kan bedemanden gå i gang med det videre arbejde.
          </p>
          <p style={s.body}>
            Jeg kan kontaktes med det samme – også om natten. Vi taler om situationen, og jeg guider jer igennem de næste skridt. Der er ingen forpligtelse ved at ringe.
          </p>

          <h2 style={s.h2}>Anmeldelse og koordinering</h2>
          <p style={s.body}>
            Jeg anmelder dødsfaldet til hjemsognet og søger begravelseshjælp på jeres vegne. Jeg koordinerer med kirke eller kapel, krematorium og kirkegård, så I ikke selv skal holde styr på tider og kontakter.
          </p>
          <p style={s.body}>
            I Nordsjælland kan I frit vælge mellem kremering i Hillerød, hvor Nordsjællands eneste krematorium ligger, og indlevering i Helsingør. I København og omegn sker det på Bispebjerg, Sundby, Ballerup eller Glostrup. Ceremonien holdes stadig lokalt.
          </p>

          <h2 style={s.h2}>Valg af afsked</h2>
          <p style={s.body}>
            De fleste vælger en bisættelse med ceremoni (fra 18.300 kr.) eller en begravelse i kiste (fra 19.300 kr.). En afsked uden ceremoni starter ved 13.550 kr. og svarer til den maksimale begravelseshjælp i 2026.
          </p>
          <p style={s.body}>
            Jeg laver altid et præcist overslag sammen med jer, inden I beslutter noget. Oveni kommer udgifter til krematorium, gravsted og eventuel kapelleje, som kommunen fastsætter.
          </p>

          <h2 style={s.h2}>Hvad jeg tager mig af</h2>
          <p style={s.body}>
            Jeg står for dødsanmeldelse, kontakt til præst eller kirkekontor, booking af kapel eller kirke, transport, klargøring af afdøde, valg af kiste og urne, og koordinering med krematorium og kirkegård. I taler med mig hele vejen.
          </p>

          <div style={{ background: "#f0f7f3", border: "1px solid #3D6B4F", borderRadius: "3px", padding: "28px", textAlign: "center", marginTop: "40px" }}>
            <p style={{ ...s.body, marginBottom: "20px" }}>Har I brug for hjælp nu? Ring til mig – også om natten.</p>
            <a href="tel:22211437" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontWeight: 700, padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
              Ring til Kim · 22 21 14 37
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "#F9F8F6", padding: "64px 32px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={s.h2}>Spørgsmål og svar</h2>
          {FAQ.map((item, i) => (
            <div key={i} style={{ marginBottom: "28px" }}>
              <h3 style={s.h3}>{item.question}</h3>
              <p style={s.body}>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: "#2F3E46", color: "#fff", textAlign: "center", padding: "64px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "20px", marginBottom: "16px" }}>Bedemand København og Nordsjælland</p>
        <p style={{ marginBottom: "24px" }}>Kim Bondo · Vandtårnsvej 62A, 2860 Søborg</p>
        <a href="tel:22211437" style={{ color: "#fff", textDecoration: "underline" }}>22 21 14 37</a>
      </footer>
    </div>
  );
}
