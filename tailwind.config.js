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
      container: {
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1280px",
        },
      },
      spacing: {
        nav: "64px",
      },
    },
  },
  plugins: [],
};
