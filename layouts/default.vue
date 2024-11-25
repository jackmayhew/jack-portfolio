<template>
  <div class="wrapper text-light-text dark:text-dark-text max-w-screen-md mx-auto">
    <div class="navbar-wrapper sticky top-0 z-[100]">
      <Navbar :key="route.fullPath" />
    </div>
    <div class="main-content px-6 mt-6 sm:mt-12">
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
  // const context = gsap.context(() => {
  //   const timeline = gsap.timeline();
  //   timeline
  //     .fromTo(".main-content",
  //       { y: 15, autoAlpha: 0 },
  //       { y: 0, autoAlpha: 1, duration: 0.3, ease: "power2.out" }, 0.2)
  // });
  // return () => context.revert();
})

watch(() => route.path, () => {
  // animate footer separately to match page transitons
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
/* .page-enter-active{
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
} */

.main-content,
.wrapper {
  min-height: 100vh;
  height: 100%;
}

.navbar-wrapper {
  position: sticky;
  top: 0;
  background-color: inherit;
}

</style>