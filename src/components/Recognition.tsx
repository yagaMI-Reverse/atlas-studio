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
    <section className="border-y-2 border-line-strong bg-paper-warm">
      <div className="container-x py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow mb-12">
            <span className="text-accent">/</span> Recognition
          </p>
        </Reveal>

        <ul className="divide-y divide-line border-y border-line">
          {AWARDS.map((a, i) => (
            <Reveal as="li" key={a.org} delay={i * 0.05}>
              <div className="group grid grid-cols-[1fr_auto] items-center gap-4 px-2 py-6 transition-colors duration-300 hover:bg-paper sm:grid-cols-[1.2fr_2fr_auto] sm:gap-8 sm:px-4">
                <span className="font-display text-xl font-medium tracking-tightest text-ink transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                  {a.org}
                </span>
                <span className="hidden text-ink-dim sm:block">{a.note}</span>
                <span className="justify-self-end font-mono text-sm text-ink-faint">
                  {a.year}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Client marquee */}
      <div className="border-t border-line py-6">
        <Marquee
          items={CLIENTS}
          reverse
          speed="slow"
          className="font-display text-2xl font-medium italic tracking-tight text-ink-faint sm:text-3xl"
        />
      </div>
    </section>
  );
}
