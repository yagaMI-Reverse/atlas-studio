import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-2 border-line bg-void">
      <div className="container-x py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2.5 font-display text-lg uppercase tracking-tight"
            >
              <span className="grid h-8 w-8 place-items-center bg-acid font-display text-lg text-void">
                A
              </span>
              Atlas<span className="text-acid">*</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-chalk-dim">
              An independent creative digital studio. Brand, web, and product —
              built to stand out.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 font-mono text-sm sm:gap-16">
            <div>
              <p className="mb-3 text-chalk-faint">Studio</p>
              <p className="text-chalk-dim">Lisbon · Remote</p>
              <p className="text-chalk-dim">38.7223° N</p>
            </div>
            <div>
              <p className="mb-3 text-chalk-faint">Inquiries</p>
              <a
                href="mailto:hello@atlas.studio"
                className="link-underline block text-chalk-dim hover:text-chalk"
              >
                hello@atlas.studio
              </a>
              <a
                href="mailto:careers@atlas.studio"
                className="link-underline mt-1 block text-chalk-dim hover:text-chalk"
              >
                careers@atlas.studio
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t-2 border-line pt-6 font-mono text-xs text-chalk-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Atlas Studio. All rights reserved.</p>
          <p>Designed &amp; built in-house.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 uppercase tracking-widest text-chalk-dim transition-colors hover:text-acid"
          >
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
