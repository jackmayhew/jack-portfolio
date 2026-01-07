export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  googleFonts: {
    families: {
      'JetBrains+Mono': {
        wght: '100..800',
      },
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      // style: [
      //   {
      //     innerHTML: `
      //       html.light-mode { background-color: #FDFAF5; }
      //       html.dark-mode { background-color: #121212; }
      //     `,
      //   },
      // ],
      link: [
        { rel: 'preload', href: '/img/hero.webp', as: 'image' },
        {
          rel: 'preload',
          href: '/fonts/ShadowHand.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
})
