import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPage } from "@/components/content/LocationPage";
import { getCmsContent, getLocationPages } from "@/lib/cms";

/** Static marketing routes that must not be captured by this dynamic segment. */
const RESERVED = new Set([
  "about",
  "admin",
  "api",
  "aprehend-bed-bugs",
  "bed-bug-heat-treatment",
  "calgary",
  "commercial",
  "contact",
  "diy-pest-control",
  "edmonton",
  "faqs",
  "fort-mcmurray",
  "how-heat-treatment-works",
  "how-it-works",
  "icon.svg",
  "lethbridge",
  "locations",
  "offers",
  "pricing",
  "privacy",
  "property-types",
  "red-deer",
  "robots.txt",
  "service-area",
  "services",
  "sitemap.xml",
  "terms",
  "why-choose",
]);

export async function generateStaticParams() {
  const cms = await getCmsContent();
  return getLocationPages(cms.pages)
    .filter((p) => !RESERVED.has(p.slug))
    .map((p) => ({ location: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  if (RESERVED.has(location)) return {};
  const cms = await getCmsContent();
  const page = cms.pages.find(
    (item) =>
      item.slug === location &&
      (item.kind === "location" || item.published !== false),
  );
  if (!page || page.kind !== "location") return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function DynamicLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  if (RESERVED.has(location)) notFound();

  const cms = await getCmsContent();
  const page = cms.pages.find(
    (item) => item.slug === location && item.kind === "location",
  );
  if (!page || page.published === false) notFound();

  return (
    <LocationPage
      slug={page.slug}
      cityLabel={page.cityLabel || page.heroTitle}
      contactArea={page.slug}
    />
  );
}
