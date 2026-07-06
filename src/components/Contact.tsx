import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Read.cv", href: "https://read.cv" },
];

export function Contact() {
  return (
    <section id="contact">
      {/* acid flood band */}
      <div className="border-y-2 border-chalk bg-acid py-4">
        <Marquee
          items={["Let's talk", "Got a wild idea?", "New projects", "Collabs"]}
          className="font-display text-2xl uppercase tracking-tight text-void sm:text-4xl"
          iconClass="text-void"
        />
      </div>

      <div className="container-x py-28 text-center sm:py-36">
        <Reveal>
          <p className="eyebrow mb-8">
            <span className="text-acid">[</span> Let&apos;s make something{" "}
            <span className="text-acid">]</span>
          </p>
        </Reveal>

        <Reveal y={40}>
          <h2 className="display-clamp font-display uppercase tracking-tightest">
            Got a wild
            <br />
            <span className="text-outline-acid">idea?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="mailto:hello@atlas.studio"
            className="group mt-14 inline-flex items-center gap-3 border-2 border-acid bg-acid px-8 py-4 font-mono text-base font-medium uppercase tracking-wide text-void transition-all duration-200 hover:-translate-y-1 hover:bg-transparent hover:text-acid hover:shadow-acid sm:text-lg"
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
                  className="link-underline font-mono text-xs uppercase tracking-[0.22em] text-chalk-dim transition-colors hover:text-acid"
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
