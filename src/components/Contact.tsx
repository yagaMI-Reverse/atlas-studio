import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Read.cv", href: "https://read.cv" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="container-x py-28 text-center sm:py-36">
        <Reveal>
          <p className="eyebrow mb-8 !text-paper/50">
            <span className="text-accent">/</span> Let&apos;s make something
          </p>
        </Reveal>

        <Reveal y={40}>
          <h2 className="display-clamp font-display font-medium tracking-tightest">
            Got a wild{" "}
            <span className="accent-italic">idea?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="mailto:hello@atlas.studio"
            className="group mt-14 inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 font-mono text-base font-medium text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-paper sm:text-lg"
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
          <ul className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-paper/50 transition-colors hover:text-paper"
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
