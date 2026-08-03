/**
 * Seeds the MongoDB `content` collection with default Pest Warriors CMS data.
 * Merges missing pages, services, and FAQs — never overwrites existing records.
 *
 * Usage:
 *   npm run seed
 *
 * Compass connection:
 *   mongodb://127.0.0.1:27017
 *   Database: pest-warriors
 *   Collection: content
 */
import { config } from "dotenv";
import { resolve } from "node:path";
import mongoose from "mongoose";
import { mergeMissingDefaults } from "../src/lib/cms-merge";
import { defaultCmsContent } from "../src/lib/default-content";
import type { CmsContent } from "../src/types/cms";

config({ path: resolve(process.cwd(), ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017";
const MONGODB_DB = process.env.MONGODB_DB ?? "pest-warriors";

const contentSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true, default: "main" },
    site: { type: Object, required: true },
    pages: { type: Array, default: [] },
    services: { type: Array, default: [] },
    faqs: { type: Array, default: [] },
    pricing: { type: Object, default: undefined },
  },
  { timestamps: true },
);

const Content =
  mongoose.models.SeedContent ||
  mongoose.model("SeedContent", contentSchema, "content");

async function main() {
  console.log(`Connecting to ${MONGODB_URI} (database: ${MONGODB_DB})...`);
  await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB });

  const existing = await Content.findOne({ key: "main" }).lean<CmsContent | null>();

  let doc: CmsContent;
  if (!existing) {
    doc = (
      await Content.create({ key: "main", ...defaultCmsContent })
    ).toObject() as CmsContent;
    console.log("Created new main document with all default content.");
  } else {
    const beforeSlugs = new Set((existing.pages ?? []).map((p) => p.slug));
    const { content, changed } = mergeMissingDefaults(existing);

    doc = (
      await Content.findOneAndUpdate(
        { key: "main" },
        {
          $set: {
            pages: content.pages,
            services: content.services,
            faqs: content.faqs,
            pricing: content.pricing,
          },
        },
        { returnDocument: "after" },
      )
    )?.toObject() as CmsContent;

    if (!changed) {
      console.log("Nothing new to add — existing content was kept as-is.");
    } else {
      const addedPages = content.pages
        .filter((p) => !beforeSlugs.has(p.slug))
        .map((p) => p.slug);
      console.log("Merged missing defaults (existing records untouched):");
      if (addedPages.length > 0) console.log(`  Pages added:    ${addedPages.join(", ")}`);
    }
  }

  console.log("\nDatabase seed complete.");
  console.log(`  Database:   ${MONGODB_DB}`);
  console.log(`  Collection: content`);
  console.log(`  Document:   key = "main"`);
  console.log(`  Pages:      ${doc.pages.length}`);
  console.log(`  Services:   ${doc.services.length}`);
  console.log(`  FAQs:       ${doc.faqs.length}`);
  console.log(`  Pricing:    ${doc.pricing ? "yes" : "missing"}`);

  await mongoose.disconnect();
}

main().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
