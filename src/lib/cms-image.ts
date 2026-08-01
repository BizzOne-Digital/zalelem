import { siteConfig } from "@/config/site";

const DEFAULT_FALLBACK = siteConfig.images.hero.src;

/**
 * Resolve CMS image URLs for storefront rendering.
 * - `/api/uploads/...` → Mongo-backed uploads (keep as-is)
 * - legacy `/uploads/...` disk paths → safe static fallback
 * - otherwise → use as provided (`/images/...`, absolute URLs, etc.)
 */
export function resolveCmsImage(
  url: string | null | undefined,
  fallback: string = DEFAULT_FALLBACK,
): string {
  const value = (url || "").trim();
  if (!value) return fallback;
  if (value.startsWith("/api/uploads/")) return value;
  if (value.startsWith("/uploads/")) return fallback;
  return value;
}
