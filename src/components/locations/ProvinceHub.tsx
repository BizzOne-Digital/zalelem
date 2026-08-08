import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { provinceMeta, type ProvinceCode } from "@/config/regions";

type CityLink = { href: string; label: string };

export function ProvinceHub({
  province,
  cities,
}: {
  province: ProvinceCode;
  cities: CityLink[];
}) {
  const meta = provinceMeta[province];

  return (
    <div className="pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-base-900 pt-[calc(var(--header-offset)+1.5rem)] pb-16 text-white md:pt-[calc(var(--header-offset)+2.5rem)]">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/locations", label: "Locations" },
              { label: meta.name },
            ]}
            tone="dark"
          />
          <h1 className="font-display mt-6 max-w-3xl text-[1.75rem] leading-[1.1] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Pest Control in{" "}
            <span className="text-green-400">{meta.name}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {meta.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link
              href={province === "AB" ? "/british-columbia" : "/alberta"}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
            >
              Switch to {province === "AB" ? "British Columbia" : "Alberta"}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-band py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
            {meta.name} Service Cities
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Choose your city for local pest control details. Surrounding areas
            are available by request.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-5 py-5 shadow-card transition hover:border-lime-500"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                  <span className="font-display text-lg font-bold text-ink">
                    {city.label}
                  </span>
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-lime-500 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <StickyQuoteButton />
    </div>
  );
}
