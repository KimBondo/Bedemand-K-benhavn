/**
 * Pakkepriserne ét sted. Bruges af schema (Offer-priser) og prisberegneren.
 * Ændres en pris her, skal de synlige tekster på siderne rettes tilsvarende.
 */
export const PAKKEPRISER = {
  uden: 13550,
  bisaettelse: 18300,
  begravelse: 19300,
} as const;

/** 18300 → "18.300" */
export function kr(beloeb: number) {
  return beloeb.toLocaleString("da-DK");
}
