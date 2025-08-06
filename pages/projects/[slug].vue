<script setup lang="ts">
import { projectDetails } from '~/data/project-pages'

const router = useRouter()

const route = useRoute()
const slug = route.params.slug
const project = projectDetails.find(proj => proj.slug === slug)

function goBack() {
  if (window.history.state?.back) {
    router.go(-1)
  }
  else {
    router.push('/')
  }
}

useHead({
  title: project ? project.title : 'Project Not Found',
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
    <div v-if="!project">
      <h1 class="text-5xl sm:text-6xl">
        Project Not Found
      </h1>
      <p class="mt-2 text-xl">
        Sorry, couldn't find that project.
      </p>
    </div>
    <div v-else>
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
      <p v-for="(paragraph, index) in project.paragraphs" :key="index" class="my-4 text-xl" v-html="paragraph" />
      <p class="text-xl mb-6">
        Built with: {{ project.techStack }}
      </p>
      <ButtonLinkExternal :url="project.url" text="Visit" icon-name="lucide:link" :icon-size="18" width="150px" />
    </div>
    <Footer />
  </main>
</template>
