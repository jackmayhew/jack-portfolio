<template>
  <div class="mb-28">
    <NuxtImg class="work__img w-full h-full invisible rounded-2xl" :src="image" :alt="title" />
    <div class="work__text pb-6 sticky bottom-0">
      <div class="mt-4 sm:mt-8 text-lg text-gray-400">{{ date }}</div>
      <h2 class="mt-2 text-2xl sm:text-4xl font-semibold">{{ title }}</h2>
      <p class="my-2 text-xl sm:text-2xl">{{ desc }}</p>
      <a class="text-lg" :href="url" rel="noopener" target="_blank">Visit</a>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  title: String,
  date: String,
  desc: String,
  url: String,
  stack: String,
  image: String,
});

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  setTimeout(() => {
    let images = gsap.utils.toArray(".work__img");
    images.forEach((img) => {
      gsap.set(img, { opacity: 0 });
      gsap.fromTo(
        img,
        { opacity: 0, visibility: 'hidden' },
        {
          opacity: 1,
          visibility: 'visible',
          scrollTrigger: {
            trigger: img,
            start: "top 50%",
            end: "top 10%",
            scrub: true,
            visibility: "visible"
          },
        }
      );
    });
  }, 500);


});
</script>

<style scoped>
.work__text {
  background-image: linear-gradient(to top,
      rgba(251, 247, 245, 1) 40%,
      40%,
      transparent);
}

.dark-mode .work__text {
  background-image: linear-gradient(to top,
      rgba(18, 18, 18, 1) 40%,
      transparent);
}
</style>
