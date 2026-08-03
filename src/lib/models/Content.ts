import { Schema, model, models } from "mongoose";

const sectionSchema = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, default: "" },
    bullets: { type: [String], default: [] },
  },
  { _id: false },
);

const faqSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false },
);

const pageSchema = new Schema(
  {
    slug: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    heroTitle: { type: String, required: true },
    heroDescription: { type: String, required: true },
    heroImage: { type: String, default: "" },
    sections: { type: [sectionSchema], default: [] },
    kind: { type: String, enum: ["page", "location"], default: "page" },
    cityLabel: { type: String, default: "" },
    published: { type: Boolean, default: true },
  },
  { _id: false },
);

const serviceSchema = new Schema(
  {
    slug: { type: String, required: true },
    name: { type: String, required: true },
    shortName: { type: String, required: true },
    cardDescription: { type: String, required: true },
    heroTitle: { type: String, required: true },
    heroDescription: { type: String, required: true },
    heroImage: { type: String, default: "" },
    whoFor: { type: String, required: true },
    warningSigns: { type: [String], default: [] },
    approach: { type: [String], default: [] },
    sections: { type: [sectionSchema], default: [] },
    faq: { type: [faqSchema], default: [] },
    priceRange: { type: String, default: "" },
    pricingNote: { type: String, default: "" },
  },
  { _id: false },
);

const pricingBulletSchema = new Schema(
  {
    label: { type: String, default: "" },
    text: { type: String, default: "" },
  },
  { _id: false },
);

const pricingTreatmentSchema = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    priceRange: { type: String, default: "" },
    note: { type: String, default: "" },
    intro: { type: String, default: "" },
    image: { type: String, default: "" },
    bullets: { type: [pricingBulletSchema], default: [] },
    featured: { type: Boolean, default: false },
  },
  { _id: false },
);

const pricingSchema = new Schema(
  {
    heroEyebrow: String,
    heroTitle: String,
    heroSubtitle: String,
    heroDescription: String,
    heroImage: String,
    honestyTitle: String,
    honestyContent: String,
    honestyImage: String,
    bedBugSectionTitle: String,
    bedBugTreatments: { type: [pricingTreatmentSchema], default: [] },
    comparisonTitle: String,
    comparisonIntro: String,
    comparisonRows: {
      type: [
        {
          treatment: String,
          price: String,
          speed: String,
          bestFor: String,
          highlight: Boolean,
        },
      ],
      default: [],
    },
    keyDifferences: {
      type: [{ title: String, text: String }],
      default: [],
    },
    generalSectionTitle: String,
    generalPests: { type: [pricingTreatmentSchema], default: [] },
    midBannerTitle: String,
    midBannerCta: String,
    warrantiesTitle: String,
    warrantiesIntro: String,
    warranties: {
      type: [{ title: String, text: String }],
      default: [],
    },
    ctaTitle: String,
    ctaDescription: String,
    ctaImage: String,
  },
  { _id: false },
);

const contentSchema = new Schema(
  {
    key: { type: String, required: true, unique: true, default: "main" },
    site: {
      businessName: String,
      legalName: String,
      tagline: String,
      logoSrc: String,
      city: String,
      province: String,
      country: String,
      serviceAreaLabel: String,
      serviceAreas: [String],
      serviceAreasNote: String,
      phone: String,
      phoneHref: String,
      email: String,
      emailHref: String,
      facebook: String,
      formRecipient: String,
      responseMessage: String,
    },
    pages: { type: [pageSchema], default: [] },
    services: { type: [serviceSchema], default: [] },
    faqs: { type: [faqSchema], default: [] },
    pricing: { type: pricingSchema, default: undefined },
  },
  { timestamps: true },
);

export const ContentModel =
  models.Content || model("Content", contentSchema, "content");
