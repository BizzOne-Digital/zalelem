"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Centered comparison/warranty block — slide-in bullets, no CTA. */
export function KeyDifferencesSection({
  title,
  content,
  bullets,
}: {
  title: string;
  content: string;
  bullets: string[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <article className="rounded-2xl border border-line bg-surface px-6 py-10 shadow-card sm:px-10 sm:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-muted">{content}</p>

        <ul className="mt-8 space-y-4 text-left">
          {bullets.map((bullet, i) => {
            const colon = bullet.indexOf(":");
            const label = colon > 0 ? bullet.slice(0, colon) : "";
            const rest = colon > 0 ? bullet.slice(colon + 1).trim() : bullet;
            const fromLeft = i % 2 === 0;

            return (
              <motion.li
                key={bullet}
                className="flex items-start gap-3 rounded-xl border border-line bg-band px-4 py-3.5"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, x: fromLeft ? -48 : 48 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.21, 0.65, 0.36, 1],
                }}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                <span className="text-sm leading-relaxed text-muted sm:text-base">
                  {label ? (
                    <>
                      <span className="font-bold text-ink">{label}:</span>{" "}
                      {rest}
                    </>
                  ) : (
                    rest
                  )}
                </span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
