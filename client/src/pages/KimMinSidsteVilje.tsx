import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";
import KimNav from "@/components/KimNav";
import SchemaOrg from "@/components/SchemaOrg";

/**
 * Kim Bondo – Min Sidste Vilje (gratis hjemmebesøg, planlægning af egen afsked)
 */

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" } as React.CSSProperties,
};

export default function KimMinSidsteVilje() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Min Sidste Vilje – gratis hjemmebesøg, Kim Bondo"
        description="Planlæg din egen afsked i ro. Gratis hjemmebesøg eller samtale over telefon eller video – uden forpligtelse. Du får dine ønsker på skrift. Ring 22 21 14 37."
        url="https://www.bedemandkobenhavn.dk/min-sidste-vilje/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="LocalBusiness"
        article={{ headline: "Min Sidste Vilje – planlæg afskeden i ro", url: "https://www.bedemandkobenhavn.dk/min-sidste-vilje/", dateModified: "2026-09-29" }}
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Min Sidste Vilje", url: "https://www.bedemandkobenhavn.dk/min-sidste-vilje/" },
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
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Min Sidste Vilje</span>
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
        <p style={s.label}>Gratis hjemmebesøg</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto 24px" }}>
          Min Sidste Vilje – planlæg afskeden i ro
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#5a7a6a", margin: "-8px auto 24px", letterSpacing: "0.02em" }}>
          Opdateret <time dateTime="2026-09-29">september 2026</time> · Skrevet af <a href="/om-kim/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F" }}>Kim Bondo</a>, bedemand
        </p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          De fleste udskyder samtalen. Men det er en gave til dem, man efterlader, at have taget stilling i forvejen. Jeg hjælper jer gratis og uden forpligtelse.
        </p>
        <a href="tel:22211437" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Ring til Kim – 22 21 14 37</a>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#5a7a6a" }}>
          eller <a href="#hent-dokumentet" style={s.link}>hent dokumentet og udfyld det selv</a>
        </p>
      </section>

      {/* ── SÅDAN FOREGÅR DET ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Sådan foregår det</p>
          <h2 style={s.h2}>En times samtale – hjemme hos jer eller over telefonen</h2>
          <p style={s.body}>
            Jeg kommer gerne hjem til jer. Passer det bedre, kan vi også tage samtalen over telefon eller video. Det tager omkring en time, det koster ingenting, og der er ingen forpligtelse bagefter.
          </p>
          <p style={s.body}>
            Vi går ønskerne igennem i roligt tempo. I behøver ikke have taget stilling til noget på forhånd – det er netop det, samtalen er til.
          </p>

          <h3 style={{ ...s.h3, marginTop: "36px" }}>Det taler vi om</h3>
          <ul style={{ paddingLeft: "20px", margin: "0 0 20px" }}>
            {[
              "Bisættelse eller begravelse",
              "Kirkelig eller borgerlig afsked – eller ingen ceremoni",
              "Valg af kiste og urne",
              "Musik, salmer og hvem der skal tale",
              "Hvor asken skal hen: kirkegård eller askespredning over havet",
              "Hvem der skal have besked",
              "Hvad det hele vil koste – med mine faste priser",
            ].map((item) => (
              <li key={item} style={{ ...s.body, marginBottom: "8px" }}>{item}</li>
            ))}
          </ul>
          <p style={s.body}>
            Jeg spørger også om et par praktiske ting – for eksempel hvor høj man er, så kisten får den rigtige størrelse.
          </p>

          <h3 style={{ ...s.h3, marginTop: "36px" }}>Ønsker om askespredning</h3>
          <p style={s.body}>
            Askespredning over havet forudsætter, at afdøde selv har ønsket det. Står ønsket på skrift, bliver det lettere for de pårørende, når de senere skal bekræfte det i tro og love-erklæringen. <a href="/askespredning/" style={s.link}>Læs mere om askespredning</a>
          </p>

          <h3 style={{ ...s.h3, marginTop: "36px" }}>Det sker der bagefter</h3>
          <p style={s.body}>
            I får et skriftligt dokument med jeres ønsker med hjem, og jeg gemmer selv en kopi. Når tiden kommer, ved jeres pårørende, hvad I ønskede – og de kan ringe direkte til mig.
          </p>
          <p style={s.body}>
            Vil I vide, hvad en afsked koster, står alle mine priser åbent. <a href="/priser/" style={s.link}>Se mine priser</a>
          </p>

          <div id="hent-dokumentet" style={{ marginTop: "48px", background: "#F4F1EC", borderLeft: "4px solid #3D6B4F", borderRadius: "3px", padding: "28px 28px 32px" }}>
            <p style={s.label}>Hent dokumentet</p>
            <h3 style={{ ...s.h3, marginBottom: "12px" }}>Udfyld Min Sidste Vilje selv</h3>
            <p style={s.body}>
              Du kan også hente dokumentet og udfylde det i dit eget tempo – direkte på computeren eller printet ud og skrevet i hånden. Udfyld det, du har lyst til, og spring resten over.
            </p>
            <p style={s.body}>
              Dokumentet bliver kun hos dig; det sendes ikke til mig. Gem det et sted, hvor dine nærmeste kan finde det – og tag det gerne frem, hvis vi ses til en samtale.
            </p>
            <a href="/dokumenter/min-sidste-vilje.pdf" download="Min-Sidste-Vilje.pdf" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "14px 32px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
              Hent Min Sidste Vilje (PDF, 6 sider)
            </a>
            <p style={{ ...s.body, fontSize: "14px", color: "#5a7a6a", marginTop: "14px", marginBottom: 0 }}>
              Dokumentet beskriver dine ønsker til afskeden. Det er ikke et testamente – ønsker om arv skal skrives i et testamente hos en advokat eller notar.
            </p>
          </div>
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
          Kender du nogen, der går og tænker på deres sidste afsked? Del denne side.
        </p>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://www.bedemandkobenhavn.dk/min-sidste-vilje/")}`}
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
