<script setup lang="ts">
defineProps<{
  url: string
  githubUrl?: string
}>()
</script>

<template>
  <div class="flex gap-2">
    <ButtonLinkExternal
      :url="url"
      text="Visit"
      icon-name="lucide:link"
      :icon-size="18"
      width="150px"
    />
    <ButtonLinkExternal
      v-if="githubUrl"
      :url="githubUrl"
      text="Code"
      icon-name="lucide:github"
      :icon-size="18"
      width="150px"
    />
  </div>
</template>
