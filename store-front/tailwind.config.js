/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-0c66a4": "#0C66A4",
        "primary-hover": "#095183",
        "primary-003c68": "#003c68",
        "white-fff": "#fff",
        "white-fafa": "#fafafa",
        "white-fefefe": "#fefefe",
        "neutral-a7a": "#A7ABB3",
        "neutral-5a5": "#5A5E66",
        "neutral-dfe": "#DFE2EB",
        "neutral-737": "#73777F",
        "neutral-c3c6": "#C3C6CF",
        "neutral-4347": "#43474E",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        nunito: ["var(--font-nunito)"],
      },
      spacing: {
        1.5: "0.3125rem",
        5.5: "1.375rem",
      },
      letterSpacing: {
        0.012: "tracking-[0.012em]",
      },
    },
  },
  plugins: [],
};
