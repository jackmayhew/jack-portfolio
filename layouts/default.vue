<script setup lang="ts">
import { pageLoadGSAP } from '~/composables/use-gsap'

const route = useRoute()
const initialLoad = ref<boolean>(true)
const mainContentRef = ref<HTMLDivElement | null>(null)

setupHead()

provide('initialLoad', initialLoad)

watch(() => route.path, () => {
  initialLoad.value = false
})

onMounted(() => {
  const { cleanup } = pageLoadGSAP(mainContentRef.value)
  return cleanup
})
</script>

<template>
  <div class="wrapper max-w-screen-md mx-auto">
    <Navbar class="relative max-w-screen-md mx-auto" />
    <div ref="mainContentRef" class="main-content px-6 mt-[6.5rem] invisible">
      <slot />
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
