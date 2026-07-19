"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Home,
  Leaf,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const trustItems = [
  { icon: Home, label: "Residential &", label2: "Commercial" },
  { icon: Users, label: "Family-Owned", label2: "& Operated" },
  { icon: Leaf, label: "Eco-Conscious", label2: "Solutions" },
  { icon: ShieldCheck, label: "Safe & Discreet", label2: "Service" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.6,
            delay,
            ease: [0.21, 0.65, 0.36, 1] as const,
          },
        };

  return (
    <section className="relative overflow-hidden bg-base-950 text-white">
      {/* Full-bleed background photo — technician on the right */}
      <div className="absolute inset-0">
        <Image
          src={siteConfig.images.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_32%]"
        />
        {/* Readability overlays: strong left fade, soft bottom fade */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-base-950 via-base-950/78 to-base-950/10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-base-950/95 via-transparent to-base-950/45"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-8 md:pt-40 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Copy column */}
          <div>
            <motion.p
              {...fadeUp(0.05)}
              className="text-[0.72rem] font-bold tracking-[0.28em] text-gold-500/90 uppercase"
            >
              {siteConfig.location.city}&rsquo;s Trusted Pest Control Experts
            </motion.p>

            <motion.h1
              {...fadeUp(0.15)}
              className="font-serif mt-5 max-w-xl text-4xl leading-[1.16] font-bold tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              Secure Your{" "}
              <span className="text-green-400 lg:block">
                {siteConfig.location.city} Property
              </span>{" "}
              <span className="lg:block">with Safe, Proven</span>{" "}
              <span className="lg:block">Pest Control</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.25)}
              className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-white/70"
            >
              {siteConfig.hero.description}
            </motion.p>

            <motion.div
              {...fadeUp(0.35)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3.5 text-sm font-bold text-base-950 shadow-gold transition-all hover:bg-gold-400"
              >
                {siteConfig.hero.primaryCta}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-base-950/35 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-gold-500 hover:text-gold-500"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call ({siteConfig.contact.phone.slice(0, 3)}){" "}
                {siteConfig.contact.phone.slice(4)}
              </a>
            </motion.div>
          </div>

          {/* Offer card — deep green glass, overlapping the technician */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.65, 0.36, 1] }}
            className="justify-self-center lg:justify-self-end"
          >
            <div className="relative w-64 rounded-2xl border border-green-500/30 bg-green-950/45 p-6 pt-8 text-center shadow-soft backdrop-blur-md sm:w-72">
              {/* Gold pill overlapping the top edge */}
              <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1.5 text-[0.62rem] font-extrabold tracking-[0.16em] whitespace-nowrap text-base-950 uppercase shadow-gold">
                Limited Time Offer
              </p>
              <p className="font-display mt-2 text-[2.6rem] leading-none font-extrabold text-white">
                20% OFF
              </p>
              <p className="mt-2 text-xs font-bold tracking-[0.22em] text-white/85 uppercase">
                For New Customers
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gold-500/50 bg-green-800/60 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700/70"
              >
                Claim My Offer
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <p className="mt-3 text-[0.68rem] text-white/45">
                {siteConfig.offer.terms}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Trust indicator row — dividers, no boxes */}
        <motion.ul
          {...fadeUp(0.55)}
          className="mt-16 grid grid-cols-2 gap-y-6 border-t border-white/12 pt-7 lg:grid-cols-4"
        >
          {trustItems.map((item, i) => (
            <li
              key={item.label}
              className={`flex items-center justify-center gap-3 px-2 ${
                i > 0 ? "lg:border-l lg:border-white/12" : ""
              } ${i % 2 === 1 ? "border-l border-white/12 lg:border-l" : ""}`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-500">
                <item.icon
                  className="h-4.5 w-4.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <span className="text-[0.82rem] leading-snug font-semibold text-white/90">
                {item.label}
                <br />
                {item.label2}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
