import type { MetadataRoute } from "next";
import { getCmsContent, getLocationLinks } from "@/lib/cms";
import { siteConfig } from "@/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.seo.siteUrl;
  const cms = await getCmsContent();
  const locations = getLocationLinks(cms.pages);

  const pages = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.85 },
    { path: "/services", priority: 0.9 },
    { path: "/commercial", priority: 0.9 },
    { path: "/bed-bug-heat-treatment", priority: 0.9 },
    { path: "/how-heat-treatment-works", priority: 0.85 },
    { path: "/aprehend-bed-bugs", priority: 0.85 },
    { path: "/pricing", priority: 0.9 },
    { path: "/locations", priority: 0.9 },
    ...locations.map((l) => ({ path: l.href, priority: 0.9 })),
    ...cms.services.map((s) => ({
      path: `/services/${s.slug}`,
      priority: 0.8,
    })),
    { path: "/diy-pest-control", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
    { path: "/faqs", priority: 0.7 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${base}${path}`,
    changeFrequency: priority >= 0.7 ? ("monthly" as const) : ("yearly" as const),
    priority,
  }));
}
