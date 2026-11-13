/**
 * Kørselspriser – ét sted, så prisberegneren og den interne km-beregner bruger de samme tal.
 *
 * Der regnes kun den strækning, hvor afdøde er med i rustvognen (fra afhentningsstedet til
 * kapel, kirke eller krematorium). Kims egen kørsel til og fra Søborg tæller ikke med.
 */
export const KOERSEL_PRIS = 1595; // én rustvognskørsel inkl. de første 25 km med afdøde
export const KM_INKL = 25;
export const KM_PRIS = 35; // pr. km derefter, kun den ene vej, ad den billigste rute
export const KOERSEL_LOFT = 2000; // højst pr. kørsel i København og Nordsjælland

/** Prisen for én kørsel ud fra km med afdøde (den ene vej), og om loftet gælder. */
export function prisPrKoersel(km: number, medLoft: boolean) {
  const pris = KOERSEL_PRIS + Math.max(0, Math.round(km) - KM_INKL) * KM_PRIS;
  return medLoft ? Math.min(pris, KOERSEL_LOFT) : pris;
}
