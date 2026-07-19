import {
  Award,
  ClipboardCheck,
  Leaf,
  Scale,
  Timer,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const reasons = [
  {
    icon: Timer,
    title: "Fast, Discreet Response",
    text: "We act quickly to solve your problem while protecting your privacy and reputation.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    text: "Safe for your family, pets, and the environment — non-chemical methods wherever appropriate.",
  },
  {
    icon: Award,
    title: "Experienced & Certified",
    text: "Our team is trained, certified, and equipped with advanced tools and techniques.",
  },
  {
    icon: ClipboardCheck,
    title: "Preventive & Lasting Results",
    text: "We go beyond treating symptoms — we prevent pests from coming back.",
  },
  {
    icon: Workflow,
    title: "Flexible Service Plans",
    text: "One-time, monthly, and quarterly plans that fit your property and your budget.",
  },
  {
    icon: Scale,
    title: "Clear, Fair & Upfront Quotes",
    text: "No hidden surprises — you know exactly what is planned before treatment begins.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-base-950 py-20 lg:py-24">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-green-600/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
            Why Choose Pest Warriors
          </p>
          <h2 className="heading-rule font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Smart Solutions. Lasting Protection.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.06}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-white/8 bg-base-800/60 p-7 text-center transition-colors hover:border-gold-500/40 hover:bg-base-800">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/15 text-green-400 transition-colors group-hover:bg-green-600 group-hover:text-white">
                  <reason.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                  {reason.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {siteConfig.guarantee.enabled && (
          <Reveal className="mt-10">
            <p className="mx-auto max-w-3xl rounded-2xl border border-gold-500/25 bg-gold-500/[0.06] px-6 py-4 text-center text-sm text-white/70">
              <span className="font-bold text-gold-400">Our warranty: </span>
              {siteConfig.guarantee.text}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
