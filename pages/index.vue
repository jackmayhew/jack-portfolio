<template>
  <main class="px-4 mt-6 sm:mt-12">
    <div>
      <div class="intro text-4xl sm:text-5xl">
        Just a guy who enjoys building cool things for the web and beyond.
        Currently living and working in Montreal.
      </div>
      <div class="mt-6">
        <!-- <img class="w-full rounded-[2rem]" src="/gifer.gif" rel="preload" /> -->
        <NuxtImg class="w-full rounded-[2rem]" preload format="gif" src="/gifer.gif" />
      </div>
    </div>
    <div v-for="(project, index) in projects" :key="index">
      <WorkCard
        :title="project.title"
        :date="project.date"
        :desc="project.desc"
        :url="project.url"
        :stack="project.stack"
        :image="project.image"
      />
    </div>
  </main>
</template>

<script setup>
import { projects } from "@/data/projects";
</script>

<style scoped>
</style>
