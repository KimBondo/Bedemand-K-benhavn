/**
 * Kim Bondo – Komplet Prisliste
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
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
      {/* ── HEADER ── */}
      <header
        style={{
          background: "#2F3E46",
          padding: "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          ← Kim Bondo – Bedemand København
        </a>
        <a
          href="tel:22211437"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(13px, 1.4vw, 16px)",
            color: "rgba(255,255,255,0.85)",
            textDecoration: "none",
          }}
        >
          Tlf: 22 21 14 37
        </a>
      </header>

      {/* ── HERO TITLE ── */}
      <section
        style={{
          background: "#eae6df",
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
          Priser
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 1.8vw, 20px)",
            color: "#3d5260",
            lineHeight: 1.7,
            maxWidth: "640px",
            margin: "0 auto 28px",
          }}
        >
          "Hos Kim Bondo er priserne rimelige og gennemsigtige"
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
          Ring til Kim: 22 21 14 37
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
          <h3
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              color: "#2F3E46",
              marginBottom: "12px",
            }}
          >
            Prisen afhænger blandt andet af:
          </h3>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "24px" }}>
            {[
              "Valg af kiste og urne",
              "Valg af ceremoni",
              "Transport",
              "Blomster og annoncer",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "15px",
                  color: "#3d5260",
                  lineHeight: 1.8,
                  paddingLeft: "16px",
                }}
              >
                – {item}
              </li>
            ))}
          </ul>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e0dcd6",
              borderRadius: "4px",
              padding: "28px 32px",
              marginBottom: "24px",
            }}
          >
            <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.8, marginBottom: "8px" }}>
              <strong>Bisættelse fra ca. 20.000 kr.</strong>
            </p>
            <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.8, marginBottom: "8px" }}>
              <strong>Begravelse fra ca. 22.000 kr.</strong>
            </p>
            <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.8 }}>
              Jeg gennemgår altid alle udgifter med dig, så du ved, hvad du siger ja til.
              Jeg søger begravelseshjælp til dig, som indsættes direkte på din NemKonto.
            </p>
          </div>
          <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.8, marginBottom: "8px" }}>
            <strong>Gennemsigtighed og tryghed</strong>
          </p>
          <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.8 }}>
            Der kommer ikke uventede udgifter. Vi gennemgår det hele sammen – i ro og mag.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", marginBottom: "64px" }} />

        {/* ── 3 SCENARIO PACKAGES ── */}
        {[
          {
            title: "Bisættelse",
            price: "Pris fra: 20.500 kr.",
            items: [
              "Hjemmebesøg med planlægning af forløbet",
              "Klassisk hvid kiste",
              "Urne",
              "Påklædning og ilægning i kiste (2 pers)",
              "Rustvognskørsel til kisteophold",
              "Rustvognskørsel fra kisteophold til ceremoni",
              "Rustvognskørsel fra ceremoni til krematorie",
              "Kontakt til kordegn, præst, krematorie og kirkegård",
              "Anmodning v/ kirkeministeriet",
              "Ansøgning om begravelseshjælp",
              "Ceremonivært ved bisættelsen med fremmøde en time før",
              "Udlægning af blomster på graven",
            ],
          },
          {
            title: "Begravelse",
            price: "Pris fra: 22.500 kr.",
            items: [
              "Hjemmebesøg med planlægning af forløbet",
              "Klassisk hvid kiste",
              "Påklædning og ilægning i kiste (2 pers)",
              "Rustvognskørsel til kisteophold",
              "Rustvognskørsel fra kisteophold til ceremoni",
              "Rustvognskørsel fra ceremoni til graven",
              "Kontakt til kordegn, præst og kirkegård",
              "Anmodning v/ kirkeministeriet",
              "Ansøgning om begravelseshjælp",
              "Ceremonivært ved begravelsen med fremmøde en time før",
              "Udlægning af blomster på graven",
            ],
          },
          {
            title: "Afsked uden ceremoni",
            price: "Pris fra: 15.500 kr.",
            items: [
              "Klassisk hvid kiste",
              "Urne",
              "Påklædning og ilægning i kiste (2 pers)",
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
                marginBottom: "16px",
              }}
            >
              {pkg.title}
            </h2>
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

        <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", marginBottom: "64px" }} />

        {/* ── COMPLETE PRICE TABLE ── */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(22px, 3vw, 32px)",
              color: "#2F3E46",
              marginBottom: "40px",
            }}
          >
            Priser
          </h2>

          {[
            {
              heading: "Kiste og urne",
              rows: [
                ["Klassisk hvid kiste", "6.200 kr."],
                ["Klassisk Urne", "1.200 kr."],
              ],
            },
            {
              heading: "Kistepynt",
              rows: [
                ["Lille", "2.500 kr."],
                ["Mellem", "3.000 kr."],
                ["Stor", "3.500 kr."],
              ],
            },
            {
              heading: "Blomster krans eller blomsterhjerte",
              rows: [["Blomster krans eller blomsterhjerte", "2.500 kr."]],
            },
            {
              heading: "Tilkøb",
              rows: [
                ["Tilkøb af silkebånd – \"en sidste hilsen\"", "300 kr."],
                ["10 stk. farvel roser til rustvognen", "500 kr."],
              ],
            },
            {
              heading: "Honorar ved begravelse eller bisættelse",
              note: "Honoraret dækker al kontakt med pårørende igennem hele begravelsesforløbet. Håndtering af papirarbejde, herunder anmeldelse til hjemsogn og ansøgning om kommunal begravelseshjælp. Kontakt til og koordinering med præst og kirke eller kapel, kirkegård mv.",
              rows: [["Honorar ved begravelse eller bisættelse", "4.500 kr."]],
            },
            {
              heading: "Honorar ved direkte kremering – dvs. uden ceremoni",
              note: "Honoraret dækker al kontakt med pårørende igennem hele begravelsesforløbet. Håndtering af papirarbejde, herunder anmeldelse til hjemsogn og ansøgning om kommunal begravelseshjælp. Kontakt til og koordinering med kirkegård mv.",
              rows: [["Honorar ved direkte kremering – dvs. uden ceremoni", "3.500 kr."]],
            },
            {
              heading: "Afhentning og ilægning i kiste",
              note: "(50 % tillæg efter kl. 16.00 på hverdage + weekend og helligdage)",
              rows: [["Afhentning og ilægning i kiste", "2.500 kr."]],
            },
            {
              heading: "Kørsel med rustvogn (én kørsel, inkl. 20 km.)",
              note: "(50 % tillæg efter kl. 16.00 på hverdage + weekend og helligdage)",
              rows: [["Rustvognskørsel", "2.000 kr."]],
            },
            {
              heading: "Andet",
              rows: [
                ["Blomsterkørsel og udlægning på kirkegård", "900 kr."],
                ["Urnekørsel (fra krematoriet til kirkegårdskontor)", "900 kr."],
                ["Afhentning af dødsattest hos politiet", "900 kr."],
                ["Fremvisning i kapel", "900 kr."],
                ["Ekstern præst/ceremonileder", "3.300 kr."],
                ["Dødsannonce – udarbejdelse og indrykning", "400 kr."],
                ["Sangblade, bestilling fra ekstern leverandør", "400 kr. (tilbud indhentes)"],
                ["Rådgivning og udarbejdelse af \"Min Sidste Vilje\" (hjemmebesøg)", "2.400 kr."],
              ],
            },
            {
              heading: "Samtaler om døden, afskeden og tiden derefter",
              rows: [
                ["\"Den svære samtale – et vigtigt farvel\" – en par-, forældre- eller familiesamtale", "2 timer – 2.500 kr."],
                ["\"Min sidste vilje\" – en individuel samtale om dine personlige ønsker", "2 timer – 1.800 kr."],
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
              background: "#f0ede8",
              borderRadius: "4px",
              padding: "28px 32px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "'Lora', serif",
                fontWeight: 600,
                fontSize: "16px",
                color: "#2F3E46",
                marginBottom: "8px",
              }}
            >
              Vær altid opmærksom på udgifter til:
            </p>
            {[
              "Gravsten",
              "Gravsted",
              "Leje af kapel",
              "Kisteophold – prisen varierer",
              "Urne nedsættelsen",
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
          <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.8, marginBottom: "24px" }}>
            Kim Bondo bistår gerne med indrykning af dødsannonce i trykte aviser og på portalen Afdøde.dk.
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
          <p style={{ fontSize: "15px", color: "#3d5260", lineHeight: 1.8 }}>
            Mange ønsker at synge sange, som ikke fremgår i Den Danske Salmebog.
            Kim Bondo hjælper gerne med udarbejdelse af trykte sanghæfter, så de helt rigtige sange kan synges til ceremonien.
          </p>
        </section>

        {/* ── PERSONAL TOUCH ── */}
        <section
          style={{
            background: "#eae6df",
            borderRadius: "4px",
            padding: "40px 36px",
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
              marginBottom: "16px",
            }}
          >
            Ethvert menneske er unikt og det kan afskeden også være
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#3d5260",
              lineHeight: 1.85,
              maxWidth: "620px",
              margin: "0 auto 28px",
            }}
          >
            Som din bedemand hjælper jeg både med traditionelle og mere personlige begravelser og bisættelser.
            Det levede liv kan udtrykkes på mange måder, og jeg vil altid gøre mit bedste for at afskeden
            kommer til at foregå helt efter jeres ønsker og behov. Jeg sørger for at rådgive jer grundigt,
            så vi sammen kan planlægge et fint farvel. Jeg kommer til jer, eller I kommer til mig.
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
            Ring gerne – uforpligtende prisoverslag
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
            marginBottom: "12px",
          }}
        >
          Kim Bondo – Bedemand København
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "4px" }}>
          Vandtårnsvej 62A, 2860 Søborg
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "36px" }}>
          Tlf: 22 21 14 37
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
          Ring direkte til Kim på 22 21 14 37
        </a>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "16px" }}>
          © {new Date().getFullYear()} Bedemand København og Nordsjælland
        </p>
      </footer>
    </div>
  );
}
