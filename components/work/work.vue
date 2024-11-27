<template>
  <div class="mt-24">
    <h2 class="mb-24 text-4xl sm:text-5xl">Selected Work</h2>
    <Card v-for="(project) in projects" :key="project.id" :project="project" />
  </div>
</template>

<script setup>
import { projects } from "~/data/projectCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function workCards() {
    const imgs = document.querySelectorAll('.work-img');
    imgs.forEach((img) => {
      gsap.fromTo(
        img,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: img,
            start: "top 55%",
            end: "top 10%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
}
onMounted(() => {
  workCards()
    // const imgs = document.querySelectorAll('.work-img');
    // imgs.forEach((img) => {
    //   gsap.fromTo(
    //     img,
    //     { autoAlpha: 0 },
    //     {
    //       autoAlpha: 1,
    //       scrollTrigger: {
    //         trigger: img,
    //         start: "top 55%",
    //         end: "top 10%",
    //         scrub: true,
    //         toggleActions: "play none none reverse",
    //       },
    //     }
    //   );
    // });
});
</script>