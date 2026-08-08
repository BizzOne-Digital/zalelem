import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PackageFactQuestionnaire } from "@/components/packages/PackageFactQuestionnaire";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { siteConfig } from "@/config/site";
import {
  bedBugPackageTiers,
  packageComparisonRows,
} from "@/lib/default-bed-bug-packages";

const tierAccent: Record<string, string> = {
  gold: "border-gold-500 bg-gold-500/10 text-gold-600",
  silver: "border-white/40 bg-white/10 text-white",
  bronze: "border-amber-700/50 bg-amber-900/20 text-amber-200",
};

export function BedBugPackagesPageContent({
  phone,
  phoneHref,
}: {
  phone?: string;
  phoneHref?: string;
}) {
  const displayPhone = phone || siteConfig.contact.phone;
  const displayPhoneHref = phoneHref || siteConfig.contact.phoneHref;

  return (
    <div className="pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-base-900 pt-[calc(var(--header-offset)+1.5rem)] pb-16 text-white md:pt-[calc(var(--header-offset)+2.5rem)]">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services/bed-bug-control", label: "Bed Bugs" },
              { label: "Packages" },
            ]}
            tone="dark"
          />
          <p className="mt-6 text-xs font-bold tracking-[0.2em] text-green-400 uppercase">
            Treatment options
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-[1.75rem] leading-[1.1] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Bed Bug Treatment Packages
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Choose Gold, Silver, or Bronze — built from our thermal heat,
            combination, and Aprehend® options. Jump between packages, compare
            them, then complete the fact questionnaire for a tailored quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {bedBugPackageTiers.map((tier) => (
              <a
                key={tier.id}
                href={`#${tier.id}`}
                className={`inline-flex min-h-11 items-center rounded-lg border px-4 py-2 text-sm font-bold transition hover:border-lime-400 ${tierAccent[tier.id]}`}
              >
                {tier.tier}
              </a>
            ))}
            <a
              href="#questionnaire"
              className="inline-flex min-h-11 items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white hover:bg-green-500"
            >
              Fact questionnaire
            </a>
          </div>
        </div>
      </section>

      <nav
        aria-label="Package tiers"
        className="sticky top-[var(--header-offset)] z-30 border-b border-line bg-surface/95 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 lg:px-8">
          {bedBugPackageTiers.map((tier) => (
            <a
              key={tier.id}
              href={`#${tier.id}`}
              className="shrink-0 rounded-full border border-line px-4 py-2 text-sm font-bold text-ink transition hover:border-green-600 hover:text-green-700"
            >
              {tier.tier}
            </a>
          ))}
          <a
            href="#compare"
            className="shrink-0 rounded-full border border-line px-4 py-2 text-sm font-bold text-ink transition hover:border-green-600 hover:text-green-700"
          >
            Compare
          </a>
          <a
            href="#questionnaire"
            className="shrink-0 rounded-full border border-green-600 bg-green-600/10 px-4 py-2 text-sm font-bold text-green-700"
          >
            Questionnaire
          </a>
        </div>
      </nav>

      {bedBugPackageTiers.map((tier, index) => (
        <section
          key={tier.id}
          id={tier.id}
          className={`scroll-anchor py-14 lg:py-20 ${index % 2 === 0 ? "bg-band" : "bg-surface"}`}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
                {tier.tier} package · {tier.badge}
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
                {tier.title}
              </h2>
              <p className="mt-3 text-2xl font-extrabold text-green-700">
                {tier.priceRange}
              </p>
              <p className="mt-1 text-sm font-medium text-muted">{tier.note}</p>
              <p className="mt-5 leading-relaxed text-muted">{tier.intro}</p>
              <p className="mt-4 text-sm font-semibold text-ink">
                Best for: <span className="font-normal text-muted">{tier.bestFor}</span>
              </p>
              <ul className="mt-6 space-y-4">
                {tier.bullets.map((bullet) => (
                  <li key={bullet.label} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-bold text-ink">{bullet.label}</p>
                      <p className="mt-1 text-sm text-muted">{bullet.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact?pestType=Bed%20Bugs" className="btn-primary">
                  Request this package
                </Link>
                <Link
                  href={tier.learnMoreHref}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-line px-5 py-3 text-sm font-bold text-ink hover:border-green-600"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                {bedBugPackageTiers
                  .filter((t) => t.id !== tier.id)
                  .map((t) => (
                    <a
                      key={t.id}
                      href={`#${t.id}`}
                      className="font-semibold text-green-700 hover:text-lime-500"
                    >
                      Compare with {t.tier} →
                    </a>
                  ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-base-900">
              <Image
                src={tier.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      ))}

      <section id="compare" className="scroll-anchor bg-base-900 py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Compare Gold, Silver &amp; Bronze
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            A quick view of speed, price range, and ideal use cases.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/15">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 text-xs tracking-wide uppercase">
                <tr>
                  <th className="px-4 py-3 font-bold">Tier</th>
                  <th className="px-4 py-3 font-bold">Treatment</th>
                  <th className="px-4 py-3 font-bold">Price</th>
                  <th className="px-4 py-3 font-bold">Speed</th>
                  <th className="px-4 py-3 font-bold">Best for</th>
                </tr>
              </thead>
              <tbody>
                {packageComparisonRows.map((row) => (
                  <tr
                    key={row.tier}
                    className={`border-t border-white/10 ${row.highlight ? "bg-green-600/20" : ""}`}
                  >
                    <td className="px-4 py-3 font-bold text-lime-400">
                      <a href={`#${row.tier.toLowerCase()}`}>{row.tier}</a>
                    </td>
                    <td className="px-4 py-3">{row.treatment}</td>
                    <td className="px-4 py-3">{row.price}</td>
                    <td className="px-4 py-3">{row.speed}</td>
                    <td className="px-4 py-3 text-white/80">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/pricing" className="btn-primary">
              Full pricing page
            </Link>
            <Link
              href="/bed-bug-heat-treatment"
              className="inline-flex min-h-11 items-center rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:border-lime-400"
            >
              Heat treatment details
            </Link>
            <Link
              href="/aprehend-bed-bugs"
              className="inline-flex min-h-11 items-center rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white hover:border-lime-400"
            >
              Aprehend® details
            </Link>
          </div>
        </div>
      </section>

      <section id="questionnaire" className="scroll-anchor bg-band py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <PackageFactQuestionnaire />
          <p className="mt-6 text-center text-sm text-muted">
            Prefer to talk now?{" "}
            <a
              href={displayPhoneHref}
              className="inline-flex items-center gap-1 font-bold text-green-700"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {displayPhone}
            </a>
          </p>
        </div>
      </section>

      <StickyQuoteButton />
    </div>
  );
}
