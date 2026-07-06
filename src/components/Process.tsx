import { Compass, PenTool, Boxes, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS: { no: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    no: "01",
    title: "Orient",
    desc: "We dig into your goals, audience, and competitive landscape until the brief is razor sharp.",
    icon: Compass,
  },
  {
    no: "02",
    title: "Design",
    desc: "Concepts, directions, and high-fidelity design — explored in the open, refined together.",
    icon: PenTool,
  },
  {
    no: "03",
    title: "Build",
    desc: "We engineer the real thing: accessible, fast, and animated with intent, not decoration.",
    icon: Boxes,
  },
  {
    no: "04",
    title: "Launch",
    desc: "We ship, measure, and stay on to iterate. Great work is never really finished.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section id="process" className="container-x py-20 sm:py-28">
      <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="text-acid">[</span> How we work{" "}
            <span className="text-acid">]</span>
          </p>
          <h2 className="display-clamp-md font-display uppercase tracking-tightest">
            Four steps, <span className="text-acid">zero surprises.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xs font-mono text-sm leading-relaxed text-chalk-dim">
            A transparent process that keeps you in the loop from kickoff to
            launch and beyond.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-px overflow-hidden border-2 border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal
              key={s.no}
              delay={i * 0.08}
              className="group flex h-full flex-col gap-8 bg-void p-7 transition-colors duration-200 hover:bg-panel sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-outline font-display text-6xl uppercase tracking-tightest transition-all duration-200 group-hover:text-acid group-hover:[-webkit-text-stroke:0px]">
                  {s.no}
                </span>
                <span className="grid h-12 w-12 place-items-center border-2 border-line text-chalk-dim transition-all duration-200 group-hover:border-acid group-hover:bg-acid group-hover:text-void">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl uppercase tracking-tightest text-chalk">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-chalk-dim">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
