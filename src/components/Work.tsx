import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Project = {
  index: string;
  name: string;
  category: string;
  year: string;
  blurb: string;
  tags: string[];
  image: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    name: "Verdant Atlas",
    category: "Brand · Web",
    year: "2025",
    blurb:
      "A full rebrand and immersive site for a regenerative agriculture fund raising its Series B.",
    tags: ["Identity", "Webflow", "Motion"],
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80",
    alt: "Layered green and dark editorial brand visuals for Verdant Atlas",
  },
  {
    index: "02",
    name: "Orbital Finance",
    category: "Product · Design System",
    year: "2025",
    blurb:
      "Design system and marketing platform for a fintech moving billions across borders.",
    tags: ["Design System", "React", "Strategy"],
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1400&q=80",
    alt: "Abstract violet and blue gradient composition for Orbital Finance",
  },
  {
    index: "03",
    name: "Kiln & Co.",
    category: "Brand · Packaging",
    year: "2024",
    blurb:
      "Identity, packaging, and a tactile commerce experience for a small-batch ceramics house.",
    tags: ["Identity", "Art Direction", "Shopify"],
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1400&q=80",
    alt: "Warm earthen ceramics arranged on a neutral surface for Kiln and Co.",
  },
  {
    index: "04",
    name: "Pulse Records",
    category: "Web · Motion",
    year: "2024",
    blurb:
      "A kinetic, audio-reactive label site that turns a back-catalogue into a playable archive.",
    tags: ["Creative Dev", "WebGL", "Sound"],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80",
    alt: "Moody neon-lit music studio environment for Pulse Records",
  },
];

function Card({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  return (
    <a
      href="#contact"
      className="group relative block overflow-hidden border border-line bg-paper transition-colors duration-300 hover:border-line-strong"
      aria-label={`${project.name} — ${project.category} (case study)`}
    >
      <div className="relative m-3 aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
        <motion.img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 [filter:saturate(0.85)] group-hover:[filter:saturate(1.1)]"
          initial={false}
          whileHover={reduce ? undefined : { scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Index + year overlay */}
        <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[11px] tracking-wide">
          <span className="bg-paper px-2.5 py-1 text-ink">{project.index}</span>
          <span className="bg-paper px-2.5 py-1 text-ink">{project.year}</span>
        </div>

        {/* Hover reveal CTA */}
        <div className="absolute right-4 top-4 grid h-12 w-12 translate-y-2 place-items-center rounded-full bg-accent text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <div className="px-6 pb-7 pt-4 sm:px-8 sm:pb-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-3xl font-medium tracking-tightest text-ink transition-colors duration-300 group-hover:text-accent sm:text-4xl">
            {project.name}
          </h3>
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
            {project.category}
          </span>
        </div>
        <p className="mt-3 max-w-xl leading-relaxed text-ink-dim">{project.blurb}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="border border-line px-3 py-1 font-mono text-xs text-ink-dim transition-colors duration-300 group-hover:border-accent/40"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export function Work() {
  return (
    <section id="work" className="container-x py-20 sm:py-28">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="text-accent">/</span> Selected work
          </p>
          <h2 className="display-clamp-md font-display font-medium tracking-tightest">
            Recent <span className="accent-italic">obsessions.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xs font-mono text-sm leading-relaxed text-ink-dim">
            A slice of recent client work across brand, product, and creative
            development.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08} y={40}>
            <Card project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
