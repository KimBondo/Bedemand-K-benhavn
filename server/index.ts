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
        "connect-src 'self' https://eu.umami.is",
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
      res.send(injected);
    });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
