import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";

/**
 * Sådan forløber en bisættelse i Nordsjælland
 * Klar, faktuel side med lokale oplysninger, som AI kan citere.
 */

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 30px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" } as React.CSSProperties,
};

const FAQ = [
  { question: "Hvor sker kremeringen i Nordsjælland?", answer: "I vælger selv: kremering i Hillerød, hvor Nordsjællands eneste krematorium ligger, eller via indlevering i Helsingør. Jeg forklarer jer mulighederne, og ceremonien holdes stadig lokalt." },
  { question: "Hvad koster en bisættelse i Nordsjælland?", answer: "Hos mig starter en bisættelse med ceremoni ved 18.300 kr. En afsked uden ceremoni starter ved 13.550 kr. Oveni kommer krematorium, gravsted og eventuel kapelleje, som kommunen fastsætter." },
  { question: "Hvor lang tid går der fra dødsfald til bisættelse?", answer: "Hovedreglen er senest 8 dage efter dødsfaldet. Fristen kan forlænges til 14 dage, når afdøde opbevares på køl. Jeg sørger for, at tidsplanen holder." },
  { question: "Kan ceremonien holdes lokalt, selv om kremeringen sker et andet sted?", answer: "Ja. Ceremonien holdes i jeres egen kirke eller det lokale kapel. Det er kun selve kremeringen, der foregår et andet sted, og transporten sørger jeg for." },
];

export default function KimBisaettelseNordsjaelland() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Sådan forløber en bisættelse i Nordsjælland | Kim Bondo"
        description="Sådan forløber en bisættelse i Nordsjælland: lokal ceremoni, kremering i Hillerød eller via Helsingør – I vælger frit. Faste priser. Ring 28 14 60 11."
        url="https://www.bedemandkobenhavn.dk/bisaettelse-nordsjaelland/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="both"
        areaServed={["Nordsjælland", "Hillerød", "Helsingør", "Fredensborg", "Hørsholm"]}
        faqItems={FAQ}
        article={{ headline: "Sådan forløber en bisættelse i Nordsjælland", url: "https://www.bedemandkobenhavn.dk/bisaettelse-nordsjaelland/", dateModified: "2026-10-12" }}
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Bisættelse i Nordsjælland", url: "https://www.bedemandkobenhavn.dk/bisaettelse-nordsjaelland/" },
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
          <li style={{ color: "#3d4f5a", fontWeight: 600 }}>Bisættelse i Nordsjælland</li>
        </ol>
      </nav>

      <section style={{ background: "#F9F8F6", padding: "64px 32px 40px", textAlign: "center" }}>
        <p style={s.label}>Lokal guide</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 46px)", color: "#2F3E46", margin: "0 auto 16px", maxWidth: "760px" }}>
          Sådan forløber en bisættelse i Nordsjælland
        </h1>
        <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
          Ceremonien holdes lokalt, og I vælger selv, hvor kremeringen skal ske. Jeg koordinerer det hele.
        </p>
      </section>

      <section style={{ background: "#fff", padding: "48px 32px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={s.h2}>Kremering – I vælger selv</h2>
          <p style={s.body}>
            Hillerød Krematorium ved Skansekirkegården er det eneste krematorium i Nordsjælland. Man kan også vælge indlevering i Helsingør. I bestemmer frit, og jeg fortæller jer gerne om forskellene, så I kan vælge det, der føles rigtigt. Ceremonien holdes stadig lokalt.
          </p>
          <p style={s.body}>
            Ceremonien holdes stadig lokalt – i jeres egen kirke eller det kapel, I vælger. Det er kun selve kremeringen, der foregår et andet sted, og transporten sørger jeg for.
          </p>

          <h2 style={s.h2}>Sådan forløber det</h2>
          <p style={s.body}>
            Jeg anmelder dødsfaldet, koordinerer med præst eller kirkekontor, booker kapel eller kirke og sørger for transport til og fra ceremonien. Efter ceremonien sørger jeg for transporten – til Hillerød Krematorium eller til indleveringsstedet i Helsingør, alt efter hvad I har valgt.
          </p>
          <p style={s.body}>
            I taler med mig hele vejen. Der er ingen omstilling og ingen sagsbehandler – bare mig, fra det første opkald til urnenedsættelsen.
          </p>

          <h2 style={s.h2}>Priser</h2>
          <p style={s.body}>
            En bisættelse med ceremoni starter ved 18.300 kr. hos mig. En afsked uden ceremoni starter ved 13.550 kr. Oveni kommer krematorium, gravsted og eventuel kapelleje, som kommunen eller kirken fastsætter. Jeg regner det samlede tal sammen med jer, inden I beslutter noget.
          </p>

          <div style={{ background: "#f0f7f3", border: "1px solid #3D6B4F", borderRadius: "3px", padding: "28px", textAlign: "center", marginTop: "40px" }}>
            <p style={{ ...s.body, marginBottom: "20px" }}>Har I brug for hjælp med en bisættelse i Nordsjælland?</p>
            <a href="tel:+4528146011" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontWeight: 700, padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
              Ring til Kim · 28 14 60 11
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
        <a href="tel:+4528146011" style={{ color: "#fff", textDecoration: "underline" }}>28 14 60 11</a>
      </footer>
    </div>
  );
}
