<template>
  <main>
    <h1 class="text-4xl sm:text-5xl">Now</h1>
    <h2 class="mt-2 text-xl sm:text-3xl">An uncurated collection of updates on life and what I’m working on. Feel free to explore.</h2>
    <div class="w-full max-w-3xl mx-auto">
      <div class="my-6">
        <div v-for="(event, index) in events" :key="index" class="py-6 relative group">
          <div
            class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute sm:before:left-0 before:h-full before:px-px before:bg-neutral-300 dark:before:bg-gray-700 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute  sm:after:left-0 after:w-3 after:h-3 after:bg-neutral-300 dark:after:bg-gray-700 after:mt-[-4px]  after:border-8 after:box-content after:border-light-bg dark:after:border-dark-bg after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
            <div class="pl-6 sm:pl-8 text-xl font-bold text-grey-text">
              <time :datetime="event.formateDate">{{ event.displayDate }}</time>
            </div>
          </div>
          <div class="pl-6 sm:pl-8 text-lg">
            <p class="inline">
              {{ event.desc }}
            </p>
            <span v-if="event.url">
              <a class="underline" :href="event.url" target="_blank" rel="noopener">previous website,</a>
              or explore the code for this website on my <a class="underline" :href="event.github" target="_blank" rel="noopener">GitHub.</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { events } from "@/data/now";
</script>

<style scoped></style>
