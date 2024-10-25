<template>
  <footer class="mt-24 sm:mt-32 rounded-lg">
    <div class="py-4 md:py-8 mx-auto w-full max-w-screen-xl">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://jman99.netlify.app/" class="mb-4 sm:mb-0 flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap">Jack</span>
        </a>
        <ul class="mb-6 sm:mb-0 flex flex-wrap items-center text-sm font-medium">
          <li>
            <NuxtLink class="me-4 md:me-6 hover:underline" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="me-4 md:me-6 hover:underline" to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="me-4 md:me-6 hover:underline" to="/contact">Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink class="me-4 md:me-6 hover:underline" to="/now">Now</NuxtLink>
          </li>
          <li>
            <a class="me-4 md:me-6 hover:underline" href="https://github.com/jackmayhew" target="_blank" rel="noopener">GitHub</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 lg:my-8 sm:mx-auto " />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024
        <a href="https://jman99.netlify.app/" class="hover:underline">Jack Mayhew</a>. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
