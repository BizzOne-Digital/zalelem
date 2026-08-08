import Link from "next/link";
import {
  Bird,
  Bug,
  CheckCircle2,
  Flame,
  Home,
  MapPin,
  Phone,
  Rat,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { siteConfig } from "@/config/site";

const introParagraphs = [
  "Welcome to Ecoheat Pest Control, Greater Victoria’s trusted provider of premier pest management solutions. We handle everything from proactive prevention and structural protection to complete pest removal and eradication. No job is too large or too small.",
  "We specialize in both chemical-free and low-toxicity treatments tailored for residential, commercial, senior living, hospitality, and industrial properties. Our certified technicians routinely service homes, hotels, motels, retail spaces, and care homes across Vancouver Island. Our treatments are highly effective and engineered to be completely safe for newborns, the elderly, pregnant individuals, and anyone sensitive to chemical products.",
];

const communities = [
  "Victoria & Downtown",
  "Saanich & Central Saanich",
  "Langford & Colwood (West Shore)",
  "Esquimalt & View Royal",
  "Sidney & North Saanich",
  "Oak Bay",
  "Sooke",
];

const coreServices = [
  {
    title: "Thermal Heat Treatments",
    text: "Our specialized, whole-structure eco-friendly heat treatments eliminate bed bugs in a single service.",
    icon: Flame,
  },
  {
    title: "Insect Control",
    text: "Rapid eradication of bed bugs, cockroaches, wasps, hornets, carpenter ants, termites, and common nuisance ants.",
    icon: Bug,
  },
  {
    title: "Rodent & Wildlife Control",
    text: "Humane, effective removal and exclusion of mice, rats, and local wildlife.",
    icon: Rat,
  },
  {
    title: "Bird Control & Cleanup",
    text: "Professional pigeon netting installation, humane bird deterrence, and droppings removal.",
    icon: Bird,
  },
  {
    title: "Structural Repair & Disinfection",
    text: "Complete remediation, cleanup, and disinfection of infested attic insulation and crawlspaces.",
    icon: Home,
  },
];

const whyChoose = [
  {
    title: "14+ Years of Vancouver Island Expertise",
    text: "Based locally in British Columbia, we bring over 14 years of hands-on experience tracking specific regional pest behaviors and tackling the toughest local infestations unique to the Pacific Northwest.",
  },
  {
    title: "Safe, Chemical-Free Treatment Pioneers",
    text: "We are leaders in eco-friendly pest management. Our thermal heat options kill pests without leaving harmful chemical residues behind, protecting your family and pets.",
  },
  {
    title: "No Mandatory Trapping Contracts",
    text: "We focus on solving your pest problem right the first time. We believe in honest service, which means we never lock you into long-term, mandatory contracts.",
  },
  {
    title: "Flexible & Reliable Treatment Options",
    text: "Whether you require traditional target treatments or chemical-free thermal solutions, we are Victoria’s top choice for reliable, discreet, and professional pest control.",
  },
];

export function VictoriaPageContent({
  heroTitle,
  heroDescription,
  phone: phoneProp,
  phoneHref: phoneHrefProp,
}: {
  heroTitle?: string;
  heroDescription?: string;
  phone?: string;
  phoneHref?: string;
} = {}) {
  const phone = phoneProp || siteConfig.contact.phone;
  const phoneHref = phoneHrefProp || siteConfig.contact.phoneHref;

  return (
    <div className="pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-base-900 pt-[calc(var(--header-offset)+1.5rem)] pb-16 text-white md:pt-[calc(var(--header-offset)+2.5rem)] md:pb-20">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-green-500/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <div className="mb-4 flex justify-center">
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/locations", label: "Locations" },
                { href: "/british-columbia", label: "British Columbia" },
                { label: "Victoria" },
              ]}
              tone="dark"
            />
          </div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-green-400 uppercase">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Greater Victoria · Vancouver Island
          </p>
          <h1 className="font-display mx-auto mt-5 max-w-4xl text-[1.75rem] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {heroTitle ||
              "Victoria Pest Control: Professional Quality Service from Local Experts"}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            {heroDescription ||
              "Premier pest management across the Capital Regional District — chemical-free and low-toxicity options for homes, hospitality, care facilities, retail, and industrial properties."}
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Link
              href="/contact?area=victoria"
              className="btn-primary w-full sm:w-auto"
            >
              Schedule Your Inspection
            </Link>
            <a
              href={phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 font-bold text-white transition hover:border-green-400 hover:text-green-400 sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink sm:text-4xl">
            Professional Quality Service from Local Experts
          </h2>
          {introParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-5 text-center leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-band py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
              Capital Regional District
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Proudly Serving Greater Victoria &amp; Surrounding Communities
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              We provide fast, reliable pest control services throughout the
              Capital Regional District (CRD), including:
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {communities.map((area) => (
              <li key={area}>
                <Link
                  href={`/contact?area=${encodeURIComponent(area.split("&")[0].trim().toLowerCase().replace(/\s+/g, "-"))}`}
                  className="flex min-h-12 items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-ink shadow-card transition hover:border-green-600 hover:text-green-700"
                >
                  <MapPin
                    className="h-4 w-4 shrink-0 text-green-600"
                    aria-hidden="true"
                  />
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Our Core Pest Control Services
            </h2>
            <p className="mt-3 text-muted">
              Complete solutions for Victoria homes and businesses — from same-day
              heat treatments to cleanup and disinfection.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-line bg-band p-6 shadow-card transition hover:border-green-600/40 hover:bg-surface"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10 text-green-700 ring-1 ring-green-600/20 transition group-hover:bg-green-600 group-hover:text-white">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/services" className="btn-primary">
              View all services
            </Link>
            <Link href="/bed-bug-packages" className="btn-secondary">
              Bed bug packages
            </Link>
            <Link href="/bed-bug-heat-treatment" className="btn-secondary">
              Heat treatment details
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-band py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Why Ecoheat
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Why Choose Ecoheat Pest Control?
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-base-900 py-16 text-white lg:py-20">
        <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Schedule Your Inspection Today
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Don&apos;t let pests take over your home or business. Contact Greater
            Victoria&apos;s local experts at Ecoheat Pest Control for a free
            consultation and dependable service.
          </p>
          <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-3 text-left sm:mx-auto">
            {[
              "Free consultation for Victoria & CRD properties",
              "Chemical-free heat options available",
              "Discreet, professional technicians",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-lime-400"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Link
              href="/contact?area=victoria"
              className="btn-primary w-full sm:w-auto"
            >
              Get a Free Consultation
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
