import { homeFaqs, primaryServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import type { CmsContent, EditablePage } from "@/types/cms";

const detailPages: EditablePage[] = [
  {
    slug: "about",
    title: "About Pest Warriors",
    description: "Family-owned and operated pest control in Calgary.",
    heroTitle: "Family-Owned. Quality-Focused. Calgary Proud.",
    heroDescription:
      "We provide inspection-led pest control with practical treatment plans tailored to your property.",
    heroImage: siteConfig.images.about.src,
    sections: [
      {
        id: "story",
        title: "Our Story",
        content:
          "Pest Warriors is a local team focused on responsible service, clear communication, and measurable results for residential and commercial properties.",
        image: siteConfig.images.about.src,
        bullets: [
          "Family-owned and operated",
          "Inspection-led treatment plans",
          "Residential and commercial service",
        ],
      },
    ],
  },
  {
    slug: "property-types",
    title: "Property Types We Serve",
    description: "Residential, commercial, and multi-unit pest control coverage.",
    heroTitle: "Every Type of Property Covered",
    heroDescription:
      "From homes to industrial facilities, our treatment plans are adapted to how each space is used.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "coverage",
        title: "Coverage",
        content:
          "We support homeowners, property managers, and business operators with targeted pest control programs.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Residential homes",
          "Apartments and condos",
          "Hotels and motels",
          "Healthcare and schools",
          "Industrial and commercial",
        ],
      },
    ],
  },
  {
    slug: "why-choose",
    title: "Why Choose Pest Warriors",
    description: "Fast, discreet, and practical pest control in Calgary.",
    heroTitle: "Smart Solutions. Lasting Protection.",
    heroDescription:
      "Our approach combines accurate inspections, transparent recommendations, and accountable service.",
    heroImage: siteConfig.images.about.src,
    sections: [
      {
        id: "benefits",
        title: "What You Get",
        content:
          "Every plan is designed to solve the current issue and reduce the risk of recurrence.",
        image: siteConfig.images.about.src,
        bullets: [
          "Fast and discreet response",
          "Qualified technicians",
          "Practical prevention guidance",
        ],
      },
    ],
  },
  {
    slug: "how-it-works",
    title: "How It Works",
    description: "Simple 4-step process from request to follow-up.",
    heroTitle: "Our Simple 4-Step Process",
    heroDescription:
      "Share your issue, get a plan, receive treatment, and move forward with confidence.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "steps",
        title: "Process",
        content:
          "We keep every project structured and transparent so you always know what happens next.",
        image: siteConfig.images.hero.src,
        bullets: [
          "1) Quote request and intake",
          "2) Initial assessment",
          "3) Targeted treatment",
          "4) Follow-up guidance",
        ],
      },
    ],
  },
  {
    slug: "offers",
    title: "Offers",
    description: "Current promotional offers from Pest Warriors.",
    heroTitle: "Current Promotions",
    heroDescription:
      "See active offers and eligibility notes before booking your service.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "promo",
        title: "New Customer Offer",
        content: `${siteConfig.offer.long} ${siteConfig.offer.termsLong}`,
        image: siteConfig.images.hero.src,
        bullets: [siteConfig.offer.headline],
      },
    ],
  },
  {
    slug: "service-area",
    title: "Service Area",
    description: "Calgary and nearby communities served by Pest Warriors.",
    heroTitle: "Proudly Serving Calgary & Nearby Communities",
    heroDescription: "Local coverage with nearby service available by request.",
    heroImage: "/images/pest-warriors-service-map.webp",
    sections: [
      {
        id: "areas",
        title: "Areas We Serve",
        content: "We currently serve Calgary and selected surrounding communities.",
        image: "/images/pest-warriors-service-map.webp",
        bullets: [...siteConfig.location.serviceAreas],
      },
    ],
  },
];

export const defaultCmsContent: CmsContent = {
  site: {
    businessName: siteConfig.business.name,
    legalName: siteConfig.business.legalName,
    tagline: siteConfig.business.tagline,
    logoSrc: siteConfig.business.logoSrc ?? "",
    city: siteConfig.location.city,
    province: siteConfig.location.province,
    country: siteConfig.location.country,
    serviceAreaLabel: siteConfig.location.serviceAreaLabel,
    serviceAreas: [...siteConfig.location.serviceAreas],
    serviceAreasNote: siteConfig.location.serviceAreasNote,
    phone: siteConfig.contact.phone,
    phoneHref: siteConfig.contact.phoneHref,
    email: siteConfig.contact.email,
    emailHref: siteConfig.contact.emailHref,
    facebook: siteConfig.contact.facebook,
    formRecipient: siteConfig.contact.formRecipient,
    responseMessage: siteConfig.contact.responseMessage,
  },
  pages: detailPages,
  services: primaryServices.map((service) => ({
    slug: service.slug,
    name: service.name,
    shortName: service.shortName,
    cardDescription: service.cardDescription,
    heroTitle: service.name,
    heroDescription: service.cardDescription,
    heroImage: siteConfig.images.hero.src,
    whoFor: service.whoFor,
    warningSigns: [...service.warningSigns],
    approach: [...service.approach],
    sections: [
      {
        id: "overview",
        title: "Service Overview",
        content: service.cardDescription,
        image: siteConfig.images.hero.src,
        bullets: [],
      },
    ],
    faq: service.faq.map((item) => ({ ...item })),
  })),
  faqs: homeFaqs.map((item) => ({ ...item })),
};
