import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Star } from "lucide-react";
import { CtaPair } from "@/components/CtaPair";
import {
  locationReviews,
  serviceTypeCards,
  type LocationCommunity,
} from "@/config/locations";
import { primaryServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import { getCmsContent } from "@/lib/cms";
import { resolveCmsImage } from "@/lib/cms-image";

type Props = {
  slug: string;
  cityLabel: string;
  contactArea?: string;
  communities?: LocationCommunity[];
  children?: React.ReactNode;
};

export async function LocationPage({
  slug,
  cityLabel,
  contactArea,
  communities,
  children,
}: Props) {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === slug);
  if (!page) notFound();

  const area = contactArea || slug;
  const phone = cms.site.phone || siteConfig.contact.phone;
  const phoneHref = cms.site.phoneHref || siteConfig.contact.phoneHref;
  const intro = page.sections[0];
  const featured = page.sections.slice(1, 4);
  const areasSection = page.sections.find((s) => s.id === "service-areas");

  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-28 pb-16 text-white md:pt-36 md:pb-20">
        {page.heroImage ? (
          <Image
            src={resolveCmsImage(page.heroImage)}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        ) : null}
        <div
          className="absolute inset-0 bg-gradient-to-r from-base-950/92 via-base-900/85 to-base-900/55"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase">
            Pest Control · {cityLabel}
          </p>
          <h1 className="font-display mt-3 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {page.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {page.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/contact?area=${area}`} className="btn-primary">
              Contact Us Today
            </Link>
            <a href={phoneHref} className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 font-bold text-white transition hover:border-green-400 hover:text-green-400">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="font-display heading-rule-left text-3xl font-extrabold text-ink sm:text-4xl">
                {intro?.title || `${cityLabel}'s Trusted Pest Control`}
              </h2>
              <p className="mt-6 whitespace-pre-line leading-relaxed text-muted">
                {intro?.content || page.heroDescription}
              </p>
              {intro?.bullets && intro.bullets.length > 0 ? (
                <ul className="mt-5 space-y-2.5 text-muted">
                  {intro.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-8">
                <CtaPair
                  primaryLabel="Call for a Free Estimate"
                  phone={phone}
                  phoneHref={phoneHref}
                />
              </div>
            </div>
            <div className="relative min-h-72 overflow-hidden rounded-2xl border border-line shadow-card lg:min-h-[22rem]">
              <Image
                src={resolveCmsImage(intro?.image || page.heroImage)}
                alt={intro?.title || cityLabel}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-band py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-center text-2xl font-extrabold text-ink sm:text-3xl">
            We Service
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceTypeCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-2xl border border-line bg-surface p-6 shadow-card transition hover:border-green-600"
              >
                <h3 className="font-display text-xl font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
                <span className="mt-4 inline-block text-sm font-bold text-green-700">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featured.length > 0 ? (
        <section className="bg-surface py-14 lg:py-20">
          <div className="mx-auto max-w-7xl space-y-14 px-4 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display heading-rule-left text-3xl font-extrabold text-ink">
                Exterminator in {cityLabel}
              </h2>
              <p className="mt-5 text-muted">
                Experience, clear communication, and solutions built for local
                homes and businesses.
              </p>
            </div>
            {featured.map((section, index) => {
              const imageFirst = index % 2 === 0;
              return (
                <article
                  key={section.id}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
                >
                  <div
                    className={`relative min-h-64 overflow-hidden rounded-2xl border border-line lg:min-h-80 ${
                      imageFirst ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={resolveCmsImage(section.image || page.heroImage)}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                    <h3 className="font-display text-2xl font-bold text-ink">
                      {section.title}
                    </h3>
                    <p className="mt-4 whitespace-pre-line leading-relaxed text-muted">
                      {section.content}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ) : null}

      {children}

      <section className="bg-band py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink">
            Customer Reviews
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {locationReviews.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-2xl border border-line bg-surface p-6 shadow-card"
              >
                <div className="flex gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{review.text}</p>
                <footer className="mt-4 text-sm font-bold text-ink">{review.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink">
            Pest Control Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            Common pests we treat in and around {cityLabel}.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {primaryServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-xl border border-line bg-band px-5 py-4 font-semibold text-ink transition hover:border-green-600 hover:bg-surface"
              >
                {service.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {communities && communities.length > 0 ? (
        <section className="border-t border-line bg-band py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-display text-3xl font-extrabold text-ink">
              {areasSection?.title ?? "Our Service Areas"}
            </h2>
            <p className="mt-4 max-w-3xl text-muted">{areasSection?.content}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {communities.map((areaItem) => (
                <Link
                  key={areaItem.name}
                  href={areaItem.href}
                  className="group rounded-2xl border border-line bg-surface p-5 transition hover:border-green-600"
                >
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink group-hover:text-green-700">
                    <MapPin className="h-4 w-4 text-green-600" aria-hidden="true" />
                    {areaItem.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {areaItem.blurb}
                  </p>
                  <span className="mt-3 inline-block text-xs font-bold tracking-wide text-green-700 uppercase">
                    Request Service →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-ink">
            Request a Free Quote
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Protect your property in {cityLabel}. Call us for a free consultation.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaPair phone={phone} phoneHref={phoneHref} />
          </div>
        </div>
      </section>
    </>
  );
}
