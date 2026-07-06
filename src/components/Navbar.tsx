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
      className={`fixed inset-x-0 top-0 z-50 border-b-2 transition-all duration-300 ${
        scrolled
          ? "border-line bg-void/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-display text-lg uppercase tracking-tight"
          aria-label="Atlas Studio — home"
        >
          <span className="grid h-8 w-8 place-items-center bg-acid font-display text-lg text-void transition-transform duration-300 group-hover:rotate-[10deg]">
            A
          </span>
          Atlas<span className="text-acid">*</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-chalk-dim transition-colors hover:text-acid"
              >
                <span className="text-chalk-faint">0{i + 1}/</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 border-2 border-chalk bg-transparent px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-chalk transition-all duration-200 hover:border-acid hover:bg-acid hover:text-void hover:shadow-acid md:inline-flex"
        >
          Start a project
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center border-2 border-chalk text-chalk md:hidden"
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
            className="overflow-hidden border-t-2 border-line bg-void/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-x flex flex-col py-4">
              {LINKS.map((l) => (
                <li key={l.href} className="border-b border-line last:border-0">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 font-display text-2xl uppercase"
                  >
                    {l.label}
                    <ArrowUpRight className="h-5 w-5 text-acid" aria-hidden="true" />
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
