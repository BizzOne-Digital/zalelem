import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock,
  DollarSign,
  Home,
  Leaf,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { defaultPricingContent } from "@/lib/default-pricing";
import type { PricingBullet, PricingContent } from "@/types/cms";

const differenceIcons: Record<string, LucideIcon> = {
  Speed: Timer,
  Coverage: Home,
  Toxicity: Leaf,
  Cost: DollarSign,
};

const warrantyIcons: Record<string, LucideIcon> = {
  "Persistent Elimination Guarantee": ShieldCheck,
  "Root-Cause Resolution": Target,
  "Expert Preventative Guidance": BookOpen,
  "Multi-Unit Integration": Building2,
};

function BulletList({ items }: { items: PricingBullet[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={`${item.label}-${item.text}`} className="flex gap-2.5 text-sm leading-relaxed text-muted">
          <CheckCircle2
            className="mt-0.5 h-4 w-4 shrink-0 text-green-600"
            aria-hidden="true"
          />
          <span>
            {item.label ? (
              <>
                <span className="font-bold text-ink">{item.label}:</span>{" "}
              </>
            ) : null}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function PricingPageContent({
  data = defaultPricingContent,
  phone,
  phoneHref,
}: {
  data?: PricingContent;
  phone: string;
  phoneHref: string;
}) {
  const featured =
    data.bedBugTreatments.find((t) => t.featured) ?? data.bedBugTreatments[0];
  const secondary = data.bedBugTreatments.filter((t) => t.id !== featured?.id);

  return (
    <>
      <section className="relative overflow-hidden bg-base-900 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center px-4 py-[calc(var(--header-offset)+2.5rem)] sm:px-8 md:pb-20 lg:px-12 xl:px-16 xl:py-[calc(var(--header-offset)+3.5rem)]">
            <Reveal>
              <p className="text-[0.72rem] font-bold tracking-[0.22em] text-lime-400 uppercase">
                {data.heroEyebrow}
              </p>
              <h1 className="font-display mt-4 max-w-xl text-[1.75rem] leading-[1.12] font-extrabold tracking-tight sm:text-4xl md:text-[2.65rem]">
                {data.heroTitle}
              </h1>
              <p className="mt-3 max-w-lg text-lg font-semibold text-lime-400">
                {data.heroSubtitle}
              </p>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">
                {data.heroDescription}
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <a href="#bed-bug-pricing" className="btn-lime w-full sm:w-auto">
                  View Pricing
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/45 px-5 py-3.5 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
                >
                  Request a Quote
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white/85">
                {[
                  { icon: BadgeCheck, label: "No Hidden Fees" },
                  { icon: ShieldCheck, label: "Certified Experts" },
                  { icon: Sparkles, label: "Clear Warranties" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4 text-lime-400" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="relative min-h-[220px] sm:min-h-[320px] lg:min-h-full">
            <Image
              src={data.heroImage || "/images/pricing-2.png"}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-base-950/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-base-900/30 lg:via-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {data.honestyTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {data.honestyContent}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={data.honestyImage || "/images/pricing-1.png"}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </Reveal>
        </div>
      </section>

      <section id="bed-bug-pricing" className="scroll-anchor bg-band py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Bed Bug Eradication</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {data.bedBugSectionTitle}
            </h2>
          </Reveal>

          {featured ? (
            <Reveal className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
              <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="relative min-h-56 lg:min-h-full">
                  <Image
                    src={featured.image || "/images/pricing-2.png"}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                  {featured.featured ? (
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-md bg-green-600 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      Recommended
                    </span>
                  ) : null}
                  <h3 className="font-display mt-4 text-2xl font-bold text-ink sm:text-[1.65rem]">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-2xl font-extrabold text-green-700">
                    {featured.priceRange}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted">{featured.note}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {featured.intro}
                  </p>
                  <BulletList items={featured.bullets} />
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-green-700 transition hover:text-lime-500"
                  >
                    Request Service
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ) : null}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {secondary.map((treatment, i) => (
              <Reveal key={treatment.id} delay={i * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={treatment.image || "/images/pricing-3.png"}
                      alt={treatment.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-xl font-bold text-ink">
                      {treatment.title}
                    </h3>
                    <p className="mt-2 text-xl font-extrabold text-green-700">
                      {treatment.priceRange}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-muted">
                      {treatment.note}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {treatment.intro}
                    </p>
                    <BulletList items={treatment.bullets} />
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-green-700 transition hover:text-lime-500"
                    >
                      Request Service
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {data.comparisonTitle}
            </h2>
            <p className="mt-3 text-muted">{data.comparisonIntro}</p>
          </Reveal>

          <Reveal className="mt-10 overflow-hidden rounded-2xl border border-line shadow-card">
            <div className="space-y-4 p-5 md:hidden">
              {data.comparisonRows.map((row) => (
                <div
                  key={row.treatment}
                  className={`rounded-xl border p-4 ${
                    row.highlight
                      ? "border-green-600/30 bg-lime-500/10"
                      : "border-line bg-band"
                  }`}
                >
                  <h3 className="font-display font-bold text-ink">{row.treatment}</h3>
                  <dl className="mt-3 space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="shrink-0 text-muted">Price Range</dt>
                      <dd className="min-w-0 text-right font-semibold break-words text-ink">
                        {row.price}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="shrink-0 text-muted">Speed</dt>
                      <dd className="min-w-0 text-right font-semibold break-words text-ink">
                        {row.speed}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-muted">Best For</dt>
                      <dd className="mt-1 break-words text-ink">{row.bestFor}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            <div className="hidden overflow-x-auto md:block">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-base-900 text-white">
                  <tr>
                    <th className="px-6 py-4 font-bold">Treatment</th>
                    <th className="px-6 py-4 font-bold">Price Range</th>
                    <th className="px-6 py-4 font-bold">Speed</th>
                    <th className="px-6 py-4 font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {data.comparisonRows.map((row) => (
                    <tr
                      key={row.treatment}
                      className={
                        row.highlight
                          ? "bg-lime-500/12"
                          : "bg-surface hover:bg-band/60"
                      }
                    >
                      <td className="px-6 py-4 font-semibold text-ink">
                        {row.treatment}
                      </td>
                      <td className="px-6 py-4 font-medium text-ink">{row.price}</td>
                      <td className="px-6 py-4 text-muted">{row.speed}</td>
                      <td className="px-6 py-4 text-muted">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.keyDifferences.map((item, i) => {
              const Icon = differenceIcons[item.title] ?? Sparkles;
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-band text-green-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-display mt-4 text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-band py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">General Pest Control</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {data.generalSectionTitle}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {data.generalPests.map((pest, i) => (
              <Reveal key={pest.id} delay={(i % 2) * 0.06}>
                <article className="grid h-full overflow-hidden rounded-2xl border border-line bg-surface shadow-card md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                  <div className="relative aspect-[16/10] min-h-44 md:aspect-auto md:min-h-full">
                    <Image
                      src={pest.image || "/images/pricing-5.png"}
                      alt={pest.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 35vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                      {pest.title}
                    </h3>
                    <p className="mt-1.5 text-lg font-extrabold text-green-700">
                      {pest.priceRange}
                    </p>
                    <p className="text-xs font-medium text-muted">{pest.note}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {pest.intro}
                    </p>
                    <BulletList items={pest.bullets} />
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-green-700 transition hover:text-lime-500"
                    >
                      Request Service
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-base-900 py-12 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 lg:flex-row lg:items-center lg:px-8">
          <Reveal>
            <h2 className="font-display max-w-md text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {data.midBannerTitle}
            </h2>
            <Link href="/contact" className="btn-lime mt-6">
              {data.midBannerCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal
            delay={0.1}
            className="flex w-full flex-wrap gap-6 sm:gap-10 lg:w-auto lg:justify-end"
          >
            {[
              { icon: ClipboardList, label: "Clear Estimates" },
              { icon: Sparkles, label: "Premium Materials" },
              { icon: Clock, label: "Long-Term Results" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 text-center text-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/5">
                  <Icon className="h-5 w-5 text-lime-400" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {data.warrantiesTitle}
            </h2>
            <p className="mt-4 text-muted">{data.warrantiesIntro}</p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {data.warranties.map((item, i) => {
              const Icon = warrantyIcons[item.title] ?? ShieldCheck;
              return (
                <Reveal key={item.title} delay={i * 0.06} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-band text-green-700">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-base-900 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-8 lg:px-12 xl:px-16 lg:py-20">
            <Reveal>
              <h2 className="font-display max-w-md text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
                {data.ctaTitle}
              </h2>
              <p className="mt-4 max-w-md text-white/75">{data.ctaDescription}</p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <Link href="/bed-bug-packages" className="btn-lime w-full sm:w-auto">
                  Compare Gold / Silver / Bronze
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/45 px-5 py-3.5 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto">
                  Request a Free Quote
                </Link>
                <a
                  href={phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/45 px-5 py-3.5 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call: {phone}
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[260px] lg:min-h-full">
            <Image
              src={data.ctaImage || "/images/pricing-1.png"}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
}
