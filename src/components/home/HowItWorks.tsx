"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ClipboardList,
  Home,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    icon: MessageSquareText,
    title: "Tell Us What You Need",
    text: "Call or send a quote request with the pest, the property type, and where you have noticed activity.",
  },
  {
    icon: ClipboardList,
    title: "Receive an On-Site Assessment",
    text: "We review your details, ask the right questions, and give you a realistic picture of what is involved.",
  },
  {
    icon: ShieldCheck,
    title: "Get a Customized Treatment Plan",
    text: "A targeted plan matched to the pest, the level of activity, and the people using the space.",
  },
  {
    icon: Home,
    title: "Protect & Monitor Your Property",
    text: "Treatment is carried out with clear guidance, follow-up recommendations, and monitoring options.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="section-eyebrow">How It Works</p>
          <h2 className="font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Our Simple 4-Step Process
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          <div
            className="absolute top-8 right-[12.5%] left-[12.5%] hidden h-px border-t-2 border-dashed border-line lg:block"
            aria-hidden="true"
          >
            <motion.div
              className="h-full origin-left bg-lime-500"
              style={reduceMotion ? { scaleX: 1 } : { scaleX: lineScale }}
            />
          </div>

          <ol className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <span className="absolute -top-2 -right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-lime-500 font-display text-xs font-extrabold text-base-950 ring-4 ring-surface">
                      {i + 1}
                    </span>
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-lime-500/40 text-lime-500">
                      <step.icon className="h-9 w-9" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
