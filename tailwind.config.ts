import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#080808",
        panel: "#0F0F0F",
        raised: "#161616",
        line: {
          DEFAULT: "#262626",
          strong: "#EDEDED",
        },
        chalk: {
          DEFAULT: "#EDEDED",
          dim: "#9A9A9A",
          faint: "#5C5C5C",
        },
        acid: {
          DEFAULT: "#D8FF3E",
          deep: "#B8E020",
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', "Impact", "sans-serif"],
        sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        container: "88rem",
      },
      boxShadow: {
        acid: "0 0 40px -8px rgba(216,255,62,0.45)",
        "acid-hard": "6px 6px 0 0 #D8FF3E",
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
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        blink: "blink 1.6s steps(2) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
