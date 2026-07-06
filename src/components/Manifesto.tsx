import { Reveal } from "./Reveal";

const STATS = [
  { value: "48", label: "Brands shipped" },
  { value: "12", label: "Industry awards" },
  { value: "09", label: "Years of practice" },
];

export function Manifesto() {
  return (
    <section id="studio" className="container-x py-24 sm:py-32 lg:py-40">
      <Reveal>
        <p className="eyebrow mb-10">
          <span className="text-acid">[</span> The studio{" "}
          <span className="text-acid">]</span>
        </p>
      </Reveal>

      <Reveal y={36}>
        <h2 className="display-clamp-md max-w-5xl font-display uppercase tracking-tightest">
          Every project is a chance to make something{" "}
          <span className="text-outline">the internet hasn&apos;t seen</span>{" "}
          <span className="text-acid">a hundred times.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 border-t-2 border-line pt-12 md:grid-cols-3">
        <Reveal className="md:col-span-2" delay={0.05}>
          <p className="max-w-2xl text-lg leading-relaxed text-chalk-dim">
            Atlas Studio is a small, senior team of designers and engineers. We
            don&apos;t hand work down a conveyor belt — strategists sit next to
            animators, and the people who design the pixels are the ones who
            ship them. The result is work that&apos;s coherent from the first
            sketch to the last line of production code: distinct typography,
            considered motion, and interfaces that earn their keep.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="flex flex-col">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="group flex items-baseline justify-between gap-6 border-b-2 border-line py-5 transition-colors duration-200 first:pt-0 hover:border-acid"
              >
                <dt className="font-display text-6xl uppercase tracking-tightest text-chalk transition-colors duration-200 group-hover:text-acid">
                  {s.value}
                </dt>
                <dd className="font-mono text-xs uppercase tracking-[0.2em] text-chalk-faint">
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
