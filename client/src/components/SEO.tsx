/**
 * SEO – dynamic head metadata per page.
 * Sets document.title, meta description, canonical link, and Open Graph/Twitter tags.
 */

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  noindex?: boolean;
}

const BASE_URL = "https://www.bedemandkobenhavn.dk";

/** Kanonisk adresse: altid absolut og altid med afsluttende skråstreg. */
function kanonisk(url?: string) {
  if (!url) return undefined;
  const abs = url.startsWith("http") ? url : `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
  return abs.endsWith("/") ? abs : `${abs}/`;
}

/** Billeder til Open Graph skal være absolutte adresser. */
function absolutBillede(image?: string) {
  if (!image) return undefined;
  return image.startsWith("http") ? image : `${BASE_URL}${image.startsWith("/") ? "" : "/"}${image}`;
}

export default function SEO({ title, description, url, image, noindex }: SEOProps) {
  useEffect(() => {
    const kanoniskUrl = kanonisk(url);
    const billede = absolutBillede(image);
    // Title
    document.title = title;

    // Helper to upsert a <meta> tag
    const setMeta = (selector: string, attr: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [key, val] = attr.split("=");
        el.setAttribute(key, val.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to upsert a <link> tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Robots / noindex
    if (noindex) {
      setMeta('meta[name="robots"]', 'name="robots"', "noindex, nofollow");
    } else {
      const robotsEl = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
      if (robotsEl) robotsEl.setAttribute("content", "index, follow");
    }

    setMeta('meta[name="description"]', 'name="description"', description);

    // Canonical URL
    if (kanoniskUrl) setLink("canonical", kanoniskUrl);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property="og:title"', title);
    setMeta('meta[property="og:description"]', 'property="og:description"', description);
    setMeta('meta[property="og:type"]', 'property="og:type"', "website");
    setMeta('meta[property="og:locale"]', 'property="og:locale"', "da_DK");
    setMeta('meta[property="og:site_name"]', 'property="og:site_name"', "Bedemand København");
    if (kanoniskUrl) setMeta('meta[property="og:url"]', 'property="og:url"', kanoniskUrl);
    if (billede) setMeta('meta[property="og:image"]', 'property="og:image"', billede);
    if (billede) setMeta('meta[property="og:image:alt"]', 'property="og:image:alt"', title);
    setMeta('meta[property="og:image:width"]', 'property="og:image:width"', "2304");
    setMeta('meta[property="og:image:height"]', 'property="og:image:height"', "1536");

    // Twitter card
    setMeta('meta[name="twitter:card"]', 'name="twitter:card"', "summary_large_image");
    setMeta('meta[name="twitter:title"]', 'name="twitter:title"', title);
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description);
    if (billede) setMeta('meta[name="twitter:image"]', 'name="twitter:image"', billede);
    if (billede) setMeta('meta[name="twitter:image:alt"]', 'name="twitter:image:alt"', title);
  }, [title, description, url, image, noindex]);

  return null;
}
