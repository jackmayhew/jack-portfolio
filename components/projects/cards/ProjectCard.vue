<script setup lang="ts">
import type { ProjectCard } from '~/types/project/project-card.types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{
  project: ProjectCard
}>()

gsap.registerPlugin(ScrollTrigger)

const { isMobile } = useDetectMobile()

const imgRef = ref<any>(null)

onMounted(() => {
  if (!imgRef.value || !imgRef.value.$el)
    return

  gsap.fromTo(
    imgRef.value.$el,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: imgRef.value.$el,
        start: 'top 55%',
        end: 'top 10%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    },
  )
})
</script>

<template>
  <div class="mb-28">
    <NuxtImg
      ref="imgRef"
      class="work-img w-full h-full rounded-lg opacity-0 invisible bg-light-bg dark:bg-dark-bg"
      :src="project.image"
      :alt="project.title"
      width="800"
      height="510"
      loading="lazy"
    />
    <div class="work-text pt-2 pb-6 sticky bottom-0" :class="{ 'no-transition': isMobile }">
      <time class="mt-4 sm:mt-8 text-lg text-neutral-400" :datetime="project.date">{{ project.date }}</time>
      <h2 class="text-2xl sm:text-4xl font-semibold">
        {{ project.title }}
      </h2>
      <p class="my-2 text-xl sm:text-2xl">
        {{ project.desc }}
      </p>
      <p class="my-2 text-lg">
        {{ project.stack }}
      </p>
      <div class="flex gap-4 mt-4">
        <ButtonLinkExternal
          :url="project.url"
          text="Visit"
          icon-name="lucide:link"
          :icon-size="18"
          width="150px"
        />
        <ButtonLink
          :url="`/projects/${project.slug}`"
          text="Details"
          icon-name="lucide:arrow-right"
          :icon-size="20"
          width="150px"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@property --gradient-color {
  syntax: '<color>';
  inherits: false;
  initial-value: rgba(253, 250, 245, 1);
}

.work-text {
  background: linear-gradient(to top, var(--gradient-color) 40%, transparent);
  transition: --gradient-color 0.2s ease;
}

.dark-mode .work-text {
  --gradient-color: rgba(18, 18, 18, 1);
}
</style>
