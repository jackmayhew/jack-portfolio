<template>
  <div class="gsap-load mt-24">
    <h2 class="mb-24 text-4xl sm:text-5xl">Selected Work</h2>
    <div v-for="(project, index) in projects" :key="index">
      <Card :project="project" />
    </div>
  </div>
</template>

<script setup>
import { projects } from "@/data/projects";
</script>

<style scoped></style>