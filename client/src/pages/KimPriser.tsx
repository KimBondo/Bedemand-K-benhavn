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
        description="Gennemsigtige priser uden skjulte gebyrer. Bisættelse fra 20.500 kr., begravelse fra 22.500 kr., afsked uden ceremoni fra 15.500 kr. Alle udgifter gennemgås på forhånd."
        url="https://bedemandkobenhavn.dk/kim-bondo/priser"
      />

      {/* ── HEADER ── */}
      <header
        style={{
          background: "#2F3E46",
          padding: "24px 48px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <a
          href="/kim-bondo"
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "clamp(14px, 1.6vw, 18px)",
            color: "#ffffff",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          ← Bedemand København og Nordsjælland
        </a>
        <a
          href="tel:22211437"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(13px, 1.4vw, 16px)",
            color: "rgba(255,255,255,0.85)",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Tlf: 22 21 14 37
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
          En værdig afsked skal ikke være forbundet med økonomisk utryghed
          eller skjulte gebyrer. Her finder I alle priser samlet – klart og
          uden overraskelser.
        </p>
        <a
          href="tel:22211437"
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
          Ring til Kim: <span style={{ whiteSpace: "nowrap" }}>22 21 14 37</span>
        </a>
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
            indsættes direkte på jeres NemKonto.
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
              <strong>Bisættelse fra 20.500 kr.</strong>
            </p>
            <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.8, marginBottom: "8px" }}>
              <strong>Begravelse fra 22.500 kr.</strong>
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

        {/* ── 3 SCENARIO PACKAGES ── */}
        {[
          {
            title: "Den enkle bisættelse",
            subtitle: "Hvis afdøde ligger på hospital eller kapel og kan køres direkte til højtidelighed og det er en hverdag.",
            price: "Fra 17.395 kr.",
            items: [
              "Fysisk møde eller telefonmøde, hvad der passer bedst for dig, med planlægning af forløbet",
              "100 % bæredygtig, danskproduceret kiste lavet af genbrugsmaterialer",
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
            title: "Den traditionelle begravelse",
            subtitle: "Kisten sænkes i jorden på en kirkegård eller en skovbegravelsesplads.",
            price: "Fra 22.500 kr.",
            items: [
              "Hjemmebesøg med planlægning af forløbet",
              "100 % bæredygtig, danskproduceret genbrugskiste",
              "Påklædning og ilægning i kiste",
              "Rustvognskørsel til kisteophold",
              "Rustvognskørsel fra kisteophold til ceremoni",
              "Rustvognskørsel fra ceremoni til graven",
              "Kontakt til kordegn, præst og kirkegård",
              "Anmodning v/ kirkeministeriet",
              "Ansøgning om begravelseshjælp",
              "Ceremonivært ved begravelsen – fremmøde en time før",
              "Udlægning af blomster på graven",
            ],
          },
          {
            title: "Afsked uden ceremoni",
            subtitle: "Direkte kremering uden højtidelighed – enkel, værdig og uden unødige udgifter.",
            price: "Fra 15.500 kr.",
            items: [
              "100 % bæredygtig, danskproduceret genbrugskiste",
              "Klassisk hvid bionedbrydelig urne",
              "Påklædning og ilægning i kiste",
              "Rustvognskørsel til krematoriet",
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

        <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", marginBottom: "64px" }} />

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
                ["Klassisk hvid kiste (100 % bæredygtig, danskproduceret)", "6.200 kr."],
                ["Klassisk hvid bionedbrydelig urne", "1.200 kr."],
              ],
            },
            {
              heading: "2. Afhentning og klargøring",
              note: "50 % tillæg efter kl. 16.00 på hverdage samt i weekender og på helligdage.",
              rows: [
                ["Afhentning og ilægning i kiste", "2.500 kr."],
              ],
            },
            {
              heading: "3. Transport",
              note: "50 % tillæg efter kl. 16.00 på hverdage samt i weekender og på helligdage. Rustvognskørsel inkluderer én kørsel med 20 km.",
              rows: [
                ["Rustvognskørsel (én kørsel, inkl. 20 km)", "2.000 kr."],
                ["Urnekørsel (fra krematoriet til kirkegårdskontor)", "900 kr."],
                ["Blomsterkørsel og udlægning på kirkegård", "1.195 kr."],
              ],
            },
            {
              heading: "4. Blomster og pynt",
              rows: [
                ["Kistepynt (lille)", "2.500 kr."],
                ["Kistepynt (mellem)", "3.000 kr."],
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
                ["Ekstern præst eller ceremonileder", "3.300 kr."],
                ["Afhentning af dødsattest hos politiet", "900 kr."],
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
          <div
            style={{
              background: "#F9F8F6",
              borderRadius: "4px",
              padding: "28px 32px",
              marginBottom: "32px",
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
            Jeg kommer til jer, eller I kommer til mig – hvad der føles rigtigst
            for jer.
          </p>
          <a
            href="tel:22211437"
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
            Ring – uforpligtende og uanset tidspunktet
          </a>
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
          href="tel:22211437"
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
          Ring direkte til Kim på{" "}
          <span style={{ whiteSpace: "nowrap" }}>22 21 14 37</span>
        </a>
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
