/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      xs: "540px",
      ...require('tailwindcss/defaultTheme').screens,
    },
    extend: {
      colors: {
        "light-bg": "#fff",
        "light-text": "#000",
        "dark-bg": "#111",
        "dark-text": "#fff",
      },
    },
  },
  plugins: [],
};
