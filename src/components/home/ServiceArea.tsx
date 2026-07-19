import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

/** Dark stylized service-area map with a glowing pin. */
function MapGraphic() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/8 bg-base-950">
      <Image
        src="/images/pest-warriors-service-map.webp"
        alt={`Stylized map of the ${siteConfig.location.city} service area`}
        fill
        sizes="(max-width: 1024px) 92vw, 44vw"
        className="object-cover"
      />
      {/* Soft edge vignette so the map blends into the card */}
      <div
        className="absolute inset-0 shadow-[inset_0_0_60px_20px_rgb(4_16_28/0.55)]"
        aria-hidden="true"
      />
    </div>
  );
}

export function ServiceArea() {
  return (
    <section className="bg-base-900 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
        {/* Left: map + communities */}
        <Reveal>
          <div className="h-full rounded-3xl border border-white/8 bg-base-800/60 p-7 sm:p-9">
            <p className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
              Service Area
            </p>
            <h2 className="heading-rule heading-rule-left font-display mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Proudly Serving {siteConfig.location.city}{" "}
              <span className="whitespace-nowrap">&amp; Nearby</span>{" "}
              Communities
            </h2>
            <div className="mt-7">
              <MapGraphic />
            </div>
            <ul className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {siteConfig.location.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-sm font-semibold text-white"
                >
                  <MapPin
                    className="h-3.5 w-3.5 shrink-0 text-green-400"
                    aria-hidden="true"
                  />
                  {area}
                </li>
              ))}
              <li className="flex items-center gap-2 rounded-lg border border-dashed border-white/15 px-3 py-2.5 text-xs text-muted">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                Nearby by request
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Right: escalation CTA */}
        <Reveal delay={0.1}>
          <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-white/8 bg-base-800/60 p-7 sm:p-10">
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold-500/8 blur-[80px]"
              aria-hidden="true"
            />
            <h2 className="font-display relative text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Do Not Let a Small Pest Problem Become a{" "}
              <span className="text-gold-500">Bigger One</span>
            </h2>
            <p className="relative mt-4 leading-relaxed text-muted">
              Pest activity rarely improves on its own. Speak with Pest
              Warriors about a customized solution for your{" "}
              {siteConfig.location.city} property — protect your home or
              business today.
            </p>
            <div className="relative mt-8 flex flex-col gap-3 sm:max-w-xs">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-bold text-base-950 shadow-gold transition-all hover:bg-gold-400"
              >
                Get a Free Quote Today
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-7 py-3.5 text-base font-bold text-white transition-colors hover:border-gold-500 hover:text-gold-500"
              >
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
