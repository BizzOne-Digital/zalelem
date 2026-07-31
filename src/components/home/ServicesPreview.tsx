import Link from "next/link";
import { ArrowRight, Bed, Bug, Grip, MousePointer2, Rat, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { primaryServices } from "@/config/services";
import { siteConfig } from "@/config/site";

const icons: Record<string, typeof Bug> = {
  "bed-bug-control": Bed,
  "carpenter-ant-control": Bug,
  "wasp-nest-removal": Zap,
  "mice-rodent-control": Rat,
  "cockroach-control": MousePointer2,
  "spider-control": Grip,
};

export function ServicesPreview() {
  return (
    <section className="bg-band py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-green-700 uppercase">
            Solutions for {siteConfig.location.city}
          </p>
          <h2 className="heading-rule font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Most Common Pest Problems
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {primaryServices.map((service, i) => {
            const Icon = icons[service.slug] ?? Bug;
            return (
              <Reveal key={service.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:border-green-600"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.cardDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-green-700">
                    Learn More
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
