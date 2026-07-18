import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

/**
 * Kim Bondo – Kister, Urner og Prisberegner
 * Design: Nordic Quietism — same tokens as all Kim pages
 * Tone: nærværende, præcis og tryghedsskabende
 */

const NAV = (
  <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
    <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Om Kim</a>
    <a href="/kim-bondo/afskeder" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Afskeder</a>
    <a href="/kim-bondo/priser" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Priser</a>
    <a href="/kim-bondo/produkter" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.02em" }}>Produkter</a>
    <a href="/kim-bondo/huskeliste" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Huskeliste</a>
    <a href="/kim-bondo/begravelseshjaelp" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Begravelseshjælp</a>
    <a href="/kim-bondo/hvad-koster-en-begravelse" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Hvad koster det?</a>
    <a href="/kim-bondo/omraade" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Alle byer</a>
    <a href="/kim-bondo/faq" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>FAQ</a>
    <a href="#kontakt" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", color: "#3d5260", textDecoration: "none", letterSpacing: "0.02em" }}>Kontakt</a>
    <a href="tel:22211437" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(14px, 1.6vw, 18px)", color: "#84A98C", textDecoration: "none", whiteSpace: "nowrap", letterSpacing: "0.03em" }}>Tlf: 22 21 14 37</a>
  </div>
);

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "16px", lineHeight: 1.8, color: "#3d4f5a", marginBottom: "16px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 32px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#84A98C", textTransform: "uppercase" as const, marginBottom: "16px", display: "block" },
};

const KISTER = [
  {
    id: "basiskiste",
    name: "Basiskiste",
    price: 6000,
    priceLabel: "6.000 kr.",
    image: "/manus-storage/Basis6greb_5925250a.webp",
    description: "Tilføj din beskrivelse her.",
  },
  {
    id: "klassisk-hvid",
    name: "Klassisk hvid kiste",
    price: 6500,
    priceLabel: "6.500 kr.",
    image: "/manus-storage/Klassiskhvid_b0f458b9.jpg",
    description: "Tilføj din beskrivelse her.",
  },
  {
    id: "gaia",
    name: "Gaia",
    price: 6800,
    priceLabel: "6.800 kr.",
    image: "/manus-storage/Gaia_5d419152.webp",
    description: "Tilføj din beskrivelse her.",
  },
  {
    id: "orbit",
    name: "Orbit papirkiste",
    price: 8800,
    priceLabel: "8.800 kr.",
    image: "/manus-storage/Orbit_924a6cd2.webp",
    description: "Orbit er fremstillet i ReBoard, som er produceret med 80 % færre træfibre end materialet i en traditionel kiste. Kisten vejer 12 kg, hvilket gør den let at håndtere. Den kan printes i alle farver og motiver og er testet til både begravelse og kremering.",
  },
  {
    id: "massiv-fyr",
    name: "Massiv fyr",
    price: 8000,
    priceLabel: "8.000 kr.",
    image: "/manus-storage/Massiv_fyr_55990efe.webp",
    description: "Tilføj din beskrivelse her.",
  },
];

const URNER = [
  {
    id: "askeror-solnedgang",
    name: "Askerør Solnedgang",
    price: 1250,
    priceLabel: "1.250 kr.",
    image: "/manus-storage/Askeror_Solnedgang_faf27b72.jpeg",
    description: "Tilføj din beskrivelse her.",
  },
  {
    id: "creme-natur-biourn",
    name: "Creme Natur biourn",
    price: 1250,
    priceLabel: "1.250 kr.",
    image: "/manus-storage/CremeNaturbiourne_f3a0617c.jpg",
    description: "Tilføj din beskrivelse her.",
  },
  {
    id: "gron-natur-biourn",
    name: "Grøn Natur biourn",
    price: 1250,
    priceLabel: "1.250 kr.",
    image: "/manus-storage/GronNaturbiourne_df52a9c7.jpg",
    description: "Tilføj din beskrivelse her.",
  },
  {
    id: "rod-natur-biourn",
    name: "Rød Natur biourn",
    price: 1250,
    priceLabel: "1.250 kr.",
    image: "/manus-storage/RodNaturbiourne_033ebb28.jpg",
    description: "Tilføj din beskrivelse her.",
  },
  {
    id: "brun-museumsurne",
    name: "Brun museumsurne",
    price: 1250,
    priceLabel: "1.250 kr.",
    image: "/manus-storage/Brunmuseumsurne_7e293ad9.jpeg",
    description: "Tilføj din beskrivelse her.",
  },
  {
    id: "gron-museumsurne",
    name: "Grøn museumsurne",
    price: 1250,
    priceLabel: "1.250 kr.",
    image: "/manus-storage/Gronmuseumsurne_9a41f59e.jpeg",
    description: "Tilføj din beskrivelse her.",
  },
  {
    id: "rod-museumsurne",
    name: "Rød museumsurne",
    price: 1250,
    priceLabel: "1.250 kr.",
    image: "/manus-storage/Rodmuseumsurne_d3d2fec3.jpeg",
    description: "Tilføj din beskrivelse her.",
  },
];

const CEREMONY_TYPES = [
  { id: "afsked-uden-ceremoni", label: "Afsked uden ceremoni", honorar: 15500 },
  { id: "bisaettelse", label: "Bisættelse med ceremoni", honorar: 17395 },
  { id: "begravelse", label: "Begravelse", honorar: 19500 },
];

function formatPrice(n: number) {
  return n.toLocaleString("da-DK") + " kr.";
}

function PrisBeregner() {
  const [ceremony, setCeremony] = useState<string | null>("bisaettelse");
  const [kiste, setKiste] = useState<string | null>("basiskiste");
  const [urne, setUrne] = useState<string | null>("creme-natur-biourn");

  const selectedCeremony = CEREMONY_TYPES.find((c) => c.id === ceremony);
  const selectedKiste = KISTER.find((k) => k.id === kiste);
  const selectedUrne = URNER.find((u) => u.id === urne);

  const isBegravelse = ceremony === "begravelse";

  const total =
    (selectedCeremony?.honorar ?? 0) +
    (selectedKiste?.price ?? 0) +
    (!isBegravelse && selectedUrne ? selectedUrne.price : 0);

  const isComplete =
    selectedCeremony &&
    selectedKiste &&
    (isBegravelse || selectedUrne);

  const btnBase: React.CSSProperties = {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 600,
    fontSize: "15px",
    padding: "12px 20px",
    border: "2px solid #84A98C",
    borderRadius: "3px",
    cursor: "pointer",
    transition: "background 0.15s, color 0.15s",
    textAlign: "left",
    background: "#fff",
    color: "#2F3E46",
    letterSpacing: "0.02em",
    lineHeight: 1.4,
  };
  const btnSelected: React.CSSProperties = {
    ...btnBase,
    background: "#84A98C",
    color: "#fff",
    border: "2px solid #84A98C",
  };

  return (
    <section style={{ background: "#fff", padding: "80px 32px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <p style={s.label}>Prisberegner</p>
        <h2 style={s.h2}>Beregn din estimerede pris</h2>
        <p style={{ ...s.body, marginBottom: "48px" }}>
          Vælg afskeds­type, kiste og urne herunder, og se hvad det samlet vil koste. Prisen er et estimat baseret på Kims honorar og de valgte produkter. Udgifter til kremering, gravsted, kapelleje og blomster er ikke inkluderet.
        </p>

        {/* Trin 1: Ceremonitype */}
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "18px", color: "#2F3E46", marginBottom: "16px" }}>
            1. Vælg type af afsked
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {CEREMONY_TYPES.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setCeremony(c.id);
                  if (c.id === "begravelse") setUrne(null);
                }}
                style={ceremony === c.id ? btnSelected : btnBase}
              >
                <span style={{ display: "block" }}>{c.label}</span>
                <span style={{ display: "block", fontSize: "13px", opacity: 0.8, marginTop: "2px" }}>
                  Honorar fra {formatPrice(c.honorar)}
                </span>
              </button>
            ))}
          </div>
          {ceremony === "begravelse" && (
            <p style={{ marginTop: "12px", fontSize: "13px", color: "#7a8f99", fontStyle: "italic" }}>
              Ved begravelse nedsættes kisten i jord — urne er ikke relevant.
            </p>
          )}
        </div>

        {/* Trin 2: Kiste */}
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "18px", color: "#2F3E46", marginBottom: "16px" }}>
            2. Vælg kiste
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {KISTER.map((k) => (
              <button
                key={k.id}
                onClick={() => setKiste(k.id)}
                style={kiste === k.id ? btnSelected : btnBase}
              >
                <span style={{ display: "block" }}>{k.name}</span>
                <span style={{ display: "block", fontSize: "13px", opacity: 0.8, marginTop: "2px" }}>{k.priceLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Trin 3: Urne (kun ved bisættelse / afsked uden ceremoni) */}
        {!isBegravelse && (
          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "18px", color: "#2F3E46", marginBottom: "16px" }}>
              3. Vælg urne
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {URNER.map((u) => (
                <button
                  key={u.id}
                  onClick={() => setUrne(u.id)}
                  style={urne === u.id ? btnSelected : btnBase}
                >
                  <span style={{ display: "block" }}>{u.name}</span>
                  <span style={{ display: "block", fontSize: "13px", opacity: 0.8, marginTop: "2px" }}>{u.priceLabel}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Resultat */}
        {isComplete && (
          <div
            style={{
              background: "#F9F8F6",
              border: "2px solid #84A98C",
              borderRadius: "4px",
              padding: "32px",
              marginTop: "8px",
            }}
          >
            <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 30px)", color: "#2F3E46", marginBottom: "16px" }}>
              Estimeret pris fra {formatPrice(total)}
            </p>
            <div style={{ borderTop: "1px solid #e0dcd6", paddingTop: "16px" }}>
              <p style={{ fontSize: "14px", color: "#3d5260", lineHeight: 1.8, marginBottom: "4px" }}>
                Kims honorar ({selectedCeremony!.label}): <strong>{formatPrice(selectedCeremony!.honorar)}</strong>
              </p>
              <p style={{ fontSize: "14px", color: "#3d5260", lineHeight: 1.8, marginBottom: "4px" }}>
                {selectedKiste!.name}: <strong>{selectedKiste!.priceLabel}</strong>
              </p>
              {!isBegravelse && selectedUrne && (
                <p style={{ fontSize: "14px", color: "#3d5260", lineHeight: 1.8, marginBottom: "4px" }}>
                  {selectedUrne.name}: <strong>{selectedUrne.priceLabel}</strong>
                </p>
              )}
            </div>
            <p style={{ marginTop: "16px", fontSize: "13px", color: "#7a8f99", fontStyle: "italic", lineHeight: 1.7 }}>
              Estimatet er vejledende og baseret på hverdage. Kremering, gravsted, kapelleje, blomster og eventuelle ekstraomkostninger er ikke inkluderet. Alle priser gennemgås med dig inden aftale indgås.
            </p>
            <a
              href="#kontakt"
              style={{
                display: "inline-block",
                marginTop: "24px",
                background: "#84A98C",
                color: "#fff",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 32px",
                borderRadius: "3px",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              Kontakt Kim
            </a>
          </div>
        )}

        {!isComplete && (
          <p style={{ fontSize: "14px", color: "#7a8f99", fontStyle: "italic", marginTop: "8px" }}>
            {!ceremony
              ? "Vælg afskeds­type for at starte beregningen."
              : !kiste
              ? "Vælg en kiste for at fortsætte."
              : "Vælg en urne for at se den samlede pris."}
          </p>
        )}
      </div>
    </section>
  );
}

export default function KimProdukter() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Kister og urner – Kim Bondo Bedemand København og Nordsjælland"
        description="Se vores udvalg af kister og urner med gennemsigtige priser. Brug prisberegneren til at estimere den samlede pris på begravelse eller bisættelse. Kim Bondo – 22 21 14 37."
        url="https://bedemandkobenhavn.dk/kim-bondo/produkter"
        image="https://bedemandkbh-8wuvn9as.manus.space/manus-storage/kim-beach-solo_609d5ab7.png"
      />
      <SchemaOrg type="LocalBusiness" />

      {/* ── HEADER ── */}
      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6" }}>
        <style>{`
  @media (max-width: 768px) {
    .mobile-call-btn {
      display: inline-flex !important;
      align-items: center;
      gap: 8px;
      background: #84A98C;
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
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#84A98C", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Kister og urner</span>
        </div>
        {NAV}
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
        <p style={s.label}>Kister · Urner · Prisberegner</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "760px", margin: "0 auto 24px" }}>
          Vælg med ro og overblik
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Her finder I vores udvalg af kister og urner med gennemsigtige priser. Brug prisberegneren til at danne jer et overblik — og ring til mig, hvis I har spørgsmål.
        </p>
        <a href="tel:22211437" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "14px 32px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Ring på 22 21 14 37</a>
      </section>

      {/* ── KISTER ── */}
      <section style={{ background: "#fff", padding: "80px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={s.label}>Kister</p>
          <h2 style={{ ...s.h2, marginBottom: "12px" }}>Vores kister</h2>
          <p style={{ ...s.body, maxWidth: "640px", marginBottom: "48px" }}>
            Vi tilbyder et udvalg af kister i forskellige materialer og udtryk. Alle kister er af høj kvalitet og vælges med omhu. Har I spørgsmål til et bestemt produkt, er I altid velkomne til at ringe.
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
                <div style={{ height: "220px", overflow: "hidden", background: "#e8e4df" }}>
                  <img
                    src={k.image}
                    alt={k.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "20px", color: "#2F3E46", marginBottom: "8px", marginTop: 0 }}>{k.name}</h3>
                  <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "22px", color: "#84A98C", marginBottom: "16px" }}>{k.priceLabel}</p>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#7a8f99", lineHeight: 1.75, fontStyle: "italic" }}>
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
          <h2 style={{ ...s.h2, marginBottom: "12px" }}>Vores urner</h2>
          <p style={{ ...s.body, maxWidth: "640px", marginBottom: "48px" }}>
            Alle urner er prissat til 1.250 kr. Vi tilbyder et smukt udvalg i forskellige farver og materialer — fra bionedbrydelige naturuurner til klassiske museumsurner.
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
                <div style={{ height: "200px", overflow: "hidden", background: "#e8e4df" }}>
                  <img
                    src={u.image}
                    alt={u.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "18px", color: "#2F3E46", marginBottom: "6px", marginTop: 0 }}>{u.name}</h3>
                  <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "18px", color: "#84A98C", marginBottom: "12px" }}>{u.priceLabel}</p>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#7a8f99", lineHeight: 1.75, fontStyle: "italic" }}>
                    {u.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRISBEREGNER ── */}
      <PrisBeregner />

      {/* ── KONTAKT ── */}
      <section id="kontakt" style={{ background: "#F9F8F6", padding: "80px 32px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ ...s.label, textAlign: "center" }}>Kontakt</p>
          <h2 style={{ ...s.h2, textAlign: "center", marginBottom: "12px" }}>Har du spørgsmål?</h2>
          <p style={{ ...s.body, textAlign: "center", maxWidth: "480px", margin: "0 auto 40px" }}>
            Udfyld formularen herunder, så vender jeg tilbage hurtigst muligt — eller ring direkte.
          </p>
          <ContactForm />
          <p style={{ marginTop: "24px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#84A98C", textAlign: "center" }}>
            eller ring direkte på <a href="tel:22211437" style={{ color: "#84A98C", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2F3E46", color: "#fff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "12px" }}>Kim Bondo – Bedemand i København og Nordsjælland</p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", color: "#b0c4b1", marginBottom: "32px" }}>Ring eller skriv — jeg er tilgængelig hele døgnet.</p>
        <a href="#kontakt" style={{ display: "inline-block", background: "#84A98C", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "16px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>Kontakt mig</a>
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
