export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-gtag",
  ],
  plugins: ['@/plugins/color-mode.js'],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      meta: [
        { name: 'theme-color', content: '#ffffff' }
      ],
      script: [{ src: "/js/SplitText.js", tagPosition: "bodyClose" }],
      link: [
        // preloads
        { rel: "preload", href: "/img/hero.webp", as: "image" },
        {
          rel: "preload",
          href: "/fonts/StabilGrotesk-Regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/StabilGrotesk-Medium.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  colorMode: {
    preference: "light",
    fallback: "light",
  },
  runtimeConfig: {
    public: {
      EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
      EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    },
  },
  gtag: {
    id: "G-FRSCKR2CDP",
  },
});
