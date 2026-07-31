/**
 * Upserts a single CMS page by slug into MongoDB.
 * Usage: npx tsx scripts/upsert-page.ts commercial
 */
import { config } from "dotenv";
import { resolve } from "node:path";
import mongoose from "mongoose";
import { defaultCmsContent } from "../src/lib/default-content";

config({ path: resolve(process.cwd(), ".env.local") });

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: npx tsx scripts/upsert-page.ts <slug>");
  process.exit(1);
}

const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017";
const MONGODB_DB = process.env.MONGODB_DB ?? "pest-warriors";

async function main() {
  const page = defaultCmsContent.pages.find((p) => p.slug === slug);
  if (!page) throw new Error(`Page "${slug}" not found in default content.`);

  await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB });
  const col = mongoose.connection.db?.collection("content");
  if (!col) throw new Error("No database connection.");

  let doc = await col.findOne({ key: "main" });
  if (!doc) {
    await col.updateOne(
      { key: "main" },
      { $set: { key: "main", ...defaultCmsContent } },
      { upsert: true },
    );
    console.log(`Created main document and included page "${slug}".`);
  } else {
    const pages = Array.isArray(doc.pages) ? [...doc.pages] : [];
    const idx = pages.findIndex((p: { slug?: string }) => p.slug === slug);
    if (idx >= 0) pages[idx] = page;
    else pages.push(page);
    await col.updateOne({ key: "main" }, { $set: { pages } });
    console.log(
      idx >= 0
        ? `Updated page "${slug}" in MongoDB.`
        : `Added page "${slug}" to MongoDB.`,
    );
  }

  console.log(`Title: ${page.title}`);
  console.log(`Sections: ${page.sections.length}`);
  await mongoose.disconnect();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
