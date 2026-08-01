import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Flame,
  Leaf,
  MapPin,
  Monitor,
  Phone,
  ShieldCheck,
  Target,
  Thermometer,
  Tv,
  Pill,
  SprayCan,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "100% Fire-Safe",
    text: "Unlike dangerous propane heaters, our system uses a contained, customized, and professionally designed heating system with zero fire risk.",
  },
  {
    icon: Target,
    title: "Total Elimination",
    text: "Heat penetrates deep into walls, mattresses, and furniture where sprays cannot reach — killing all life stages, including eggs.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    text: "A powerful, non-toxic alternative to chemical treatments that is safer for families, pets, and your home.",
  },
];

const equipment = [
  {
    title: "Heat Assault",
    text: "A fully contained, high-output heating system engineered for rapid lethal temperature deployment.",
    image: "/images/commercial/treatment-page-1.png",
  },
  {
    title: "Quest Bed Bug Heaters",
    text: "Precision-engineered electric systems that distribute uniform, high-velocity airflow.",
    image: "/images/commercial/treatment-page-2.png",
  },
];

const steps = [
  {
    number: "1",
    title: "Targeted Setup",
    text: "We place specialized heating units strategically inside your home.",
  },
  {
    number: "2",
    title: "Continuous Monitoring",
    text: "Technicians use remote sensors to ensure every corner reaches the critical bed bug killing zone (48°C to 54°C).",
  },
  {
    number: "3",
    title: "Lethal Heat Maintenance",
    text: "We hold the target temperature for several hours to guarantee a 100% kill rate of all bugs and hidden eggs.",
  },
];

const processStats = [
  {
    icon: Thermometer,
    title: "48°C – 54°C Target Zone",
    text: "Lethal temperature range held across the treatment area.",
  },
  {
    icon: Monitor,
    title: "Remote Sensor Monitoring",
    text: "Technicians track every corner in real time.",
  },
  {
    icon: Flame,
    title: "Multi-Hour Hold",
    text: "Heat is maintained long enough to destroy eggs.",
  },
  {
    icon: ShieldCheck,
    title: "100% Kill Focus",
    text: "Adults, nymphs, and eggs eliminated in one day.",
  },
];

const prepCategories = [
  {
    icon: Tv,
    title: "Electronics & Plastics",
    points: [
      "Unplug all electronics: Disconnect TVs, computers, and appliances from wall outlets.",
      "Remove heat-sensitive items: Take out vinyl blinds, oil paintings, and soft plastics.",
    ],
  },
  {
    icon: SprayCan,
    title: "Pressurized & Flammable Items",
    points: [
      "Clear out aerosols: Remove hairspray, spray paint, and deodorant cans.",
      "Remove ammunition: Take out all firearms, ammunition, and lighters.",
    ],
  },
  {
    icon: Pill,
    title: "Food & Medications",
    points: [
      "Protect medications: Place vitamins and prescription drugs in the refrigerator.",
      "Secure melting food: Put chocolate, candies, and wax candles in the fridge.",
    ],
  },
];

const calgaryAreas = [
  "Airdrie",
  "Cochrane",
  "Okotoks",
  "Chestermere",
  "Strathmore",
];

const edmontonAreas = [
  "Sherwood Park",
  "St. Albert",
  "Spruce Grove",
  "Stony Plain",
  "Leduc",
];

function AlbertaMap() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-base-900 p-5">
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        <path
          d="M32 8 L68 6 L72 18 L70 38 L74 52 L68 72 L62 88 L48 94 L36 90 L28 72 L26 48 L30 28 Z"
          fill="rgb(26 122 53 / 0.35)"
          stroke="rgb(139 197 63 / 0.55)"
          strokeWidth="1.2"
        />
        <circle cx="42" cy="66" r="2.4" fill="#8bc53f" />
        <circle cx="48" cy="42" r="2.4" fill="#8bc53f" />
      </svg>
      <div className="absolute inset-x-3 bottom-3 flex justify-center gap-2">
        <span className="rounded-full border border-lime-500/40 bg-base-950/70 px-2.5 py-1 text-[0.65rem] font-bold text-lime-400">
          Calgary
        </span>
        <span className="rounded-full border border-lime-500/40 bg-base-950/70 px-2.5 py-1 text-[0.65rem] font-bold text-lime-400">
          Edmonton
        </span>
      </div>
    </div>
  );
}

export function HowHeatWorksPageContent() {
  const phone = siteConfig.contact.phone;
  const phoneHref = siteConfig.contact.phoneHref;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-base-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/how-heat-works-hero.png"
            alt="Technician monitoring bed bug heat treatment equipment"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_center]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-base-950/90 via-base-900/75 to-base-900/45 lg:from-base-950/40 lg:via-transparent lg:to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-14 md:pt-36 lg:px-8 lg:pb-0 xl:pt-44">
          <Reveal>
            <p className="text-[0.72rem] font-bold tracking-[0.22em] text-lime-400 uppercase">
              How Heat Treatment Works
            </p>
            <h1 className="font-display mt-4 max-w-2xl text-[1.75rem] leading-[1.12] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Professional Bed Bug Heat Treatment
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              We provide absolute bed bug elimination across Calgary and
              Edmonton. Our advanced thermal process kills all bed bug life
              stages, including eggs, in a single day.
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="btn-lime w-full sm:w-auto">
                Book Your Treatment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/45 px-5 py-3.5 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Our Experts
              </a>
            </div>
          </Reveal>

          <ul className="relative mt-12 grid grid-cols-1 divide-y divide-white/10 border-t border-white/10 bg-base-950/90 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              "Single-Day Elimination",
              "Chemical-Free",
              "1-Year Guarantee",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center justify-center gap-2 px-4 py-5 text-center text-sm font-bold text-white"
              >
                <ShieldCheck className="h-5 w-5 shrink-0 text-lime-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="text-center">
            <p className="section-eyebrow">Thermal Advantage</p>
            <h2 className="font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Why Choose Our Thermal Process?
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-band p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-lime-500/40 text-lime-500">
                    <item.icon className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-band py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Industry-Leading Equipment</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Elite Technology On Your Property
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              We bring elite, commercial-grade technology directly to your
              property.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {equipment.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 92vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="text-center">
            <p className="section-eyebrow">Our Step-by-Step Process</p>
            <h2 className="font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Absolute Elimination in One Day
            </h2>
          </Reveal>

          <ol className="relative mt-12 grid gap-8 lg:grid-cols-3">
            <div
              className="absolute top-6 right-[16%] left-[16%] hidden h-px border-t-2 border-dashed border-line lg:block"
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 0.06}>
                <div className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-lime-500 font-display text-lg font-extrabold text-base-950 ring-4 ring-surface">
                    {step.number}
                  </span>
                  <h3 className="font-display mt-4 text-xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                src: "/images/commercial/treatment-page-3.png",
                alt: "Technician placing specialized heating units inside the home",
              },
              {
                src: "/images/commercial/treatment-page-4.png",
                alt: "Remote sensors monitoring the bed bug killing temperature zone",
              },
              {
                src: "/images/commercial/treatment-page-5.png",
                alt: "Heat held at target temperature for complete bed bug elimination",
              },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 0.05}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processStats.map((item, i) => (
              <Reveal key={item.title} as="li" delay={i * 0.04}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-band p-4">
                  <item.icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-lime-500"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-sm font-bold text-ink">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {item.text}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Preparation */}
      <section className="bg-band py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Preparation &amp; Guarantee</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Required Home Preparation Steps
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              To ensure a successful treatment, please complete these steps
              before our team arrives.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {prepCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/15 text-lime-500">
                    <cat.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-ink">
                    {cat.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {cat.points.map((point) => (
                      <li
                        key={point}
                        className="border-t border-line pt-3 text-sm leading-relaxed text-muted first:border-0 first:pt-0"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 1-year guarantee */}
      <section className="bg-base-900 py-12 lg:py-14">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center lg:px-8">
            <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border-4 border-gold-500 bg-base-800 text-center">
              <span className="font-display text-2xl font-extrabold text-gold-400">
                1 YEAR
              </span>
              <span className="text-[0.65rem] font-bold tracking-wide text-white uppercase">
                Warranty
              </span>
            </div>
            <div>
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                Our 1-Year Guarantee
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-white/75">
                We are completely confident in what we do. Every heat treatment
                comes backed by an industry-leading 1-Year Warranty. If the bed
                bugs return, so do we — at absolutely no extra cost to you.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Service areas */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1fr_0.85fr_1.15fr] lg:gap-12 lg:px-8">
          <Reveal>
            <p className="section-eyebrow">Coverage</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink">
              Our Service Areas
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Complete bed bug elimination in Calgary, Edmonton, and surrounding
              areas. Our advanced thermal process kills all bed bug life stages
              — including eggs — in a single day.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <AlbertaMap />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-band p-5">
                <h3 className="font-display flex items-center gap-2 text-base font-bold text-ink">
                  <MapPin className="h-4 w-4 text-lime-500" aria-hidden="true" />
                  Calgary Region
                </h3>
                <ul className="mt-3 space-y-2">
                  {calgaryAreas.map((area) => (
                    <li key={area} className="text-sm font-semibold text-muted">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-line bg-band p-5">
                <h3 className="font-display flex items-center gap-2 text-base font-bold text-ink">
                  <MapPin className="h-4 w-4 text-lime-500" aria-hidden="true" />
                  Edmonton Region
                </h3>
                <ul className="mt-3 space-y-2">
                  {edmontonAreas.map((area) => (
                    <li key={area} className="text-sm font-semibold text-muted">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-base-900 py-12 lg:py-14">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4 sm:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-500 text-base-950">
                <Thermometer className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                  Ready for Complete Bed Bug Elimination?
                </h2>
                <p className="mt-1 text-sm text-white/70">
                  Book professional heat treatment across Calgary and Edmonton.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/contact" className="btn-lime !py-3 text-sm">
                Book Heat Treatment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now — {phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
