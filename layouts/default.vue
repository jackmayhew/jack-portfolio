<template>
  <div class="wrapper mx-auto max-w-screen-md bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
    <Navbar />
    <div class="main-content px-6 mt-6 sm:mt-12">
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { setupHead } from '~/composables/useHead.js'
import gsap from 'gsap'

setupHead()

onMounted(() => {
  const context = gsap.context(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(".gsap-load",
        { y: 15, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.3, ease: "power2.out" }, 0.2)
  });
  return () => context.revert();
})
</script>

<style>
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
  transform: translateY(-5px);
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

.hide-content {
  opacity: 0;
  visibility: hidden;
}

.main-content,
.wrapper {
  min-height: 100vh !important;
  height: 100% !important;
}
</style>