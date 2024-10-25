<template>
  <main>
    <Hero :isFromMobileMenu="isFromMobileMenu" />
    <Work />
  </main>
</template>

<script setup>
const props = defineProps(['isFromMobileMenu']);
</script>

<style scoped></style>
