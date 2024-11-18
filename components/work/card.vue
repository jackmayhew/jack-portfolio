<template>
  <div class="mb-28" ref="cardContainer">
    <NuxtImg class="work-img w-full h-full rounded-2xl opacity-0 invisible" :src="project.image" :alt="project.title" />
    <div class="work-text pb-6 sticky bottom-0">
      <div class="mt-4 sm:mt-8 text-lg text-gray-400">{{ project.date }}</div>
      <h2 class="mt-2 text-2xl sm:text-4xl font-semibold">{{ project.title }}</h2>
      <p class="my-2 text-xl sm:text-2xl">{{ project.desc }}</p>
      <a class="flex items-center gap-2 w-fit" :href="project.url" target="_blank" rel="noopener">
        <Icon name="tabler:link" size="28" />
        <span class="text-lg font-semibold">Visit</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  project: Object,
});

const cardContainer = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const img = cardContainer.value.querySelector('.work-img');
  img.style.opacity = 0;
  img.style.visibility = 'hidden';
  gsap.fromTo(
    img,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: cardContainer.value,
        start: "top 60%",
        end: "top 10%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );
});
</script>

<style scoped>
.work-text {
  background-image: linear-gradient(to top, rgba(253, 250, 245, 1) 40%, 40%, transparent);
}

.dark-mode .work-text {
  background-image: linear-gradient(to top, rgba(18, 18, 18, 1) 40%, transparent);
}
</style>