<script setup lang="ts">
import { pageLoadGSAP } from '~/utils/gsap-animations'

setupHead()

// 0.5 for initial load, 0.2 for subsequent transitions
const gsapDelay = ref(0.5)

// initial page load animations
onMounted(() => {
  const { cleanup } = pageLoadGSAP()
  return cleanup
})
</script>

<template>
  <div class="wrapper max-w-screen-md mx-auto">
    <Navbar class="relative max-w-screen-md mx-auto" />
    <div class="main-content px-6 mt-[6.5rem] invisible">
      <NuxtPage :gsap-delay="gsapDelay" />
      <!-- footer moved to pages for page transitions. not ideal but ok -->
    </div>
  </div>
</template>

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
</style>
