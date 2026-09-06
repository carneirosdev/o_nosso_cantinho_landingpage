import { site, siteUrl } from "@/lib/site-config";

/**
 * Structured Data para negócio local / restaurante (RNF-003, secção 17 do SRS).
 * ⚠️ Depende de contactos e morada reais em site-config.ts.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.legalName,
    description: site.shortDescription,
    url: siteUrl,
    image: `${siteUrl}/images/banner.jpg`,
    servesCuisine: ["Pizza", "Portuguesa", "Petiscos"],
    priceRange: "$$",
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.addressLine,
      addressLocality: site.contact.addressCity,
      addressCountry: "AO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.contact.latitude,
      longitude: site.contact.longitude,
    },
    openingHoursSpecification: site.openingHours.map((o) => ({
      "@type": "OpeningHoursSpecification",
      description: `${o.days}: ${o.hours}`,
    })),
    sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok].filter(
      Boolean,
    ),
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Piscina", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Espaço para eventos",
        value: true,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
