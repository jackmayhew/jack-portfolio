<template>
  <main>
    <Hero :gsapDelay="gsapDelay" />
    <Work />
  </main>
</template>

<script setup>
defineProps({
  gsapDelay: Number,
});
</script>