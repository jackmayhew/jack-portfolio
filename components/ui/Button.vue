<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  width?: string
  iconName?: string
  iconSize?: number
}>(), {
  iconSize: 20,
})
</script>

<template>
  <button
    :style="{ width }"
    class="group relative inline-flex h-12 gap-2 items-center justify-center overflow-hidden rounded-md border-2 border-neutral-300 bg-transparent px-6 font-medium text-neutral-600 transition-all [box-shadow:0px_4px_0.5px_#a3a3a3] hover:translate-y-[2px] hover:shadow-none"
  >
    {{ text }}
    <Icon v-if="iconName" :name="iconName" :size="iconSize" class="flex-shrink-0" />
  </button>
</template>
