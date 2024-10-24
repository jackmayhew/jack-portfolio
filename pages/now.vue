<template>
  <main>
    <h1 class="text-4xl sm:text-5xl">Now</h1>
    <h2 class="mt-2 text-xl sm:text-3xl">What's Jack up to?</h2>
    <div class="w-full max-w-3xl mx-auto">
      <div class="my-6">
        <div v-for="(event, index) in events" :key="index" class="py-6 relative group">
          <div
            class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute  sm:after:left-0 after:w-2 after:h-2 after:bg-slate-300 after:border-4 after:box-content after:border-light-bg dark:after:border-dark-bg after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
            <div class="pl-6 sm:pl-8 text-xl font-bold">
              <time :datetime="event.datetime">{{ event.date }}</time>
            </div>
          </div>
          <div class="pl-6 sm:pl-8">
            {{ event.desc }}
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
