import SEO from "@/components/SEO";

/**
 * Kim Bondo – Kirkelig afsked
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

const NAV = (
  <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
    <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Om Kim</a>
    <a href="/kim-bondo/afskeder" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Afskeder</a>
    <a href="/kim-bondo/priser" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Priser</a>
          <a href="/kim-bondo/huskeliste" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Huskeliste</a>
          <a href="/kim-bondo/begravelseshjaelp" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Begravelseshjælp</a>
            <a href="/kim-bondo/hvad-koster-en-begravelse" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Hvad koster det?</a>
    <a href="/kim-bondo#kontakt" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Kontakt</a>
          <a href="/kim-bondo/faq" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>FAQ</a>
    <a href="tel:22211437" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(14px, 1.6vw, 18px)", color: "#84A98C", textDecoration: "none", whiteSpace: "nowrap", letterSpacing: "0.03em" }}>Tlf: 22 21 14 37</a>
  </div>
);

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" },
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" },
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" },
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#84A98C", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#84A98C", textDecoration: "none", borderBottom: "1px solid #84A98C", paddingBottom: "1px" },
};

export default function KimKirkeligAfsked() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Kirkelig afsked – Bedemand Kim Bondo, København og Nordsjælland"
        description="En kirkelig begravelse eller bisættelse i kirke eller kapel med præst. Kim Bondo hjælper med planlægning, kontakt til kirken og hele det praktiske forløb."
        url="https://bedemandkobenhavn.dk/kim-bondo/kirkelig-afsked"
      />

      {/* ── HEADER ── */}
      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/kim-bondo/afskeder" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til afskeder</a>
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Kirkelig afsked</span>
        </div>
        {NAV}
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px 56px", textAlign: "center" }}>
        <p style={s.label}>Kirkelig afsked</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "760px", margin: "0 auto 24px" }}>
          En afsked i kirken — med plads til både sorg og håb
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          En kirkelig ceremoni er for mange en naturlig og meningsfuld ramme for afskeden. Jeg hjælper jer med alt det praktiske — fra kontakt til kirken og præsten til selve dagen.
        </p>
        <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
          Kontakt mig
        </a>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#84A98C" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
      </section>

      {/* ── HVAD ER EN KIRKELIG AFSKED ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Om den kirkelige ceremoni</p>
          <h2 style={s.h2}>Hvad er en kirkelig begravelse eller bisættelse?</h2>
          <p style={s.body}>
            En kirkelig afsked er en ceremoni i kirke eller kapel, ledet af en præst fra Folkekirken. Den følger faste ritualer, men der er god plads til at tilpasse den, så den afspejler den afdødes liv og familiens ønsker — i valg af salmer, musik og prædikenens indhold.
          </p>
          <p style={s.body}>
            Ceremonien kan afsluttes med enten en <a href="/kim-bondo/begravelse" style={s.link}>begravelse</a> (kisten sænkes i jorden) eller en <a href="/kim-bondo/bisaettelse" style={s.link}>bisættelse</a> (afdøde kremeres, og asken placeres i en urne).
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", marginTop: "40px" }}>
            {[
              { title: "Præludium", text: "Indgangsmusik eller orgelspil, der skaber en stemningsfuld start på ceremonien." },
              { title: "Salmer", text: "Familien vælger salmerne i samarbejde med præsten — gerne sange der betød noget for afdøde." },
              { title: "Prædiken", text: "Præsten mindes afdøde og taler om tro, håb og livet. Indholdet aftales på forhånd." },
              { title: "Jordpåkastelse", text: "Et centralt ritual, hvor præsten kaster jord på kisten med ordene 'Af jord er du kommet, til jord skal du blive'." },
              { title: "Postludium", text: "Udgangsmusik, der afslutter ceremonien med en respektfuld og smuk tone." },
              { title: "Mindesamvær", text: "Mange familier holder et mindesamvær efter ceremonien — jeg hjælper gerne med at koordinere dette." },
            ].map((item) => (
              <div key={item.title} style={{ borderTop: "2px solid #84A98C", paddingTop: "20px" }}>
                <h3 style={{ ...s.h3, fontSize: "17px" }}>{item.title}</h3>
                <p style={{ ...s.body, marginBottom: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEGRAVELSE VS BISÆTTELSE ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Kirkelig begravelse eller bisættelse?</p>
          <h2 style={s.h2}>Hvad er forskellen?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            <div style={{ background: "#fff", padding: "32px", borderRadius: "3px", border: "1px solid #e0dcd6" }}>
              <h3 style={s.h3}>Kirkelig begravelse</h3>
              <p style={s.body}>Ceremonien foregår i kirken. Herefter bæres kisten til gravstedet, hvor jordpåkastelsen og den endelige afsked finder sted. Familien samles om graven.</p>
              <a href="/kim-bondo/begravelse" style={s.link}>Læs mere om begravelse →</a>
            </div>
            <div style={{ background: "#fff", padding: "32px", borderRadius: "3px", border: "1px solid #e0dcd6" }}>
              <h3 style={s.h3}>Kirkelig bisættelse</h3>
              <p style={s.body}>Jordpåkastelsen sker i kirken som en del af ceremonien. Herefter transporteres kisten til krematoriet. Urnen kan efterfølgende nedsættes eller bruges til <a href="/kim-bondo/askespredning" style={s.link}>askespredning</a>.</p>
              <a href="/kim-bondo/bisaettelse" style={s.link}>Læs mere om bisættelse →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRAKTISK ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Det praktiske</p>
          <h2 style={s.h2}>Hvad hjælper jeg med?</h2>
          <p style={s.body}>
            Jeg tager mig af al kontakt til kirken og præsten, så I ikke selv skal stå med de praktiske opkald i en svær tid. Vi aftaler tidspunkt, salmer og ceremoniens indhold i fællesskab — og jeg sørger for, at alt er koordineret på dagen.
          </p>
          <ul style={{ paddingLeft: "24px", marginBottom: "32px" }}>
            {[
              "Kontakt til kirken og præsten",
              "Hjælp til valg af salmer og musik",
              "Koordinering af rustvogn og kørsel",
              "Kisteilægning og klargøring",
              "Hjælp til at finde den rette kirke via Sogn.dk",
              "Ansøgning om begravelseshjælp",
              "Koordinering af mindesamvær",
            ].map((item) => (
              <li key={item} style={{ ...s.body, marginBottom: "10px" }}>{item}</li>
            ))}
          </ul>
          <p style={s.body}>
            Er I i tvivl om hvilken kirke afdøde tilhørte, kan I finde det på <a href="https://www.sogn.dk" target="_blank" rel="noopener noreferrer" style={s.link}>Sogn.dk</a> ved at indtaste adressen. Jeg hjælper også gerne med at finde frem til de rette oplysninger.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Ofte stillede spørgsmål</p>
          <h2 style={s.h2}>Spørgsmål om kirkelig afsked</h2>
          {[
            {
              q: "Kan man få en kirkelig afsked uden at være medlem af Folkekirken?",
              a: "Som udgangspunkt kræver en kirkelig ceremoni, at afdøde var medlem af Folkekirken. I særlige tilfælde kan en præst vælge at dispensere. Kontakt mig, så undersøger vi mulighederne sammen.",
            },
            {
              q: "Kan man holde ceremonien i en anden kirke end den lokale?",
              a: "Ja, det er muligt, hvis der er en særlig tilknytning til den ønskede kirke — f.eks. tidligere bopæl, nære pårørende i sognet eller afdøde begravet på kirkegården. Præsten vurderer tilknytningen.",
            },
            {
              q: "Kan en kirkelig ceremoni kombineres med askespredning?",
              a: "Ja. Efter en kirkelig bisættelse kan urnen bruges til askespredning over havet, hvis afdøde har ønsket det. Jeg hjælper med at arrangere begge dele.",
            },
            {
              q: "Er ceremonien i kirken gratis?",
              a: "Som medlem af Folkekirken er selve ceremonien som regel gratis. Der kommer dog udgifter til kiste, kørsel, kremering eller gravsted oveni. Jeg gennemgår alle udgifter med jer på forhånd.",
            },
            {
              q: "Kan ceremonien foregå i et kapel i stedet for kirken?",
              a: "Ja, en kirkelig ceremoni kan godt foregå i et kapel, hvis en præst medvirker. Vær opmærksom på, at der kan være udgifter til leje af kapellet. Jeg hjælper med at finde den bedste løsning.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0dcd6", paddingBottom: "28px", marginBottom: "28px" }}>
              <h3 style={{ ...s.h3, fontSize: "18px", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ ...s.body, marginBottom: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ANDRE CEREMONITYPER ── */}
      <section style={{ background: "#fff", padding: "64px 32px", textAlign: "center" }}>
        <p style={s.label}>Andre muligheder</p>
        <h2 style={{ ...s.h2, textAlign: "center", marginBottom: "32px" }}>Ikke sikker på ceremonitypen?</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Borgerlig afsked", href: "/kim-bondo/borgerlig-afsked" },
            { label: "Afsked uden ceremoni", href: "/kim-bondo/afsked-uden-ceremoni" },
            { label: "Se alle afskeder", href: "/kim-bondo/afskeder" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#F9F8F6", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <footer style={{ background: "#2F3E46", color: "#fff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "12px" }}>Lad mig hjælpe jer med den kirkelige afsked</p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#b0c4b1", marginBottom: "32px" }}>Ring eller skriv — jeg er tilgængelig hele døgnet.</p>
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
