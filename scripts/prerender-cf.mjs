/**
 * SSG Pre-render script for Cloudflare Pages.
 *
 * Unlike Manus static hosting (SPA fallback), Cloudflare Pages serves
 * per-route HTML files directly. This script generates:
 *   - dist/public/index.html          (/)
 *   - dist/public/index.html (/)
 *   - dist/public/priser/index.html  (/priser)
 *   - ... etc for all 29 routes
 *   - dist/public/_redirects           (SPA fallback for unknown routes)
 *
 * Each HTML file has:
 *   - Full SSR-rendered body in <div id="root">
 *   - Correct <title>, meta description, OG tags, Twitter tags, canonical
 *   - React hydrates on load without mismatch
 */

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST_PUBLIC = path.resolve(ROOT, "dist/public");
const SSR_BUNDLE = path.resolve(ROOT, "dist/server/entry-server.js");

const BASE_URL = "https://www.bedemandkobenhavn.dk";
const DEFAULT_IMAGE = `${BASE_URL}/manus-storage/kim-beach-solo_609d5ab7.png`;

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
    title: "Bedemand Kim Bondo – København og Nordsjælland",
    description: "Personlig bedemand med nærvær og ro. Bisættelse fra 19.500 kr., begravelse fra 21.500 kr. Gennemsigtige priser. Ring 22 21 14 37 – døgnet rundt.",
  },
  "/priser": {
    title: "Priser – Bedemand Kim Bondo | Gennemsigtige priser fra 13.550 kr.",
    description: "Se alle priser for bisættelse, begravelse og afsked uden ceremoni. Ingen skjulte gebyrer. Bisættelse fra 19.500 kr., begravelse fra 21.500 kr.",
  },
  "/afskeder": {
    title: "Typer af afskeder – Bedemand Kim Bondo",
    description: "Oversigt over alle typer afskeder: bisættelse, begravelse, borgerlig afsked, kirkelig afsked og afsked uden ceremoni. Kim Bondo hjælper dig med at vælge.",
  },
  "/bisaettelse": {
    title: "Bisættelse i København – Bedemand Kim Bondo fra 19.500 kr.",
    description: "Personlig bisættelse i København og Nordsjælland fra 19.500 kr. Kim Bondo er med jer hele vejen – fra første opkald til den sidste afsked.",
  },
  "/begravelse": {
    title: "Begravelse i København – Bedemand Kim Bondo fra 21.500 kr.",
    description: "Personlig begravelse i København og Nordsjælland fra 21.500 kr. Kirkegård, kiste og koordinering – Kim Bondo tager sig af alt det praktiske.",
  },
  "/afsked-uden-ceremoni": {
    title: "Afsked uden ceremoni – Bedemand Kim Bondo fra 13.550 kr.",
    description: "En enkel og værdig afsked uden ceremoni fra 13.550 kr. Kremering og urnenedsættelse uden offentlig ceremoni – Kim Bondo hjælper jer.",
  },
  "/askespredning": {
    title: "Askespredning i Danmark – Bedemand Kim Bondo",
    description: "Askespredning til søs eller på land i Danmark. Kim Bondo hjælper med tilladelse, koordinering og en personlig afskedsceremoni.",
  },
  "/kirkelig-afsked": {
    title: "Kirkelig afsked – Bedemand Kim Bondo",
    description: "Kirkelig begravelse eller bisættelse med præst og salmer. Kim Bondo koordinerer alt med kirken og sørger for en rolig og værdig afsked.",
  },
  "/borgerlig-afsked": {
    title: "Borgerlig afsked – Bedemand Kim Bondo",
    description: "En personlig afsked uden kirke og præst. Kim Bondo hjælper med at skabe en meningsfuld og individuel ceremoni der afspejler den afdødes liv.",
  },
  "/huskeliste": {
    title: "Huskeliste ved dødsfald – Bedemand Kim Bondo",
    description: "Komplet huskeliste over hvad der skal ordnes ved et dødsfald. Kim Bondo guider jer igennem alle praktiske opgaver trin for trin.",
  },
  "/begravelseshjaelp": {
    title: "Begravelseshjælp 2026 – Bedemand Kim Bondo",
    description: "Alt om begravelseshjælp fra Udbetaling Danmark 2026. Satser, betingelser og ansøgning forklaret enkelt. Kim Bondo hjælper med ansøgningen.",
  },
  "/omraade": {
    title: "Dækningsområde – Bedemand Kim Bondo",
    description: "Kim Bondo dækker hele København og Nordsjælland. Se hvilke kommuner og byer der er inden for dækningsområdet.",
  },
  "/hvad-koster-en-begravelse": {
    title: "Hvad koster en begravelse? Komplet guide 2026 – Kim Bondo",
    description: "Komplet guide til hvad en begravelse eller bisættelse koster i 2026. Kremering, gravsted, kapelleje og begravelseshjælp – alle priser samlet.",
  },
  "/helsingor": {
    title: "Bedemand Helsingør – Kim Bondo | Personlig hjælp i Helsingør",
    description: "Personlig bedemand i Helsingør og omegn. Kim Bondo hjælper med bisættelse og begravelse i Helsingør Kommune. Ring 22 21 14 37.",
  },
  "/horsholm": {
    title: "Bedemand Hørsholm – Kim Bondo | Personlig hjælp i Hørsholm",
    description: "Personlig bedemand i Hørsholm og omegn. Kim Bondo hjælper med bisættelse og begravelse i Hørsholm Kommune. Ring 22 21 14 37.",
  },
  "/gentofte": {
    title: "Bedemand Gentofte – Kim Bondo | Personlig hjælp i Gentofte",
    description: "Personlig bedemand i Gentofte og omegn. Kim Bondo hjælper med bisættelse og begravelse i Gentofte Kommune. Ring 22 21 14 37.",
  },
  "/lyngby": {
    title: "Bedemand Lyngby – Kim Bondo | Personlig hjælp i Lyngby",
    description: "Personlig bedemand i Lyngby-Taarbæk. Kim Bondo hjælper med bisættelse og begravelse i Lyngby og omegn. Ring 22 21 14 37.",
  },
  "/hillerod": {
    title: "Bedemand Hillerød – Kim Bondo | Personlig hjælp i Hillerød",
    description: "Personlig bedemand i Hillerød og omegn. Kim Bondo hjælper med bisættelse og begravelse i Hillerød Kommune. Ring 22 21 14 37.",
  },
  "/kobenhavn": {
    title: "Bedemand København – Kim Bondo | Personlig hjælp i København",
    description: "Personlig bedemand i København. Kim Bondo hjælper med bisættelse og begravelse i hele Københavns Kommune. Ring 22 21 14 37.",
  },
  "/faq": {
    title: "Ofte stillede spørgsmål – Bedemand Kim Bondo",
    description: "Svar på de mest stillede spørgsmål om bisættelse, begravelse, priser og praktiske forhold. Kim Bondo svarer ærligt og direkte.",
  },
  "/nordsjaelland": {
    title: "Bedemand Nordsjælland – Kim Bondo | Personlig hjælp",
    description: "Personlig bedemand i hele Nordsjælland. Kim Bondo dækker Helsingør, Hillerød, Hørsholm, Gentofte, Lyngby og omegn. Ring 22 21 14 37.",
  },
  "/frederiksberg": {
    title: "Bedemand Frederiksberg – Kim Bondo | Personlig hjælp",
    description: "Personlig bedemand på Frederiksberg. Kim Bondo hjælper med bisættelse og begravelse på Frederiksberg. Ring 22 21 14 37.",
  },
  "/amager": {
    title: "Bedemand Amager – Kim Bondo | Personlig hjælp på Amager",
    description: "Personlig bedemand på Amager. Kim Bondo hjælper med bisættelse og begravelse på Amager og i Kastrup. Ring 22 21 14 37.",
  },
  "/osterbro": {
    title: "Bedemand Østerbro – Kim Bondo | Personlig hjælp på Østerbro",
    description: "Personlig bedemand på Østerbro. Kim Bondo hjælper med bisættelse og begravelse på Østerbro i København. Ring 22 21 14 37.",
  },
  "/norrebro": {
    title: "Bedemand Nørrebro – Kim Bondo | Personlig hjælp på Nørrebro",
    description: "Personlig bedemand på Nørrebro. Kim Bondo hjælper med bisættelse og begravelse på Nørrebro i København. Ring 22 21 14 37.",
  },
  "/vesterbro": {
    title: "Bedemand Vesterbro – Kim Bondo | Personlig hjælp på Vesterbro",
    description: "Personlig bedemand på Vesterbro. Kim Bondo hjælper med bisættelse og begravelse på Vesterbro i København. Ring 22 21 14 37.",
  },
  "/produkter": {
    title: "Kister og urner – Bedemand Kim Bondo",
    description: "Se udvalget af kister og urner med åbne priser. Klassiske og naturlige materialer. Kim Bondo hjælper med at vælge det rigtige.",
  },
  "/om-kim": {
    title: "Om Kim Bondo – Personlig bedemand i København",
    description: "Lær Kim Bondo at kende. Bedemand med hjerte, nærvær og spirituel forankring. Kim hjælper familier i sorg med ro og omsorg.",
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

function buildHeadTags(pathname) {
  const meta = ROUTE_META[pathname];
  if (!meta) return null;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const image = escapeHtml(meta.image ?? DEFAULT_IMAGE);
  const url = escapeHtml(`${BASE_URL}${pathname === "/" ? "" : pathname}`);
  const canonical = escapeHtml(`${BASE_URL}${pathname}`);
  return {
    title,
    tags: [
      `<title>${title}</title>`,
      `<meta name="description" content="${description}" />`,
      `<meta property="og:title" content="${title}" />`,
      `<meta property="og:description" content="${description}" />`,
      `<meta property="og:url" content="${canonical}" />`,
      `<meta property="og:image" content="${image}" />`,
      `<meta name="twitter:title" content="${title}" />`,
      `<meta name="twitter:description" content="${description}" />`,
      `<link rel="canonical" href="${canonical}" />`,
    ].join("\n    "),
  };
}

async function main() {
  console.log("🔨 SSG Cloudflare Pages pre-render starting...");

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
  const baseTemplate = fs.readFileSync(templatePath, "utf-8");

  let ok = 0;
  let fail = 0;

  for (const route of ROUTES) {
    try {
      const appHtml = render(route);
      const headTags = buildHeadTags(route);

      // Build per-route HTML: inject SSR body into #root and correct meta into <head>
      let html = baseTemplate;

      // 1. Inject SSR body into #root
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // 2. Replace title + remove old description/canonical
      if (headTags) {
        html = html
          .replace(/<title>[^<]*<\/title>/, "<!--META_PLACEHOLDER-->")
          .replace(/<meta\s+name="description"[^>]*\/?>/g, "")
          .replace(/<link\s+rel="canonical"[^>]*\/?>/g, "")
          .replace("<!--META_PLACEHOLDER-->", headTags.tags);
      }

      // 3. Write to correct path
      let outPath;
      if (route === "/") {
        outPath = path.join(DIST_PUBLIC, "index.html");
      } else {
        // / → dist/public/index.html
        const dir = path.join(DIST_PUBLIC, route.slice(1));
        fs.mkdirSync(dir, { recursive: true });
        outPath = path.join(dir, "index.html");
      }

      fs.writeFileSync(outPath, html, "utf-8");
      console.log(`  ✅ ${route} → ${outPath.replace(DIST_PUBLIC, "")}`);
      ok++;
    } catch (err) {
      console.error(`  ❌ ${route} — ${err.message}`);
      fail++;
    }
  }

  // Write _redirects for Cloudflare Pages: SPA fallback for any unknown route
  // Known routes are served as static files; unknown routes fall back to index.html
  const redirects = `# Cloudflare Pages _redirects
# Known routes are served as static HTML files (per-route index.html)
# Unknown routes fall back to root index.html for React router to handle
/*    /index.html   200
`;
  fs.writeFileSync(path.join(DIST_PUBLIC, "_redirects"), redirects, "utf-8");
  console.log("  ✅ _redirects written");

  console.log(`\n✅ Cloudflare Pages SSG complete`);
  console.log(`   Routes: ${ok} ok, ${fail} failed`);

  if (fail > 0) process.exit(1);
}

main();
