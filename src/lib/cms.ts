import { unstable_noStore as noStore } from "next/cache";
import { connectDb } from "@/lib/db";
import { defaultCmsContent } from "@/lib/default-content";
import { ContentModel } from "@/lib/models/Content";
import type { CmsContent } from "@/types/cms";

async function ensureContentDocument() {
  const conn = await connectDb();
  if (!conn) return defaultCmsContent;
  const doc = await ContentModel.findOne({ key: "main" }).lean<CmsContent | null>();
  if (doc) return doc;
  const created = await ContentModel.create({ key: "main", ...defaultCmsContent });
  return created.toObject() as CmsContent;
}

export async function getCmsContent(): Promise<CmsContent> {
  noStore();
  const doc = await ensureContentDocument();
  return {
    site: doc.site,
    pages: doc.pages,
    services: doc.services,
    faqs: doc.faqs,
  };
}

export async function updateCmsContent(partial: Partial<CmsContent>) {
  const conn = await connectDb();
  if (!conn) return { ...defaultCmsContent, ...partial };
  await ensureContentDocument();
  const update: Record<string, unknown> = {};
  if (partial.site) update.site = partial.site;
  if (partial.pages) update.pages = partial.pages;
  if (partial.services) update.services = partial.services;
  if (partial.faqs) update.faqs = partial.faqs;
  const updated = await ContentModel.findOneAndUpdate({ key: "main" }, update, {
    new: true,
  }).lean<CmsContent | null>();
  return updated;
}
