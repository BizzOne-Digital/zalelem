import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  Flame,
  Home,
  MapPin,
  Phone,
  ScanSearch,
  Shield,
  ShieldCheck,
  Sparkles,
  Trees,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { siteConfig } from "@/config/site";
import { getServiceGallery } from "@/lib/service-galleries";

const hubs = [
  "The Lower Mainland & Fraser Valley (including Greater Vancouver)",
  "Vancouver Island (including Victoria)",
  "The Okanagan Valley",
  "Alberta (Edmonton and Calgary)",
];

const whyEssential = [
  {
    title: "Structural Protection",
    text: "Termites hollow out wooden supports and ruin physical assets quickly.",
  },
  {
    title: "Proactive Defense",
    text: "Pre-construction treatments block future entry and prevent expensive future claims.",
  },
  {
    title: "Total Eradication",
    text: 'Post-construction treatments completely clear out active "white ant" colonies.',
  },
];

const coreServices = [
  {
    title: "Pre-Construction Termite Treatment",
    text: "Get comprehensive termite proofing for the foundational layers of new building projects. We establish a protective barrier before your structure is even built.",
    icon: Trees,
  },
  {
    title: "Post-Construction Termite Solutions",
    text: "We offer targeted eradication for infested homes, offices, and commercial layouts. Stop ongoing structural damage immediately with localized interventions.",
    icon: Home,
  },
  {
    title: "Advanced Infrared Technology",
    text: "We use advanced thermal imaging to locate hidden nesting sites at the root. This allows us to track termites behind drywall and deep within wood structures without destructive tearing.",
    icon: ScanSearch,
  },
  {
    title: "Eco-Friendly Heat & Pest Treatments",
    text: "We use eco-friendly heat treatments and safe, high-quality pest control methods. These applications are safe for the environment, harmless to your family or staff, and highly effective against termites.",
    icon: Flame,
  },
];

const residentialPoints = [
  {
    label: "Saves Home Value",
    text: "Prevents destruction of wooden flooring, framing, and furniture.",
  },
  {
    label: "Thermal Localization",
    text: "Detects hidden colonies inside drywall and framework using infrared tools.",
  },
  {
    label: "Complete Elimination",
    text: "Destroys the entire colony root system with targeted, safe applications.",
  },
];

const commercialPoints = [
  {
    label: "Zero Disruption",
    text: "Fast, clean treatments designed to keep your business fully operational.",
  },
  {
    label: "Asset Protection",
    text: "Secures inventory, warehouses, and structural integrity from severe damage.",
  },
  {
    label: "Industry Compliance",
    text: "Ensures your commercial property meets local health, safety, and building standards.",
  },
];

const regions = [
  {
    title: "Termite Control Vancouver & Lower Mainland",
    text: "Protecting coastal properties from destructive wood-boring pests.",
    href: "/british-columbia/vancouver",
  },
  {
    title: "Termite Treatment Victoria & Vancouver Island",
    text: "Localized solutions for Vancouver Island’s unique climate and pest pressures.",
    href: "/british-columbia/victoria",
  },
  {
    title: "Okanagan Termite Removal",
    text: "Specialized residential and commercial pest control throughout the interior.",
    href: "/contact?area=okanagan",
  },
  {
    title: "Termite Exterminators Calgary & Edmonton",
    text: "Advanced thermal and heat treatments tailored for Alberta properties.",
    href: "/alberta",
  },
  {
    title: "Toronto & East York Termite Services",
    text: "Reliable, eco-friendly termite proofing across the Greater Toronto Area.",
    href: "/contact?area=toronto",
  },
];

export function TermiteControlPageContent({
  phone: phoneProp,
  phoneHref: phoneHrefProp,
}: {
  phone?: string;
  phoneHref?: string;
} = {}) {
  const phone = phoneProp || siteConfig.contact.phone;
  const phoneHref = phoneHrefProp || siteConfig.contact.phoneHref;
  const gallery = getServiceGallery("termite-control");

  return (
    <div className="pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-base-900 pt-[calc(var(--header-offset)+1.5rem)] pb-16 text-white md:pt-[calc(var(--header-offset)+2.5rem)] md:pb-20">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-20 top-8 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-green-500/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: "Termite Control" },
            ]}
            tone="dark"
          />
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-lime-400 uppercase">
            <Shield className="h-3.5 w-3.5" aria-hidden="true" />
            Pre &amp; Post Construction Protection
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-[1.75rem] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Professional Termite Control Services
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Termites destroy property value rapidly. Ecoheat Pest Control and RM
            Pesto Kill deliver advanced pre-construction and post-construction
            anti-termite treatments for residential and commercial properties.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">
            We use cutting-edge infrared technology and eco-friendly heat
            treatments to eliminate infestations permanently.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?pestType=Termites" className="btn-primary">
              Book a Termite Inspection
            </Link>
            <a
              href={phoneHref}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {phone}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-band py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-center text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
            Serving Major Canadian Hubs
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hubs.map((hub) => (
              <li
                key={hub}
                className="flex items-start gap-2.5 rounded-xl border border-line bg-surface px-4 py-3.5 text-sm font-semibold text-ink shadow-card"
              >
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-green-600"
                  aria-hidden="true"
                />
                <span>{hub}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-12 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 lg:px-8">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-2xl border border-line bg-band shadow-card"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-line px-4 py-3 text-sm font-semibold text-ink">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-band py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Why Professional Termite Control is Essential
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {whyEssential.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-band p-6 shadow-card"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-600/10 text-green-700">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-4 text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-band py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
              Our Core Termite Services
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Advanced Protection Before &amp; After Construction
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {coreServices.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-line bg-surface p-6 shadow-card transition hover:border-green-600/40 sm:p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10 text-green-700 ring-1 ring-green-600/15 transition group-hover:bg-green-600 group-hover:text-white">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-line bg-band p-7 shadow-card sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white">
                <Home className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="font-display text-2xl font-extrabold text-ink">
                Residential Termite Control
              </h2>
            </div>
            <ul className="mt-6 space-y-4">
              {residentialPoints.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-muted sm:text-base">
                    <span className="font-semibold text-ink">{item.label}:</span>{" "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-line bg-band p-7 shadow-card sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="font-display text-2xl font-extrabold text-ink">
                Commercial Termite Control
              </h2>
            </div>
            <ul className="mt-6 space-y-4">
              {commercialPoints.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-muted sm:text-base">
                    <span className="font-semibold text-ink">{item.label}:</span>{" "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-line bg-band py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Local Experts
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Local Termite Exterminators Serving Your Community
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              We provide localized, rapid-response termite removal across Canada.
              Click your region below to book an inspection with our local experts.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <Link
                key={region.title}
                href={region.href}
                className="group rounded-2xl border border-line bg-surface p-6 shadow-card transition hover:border-green-600/50"
              >
                <h3 className="font-display text-lg font-bold text-ink group-hover:text-green-700">
                  {region.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {region.text}
                </p>
                <span className="mt-4 inline-flex text-sm font-bold text-green-700">
                  Book in this region →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-base-900 py-16 text-white lg:py-20">
        <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Protect Your Property from Termites
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Whether you need pre-construction proofing or post-construction
            eradication, our licensed team is ready with infrared detection and
            eco-friendly heat treatments.
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row">
            <Link
              href="/contact?pestType=Termites"
              className="btn-primary w-full sm:w-auto"
            >
              Request a Free Quote
            </Link>
            <a
              href={phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-7 py-3.5 font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      <StickyQuoteButton />
    </div>
  );
}
