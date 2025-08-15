<script setup lang="ts">
import { projectDetails } from '~/data/project-details'

const router = useRouter()
const route = useRoute()
const slug = route.params.slug

const project = projectDetails.find(proj => proj.slug === slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project Not Found', fatal: true })
}

function goBack() {
  if (window.history.state?.back) {
    router.go(-1)
  }
  else {
    router.push('/')
  }
}

useHead({
  title: project.title,
})
</script>

<template>
  <main>
    <div>
      <button
        class="absolute mt-[-25px] flex hover:-translate-x-1 transition-transform duration-150 pr-4"
        @click="goBack"
      >
        <Icon name="lucide:arrow-left" size="22" />
      </button>
    </div>
    <div>
      <h1 class="text-5xl sm:text-6xl">
        {{ project.title }}
      </h1>
      <h2 class="mt-2 text-xl sm:text-2xl">
        {{ project.subtitle }}
      </h2>
      <div class="my-6">
        <NuxtImg
          class="hero-img w-full h-auto block rounded-3xl"
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
      <p class="text-xl mb-6">
        Built with: {{ project.techStack }}
      </p>
      <div class="flex gap-2">
        <ButtonLinkExternal :url="project.url" text="Visit" icon-name="lucide:link" :icon-size="18" width="150px" />
        <ButtonLinkExternal v-if="project.githubUrl" :url="project.githubUrl" text="Code" icon-name="lucide:github" :icon-size="18" width="150px" />
      </div>
    </div>
    <Footer />
  </main>
</template>
