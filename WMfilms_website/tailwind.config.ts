import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wm: {
          black: "#07080a",
          charcoal: "#101217",
          panel: "#171a20",
          panelSoft: "#1d2129",
          line: "#30343d",
          red: "#e11d2e",
          redDark: "#9f0d18",
          gold: "#c7a55a",
          green: "#2bd186",
          white: "#f8f7f2",
        },
      },
      boxShadow: {
        "red-glow": "0 16px 60px rgba(225, 29, 46, 0.22)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
