import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Circle } from "lucide-react";
import { Marquee } from "./Marquee";

const WORDS = ["Brand", "Web", "Motion", "Product", "Identity", "Story"];

export function Hero() {
  const reduce = useReducedMotion();

  const lineParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const line = {
    hidden: { y: reduce ? 0 : "110%" },
    show: {
      y: "0%",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pt-44"
    >
      {/* Animated gradient blob backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          className="absolute -right-32 -top-24 h-[36rem] w-[36rem] rounded-full opacity-40 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #D4FF4F 0%, transparent 60%)",
          }}
          animate={
            reduce ? undefined : { x: [0, 40, -20, 0], y: [0, 30, 10, 0] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #5B5BFF 0%, transparent 60%)",
          }}
          animate={
            reduce ? undefined : { x: [0, -30, 20, 0], y: [0, -20, 20, 0] }
          }
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-bone-muted">
            <Circle className="h-2 w-2 fill-lime text-lime" aria-hidden="true" />
            Available — Q3 2026
          </span>
          <span className="eyebrow">Creative Digital Studio · Est. 2018</span>
        </motion.div>

        {/* Kinetic headline — masked line reveal */}
        <h1 className="font-display font-bold tracking-tightest text-bone">
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
              <motion.span
                variants={line}
                className="display-clamp block text-outline"
              >
                bold brands
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="display-clamp block">
                &amp; <span className="text-lime">digital</span> craft.
              </motion.span>
            </span>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-lg leading-relaxed text-bone-muted">
            Atlas is an independent studio shaping brands, websites, and
            product experiences for teams who refuse to blend in. Strategy,
            design, and engineering under one roof.
          </p>
          <a
            href="#work"
            className="group inline-flex items-center gap-3 self-start font-mono text-sm uppercase tracking-widest text-bone md:self-auto"
          >
            <span className="link-underline">View selected work</span>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-ink-600 transition-colors group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
              <ArrowDownRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Services marquee */}
      <div className="mt-16 border-y border-ink-600 py-5 sm:mt-20">
        <Marquee
          items={WORDS}
          className="font-display text-3xl font-semibold uppercase tracking-tight text-bone sm:text-5xl"
        />
      </div>
    </section>
  );
}
