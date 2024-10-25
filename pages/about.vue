<template>
  <main>
    <h1 class="text-4xl sm:text-5xl">About Jack</h1>
    <h2 class="mt-2 text-xl sm:text-3xl">Some text here...</h2>
    <div class="w-full max-w-3xl mx-auto">
      <div class="mt-6 text-xl">
        <p v-for="section in aboutContent" :key="section.id" class="mt-5">
          {{ section.text }}
        </p>
        <p class="m1t-2">
          Jackmayhew5@gmail.com
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import aboutContent from '~/data/about';
</script>

<style scoped></style>