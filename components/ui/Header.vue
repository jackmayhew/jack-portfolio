<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div>
    <h1 class="text-5xl sm:text-6xl">
      {{ title }}
    </h1>
    <h2 class="mt-2 text-xl sm:text-2xl">
      {{ subtitle }}
    </h2>
  </div>
</template>
