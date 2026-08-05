import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Borgerlig afsked
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

const NAV = (
  <KimNav />
);

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" },
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" },
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" },
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" },
};

export default function KimBorgerligAfsked() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Borgerlig afsked – Bedemand Kim Bondo"
        description="Borgerlig begravelse eller bisættelse uden kirke i København. Kim Bondo hjælper med ceremoni, kapel og alt praktisk. Ring 22 21 14 37."
        url="https://bedemandkobenhavn.dk/kim-bondo/borgerlig-afsked"
        image="https://bedemandkobenhavn.dk/manus-storage/kim-beach-solo_609d5ab7.png"
      />

      <SchemaOrg type="LocalBusiness" />
      <SchemaOrg
        type="both"
        breadcrumbs={[
          { name: "Forside", url: "https://bedemandkobenhavn.dk/" },
          { name: "Kim Bondo", url: "https://bedemandkobenhavn.dk/kim-bondo" },
          { name: "Borgerlig afsked", url: "https://bedemandkobenhavn.dk/kim-bondo/borgerlig-afsked" }
        ]}
        faqItems={[
          { question: "Hvad er forskellen på en borgerlig og en kirkelig afsked?", answer: "En borgerlig afsked ledes ikke af en præst og følger ingen religiøse ritualer. I stedet tilpasses ceremonien frit efter familiens ønsker. En kirkelig afsked ledes af en præst og følger Folkekirkens traditioner." },
          { question: "Hvem kan lede en borgerlig ceremoni?", answer: "Ceremonien kan ledes af en person fra familien, en nær ven eller en professionel ceremonileder. Humanistisk Samfund tilbyder uddannede ceremoniledere. Jeg kan også hjælpe med at gennemføre en ceremoni, som I planlægger." },
          { question: "Kan en borgerlig afsked foregå i en kirke?", answer: "Nej, kirkerne er forbeholdt kirkelige ceremonier med præst. En borgerlig ceremoni kan holdes i et kapel, hjemme eller et andet sted — men ikke i en kirke." },
          { question: "Kan en borgerlig ceremoni kombineres med askespredning?", answer: "Ja. Efter en borgerlig bisættelse kan urnen bruges til askespredning over havet. Jeg hjælper med at arrangere begge dele." },
          { question: "Hvad koster en borgerlig afsked?", answer: "Prisen afhænger af valg af sted, kiste og tilvalg. Se de fulde priser på min prisliste — jeg gennemgår alle udgifter med jer på forhånd, så der ikke er overraskelser." },
        ]}
        pageUrl="https://bedemandkobenhavn.dk/kim-bondo/borgerlig-afsked"
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
          <a href="/kim-bondo/afskeder" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til afskeder</a>
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Borgerlig afsked</span>
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
        <p style={s.label}>Borgerlig afsked</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "760px", margin: "0 auto 24px" }}>
          En personlig afsked — på jeres præmisser
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          En borgerlig afsked er fri for religiøse ritualer og kan tilpasses præcis som I ønsker det. Jeg hjælper med at skabe en ceremoni, der virkelig afspejler den afdødes liv.
        </p>
        <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
          Kontakt mig
        </a>
        <p style={{ marginTop: "16px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
      </section>

      {/* ── HVAD ER EN BORGERLIG AFSKED ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Om den borgerlige ceremoni</p>
          <h2 style={s.h2}>Hvad er en borgerlig afsked?</h2>
          <p style={s.body}>
            En borgerlig afsked er en ceremoni uden præst og religiøse ritualer. I stedet er fokus helt på den afdødes liv, de minder I deler, og den musik og de ord, der betød noget. Ceremonien kan holdes i et kapel, hjemme eller et andet sted med særlig betydning for familien.
          </p>
          <p style={s.body}>
            Ceremonien kan afsluttes med enten en <a href="/kim-bondo/begravelse" style={s.link}>begravelse</a> eller en <a href="/kim-bondo/bisaettelse" style={s.link}>bisættelse</a> — eller efterfølges af <a href="/kim-bondo/askespredning" style={s.link}>askespredning over havet</a>.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", marginTop: "40px" }}>
            {[
              { title: "Musik", text: "Afdødes yndlingsmusik, sange der betød noget, eller hvad I finder passende. Ingen begrænsninger." },
              { title: "Taler", text: "Familie og venner kan dele personlige minder og ord. Jeg hjælper med at strukturere forløbet." },
              { title: "Blomster og dekorationer", text: "Billeder, blomster og personlige genstande kan skabe en smuk og personlig ramme." },
              { title: "Sted", text: "Kapel, hjemme, udendørs eller et sted med særlig betydning — I bestemmer." },
              { title: "Ceremonileder", text: "I kan vælge en fra familien, en ven eller en professionel ceremonileder til at styre forløbet." },
              { title: "Mindesamvær", text: "Mange ønsker et mindesamvær efter ceremonien. Jeg hjælper gerne med at koordinere dette." },
            ].map((item) => (
              <div key={item.title} style={{ borderTop: "2px solid #3D6B4F", paddingTop: "20px" }}>
                <h3 style={{ ...s.h3, fontSize: "17px" }}>{item.title}</h3>
                <p style={{ ...s.body, marginBottom: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HVAD HJÆLPER KIM MED ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Det praktiske</p>
          <h2 style={s.h2}>Hvad hjælper jeg med?</h2>
          <p style={s.body}>
            Jeg hjælper med at planlægge og koordinere hele forløbet — fra valg af sted og indhold til selve dagen. Har I brug for en professionel ceremonileder, kan jeg hjælpe med at finde en.
          </p>
          <ul style={{ paddingLeft: "24px", marginBottom: "32px" }}>
            {[
              "Rådgivning om valg af sted og form",
              "Kontakt til kapel eller anden lokation",
              "Koordinering af rustvogn og kørsel",
              "Kisteilægning og klargøring",
              "Hjælp til at strukturere ceremoniens indhold",
              "Ansøgning om begravelseshjælp",
              "Koordinering af mindesamvær",
            ].map((item) => (
              <li key={item} style={{ ...s.body, marginBottom: "10px" }}>{item}</li>
            ))}
          </ul>
          <p style={s.body}>
            Ønsker I en professionel ceremonileder, tilbyder <a href="https://www.humanistisksamfund.dk/begravelse/" target="_blank" rel="noopener noreferrer" style={s.link}>Humanistisk Samfund</a> uddannede ceremoniledere, der kan stå for at planlægge og afholde ceremonien.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.label}>Ofte stillede spørgsmål</p>
          <h2 style={s.h2}>Spørgsmål om borgerlig afsked</h2>
          {[
            {
              q: "Hvad er forskellen på en borgerlig og en kirkelig afsked?",
              a: "En borgerlig afsked ledes ikke af en præst og følger ingen religiøse ritualer. I stedet tilpasses ceremonien frit efter familiens ønsker. En kirkelig afsked ledes af en præst og følger Folkekirkens traditioner.",
            },
            {
              q: "Hvem kan lede en borgerlig ceremoni?",
              a: "Ceremonien kan ledes af en person fra familien, en nær ven eller en professionel ceremonileder. Humanistisk Samfund tilbyder uddannede ceremoniledere. Jeg kan også hjælpe med at gennemføre en ceremoni, som I planlægger.",
            },
            {
              q: "Kan en borgerlig afsked foregå i en kirke?",
              a: "Nej, kirkerne er forbeholdt kirkelige ceremonier med præst. En borgerlig ceremoni kan holdes i et kapel, hjemme eller et andet sted — men ikke i en kirke.",
            },
            {
              q: "Kan en borgerlig ceremoni kombineres med askespredning?",
              a: "Ja. Efter en borgerlig bisættelse kan urnen bruges til askespredning over havet. Jeg hjælper med at arrangere begge dele.",
            },
            {
              q: "Hvad koster en borgerlig afsked?",
              a: "Prisen afhænger af valg af sted, kiste og tilvalg. Se de fulde priser på min prisliste — jeg gennemgår alle udgifter med jer på forhånd, så der ikke er overraskelser.",
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
      <section style={{ background: "#F9F8F6", padding: "64px 32px", textAlign: "center" }}>
        <p style={s.label}>Andre muligheder</p>
        <h2 style={{ ...s.h2, textAlign: "center", marginBottom: "32px" }}>Overvej også</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Kirkelig afsked", href: "/kim-bondo/kirkelig-afsked" },
            { label: "Afsked uden ceremoni", href: "/kim-bondo/afsked-uden-ceremoni" },
            { label: "Se alle afskeder", href: "/kim-bondo/afskeder" },
            { label: "Se priser", href: "/kim-bondo/priser" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#fff", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
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
          href="/kim-bondo#kontakt"
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
        </p>
      </footer>
    </div>
  );
}
