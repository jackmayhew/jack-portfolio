<script setup lang="ts">
// internal navigation button component using NuxtLink

withDefaults(defineProps<{
  url: string
  text: string
  width?: string
  iconName?: string
  iconSize?: number
}>(), {
  iconSize: 20,
})
</script>

<template>
  <NuxtLink
    :to="url"
    :style="{ width }"
    class="group relative inline-flex h-12 gap-2 text-lg items-center justify-center overflow-hidden rounded-md border-2 border-neutral-300 dark:border-gray-700 bg-transparent px-6 font-medium text-neutral-600 dark:text-dark-text transition-all [box-shadow:0px_4px_0.5px_#a3a3a3] dark:[box-shadow:0px_4px_0.5px_#374151] hover:translate-y-[2px] hover:shadow-none"
  >
    {{ text }}
    <Icon v-if="iconName" :name="iconName" :size="iconSize" class="flex-shrink-0" />
  </NuxtLink>
</template>
