import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalCache = global as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const cache: MongooseCache = globalCache.mongooseCache ?? {
  conn: null,
  promise: null,
};

globalCache.mongooseCache = cache;

export async function connectDb() {
  if (!MONGODB_URI) {
    return null;
  }
  if (cache.conn) return cache.conn;
  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGODB_URI, {
      dbName: process.env.MONGODB_DB ?? "pest-warriors",
    });
  }
  cache.conn = await cache.promise;
  return cache.conn;
}
