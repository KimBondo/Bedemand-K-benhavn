import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import ContactForm from "@/components/ContactForm";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Kister og Urner
 * Design: Nordic Quietism — same tokens as all Kim pages
 * Tone: nærværende, præcis og tryghedsskabende
 */

const NAV = (
  <KimNav />
);

const hoverZoomStyle = `
  .product-img {
    transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
    will-change: transform;
  }
  .product-img:hover {
    transform: scale(1.06);
  }
  .product-img-wrap {
    overflow: hidden;
  }
`;

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "16px", lineHeight: 1.8, color: "#3d4f5a", marginBottom: "16px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 32px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px", display: "block" },
};

const KISTER = [
  {
    id: "basiskiste",
    name: "Basiskiste",
    priceLabel: "6.000 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/Basis6greb_5925250a.webp",
    alt: "Basiskiste – umalet kiste til begravelse eller bisættelse, Kim Bondo bedemand",
    description: "Umalet.",
    use: "bisættelse" as const,
  },
  {
    id: "klassisk-hvid",
    name: "Klassisk hvid kiste",
    priceLabel: "6.500 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/Klassiskhvid_b0f458b9_8686480b.webp",
    alt: "Klassisk hvid kiste til bisættelse – fremstillet i spån og MDF, Kim Bondo bedemand",
    description: "En klassisk kremeringskiste til bisættelser, fremstillet i spån og MDF.",
    use: "bisættelse" as const,
  },
  {
    id: "gaia",
    name: "Gaia",
    priceLabel: "6.800 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/Gaia_5d419152.webp",
    alt: "Gaia kiste i massivt paulowniatræ – let og bæredygtig kiste til bisættelse og begravelse",
    description: "Gaia er fremstillet i massivt, let paulowniatræ og vejer kun 20 kg, hvilket gør håndteringen lettere. Paulownia er hurtigtvoksende og kisten har et markant lavere klimaaftryk end en traditionel hvid kiste. Både til bisættelse og begravelse.",
    use: "begge" as const,
  },
  {
    id: "orbit",
    name: "Orbit papirkiste",
    priceLabel: "8.800 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/Orbit_924a6cd2.webp",
    alt: "Orbit papirkiste i ReBoard – let og miljøvenlig kiste til begravelse og kremering",
    description: "Orbit er fremstillet i ReBoard, som er produceret med 80 % færre træfibre end materialet i en traditionel kiste. Kisten vejer 12 kg, hvilket gør den let at håndtere. Den kan printes i alle farver og motiver og er testet til både begravelse og kremering.",
    use: "begge" as const,
  },
  {
    id: "massiv-fyr",
    name: "Massiv fyr",
    priceLabel: "8.000 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/Massiv_fyr_55990efe.webp",
    alt: "Massiv fyrkiste med knaster – naturlig og varm kiste til begravelse, Kim Bondo bedemand",
    description: "Kisten i fyrretræ med knaster har et varmt og naturligt udtryk, hvor træets struktur og levende detaljer får lov at stå frem. Knasterne giver hver kiste sit eget særpræg og understreger det enkle og særlige udtryk.",
    use: "begravelse" as const,
  },
];

const URNER = [
  {
    id: "askeror-solnedgang",
    name: "Askerør Solnedgang",
    priceLabel: "950 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/Askeror_Solnedgang_faf27b72.jpeg",
    alt: "Askerør Solnedgang – biologisk nedbrydeligt askerør i genanvendt karton til askespredning",
    description: "Dette askerør er fremstillet i genanvendt karton og pap. Materialet er biologisk nedbrydeligt og egner sig til askespredning, enten til vands eller som en del af en ceremoni. Det enkle udtryk gør den til et fint valg til en personlig og værdig afsked.",
  },
  {
    id: "creme-natur-biourn",
    name: "Creme Natur biourne",
    priceLabel: "1.250 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/CremeNaturbiourne_f3a0617c.jpg",
    alt: "Creme Natur biourne – biologisk nedbrydeligt urne i bioplast, Kim Bondo bedemand",
    description: "Natur urnerne er lavet af bioplast, som tager mellem 4 og 9 år at nedbryde i jorden.",
  },
  {
    id: "gron-natur-biourn",
    name: "Grøn Natur biourne",
    priceLabel: "1.250 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/GronNaturbiourne_df52a9c7.jpg",
    alt: "Grøn Natur biourne – grøn biologisk nedbrydeligt urne i bioplast, Kim Bondo bedemand",
    description: "Natur urnerne er lavet af bioplast, som tager mellem 4 og 9 år at nedbryde i jorden.",
  },
  {
    id: "rod-natur-biourn",
    name: "Rød Natur biourne",
    priceLabel: "1.250 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/RodNaturbiourne_033ebb28.jpg",
    alt: "Rød Natur biourne – rød biologisk nedbrydeligt urne i bioplast, Kim Bondo bedemand",
    description: "Natur urnerne er lavet af bioplast, som tager mellem 4 og 9 år at nedbryde i jorden.",
  },
  {
    id: "brun-museumsurne",
    name: "Brun museumsurne",
    priceLabel: "1.350 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/Brunmuseumsurne_7e293ad9.jpeg",
    alt: "Brun museumsurne – urne i genbrugspap med trælåg fra Bruunshaab Gamle Papfabrik",
    description: "Museumsurnen er fremstillet i genbrugspap og lukkes med træ, uden brug af metal. Den fås både med og uden livets træ på. Urnen er udviklet af Søhøjlandets Begravelser og Blomstergalleri og produceret af Bruunshaab Gamle Papfabrik, begge fra Viborg-området.",
  },
  {
    id: "gron-museumsurne",
    name: "Grøn museumsurne",
    priceLabel: "1.350 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/Gronmuseumsurne_9a41f59e.jpeg",
    alt: "Grøn museumsurne – grøn urne i genbrugspap med trælåg fra Bruunshaab Gamle Papfabrik",
    description: "Museumsurnen er fremstillet i genbrugspap og lukkes med træ, uden brug af metal. Den fås både med og uden livets træ på. Urnen er udviklet af Søhøjlandets Begravelser og Blomstergalleri og produceret af Bruunshaab Gamle Papfabrik, begge fra Viborg-området.",
  },
  {
    id: "rod-museumsurne",
    name: "Rød museumsurne",
    priceLabel: "1.350 kr.",
    image: "https://bedemandkbh-8wuvn9as.manus.space/manus-storage/Rodmuseumsurne_d3d2fec3.jpeg",
    alt: "Rød museumsurne – rød urne i genbrugspap med trælåg fra Bruunshaab Gamle Papfabrik",
    description: "Museumsurnen er fremstillet i genbrugspap og lukkes med træ, uden brug af metal. Den fås både med og uden livets træ på. Urnen er udviklet af Søhøjlandets Begravelser og Blomstergalleri og produceret af Bruunshaab Gamle Papfabrik, begge fra Viborg-området.",
  },
];

export default function KimProdukter() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Kister og urner – Bedemand Kim Bondo"
        description="Vælg kiste fra 6.000 kr. eller urne fra 950 kr. Bæredygtige og klassiske modeller. Kim Bondo bedemand i København. Ring 22 21 14 37."
        url="https://bedemandkobenhavn.dk/kim-bondo/produkter"
        image="https://bedemandkobenhavn.dkhttps://bedemandkbh-8wuvn9as.manus.space/manus-storage/kim-beach-solo_609d5ab7.png"
      />
      <SchemaOrg
        type="both"
        breadcrumbs={[
          { name: "Forside", url: "https://bedemandkobenhavn.dk/" },
          { name: "Kim Bondo", url: "https://bedemandkobenhavn.dk/kim-bondo" },
          { name: "Kister og urner", url: "https://bedemandkobenhavn.dk/kim-bondo/produkter" }
        ]}
      />
      <SchemaOrg
        type="ItemList"
        pageUrl="https://bedemandkobenhavn.dk/kim-bondo/produkter"
        products={[
          ...KISTER.map(k => ({
            name: k.name,
            description: k.description,
            image: k.image,
            price: k.priceLabel.replace(/[^0-9]/g, ""),
            sku: k.id,
          })),
          ...URNER.map(u => ({
            name: u.name,
            description: u.description,
            image: u.image,
            price: u.priceLabel.replace(/[^0-9]/g, ""),
            sku: u.id,
          })),
        ]}
      />

      <style>{hoverZoomStyle}</style>
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
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Kister og urner</span>
        </div>
        <KimNav />
        {/* ── MOBIL RING-KNAP (kun synlig på mobil) ── */}
        <a
          href="tel:22211437"
          style={{ display: "none" }}
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
        <p style={s.label}>Kister · Urner</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "760px", margin: "0 auto 24px" }}>
          Vælg med ro og overblik
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Her finder I mit udvalg af kister og urner med gennemsigtige priser. Ring til mig, hvis I har spørgsmål til et bestemt produkt.
        </p>
        <a href="tel:22211437" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "14px 32px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Ring på 22 21 14 37</a>
      </section>

      {/* ── KISTER ── */}
      <section style={{ background: "#fff", padding: "80px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={s.label}>Kister</p>
          <h2 style={{ ...s.h2, marginBottom: "12px" }}>Mine kister</h2>
          <p style={{ ...s.body, maxWidth: "640px", marginBottom: "48px" }}>
            Jeg tilbyder et udvalg af kister i forskellige materialer og udtryk. Alle kister er af høj kvalitet og vælges med omhu. Har I spørgsmål til et bestemt produkt, er I altid velkomne til at ringe.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {KISTER.map((k) => (
              <div
                key={k.id}
                style={{
                  background: "#F9F8F6",
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: "1px solid #e0dcd6",
                }}
              >
               <div className="product-img-wrap" style={{ height: "220px", background: "#e8e4df" }}>
                 <img
                   src={k.image}
                   alt={k.alt || k.name}
                   className="product-img"
                    loading="lazy"
                    width="440"
                    height="220"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                 />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "20px", color: "#2F3E46", marginBottom: "8px", marginTop: 0 }}>{k.name}</h3>
                 <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "22px", color: "#3D6B4F", marginBottom: "16px" }}>{k.priceLabel}</p>
                  <p style={{ marginBottom: "12px" }}>
                    {(k.use === "bisættelse" || k.use === "begge") && (
                      <span style={{ display: "inline-block", background: "#EAF2ED", color: "#2a5c3f", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.08em", padding: "3px 10px", borderRadius: "2px", textTransform: "uppercase", marginRight: "6px" }}>
                        Bisættelse
                      </span>
                    )}
                    {(k.use === "begravelse" || k.use === "begge") && (
                      <span style={{ display: "inline-block", background: "#EDF2F7", color: "#2c4a6e", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.08em", padding: "3px 10px", borderRadius: "2px", textTransform: "uppercase" }}>
                        Begravelse
                      </span>
                    )}
                  </p>
                 <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#3d4f5a", lineHeight: 1.75, fontStyle: k.description === "Tilføj din beskrivelse her." ? "italic" : "normal" }}>
                    {k.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── URNER ── */}
      <section style={{ background: "#F9F8F6", padding: "80px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={s.label}>Urner</p>
          <h2 style={{ ...s.h2, marginBottom: "12px" }}>Mine urner</h2>
          <p style={{ ...s.body, maxWidth: "640px", marginBottom: "48px" }}>
            Urnerne koster fra 950 kr. Jeg tilbyder et udvalg i forskellige farver og materialer — fra bionedbrydelige natururner til klassiske museumsurner.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "28px",
            }}
          >
            {URNER.map((u) => (
              <div
                key={u.id}
                style={{
                  background: "#fff",
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: "1px solid #e0dcd6",
                }}
              >
               <div className="product-img-wrap" style={{ background: "#e8e4df", textAlign: "center" }}>
                 <img
                   src={u.image}
                   alt={u.alt || u.name}
                   className="product-img"
                    loading="lazy"
                    width="300"
                    height="300"
                    style={{ width: "100%", height: "auto", display: "block" }}
                 />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "18px", color: "#2F3E46", marginBottom: "6px", marginTop: 0 }}>{u.name}</h3>
                  <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "18px", color: "#3D6B4F", marginBottom: "12px" }}>{u.priceLabel}</p>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3d4f5a", lineHeight: 1.75, fontStyle: u.description === "Tilføj din beskrivelse her." ? "italic" : "normal" }}>
                    {u.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KONTAKT ── */}
      <section id="kontakt" style={{ background: "#fff", padding: "80px 32px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ ...s.label, textAlign: "center" }}>Kontakt</p>
          <h2 style={{ ...s.h2, textAlign: "center", marginBottom: "12px" }}>Har du spørgsmål?</h2>
          <p style={{ ...s.body, textAlign: "center", maxWidth: "480px", margin: "0 auto 40px" }}>
            Udfyld formularen herunder, så vender jeg tilbage hurtigst muligt — eller ring direkte.
          </p>
          <ContactForm />
          <p style={{ marginTop: "24px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F", textAlign: "center" }}>
            eller ring direkte på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
          </p>
        </div>
      </section>

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
