<script setup lang="ts">
// internal navigation button component using NuxtLink
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
  <NuxtLink
    :to="url"
    :style="{ width }"
    class="relative top-0.5 h-12 rounded-md border-2 border-orange-dark bg-orange-light text-center no-underline disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-900"
  >
    <span class="relative h-full flex items-center justify-center gap-1.5 mx-[-2px] block -translate-y-0.5 select-none rounded-md border-2 border-orange-dark bg-btn-surface px-4 py-1 text-center text-base font-bold text-gray-900 hover:-translate-y-1 hover:text-gray-900 active:-translate-y-[2px] active:transition-all active:duration-100 group-disabled:hover:!-translate-y-0.5 dark:border-neutral-600 dark:bg-neutral-900 dark:text-dark-text dark:hover:text-dark-text">
      {{ text }}
      <Icon v-if="iconName" :name="iconName" :size="iconSize" class="flex-shrink-0" />
    </span>
  </NuxtLink>
</template>
