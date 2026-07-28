/**
 * Seeds the MongoDB `content` collection with default Pest Warriors CMS data.
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
import { defaultCmsContent } from "../src/lib/default-content";

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
  },
  { timestamps: true },
);

const Content =
  mongoose.models.SeedContent ||
  mongoose.model("SeedContent", contentSchema, "content");

async function main() {
  console.log(`Connecting to ${MONGODB_URI} (database: ${MONGODB_DB})...`);
  await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB });

  const doc = await Content.findOneAndUpdate(
    { key: "main" },
    { key: "main", ...defaultCmsContent },
    { upsert: true, returnDocument: "after", setDefaultsOnInsert: true },
  );

  console.log("Database seeded successfully.");
  console.log(`  Database:   ${MONGODB_DB}`);
  console.log(`  Collection: content`);
  console.log(`  Document:   key = "main"`);
  console.log(`  Pages:      ${doc.pages.length}`);
  console.log(`  Services:   ${doc.services.length}`);
  console.log(`  FAQs:       ${doc.faqs.length}`);

  await mongoose.disconnect();
}

main().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
