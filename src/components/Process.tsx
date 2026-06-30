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
          <p className="eyebrow mb-4">/ How we work</p>
          <h2 className="display-clamp-md font-display font-bold tracking-tightest">
            Four steps,
            <br />
            zero surprises.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xs font-mono text-sm text-bone-muted">
            A transparent process that keeps you in the loop from kickoff to
            launch and beyond.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-600 bg-ink-600 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal
              key={s.no}
              delay={i * 0.08}
              className="group flex h-full flex-col gap-6 bg-ink-800 p-7 transition-colors hover:bg-ink-700 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-ink-600 text-lime transition-colors group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-bone-dim">{s.no}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tightest text-bone">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-muted">
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
