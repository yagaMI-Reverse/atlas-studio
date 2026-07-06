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
      className="group relative block overflow-hidden border-2 border-line bg-panel transition-all duration-200 hover:-translate-y-1 hover:border-acid hover:shadow-acid-hard"
      aria-label={`${project.name} — ${project.category} (case study)`}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-line sm:aspect-[16/9]">
        <motion.img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className="h-full w-full object-cover opacity-75 grayscale-[35%] transition duration-700 group-hover:opacity-100 group-hover:grayscale-0"
          initial={false}
          whileHover={reduce ? undefined : { scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Index + year overlay */}
        <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[11px]">
          <span className="bg-void px-2.5 py-1 text-acid">{project.index}</span>
          <span className="bg-void px-2.5 py-1 text-chalk">{project.year}</span>
        </div>

        {/* Hover reveal CTA */}
        <div className="absolute right-4 top-4 grid h-12 w-12 translate-y-2 place-items-center bg-acid text-void opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl uppercase tracking-tightest text-chalk transition-colors duration-200 group-hover:text-acid sm:text-3xl">
            {project.name}
          </h3>
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk-faint">
            {project.category}
          </span>
        </div>
        <p className="mt-3 max-w-xl leading-relaxed text-chalk-dim">{project.blurb}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="border border-line px-3 py-1 font-mono text-xs uppercase tracking-wide text-chalk-dim transition-colors duration-200 group-hover:border-acid/50"
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
            <span className="text-acid">[</span> Selected work{" "}
            <span className="text-acid">]</span>
          </p>
          <h2 className="display-clamp-md font-display uppercase tracking-tightest">
            Recent <span className="text-outline-acid">obsessions.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xs font-mono text-sm leading-relaxed text-chalk-dim">
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
