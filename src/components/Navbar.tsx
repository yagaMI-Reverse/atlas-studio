import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tightest"
          aria-label="Atlas Studio — home"
        >
          <span className="grid h-7 w-7 place-items-center rounded-sm bg-lime text-ink font-black">
            A
          </span>
          <span>Atlas Studio</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline font-mono text-sm text-bone-muted transition-colors hover:text-bone"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-lime px-5 py-2 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Start a project
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-ink-600 text-bone md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink-600 bg-ink/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 font-display text-2xl font-medium"
                  >
                    {l.label}
                    <ArrowUpRight className="h-5 w-5 text-lime" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
