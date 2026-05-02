import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#edeae3",
        "bg-secondary": "#f5f3ee",
        "text-forest": "#2a3d2e",
        "text-mid": "#4a5e45",
        "text-sage": "#7a8f76",
        accent: "#5a7a5e",
        divider: "#9aaa96",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
