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
          className="object-cover object-[72%_32%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-base-950/90 via-base-900/75 to-base-900/35"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-12 md:pt-36 lg:px-8 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <motion.p
              {...fadeUp(0.05)}
              className="text-[0.72rem] font-bold tracking-[0.22em] text-green-400 uppercase"
            >
              {siteConfig.location.city}&rsquo;s Trusted Pest Control Experts
            </motion.p>

            <motion.h1
              {...fadeUp(0.12)}
              className="font-display mt-4 max-w-xl text-4xl leading-[1.15] font-extrabold tracking-tight sm:text-5xl"
            >
              Canada&apos;s Pest Control Experts — Serving{" "}
              {siteConfig.location.city}
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-5 max-w-lg text-base leading-relaxed text-white/80"
            >
              {siteConfig.hero.description}
            </motion.p>

            <motion.div
              {...fadeUp(0.28)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link href="/contact" className="btn-primary">
                {siteConfig.hero.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/35 px-7 py-3.5 text-sm font-bold text-white transition hover:border-green-400 hover:text-green-400"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {siteConfig.contact.phone}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="justify-self-center lg:justify-self-end"
          >
            <div className="relative w-64 rounded-2xl border border-white/15 bg-surface p-6 pt-8 text-center text-ink shadow-soft sm:w-72">
              <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-md bg-green-600 px-4 py-1.5 text-[0.62rem] font-extrabold tracking-[0.14em] whitespace-nowrap text-white uppercase">
                Limited Time Offer
              </p>
              <p className="font-display mt-2 text-[2.6rem] leading-none font-extrabold text-green-700">
                20% OFF
              </p>
              <p className="mt-2 text-xs font-bold tracking-[0.18em] text-muted uppercase">
                For New Customers
              </p>
              <Link href="/contact" className="btn-primary mt-6 w-full !py-3 text-sm">
                Claim My Offer
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="mt-3 text-[0.68rem] text-muted">{siteConfig.offer.terms}</p>
            </div>
          </motion.div>
        </div>

        <motion.ul
          {...fadeUp(0.4)}
          className="mt-14 grid grid-cols-1 gap-4 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/20 text-green-400">
                <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="text-sm leading-snug font-semibold text-white">
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
