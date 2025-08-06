<script setup lang="ts">
import type { Project } from '~/types/project.types'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="mb-28">
    <NuxtImg
      class="work-img w-full h-full rounded-2xl opacity-0 invisible bg-light-bg dark:bg-dark-bg"
      :src="project.image"
      :alt="project.title"
      width="800"
      height="510"
      loading="eager"
    />
    <div class="work-text pt-2 pb-6 sticky bottom-0">
      <time class="mt-4 sm:mt-8 text-lg text-gray-400" :datetime="project.date">{{ project.date }}</time>
      <h2 class="text-2xl sm:text-4xl font-semibold">
        {{ project.title }}
      </h2>
      <p class="my-2 text-xl sm:text-2xl">
        {{ project.desc }}
      </p>
      <p class="my-2 text-lg ">
        {{ project.stack }}
      </p>
      <div class="flex gap-4 mt-4">
        <a class="btn" :href="project.url" target="_blank" rel="noopener">
          Visit
          <Icon name="tabler:link" size="22" />
        </a>
        <NuxtLink class="btn" :to="`/projects/${project.slug}`">
          Details
          <Icon name="tabler:arrow-right" size="22" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

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
