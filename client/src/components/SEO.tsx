/**
 * SEO – dynamic head metadata per page.
 * Sets document.title, meta description, and Open Graph tags.
 */

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export default function SEO({ title, description, url, image }: SEOProps) {
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

    setMeta('meta[name="description"]', 'name="description"', description);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property="og:title"', title);
    setMeta('meta[property="og:description"]', 'property="og:description"', description);
    setMeta('meta[property="og:type"]', 'property="og:type"', "website");
    if (url) setMeta('meta[property="og:url"]', 'property="og:url"', url);
    if (image) setMeta('meta[property="og:image"]', 'property="og:image"', image);

    // Twitter card
    setMeta('meta[name="twitter:card"]', 'name="twitter:card"', "summary_large_image");
    setMeta('meta[name="twitter:title"]', 'name="twitter:title"', title);
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description);
    if (image) setMeta('meta[name="twitter:image"]', 'name="twitter:image"', image);
  }, [title, description, url, image]);

  return null;
}
