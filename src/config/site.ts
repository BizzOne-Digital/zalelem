/**
 * CENTRAL SITE CONFIGURATION — single source of truth.
 *
 * To create a version of this website for another city:
 *   1. Update the `location` object below (city, service areas, local copy).
 *   2. Replace the two images in /public/images (keep the same filenames or
 *      update the paths referenced here).
 *   3. Review `seo` titles/descriptions and the hero copy.
 *   4. Update `contact` details if the new location uses different ones.
 * No other files should require edits for a standard city rollout.
 */

export const siteConfig = {
  business: {
    name: "Pest Warriors",
    legalName: "Pest Warriors Pest Control",
    tagline: "Family-Owned & Operated",
    /** Set to a logo image path (e.g. "/images/logo.svg") once the client
     *  supplies one; the header/footer wordmark component will use it
     *  automatically and fall back to the typographic wordmark otherwise. */
    logoSrc: null as string | null,
  },

  location: {
    city: "Calgary",
    province: "Alberta",
    provinceAbbr: "AB",
    country: "Canada",
    serviceAreaLabel: "Serving Calgary & Surrounding Areas",
    serviceAreas: [
      "Calgary",
      "Airdrie",
      "Chestermere",
      "Strathmore",
      "Cochrane",
      "Okotoks",
    ],
    serviceAreasNote: "Nearby communities available by request.",
  },

  contact: {
    phone: "780-937-6257",
    phoneHref: "tel:7809376257",
    email: "Ztg2023@hotmail.com",
    emailHref: "mailto:Ztg2023@hotmail.com",
    facebook: "https://www.facebook.com/share/18rZW6vaCs/?mibextid=wwXIfr",
    /** Recipient for contact-form submissions (used server-side). */
    formRecipient: "Ztg2023@hotmail.com",
    responseMessage:
      "We review every request and respond as quickly as possible during business hours.",
  },

  offer: {
    headline: "20% OFF FOR NEW CUSTOMERS",
    short: "20% off your first qualifying service",
    long: "Receive 20% off your first qualifying service.",
    terms: "Terms may apply.",
    termsLong: "Offer eligibility and service terms may vary. Contact us for details.",
    ctaLabel: "Claim My 20% Offer",
  },

  hero: {
    eyebrow: "Calgary's Trusted Pest Control Experts",
    headline: "Secure Your Calgary Property with Safe, Proven Pest Control",
    headlineHighlight: "Calgary Property",
    description:
      "Fast, discreet, and responsible pest solutions for homes, businesses, property managers, hotels, healthcare facilities, schools, and industrial properties.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Call 780-937-6257",
    trustIndicators: [
      "Residential & Commercial",
      "Top Rated Local Pest Experts",
      "Eco-Friendly Products",
      "Fast & Reliable Service",
    ],
  },

  /**
   * Business statistics — UNCONFIRMED BY CLIENT.
   * Each stat renders only if `enabled: true`. The old website claimed
   * "200,000 treatments"; leave disabled until the client confirms it.
   */
  stats: {
    treatmentsCompleted: {
      enabled: false,
      value: "200,000+",
      label: "Treatments completed",
    },
  },

  /**
   * Guarantee wording — deliberately responsible. The old site's
   * "100% guaranteed" claim was NOT carried over. Toggle `enabled`
   * off to hide guarantee mentions entirely.
   */
  guarantee: {
    enabled: true,
    text: "Service warranty may be available for qualifying treatments. Coverage varies by pest, property, and treatment plan.",
  },

  seo: {
    siteUrl: "https://pestwarriors.ca",
    home: {
      title: "Pest Control Calgary | Residential & Commercial | Pest Warriors",
      description:
        "Professional pest control in Calgary for homes, property managers, hotels, schools, healthcare facilities, and businesses. Request a customized quote from Pest Warriors.",
    },
    services: {
      title: "Pest Control Services Calgary | Pest Warriors",
      description:
        "Bed bug, carpenter ant, wasp, rodent, and cockroach control for Calgary homes and businesses. Inspection-led treatment plans from Pest Warriors.",
    },
    contact: {
      title: "Request Pest Control in Calgary | Pest Warriors",
      description:
        "Request a free pest-control quote in Calgary. Tell Pest Warriors what you are experiencing and our team will contact you about the next steps.",
    },
  },

  images: {
    hero: {
      src: "/images/pest-warriors-hero-dark.webp",
      alt: "Pest Warriors technician applying targeted treatment around a Calgary home at dusk",
    },
    about: {
      src: "/images/pest-warriors-inspection-dark.webp",
      alt: "Pest Warriors technician performing a detailed flashlight inspection along kitchen baseboards",
    },
    aboutSecondary: {
      src: "/images/pest-warriors-calgary-hero.webp",
      alt: "Pest Warriors technician with professional treatment equipment in a residential kitchen",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
