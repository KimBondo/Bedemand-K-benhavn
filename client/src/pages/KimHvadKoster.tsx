import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";

/**
 * Kim Bondo – Hvad koster en begravelse?
 * SEO landing page targeting high-volume search queries.
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

const NAV = (
  <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
    <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Om Kim</a>
    <a href="/kim-bondo/afskeder" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Afskeder</a>
    <a href="/kim-bondo/priser" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Priser</a>
    <a href="/kim-bondo/huskeliste" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Huskeliste</a>
    <a href="/kim-bondo/begravelseshjaelp" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Begravelseshjælp</a>
    <a href="/kim-bondo#kontakt" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Kontakt</a>
    <a href="/kim-bondo/faq" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>FAQ</a>
    <a href="tel:22211437" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(14px, 1.6vw, 18px)", color: "#84A98C", textDecoration: "none", whiteSpace: "nowrap", letterSpacing: "0.03em" }}>Tlf: 22 21 14 37</a>
  </div>
);

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#84A98C", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#84A98C", textDecoration: "none", borderBottom: "1px solid #84A98C", paddingBottom: "1px" } as React.CSSProperties,
};

const PRICE_ROWS = [
  { item: "Bedemandshonoraret (inkl. alt koordinering)", from: "15.500 kr.", note: "Afhænger af valgt pakke" },
  { item: "Kiste (enkel til avanceret)", from: "2.500–15.000 kr.", note: "Bred prisforskel" },
  { item: "Kremering", from: "ca. 3.500 kr.", note: "Betales til krematoriet" },
  { item: "Kapelleje / kirkebrug", from: "0–3.000 kr.", note: "Folkekirkens kirker er gratis for medlemmer" },
  { item: "Gravsted (køb og anlæg)", from: "5.000–25.000 kr.", note: "Stor variation kommuner imellem" },
  { item: "Gravsten", from: "5.000–20.000 kr.", note: "Afhænger af materiale og gravering" },
  { item: "Blomster og kistepynt", from: "2.000–8.000 kr.", note: "Valgfrit omfang" },
  { item: "Annonce i avis", from: "500–2.000 kr.", note: "Valgfrit" },
  { item: "Begravelseshjælp fra det offentlige", from: "−1.050 til −13.550 kr.", note: "Trækkes fra — afhænger af formue" },
];

export default function KimHvadKoster() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Hvad koster en begravelse? Priser 2026 – Bedemand Kim Bondo, København"
        description="Hvad koster en begravelse eller bisættelse i 2026? Få et ærligt overblik over alle udgifter: bedemand, kiste, kremering, gravsted og begravelseshjælp. Kim Bondo, bedemand i København og Nordsjælland."
        url="https://bedemandkbh-8wuvn9as.manus.space/kim-bondo/hvad-koster-en-begravelse"
        image="https://bedemandkbh-8wuvn9as.manus.space/manus-storage/kim-beach-solo_609d5ab7.png"
      />
      <SchemaOrg
        type="both"
        faqItems={[
          { question: "Hvad koster en begravelse i Danmark?", answer: "En typisk begravelse eller bisættelse koster i 2026 alt fra 20.000 kr. til 60.000 kr. afhængigt af valg af kiste, gravsted, gravsten og ceremonitype." },
          { question: "Hvad er den billigste begravelse?", answer: "Den billigste løsning er afsked uden ceremoni, hvor kisten transporteres direkte til krematoriet. Hos Kim starter denne løsning fra 15.500 kr." },
          { question: "Hvad koster en bisættelse i København?", answer: "En bisættelse med ceremoni i København koster typisk 25.000–40.000 kr. alt inklusiv. Bedemandshonoraret starter fra 17.395 kr." },
          { question: "Hvad er begravelseshjælp?", answer: "Det offentlige yder begravelseshjælp til alle afdøde, der var omfattet af dansk sygesikring. I 2026 er tilskuddet op til 13.550 kr. afhængigt af afdødes formue." },
          { question: "Er der skjulte udgifter ved en begravelse?", answer: "Hos Kim gennemgås alle udgifter på forhånd, inden I beslutter noget. Ingen overraskelser bagefter." },
        ]}
      />

      {/* ── HEADER ── */}
      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Hvad koster en begravelse?</span>
        </div>
        {NAV}
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
          <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
            Få et uforpligtende tilbud
          </a>
          <a href="/kim-bondo/priser" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>
            Se Kims priser
          </a>
        </div>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#84A98C" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
      </section>

      {/* ── HURTIG OVERSIGT ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Hurtig oversigt</p>
          <h2 style={s.h2}>Hvad koster det samlet?</h2>
          <p style={s.body}>
            En typisk begravelse eller bisættelse i Danmark koster i 2026 alt fra <strong>20.000 kr. til 60.000 kr.</strong> afhængigt af, hvad I vælger. Den store forskel skyldes primært gravsted, gravsten og kistens pris.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {[
              { label: "Enkel bisættelse", price: "fra 20.000 kr.", note: "Afsked uden ceremoni + kremering" },
              { label: "Bisættelse m. ceremoni", price: "fra 28.000 kr.", note: "Kirkelig eller borgerlig ceremoni" },
              { label: "Begravelse m. gravsted", price: "fra 35.000 kr.", note: "Inkl. gravsted og gravsten" },
            ].map((item) => (
              <div key={item.label} style={{ background: "#F9F8F6", padding: "24px 20px", borderRadius: "3px", border: "1px solid #e0dcd6", textAlign: "center" }}>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", color: "#84A98C", textTransform: "uppercase", marginBottom: "8px" }}>{item.label}</p>
                <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "26px", color: "#2F3E46", marginBottom: "6px" }}>{item.price}</p>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#5a7a6a", marginBottom: 0 }}>{item.note}</p>
              </div>
            ))}
          </div>
          <p style={{ ...s.body, background: "#f0f4f2", padding: "20px 24px", borderRadius: "3px", borderLeft: "3px solid #84A98C" }}>
            <strong>Vigtigt:</strong> Disse tal er vejledende. Jeg gennemgår altid alle udgifter med jer på forhånd, så I ved præcis hvad det koster — uden overraskelser.
          </p>
        </div>
      </section>

      {/* ── DETALJERET PRISOVERSIGT ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={s.label}>Detaljeret oversigt</p>
          <h2 style={s.h2}>Hvad indgår i prisen?</h2>
          <p style={s.body}>
            Prisen på en begravelse er sammensat af mange poster. Herunder er de vigtigste — og hvad de typisk koster i 2026 i København og Nordsjælland.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e0dcd6" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#2F3E46", fontWeight: 700 }}>Post</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#2F3E46", fontWeight: 700 }}>Typisk pris</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#2F3E46", fontWeight: 700 }}>Bemærkning</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #e0dcd6", background: i % 2 === 0 ? "#fff" : "#F9F8F6" }}>
                    <td style={{ padding: "14px 16px", color: "#2F3E46", fontWeight: 500 }}>{row.item}</td>
                    <td style={{ padding: "14px 16px", color: "#2F3E46", fontWeight: 600, whiteSpace: "nowrap" }}>{row.from}</td>
                    <td style={{ padding: "14px 16px", color: "#5a7a6a", fontSize: "14px" }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...s.body, marginTop: "24px", fontSize: "14px", color: "#5a7a6a" }}>
            Kilde: Egne priser og generelle markedspriser i Storkøbenhavn 2026. Priser på gravsted og gravsten er vejledende og varierer kommuner imellem.
          </p>
        </div>
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
              { num: "3", title: "Kistens pris", body: "Kister varierer enormt i pris — fra en enkel fyrretræskiste til 2.500 kr. til en avanceret egetræskiste til 15.000 kr. og derover. Jeg hjælper jer med at finde den rigtige." },
              { num: "4", title: "Gravsted og gravsten", body: "Gravstedet er en af de største enkeltudgifter. Prisen afhænger af kommunen, gravstedets størrelse og gravstenstype. Mange vælger fællesgrav for at undgå løbende vedligeholdelse." },
              { num: "5", title: "Blomster og annonce", body: "Blomster og kistepynt er valgfrit og kan tilpasses ethvert budget. En avisannonce er heller ikke obligatorisk — mange familier bruger sociale medier i stedet." },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "40px", height: "40px", background: "#84A98C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "18px" }}>{item.num}</div>
                <div>
                  <h3 style={{ ...s.h3, fontSize: "17px", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ ...s.body, marginBottom: 0, fontSize: "15px" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
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
          <a href="/kim-bondo/begravelseshjaelp" style={s.link}>Læs mere om begravelseshjælp →</a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Ofte stillede spørgsmål</p>
          <h2 style={s.h2}>Spørgsmål om priser</h2>
          {[
            { q: "Hvad er den billigste begravelse?", a: "Den billigste løsning er en afsked uden ceremoni, hvor kisten transporteres direkte til krematoriet. Hos Kim starter denne løsning fra 15.500 kr. inkl. alt koordinering, men ekskl. kremering og urne." },
            { q: "Hvad koster en bisættelse i København?", a: "En bisættelse med ceremoni i København koster typisk 25.000–40.000 kr. alt inklusiv. Bedemandshonoraret starter fra 17.395 kr., og dertil kommer kremering, blomster og eventuel kapelleje." },
            { q: "Er der skjulte udgifter?", a: "Nej — jeg gennemgår altid alle udgifter med jer på forhånd, inden I beslutter noget. Ingen overraskelser bagefter." },
            { q: "Kan man betale i rater?", a: "Det afhænger af den konkrete situation. Ring til mig, så finder vi en løsning der passer til jer." },
            { q: "Hvad koster det at bruge Kim som bedemand?", a: "Kims honorar starter fra 15.500 kr. for afsked uden ceremoni og fra 17.395 kr. for bisættelse med ceremoni. Se den fulde prisliste på prissiden." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RELATEREDE SIDER ── */}
      <section style={{ background: "#F9F8F6", padding: "64px 32px", textAlign: "center" }}>
        <p style={s.label}>Læs mere</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Se Kims fulde prisliste", href: "/kim-bondo/priser" },
            { label: "Begravelseshjælp 2026", href: "/kim-bondo/begravelseshjaelp" },
            { label: "Bisættelse", href: "/kim-bondo/bisaettelse" },
            { label: "Begravelse", href: "/kim-bondo/begravelse" },
            { label: "Huskeliste ved dødsfald", href: "/kim-bondo/huskeliste" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#fff", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <footer style={{ background: "#2F3E46", color: "#fff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "12px" }}>Få et uforpligtende tilbud fra Kim</p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#b0c4b1", marginBottom: "32px" }}>Jeg gennemgår alle udgifter med jer på forhånd — ingen overraskelser.</p>
        <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
          Kontakt mig
        </a>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#84A98C" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
        <p style={{ marginTop: "40px", fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#5a7a6a" }}>
          © {new Date().getFullYear()} Bedemand København ApS · <a href="/kim-bondo/priser" style={{ color: "#5a7a6a", textDecoration: "none" }}>Priser</a> · <a href="/kim-bondo/afskeder" style={{ color: "#5a7a6a", textDecoration: "none" }}>Afskeder</a>
        </p>
      </footer>
    </div>
  );
}
