import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Huskeliste ved dødsfald
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

export default function KimHuskeliste() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Huskeliste ved dødsfald – Bedemand Kim Bondo"
        description="Hvad skal du gøre, når en nærtstående dør? Kim Bondos trin-for-trin huskeliste hjælper dig i den svære tid. Ring 22 21 14 37."
        url="https://www.bedemandkobenhavn.dk/kim-bondo/huskeliste"
        image="/images/kim-beach-solo_609d5ab7.webp"
      />

      <SchemaOrg
        type="both"
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Kim Bondo", url: "https://bedemandkobenhavn.dk/kim-bondo" },
          { name: "Huskeliste", url: "https://bedemandkobenhavn.dk/kim-bondo/huskeliste" }
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
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Huskeliste ved dødsfald</span>
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
        <p style={s.label}>Praktisk vejledning</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "760px", margin: "0 auto 24px" }}>
          Huskeliste ved dødsfald
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          Når man mister en nærtstående, fylder sorgen meget — og alligevel er der en række praktiske ting, der skal ordnes. Her er et overblik over de vigtigste skridt, og hvad jeg hjælper med.
        </p>
        <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
          Kontakt mig
        </a>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
      </section>

      {/* ── TRIN 1 ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.stepNum}>1</p>
          <h2 style={s.h2}>Den første planlægning</h2>

          <h3 style={s.h3}>Læge og dødsattest</h3>
          <p style={s.body}>
            Det første der skal ske er, at en læge konstaterer dødsfaldet og udsteder en dødsattest. Sker dødsfaldet på hospital eller hospice, sker dette automatisk. Sker det i hjemmet, skal lægen kontaktes. Jeg hjælper med at arrangere afhentning af afdøde, så afdøde kan bringes til et ventekapel.
          </p>

          <h3 style={s.h3}>Begravelse, bisættelse eller askespredning?</h3>
          <p style={s.body}>
            Der skal tages stilling til, hvordan afskeden skal foregå — og om der skal være en ceremoni. Skal det være en <a href="/kim-bondo/kirkelig-afsked" style={s.link}>kirkelig</a> eller <a href="/kim-bondo/borgerlig-afsked" style={s.link}>borgerlig</a> ceremoni, eller en <a href="/kim-bondo/afsked-uden-ceremoni" style={s.link}>afsked uden ceremoni</a>? Økonomi spiller også en rolle — se <a href="/kim-bondo/priser" style={s.link}>mine priser</a> for et realistisk overblik.
          </p>

          <h3 style={s.h3}>Dødsanmeldelse til myndighederne</h3>
          <p style={s.body}>
            Der skal foretages en dødsanmeldelse til afdødes bopælssogn. Jeg hjælper med dette som en del af mit arbejde, så I ikke selv skal stå med det.
          </p>

          <h3 style={s.h3}>Mindesamvær</h3>
          <p style={s.body}>
            Mange ønsker at holde et mindesamvær efter ceremonien — til en kop kaffe og kage, eller noget andet. Det aftaler I selv med det ønskede sted (café, restaurant, sognehus o.l.). Jeg hjælper gerne med at koordinere.
          </p>
        </div>
      </section>

      {/* ── TRIN 2 ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.stepNum}>2</p>
          <h2 style={s.h2}>I forbindelse med selve afskeden</h2>
          <p style={s.body}>Jeg hjælper med planlægning og sammenfatter alle aftaler i en bekræftelse til jer. Det kan dog være godt at have gjort sig tanker om:</p>
          <ul style={{ paddingLeft: "24px" }}>
            {[
              "Tidspunkt for afhentning af afdøde og evt. alenetid ved kisten",
              "Tøj som afdøde ønskes iklædt",
              "Tidspunkt for ceremoni i kapel eller kirke",
              "Evt. samtale med præst",
              "Valg af gravsted på kirkegård",
              "Evt. aftale om gravsten med stenhugger — jeg hjælper gerne med kontakt",
              "Blomster til ceremonien",
              "Evt. dødsannonce",
              "6 personer til at bære kisten, hvis kisten ikke skal blive stående",
              "Urnenedsættelse eller askespredning, hvis deltagelse er ønsket",
            ].map((item) => (
              <li key={item} style={{ ...s.body, marginBottom: "10px" }}>{item}</li>
            ))}
          </ul>
          <p style={{ ...s.body, marginTop: "8px" }}>
            I Danmark skal en begravelse eller bisættelse som udgangspunkt finde sted senest 8 dage efter dødsfaldet. I praksis planlægges det ofte inden for 14 dage.
          </p>
        </div>
      </section>

      {/* ── TRIN 3 ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.stepNum}>3</p>
          <h2 style={s.h2}>Økonomi</h2>

          <h3 style={s.h3}>Begravelseshjælp</h3>
          <p style={s.body}>
            Alle afdøde, der er omfattet af dansk sygesikring, kan have ret til begravelseshjælp. I 2026 er det maksimale tilskud op til <strong>13.550 kr.</strong> Jeg hjælper med at ansøge om begravelseshjælp som en del af mit arbejde. <a href="/kim-bondo/begravelseshjaelp" style={s.link}>Læs mere om begravelseshjælp →</a>
          </p>

          <h3 style={s.h3}>Skifteretten</h3>
          <p style={s.body}>
            Via dødsanmeldelsen får Skifteretten besked om dødsfaldet og vil kontakte den pårørende, der er anført som anmelder. I behøver normalt ikke foretage jer noget aktivt, før I bliver kontaktet — det sker typisk via Digital Post (e-Boks).
          </p>

          <h3 style={s.h3}>Bank og pengeinstitut</h3>
          <p style={s.body}>
            Afdødes pengeinstitut modtager automatisk besked fra Folkeregistret, og alle konti — inkl. fælleskonti — vil blive spærret. Tag kontakt til banken for at aftale adgang til den nødvendige økonomi. De fleste banker accepterer, at begravelsesudgifter betales via afdødes konto, hvis der er midler.
          </p>

          <h3 style={s.h3}>Efterlevelsespension og -hjælp</h3>
          <p style={s.body}>
            Efterlevende ægtefæller eller samlevere kan i visse tilfælde have ret til efterlevelsespension eller efterlevelseshjælp. Kontakt Udbetaling Danmark for at afklare dette.
          </p>
        </div>
      </section>

      {/* ── TRIN 4 ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.stepNum}>4</p>
          <h2 style={s.h2}>Opsigelser og afmeldinger</h2>
          <p style={s.body}>Forsikringsselskaber og mange offentlige instanser får automatisk besked via Folkeregistret. Der er dog en række ting, det kan være relevant at tage hånd om:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            <div>
              <h3 style={{ ...s.h3, fontSize: "17px" }}>Bolig</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>Ejerbolig håndteres via Skifteretten. Lejebolig: kontakt udlejer for navneændring eller opsigelse.</p>
            </div>
            <div>
              <h3 style={{ ...s.h3, fontSize: "17px" }}>Abonnementer</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>Telefon, internet, TV, aviser, blade, foreningsmedlemskaber og lignende skal opsiges manuelt.</p>
            </div>
            <div>
              <h3 style={{ ...s.h3, fontSize: "17px" }}>Praktisk i hjemmet</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>Tøm køleskab, vand blomster, sørg for passende varme. Husdyr skal passes. Jagttegn eller våben — kontakt politiet.</p>
            </div>
            <div>
              <h3 style={{ ...s.h3, fontSize: "17px" }}>Online profiler</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>Facebook og andre sociale medier kan omdannes til mindesider eller slettes efter familiens ønske.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRIN 5 ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.stepNum}>5</p>
          <h2 style={s.h2}>Betaling af begravelsesudgifter</h2>
          <p style={s.body}>
            Det er den person, der bestiller begravelsen, der hæfter for betalingen — ikke Skifteretten. Skifteretten sørger for, at udgifterne indgår i boet, så den der har betalt kan blive godtgjort.
          </p>
          <p style={s.body}>
            Typiske udgifter der skal betales: bedemand, krematorium, kirkegård, mindesamvær og blomster. Jeg gennemgår alle udgifter med jer på forhånd, så der ikke er overraskelser.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Ofte stillede spørgsmål</p>
          <h2 style={s.h2}>Spørgsmål om hvad der sker ved dødsfald</h2>
          {[
            { q: "Hvad skal man gøre først ved dødsfald?", a: "Det første er at kontakte en læge, der konstaterer dødsfaldet og udsteder en dødsattest. Herefter kan jeg kontaktes, og jeg hjælper med anmeldelse til myndighederne og den videre planlægning." },
            { q: "Hvem har ansvaret for at planlægge begravelsen?", a: "Det er den person, der bestiller begravelsen, der har det juridiske ansvar for planlægningen og betalingen. Oftest er det den nærmeste pårørende." },
            { q: "Hvad hjælper Kim med?", a: "Jeg hjælper med anmeldelse af dødsfaldet, koordinering med kirke, kapel og krematorium, bestilling af kiste og urne, ansøgning om begravelseshjælp og den praktiske planlægning — så I kan bruge energien på hinanden." },
            { q: "Kan man få begravelseshjælp?", a: "Ja, i mange tilfælde. I 2026 er det maksimale offentlige tilskud op til 13.550 kr. Jeg hjælper med ansøgningen. Læs mere på siden om begravelseshjælp." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEL PÅ FACEBOOK ── */}
      <section style={{ background: "#fff", padding: "40px 32px", textAlign: "center", borderTop: "1px solid #e0dcd6" }}>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#5a7a6a", marginBottom: "16px" }}>
          Kender du nogen, der kan have brug for denne huskeliste?
        </p>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://www.bedemandkobenhavn.dk/kim-bondo/huskeliste")}`}
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
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="/kim-bondo/persondatapolitik"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}
          >
            Persondatapolitik
          </a>
        </p>
      </footer>
    </div>
  );
}
