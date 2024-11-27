<template>
  <div class="">
    <Navbar2 class="relative max-w-screen-md mx-auto" />
    <div class="main-content px-6 mt-[6.5rem] invisible">
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
const route = useRoute();

setupHead()

onMounted(() => {
  // gsap animation for initial page load
  const context = gsap.context(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(".main-content",
        { y: 15, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: .5, ease: "power2.out" }, 0.2)
  });
  return () => context.revert();
})

watch(() => route.path, () => {
  // animate footer separately to match nuxt page transitons
  // not a fan of this, but it works for now 
  const context = gsap.context(() => {
    gsap.set(".footer", { y: 0, autoAlpha: 1 });
    gsap.timeline()
      .to(".footer", { y: -15, autoAlpha: 0, duration: 0.3, ease: "power2.out" })
      .eventCallback("onComplete", () => {
        gsap.set(".footer", { y: 0, autoAlpha: 1 });
      });
  });
  return () => context.revert();
});

</script>


<style>
/* .page-enter-active {
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

.main-content,
.wrapper {
  min-height: 100vh;
  height: 100%;
} */
</style>