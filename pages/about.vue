<template>
  <main>
    <h1 class="text-5xl sm:text-6xl">About Jack</h1>
    <h2 class="mt-2 text-xl sm:text-2xl">A brief reflection on my coding journey and personal pursuits.</h2>
    <div class="w-full max-w-3xl mx-auto">
      <div class="mt-8 text-lg">
        <p v-for="section in aboutContent" :key="section.id" class="mt-5">
          {{ section.text }}
          <a v-if="section.link" class="underline" href="mailto:jackmayhew5@gmail.com"> {{ section.link }}</a>
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import aboutContent from '~/data/about';
</script>

<style scoped></style>