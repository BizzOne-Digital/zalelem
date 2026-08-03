"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Home,
  Leaf,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const trustItems = [
  { icon: Home, label: "Residential & Commercial" },
  { icon: BadgeCheck, label: "Top Rated Local Pest Experts" },
  { icon: Leaf, label: "Eco-Friendly Products" },
  { icon: Clock, label: "Fast & Reliable Service" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const highlight = siteConfig.hero.headlineHighlight;
  const headline = siteConfig.hero.headline;
  const highlightIndex = headline.indexOf(highlight);
  const before =
    highlightIndex >= 0 ? headline.slice(0, highlightIndex) : headline;
  const after =
    highlightIndex >= 0
      ? headline.slice(highlightIndex + highlight.length)
      : "";

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.55,
            delay,
            ease: [0.21, 0.65, 0.36, 1] as const,
          },
        };

  return (
    <section className="relative overflow-hidden bg-base-900 text-white">
      <div className="absolute inset-0">
        <Image
          src={siteConfig.images.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%] sm:object-[65%_30%] lg:object-[72%_32%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-base-950/95 via-base-900/80 to-base-900/25"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-[calc(var(--header-offset)+1.5rem)] pb-14 md:pt-[calc(var(--header-offset)+2.5rem)] lg:px-8 lg:pb-16 xl:pt-[calc(var(--header-offset)+3rem)]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <motion.p
              {...fadeUp(0.05)}
              className="text-[0.72rem] font-bold tracking-[0.22em] text-lime-400 uppercase"
            >
              {siteConfig.hero.eyebrow}
            </motion.p>

            <motion.h1
              {...fadeUp(0.12)}
              className="font-display mt-4 max-w-2xl text-[1.75rem] leading-[1.12] font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            >
              {highlightIndex >= 0 ? (
                <>
                  {before}
                  <span className="text-lime-400">{highlight}</span>
                  {after}
                </>
              ) : (
                headline
              )}
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-5 max-w-lg text-base leading-relaxed text-white/80"
            >
              {siteConfig.hero.description}
            </motion.p>

            <motion.div
              {...fadeUp(0.28)}
              className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link href="/contact" className="btn-lime w-full sm:w-auto">
                {siteConfig.hero.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/45 px-6 py-3.5 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="justify-self-center lg:justify-self-end"
          >
            <div className="relative w-64 overflow-hidden rounded-xl border-2 border-lime-400/70 bg-base-900/90 p-6 pt-8 text-center shadow-soft backdrop-blur-sm sm:w-72">
              <p className="absolute top-0 left-0 rounded-br-lg bg-gold-500 px-3 py-1 text-[0.62rem] font-extrabold tracking-[0.12em] text-base-950 uppercase">
                Limited Time Offer
              </p>
              <p className="font-display mt-3 text-[2.4rem] leading-none font-extrabold text-white">
                20% <span className="text-lime-400">OFF</span>
              </p>
              <p className="mt-2 text-xs font-bold tracking-[0.16em] text-white/75 uppercase">
                For New Customers
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-lime-400 transition hover:text-lime-400/80"
              >
                Claim My Offer
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature icon bar */}
      <div className="relative border-t border-white/10 bg-base-950/95">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center gap-3 px-5 py-5 text-center sm:justify-start lg:justify-center"
            >
              <item.icon
                className="h-6 w-6 shrink-0 text-lime-400"
                strokeWidth={1.6}
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-white">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
