<script setup lang="ts">
import { projectCards } from '~/data/project-cards'
</script>

<template>
  <div class="mt-24 relative">
    <h2 class="mb-24 text-4xl sm:text-5xl">
      Selected Work
    </h2>
    <ProjectCard v-for="(project, index) in projectCards" :key="index" :project="project" />
  </div>
</template>
