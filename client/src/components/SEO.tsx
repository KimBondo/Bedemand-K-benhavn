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

export default function SEO({ title, description, url, image, noindex }: SEOProps) {
  useEffect(() => {
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
    if (url) setLink("canonical", url);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property="og:title"', title);
    setMeta('meta[property="og:description"]', 'property="og:description"', description);
    setMeta('meta[property="og:type"]', 'property="og:type"', "website");
    setMeta('meta[property="og:locale"]', 'property="og:locale"', "da_DK");
    setMeta('meta[property="og:site_name"]', 'property="og:site_name"', "Bedemand København");
    if (url) setMeta('meta[property="og:url"]', 'property="og:url"', url);
    if (image) setMeta('meta[property="og:image"]', 'property="og:image"', image);
    if (image) setMeta('meta[property="og:image:alt"]', 'property="og:image:alt"', title);
    setMeta('meta[property="og:image:width"]', 'property="og:image:width"', "1200");
    setMeta('meta[property="og:image:height"]', 'property="og:image:height"', "630");

    // Twitter card
    setMeta('meta[name="twitter:card"]', 'name="twitter:card"', "summary_large_image");
    setMeta('meta[name="twitter:title"]', 'name="twitter:title"', title);
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description);
    if (image) setMeta('meta[name="twitter:image"]', 'name="twitter:image"', image);
    if (image) setMeta('meta[name="twitter:image:alt"]', 'name="twitter:image:alt"', title);
  }, [title, description, url, image, noindex]);

  return null;
}
