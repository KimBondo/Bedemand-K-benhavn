# Bedemand København – arbejdsnoter til Claude

Hjemmesiden for **Kim Bondo, Bedemand København ApS** (www.bedemandkobenhavn.dk).
Kim giver opgaver som «arbejdssedler». Læs hele sedlen, lav præcis det, der står, og
rapportér kort og roligt på dansk.

## Arbejdsgang (skal altid følges)

- **Merge og udgiv aldrig, før Kim skriver «udgiv».** Godkendelse til én PR gælder ikke den næste.
- Én ny gren pr. arbejdsseddel fra seneste `main`, og én PR med forhåndsvisning.
  Hold grennavnet kort: Cloudflare forkorter preview-adressen til 28 tegn
  (`claude/kontakt-opkald-2026-11-22` → `claude-kontakt-opkald-2026-1.bedemandkobenhavn.pages.dev`).
  Den sikre adresse står i Cloudflare-tjekket på commit'en (fx `https://a3f12422.bedemandkobenhavn.pages.dev`).
- Tillæg til en PR går på samme gren og samme PR, når Kim beder om det.
- Efter merge: tjek, at Cloudflare melder «Deployed successfully» for merge-commit'en.
- Rapporten til Kim: hvad der er ændret, kontrol-resultater, commit, PR-link og preview-link.
  Nævn ærligt det, der ikke kunne lade sig gøre, og det, du selv har valgt ud over sedlen.
- Står en «find»-tekst ikke præcist i filen, så stop og spørg i stedet for at gætte.

## Byg og test

- `pnpm run check` (tsc) og `pnpm run build` → «Routes: 42 ok, 0 failed» + 404.html.
- Prerender skriver `dist/public/<rute>/index.html`. Test lokalt med `python3 -m http.server` i `dist/public`.
- Meta description står **tre steder**, som skal være ens: `SEO` i siden, `ROUTE_META` i
  `scripts/prerender.mjs` (med `æ`-escapes) og `server/index.ts`. Højst 155 tegn.
- FAQ-JSON-LD bygges af de samme data som den synlige FAQ. Tjek, at de stadig er ens.
- Mobiltest ved 375×667: den store grønne opkaldsknap i hero skal stå over cookie-banneret
  (banneret er 95 px og står over bundbjælken på 56 px).
- Ingen sider må kunne rulles sidelæns ved 320/360/390 px.

## Sprog og tone (Kims stemme)

- Første person om firmaet: **jeg/mig/min** – aldrig «vi» om firmaet («vi» om Kim og familien sammen er fint).
- Familien tiltales **I/jer/jeres** – aldrig «du».
- Varm, rolig, jordnær og konkret. Skriv til mennesker i dyb sorg: tag presset af
  («I behøver ikke …», «i jeres tempo», «når I har overskud til det»), giv lov til ikke at vide,
  og lov aldrig noget, Kim ikke kan holde.
- Tankestreg «–» (ikke «—»). Anførselstegn «».
- Telefon: **28 14 60 11**, i links `tel:+4528146011`. Brug **aldrig** 22 21 14 37.
- Lov ikke, at Kim ringer tilbage inden for en bestemt tid («så hurtigt jeg kan» er fint).

### Ord og formuleringer

- Skriv aldrig: «tro og love», «direkte bisættelse», «billig», «Bornholm».
- «gratis» må ikke bruges om møder eller hjemmebesøg. Telefonmødet er **med i prisen**.
  Et fysisk møde (hjemme eller på kontoret i Søborg) koster **995 kr.** Min Sidste Vilje-hjemmebesøget
  er «**uden beregning**». (Undtagelser, der må blive: «Hent skemaet Min Sidste Vilje gratis» og
  at ceremonien i folkekirken er gratis.)
- «Bisættelse uden ceremoni» – det hedder den overalt.
- «krematorium/kremering» må kun stå om bisættelse uden ceremoni (Kim kører direkte til krematoriet).
  Ellers: «ligbrænding», «bisættes», «asken samles i en urne», «kører kisten videre».
- Lov ikke noget om stedet («holdes lokalt», «jeres egen kirke», «I vælger selv …»).
  Brug: «Sammen finder vi det sted til afskeden, der passer jer bedst.»
- Opdigt aldrig anmeldelser eller citater.

### Fakta, der skal stemme

- Pakkepriser (`client/src/lib/priser.ts`): bisættelse uden ceremoni **9.995 kr.**, begravelse **fra 13.495 kr.**,
  bisættelse med ceremoni **fra 14.995 kr.** Ret aldrig priser uden at Kim beder om det.
- Kørsel: Kim tager kun betaling for strækningen, hvor afdøde er med i rustvognen. 1.595 kr. pr. kørsel
  inkl. de første 25 km med afdøde, derefter 35 kr. pr. km ad den mest økonomiske rute; højst 2.000 kr.
  i København og Nordsjælland, uden loft udenfor. Den offentlige prisberegner har intet km-felt.
- Rustvognskørsler: uden ceremoni og begravelse har som regel én, med ceremoni som regel to.
  Ekstra kørsel 1.595 kr. Lørdag og afhentning uden for hospitalskapel giver som regel en kørsel mere
  – **ikke** ved bisættelse uden ceremoni. Begravelse: en kørsel mere, hvis kirken ikke har egen kirkegård.
- Tillæg 1.200 kr. kun ved afhentning i private hjem. Tillæg 800 kr. pr. udkald efter kl. 16 / weekend gælder kun kørslen.
- Kim er selv til stede ved højtideligheden – det er med i prisen.
- Kim dækker Region Hovedstaden fra København til Nordsjælland (ikke Bornholm).

## Rør ikke (medmindre Kim udtrykkeligt beder om det)

- DNS hos Simply (MX, SPF, DKIM, DMARC), Google Ads, GTM, Consent Mode og samtykkelogikken i `CookieConsent.tsx`.
- `functions/api/prisanmodning.js`'s SMTP-logik og hemmeligheden `SMTP_PASSWORD`. Bed aldrig om adgangskoder,
  og skriv dem aldrig i kode, git, PR'er eller logs.
- Web3Forms-nøglen i `ContactForm.tsx` (offentlig med vilje) og formularens validering/honeypot.
- `KimNav.tsx`, `AnmeldelseBoks.tsx`, `functions/404.js`.
- Ingen personoplysninger i `console.log`, Workers-logs eller dataLayer.

## Struktur

- Sider: `client/src/pages/Kim*.tsx`. Ruter i `client/src/App.tsx` og `client/src/entry-server.tsx`.
- Fælles komponenter: `ContactForm` (varianter default/ringop/priser/prisanmodning), `RingMigOp`, `MobilRingKnap`,
  `PakkeprisBoks` (19 lokalsider), `Anmeldelser`, `KimPortraet`, `CookieConsent`.
- `.hero-opkald` i `client/src/index.css` holder opkaldsknappen over folden på landingssiderne.
- Kontaktsektioner har `id="kontakt"`; knapper på siden peger på `#kontakt`.
