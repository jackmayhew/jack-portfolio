<script setup lang="ts">
import { now } from '~/data/now'

useHead({
  title: 'Now',
})
</script>

<template>
  <main>
    <Header
      title="What's New?"
      subtitle="Updates on life and what I’m working on."
    />
    <div class="my-8">
      <TimelineItem
        v-for="(event, index) in now"
        :key="index"
        :event="event"
        class="pb-6 last:pb-0"
      />
    </div>
    <Footer />
  </main>
</template>
