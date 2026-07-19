import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const points = [
  "Licensed & Insured",
  "Family-Owned & Operated",
  "Eco-Conscious Solutions",
  "Inspection-Led Treatment Plans",
  "Advanced Tools & Techniques",
  `Local ${siteConfig.location.city} Experts You Can Trust`,
];

export function AboutSection() {
  const stat = siteConfig.stats.treatmentsCompleted;

  return (
    <section id="about" className="scroll-mt-24 bg-base-950 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Image collage */}
        <Reveal>
          <div className="relative pr-6 pb-10 sm:pr-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-soft">
              <Image
                src={siteConfig.images.about.src}
                alt={siteConfig.images.about.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-base-950/60 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            {/* Overlay badge card */}
            <div className="absolute right-0 bottom-0 flex items-center gap-3 rounded-xl border border-gold-500/30 bg-base-800 px-5 py-4 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-600/20 text-green-400">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-extrabold text-white">
                  Focused on
                </span>
                <span className="block text-sm font-bold text-gold-500">
                  Safety &amp; Results
                </span>
              </span>
            </div>
            {stat.enabled && (
              <div className="absolute top-4 -right-1 rounded-xl bg-base-800 px-5 py-3 shadow-soft">
                <p className="font-display text-xl font-extrabold text-gold-500">
                  {stat.value}
                </p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            )}
          </div>
        </Reveal>

        {/* Copy column */}
        <div>
          <Reveal>
            <p className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
              Protecting What Matters Most
            </p>
            <h2 className="heading-rule heading-rule-left font-display mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Family-Owned. Quality-Focused.{" "}
              {siteConfig.location.city} Proud.
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Pest Warriors is a family-owned and operated pest-control company
              committed to reliable residential and commercial property
              protection in {siteConfig.location.city}. We use inspection-led,
              targeted treatment plans and prioritize non-chemical or
              reduced-chemical methods whenever they are appropriate. When
              registered pest-control products are required, they are applied
              only where needed as part of a responsible treatment strategy.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {points.map((point, i) => (
              <Reveal key={point} as="li" delay={i * 0.05}>
                <span className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-snug font-semibold text-white/90">
                    {point}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-bold text-base-950 shadow-gold transition-all hover:bg-gold-400"
            >
              Get a Free Quote
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
