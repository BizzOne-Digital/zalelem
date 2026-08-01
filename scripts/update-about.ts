/**
 * Updates only the About page document inside MongoDB CMS content.
 * Usage: npx tsx scripts/update-about.ts
 */
import { config } from "dotenv";
import { resolve } from "node:path";
import mongoose from "mongoose";
import { defaultCmsContent } from "../src/lib/default-content";

config({ path: resolve(process.cwd(), ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017";
const MONGODB_DB = process.env.MONGODB_DB ?? "pest-warriors";

async function main() {
  await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB });
  const about = defaultCmsContent.pages.find((p) => p.slug === "about");
  if (!about) throw new Error("About page missing from default content.");

  const result = await mongoose.connection.db
    ?.collection("content")
    .updateOne(
      { key: "main" },
      { $set: { "pages.$[page]": about } },
      { arrayFilters: [{ "page.slug": "about" }] },
    );

  if (!result || result.matchedCount === 0) {
    // No document yet — upsert full seed with updated about
    await mongoose.connection.db?.collection("content").updateOne(
      { key: "main" },
      { $set: { key: "main", ...defaultCmsContent } },
      { upsert: true },
    );
    console.log("Created main content document with updated About page.");
  } else if (result.modifiedCount === 0) {
    // Page slug might not exist in array — push or replace pages
    const doc = await mongoose.connection.db
      ?.collection("content")
      .findOne({ key: "main" });
    const pages = Array.isArray(doc?.pages) ? [...doc.pages] : [];
    const idx = pages.findIndex((p: { slug?: string }) => p.slug === "about");
    if (idx >= 0) pages[idx] = about;
    else pages.unshift(about);
    await mongoose.connection.db
      ?.collection("content")
      .updateOne({ key: "main" }, { $set: { pages } });
    console.log("About page updated in MongoDB.");
  } else {
    console.log("About page updated in MongoDB.");
  }

  console.log(`Title: ${about.title}`);
  console.log(`Sections: ${about.sections.length}`);
  await mongoose.disconnect();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
