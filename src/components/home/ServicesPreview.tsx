import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { EditableService } from "@/types/cms";

const FALLBACK_IMAGES: Record<string, string> = {
  "mice-rodent-control": "/images/pests/mice-rodent.png",
  "carpenter-ant-control": "/images/pests/carpenter-ant.png",
  "wasp-nest-removal": "/images/pests/wasp.png",
  "bed-bug-control": "/images/pests/bed-bug.png",
  "cockroach-control": "/images/pests/cockroach.png",
};

const HOME_ORDER = [
  "mice-rodent-control",
  "carpenter-ant-control",
  "wasp-nest-removal",
  "bed-bug-control",
  "cockroach-control",
];

export function ServicesPreview({
  services,
  city,
}: {
  services: EditableService[];
  city: string;
}) {
  const ordered = HOME_ORDER.map((slug) =>
    services.find((s) => s.slug === slug),
  ).filter(Boolean) as EditableService[];

  const list =
    ordered.length > 0
      ? ordered
      : services.slice(0, 5);

  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="section-eyebrow">We Can Help Eliminate</p>
          <h2 className="font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Most Common Pest Problems
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {list.map((service, i) => {
            const imageSrc =
              service.heroImage ||
              FALLBACK_IMAGES[service.slug] ||
              "/images/pests/bed-bug.png";
            return (
              <Reveal key={service.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full min-w-0 flex-col items-center rounded-xl border border-line bg-surface px-4 py-7 text-center transition hover:border-lime-500 hover:shadow-card"
                >
                  <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-lime-500/45 bg-band transition group-hover:border-lime-500 group-hover:shadow-[0_0_0_4px_rgb(139_197_63/0.15)]">
                    <Image
                      src={imageSrc}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </span>
                  <h3 className="font-display mt-5 min-w-0 text-base font-bold break-words text-ink">
                    {service.name}
                  </h3>
                  {service.priceRange ? (
                    <p className="mt-1 text-sm font-bold break-words text-green-700">
                      {service.priceRange}
                    </p>
                  ) : null}
                  <p className="mt-2 min-w-0 flex-1 text-sm leading-relaxed break-words text-muted">
                    {service.cardDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold tracking-wide text-lime-500 uppercase">
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

        <Reveal className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-green-700 transition hover:text-lime-500"
          >
            View all {city} pest services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
