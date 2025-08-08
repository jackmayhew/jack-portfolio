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
        <div
          v-for="(section, index) in about"
          :key="index"
          class="mt-6"
        >
          <h3 class="text-xl dark:text-white underline font-semibold mb-1">
            {{ section.headline }}
          </h3>
          <p>
            {{ section.text }}
            <a
              v-if="section.link"
              class="json-link"
              :href="section.link.url"
            >
              {{ section.link.text }}
            </a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>
