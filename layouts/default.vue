<template>
  <div class="wrapper mx-auto max-w-screen-md bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
    <Navbar @mobile-menu-click="setMobileTransition" />
    <Transition name="content" mode="out-in" :appear="isMount">
      <div :key="$route.fullPath" class="main__content px-6 mt-6 sm:mt-12" v-if="isMount"
        :data-from-mobile="isFromMobileMenu">
        <NuxtPage :isFromMobileMenu="isFromMobileMenu" />
        <Footer />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'nuxt/app'

const isMount = ref(false)
const router = useRouter()
const isFromMobileMenu = ref(false)

const setMobileTransition = () => {
  isFromMobileMenu.value = true
}

router.afterEach(() => {
  setTimeout(() => {
    isFromMobileMenu.value = false
  }, 1100)
})

onMounted(() => {
  setTimeout(() => {
    isMount.value = true
  }, 20)
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Jack Mayhew - ${titleChunk}` : 'Jack Mayhew';
  },
  script: [
    {
      src: "/SplitText.js",
      defer: true,
    },
  ],
  meta: [
    // { name: "title", content: "Jack" },
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
    { rel: "preload", href: "/fonts/StabilGrotesk-Medium.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" }
  ]
});

// useHead({
//   title: "Jack",
//   meta: [{ name: "description", content: "My amazing site." }],
//   link: [
//     {
//       rel: "preload",
//       href: "/hero.webp",
//       as: "image"
//     },
//     {
//       rel: "preload",
//       href: "/fonts/StabilGrotesk-Regular.woff2",
//       as: "font",
//       type: "font/woff2",
//       crossorigin: "anonymous",
//     },
//     {
//       rel: "preload",
//       href: "/fonts/StabilGrotesk-Medium.woff2",
//       as: "font",
//       type: "font/woff2",
//       crossorigin: "anonymous",
//     },
//   ],
//   script: [
//     {
//       src: "/SplitText.js",
//       defer: true,
//     },
//   ],
//   bodyAttrs: {
//     class: "test",
//   },
// });
</script>

<style>
.main__content {
  min-height: 100vh;
  height: 100%;
}

.page-enter-active {
  transition: all 0.3s ease-out;
}

.page-leave-active {
  transition: all 0.15s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.page-leave-to {
  opacity: 0;
}

.content-enter-active {
  transition: all 0.3s ease-out;
}

.content-leave-active {
  transition: all 0.15s ease-out;
}

.content-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.content-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 540px) {
  .content-enter-active[data-from-mobile="true"] {
    transition: all 0.3s ease-out .75s !important;
  }
}

.light-mode,
.light-mode body {
  background-color: #FBF7F5;
}

.dark-mode,
.dark-mode body {
  background-color: #121212;
}

.locked {
  overflow: hidden !important;
}
</style>