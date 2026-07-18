import SEO from "@/components/SEO";

/**
 * Kim Bondo – Afskeder (oversigtsside)
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

export default function KimAfskeder() {
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
        title="Afskeder – Bedemand Kim Bondo, København og Nordsjælland"
        description="Bisættelse, begravelse, afsked uden ceremoni eller askespredning – Kim Bondo hjælper jer med at finde den afskedsform, der passer til jer. Gennemsigtige priser fra 15.500 kr."
        url="https://bedemandkobenhavn.dk/kim-bondo/afskeder"
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
          gap: "8px",
          borderBottom: "1px solid #e0dcd6",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>
            ← Tilbage til Kim Bondo
          </a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>
            Bedemand København og Nordsjælland
          </span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>
            Kim Bondo – Afskeder
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Om Kim</a>
          <a href="/kim-bondo/afskeder" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Afskeder</a>
          <a href="/kim-bondo/priser" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Priser</a>
          <a href="/kim-bondo#kontakt" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Kontakt</a>
          <a href="/kim-bondo/faq" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>FAQ</a>
          <a href="tel:22211437" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(14px, 1.6vw, 18px)", color: "#84A98C", textDecoration: "none", whiteSpace: "nowrap", letterSpacing: "0.03em" }}>Tlf: 22 21 14 37</a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px 56px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#84A98C", textTransform: "uppercase", marginBottom: "16px" }}>
          Afskeder
        </p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, marginBottom: "24px", maxWidth: "700px", margin: "0 auto 24px" }}>
          Find den afsked, der passer til jer
        </h1>
        <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", color: "#5a7a6a", lineHeight: 1.7, maxWidth: "620px", margin: "0 auto 40px" }}>
          Der er ingen rigtig eller forkert måde at sige farvel på. Jeg hjælper jer med at finde den form, der passer til afdødes ønsker og familiens behov – og jeg er med jer hele vejen.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── DE FIRE AFSKEDER ── */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "40px" }}>
          {[
            {
              title: "Bisættelse",
              tag: "Mest valgte",
              desc: "En bisættelse er den mest valgte afskedsform i Danmark. Afdøde kremeres efter ceremonien, og asken samles i en urne. Urnen kan nedsættes på en kirkegård, spredes over havet eller tages med til udlandet.",
              details: ["Kirkelig eller borgerlig ceremoni", "Kremering og urne", "Fleksibel stedfæstelse af asken", "Priser fra 17.395 kr."],
              href: "/kim-bondo/bisaettelse",
              linkText: "Læs om bisættelse",
            },
            {
              title: "Begravelse",
              tag: "Traditionel",
              desc: "En begravelse er en traditionel afskedsform, hvor kisten sænkes i jorden på et gravsted. Det giver et varigt sted at mindes og vende tilbage til.",
              details: ["Kirkelig eller borgerlig ceremoni", "Kiste i jorden på gravsted", "Et varigt sted at mindes", "Priser fra 18.500 kr."],
              href: "/kim-bondo/begravelse",
              linkText: "Læs om begravelse",
            },
            {
              title: "Afsked uden ceremoni",
              tag: "Enkel",
              desc: "En enkel og diskret afsked uden formel ceremoni. Kisten transporteres direkte til krematoriet eller gravstedet. Mange familier vælger at holde en mindesammenkomst på et andet tidspunkt.",
              details: ["Ingen formel ceremoni", "Direkte til krematorium eller gravsted", "Mulighed for mindesammenkomst senere", "Priser fra 15.500 kr."],
              href: "/kim-bondo/afsked-uden-ceremoni",
              linkText: "Læs om afsked uden ceremoni",
            },
            {
              title: "Askespredning",
              tag: "Naturlig",
              desc: "Askespredning over havet er en fri og naturlig afsked. Asken spredes over åbent hav i stedet for at blive stedfæstet på en kirkegård. En smuk og symbolsk afsked for dem, der elsker havet.",
              details: ["Forlængelse af bisættelse", "Asken spredes over åbent hav", "Kan kombineres med ceremoni", "Priser fra 15.500 kr."],
              href: "/kim-bondo/askespredning",
              linkText: "Læs om askespredning",
            },
            {
              title: "Kirkelig afsked",
              tag: "Med præst",
              desc: "En ceremoni i kirke eller kapel, ledet af en præst fra Folkekirken. Følger faste ritualer, men med god plads til at tilpasse salmer og indhold efter familiens ønsker.",
              details: ["Præst fra Folkekirken", "Salmer og jordpåkastelse", "Kan afsluttes med begravelse eller bisættelse", "Gratis kirkelig ceremoni for folkekirkens medlemmer"],
              href: "/kim-bondo/kirkelig-afsked",
              linkText: "Læs om kirkelig afsked",
            },
            {
              title: "Borgerlig afsked",
              tag: "Personlig",
              desc: "En ceremoni uden religiøse ritualer, tilpasset præcis som I ønsker det. Kan holdes i kapel, hjemme eller et sted med særlig betydning. Familien bestemmer musik, taler og indhold.",
              details: ["Ingen religiøse ritualer", "Fri valg af musik og taler", "Kapel, hjemme eller andet sted", "Kan afsluttes med begravelse, bisættelse eller askespredning"],
              href: "/kim-bondo/borgerlig-afsked",
              linkText: "Læs om borgerlig afsked",
            },
          ].map((card) => (
            <div
              key={card.href}
              style={{
                background: "#ffffff",
                border: "1px solid #e0dcd6",
                borderRadius: "4px",
                padding: "36px 32px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2vw, 24px)", color: "#2F3E46", lineHeight: 1.2 }}>
                  {card.title}
                </h2>
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.1em", color: "#84A98C", textTransform: "uppercase", background: "#f0f4f2", padding: "4px 10px", borderRadius: "2px", whiteSpace: "nowrap" }}>
                  {card.tag}
                </span>
              </div>
              <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
                {card.desc}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0" }}>
                {card.details.map((d, i) => (
                  <li key={i} style={{ fontSize: "14px", color: "#4a6270", lineHeight: 1.7, paddingLeft: "18px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#84A98C", fontWeight: 700 }}>·</span>
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href={card.href}
                style={{
                  display: "inline-block",
                  color: "#84A98C",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                  borderBottom: "2px solid #84A98C",
                  paddingBottom: "2px",
                }}
              >
                {card.linkText} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── HVAD VÆLGER MAN ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 30px)", color: "#2F3E46", marginBottom: "20px", lineHeight: 1.3 }}>
          Usikker på hvad I skal vælge?
        </h2>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
          Det er helt normalt at være usikker. Mange familier har aldrig stået i denne situation før, og der er mange valg at tage i en svær tid. Jeg er her for at hjælpe jer – ikke til at sælge jer noget, men til at lytte og rådgive.
        </p>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "40px" }}>
          Ring til mig, skriv en besked, eller kig på <a href="/kim-bondo/priser" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>prissiden</a> for at få et overblik over hvad de forskellige afskeder koster. Jeg gennemgår altid alle udgifter med jer på forhånd.
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

      {/* ── PRAKTISKE LINKS ── */}
      <section style={{ background: "#fff", padding: "56px 32px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#84A98C", textTransform: "uppercase", marginBottom: "20px" }}>Praktisk information</p>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "12px" }}>Nyttige sider</h2>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#5a7a6a", marginBottom: "32px", maxWidth: "520px", margin: "0 auto 32px" }}>Hvad skal man gøre ved dødsfald? Hvad kan man søge i begravelsesbistænd? Og dækker Kim dit område?</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Hvad koster en begravelse?", href: "/kim-bondo/hvad-koster-en-begravelse" },
            { label: "Huskeliste ved dødsfald", href: "/kim-bondo/huskeliste" },
            { label: "Begravelseshjælp 2026", href: "/kim-bondo/begravelseshjaelp" },
            { label: "Dækningsområde", href: "/kim-bondo/omraade" },
            { label: "Se priser", href: "/kim-bondo/priser" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#F9F8F6", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2F3E46", color: "#ffffff", textAlign: "center", padding: "64px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "8px", letterSpacing: "0.02em" }}>
          Bedemand København og Nordsjælland
        </p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.6vw, 18px)", color: "rgba(255,255,255,0.70)", marginBottom: "32px" }}>
          Kim Bondo
        </p>
        <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(15px, 1.8vw, 18px)", padding: "18px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.05em", marginBottom: "48px" }}>
          Kontakt mig
        </a>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)" }}>
          © {new Date().getFullYear()} Bedemand København ApS · Kim Bondo · Vandtårnsvej 62A, 2860 Søborg ·{" "}
          <a href="tel:22211437" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>Tlf.: 22 21 14 37</a>
        </p>
      </footer>
    </div>
  );
}
