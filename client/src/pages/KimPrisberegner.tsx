import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";
import KimNav from "@/components/KimNav";
import SchemaOrg from "@/components/SchemaOrg";
import { useState } from "react";

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" } as React.CSSProperties,
};

const BASE_PRICES = {
  uden: 13550,
  bisaettelse: 19500,
  begravelse: 21500,
} as const;

const ADDONS = [
  { id: "pynt-lille", label: "Kistepynt lille", price: 1800 },
  { id: "pynt-mellem", label: "Kistepynt mellem", price: 2500 },
  { id: "pynt-stor", label: "Kistepynt stor", price: 3500 },
  { id: "roser", label: "10 farvelroser", price: 350 },
  { id: "aske", label: "Askespredning over havet", price: 2500 },
] as const;

export default function KimPrisberegner() {
  const [base, setBase] = useState<keyof typeof BASE_PRICES | null>(null);
  const [location, setLocation] = useState<string>("");
  const [addons, setAddons] = useState<Record<string, number>>({});

  const basePrice = base ? BASE_PRICES[base] : 0;
  const addonTotal = Object.entries(addons).reduce((sum, [id, qty]) => {
    const addon = ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.price * qty : 0);
  }, 0);
  const total = basePrice + addonTotal;

  const toggleAddon = (id: string, hasQty: boolean) => {
    setAddons((prev) => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = hasQty ? 1 : 1;
      }
      return next;
    });
  };

  const setQty = (id: string, qty: number) => {
    setAddons((prev) => ({ ...prev, [id]: Math.max(1, qty) }));
  };

  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Prisberegner – Bedemand Kim Bondo"
        description="Få et vejledende overslag på begravelse eller bisættelse. Faste priser og gennemsigtighed. Ring 22 21 14 37."
        url="https://www.bedemandkobenhavn.dk/prisberegner/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="both"
        areaServed={["København", "Nordsjælland"]}
        pageUrl="https://www.bedemandkobenhavn.dk/prisberegner/"
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Prisberegner", url: "https://www.bedemandkobenhavn.dk/prisberegner/" },
        ]}
      />

      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6", position: "relative" }}>
        <style>{`
          @media (max-width: 768px) {
            .mobile-call-btn { display: inline-flex !important; align-items: center; gap: 8px; background: #3D6B4F; color: #fff; font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 15px; padding: 10px 20px; border-radius: 3px; text-decoration: none; letter-spacing: 0.04em; white-space: nowrap; }
          }
        `}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2, textDecoration: "none" }}>Prisberegner</a>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – København og Nordsjælland</span>
        </div>
        <KimNav />
        <a href="tel:22211437" style={{ display: "none" }} className="mobile-call-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          Ring op
        </a>
      </header>

      <nav aria-label="breadcrumb" style={{ background: "#F0EDE8", padding: "10px 24px", borderBottom: "1px solid #e0dcd6" }}>
        <ol style={{ display: "flex", alignItems: "center", gap: "8px", listStyle: "none", margin: 0, padding: 0, fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#7a8f99", flexWrap: "wrap" }}>
          <li><a href="/" style={{ color: "#3D6B4F", textDecoration: "none" }}>Forsiden</a></li>
          <li style={{ color: "#b0b8bc" }}>›</li>
          <li style={{ color: "#3d4f5a", fontWeight: 600 }}>Prisberegner</li>
        </ol>
      </nav>

      <section style={{ background: "#F9F8F6", padding: "72px 32px 40px", textAlign: "center" }}>
        <p style={s.label}>Vejledende overslag</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto 16px" }}>
          Hvad koster det cirka?
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 19px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
          Et vejledende overslag baseret på mine faste priser. Jeg laver altid et præcist regnestykke sammen med jer, inden I beslutter noget.
        </p>
      </section>

      <section style={{ background: "#fff", padding: "48px 32px 72px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>1. Hvordan skal afskeden være?</h2>
          <div style={{ display: "grid", gap: "16px", marginBottom: "40px" }}>
            {([
              { key: "uden" as const, title: "Afsked uden ceremoni", price: "Fra 13.550 kr.", text: "En stille afsked uden fremmøde. Jeg står for det praktiske: dødsanmeldelse, koordinering med læge og krematorium, transport, klargøring af afdøde og valg af kiste og urne. I behøver ikke selv tage kontakt til myndigheder eller krematorium." },
              { key: "bisaettelse" as const, title: "Bisættelse", price: "Fra 19.500 kr.", text: "Ceremoni i kirke eller kapel, hvorefter afdøde kremeres. Jeg koordinerer hele forløbet: dødsanmeldelse, aftaler med præst eller kirkekontor, booker kapel eller kirke, sørger for transport til og fra ceremonien, koordinerer med krematoriet og står for klargøring af afdøde. Jeg er den, der holder styr på drejebogen, så I ikke skal tænke på det praktiske." },
              { key: "begravelse" as const, title: "Begravelse", price: "Fra 21.500 kr.", text: "Ceremoni, hvorefter kisten sænkes i jorden. Jeg sørger for det samme som ved en bisættelse, plus koordinering med kirkegården om gravsted, gravning og tidspunkt for jordfæstelsen. I taler med mig hele vejen — fra den første samtale til selve afskeden." },
            ]).map((opt) => (
              <label key={opt.key} style={{ display: "block", background: base === opt.key ? "#f0f7f3" : "#fff", border: `1.5px solid ${base === opt.key ? "#3D6B4F" : "#e0dcd6"}`, borderRadius: "3px", padding: "20px 24px", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
                  <div>
                    <strong style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2F3E46" }}>{opt.title}</strong>
                    <p style={{ ...s.body, fontSize: "15px", margin: "8px 0 0", color: "#5a7a6a" }}>{opt.text}</p>
                  </div>
                  <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, color: "#3D6B4F", whiteSpace: "nowrap" }}>{opt.price}</span>
                </div>
                <input type="radio" name="base" checked={base === opt.key} onChange={() => setBase(opt.key)} style={{ marginTop: "12px" }} />
              </label>
            ))}
          </div>

          <h2 style={s.h2}>2. Hvor skal det foregå? <span style={{ fontWeight: 400, fontSize: "16px", color: "#7a8f99" }}>(valgfrit)</span></h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "40px" }}>
            {["København (Bispebjerg eller Sundby)", "Nordsjælland (Hillerød krematorium)", "Ved ikke endnu / andet"].map((loc) => (
              <label key={loc} style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #e0dcd6", borderRadius: "3px", padding: "12px 16px", cursor: "pointer" }}>
                <input type="radio" name="location" checked={location === loc} onChange={() => setLocation(loc)} />
                <span style={{ fontSize: "15px" }}>{loc}</span>
              </label>
            ))}
          </div>

          <h2 style={s.h2}>3. Tilvalg <span style={{ fontWeight: 400, fontSize: "16px", color: "#7a8f99" }}>(valgfrit)</span></h2>
          <div style={{ display: "grid", gap: "12px", marginBottom: "48px" }}>
            {ADDONS.map((addon) => {
              const selected = !!addons[addon.id];
              const qty = addons[addon.id] || 1;
              return (
                <div key={addon.id} style={{ background: "#fff", border: "1px solid #e0dcd6", borderRadius: "3px", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", flex: 1 }}>
                    <input type="checkbox" checked={selected} onChange={() => toggleAddon(addon.id, "quantity" in addon)} />
                    <span>{addon.label}</span>
                  </label>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    {selected && "quantity" in addon && (
                      <input type="number" min={1} value={qty} onChange={(e) => setQty(addon.id, Number(e.target.value))} style={{ width: "70px", padding: "6px 8px", border: "1px solid #e0dcd6", borderRadius: "3px" }} />
                    )}
                    <span style={{ fontWeight: 600, color: "#3D6B4F", minWidth: "90px", textAlign: "right" }}>
                      {selected ? `${(addon.price * qty).toLocaleString("da-DK")} kr.` : `Fra ${addon.price.toLocaleString("da-DK")} kr.`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {base && (
            <div style={{ background: "#f0f7f3", border: "1px solid #3D6B4F", borderRadius: "3px", padding: "32px 28px", textAlign: "center", marginBottom: "32px" }}>
              <p style={s.label}>Vejledende pris</p>
              <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(32px, 5vw, 48px)", color: "#2F3E46", margin: "8px 0 16px" }}>
                {total.toLocaleString("da-DK")} kr.
              </p>
              <p style={{ ...s.body, fontSize: "15px", maxWidth: "560px", margin: "0 auto 20px" }}>
                Inkluderer mit arbejde som beskrevet ovenfor — herunder koordinering, planlægning, transport, dødsanmeldelse og kontakt til kirke, kapel, krematorium og kirkegård.
              </p>
              <p style={{ ...s.body, fontSize: "14px", color: "#5a7a6a", maxWidth: "560px", margin: "0 auto" }}>
                Oveni kommer krematorium, gravsted og eventuel kapelleje, som kommunen eller kirken fastsætter. Disse beløb er ikke med i overslaget.
              </p>
              <p style={{ ...s.body, fontSize: "15px", marginTop: "24px", fontStyle: "italic" }}>
                Der ligger rigtig meget koordinering og planlægning bag en afsked. Jeg sørger for, at I ikke selv skal holde styr på tider, kontakter og praktiske detaljer. I taler med mig hele vejen.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginTop: "28px" }}>
                <a href="#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>Send overslaget til Kim</a>
                <a href="tel:22211437" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1.5px solid #b0b8bc" }}>Ring til mig – 22 21 14 37</a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="kontakt" style={{ background: "#F9F8F6", padding: "80px 32px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>Kontakt Kim</p>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0", textAlign: "center" }}>Send overslaget</h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px", textAlign: "center", maxWidth: "480px", margin: "0 auto 40px" }}>
            Udfyld formularen herunder, så vender jeg tilbage. Skriv gerne, hvilke valg I har lavet i beregneren.
          </p>
          <ContactForm />
          <p style={{ marginTop: "24px", fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3D6B4F", textAlign: "center" }}>
            eller ring direkte på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
          </p>
        </div>
      </section>

      <footer style={{ background: "#2F3E46", color: "#ffffff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "16px", letterSpacing: "0.02em" }}>Bedemand København og Nordsjælland</p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.6vw, 18px)", color: "rgba(255,255,255,0.82)", marginBottom: "16px", letterSpacing: "0.03em" }}>Kim Bondo</p>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.82)", marginBottom: "32px", lineHeight: 1.7 }}>Vandtårnsvej 62A, 2860 Søborg</p>
        <a href="/#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(15px, 1.8vw, 18px)", padding: "18px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.05em", marginBottom: "48px" }}>Kontakt mig</a>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.78)", marginTop: "16px" }}>
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a href="tel:22211437" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>Tlf.: 22 21 14 37</a>
          {" "}&nbsp;·&nbsp;{" "}
          <a href="mailto:kim@bedemandkobenhavn.dk" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>kim@bedemandkobenhavn.dk</a>
          {" "}&nbsp;·&nbsp; CVR.: 45084159
          {" "}&nbsp;·&nbsp;{" "}
          <a href="/min-sidste-vilje/" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>Min Sidste Vilje</a>
          {" "}&nbsp;·&nbsp;{" "}
          <a href="/persondatapolitik/" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>Persondatapolitik</a>
        </p>
      </footer>
    </div>
  );
}
