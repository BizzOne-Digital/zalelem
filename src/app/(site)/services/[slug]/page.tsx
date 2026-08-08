import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/Accordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TermiteControlPageContent } from "@/components/termite/TermiteControlPageContent";
import { siteConfig } from "@/config/site";
import { getCmsContent } from "@/lib/cms";
import { getServiceGallery } from "@/lib/service-galleries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cms = await getCmsContent();
  const service = cms.services.find((item) => item.slug === slug);
  if (!service) return {};

  if (slug === "termite-control") {
    return {
      title: "Professional Termite Control Services | Ecoheat Pest Control",
      description:
        "Advanced pre-construction and post-construction anti-termite treatments with infrared technology and eco-friendly heat options across BC and Alberta.",
      alternates: { canonical: "/services/termite-control" },
    };
  }

  return {
    title: `${service.name} | ${siteConfig.business.name}`,
    description: service.cardDescription || service.heroDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cms = await getCmsContent();
  const service = cms.services.find((item) => item.slug === slug);
  if (!service) notFound();

  if (slug === "termite-control") {
    return (
      <TermiteControlPageContent
        phone={cms.site.phone}
        phoneHref={cms.site.phoneHref}
      />
    );
  }

  const gallery = getServiceGallery(slug);

  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-[calc(var(--header-offset)+1.5rem)] pb-16 text-white md:pt-[calc(var(--header-offset)+2.5rem)]">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: service.shortName || service.name },
            ]}
            tone="dark"
          />
          <h1 className="font-display mt-6 text-[1.75rem] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {service.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">{service.heroDescription}</p>
          {service.priceRange ? (
            <p className="mt-4 text-xl font-extrabold text-lime-400">
              {service.priceRange}
              {service.pricingNote ? (
                <span className="ml-2 text-sm font-medium text-white/60">
                  {service.pricingNote}
                </span>
              ) : null}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request Quote
            </Link>
            {slug === "bed-bug-control" ? (
              <Link
                href="/bed-bug-packages"
                className="inline-flex min-h-11 items-center rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-lime-400"
              >
                View Gold / Silver / Bronze packages
              </Link>
            ) : null}
          </div>
        </div>
      </section>
      <section className="bg-surface py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div className="space-y-6">
            <article className="rounded-2xl border border-line bg-surface p-6 shadow-card">
              <h2 className="font-display text-2xl font-bold text-ink">Who This Is For</h2>
              <p className="mt-3 text-muted">{service.whoFor}</p>
            </article>
            <article className="rounded-2xl border border-line bg-surface p-6 shadow-card">
              <h2 className="font-display text-2xl font-bold text-ink">Warning Signs</h2>
              <ul className="mt-3 space-y-2 text-muted">
                {service.warningSigns.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-line bg-surface p-6 shadow-card">
              <h2 className="font-display text-2xl font-bold text-ink">Our Approach</h2>
              <ul className="mt-3 space-y-2 text-muted">
                {service.approach.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            {service.sections.map((section) => (
              <article
                key={section.id}
                className="rounded-2xl border border-line bg-surface p-6 shadow-card"
              >
                <h2 className="font-display text-2xl font-bold text-ink">{section.title}</h2>
                <p className="mt-3 whitespace-pre-line text-muted">{section.content}</p>
                {section.bullets.length > 0 ? (
                  <ul className="mt-3 space-y-2 text-muted">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
            <Accordion items={service.faq} tone="light" />
          </div>

          <div className="flex flex-col gap-5 lg:sticky lg:top-[calc(var(--header-offset)+1rem)] lg:self-start">
            {gallery.map((item, index) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-2xl border border-line bg-band shadow-card"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <figcaption className="border-t border-line px-4 py-3 text-sm font-semibold text-ink">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
