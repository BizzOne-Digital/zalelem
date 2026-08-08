import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { groupServicesByCategory } from "@/config/services";
import { siteConfig } from "@/config/site";
import { getCmsContent } from "@/lib/cms";

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
  const groups = groupServicesByCategory(cms.services);

  return (
    <div className="pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-base-900 pt-[calc(var(--header-offset)+1.5rem)] pb-16 text-white md:pt-[calc(var(--header-offset)+2.5rem)] lg:pb-20">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "Services" },
            ]}
            tone="dark"
          />
          <h1 className="font-display mt-6 max-w-3xl text-[1.75rem] leading-[1.1] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Pest Control Services Across{" "}
            <span className="text-green-400">Alberta &amp; BC</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Browse pest control, rodent treatment, bird control, and specialty
            cleanup &amp; disinfection — each with a dedicated detail page.
          </p>
        </div>
      </section>

      {groups.map((group) => (
        <section
          key={group.category}
          id={group.category}
          className="scroll-anchor border-b border-line bg-band py-14 last:border-0"
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {group.label}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((service) => (
                <article
                  key={service.slug}
                  className="rounded-2xl border border-line bg-surface p-6 shadow-card"
                >
                  <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    {service.name}
                  </h3>
                  {service.priceRange ? (
                    <p className="mt-2 text-lg font-extrabold text-green-700">
                      {service.priceRange}
                      {service.pricingNote ? (
                        <span className="ml-2 text-sm font-medium text-muted">
                          ({service.pricingNote})
                        </span>
                      ) : null}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm text-muted">{service.cardDescription}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <StickyQuoteButton />
    </div>
  );
}
