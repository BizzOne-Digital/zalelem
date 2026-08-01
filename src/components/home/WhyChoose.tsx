import {
  ClipboardCheck,
  Leaf,
  Phone,
  Search,
  Shield,
  CalendarDays,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const reasons = [
  {
    icon: Leaf,
    title: "Eco-Conscious Approach",
    text: "We prioritize reduced-chemical and non-chemical methods whenever they are effective for your situation.",
  },
  {
    icon: Search,
    title: "Inspection-Led Solutions",
    text: "Every plan starts with a careful inspection so we treat the source — not just the symptoms.",
  },
  {
    icon: ClipboardCheck,
    title: "Customized & Detailed Plans",
    text: "Treatment plans are matched to the pest, property type, and the people who use the space.",
  },
  {
    icon: Shield,
    title: "Preventive Pest Protection",
    text: "We focus on lasting results with prevention guidance that helps keep pests from returning.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Service Plans",
    text: "One-time, monthly, and quarterly options designed around your property and budget.",
  },
  {
    icon: Phone,
    title: "Clear Follow-Up & Support",
    text: "You get clear next steps, follow-up recommendations, and responsive local support.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-base-900 py-16 text-white lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="section-eyebrow !text-lime-400">
            Safe, Discreet, and Effective
          </p>
          <h2 className="font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Smart Solutions. Lasting Protection.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.04}>
              <div className="flex h-full flex-col">
                <reason.icon
                  className="h-8 w-8 text-lime-400"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-display mt-4 text-lg font-bold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {reason.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
