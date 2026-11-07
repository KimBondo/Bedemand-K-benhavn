import ContactForm from "@/components/ContactForm";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Personal Homepage
 * Design: Nordic Quietism — warm off-white (#F9F8F6), charcoal text (#2F3E46),
 *         sage green CTAs (#3D6B4F), Lora serif headings + Open Sans body.
 *
 * Sektioner (enkel forside):
 *   1. Portræt, præsentation og "Ring trygt til mig"
 *   2. Når nogen lige er død
 *   3. Den første samtale
 *   4. Priser – min pris og udgifter, der ikke går til mig
 *   5. Skal I vælge en lokal bedemand?
 *   6. Kontaktformular – "Skriv til mig"
 *   7. Footer
 */

const SECTION_PADDING = "96px 32px";

export default function KimBondo() {
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
        title="Bedemand København – Kim Bondo, personlig bedemand døgnet rundt"
        description="Personlig bedemand i København og Nordsjælland. Bisættelse fra 18.300 kr., begravelse fra 19.300 kr. Gennemsigtige priser. Ring til mig på 28 14 60 11."
        url="https://www.bedemandkobenhavn.dk/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg type="both" breadcrumbs={[{ name: "Forside", url: "https://www.bedemandkobenhavn.dk/" }]} />
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
          href="tel:+4528146011"
          style={{
            display: "none",
          }}
          className="mobile-call-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Ring til mig
        </a>
      </header>

        {/* Hero: portræt, præsentation og opkald */}
        <div
          className="hero-tekst"
          style={{
            textAlign: "center",
            padding: "56px 24px 16px",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          <style>{`
            .hero-portraet { width: 150px; height: 150px; }
            @media (max-width: 768px) {
              .hero-tekst { padding-top: 28px !important; }
              .hero-portraet { width: 104px; height: 104px; }
            }
          `}</style>
          <figure style={{ margin: "0 auto 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <picture>
              <source
                type="image/webp"
                srcSet="/images/kim-bondo-bedemand-portraet-464w.webp 464w, /images/kim-bondo-bedemand-portraet-930w.webp 930w, /images/kim-bondo-bedemand-portraet-1400w.webp 1400w"
                sizes="(max-width: 768px) 104px, 150px"
              />
              <img
                className="hero-portraet"
                src="/images/kim-bondo-bedemand-portraet-464w.jpg"
                srcSet="/images/kim-bondo-bedemand-portraet-464w.jpg 464w, /images/kim-bondo-bedemand-portraet-930w.jpg 930w, /images/kim-bondo-bedemand-portraet-1400w.jpg 1400w"
                sizes="(max-width: 768px) 104px, 150px"
                width={150}
                height={150}
                alt="Kim Bondo, bedemand i København og Nordsjælland"
                loading="eager"
                decoding="async"
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center 25%",
                  display: "block",
                  boxShadow: "0 4px 16px rgba(47,62,70,0.15)",
                }}
              />
            </picture>
            <figcaption style={{ marginTop: "8px", fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#7a8f99" }}>
              Kim Bondo, bedemand
            </figcaption>
          </figure>
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
            Bedemand København – jeg tager selv telefonen, døgnet rundt
          </h1>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "#3d5260",
              lineHeight: 1.65,
              maxWidth: "620px",
              margin: "0 auto 28px",
            }}
          >
            Jeg hedder Kim Bondo. Når I ringer, er det mig, I taler med – og mig, der følger jer hele vejen til afskeden. Mine priser står åbent her på siden, og begravelseshjælpen søger jeg for jer og trækker fra på fakturaen.
          </p>
          <a href="tel:+4528146011" style={{ display: "inline-block", background: "#3D6B4F", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(16px, 2vw, 19px)", padding: "16px 32px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.03em" }}>
            Ring trygt til mig på 28 14 60 11
          </a>
          <p style={{ marginTop: "14px", fontSize: "15px", color: "#5a7a6a", fontFamily: "'Open Sans', sans-serif", lineHeight: 1.6 }}>
            Med base i Gladsaxe og Søborg. Jeg kører i hele København, Storkøbenhavn og Nordsjælland.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          NÅR NOGEN LIGE ER DØD
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: "#EEF3EF", padding: "64px 24px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(24px, 3.2vw, 34px)", color: "#2F3E46", lineHeight: 1.25, margin: "0 0 20px", textAlign: "center" }}>
            Når nogen lige er død
          </h2>
          <ol style={{ margin: "0 0 20px", padding: 0, listStyle: "none", fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.7, color: "#3d5260" }}>
            {[
              "Er dødsfaldet sket i hjemmet, skal en læge først konstatere det. Ring til egen læge eller til 1813 uden for lægens åbningstid. På hospital eller plejehjem hjælper personalet med det.",
              "Ring derefter til mig. Der er ingen hast – afdøde kan ofte blive, hvor vedkommende er, til næste morgen, så I får tid til at sige farvel.",
              "Resten finder vi ud af sammen, i jeres tempo.",
            ].map((tekst, i) => (
              <li key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "14px" }}>
                <span aria-hidden="true" style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", background: "#3D6B4F", color: "#fff", fontWeight: 700, fontSize: "14px", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>{i + 1}</span>
                <span>{tekst}</span>
              </li>
            ))}
          </ol>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#5a7a6a", margin: 0, textAlign: "center" }}>
            <a href="/hvad-sker-der/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", fontWeight: 600 }}>Se hvad der sker, når nogen dør</a>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DEN FØRSTE SAMTALE
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "64px 24px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(24px, 3.2vw, 34px)", color: "#2F3E46", lineHeight: 1.25, margin: "0 0 20px", textAlign: "center" }}>
            Den første samtale
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.75, color: "#3d5260", margin: "0 0 16px" }}>
            I behøver ikke have besluttet noget, før I ringer.
          </p>
          <p style={{ ...{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.75, color: "#3d5260", margin: "0 0 16px" }, margin: 0 }}>
            Vi kan tale sammen i telefonen, jeg kan komme hjem til jer, eller I kan komme på mit kontor i Søborg. Det er mig, I taler med – hele vejen.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PRISER – kort oversigt
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: "#F9F8F6", padding: "64px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(24px, 3.2vw, 34px)", color: "#2F3E46", lineHeight: 1.25, margin: "0 0 20px", textAlign: "center" }}>
            Priser
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px" }}>
            <div style={{ background: "#fff", border: "1px solid #e0dcd6", borderRadius: "4px", padding: "24px" }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "20px", color: "#2F3E46", margin: "0 0 14px" }}>Min pris</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#3d5260" }}>
                <tbody>
                  {[
                    ["Afsked uden ceremoni", "13.550 kr."],
                    ["Bisættelse", "Fra 18.300 kr."],
                    ["Begravelse", "Fra 19.300 kr."],
                  ].map(([navn, pris]) => (
                    <tr key={navn} style={{ borderBottom: "1px solid #ede9e4" }}>
                      <td style={{ padding: "10px 12px 10px 0" }}>{navn}</td>
                      <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 700, color: "#2F3E46", whiteSpace: "nowrap" }}>{pris}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", lineHeight: 1.6, color: "#5a7a6a", margin: "12px 0 0" }}>
                Med mit honorar, kiste og rustvognskørsel. Priserne gælder hverdage. Begravelseshjælpen søger jeg for jer og trækker fra på fakturaen.
              </p>
            </div>
            <div style={{ background: "#fff", border: "1px solid #e0dcd6", borderRadius: "4px", padding: "24px" }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "20px", color: "#2F3E46", margin: "0 0 14px" }}>Udgifter, der ikke går til mig</h3>
              <ul style={{ margin: "0 0 12px", paddingLeft: "20px", fontFamily: "'Open Sans', sans-serif", fontSize: "16px", lineHeight: 1.8, color: "#3d5260" }}>
                {["Kremering", "Gravsted og gravsten", "Urnenedsættelse", "Leje af kapel", "Kisteophold"].map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", lineHeight: 1.6, color: "#5a7a6a", margin: 0 }}>
                Dem bestemmer jeg ikke over, men jeg hjælper jer med at holde overblikket.
              </p>
            </div>
          </div>
          <p style={{ textAlign: "center", margin: "24px 0 0", fontFamily: "'Open Sans', sans-serif", fontSize: "16px" }}>
            <a href="/priser/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", fontWeight: 600 }}>Se alle priser og tillæg</a>
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          SKAL I VÆLGE EN LOKAL BEDEMAND?
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: "#EEF3EF", padding: "64px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(24px, 3.2vw, 34px)", color: "#2F3E46", lineHeight: 1.25, margin: "0 0 24px" }}>
            Skal I vælge en lokal bedemand?
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.75, color: "#3d5260", margin: "0 0 16px" }}>
            I kan frit vælge den bedemand, I har lyst til og som I føler jer trygge ved.
          </p>
          <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "clamp(18px, 2vw, 21px)", lineHeight: 1.6, color: "#2F3E46", margin: "0 0 16px" }}>
            Det handler om tryghed og tillid – ikke om postnummer.
          </p>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.75, color: "#3d5260", margin: "0 0 16px" }}>
            Bedemanden behøver ikke have adresse i samme by som jer. Bedemanden kan hjælpe jer uanset hvor i landet, I ønsker det.
          </p>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.75, color: "#3d5260", margin: "0 0 16px" }}>
            Det vigtigste er, at I føler jer hørt og er trygge ved den, der skal hjælpe jer med afskeden.
          </p>
          <p style={{ ...{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.75, color: "#3d5260", margin: "0 0 16px" }, margin: "24px 0 0", fontWeight: 600, color: "#2F3E46" }}>
            Ring trygt til mig på <a href="tel:+4528146011" style={{ color: "#3D6B4F", fontWeight: 700, textDecoration: "none", borderBottom: "1px solid #3D6B4F", whiteSpace: "nowrap" }}>28 14 60 11</a>, og mærk efter, om jeg er den rette for jer.
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
            Skriv til mig
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
              href="tel:+4528146011"
              style={{ color: "#3D6B4F", fontWeight: 600, textDecoration: "none" }}
            >
              28 14 60 11
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
          <a href="https://g.page/r/CW91ldyVVI39EBM/review" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "120px", margin: "16px auto 0" }}>
            <img src="/images/anmeldelse-google-qr.svg" width={120} height={120} loading="lazy" alt="QR-kode til at skrive en anmeldelse af Bedemand København på Google" style={{ display: "block", width: "120px", height: "120px" }} />
          </a>
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
          Vandtårnsvej 62A, kontor 11, 2860 Søborg
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
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, kontor 11, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a
            href="tel:+4528146011"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Tlf.: 28 14 60 11
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
            href="/min-sidste-vilje/"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Min Sidste Vilje
          </a>
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
