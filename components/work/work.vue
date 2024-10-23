<template>
  <div class="mt-24">
    <h1 class="mb-24">Recent Works</h1>
  <div v-for="(project, index) in projects" :key="index">
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
