// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bungee-shade": ['"Bungee Shade"', "cursive"],
        vt323: ['"VT323"', "monospace"],
      },
    },
  },
  plugins: [],
};
