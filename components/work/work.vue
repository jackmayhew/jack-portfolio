<template>
  <div class="mt-24">
    <h2 class="mb-24 text-4xl sm:text-5xl">Selected Work</h2>
    <div v-for="(project, index) in projects" :key="index">
      <Card :title="project.title" :date="project.date" :desc="project.desc" :url="project.url" :stack="project.stack"
        :image="project.image" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

const props = defineProps(['mountWork']);

watch(() => props.mountWork, () => {
  gsap.registerPlugin(ScrollTrigger);
  let images = gsap.utils.toArray(".work__img");
  images.forEach((image) => {
      image.style.opacity = 0
      gsap.fromTo(
        image,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "top 10%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
});

// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   let images = gsap.utils.toArray(".work__img");
//   setTimeout(() => {
//     images.forEach((image) => {
//       image.style.opacity = 0
//       gsap.fromTo(
//         image,
//         { autoAlpha: 0 },
//         {
//           autoAlpha: 1,
//           scrollTrigger: {
//             trigger: image,
//             start: "top 80%",
//             end: "top 10%",
//             scrub: true,
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   }, 1500);
// });
</script>


<style scoped></style>