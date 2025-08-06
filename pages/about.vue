<script setup lang="ts">
import { about } from '~/data/about'

useHead({
  title: 'About',
})
</script>

<template>
  <main>
    <h1 class="text-5xl sm:text-6xl">
      About Jack
    </h1>
    <h2 class="mt-2 text-xl sm:text-2xl">
      A bit about me and how I got into coding.
    </h2>
    <div class="w-full max-w-3xl mx-auto">
      <div class="mt-8 text-lg">
        <p v-for="(section, index) in about" :key="index" class="mt-5" v-html="section.text" />
      </div>
    </div>
    <Footer />
  </main>
</template>
