import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import ContactForm from "@/components/ContactForm";
import KimNav from "@/components/KimNav";

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" } as React.CSSProperties,
};

const FAQ = [
  { question: "Kan vi mødes med dig på dit kontor i Søborg?", answer: "Ja. Mit kontor ligger på Vandtårnsvej 62A, kontor 11, 2860 Søborg, og I er velkomne til at holde samtalen her. Jeg kommer også gerne hjem til jer, hvis I hellere vil det. Ring på 28 14 60 11, så aftaler vi et tidspunkt, der passer jer." },
  { question: "Kan man holde en borgerlig ceremoni på Gladsaxe Kirkegård?", answer: "Ja. Kapellet på Gladsaxe Kirkegård, Gladsaxe Møllevej 41, bruges til både kirkelige og borgerlige ceremonier. Jeg hjælper med at booke kapellet og planlægge forløbet, også hvis I ønsker en taler eller musik, der betyder noget særligt for jer." },
  { question: "Kan vi samles til mindesamvær efter ceremonien på kirkegården?", answer: "Ja. Gladsaxe Kirkegård har et mødelokale i kapelbygningen, som kan lejes ved begravelser og bisættelser. Der er stole til 80 personer, et anretterkøkken med service og kaffemaskine, og lokalet lejes for mindst fire timer ad gangen. Jeg kan stå for reservationen." },
  { question: "Hvilke kirker kan vi bruge i Gladsaxe Kommune?", answer: "Ceremonien kan holdes i afdødes sognekirke, fx Søborg Kirke, Gladsaxe Kirke, Buddinge Kirke eller Bagsværd Kirke, eller i en anden kirke efter aftale. Jeg kontakter kirkekontoret og præsten for jer og finder en dato, der passer." },
  { question: "Hvor hurtigt kan du komme, når et dødsfald sker i Søborg eller Gladsaxe?", answer: "Jeg tager telefonen døgnet rundt, og da mit kontor ligger i Søborg, har jeg kort vej til hele Gladsaxe. Der er sjældent grund til at haste – I må gerne tage den tid, I har brug for, til at sige farvel, før afdøde bliver hentet. Ring på 28 14 60 11, så finder vi sammen det rette tidspunkt." },
];

export default function KimSoborg() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Bedemand Søborg & Gladsaxe – Kim Bondo, døgnet rundt"
        description="Personlig bedemand med kontor på Vandtårnsvej 62A i Søborg. Jeg hjælper familier i hele Gladsaxe med bisættelse og begravelse. Ring 28 14 60 11 – døgnet rundt."
        url="https://www.bedemandkobenhavn.dk/soborg/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="both"
        areaServed={["Gladsaxe"]}
        serviceName="Bedemand Søborg & Gladsaxe"
        pageUrl="https://www.bedemandkobenhavn.dk/soborg/"
        faqItems={FAQ}
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Områder", url: "https://www.bedemandkobenhavn.dk/omraade/" },
          { name: "Bedemand Søborg & Gladsaxe", url: "https://www.bedemandkobenhavn.dk/soborg/" },
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
          <a href="/" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2, textDecoration: "none" }}>Bedemand Søborg &amp; Gladsaxe</a>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – din lokale bedemand på Vandtårnsvej</span>
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
          <li style={{ color: "#3d4f5a", fontWeight: 600 }}>Bedemand Søborg &amp; Gladsaxe</li>
        </ol>
      </nav>

      <section style={{ background: "#F9F8F6", padding: "72px 32px 56px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto" }}>
          Bedemand i Søborg og Gladsaxe
        </h1>
      </section>

      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>Personlig bedemand med kontor i Søborg</h2>
          <p style={s.body}>
            Jeg er selvstændig bedemand, og mit kontor ligger på Vandtårnsvej 62A i Søborg. Når I ringer til mig, er det mig, der tager telefonen, og det er mig, der er med jer hele vejen – fra den første samtale til den sidste hilsen. Telefonen er åben døgnet rundt, også i weekender og på helligdage.
          </p>
          <p style={s.body}>
            For familier i Søborg, Buddinge, Gladsaxe og Bagsværd betyder det, at der er kort vej. Jeg kommer gerne hjem til jer, men I er også meget velkomne til at holde samtalen hos mig på kontoret, hvis det føles bedre at sidde et andet sted end derhjemme.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", margin: "8px 0 0" }}>
            <a href="tel:+4528146011" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Ring 28 14 60 11</a>
            <a href="/priser/" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>Se priser</a>
          </div>
        </div>
      </section>
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>Lokal og personlig</h2>
          <p style={s.body}>
            Når nogen dør, er der mange ting, der skal falde på plads på kort tid, og de fleste står i det for første gang. Min opgave er at gøre det overskueligt. Jeg tager mig af det praktiske – dødsanmeldelse, kontakt til kirke, kirkegård og krematorium, kiste eller urne, blomster, annonce og begravelseshjælp – så I kan bruge kræfterne på hinanden og på at forme en afsked, der føles rigtig.
          </p>
          <p style={s.body}>
            Der er ingen omstilling og ingen skiftende sagsbehandlere. I har mit nummer, og I kan bruge det, hver gang et spørgsmål dukker op – også dem, der melder sig midt om natten.
          </p>
        </div>
      </section>
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>Gladsaxe Kirkegård og kapellet</h2>
          <p style={s.body}>
            Gladsaxe Kirkegård ligger på Gladsaxe Møllevej 41 i Søborg, få minutters kørsel fra mit kontor. Kirkegården har både kistegravsteder og urnegravsteder, og jeg hjælper jer gerne med at finde ud af, hvilken type gravsted der passer til jeres ønsker – og hvad det koster.
          </p>
          <p style={s.body}>
            Kapellet ligger cirka 400 meter inde på kirkegården; man kører ad hovedvejen og følger skiltene mod "Kapel", og der er parkering lige ved bygningen. Kapellet bruges til både kirkelige og borgerlige ceremonier, så det er også et godt valg for familier, der ønsker en afsked uden præst.
          </p>
          <p style={s.body}>
            I kapelbygningen er der et mødelokale, som kan lejes i forbindelse med en begravelse eller bisættelse. Der er plads til omkring 80 gæster ved bordene, og der er et lille køkken med service og kaffemaskine. Mange familier synes, det er rart at kunne samles til kaffe og mindeord samme sted som ceremonien, uden at skulle køre videre. Jeg sørger for reservationen, hvis I ønsker det.
          </p>
          <h2 style={{ ...s.h2, marginTop: "40px" }}>Kirkerne i Gladsaxe</h2>
          <p style={s.body}>
            Ønsker I en kirkelig afsked, kan ceremonien holdes i den kirke, der hører til afdødes sogn – fx Søborg Kirke, Gladsaxe Kirke, Buddinge Kirke eller Bagsværd Kirke – eller i en anden kirke, der betyder noget for jer. Jeg tager kontakten til kirkekontoret og præsten, finder et tidspunkt, der passer, og aftaler salmer, organist og eventuelt kor med jer.
          </p>
          <h2 style={{ ...s.h2, marginTop: "40px" }}>Bedemand i Gladsaxe Kommune</h2>
          <p style={s.body}>
            Søborg hører til Gladsaxe Kommune, og jeg hjælper familier i hele kommunen: Søborg, Buddinge, Mørkhøj, Bagsværd og Gladsaxe. Ceremonien holdes i den kirke eller det kapel, I vælger, og kremeringen foregår typisk på Bispebjerg Krematorium. Jeg står for kontakten til kirke, kirkegård og krematorium.
          </p>
          <h2 style={{ ...s.h2, marginTop: "40px" }}>Også naboerne i Herlev, Ballerup og Rødovre</h2>
          <p style={s.body}>
            Mit kontor ligger tæt på Herlev, Ballerup og Rødovre, så jeg kommer gerne hjem til jer der. Som bedemand for Herlev, Ballerup og Rødovre hjælper jeg med alt fra første samtale til urnenedsættelse.
          </p>
        </div>
      </section>
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>Bisættelse, begravelse eller afsked uden ceremoni</h2>
          <p style={s.body}>
            Ved en <strong>bisættelse</strong> holdes ceremonien i kirken eller kapellet, hvorefter kisten køres til kremering, og urnen senere nedsættes eller askespredes. Kremeringen sker på Bispebjerg Krematorium, og jeg sørger for al transport og koordinering, så I ikke selv skal tage stilling til det praktiske.
          </p>
          <p style={s.body}>
            Ved en <strong>begravelse</strong> sænkes kisten i jorden efter ceremonien – fx på Gladsaxe Kirkegård. Og ønsker I det helt stille, kan jeg arrangere en <strong>afsked uden ceremoni</strong>, hvor I eventuelt siger farvel i et kapel i ro, inden kremeringen.
          </p>
          <p style={s.body}>
            Uanset hvad I vælger, får I et skriftligt prisoverslag fra starten, så der ikke kommer overraskelser bagefter. Mine faste priser kan I se på prissiden, og I kan selv regne efter i prisberegneren.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", margin: "8px 0 0" }}>
            <a href="/priser/" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Se priser</a>
            <a href="/prisberegner/" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>Prisberegner</a>
          </div>
        </div>
      </section>
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>Kom forbi, eller lad mig komme til jer</h2>
          <p style={s.body}>
            Nogle familier vil helst sidde i deres egen stue. Andre har brug for at komme lidt hjemmefra. Begge dele er helt i orden. Ring til mig på 28 14 60 11, så finder vi sammen ud af, hvad der er bedst for jer – og hvornår.
          </p>
        </div>
      </section>
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={s.label}>Mine ydelser</p>
          <h2 style={s.h2}>Hvad hjælper jeg med i Søborg og Gladsaxe?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { title: "Bisættelse", desc: "Ceremoni i kirken eller i kapellet på Gladsaxe Kirkegård, med kremering på Bispebjerg Krematorium.", href: "/bisaettelse/" },
              { title: "Begravelse", desc: "Kiste i jord på Gladsaxe Kirkegård. Jeg tager kontakten til kirkegårdskontor, kordegn og præst.", href: "/begravelse/" },
              { title: "Afsked uden ceremoni", desc: "En stille afsked uden fremmøde, direkte til krematoriet. Den enkleste løsning – fra 13.550 kr.", href: "/afsked-uden-ceremoni/" },
              { title: "Kirkelig afsked", desc: "Ceremoni med præst, salmer og jordpåkastelse i fx Søborg Kirke, Gladsaxe Kirke, Buddinge Kirke eller Bagsværd Kirke.", href: "/kirkelig-afsked/" },
              { title: "Borgerlig afsked", desc: "Ceremoni uden religiøse ritualer – kapellet på Gladsaxe Kirkegård kan bruges til både kirkelige og borgerlige ceremonier.", href: "/borgerlig-afsked/" },
              { title: "Askespredning", desc: "Spredning af asken over åbent hav, hvis det var afdødes ønske. Jeg søger tilladelsen for jer.", href: "/askespredning/" },
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
          <p style={s.label}>Gennemsigtige priser</p>
          <h2 style={s.h2}>Hvad koster en begravelse i Søborg og Gladsaxe?</h2>
          <p style={s.body}>
            Mine priser er faste, og de står her på siden. Der er ingen skjulte gebyrer – det I ser, er det I betaler for mit arbejde.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginTop: "32px" }}>
            {[
              { type: "Afsked uden ceremoni", price: "13.550 kr.", href: "/afsked-uden-ceremoni/" },
              { type: "Bisættelse med ceremoni", price: "18.300 kr.", href: "/bisaettelse/" },
              { type: "Begravelse i kiste", price: "19.300 kr.", href: "/begravelse/" },
            ].map((p) => (
              <div key={p.type} style={{ background: "#F9F8F6", padding: "28px 24px", borderRadius: "3px", border: "1px solid #e0dcd6", textAlign: "center" }}>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", color: "#3D6B4F", textTransform: "uppercase", marginBottom: "8px" }}>{p.type}</p>
                <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "28px", color: "#2F3E46", marginBottom: "16px" }}>fra {p.price}</p>
                <a href={p.href} style={{ ...s.link, fontSize: "14px" }}>Læs mere →</a>
              </div>
            ))}
          </div>
          <p style={{ ...s.body, fontSize: "14px", color: "#7a8f99", marginTop: "20px" }}>
            Dertil kommer udgifter til kremering, gravsted, blomster og kapelleje – <a href="/hvad-koster-en-begravelse/" style={s.link}>læs mere om hvad der påvirker prisen</a>.
          </p>
        </div>
      </section>
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>Ofte stillede spørgsmål</h2>
          {FAQ.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.question}</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>{faq.answer}</p>
            </div>
          ))}
          <a href="/faq/" style={s.link}>Se alle spørgsmål og svar →</a>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "56px 32px", textAlign: "center" }}>
        <p style={s.label}>Se også</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Bedemand København", href: "/" },
            { label: "Bedemand Frederiksberg", href: "/frederiksberg/" },
            { label: "Bedemand Nørrebro", href: "/norrebro/" },
            { label: "Bedemand Gentofte", href: "/gentofte/" },
            { label: "Bedemand Lyngby", href: "/lyngby/" },
            { label: "Dækningsområde", href: "/omraade/" },
            { label: "Se priser", href: "/priser/" },
            { label: "Huskeliste", href: "/huskeliste/" },
            { label: "Min Sidste Vilje", href: "/min-sidste-vilje/" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#F9F8F6", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>{link.label}</a>
          ))}
        </div>
      </section>

      <section id="kontakt" style={{ background: "#F9F8F6", padding: "80px 32px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ ...s.label, textAlign: "center" }}>Kontakt Kim</p>
          <h2 style={{ ...s.h2, textAlign: "center", marginBottom: "12px" }}>Skriv til mig</h2>
          <p style={{ ...s.body, textAlign: "center", maxWidth: "480px", margin: "0 auto 40px" }}>
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
          Kender du nogen i Søborg eller Gladsaxe, der kan have brug for en bedemand? Del denne side.
        </p>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://www.bedemandkobenhavn.dk/soborg/")}`}
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

      <footer style={{ background: "#2F3E46", color: "#fff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "12px" }}>Bedemand i Søborg og Gladsaxe – Kim Bondo</p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#b0c4b1", marginBottom: "32px" }}>Ring eller skriv – jeg er tilgængelig hele døgnet.</p>
        <a href="#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none" }}>Kontakt mig</a>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.78)", marginTop: "40px" }}>
          © {new Date().getFullYear()} Bedemand København ApS · Vandtårnsvej 62A, kontor 11, 2860 Søborg · Tlf.: 28 14 60 11 · kim@bedemandkobenhavn.dk · CVR.: 45084159
        </p>
      </footer>
    </div>
  );
}
