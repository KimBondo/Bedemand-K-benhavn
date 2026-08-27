/**
 * SSG Per-route pre-render script — runs after Vite client build.
 *
 * Generates a separate dist/public/<route>/index.html for every route.
 * Each file has:
 *   - Pre-rendered React HTML in <div id="root">
 *   - Correct <title>, <meta description>, <canonical>, og:url hardcoded in <head>
 *
 * Canonical domain: https://www.bedemandkobenhavn.dk (www-form, consistent)
 *
 * Cloudflare Pages serves each route's own HTML file directly.
 * A _redirects file provides SPA fallback for any unknown routes.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST_PUBLIC = path.resolve(ROOT, "dist/public");
const SSR_BUNDLE = path.resolve(ROOT, "dist/server/entry-server.js");
const BASE_URL = "https://www.bedemandkobenhavn.dk";
const DEFAULT_IMAGE = `${BASE_URL}/images/kim-beach-solo_609d5ab7.webp`;

const ROUTES = [
  "/",
  "/priser",
  "/afskeder",
  "/bisaettelse",
  "/begravelse",
  "/afsked-uden-ceremoni",
  "/askespredning",
  "/kirkelig-afsked",
  "/borgerlig-afsked",
  "/huskeliste",
  "/begravelseshjaelp",
  "/omraade",
  "/hvad-koster-en-begravelse",
  "/helsingor",
  "/horsholm",
  "/gentofte",
  "/lyngby",
  "/hillerod",
  "/kobenhavn",
  "/faq",
  "/nordsjaelland",
  "/frederiksberg",
  "/amager",
  "/osterbro",
  "/norrebro",
  "/vesterbro",
  "/produkter",
  "/om-kim",
  "/persondatapolitik",
];

const ROUTE_META = {
  "/": {
    title: "Bedemand Kim Bondo \u2013 K\u00f8benhavn og Nordsj\u00e6lland",
    description: "Personlig bedemand med n\u00e6rv\u00e6r og ro. Bis\u00e6ttelse fra 19.500 kr., begravelse fra 21.500 kr. Gennemsigtige priser. Ring 22 21 14 37 \u2013 d\u00f8gnet rundt.",
  },
  "/priser": {
    title: "Priser \u2013 Bedemand Kim Bondo fra 13.550 kr.",
    description: "Se alle priser for bis\u00e6ttelse, begravelse og afsked uden ceremoni. Ingen skjulte gebyrer. Bis\u00e6ttelse fra 19.500 kr., begravelse fra 21.500 kr.",
  },
  "/afskeder": {
    title: "Typer af afskeder \u2013 Bedemand Kim Bondo",
    description: "Oversigt over alle typer afskeder: bis\u00e6ttelse, begravelse, borgerlig afsked, kirkelig afsked og afsked uden ceremoni. Kim Bondo hj\u00e6lper dig med at v\u00e6lge.",
  },
  "/bisaettelse": {
    title: "Bis\u00e6ttelse i K\u00f8benhavn \u2013 Bedemand Kim Bondo fra 19.500 kr.",
    description: "Personlig bis\u00e6ttelse i K\u00f8benhavn og Nordsj\u00e6lland fra 19.500 kr. Kim Bondo er med jer hele vejen \u2013 fra f\u00f8rste opkald til den sidste afsked.",
  },
  "/begravelse": {
    title: "Begravelse i K\u00f8benhavn \u2013 Bedemand Kim Bondo fra 21.500 kr.",
    description: "Personlig begravelse i K\u00f8benhavn og Nordsj\u00e6lland fra 21.500 kr. Kirkeg\u00e5rd, kiste og koordinering \u2013 Kim Bondo tager sig af alt det praktiske.",
  },
  "/afsked-uden-ceremoni": {
    title: "Afsked uden ceremoni \u2013 Bedemand Kim Bondo fra 13.550 kr.",
    description: "En enkel og v\u00e6rdig afsked uden ceremoni fra 13.550 kr. Kremering og urneneds\u00e6ttelse uden offentlig ceremoni \u2013 Kim Bondo hj\u00e6lper jer.",
  },
  "/askespredning": {
    title: "Askespredning i Danmark \u2013 Bedemand Kim Bondo",
    description: "Askespredning til s\u00f8s eller p\u00e5 land i Danmark. Kim Bondo hj\u00e6lper med tilladelse, koordinering og en personlig afskedsceremoni.",
  },
  "/kirkelig-afsked": {
    title: "Kirkelig afsked \u2013 Bedemand Kim Bondo",
    description: "Kirkelig begravelse eller bis\u00e6ttelse med pr\u00e6st og salmer. Kim Bondo koordinerer alt med kirken og s\u00f8rger for en rolig og v\u00e6rdig afsked.",
  },
  "/borgerlig-afsked": {
    title: "Borgerlig afsked \u2013 Bedemand Kim Bondo",
    description: "En personlig afsked uden kirke og pr\u00e6st. Kim Bondo hj\u00e6lper med at skabe en meningsfuld og individuel ceremoni der afspejler den afd\u00f8des liv.",
  },
  "/huskeliste": {
    title: "Huskeliste ved d\u00f8dsfald \u2013 Bedemand Kim Bondo",
    description: "Komplet huskeliste over hvad der skal ordnes ved et d\u00f8dsfald. Kim Bondo guider jer igennem alle praktiske opgaver trin for trin.",
  },
  "/begravelseshjaelp": {
    title: "Begravelseshj\u00e6lp 2026 \u2013 Bedemand Kim Bondo",
    description: "Alt om begravelseshj\u00e6lp fra Udbetaling Danmark 2026. Satser, betingelser og ans\u00f8gning forklaret enkelt. Kim Bondo hj\u00e6lper med ans\u00f8gningen.",
  },
  "/omraade": {
    title: "D\u00e6kningsomr\u00e5de \u2013 Bedemand Kim Bondo",
    description: "Kim Bondo d\u00e6kker hele K\u00f8benhavn og Nordsj\u00e6lland. Se hvilke kommuner og byer der er inden for d\u00e6kningsomr\u00e5det, og ring 22 21 14 37.",
  },
  "/hvad-koster-en-begravelse": {
    title: "Hvad koster en begravelse? Komplet guide 2026 \u2013 Kim Bondo",
    description: "Komplet guide til hvad en begravelse eller bis\u00e6ttelse koster i 2026. Kremering, gravsted, kapelleje og begravelseshj\u00e6lp \u2013 alle priser samlet.",
  },
  "/helsingor": {
    title: "Bedemand Helsing\u00f8r \u2013 Kim Bondo | Personlig hj\u00e6lp i Helsing\u00f8r",
    description: "Personlig bedemand i Helsing\u00f8r og omegn. Kim Bondo hj\u00e6lper med bis\u00e6ttelse og begravelse i Helsing\u00f8r Kommune. Ring 22 21 14 37.",
  },
  "/horsholm": {
    title: "Bedemand H\u00f8rsholm \u2013 Kim Bondo | Personlig hj\u00e6lp i H\u00f8rsholm",
    description: "Personlig bedemand i H\u00f8rsholm og omegn. Kim Bondo hj\u00e6lper med bis\u00e6ttelse og begravelse i H\u00f8rsholm Kommune. Ring 22 21 14 37.",
  },
  "/gentofte": {
    title: "Bedemand Gentofte \u2013 Kim Bondo | Personlig hj\u00e6lp i Gentofte",
    description: "Personlig bedemand i Gentofte og omegn. Kim Bondo hj\u00e6lper med bis\u00e6ttelse og begravelse i Gentofte Kommune. Ring 22 21 14 37.",
  },
  "/lyngby": {
    title: "Bedemand Lyngby \u2013 Kim Bondo | Personlig hj\u00e6lp i Lyngby",
    description: "Personlig bedemand i Lyngby-Taarb\u00e6k. Kim Bondo hj\u00e6lper med bis\u00e6ttelse og begravelse i Lyngby og omegn. Ring 22 21 14 37.",
  },
  "/hillerod": {
    title: "Bedemand Hiller\u00f8d \u2013 Kim Bondo | Personlig hj\u00e6lp i Hiller\u00f8d",
    description: "Personlig bedemand i Hiller\u00f8d og omegn. Kim Bondo hj\u00e6lper med bis\u00e6ttelse og begravelse i Hiller\u00f8d Kommune. Ring 22 21 14 37.",
  },
  "/kobenhavn": {
    title: "Bedemand K\u00f8benhavn \u2013 Kim Bondo | Personlig hj\u00e6lp i K\u00f8benhavn",
    description: "Personlig bedemand i K\u00f8benhavn. Kim Bondo hj\u00e6lper med bis\u00e6ttelse og begravelse i hele K\u00f8benhavns Kommune. Ring 22 21 14 37.",
  },
  "/faq": {
    title: "Ofte stillede sp\u00f8rgsm\u00e5l \u2013 Bedemand Kim Bondo",
    description: "Svar p\u00e5 de mest stillede sp\u00f8rgsm\u00e5l om bis\u00e6ttelse, begravelse, priser og praktiske forhold. Kim Bondo svarer \u00e6rligt og direkte.",
  },
  "/nordsjaelland": {
    title: "Bedemand Nordsj\u00e6lland \u2013 Kim Bondo | Personlig hj\u00e6lp",
    description: "Personlig bedemand i hele Nordsj\u00e6lland. Kim Bondo d\u00e6kker Helsing\u00f8r, Hiller\u00f8d, H\u00f8rsholm, Gentofte, Lyngby og omegn. Ring 22 21 14 37.",
  },
  "/frederiksberg": {
    title: "Bedemand Frederiksberg \u2013 Kim Bondo | Personlig hj\u00e6lp",
    description: "Personlig bedemand p\u00e5 Frederiksberg. Kim Bondo hj\u00e6lper med bis\u00e6ttelse og begravelse p\u00e5 Frederiksberg. Ring 22 21 14 37.",
  },
  "/amager": {
    title: "Bedemand Amager \u2013 Kim Bondo | Personlig hj\u00e6lp p\u00e5 Amager",
    description: "Personlig bedemand p\u00e5 Amager. Kim Bondo hj\u00e6lper med bis\u00e6ttelse og begravelse p\u00e5 Amager og i Kastrup. Ring 22 21 14 37.",
  },
  "/osterbro": {
    title: "Bedemand \u00d8sterbro \u2013 Kim Bondo | Personlig hj\u00e6lp p\u00e5 \u00d8sterbro",
    description: "Personlig bedemand p\u00e5 \u00d8sterbro. Kim Bondo hj\u00e6lper med bis\u00e6ttelse og begravelse p\u00e5 \u00d8sterbro i K\u00f8benhavn. Ring 22 21 14 37.",
  },
  "/norrebro": {
    title: "Bedemand N\u00f8rrebro \u2013 Kim Bondo | Personlig hj\u00e6lp p\u00e5 N\u00f8rrebro",
    description: "Personlig bedemand p\u00e5 N\u00f8rrebro. Kim Bondo hj\u00e6lper med bis\u00e6ttelse og begravelse p\u00e5 N\u00f8rrebro i K\u00f8benhavn. Ring 22 21 14 37.",
  },
  "/vesterbro": {
    title: "Bedemand Vesterbro \u2013 Kim Bondo | Personlig hj\u00e6lp",
    description: "Personlig bedemand p\u00e5 Vesterbro. Kim Bondo hj\u00e6lper med bis\u00e6ttelse og begravelse p\u00e5 Vesterbro i K\u00f8benhavn. Ring 22 21 14 37.",
  },
  "/produkter": {
    title: "Kister og urner \u2013 Bedemand Kim Bondo",
    description: "Se udvalget af kister og urner med \u00e5bne priser. Klassiske og naturlige materialer. Kim Bondo hj\u00e6lper med at v\u00e6lge det rigtige.",
  },
  "/om-kim": {
    title: "Om Kim Bondo \u2013 Personlig bedemand i K\u00f8benhavn",
    description: "L\u00e6r Kim Bondo at kende. Bedemand med hjerte, n\u00e6rv\u00e6r og spirituel forankring. Kim hj\u00e6lper familier i sorg med ro og omsorg.",
  },
  "/persondatapolitik": {
    title: "Persondatapolitik \u2013 Bedemand Kim Bondo",
    description: "S\u00e5dan behandler Bedemand K\u00f8benhavn ApS dine personoplysninger: kontaktformular, kundeforhold, cookies, opbevaring og dine rettigheder efter GDPR.",
  },
};

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Inject per-route metadata directly into the HTML template's <head>.
 * ALL values are hardcoded — no JavaScript needed by crawlers.
 */
function injectMetaIntoHtml(html, route) {
  const meta = ROUTE_META[route];
  if (!meta) return html;

  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const image = escapeHtml(meta.image ?? DEFAULT_IMAGE);
  // Canonical: forsiden = https://www.bedemandkobenhavn.dk (ingen trailing slash)
  // Undersider = https://www.bedemandkobenhavn.dk/ (med trailing slash — matcher Cloudflare Pages 308-redirect)
  const canonicalUrl = route === "/" ? BASE_URL : `${BASE_URL}${route}/`;
  const url = escapeHtml(canonicalUrl);

  let out = html;

  // Replace <title>
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  // Replace meta description (first occurrence)
  out = out.replace(
    /<meta\s+name="description"[^>]*\/?>/,
    `<meta name="description" content="${description}" />`
  );

  // Replace canonical link
  out = out.replace(
    /<link\s+rel="canonical"[^>]*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );

  // Replace og:title
  out = out.replace(
    /<meta\s+property="og:title"[^>]*\/?>/,
    `<meta property="og:title" content="${title}" />`
  );

  // Replace og:description
  out = out.replace(
    /<meta\s+property="og:description"[^>]*\/?>/,
    `<meta property="og:description" content="${description}" />`
  );

  // Replace og:url
  out = out.replace(
    /<meta\s+property="og:url"[^>]*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );

  // Replace og:image
  out = out.replace(
    /<meta\s+property="og:image"[^>]*\/?>/,
    `<meta property="og:image" content="${image}" />`
  );

  // Replace twitter:title
  out = out.replace(
    /<meta\s+name="twitter:title"[^>]*\/?>/,
    `<meta name="twitter:title" content="${title}" />`
  );

  // Replace twitter:description
  out = out.replace(
    /<meta\s+name="twitter:description"[^>]*\/?>/,
    `<meta name="twitter:description" content="${description}" />`
  );

  return out;
}

async function main() {
  console.log("🔨 SSG per-route pre-render starting...");

  if (!fs.existsSync(SSR_BUNDLE)) {
    console.error("❌ SSR bundle not found at", SSR_BUNDLE);
    process.exit(1);
  }
  const { render } = await import(pathToFileURL(SSR_BUNDLE).href);

  const templatePath = path.join(DIST_PUBLIC, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("❌ dist/public/index.html not found");
    process.exit(1);
  }
  // Read the original Vite-generated template ONCE — never overwrite it mid-loop
  const template = fs.readFileSync(templatePath, "utf-8");

  let ok = 0;
  let fail = 0;

  for (const route of ROUTES) {
    try {
      // 1. Render React HTML for this route
      const appHtml = render(route);

      // 2. Inject rendered content into root div
      let html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // 3. Inject per-route metadata hardcoded into <head>
      html = injectMetaIntoHtml(html, route);

      // 4. Determine output path
      let outPath;
      if (route === "/") {
        outPath = path.join(DIST_PUBLIC, "index.html");
      } else {
        // / → dist/public/index.html
        const dir = path.join(DIST_PUBLIC, route);
        fs.mkdirSync(dir, { recursive: true });
        outPath = path.join(dir, "index.html");
      }

      fs.writeFileSync(outPath, html, "utf-8");

      // 5. Verify the output has correct title and canonical
      const written = fs.readFileSync(outPath, "utf-8");
      const titleMatch = written.match(/<title>([^<]*)<\/title>/);
      const canonicalMatch = written.match(/<link rel="canonical" href="([^"]*)"[^>]*>/);
      const h1Count = (written.match(/<h1/g) || []).length;
      console.log(`  ✅ ${route}`);
      console.log(`     title: ${titleMatch ? titleMatch[1] : "MISSING"}`);
      console.log(`     canonical: ${canonicalMatch ? canonicalMatch[1] : "MISSING"}`);
      console.log(`     h1: ${h1Count}`);
      ok++;
    } catch (err) {
      console.error(`  ❌ ${route} — ${err.message}`);
      fail++;
    }
  }

  // Kopier _redirects fra client/public — dér ligger sandheden om viderestillinger.
  // (Tidligere overskrev dette trin filen med kun SPA-fallback og slettede 301'erne.)
  const redirectsPath = path.join(DIST_PUBLIC, "_redirects");
  const redirectsKilde = path.resolve(ROOT, "client/public/_redirects");
  const redirectsIndhold = fs.existsSync(redirectsKilde)
    ? fs.readFileSync(redirectsKilde, "utf-8")
    : "/*    /index.html   200\n";
  fs.writeFileSync(redirectsPath, redirectsIndhold, "utf-8");

  console.log(`\n✅ Per-route SSG complete`);
  console.log(`   Routes: ${ok} ok, ${fail} failed`);
  if (fail > 0) process.exit(1);
}

main();
