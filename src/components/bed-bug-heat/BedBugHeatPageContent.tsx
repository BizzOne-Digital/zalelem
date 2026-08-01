import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bed,
  CalendarDays,
  CheckCircle2,
  Cpu,
  Flame,
  Leaf,
  MapPin,
  Monitor,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Thermometer,
  Zap,
} from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const superiorFeatures = [
  {
    icon: CalendarDays,
    title: "One-Time Service",
    text: "Our thermal remediation safely eliminates bed bugs in a single, chemical-free service — no weeks of repeat visits.",
  },
  {
    icon: Leaf,
    title: "Zero Chemical Residue",
    text: "Completely chemical-free and non-toxic, with nothing left behind that can linger for weeks in your home.",
  },
  {
    icon: ShieldCheck,
    title: "Discreet & Professional",
    text: "A safe, discreet, and permanent solution designed to protect your family and property with minimal disruption.",
  },
  {
    icon: Target,
    title: "Permanent Results",
    text: "Heat destroys bed bugs at every life stage — adults, nymphs, and eggs — for lasting elimination.",
  },
];

const whyPoints = [
  {
    title: "100% Safe for Vulnerable Family Members",
    intro:
      "Traditional pesticides leave chemical residues that can linger for weeks. Our thermal treatment is completely chemical-free and non-toxic. It is the safest choice for households with:",
    points: [
      "Newborns and infants",
      "Pregnant individuals",
      "Elderly family members",
      "Anyone with chemical sensitivities or respiratory issues",
      "Beloved household pets",
    ],
    image: "/images/commercial/bed-bug-1.png",
    imageAlt: "Happy family with their dog in a safe, pest-free home",
    imageClass: "object-cover object-center",
  },
  {
    title: "Kills All Life Stages—Including Eggs",
    intro:
      "Chemical treatments often fail because they only kill adult bugs. This leaves eggs behind to hatch and restart the infestation. Our high-temperature process destroys bed bugs at every stage of life.",
    points: [
      "Eradicates adult bed bugs instantly",
      "Destroys nymphs (juveniles)",
      "Lethally penetrates and kills bed bug eggs",
      "Guarantees a one-time treatment success",
    ],
    image: "/images/commercial/bed-bug-2.png",
    imageAlt: "Life cycle stages destroyed by heat treatment",
    imageClass: "object-contain bg-white p-4",
  },
  {
    title: "Reaches Cracks, Crevices, and Electronics",
    intro:
      "Bed bugs are experts at hiding where liquids and powders cannot reach. Heat expands and flows into every microscopic hiding spot. Our thermal method safely penetrates:",
    points: [
      "Deep inside electronics (TVs, computers, outlets)",
      "Mattress cores and box springs",
      "Baseboards, wall voids, and floorboards",
      "Deep cracks and crevices in furniture",
    ],
    image: "/images/bed-bug-3.png",
    imageAlt: "Heat penetrating every corner of a bedroom during thermal remediation",
    imageClass: "object-cover object-center",
  },
  {
    title: "Minimal Preparation & Zero Furniture Loss",
    intro:
      "Traditional chemical spraying requires weeks of bagging clothes and exhausting laundry cycles. Worse, many companies force you to throw away expensive furniture. With Ecoheat's thermal remediation:",
    points: [
      "No need to discard furniture or mattresses",
      "Minimal preparation required by the homeowner",
      "No tedious, repetitive laundry cycles",
      "No multiple evacuations of your home over several weeks",
    ],
    image: "/images/bed-bug-4.png",
    imageAlt: "Clean bedroom kept intact after heat treatment — no furniture loss",
    imageClass: "object-cover object-center",
  },
];

const TECH_IMAGE = "/images/commercial/bed-bug-5.png";

const techFeatures = [
  {
    icon: Flame,
    title: "Zero Fire Risk",
    text: "Advanced engineering eliminates the fire hazards of standard propane heaters.",
  },
  {
    icon: Zap,
    title: "Zero Electrical Risks",
    text: "Controlled, self-contained power prevents household electrical overloads.",
  },
  {
    icon: Thermometer,
    title: "Uniform Heat Distribution",
    text: 'High-powered fans circulate heat evenly to prevent "cool spots" where bugs could hide.',
  },
  {
    icon: Sparkles,
    title: "Rapid Ambient Heating",
    text: "Reaches lethal target temperatures quickly, reducing the time you need to be away from home.",
  },
];

const processSteps = [
  {
    icon: Search,
    title: "Inspection & Planning",
    text: "We assess activity, map treatment zones, and plan a precise thermal strategy.",
  },
  {
    icon: Bed,
    title: "Room Preparation",
    text: "Clear guidance so your space is ready with minimal homeowner effort.",
  },
  {
    icon: Cpu,
    title: "Precise Heat Setup",
    text: "Certified Quest and Heat Assault systems are positioned for full coverage.",
  },
  {
    icon: Monitor,
    title: "Monitored Thermal Treatment",
    text: "Temperatures are tracked so lethal heat reaches every hiding place.",
  },
  {
    icon: ShieldCheck,
    title: "Final Verification",
    text: "We confirm treatment targets were met before wrapping up the service.",
  },
];

const heatPros = [
  "One visit for complete treatment",
  "Kills adults, nymphs, and eggs",
  "Chemical-free and non-toxic",
  "Minimal preparation required",
  "No furniture or mattress loss",
  "Safe for families, infants, and pets",
  "Reaches electronics and deep voids",
  "Discreet, permanent solution",
];

const chemicalCons = [
  "Multiple visits over several weeks",
  "Eggs and hidden bugs often survive",
  "Chemical residues can linger",
  "Extensive laundry and bagging",
  "Furniture may need discarding",
  "Risky for sensitive households",
  "Misses deep cracks and electronics",
  "Infestation can restart after hatching",
];

const calgaryAreas = [
  "Calgary",
  "Airdrie",
  "Cochrane",
  "Chestermere",
  "Okotoks",
  "High River",
  "Strathmore",
];

const edmontonAreas = [
  "Edmonton",
  "Sherwood Park",
  "St. Albert",
  "Spruce Grove",
  "Stony Plain",
  "Leduc",
  "Fort Saskatchewan",
];

const faqs = [
  {
    question: "Is bed bug heat treatment really chemical-free?",
    answer:
      "Yes. Our thermal remediation uses controlled high temperatures — not sprays — to eliminate bed bugs. It is completely chemical-free and non-toxic, making it ideal for homes with infants, pets, pregnant family members, and anyone with chemical sensitivities.",
  },
  {
    question: "Does heat kill bed bug eggs?",
    answer:
      "Yes. Unlike many chemical treatments that primarily affect adults, our high-temperature process destroys bed bugs at every life stage — including eggs and nymphs — so the infestation does not restart after hatching.",
  },
  {
    question: "Will I have to throw away my mattress or furniture?",
    answer:
      "No. With Ecoheat's thermal remediation there is no need to discard furniture or mattresses. Heat penetrates mattress cores, box springs, and furniture crevices so belongings can usually stay.",
  },
  {
    question: "How much preparation do I need to do?",
    answer:
      "Preparation is minimal compared with traditional spraying. You will not need weeks of bagging clothes, repetitive laundry cycles, or multiple evacuations of your home over several weeks. We provide clear guidance before treatment day.",
  },
  {
    question: "Is the equipment safe for my home's electrical system?",
    answer:
      "Yes. We use certified systems from industry leaders like Quest and Heat Assault with controlled, self-contained power that prevents household electrical overloads, plus engineering that eliminates the fire hazards of standard propane heaters.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We proudly serve Calgary, Edmonton, and surrounding communities — including Airdrie, Cochrane, Chestermere, Okotoks, High River, Strathmore, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Leduc, and Fort Saskatchewan.",
  },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-lime-500"
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AlbertaPins() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-base-900 p-6">
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        <path
          d="M32 8 L68 6 L72 18 L70 38 L74 52 L68 72 L62 88 L48 94 L36 90 L28 72 L26 48 L30 28 Z"
          fill="rgb(26 122 53 / 0.35)"
          stroke="rgb(139 197 63 / 0.55)"
          strokeWidth="1.2"
        />
        <circle cx="42" cy="66" r="2.4" fill="#f5c518" />
        <circle cx="48" cy="42" r="2.4" fill="#f5c518" />
      </svg>
      <div className="absolute inset-x-4 bottom-4 flex justify-center gap-2">
        <span className="rounded-full border border-gold-500/50 bg-base-950/70 px-3 py-1 text-xs font-bold text-gold-400">
          Calgary
        </span>
        <span className="rounded-full border border-gold-500/50 bg-base-950/70 px-3 py-1 text-xs font-bold text-gold-400">
          Edmonton
        </span>
      </div>
    </div>
  );
}

export function BedBugHeatPageContent() {
  const phone = siteConfig.contact.phone;
  const phoneHref = siteConfig.contact.phoneHref;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-base-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/bed-bug-heat-hero.png"
            alt="Technician monitoring bed bug heat treatment equipment in a bedroom"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-base-950/90 via-base-900/75 to-base-900/45 lg:from-base-950/40 lg:via-transparent lg:to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-16 md:pt-36 lg:px-8 lg:pb-20 xl:pt-44">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {["One-Time", "Chemical-Free", "Family Safe"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-lime-500/50 bg-base-950/40 px-3 py-1 text-[0.68rem] font-bold tracking-wide text-lime-400 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display mt-5 max-w-2xl text-[1.75rem] leading-[1.12] font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[2.9rem]">
              Professional Bed Bug Heat Treatment in{" "}
              <span className="text-lime-400">Calgary &amp; Edmonton</span>
            </h1>
            <p className="mt-3 max-w-xl text-lg font-semibold text-white/90">
              Eco-Friendly Thermal Remediation for Absolute Pest Elimination
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
              Are you struggling with a bed bug infestation? Traditional chemical
              treatments can be stressful, slow, and disruptive. Ecoheat Pest
              Control offers a superior alternative. Our advanced Bed Bug Heat
              Treatment (Thermal Remediation) penetrates every corner of your
              home. We safely eliminate bed bugs in a single, chemical-free
              service.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
              We proudly serve Calgary, Edmonton, and all surrounding areas. Our
              team delivers a safe, discreet, and permanent solution to protect
              your family and property.
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="btn-lime w-full sm:w-auto">
                Get a Free Heat Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/45 px-5 py-3.5 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Alberta&apos;s Bed Bug Experts
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white/85">
              {[
                "Chemical-Free",
                "Single Treatment",
                "Safe for Families & Pets",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Superior alternative */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">A Superior Alternative</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              End Bed Bugs Without Stressful Chemical Treatments
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Our advanced thermal remediation penetrates every corner of your
              home and eliminates bed bugs in a single, chemical-free service.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {superiorFeatures.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-band p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/15 text-lime-500">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-band py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Why Choose Chemical-Free Heat Treatment?</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Safer. Faster. More Complete.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-16">
            {whyPoints.map((block, index) => {
              const imageFirst = index % 2 === 0;
              return (
                <div
                  key={block.title}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
                >
                  <Reveal className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-band shadow-soft">
                      <Image
                        src={block.image}
                        alt={block.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 92vw, 48vw"
                        className={block.imageClass}
                      />
                    </div>
                  </Reveal>
                  <Reveal
                    className={imageFirst ? "lg:order-2" : "lg:order-1"}
                    delay={0.06}
                  >
                    <h3 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                      {block.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">{block.intro}</p>
                    <CheckList items={block.points} />
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="bg-base-900 py-10 lg:py-12">
        <ul className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            "100% Chemical-Free",
            "All Life Stages Eliminated",
            "One Treatment",
            "No Furniture Loss",
          ].map((item, i) => (
            <Reveal key={item} as="li" delay={i * 0.04}>
              <div className="flex items-center gap-3 text-white">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Technology */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Our Cutting-Edge Thermal Technology</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Why Our System Is Superior
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              At Ecoheat Pest Control, we never compromise on safety or power.
              We use top-tier, certified thermal remediation systems from
              industry leaders like Quest and Heat Assault.
            </p>
          </Reveal>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src={TECH_IMAGE}
                  alt="Certified thermal remediation equipment set up in a bedroom"
                  fill
                  sizes="(max-width: 1024px) 92vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {techFeatures.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-xl border border-line bg-band p-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display mt-4 text-base font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-band py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="text-center">
            <p className="section-eyebrow">The Process</p>
            <h2 className="font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              How Our Heat Treatment Works
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
                    <p className="mt-3 text-xs font-bold tracking-wide text-lime-500 uppercase">
                      Step {i + 1}
                    </p>
                    <h3 className="font-display mt-1 text-base font-bold text-ink">
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

          <Reveal className="mx-auto mt-12 max-w-md rounded-2xl border border-line bg-surface p-5 text-center shadow-card">
            <p className="text-xs font-bold tracking-[0.16em] text-lime-500 uppercase">
              Target Temperature
            </p>
            <p className="font-display mt-2 text-3xl font-extrabold text-ink">
              122°F – 140°F
            </p>
            <p className="mt-1 text-sm text-muted">
              Lethal heat monitored throughout the treatment window
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">See The Difference</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Heat Treatment vs. Traditional Chemicals
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border-2 border-lime-500/40 bg-lime-500/5 p-7">
                <h3 className="font-display text-xl font-extrabold text-ink">
                  Ecoheat Thermal Treatment
                </h3>
                <ul className="mt-6 space-y-3">
                  {heatPros.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-lime-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-line bg-band p-7">
                <h3 className="font-display text-xl font-extrabold text-muted">
                  Traditional Chemical Treatment
                </h3>
                <ul className="mt-6 space-y-3">
                  {chemicalCons.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted/20 text-[0.65rem] font-bold text-muted"
                        aria-hidden="true"
                      >
                        ✕
                      </span>
                      <span className="text-sm text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-band py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Alberta Coverage</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Serving Calgary, Edmonton &amp; Surrounding Communities
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              We provide fast, responsive, and professional bed bug heat
              treatments across Alberta.
            </p>
          </Reveal>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <Reveal>
              <AlbertaPins />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-card">
                  <div className="flex items-center gap-2 text-lime-500">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                    <h3 className="font-display text-lg font-bold text-ink">
                      Calgary Region
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {calgaryAreas.map((area) => (
                      <li key={area} className="text-sm font-semibold text-muted">
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-card">
                  <div className="flex items-center gap-2 text-lime-500">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                    <h3 className="font-display text-lg font-bold text-ink">
                      Edmonton Region
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {edmontonAreas.map((area) => (
                      <li key={area} className="text-sm font-semibold text-muted">
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">FAQs</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-4xl">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-base-900 py-12 lg:py-14">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4 sm:items-center">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold-500 text-base-950">
                <Thermometer className="h-8 w-8" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                  Contact Alberta&apos;s Bed Bug Experts Today
                </h2>
                <p className="mt-1 max-w-xl text-sm text-white/70">
                  Do not live with the stress of bed bugs for another night. Get
                  a permanent, safe, and chemical-free solution with Ecoheat Pest
                  Control.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/contact" className="btn-lime !py-3 text-sm">
                Book Your Heat Treatment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
