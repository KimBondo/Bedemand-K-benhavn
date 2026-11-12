/**
 * Pakkepriserne ét sted. Bruges af schema (Offer-priser) og prisberegneren.
 * Ændres en pris her, skal de synlige tekster på siderne rettes tilsvarende.
 */
export const PAKKEPRISER = {
  uden: 9995,          // Bisættelse uden ceremoni – fast pris
  bisaettelse: 14995,  // Bisættelse med ceremoni – fra-pris
  begravelse: 13495,   // Begravelse – fra-pris
} as const;

/** 14995 → "14.995" */
export function kr(beloeb: number) {
  return beloeb.toLocaleString("da-DK");
}
