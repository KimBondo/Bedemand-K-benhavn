import SEO from "@/components/SEO";
import ContactForm, { type PakkeNoegle } from "@/components/ContactForm";
import { RingMigOpKnap } from "@/components/RingMigOp";
import KimNav from "@/components/KimNav";
import SchemaOrg, { OMRAADER } from "@/components/SchemaOrg";
import { useState } from "react";
import { PAKKEPRISER } from "@/lib/priser";
import CookieLink from "@/components/CookieLink";

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" } as React.CSSProperties,
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" } as React.CSSProperties,
};

const BASE_PRICES = PAKKEPRISER;

type Base = keyof typeof BASE_PRICES;

// Pakkeprisen gælder med standardkisten. Vælges en anden kiste, betales kun forskellen.
const KISTER: { id: string; label: string; price: number; kunVed?: Base[] }[] = [
  { id: "basis", label: "Umalet basiskiste", price: 5500 },
  { id: "hvid", label: "Klassisk hvid kiste", price: 6500 },
  { id: "gaia", label: "Gaia – let kiste i paulowniatræ", price: 6800, kunVed: ["uden", "bisaettelse"] },
  { id: "massiv-fyr", label: "Massiv fyr – fyrretræ med knaster", price: 8000 },
  { id: "orbit", label: "Orbit papirkiste", price: 8800 },
];

// Bisættelse uden ceremoni har basiskisten; pakkerne med ceremoni har klassisk hvid kiste.
const STANDARD_KISTE: Record<Base, string> = {
  uden: "basis",
  bisaettelse: "hvid",
  begravelse: "hvid",
};

function kisteForskelFor(base: Base, kiste: { id: string; price: number }) {
  const standard = KISTER.find((k) => k.id === STANDARD_KISTE[base])!;
  return kiste.price - standard.price;
}

// Urne er kun aktuel, når afdøde kremeres. Natururnen indgår i pakken.
const URNER = [
  { id: "natur", label: "Natururne (creme, grøn eller rød)", price: 1250 },
  { id: "askeroer", label: "Askerør – til askespredning", price: 950 },
  { id: "museum", label: "Museumsurne (brun, grøn eller rød)", price: 1350 },
];
const STANDARD_URNE = URNER[0];

function forskelTekst(forskel: number) {
  return forskel === 0 ? "Indgår i prisen" : forskel < 0 ? `Spar ${(-forskel).toLocaleString("da-DK")} kr.` : `+ ${forskel.toLocaleString("da-DK")} kr.`;
}

function kisterTil(base: Base) {
  return KISTER.filter((k) => !k.kunVed || k.kunVed.includes(base));
}

const ADDONS = [
  { id: "pynt-lille", label: "Kistepynt lille", price: 1800 },
  { id: "pynt-mellem", label: "Kistepynt mellem", price: 2500 },
  { id: "pynt-stor", label: "Kistepynt stor", price: 3500 },
  { id: "roser", label: "10 farvelroser", price: 350 },
  { id: "ligklaede", label: "Ligklæde", price: 295 },
  // Askespredning kræver kremering og kan derfor ikke vælges ved kistebegravelse
  { id: "aske", label: "Askespredning over havet", price: 2500, fra: true, ikkeVed: "begravelse" },
  // Urnekørsel giver ikke mening ved begravelse, hvor der ingen urne er
  { id: "urnekoersel", label: "Urnekørsel fra krematorie til kirkegårdskontor", price: 900, ikkeVed: "begravelse" },
  // Blomsterkørsel: ligger ikke i nogen pakke
  { id: "blomster-hverdag", label: "Blomsterkørsel på en hverdag", price: 1195, ikkeVed: "uden", note: "Er graven på samme kirkegård som kirken, sørger kirken som regel selv for blomsterne. Skal de et andet sted hen, er det en blomsterkørsel." },
  { id: "blomster-loerdag", label: "Blomsterkørsel om lørdagen", price: 1995, ikkeVed: "uden" },
  { id: "fremvisning", label: "Fremvisning på hospital eller i kapel", price: 900 },
  { id: "ceremonileder", label: "Ceremonileder ved borgerlig ceremoni", price: 2500, ca: true, ikkeVed: "uden" },
  { id: "privat-hjem", label: "Afhentning i et privat hjem", price: 1200 },
  // Tillæg pr. udkald uden for normal arbejdstid (kun kørsel har tillæg) – kan vælges flere gange
  { id: "efter-16", label: "Kørsel efter kl. 16, i weekenden eller på en helligdag", price: 800, quantity: true, note: "800 kr. pr. udkald – fx en afhentning om aftenen eller en bisættelse om lørdagen. Der er kun tillæg på kørslen. Vælg antallet af udkald." },
] as const;

/** Kørselsvilkår: afstand fra kontoret i Søborg, kun den ene vej. */
const KOERSEL_PRIS = 1595;   // én rustvognskørsel inkl. de første 25 km
const KM_INKL = 25;
const KM_PRIS = 35;          // pr. km derefter
const KOERSEL_LOFT = 2000;   // højst pr. kørsel i København og Nordsjælland
const PAKKE_KOERSLER: Record<"uden" | "bisaettelse" | "begravelse", number> = { uden: 1, bisaettelse: 2, begravelse: 1 };
/** Fysisk møde hjemme eller på kontoret i Søborg. Telefonmødet er med i alle pakker. */
const MOEDE_PRIS = 995;

/** Prisen for én kørsel ud fra afstanden (km den ene vej) og om loftet gælder. */
function prisPrKoersel(km: number, medLoft: boolean) {
  const pris = KOERSEL_PRIS + Math.max(0, Math.round(km) - KM_INKL) * KM_PRIS;
  return medLoft ? Math.min(pris, KOERSEL_LOFT) : pris;
}

const BASE_TITLER: Record<Base, string> = { uden: "Bisættelse uden ceremoni", bisaettelse: "Bisættelse med ceremoni", begravelse: "Begravelse" };

/** Tilvalg, der giver mening for den valgte afskedsform. */
function relevant(addon: (typeof ADDONS)[number], base: keyof typeof BASE_PRICES | null) {
  return !("ikkeVed" in addon && addon.ikkeVed === base);
}

export default function KimPrisberegner() {
  const [base, setBase] = useState<keyof typeof BASE_PRICES | null>(null);
  const [ekstraKoersler, setEkstraKoersler] = useState<number>(0);
  const [fysiskMoede, setFysiskMoede] = useState<boolean>(false);
  const [km, setKm] = useState<string>("");
  const [indenforLoft, setIndenforLoft] = useState<boolean>(true);
  const [addons, setAddons] = useState<Record<string, number>>({});

  const [kiste, setKiste] = useState<string | null>(null);

  const basePrice = base ? BASE_PRICES[base] : 0;
  // Er den valgte kiste ikke mulig ved afskedsformen, bruges standardkisten
  const standard = base ? KISTER.find((k) => k.id === STANDARD_KISTE[base])! : null;
  const valgtKiste = base ? kisterTil(base).find((k) => k.id === kiste) ?? standard : null;
  const kisteForskel = base && valgtKiste ? kisteForskelFor(base, valgtKiste) : 0;
  const [urne, setUrne] = useState<string>(STANDARD_URNE.id);
  const medUrne = base === "uden" || base === "bisaettelse";
  const valgtUrne = URNER.find((u) => u.id === urne) ?? STANDARD_URNE;
  const urneForskel = medUrne ? valgtUrne.price - STANDARD_URNE.price : 0;
  const addonTotal = Object.entries(addons).reduce((sum, [id, qty]) => {
    const addon = ADDONS.find((a) => a.id === id);
    return sum + (addon && relevant(addon, base) ? addon.price * qty : 0);
  }, 0);
  // Kørsel: pakken indeholder et antal kørsler à 1.595 kr. (inkl. 25 km). Ekstra kørsler er et tilvalg,
  // og km ud over 25 lægges til pr. kørsel (højst 2.000 kr. pr. kørsel inden for København og Nordsjælland).
  const pakkeKoersler = base ? PAKKE_KOERSLER[base] : 0;
  const antalKoersler = pakkeKoersler + (base ? ekstraKoersler : 0);
  const kmTal = Math.max(0, Number(km.replace(",", ".")) || 0);
  const enKoersel = prisPrKoersel(kmTal, indenforLoft);
  const ekstraKoerselPris = (base ? ekstraKoersler : 0) * KOERSEL_PRIS;
  const moedePris = base && fysiskMoede ? MOEDE_PRIS : 0;
  const kmTillaeg = antalKoersler * (enKoersel - KOERSEL_PRIS);
  const total = Math.max(0, basePrice + kisteForskel + urneForskel + addonTotal + ekstraKoerselPris + kmTillaeg + moedePris);

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

  // Overslaget sendes automatisk med prisanmodningen og følger altid det aktuelle valg
  const kr = (n: number) => `${n.toLocaleString("da-DK")} kr.`;
  const lavOverslag = () => {
    if (!base || !valgtKiste) return "";
    const linjer = [
      "Mit overslag fra prisberegneren:",
      `- ${BASE_TITLER[base]}: ${kr(basePrice)}`,
      `- Kiste: ${valgtKiste.label}${kisteForskel ? ` (${forskelTekst(kisteForskel).toLowerCase()})` : " (indgår i prisen)"}`,
    ];
    if (medUrne) linjer.push(`- Urne: ${valgtUrne.label}${urneForskel ? ` (${forskelTekst(urneForskel).toLowerCase()})` : " (indgår i prisen)"}`);
    linjer.push(`- Rustvognskørsler: ${antalKoersler} à ${kr(enKoersel)}${kmTal ? ` (${kmTal} km fra Søborg, ${indenforLoft ? "inden for København og Nordsjælland" : "uden for København og Nordsjælland"})` : " (inden for 25 km)"}`);
    if (ekstraKoerselPris) linjer.push(`- Ekstra kørsler: ${ekstraKoersler} × ${kr(KOERSEL_PRIS)} = ${kr(ekstraKoerselPris)}`);
    linjer.push(fysiskMoede ? `- Møde hjemme hos jer eller på mit kontor: ${kr(MOEDE_PRIS)}` : "- Telefonmøde (indgår i prisen)");
    if (kmTillaeg) linjer.push(`- Km-tillæg: ${kr(kmTillaeg)}`);
    for (const [id, qty] of Object.entries(addons)) {
      const addon = ADDONS.find((a) => a.id === id);
      if (addon && relevant(addon, base)) linjer.push(`- ${addon.label}${qty > 1 ? ` × ${qty}` : ""}: ${"fra" in addon ? "fra " : "ca" in addon ? "ca. " : ""}${kr(addon.price * qty)}`);
    }
    linjer.push(`Vejledende pris i alt: ${kr(total)}`);
    linjer.push("Ikke med i beregningen: krematorium, gravsted og eventuel kapelleje, som kommunen eller kirken fastsætter.");
    linjer.push("Antal kørsler og afstand bekræfter jeg, når forløbet er kendt.");
    return linjer.join("\n");
  };

  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Prisberegner – Bedemand Kim Bondo"
        description="Få et vejledende overslag på begravelse eller bisættelse ud fra mine faste priser. Ring til mig på 28 14 60 11."
        url="https://www.bedemandkobenhavn.dk/prisberegner/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="both"
        areaServed={OMRAADER}
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
        <a href="tel:+4528146011" style={{ display: "none" }} className="mobile-call-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          Ring til mig
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
          Et vejledende overslag baseret på mine faste priser. Jeg laver et præcist regnestykke sammen med jer, inden I beslutter noget.
        </p>
      </section>

      <section style={{ background: "#fff", padding: "48px 32px 72px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={s.h2}>1. Hvordan skal afskeden være?</h2>
          <div style={{ display: "grid", gap: "16px", marginBottom: "40px" }}>
            {([
              { key: "uden" as const, title: "Bisættelse uden ceremoni", price: "9.995 kr.", text: "Afdøde køres direkte til krematoriet uden forudgående højtidelighed. Med i prisen: mit honorar og telefonmøde, anmodning om ligbrænding, ansøgning om begravelseshjælp, kontakt til krematorium og kirkegård, klargøring og ilægning i en umalet basiskiste, urne og én rustvognskørsel." },
              { key: "begravelse" as const, title: "Begravelse", price: "Fra 13.495 kr.", text: "Kisten sænkes i jorden efter ceremonien. Med i prisen: mit honorar og telefonmøde, anmodning om begravelse, begravelseshjælp, dødsannonce (avisens pris kommer oveni), kontakt til kirke og kirkegård, klassisk hvid kiste og én rustvognskørsel. Jeg er selv til stede ved højtideligheden." },
              { key: "bisaettelse" as const, title: "Bisættelse med ceremoni", price: "Fra 14.995 kr.", text: "Ceremoni i kirke eller kapel, hvorefter afdøde kremeres. Det samme som begravelse, plus natururne, kontakt til krematoriet og to rustvognskørsler: fra kapel til ceremoni og derfra til krematoriet." },
            ]).map((opt) => (
              <label key={opt.key} style={{ display: "block", background: base === opt.key ? "#f0f7f3" : "#fff", border: `1.5px solid ${base === opt.key ? "#3D6B4F" : "#e0dcd6"}`, borderRadius: "3px", padding: "20px 24px", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
                  <div>
                    <strong style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2F3E46" }}>{opt.title}</strong>
                    <p style={{ ...s.body, fontSize: "15px", margin: "8px 0 0", color: "#5a7a6a" }}>{opt.text}</p>
                  </div>
                  <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, color: "#3D6B4F", whiteSpace: "nowrap" }}>{opt.price}</span>
                </div>
                <input type="radio" name="base" checked={base === opt.key} onChange={() => { setBase(opt.key); setKiste(null); }} style={{ marginTop: "12px" }} />
              </label>
            ))}
          </div>

          {base && standard && valgtKiste && (
            <>
              <h2 style={s.h2}>2. {medUrne ? "Hvilken kiste og urne?" : "Hvilken kiste?"}</h2>
              <p style={{ ...s.body, fontSize: "15px", color: "#5a7a6a" }}>
                {base === "uden" ? "Prisen er med en umalet basiskiste. Vælger I en anden kiste, betaler I kun forskellen." : "Prisen er med en klassisk hvid kiste. Vælger I en anden kiste, betaler I kun forskellen – og vælger I den umalede basiskiste, bliver prisen 1.000 kr. lavere."}{" "}
                <a href="/produkter/" style={s.link}>Se kisterne med billeder</a>
              </p>
              <div style={{ display: "grid", gap: "12px", marginBottom: "40px" }}>
                {kisterTil(base).map((k) => {
                  const forskel = kisteForskelFor(base, k);
                  const valgt = valgtKiste.id === k.id;
                  return (
                    <label key={k.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", background: valgt ? "#f0f7f3" : "#fff", border: `1px solid ${valgt ? "#3D6B4F" : "#e0dcd6"}`, borderRadius: "3px", padding: "16px 20px", cursor: "pointer" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                        <input type="radio" name="kiste" checked={valgt} onChange={() => setKiste(k.id)} />
                        <span>{k.label}</span>
                      </span>
                      <span style={{ fontWeight: 600, color: "#3D6B4F", minWidth: "90px", textAlign: "right" }}>
                        {forskelTekst(forskel)}
                      </span>
                    </label>
                  );
                })}
              </div>
              {medUrne && (
                <>
                  <h3 style={s.h3}>Og urnen?</h3>
                  <p style={{ ...s.body, fontSize: "15px", color: "#5a7a6a" }}>
                    En urne indgår i prisen. Vælger I en anden urne, betaler I kun forskellen.
                  </p>
                  <div style={{ display: "grid", gap: "12px", marginBottom: "40px" }}>
                    {URNER.map((u) => {
                      const valgt = valgtUrne.id === u.id;
                      return (
                        <label key={u.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", background: valgt ? "#f0f7f3" : "#fff", border: `1px solid ${valgt ? "#3D6B4F" : "#e0dcd6"}`, borderRadius: "3px", padding: "16px 20px", cursor: "pointer" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                            <input type="radio" name="urne" checked={valgt} onChange={() => setUrne(u.id)} />
                            <span>{u.label}</span>
                          </span>
                          <span style={{ fontWeight: 600, color: "#3D6B4F", minWidth: "90px", textAlign: "right" }}>
                            {forskelTekst(u.price - STANDARD_URNE.price)}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}

          <h2 style={s.h2}>{base ? 3 : 2}. Kørsel</h2>
          <p style={{ ...s.body, fontSize: "15px", color: "#5a7a6a" }}>
            Afstanden regnes fra mit kontor i Søborg. En rustvognskørsel koster 1.595 kr., og de første 25 km er med i prisen. Derefter koster det 35 kr. pr. km. Der regnes kun den ene vej, ad den billigste rute. I hele København og Nordsjælland koster en kørsel højst 2.000 kr. Uden for det område gælder samme km-pris, men der er intet loft.
          </p>
          {base && (
            <>
              <h3 style={s.h3}>Rustvognskørsler</h3>
              <p style={{ ...s.body, fontSize: "15px", color: "#5a7a6a" }}>
                {base === "bisaettelse" ? "Pakken har to kørsler: fra kapel til ceremoni og derfra til krematoriet." : base === "begravelse" ? "Pakken har én kørsel. På hverdage kan vi ofte køre direkte fra hospitalets kapel til kirken." : "Pakken har én kørsel til krematoriet."} En ekstra kørsel koster 1.595 kr. I weekenden er hospitalernes kapeller lukket, så der skal som regel bruges flere kørsler. Det aftaler vi, når forløbet ligger fast.
              </p>
              <div style={{ display: "grid", gap: "12px", marginBottom: "24px" }}>
                {[0, 1, 2].map((n) => {
                  const valgt = ekstraKoersler === n;
                  return (
                    <label key={n} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", background: valgt ? "#f0f7f3" : "#fff", border: `1px solid ${valgt ? "#3D6B4F" : "#e0dcd6"}`, borderRadius: "3px", padding: "16px 20px", cursor: "pointer" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                        <input type="radio" name="ekstrakoersler" checked={valgt} onChange={() => setEkstraKoersler(n)} />
                        <span>{n === 0 ? "Ingen ekstra kørsler" : n === 1 ? "Én ekstra kørsel" : "To ekstra kørsler"}</span>
                      </span>
                      <span style={{ fontWeight: 600, color: "#3D6B4F", minWidth: "90px", textAlign: "right" }}>
                        {n ? `+ ${(n * KOERSEL_PRIS).toLocaleString("da-DK")} kr.` : "Indgår i prisen"}
                      </span>
                    </label>
                  );
                })}
              </div>
            </>
          )}
          <div style={{ display: "grid", gap: "12px", marginBottom: "40px" }}>
            <label style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", background: "#fff", border: "1px solid #e0dcd6", borderRadius: "3px", padding: "16px 20px" }}>
              <span style={{ flex: "1 1 200px" }}>Afstand fra Søborg (km, den ene vej)</span>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                placeholder="fx 15"
                value={km}
                onChange={(e) => setKm(e.target.value)}
                style={{ width: "100px", padding: "8px 10px", border: "1px solid #e0dcd6", borderRadius: "3px", fontSize: "16px" }}
              />
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "12px", background: "#fff", border: "1px solid #e0dcd6", borderRadius: "3px", padding: "16px 20px", cursor: "pointer" }}>
              <input type="checkbox" checked={indenforLoft} onChange={(e) => setIndenforLoft(e.target.checked)} />
              <span>Inden for København og Nordsjælland <span style={{ display: "block", fontSize: "13px", color: "#5a7a6a", marginTop: "4px" }}>Så koster en kørsel højst 2.000 kr.</span></span>
            </label>
            {base && (
              <p style={{ ...s.body, fontSize: "15px", margin: 0, color: "#3d4f5a" }}>
                {antalKoersler} {antalKoersler === 1 ? "kørsel" : "kørsler"} à {enKoersel.toLocaleString("da-DK")} kr.
                {ekstraKoerselPris ? ` · ekstra kørsler ${ekstraKoerselPris.toLocaleString("da-DK")} kr.` : ""}
                {kmTillaeg ? ` · km-tillæg ${kmTillaeg.toLocaleString("da-DK")} kr.` : ""}
              </p>
            )}
          </div>

          {base && (
            <>
              <h2 style={s.h2}>4. Møde</h2>
              <div style={{ display: "grid", gap: "12px", marginBottom: "40px" }}>
                {[false, true].map((fysisk) => {
                  const valgt = fysiskMoede === fysisk;
                  return (
                    <label key={String(fysisk)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", background: valgt ? "#f0f7f3" : "#fff", border: `1px solid ${valgt ? "#3D6B4F" : "#e0dcd6"}`, borderRadius: "3px", padding: "16px 20px", cursor: "pointer" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                        <input type="radio" name="moede" checked={valgt} onChange={() => setFysiskMoede(fysisk)} />
                        <span>{fysisk ? "Møde hjemme hos jer eller på mit kontor i Søborg" : "Telefonmøde"}</span>
                      </span>
                      <span style={{ fontWeight: 600, color: "#3D6B4F", minWidth: "90px", textAlign: "right" }}>
                        {fysisk ? "+ 995 kr." : "Indgår i prisen"}
                      </span>
                    </label>
                  );
                })}
              </div>
            </>
          )}

          <h2 style={s.h2}>{base ? 5 : 3}. Tilvalg <span style={{ fontWeight: 400, fontSize: "16px", color: "#7a8f99" }}>(valgfrit)</span></h2>
          <div style={{ display: "grid", gap: "12px", marginBottom: "48px" }}>
            {ADDONS.filter((addon) => relevant(addon, base)).map((addon) => {
              const selected = !!addons[addon.id];
              const qty = addons[addon.id] || 1;
              return (
                <div key={addon.id} style={{ background: "#fff", border: "1px solid #e0dcd6", borderRadius: "3px", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", flex: 1 }}>
                    <input type="checkbox" checked={selected} onChange={() => toggleAddon(addon.id, "quantity" in addon)} />
                    <span>
                      {addon.label}
                      {"note" in addon && <span style={{ display: "block", fontSize: "13px", color: "#5a7a6a", marginTop: "4px" }}>{addon.note}</span>}
                    </span>
                  </label>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    {selected && "quantity" in addon && (
                      <input type="number" min={1} value={qty} onChange={(e) => setQty(addon.id, Number(e.target.value))} style={{ width: "70px", padding: "6px 8px", border: "1px solid #e0dcd6", borderRadius: "3px" }} />
                    )}
                    <span style={{ fontWeight: 600, color: "#3D6B4F", minWidth: "90px", textAlign: "right" }}>
                      {`${"fra" in addon && !selected ? "Fra " : "ca" in addon ? "Ca. " : ""}${(addon.price * (selected ? qty : 1)).toLocaleString("da-DK")} kr.`}
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
                Inkluderer det, der står i pakken, og de tilvalg, I har valgt. Alle priser er inkl. moms og gælder hverdage.
              </p>
              <p style={{ ...s.body, fontSize: "14px", color: "#5a7a6a", maxWidth: "560px", margin: "0 auto" }}>
                Oveni kommer krematorium, gravsted og eventuel kapelleje, som kommunen eller kirken fastsætter. Disse beløb er ikke med i overslaget.
              </p>
              <p style={{ ...s.body, fontSize: "14px", color: "#5a7a6a", maxWidth: "560px", margin: "12px auto 0" }}>
                Kørslen er regnet ud fra jeres valg. Antal kørsler og afstand bekræfter jeg, når forløbet er kendt.
              </p>
              {!!addons["efter-16"] && (
                <p style={{ ...s.body, fontSize: "14px", color: "#5a7a6a", maxWidth: "560px", margin: "12px auto 0" }}>
                  Afdøde kan ofte blive, hvor vedkommende er, til næste morgen – så bortfalder tillægget på 800 kr.
                </p>
              )}
              <p style={{ ...s.body, fontSize: "15px", marginTop: "24px", fontStyle: "italic" }}>
                Der ligger meget koordinering og planlægning bag en afsked. Jeg sørger for, at I ikke selv skal holde styr på tider, kontakter og praktiske detaljer. I taler med mig hele vejen.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginTop: "28px" }}>
                <a href="#prisanmodning" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "16px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>Send mig prisen og ring mig op</a>
                <a href="tel:+4528146011" style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "16px", padding: "14px 28px", borderRadius: "3px", textDecoration: "none", border: "1.5px solid #b0b8bc" }}>Ring til mig på 28 14 60 11</a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="prisanmodning" style={{ background: "#F9F8F6", padding: "80px 32px", scrollMarginTop: "16px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>Uforpligtende</p>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0", textAlign: "center" }}>Send mig prisen og ring mig op</h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", textAlign: "center", maxWidth: "500px", margin: "0 auto 32px" }}>
            Jeres overslag fra beregneren følger automatisk med. I skal kun skrive, hvem jeg skal ringe til, og hvornår det passer.
          </p>
          {base && (
            <div style={{ background: "#fff", border: "1px solid #3D6B4F", borderRadius: "3px", padding: "16px 20px", marginBottom: "28px", fontFamily: "'Open Sans', sans-serif" }}>
              <p style={{ fontWeight: 700, fontSize: "15px", color: "#2F3E46", margin: "0 0 4px" }}>{BASE_TITLER[base]} – vejledende pris {kr(total)}</p>
              <p style={{ fontSize: "14px", color: "#5a7a6a", margin: 0 }}>Hele overslaget med kiste, urne, kørsel, møde og tilvalg sendes med.</p>
            </div>
          )}
          {!base && (
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: "#5a7a6a", textAlign: "center", margin: "0 0 24px" }}>
              Vælg først en pakke i beregneren ovenfor – eller i feltet «Valgt pakke» herunder.
            </p>
          )}
          <ContactForm
            variant="prisanmodning"
            idPrefix="prisanmodning"
            pakke={base}
            onPakkeChange={(p: PakkeNoegle) => { setBase(p); setKiste(null); }}
            overslag={lavOverslag}
            vejledendePris={base ? total : undefined}
          />
          <div style={{ marginTop: "36px", paddingTop: "28px", borderTop: "1px solid #e0dcd6", textAlign: "center", fontFamily: "'Open Sans', sans-serif" }}>
            <p style={{ fontSize: "15px", color: "#3d4f5a", margin: "0 0 14px" }}>Vil I hellere bare ringes op – uden overslag?</p>
            <RingMigOpKnap style={{ background: "transparent", color: "#2F3E46", border: "1.5px solid #b0b8bc", borderRadius: "3px", padding: "12px 24px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px" }} />
            <p style={{ marginTop: "18px", fontSize: "14px", color: "#3D6B4F" }}>
              eller ring direkte på <a href="tel:+4528146011" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>28 14 60 11</a>
            </p>
          </div>
        </div>
      </section>

      <footer style={{ background: "#2F3E46", color: "#ffffff", textAlign: "center", padding: "80px 32px" }}>
        <p style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 26px)", marginBottom: "16px", letterSpacing: "0.02em" }}>Bedemand København og Nordsjælland</p>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.6vw, 18px)", color: "rgba(255,255,255,0.82)", marginBottom: "16px", letterSpacing: "0.03em" }}>Kim Bondo</p>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.82)", marginBottom: "32px", lineHeight: 1.7 }}>Vandtårnsvej 62A, kontor 11, 2860 Søborg</p>
        <a href="/#kontakt" style={{ display: "inline-block", background: "#3D6B4F", color: "#ffffff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "clamp(15px, 1.8vw, 18px)", padding: "18px 40px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.05em", marginBottom: "48px" }}>Kontakt mig</a>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.78)", marginTop: "16px" }}>
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, kontor 11, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a href="tel:+4528146011" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>Tlf.: 28 14 60 11</a>
          {" "}&nbsp;·&nbsp;{" "}
          <a href="mailto:kim@bedemandkobenhavn.dk" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>kim@bedemandkobenhavn.dk</a>
          {" "}&nbsp;·&nbsp; CVR.: 45084159
          {" "}&nbsp;·&nbsp;{" "}
          <a href="/min-sidste-vilje/" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>Min Sidste Vilje</a>
          {" "}&nbsp;·&nbsp;{" "}
          <a href="/persondatapolitik/" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>Persondatapolitik</a>
          {" "}·{" "}<CookieLink />
        </p>
      </footer>
    </div>
  );
}
