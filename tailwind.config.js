/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "smooth-black": "#333",
      },
      fontFamily: {
        cairo: "'Cairo', sans-serif",
      },
    },
  },
  plugins: [],
};
