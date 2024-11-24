<template>
  <main class="gsap-load">
    <button @click="goBack" class="py-2 absolute mt-[-35px]">
      <Icon name="tabler:arrow-left" size="22" />
    </button>
    <h1 class="text-5xl sm:text-6xl">{{ project.title }}</h1>
    <h2 class="mt-2 text-xl sm:text-2xl">{{ project.subtitle }}</h2>
    <div class="my-6"><NuxtImg class="hero-img w-full h-auto block rounded-3xl" :src="project.image" :alt="project.title" width="800" height="510"/></div>
    <p v-for="(paragraph, index) in project.paragraphs" :key="index" class="my-4 text-xl">
      {{ paragraph }}
    </p>
    <p class="text-xl mb-6">Built with: {{ project.techStack }}</p>
    <a class="btn flex items-center gap-2 w-fit text-white text-xl font-bold py-2 px-4 rounded" :href="project.url"
      target="_blank" rel="noopener">
      Visit
      <Icon name="tabler:link" size="22" />
    </a>
  </main>
</template>

<script setup>
import { projectDetails } from '~/data/projectPages';
const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const project = projectDetails.find((proj) => proj.slug === slug);

function goBack() {
  if (window.history.state?.back) {
    router.go(-1);
  } else {
    router.push('/');
  }
}

useHead({
  title: project.title
})
</script>

<style scoped></style>