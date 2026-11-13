/**
 * /intern/koersel/ – Kims interne km-beregner. Kun til Kim.
 *
 * - Beskyttes med Cloudflare Access (sti /intern/*), og functions/intern/_middleware.js
 *   svarer 404, hvis anmodningen ikke kommer gennem Access.
 * - noindex, nofollow. Står ikke i navigation, sitemap eller llms.txt.
 * - Gemmer intet og sender intet. Ingen personoplysninger.
 * - Regner med de samme tal som prisberegneren (lib/koersel.ts).
 */
import { useState } from "react";
import SEO from "@/components/SEO";
import { KOERSEL_PRIS, KM_INKL, KM_PRIS, KOERSEL_LOFT, prisPrKoersel } from "@/lib/koersel";

const kr = (n: number) => `${n.toLocaleString("da-DK")} kr.`;
const felt: React.CSSProperties = { width: "110px", padding: "8px 10px", border: "1px solid #c9c3bb", borderRadius: "3px", fontSize: "16px" };

export default function KimInternKoersel() {
  const [antal, setAntal] = useState(1);
  const [km, setKm] = useState<string[]>(["", "", "", "", "", ""]);
  const [medLoft, setMedLoft] = useState(true);

  const kmTal = (i: number) => Math.max(0, Number((km[i] || "").replace(",", ".")) || 0);
  const linjer = Array.from({ length: antal }, (_, i) => {
    const pris = prisPrKoersel(kmTal(i), medLoft);
    return { nr: i + 1, km: kmTal(i), pris, tillaeg: pris - KOERSEL_PRIS };
  });
  const tillaegIalt = linjer.reduce((s, l) => s + l.tillaeg, 0);
  const ialt = linjer.reduce((s, l) => s + l.pris, 0);

  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", minHeight: "100vh", padding: "32px 16px 120px" }}>
      <SEO title="Intern km-beregner" description="Intern side." noindex />
      <div style={{ maxWidth: "620px", margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Lora', serif", fontSize: "26px", margin: "0 0 8px" }}>Intern km-beregner</h1>
        <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#5a7a6a", margin: "0 0 24px" }}>
          Kun strækningen med afdøde i rustvognen. {kr(KOERSEL_PRIS)} pr. kørsel inkl. {KM_INKL} km, derefter {KM_PRIS} kr. pr. km (den ene vej, billigste rute). Loft {kr(KOERSEL_LOFT)} pr. kørsel i København og Nordsjælland. Siden gemmer og sender intet.
        </p>

        <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", background: "#fff", border: "1px solid #e0dcd6", borderRadius: "3px", padding: "14px 16px", marginBottom: "12px" }}>
          <span>Antal kørsler</span>
          <select id="antal" value={antal} onChange={(e) => setAntal(Number(e.target.value))} style={felt}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>

        {linjer.map((l, i) => (
          <label key={l.nr} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", background: "#fff", border: "1px solid #e0dcd6", borderRadius: "3px", padding: "14px 16px", marginBottom: "12px" }}>
            <span>Kørsel {l.nr}: km med afdøde</span>
            <input
              id={`km-${l.nr}`}
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="fx 30"
              value={km[i]}
              onChange={(e) => setKm((k) => k.map((v, j) => (j === i ? e.target.value : v)))}
              style={felt}
            />
          </label>
        ))}

        <label style={{ display: "flex", alignItems: "center", gap: "12px", background: "#fff", border: "1px solid #e0dcd6", borderRadius: "3px", padding: "14px 16px", marginBottom: "24px", cursor: "pointer" }}>
          <input id="loft" type="checkbox" checked={medLoft} onChange={(e) => setMedLoft(e.target.checked)} />
          <span>Inden for København og Nordsjælland (loft {kr(KOERSEL_LOFT)})</span>
        </label>

        <table id="resultat" style={{ width: "100%", borderCollapse: "collapse", background: "#fff", border: "1px solid #e0dcd6", fontSize: "15px" }}>
          <thead>
            <tr style={{ background: "#f0f7f3", textAlign: "left" }}>
              <th style={{ padding: "10px 12px" }}>Kørsel</th>
              <th style={{ padding: "10px 12px" }}>Km</th>
              <th style={{ padding: "10px 12px", textAlign: "right" }}>Km-tillæg</th>
              <th style={{ padding: "10px 12px", textAlign: "right" }}>Pris</th>
            </tr>
          </thead>
          <tbody>
            {linjer.map((l) => (
              <tr key={l.nr} style={{ borderTop: "1px solid #ede9e4" }}>
                <td style={{ padding: "10px 12px" }}>{l.nr}</td>
                <td style={{ padding: "10px 12px" }}>{l.km}</td>
                <td style={{ padding: "10px 12px", textAlign: "right" }}>{kr(l.tillaeg)}</td>
                <td data-pris={l.pris} style={{ padding: "10px 12px", textAlign: "right" }}>{kr(l.pris)}</td>
              </tr>
            ))}
            <tr style={{ borderTop: "2px solid #3D6B4F", fontWeight: 700 }}>
              <td style={{ padding: "10px 12px" }} colSpan={2}>Kørsel i alt</td>
              <td id="tillaeg-ialt" style={{ padding: "10px 12px", textAlign: "right" }}>{kr(tillaegIalt)}</td>
              <td id="ialt" style={{ padding: "10px 12px", textAlign: "right" }}>{kr(ialt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
