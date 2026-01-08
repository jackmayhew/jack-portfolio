<script setup lang="ts">
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import HomeHeroHeadline from './HomeHeroHeadline.vue'

gsap.registerPlugin(SplitText)

const initialLoad = inject<Ref<boolean>>('initialLoad', ref(false))
const delay = computed(() => initialLoad.value ? 0.5 : 0.2)

const headlineRef = ref<{ gsapText: () => gsap.core.Timeline } | null>(null)
const heroImageRef = ref<HTMLImageElement | null>(null)

function gsapImage() {
  const tl = gsap.timeline()
  tl.fromTo(
    heroImageRef.value,
    { y: 40, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power2.out' },
  )
  return tl
}

onMounted(async () => {
  await document.fonts.ready

  if (headlineRef.value) {
    const masterTimeline = gsap.timeline({
      delay: delay.value,
    })

    const textAnimation = headlineRef.value.gsapText()

    masterTimeline
      .add(textAnimation)
      .add(gsapImage(), '<0.1')
  }
})
</script>

<template>
  <div class="hero">
    <HomeHeroHeadline ref="headlineRef" />
    <div class="mt-6">
      <!-- <img
        ref="heroImageRef"
        class="w-full h-auto block rounded-lg invisible opacity-0"
        src="/img/hero.webp"
        alt="Jack at computer"
        loading="eager"
        width="492"
        height="358"
      > -->
      <NuxtImg
        ref="heroImageRef"
        class="w-full h-auto block rounded-lg"
        src="/img/hero2.gif"
        alt="Jack at computer"
        loading="eager"
        width="492"
        height="358"
      />
    </div>
  </div>
</template>
