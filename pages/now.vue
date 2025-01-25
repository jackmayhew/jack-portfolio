<template>
  <main>
    <h1 class="text-5xl sm:text-6xl">What's New?</h1>
    <h2 class="mt-2 text-xl sm:text-2xl">An uncurated collection of updates on life and what I’m working on. Feel free to explore.</h2>
      <div class="my-8">
        <div v-for="(event, index) in nowContent" :key="index" class="pb-12 relative group">
          <div
            class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute sm:before:left-0 before:h-full before:px-px before:bg-neutral-300 dark:before:bg-gray-700 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute sm:after:left-0 after:w-3 after:h-3 after:bg-neutral-300 dark:after:bg-gray-700 after:mt-[-4.5px] after:border-8 after:box-content after:border-light-bg dark:after:border-dark-bg after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
            <div class="pl-6 sm:pl-8 text-xl font-bold text-gray-500">
              <time :datetime="event.formateDate" class="font-normal">{{ event.displayDate }}</time>
            </div>
          </div>
          <div class="pl-6 sm:pl-8 text-lg">
            <p class="inline">
              {{ event.desc }}
            </p>
            <p v-if="event.website" class="inline">
              If you're curious, you can check out my <a href="https://jacko-three.vercel.app/" target="_blank" rel="noopener" class="underline">previous&nbsp;website,</a>
              or explore the code for this website on my <a href="https://github.com/jackmayhew/" target="_blank" rel="noopener" class="underline">GitHub.</a>
            </p>
          </div>
        </div>
      </div>
  </main>
</template>

<script setup>
import { nowContent } from "@/data/now";
useHead({
  title: 'Now'
})
</script>