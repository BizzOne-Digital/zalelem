import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, Phone, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaPair } from "@/components/CtaPair";
import {
  locationReviews,
  serviceTypeCards,
  type LocationCommunity,
} from "@/config/locations";
import { provinceMeta, type ProvinceCode } from "@/config/regions";
import { filterCoreServices, primaryServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import { getCmsContent, getCmsPage } from "@/lib/cms";

type Props = {
  slug: string;
  cityLabel: string;
  contactArea?: string;
  communities?: LocationCommunity[];
  provinceLabel?: string;
  children?: React.ReactNode;
};

export async function LocationPage({
  slug,
  cityLabel,
  contactArea,
  communities,
  provinceLabel,
  children,
}: Props) {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, slug);
  if (!page) notFound();

  const area = contactArea || slug;
  const phone = cms.site.phone || siteConfig.contact.phone;
  const phoneHref = cms.site.phoneHref || siteConfig.contact.phoneHref;
  const intro = page.sections[0];
  const featured = page.sections.slice(1);
  const areasSection = page.sections.find((s) => s.id === "service-areas");
  const provinceCode = (page.province || "AB") as ProvinceCode;
  const provinceName = provinceLabel || provinceMeta[provinceCode].name;
  const provinceHref = provinceMeta[provinceCode].href;

  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-[calc(var(--header-offset)+1.25rem)] pb-16 text-white md:pt-[calc(var(--header-offset)+2.5rem)] md:pb-20">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <div className="mb-4 flex justify-center">
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/locations", label: "Locations" },
                { href: provinceHref, label: provinceName },
                { label: cityLabel },
              ]}
              tone="dark"
            />
          </div>
          <p className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase">
            Pest Control · {cityLabel}, {provinceName}
          </p>
          <h1 className="font-display mx-auto mt-3 max-w-4xl text-[1.75rem] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {page.heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            {page.heroDescription}
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Link href={`/contact?area=${area}`} className="btn-primary w-full sm:w-auto">
              Contact Us Today
            </Link>
            <a
              href={phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 font-bold text-white transition hover:border-green-400 hover:text-green-400 sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink sm:text-4xl">
            {intro?.title || `${cityLabel}'s Trusted Pest Control`}
          </h2>
          <p className="mt-6 whitespace-pre-line text-center leading-relaxed text-muted">
            {intro?.content || page.heroDescription}
          </p>
          {intro?.bullets && intro.bullets.length > 0 ? (
            <ul className="mt-8 space-y-3">
              {intro.bullets.map((bullet) => {
                const colon = bullet.indexOf(":");
                const label = colon > 0 ? bullet.slice(0, colon) : "";
                const rest = colon > 0 ? bullet.slice(colon + 1).trim() : bullet;
                return (
                  <li key={bullet} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed text-muted">
                      {label ? (
                        <>
                          <span className="font-semibold text-ink">{label}:</span>{" "}
                          {rest}
                        </>
                      ) : (
                        rest
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : null}
          <div className="mt-8 flex justify-center">
            <CtaPair
              primaryLabel="Call for a Free Estimate"
              phone={phone}
              phoneHref={phoneHref}
            />
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
          <div className="mx-auto max-w-3xl space-y-14 px-4 lg:px-8">
            {featured.map((section) => (
              <article key={section.id}>
                <h2 className="font-display text-center text-2xl font-extrabold text-ink sm:text-3xl">
                  {section.title}
                </h2>
                {section.content ? (
                  <p className="mt-4 whitespace-pre-line text-center leading-relaxed text-muted">
                    {section.content}
                  </p>
                ) : null}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="mt-8 space-y-3">
                    {section.bullets.map((bullet) => {
                      const colon = bullet.indexOf(":");
                      const label = colon > 0 ? bullet.slice(0, colon) : "";
                      const rest =
                        colon > 0 ? bullet.slice(colon + 1).trim() : bullet;
                      return (
                        <li key={bullet} className="flex gap-3">
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                            aria-hidden="true"
                          />
                          <span className="leading-relaxed text-muted">
                            {label ? (
                              <>
                                <span className="font-semibold text-ink">
                                  {label}:
                                </span>{" "}
                                {rest}
                              </>
                            ) : (
                              rest
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </article>
            ))}
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
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {review.text}
                </p>
                <footer className="mt-4 text-sm font-bold text-ink">
                  {review.name}
                </footer>
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
            {filterCoreServices(primaryServices).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="inline-flex min-h-11 items-center rounded-xl border border-line bg-band px-5 py-3 font-semibold text-ink transition hover:border-green-600 hover:bg-surface"
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
            <h2 className="font-display text-center text-3xl font-extrabold text-ink">
              {areasSection?.title ?? "Our Service Areas"}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-muted">
              {areasSection?.content}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {communities.map((areaItem) => (
                <Link
                  key={areaItem.name}
                  href={areaItem.href}
                  className="group rounded-2xl border border-line bg-surface p-5 transition hover:border-green-600"
                >
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink group-hover:text-green-700">
                    <MapPin
                      className="h-4 w-4 text-green-600"
                      aria-hidden="true"
                    />
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
