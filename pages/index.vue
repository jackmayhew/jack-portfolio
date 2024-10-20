<template>
  <main class="px-4 mt-6 sm:mt-12">
    <div>
      <div class="intro text-4xl sm:text-5xl">
        Just a guy who enjoys building cool things for the web and beyond.
        Currently living and working in Montreal.
        <!-- I'm <span class="underline font-semibold">Jack</span>, a full stack
        web developer who enjoys building cool things for the web and beyond.
        Currently living and working in Montreal. -->
      </div>
      <div class="mt-6">
        <NuxtImg class="rounded-2xl w-full" src="/george.jpg" rel="preload" />
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

useHead({
  title: "Jack",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<style scoped>
main {
  color: black;
}

.h-dvh {
  height: 100vh;
}
</style>
