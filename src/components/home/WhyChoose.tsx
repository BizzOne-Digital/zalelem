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
    <section className="bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-green-700 uppercase">
            Why Choose Pest Warriors
          </p>
          <h2 className="heading-rule font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Smart Solutions. Lasting Protection.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.04}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-band p-7 transition-colors hover:border-green-600 hover:bg-surface">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                  <reason.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-ink">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {siteConfig.guarantee.enabled ? (
          <Reveal className="mt-10">
            <p className="mx-auto max-w-3xl rounded-2xl border border-green-600/25 bg-green-600/5 px-6 py-4 text-center text-sm text-muted">
              <span className="font-bold text-green-700">Our warranty: </span>
              {siteConfig.guarantee.text}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
