import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";
import { useEffect } from "react";

function PersonSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://bedemandkobenhavn.dk/kim-bondo/om-kim#kim-bondo",
      "name": "Kim Bondo",
      "jobTitle": "Selvstændig bedemand",
      "description": "Selvstændig bedemand i København og Nordsjælland med fokus på nærvær, ro og gennemsigtige priser.",
      "url": "https://bedemandkobenhavn.dk/kim-bondo",
      "image": "https://bedemandkobenhavn.dk/manus-storage/kim-bondo-portrait-neutral-bg_dfb527d8.png",
      "telephone": "+4522211437",
      "email": "kim@bedemandkobenhavn.dk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vandtårnsvej 62A",
        "addressLocality": "Søborg",
        "postalCode": "2860",
        "addressCountry": "DK"
      },
      "worksFor": {
        "@type": "LocalBusiness",
        "@id": "https://bedemandkobenhavn.dk/kim-bondo"
      },
      "knowsAbout": ["Bisættelse", "Begravelse", "Afsked uden ceremoni", "Askespredning", "Begravelseshjælp"]
    };
    const existing = document.querySelector('script[data-schema-id="person-kim-bondo"]');
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema-id", "person-kim-bondo");
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);
  return null;
}

/**
 * Kim Bondo – Om Kim
 * Selvstændig side med Kims personlige præsentation.
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 */

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.85, color: "#3d4f5a", marginBottom: "24px" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px", display: "block" } as React.CSSProperties,
};

export default function KimOmKim() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Om Kim Bondo – Personlig bedemand, København"
        description="Mød Kim Bondo – selvstændig bedemand med nærvær og ro. Hjælper familier i sorg i København og Nordsjælland. Ring 22 21 14 37."
        url="https://bedemandkobenhavn.dk/kim-bondo/om-kim"
        image="https://bedemandkobenhavn.dk/manus-storage/kim-beach-solo_609d5ab7.png"
      />

      <SchemaOrg
        type="both"
        breadcrumbs={[
          { name: "Forside", url: "https://bedemandkobenhavn.dk/" },
          { name: "Kim Bondo", url: "https://bedemandkobenhavn.dk/kim-bondo" },
          { name: "Om Kim", url: "https://bedemandkobenhavn.dk/kim-bondo/om-kim" }
        ]}
      />
      <PersonSchema />
      {/* ── HEADER ── */}
      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6", position: "relative" }}>
        <style>{`
          @media (max-width: 768px) {
            .mobile-call-btn-omkim {
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
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Om Kim</span>
        </div>
        <KimNav />
        <a href="tel:22211437" style={{ display: "none" }} className="mobile-call-btn-omkim">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Ring op
        </a>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px 56px", textAlign: "center" }}>
        <span style={s.label}>Om Kim Bondo</span>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "760px", margin: "0 auto 32px" }}>
          En personlig bedemand — fra første opkald til den sidste afsked
        </h1>
        <a
          href="/kim-bondo#kontakt"
          style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}
        >
          Kontakt mig
        </a>
        <p style={{ marginTop: "14px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F" }}>
          eller ring på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
        </p>
      </section>

      {/* ── BRØDTEKST ── */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
         <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-start", marginBottom: "40px" }}>
           <picture style={{ flexShrink: 0 }}>
             <source srcSet="/manus-storage/kim-bondo-portrait-neutral-bg_dfb527d8_d2b7aeac.webp" type="image/webp" />
              <img
                src="/manus-storage/kim-bondo-portrait-neutral-bg_dfb527d8.png"
                alt="Kim Bondo – Bedemand i København og Nordsjælland"
                loading="lazy"
                style={{
                  width: "clamp(180px, 30vw, 280px)",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "4px",
                  display: "block",
                }}
              />
            </picture>
            {/* Kontaktknapper under billedet */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px", width: "clamp(180px, 30vw, 280px)", flexShrink: 0 }}>
              <a
                href="tel:22211437"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "#3D6B4F",
                  color: "#fff",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "13px 20px",
                  borderRadius: "3px",
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                }}
              >
                📞 Ring: 22 21 14 37
              </a>
              <a
                href="mailto:kim@bedemandkobenhavn.dk"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "transparent",
                  color: "#3d5260",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "11px 20px",
                  borderRadius: "3px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  border: "1.5px solid #3D6B4F",
                }}
              >
                ✉️ Skriv en e-mail
              </a>
            </div>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <p style={s.body}>
                Jeg er selvstændig bedemand i København og Nordsjælland, og for mig er det en hjertesag at møde mennesker med nærvær, ro og en dyb tillid til, at også de tungeste stunder bærer mening i sig.
              </p>
              <p style={s.body}>
                Min tilgang bygger på en solid baggrund i krisehåndtering og svære samtaler. Jeg ved, hvor vigtigt det er at kunne rumme både tårer, tavshed og et befriende smil – uden at skynde på nogen. Det er ikke en opgave for mig at hjælpe jer igennem en afsked. Det er et privilegium.
              </p>
              <p style={s.body}>
                Som selvstændig bedemand er jeg den eneste, I taler med – fra det øjeblik I ringer, til afskeden er overstået. Ingen omstillinger, intet bureaukrati. Bare direkte kontakt til mig, døgnet rundt.
              </p>
              <p style={s.body}>
                Jeg lægger stor vægt på gennemsigtighed. I skal aldrig være i tvivl om, hvad tingene koster, eller hvad der sker næste skridt. Jeg bruger moderne værktøjer til at holde overblikket for jer, så I kan bruge jeres energi på hinanden i stedet for på papirarbejde.
              </p>
              <p style={{ ...s.body, marginBottom: 0 }}>
                Jeg dækker hele København og Nordsjælland og er altid klar til at tage en uforpligtende samtale – ring eller skriv, når det passer jer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KONTAKT CTA ── */}
      <section style={{ background: "#F9F8F6", padding: "72px 32px", textAlign: "center" }}>
        <span style={s.label}>Kontakt</span>
        <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 36px)", color: "#2F3E46", marginBottom: "16px", lineHeight: 1.2 }}>
          Tag en uforpligtende samtale
        </h2>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(15px, 1.7vw, 18px)", color: "#5a7a6a", maxWidth: "520px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Ring eller skriv til mig — jeg er tilgængelig døgnet rundt.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginBottom: "32px" }}>
          <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
            Skriv til mig
          </a>
          <a href="tel:22211437" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}>
            Ring: 22 21 14 37
          </a>
        </div>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F" }}>
          Vandtårnsvej 62A, 2860 Søborg
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2F3E46", padding: "64px 32px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(18px, 2.5vw, 26px)", color: "#fff", marginBottom: "12px", letterSpacing: "0.03em" }}>
          Kim Bondo
        </p>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", marginBottom: "32px", lineHeight: 1.7 }}>
          Vandtårnsvej 62A, 2860 Søborg
        </p>
        <a href="/kim-bondo#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(15px, 1.8vw, 18px)", padding: "18px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.05em", marginBottom: "48px" }}>
          Kontakt mig
        </a>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginTop: "16px" }}>
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a href="tel:22211437" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>Tlf.: 22 21 14 37</a>
          {" "}&nbsp;·&nbsp;{" "}
          <a href="mailto:kim@bedemandkobenhavn.dk" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>kim@bedemandkobenhavn.dk</a>
          {" "}&nbsp;·&nbsp; CVR.: 45084159
        </p>
      </footer>
    </div>
  );
}
