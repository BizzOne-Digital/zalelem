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
};

export type ServiceFaq = { question: string; answer: string };

export type EditableService = {
  slug: string;
  name: string;
  shortName: string;
  cardDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  whoFor: string;
  warningSigns: string[];
  approach: string[];
  sections: EditableSection[];
  faq: ServiceFaq[];
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

export type CmsContent = {
  site: SiteSettings;
  pages: EditablePage[];
  services: EditableService[];
  faqs: ServiceFaq[];
};
