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
const route = useRoute();

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

watch(() => route.path, () => {
  // animate the footer out separately to match page transitons (since nuxt page transitons suck)
  // not a fan of this, but it works for now 
  const context = gsap.context(() => {
    gsap.set(".footer", { y: 0, autoAlpha: 1 });
    gsap.timeline()
      .to(".footer", { y: -5, autoAlpha: 0, duration: 0.3, ease: "power2.out" })
      .eventCallback("onComplete", () => {
        gsap.set(".footer", { y: 0, autoAlpha: 1 });
      });
  });
  return () => context.revert();
});
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

.main-content,
.wrapper {
  min-height: 100vh;
  height: 100%;
}
</style>