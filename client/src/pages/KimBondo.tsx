import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import SEO from "@/components/SEO";

/**
 * Kim Bondo – Personal Homepage
 * Design: Nordic Quietism — warm off-white (#F9F8F6), charcoal text (#2F3E46),
 *         sage green CTAs (#84A98C), Lora serif headings + Open Sans body.
 *
 * Section order (revised):
 *   1. Hero — headline + underheadline + kystbillede (beach/hearse)
 *   2. Introduktion — "Tryghed og god energi…" + haven-kiste billede
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
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <a href="/kim-bondo/afskeder" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Afskeder</a>
            <a href="/kim-bondo/priser" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Priser</a>
            <a href="/kim-bondo/huskeliste" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Huskeliste</a>
            <a href="/kim-bondo/begravelseshjaelp" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Begravelseshjælp</a>
            <a href="#kontakt" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Kontakt</a>
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
            Hos mig er der tid, uforstyrrelig ro og plads til jeres ønsker –
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
            <img
              src="/manus-storage/kim-beach-solo_609d5ab7.png"
              alt="Kim Bondo med sort Mercedes rustvogn ved den danske kyst"
              style={{
                width: "100%",
                aspectRatio: "4/3",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
          </div>

          {/* Hero CTA */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a
              href="#kontakt"
              style={{
                display: "inline-block",
                background: "#84A98C",
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
                style={{ color: "#84A98C", fontWeight: 600, textDecoration: "none" }}
              >
                22 21 14 37
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2: INTRODUKTION OG TILLID
          – "Tryghed og god energi, når alt andet ramler"
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
            Når vi mister en, vi har kær, opstår der ofte et øjeblikkeligt kaos af praktiske spørgsmål og dybe følelser. Min vigtigste opgave – uanset om vi mødes hjemme hos jer eller taler i telefon – er at skabe et rum med ro, overblik og god energi.
          </p>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.85,
              color: "#3d5260",
            }}
          >
            Jeg møder jer præcis der, hvor I er. Hvad enten sorgen kalder på
dyb alvor, tårer eller et befriende smil, tilpasser jeg mig jeres
            behøv – som et nærværende menneske med tid og rum til det, I har brug for. Med mange års erfaring i
            at lytte til og rumme mennesker i svære livsfaser, tager jeg mig den
            tid, det kræver at bære det tunge, så I kan koncentrere jer om andre ting.
          </p>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e0dcd6", margin: "0 48px" }} />

      {/* ══════════════════════════════════════════════════════
          SECTION 3: BÆREDYGTIGHED OG VÆRDIER
          – "Omsorg for naturen – Bæredygtig afsked"
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: SECTION_PADDING,
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
          Som en naturlig del af mit virke tilbyder jeg udelukkende kister
          produceret i Danmark af 100 % genbrugsmaterialer. Der er ikke fældet
          et eneste nyt træ for at skabe kisten. Det giver jer mulighed for at
          vælge en afsked, der er smuk og lokal, og som samtidig tager fuldt
          hensyn til den natur, vi er en del af.
        </p>

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
          eller skjulte gebyrer. Ikke mindst lægger jeg stor vægt på 100 %
          gennemskuelighed, så I kender alle udgifter på forhånd. Uanset hvilken
          løsning der føles rigtig for jer, er det hele afstemt efter faste,
          klare rammer uden ubehagelige overraskelser.
        </p>
      </section>

      {/* FORKLARENDE TEKST OM PRIS OG KØRSLER */}
      <section
        style={{
          background: "#F9F8F6",
          padding: "0 32px 64px",
        }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2vw, 24px)", color: "#2F3E46", marginBottom: "28px" }}>
            Hvad påvirker prisen?
          </h3>
          <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.85, color: "#3d5260", marginBottom: "28px" }}>
            Prisen på en afsked afhænger i høj grad af, hvor afdøde skal hentes, samt hvor mange kørsler der er behov for med rustvognen.
          </p>
          <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.85, color: "#3d5260", marginBottom: "28px" }}>
            Når afhentningen foregår fra et privat hjem, indebærer det ofte en større praktisk opgave end ved afhentning på et hospital, plejehjem eller hospice. I private hjem er der jævnligt trange pladsforhold og trapper, hvilket kræver mere tid og ekstra ressourcer til at sikre en respektfuld og omsorgsfuld håndtering. Samtidig er det nødvendigt at arrangere afhentningen hurtigt fra enten hjemmet, plejehjemmet eller hospicet, så afdøde kan blive bragt til et kistehotel indtil selve højtideligheden.
          </p>
          <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.85, color: "#3d5260", marginBottom: "28px" }}>
            Antallet af kørsler med rustvognen har ligeledes indflydelse på den endelige pris. Hvis det er muligt at køre afdøde direkte fra hospitalets kapel til kirken eller kapellet på selve dagen, reduceres antallet af kørsler, hvilket afspejler sig i en lavere pris. Det er dog værd at bemærke, at hospitalernes kapeller som regel holder lukket for afhentning om lørdagen, hvorfor denne løsning primært lader sig gøre på hverdage. Hvis afdøde først skal omvejen forbi et kistehotel, medfører det en ekstra kørsel.
          </p>
          <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.85, color: "#3d5260" }}>
            Ved en bisættelse, hvor der efterfølgende sker kremering, vil der som udgangspunkt være to kørsler med rustvognen, men hvis afdøde først har været på kistehotellet, bliver det til tre kørsler i alt. Ved en jordfæstelse, hvor kisten sænkes i jorden, kan logistikken ofte forenkles. Hvis afdøde kan afhentes direkte på hospitalet, og begravelsen foregår på kirkegården lige omkring kirken, kan det klares med en enkelt kørsel, hvilket gør denne løsning mere økonomisk. Hvis kirkegården ligger et andet sted end kirken, køres der efter højtideligheden videre til det valgte gravsted, hvilket kræver en kørsel mere.
          </p>
        </div>
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
                  "Hvis afdøde ligger på hospital eller kapel og kan køres direkte til højtidelighed og det er en hverdag.",
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
                title: "Den enkle begravelse",
                subtitle:
                  "Hvis afdøde ligger på hospital og kan køres direkte til højtidelighed på en hverdag, og kirken og kirkegården er samme sted.",
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
                subtitle:
                  "Hvis afdøde ligger på hospital eller kapel og kan køres direkte til krematoriet på en hverdag – uden forudgående højtidelighed.",
                price: "Fra 15.500 kr.",
                items: [
                  "100 % bæredygtig, danskproduceret genbrugskiste",
                  "Klassisk hvid urne",
                  "Klargøring af kiste, påklædning og ilægning i kiste",
                  "Rustvognskørsel fra hospital eller kapel til krematoriet",
                  "Kontakt til kordegn, krematorie og kirkegård",
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
                        color: "#84A98C",
                        margin: 0,
                      }}
                    >
                      {card.price}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "28px",
                      color: "#84A98C",
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
                      href="#kontakt"
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
            Alle priseksempler er beregnet på hverdage. Rustvognskørsel i weekenden er 50% dyrere.
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
          SECTION 5: LOGISTIK OG ERFARING
          – "Den sikre logistik" + "Friheden til at vælge"
          – Rådhuspladsbillede som visuelt element
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: SECTION_PADDING,
        }}
      >
        {/* Rådhuspladsbillede øverst i sektionen */}
        <div
          style={{
            marginBottom: "64px",
            borderRadius: "4px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            maxWidth: "760px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img
            src="/manus-storage/kim-hearse-black_c31e9475.png"
            alt="Sort rustvogn på Rådhuspladsen i København – Kim Bondo Bedemand"
            style={{
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              display: "block",
            }}
          />
          <p
            style={{
              padding: "10px 16px",
              fontSize: "13px",
              color: "#9a9087",
              fontStyle: "italic",
              background: "#F9F8F6",
              textAlign: "center",
            }}
          >
            Rådhuspladsen, København
          </p>
        </div>

        {/* To tekstkolonner */}
        <div
          style={{
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
              Min tilgang til mennesker bygger på min dybe baggrund med
              krisehåndtering og svære samtaler. Samtidig garanterer jeg en
              fuldstændig tryg og sikker afvikling af alt det praktiske. Jeg har
              altid helt styr på drejebogen, rustvognskørslen og den præcise
              koordinering med myndigheder, kirker, kapeller og krematorier. Alt det
              praktiske glider lydløst i baggrunden, så I roligt kan sænke
              skuldrene og vide, at der er 100 % tjek på detaljerne.
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
              For mig findes der ingen faste skabeloner. Hvad enten den smukke
              afsked skal foregå i en traditionel kirke, et kapel, hjemme i
              stuen, i sommerhuset eller ude i haven, skaber jeg rammerne for
              det. Det vigtigste er, at afskeden bliver personlig, kærlig og
              føles helt rigtig for jer – kisten skal nok komme frem.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6: LIVETS OVERGANGE
          – "En brik i livets store overgange"
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#F9F8F6",
          padding: SECTION_PADDING,
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
            Et trygt frirum i en svær tid
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.9,
              color: "#3d5260",
            }}
          >
            Jeg ser det som mit ansvar at overtage de tunge praktiske byrder fra
            jeres skuldre, så I i stedet får et frirum til eftertanke og fred.
            Jeg forlader aldrig en familie, før jeg mærker, at der er skabt
            fuldstændig ro om forløbet, og at I føler jer holdt om. Og husk –
            I er altid velkomne til at kontakte mig, hvis der opstår det mindste
            spørgsmål undervejs eller bagefter.
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
              style={{ color: "#84A98C", fontWeight: 600, textDecoration: "none" }}
            >
              22 21 14 37
            </a>
            .
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
          href="#kontakt"
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
            href="mailto:kontakt@bedemandkøbenhavn.dk"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}
          >
            kontakt@bedemandkøbenhavn.dk
          </a>
          {" "}&nbsp;·&nbsp; CVR.: 45084159
        </p>
      </footer>
    </div>
  );
}
