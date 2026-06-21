import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";

/**
 * Kim Bondo – Personal Homepage
 * Design: Nordic Quietism — warm off-white (#F9F8F6), charcoal text (#2F3E46),
 *         sage green CTAs (#84A98C), Lora serif headings + Open Sans body.
 * Layout: One-page scroll with 7 structured sections.
 */

export default function KimBondo() {
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
        title="Kim Bondo – Bedemand København og Nordsjælland"
        description="Kim Bondo er din personlige bedemand i København og Nordsjælland. Dyb omsorg, nærvær og uforstyrrelig ro når livet er sværest. Gennemsigtige priser fra 15.500 kr."
        url="https://bedemandkobenhavn.dk/kim-bondo"
      />
      {/* ══════════════════════════════════════════════════════
          SECTION 1: HERO (no background image)
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#F9F8F6",
          padding: "0 0 80px 0",
        }}
      >
        {/* Header bar */}
        <header
          style={{
            padding: "28px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e0dcd6",
          }}
        >
          <span
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(15px, 1.8vw, 20px)",
              color: "#2F3E46",
              letterSpacing: "0.04em",
            }}
          >
            Bedemand København – Kim Bondo
          </span>
          <a
            href="tel:22211437"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "#84A98C",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            Tlf: 22 21 14 37
          </a>
        </header>

        {/* Hero text */}
        <div
          style={{
            textAlign: "center",
            padding: "72px 24px 64px",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 5vw, 56px)",
              color: "#2F3E46",
              lineHeight: 1.2,
              marginBottom: "24px",
              letterSpacing: "0.01em",
            }}
          >
            En personlig afsked i trygge hænder
          </h1>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "#3d5260",
              lineHeight: 1.65,
              maxWidth: "620px",
              margin: "0 auto 48px",
            }}
          >
            Hos mig er der tid, uforstyrrelig ro og plads til jeres ønsker –
            præcis som de er.
          </p>

          {/* ── TWO IMAGE PLACEHOLDERS ─────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            {/* Billede 1: Sort rustvogn på Rådhuspladsen */}
            <div style={{ borderRadius: "4px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}>
              <img
                src="/manus-storage/kim-hearse-black_c31e9475.png"
                alt="Sort rustvogn på Rådhuspladsen i København – Kim Bondo Bedemand"
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* Billede 2: Placeholder */}
            <div
              style={{
                aspectRatio: "4/3",
                background: "#eae6df",
                border: "2px dashed #c8c2b8",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                color: "#9a9087",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Billede 2 kommer snart
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2: INTRODUCTION
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "96px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          alignItems: "start",
        }}
      >
        {/* Garden coffin image */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src="/manus-storage/kim-garden-coffin_90a67244.jpg"
            alt="Hvid kiste med blomster i en naturskøn have – Kim Bondo Bedemand"
            style={{
              width: "100%",
              maxWidth: "480px",
              aspectRatio: "16/9",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "4px",
              boxShadow: "0 8px 32px rgba(47,62,70,0.12)",
            }}
          />
          <p
            style={{
              marginTop: "10px",
              fontSize: "13px",
              color: "#9a9087",
              fontStyle: "italic",
              textAlign: "center",
              width: "100%",
              lineHeight: 1.6,
            }}
          >
            Afskeden kan være i haven, hvis det er det, I ønsker.
          </p>
        </div>

        {/* Text */}
        <div>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(22px, 3vw, 34px)",
              color: "#2F3E46",
              lineHeight: 1.3,
              marginBottom: "28px",
            }}
          >
            Tryghed og god energi, når alt andet ramler
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
              marginBottom: "20px",
            }}
          >
            Når vi mister en, vi har kær, opstår der ofte et øjeblikkeligt kaos
            af praktiske spørgsmål og dybe følelser. Min vigtigste opgave er at
            træde ind ad døren hos jer og øjeblikkeligt skabe et rum med ro og
            god energi.
          </p>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
            }}
          >
            Jeg møder jer præcis der, hvor I er. Hvad enten sorgen kalder på
            dyb alvor, tårer eller et befriende smil, så tilpasser jeg mig jeres
            behov. Hos mig bliver I ikke mødt af et stift system eller en
            fortravlet dagsorden, men af et nærværende menneske, der har tiden
            til at lytte og rumme det hele.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ══════════════════════════════════════════════════════
          SECTION 3: PRICING & SUSTAINABILITY
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "96px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "48px",
        }}
      >
        {/* Column 1: Pricing */}
        <div>
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
            Gennemskuelige priser
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
              marginBottom: "32px",
            }}
          >
            En værdig afsked skal ikke være forbundet med økonomisk utryghed.
            Jeg lægger vægt på 100 % gennemskuelighed, så I kender alle udgifter
            på forhånd. En smuk og enkel bisættelse i København afstemmes
            fuldstændig efter vores faste, klare prisscenarier.
          </p>
          <a
            href="#prisscenarier"
            style={{
              display: "inline-block",
              background: "#84A98C",
              color: "#ffffff",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              padding: "14px 28px",
              borderRadius: "3px",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            Se vores 3 prisscenarier
          </a>
        </div>

        {/* Column 2: Sustainability */}
        <div>
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
            Omsorg for naturen – Bæredygtig afsked
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
              marginBottom: "32px",
            }}
          >
            Som en naturlig del af mit virke, tilbyder jeg udelukkende kister
            produceret i Danmark af 100 % genbrugsmaterialer. Der er ikke fældet
            et eneste nyt træ for at skabe kisten, hvilket giver jer mulighed for
            at vælge en både smuk, lokal og fuldstændig bæredygtig afsked.
          </p>
          <a
            href="/kim-bondo/priser"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#2F3E46",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              padding: "13px 28px",
              borderRadius: "3px",
              textDecoration: "none",
              letterSpacing: "0.04em",
              border: "1.5px solid #b0b8bc",
            }}
          >
            Læs om vores genbrugskister
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4: 3 PRICING SCENARIOS
      ══════════════════════════════════════════════════════ */}
      <section
        id="prisscenarier"
        style={{
          background: "#f0ede8",
          padding: "96px 32px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(22px, 3vw, 36px)",
              color: "#2F3E46",
              textAlign: "center",
              marginBottom: "64px",
              lineHeight: 1.3,
            }}
          >
            Vores 3 prisscenarier
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                title: "Den enkle bisættelse",
                subtitle:
                  "Højtideligheden holdes i et kapel eller en kirke, efterfulgt af kremering.",
                price: "Fra 20.500 kr.",
                items: [
                  "Hjemmebesøg med planlægning af forløbet",
                  "100 % bæredygtig, danskproduceret genbrugskiste",
                  "Klassisk hvid urne",
                  "Påklædning og ilægning i kiste (2 pers)",
                  "Rustvognskørsel til kisteophold",
                  "Rustvognskørsel fra kisteophold til ceremoni",
                  "Rustvognskørsel fra ceremoni til krematorie",
                  "Kontakt til kordegn, præst, krematorie og kirkegård",
                  "Anmodning v/ kirkeministeriet",
                  "Ansøgning om begravelseshjælp",
                  "Ceremonivært ved bisættelsen – fremmøde en time før",
                  "Udlægning af blomster på graven",
                ],
              },
              {
                title: "Den traditionelle begravelse",
                subtitle:
                  "Kisten sænkes i jorden på en kirkegård eller en skovbegravelsesplads.",
                price: "Fra 22.500 kr.",
                items: [
                  "Hjemmebesøg med planlægning af forløbet",
                  "100 % bæredygtig, danskproduceret genbrugskiste",
                  "Påklædning og ilægning i kiste (2 pers)",
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
                subtitle:
                  "Direkte kremering uden højtidelighed – enkel, værdig og uden unødige udgifter.",
                price: "Fra 15.500 kr.",
                items: [
                  "100 % bæredygtig, danskproduceret genbrugskiste",
                  "Klassisk hvid urne",
                  "Påklædning og ilægning i kiste (2 pers)",
                  "Rustvognskørsel til krematoriet",
                  "Kontakt til kordegn, krematorie og kirkegård",
                  "Anmodning v/ kirkeministeriet",
                  "Ansøgning om begravelseshjælp",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#ffffff",
                  borderRadius: "4px",
                  padding: "40px 32px",
                  boxShadow: "0 2px 16px rgba(47,62,70,0.07)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: 600,
                    fontSize: "clamp(18px, 2vw, 22px)",
                    color: "#2F3E46",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#7a8f99",
                    lineHeight: 1.6,
                    marginBottom: "24px",
                    fontStyle: "italic",
                  }}
                >
                  {card.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: 700,
                    fontSize: "clamp(20px, 2.2vw, 26px)",
                    color: "#2F3E46",
                    marginBottom: "24px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {(card as any).price}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 32px 0",
                    flex: 1,
                  }}
                >
                  {card.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "15px",
                        color: "#3d5260",
                        lineHeight: 1.75,
                        paddingLeft: "22px",
                        marginBottom: "10px",
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
                <a
                  href="tel:22211437"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "#84A98C",
                    color: "#ffffff",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: "13px 20px",
                    borderRadius: "3px",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                  }}
                >
                  Vælg dette scenarie
                </a>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "48px",
              fontSize: "15px",
              color: "#7a8f99",
            }}
          >
            Ønsker du at se de specifikke enkeltpriser?{" "}
            <a
              href="/kim-bondo/priser"
              style={{
                color: "#84A98C",
                textDecoration: "underline",
                fontWeight: 600,
              }}
            >
              Se den komplette prisliste her
            </a>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5: CORE FOUNDATION
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "96px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
        }}
      >
        <div>
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
            Den sikre logistik i baggrunden
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
            }}
          >
            Med fire års solid erfaring med logistik, kørsel af rustvogn og
            koordinering mellem kirker, kapeller og krematorier, har jeg
            fuldstændig styr på drejebogen. Alt det praktiske glider lydløst i
            baggrunden, så I kan sænke skuldrene og vide, at der er 100 % tjek
            på detaljerne.
          </p>
        </div>
        <div>
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
            Friheden til at vælge selv
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
            }}
          >
            For mig er der ingen faste skabeloner. Hvad enten den smukke afsked
            skal foregå i en traditionel kirke, et kapel, hjemme i stuen, i
            sommerhuset eller i haven, så skaber jeg rammerne om det. Det
            vigtigste er, at afskeden bliver personlig, kærlig og føles rigtig
            for jer – bare kisten kan komme med.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6: THE RED THREAD
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#eae6df",
          padding: "96px 32px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(22px, 3vw, 36px)",
              color: "#2F3E46",
              marginBottom: "32px",
              lineHeight: 1.3,
            }}
          >
            En brik i livets store overgange
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.9,
              color: "#3d5260",
              marginBottom: "24px",
            }}
          >
            At tage afsked er en af livets absolut største overgange. Det kræver
            mere end bare praktisk planlægning; det kræver omsorg for den energi
            og den stemning, der efterlades i rummet.
          </p>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.9,
              color: "#3d5260",
            }}
          >
            Jeg ser det som mit kald at bære de tunge praktiske byrder for jer,
            så der skabes et frirum, hvor I kan finde den nødvendige fred og
            eftertanke. Jeg forlader ikke en familie, før jeg ved, at der er
            skabt fuldstændig ro, og at I sidder tilbage med følelsen af at være
            blevet holdt om og støttet hele vejen igennem. Og husk – I kan
            altid ringe, hvis der opstår det mindste efterfølgende.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7: KONTAKTFORMULAR
      ══════════════════════════════════════════════════════ */}
      <section
        id="kontakt"
        style={{
          background: "#F9F8F6",
          padding: "96px 32px",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(22px, 3vw, 34px)",
              color: "#2F3E46",
              marginBottom: "16px",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            Skriv til Kim
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#7a8f99",
              lineHeight: 1.7,
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Udfyld formularen nedenfor, og Kim vender tilbage hurtigst muligt.
            Du er også altid velkommen til at ringe direkte på{" "}
            <a href="tel:22211437" style={{ color: "#84A98C", fontWeight: 600, textDecoration: "none" }}>
              22 21 14 37
            </a>.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8: FOOTER & CTA
      ══════════════════════════════════════════════════════ */}
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
          Kim Bondo – Bedemand København
        </p>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "6px",
            lineHeight: 1.7,
          }}
        >
          Vandtårnsvej 62A, 2860 Søborg
        </p>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "48px",
            lineHeight: 1.7,
          }}
        >
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
            fontSize: "clamp(15px, 1.8vw, 18px)",
            padding: "18px 40px",
            borderRadius: "3px",
            textDecoration: "none",
            letterSpacing: "0.05em",
            marginBottom: "48px",
          }}
        >
          Ring direkte til Kim på 22 21 14 37
        </a>
        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.35)",
            marginTop: "16px",
          }}
        >
          © {new Date().getFullYear()} Bedemand København og Nordsjælland
        </p>
      </footer>
    </div>
  );
}
