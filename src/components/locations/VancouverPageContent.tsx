import Link from "next/link";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { siteConfig } from "@/config/site";

const introParagraphs = [
  "Welcome to Ecoheat Pest Control, Vancouver’s trusted provider of premier pest management solutions. We handle everything from proactive prevention and structural protection to complete pest removal and eradication. No job is too large or too small. We specialise in both chemical-free and low-toxicity treatments tailored for residential, commercial, home cares, hotels, motels, retail and industrial properties. Our technicians routinely service homes, hotels, motels, senior living facilities, and care homes.",
  "Our treatments are highly effective and engineered to be completely safe for newborns, the elderly, pregnant individuals, and anyone sensitive to chemical products.",
];

const coreServices = [
  {
    title: "Insect Control",
    text: "Eradication of bed bugs, cockroaches, wasps, carpenter ants, termites, and common nuisance ants.",
  },
  {
    title: "Rodent & Bird Control",
    text: "Humane, effective removal of mice and rats, along with professional pigeon exclusion.",
  },
  {
    title: "Cleanup & Structural Repair",
    text: "Professional pigeon netting installation, droppings removal, and remediation/disinfection of infested attic insulation.",
  },
];

const whyChoose = [
  {
    label: "14+ Years of Local Expertise",
    text: "Based locally in British Columbia, we bring over 14 years of hands-on experience tracking specific regional pest behaviours and tackling the toughest local infestations.",
  },
  {
    label: "Thermal Heat Treatment Pioneers",
    text: "We specialise in safe, whole-structure thermal heat treatments designed to eliminate bed bugs in a single service.",
  },
  {
    label: "No Mandatory Trapping Contracts",
    text: "We focus on solving your pest problem right the first time, without locking you into long-term, mandatory contracts.",
  },
  {
    label: "Flexible Treatment Options",
    text: "Whether you require traditional treatments or chemical-free thermal solutions, we are Vancouver’s top choice for reliable pest control.",
  },
];

const serviceAreaGroups = [
  {
    title: "Metro Vancouver West & Central",
    areas: [
      "Vancouver (Including Downtown, Kitsilano, East Van, and Kerrisdale)",
      "North Vancouver",
      "West Vancouver",
      "Burnaby",
      "Richmond",
      "New Westminster",
    ],
  },
  {
    title: "Tri-Cities & Ridge Meadows",
    areas: [
      "Coquitlam",
      "Port Coquitlam",
      "Port Moody",
      "Maple Ridge",
      "Pitt Meadows",
    ],
  },
  {
    title: "South of the Fraser & Fraser Valley",
    areas: [
      "Surrey",
      "Delta (Including Ladner and Tsawwassen)",
      "Langley (City and Township)",
      "White Rock",
      "Abbotsford",
      "Chilliwack",
    ],
  },
];

const whyProfessional = [
  "A professional technician will know the species of your pest problem from experience. After inspecting your property, they will find the extent and cause of your pest problem fast.",
  "They have the pest control training and certification to use all the most effective and efficient controlled substances permissible under the control of pesticide regulations, should such treatment be necessary.",
  "They can safely administer the most suitable procedure for eliminating your pest problem.",
  "They will use techniques which will prevent damage, contamination and exposure to you, your employees, your family and pets.",
  "They will advise you on how to ensure that there is no reoccurrence of pests in your property and provide a written report of control.",
];

export function VancouverPageContent({
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
      <section className="relative overflow-hidden bg-base-900 pt-[calc(var(--header-offset)+1.5rem)] pb-16 text-white md:pt-[calc(var(--header-offset)+2.5rem)]">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <div className="mb-4 flex justify-center">
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/locations", label: "Locations" },
                { href: "/british-columbia", label: "British Columbia" },
                { label: "Vancouver" },
              ]}
              tone="dark"
            />
          </div>
          <p className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase">
            Pest Control · Vancouver, BC
          </p>
          <h1 className="font-display mt-3 text-[1.75rem] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {heroTitle ||
              "Vancouver Pest Control: Professional Quality Service from Local Experts"}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/75 sm:text-lg">
            {heroDescription ||
              "Premier pest management across Vancouver and the Lower Mainland — chemical-free and low-toxicity options for homes, hotels, care facilities, retail, and industrial properties."}
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Link
              href="/contact?area=vancouver"
              className="btn-primary w-full sm:w-auto"
            >
              Contact Us Today
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
              key={paragraph.slice(0, 48)}
              className="mt-5 text-center leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-band py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink">
            Our Core Pest Control Services
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {coreServices.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-card"
              >
                <h3 className="font-display text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/services" className="btn-primary">
              View all services
            </Link>
            <Link href="/bed-bug-packages" className="btn-secondary">
              Bed bug packages
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink sm:text-4xl">
            Why Choose Ecoheat Pest Control?
          </h2>
          <ul className="mt-8 space-y-4">
            {whyChoose.map((item) => (
              <li key={item.label} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                  aria-hidden="true"
                />
                <span className="leading-relaxed text-muted">
                  <span className="font-semibold text-ink">{item.label}:</span>{" "}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-band py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink">
            Our Vancouver &amp; Lower Mainland Service Areas
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            To better serve our local communities, Ecoheat Pest Control provides
            rapid-response pest management services across Vancouver and all
            neighbouring municipalities in the Lower Mainland and Greater
            Vancouver area.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceAreaGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-card"
              >
                <h3 className="font-display text-lg font-bold text-ink">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.areas.map((area) => (
                    <li key={area} className="flex gap-2 text-sm text-muted">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-600"
                        aria-hidden="true"
                      />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink sm:text-4xl">
            Why Use a Professional Pest Control Company?
          </h2>
          <ul className="mt-8 space-y-4">
            {whyProfessional.map((text) => (
              <li key={text.slice(0, 40)} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                  aria-hidden="true"
                />
                <span className="leading-relaxed text-muted">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-base-900 py-14 text-white lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready for Pest-Free Vancouver Property?
          </h2>
          <p className="mt-4 text-white/75">
            Contact Ecoheat Pest Control for a free quote across Vancouver and
            the Lower Mainland.
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Link
              href="/contact?area=vancouver"
              className="btn-primary w-full sm:w-auto"
            >
              Get a Free Quote
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
