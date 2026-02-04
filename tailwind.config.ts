import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-display)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        midnight: {
          50: "#f0f4ff",
          100: "#e0e8ff",
          200: "#c7d4fe",
          300: "#a5b8fc",
          400: "#8193f8",
          500: "#636ef2",
          600: "#4f4ae6",
          700: "#423bcb",
          800: "#3731a4",
          900: "#312e82",
          950: "#1e1b4b",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
