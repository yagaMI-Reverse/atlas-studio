# Atlas Studio — Creative Digital Studio

A bold, motion-driven landing site for a fictional independent creative studio. Built as a portfolio piece to showcase senior-level design and front-end craft: oversized kinetic typography, refined brutalism, a high-contrast palette, and tasteful scroll-driven animation — without reaching for heavy 3D libraries.

**Live demo:** https://yagami-reverse.github.io/atlas-studio/

![Atlas Studio hero](https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=60)

## Design rationale

**Direction.** Award-show studio energy (think Active Theory / Locomotive) translated into a fast, reliable static site. The whole thing commits to a single idea: *type is the hero*. A masked, line-by-line kinetic headline, an infinite services marquee, and a few electric moments do the heavy lifting; everything else is generous negative space and quiet structure.

**Palette — near-black + one electric accent.**

| Token        | Hex       | Use                                        |
| ------------ | --------- | ------------------------------------------ |
| `ink`        | `#0A0A0A` | Primary background (committed to dark)     |
| `ink-800`    | `#121212` | Alternating section panels                 |
| `ink-600`    | `#242424` | Hairline borders / dividers                |
| `bone`       | `#F4F1EA` | Primary off-white text                     |
| `bone-muted` | `#A8A39A` | Body / secondary text                      |
| `bone-dim`   | `#6E6A62` | Meta, indices, type outlines               |
| `lime`       | `#D4FF4F` | The one accent — CTAs, highlights, hovers  |

A single electric lime is the only chromatic accent, so it reads as a deliberate signal (CTAs, key words, hover states) rather than decoration. A subtle violet (`#5B5BFF`) appears only in the blurred hero gradient blobs for depth.

**Typography.**

- **Space Grotesk** (700) — oversized display headings, set in tight tracking for poster-like impact.
- **Inter** (400–600) — clean, legible body copy.
- **JetBrains Mono** (400–500) — eyebrows, labels, nav, and meta for an editorial / technical contrast.

**Motion.** All animation is `transform`/`opacity` only (GPU-friendly): a line-reveal headline, slowly drifting gradient blobs, pure-CSS infinite marquees, scroll-into-view reveals (via `framer-motion` `whileInView`), and card image zoom on hover. Everything collapses to a no-op under `prefers-reduced-motion`.

## Accessibility & quality

- Responsive across 375 / 768 / 1024 / 1440 (mobile hamburger menu, fluid `clamp()` display type).
- Visible `:focus-visible` rings, a skip-to-content link, `aria-label`s on icon buttons, and descriptive `alt` text on every image.
- `prefers-reduced-motion` fully respected (animations and smooth-scroll disabled).
- Decorative SVG/marquee content marked `aria-hidden`.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · framer-motion · lucide-react

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # tsc --noEmit && vite build  (production build)
npm run preview  # preview the production build
```

The build also runs `scripts/spa-fallback.mjs` to emit `dist/404.html` so direct links work on GitHub Pages. Deployment is handled by `.github/workflows/deploy.yml` (GitHub Pages). The Vite `base` is `/atlas-studio/` to match the Pages repo path.

---

Imagery via [Unsplash](https://unsplash.com). Icons from [lucide](https://lucide.dev). All studio/client/project names and content are fictional, written for portfolio purposes.
