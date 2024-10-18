<template>
  <div class="mt-24 bg-white work__card">
    <img class="rounded-xl work__img" :src="image" alt="" />
    <div class="work__text">
      <div class="mt-4 text-lg">{{ date }}</div>
      <h2 class="mt-2 text-3xl font-semibold">{{ title }}</h2>
      <p class="mt-2 text-xl">{{ desc }}</p>
      <div class="mt-4 text-lg">
        <a :href="url" rel="noopener" target="_blank">Visit</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  date: String,
  desc: String,
  url: String,
  stack: String,
  image: String,
});

import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

onMounted(() => {
  if (process.client) {
    let images = gsap.utils.toArray(".work__img");

    images.forEach((img) => {
      gsap.fromTo(
        img,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: img,
            start: "top 55%",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    });
  }
});
</script>

<style scoped>
.work__card {
  margin-bottom: 150px;
  border: 3px solid green;
}

.work__text {
  position: sticky;
  bottom: 0;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    40%,
    transparent
  );
  padding-bottom: 25px;
}
</style>
