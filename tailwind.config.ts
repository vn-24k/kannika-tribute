import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        "ultra-wide": "0.4em",
        "cinema": "0.15em",
      },
      colors: {
        background: "#050505",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F7E7CE",
          dark: "#996515",
        },
        bone: "#F9F6EE",
      },
      animation: {
        "subtle-pulse": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
