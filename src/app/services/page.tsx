import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bed,
  Bug,
  CheckCircle2,
  Dog,
  Grip,
  MousePointer2,
  Rat,
  Search,
  Users,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/Accordion";
import { CtaPair } from "@/components/CtaPair";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { FinalCta } from "@/components/home/FinalCta";
import { additionalServices, primaryServices } from "@/config/services";
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

const serviceIcons: Record<string, typeof Bug> = {
  "bed-bug-control": Bed,
  "carpenter-ant-control": Bug,
  "wasp-nest-removal": Zap,
  "mice-rodent-control": Rat,
  "cockroach-control": MousePointer2,
  "spider-control": Grip,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-base-950 pt-32 pb-16 text-white md:pt-40 lg:pb-20">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-green-600/15 blur-[110px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.18em] text-gold-500 uppercase">
            <span
              className="h-1.5 w-1.5 rounded-full bg-green-500"
              aria-hidden="true"
            />
            Residential &amp; Commercial Pest Solutions
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl">
            Targeted Pest Control for{" "}
            <span className="text-gold-500">
              {siteConfig.location.city} Properties
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Every infestation and property is different. Our service plans
            begin with the pest, the environment, the level of activity, and
            the needs of the people using the space.
          </p>
          {/* In-page service nav */}
          <nav aria-label="Services on this page" className="mt-9">
            <ul className="flex flex-wrap gap-2.5">
              {primaryServices.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:border-gold-500 hover:text-gold-500"
                  >
                    {s.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Primary services */}
      {primaryServices.map((service, index) => {
        const Icon = serviceIcons[service.slug] ?? Bug;
        const even = index % 2 === 0;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-28 py-16 lg:py-24 ${
              even ? "bg-base-900 bg-contours" : "bg-base-950"
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
                {/* Left: identity + who for + CTA */}
                <Reveal>
                  <div className="lg:sticky lg:top-32">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white shadow-sm">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h2 className="heading-rule heading-rule-left font-display mt-5 text-3xl font-extrabold tracking-tight text-white">
                      {service.name}
                    </h2>
                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/8 bg-base-800/70 p-5 shadow-card">
                      <Users
                        className="mt-0.5 h-5 w-5 shrink-0 text-green-400"
                        aria-hidden="true"
                      />
                      <p className="text-[0.95rem] leading-relaxed text-muted">
                        <span className="font-bold text-white">
                          Who it&rsquo;s for:{" "}
                        </span>
                        {service.whoFor}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-base font-bold text-base-950 shadow-gold transition-all hover:bg-gold-400"
                    >
                      Request a Quote
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                    <p className="mt-3 text-sm text-muted">
                      No public pricing — every property is assessed
                      individually.
                    </p>
                  </div>
                </Reveal>

                {/* Right: signs, approach, FAQ */}
                <div className="space-y-8">
                  <Reveal delay={0.05}>
                    <div className="rounded-2xl border border-white/8 bg-base-800/70 p-7 shadow-card">
                      <h3 className="font-display flex items-center gap-2.5 text-lg font-bold text-white">
                        <Search
                          className="h-5 w-5 text-gold-500"
                          aria-hidden="true"
                        />
                        Common Warning Signs
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {service.warningSigns.map((sign) => (
                          <li key={sign} className="flex items-start gap-3">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                              aria-hidden="true"
                            />
                            <span className="text-[0.95rem] text-muted">
                              {sign}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div className="rounded-2xl border border-green-500/20 bg-green-700/10 p-7 text-white">
                      <h3 className="font-display flex items-center gap-2.5 text-lg font-bold">
                        <CheckCircle2
                          className="h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                        Our Approach
                      </h3>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.approach.map((step) => (
                          <li key={step} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-green-400"
                              aria-hidden="true"
                            />
                            <span className="text-sm leading-relaxed text-white/80">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <Accordion items={service.faq} />
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional solutions */}
      <section className="border-t border-white/8 bg-base-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
              Beyond the Basics
            </p>
            <h2 className="heading-rule heading-rule-left font-display mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-white">
              Additional Solutions
            </h2>
            <p className="mt-5 max-w-2xl text-muted">
              Specialized services that support our core treatments — available
              on request as part of a customized plan.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((item, i) => (
              <Reveal key={item.name} as="li" delay={i * 0.04}>
                <div className="h-full rounded-xl border border-white/8 bg-base-800/60 p-5 transition-colors hover:border-green-500/40">
                  <h3 className="flex items-center gap-2 text-[0.95rem] font-bold text-white">
                    {item.name === "K9 Bed Bug Inspection" && (
                      <Dog
                        className="h-4 w-4 text-gold-500"
                        aria-hidden="true"
                      />
                    )}
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12">
            <CtaPair primaryLabel="Get a Free Quote" />
          </Reveal>
        </div>
      </section>

      <FinalCta />
      <StickyQuoteButton />
    </>
  );
}
