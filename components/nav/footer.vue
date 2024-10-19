<template>
  <footer class="bg-white rounded-lg shadow m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://flowbite.com/"
          class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-black"
            >Jack</span
          >
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0"
        >
          <li>
            <NuxtLink class="hover:underline me-4 md:me-6" to="/now">Now</NuxtLink>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 sm:mx-auto lg:my-8" />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023
        <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>.
        All Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
