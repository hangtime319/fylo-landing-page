/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "hsl(243, 87%, 12%)",
        "desaturated-blue": "hsl(238, 22%, 44%)",
        "bright-blue": "hsl(224, 93%, 58%)",
        "moderate-cyan": "hsl(170, 45%, 43%)",
        "light-grayish-blue": "hsl(240, 75%, 98%)",
        "light-gray": "hsl(0, 0%, 75%)",
      },
    },
    fontFamily: {
      "raleway": ["Raleway", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
    }
  },
  plugins: [],
};
