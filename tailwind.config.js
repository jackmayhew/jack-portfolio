/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      xs: "540px",
      ...require("tailwindcss/defaultTheme").screens,
    },
    extend: {
      colors: {
        "light-bg": "#FDFAF5",
        "light-text": "#131212",
        "dark-bg": "#121212",
        "dark-text": "#DDDDDD",
        "grey-text": "#8F8F8F",
        "dark-grey-text": "#ADADAD",
      },
    },
  },
  plugins: [],
};