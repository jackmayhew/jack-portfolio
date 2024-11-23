<template>
  <div class="mb-28">
    <NuxtImg class="work-img w-full h-full rounded-2xl opacity-0 invisible bg-light-bg dark:bg-dark-bg"
      :src="project.image" :alt="project.title" loading="lazy" width="800" height="510" />
    <div class="work-text py-6 sticky bottom-0">
      <time class="mt-4 sm:mt-8 text-lg text-gray-400" :datetime="project.date">{{ project.date }}</time>
      <h2 class="mt-2 text-2xl sm:text-4xl font-semibold">{{ project.title }}</h2>
      <p class="my-2 text-xl sm:text-2xl">{{ project.desc }}</p>
      <a class="flex items-center gap-2 mt-4 w-fit" :href="project.url" target="_blank" rel="noopener">
        <Icon name="tabler:link" size="28" />
        <span class="text-lg font-semibold">Visit</span>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object,
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