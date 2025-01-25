<template>
  <div class="wrapper max-w-screen-md mx-auto">
    <Navbar class="relative max-w-screen-md mx-auto" />
    <div class="main-content px-6 mt-[6.5rem] invisible">
      <NuxtPage :gsapDelay="gsapDelay" />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { pageLoadGSAP, footerGSAP } from '@/utils/gsapAnimations'
const route = useRoute();

setupHead()

/**
 * Delay 0.5 for initial page load,
 * then 0.2 for subsequent page transitions.
 */
let gsapDelay = ref(0.5);

// Initial page load animations
onMounted(() => {
  const { cleanup } = pageLoadGSAP()
  return cleanup
})

/**
 * Animate footer to match page transitions.
 * For some reason Nuxt page transition won't work with the footer, only with <NuxtPage />
 * Not a huge fan of this, but it works for now
 */
watch(() => route.path, () => {
  gsapDelay.value = 0.2
  const { cleanup } = footerGSAP()
  return cleanup
})
</script>

<style>
.page-enter-active {
  transition: all 0.3s ease-out;
  z-index: -1;
}

.page-leave-active {
  transition: all 0.15s ease-in;
  z-index: -1;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* .main-content,
.wrapper {
  min-height: 100vh;
  height: 100%;
} */
</style>