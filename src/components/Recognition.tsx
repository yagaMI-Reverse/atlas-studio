import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";

const AWARDS = [
  { org: "Awwwards", note: "Site of the Day ×4", year: "2023–25" },
  { org: "CSS Design Awards", note: "Best UI Design", year: "2024" },
  { org: "FWA", note: "Site of the Day ×2", year: "2024" },
  { org: "The Webby Awards", note: "Honoree, Branding", year: "2023" },
  { org: "Communication Arts", note: "Interactive Annual", year: "2025" },
];

const CLIENTS = [
  "Verdant",
  "Orbital",
  "Kiln & Co.",
  "Pulse",
  "Northwind",
  "Cassette",
  "Helio",
  "Studio Mara",
];

export function Recognition() {
  return (
    <section className="border-y border-ink-600 bg-ink-800">
      <div className="container-x py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow mb-12">/ Recognition</p>
        </Reveal>

        <ul className="divide-y divide-ink-600 border-y border-ink-600">
          {AWARDS.map((a, i) => (
            <Reveal as="li" key={a.org} delay={i * 0.05}>
              <div className="grid grid-cols-[1fr_auto] items-center gap-4 py-6 sm:grid-cols-[1.2fr_2fr_auto] sm:gap-8">
                <span className="font-display text-xl font-bold tracking-tightest text-bone sm:text-2xl">
                  {a.org}
                </span>
                <span className="hidden text-bone-muted sm:block">{a.note}</span>
                <span className="justify-self-end font-mono text-sm text-bone-dim">
                  {a.year}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Client logo-ish marquee */}
      <div className="border-t border-ink-600 py-6">
        <Marquee
          items={CLIENTS}
          reverse
          speed="slow"
          className="font-display text-2xl font-medium uppercase tracking-tight text-bone-dim sm:text-3xl"
        />
      </div>
    </section>
  );
}
