export function setupHead(prevPage) {
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `Jack Mayhew - ${titleChunk}` : `Jack Mayhew ${prevPage.value}`;
    },
    script: [
      {
        src: "/SplitText.js",
        defer: true,
      },
    ],
    meta: [
      { name: "description", content: "Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop. In case anyone is wondering, I use arch linux." },
      { charset: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      // Open Graph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jackmayhew.com" },
      { property: "og:title", content: "Jack" },
      { property: "og:description", content: "Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop. In case anyone is wondering, I use arch linux." },
      { property: "og:image", content: "/path-to-your-social-image.jpg" },
      // Twitter
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: "https://jackmayhew.com" },
      { property: "twitter:title", content: "Jack" },
      { property: "twitter:description", content: "Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop. In case anyone is wondering, I use arch linux." },
      { property: "twitter:image", content: "/path-to-your-social-image.jpg" }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
      { rel: "shortcut icon", href: "/favicon/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
      { rel: "manifest", href: "/favicon/site.webmanifest" },
      { rel: "canonical", href: "https://jackmayhew.com" },
      // Preloads
      { rel: "preload", href: "/hero.webp", as: "image" },
      { rel: "preload", href: "/fonts/StabilGrotesk-Regular.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
      { rel: "preload", href: "/fonts/StabilGrotesk-Medium.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@800&display=swap" }
    ],
  });
}