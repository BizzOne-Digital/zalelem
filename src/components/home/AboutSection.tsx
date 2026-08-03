import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const points = [
  "Fully licensed & insured",
  "Safe for kids, pets & the environment",
  "Experienced, local team",
  "Inspection-led treatment plans",
  "Eco-conscious options available",
  `Trusted ${siteConfig.location.city} experts`,
];

export function AboutSection() {
  const stat = siteConfig.stats.treatmentsCompleted;

  return (
    <section id="about" className="scroll-anchor bg-surface py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative pr-4 pb-8 sm:pr-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src={siteConfig.images.about.src}
                alt={siteConfig.images.about.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 flex max-w-[min(85%,16rem)] items-center gap-3 rounded-xl bg-surface px-3 py-3 shadow-soft sm:max-w-none sm:px-5 sm:py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-lime-500/15 text-lime-500">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-extrabold text-ink">Focused on</span>
                <span className="block text-sm font-bold text-green-700">
                  Safety &amp; Results
                </span>
              </span>
            </div>
            {stat.enabled ? (
              <div className="absolute top-4 right-2 max-w-[45%] truncate rounded-xl border border-line bg-surface px-3 py-2 shadow-soft sm:right-4 sm:max-w-none sm:px-5 sm:py-3">
                <p className="font-display text-lg font-extrabold text-green-700 sm:text-xl">
                  {stat.value}
                </p>
                <p className="truncate text-xs text-muted">{stat.label}</p>
              </div>
            ) : null}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="section-eyebrow">
              Proudly Protecting What Matters Since 2018
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Family-Owned. Quality-Focused. {siteConfig.location.city} Proud.
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Pest Warriors is a family-owned and operated pest-control company
              committed to reliable residential and commercial property
              protection in {siteConfig.location.city}. We use inspection-led,
              targeted treatment plans and prioritize non-chemical or
              reduced-chemical methods whenever they are appropriate.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              From the first call through follow-up, our local team focuses on
              clear communication, safe practices, and lasting results for the
              properties and people you care about.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {points.map((point, i) => (
              <Reveal key={point} as="li" delay={i * 0.04}>
                <span className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-lime-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-snug font-semibold text-ink">
                    {point}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.15}>
            <Link href="/contact" className="btn-green mt-9 w-full sm:w-auto">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
