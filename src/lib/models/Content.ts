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
  },
  { timestamps: true },
);

export const ContentModel =
  models.Content || model("Content", contentSchema, "content");
