import ContactForm from "@/components/ContactForm";
import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Personal Homepage
 * Design: Nordic Quietism — warm off-white (#F9F8F6), charcoal text (#2F3E46),
 *         sage green CTAs (#3D6B4F), Lora serif headings + Open Sans body.
 *
 * Section order (revised):
 *   1. Hero — headline + underheadline + kystbillede (beach/hearse)
 *   2. Introduktion — "Ro, overblik og mening" + haven-kiste billede
 *   3. Bæredygtighed — "Omsorg for naturen – Bæredygtig afsked"
 *   4. Priser intro + 3 priseksempler (ingen tekst imellem)
 *   5. Logistik — "Den sikre logistik" + "Friheden til at vælge" + rådhuspladsbillede
 *   6. Livets overgange — "En brik i livets store overgange"
 *   7. Kontaktformular — "Skriv til Kim"
 *   8. Footer
 */

const SECTION_PADDING = "96px 32px";

export default function KimBondo() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  // Scroll to hash anchor on mount (e.g. /#kontakt from nav links)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Short delay lets React finish rendering before scrolling
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div
      role="main"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        background: "#F9F8F6",
        color: "#2F3E46",
        margin: 0,
        padding: 0,
      }}
    >
      <SEO
        title="Bedemand Kim Bondo – København og Nordsjælland"
        description="Personlig bedemand med nærvær og ro. Bisættelse fra 19.500 kr., begravelse fra 21.500 kr. Gennemsigtige priser. Ring 22 21 14 37 – døgnet rundt."
        url="https://www.bedemandkobenhavn.dk/"
        image="/images/kim-beach-solo_609d5ab7.webp"
      />
      <SchemaOrg type="both" />
      <SchemaOrg type="WebSite" />

      {/* ══════════════════════════════════════════════════════
          SECTION 1: HERO
          – Overskrift + underoverskrift + KUN kystbillede
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: "#F9F8F6", padding: "0 0 80px 0" }}>
        {/* Header bar */}
        <header
          style={{
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
              Kim Bondo
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

        {/* Hero text */}
        <div
          style={{
            textAlign: "center",
            padding: "72px 24px 56px",
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
            Hos mig er der tid, uforstyrret ro og plads til jeres ønsker –
            præcis som de er.
          </p>

          {/* KUN kystbillede (rustvogn ved havet) */}
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            }}
         >
          <picture style={{ display: "block" }}>
            <img
              src="/images/kim-beach-solo_609d5ab7.webp"
              width={2304}
              height={1536}
              alt="Kim Bondo med sort Mercedes rustvogn ved den danske kyst"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              style={{
                width: "100%",
                aspectRatio: "4/3",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
          </picture>
          </div>


          {/* Hero CTA */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a
              href="#kontakt"
              style={{
                display: "inline-block",
                background: "#3D6B4F",
                color: "#ffffff",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(15px, 1.8vw, 18px)",
                padding: "16px 40px",
                borderRadius: "3px",
                textDecoration: "none",
                letterSpacing: "0.05em",
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
                style={{ color: "#3D6B4F", fontWeight: 600, textDecoration: "none" }}
              >
                22 21 14 37
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2: MØD MIG / SÅDAN HJÆLPER JEG
          – Tryghed, logistik, frihed og bæredygtighed samlet
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: SECTION_PADDING,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          alignItems: "start",
        }}
      >
       {/* Haven-kiste billede */}
       <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
         <picture>
           <source srcSet="/images/kim-garden-coffin_90a67244.webp" type="image/webp" />
            <img
              src="/images/kim-garden-coffin_90a67244.jpg"
              width={900}
              height={510}
              alt="Hvid kiste med blomster i en naturskøn have – Kim Bondo Bedemand"
              loading="lazy"
              decoding="async"
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
          </picture>
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

        {/* Tekst */}
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
            Sådan hjælper jeg
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
              marginBottom: "20px",
            }}
          >
            Når vi mister en, vi har kær, opstår der ofte et øjeblikkeligt kaos af praktiske spørgsmål og dybe følelser. Min vigtigste opgave – uanset om vi mødes hjemme hos jer eller taler i telefon – er at skabe et rum med ro og overblik. Og at holde fast i, at også de tungeste stunder bærer mening i sig.
          </p>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
              marginBottom: "20px",
            }}
          >
            Jeg møder jer præcis der, hvor I er. Hvad enten sorgen kalder på
            dyb alvor, tårer eller et befriende smil, tilpasser jeg mig jeres
            behov – som et nærværende menneske med tid og rum til det, I har brug for.
          </p>
          <h3
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(18px, 2vw, 22px)",
              color: "#2F3E46",
              marginBottom: "12px",
              marginTop: "32px",
              lineHeight: 1.3,
            }}
          >
            Den sikre logistik i baggrunden
          </h3>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
              marginBottom: "20px",
            }}
          >
            Jeg garanterer en fuldstændig tryg og sikker afvikling af alt det praktiske. Jeg har altid helt styr på drejebogen, rustvognskørslen og den præcise koordinering med myndigheder, kirker, kapeller og krematorier. Alt det praktiske glider lydløst i baggrunden, så I roligt kan sænke skuldrene.
          </p>
          <h3
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(18px, 2vw, 22px)",
              color: "#2F3E46",
              marginBottom: "12px",
              marginTop: "32px",
              lineHeight: 1.3,
            }}
          >
            Friheden til at vælge selv
          </h3>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
              marginBottom: "20px",
            }}
          >
            For mig findes der ingen faste skabeloner. Hvad enten den smukke afsked skal foregå i en traditionel kirke, et kapel, hjemme i stuen, i sommerhuset eller ude i haven, skaber jeg rammerne for det. Det vigtigste er, at afskeden bliver personlig, kærlig og føles helt rigtig for jer.
          </p>
          <h3
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(18px, 2vw, 22px)",
              color: "#2F3E46",
              marginBottom: "12px",
              marginTop: "32px",
              lineHeight: 1.3,
            }}
          >
            Omsorg for naturen – Bæredygtig afsked
          </h3>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
            }}
          >
            Som en naturlig del af mit virke tilbyder jeg kister produceret i Danmark – de fleste med meget lavt klimaaftryk. Det giver jer mulighed for at vælge en afsked, der er smuk og lokal, og som samtidig tager hensyn til den natur, vi er en del af.
          </p>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ══════════════════════════════════════════════════════
          SECTION 4: ØKONOMI – intro direkte efterfulgt af 3 priseksempler
      ══════════════════════════════════════════════════════ */}
      <section
        id="priser"
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "96px 32px 64px",
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
            marginBottom: "0",
          }}
        >
          En værdig afsked skal ikke være forbundet med økonomisk utryghed
          eller skjulte gebyrer. Ikke mindst lægger jeg stor vægt på fuld
          gennemskuelighed, så I kender alle udgifter på forhånd. Uanset hvilken
          løsning der føles rigtig for jer, er det hele afstemt efter faste,
          klare rammer uden ubehagelige overraskelser.
        </p>
      </section>



      {/* 3 PRISSCENARIER */}
      <section
        id="priseksempler"
        style={{
          background: "#F9F8F6",
          padding: "64px 32px 96px",
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
            Vores 3 priseksempler
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
                  "Hvis afdøde ligger på hospital eller kapel og kan køres direkte til højtidelighed, og det er en hverdag.",
                price: "Fra 19.500 kr.",
                items: [
                  "Fysisk møde eller telefonmøde, hvad der passer bedst for dig, med planlægning af forløbet",
                  "Basiskiste — danskproduceret med lavt klimaaftryk",
                  "Natururne",
                  "Klargøring af kiste, påklædning og ilægning i kiste",
                  "Tre rustvognskørsler: til kisteophold, videre til ceremonien og derfra til krematoriet",
                  "Kontakt til kordegn, præst, krematorium og kirkegård",
                  "Anmodning v/ kirkeministeriet",
                  "Ansøgning om begravelseshjælp",
                  "Bedemand til stede ved højtideligheden",
                ],
              },
              {
                title: "Den enkle begravelse",
                subtitle:
                  "Hvis afdøde ligger på hospital og kan køres direkte til højtidelighed på en hverdag, og kirken og kirkegården er samme sted.",
                price: "Fra 21.500 kr.",
                items: [
                  "Fysisk møde eller telefonmøde, hvad der passer bedst for dig, med planlægning af forløbet",
                  "Massiv fyr — kiste i fyrretræ med knaster",
                  "Klargøring af kiste, påklædning og ilægning i kiste",
                  "Tre rustvognskørsler: til kisteophold, videre til ceremonien og derfra til graven",
                  "Kontakt til kordegn, præst og kirkegård",
                  "Anmodning v/ kirkeministeriet",
                  "Ansøgning om begravelseshjælp",
                  "Bedemand til stede ved højtideligheden",
                  "Udlægning af blomster på graven",
                ],
              },
              {
                title: "Afsked uden ceremoni",
                subtitle:
                  "Hvis afdøde ligger på hospital eller kapel og kan køres direkte til krematoriet på en hverdag – uden forudgående højtidelighed.",
                price: "Fra 13.550 kr.",
                items: [
                  "Basiskiste — danskproduceret med lavt klimaaftryk",
                  "Natururne",
                  "Klargøring af kiste, påklædning og ilægning i kiste",
                  "Rustvognskørsel fra hospital eller kapel til krematoriet",
                  "Kontakt til kordegn, krematorium og kirkegård",
                  "Anmodning v/ kirkeministeriet",
                  "Ansøgning om begravelseshjælp",
                ],
              },
            ].map((card, idx) => {
              const isOpen = openCard === idx;
              return (
              <div
                key={card.title}
                style={{
                  background: "#ffffff",
                  borderRadius: "4px",
                  boxShadow: "0 2px 16px rgba(47,62,70,0.07)",
                  overflow: "hidden",
                }}
              >
                {/* Collapsed header — always visible */}
                <button
                  onClick={() => setOpenCard(isOpen ? null : idx)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "32px",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "'Lora', serif",
                        fontWeight: 600,
                        fontSize: "clamp(18px, 2vw, 22px)",
                        color: "#2F3E46",
                        marginBottom: "6px",
                        lineHeight: 1.3,
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Lora', serif",
                        fontWeight: 700,
                        fontSize: "clamp(18px, 2vw, 22px)",
                        color: "#3D6B4F",
                        margin: 0,
                      }}
                    >
                      {card.price}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "28px",
                      color: "#3D6B4F",
                      fontWeight: 300,
                      lineHeight: 1,
                      display: "inline-block",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 220ms ease",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Expandable content */}
                {isOpen && (
                  <div style={{ padding: "0 32px 32px" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#7a8f99",
                        lineHeight: 1.6,
                        marginBottom: "20px",
                        fontStyle: "italic",
                        borderTop: "1px solid #e0dcd6",
                        paddingTop: "20px",
                      }}
                    >
                      {card.subtitle}
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 28px 0",
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
                              color: "#3D6B4F",
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
                      href="#kontakt"
                      style={{
                        display: "block",
                        textAlign: "center",
                        background: "#3D6B4F",
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
                      Kontakt mig
                    </a>
                  </div>
                )}
              </div>
            );})}
          </div>

          {/* ── IKKE INKLUDERET ── */}
          <div
            style={{
              background: "#F9F8F6",
              borderRadius: "4px",
              padding: "28px 32px",
              marginTop: "40px",
              maxWidth: "640px",
              margin: "40px auto 0",
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

          <p
            style={{
              textAlign: "center",
              marginTop: "32px",
              fontSize: "14px",
              color: "#7a8f99",
              fontStyle: "italic",
              maxWidth: "600px",
              margin: "32px auto 0",
            }}
          >
            Alle priseksempler er beregnet på hverdage. Afhentning og rustvognskørsel er 50 % dyrere efter kl. 16 på hverdage samt i weekender og på helligdage.
            Der kommer ikke uventede udgifter. Vi gennemgår det hele sammen – i ro og mag.
          </p>

          <p
            style={{
              textAlign: "center",
              marginTop: "24px",
              fontSize: "15px",
              color: "#7a8f99",
            }}
          >
            Ønsker du at se de specifikke enkeltpriser?{" "}
            <a
              href="/priser/"
              style={{
                color: "#3D6B4F",
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
          SECTION 7: KONTAKTFORMULAR
          – "Skriv til Kim"
      ══════════════════════════════════════════════════════ */}
      <section
        id="kontakt"
        style={{
          background: "#F9F8F6",
          padding: SECTION_PADDING,
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
            Kontakt Kim
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
            Udfyld formularen herunder, så vender jeg tilbage hurtigst muligt.
            Du er også altid velkommen til at ringe direkte på{" "}
            <a
              href="tel:22211437"
              style={{ color: "#3D6B4F", fontWeight: 600, textDecoration: "none" }}
            >
              22 21 14 37
            </a>
            .
          </p>
          <ContactForm />
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "#7a8f99",
              textAlign: "center",
              marginTop: "40px",
              marginBottom: 0,
            }}
          >
            Har jeg hjulpet dig og din familie? Så sætter jeg stor pris på, hvis du vil{" "}
            <a
              href="https://g.page/r/CW91ldyVVI39EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3D6B4F", fontWeight: 600 }}
            >
              dele din oplevelse på Google
            </a>{" "}
            — det hjælper andre, der står samme sted, med at turde tage kontakt.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SECTION 7b: BLOG / ARTIKLER
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: "#F9F8F6", padding: "80px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase", marginBottom: "16px" }}>Viden og vejledning</p>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 32px)", color: "#2F3E46", marginBottom: "12px", marginTop: 0 }}>Artikler om afsked og begravelse</h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "40px", maxWidth: "600px" }}>
            Her deler jeg viden om de spørgsmål, jeg oftest møder. Læs og bliv klogere, så I kan træffe de rigtige valg i en svær tid.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            {[
              {
                title: "Hvad sker der efter et dødsfald?",
                excerpt: "Når en nærtestående dør, er der mange praktiske ting, der skal ordnes. Her er en oversigt over de første skridt — hvem skal kontaktes, og hvad sker der med afdøde.",
                href: "/huskeliste/",
                label: "Læs huskelisten",
              },
              {
                title: "Sådan vælger du den rigtige afsked",
                excerpt: "Bisættelse, begravelse eller afsked uden ceremoni? Kirkelig eller borgerlig? Her gennemgår jeg forskellene, så I kan vælge den afsked, der passer til jer.",
                href: "/afskeder/",
                label: "Se alle afskeder",
              },
              {
                title: "Hvad koster en begravelse i 2026?",
                excerpt: "Mange er overraskede over, hvad en begravelse egentlig koster. Her er en ærlig gennemgang af, hvad der påvirker prisen — og hvad du kan forvente at betale.",
                href: "/hvad-koster-en-begravelse/",
                label: "Læs om priser",
              },
            ].map((article) => (
              <div
                key={article.title}
                style={{
                  background: "#fff",
                  padding: "32px 28px",
                  borderRadius: "3px",
                  border: "1px solid #e0dcd6",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "18px", color: "#2F3E46", marginBottom: "12px", marginTop: 0, lineHeight: 1.4 }}>{article.title}</h3>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", lineHeight: 1.7, color: "#3d4f5a", marginBottom: "20px", flex: 1 }}>{article.excerpt}</p>
                <a
                  href={article.href}
                  style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "14px", alignSelf: "flex-start" }}
                >
                  {article.label} →
                </a>
              </div>
            ))}
          </div>
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
          Vandtårnsvej 62A, 2860 Søborg
        </p>
        <a
          href="#kontakt"
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
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a
            href="tel:22211437"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Tlf.: 22 21 14 37
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
