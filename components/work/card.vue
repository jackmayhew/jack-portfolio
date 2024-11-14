<template>
  <div class="mb-28">
    <NuxtImg class="work__img w-full h-full rounded-2xl opacity-0" :src="project.image" :alt="project.title" />
    <div class="work__text pb-6 sticky bottom-0">
      <div class="mt-4 sm:mt-8 text-lg text-gray-400">{{ project.date }}</div>
      <h2 class="mt-2 text-2xl sm:text-4xl font-semibold">{{ project.title }}</h2>
      <p class="my-2 text-xl sm:text-2xl">{{ project.desc }}</p>
      <a class="text-lg" :href="project.url" rel="noopener" target="_blank">Visit</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object,
});
</script>

<style scoped>
.work__text {
  background-image: linear-gradient(to top,
      rgba(253, 250, 245, 1) 40%,
      40%,
      transparent);
}

.dark-mode .work__text {
  background-image: linear-gradient(to top,
      rgba(18, 18, 18, 1) 40%,
      transparent);
}
</style>