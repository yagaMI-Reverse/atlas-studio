import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FAF7F1",
          warm: "#F1EBE0",
        },
        ink: {
          DEFAULT: "#141109",
          dim: "#5B554A",
          faint: "#948D80",
        },
        line: {
          DEFAULT: "#E4DDD0",
          strong: "#141109",
        },
        accent: {
          DEFAULT: "#E03E1D",
          deep: "#B92D10",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      maxWidth: {
        container: "88rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
