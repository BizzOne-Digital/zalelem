import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  Leaf,
  MapPin,
  Package,
  Phone,
  PiggyBank,
  Search,
  ShieldCheck,
  ShoppingCart,
  SprayCan,
  Target,
  UserRound,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const trustItems = [
  "Commercial-Strength",
  "Technician-Tested",
  "Safe Protocols",
] as const;

const whyChoose = [
  {
    icon: FlaskConical,
    title: "Commercial-Strength Formulas",
    text: "Eliminate pests faster with concentrations stronger than standard retail items.",
  },
  {
    icon: Award,
    title: "Technician-Trusted Quality",
    text: "Deploy the exact solutions used by licensed exterminators in the field.",
  },
  {
    icon: Leaf,
    title: "Safe & Effective Protocols",
    text: "Protect your property with proprietary blends built for high efficacy and safety.",
  },
  {
    icon: PiggyBank,
    title: "Budget-Friendly Savings",
    text: "Eliminate expensive service fees by solving infestations on your own terms.",
  },
  {
    icon: Target,
    title: "Root-Cause Eradication",
    text: "Stop breeding cycles instead of just masking the symptoms of a pest issue.",
  },
];

const equipment = [
  {
    title: "Mice Bait Stations",
    text: "Heavy-duty stations built for lasting rodent control at home or on commercial sites.",
    image: "/images/diy-2.png",
    href: "/contact",
  },
  {
    title: "Targeted Insect Control",
    text: "Professional-grade sprays and residuals for ants, cockroaches, and crawling insects.",
    image: "/images/diy-3.png",
    href: "/contact",
  },
  {
    title: "Monitoring & Inspection Tools",
    text: "Flashlights, monitors, and inspection gear to catch activity early.",
    image: "/images/diy-4.png",
    href: "/contact",
  },
  {
    title: "Commercial Pest Equipment",
    text: "Technician-grade applicators and gear for serious DIY or facility use.",
    image: "/images/diy-5.png",
    href: "/contact",
  },
];

const depots = [
  {
    city: "Calgary",
    text: "Opening soon for convenient local pickup and Southern Alberta support.",
    image: "/images/diy-7.png",
  },
  {
    city: "Edmonton",
    text: "Opening soon to serve Northern Alberta communities and businesses.",
    image: "/images/diy-8.png",
  },
];

const depotFeatures = [
  {
    icon: Package,
    title: "Exclusive Inventory",
    text: "Access premium stock and equipment completely unavailable on the open market.",
  },
  {
    icon: UserRound,
    title: "Expert On-Site Support",
    text: "Receive tailored application advice directly from licensed pest professionals.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Identify the Pest",
    text: "Confirm the pest type so you choose the right professional product.",
  },
  {
    icon: SprayCan,
    title: "Choose Your Solution",
    text: "Select commercial-strength formulas and equipment matched to the job.",
  },
  {
    icon: BookOpen,
    title: "Follow Safe Instructions",
    text: "Apply with technician-tested protocols for efficacy and household safety.",
  },
  {
    icon: ClipboardCheck,
    title: "Monitor the Results",
    text: "Track knockdown and reapply or call us if the infestation needs full-service help.",
  },
];

export function DiyPageContent() {
  const phone = siteConfig.contact.phone;
  const phoneHref = siteConfig.contact.phoneHref;

  return (
    <>
      {/* Hero — diy-hero is already a green/photo split */}
      <section className="relative overflow-hidden bg-base-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/diy-hero.png"
            alt="Professional DIY pest control equipment and supplies"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-base-900/55 lg:bg-transparent lg:bg-gradient-to-r lg:from-base-900/25 lg:via-transparent lg:to-transparent"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto flex min-h-[28rem] max-w-7xl items-center px-4 py-28 md:min-h-[32rem] md:py-36 lg:min-h-[36rem] lg:px-8 xl:py-40">
          <Reveal className="max-w-xl lg:max-w-[32rem]">
            <p className="text-[0.72rem] font-bold tracking-[0.22em] text-gold-400 uppercase">
              Professional DIY Pest Control
            </p>
            <h1 className="font-display mt-4 text-[1.75rem] leading-[1.15] font-extrabold tracking-tight sm:text-4xl lg:text-[2.65rem]">
              Professional-Grade DIY Pest Control Solutions in Calgary and
              Edmonton
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Shop safe, technician-tested pest control products with maximum
              knockdown power—without weak, diluted retail sprays.
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="btn-lime w-full sm:w-auto">
                <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                Shop DIY Solutions
              </Link>
              <a
                href={phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/35 px-6 py-3.5 font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Get Expert Advice
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-white/85"
                >
                  <CheckCircle2
                    className="h-4 w-4 text-lime-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Take control */}
      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Take Control With the Right Tools
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Shop professional-grade, safe pest control products in Calgary and
              Edmonton. Skip weak, diluted retail sprays. Gain direct access to
              exclusive, technician-tested formulas designed for maximum
              knockdown power.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Whether you want to manage the problem yourself or need an expert
              eye, we support you. Visit our upcoming specialized pest control
              depots in Alberta, or book full-service, on-site inspections for
              total peace of mind. We also supply heavy-duty mice bait stations
              and commercial pest control equipment.
            </p>
            <Link
              href="/contact"
              className="btn-green mt-8 inline-flex"
            >
              Ask About DIY Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-card">
              <Image
                src="/images/diy-1.png"
                alt="Pest control specialist helping a customer choose DIY products"
                fill
                sizes="(max-width: 1024px) 92vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-band py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="font-display text-center text-3xl font-extrabold text-ink sm:text-4xl">
              Why Choose Professional DIY Pest Control?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
              Taking control of your own pest management is highly effective when
              you have the right tools. Standard retail store products often fail
              to eliminate the root of an infestation, leading to repeated
              outbreaks and higher long-term costs.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} as="article">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-500/15 text-green-700">
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
      </section>

      {/* Equipment */}
      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="font-display text-center text-3xl font-extrabold text-ink sm:text-4xl">
              Professional Equipment for Smarter Pest Control
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
              Heavy-duty stations, targeted insect control, monitoring tools, and
              commercial equipment — ready for DIY or facility use.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} as="article">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-band shadow-card transition hover:border-green-600/40">
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 22vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-green-700 transition hover:text-green-800"
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="bg-base-900 text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[14rem] sm:min-h-[18rem] lg:min-h-[22rem]">
            <Image
              src="/images/diy-6.png"
              alt="Technician inspecting a kitchen cabinet for pests"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-12 sm:px-8 lg:px-12 lg:py-16">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                DIY When You Can. Expert Help When You Need It.
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-white/75">
                Not sure what you&apos;re dealing with? Book a professional
                on-site inspection for a clear treatment plan and total peace of
                mind.
              </p>
              <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                <Link href="/contact" className="btn-lime w-full sm:w-auto">
                  Book An Inspection
                </Link>
                <a
                  href={phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/35 px-6 py-3.5 font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Talk to the Experts
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Depots */}
      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="font-display text-center text-3xl font-extrabold text-ink sm:text-4xl">
              Coming Soon: Local Alberta Pest Control Depots
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-muted">
              We are expanding our physical footprint to provide Albertans with
              immediate access to commercial extermination supplies.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {depots.map((depot, i) => (
              <Reveal key={depot.city} delay={i * 0.06} as="article">
                <div className="overflow-hidden rounded-2xl border border-line bg-band shadow-card">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={depot.image}
                      alt={`${depot.city} skyline`}
                      fill
                      sizes="(max-width: 768px) 92vw, 45vw"
                      className="object-cover"
                    />
                    <span className="absolute top-4 left-4 rounded-md bg-green-700 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
                      <MapPin
                        className="h-5 w-5 text-green-700"
                        aria-hidden="true"
                      />
                      {depot.city} Depot
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {depot.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
            {depotFeatures.map((feature, i) => (
              <Reveal key={feature.title} delay={0.1 + i * 0.05}>
                <div className="flex gap-4 rounded-2xl border border-line bg-band p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-500/15 text-green-700">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-band py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="font-display text-center text-3xl font-extrabold text-ink sm:text-4xl">
              How Professional DIY Pest Control Works
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06} as="li">
                <div className="relative h-full rounded-2xl border border-line bg-surface p-6 text-center shadow-card">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="mt-4 block text-xs font-bold tracking-[0.18em] text-green-700 uppercase">
                    Step {i + 1}
                  </span>
                  <h3 className="font-display mt-2 text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                  {i < steps.length - 1 ? (
                    <span
                      className="absolute top-12 -right-3 hidden h-0.5 w-6 bg-green-600/30 lg:block"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-base-900 py-16 text-white lg:py-20">
        <div className="bg-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
          <Reveal>
            <ShieldCheck
              className="mx-auto h-10 w-10 text-lime-400"
              aria-hidden="true"
            />
            <h2 className="font-display mt-4 text-3xl font-extrabold sm:text-4xl">
              Ready to Handle Pests With Professional-Grade Tools?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              Ask about DIY products, book an inspection, or call {phone} for
              technician guidance in Calgary and Edmonton.
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="btn-lime w-full sm:w-auto">
                Explore DIY Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/35 px-6 py-3.5 font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
              >
                Consult An Expert
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
