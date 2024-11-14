<template>
  <div class="wrapper mx-auto max-w-screen-md bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
    <Navbar @mobile-menu-click="setMobileTransition" />
    <Transition name="content" mode="out-in">
      <div :key="$route.fullPath" :data-from-mobile="isFromMobileMenu" class="main__content px-6 mt-6 sm:mt-12" :class="!isMounted ? 'hide__body' : ''" >
        <NuxtPage :isFromMobileMenu="isFromMobileMenu" />
        <Footer />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'nuxt/app'
import { setupHead } from '../components/meta/headConfig.js'
import gsap from 'gsap'

const isMounted = ref(false)
const router = useRouter()
const isFromMobileMenu = ref(false)
const prevPage = ref("")

setupHead(prevPage)

const setMobileTransition = () => {
  isFromMobileMenu.value = true
}

// reset isFromMobileMenu after mobile menu navigation
router.afterEach(() => {
  setTimeout(() => {
    isFromMobileMenu.value = false
  }, 1100)
})

// fade in animation on inital page load
onMounted(() => {
  isMounted.value = true
  // window.scrollTo(0, 0)
  // const context = gsap.context(() => {
  //   gsap.fromTo(document.querySelector('.main__content'),
  //     { y: 30, autoAlpha: 0 },
  //     { y: 0, autoAlpha: 1, delay: 0.1, duration: 0.5, ease: "power2.out" }
  //   );
  // });
  // return () => context.revert();
})

// is this a skill issue? adding dynamic should be simpler than this
// using titleTemplate with code below results in a flicker when navigating between pages
// still a slight flicker on load/refresh, but it's less noticeable and best option imo
watch(() => router.currentRoute.value, (from) => {
  if (from.name === "index") prevPage.value = ""
  else prevPage.value = ` - ${capitalizeFirstLetter(from.name)}`
}
);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

<style>
.hide__body {
  opacity: 0;
}


.main__content,
.wrapper {
  min-height: 100vh !important;
  height: 100% !important;
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
    transition: all 0.3s ease-out .85s !important;
  }
}

.light-mode,
.light-mode body {
  background-color: #FDFAF5;
}

.dark-mode,
.dark-mode body {
  background-color: #121212;
}

.locked {
  overflow: hidden !important;
}
</style>