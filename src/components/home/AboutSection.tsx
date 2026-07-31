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
    <section id="about" className="scroll-mt-24 bg-surface py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative pr-4 pb-8 sm:pr-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-soft">
              <Image
                src={siteConfig.images.about.src}
                alt={siteConfig.images.about.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-600/10 text-green-700">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-extrabold text-ink">Focused on</span>
                <span className="block text-sm font-bold text-green-700">
                  Safety &amp; Results
                </span>
              </span>
            </div>
            {stat.enabled ? (
              <div className="absolute top-4 right-2 rounded-xl border border-line bg-surface px-5 py-3 shadow-soft sm:right-4">
                <p className="font-display text-xl font-extrabold text-green-700">
                  {stat.value}
                </p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            ) : null}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-bold tracking-[0.2em] text-green-700 uppercase">
              Protecting What Matters Most
            </p>
            <h2 className="heading-rule heading-rule-left font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Family-Owned. Quality-Focused. {siteConfig.location.city} Proud.
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Pest Warriors is a family-owned and operated pest-control company
              committed to reliable residential and commercial property
              protection in {siteConfig.location.city}. We use inspection-led,
              targeted treatment plans and prioritize non-chemical or
              reduced-chemical methods whenever they are appropriate.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {points.map((point, i) => (
              <Reveal key={point} as="li" delay={i * 0.04}>
                <span className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
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
            <Link href="/contact" className="btn-primary mt-9">
              Request a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
