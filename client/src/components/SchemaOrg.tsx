/**
 * SchemaOrg – injects JSON-LD structured data into <head>.
 * Supports FuneralHome (LocalBusiness), FAQPage, Service, BreadcrumbList,
 * WebSite (sitelinks searchbox), Organization and ItemList schemas.
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

export interface ProductItem {
  name: string;
  description: string;
  image: string;
  price: string;
  sku: string;
}

interface SchemaOrgProps {
  type: "LocalBusiness" | "FAQPage" | "both" | "WebSite" | "ItemList";
  faqItems?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  services?: ServiceItem[];
  products?: ProductItem[];
  pageUrl?: string;
}

const BASE_URL = "https://www.bedemandkobenhavn.dk";

const KIM_LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FuneralHome"],
  "@id": `${BASE_URL}/#business`,
  "name": "Kim Bondo – Bedemand København",
  "alternateName": "Bedemand Kim Bondo",
  "description": "Personlig bedemand i København og Nordsjælland. Hjælp til bisættelse, begravelse og afsked med nærvær og ro. Gennemsigtige priser – bisættelse fra 19.500 kr., begravelse fra 21.500 kr.",
  "url": BASE_URL,
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
  "priceRange": "Fra 19.500 kr.",
  "currenciesAccepted": "DKK",
  "paymentAccepted": "Bankoverførsel, MobilePay",
  "image": `${BASE_URL}/images/kim-bondo-portrait-neutral-bg_dfb527d8.webp`,
  "logo": `${BASE_URL}/images/kim-bondo-portrait-neutral-bg_dfb527d8.webp`,
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
        "price": "19500",
        "priceCurrency": "DKK"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enkel begravelse",
          "description": "Komplet begravelse med koordinering, klargøring, rustvognskørsel og kistenedsættelse."
        },
        "price": "21500",
        "priceCurrency": "DKK"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Afsked uden ceremoni",
          "description": "Stille afsked uden ceremoni – kremering og urnenedsættelse."
        },
        "price": "13550",
        "priceCurrency": "DKK"
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/bedemandkobenhavn",
    "https://maps.google.com/?cid=18270352265939613039"
  ]
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": BASE_URL,
  "name": "Bedemand København og Nordsjælland",
  "description": "Find en personlig bedemand i København og Nordsjælland. Bisættelse, begravelse og afsked med nærvær og ro.",
  "inLanguage": "da-DK",
  "publisher": {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "Bedemand København",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/images/kim-bondo-portrait-neutral-bg_dfb527d8.webp`
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+4522211437",
      "contactType": "customer service",
      "areaServed": "DK",
      "availableLanguage": "Danish"
    }
  }
};

export default function SchemaOrg({ type, faqItems, breadcrumbs, services, products, pageUrl }: SchemaOrgProps) {
  const schemas: object[] = [];

  if (type === "WebSite") {
    schemas.push(WEBSITE_SCHEMA);
  }

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
          "@id": `${BASE_URL}/#business`
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

  // ItemList schema – for product/catalog pages
  if (type === "ItemList" && products && products.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Kister og urner",
      "description": "Udvalg af kister og urner til begravelse og bisættelse",
      "url": pageUrl || `${BASE_URL}/produkter`,
      "numberOfItems": products.length,
      "itemListElement": products.map((product, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": product.image.startsWith("http") ? product.image : `${BASE_URL}${product.image}`,
          "sku": product.sku,
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "DKK",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "LocalBusiness",
              "@id": `${BASE_URL}/#business`
            }
          }
        }
      }))
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          data-schema-id={`schema-${i}`}
          dangerouslySetInnerHTML={{
            // \u003c forhindrer at et "</script>" i data bryder ud af taggen
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
