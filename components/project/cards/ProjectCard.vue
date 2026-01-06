<script setup lang="ts">
import type { ProjectCard } from '~/types/project/project-card.types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{
  project: ProjectCard
}>()

gsap.registerPlugin(ScrollTrigger)

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
    <div class="work-text pt-2 pb-6 sticky bottom-0">
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
        <ButtonLinkExternal :url="project.url" text="Visit" icon-name="lucide:link" :icon-size="18" width="150px" />
        <ButtonLink :url="`/projects/${project.slug}`" text="Details" icon-name="lucide:arrow-right" :icon-size="20" width="150px" />
        <!-- <button class="w-[150px] relative top-0.5 rounded-md border-2 border-gray-300 bg-gray-200 text-center no-underline disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800">
          <span class="relative h-full flex items-center justify-center gap-1.5 mx-[-2px] block -translate-y-0.5 select-none rounded-md border-2 border-gray-300 bg-white px-4 py-1 text-center text-base font-bold text-gray-700 hover:-translate-y-1 hover:text-gray-700 active:-translate-y-px active:transition-all active:duration-100 group-disabled:hover:!-translate-y-0.5 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-gray-300">
            Details
            <Icon name="lucide:arrow-right" size="16" />
          </span>
        </button> -->
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
