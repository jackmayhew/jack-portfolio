<script setup lang="ts">
import { about } from '~/data/about'

useHead({
  title: 'About',
})
</script>

<template>
  <main>
    <Header
      title="About Jack"
      subtitle="A bit about me and how I got into coding."
    />
    <div class="w-full max-w-3xl mx-auto">
      <div class="mt-8 text-lg">
        <div
          v-for="(section, index) in about"
          :key="index"
          class="mt-6"
        >
          <h3 class="text-xl text-gray-500 font-semibold">
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
