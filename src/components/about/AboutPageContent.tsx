import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Handshake,
  HeartHandshake,
  Home,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import { pickHero, type CmsHeroProps } from "@/lib/cms-hero";

const whoFeatures = [
  {
    icon: Users,
    title: "Proven Experts",
    text: "Serving Calgary & Edmonton surrounding area for 16 years.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    text: "Advanced chemical-free bed bug heat treatments.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    text: "Safe, reliable pest management you can trust.",
  },
  {
    icon: Home,
    title: "Full-Service Support",
    text: "Tailored residential and commercial pest control.",
  },
];

const stats = [
  {
    icon: Award,
    value: "16+",
    label: "Years Experience",
    text: "Protecting Alberta homes & businesses since 2010",
  },
  {
    icon: Home,
    value: "5,000+",
    label: "Properties Protected",
    text: "Residential and commercial properties served",
  },
  {
    icon: Sparkles,
    value: "98%",
    label: "Customer Satisfaction",
    text: "Clients who trust us to get the job done right",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Emergency Support",
    text: "Fast response when pest problems can't wait",
  },
];

const commitments = [
  {
    icon: ShieldCheck,
    title: "Eco-Friendly First",
    text: "We specialize in safe, chemical-free solutions and pioneered specialized bed bug heat treatments in Western Canada.",
  },
  {
    icon: Handshake,
    title: "Global Expertise",
    text: "Our background with international pest control companies brings deep insight into successfully managing extreme infestations.",
  },
  {
    icon: HeartHandshake,
    title: "Family-Owned Value",
    text: "We treat your property like our own, offering premium residential and commercial services alongside DIY pest control products.",
  },
  {
    icon: Target,
    title: "Proven Results",
    text: "Serving Calgary & Edmonton surrounding area for 16 years with reliable, affordable pest management.",
  },
];

const trustedItems = [
  {
    icon: Users,
    title: "Family-Owned & Operated",
    text: "We treat your property like our own.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly First",
    text: "Safe, chemical-free solutions when possible.",
  },
  {
    icon: Award,
    title: "Global Expertise",
    text: "International experience with extreme infestations.",
  },
  {
    icon: Sparkles,
    title: "Bed Bug Heat Specialists",
    text: "Advanced chemical-free heat treatments.",
  },
  {
    icon: Home,
    title: "Full-Service Support",
    text: "Residential, commercial & DIY options.",
  },
  {
    icon: MapPin,
    title: "Local for 16 Years",
    text: "Calgary, Edmonton & surrounding areas.",
  },
];

const missionPoints = [
  "Deliver safe, reliable, and affordable pest management",
  "Prioritize eco-friendly and chemical-free solutions whenever effective",
  "Protect homes and businesses with care, integrity, and proven expertise",
];

export function AboutPageContent(props: CmsHeroProps = {}) {
  const city = siteConfig.location.city;
  const phone = props.phone || siteConfig.contact.phone;
  const phoneHref = props.phoneHref || siteConfig.contact.phoneHref;
  const areas = siteConfig.location.serviceAreas;
  const hero = pickHero(props, {
    title: `Protecting ${city} Properties With Care & Integrity`,
    description:
      "Calgary's trusted eco-friendly exterminator since 2010, providing professional chemical-free bed bug heat treatments and traditional pest control for homes and businesses.",
    image: "/images/about-hero.png",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-base-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={hero.image || "/images/about-hero.png"}
            alt="EcoHeat pest control technicians ready to protect a Calgary home"
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

        <div className="relative mx-auto max-w-7xl px-4 pt-[calc(var(--header-offset)+1.5rem)] pb-16 md:pt-[calc(var(--header-offset)+2.5rem)] lg:px-8 lg:pb-20">
          <Reveal>
            <p className="text-[0.72rem] font-bold tracking-[0.22em] text-lime-400 uppercase">
              Family-Owned — Calgary Proud
            </p>
            <h1 className="font-display mt-4 max-w-2xl text-[1.75rem] leading-[1.12] font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.15rem]">
              {props.heroTitle ? (
                hero.title
              ) : (
                <>
                  Protecting{" "}
                  <span className="text-lime-400">{city}</span> Properties With
                  Care &amp; Integrity
                </>
              )}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {hero.description}
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <span className="inline-flex w-full items-center justify-center rounded-lg border border-lime-500/60 px-5 py-3.5 text-sm font-bold text-lime-400 sm:w-auto">
                Serving Calgary Since 2010
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/about-who-we-are.png"
                alt="Technician applying targeted indoor pest treatment along kitchen baseboards"
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="section-eyebrow">Who We Are</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                More Than Pest Control. We Protect What Matters.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                EcoHeat Pest Control is Alberta&apos;s premier eco-friendly
                exterminator, founded in 2010 by Dr. Sharon Launouette to
                deliver safe, reliable, and affordable pest management.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                From chemical-free bed bug heat treatments to traditional pest
                control for homes and businesses, we bring proven expertise and
                family-owned care to every property we protect.
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {whoFeatures.map((item, i) => (
                <Reveal key={item.title} as="li" delay={i * 0.04}>
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-500/15 text-lime-500">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-sm text-muted">
                        {item.text}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-base-900 py-12 lg:py-14">
        <ul className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} as="li" delay={i * 0.05}>
              <div className="text-center lg:text-left">
                <stat.icon
                  className="mx-auto h-8 w-8 text-lime-400 lg:mx-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="font-display mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-bold text-lime-400">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-white/65">{stat.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Commitment / Why Choose */}
      <section className="bg-band py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="text-center">
            <p className="section-eyebrow">Why Choose Ecoheat?</p>
            <h2 className="font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Our Commitment To You
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/15 text-lime-500">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-ink">
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

      {/* Mission */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <Reveal>
              <p className="section-eyebrow">Our Mission</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Our Mission Is Simple.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                EcoHeat Pest Control was founded to deliver safe, reliable, and
                affordable pest management — with an eco-friendly first approach
                that protects families, pets, and properties across Alberta.
              </p>
            </Reveal>

            <ul className="mt-7 space-y-3.5">
              {missionPoints.map((point, i) => (
                <Reveal key={point} as="li" delay={i * 0.04}>
                  <span className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-lime-500"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-ink">
                      {point}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.15}>
              <Link href="/contact" className="btn-green mt-9">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="relative pr-2 pb-8 sm:pr-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/about-mission.png"
                  alt="EcoHeat technicians reviewing a treatment plan on site"
                  fill
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute bottom-0 left-0 flex max-w-[16rem] items-center gap-3 rounded-xl bg-surface px-4 py-3.5 shadow-soft">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lime-500/15 text-lime-500">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-ink">
                  Safe for Families, Pets &amp; Properties
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-band py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="text-center">
            <p className="section-eyebrow">Why Calgary Trusts Ecoheat</p>
            <h2 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Trusted By Families &amp; Businesses Across Calgary
            </h2>
          </Reveal>

          <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {trustedItems.map((item, i) => (
              <Reveal key={item.title} as="li" delay={i * 0.03}>
                <div className="flex h-full flex-col items-center text-center">
                  <item.icon
                    className="h-9 w-9 text-base-800"
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                  <h3 className="mt-3 text-sm font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative overflow-hidden bg-base-900 py-16 text-white lg:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-skyline opacity-30 sm:h-36"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8">
          <Reveal>
            <p className="section-eyebrow !text-lime-400">Proudly Local</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Proudly Serving {city} &amp; Surrounding Communities
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/75">
              Proven experts serving Calgary &amp; Edmonton surrounding area for
              16 years — with eco-friendly options and full-service support for
              homes and businesses.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {areas.map((area) => (
                  <li key={area}>
                    <span className="inline-flex w-full items-center gap-2 rounded-full border border-lime-500/40 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white">
                      <MapPin
                        className="h-3.5 w-3.5 shrink-0 text-lime-400"
                        aria-hidden="true"
                      />
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-start sm:justify-end">
                <Link href="/locations" className="btn-primary !py-3 text-sm">
                  View Service Areas
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-band py-12 lg:py-14">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl border border-green-600/25 bg-surface px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:px-10">
            <div className="flex items-start gap-4 sm:items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-500/15 text-lime-500">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
                  Ready to Protect Your Property?
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Get safe, eco-friendly pest control from Calgary&apos;s trusted
                  team since 2010.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/contact" className="btn-green !py-3 text-sm">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={phoneHref}
                className="btn-secondary !py-3 text-sm"
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
