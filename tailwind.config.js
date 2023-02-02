/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {},
      colors: {
        yellow: "#FDA300",
        redCircle: "#FF3232",
        orangeCircle: "#FFB932",
        greenCircle: "#80FF32",
        lightBlueCircle: "#32CEFF",
        golden: "#DD8F00",
      },
    },
  },
  plugins: [],
};
