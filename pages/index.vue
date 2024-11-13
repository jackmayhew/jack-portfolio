<template>
  <main>
    <Hero :isFromMobileMenu="isFromMobileMenu" />
    <Work :mountWork="mountWork" />
  </main>
</template>

<script setup>
const props = defineProps(['isFromMobileMenu', 'mountWork']);
</script>

<style scoped></style>