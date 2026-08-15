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
        // Gallery palette — a small museum, warm white walls
        wall: "#fdfcfa", // page background (gallery wall)
        ink: "#211d1a", // primary text / titles
        muted: "#5c554c", // body copy
        faint: "#9a9488", // captions, meta, quiet labels
        line: "#ece8e1", // hairline rules & borders
        rose: "#c65f45", // strong accent (name, links)
        "rose-soft": "#c07a68", // soft accent (eyebrows, labels)
        mat: "#f4efe6", // artwork mat (frame background)
        matline: "#ece6db", // mat border
      },
      fontFamily: {
        serif: ["Georgia", '"Times New Roman"', "serif"],
        sans: ["-apple-system", '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
