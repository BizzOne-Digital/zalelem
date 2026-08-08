export type EditableSection = {
  id: string;
  title: string;
  content: string;
  image: string;
  bullets: string[];
};

export type EditablePage = {
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  sections: EditableSection[];
  /** Marketing page vs location city page */
  kind?: "page" | "location";
  /** Display label for locations (e.g. "Fort McMurray") */
  cityLabel?: string;
  /** Province for location pages */
  province?: "AB" | "BC";
  /** When false, hidden from nav / locations index */
  published?: boolean;
};

export type ServiceFaq = { question: string; answer: string };

export type EditableService = {
  slug: string;
  name: string;
  shortName: string;
  category?: "pest" | "rodent" | "bird" | "specialty";
  cardDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  whoFor: string;
  warningSigns: string[];
  approach: string[];
  sections: EditableSection[];
  faq: ServiceFaq[];
  priceRange?: string;
  pricingNote?: string;
};

export type SiteSettings = {
  businessName: string;
  legalName: string;
  tagline: string;
  logoSrc: string;
  city: string;
  province: string;
  country: string;
  serviceAreaLabel: string;
  serviceAreas: string[];
  serviceAreasNote: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  facebook: string;
  formRecipient: string;
  responseMessage: string;
};

export type PricingBullet = {
  label: string;
  text: string;
};

export type PricingTreatment = {
  id: string;
  title: string;
  priceRange: string;
  note: string;
  intro: string;
  image: string;
  bullets: PricingBullet[];
  featured?: boolean;
};

export type PricingComparisonRow = {
  treatment: string;
  price: string;
  speed: string;
  bestFor: string;
  highlight: boolean;
};

export type PricingKeyDifference = {
  title: string;
  text: string;
};

export type PricingWarranty = {
  title: string;
  text: string;
};

export type PricingContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  honestyTitle: string;
  honestyContent: string;
  honestyImage: string;
  bedBugSectionTitle: string;
  bedBugTreatments: PricingTreatment[];
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonRows: PricingComparisonRow[];
  keyDifferences: PricingKeyDifference[];
  generalSectionTitle: string;
  generalPests: PricingTreatment[];
  midBannerTitle: string;
  midBannerCta: string;
  warrantiesTitle: string;
  warrantiesIntro: string;
  warranties: PricingWarranty[];
  ctaTitle: string;
  ctaDescription: string;
  ctaImage: string;
};

export type CmsContent = {
  site: SiteSettings;
  pages: EditablePage[];
  services: EditableService[];
  faqs: ServiceFaq[];
  pricing: PricingContent;
};
