import { siteConfig } from "@/config/site";
import { homeFaqs, primaryServices } from "@/config/services";

/**
 * LocalBusiness (PestControlService) schema. Deliberately excludes street
 * address, opening hours, and reviews — none are confirmed by the client.
 */
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "PestControlService" as const,
    name: siteConfig.business.name,
    url: siteConfig.seo.siteUrl,
    telephone: "+1-780-937-6257",
    email: siteConfig.contact.email,
    image: `${siteConfig.seo.siteUrl}${siteConfig.images.hero.src}`,
    sameAs: [siteConfig.contact.facebook],
    areaServed: siteConfig.location.serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, ${siteConfig.location.provinceAbbr}`,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.provinceAbbr,
      addressCountry: "CA",
    },
    makesOffer: primaryServices.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
