<template>
  <div class="mb-28">
    <NuxtImg class="work-img w-full h-full rounded-2xl opacity-0 invisible bg-light-bg dark:bg-dark-bg"
      :src="project.image" :alt="project.title" loading="lazy" width="800" height="510" />
    <div class="work-text py-6 sticky bottom-0">
      <time class="mt-4 sm:mt-8 text-lg text-gray-400" :datetime="project.date">{{ project.date }}</time>
      <h2 class="mt-2 text-2xl sm:text-4xl font-semibold">{{ project.title }}</h2>
      <p class="my-2 text-xl sm:text-2xl">{{ project.desc }}</p>
      <p class="my-2 text-lg ">{{ project.stack }}</p>
      <div class="flex gap-4 mt-4">
        <a class="btn flex items-center gap-2 w-fit text-white text-xl font-bold py-2 px-4 rounded" :href="project.url" target="_blank" rel="noopener">
        Visit
        <Icon name="tabler:link" size="22" />
      </a>
      <NuxtLink class="btn flex items-center gap-2 w-fit text-white text-xl font-bold py-2 px-4 rounded" :to="`/projects/${project.slug}`" >
        Details
        <Icon name="tabler:arrow-right" size="22" />
      </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object,
});
</script>

<style scoped>
@property --gradient-color {
  syntax: '<color>';
  inherits: false;
  initial-value: rgba(253, 250, 245, 1);
}

.work-text {
  background: linear-gradient(to top, var(--gradient-color) 40%, transparent);
  transition: --gradient-color 0.2s ease;
}

.dark-mode .work-text {
  --gradient-color: rgba(18, 18, 18, 1);
}
</style>