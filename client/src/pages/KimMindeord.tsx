import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Mindeord og tale ved begravelse
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

const NAV = (
  <KimNav />
);

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" },
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" },
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" },
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" },
  stepNum: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "48px", color: "#e0dcd6", lineHeight: 1, marginBottom: "8px" },
};

export default function KimMindeord() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Mindeord og tale ved begravelse – skabelon og eksempel"
        description="Sådan skriver du mindeord og en tale til en begravelse eller bisættelse. En enkel skabelon, et eksempel og gode råd. Ring til Kim på 28 14 60 11."
        url="https://www.bedemandkobenhavn.dk/mindeord/"
      />

      <SchemaOrg
        type="both"
        article={{ headline: "Mindeord og tale ved en begravelse eller bisættelse", url: "https://www.bedemandkobenhavn.dk/mindeord/", datePublished: "2026-10-19", dateModified: "2026-10-19", image: "https://www.bedemandkobenhavn.dk/images/kim-bondo-bedemand-og.jpg" }}
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Mindeord", url: "https://www.bedemandkobenhavn.dk/mindeord/" }
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
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Mindeord og tale</span>
        </div>
        <KimNav />
        {/* ── MOBIL RING-KNAP (kun synlig på mobil) ── */}
        <a
          href="tel:+4528146011"
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
        <p style={s.label}>Praktisk vejledning</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "760px", margin: "0 auto 24px" }}>
          Mindeord og tale ved en begravelse eller bisættelse
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#5a7a6a", margin: "-8px auto 24px", letterSpacing: "0.02em" }}>
          Opdateret <time dateTime="2026-10-19">oktober 2026</time> · Skrevet af <a href="/om-kim/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F" }}>Kim Bondo</a>, bedemand
        </p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
          Mange får til opgave at sige et par ord ved kisten – og ved ikke, hvor de skal begynde. Det behøver ikke være langt eller poleret. Det vigtigste er, at det er jeres egne ord.
        </p>
      </section>

      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>En enkel skabelon (2–4 minutter)</h2>
          <ol style={{ paddingLeft: "24px", margin: 0 }}>
            <li style={{ ...s.body, marginBottom: "10px" }}><strong>Hvem var hun eller han for dig?</strong> – "Mor var den, der altid …"</li>
            <li style={{ ...s.body, marginBottom: "10px" }}><strong>Et minde, der siger noget om hende eller ham</strong> – en lille historie fra hverdagen.</li>
            <li style={{ ...s.body, marginBottom: "10px" }}><strong>Det, I vil huske og tage med jer.</strong></li>
            <li style={{ ...s.body, marginBottom: 0 }}><strong>Et farvel</strong> – "Tak for alt. Vi savner dig."</li>
          </ol>
        </div>
      </section>

      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>Et eksempel</h2>
          <blockquote style={{ margin: 0, padding: "4px 0 4px 20px", borderLeft: "3px solid #3D6B4F" }}>
            <p style={{ ...s.body, fontFamily: "'Lora', serif", fontStyle: "italic", marginBottom: 0 }}>
              Kære far. Du var ikke en mand af mange ord, men du var der altid. Når cyklen var punkteret, når eksamen gik skævt, når vi bare havde brug for en kop kaffe ved køkkenbordet. Du lærte os, at man hjælper hinanden – uden at gøre et nummer ud af det. Det tager vi med os. Tak for alt, far. Sov godt.
            </p>
          </blockquote>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>Gode råd, før I skal stå der</h2>
          <p style={s.body}>
            Skriv talen ned, og læs den højt for en anden dagen før. Print den med stor skrift. Det er helt i orden at stoppe op og trække vejret – eller at bede en anden læse den op for dig. Taler I flere, så aftal på forhånd, hvem der siger hvad, så I ikke fortæller de samme historier. Ved en <a href="/kirkelig-afsked/" style={s.link}>kirkelig afsked</a> aftaler I med præsten, hvornår i ceremonien mindeordene skal være. Ved en <a href="/borgerlig-afsked/" style={s.link}>borgerlig afsked</a> er det jer, der bestemmer rækkefølgen.
          </p>
          <p style={{ ...s.body, marginBottom: 0 }}>
            Vil I have hjælp, kan vi tale det igennem sammen, når vi planlægger afskeden.
          </p>
        </div>
      </section>

      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>Mindeord i dødsannoncen</h2>
          <p style={s.body}>
            En dødsannonce har ofte en kort linje over eller under navnet. Den kan være helt enkel:
          </p>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ ...s.body, marginBottom: "10px" }}>Elsket og savnet</li>
            <li style={{ ...s.body, marginBottom: "10px" }}>Tak for alt</li>
            <li style={{ ...s.body, marginBottom: "10px" }}>Altid i vores hjerter</li>
            <li style={{ ...s.body, marginBottom: "10px" }}>Din kærlighed lever videre i os</li>
            <li style={{ ...s.body, marginBottom: "10px" }}>Fred være med dit minde</li>
          </ul>
          <p style={{ ...s.body, marginBottom: 0 }}>
            Mange vælger også en linje fra en salme, et digt eller en sang, som betød noget for afdøde. Jeg hjælper gerne med at skrive annoncen og få den sat i avisen. Udarbejdelse og indrykning koster <a href="/priser/" style={s.link}>400 kr.</a> plus avisens pris.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "72px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ ...s.body, marginBottom: "28px" }}>
            Har I spørgsmål, så ring til mig på <a href="tel:+4528146011" style={s.link}>28 14 60 11</a> – døgnet rundt.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <a href="tel:+4528146011" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Ring 28 14 60 11</a>
            <a href="/#kontakt" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>Kontakt mig</a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
          Vandtårnsvej 62A, kontor 11, 2860 Søborg
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
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, kontor 11, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a
            href="tel:+4528146011"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Tlf.: 28 14 60 11
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
            href="/min-sidste-vilje/"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Min Sidste Vilje
          </a>
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
