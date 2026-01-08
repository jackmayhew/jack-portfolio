import { websiteUrl } from './constants/social-links'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  site: {
    url: websiteUrl,
  },
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  // googleFonts: {
  //   families: {
  //     'JetBrains+Mono': {
  //       wght: '100..800',
  //     },
  //   },
  // },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      link: [
        { rel: 'preload', href: '/img/hero2.gif', as: 'image' },
        {
          rel: 'preload',
          href: '/fonts/ShadowHand.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts/JetBrainsMono[wght].ttf',
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
