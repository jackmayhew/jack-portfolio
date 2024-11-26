<template>
  <main>
    <div>
      <button @click="goBack" class="absolute mt-[-25px] flex">
        <Icon name="tabler:arrow-left" size="22" />
      </button>
    </div>
    <div v-if="!project">
      <h1 class="text-5xl sm:text-6xl">Project Not Found</h1>
      <p class="mt-2 text-xl">Sorry, couldn't find that project.</p>
      <button @click="goBack" class="btn mt-4">
        <Icon name="tabler:arrow-left" size="22" />
        Go Back
      </button>
    </div>
    <div v-else>
      <h1 class="text-5xl sm:text-6xl">{{ project.title }}</h1>
      <h2 class="mt-2 text-xl sm:text-2xl">{{ project.subtitle }}</h2>
      <div class="my-6">
        <NuxtImg class="hero-img w-full h-auto block rounded-3xl" :src="project.image" :alt="project.title" width="800"
          height="510" loading="eager" />
      </div>
      <p v-for="(paragraph, index) in project.paragraphs" :key="index" class="my-4 text-xl">
        {{ paragraph }}
      </p>
      <p class="text-xl mb-6">Built with: {{ project.techStack }}</p>
      <a class="btn" :href="project.url"
        target="_blank" rel="noopener">
        Visit
        <Icon name="tabler:link" size="22" />
      </a>
    </div>
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
  title: project ? project.title : 'Project Not Found',
})
</script>