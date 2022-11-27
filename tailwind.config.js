/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "grayish-dark-blue": "#33323D",
        "dark-blue": "#203A4C",
        "slightly-desaturated-cyan": "#5FB4A2",
        "blue-whale": "#1d3445",
      },
      fontFamily: {
        sans: ["Ibarra Real Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
