import { Reveal } from "./Reveal";

const STATS = [
  { value: "48", label: "Brands shipped" },
  { value: "12", label: "Industry awards" },
  { value: "9 yrs", label: "Of independent practice" },
];

export function Manifesto() {
  return (
    <section id="studio" className="container-x py-24 sm:py-32 lg:py-40">
      <Reveal>
        <p className="eyebrow mb-10">/ The studio</p>
      </Reveal>

      <Reveal y={36}>
        <h2 className="display-clamp-md max-w-5xl font-display font-bold tracking-tightest">
          We treat every project as a chance to make something
          <span className="text-bone-dim"> the internet hasn't seen </span>
          <span className="text-lime">a hundred times.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 border-t border-ink-600 pt-12 md:grid-cols-3">
        <Reveal className="md:col-span-2" delay={0.05}>
          <p className="max-w-2xl text-lg leading-relaxed text-bone-muted">
            Atlas Studio is a small, senior team of designers and engineers. We
            don't hand work down a conveyor belt — strategists sit next to
            animators, and the people who design the pixels are the ones who
            ship them. The result is work that's coherent from the first
            sketch to the last line of production code: distinct typography,
            considered motion, and interfaces that earn their keep.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="flex flex-col gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-5xl font-bold tracking-tightest text-bone">
                  {s.value}
                </dt>
                <dd className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-bone-dim">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
