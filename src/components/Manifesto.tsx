import { Reveal } from "./Reveal";

const STATS = [
  { value: "48", label: "Brands shipped" },
  { value: "12", label: "Industry awards" },
  { value: "9", label: "Years of practice" },
];

export function Manifesto() {
  return (
    <section id="studio" className="container-x py-24 sm:py-32 lg:py-40">
      <Reveal>
        <p className="eyebrow mb-10">
          <span className="text-accent">/</span> The studio
        </p>
      </Reveal>

      <Reveal y={36}>
        <h2 className="display-clamp-md max-w-5xl font-display font-medium tracking-tightest">
          We treat every project as a chance to make something{" "}
          <span className="text-ink-faint">the internet hasn&apos;t seen</span>{" "}
          <span className="accent-italic">a hundred times.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 border-t border-line-strong pt-12 md:grid-cols-3">
        <Reveal className="md:col-span-2" delay={0.05}>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-dim">
            Atlas Studio is a small, senior team of designers and engineers. We
            don&apos;t hand work down a conveyor belt — strategists sit next to
            animators, and the people who design the pixels are the ones who
            ship them. The result is work that&apos;s coherent from the first
            sketch to the last line of production code: distinct typography,
            considered motion, and interfaces that earn their keep.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="flex flex-col divide-y divide-line">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-6 py-5 first:pt-0">
                <dd className="order-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  {s.label}
                </dd>
                <dt className="order-1 font-display text-6xl font-medium tracking-tightest text-ink">
                  {s.value}
                  <span className="text-accent">.</span>
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
