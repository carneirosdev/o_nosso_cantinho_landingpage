import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF6EF",
          100: "#F4ECDE",
        },
        ink: {
          DEFAULT: "#211C1A",
          soft: "#3A322F",
          muted: "#6B615C",
        },
        brand: {
          DEFAULT: "#B21F24",
          dark: "#8A171B",
          light: "#D6494E",
        },
        lagoon: {
          DEFAULT: "#0E7C86",
          dark: "#0A5A61",
          light: "#37A6AF",
        },
        sand: {
          DEFAULT: "#C9A24B",
          dark: "#A9852F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
