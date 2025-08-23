<script setup lang="ts">
import { projectDetails } from '~/data/project-details'

const route = useRoute()
const slug = route.params.slug

const project = projectDetails.find(proj => proj.slug === slug)

if (!project)
  throw createError({ statusCode: 404, statusMessage: 'Project Not Found', fatal: true })

useHead({
  title: project.title,
})
</script>

<template>
  <main>
    <BackButton />
    <div>
      <Header :title="project.title" :subtitle="project.subtitle" />
      <ProjectBody :project="project" />
      <ProjectActions :url="project.url" :github-url="project.githubUrl" />
    </div>
    <Footer />
  </main>
</template>
