import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-ink-600 bg-ink">
      <div className="container-x py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 font-display text-lg font-bold tracking-tightest"
            >
              <span className="grid h-7 w-7 place-items-center rounded-sm bg-lime text-ink font-black">
                A
              </span>
              Atlas Studio
            </a>
            <p className="mt-4 max-w-xs text-sm text-bone-muted">
              An independent creative digital studio. Brand, web, and product —
              built to stand out.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 font-mono text-sm sm:gap-16">
            <div>
              <p className="mb-3 text-bone-dim">Studio</p>
              <p className="text-bone-muted">Lisbon · Remote</p>
              <p className="text-bone-muted">38.7223° N</p>
            </div>
            <div>
              <p className="mb-3 text-bone-dim">Inquiries</p>
              <a
                href="mailto:hello@atlas.studio"
                className="link-underline block text-bone-muted hover:text-bone"
              >
                hello@atlas.studio
              </a>
              <a
                href="mailto:careers@atlas.studio"
                className="link-underline mt-1 block text-bone-muted hover:text-bone"
              >
                careers@atlas.studio
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-600 pt-6 font-mono text-xs text-bone-dim sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Atlas Studio. All rights reserved.</p>
          <p>Designed &amp; built in-house.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 uppercase tracking-widest text-bone-muted transition-colors hover:text-lime"
          >
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
