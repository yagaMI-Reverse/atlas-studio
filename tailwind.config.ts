import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          900: "#0A0A0A",
          800: "#121212",
          700: "#1A1A1A",
          600: "#242424",
        },
        bone: {
          DEFAULT: "#F4F1EA",
          muted: "#A8A39A",
          dim: "#6E6A62",
        },
        lime: {
          DEFAULT: "#D4FF4F",
          400: "#D4FF4F",
          500: "#C2F23A",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
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
