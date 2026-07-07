import { useEffect } from "react";

/**
 * SchemaOrg – injects JSON-LD structured data into <head>.
 * Supports LocalBusiness and FAQPage schemas for Google rich results.
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface SchemaOrgProps {
  type: "LocalBusiness" | "FAQPage" | "both";
  faqItems?: FAQItem[];
}

const KIM_LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bedemandkbh-8wuvn9as.manus.space/kim-bondo",
  "name": "Kim Bondo – Bedemand",
  "description": "Personlig bedemand i København og Nordsjælland. Hjælp til bisættelse, begravelse og afsked med nærvær og ro. Gennemsigtige priser fra 15.500 kr.",
  "url": "https://bedemandkbh-8wuvn9as.manus.space/kim-bondo",
  "telephone": "+4522211437",
  "email": "kim@bedemandkobenhavn.dk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vandtårnsvej 62A",
    "addressLocality": "Søborg",
    "postalCode": "2860",
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
    { "@type": "City", "name": "Lyngby" },
    { "@type": "City", "name": "Helsingør" },
    { "@type": "City", "name": "Hillerød" },
    { "@type": "City", "name": "Hørsholm" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "Fra 15.500 kr.",
  "image": "https://bedemandkbh-8wuvn9as.manus.space/kim-bondo",
  "sameAs": []
};

export default function SchemaOrg({ type, faqItems }: SchemaOrgProps) {
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
  }, [type, faqItems]);

  return null;
}
