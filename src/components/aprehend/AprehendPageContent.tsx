import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bed,
  CheckCircle2,
  Clock,
  Leaf,
  ListChecks,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Waves,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const howItWorks = [
  {
    step: "01",
    title: "The Trap",
    text: "A pest professional sprays a narrow, invisible 2-inch barrier around your bed frame, box spring, and baseboards.",
  },
  {
    step: "02",
    title: "The Transfer",
    text: "When a bed bug crawls across this barrier to find a meal, microscopic fungal spores stick to its body like wet sand.",
  },
  {
    step: "03",
    title: "The Colony Kill",
    text: "The infected bug walks back to its hidden nesting area and rubs against other bugs, spreading the fungus throughout the entire colony.",
  },
  {
    step: "04",
    title: "The Result",
    text: "The fungus germinates and safely kills the bed bugs within 4 to 10 days, providing ongoing protection for up to 3 months.",
  },
];

const advantages = [
  {
    icon: Target,
    title: "Destroys Hidden Colonies",
    text: "Eliminates the bed bugs you cannot see by using infected bugs to carry the treatment back to their secret nesting areas.",
  },
  {
    icon: Leaf,
    title: "Chemical-Free Peace of Mind",
    text: "Uses a natural, non-toxic fungal biopesticide instead of harsh, synthetic chemical sprays inside your home.",
  },
  {
    icon: Clock,
    title: "Three Months of Continuous Protection",
    text: "Keeps working long after application, protecting your home against missed bugs or new introductions for up to 90 days.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Chemical Resistance",
    text: "Prevents bugs from building immunity, a major issue with traditional chemical sprays that often fail.",
  },
  {
    icon: ListChecks,
    title: "Minimal Home Preparation",
    text: "Requires very little prep work from you compared to traditional treatments, saving you hours of stressful packing and cleaning.",
  },
  {
    icon: Sparkles,
    title: "Odourless and Invisible",
    text: "Leaves no unpleasant chemical smells or unsightly residue on your furniture, baseboards, or bedding.",
  },
];

const factChecks = [
  {
    claim: "No Vacating Required?",
    verdict: "False",
    tone: "false" as const,
    detail:
      "You must vacate the premises during the application and remain away for a minimum of 4 hours until the spray completely dries. This prevents anyone from breathing in the fine airborne mist while it is being applied.",
  },
  {
    claim: "No Preparation Necessary?",
    verdict: "Mostly True",
    tone: "partial" as const,
    detail:
      'It requires "minimal prep" rather than "no prep". You do not have to empty your dressers, bag all your clean clothes, or move heavy furniture. However, you must strip the bedding to launder it on high heat and clear clutter off the floor so the technician can access the baseboards.',
  },
  {
    claim: "Safe for Chemical Sensitivity?",
    verdict: "True",
    tone: "true" as const,
    detail:
      "Because it is non-toxic, biological, and contains no harsh chemical insecticides, it is an excellent choice for individuals sensitive to traditional chemicals. It is entirely odorless.",
  },
  {
    claim: "Safe for Elderly, Newborns & Pregnancy?",
    verdict: "True (With Caution)",
    tone: "caution" as const,
    detail:
      "Once the product dries completely after 4 hours, it is entirely non-toxic and safe for vulnerable individuals. However, official safety protocols dictate that pregnant women, newborns, and those with severe respiratory issues should consult a physician and consider waiting a bit longer before re-entering.",
  },
];

const prepSteps = [
  "Strip the bed: Remove all sheets, pillowcases, and blankets.",
  "High-heat laundry: Wash and dry the bedding on the highest heat setting for at least 40 minutes to kill any bugs actively on the sheets.",
  "Clear the floors: Pick up items, toys, and clutter from the floors and from directly under the bed.",
  "Protect pets: Remove pets from the home for 4 hours, cover fish tanks, and turn off air filters during spraying.",
];

const verdictStyles = {
  false: "bg-red-600/10 text-red-700 border-red-600/25",
  partial: "bg-gold-500/15 text-base-800 border-gold-500/40",
  true: "bg-lime-500/15 text-green-700 border-lime-500/35",
  caution: "bg-lime-500/10 text-base-800 border-lime-500/30",
};

export function AprehendPageContent() {
  const phone = siteConfig.contact.phone;
  const phoneHref = siteConfig.contact.phoneHref;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-base-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/bed-bug-3.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-base-950 via-base-950/92 to-base-900/70"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-16 md:pt-36 lg:px-8 lg:pb-20 xl:pt-44">
          <Reveal>
            <p className="text-[0.72rem] font-bold tracking-[0.22em] text-lime-400 uppercase">
              Professional Biological Pest Control
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-[1.75rem] leading-[1.12] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Aprehend<sup className="text-xl sm:text-2xl">®</sup> Bed Bug Treatment
            </h1>
            <p className="mt-3 max-w-2xl text-lg font-semibold text-lime-400">
              Greater Calgary &amp; Edmonton Regional Solution
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
              Aprehend<sup>®</sup> is a highly effective, modern biological
              treatment specifically designed to eliminate bed bug infestations.
              It works completely differently than traditional chemical sprays,
              offering a long-term, non-toxic solution to your pest problems.
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="btn-lime w-full sm:w-auto">
                Get an Aprehend Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/45 px-5 py-3.5 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {phone}
              </a>
              <Link
                href="/bed-bug-heat-treatment"
                className="inline-flex items-center justify-center gap-1.5 px-1 py-2 text-sm font-bold text-white/80 transition hover:text-lime-400 sm:justify-start"
              >
                Compare Heat Treatment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white/85">
              {[
                "Biological Biopesticide",
                "Up to 3 Months Protection",
                "Minimal Prep",
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

      {/* Intro */}
      <section className="bg-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">The Modern, Biological Solution</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Aprehend<sup className="text-xl">®</sup> Works Differently
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Unlike synthetic chemical pesticides that kill bugs on contact,
              Aprehend is a biopesticide made from a naturally occurring fungus
              called{" "}
              <span className="font-semibold italic text-ink">
                Beauveria bassiana
              </span>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-band py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="text-center">
            <p className="section-eyebrow">How Aprehend Works</p>
            <h2 className="font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Trap. Transfer. Colony Kill. Result.
            </h2>
          </Reveal>

          <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="absolute top-8 right-[12%] left-[12%] hidden h-px border-t-2 border-dashed border-line lg:block"
              aria-hidden="true"
            />
            {howItWorks.map((item, i) => (
              <Reveal key={item.title} as="li" delay={i * 0.06}>
                <div className="relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card">
                  <span className="font-display text-sm font-extrabold tracking-wide text-lime-500">
                    {item.step}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Key Customer Advantages</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Why Choose Aprehend<sup className="text-xl">®</sup>
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Choosing Aprehend<sup>®</sup> offers significant benefits over
              traditional chemical extermination methods.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
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

      {/* Fact checking */}
      <section className="bg-band py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow inline-flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              Fact-Checking the Claims
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              What You Need to Know
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Clear professional guidelines so you know exactly what to expect
              before, during, and after treatment.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {factChecks.map((item, i) => (
              <Reveal key={item.claim} delay={i * 0.04}>
                <article className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="font-display text-lg font-bold text-ink">
                      {item.claim}
                    </h3>
                    <span
                      className={`inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-xs font-bold tracking-wide uppercase ${verdictStyles[item.tone]}`}
                    >
                      {item.verdict}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prep checklist */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <p className="section-eyebrow">The &quot;Minimal Prep&quot; Checklist</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Before the Technician Arrives
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Before the technician arrives to apply Aprehend, you only need to
              complete these basic steps.
            </p>
            <ul className="mt-8 space-y-4">
              {prepSteps.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-lime-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed font-semibold text-ink">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-band p-8 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/15 text-lime-500">
                  <Bed className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    Quick Re-Entry Reminder
                  </h3>
                  <p className="text-sm text-muted">
                    Vacate during application — return after 4 hours once dry.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Waves,
                    title: "Invisible Barrier",
                    text: "2-inch spray line around beds & baseboards",
                  },
                  {
                    icon: Clock,
                    title: "4–10 Day Kill",
                    text: "Colony dies as fungus germinates",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Up to 90 Days",
                    text: "Ongoing protection after treatment",
                  },
                  {
                    icon: Leaf,
                    title: "Non-Toxic",
                    text: "Natural Beauveria bassiana fungus",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-line bg-surface p-4"
                  >
                    <card.icon
                      className="h-5 w-5 text-lime-500"
                      aria-hidden="true"
                    />
                    <p className="mt-2 text-sm font-bold text-ink">{card.title}</p>
                    <p className="mt-1 text-xs text-muted">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-base-900 py-12 lg:py-14">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                Ready for a Modern, Biological Bed Bug Solution?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/70">
                Ask about Aprehend<sup>®</sup> Bed Bug Treatment for Greater
                Calgary and Edmonton. Long-term, non-toxic protection — up to 3
                months.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/contact" className="btn-lime !py-3 text-sm">
                Request Aprehend Treatment
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
