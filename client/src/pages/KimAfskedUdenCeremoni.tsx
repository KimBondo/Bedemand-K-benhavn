import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Afsked uden ceremoni
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

export default function KimAfskedUdenCeremoni() {
  return (
    <div
      style={{
        fontFamily: "'Open Sans', sans-serif",
        background: "#F9F8F6",
        color: "#2F3E46",
        margin: 0,
        padding: 0,
      }}
    >
      <SEO
        title="Afsked uden ceremoni – Bedemand Kim Bondo"
        description="Enkel afsked uden ceremoni i København. Kremering og urnenedsættelse uden kirke. Fra 15.500 kr. Kim Bondo – ring 22 21 14 37 døgnet rundt."
        url="https://bedemandkobenhavn.dk/kim-bondo/afsked-uden-ceremoni"
        image="https://bedemandkbh-8wuvn9as.manus.space/manus-storage/kim-beach-solo_609d5ab7.png"
      />

      {/* ── HEADER ── */}
      <header
        style={{
          background: "#F9F8F6",
          padding: "20px 24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          gap: "8px",
          borderBottom: "1px solid #e0dcd6",
        }}
      >
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
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>
            ← Tilbage til Kim Bondo
          </a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>
            Bedemand København og Nordsjælland
          </span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>
            Kim Bondo – Afsked uden ceremoni
          </span>
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
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#84A98C", textTransform: "uppercase", marginBottom: "16px" }}>
          Afsked uden ceremoni
        </p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, marginBottom: "24px", maxWidth: "700px", margin: "0 auto 24px" }}>
          En enkel og respektfuld afsked
        </h1>
        <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", color: "#5a7a6a", lineHeight: 1.7, maxWidth: "620px", margin: "0 auto 40px" }}>
          Ikke alle afskeder behøver en formel ceremoni. En afsked uden ceremoni er en stille og diskret løsning, der håndteres med samme omsorg og værdighed som alle andre afskeder.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.05em" }}>
            Kontakt mig
          </a>
          <a href="/kim-bondo/priser" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>
            Se priser
          </a>
        </div>
        <p style={{ fontSize: "14px", color: "#9aacb4", marginTop: "16px" }}>
          eller ring på{" "}
          <a href="tel:22211437" style={{ color: "#84A98C", fontWeight: 600, textDecoration: "none" }}>22 21 14 37</a>
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── HVAD ER DET ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 30px)", color: "#2F3E46", marginBottom: "20px", lineHeight: 1.3 }}>
          Hvad er en afsked uden ceremoni?
        </h2>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
          En afsked uden ceremoni betyder, at der ikke afholdes en formel højtidelighed i kirke, kapel eller anden lokation. I stedet transporteres afdøde direkte til krematoriet eller gravstedet, hvor den praktiske del håndteres med respekt og omhu.
        </p>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
          Det er ikke en kold eller upersonlig afsked – det er blot en enklere form. Mange familier vælger at holde en mindesammenkomst på et andet tidspunkt, for eksempel ved urnenedsættelsen, ved <a href="/kim-bondo/askespredning" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>askespredningen</a> eller på en særlig mærkedag.
        </p>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8 }}>
          Løsningen kan kombineres med både <a href="/kim-bondo/bisaettelse" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>bisættelse</a> og <a href="/kim-bondo/begravelse" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>begravelse</a>.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── HVORNÅR GIVER DET MENING ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 30px)", color: "#2F3E46", marginBottom: "20px", lineHeight: 1.3 }}>
          Hvornår vælger man en afsked uden ceremoni?
        </h2>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
          Der er mange grunde til at vælge denne løsning. Afdøde kan have ønsket en stille og diskret afsked. Familien kan foretrække en mere privat og uformel ramme frem for en traditionel ceremoni. Praktiske hensyn kan spille ind, for eksempel hvis familien bor spredt eller har særlige behov. Og for nogen er det en bevidst prioritering af det enkle og ukomplicerede.
        </p>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8 }}>
          Uanset årsagen behandler jeg afdøde og familien med den samme omsorg og respekt som ved alle andre afskeder. Der er ingen rigtig eller forkert måde at sige farvel på.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── FORLØBET ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 30px)", color: "#2F3E46", marginBottom: "32px", lineHeight: 1.3 }}>
          Sådan foregår en afsked uden ceremoni
        </h2>
        {[
          { num: "1", title: "Første kontakt", text: "Vi taler om jeres ønsker og de praktiske detaljer. Jeg sørger for al koordinering med krematorium eller kirkegård og håndterer alle administrative opgaver." },
          { num: "2", title: "Kisteilægning", text: "Afdøde lægges i kisten med omsorg og værdighed. I kan vælge at være til stede, hvis det føles rigtigt." },
          { num: "3", title: "Transport til krematorium eller gravsted", text: "Kisten transporteres direkte til krematoriet eller gravstedet. Kremeringen eller jordfæstelsen gennemføres med respekt." },
          { num: "4", title: "Urne eller gravsted", text: "Ved bisættelse samles asken i en urne, som efterfølgende kan nedsættes, spredes over havet eller tages med til udlandet. Ved begravelse stedfæstes kisten på gravstedet." },
        ].map((step) => (
          <div key={step.num} style={{ display: "flex", gap: "24px", marginBottom: "40px", alignItems: "flex-start" }}>
            <div style={{ minWidth: "44px", height: "44px", borderRadius: "50%", background: "#84A98C", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "18px", flexShrink: 0 }}>
              {step.num}
            </div>
            <div>
              <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(16px, 1.8vw, 20px)", color: "#2F3E46", marginBottom: "8px" }}>{step.title}</h3>
              <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#4a6270", lineHeight: 1.8 }}>{step.text}</p>
            </div>
          </div>
        ))}
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── PRIS ── */}
      <section style={{ background: "#f0f4f2", padding: "80px 32px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 30px)", color: "#2F3E46", marginBottom: "20px" }}>
          Hvad koster en afsked uden ceremoni?
        </h2>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, maxWidth: "620px", margin: "0 auto 32px" }}>
          En afsked uden ceremoni starter fra <strong>15.500 kr.</strong> Det er den mest enkle løsning og inkluderer mit honorar, koordinering, kisteilægning, rustvognskørsel og kiste. Udgifter som kremering, gravsted og urne kommer oveni – jeg hjælper med at indhente tilbud og holde overblikket.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a href="/kim-bondo/priser" style={{ display: "inline-block", background: "#84A98C", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.05em" }}>
            Se den fulde prisliste
          </a>
          <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>
            Kontakt mig
          </a>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── FAQ ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 30px)", color: "#2F3E46", marginBottom: "40px", lineHeight: 1.3 }}>
          Ofte stillede spørgsmål
        </h2>
        {[
          { q: "Kan man holde en mindesammenkomst på et andet tidspunkt?", a: "Ja. Mange familier vælger at holde en mindesammenkomst på et senere tidspunkt – for eksempel ved urnenedsættelsen, ved askespredningen eller på en særlig mærkedag. Det giver tid til at samle familien og skabe en personlig ramme.", link: null, linkText: null },
          { q: "Kan en afsked uden ceremoni kombineres med askespredning?", a: "Ja. Efter en bisættelse uden ceremoni kan urnen bruges til askespredning over havet, hvis afdøde har ønsket det.", link: "/kim-bondo/askespredning", linkText: "Læs mere om askespredning" },
          { q: "Er en afsked uden ceremoni billigere?", a: "Ja, det er typisk den mest enkle og prisvenlige løsning, da der ikke er udgifter til kirke eller kapel. Men prisen afhænger stadig af valg af kiste, urne og kørsel.", link: "/kim-bondo/priser", linkText: "Se den fulde prisliste" },
          { q: "Behandles afdøde stadig med værdighed?", a: "Absolut. Uanset om der er ceremoni eller ej, behandler jeg afdøde og familien med den samme omsorg og respekt. Der er ingen forskel i omhu – kun i form.", link: null, linkText: null },
          { q: "Hvad er forskellen på afsked uden ceremoni og en traditionel bisættelse?", a: "En traditionel bisættelse inkluderer en ceremoni i kirke eller kapel med pårørende til stede. En afsked uden ceremoni fokuserer udelukkende på den praktiske håndtering, uden en formel højtidelighed.", link: "/kim-bondo/bisaettelse", linkText: "Læs mere om bisættelse" },
        ].map((item, i) => (
          <div key={i} style={{ borderTop: "1px solid #e0dcd6", paddingTop: "28px", paddingBottom: "28px" }}>
            <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(15px, 1.7vw, 18px)", color: "#2F3E46", marginBottom: "12px", lineHeight: 1.4 }}>{item.q}</h3>
            <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#4a6270", lineHeight: 1.8 }}>
              {item.a}{" "}
              {item.link && <a href={item.link} style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>{item.linkText}</a>}
            </p>
          </div>
        ))}
      </section>

      {/* ── FOOTER / RELATEREDE ── */}
      <section style={{ background: "#2F3E46", padding: "64px 32px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: "24px" }}>
          Andre afskeder
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginBottom: "48px" }}>
          {[
            { label: "Bisættelse", href: "/kim-bondo/bisaettelse" },
            { label: "Begravelse", href: "/kim-bondo/begravelse" },
            { label: "Askespredning", href: "/kim-bondo/askespredning" },
            { label: "Se alle afskeder", href: "/kim-bondo/afskeder" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(15px, 1.8vw, 18px)", padding: "18px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.05em" }}>
          Kontakt mig
        </a>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "16px" }}>
          eller ring på{" "}
          <a href="tel:22211437" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>22 21 14 37</a>
        </p>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)", marginTop: "40px" }}>
          © {new Date().getFullYear()} Bedemand København ApS · Kim Bondo · Vandtårnsvej 62A, 2860 Søborg
        </p>
      </section>
    </div>
  );
}
