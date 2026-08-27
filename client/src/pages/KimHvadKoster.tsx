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
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" } as React.CSSProperties,
};


export default function KimHvadKoster() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Hvad koster en begravelse i 2026? Komplet guide med alle udgifter"
        description="Komplet guide til alle udgifter ved en afsked i 2026: bedemand, kremering, gravsted, kapelleje og begravelseshjælp. Officielle takster for København og Nordsjælland. Kim Bondo."
        url="https://www.bedemandkobenhavn.dk/hvad-koster-en-begravelse"
        image="/images/kim-beach-solo_609d5ab7.webp"
      />
      <SchemaOrg
        type="both"
        faqItems={[
          { question: "Hvad koster en begravelse i Danmark?", answer: "En typisk begravelse eller bisættelse koster i 2026 alt fra 20.000 kr. til 60.000 kr. afhængigt af valg af kiste, gravsted, gravsten og ceremonitype." },
          { question: "Hvad er den billigste begravelse?", answer: "Den billigste løsning er afsked uden ceremoni, hvor kisten transporteres direkte til krematoriet. Hos mig starter denne løsning fra 13.550 kr." },
          { question: "Hvad koster en bisættelse i København?", answer: "Mit honorar er 4.500 kr., mens den samlede pakkepris for en bisættelse med ceremoni starter fra 19.500 kr. Dertil kommer kremering, blomster og eventuel kapelleje." },
          { question: "Hvad er begravelseshjælp?", answer: "Det offentlige yder begravelseshjælp til alle afdøde, der var omfattet af dansk sygesikring. I 2026 er tilskuddet op til 13.550 kr. afhængigt af afdødes formue." },
          { question: "Er der skjulte udgifter ved en begravelse?", answer: "Hos mig gennemgås alle udgifter på forhånd, inden I beslutter noget. Ingen overraskelser bagefter." },
        ]}
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Hvad koster en begravelse?", url: "https://www.bedemandkobenhavn.dk/hvad-koster-en-begravelse" }
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
          <a href="/" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2, textDecoration: "none" }}>Bedemand København og Nordsjælland</a>
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
          <a href="/#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
            Få et uforpligtende tilbud
          </a>
          <a href="/priser" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>
            Se mine priser
          </a>
        </div>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
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
                <div style={{ flexShrink: 0, width: "40px", height: "40px", background: "#3D6B4F", borderRadius: "50 %", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "18px" }}>{item.num}</div>
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
          <a href="/begravelseshjaelp" style={s.link}>Læs mere om begravelseshjælp →</a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HVAD KOSTER DET REELT? — KOMPLET GUIDE
          ══════════════════════════════════════════════════════ */}

      {/* ── GUIDE INTRO ── */}
      <section style={{ background: "#2F3E46", padding: "80px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ ...s.label, color: "#3D6B4F" }}>Den komplette guide</p>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(24px, 3.5vw, 40px)", color: "#fff", lineHeight: 1.2, marginBottom: "24px" }}>
            Hvad koster det reelt?
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 19px)", color: "rgba(255,255,255,0.80)", lineHeight: 1.75, maxWidth: "600px", margin: "0 auto 32px" }}>
            De fleste bedemænd viser én pris. Den dækker bedemandens eget honorar og måske kisten. Men en afsked består af mange udgifter — og de fleste af dem bestemmer bedemanden ikke prisen på. Denne guide viser dem alle.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {["Kremering", "Gravsted", "Kapelleje", "Kisteopbevaring", "Begravelseshjælp", "Samlet eksempel"].map((item) => (
              <span key={item} style={{ background: "rgba(132,169,140,0.25)", color: "#3D6B4F", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.08em", padding: "6px 16px", borderRadius: "20px", border: "1px solid rgba(132,169,140,0.4)" }}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEL 1: KREMERING ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Del 1 — Kun ved bisættelse</p>
          <h2 style={s.h2}>Kremering</h2>
          <p style={s.body}>
            Kremering er en kommunal ydelse og betales direkte til krematoriet — ikke til bedemanden. Prisen afhænger af, hvilket krematorium der benyttes. Som udgangspunkt vælges det krematorium, der ligger tættest på ceremoniestedet eller afdødes bopæl. Jeg hjælper med at vælge den løsning, der giver mest mening for jer.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "24px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e0dcd6" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px 10px 0", color: "#2F3E46", fontWeight: 700 }}>Krematorium</th>
                  <th style={{ textAlign: "right", padding: "10px 12px", color: "#2F3E46", fontWeight: 700, whiteSpace: "nowrap" }}>Pris, voksen</th>
                  <th style={{ textAlign: "left", padding: "10px 0", color: "#7a8f99", fontWeight: 600 }}>Bemærkning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bispebjerg Krematorium (Kbh. NV)", "3.075 kr.", "Betjener Kbh. Kommune"],
                  ["Sundby Krematorium (Kbh. S)", "3.075 kr.", "Betjener Kbh. Kommune"],
                  ["Søndermark Krematorium (Frederiksberg)", "2.781 kr.", "Kun borgere bosat på Frederiksberg"],
                  ["Søndermark Krematorium (Frederiksberg)", "3.027 kr.", "Borgere bosat uden for Frederiksberg"],
                  ["Hillerød Krematorium", "3.078 kr.", "Betjener Nordsjælland"],
                  ["Ballerup Krematorium", "3.155 kr.", "Betjener Storkøbenhavn vest"],
                  ["Glostrup Krematorium", "3.405 kr.", "Betjener Storkøbenhavn vest"],
                  ["Fælleskrematoriet (Ringsted)", "3.410 kr.", "Kisten kan indleveres i Helsingør"],
                ].map(([name, price, note], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #e0dcd6" }}>
                    <td style={{ padding: "12px 12px 12px 0", color: "#3d5260", lineHeight: 1.5 }}>{name}</td>
                    <td style={{ padding: "12px 12px", color: "#2F3E46", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap" }}>{price}</td>
                    <td style={{ padding: "12px 0", color: "#7a8f99", fontSize: "14px" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#7a8f99", fontStyle: "italic", lineHeight: 1.7 }}>
            Kilde: Danbegravelse.dk (opdateret april 2026) og Frederiksberg Kommune (2026-takster). Priserne fastsættes af det enkelte krematorium og reguleres typisk hvert år.
          </p>
        </div>
      </section>

      {/* ── DEL 2: GRAVSTED ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Del 2 — Kiste- og urnegrave</p>
          <h2 style={s.h2}>Gravsted og kirkegårdsafgifter</h2>
          <p style={s.body}>
            Gravstedet er den udgift, der varierer mest — og som oftest overrasker pårørende. Prisen afhænger af kommunen, kirkegårdens beliggenhed, gravstedets type og størrelse samt, om der ønskes vedligeholdelse. Priserne herunder er for <em>erhvervelse af brugsret</em> til gravstedet. Hertil kommer gravning og eventuelt vedligeholdelse.
          </p>
          <h3 style={{ ...s.h3, marginTop: "32px" }}>Københavns Kommune — 2026-takster</h3>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#7a8f99", marginBottom: "16px", fontStyle: "italic" }}>Kilde: kk.dk — gælder Bispebjerg, Vestre, Assistens, Sundby og Brønshøj Kirkegård</p>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.06em", color: "#2F3E46", textTransform: "uppercase", marginBottom: "8px" }}>Kistegrave (3 m², 20 år)</p>
          <div style={{ overflowX: "auto", marginBottom: "28px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
              <tbody>
                {[
                  ["Traditionelt kistegravsted m. tujahæk og perlesten", "13.442 kr."],
                  ["Kistegravsted m. kantsten", "18.033 kr."],
                  ["Kistefællesgravsted i græs m. liggesten", "10.861 kr."],
                  ["Kistefællesgravsted i græs u. liggesten", "9.523 kr."],
                  ["Gravning af kistegrav (tillæg)", "7.055 kr."],
                ].map(([label, price]) => (
                  <tr key={label} style={{ borderBottom: "1px solid #e0dcd6" }}>
                    <td style={{ padding: "11px 12px 11px 0", color: "#3d5260" }}>{label}</td>
                    <td style={{ padding: "11px 0", color: "#2F3E46", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap" }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.06em", color: "#2F3E46", textTransform: "uppercase", marginBottom: "8px" }}>Urnegrave (1 m², 10 år)</p>
          <div style={{ overflowX: "auto", marginBottom: "28px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
              <tbody>
                {[
                  ["Traditionelt urnegravsted m. indramning og renholdelse", "8.976 kr."],
                  ["Traditionelt urnegravsted m. indramning (u. renholdelse)", "4.751 kr."],
                  ["Urnefællesgravsted i græs m. liggesten", "5.459 kr."],
                  ["Urneplads i urnemur/kolumbarium (10 år)", "2.047 kr."],
                  ["Askefællesgrav (engangsbeløb)", "3.617 kr."],
                  ["Gravning af urnegrav (tillæg)", "1.199 kr."],
                  ["Udenbys tillæg (afdøde bosat uden for Kbh. Kommune)", "530–1.060 kr."],
                ].map(([label, price]) => (
                  <tr key={label} style={{ borderBottom: "1px solid #e0dcd6" }}>
                    <td style={{ padding: "11px 12px 11px 0", color: "#3d5260" }}>{label}</td>
                    <td style={{ padding: "11px 0", color: "#2F3E46", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap" }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 style={{ ...s.h3, marginTop: "40px" }}>Frederiksberg Kommune — 2026-takster</h3>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#7a8f99", marginBottom: "16px", fontStyle: "italic" }}>Kilde: frederiksberg.dk — gælder Frederiksberg ældre Kirkegård, Solbjerg Parkkirkegård og Søndermark Kirkegård</p>
          <div style={{ overflowX: "auto", marginBottom: "16px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
              <tbody>
                {[
                  ["Kistegravsted 3 m², 20 år (Frederiksberg ældre Kirkegård)", "8.654 kr."],
                  ["Kistegravsted 3 m², 20 år (Solbjerg / Søndermark)", "4.341 kr."],
                  ["Urnegravsted 1 m², 10 år", "1.603 kr."],
                  ["Gravning kistegrav", "7.138 kr."],
                  ["Urnenedsættelse inkl. gravning", "995 kr."],
                ].map(([label, price]) => (
                  <tr key={label} style={{ borderBottom: "1px solid #e0dcd6" }}>
                    <td style={{ padding: "11px 12px 11px 0", color: "#3d5260" }}>{label}</td>
                    <td style={{ padding: "11px 0", color: "#2F3E46", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap" }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#7a8f99", fontStyle: "italic", lineHeight: 1.7, marginBottom: "32px" }}>
            Bemærk: Frederiksberg-borgere betaler lavere takst. Ikke-borgere betaler dobbelt takst for køb af gravsted (gælder ikke fornyelse).
          </p>
          <h3 style={{ ...s.h3, marginTop: "40px" }}>Nordsjælland — Vejledende prisniveau</h3>
          <p style={s.body}>
            Kirkegårdsafgifter i Nordsjælland fastsættes af den enkelte sognekirke og kommune og varierer betydeligt. Nedenstående er vejledende intervaller baseret på typiske takster i området.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
              <tbody>
                {[
                  ["Kistegravsted (20 år)", "5.000–15.000 kr."],
                  ["Urnegravsted (10 år)", "1.500–6.000 kr."],
                  ["Gravning af kistegrav", "5.000–8.000 kr."],
                  ["Gravning af urnegrav", "800–1.500 kr."],
                ].map(([label, price]) => (
                  <tr key={label} style={{ borderBottom: "1px solid #e0dcd6" }}>
                    <td style={{ padding: "11px 12px 11px 0", color: "#3d5260" }}>{label}</td>
                    <td style={{ padding: "11px 0", color: "#2F3E46", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap" }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e0dcd6", borderLeft: "4px solid #3D6B4F", borderRadius: "3px", padding: "20px 24px" }}>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#3d5260", lineHeight: 1.75, margin: 0 }}>
              Jeg indhenter altid de konkrete priser fra den relevante kirkegård og gennemgår dem med jer, inden I beslutter jer. I betaler aldrig for noget, I ikke kender på forhånd.
            </p>
          </div>
        </div>
      </section>

      {/* ── DEL 3: KAPELLEJE OG MUSIK ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Del 3 — Ceremonistedet</p>
          <h2 style={s.h2}>Kapelleje og musikudgifter</h2>
          <p style={s.body}>
            Hvis ceremonien afholdes i en Folkekirkens kirke, er der som udgangspunkt ingen kapelleje for kirkens medlemmer — men der betales for organist og evt. kantor. Afholdes ceremonien i et kommunalt kapel, betales der leje direkte til kapellet.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", marginTop: "8px" }}>
            <div>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.06em", color: "#2F3E46", textTransform: "uppercase", marginBottom: "12px" }}>Københavns Kommune</p>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
                <tbody>
                  {[
                    ["Søndre/Sundby Kapel (½ time)", "1.154 kr."],
                    ["Vestre Kirkegård, store sal (1 time)", "2.308 kr."],
                    ["Orgelspil og sang (½ time)", "1.352 kr."],
                    ["Orgelspil uden sang (½ time)", "676 kr."],
                    ["Kisteopbevaring pr. uge", "272 kr."],
                  ].map(([label, price]) => (
                    <tr key={label} style={{ borderBottom: "1px solid #e0dcd6" }}>
                      <td style={{ padding: "10px 8px 10px 0", color: "#3d5260", fontSize: "14px" }}>{label}</td>
                      <td style={{ padding: "10px 0", color: "#2F3E46", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap", fontSize: "14px" }}>{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.06em", color: "#2F3E46", textTransform: "uppercase", marginBottom: "12px" }}>Frederiksberg Kommune</p>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
                <tbody>
                  {[
                    ["Lille kapelsal (35 min.)", "1.149 kr."],
                    ["Store kapelsal (35 min.)", "2.068 kr."],
                    ["Kisteopbevaring, første uge", "617 kr."],
                    ["Kisteopbevaring pr. døgn herefter", "71 kr."],
                  ].map(([label, price]) => (
                    <tr key={label} style={{ borderBottom: "1px solid #e0dcd6" }}>
                      <td style={{ padding: "10px 8px 10px 0", color: "#3d5260", fontSize: "14px" }}>{label}</td>
                      <td style={{ padding: "10px 0", color: "#2F3E46", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap", fontSize: "14px" }}>{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#7a8f99", fontStyle: "italic", lineHeight: 1.7, marginTop: "20px" }}>
            Kilde: Københavns Kommune (kk.dk) og Frederiksberg Kommune (frederiksberg.dk), 2026-takster.
          </p>
        </div>
      </section>

      {/* ── DEL 4: BEGRAVELSESHJÆLP DETALJERET ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Del 4 — Offentligt tilskud</p>
          <h2 style={s.h2}>Begravelseshjælp — alle satser for 2026</h2>
          <p style={s.body}>
            Begravelseshjælp er et offentligt tilskud, der søges hos Udbetaling Danmark. Jeg søger altid begravelseshjælp på jeres vegne og modregner beløbet direkte på fakturaen. I behøver ikke selv stå med ansøgningen.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e0dcd6" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px 10px 0", color: "#2F3E46", fontWeight: 700 }}>Situation</th>
                  <th style={{ textAlign: "right", padding: "10px 12px", color: "#2F3E46", fontWeight: 700, whiteSpace: "nowrap" }}>Maks. tilskud</th>
                  <th style={{ textAlign: "right", padding: "10px 0", color: "#2F3E46", fontWeight: 700, whiteSpace: "nowrap" }}>Bortfalder ved formue over</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Afdøde over 18 år m. ægtefælle/børn under 18", "13.550 kr.", "58.800 kr."],
                  ["Afdøde over 18 år, enlig uden børn", "13.550 kr.", "36.250 kr."],
                  ["Afdøde under 18 år", "11.300 kr.", "— (fast beløb)"],
                  ["Afdøde født før 1. april 1957", "Min. 1.050 kr.", "Uanset formue"],
                ].map(([situation, max, limit]) => (
                  <tr key={situation} style={{ borderBottom: "1px solid #e0dcd6" }}>
                    <td style={{ padding: "12px 12px 12px 0", color: "#3d5260", lineHeight: 1.5 }}>{situation}</td>
                    <td style={{ padding: "12px 12px", color: "#2F3E46", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap" }}>{max}</td>
                    <td style={{ padding: "12px 0", color: "#7a8f99", textAlign: "right", whiteSpace: "nowrap", fontSize: "14px" }}>{limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e0dcd6", borderLeft: "4px solid #3D6B4F", borderRadius: "3px", padding: "20px 24px", marginBottom: "16px" }}>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#3d5260", lineHeight: 1.75, margin: 0 }}>
              <strong>Vigtigt:</strong> Udgifter til bedemand og begravelse indgår <em>ikke</em> i formueberegningen. Det er altså boets øvrige formue, der afgør, om I er berettiget til hjælp.
            </p>
          </div>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#3d5260", lineHeight: 1.75 }}>
            Sygeforsikring "danmark" yder desuden op til <strong>1.400 kr.</strong> i tilskud til medlemmer.
          </p>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#7a8f99", fontStyle: "italic", lineHeight: 1.7 }}>
            Kilde: Udbetaling Danmark / borger.dk, 2026-satser.
          </p>
        </div>
      </section>

      {/* ── DEL 5: SAMLET EKSEMPEL ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Del 5 — Realistisk eksempel</p>
          <h2 style={s.h2}>Hvad koster en typisk bisættelse i København?</h2>
          <p style={s.body}>
            Nedenstående er et realistisk eksempel på en bisættelse med kirkelig ceremoni i Københavns Kommune på en hverdag. Afdøde hentes fra hospital.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "24px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e0dcd6" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px 10px 0", color: "#2F3E46", fontWeight: 700 }}>Post</th>
                  <th style={{ textAlign: "right", padding: "10px 12px", color: "#2F3E46", fontWeight: 700, whiteSpace: "nowrap" }}>Beløb</th>
                  <th style={{ textAlign: "left", padding: "10px 0", color: "#7a8f99", fontWeight: 600, fontSize: "13px" }}>Hvem bestemmer prisen?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} style={{ padding: "14px 0 6px", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", color: "#3D6B4F", textTransform: "uppercase" }}>Bedemandens ydelser</td>
                </tr>
                {[
                  ["Bisættelse inkl. honorar, kiste, urne, 2 kørsler", "19.500 kr.", "Kim Bondo"],
                  ["Kistepynt (lille)", "2.500 kr.", "Kim Bondo"],
                ].map(([label, price, who]) => (
                  <tr key={label} style={{ borderBottom: "1px solid #e0dcd6" }}>
                    <td style={{ padding: "11px 12px 11px 0", color: "#3d5260" }}>{label}</td>
                    <td style={{ padding: "11px 12px", color: "#2F3E46", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap" }}>{price}</td>
                    <td style={{ padding: "11px 0", color: "#7a8f99", fontSize: "14px" }}>{who}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={3} style={{ padding: "14px 0 6px", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", color: "#5a7a6a", textTransform: "uppercase" }}>Tredjepartsudgifter</td>
                </tr>
                {[
                  ["Kremering (Bispebjerg Krematorium)", "3.075 kr.", "Krematoriet"],
                  ["Urnegravsted, traditionelt m. indramning (10 år)", "4.751 kr.", "Kbh. Kommune"],
                  ["Gravning af urnegrav", "1.199 kr.", "Kbh. Kommune"],
                  ["Orgelspil og sang (½ time)", "1.352 kr.", "Kirken"],
                ].map(([label, price, who]) => (
                  <tr key={label} style={{ borderBottom: "1px solid #e0dcd6" }}>
                    <td style={{ padding: "11px 12px 11px 0", color: "#3d5260" }}>{label}</td>
                    <td style={{ padding: "11px 12px", color: "#2F3E46", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap" }}>{price}</td>
                    <td style={{ padding: "11px 0", color: "#7a8f99", fontSize: "14px" }}>{who}</td>
                  </tr>
                ))}
                <tr style={{ borderTop: "2px solid #2F3E46" }}>
                  <td style={{ padding: "14px 12px 14px 0", color: "#2F3E46", fontWeight: 700, fontSize: "16px" }}>Samlet brutto</td>
                  <td style={{ padding: "14px 12px", color: "#2F3E46", fontWeight: 700, fontSize: "16px", textAlign: "right", whiteSpace: "nowrap" }}>ca. 32.377 kr.</td>
                  <td></td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e0dcd6" }}>
                  <td style={{ padding: "11px 12px 11px 0", color: "#3D6B4F", fontWeight: 600 }}>Fratrukket begravelseshjælp (ved berettigelse)</td>
                  <td style={{ padding: "11px 12px", color: "#3D6B4F", fontWeight: 700, textAlign: "right", whiteSpace: "nowrap" }}>−13.550 kr.</td>
                  <td style={{ padding: "11px 0", color: "#7a8f99", fontSize: "14px" }}>Udbetaling DK</td>
                </tr>
                <tr>
                  <td style={{ padding: "14px 12px 14px 0", color: "#2F3E46", fontWeight: 700, fontSize: "16px" }}>Realistisk nettoudgift</td>
                  <td style={{ padding: "14px 12px", color: "#2F3E46", fontWeight: 700, fontSize: "18px", textAlign: "right", whiteSpace: "nowrap" }}>ca. 18.827 kr.</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ background: "#F9F8F6", border: "1px solid #e0dcd6", borderRadius: "3px", padding: "20px 24px" }}>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#5a7a6a", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
              Dette er et eksempel. Den faktiske pris afhænger af jeres valg og den kirkegård, I vælger. Jeg gennemgår altid alle udgifter med jer, inden vi beslutter noget — ingen overraskelser på fakturaen.
            </p>
          </div>
        </div>
      </section>

      {/* ── NOTE OM PRISFORSKELLE ── */}
      <section style={{ background: "#F9F8F6", padding: "56px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h3 style={s.h3}>En note om prisforskelle i landet</h3>
          <p style={s.body}>
            Det er svært at lave én samlet guide, der dækker hele Danmark — fordi kirkegårdsafgifter og krematorietakster fastsættes lokalt og varierer betydeligt. En kistebegravelse i en lille nordjysk kommune kan koste halvt så meget i kirkegårdsafgifter som i København.
          </p>
          <p style={{ ...s.body, marginBottom: 0 }}>
            Det, jeg kan love jer, er dette: Uanset hvor I bor i mit dækningsområde — København eller Nordsjælland — indhenter jeg de konkrete priser fra de relevante myndigheder og gennemgår dem med jer. I betaler aldrig for noget, I ikke kender på forhånd.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Ofte stillede spørgsmål</p>
          <h2 style={s.h2}>Spørgsmål om priser</h2>
          {[
          { q: "Hvad er den billigste begravelse?", a: "Den billigste løsning er en afsked uden ceremoni, hvor kisten transporteres direkte til krematoriet. Hos mig starter denne løsning fra 13.550 kr. inkl. alt koordinering, men ekskl. kremering og urne." },
            { q: "Hvad koster en bisættelse i København?", a: "Mit honorar er 4.500 kr., mens den samlede pakkepris for en bisættelse med ceremoni starter fra 19.500 kr. Dertil kommer kremering, blomster og eventuel kapelleje." },
            { q: "Er der skjulte udgifter?", a: "Nej — jeg gennemgår altid alle udgifter med jer på forhånd, inden I beslutter noget. Ingen overraskelser bagefter." },
            { q: "Kan man betale i rater?", a: "Det afhænger af den konkrete situation. Ring til mig, så finder vi en løsning der passer til jer." },
            { q: "Hvad koster det at bruge dig som bedemand?", a: "Mit honorar er 3.500 kr. ved afsked uden ceremoni og 4.500 kr. ved bisættelse eller begravelse med ceremoni. Den samlede pakkepris starter fra 13.550 kr. (uden ceremoni), 19.500 kr. (bisættelse) og 21.500 kr. (begravelse). Se den fulde prisliste på prissiden." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>{faq.a}</p>
            </div>
          ))}
          {/* ── Begravelseshjælp FAQ med link ── */}
          <div style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
            <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>Hvad er begravelseshjælp, og kan I hjælpe med at søge det?</h3>
            <p style={{ ...s.body, marginBottom: "12px" }}>
              Det offentlige yder begravelseshjælp til alle afdøde, der var omfattet af dansk sygesikring. I 2026 er tilskuddet op til 13.550 kr. afhængigt af afdødes formue. Jeg søger begravelseshjælp på jeres vegne og modregner beløbet direkte på fakturaen — I behøver ikke selv stå med ansøgningen.
            </p>
            <a href="/begravelseshjaelp" style={s.link}>Læs alt om begravelseshjælp og 2026-satser →</a>
          </div>
        </div>
      </section>

      {/* ── RELATEREDE SIDER ── */}
      <section style={{ background: "#F9F8F6", padding: "64px 32px", textAlign: "center" }}>
        <p style={s.label}>Læs mere</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Se min fulde prisliste", href: "/priser" },
            { label: "Begravelseshjælp 2026", href: "/begravelseshjaelp" },
            { label: "Bisættelse", href: "/bisaettelse" },
            { label: "Begravelse", href: "/begravelse" },
            { label: "Huskeliste ved dødsfald", href: "/huskeliste" },
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
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://www.bedemandkobenhavn.dk/hvad-koster-en-begravelse")}`}
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
          href="/#kontakt"
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
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="/persondatapolitik"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}
          >
            Persondatapolitik
          </a>
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="#cookieindstillinger"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}
          >
            Cookieindstillinger
          </a>
        </p>
      </footer>
    </div>
  );
}
