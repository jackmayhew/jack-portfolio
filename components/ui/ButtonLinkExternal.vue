<script setup lang="ts">
// external navigation button component

// TODO: consider merging the button components into a single component with conditional rendering

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
  <a
    :href="url"
    target="_blank"
    rel="noopener"
    :style="{ width }"
    class="group relative inline-flex h-12 gap-2 text-lg items-center justify-center overflow-hidden rounded-md border-2 border-neutral-300 dark:border-gray-700 bg-transparent px-6 font-medium text-neutral-600 dark:text-dark-text transition-all [box-shadow:0px_4px_0.5px_#d4d4d4] dark:[box-shadow:0px_4px_0.5px_#374151] hover:translate-y-[2px] hover:shadow-none"
  >
    {{ text }}
    <Icon v-if="iconName" :name="iconName" :size="iconSize" class="flex-shrink-0" />
  </a>
</template>
