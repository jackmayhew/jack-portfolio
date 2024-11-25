export function setupHead() {
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `Jack Mayhew - ${titleChunk}` : `Jack Mayhew`;
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { name: "description", content: "Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop. In case anyone is wondering, I use arch linux." },
      { charset: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      // open graph / facebook
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Jack Mayhew" },
      { property: "og:url", content: "https://jackmayhew.com" },
      { property: "og:title", content: "Jack Mayhew" },
      { property: "og:description", content: "Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop. In case anyone is wondering, I use arch linux." },
      { property: "og:image", content: "https://jackmayhew.com/img/og.png" },
      // twitter
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: "https://jackmayhew.com" },
      { property: "twitter:title", content: "Jack Mayhew" },
      { property: "twitter:description", content: "Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop. In case anyone is wondering, I use arch linux." },
      { property: "twitter:image", content: "https://jackmayhew.com/img/twitter.png" }
    ],
    link: [
      // favicons
      { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
      { rel: "shortcut icon", href: "/favicon/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
      { rel: "manifest", href: "/favicon/site.webmanifest" },
      { rel: "canonical", href: "https://jackmayhew.com" },
      // preloads
      // { rel: "preload", href: "/img/hero.webp", as: "image" },
      // { rel: "preload", href: "/fonts/StabilGrotesk-Regular.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
      // { rel: "preload", href: "/fonts/StabilGrotesk-Medium.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
      // other
      { rel: 'robots', href: '/robots.txt' },
      { rel: 'sitemap', type: 'application/xml', title: 'Sitemap', href: '/sitemap.xml' },
    ],
  });
}