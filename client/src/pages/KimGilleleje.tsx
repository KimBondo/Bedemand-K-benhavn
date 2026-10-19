import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";
import KimNav from "@/components/KimNav";
import SchemaOrg from "@/components/SchemaOrg";
import CookieLink from "@/components/CookieLink";

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" } as React.CSSProperties,
};

const FAQ = [
  { question: "Hvilken kirke hører Gilleleje til?", answer: "Gilleleje hører til Gilleleje Sogn, og sognekirken er Gilleleje Kirke, Gilleleje Hovedgade 43, 3250 Gilleleje. Kirkekontoret ligger i sognegården på Gilleleje Hovedgade 45. Jeg tager kontakten til kirkekontoret og præsten for jer." },
  { question: "Er Søborg Kirke det samme Søborg, som dit kontor ligger i?", answer: "Nej. Søborg Kirke ligger i landsbyen Søborg i Gribskov Kommune, Bygaden 38, 3250 Gilleleje. Mit kontor ligger i Søborg i Gladsaxe ved København. Søborg Kirke er en stor middelalderkirke fra omkring år 1200 med sin egen kirkegård." },
  { question: "Hvor foregår kremeringen, når man bor i Gilleleje?", answer: "Der er ikke krematorium i Gribskov Kommune. Det nærmeste er Hillerød Krematorium ved Skansekirkegården, som er det eneste i Nordsjælland. Ceremonien holdes lokalt, fx i Gilleleje Kirke eller Søborg Kirke, og bagefter kører jeg selv kisten til Hillerød." },
  { question: "Hvad koster en begravelse i Gilleleje?", answer: "Det samme som i København. En afsked uden ceremoni starter ved 13.550 kr., en bisættelse med ceremoni ved 18.300 kr. og en begravelse i kiste ved 19.300 kr. Rustvognen koster højst 2.000 kr. pr. kørsel i hele Nordsjælland, så det koster ikke ekstra, at I bor på Nordkysten. Oveni kommer kremering, gravsted og kirkegårdens takster. Jeg regner jeres samlede tal sammen, inden I siger ja til noget." },
  { question: "Hvordan søger vi begravelseshjælp i Gribskov Kommune?", answer: "Begravelseshjælpen er den samme i hele landet og søges digitalt hos Udbetaling Danmark via borger.dk – også når afdøde boede i Gribskov Kommune. Når I har givet mig en fuldmagt, søger jeg den for jer og trækker beløbet fra på fakturaen, så I ikke skal lægge ud." },
  { question: "Kommer du hjem til os i Gilleleje?", answer: "Ja. Jeg kører selv ud fra mit kontor i Søborg i Gladsaxe og kommer gerne hjem til jer i Gilleleje, Græsted, Vejby, Blistrup eller et andet sted i Gribskov Kommune. Telefonen er åben døgnet rundt på 28 14 60 11." },
];

export default function KimGilleleje() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Bedemand Gilleleje – Kim Bondo, døgnet rundt"
        description="Personlig bedemand i Gilleleje og Gribskov. Jeg kender Gilleleje Kirke, Søborg Kirke og kirkegårdene. Faste priser. Ring 28 14 60 11 – døgnet rundt."
        url="https://www.bedemandkobenhavn.dk/gilleleje/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="both"
        areaServed={["Gilleleje", "Græsted", "Vejby", "Blistrup", "Dronningmølle", "Gribskov Kommune"]}
        pageUrl="https://www.bedemandkobenhavn.dk/gilleleje/"
        faqItems={FAQ}
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Områder", url: "https://www.bedemandkobenhavn.dk/omraade/" },
          { name: "Bedemand Gilleleje", url: "https://www.bedemandkobenhavn.dk/gilleleje/" },
        ]}
      />

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
          <a href="/" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2, textDecoration: "none" }}>Bedemand Gilleleje</a>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Gilleleje og Nordkysten</span>
        </div>
        <KimNav />
        <a href="tel:+4528146011" style={{ display: "none" }} className="mobile-call-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Ring op
        </a>
      </header>

      <nav aria-label="breadcrumb" style={{ background: "#F0EDE8", padding: "10px 24px", borderBottom: "1px solid #e0dcd6" }}>
        <ol style={{ display: "flex", alignItems: "center", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#7a8f99", flexWrap: "wrap" }}>
          <li><a href="/" style={{ color: "#3D6B4F", textDecoration: "none" }}>Forsiden</a></li>
          <li style={{ color: "#b0b8bc" }}>›</li>
          <li><a href="/omraade/" style={{ color: "#3D6B4F", textDecoration: "none" }}>Områder</a></li>
          <li style={{ color: "#b0b8bc" }}>›</li>
          <li style={{ color: "#3d4f5a", fontWeight: 600 }}>Bedemand Gilleleje</li>
        </ol>
      </nav>

      <section style={{ background: "#F9F8F6", padding: "72px 32px 56px", textAlign: "center" }}>
        <p style={s.label}>Bedemand i Gilleleje</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto 40px" }}>
          Personlig bedemand i Gilleleje
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a href="#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Kontakt mig</a>
          <a href="/priser/" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>Se priser</a>
        </div>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F" }}>
          eller ring på <a href="tel:+4528146011" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>28 14 60 11</a>
        </p>
      </section>

      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.body}>
            Jeg er selvstændig bedemand og hjælper familier i Gilleleje og resten af Gribskov Kommune med en rolig og værdig afsked. Det er mig, I taler med fra det første opkald, og det er mig, der er med jer hele vejen. Telefonen er åben døgnet rundt.
          </p>
          <p style={s.body}>
            Jeg kører selv ud fra mit kontor i Søborg i Gladsaxe – til Gilleleje, Græsted, Vejby, Blistrup og de andre byer på Nordkysten. Priserne er de samme faste priser som i København.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", margin: "8px 0 40px" }}>
            <a href="tel:22211437" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Ring 22 21 14 37</a>
            <a href="/priser/" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>Se priser</a>
          </div>
          <h2 style={{ ...s.h2, marginTop: "40px" }}>Lokal og personlig</h2>
          <p style={s.body}>
            Når nogen dør, står man pludselig med mange beslutninger på én gang. Jeg tager mig af det praktiske – dødsanmeldelse, kontakt til kirke, kirkegård og krematorium, kiste eller urne, blomster, annonce og ansøgning om begravelseshjælp – så I kan bruge tiden på hinanden. Jeg kommer gerne hjem til jer, og I får et skriftligt prisoverslag fra starten, så I ved, hvad tingene koster.
          </p>
          <h2 style={{ ...s.h2, marginTop: "40px" }}>Gilleleje Kirke midt i byen</h2>
          <p style={s.body}>
            Gilleleje hører til Gilleleje Sogn, og sognets kirke er Gilleleje Kirke på Gilleleje Hovedgade 43. Kirken blev oprindelig bygget i slutningen af 1530'erne, kort efter Reformationen, og fik sin nuværende form ved en ombygning i 1736–1741. Kirkekontoret ligger i sognegården på Gilleleje Hovedgade 45.
          </p>
          <p style={s.body}>
            For mange familier i Gilleleje er kirken det sted, hvor livets store dage er blevet holdt. Derfor føles det naturligt at tage afsked her. Jeg tager kontakten til kirkekontoret og præsten, finder et tidspunkt, der passer, og hjælper jer med salmer, musik og det praktiske omkring dagen.
          </p>
          <h2 style={{ ...s.h2, marginTop: "40px" }}>Søborg Kirke – ikke Søborg ved København</h2>
          <p style={s.body}>
            Lidt syd for Gilleleje ligger landsbyen Søborg med Søborg Kirke på Bygaden 38, 3250 Gilleleje. Navnet kan forvirre, for mit kontor ligger også i Søborg – men det er Søborg i Gladsaxe ved København. Søborg Kirke i Gribskov er en stor middelalderkirke, hvor kor og skib er bygget omkring år 1200, og kirkerummet har mange gamle kalkmalerier. Kirken har sin egen kirkegård, og de praktiske henvendelser går gennem kirkekontoret i Gilleleje.
          </p>
          <h2 style={{ ...s.h2, marginTop: "40px" }}>Kirkegårdene i Gilleleje</h2>
          <p style={s.body}>
            Gilleleje har tre kirkegårde: den gamle kirkegård ved kirken på Hovedgaden, den nye kirkegård på Rostgårdsvej, hvor kirkegårdskontoret ligger, og Skovkirkegården, som blev indviet i 2006 i den tidligere præstegårdshave ved siden af den nye kirkegård.
          </p>
          <p style={s.body}>
            Jeg tager kontakten til kirkegårdskontoret, så I får overblik over gravstedstyper, priser og muligheder – både til kiste og urne – før I skal beslutte jer.
          </p>
          <h2 style={{ ...s.h2, marginTop: "40px" }}>Græsted, Vejby og Blistrup</h2>
          <p style={s.body}>
            Bor I lidt uden for Gilleleje, har Græsted, Vejby og Blistrup hver deres sognekirke – Græsted Kirke, Vejby Kirke og Blistrup Kirke. Afskeden kan holdes i jeres egen kirke eller i en anden kirke, der betyder noget for jer. Jeg tager kontakten og hører, hvad der kan lade sig gøre.
          </p>
          <h2 style={{ ...s.h2, marginTop: "40px" }}>Kremering og ceremoni</h2>
          <p style={s.body}>
            Der er ikke krematorium i Gribskov Kommune. Det nærmeste er Hillerød Krematorium ved Skansekirkegården i Hillerød, som er det eneste krematorium i Nordsjælland. Ved en bisættelse holdes ceremonien lokalt – fx i Gilleleje Kirke eller Søborg Kirke – og bagefter kører jeg selv kisten til Hillerød. Urnen kan derefter sættes ned på kirkegården her, eller asken kan spredes over havet, hvis det var afdødes ønske.
          </p>
          <p style={s.body}>
            Ved en begravelse sænkes kisten i jorden efter ceremonien, på en af kirkegårdene i sognet. Ønsker I det helt stille, kan jeg arrangere en afsked uden ceremoni. Så køres kisten direkte til krematoriet uden en kirkelig eller borgerlig ceremoni.
          </p>
          <h2 style={{ ...s.h2, marginTop: "40px" }}>Begravelseshjælp i Gribskov Kommune</h2>
          <p style={s.body}>
            Begravelseshjælpen er den samme i hele landet og søges digitalt hos Udbetaling Danmark via borger.dk. Det gælder også, når afdøde boede i Gribskov Kommune. Når I har givet mig en fuldmagt, søger jeg hjælpen for jer og trækker beløbet fra på fakturaen, så I ikke skal lægge ud. En efterlevende ægtefælle eller samlever kan desuden søge efterlevelseshjælp senest 6 måneder efter dødsfaldet.
          </p>
          <p style={s.body}>
            <a href="/begravelseshjaelp/" style={s.link}>Læs mere om begravelseshjælp</a>
          </p>
          <h2 style={{ ...s.h2, marginTop: "40px" }}>Ring, når I er klar</h2>
          <p style={s.body}>
            Der er sjældent grund til at haste. Ring til mig på 28 14 60 11 – også hvis I bare har et enkelt spørgsmål – så finder vi sammen ud af, hvad der er bedst for jer.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", margin: "8px 0 0" }}>
            <a href="tel:22211437" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Ring 22 21 14 37</a>
            <a href="/prisberegner/" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>Prisberegner</a>
          </div>
        </div>
      </section>

      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={s.label}>Mine ydelser</p>
          <h2 style={s.h2}>Hvad hjælper jeg med i Gilleleje?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { title: "Bisættelse", desc: "Ceremoni i Gilleleje Kirke, Søborg Kirke eller en anden lokal kirke, med kremering i Hillerød.", href: "/bisaettelse/" },
              { title: "Begravelse", desc: "Kiste i jord på en af kirkegårdene i sognet. Jeg koordinerer med kirkekontor, præst og kirkegård.", href: "/begravelse/" },
              { title: "Afsked uden ceremoni", desc: "En afsked uden kirkelig eller borgerlig ceremoni, direkte til krematoriet. I kan stadig sige farvel ved kisten i ro, hvis I ønsker det. Den enkleste løsning – 13.550 kr.", href: "/afsked-uden-ceremoni/" },
              { title: "Kirkelig afsked", desc: "Ceremoni med præst, salmer og jordpåkastelse i jeres lokale kirke.", href: "/kirkelig-afsked/" },
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

      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Spørgsmål og svar</p>
          <h2 style={s.h2}>Spørgsmål om bedemand i Gilleleje</h2>
          {FAQ.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.question}</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#F9F8F6", padding: "56px 32px", textAlign: "center" }}>
        <p style={s.label}>Se også</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Bedemand Nordsjælland", href: "/nordsjaelland/" },
            { label: "Bedemand Hillerød", href: "/hillerod/" },
            { label: "Bedemand Helsingør", href: "/helsingor/" },
            { label: "Bedemand Hornbæk", href: "/hornbaek/" },
            { label: "Dækningsområde", href: "/omraade/" },
            { label: "Se priser", href: "/priser/" },
            { label: "Huskeliste", href: "/huskeliste/" },
            { label: "Min Sidste Vilje", href: "/min-sidste-vilje/" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#fff", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>{link.label}</a>
          ))}
        </div>
      </section>

      <section id="kontakt" style={{ background: "#F9F8F6", padding: "80px 32px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>Kontakt Kim</p>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0", textAlign: "center" }}>Skriv til mig</h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px", textAlign: "center", maxWidth: "480px", margin: "0 auto 40px" }}>
            Udfyld formularen herunder, så vender jeg tilbage hurtigst muligt.
          </p>
          <ContactForm />
          <p style={{ marginTop: "24px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F", textAlign: "center" }}>
            eller ring direkte på <a href="tel:+4528146011" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>28 14 60 11</a>
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "40px 32px", textAlign: "center", borderTop: "1px solid #e0dcd6" }}>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#5a7a6a", marginBottom: "16px" }}>
          Kender du nogen i Gilleleje, der kan have brug for en bedemand? Del denne side.
        </p>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://www.bedemandkobenhavn.dk/gilleleje/")}`}
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

      <footer style={{ background: "#2F3E46", color: "#ffffff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "16px", letterSpacing: "0.02em" }}>
          Bedemand København og Nordsjælland
        </p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.6vw, 18px)", color: "rgba(255,255,255,0.82)", marginBottom: "16px", letterSpacing: "0.03em" }}>
          Kim Bondo
        </p>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.82)", marginBottom: "32px", lineHeight: 1.7 }}>
          Vandtårnsvej 62A, kontor 11, 2860 Søborg
        </p>
        <a href="/#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(15px, 1.8vw, 18px)", padding: "18px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.05em", marginBottom: "48px" }}>
          Kontakt mig
        </a>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.78)", marginTop: "16px" }}>
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, kontor 11, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a href="tel:+4528146011" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>Tlf.: 28 14 60 11</a>
          {" "}&nbsp;·&nbsp;{" "}
          <a href="mailto:kim@bedemandkobenhavn.dk" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>kim@bedemandkobenhavn.dk</a>
          {" "}&nbsp;·&nbsp; CVR.: 45084159
          {" "}&nbsp;·&nbsp;{" "}
          <a href="/min-sidste-vilje/" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>Min Sidste Vilje</a>
          {" "}&nbsp;·&nbsp;{" "}
          <a href="/persondatapolitik/" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>Persondatapolitik</a>
          {" "}·{" "}<CookieLink />
        </p>
      </footer>
    </div>
  );
}
