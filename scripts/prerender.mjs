/**
 * SSG Pre-render script — runs after Vite client build.
 *
 * Strategy: Manus static hosting uses SPA fallback (all paths → index.html).
 * We cannot serve per-route HTML files directly. Instead, we inject a small
 * synchronous inline <script> into index.html that:
 *   1. Reads window.location.pathname
 *   2. Looks up the pre-rendered HTML for that route in an embedded map
 *   3. Sets document.getElementById('root').innerHTML synchronously
 *      BEFORE React's bundle loads
 *   4. React's hydrateRoot() then attaches event listeners without re-rendering
 *
 * This makes the page HTML visible to crawlers (Googlebot, etc.) on first load
 * because the content is in the initial HTML response — not rendered by JS.
 *
 * The inline script is ~700 KB raw / ~150 KB gzipped — acceptable for SEO.
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

function buildMetaBlock(pathname) {
  const meta = ROUTE_META[pathname];
  if (!meta) return null;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const image = escapeHtml(meta.image ?? DEFAULT_IMAGE);
  const url = escapeHtml(`${BASE_URL}${pathname}`);
  return {
    title,
    description,
    tags: [
      `<title>${title}</title>`,
      `<meta name="description" content="${description}" />`,
      `<meta property="og:title" content="${title}" />`,
      `<meta property="og:description" content="${description}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${image}" />`,
      `<meta name="twitter:title" content="${title}" />`,
      `<meta name="twitter:description" content="${description}" />`,
      `<link rel="canonical" href="${url}" />`,
    ].join("\n    "),
  };
}

async function main() {
  console.log("🔨 SSG inline pre-render starting...");

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
  let template = fs.readFileSync(templatePath, "utf-8");

  // Build the SSR map: { "/route": "escaped-html-string" }
  const ssrMap = {};
  const metaMap = {};
  let ok = 0;
  let fail = 0;

  for (const route of ROUTES) {
    try {
      const appHtml = render(route);
      // Escape for embedding in a JS string literal (JSON.stringify handles this)
      ssrMap[route] = appHtml;
      const meta = buildMetaBlock(route);
      if (meta) metaMap[route] = { title: meta.title, description: ROUTE_META[route].description, tags: meta.tags };
      console.log(`  ✅ rendered ${route} (${appHtml.length} chars)`);
      ok++;
    } catch (err) {
      console.error(`  ❌ ${route} — ${err.message}`);
      fail++;
    }
  }

  // Build the inline script that:
  // 1. Reads pathname
  // 2. Sets #root innerHTML from ssrMap
  // 3. Updates <title> and <meta name="description"> in <head>
  const ssrMapJson = JSON.stringify(ssrMap);
  const metaMapJson = JSON.stringify(
    Object.fromEntries(
      Object.entries(metaMap).map(([k, v]) => [k, { title: v.title, description: ROUTE_META[k]?.description ?? "" }])
    )
  );

  const inlineScript = `<script>
(function(){
  var p = window.location.pathname.replace(/\\/+$/, '') || '/';
  var ssrMap = ${ssrMapJson};
  var metaMap = ${metaMapJson};
  var html = ssrMap[p];
  if (html) {
    document.getElementById('root').innerHTML = html;
  }
  var meta = metaMap[p];
  if (meta) {
    var t = document.querySelector('title');
    if (t) t.textContent = meta.title;
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute('content', meta.description);
  }
})();
</script>`;

  // Inject the inline script right before </body>
  // Inject the inline script IMMEDIATELY AFTER <div id="root"></div>
  // and BEFORE the React bundle script — so it runs synchronously before React hydrates
  const output = template.replace(
    '<div id="root"></div>',
    '<div id="root"></div>\n' + inlineScript
  );

  // Also inject the correct meta for the root route (/) into the static <head>
  // so that crawlers that don't execute JS still see correct title/description
  const rootMeta = buildMetaBlock("/");
  if (rootMeta) {
    const metaBlock = rootMeta.tags;
    const finalOutput = output
      .replace(/<title>[^<]*<\/title>/, metaBlock)
      .replace(/<meta name="description"[^>]*>/g, "")
      .replace(/<link rel="canonical"[^>]*>/g, "");
    fs.writeFileSync(templatePath, finalOutput, "utf-8");
  } else {
    fs.writeFileSync(templatePath, output, "utf-8");
  }

  console.log(`\n✅ Inline SSR map injected into dist/public/index.html`);
  console.log(`   Routes: ${ok} ok, ${fail} failed`);
  console.log(`   File size: ${(fs.statSync(templatePath).size / 1024).toFixed(1)} KB`);

  if (fail > 0) process.exit(1);
}

main();
