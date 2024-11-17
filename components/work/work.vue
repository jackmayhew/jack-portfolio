<template>
  <div class="gsap-load mt-24">
    <h2 class="mb-24 text-4xl sm:text-5xl">Selected Work</h2>
    <div v-for="(project, index) in projects" :key="index">
      <Card :project="project" />
    </div>
  </div>
</template>

<script setup>
// import { onMounted } from "vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   let images = gsap.utils.toArray(".work__img");
//   images.forEach((image) => {
//     gsap.fromTo(
//       image,
//       { autoAlpha: 0 },
//       {
//         autoAlpha: 1,
//         scrollTrigger: {
//           trigger: image,
//           start: "top 80%",
//           end: "top 10%",
//           scrub: true,
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   });
// });
</script>

<style scoped></style>