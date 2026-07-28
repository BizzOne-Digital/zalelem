import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { getCmsContent } from "@/lib/cms";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.seo.services.title,
  description: siteConfig.seo.services.description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: siteConfig.seo.services.title,
    description: siteConfig.seo.services.description,
    url: `${siteConfig.seo.siteUrl}/services`,
    siteName: siteConfig.business.name,
    locale: "en_CA",
    type: "website",
    images: [{ url: siteConfig.images.hero.src }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.services.title,
    description: siteConfig.seo.services.description,
  },
};

export default async function ServicesPage() {
  const cms = await getCmsContent();
  return (
    <>
      <section className="relative overflow-hidden bg-base-950 pt-32 pb-16 text-white md:pt-40 lg:pb-20">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-display mt-6 max-w-3xl text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl">
            Pest Control Services in{" "}
            <span className="text-gold-500">{cms.site.city}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Browse all service detail pages. Each service has its own dedicated page with full content.
          </p>
        </div>
      </section>
      <section className="bg-base-900 py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cms.services.map((service) => (
              <article key={service.slug} className="rounded-2xl border border-white/10 bg-base-800/70 p-6">
                <h2 className="font-display text-2xl font-bold text-white">{service.name}</h2>
                <p className="mt-3 text-sm text-white/70">{service.cardDescription}</p>
                <p className="mt-3 text-sm text-white/60">{service.whoFor}</p>
                <Link href={`/services/${service.slug}`} className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-base-950">
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <StickyQuoteButton />
    </>
  );
}
