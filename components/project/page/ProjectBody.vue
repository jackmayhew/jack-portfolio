<script setup lang="ts">
import type { ProjectDetails } from '~/types/project/project-details-types'

defineProps<{
  project: ProjectDetails
}>()
</script>

<template>
  <div>
    <div class="my-6">
      <NuxtImg
        class="hero-img w-full h-auto block rounded-lg"
        :src="project.image"
        :alt="project.title"
        width="800"
        height="510"
        loading="eager"
      />
    </div>
    <p v-for="(p, index) in project.paragraphs" :key="index" class="my-4 text-xl">
      {{ typeof p === 'object' ? p.text : p }}
      <a
        v-if="typeof p === 'object' && p.link"
        :href="p.link.url"
        target="_blank"
        rel="noopener"
        class="json-link"
      >{{ p.link.text }}</a>
    </p>
    <p class="text-lg mb-6">
      Built with: {{ project.techStack }}
    </p>
  </div>
</template>
