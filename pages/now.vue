<script setup lang="ts">
import { now } from '~/data/now'

useHead({
  title: 'Now',
})
</script>

<template>
  <main>
    <h1 class="text-5xl sm:text-6xl">
      What's New?
    </h1>
    <h2 class="mt-2 text-xl sm:text-2xl">
      Updates on life and what I’m working on.
    </h2>
    <div class="my-8">
      <TimelineItem
        v-for="(event, index) in now"
        :key="index"
        :event="event"
      />
    </div>
    <Footer />
  </main>
</template>
