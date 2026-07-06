import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Zap } from "lucide-react";
import { Marquee } from "./Marquee";

const WORDS = ["Brand", "Web", "Motion", "Product", "Identity", "Story"];

export function Hero() {
  const reduce = useReducedMotion();

  const lineParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
  };
  const line = {
    hidden: { y: reduce ? 0 : "115%" },
    show: {
      y: "0%",
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-0 pt-28 sm:pt-36 lg:pt-44"
    >
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          <span className="inline-flex items-center gap-2 border-2 border-acid px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-acid">
            <span className="h-2 w-2 animate-blink bg-acid" aria-hidden="true" />
            Available — Q3 2026
          </span>
          <span className="eyebrow">Creative digital studio · est. 2018</span>
        </motion.div>

        {/* Kinetic headline — masked line reveal */}
        <h1 className="font-display uppercase tracking-tightest text-chalk">
          <span className="sr-only">
            Atlas Studio — we build bold brands and expressive digital
            experiences.
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
                We build
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="display-clamp text-outline block">
                bold brands
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="display-clamp block">
                &amp; <span className="text-acid">digital</span> craft.
              </motion.span>
            </span>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-12 flex flex-col gap-8 border-t-2 border-line pt-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-lg leading-relaxed text-chalk-dim">
            Atlas is an independent studio shaping brands, websites, and
            product experiences for teams who refuse to blend in. Strategy,
            design, and engineering under one roof.
          </p>
          <a
            href="#work"
            className="group inline-flex items-center gap-4 self-start font-mono text-xs uppercase tracking-[0.22em] text-chalk md:self-auto"
          >
            <span className="link-underline">View selected work</span>
            <span className="grid h-14 w-14 place-items-center border-2 border-chalk transition-all duration-200 group-hover:border-acid group-hover:bg-acid group-hover:text-void group-hover:shadow-acid">
              <ArrowDownRight className="h-6 w-6" aria-hidden="true" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Services marquee */}
      <div className="mt-16 border-y-2 border-chalk bg-acid py-4 sm:mt-20">
        <Marquee
          items={WORDS}
          className="font-display text-3xl uppercase tracking-tight text-void sm:text-5xl"
          iconClass="text-void"
          icon={Zap}
        />
      </div>
    </section>
  );
}
