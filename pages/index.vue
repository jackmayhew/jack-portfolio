<template>
  <main>
    <Hero :isFromMobileMenu="isFromMobileMenu" />
    <div class="mt-6">
      <NuxtImg class="hero__image w-full rounded-3xl" src="/hero.gif" rel="preload" />
    </div>
    <Work />
  </main>
</template>

<script setup>
const props = defineProps(['isFromMobileMenu']);
</script>

<style scoped></style>