import SEO from "@/components/SEO";
import KimNav from "@/components/KimNav";
import AnmeldelseBoks from "@/components/AnmeldelseBoks";
import CookieLink from "@/components/CookieLink";

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" } as React.CSSProperties,
};

export default function KimTak() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Tak for din besked – Bedemand Kim Bondo"
        description="Tak for din besked. Kim Bondo vender tilbage hurtigst muligt. Haster det, så ring på 28 14 60 11 – døgnet rundt."
        url="https://www.bedemandkobenhavn.dk/tak/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
        noindex
      />

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
          <a href="/" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2, textDecoration: "none" }}>Bedemand København</a>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo</span>
        </div>
        <KimNav />
        <a href="tel:+4528146011" style={{ display: "none" }} className="mobile-call-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Ring op
        </a>
      </header>



      <section style={{ background: "#F9F8F6", padding: "80px 32px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 46px)", color: "#2F3E46", lineHeight: 1.2, margin: "0 0 24px" }}>
            Tak for din besked
          </h1>
          <p style={s.body}>
            Jeg har modtaget den og vender tilbage hurtigst muligt. Haster det, eller vil du hellere tale med det samme, så ring til mig på <a href="tel:+4528146011" style={s.link}>28 14 60 11</a> – døgnet rundt.
          </p>
          <p style={{ ...s.body, fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "19px" }}>
            Kim Bondo
          </p>
          <div style={{ marginTop: "28px" }}>
            <a href="tel:+4528146011" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Ring til Kim – 28 14 60 11</a>
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "48px 32px", borderTop: "1px solid #e0dcd6" }}>
        <AnmeldelseBoks />
      </section>

      <footer style={{ background: "#2F3E46", color: "#fff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "12px" }}>Bedemand København – Kim Bondo</p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#b0c4b1", marginBottom: "32px" }}>Ring eller skriv – jeg er tilgængelig hele døgnet.</p>
        <a href="/#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none" }}>Kontakt mig</a>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.78)", marginTop: "40px" }}>
          © {new Date().getFullYear()} Bedemand København ApS · Vandtårnsvej 62A, kontor 11, 2860 Søborg · Tlf.: 28 14 60 11 · kim@bedemandkobenhavn.dk · CVR.: 45084159
          {" "}·{" "}<CookieLink />
        </p>
      </footer>
    </div>
  );
}
