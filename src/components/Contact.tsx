import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Read.cv", href: "https://read.cv" },
];

export function Contact() {
  const reduce = useReducedMotion();
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <motion.div
          className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, #D4FF4F 0%, transparent 60%)",
          }}
          animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-x py-28 text-center sm:py-36">
        <Reveal>
          <p className="eyebrow mb-8">/ Let's make something</p>
        </Reveal>

        <Reveal y={40}>
          <h2 className="display-clamp font-display font-bold tracking-tightest">
            Got a wild
            <br />
            <span className="text-lime">idea?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="mailto:hello@atlas.studio"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 font-mono text-base font-medium text-ink transition-transform hover:-translate-y-1 sm:text-lg"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            hello@atlas.studio
            <ArrowUpRight
              className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline font-mono text-sm uppercase tracking-widest text-bone-muted transition-colors hover:text-bone"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
