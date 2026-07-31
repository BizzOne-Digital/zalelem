import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { locationLinks } from "@/config/navigation";

export const metadata: Metadata = {
  title: "Service Locations | Ecoheat Pest Control Alberta",
  description:
    "Find Ecoheat pest control services across Alberta — Calgary, Chestermere, Airdrie, Edmonton, Lethbridge, Red Deer, and Fort McMurray.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-32 pb-16 text-white md:pt-40">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase">
            Locations
          </p>
          <h1 className="font-display mt-3 text-4xl font-extrabold sm:text-5xl">
            Alberta Service Locations
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
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
