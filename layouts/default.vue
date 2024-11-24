<template>
  <!-- <div class="wrapper text-light-text dark:text-dark-text mx-auto max-w-screen-md">
    <Navbar class="sticky top-0 z-[999] " />
      <div class="main-content px-6 mt-6 sm:mt-12">
        <NuxtPage />
        <Footer />
      </div>
  </div> -->
  <div class="wrapper mx-auto max-w-screen-md bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
    <Navbar />
    <Transition name="content" mode="out-in">
      <div class="main-content px-6 mt-6 sm:mt-12"  >
        <NuxtPage  />
        <Footer />
      </div>
    </Transition>
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
        { y: 0, autoAlpha: 1, duration: 0.3, ease: "power2.out" }, 0.2)
  });
  return () => context.revert();
})

// watch(() => route.path, () => {
//   // animate footer separately to match page transitons
//   // not a fan of this, but it works for now 
//   const context = gsap.context(() => {
//     gsap.set(".footer", { y: 0, autoAlpha: 1 });
//     gsap.timeline()
//       .to(".footer", { y: -15, autoAlpha: 0, duration: 0.3, ease: "power2.out" })
//       .eventCallback("onComplete", () => {
//         gsap.set(".footer", { y: 0, autoAlpha: 1 });
//       });
//   });
//   return () => context.revert();
// });
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

.hide__body {
  opacity: 0;
  visibility: hidden;
}

.main-content,
.wrapper {
  min-height: 100vh !important;
  height: 100% !important;
}
</style>