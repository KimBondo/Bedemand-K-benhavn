import SEO from "@/components/SEO";
import KimNav from "@/components/KimNav";
import SchemaOrg from "@/components/SchemaOrg";

/**
 * Kim Bondo – Hvad koster en begravelse?
 * SEO landing page targeting high-volume search queries.
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

const NAV = (
  <KimNav />
);

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#84A98C", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#84A98C", textDecoration: "none", borderBottom: "1px solid #84A98C", paddingBottom: "1px" } as React.CSSProperties,
};


export default function KimHvadKoster() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Hvad koster en begravelse i 2026? Priser"
        description="Ærligt overblik over alle udgifter ved begravelse i 2026: bedemand, kiste, kremering, gravsted og begravelseshjælp. Kim Bondo, København."
        url="https://bedemandkobenhavn.dk/kim-bondo/hvad-koster-en-begravelse"
        image="https://bedemandkobenhavn.dk/manus-storage/kim-beach-solo_609d5ab7.png"
      />
      <SchemaOrg
        type="both"
        faqItems={[
          { question: "Hvad koster en begravelse i Danmark?", answer: "En typisk begravelse eller bisættelse koster i 2026 alt fra 20.000 kr. til 60.000 kr. afhængigt af valg af kiste, gravsted, gravsten og ceremonitype." },
          { question: "Hvad er den billigste begravelse?", answer: "Den billigste løsning er afsked uden ceremoni, hvor kisten transporteres direkte til krematoriet. Hos mig starter denne løsning fra 15.500 kr." },
          { question: "Hvad koster en bisættelse i København?", answer: "Mit honorar er 4.500 kr., mens den samlede pakkepris for en bisættelse med ceremoni starter fra 17.395 kr. Dertil kommer kremering, blomster og eventuel kapelleje." },
          { question: "Hvad er begravelseshjælp?", answer: "Det offentlige yder begravelseshjælp til alle afdøde, der var omfattet af dansk sygesikring. I 2026 er tilskuddet op til 13.550 kr. afhængigt af afdødes formue." },
          { question: "Er der skjulte udgifter ved en begravelse?", answer: "Hos mig gennemgås alle udgifter på forhånd, inden I beslutter noget. Ingen overraskelser bagefter." },
        ]}
        breadcrumbs={[
          { name: "Forside", url: "https://bedemandkobenhavn.dk/" },
          { name: "Kim Bondo", url: "https://bedemandkobenhavn.dk/kim-bondo" },
          { name: "Hvad koster en begravelse?", url: "https://bedemandkobenhavn.dk/kim-bondo/hvad-koster-en-begravelse" }
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
      background: #84A98C;
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
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Hvad koster en begravelse?</span>
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
        <p style={s.label}>Priser og økonomi 2026</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto 24px" }}>
          Hvad koster en begravelse eller bisættelse?
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "660px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          Det er et af de mest søgte spørgsmål — og et af de sværeste at svare på, fordi prisen afhænger af mange valg. Her får du et ærligt og konkret overblik.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
            Få et uforpligtende tilbud
          </a>
          <a href="/kim-bondo/priser" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>
            Se mine priser
          </a>
        </div>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#84A98C" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
      </section>

      {/* ── HVAD PÅVIRKER PRISEN ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Hvad påvirker prisen?</p>
          <h2 style={s.h2}>De fem vigtigste valg</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            {[
              { num: "1", title: "Bisættelse eller begravelse?", body: "Bisættelse (kremering) er typisk billigere end begravelse i jord, fordi man undgår udgifterne til gravsted og gravsten. Mange vælger bisættelse med efterfølgende urnenedsættelse." },
              { num: "2", title: "Kirkelig eller borgerlig ceremoni?", body: "En kirkelig ceremoni i Folkekirkens kirker er gratis for medlemmer. En borgerlig ceremoni kræver leje af kapel, hvilket typisk koster 1.000–3.000 kr." },
              { num: "3", title: "Kistens pris", body: "Kister varierer i pris — fra en enkel basiskiste til 6.000 kr. til en massiv fyrretræskiste til 8.000 kr. Jeg tilbyder også hvide kister og naturkister. Jeg hjælper jer med at finde den rigtige." },
              { num: "4", title: "Gravsted og gravsten", body: "Gravstedet er en af de største enkeltudgifter. Prisen afhænger af kommunen, gravstedets størrelse og gravstenstype. Mange vælger fællesgrav for at undgå løbende vedligeholdelse." },
              { num: "5", title: "Blomster og annonce", body: "Blomster og kistepynt er valgfrit og kan tilpasses ethvert budget. En avisannonce er heller ikke obligatorisk — mange familier bruger sociale medier i stedet." },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "40px", height: "40px", background: "#84A98C", borderRadius: "50 %", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "18px" }}>{item.num}</div>
                <div>
                  <h3 style={{ ...s.h3, fontSize: "17px", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ ...s.body, marginBottom: 0, fontSize: "15px" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HVAD PÅVIRKER PRISEN (KØRSLER OG LOGISTIK) ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Logistik og kørsler</p>
          <h2 style={s.h2}>Hvad påvirker prisen på en afsked?</h2>
          <p style={s.body}>
            Prisen på en afsked afhænger i høj grad af, hvor afdøde skal hentes, samt hvor mange kørsler der er behov for med rustvognen.
          </p>
          <p style={s.body}>
            Når afhentningen foregår fra et privat hjem, indebærer det ofte en større praktisk opgave end ved afhentning på et hospital, plejehjem eller hospice. I private hjem er der jævnligt trange pladsforhold og trapper, hvilket kræver mere tid og ekstra ressourcer til at sikre en respektfuld og omsorgsfuld håndtering. Samtidig er det nødvendigt at arrangere afhentningen hurtigt fra enten hjemmet, plejehjemmet eller hospicet, så afdøde kan blive bragt til et kisteophold indtil selve højtideligheden.
          </p>
          <h3 style={s.h3}>Hvor mange kørsler er der brug for?</h3>
          <p style={s.body}>
            Antallet af kørsler med rustvognen har ligeledes indflydelse på den endelige pris. Hvis det er muligt at køre afdøde direkte fra hospitalets kapel til kirken eller kapellet på selve dagen, reduceres antallet af kørsler, hvilket afspejler sig i en lavere pris. Det er dog værd at bemærke, at hospitalernes kapeller som regel holder lukket for afhentning om lørdagen, hvorfor denne løsning primært lader sig gøre på hverdage. Hvis afdøde først skal omvejen forbi et kisteophold, medfører det en ekstra kørsel.
          </p>
          <p style={{ ...s.body, marginBottom: 0 }}>
            Ved en bisættelse, hvor der efterfølgende sker kremering, vil der som udgangspunkt være to kørsler med rustvognen, men hvis afdøde først har været på kisteopholdet, bliver det til tre kørsler i alt. Ved en jordfæstelse, hvor kisten sænkes i jorden, kan logistikken ofte forenkles. Hvis afdøde kan afhentes direkte på hospitalet, og begravelsen foregår på kirkegården lige omkring kirken, kan det klares med en enkelt kørsel, hvilket gør denne løsning mere økonomisk.
          </p>
        </div>
      </section>

      {/* ── BEGRAVELSESHJÆLP ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Reducer udgifterne</p>
          <h2 style={s.h2}>Begravelseshjælp — hvad kan I søge?</h2>
          <p style={s.body}>
            Det offentlige yder begravelseshjælp til alle afdøde, der var omfattet af dansk sygesikring. I 2026 er tilskuddet op til <strong>13.550 kr.</strong> afhængigt af afdødes formue. Minimumstilskuddet er <strong>1.050 kr.</strong>
          </p>
          <p style={s.body}>
            Er afdøde eller den efterlevende ægtefælle/samlever medlem af <strong>Sygeforsikring 'danmark'</strong> gruppe 1 eller 2, kan der søges yderligere op til 1.400 kr.
          </p>
          <p style={s.body}>
            Jeg hjælper med ansøgningen som en del af mit arbejde — I behøver ikke selv stå med det.
          </p>
          <a href="/kim-bondo/begravelseshjaelp" style={s.link}>Læs mere om begravelseshjælp →</a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Ofte stillede spørgsmål</p>
          <h2 style={s.h2}>Spørgsmål om priser</h2>
          {[
            { q: "Hvad er den billigste begravelse?", a: "Den billigste løsning er en afsked uden ceremoni, hvor kisten transporteres direkte til krematoriet. Hos mig starter denne løsning fra 15.500 kr. inkl. alt koordinering, men ekskl. kremering og urne." },
            { q: "Hvad koster en bisættelse i København?", a: "Mit honorar er 4.500 kr., mens den samlede pakkepris for en bisættelse med ceremoni starter fra 17.395 kr. Dertil kommer kremering, blomster og eventuel kapelleje." },
            { q: "Er der skjulte udgifter?", a: "Nej — jeg gennemgår altid alle udgifter med jer på forhånd, inden I beslutter noget. Ingen overraskelser bagefter." },
            { q: "Kan man betale i rater?", a: "Det afhænger af den konkrete situation. Ring til mig, så finder vi en løsning der passer til jer." },
            { q: "Hvad koster det at bruge dig som bedemand?", a: "Mit honorar er 3.500 kr. ved afsked uden ceremoni og 4.500 kr. ved bisættelse eller begravelse med ceremoni. Den samlede pakkepris starter fra 15.500 kr. (uden ceremoni), 17.395 kr. (bisættelse) og 18.500 kr. (begravelse). Se den fulde prisliste på prissiden." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RELATEREDE SIDER ── */}
      <section style={{ background: "#F9F8F6", padding: "64px 32px", textAlign: "center" }}>
        <p style={s.label}>Læs mere</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Se min fulde prisliste", href: "/kim-bondo/priser" },
            { label: "Begravelseshjælp 2026", href: "/kim-bondo/begravelseshjaelp" },
            { label: "Bisættelse", href: "/kim-bondo/bisaettelse" },
            { label: "Begravelse", href: "/kim-bondo/begravelse" },
            { label: "Huskeliste ved dødsfald", href: "/kim-bondo/huskeliste" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#fff", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── DEL PÅ FACEBOOK ── */}
      <section style={{ background: "#fff", padding: "40px 32px", textAlign: "center", borderTop: "1px solid #e0dcd6" }}>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#5a7a6a", marginBottom: "16px" }}>
          Kender du nogen, der står over for at planlægge en begravelse? Del denne side.
        </p>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://bedemandkobenhavn.dk/kim-bondo/hvad-koster-en-begravelse")}`}
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

      {/* ── CTA FOOTER ── */}
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
            background: "#84A98C",
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
