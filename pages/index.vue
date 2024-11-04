<template>
  <main>
    <Hero :isFromMobileMenu="isFromMobileMenu" />
    <Work />
  </main>
</template>

<script setup>
const props = defineProps(['isFromMobileMenu']);
useHead({
  title: 'Jack Mayhew'
})
</script>

<style scoped></style>