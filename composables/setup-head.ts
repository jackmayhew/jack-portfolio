import { githubUsername, websiteUrl } from '~/constants/social-links'

export function setupHead() {
  const { isMobile } = useDetectMobile()
  const colorMode = useColorMode()
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `Jack Mayhew - ${titleChunk}` : `Jack Mayhew`
    },
    htmlAttrs: {
      lang: 'en',
      class: computed(() => (isMobile.value ? 'no-transition' : '')),
    },
    script: [
      { 'defer': true, 'data-site': 'UFPTWCQF', 'src': 'https://cdn.usefathom.com/script.js' },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': 'Jack Mayhew',
          'url': websiteUrl,
          'sameAs': [
            githubUsername,
            // 'https://x.com/username',
          ],
        }),
      },
    ],
    meta: [
      { name: 'description', content: 'Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop. In case anyone is wondering, I use arch linux.' },
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      // open graph / facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Jack Mayhew' },
      { property: 'og:url', content: websiteUrl },
      { property: 'og:title', content: 'Jack Mayhew' },
      { property: 'og:description', content: 'Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop. In case anyone is wondering, I use arch linux.' },
      { property: 'og:image', content: `${websiteUrl}/img/meta/og.png` },
      { property: 'og:locale', content: 'en_US' },
      // twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: websiteUrl },
      { property: 'twitter:title', content: 'Jack Mayhew' },
      { property: 'twitter:description', content: 'Just a guy who enjoys building cool stuff for the web, making things (blazingly) fast, and ricing my desktop. In case anyone is wondering, I use arch linux.' },
      { property: 'twitter:image', content: `${websiteUrl}/img/meta/twitter.png` },
      // { name: 'twitter:creator', content: '@username' },
      {
        name: 'theme-color',
        content: computed(() => (colorMode.value === 'dark' ? '#121212' : '#FDFAF5')),
      },
    ],
    link: [
      // favicons
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
      { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'canonical', href: websiteUrl },
      // other
      { rel: 'robots', href: '/robots.txt' },
      { rel: 'sitemap', type: 'application/xml', title: 'Sitemap', href: '/sitemap.xml' },
    ],
  })
}
