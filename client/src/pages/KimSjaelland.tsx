import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import ContactForm from "@/components/ContactForm";
import KimNav from "@/components/KimNav";
import CookieLink from "@/components/CookieLink";
import KimPortraet from "@/components/KimPortraet";

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" } as React.CSSProperties,
};

export default function KimSjaelland() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Bedemand på Sjælland – Kim Bondo, døgnet rundt"
        description="Bedemand på hele Sjælland. Kim Bondo tager selv telefonen døgnet rundt, faste priser og begravelseshjælpen trukket fra på fakturaen. Ring 28 14 60 11."
        url="https://www.bedemandkobenhavn.dk/sjaelland/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="LocalBusiness"
        areaServed={["Sjælland"]}
        serviceName="Bedemand på Sjælland"
        pageUrl="https://www.bedemandkobenhavn.dk/sjaelland/"
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Områder", url: "https://www.bedemandkobenhavn.dk/omraade/" },
          { name: "Bedemand på Sjælland", url: "https://www.bedemandkobenhavn.dk/sjaelland/" },
        ]}
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
          <a href="/" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2, textDecoration: "none" }}>Bedemand på Sjælland</a>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – København, Nordsjælland og resten af Sjælland</span>
        </div>
        <KimNav />
        <a href="tel:+4528146011" style={{ display: "none" }} className="mobile-call-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Ring op
        </a>
      </header>


      <nav aria-label="breadcrumb" style={{ background: "#F0EDE8", padding: "10px 24px", borderBottom: "1px solid #e0dcd6" }}>
        <ol style={{ display: "flex", alignItems: "center", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#7a8f99", flexWrap: "wrap" }}>
          <li><a href="/" style={{ color: "#3D6B4F", textDecoration: "none" }}>Forsiden</a></li>
          <li style={{ color: "#b0b8bc" }}>›</li>
          <li><a href="/omraade/" style={{ color: "#3D6B4F", textDecoration: "none" }}>Områder</a></li>
          <li style={{ color: "#b0b8bc" }}>›</li>
          <li style={{ color: "#3d4f5a", fontWeight: 600 }}>Bedemand på Sjælland</li>
        </ol>
      </nav>


      <section style={{ background: "#F9F8F6", padding: "72px 32px 56px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto" }}>
          Bedemand på hele Sjælland – den samme person hele vejen
        </h1>
      </section>

      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={s.body}>
            Mit kontor ligger i Søborg, og til daglig hjælper jeg mest familier i København og Nordsjælland. Men sorg følger ikke kommunegrænser. Bor I et andet sted på Sjælland, eller ønsker I, at jeg hjælper med en afsked, selv om I bor langt fra hinanden, så ring til mig. Så finder vi en løsning sammen.
          </p>
          <p style={s.body}>
            <strong>Det er stadig mig, I taler med.</strong> Jeg tager selv telefonen døgnet rundt, kører selv ud og er selv til stede ved højtideligheden.
          </p>
          <p style={s.body}>
            <strong>Ceremonien holdes lokalt.</strong> Bisættelsen eller begravelsen kan holdes i jeres egen kirke eller i kapellet, hvor I bor. Ved en bisættelse kører jeg bagefter afdøde til krematoriet, og jeg aftaler alt med kirkekontoret og kirkegården lokalt.
          </p>
          <p style={s.body}>
            <strong>Samme faste priser.</strong> Bisættelse fra 18.300 kr., begravelse fra 19.300 kr. og afsked uden ceremoni 13.550 kr. Begravelseshjælpen søger jeg for jer og trækker fra på fakturaen.
          </p>
          <p style={s.body}>
            <strong>Ærlig om kørslen.</strong> Rustvognen koster 1.595 kr. inkl. de første 25 km og derefter 35 kr. pr. km. I København og Nordsjælland er der et loft på 2.000 kr. pr. kørsel. Uden for København og Nordsjælland er der intet loft. Et eksempel: en kørsel på 60 km koster 2.820 kr. Jeg regner det altid ud for jer på forhånd.
          </p>
          <p style={s.body}>
            Ring til mig på <a href="tel:+4528146011" style={s.link}>28 14 60 11</a> – også om natten.
          </p>
          <KimPortraet align="left" />
          <div style={{ marginTop: "8px" }}>
            <a href="tel:+4528146011" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Ring til Kim – 28 14 60 11</a>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "56px 32px", textAlign: "center" }}>
        <p style={s.label}>Se også</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "760px", margin: "0 auto" }}>
          {[
            { label: "Bedemand København", href: "/" },
            { label: "Bedemand Nordsjælland", href: "/nordsjaelland/" },
            { label: "Bedemand Søborg & Gladsaxe", href: "/soborg/" },
            { label: "Dækningsområde", href: "/omraade/" },
            { label: "Se priser", href: "/priser/" },
            { label: "Prisberegner", href: "/prisberegner/" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{ display: "inline-block", background: "#F9F8F6", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0dcd6" }}>{link.label}</a>
          ))}
        </div>
      </section>


      <section id="kontakt" style={{ background: "#F9F8F6", padding: "80px 32px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ ...s.label, textAlign: "center" }}>Kontakt Kim</p>
          <h2 style={{ ...s.h2, textAlign: "center", marginBottom: "12px" }}>Skriv til mig</h2>
          <p style={{ ...s.body, textAlign: "center", maxWidth: "480px", margin: "0 auto 40px" }}>
            Udfyld formularen herunder, så vender jeg tilbage hurtigst muligt.
          </p>
          <ContactForm />
          <p style={{ marginTop: "24px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F", textAlign: "center" }}>
            eller ring direkte på <a href="tel:+4528146011" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>28 14 60 11</a>
          </p>
        </div>
      </section>


      <footer style={{ background: "#2F3E46", color: "#fff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "12px" }}>Bedemand på Sjælland – Kim Bondo</p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#b0c4b1", marginBottom: "32px" }}>Ring eller skriv – jeg er tilgængelig hele døgnet.</p>
        <a href="#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 36px", borderRadius: "3px", textDecoration: "none" }}>Kontakt mig</a>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.78)", marginTop: "40px" }}>
          © {new Date().getFullYear()} Bedemand København ApS · Vandtårnsvej 62A, kontor 11, 2860 Søborg · Tlf.: 28 14 60 11 · kim@bedemandkobenhavn.dk · CVR.: 45084159
          {" "}·{" "}<CookieLink />
        </p>
      </footer>
    </div>
  );
}
