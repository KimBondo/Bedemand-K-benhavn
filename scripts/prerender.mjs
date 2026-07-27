/**
 * SSG Pre-render script — runs after Vite client build.
 *
 * For each of the 29 public routes it:
 *   1. Loads the SSR bundle (dist/server/entry-server.js)
 *   2. Calls render(url) → renderToString HTML
 *   3. Injects the HTML into dist/public/index.html
 *   4. Injects per-route <title>, <meta description>, OG/canonical tags
 *   5. Writes the result to dist/public/<route>/index.html
 *      (the root route is written to dist/public/index.html directly)
 *
 * This produces a fully pre-rendered static site that Cloudflare/Manus can
 * serve without any Node.js runtime — crawlers see full HTML immediately.
 *
 * Hydration: main.tsx uses hydrateRoot() so React attaches event listeners
 * to the pre-rendered HTML without re-rendering. Interactive elements
 * (contact form, navigation, etc.) work normally after hydration.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST_PUBLIC = path.resolve(ROOT, "dist/public");
const SSR_BUNDLE = path.resolve(ROOT, "dist/server/entry-server.js");

const BASE_URL = "https://bedemandkobenhavn.dk";
const DEFAULT_IMAGE = `${BASE_URL}/manus-storage/kim-beach-solo_609d5ab7.png`;

// All 29 public routes — must match sitemap.xml and entry-server.tsx
const ROUTES = [
  "/",
  "/kim-bondo",
  "/kim-bondo/priser",
  "/kim-bondo/afskeder",
  "/kim-bondo/bisaettelse",
  "/kim-bondo/begravelse",
  "/kim-bondo/afsked-uden-ceremoni",
  "/kim-bondo/askespredning",
  "/kim-bondo/kirkelig-afsked",
  "/kim-bondo/borgerlig-afsked",
  "/kim-bondo/huskeliste",
  "/kim-bondo/begravelseshjaelp",
  "/kim-bondo/omraade",
  "/kim-bondo/hvad-koster-en-begravelse",
  "/kim-bondo/helsingor",
  "/kim-bondo/horsholm",
  "/kim-bondo/gentofte",
  "/kim-bondo/lyngby",
  "/kim-bondo/hillerod",
  "/kim-bondo/kobenhavn",
  "/kim-bondo/faq",
  "/kim-bondo/nordsjaelland",
  "/kim-bondo/frederiksberg",
  "/kim-bondo/amager",
  "/kim-bondo/osterbro",
  "/kim-bondo/norrebro",
  "/kim-bondo/vesterbro",
  "/kim-bondo/produkter",
  "/kim-bondo/om-kim",
];

// Per-route meta — mirrors server/index.ts ROUTE_META
const ROUTE_META = {
  "/": {
    title: "Bedemand København og Nordsjælland – Personlig og nærværende hjælp",
    description: "Personlig bedemand i København og Nordsjælland. Bisættelse fra 17.395 kr., begravelse fra 18.500 kr. Nærvær, ro og gennemsigtige priser. Ring 22 21 14 37.",
  },
  "/kim-bondo": {
    title: "Bedemand Kim Bondo – København og Nordsjælland",
    description: "Personlig bedemand med nærvær og ro. Bisættelse fra 17.395 kr., begravelse fra 18.500 kr. Gennemsigtige priser. Ring 22 21 14 37 – døgnet rundt.",
  },
  "/kim-bondo/priser": {
    title: "Priser – Bedemand Kim Bondo | Gennemsigtige priser fra 15.500 kr.",
    description: "Se alle priser for bisættelse, begravelse og afsked uden ceremoni. Ingen skjulte gebyrer. Bisættelse fra 17.395 kr., begravelse fra 18.500 kr.",
  },
  "/kim-bondo/afskeder": {
    title: "Typer af afskeder – Bedemand Kim Bondo",
    description: "Oversigt over alle typer afskeder: bisættelse, begravelse, borgerlig afsked, kirkelig afsked og afsked uden ceremoni. Kim Bondo hjælper dig med at vælge.",
  },
  "/kim-bondo/bisaettelse": {
    title: "Bisættelse i København – Bedemand Kim Bondo fra 17.395 kr.",
    description: "Personlig bisættelse i København og Nordsjælland fra 17.395 kr. Kim Bondo er med jer hele vejen – fra første opkald til den sidste afsked.",
  },
  "/kim-bondo/begravelse": {
    title: "Begravelse i København – Bedemand Kim Bondo fra 18.500 kr.",
    description: "Personlig begravelse i København og Nordsjælland fra 18.500 kr. Kirkegård, kiste og koordinering – Kim Bondo tager sig af alt det praktiske.",
  },
  "/kim-bondo/afsked-uden-ceremoni": {
    title: "Afsked uden ceremoni – Bedemand Kim Bondo fra 15.500 kr.",
    description: "En enkel og værdig afsked uden ceremoni fra 15.500 kr. Kremering og urnenedsættelse uden offentlig seremoni – Kim Bondo hjælper jer.",
  },
  "/kim-bondo/askespredning": {
    title: "Askespredning i Danmark – Bedemand Kim Bondo",
    description: "Askespredning til søs eller på land i Danmark. Kim Bondo hjælper med tilladelse, koordinering og en personlig afskedsceremoni.",
  },
  "/kim-bondo/kirkelig-afsked": {
    title: "Kirkelig afsked – Bedemand Kim Bondo",
    description: "Kirkelig begravelse eller bisættelse med præst og salmer. Kim Bondo koordinerer alt med kirken og sørger for en rolig og værdig afsked.",
  },
  "/kim-bondo/borgerlig-afsked": {
    title: "Borgerlig afsked – Bedemand Kim Bondo",
    description: "En personlig afsked uden kirke og præst. Kim Bondo hjælper med at skabe en meningsfuld og individuel ceremoni der afspejler den afdødes liv.",
  },
  "/kim-bondo/huskeliste": {
    title: "Huskeliste ved dødsfald – Bedemand Kim Bondo",
    description: "Komplet huskeliste over hvad der skal ordnes ved et dødsfald. Kim Bondo guider jer igennem alle praktiske opgaver trin for trin.",
  },
  "/kim-bondo/begravelseshjaelp": {
    title: "Begravelseshjælp 2026 – Bedemand Kim Bondo",
    description: "Alt om begravelseshjælp fra Udbetaling Danmark 2026. Satser, betingelser og ansøgning forklaret enkelt. Kim Bondo hjælper med ansøgningen.",
  },
  "/kim-bondo/omraade": {
    title: "Dækningsområde – Bedemand Kim Bondo",
    description: "Kim Bondo dækker hele København og Nordsjælland. Se hvilke kommuner og byer der er inden for dækningsområdet.",
  },
  "/kim-bondo/hvad-koster-en-begravelse": {
    title: "Hvad koster en begravelse? Komplet guide 2026 – Kim Bondo",
    description: "Komplet guide til hvad en begravelse eller bisættelse koster i 2026. Kremering, gravsted, kapelleje og begravelseshjælp – alle priser samlet.",
  },
  "/kim-bondo/helsingor": {
    title: "Bedemand Helsingør – Kim Bondo | Personlig hjælp i Helsingør",
    description: "Personlig bedemand i Helsingør og omegn. Kim Bondo hjælper med bisættelse og begravelse i Helsingør Kommune. Ring 22 21 14 37.",
  },
  "/kim-bondo/horsholm": {
    title: "Bedemand Hørsholm – Kim Bondo | Personlig hjælp i Hørsholm",
    description: "Personlig bedemand i Hørsholm og omegn. Kim Bondo hjælper med bisættelse og begravelse i Hørsholm Kommune. Ring 22 21 14 37.",
  },
  "/kim-bondo/gentofte": {
    title: "Bedemand Gentofte – Kim Bondo | Personlig hjælp i Gentofte",
    description: "Personlig bedemand i Gentofte og omegn. Kim Bondo hjælper med bisættelse og begravelse i Gentofte Kommune. Ring 22 21 14 37.",
  },
  "/kim-bondo/lyngby": {
    title: "Bedemand Lyngby – Kim Bondo | Personlig hjælp i Lyngby",
    description: "Personlig bedemand i Lyngby-Taarbæk. Kim Bondo hjælper med bisættelse og begravelse i Lyngby og omegn. Ring 22 21 14 37.",
  },
  "/kim-bondo/hillerod": {
    title: "Bedemand Hillerød – Kim Bondo | Personlig hjælp i Hillerød",
    description: "Personlig bedemand i Hillerød og omegn. Kim Bondo hjælper med bisættelse og begravelse i Hillerød Kommune. Ring 22 21 14 37.",
  },
  "/kim-bondo/kobenhavn": {
    title: "Bedemand København – Kim Bondo | Personlig hjælp i København",
    description: "Personlig bedemand i København. Kim Bondo hjælper med bisættelse og begravelse i hele Københavns Kommune. Ring 22 21 14 37.",
  },
  "/kim-bondo/faq": {
    title: "Ofte stillede spørgsmål – Bedemand Kim Bondo",
    description: "Svar på de mest stillede spørgsmål om bisættelse, begravelse, priser og praktiske forhold. Kim Bondo svarer ærligt og direkte.",
  },
  "/kim-bondo/nordsjaelland": {
    title: "Bedemand Nordsjælland – Kim Bondo | Personlig hjælp",
    description: "Personlig bedemand i hele Nordsjælland. Kim Bondo dækker Helsingør, Hillerød, Hørsholm, Gentofte, Lyngby og omegn. Ring 22 21 14 37.",
  },
  "/kim-bondo/frederiksberg": {
    title: "Bedemand Frederiksberg – Kim Bondo | Personlig hjælp",
    description: "Personlig bedemand på Frederiksberg. Kim Bondo hjælper med bisættelse og begravelse på Frederiksberg. Ring 22 21 14 37.",
  },
  "/kim-bondo/amager": {
    title: "Bedemand Amager – Kim Bondo | Personlig hjælp på Amager",
    description: "Personlig bedemand på Amager. Kim Bondo hjælper med bisættelse og begravelse på Amager og i Kastrup. Ring 22 21 14 37.",
  },
  "/kim-bondo/osterbro": {
    title: "Bedemand Østerbro – Kim Bondo | Personlig hjælp på Østerbro",
    description: "Personlig bedemand på Østerbro. Kim Bondo hjælper med bisættelse og begravelse på Østerbro i København. Ring 22 21 14 37.",
  },
  "/kim-bondo/norrebro": {
    title: "Bedemand Nørrebro – Kim Bondo | Personlig hjælp på Nørrebro",
    description: "Personlig bedemand på Nørrebro. Kim Bondo hjælper med bisættelse og begravelse på Nørrebro i København. Ring 22 21 14 37.",
  },
  "/kim-bondo/vesterbro": {
    title: "Bedemand Vesterbro – Kim Bondo | Personlig hjælp på Vesterbro",
    description: "Personlig bedemand på Vesterbro. Kim Bondo hjælper med bisættelse og begravelse på Vesterbro i København. Ring 22 21 14 37.",
  },
  "/kim-bondo/produkter": {
    title: "Kister og urner – Bedemand Kim Bondo",
    description: "Se udvalget af kister og urner med åbne priser. Klassiske og naturlige materialer. Kim Bondo hjælper med at vælge det rigtige.",
  },
  "/kim-bondo/om-kim": {
    title: "Om Kim Bondo – Personlig bedemand i København",
    description: "Lær Kim Bondo at kende. Bedemand med hjerte, nærvær og spirituel forankring. Kim hjælper familier i sorg med ro og omsorg.",
  },
};

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectMetaTags(html, pathname) {
  const meta = ROUTE_META[pathname];
  if (!meta) return html;

  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const image = escapeHtml(meta.image ?? DEFAULT_IMAGE);
  const url = escapeHtml(`${BASE_URL}${pathname}`);

  const metaBlock = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
  ].join("\n    ");

  return html
    .replace(/<title>[^<]*<\/title>/, metaBlock)
    .replace(/<meta name="description"[^>]*>/g, "")
    .replace(/<link rel="canonical"[^>]*>/g, "");
}

async function main() {
  console.log("🔨 SSG pre-render starting...");

  // Load SSR bundle
  if (!fs.existsSync(SSR_BUNDLE)) {
    console.error("❌ SSR bundle not found at", SSR_BUNDLE);
    process.exit(1);
  }
  const { render } = await import(pathToFileURL(SSR_BUNDLE).href);

  // Load base template
  const templatePath = path.join(DIST_PUBLIC, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("❌ dist/public/index.html not found");
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf-8");

  let ok = 0;
  let fail = 0;

  for (const route of ROUTES) {
    try {
      // Render React to string
      const appHtml = render(route);

      // Inject SSR HTML into root div
      let html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Inject per-route meta tags
      html = injectMetaTags(html, route);

      // Determine output path
      let outPath;
      if (route === "/") {
        // Root: overwrite dist/public/index.html directly
        outPath = templatePath;
      } else {
        // Sub-routes: dist/public/kim-bondo/index.html etc.
        const dir = path.join(DIST_PUBLIC, route.slice(1)); // remove leading /
        fs.mkdirSync(dir, { recursive: true });
        outPath = path.join(dir, "index.html");
      }

      fs.writeFileSync(outPath, html, "utf-8");
      console.log(`  ✅ ${route} → ${path.relative(ROOT, outPath)}`);
      ok++;
    } catch (err) {
      console.error(`  ❌ ${route} — ${err.message}`);
      fail++;
    }
  }

  console.log(`\n🏁 Pre-render complete: ${ok} ok, ${fail} failed`);
  if (fail > 0) process.exit(1);
}

main();
