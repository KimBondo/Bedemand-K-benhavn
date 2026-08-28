import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import ContactForm from "@/components/ContactForm";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Bedemand Nørrebro (lokal SEO-landingsside)
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

const FAQ = [
  { question: "Hvem er bedemand på Nørrebro?", answer: "Jeg hedder Kim Bondo og er selvstændig bedemand. Jeg dækker Nørrebro, resten af København og hele Nordsjælland. Ring på 22 21 14 37 — også midt om natten." },
  { question: "Hvad koster en begravelse på Nørrebro?", answer: "En afsked uden ceremoni starter ved 13.550 kr., en bisættelse med ceremoni ved 19.500 kr. og en begravelse i kiste ved 21.500 kr. Oveni kommer kremering, gravsted og eventuel kapelleje, som betales til kommunen. Jeg regner jeres samlede tal sammen, inden I siger ja til noget." },
  { question: "Kan man stadig få gravsted på Assistens Kirkegård?", answer: "Ja. Assistens er fredet og en stor del af den er kirkegårdspark, men omkring en fjerdedel bruges stadig aktivt til begravelser og urnenedsættelser. Jeg hjælper med at finde ud af, hvad der er ledigt i den afdeling, I ønsker." },
  { question: "Hvor foregår ceremonien, når man bor på Nørrebro?", answer: "Enten i en af bydelens kirker eller i Søndre Kapel på Bispebjerg Kirkegård. Der er ingen kapeller på selve Nørrebro, der kan bookes til ceremoni gennem kommunen — og Bispebjerg Krematorium ligger samme sted som kapellet." },
  { question: "Hvad er begravelseshjælp, og kan jeg søge det?", answer: "Begravelseshjælp er et tilskud fra Udbetaling Danmark. Jeg søger den for jer, og beløbet modregnes direkte på fakturaen, så I ikke skal lægge ud." },
];

export default function KimNorrebro() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Bedemand Nørrebro – Kim Bondo, døgnet rundt"
        description="Personlig bedemand på Nørrebro. Assistens Kirkegård ligger midt i bydelen. Faste priser og ingen mellemled. Ring 22 21 14 37 — hele døgnet."
        url="https://www.bedemandkobenhavn.dk/norrebro/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="both"
        faqItems={FAQ}
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Områder", url: "https://www.bedemandkobenhavn.dk/omraade/" },
          { name: "Bedemand Nørrebro", url: "https://www.bedemandkobenhavn.dk/norrebro/" },
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
          <a href="/" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2, textDecoration: "none" }}>Bedemand Nørrebro</a>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – personlig bedemand på Nørrebro</span>
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
      {/* ── BRØDKRUMMESTI ── */}
      <nav aria-label="breadcrumb" style={{ background: "#F0EDE8", padding: "10px 24px", borderBottom: "1px solid #e0dcd6" }}>
        <ol style={{ display: "flex", alignItems: "center", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#7a8f99", flexWrap: "wrap" }}>
          <li>
            <a href="/" style={{ color: "#3D6B4F", textDecoration: "none" }}>Forsiden</a>
          </li>
          <li style={{ color: "#b0b8bc" }}>›</li>
          <li>
            <a href="/omraade/" style={{ color: "#3D6B4F", textDecoration: "none" }}>Områder</a>
          </li>
          <li style={{ color: "#b0b8bc" }}>›</li>
          <li style={{ color: "#3d4f5a", fontWeight: 600 }}>
            Bedemand Nørrebro
          </li>
        </ol>
      </nav>


      {/* ── HERO ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px 56px", textAlign: "center" }}>
        <p style={s.label}>Bedemand på Nørrebro</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto 24px" }}>
          Personlig bedemand på Nørrebro
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "660px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          Jeg er selvstændig bedemand og hjælper familier på Nørrebro med en rolig og værdig afsked. Én person hele vejen — og telefonen er åben døgnet rundt.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a href="#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Kontakt mig</a>
          <a href="/priser/" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>Se priser</a>
        </div>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
      </section>

      {/* ── OM KIM PÅ NØRREBRO ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Nærværende og tilgængelig</p>
          <h2 style={s.h2}>Bedemand på Nørrebro</h2>
          <p style={s.body}>
            Nørrebro er tæt, blandet og fuld af liv, og midt i det hele ligger Assistens Kirkegård fra 1760. Den er fredet og kendt langt ud over bydelen, men den er stadig en kirkegård i brug — man kan sagtens få gravsted der. Kremeringen sker på Bispebjerg Krematorium lige nord for bydelen.
          </p>
          <p style={s.body}>
            Hos mig er der ingen omstilling og ingen sagsbehandler. Det er den samme person, I taler med fra første opkald til sidste hilsen, og jeg kører selv ud — også aften, weekend og helligdage.
          </p>
          <h3 style={{ ...s.h3, marginTop: "36px" }}>Kirker, kapeller og kirkegårde på Nørrebro</h3>
          <p style={s.body}>
            På Assistens ligger Søren Kierkegaard, H.C. Andersen og Niels Bohr — og Dan Turèll og Natasja. Omkring en fjerdedel af arealet bruges stadig aktivt til begravelser og urnenedsættelser; resten er kirkegårdspark med gratis rundvisninger og guider. I Møllegade ligger desuden Mosaisk Nordre Begravelsesplads fra 1690'erne, der er fredet og ikke længere i brug.
          </p>
          <p style={s.body}>
            Nørrebro har ingen kapeller, der kan bookes til ceremoni gennem Københavns Kommune. Det nærmeste er Søndre Kapel på Bispebjerg Kirkegård, og det bruger jeg jævnligt. Blandt kirkerne er Sankt Johannes Kirke ved Blegdamsvej, Hellig Kors Kirke på Kapelvej, Brorsons Kirke i Rantzausgade, Simeons Kirke i Sjællandsgade og Bethlehemskirken på Åboulevard. Bispebjerg er i øvrigt sin egen bydel — både kirkegården, krematoriet og Grundtvigs Kirke ligger dér.
          </p>
          <a href="/om-kim/" style={s.link}>Læs mere om Kim Bondo →</a>
        </div>
      </section>

      {/* ── YDELSER ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={s.label}>Mine ydelser</p>
          <h2 style={s.h2}>Hvad hjælper jeg med på Nørrebro?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { title: "Bisættelse", desc: "Kremering på Bispebjerg Krematorium med ceremoni i kirke eller i Søndre Kapel.", href: "/bisaettelse/" },
              { title: "Begravelse", desc: "Kiste i jord på Assistens Kirkegård eller en af de nærliggende kirkegårde. Jeg koordinerer med kirkegårdskontor, kordegn og præst.", href: "/begravelse/" },
              { title: "Afsked uden ceremoni", desc: "En stille afsked uden fremmøde, direkte til krematoriet. Den enkleste løsning — fra 13.550 kr.", href: "/afsked-uden-ceremoni/" },
              { title: "Kirkelig afsked", desc: "Ceremoni med præst, salmer og jordpåkastelse i fx Sankt Johannes Kirke eller Hellig Kors Kirke.", href: "/kirkelig-afsked/" },
              { title: "Borgerlig afsked", desc: "Ceremoni uden religiøse ritualer — typisk i Søndre Kapel på Bispebjerg eller et sted, I selv vælger.", href: "/borgerlig-afsked/" },
              { title: "Askespredning", desc: "Spredning af asken over åbent hav. Jeg står for tilladelser og papirarbejde.", href: "/askespredning/" },
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
          <h2 style={s.h2}>Hvad koster en begravelse på Nørrebro?</h2>
          <p style={s.body}>
            Mine priser er faste, og de står her på siden. Der er ingen skjulte gebyrer — det I ser, er det I betaler for mit arbejde.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginTop: "32px" }}>
            {[
              { type: "Afsked uden ceremoni", price: "13.550 kr.", href: "/afsked-uden-ceremoni/" },
              { type: "Bisættelse med ceremoni", price: "19.500 kr.", href: "/bisaettelse/" },
              { type: "Begravelse i kiste", price: "21.500 kr.", href: "/begravelse/" },
            ].map((p) => (
              <div key={p.type} style={{ background: "#F9F8F6", padding: "28px 24px", borderRadius: "3px", border: "1px solid #e0dcd6", textAlign: "center" }}>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", color: "#3D6B4F", textTransform: "uppercase", marginBottom: "8px" }}>{p.type}</p>
                <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "28px", color: "#2F3E46", marginBottom: "16px" }}>fra {p.price}</p>
                <a href={p.href} style={{ ...s.link, fontSize: "14px" }}>Læs mere →</a>
              </div>
            ))}
          </div>
          <p style={{ ...s.body, fontSize: "14px", color: "#7a8f99", marginTop: "20px" }}>
            Dertil kommer udgifter til kremering, gravsted, blomster og kapelleje — <a href="/hvad-koster-en-begravelse/" style={s.link}>læs mere om hvad der påvirker prisen</a>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Spørgsmål og svar</p>
          <h2 style={s.h2}>Spørgsmål om bedemand på Nørrebro</h2>
          {FAQ.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.question}</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>{faq.answer}</p>
            </div>
          ))}
          <a href="/faq/" style={s.link}>Se alle spørgsmål og svar →</a>
        </div>
      </section>

      {/* ── SE OGSÅ ── */}
      <section style={{ background: "#fff", padding: "56px 32px", textAlign: "center" }}>
        <p style={s.label}>Se også</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Bedemand København", href: "/kobenhavn/" },
            { label: "Bedemand Frederiksberg", href: "/frederiksberg/" },
            { label: "Bedemand Østerbro", href: "/osterbro/" },
            { label: "Bedemand Gentofte", href: "/gentofte/" },
            { label: "Dækningsområde", href: "/omraade/" },
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
          <p style={{ marginTop: "24px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F", textAlign: "center" }}>
            eller ring direkte på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
          </p>
        </div>
      </section>

      {/* ── DEL PÅ FACEBOOK ── */}
      <section style={{ background: "#fff", padding: "40px 32px", textAlign: "center", borderTop: "1px solid #e0dcd6" }}>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#5a7a6a", marginBottom: "16px" }}>
          Kender du nogen på Nørrebro, der kan have brug for en bedemand? Del denne side.
        </p>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://www.bedemandkobenhavn.dk/norrebro")}`}
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
      <footer style={{ background: "#2F3E46", color: "#fff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "12px" }}>Bedemand på Nørrebro – Kim Bondo</p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#b0c4b1", marginBottom: "32px" }}>Ring eller skriv — jeg er tilgængelig hele døgnet.</p>
        <a href="#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Kontakt mig</a>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
        <p style={{ marginTop: "48px", fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.78)" }}>
          © {new Date().getFullYear()} Kim Bondo – Bedemand Nørrebro &nbsp;·&nbsp;
          <a href="/" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none" }}>Forsiden</a>
          &nbsp;·&nbsp;
          <a href="/omraade/" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none" }}>Dækningsområde</a>
          &nbsp;·&nbsp;
          <a href="/persondatapolitik/" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none" }}>Persondatapolitik</a>
          &nbsp;·&nbsp;
          <a href="#cookieindstillinger" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none" }}>Cookieindstillinger</a>
        </p>
      </footer>
    </div>
  );
}
