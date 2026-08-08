import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

function MapGraphic() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-band">
      <Image
        src="/images/pest-warriors-service-map.webp"
        alt={`Stylized map of the ${siteConfig.location.city} service area`}
        fill
        sizes="(max-width: 1024px) 92vw, 44vw"
        className="object-cover"
      />
    </div>
  );
}

export function ServiceArea() {
  return (
    <section className="bg-band py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="h-full rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-9">
            <p className="text-xs font-bold tracking-[0.2em] text-green-700 uppercase">
              Service Area
            </p>
            <h2 className="heading-rule heading-rule-left font-display mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Proudly Serving Alberta &amp; British Columbia
            </h2>
            <div className="mt-7">
              <MapGraphic />
            </div>
            <ul className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {siteConfig.location.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex min-w-0 items-center gap-2 rounded-lg border border-line bg-band px-3 py-2.5 text-sm font-semibold text-ink"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-green-600" aria-hidden="true" />
                  <span className="min-w-0 truncate">{area}</span>
                </li>
              ))}
              <li className="flex items-center gap-2 rounded-lg border border-dashed border-line px-3 py-2.5 text-xs text-muted">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                Nearby by request
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative flex h-full flex-col justify-center rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-10">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Do Not Let a Small Pest Problem Become a{" "}
              <span className="text-green-700">Bigger One</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Pest activity rarely improves on its own. Speak with Pest Warriors
              about a customized solution for your Alberta or British Columbia
              property.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:max-w-xs">
              <Link href="/contact" className="btn-primary justify-center">
                Request a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/locations" className="btn-secondary justify-center">
                Browse all locations
              </Link>
              <a href={siteConfig.contact.phoneHref} className="btn-secondary justify-center">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
