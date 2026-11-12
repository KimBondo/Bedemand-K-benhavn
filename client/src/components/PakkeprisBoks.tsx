/**
 * PakkeprisBoks – de tre pakkepriser, ens på alle lokalsider.
 * Priserne hentes fra PAKKEPRISER, så boksen følger med, når en pris rettes i lib/priser.ts.
 * Bruges højt på siden (lige efter hero). Den øvrige tekst på lokalsiderne er unik.
 */
import { PAKKEPRISER, kr } from "@/lib/priser";
import { RingMigOpKnap } from "./RingMigOp";

const PAKKER = [
  {
    navn: "Bisættelse uden ceremoni",
    pris: `${kr(PAKKEPRISER.uden)} kr.`,
    note: "Fast pris for det, der står her. Vælger I mere til, så vil prisen ændre sig.",
    punkter: ["Telefonmøde, mit honorar og papirerne", "Umalet basiskiste, natururne og én kørsel (25 km)"],
  },
  {
    navn: "Begravelse",
    pris: `Fra ${kr(PAKKEPRISER.begravelse)} kr.`,
    punkter: ["Telefonmøde, mit honorar, klassisk hvid kiste og én kørsel", "Jeg er selv til stede ved højtideligheden"],
  },
  {
    navn: "Bisættelse med ceremoni",
    pris: `Fra ${kr(PAKKEPRISER.bisaettelse)} kr.`,
    punkter: ["Det samme som begravelse, plus natururne", "Kontakt til krematoriet og to kørsler"],
  },
];

const link: React.CSSProperties = { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px", fontWeight: 600 };

export default function PakkeprisBoks() {
  return (
    <section aria-labelledby="pakkepriser-titel" style={{ background: "#fff", padding: "48px 24px", borderTop: "1px solid #ede9e4", borderBottom: "1px solid #ede9e4" }}>
      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <h2 id="pakkepriser-titel" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", margin: "0 0 20px", textAlign: "center" }}>
          Mine priser
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {PAKKER.map((p) => (
            <div key={p.navn} style={{ background: "#F9F8F6", border: "1px solid #e0dcd6", borderRadius: "4px", padding: "22px 20px" }}>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D6B4F", margin: "0 0 6px" }}>{p.navn}</p>
              <p style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "24px", color: "#2F3E46", margin: "0 0 10px", whiteSpace: "nowrap" }}>{p.pris}</p>
              {p.note && (
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", lineHeight: 1.6, color: "#5a7a6a", margin: "0 0 10px", fontStyle: "italic" }}>{p.note}</p>
              )}
              <ul style={{ margin: 0, paddingLeft: "18px", fontFamily: "'Open Sans', sans-serif", fontSize: "15px", lineHeight: 1.7, color: "#3d4f5a" }}>
                {p.punkter.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#5a7a6a", margin: "16px 0 0", textAlign: "center" }}>
          Alle priser er inkl. moms og gælder hverdage.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "12px 24px", marginTop: "18px", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
          <a href="/priser/" style={link}>Se, hvad der er med i prisen</a>
          <a href="/prisberegner/" style={link}>Få et vejledende overslag</a>
          <RingMigOpKnap style={{ background: "#3D6B4F", color: "#fff", border: "none", borderRadius: "3px", padding: "12px 22px", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "15px" }} />
        </div>
      </div>
    </section>
  );
}
