/*/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
    },
    extend: {
      colors: {
        "color-white": "hsl(0, 0%, 100%)",
        "color-orange": "hsl(25, 97%, 53%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": " hsl(216, 12%, 54%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
};
