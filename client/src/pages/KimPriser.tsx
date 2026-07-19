import SEO from "@/components/SEO";

/**
 * Kim Bondo – Komplet Prisliste
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 * Tone: nærværende, præcis og tryghedsskabende — matches KimBondo.tsx
 */

export default function KimPriser() {
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
        title="Priser – Kim Bondo Bedemand København og Nordsjælland"
        description="Gennemsigtige priser uden skjulte gebyrer. Bisættelse fra 17.395 kr., begravelse fra 18.500 kr., afsked uden ceremoni fra 15.500 kr. Alle udgifter gennemgås på forhånd."
        url="https://bedemandkobenhavn.dk/kim-bondo/priser"
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
        {/* Left: back link + title */}
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
            Kim Bondo – Priser
          </span>
        </div>

        {/* Right: nav links + phone */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Om Kim</a>
          <a href="/kim-bondo/afskeder" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Afskeder</a>
          <a href="/kim-bondo/priser" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Priser</a>
    <a href="/kim-bondo/produkter" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Produkter</a>
          <a href="/kim-bondo/huskeliste" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Huskeliste</a>
          <a href="/kim-bondo/begravelseshjaelp" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Begravelseshjælp</a>
            <a href="/kim-bondo/hvad-koster-en-begravelse" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Hvad koster det?</a>
          <a href="/kim-bondo#kontakt" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Kontakt</a>
          <a href="/kim-bondo/omraade" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Alle byer</a>
    <a href="/kim-bondo/faq" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>FAQ</a>
          <a
            href="tel:22211437"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(14px, 1.6vw, 18px)",
              color: "#84A98C",
              textDecoration: "none",
              letterSpacing: "0.03em",
              whiteSpace: "nowrap",
            }}
          >
            Tlf: 22 21 14 37
          </a>
        </div>
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

      {/* ── HERO TITLE ── */}
      <section
        style={{
          background: "#F9F8F6",
          padding: "72px 32px 56px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "clamp(28px, 5vw, 52px)",
            color: "#2F3E46",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}
        >
          Gennemskuelige priser
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 1.8vw, 20px)",
            color: "#3d5260",
            lineHeight: 1.7,
            maxWidth: "640px",
            margin: "0 auto 32px",
          }}
        >
          En værdig afsked skal være forbundet med økonomisk tryghed. Her finder I alle priser samlet – uden overraskelser.
        </p>
        <a
          href="/kim-bondo#kontakt"
          style={{
            display: "inline-block",
            background: "#84A98C",
            color: "#ffffff",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            padding: "14px 32px",
            borderRadius: "3px",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          Kontakt mig
        </a>
        <p
          style={{
            marginTop: "14px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          eller ring på{" "}
          <a
            href="tel:22211437"
            style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600, textDecoration: "none" }}
          >
            22 21 14 37
          </a>
        </p>
      </section>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "72px 32px" }}>

        {/* ── INTRO ── */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(20px, 2.5vw, 28px)",
              color: "#2F3E46",
              marginBottom: "16px",
            }}
          >
            Hvad koster en begravelse eller bisættelse?
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#3d5260",
              lineHeight: 1.85,
              marginBottom: "20px",
            }}
          >
            Prisen afhænger af jeres ønsker og behov. Jeg gennemgår altid alle
            udgifter med jer, inden vi beslutter noget – så I ved præcis, hvad I
            siger ja til. Jeg søger desuden begravelseshjælp på jeres vegne, som
            Den bliver direkte modregnet på fakturaen.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#3d5260",
              lineHeight: 1.85,
              marginBottom: "24px",
            }}
          >
            De vigtigste faktorer for den samlede pris er valg af kiste og urne,
            ceremonitype, transport samt eventuelle blomster og annoncer.
          </p>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e0dcd6",
              borderRadius: "4px",
              padding: "28px 32px",
            }}
          >
            <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.8, marginBottom: "8px" }}>
              <strong>Bisættelse fra 17.395 kr.</strong>
            </p>
            <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.8, marginBottom: "8px" }}>
              <strong>Begravelse fra 18.500 kr.</strong>
            </p>
            <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.8, marginBottom: "8px" }}>
              <strong>Afsked uden ceremoni fra 15.500 kr.</strong>
            </p>
            <p style={{ fontSize: "14px", color: "#7a8f99", lineHeight: 1.7, marginTop: "12px", fontStyle: "italic" }}>
              Der kommer ikke uventede udgifter. Vi gennemgår det hele sammen – i ro og mag.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", marginBottom: "64px" }} />

        {/* ── FORKLARENDE TEKST OM PRIS OG KØRSLER ── */}
        <section style={{ marginBottom: "64px" }}>
          <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2vw, 24px)", color: "#2F3E46", marginBottom: "20px" }}>
            Hvad påvirker prisen?
          </h3>
          <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.85, color: "#3d5260", marginBottom: "16px" }}>
            Prisen på en afsked afhænger primært af, hvor afdøde skal hentes, og hvor mange kørsler der er behov for med rustvognen. Afhentning fra privat hjem kræver typisk mere tid og ressourcer end afhentning fra hospital eller hospice.
          </p>
          <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.85, color: "#3d5260", marginBottom: "20px" }}>
            Alle priseksempler herunder er beregnet på hverdage. Rustvognskørslen i weekenden er 50% dyrere.
          </p>
          <a href="/kim-bondo/hvad-koster-en-begravelse" style={{ color: "#84A98C", textDecoration: "none", borderBottom: "1px solid #84A98C", paddingBottom: "1px", fontSize: "15px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>Læs mere om hvad der påvirker prisen →</a>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", marginBottom: "64px" }} />

        {/* ── 3 SCENARIO PACKAGES ── */}
        {[
          {
            title: "Den enkle bisættelse",
            subtitle: "Hvis afdøde ligger på hospital eller kapel og kan køres direkte til højtidelighed og det er en hverdag.",
            price: "Fra 17.395 kr.",
            items: [
              "Fysisk møde eller telefonmøde, hvad der passer bedst for dig, med planlægning af forløbet",
              "Danskproduceret kiste med lavt klimaaftryk",
              "Klassisk hvid bionedbrydelig urne",
              "Klargøring af kiste, påklædning og ilægning i kiste",
              "Rustvognskørsel fra hospital eller kapel til højtidelighed",
              "Rustvognskørsel fra højtidelighed til krematorie",
              "Kontakt til kordegn, præst, krematorie og kirkegård",
              "Anmodning v/ kirkeministeriet",
              "Ansøgning om begravelseshjælp",
              "Bedemand tilstede ved højtideligheden",
            ],
          },
          {
            title: "Den enkle begravelse",
            subtitle: "Hvis afdøde ligger på hospital og kan køres direkte til højtidelighed på en hverdag, og kirken og kirkegården er samme sted.",
            price: "Fra 18.500 kr.",
            items: [
              "Fysisk møde eller telefonmøde, hvad der passer bedst for dig, med planlægning af forløbet",
              "100 % bæredygtig, danskproduceret genbrugskiste",
              "Klargøring af kiste, påklædning og ilægning i kiste",
              "Rustvognskørsel fra hospital til højtideligheden",
              "Kontakt til kordegn, præst og kirkegård",
              "Anmodning v/ kirkeministeriet",
              "Ansøgning om begravelseshjælp",
              "Bedemand tilstede ved højtideligheden",
              "Udlægning af blomster på graven",
            ],
          },
          {
            title: "Afsked uden ceremoni",
            subtitle: "Hvis afdøde ligger på hospital eller kapel og kan køres direkte til krematoriet på en hverdag – uden forudgående højtidelighed.",
            price: "Fra 15.500 kr.",
            items: [
              "100 % bæredygtig, danskproduceret genbrugskiste",
              "Klassisk hvid bionedbrydelig urne",
              "Klargøring af kiste, påklædning og ilægning i kiste",
              "Rustvognskørsel fra hospital eller kapel til krematoriet",
              "Kontakt til kordegn, krematorie og kirkegård",
              "Anmodning v/ kirkeministeriet",
              "Ansøgning om begravelseshjælp",
            ],
          },
        ].map((pkg) => (
          <section key={pkg.title} style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "'Lora', serif",
                fontWeight: 600,
                fontSize: "clamp(20px, 2.5vw, 28px)",
                color: "#2F3E46",
                marginBottom: "8px",
              }}
            >
              {pkg.title}
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#7a8f99",
                lineHeight: 1.6,
                marginBottom: "20px",
                fontStyle: "italic",
              }}
            >
              {pkg.subtitle}
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
              {pkg.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "15px",
                    color: "#3d5260",
                    lineHeight: 1.8,
                    paddingLeft: "22px",
                    marginBottom: "4px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#84A98C",
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontFamily: "'Lora', serif",
                fontWeight: 700,
                fontSize: "clamp(18px, 2vw, 22px)",
                color: "#2F3E46",
              }}
            >
              {pkg.price}
            </p>
          </section>
        ))}

        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#7a8f99",
            fontStyle: "italic",
            maxWidth: "600px",
            margin: "0 auto 48px",
          }}
        >
          Alle priseksempler er beregnet på hverdage. Rustvognskørsel i weekenden er 50% dyrere.
        </p>

        {/* ── NOT INCLUDED SECTION ── */}
        <div
          style={{
            background: "#F9F8F6",
            borderRadius: "4px",
            padding: "28px 32px",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "16px",
              color: "#2F3E46",
              marginBottom: "12px",
            }}
          >
            Vær opmærksom på disse udgifter, som ikke er inkluderet:
          </p>
          {[
            "Gravsten",
            "Gravsted",
            "Leje af kapel",
            "Kisteophold – prisen varierer",
            "Urnenedsættelse",
            "Kremering",
          ].map((item) => (
            <p
              key={item}
              style={{
                fontSize: "14px",
                color: "#3d5260",
                lineHeight: 1.7,
                paddingLeft: "12px",
              }}
            >
              – {item}
            </p>
          ))}
          <p
            style={{
              fontSize: "13px",
              color: "#7a8f99",
              lineHeight: 1.7,
              marginTop: "12px",
              fontStyle: "italic",
            }}
          >
            Jeg hjælper jer med at indhente tilbud og holde overblikket over
            alle udgifter – også dem, der ikke er en del af mit honorar.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", marginBottom: "64px" }} />

        {/* ── LINK TO PRODUKTER ── */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <a
            href="/kim-bondo/produkter"
            style={{
              display: "inline-block",
              background: "#F9F8F6",
              border: "1px solid #84A98C",
              color: "#2F3E46",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              padding: "14px 32px",
              borderRadius: "3px",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            Se kister og urner med billeder og priser →
          </a>
        </div>

        {/* ── COMPLETE PRICE TABLE ── */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(22px, 3vw, 32px)",
              color: "#2F3E46",
              marginBottom: "12px",
            }}
          >
            Alle enkeltpriser
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#3d5260",
              lineHeight: 1.85,
              marginBottom: "40px",
            }}
          >
            Nedenfor finder I en komplet oversigt over alle enkeltpriser. Har I
            spørgsmål til en specifik post, er I altid velkomne til at ringe –
            uanset tidspunktet.
          </p>

          {[
            {
              heading: "1. Kiste og urne",
              rows: [
                ["Klassisk hvid kiste (En klassisk kremeringskiste til bisættelser, fremstillet i spån og MDF)", "6.500 kr."],
                ["Klassisk hvid bionedbrydelig urne", "1.250 kr."],
              ],
            },
            {
              heading: "2. Klargøring af kiste, afhentning og ilægning i kiste",
              note: "50 % tillæg efter kl. 16.00 på hverdage samt i weekender og på helligdage.",
              rows: [
                ["Klargøring af kiste, afhentning og ilægning i kiste", "2.500 kr."],
              ],
            },
            {
              heading: "3. Transport",
              note: "50 % tillæg efter kl. 16.00 på hverdage samt i weekender og på helligdage. Rustvognskørsel inkluderer én kørsel med 20 km.",
              rows: [
                ["Rustvognskørsel (én kørsel, inkl. 20 km)", "2.000 kr."],
                ["Urnekørsel (fra krematoriet til kirkegårdskontor)", "900 kr."],
                ["Blomsterkørsel og udlægning på kirkegård", "1.400 kr."],
              ],
            },
            {
              heading: "4. Blomster og pynt",
              rows: [
                ["Kistepynt (lille)", "2.000 kr."],
                ["Kistepynt (mellem)", "2.500 kr."],
                ["Kistepynt (stor)", "3.500 kr."],
                ["Blomsterkrans eller blomsterhjerte", "2.500 kr."],
                ["Silkebånd – \"en sidste hilsen\"", "300 kr."],
                ["10 stk. farvelroser til rustvognen", "500 kr."],
              ],
            },
            {
              heading: "5. Ceremoni og koordinering",
              note: "Honoraret dækker al kontakt med pårørende gennem hele forløbet, håndtering af papirarbejde – herunder anmeldelse til hjemsogn og ansøgning om kommunal begravelseshjælp – samt koordinering med myndigheder, kirker, kapeller og krematorier.",
              rows: [
                ["Honorar ved begravelse eller bisættelse", "4.500 kr."],
                ["Honorar ved afsked uden ceremoni (direkte kremering)", "3.500 kr."],
              ],
            },
            {
              heading: "6. Øvrige ydelser",
              rows: [
                ["Fremvisning i kapel", "900 kr."],
                ["Dødsannonce – udarbejdelse og indrykning", "400 kr."],
                ["Sangblade, bestilling fra ekstern leverandør", "400 kr. (tilbud indhentes)"],
                ["Rådgivning og udarbejdelse af \"Min Sidste Vilje\" (hjemmebesøg)", "Gratis"],
              ],
            },

          
          ].map((section) => (
            <div key={section.heading} style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 600,
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  color: "#2F3E46",
                  marginBottom: "12px",
                }}
              >
                {section.heading}
              </h3>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginBottom: section.note ? "12px" : "0",
                }}
              >
                <tbody>
                  {section.rows.map(([label, price]) => (
                    <tr
                      key={label}
                      style={{ borderBottom: "1px solid #e0dcd6" }}
                    >
                      <td
                        style={{
                          padding: "12px 0",
                          fontSize: "15px",
                          color: "#3d5260",
                          lineHeight: 1.6,
                          width: "70%",
                        }}
                      >
                        {label}
                      </td>
                      <td
                        style={{
                          padding: "12px 0",
                          fontSize: "15px",
                          color: "#2F3E46",
                          fontWeight: 600,
                          textAlign: "right",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {section.note && (
                <p
                  style={{
                    fontSize: "13px",
                    color: "#7a8f99",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  {section.note}
                </p>
              )}
            </div>
          ))}
        </section>

        {/* ── ADDITIONAL INFO ── */}
        <section style={{ marginBottom: "64px" }}>
          <h3
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "18px",
              color: "#2F3E46",
              marginBottom: "10px",
            }}
          >
            Dødsannoncer
          </h3>
          <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.85, marginBottom: "28px" }}>
            Jeg hjælper gerne med indrykning af dødsannonce i trykte aviser og
            på portalen Afdøde.dk – så I ikke skal bekymre jer om det praktiske
            i en i forvejen svær tid.
          </p>

          <h3
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "18px",
              color: "#2F3E46",
              marginBottom: "10px",
            }}
          >
            Sangblade
          </h3>
          <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.85 }}>
            Mange ønsker at synge sange, der ikke fremgår af Den Danske
            Salmebog. Jeg hjælper med udarbejdelse af trykte sanghæfter, så de
            helt rigtige sange kan synges til ceremonien – præcis som I ønsker
            det.
          </p>
        </section>

        {/* ── PERSONAL TOUCH ── */}
        <section
          style={{
            background: "#F9F8F6",
            borderRadius: "4px",
            padding: "48px 40px",
            marginBottom: "64px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(20px, 2.5vw, 28px)",
              color: "#2F3E46",
              marginBottom: "20px",
              lineHeight: 1.3,
            }}
          >
            Ethvert menneske er unikt – og det kan afskeden også være
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#3d5260",
              lineHeight: 1.85,
              maxWidth: "620px",
              margin: "0 auto 32px",
            }}
          >
            Jeg hjælper med både traditionelle og mere personlige afskeder. Det
            levede liv kan udtrykkes på mange måder, og jeg vil altid gøre mit
            bedste for, at afskeden foregår præcis efter jeres ønsker og behov.
            Jeg kommer til jer, eller på telefon – hvad der føles rigtigst for jer.
          </p>
          <a
            href="/kim-bondo#kontakt"
            style={{
              display: "inline-block",
              background: "#84A98C",
              color: "#ffffff",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 32px",
              borderRadius: "3px",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            Kontakt mig
          </a>
          <p
            style={{
              marginTop: "14px",
              fontSize: "14px",
              color: "#7a8f99",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            eller ring på{" "}
            <a
              href="tel:22211437"
              style={{ color: "#84A98C", fontWeight: 600, textDecoration: "none" }}
            >
              22 21 14 37
            </a>
          </p>
        </section>
      </div>


      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#2F3E46",
          color: "#ffffff",
          textAlign: "center",
          padding: "64px 32px",
        }}
      >
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "clamp(16px, 2vw, 22px)",
            marginBottom: "8px",
          }}
        >
          Bedemand København og Nordsjælland
        </p>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(13px, 1.4vw, 16px)",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "20px",
          }}
        >
          Kim Bondo
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "32px" }}>
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
            fontSize: "clamp(14px, 1.6vw, 17px)",
            padding: "16px 36px",
            borderRadius: "3px",
            textDecoration: "none",
            letterSpacing: "0.05em",
            marginBottom: "40px",
          }}
        >
          Kontakt mig
        </a>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "24px" }}>
          eller ring på{" "}
          <a
            href="tel:22211437"
            style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, textDecoration: "none" }}
          >
            22 21 14 37
          </a>
        </p>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "16px" }}>
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a href="tel:22211437" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "underline" }}>Tlf.: 22 21 14 37</a>
          {" "}&nbsp;·&nbsp;{" "}
          <a href="mailto:kontakt@bedemandkøbenhavn.dk" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "underline" }}>kontakt@bedemandkøbenhavn.dk</a>
          {" "}&nbsp;·&nbsp; CVR.: 45084159
        </p>
      </footer>
    </div>
  );
}
