/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      xs: '540px',
      ...require('tailwindcss/defaultTheme').screens,
    },
    extend: {
      colors: {
        // light mode
        'light-bg': '#FDFAF5',
        'light-text': '#131212',

        // dark mode
        'dark-bg': '#121212',
        'dark-text': '#DDDDDD',

        // buttons
        'orange-light': '#EB9D2A',
        'orange-dark': '#b17816',
        'btn-surface': '#FEFDFC',
      },
    },
  },
  plugins: [],
}
