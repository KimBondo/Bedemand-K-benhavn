import { useEffect } from "react";

/**
 * SchemaOrg – injects JSON-LD structured data into <head>.
 * Supports FuneralHome (LocalBusiness), FAQPage, Service and BreadcrumbList schemas.
 *
 * Google uses these for rich results in local search, knowledge panels and FAQ snippets.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  price?: string;
}

interface SchemaOrgProps {
  type: "LocalBusiness" | "FAQPage" | "both";
  faqItems?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  services?: ServiceItem[];
  pageUrl?: string;
}

const BASE_URL = "https://bedemandkobenhavn.dk";

const KIM_LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FuneralHome"],
  "@id": `${BASE_URL}/kim-bondo`,
  "name": "Kim Bondo – Bedemand København",
  "alternateName": "Bedemand Kim Bondo",
  "description": "Personlig bedemand i København og Nordsjælland. Hjælp til bisættelse, begravelse og afsked med nærvær og ro. Gennemsigtige priser – bisættelse fra 17.395 kr., begravelse fra 18.500 kr.",
  "url": `${BASE_URL}/kim-bondo`,
  "telephone": "+4522211437",
  "email": "kim@bedemandkobenhavn.dk",
  "vatID": "DK45084159",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vandtårnsvej 62A",
    "addressLocality": "Søborg",
    "postalCode": "2860",
    "addressRegion": "Hovedstaden",
    "addressCountry": "DK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.7297,
    "longitude": 12.5011
  },
  "areaServed": [
    { "@type": "City", "name": "København" },
    { "@type": "City", "name": "Frederiksberg" },
    { "@type": "City", "name": "Gentofte" },
    { "@type": "City", "name": "Lyngby-Taarbæk" },
    { "@type": "City", "name": "Helsingør" },
    { "@type": "City", "name": "Hillerød" },
    { "@type": "City", "name": "Hørsholm" },
    { "@type": "City", "name": "Nørrebro" },
    { "@type": "City", "name": "Østerbro" },
    { "@type": "City", "name": "Vesterbro" },
    { "@type": "City", "name": "Amager" },
    { "@type": "AdministrativeArea", "name": "Nordsjælland" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "Fra 17.395 kr.",
  "currenciesAccepted": "DKK",
  "paymentAccepted": "Bankoverførsel, MobilePay",
  "image": `${BASE_URL}/manus-storage/kim-bondo-portrait-neutral-bg_dfb527d8.png`,
  "logo": `${BASE_URL}/manus-storage/kim-bondo-portrait-neutral-bg_dfb527d8.png`,
  "founder": {
    "@type": "Person",
    "name": "Kim Bondo",
    "telephone": "+4522211437",
    "email": "kim@bedemandkobenhavn.dk"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Begravelsesydelser",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enkel bisættelse",
          "description": "Komplet bisættelse med koordinering, klargøring, rustvognskørsel og kremering."
        },
        "price": "17395",
        "priceCurrency": "DKK"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enkel begravelse",
          "description": "Komplet begravelse med koordinering, klargøring, rustvognskørsel og kistenedsættelse."
        },
        "price": "18500",
        "priceCurrency": "DKK"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Afsked uden ceremoni",
          "description": "Stille afsked uden ceremoni – kremering og urnenedsættelse."
        },
        "price": "15500",
        "priceCurrency": "DKK"
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/bedemandkobenhavn"
  ]
};

export default function SchemaOrg({ type, faqItems, breadcrumbs, services, pageUrl }: SchemaOrgProps) {
  useEffect(() => {
    const schemas: object[] = [];

    if (type === "LocalBusiness" || type === "both") {
      schemas.push(KIM_LOCAL_BUSINESS);
    }

    if ((type === "FAQPage" || type === "both") && faqItems && faqItems.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      });
    }

    // BreadcrumbList – always inject when breadcrumbs are provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      });
    }

    // Service schemas – for service-specific pages
    if (services && services.length > 0) {
      services.forEach((svc) => {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": svc.name,
          "name": svc.name,
          "description": svc.description,
          "provider": {
            "@type": "LocalBusiness",
            "@id": `${BASE_URL}/kim-bondo`
          },
          "areaServed": { "@type": "AdministrativeArea", "name": "København og Nordsjælland" },
          ...(svc.price ? {
            "offers": {
              "@type": "Offer",
              "price": svc.price,
              "priceCurrency": "DKK"
            }
          } : {}),
          ...(pageUrl ? { "url": pageUrl } : {})
        });
      });
    }

    // Inject each schema as a separate <script> tag
    const elements: HTMLScriptElement[] = [];
    schemas.forEach((schema, i) => {
      const existing = document.querySelector(`script[data-schema-id="schema-${i}"]`);
      if (existing) existing.remove();

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema-id", `schema-${i}`);
      script.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
      elements.push(script);
    });

    return () => {
      elements.forEach((el) => el.remove());
    };
  }, [type, faqItems, breadcrumbs, services, pageUrl]);

  return null;
}
