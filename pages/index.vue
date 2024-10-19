<template>
  <main class="px-8 md:px-4 mt-6 sm:mt-12">
    <div>
      <div class="intro text-3xl sm:text-5xl">
        <span class="underline font-semibold">Jack Mayhew</span> is a full stack
        developer who enjoys building cool things for the web and beyond.
      </div>
      <div class="mt-6">
        <img class="rounded-2xl" src="/george.jpg" alt="" />
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
