import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Circle } from "lucide-react";
import { Marquee } from "./Marquee";

const WORDS = ["Brand", "Web", "Motion", "Product", "Identity", "Story"];

export function Hero() {
  const reduce = useReducedMotion();

  const lineParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
  };
  const line = {
    hidden: { y: reduce ? 0 : "112%" },
    show: {
      y: "0%",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pt-44"
    >
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-ink-dim">
            <Circle className="h-2 w-2 fill-accent text-accent" aria-hidden="true" />
            Available — Q3 2026
          </span>
          <span className="eyebrow">Creative Digital Studio · Est. 2018 · Lisbon</span>
        </motion.div>

        {/* Editorial headline — masked line reveal */}
        <h1 className="font-display font-medium tracking-tightest text-ink">
          <span className="sr-only">
            Atlas Studio — we build bold brands and expressive digital
            experiences with conviction.
          </span>
          <motion.span
            variants={lineParent}
            initial="hidden"
            animate="show"
            aria-hidden="true"
            className="block"
          >
            <span className="block overflow-hidden">
              <motion.span variants={line} className="display-clamp block">
                Design with
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span variants={line} className="display-clamp block">
                <span className="accent-italic">conviction</span>
                <span className="text-ink">.</span>
              </motion.span>
            </span>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex flex-col gap-8 border-t border-line-strong pt-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-lg leading-relaxed text-ink-dim">
            Atlas is an independent studio shaping brands, websites, and
            product experiences for teams who refuse to blend in. Strategy,
            design, and engineering under one roof.
          </p>
          <a
            href="#work"
            className="group inline-flex items-center gap-4 self-start font-mono text-xs uppercase tracking-[0.2em] text-ink md:self-auto"
          >
            <span className="link-underline">View selected work</span>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-line-strong transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-paper">
              <ArrowDownRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Services marquee */}
      <div className="mt-16 border-y-2 border-line-strong py-5 sm:mt-20">
        <Marquee
          items={WORDS}
          className="font-display text-3xl font-medium uppercase tracking-tight text-ink sm:text-5xl"
        />
      </div>
    </section>
  );
}
