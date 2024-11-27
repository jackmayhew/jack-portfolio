<template>
  <div class="mt-24">
    <h2 class="mb-24 text-4xl sm:text-5xl">Selected Work</h2>
    <!-- <Card v-for="(project) in projects" :key="projects[0].id" :project="project" /> -->
    <div class="mb-28">
    <NuxtImg class="work-img w-full h-full rounded-2xl opacity-0 invisible bg-light-bg dark:bg-dark-bg"
      :src="projects[0].image" :alt="projects[0].title" width="800" height="510" loading="eager" />
    <div class="work-text pt-2 pb-6 sticky bottom-0">
      <time class="mt-4 sm:mt-8 text-lg text-gray-400" :datetime="projects[0].date">{{ projects[0].date }}</time>
      <h2 class="text-2xl sm:text-4xl font-semibold">{{ projects[0].title }}</h2>
      <p class="my-2 text-xl sm:text-2xl">{{ projects[0].desc }}</p>
      <p class="my-2 text-lg ">{{ projects[0].stack }}</p>
      <div class="flex gap-4 mt-4">
        <a class="btn" :href="projects[0].url" target="_blank" rel="noopener">
        Visit
        <Icon name="tabler:link" size="22" />
      </a>
      <NuxtLink class="btn" :to="`/projects/${projects[0].slug}`" >
        Details
        <Icon name="tabler:arrow-right" size="22" />
      </NuxtLink>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { projects } from "~/data/projectCards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  const context = gsap.context(() => {
    gsap.registerPlugin(ScrollTrigger);
    const imgs = gsap.utils.toArray('.work-img');
    
    if (imgs.length === 0) return;

    imgs.forEach((img) => {
      gsap.fromTo(
        img,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: img,
            start: "top 55%",
            end: "top 10%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });

  return () => context.revert(); 
});

</script>

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