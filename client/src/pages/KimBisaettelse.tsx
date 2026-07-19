import SEO from "@/components/SEO";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Bisættelse
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 * Tone: nærværende, præcis og tryghedsskabende
 */

export default function KimBisaettelse() {
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
        title="Bisættelse – Bedemand Kim Bondo, København og Nordsjælland"
        description="Bisættelse med nærvær og ro. Kim Bondo hjælper jer gennem hele forløbet – fra første kontakt til kremering og urnenedsættelse eller askespredning. Priser fra 15.500 kr."
        url="https://bedemandkobenhavn.dk/kim-bondo/bisaettelse"
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
          <a
            href="/kim-bondo"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(12px, 1.3vw, 14px)",
              color: "#84A98C",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            ← Tilbage til Kim Bondo
          </a>
          <span
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 700,
              fontSize: "clamp(14px, 2.2vw, 20px)",
              color: "#2F3E46",
              letterSpacing: "0.03em",
              lineHeight: 1.2,
            }}
          >
            Bedemand København og Nordsjælland
          </span>
          <span
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(12px, 1.4vw, 15px)",
              color: "#5a7a6a",
              letterSpacing: "0.02em",
            }}
          >
            Kim Bondo – Bisættelse
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
          Bisættelse
        </p>
        <h1
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#2F3E46",
            lineHeight: 1.2,
            marginBottom: "24px",
            maxWidth: "700px",
            margin: "0 auto 24px",
          }}
        >
          En mindeværdig afsked med urne
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 1.8vw, 19px)",
            color: "#5a7a6a",
            lineHeight: 1.7,
            maxWidth: "620px",
            margin: "0 auto 40px",
          }}
        >
          En bisættelse er den mest valgte afskedsform i Danmark. Jeg hjælper jer roligt og nærværende gennem hele forløbet – fra den første samtale til kremering og den endelige stedfæstelse af urnen.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a
            href="/kim-bondo#kontakt"
            style={{
              display: "inline-block",
              background: "#84A98C",
              color: "#ffffff",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              padding: "16px 36px",
              borderRadius: "3px",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            Kontakt mig
          </a>
          <a
            href="/kim-bondo/priser"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#2F3E46",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              padding: "16px 36px",
              borderRadius: "3px",
              textDecoration: "none",
              letterSpacing: "0.04em",
              border: "1.5px solid #b0b8bc",
            }}
          >
            Se priser
          </a>
        </div>
        <p style={{ fontSize: "14px", color: "#9aacb4", marginTop: "16px" }}>
          eller ring på{" "}
          <a href="tel:22211437" style={{ color: "#84A98C", fontWeight: 600, textDecoration: "none" }}>
            22 21 14 37
          </a>
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── HVAD ER EN BISÆTTELSE ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "clamp(20px, 2.5vw, 30px)",
            color: "#2F3E46",
            marginBottom: "20px",
            lineHeight: 1.3,
          }}
        >
          Hvad er en bisættelse?
        </h2>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
          En bisættelse er en afskedsform, hvor afdøde kremeres efter ceremonien. Asken samles i en urne, som familien efterfølgende kan vælge at nedsætte på en kirkegård, bruge til <a href="/kim-bondo/askespredning" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>askespredning over havet</a> eller tage med til udlandet.
        </p>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
          Mange vælger bisættelse frem for en traditionel <a href="/kim-bondo/begravelse" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>begravelse med kiste i jorden</a>, fordi det giver større fleksibilitet i forhold til gravsted og stedfæstelse. Det er ikke en billigere eller mere upersonlig afsked – det er blot en anden måde at sige farvel på.
        </p>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8 }}>
          Jeg lægger samme omsorg og nærvær i en bisættelse som i alle andre afskeder. Ceremonien kan være kirkelig eller borgerlig, og den kan tilpasses præcis til afdødes og familiens ønsker.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── FORLØBET ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "clamp(20px, 2.5vw, 30px)",
            color: "#2F3E46",
            marginBottom: "32px",
            lineHeight: 1.3,
          }}
        >
          Sådan foregår en bisættelse
        </h2>

        {[
          {
            num: "1",
            title: "Første kontakt og planlægning",
            text: "Vi taler om jeres ønsker – ceremonitype, musik, blomster, kiste og alt det praktiske. Jeg sørger for al koordinering med kirke eller kapel, krematorium og myndighederne.",
          },
          {
            num: "2",
            title: "Kisteilægning",
            text: "Afdøde lægges i kisten med omsorg og værdighed. I kan vælge at være til stede ved kisteilægningen, hvis det føles rigtigt.",
          },
          {
            num: "3",
            title: "Ceremonien",
            text: "Ceremonien afholdes i kirke, kapel eller et andet sted, der passer til afdøde. Den kan være kirkelig med præst eller borgerlig med en taler, I selv vælger.",
          },
          {
            num: "4",
            title: "Kremering",
            text: "Efter ceremonien transporteres kisten til krematoriet. Kremeringen finder sted, og asken samles i den urne, I har valgt.",
          },
          {
            num: "5",
            title: "Stedfæstelse af urnen",
            text: "Urnen kan nedsættes på en kirkegård, asken kan spredes over havet, eller urnen kan tages med til udlandet. Jeg hjælper med at finde den løsning, der passer bedst.",
          },
        ].map((step) => (
          <div
            key={step.num}
            style={{
              display: "flex",
              gap: "24px",
              marginBottom: "40px",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                minWidth: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#84A98C",
                color: "#fff",
                display: "flex",
                alignItems: "center",
          position: "relative",
                justifyContent: "center",
                fontFamily: "'Lora', serif",
                fontWeight: 700,
                fontSize: "18px",
                flexShrink: 0,
              }}
            >
              {step.num}
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 600,
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  color: "#2F3E46",
                  marginBottom: "8px",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#4a6270", lineHeight: 1.8 }}>
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── CEREMONITYPE ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "clamp(20px, 2.5vw, 30px)",
            color: "#2F3E46",
            marginBottom: "20px",
            lineHeight: 1.3,
          }}
        >
          Kirkelig eller borgerlig bisættelse?
        </h2>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
          En <strong>kirkelig bisættelse</strong> foregår i kirke eller kapel og ledes af en præst fra Folkekirken. Ceremonien følger faste ritualer, men kan tilpasses med personlige ønsker til musik, salmer og prædiken. Det er den mest valgte form, også for familier der ikke er stærkt religiøse – mange oplever den kirkelige ramme som tryg og højtidelig.
        </p>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8, marginBottom: "20px" }}>
          En <strong>borgerlig bisættelse</strong> foregår uden religiøse ritualer og kan arrangeres helt efter familiens ønsker. Ceremonien kan finde sted i et kapel, i hjemmet eller på en anden personlig lokation. I vælger selv en taler, musik og indhold.
        </p>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#4a6270", lineHeight: 1.8 }}>
          Ønsker I en enklere løsning, kan bisættelsen også foregå <a href="/kim-bondo/afsked-uden-ceremoni" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>uden ceremoni</a> – direkte til krematoriet, med mulighed for en mindesammenkomst på et senere tidspunkt.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── PRIS ── */}
      <section
        style={{
          background: "#f0f4f2",
          padding: "80px 32px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "clamp(20px, 2.5vw, 30px)",
            color: "#2F3E46",
            marginBottom: "20px",
          }}
        >
          Hvad koster en bisættelse?
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 1.6vw, 17px)",
            color: "#4a6270",
            lineHeight: 1.8,
            maxWidth: "620px",
            margin: "0 auto 32px",
          }}
        >
          Prisen afhænger af jeres valg – ceremonitype, kiste, urne og eventuelle tilvalg. Jeg gennemgår alle udgifter med jer på forhånd, så der ikke er overraskelser. Mine priser starter fra <strong>15.500 kr.</strong> for en afsked uden ceremoni og fra <strong>17.395 kr.</strong> for en bisættelse med ceremoni.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          <a
            href="/kim-bondo/priser"
            style={{
              display: "inline-block",
              background: "#84A98C",
              color: "#ffffff",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              padding: "16px 36px",
              borderRadius: "3px",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            Se den fulde prisliste
          </a>
          <a
            href="/kim-bondo#kontakt"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#2F3E46",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              padding: "16px 36px",
              borderRadius: "3px",
              textDecoration: "none",
              letterSpacing: "0.04em",
              border: "1.5px solid #b0b8bc",
            }}
          >
            Kontakt mig
          </a>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ── FAQ ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 32px 64px" }}>
        <h2
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "clamp(20px, 2.5vw, 30px)",
            color: "#2F3E46",
            marginBottom: "40px",
            lineHeight: 1.3,
          }}
        >
          Ofte stillede spørgsmål om bisættelse
        </h2>
        {[
          {
            q: "Hvad er forskellen på bisættelse og begravelse?",
            a: "Ved en bisættelse kremeres afdøde, og asken placeres i en urne. Ved en begravelse sænkes kisten ned i jorden på et gravsted. Begge kan foregå med eller uden ceremoni. Læs mere om begravelse her.",
            link: "/kim-bondo/begravelse",
            linkText: "Læs mere om begravelse her",
          },
          {
            q: "Kan man holde en bisættelse uden ceremoni?",
            a: "Ja. En afsked uden ceremoni betyder, at kisten transporteres direkte til krematoriet uden en formel højtidelighed. Mange familier vælger at holde en mindesammenkomst på et senere tidspunkt. Læs mere om afsked uden ceremoni.",
            link: "/kim-bondo/afsked-uden-ceremoni",
            linkText: "Læs mere om afsked uden ceremoni",
          },
          {
            q: "Hvad sker der med urnen efter bisættelsen?",
            a: "Urnen kan nedsættes på en kirkegård, asken kan spredes over havet (askespredning), eller urnen kan tages med til udlandet. Jeg hjælper med at finde den løsning, der passer til afdødes og familiens ønsker.",
            link: "/kim-bondo/askespredning",
            linkText: "Læs mere om askespredning",
          },
          {
            q: "Kan man vælge en miljøvenlig kiste til bisættelse?",
            a: "Ja. Jeg tilbyder kister fremstillet af bæredygtige materialer, der reducerer miljøpåvirkningen ved kremering. Det er et valg, mange familier sætter pris på.",
            link: null,
            linkText: null,
          },
          {
            q: "Hvad er inkluderet i prisen?",
            a: "Mine priser inkluderer mit honorar, koordinering, kisteilægning, rustvognskørsel, kiste og urne. Udgifter som kremering, gravsted og kapelleje er ikke inkluderet, men jeg hjælper jer med at indhente tilbud og holde overblikket. Se den fulde prisliste for detaljer.",
            link: "/kim-bondo/priser",
            linkText: "Se den fulde prisliste",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              borderTop: "1px solid #e0dcd6",
              paddingTop: "28px",
              paddingBottom: "28px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Lora', serif",
                fontWeight: 600,
                fontSize: "clamp(15px, 1.7vw, 18px)",
                color: "#2F3E46",
                marginBottom: "12px",
                lineHeight: 1.4,
              }}
            >
              {item.q}
            </h3>
            <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#4a6270", lineHeight: 1.8 }}>
              {item.a.replace(item.linkText || "", "")}{" "}
              {item.link && (
                <a href={item.link} style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>
                  {item.linkText}
                </a>
              )}
            </p>
          </div>
        ))}
      </section>

      {/* ── RELATEREDE SIDER ── */}
      <section style={{ background: "#2F3E46", padding: "64px 32px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Andre afskeder
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {[
            { label: "Begravelse", href: "/kim-bondo/begravelse" },
            { label: "Afsked uden ceremoni", href: "/kim-bondo/afsked-uden-ceremoni" },
            { label: "Askespredning", href: "/kim-bondo/askespredning" },
            { label: "Se alle afskeder", href: "/kim-bondo/afskeder" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                padding: "14px 28px",
                borderRadius: "3px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
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
          }}
        >
          Kontakt mig
        </a>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "16px" }}>
          eller ring på{" "}
          <a href="tel:22211437" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
            22 21 14 37
          </a>
        </p>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)", marginTop: "40px" }}>
          © {new Date().getFullYear()} Bedemand København ApS · Kim Bondo · Vandtårnsvej 62A, 2860 Søborg
        </p>
      </section>
    </div>
  );
}
