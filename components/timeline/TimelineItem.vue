<script setup lang="ts">
import type { TimelineEvent } from '~/types/now/timeline-event.types'

defineProps<{
  event: TimelineEvent
}>()
</script>

<template>
  <div class="relative group">
    <div
      class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-[.3rem] before:h-full before:px-px before:bg-neutral-300 dark:before:bg-gray-700 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-[.3rem] after:w-3 after:h-3 after:bg-neutral-300 dark:after:bg-gray-700 after:mt-[-4.5px] after:border-8 after:box-content after:border-light-bg dark:after:border-dark-bg after:rounded-full after:-translate-x-1/2 after:translate-y-1.5"
    >
      <div class="pl-6 sm:pl-8 text-xl font-bold text-gray-500">
        <time :datetime="event.formateDate" class="font-normal">
          {{ event.displayDate }}
        </time>
      </div>
    </div>
    <div class="pl-6 sm:pl-8 text-lg">
      <p>
        {{ event.desc }}
        <a
          v-if="event.link"
          :href="event.link.url"
          target="_blank"
          rel="noopener"
          class="json-link"
        >
          {{ event.link.text }}
        </a>
      </p>
    </div>
  </div>
</template>
