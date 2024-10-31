<template>
  <div class="mt-24">
    <h2 class="mb-20 text-5xl sm:text-6xl">Selected Works</h2>
  <div v-for="(project, index) in projects" :key="index" class="poo">
    <Card
      :title="project.title"
      :date="project.date"
      :desc="project.desc"
      :url="project.url"
      :stack="project.stack"
      :image="project.image"
    />
  </div>
</div>

</template>

<script setup>
import { projects } from "@/data/projects";
</script>

<style scoped></style>
