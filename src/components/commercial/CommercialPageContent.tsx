import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bird,
  CheckCircle2,
  ClipboardList,
  FileText,
  MapPin,
  Phone,
  Rat,
  Search,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Target,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import { pickHero, type CmsHeroProps } from "@/lib/cms-hero";

/** Sector circle images in /public/images/commercial/sectors/ */
const sectorImages: Record<string, string> = {
  Hotels: "/images/commercial/sectors/hotels.png",
  Motels: "/images/commercial/sectors/motels.png",
  "Work Camps": "/images/commercial/sectors/work-camps.png",
  "Senior Living": "/images/commercial/sectors/senior-living.png",
  Construction: "/images/commercial/sectors/construction.png",
  "Long-Term Care": "/images/commercial/sectors/long-term-care.png",
  Retail: "/images/commercial/sectors/retail.png",
};

const sectors = Object.keys(sectorImages);

const services = [
  {
    icon: Sparkles,
    title: "Targeted Pest Elimination",
    text: "Fast, permanent removal of public health pests including bed bugs, cockroaches, ants, carpenter ants, mice, spiders, wasps, termites, hornets and much more.",
    href: "/services",
  },
  {
    icon: Rat,
    title: "Rodent Control Programs",
    text: "Advanced baiting, trapping, and exclusion work to stop mice and rats from entering your facility.",
    href: "/services/mice-rodent-control",
  },
  {
    icon: Bird,
    title: "Bird Control & Exclusion",
    text: "Professional pigeon netting, spiking, and deterrence to protect your building's exterior and roof.",
    href: "/services",
  },
  {
    icon: SprayCan,
    title: "Biohazard Cleanup & Disinfection",
    text: "Expert sanitization and safe removal of hazardous bird droppings and rodent feces.",
    href: "/services",
  },
];

const benefits = [
  {
    title: "Alberta-Wide Coverage",
    text: "Serving businesses throughout the province.",
  },
  {
    title: "24/7 Emergency Response",
    text: "Rapid relief when you need it most.",
  },
  {
    title: "Licensed Specialists",
    text: "Highly trained, certified, and insured professionals.",
  },
  {
    title: "Premium Compliance Plans",
    text: "Tailored programs that meet industry regulations.",
  },
];

const industries = [
  {
    title: "Hospitality & Lodging",
    subtitle: "Hotels, Motels & Work Camps",
    image: "/images/commercial/commercial-2.png",
    imageAlt: "Discreet commercial inspection in a hotel corridor",
    points: [
      "Discreet Bed Bug Elimination: Rapid-response thermal heat treatments and chemical solutions that protect your guest ratings.",
      "Camp Infrastructure Protection: High-volume pest management built to secure remote work camps from rodents and wildlife.",
    ],
    body: "Different industries face unique structural vulnerabilities and strict regulatory standards. We customize our commercial pest control protocols to keep you compliant and operational.",
  },
  {
    title: "Senior Living & Long-Term Care",
    subtitle: "Sensitive healthcare environments",
    image: "/images/commercial/commercial-3.png",
    imageAlt: "Low-impact pest monitoring in a senior living environment",
    points: [
      "Low-Impact Eco-Treatments: Ultra-safe, low-toxicity pest control methods tailored for sensitive healthcare environments.",
      "Proactive Monitoring: Continuous monitoring loops to catch infestations before they affect patients or residents.",
    ],
    body: "We customize our commercial pest control protocols for senior living buildings and long-term care homes so residents stay safe and operations stay uninterrupted.",
  },
  {
    title: "Construction & Industrial Facilities",
    subtitle: "Sites, warehouses & manufacturing",
    image: "/images/commercial/commercial-4.png",
    imageAlt: "Industrial warehouse pest inspection with digital reporting",
    points: [
      "Pre-Construction Prevention: Vector control setups that prevent displacement infestations during excavation.",
      "Heavy-Industrial Maintenance: Rugged, long-term monitoring networks for vast warehouses and manufacturing plants in northern and central Alberta.",
    ],
    body: "From excavation through ongoing plant operations, we keep construction sites and industrial facilities protected with programs built for Alberta conditions.",
  },
];

const PROTECTION_SIDE_IMAGE = "/images/commercial/commercial-1.png";

const processSteps = [
  {
    icon: Search,
    title: "Site Assessment",
    text: "Inspect the facility, identify pressures, and document risk areas.",
  },
  {
    icon: ClipboardList,
    title: "Custom Strategy",
    text: "Build a plan matched to your industry, structure, and compliance needs.",
  },
  {
    icon: Target,
    title: "Targeted Treatment",
    text: "Apply focused solutions that remove pests with minimal disruption.",
  },
  {
    icon: FileText,
    title: "Compliance Reporting",
    text: "Clear documentation for audits, management, and regulatory requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Monitoring",
    text: "Routine checks and maintenance routes to keep protection in place.",
  },
];

const regions = [
  {
    title: "Edmonton Capital Region",
    text: "Including Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Leduc, and Nisku.",
  },
  {
    title: "Calgary Metropolitan Region",
    text: "Including Airdrie, Cochrane, Okotoks, and Chestermere.",
  },
  {
    title: "Red Deer & Central Alberta",
    text: "Serving businesses throughout the Queen Elizabeth II highway corridor.",
  },
  {
    title: "Lethbridge & Southern Alberta",
    text: "Comprehensive pest management for southern hospitality and retail sectors.",
  },
  {
    title: "Fort McMurray & Wood Buffalo",
    text: "Specialized industrial and camp pest management for the northern sectors.",
  },
];

/** Renders a filled section photo (services side + industry rows). */
function SectionImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-band ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 92vw, 48vw"
        className="object-cover"
      />
    </div>
  );
}

function AlbertaMap() {
  const pins = [
    { name: "Fort McMurray", x: 58, y: 14 },
    { name: "Edmonton", x: 48, y: 42 },
    { name: "Red Deer", x: 46, y: 54 },
    { name: "Calgary", x: 42, y: 66 },
    { name: "Lethbridge", x: 44, y: 80 },
  ];

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-base-900 p-6 sm:p-8">
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        <path
          d="M32 8 L68 6 L72 18 L70 38 L74 52 L68 72 L62 88 L48 94 L36 90 L28 72 L26 48 L30 28 Z"
          fill="rgb(26 122 53 / 0.35)"
          stroke="rgb(139 197 63 / 0.55)"
          strokeWidth="1.2"
        />
        {pins.map((pin) => (
          <g key={pin.name}>
            <circle cx={pin.x} cy={pin.y} r="2.2" fill="#8bc53f" />
            <circle cx={pin.x} cy={pin.y} r="4" fill="none" stroke="#8bc53f" strokeWidth="0.6" opacity="0.5" />
          </g>
        ))}
      </svg>
      <ul className="static mt-4 flex flex-wrap justify-center gap-2 sm:absolute sm:inset-x-4 sm:bottom-4 sm:mt-0">
        {pins.map((pin) => (
          <li
            key={pin.name}
            className="rounded-full border border-lime-500/40 bg-base-950/70 px-2.5 py-1 text-[0.65rem] font-semibold text-lime-400"
          >
            {pin.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CommercialPageContent(props: CmsHeroProps = {}) {
  const phone = props.phone || siteConfig.contact.phone;
  const phoneHref = props.phoneHref || siteConfig.contact.phoneHref;
  const hero = pickHero(props, {
    title: "Commercial Pest Control Alberta",
    description:
      "EcoHeat Pest Control provides expert commercial pest control and industrial pest management programs across Alberta. We specialize in serving Edmonton, Calgary, Lethbridge, Red Deer, Fort McMurray, and all surrounding areas.",
    image: "/images/commercial-hero.png",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-base-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={hero.image || "/images/commercial-hero.png"}
            alt="Commercial pest control technicians inspecting a facility at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_center]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-base-950/90 via-base-900/75 to-base-900/45 lg:from-base-950/40 lg:via-transparent lg:to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-[calc(var(--header-offset)+1.5rem)] pb-16 md:pt-[calc(var(--header-offset)+2.5rem)] lg:px-8 lg:pb-20">
          <Reveal>
            <p className="text-[0.72rem] font-bold tracking-[0.22em] text-lime-400 uppercase">
              Commercial &amp; Industrial Solutions
            </p>
            <h1 className="font-display mt-4 max-w-2xl text-[1.75rem] leading-[1.12] font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.1rem]">
              {props.heroTitle ? (
                hero.title
              ) : (
                <>
                  Commercial Pest Control{" "}
                  <span className="text-lime-400">Alberta</span>
                </>
              )}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {hero.description}
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="btn-lime w-full sm:w-auto">
                Schedule an Inspection
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/45 px-6 py-3.5 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call for Emergency Service
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold tracking-wide text-white/85 uppercase">
              <li className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-lime-400" aria-hidden="true" />
                Licensed &amp; Insured
              </li>
              <li className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-lime-400" aria-hidden="true" />
                24/7 Emergency
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-lime-400" aria-hidden="true" />
                Alberta-Wide
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Protecting operations / sectors */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Protecting Your Operations</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Pests Threaten More Than Your Facility
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Pests threaten your facility, safety, and brand reputation. We
              deliver specialized, budget-friendly pest management solutions for
              hotels, motels, work camps, senior living buildings, construction
              sites, long-term care homes, and retail locations.
            </p>
          </Reveal>

          <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7">
            {sectors.map((sector, i) => (
              <Reveal key={sector} as="li" delay={i * 0.03}>
                <div className="flex flex-col items-center text-center">
                  <span className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-lime-500/45 bg-band shadow-card">
                    <Image
                      src={sectorImages[sector]}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </span>
                  <span className="mt-3 text-sm font-bold text-ink">{sector}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Comprehensive protection */}
      <section className="bg-band py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <Reveal>
              <p className="section-eyebrow">Our Commercial Pest Management Services</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Comprehensive Protection For Your Business
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                From small local shops to large industrial complexes, our
                licensed team protects your business. We custom-fit our
                treatments to your structural needs and strict compliance
                requirements.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 0.04}>
                  <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-500/15 text-lime-500">
                      <service.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display mt-4 text-base font-bold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {service.text}
                    </p>
                    <Link
                      href={service.href}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-bold tracking-wide text-lime-500 uppercase"
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.08}>
            <SectionImage
              src={PROTECTION_SIDE_IMAGE}
              alt="Technician inspecting commercial facility infrastructure"
              className="aspect-[3/4] rounded-2xl shadow-soft lg:aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>

      {/* Benefits bar */}
      <section className="bg-base-900 py-10 lg:py-12">
        <ul className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-8">
          {benefits.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.04}>
              <div className="flex items-start gap-3 text-white">
                <ShieldCheck
                  className="mt-0.5 h-6 w-6 shrink-0 text-lime-400"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-sm font-bold">{item.title}</span>
                  <span className="mt-1 block text-sm text-white/65">
                    {item.text}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Specialized industries — alternating rows */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Preventative &amp; Proactive Protection</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Specialized Industry Solutions
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Different industries face unique structural vulnerabilities and
              strict regulatory standards. We customize our commercial pest
              control protocols to keep you compliant and operational.
            </p>
          </Reveal>

          <div className="mt-14 space-y-16">
            {industries.map((industry, index) => {
              const imageFirst = index % 2 === 0;
              return (
                <div
                  key={industry.title}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
                >
                  <Reveal
                    className={imageFirst ? "lg:order-1" : "lg:order-2"}
                  >
                    <SectionImage
                      src={industry.image}
                      alt={industry.imageAlt}
                      className="aspect-[4/3] rounded-2xl shadow-soft"
                    />
                  </Reveal>
                  <Reveal
                    className={imageFirst ? "lg:order-2" : "lg:order-1"}
                    delay={0.06}
                  >
                    <p className="section-eyebrow">{industry.subtitle}</p>
                    <h3 className="font-display mt-2 text-2xl font-extrabold text-ink sm:text-3xl">
                      {industry.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">
                      {industry.body}
                    </p>
                    <ul className="mt-6 space-y-3.5">
                      {industry.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0 text-lime-500"
                            aria-hidden="true"
                          />
                          <span className="text-sm leading-relaxed text-muted">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-band py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="text-center">
            <p className="section-eyebrow">How It Works</p>
            <h2 className="font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              A Smarter Commercial Pest Program
            </h2>
          </Reveal>

          <div className="relative mt-14">
            <div
              className="absolute top-10 right-[10%] left-[10%] hidden h-px border-t-2 border-dashed border-line lg:block"
              aria-hidden="true"
            />
            <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-4">
              {processSteps.map((step, i) => (
                <Reveal key={step.title} as="li" delay={i * 0.05}>
                  <div className="flex flex-col items-center text-center">
                    <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-lime-500/45 bg-surface text-lime-500 shadow-card">
                      <step.icon className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <h3 className="font-display mt-5 text-base font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Regional areas */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <AlbertaMap />
          </Reveal>

          <div>
            <Reveal>
              <p className="section-eyebrow">Coverage Across Alberta</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Regional Service Areas Across Alberta
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                We offer fast emergency response times and routine maintenance
                routes throughout Alberta&apos;s major economic corridors.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-5">
              {regions.map((region, i) => (
                <Reveal key={region.title} as="li" delay={i * 0.04}>
                  <div className="flex items-start gap-3 border-b border-line pb-4 last:border-0">
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-lime-500"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block font-bold text-ink">
                        {region.title}
                      </span>
                      <span className="mt-0.5 block text-sm text-muted">
                        {region.text}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0c1610] py-12 lg:py-14">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4 sm:items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-500/15 text-lime-400">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                  Protect Your Facility Before Pests Disrupt Business
                </h2>
                <p className="mt-1 text-sm text-white/65">
                  Fast response. Proven protection. Reliable results.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/contact" className="btn-lime !py-3 text-sm">
                Request a Commercial Inspection
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Our Alberta Team
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
