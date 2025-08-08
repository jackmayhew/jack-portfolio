export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    'nuxt-gtag',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      style: [
        {
          innerHTML: `
            html.light-mode { background-color: #FDFAF5; }
            html.dark-mode { background-color: #121212; }
          `,
        },
      ],
      meta: [
        { name: 'theme-color', content: '#FDFAF5' },
      ],
      link: [
        // preloads
        { rel: 'preload', href: '/img/hero.webp', as: 'image' },
        {
          rel: 'preload',
          href: '/fonts/ShadowHand.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts/StabilGrotesk-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts/StabilGrotesk-Medium.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  gtag: {
    id: 'G-FRSCKR2CDP',
  },
})
