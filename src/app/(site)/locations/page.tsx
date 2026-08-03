import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { getCmsContent, getLocationLinks } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const links = getLocationLinks(cms.pages);
  const names = links.map((l) => l.label).join(", ");
  return {
    title: "Service Locations | Pest Control Alberta",
    description: `Find pest control services across Alberta — ${names || "Calgary and surrounding communities"}.`,
    alternates: { canonical: "/locations" },
  };
}

export default async function LocationsPage() {
  const cms = await getCmsContent();
  const locationLinks = getLocationLinks(cms.pages);

  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-[calc(var(--header-offset)+1.5rem)] pb-16 text-white md:pt-[calc(var(--header-offset)+2.5rem)]">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase">
            Locations
          </p>
          <h1 className="font-display mt-3 text-[1.75rem] font-extrabold sm:text-4xl md:text-5xl">
            Alberta Service Locations
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Choose your city to view local pest control services, bed bug heat
            treatments, and community coverage.
          </p>
        </div>
      </section>
      <section className="bg-band py-14">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {locationLinks.map((loc) => (
            <Link
              key={loc.href}
              href={loc.href}
              className="group rounded-2xl border border-line bg-surface p-6 shadow-card transition hover:border-green-600/50"
            >
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink group-hover:text-green-700">
                <MapPin className="h-5 w-5 text-green-700" aria-hidden="true" />
                {loc.label}
              </h2>
              <p className="mt-2 text-sm text-muted">
                View {loc.label} pest control services →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
