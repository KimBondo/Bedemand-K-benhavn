import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// NOTE: esbuild bundles server/index.ts into dist/index.js, so __dirname resolves
// to the directory where node is invoked from (typically the project root), NOT dist/.
// We use import.meta.url to get the actual location of the bundled file at runtime.
const DIST_DIR = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = "https://www.bedemandkobenhavn.dk";
const DEFAULT_IMAGE = `${BASE_URL}/manus-storage/kim-beach-solo_609d5ab7.png`;

// Per-route meta-data table — title + description injected into raw HTML before React loads
const ROUTE_META: Record<string, { title: string; description: string; image?: string }> = {
  "/": {
    title: "Bedemand København – Kim Bondo, personlig bedemand døgnet rundt",
    description: "Personlig bedemand i København og Nordsjælland. Bisættelse fra 18.300 kr., begravelse fra 19.300 kr. Gennemsigtige priser. Ring til mig på 28 14 60 11.",
  },
  "/priser": {
    title: "Priser – Bedemand Kim Bondo | fra 13.550 kr.",
    description: "Bisættelse fra 18.300 kr., begravelse fra 19.300 kr. Alle enkeltpriser samlet ét sted. Ingen skjulte gebyrer. Ring til mig på 28 14 60 11.",
  },
  "/afskeder": {
    title: "Typer af afskeder – Bedemand Kim Bondo",
    description: "Kirkelig, borgerlig eller stille afsked i København. Jeg tilrettelægger begravelse og bisættelse efter jeres ønsker. Ring til mig på 28 14 60 11.",
  },
  "/bisaettelse": {
    title: "Bisættelse i København – Bedemand Kim Bondo fra 18.300 kr.",
    description: "Personlig hjælp til bisættelse i København og Nordsjælland. Jeg tager mig af alt det praktiske. Ring til mig på 28 14 60 11.",
  },
  "/begravelse": {
    title: "Begravelse i København – Bedemand Kim Bondo fra 19.300 kr.",
    description: "Personlig hjælp til begravelse i København og Nordsjælland. Jeg koordinerer kiste og kirkegård. Ring til mig på 28 14 60 11.",
  },
  "/afsked-uden-ceremoni": {
    title: "Afsked uden ceremoni – Bedemand Kim Bondo fra 13.550 kr.",
    description: "Enkel afsked uden ceremoni i København. Kremering og urnenedsættelse uden kirke. Fra 13.550 kr. Ring til mig på 28 14 60 11.",
  },
  "/askespredning": {
    title: "Askespredning i Danmark – Bedemand Kim Bondo",
    description: "Askespredning over åbent hav. Jeg hjælper med tro og love-erklæring, papirer og det praktiske. Ring til mig på 28 14 60 11.",
  },
  "/kirkelig-afsked": {
    title: "Kirkelig afsked – Bedemand Kim Bondo",
    description: "Kirkelig begravelse eller bisættelse med præst i København. Jeg koordinerer kirke, kordegn og hele forløbet. Ring til mig på 28 14 60 11.",
  },
  "/borgerlig-afsked": {
    title: "Borgerlig afsked – Bedemand Kim Bondo",
    description: "Borgerlig begravelse eller bisættelse uden kirke i København. Jeg hjælper med alt det praktiske. Ring til mig på 28 14 60 11.",
  },
  "/mindeord": {
    title: "Mindeord og tale ved begravelse – skabelon og eksempel",
    description: "Sådan skriver du mindeord og en tale til en begravelse eller bisættelse. En enkel skabelon, et eksempel og gode råd. Ring til mig på 28 14 60 11.",
  },
  "/huskeliste": {
    title: "Huskeliste ved dødsfald – Bedemand Kim Bondo",
    description: "Hvad skal du gøre, når en nærtstående dør? Min trin-for-trin huskeliste hjælper dig i den svære tid. Ring til mig på 28 14 60 11.",
  },
  "/begravelseshjaelp": {
    title: "Begravelseshjælp 2026 – Bedemand Kim Bondo",
    description: "Få hjælp til at søge begravelseshjælp fra det offentlige. Tilskud fra 1.050–13.550 kr. Jeg hjælper jer med ansøgningen. Ring til mig på 28 14 60 11.",
  },
  "/omraade": {
    title: "Dækningsområde – Bedemand Kim Bondo",
    description: "Jeg dækker København og Nordsjælland – Helsingør, Hillerød, Gentofte, Lyngby og hele Storkøbenhavn. Ring til mig på 28 14 60 11.",
  },
  "/hvad-koster-en-begravelse": {
    title: "Hvad koster en begravelse? Komplet guide 2026 – Kim Bondo",
    description: "Komplet guide til hvad en begravelse eller bisættelse koster i 2026. Kremering, gravsted, kapelleje og begravelseshjælp – alle priser samlet.",
  },
  "/helsingor": {
    title: "Bedemand Helsingør – Kim Bondo | Personlig hjælp i Helsingør",
    description: "Personlig bedemand i Helsingør, Snekkersten, Espergærde og Hornbæk. Faste priser og ingen mellemled. Ring til mig på 28 14 60 11.",
  },
  "/horsholm": {
    title: "Bedemand Hørsholm – Kim Bondo | Personlig hjælp i Hørsholm",
    description: "Personlig bedemand i Hørsholm, Rungsted og Kokkedal. Kapellet på Hørsholm Kirkegård kan benyttes af alle. Ring til mig på 28 14 60 11.",
  },
  "/gentofte": {
    title: "Bedemand Gentofte – Kim Bondo | Personlig hjælp i Gentofte",
    description: "Personlig bedemand i Gentofte, Hellerup, Charlottenlund og Vangede. Ring til mig på 28 14 60 11.",
  },
  "/lyngby": {
    title: "Bedemand Lyngby – Kim Bondo | Personlig hjælp i Lyngby",
    description: "Personlig bedemand i Lyngby, Virum, Sorgenfri og Taarbæk. Faste priser og ingen mellemled. Ring til mig på 28 14 60 11.",
  },
  "/hillerod": {
    title: "Bedemand Hillerød – Kim Bondo | Personlig hjælp i Hillerød",
    description: "Personlig bedemand i Hillerød og omegn. Faste priser. Ring til mig på 28 14 60 11.",
  },
  "/faq": {
    title: "Ofte stillede spørgsmål – Bedemand Kim Bondo",
    description: "Svar på de mest stillede spørgsmål om begravelse, bisættelse, priser og begravelseshjælp. Ring til mig på 28 14 60 11.",
  },
  "/nordsjaelland": {
    title: "Bedemand Nordsjælland – Kim Bondo | Personlig hjælp",
    description: "Personlig bedemand i hele Nordsjælland — fra Gentofte og Lyngby til Hillerød og Helsingør. Faste priser. Ring til mig på 28 14 60 11.",
  },
  "/frederiksberg": {
    title: "Bedemand Frederiksberg – Kim Bondo | Personlig hjælp",
    description: "Personlig bedemand på Frederiksberg. Kommunens tre kirkegårde. Faste priser og ingen mellemled. Ring til mig på 28 14 60 11.",
  },
  "/amager": {
    title: "Bedemand Amager – Kim Bondo | Personlig hjælp på Amager",
    description: "Personlig bedemand på Amager, i Tårnby og Dragør. Faste priser og ingen mellemled. Ring til mig på 28 14 60 11.",
  },
  "/sjaelland": {
    title: "Bedemand på Sjælland – Kim Bondo, døgnet rundt",
    description: "Bedemand på hele Sjælland. Jeg tager selv telefonen, har faste priser og begravelseshjælpen trukket fra på fakturaen. Ring til mig på 28 14 60 11.",
  },
  "/soborg": {
    title: "Bedemand Søborg & Gladsaxe – Kim Bondo, døgnet rundt",
    description: "Personlig bedemand med kontor på Vandtårnsvej 62A i Søborg. Jeg hjælper familier i hele Gladsaxe med bisættelse og begravelse. Ring til mig på 28 14 60 11.",
  },
  "/osterbro": {
    title: "Bedemand Østerbro – Kim Bondo | Personlig hjælp på Østerbro",
    description: "Personlig bedemand på Østerbro. Holmens og Garnisons Kirkegård ligger i bydelen. Faste priser og ingen mellemled. Ring til mig på 28 14 60 11.",
  },
  "/norrebro": {
    title: "Bedemand Nørrebro – Kim Bondo | Personlig hjælp på Nørrebro",
    description: "Personlig bedemand på Nørrebro. Assistens Kirkegård ligger midt i bydelen. Faste priser og ingen mellemled. Ring til mig på 28 14 60 11.",
  },
  "/vesterbro": {
    title: "Bedemand Vesterbro – Kim Bondo | Personlig hjælp på Vesterbro",
    description: "Personlig bedemand på Vesterbro og i Kgs. Enghave. Vestre Kirkegård og Nordre Kapel ligger i bydelen. Faste priser. Ring til mig på 28 14 60 11.",
  },
  "/produkter": {
    title: "Kister og urner – Bedemand Kim Bondo",
    description: "Vælg kiste fra 6.000 kr. eller urne fra 950 kr. Bæredygtige og klassiske modeller. Ring til mig på 28 14 60 11.",
  },
  "/om-kim": {
    title: "Om Kim Bondo – Personlig bedemand i København",
    description: "Mød Kim Bondo – selvstændig bedemand i Gladsaxe og Søborg. Jeg hjælper familier i København, Storkøbenhavn og Nordsjælland. Ring til mig på 28 14 60 11.",
  },
  "/fredensborg": {
    title: "Bedemand Fredensborg – Kim Bondo, døgnet rundt",
    description: "Personlig bedemand i Fredensborg, Humlebæk, Kokkedal og Nivå. Frit valg af kirkegård i provstiet for folkekirkemedlemmer. Ring til mig på 28 14 60 11.",
  },
  "/rudersdal": {
    title: "Bedemand Rudersdal – Birkerød, Holte, Nærum, Vedbæk",
    description: "Personlig bedemand i Birkerød, Holte, Nærum og Vedbæk. Rudersdals fem kirkegårde er kommunale. Faste priser og ingen mellemled. Ring til mig på 28 14 60 11.",
  },
  "/min-sidste-vilje": {
    title: "Min Sidste Vilje – skema og ønsker til egen begravelse",
    description: "Skriv dine ønsker til din egen afsked ned. Hent skemaet Min Sidste Vilje gratis, eller få hjælp ved et gratis hjemmebesøg. Ring til mig på 28 14 60 11.",
  },
  "/hornbaek": {
    title: "Bedemand Hornbæk – Kim Bondo, døgnet rundt",
    description: "Personlig bedemand i Hornbæk og Hellebæk. Faste priser. Ring til mig på 28 14 60 11.",
  },
  "/gilleleje": {
    title: "Bedemand Gilleleje – Kim Bondo, døgnet rundt",
    description: "Personlig bedemand i Gilleleje og Gribskov. Jeg kender Gilleleje Kirke, Søborg Kirke og kirkegårdene. Faste priser. Ring til mig på 28 14 60 11.",
  },
  "/alsgaarde": {
    title: "Bedemand Ålsgårde – Kim Bondo, døgnet rundt",
    description: "Personlig bedemand i Ålsgårde og Hellebæk. Jeg kender Hellebæk Kirke og Ålsgårde Kirkegård og hjælper jer hele vejen. Ring til mig på 28 14 60 11.",
  },
  "/humlebaek": {
    title: "Bedemand Humlebæk – Kim Bondo, døgnet rundt",
    description: "Personlig bedemand i Humlebæk og Fredensborg Kommune. Ring til mig på 28 14 60 11.",
  },
  "/prisberegner": {
    title: "Prisberegner – Bedemand Kim Bondo",
    description: "Få et vejledende overslag på begravelse eller bisættelse. Faste priser og gennemsigtighed. Ring til mig på 28 14 60 11.",
  },
  "/persondatapolitik": {
    title: "Persondatapolitik – Bedemand Kim Bondo",
    description: "Sådan behandler Bedemand København ApS dine personoplysninger: kontaktformular, kundeforhold, cookies, opbevaring og dine rettigheder efter GDPR.",
  },
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectMetaTags(html: string, pathname: string): string {
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

  // Replace the placeholder <title> tag and inject full meta block
  return html
    .replace(/<title>[^<]*<\/title>/, metaBlock)
    .replace(/<meta name="description"[^>]*>/g, "") // remove duplicate description
    .replace(/<link rel="canonical"[^>]*>/g, "");   // remove duplicate canonical
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Load SSR render function (only in production)
  let ssrRender: ((url: string) => string) | null = null;
  if (process.env.NODE_ENV === "production") {
    try {
      // dist/index.js has __dirname = dist/, so SSR bundle is at dist/server/entry-server.js
      const ssrPath = path.resolve(DIST_DIR, "server", "entry-server.js");
      if (fs.existsSync(ssrPath)) {
        const ssrModule = await import(pathToFileURL(ssrPath).href);
        ssrRender = ssrModule.render;
        console.log("SSR render function loaded successfully");
      } else {
        console.warn("SSR bundle not found at", ssrPath, "— falling back to CSR");
      }
    } catch (e) {
      console.warn("Failed to load SSR bundle:", e, "— falling back to CSR");
    }
  }

  // Security headers
  app.use((_req, res, next) => {
    // HSTS — tell browsers to always use HTTPS for 1 year
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    res.setHeader(
      "Content-Security-Policy",
      [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://eu.umami.is https://files.manuscdn.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https://www.bedemandkobenhavn.dk https://*.manus.space https://*.manuscdn.com",
        "connect-src 'self' https://eu.umami.is https://api.web3forms.com",
        "frame-ancestors 'self' https://*.manus.space https://*.manus.computer",
      ].join("; ")
    );
    next();
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // index: false prevents express.static from serving index.html directly for "/"
  // which would bypass our SSR handler (app.get("*")) that injects rendered React HTML.
  app.use(express.static(staticPath, { index: false }));

  // Handle client-side routing — inject per-route meta tags into index.html
  app.get("*", (req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    fs.readFile(indexPath, "utf-8", (err, template) => {
      if (err) {
        res.status(500).send("Server error");
        return;
      }
      const pathname = req.path;

      let html = template;

      // SSR: render React to string and inject into <div id="root">
      if (ssrRender) {
        try {
          const appHtml = ssrRender(pathname);
          html = template.replace(
            '<div id="root"></div>',
            `<div id="root">${appHtml}</div>`
          );
        } catch (e) {
          console.error("SSR render error for", pathname, ":", e);
          // Fall back to CSR on SSR error
          html = template;
        }
      }

      const injected = injectMetaTags(html, pathname);
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      // Return 404 for unknown routes; known routes are those defined in ROUTE_META
      const isKnownRoute = pathname === "/" || pathname in ROUTE_META;
      if (isKnownRoute) {
        res.send(injected);
      } else {
        res.status(404).send(injected);
      }
    });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
