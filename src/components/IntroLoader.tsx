"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const SESSION_KEY = "pw-intro-shown";
/** Time the intro stays fully visible before the curtain lifts. */
const INTRO_MS = 2100;

/**
 * Runs before React hydrates: instantly hides the intro (via CSS) for
 * returning visitors in the same session and for reduced-motion users,
 * so they never see even a single dark frame.
 */
const PRE_HYDRATION_HIDE = `try{if(sessionStorage.getItem("${SESSION_KEY}")||window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.setAttribute("data-intro-done","1")}}catch(e){}`;

const BRAND = "PEST WARRIORS";

const letterContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.55 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.21, 0.65, 0.36, 1] as const },
  },
};

/**
 * Brand intro shown once per session. Rendered visible on the server so it
 * covers the page from the very first paint — the hero never flashes first.
 */
export function IntroLoader() {
  const [show, setShow] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let skipped = false;
    try {
      if (document.documentElement.hasAttribute("data-intro-done")) {
        skipped = true;
      } else {
        sessionStorage.setItem(SESSION_KEY, "1");
      }
    } catch {
      /* sessionStorage unavailable — play the intro anyway */
    }
    const hideTimer = setTimeout(
      () => setShow(false),
      skipped || reduceMotion ? 0 : INTRO_MS,
    );
    return () => clearTimeout(hideTimer);
  }, [reduceMotion]);

  // Lock page scroll while the intro is covering the screen.
  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: PRE_HYDRATION_HIDE }} />
      <AnimatePresence>
        {show && (
          <motion.div
            id="intro-loader"
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-base-950"
            exit={{
              y: "-100%",
              transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
            }}
            aria-hidden="true"
          >
            {/* Backdrop: grid + ambient brand glows */}
            <div className="bg-grid-dark absolute inset-0" />
            <motion.div
              className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-green-600/15 blur-[110px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.7] }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
            <motion.div
              className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />

            <div className="relative flex flex-col items-center gap-6 px-6">
              {/* Shield emblem with orbiting + pulsing rings */}
              <motion.span
                className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white shadow-[0_0_50px_-8px_rgb(47_156_91/0.65)]"
                initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.55, ease: [0.21, 0.65, 0.36, 1] }}
              >
                <ShieldCheck className="h-10 w-10" strokeWidth={1.8} />
                <motion.span
                  className="absolute -inset-3 rounded-[1.4rem] border border-dashed border-gold-500/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.35 },
                    rotate: { duration: 9, repeat: Infinity, ease: "linear" },
                  }}
                />
                <motion.span
                  className="absolute -inset-3 rounded-[1.4rem] border-2 border-gold-500/60"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0.9, 0], scale: [0.8, 1.25, 1.4] }}
                  transition={{
                    duration: 1.5,
                    delay: 0.4,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatDelay: 0.4,
                  }}
                />
              </motion.span>

              {/* Staggered wordmark */}
              <motion.p
                className="font-display text-2xl font-extrabold tracking-[0.22em] text-white sm:text-3xl"
                variants={letterContainer}
                initial="hidden"
                animate="visible"
              >
                {BRAND.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letter}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.p>

              <motion.p
                className="text-[0.7rem] font-bold tracking-[0.42em] text-gold-500"
                initial={{ opacity: 0, letterSpacing: "0.6em" }}
                animate={{ opacity: 1, letterSpacing: "0.42em" }}
                transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
              >
                PEST CONTROL · CALGARY
              </motion.p>

              {/* Loading progress line */}
              <span className="relative mt-1 block h-[3px] w-52 overflow-hidden rounded-full bg-white/10">
                <motion.span
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-green-500 via-gold-500 to-gold-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: INTRO_MS / 1000 - 0.25, ease: [0.5, 0.05, 0.35, 1] }}
                />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
