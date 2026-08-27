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
  "/afsked-uden-ceremoni": {
    title: "Afsked uden ceremoni \u2013 Bedemand Kim Bondo",
    description: "Enkel afsked uden ceremoni i K\u00f8benhavn. Kremering og urneneds\u00e6ttelse uden kirke. Fra 13.550 kr. Kim Bondo \u2013 ring 22 21 14 37 d\u00f8gnet rundt.",
  },
  "/afskeder": {
    title: "Afskeder og ceremonier \u2013 Bedemand Kim Bondo",
    description: "Kirkelig, borgerlig eller stille afsked i K\u00f8benhavn. Kim Bondo tilrettel\u00e6gger begravelse og bis\u00e6ttelse efter jeres \u00f8nsker. Ring 22 21 14 37.",
  },
  "/amager": {
    title: "Bedemand Amager \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand p\u00e5 Amager, i T\u00e5rnby og Drag\u00f8r. Sundby Krematorium ligger i bydelen. Faste priser og ingen mellemled. Ring 22 21 14 37 \u2014 hele d\u00f8gnet.",
  },
  "/askespredning": {
    title: "Askespredning \u2013 Bedemand Kim Bondo, K\u00f8benhavn",
    description: "Askespredning til s\u00f8s eller p\u00e5 land i Danmark. Kim Bondo hj\u00e6lper med tilladelse og ceremoni. Ring 22 21 14 37 \u2013 d\u00f8gnet rundt.",
  },
  "/begravelse": {
    title: "Begravelse i K\u00f8benhavn \u2013 Bedemand Kim Bondo",
    description: "Personlig hj\u00e6lp til begravelse i K\u00f8benhavn og Nordsj\u00e6lland. Jeg koordinerer kiste, kirkeg\u00e5rd og ceremoni. Ring 22 21 14 37.",
  },
  "/begravelseshjaelp": {
    title: "Begravelseshj\u00e6lp \u2013 s\u00f8g tilskud, Kim Bondo",
    description: "F\u00e5 hj\u00e6lp til at s\u00f8ge begravelseshj\u00e6lp fra det offentlige. Tilskud fra 1.050\u201313.550 kr. Kim Bondo guider jer igennem ans\u00f8gningen. Ring 22 21 14 37.",
  },
  "/bisaettelse": {
    title: "Bis\u00e6ttelse i K\u00f8benhavn \u2013 Bedemand Kim Bondo",
    description: "Personlig hj\u00e6lp til bis\u00e6ttelse i K\u00f8benhavn og Nordsj\u00e6lland. Kim Bondo tager sig af alt det praktiske. Ring 22 21 14 37 \u2013 d\u00f8gnet rundt.",
  },
  "/borgerlig-afsked": {
    title: "Borgerlig afsked \u2013 Bedemand Kim Bondo",
    description: "Borgerlig begravelse eller bis\u00e6ttelse uden kirke i K\u00f8benhavn. Kim Bondo hj\u00e6lper med ceremoni, kapel og alt praktisk. Ring 22 21 14 37.",
  },
  "/faq": {
    title: "FAQ \u2013 Begravelse og bis\u00e6ttelse, Kim Bondo",
    description: "Svar p\u00e5 de mest stillede sp\u00f8rgsm\u00e5l om begravelse, bis\u00e6ttelse, priser og begravelseshj\u00e6lp. Kim Bondo bedemand i K\u00f8benhavn. Ring 22 21 14 37.",
  },
  "/frederiksberg": {
    title: "Bedemand Frederiksberg \u2013 Kim Bondo",
    description: "Personlig bedemand p\u00e5 Frederiksberg. S\u00f8ndermark Krematorium og kommunens tre kirkeg\u00e5rde. Faste priser og ingen mellemled. Ring 22 21 14 37 \u2014 hele d\u00f8gnet.",
  },
  "/gentofte": {
    title: "Bedemand Gentofte \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Gentofte, Hellerup, Charlottenlund og Vangede. Ceremoni i Mariebjergs kapeller. Ring 22 21 14 37 \u2014 hele d\u00f8gnet.",
  },
  "/helsingor": {
    title: "Bedemand Helsing\u00f8r \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Helsing\u00f8r, Snekkersten, Esperg\u00e6rde og Hornb\u00e6k. Faste priser og ingen mellemled. Ring 22 21 14 37 \u2014 hele d\u00f8gnet.",
  },
  "/hillerod": {
    title: "Bedemand Hiller\u00f8d \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Hiller\u00f8d og omegn. Nordsj\u00e6llands eneste krematorium ligger her. Faste priser. Ring 22 21 14 37 \u2014 hele d\u00f8gnet.",
  },
  "/horsholm": {
    title: "Bedemand H\u00f8rsholm \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i H\u00f8rsholm, Rungsted og Kokkedal. Kapellet p\u00e5 H\u00f8rsholm Kirkeg\u00e5rd kan benyttes af alle. Ring 22 21 14 37 \u2014 hele d\u00f8gnet.",
  },
  "/huskeliste": {
    title: "Huskeliste ved d\u00f8dsfald \u2013 Bedemand Kim Bondo",
    description: "Hvad skal du g\u00f8re, n\u00e5r en n\u00e6rtst\u00e5ende d\u00f8r? Kim Bondos trin-for-trin huskeliste hj\u00e6lper dig i den sv\u00e6re tid. Ring 22 21 14 37.",
  },
  "/hvad-koster-en-begravelse": {
    title: "Hvad koster en begravelse i 2026? Alle udgifter samlet",
    description: "Alle udgifter ved en afsked i 2026: bedemand, kremering, gravsted, kapelleje og begravelseshj\u00e6lp \u2014 med officielle takster for K\u00f8benhavn og Nordsj\u00e6lland.",
  },
  "/kirkelig-afsked": {
    title: "Kirkelig afsked \u2013 Bedemand Kim Bondo",
    description: "Kirkelig begravelse eller bis\u00e6ttelse med pr\u00e6st i K\u00f8benhavn. Jeg koordinerer kirke, kordegn og hele forl\u00f8bet. Ring 22 21 14 37.",
  },
  "/kobenhavn": {
    title: "Bedemand K\u00f8benhavn \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i hele K\u00f8benhavn. Faste priser, ingen mellemled, og jeg k\u00f8rer selv ud \u2014 ogs\u00e5 om natten. Ring 22 21 14 37.",
  },
  "/lyngby": {
    title: "Bedemand Lyngby \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Lyngby, Virum, Sorgenfri og Taarb\u00e6k. Faste priser og ingen mellemled. Ring 22 21 14 37 \u2014 hele d\u00f8gnet.",
  },
  "/nordsjaelland": {
    title: "Bedemand Nordsj\u00e6lland \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i hele Nordsj\u00e6lland \u2014 fra Gentofte og Lyngby til Hiller\u00f8d og Helsing\u00f8r. Faste priser. Ring 22 21 14 37 \u2014 hele d\u00f8gnet.",
  },
  "/norrebro": {
    title: "Bedemand N\u00f8rrebro \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand p\u00e5 N\u00f8rrebro. Assistens Kirkeg\u00e5rd ligger midt i bydelen. Faste priser og ingen mellemled. Ring 22 21 14 37 \u2014 hele d\u00f8gnet.",
  },
  "/om-kim": {
    title: "Om Kim Bondo \u2013 Personlig bedemand, K\u00f8benhavn",
    description: "M\u00f8d Kim Bondo \u2013 selvst\u00e6ndig bedemand med n\u00e6rv\u00e6r og ro. Hj\u00e6lper familier i sorg i K\u00f8benhavn og Nordsj\u00e6lland. Ring 22 21 14 37.",
  },
  "/omraade": {
    title: "D\u00e6kningsomr\u00e5de \u2013 Bedemand Kim Bondo",
    description: "Kim Bondo d\u00e6kker K\u00f8benhavn og Nordsj\u00e6lland \u2013 Helsing\u00f8r, Hiller\u00f8d, Gentofte, Lyngby og hele Stork\u00f8benhavn. Ring 22 21 14 37 \u2013 d\u00f8gnet rundt.",
  },
  "/osterbro": {
    title: "Bedemand \u00d8sterbro \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand p\u00e5 \u00d8sterbro. Holmens og Garnisons Kirkeg\u00e5rd ligger i bydelen. Faste priser og ingen mellemled. Ring 22 21 14 37 \u2014 hele d\u00f8gnet.",
  },
  "/persondatapolitik": {
    title: "Persondatapolitik \u2013 Bedemand Kim Bondo",
    description: "S\u00e5dan behandler Bedemand K\u00f8benhavn ApS dine personoplysninger: kontaktformular, kundeforhold, cookies, opbevaring og dine rettigheder efter GDPR.",
  },
  "/priser": {
    title: "Priser \u2013 Bedemand Kim Bondo, K\u00f8benhavn",
    description: "Bis\u00e6ttelse fra 19.500 kr., begravelse fra 21.500 kr. Alle enkeltpriser samlet \u00e9t sted. Ingen skjulte gebyrer. Ring 22 21 14 37.",
  },
  "/produkter": {
    title: "Kister og urner \u2013 Bedemand Kim Bondo",
    description: "V\u00e6lg kiste fra 6.000 kr. eller urne fra 950 kr. B\u00e6redygtige og klassiske modeller. Kim Bondo bedemand i K\u00f8benhavn. Ring 22 21 14 37.",
  },
  "/vesterbro": {
    title: "Bedemand Vesterbro \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand p\u00e5 Vesterbro og i Kgs. Enghave. Vestre Kirkeg\u00e5rd og Nordre Kapel ligger i bydelen. Faste priser. Ring 22 21 14 37 \u2014 hele d\u00f8gnet.",
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
  const canonicalUrl = `${BASE_URL}${route === "/" ? "/" : route + "/"}`;
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

  // Byg en rigtig 404-side, så ukendte adresser kan svare 404 i stedet for 200.
  try {
    const ukendtRute = "/denne-side-findes-ikke";
    let html404 = template.replace(
      '<div id="root"></div>',
      `<div id="root">${render(ukendtRute)}</div>`
    );
    html404 = html404
      .replace(/<title>[^<]*<\/title>/, "<title>Siden findes ikke – Bedemand Kim Bondo</title>")
      .replace(
        /<meta\s+name="description"[^>]*\/?>/,
        '<meta name="description" content="Siden findes ikke. Gå til forsiden, eller ring til Kim Bondo på 22 21 14 37." />'
      )
      .replace(/<link\s+rel="canonical"[^>]*\/?>/, "")
      .replace(
        /<meta name="robots" content="[^"]*" \/>/,
        '<meta name="robots" content="noindex, follow" />'
      );
    fs.writeFileSync(path.join(DIST_PUBLIC, "404.html"), html404, "utf-8");
    console.log("  ✅ 404.html");
  } catch (err) {
    console.error("  ❌ 404.html —", err.message);
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
