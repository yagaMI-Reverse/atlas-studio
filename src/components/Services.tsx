import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    no: "01",
    title: "Brand Identity",
    desc: "Naming, logo systems, type, art direction and the guidelines to keep it all sharp.",
  },
  {
    no: "02",
    title: "Web & Interactive",
    desc: "Editorial sites and marketing platforms with motion that means something.",
  },
  {
    no: "03",
    title: "Product Design",
    desc: "Design systems, UX flows, and interface work for apps people actually enjoy.",
  },
  {
    no: "04",
    title: "Creative Development",
    desc: "Front-end engineering, WebGL, and the fiddly bits that make a site feel alive.",
  },
  {
    no: "05",
    title: "Strategy & Story",
    desc: "Positioning, messaging, and the narrative that ties the whole thing together.",
  },
];

export function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="border-y-2 border-line-strong bg-paper-warm">
      <div className="container-x py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow mb-10">
            <span className="text-accent">/</span> What we do
          </p>
        </Reveal>

        <ul className="divide-y divide-line border-y border-line">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.no} delay={i * 0.04}>
              <button
                type="button"
                onMouseEnter={() => setActive(s.no)}
                onFocus={() => setActive(s.no)}
                onMouseLeave={() => setActive(null)}
                onBlur={() => setActive(null)}
                className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-2 py-7 text-left transition-colors duration-300 hover:bg-ink sm:gap-8 sm:px-4 sm:py-9"
              >
                <span className="font-mono text-sm text-ink-faint transition-colors duration-300 group-hover:text-accent">
                  {s.no}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-3xl font-medium tracking-tightest text-ink transition-colors duration-300 group-hover:text-paper sm:text-5xl lg:text-6xl">
                    {s.title}
                  </span>
                  <span
                    className={`mt-2 block max-w-xl text-ink-dim transition-all duration-300 group-hover:text-paper/70 ${
                      active === s.no
                        ? "max-h-20 opacity-100"
                        : "max-h-0 overflow-hidden opacity-0 sm:max-h-0"
                    }`}
                  >
                    {s.desc}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-6 w-6 shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent sm:h-8 sm:w-8"
                  aria-hidden="true"
                />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
