<template>
  <div class="mt-24">
    <h2 class="mb-24 text-4xl sm:text-5xl">Selected Work</h2>
    <Card v-for="(project) in projects" :key="project.id" :project="project" />
  </div>
</template>

<script setup>
import { projects } from "~/data/projectCards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   const imgs = gsap.utils.toArray('.work-img')
//   if (!imgs.length) return; 
//   imgs.forEach((img) => {
//     gsap.fromTo(
//       img,
//       { autoAlpha: 0 },
//       {
//         autoAlpha: 1,
//         scrollTrigger: {
//           trigger: img,
//           start: "top 55%",
//           end: "top 10%",
//           scrub: true,
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   });
// });
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  // Add a global event listener to prevent default
  window.addEventListener('click', (e) => {
    if (window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  });

  const imgs = gsap.utils.toArray('.work-img')
  if (!imgs.length) return; 

  imgs.forEach((img) => {
    ScrollTrigger.create({
      trigger: img,
      start: "top 55%",
      end: "top 10%",
      onEnter: () => gsap.to(img, { autoAlpha: 1 }),
      onLeave: () => gsap.to(img, { autoAlpha: 0 }),
      onEnterBack: () => gsap.to(img, { autoAlpha: 1 }),
      onLeaveBack: () => gsap.to(img, { autoAlpha: 0 })
    });
  });
});
</script>