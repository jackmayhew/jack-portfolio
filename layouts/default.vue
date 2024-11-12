<template>
  <div class="wrapper mx-auto max-w-screen-md bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
    <Navbar @mobile-menu-click="setMobileTransition" />
    <Transition name="content" mode="out-in"> <!-- :appear="isMount" -->
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
import { setupHead } from '../components/meta/headConfig.js'

const isMount = ref(false)
const router = useRouter()
const isFromMobileMenu = ref(false)
const prevPage = ref("")

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
  isMount.value = true
  // setTimeout(() => {
  // isMount.value = true
  // }, 20)
})

setupHead(prevPage)

// is this a skill issue???? adding dynamic titles with titleTemplate
// results in a flicker when navigating between pages, or on page refresh
// still a slight flicker on prevPage.value on load/refresh, but it's less noticeable and best option imo
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