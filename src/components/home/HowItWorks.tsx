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
  MessageSquareText,
  Route,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    icon: MessageSquareText,
    title: "Tell Us What You're Seeing",
    text: "Call or send a quote request with the pest, the property type, and where you have noticed activity.",
  },
  {
    icon: ClipboardList,
    title: "Receive an Initial Assessment",
    text: "We review your details, ask the right questions, and give you a realistic picture of what is involved.",
  },
  {
    icon: Route,
    title: "Get a Customized Treatment Plan",
    text: "A targeted plan matched to the pest, the level of activity, and the people using the space.",
  },
  {
    icon: ShieldCheck,
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
    <section className="bg-base-900 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
            How It Works
          </p>
          <h2 className="heading-rule font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Our Simple 4-Step Process
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-14">
          {/* Connector line — animates with scroll */}
          <div
            className="absolute top-6 bottom-6 left-[1.4rem] w-0.5 bg-white/10 lg:top-[1.4rem] lg:right-10 lg:bottom-auto lg:left-10 lg:h-0.5 lg:w-auto"
            aria-hidden="true"
          >
            {/* Vertical on mobile, horizontal on desktop — scaling both axes
                keeps the visible axis animated in either layout. */}
            <motion.div
              className="h-full w-full origin-top bg-gold-500 lg:origin-left"
              style={
                reduceMotion
                  ? { scaleY: 1, scaleX: 1 }
                  : { scaleY: lineScale, scaleX: lineScale }
              }
            />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 0.1}>
                <div className="flex gap-5 lg:flex-col">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 text-base-950 ring-4 ring-base-900">
                    <span className="font-display text-sm font-extrabold">
                      {i + 1}
                    </span>
                  </div>
                  <div className="lg:mt-5">
                    <span className="mb-3 hidden h-11 w-11 items-center justify-center rounded-xl bg-green-600/15 text-green-400 lg:flex">
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
