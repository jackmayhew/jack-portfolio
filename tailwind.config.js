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
        "light-bg": "#FBF7F5",
        "light-text": "#131212",
        "dark-bg": "#121212",
        "dark-text": "#DDDDDD",
        "grey-text": "#8F8F8F",
        // "grey-text": "#B0B0B0",
      },
    },
  },
  plugins: [],
};
