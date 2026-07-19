"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const SESSION_KEY = "pw-intro-shown";

/**
 * One-time-per-session brand intro (~1.4s). Skipped entirely for returning
 * visitors in the same session and for users preferring reduced motion.
 */
export function IntroLoader() {
  const [show, setShow] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      return;
    }
    if (reduceMotion) return;
    // Deferred to a task so state updates never run synchronously in the effect.
    const showTimer = setTimeout(() => setShow(true), 0);
    const hideTimer = setTimeout(() => setShow(false), 1450);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          aria-hidden="true"
        >
          <div className="bg-grid-dark absolute inset-0" />
          <div className="relative flex flex-col items-center gap-5">
            <motion.span
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-white"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.21, 0.65, 0.36, 1] }}
            >
              <ShieldCheck className="h-8 w-8" />
              {/* Sweeping protection ring */}
              <motion.span
                className="absolute -inset-2 rounded-3xl border-2 border-gold-500/70"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: [0, 1, 0], scale: [0.85, 1.12, 1.2] }}
                transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
              />
            </motion.span>
            <motion.p
              className="font-display text-xl font-extrabold tracking-[0.18em] text-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              PEST WARRIORS
            </motion.p>
            <motion.span
              className="block h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold-500 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
