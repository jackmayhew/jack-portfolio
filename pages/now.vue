<template>
  <main class="px-8 md:px-4 mt-6 sm:mt-12">
    <h1 class="text-3xl sm:text-5xl font-semibold">Now</h1>
    <h2 class="text-xl sm:text-2xl">What's Jack up to?</h2>
    <div class="w-full max-w-3xl mx-auto">
      <div class="my-6">
        <div v-for="(event, index) in events" :key="index" class="relative pl-6 sm:pl-8 py-6 group">
          <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
            <div class="text-xl font-bold">
              <time :datetime="event.datetime">{{ event.date }}</time>
            </div>
          </div>
          <div>
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
