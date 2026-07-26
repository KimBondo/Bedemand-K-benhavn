# Lighthouse Audit Resultater — bedemandkobenhavn.dk
Dato: 2026-07-26

## Scores
- Performance: 36
- Accessibility: 92
- Best Practices: 82
- SEO: 100

## Kritiske fund

### LCP (Largest Contentful Paint): 39.2s — KRITISK
- LCP-elementet er Marie Thjellesen's portræt (Home.tsx linje 274)
- Billedet har `loading="lazy"` — det er FORKERT for LCP-billedet
- Load Delay udgør 91% af LCP-tiden (35.5s)
- Billedet serveres fra CloudFront CDN med signeret URL
- Fix: Fjern `loading="lazy"` fra Marie-billedet, tilføj `fetchPriority="high"`

### Server Response Time: 1,570ms — KRITISK
- TTFB er for høj (2,869ms)
- Skyldes primært Manus-hosting (serverless cold start)
- Ikke direkte redigerbar fra koden

### Third-party blocking: 1,400ms — KRITISK
- manuscdn.com blokerer main thread i 1,404ms
- Dette er Manus's egen CDN/editor-script (spaceEditor)
- Ikke redigerbart fra koden

### Render-blocking resources: 1,660ms besparelse
- Google Fonts CSS blokerer rendering
- Fix: Tilføj `media="print" onload="this.media='all'"` pattern for non-blocking fonts

### Unused JavaScript: 253 KiB
- index-BnwL7kTo.js: 132 KiB ubrugt
- Forsiden: 64 KiB ubrugt
- Manus editor script: 62 KiB ubrugt
- Fix: Code splitting er allerede aktivt via Vite; editor-script er ikke redigerbart

### Modern image formats: 455 KiB besparelse
- Marie-portræt (JPEG) kan konverteres til WebP/AVIF
- Besparelse: 465 KiB
- Fix: Billedet er hostet på CloudFront — ikke direkte redigerbart

### Color contrast fejl (Home.tsx)
- Linje 329: "BEDEMAND" label (12px, 600 weight) — grøn tekst på hvid baggrund
- Linje 377: Kontaktinfo tekst (14px) — for lav kontrast
- Linje 391: Ring-knap link — for lav kontrast
- Fix: Mørk farve på disse elementer

### Heading order fejl (Home.tsx)
- Linje 316: H3 bruges (Marie/Kim navne) — men dette er nu rettet til H2 i seneste checkpoint
- Lighthouse auditerede en ældre version — forventeligt løst

### lcp-lazy-loaded
- Marie-billedet har loading="lazy" men er LCP-element
- Fix: Fjern lazy loading fra dette billede

## Hvad der KAN fixes i koden
1. Marie-billedet: fjern loading="lazy", tilføj fetchPriority="high"
2. Color contrast på Home.tsx linje 329, 377, 391
3. Google Fonts: non-blocking load pattern

## Hvad der IKKE kan fixes fra koden
- Server response time (TTFB) — Manus serverless hosting
- Third-party blocking fra manuscdn.com editor-script
- CloudFront CDN billede-format (JPEG → WebP)
- Unused JS fra Manus editor-script
