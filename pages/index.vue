<script setup lang="ts">
defineProps<{
  gsapDelay: number
}>()
</script>

<template>
  <main>
    <HomeHero :gsap-delay="gsapDelay" />
    <WorkSection />
    <Footer />
  </main>
</template>
