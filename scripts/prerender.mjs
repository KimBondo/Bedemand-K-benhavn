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
// Delebilledet (1200×630) bruges på alle sider
const DEFAULT_IMAGE = `${BASE_URL}/images/kim-bondo-bedemand-og.jpg`;

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
  "/mindeord",
  "/begravelseshjaelp",
  "/omraade",
  "/hvad-koster-en-begravelse",
  "/helsingor",
  "/horsholm",
  "/gentofte",
  "/lyngby",
  "/hillerod",
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
  "/fredensborg",
  "/rudersdal",
  "/min-sidste-vilje",
  "/hornbaek",
  "/alsgaarde",
  "/gilleleje",
  "/humlebaek",
  "/prisberegner",
  "/hvad-sker-der",
  "/bisaettelse-nordsjaelland",
  "/soborg",
  "/sjaelland",
  "/tak",
];

const ROUTE_META = {
  "/": {
    title: "Bedemand K\u00f8benhavn \u2013 Kim Bondo, personlig bedemand d\u00f8gnet rundt",
    description: "Personlig bedemand i K\u00f8benhavn og Nordsj\u00e6lland. Bis\u00e6ttelse fra 18.300 kr., begravelse fra 19.300 kr. Gennemsigtige priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/afsked-uden-ceremoni": {
    title: "Afsked uden ceremoni \u2013 Bedemand Kim Bondo",
    description: "Enkel afsked uden ceremoni i K\u00f8benhavn. Kremering og urneneds\u00e6ttelse uden kirke. Fra 13.550 kr. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/afskeder": {
    title: "Afskeder \u2013 Bedemand Kim Bondo",
    description: "Kirkelig, borgerlig eller stille afsked i K\u00f8benhavn. Jeg tilrettel\u00e6gger begravelse og bis\u00e6ttelse efter jeres \u00f8nsker. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/amager": {
    title: "Bedemand Amager \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand p\u00e5 Amager, i T\u00e5rnby og Drag\u00f8r. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/askespredning": {
    title: "Askespredning \u2013 Bedemand Kim Bondo, K\u00f8benhavn",
    description: "Askespredning over \u00e5bent hav. Jeg hj\u00e6lper med tro og love-erkl\u00e6ring, papirer og det praktiske. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/begravelse": {
    title: "Begravelse i K\u00f8benhavn \u2013 Bedemand Kim Bondo",
    description: "Personlig hj\u00e6lp til begravelse i K\u00f8benhavn og Nordsj\u00e6lland. Jeg koordinerer kiste og kirkeg\u00e5rd. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/begravelseshjaelp": {
    title: "Begravelseshj\u00e6lp \u2013 s\u00f8g tilskud, Kim Bondo",
    description: "Jeg s\u00f8rger for ans\u00f8gningen om begravelseshj\u00e6lp for jer. I 2026 er tilskuddet op til 13.550 kr. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/bisaettelse": {
    title: "Bis\u00e6ttelse i K\u00f8benhavn \u2013 Bedemand Kim Bondo",
    description: "Personlig hj\u00e6lp til bis\u00e6ttelse i K\u00f8benhavn og Nordsj\u00e6lland. Jeg hj\u00e6lper med det praktiske. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/borgerlig-afsked": {
    title: "Borgerlig afsked \u2013 Bedemand Kim Bondo",
    description: "Borgerlig begravelse eller bis\u00e6ttelse uden kirke i K\u00f8benhavn. Jeg hj\u00e6lper med det praktiske. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/faq": {
    title: "FAQ \u2013 Begravelse og bis\u00e6ttelse, Kim Bondo",
    description: "Svar p\u00e5 de sp\u00f8rgsm\u00e5l, jeg oftest f\u00e5r, om begravelse, bis\u00e6ttelse, priser og begravelseshj\u00e6lp. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/frederiksberg": {
    title: "Bedemand Frederiksberg \u2013 Kim Bondo",
    description: "Personlig bedemand p\u00e5 Frederiksberg. Kommunens tre kirkeg\u00e5rde. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/gentofte": {
    title: "Bedemand Gentofte \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Gentofte, Hellerup, Charlottenlund og Vangede. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/helsingor": {
    title: "Bedemand Helsing\u00f8r \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Helsing\u00f8r, Snekkersten, Esperg\u00e6rde og Hornb\u00e6k. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/hillerod": {
    title: "Bedemand Hiller\u00f8d \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Hiller\u00f8d og omegn. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/horsholm": {
    title: "Bedemand H\u00f8rsholm \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i H\u00f8rsholm og Rungsted. Kapellet p\u00e5 H\u00f8rsholm Kirkeg\u00e5rd kan benyttes af alle. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/mindeord": {
    title: "Mindeord og tale ved begravelse \u2013 skabelon og eksempel",
    description: "S\u00e5dan skriver du mindeord og en tale til en begravelse eller bis\u00e6ttelse. En enkel skabelon, et eksempel og gode r\u00e5d. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/huskeliste": {
    title: "Huskeliste ved d\u00f8dsfald \u2013 Bedemand Kim Bondo",
    description: "Hvad skal I g\u00f8re, n\u00e5r en n\u00e6rtst\u00e5ende d\u00f8r? En huskeliste trin for trin \u2013 og hvad jeg hj\u00e6lper med. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/hvad-koster-en-begravelse": {
    title: "Hvad koster en begravelse i 2026? \u2013 Kim Bondo",
    description: "Hvad koster en begravelse eller bis\u00e6ttelse? Se mine priser, hvad der kommer oveni, og hvordan jeg s\u00f8ger begravelseshj\u00e6lp for jer. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/kirkelig-afsked": {
    title: "Kirkelig afsked \u2013 Bedemand Kim Bondo",
    description: "Kirkelig begravelse eller bis\u00e6ttelse med pr\u00e6st i K\u00f8benhavn. Jeg koordinerer kirke, kordegn og hele forl\u00f8bet. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/lyngby": {
    title: "Bedemand Lyngby \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Lyngby, Virum, Sorgenfri og Taarb\u00e6k. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/nordsjaelland": {
    title: "Bedemand Nordsj\u00e6lland \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i hele Nordsj\u00e6lland \u2014 fra Gentofte og Lyngby til Hiller\u00f8d og Helsing\u00f8r. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/norrebro": {
    title: "Bedemand N\u00f8rrebro \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand p\u00e5 N\u00f8rrebro. Assistens Kirkeg\u00e5rd ligger midt i bydelen. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/om-kim": {
    title: "Om Kim Bondo \u2013 Personlig bedemand, K\u00f8benhavn",
    description: "M\u00f8d Kim Bondo \u2013 selvst\u00e6ndig bedemand i Gladsaxe og S\u00f8borg. Jeg hj\u00e6lper familier i K\u00f8benhavn, Stork\u00f8benhavn og Nordsj\u00e6lland. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/omraade": {
    title: "D\u00e6kningsomr\u00e5de \u2013 Bedemand Kim Bondo",
    description: "Jeg d\u00e6kker K\u00f8benhavn og Nordsj\u00e6lland \u2013 Helsing\u00f8r, Hiller\u00f8d, Gentofte, Lyngby og hele Stork\u00f8benhavn. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/osterbro": {
    title: "Bedemand \u00d8sterbro \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand p\u00e5 \u00d8sterbro. Kirkerne i bydelen og kirkeg\u00e5rdene t\u00e6t p\u00e5. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/fredensborg": {
    title: "Bedemand Fredensborg \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Fredensborg, Humleb\u00e6k, Kokkedal og Niv\u00e5. Frit valg af kirkeg\u00e5rd i provstiet for folkekirkemedlemmer. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/rudersdal": {
    title: "Bedemand Rudersdal \u2013 Birker\u00f8d, Holte, N\u00e6rum, Vedb\u00e6k",
    description: "Personlig bedemand i Birker\u00f8d, Holte, N\u00e6rum og Vedb\u00e6k. Rudersdals fem kirkeg\u00e5rde er kommunale. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/min-sidste-vilje": {
    title: "Min Sidste Vilje \u2013 skema og \u00f8nsker til egen begravelse",
    description: "Skriv dine \u00f8nsker til din egen afsked ned. Hent skemaet Min Sidste Vilje gratis, eller f\u00e5 hj\u00e6lp ved et gratis hjemmebes\u00f8g. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/hornbaek": {
    title: "Bedemand Hornb\u00e6k \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Hornb\u00e6k. Hornb\u00e6k Kirke og de to kirkeg\u00e5rde. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/gilleleje": {
    title: "Bedemand Gilleleje \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Gilleleje, Gr\u00e6sted, Vejby og Blistrup. Kirkerne og kirkeg\u00e5rdene i omr\u00e5det. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/alsgaarde": {
    title: "Bedemand \u00c5lsg\u00e5rde \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i \u00c5lsg\u00e5rde og Helleb\u00e6k. Jeg kender Helleb\u00e6k Kirke og \u00c5lsg\u00e5rde Kirkeg\u00e5rd og hj\u00e6lper jer hele vejen. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/humlebaek": {
    title: "Bedemand Humleb\u00e6k \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand i Humleb\u00e6k. Humleb\u00e6k Kirke, Humleb\u00e6k Kirkeg\u00e5rd og Torpen Kapel. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/prisberegner": {
    title: "Prisberegner – Bedemand Kim Bondo",
    description: "F\u00e5 et vejledende overslag p\u00e5 begravelse eller bis\u00e6ttelse ud fra mine faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/hvad-sker-der": {
    title: "Hvad sker der, når nogen dør? – Praktisk guide | Kim Bondo",
    description: "De f\u00f8rste skridt ved d\u00f8dsfald: l\u00e6ge og d\u00f8dsattest, anmodning om begravelse eller ligbr\u00e6nding og priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/bisaettelse-nordsjaelland": {
    title: "Sådan forløber en bisættelse i Nordsjælland | Kim Bondo",
    description: "S\u00e5dan forl\u00f8ber en bis\u00e6ttelse i Nordsj\u00e6lland. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/persondatapolitik": {
    title: "Persondatapolitik \u2013 Bedemand Kim Bondo",
    description: "S\u00e5dan behandler Bedemand K\u00f8benhavn ApS dine personoplysninger: kontaktformular, kundeforhold, cookies, opbevaring og dine rettigheder efter GDPR.",
  },
  "/priser": {
    title: "Priser \u2013 Bedemand Kim Bondo, K\u00f8benhavn",
    description: "Bis\u00e6ttelse fra 18.300 kr., begravelse fra 19.300 kr. Alle enkeltpriser og till\u00e6g samlet \u00e9t sted. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/produkter": {
    title: "Kister og urner \u2013 Bedemand Kim Bondo",
    description: "V\u00e6lg kiste fra 6.000 kr. eller urne fra 950 kr. B\u00e6redygtige og klassiske modeller. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/sjaelland": {
    title: "Bedemand p\u00e5 Sj\u00e6lland \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Bedemand p\u00e5 hele Sj\u00e6lland. Jeg tager selv telefonen, har faste priser og begravelseshj\u00e6lpen trukket fra p\u00e5 fakturaen. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/tak": {
    title: "Tak for din besked \u2013 Bedemand Kim Bondo",
    description: "Tak for din besked. Jeg vender tilbage hurtigst muligt. Haster det, s\u00e5 ring til mig p\u00e5 28 14 60 11.",
    // Tak-siden skal ikke i Googles indeks
    robots: "noindex",
  },
  "/soborg": {
    title: "Bedemand S\u00f8borg & Gladsaxe \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand med kontor p\u00e5 Vandt\u00e5rnsvej 62A i S\u00f8borg. Jeg hj\u00e6lper familier i hele Gladsaxe med bis\u00e6ttelse og begravelse. Ring til mig p\u00e5 28 14 60 11.",
  },
  "/vesterbro": {
    title: "Bedemand Vesterbro \u2013 Kim Bondo, d\u00f8gnet rundt",
    description: "Personlig bedemand p\u00e5 Vesterbro. Kirkerne i bydelen, og Vestre Kirkeg\u00e5rd ligger t\u00e6t p\u00e5. Faste priser. Ring til mig p\u00e5 28 14 60 11.",
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
  const image = escapeHtml(DEFAULT_IMAGE);
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

  // Robots (fx noindex på tak-siden)
  if (meta.robots) {
    out = out.replace(
      /<meta\s+name="robots"[^>]*\/?>/,
      `<meta name="robots" content="${escapeHtml(meta.robots)}" />`
    );
  }

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
        '<meta name="description" content="Siden findes ikke. Gå til forsiden, eller ring til Kim Bondo på 28 14 60 11." />'
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
