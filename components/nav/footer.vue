<template>
  <footer class="footer mt-24 sm:mt-32 rounded-lg">
    <div class="pt-4 pb-12 md:py-8 mx-auto w-full max-w-screen-xl">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://jackmayhew.com/" class="mb-4 sm:mb-0 flex items-center space-x-3 rtl:space-x-reverse">
          <span class="logo self-center text-4xl font-semibold whitespace-nowrap select-none	">Jack</span>
        </a>
        <ul class="mb-6 sm:mb-0 flex flex-wrap items-center text-sm font-medium">
          <li v-for="link in navigationLinks" :key="link.path">
            <NuxtLink class="mr-4 sm:ml-6 sm:mr-0 hover:underline" :to="link.path">
              {{ link.name }}
            </NuxtLink>
          </li>
          <li>
            <a href="https://github.com/jackmayhew" target="_blank" rel="noopener noreferrer" class="mr-4 sm:ml-6 sm:mr-0 hover:underline">
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 lg:my-8 sm:mx-auto" />
      <span class="block text-sm text-gray-500 dark:text-gray-400">© {{ new Date().getFullYear() }}
        <a href="https://jackmayhew.com/" class="hover:underline">Jack</a>. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script setup>
const navigationLinks = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/now', name: 'Now' },
  { path: '/contact', name: 'Contact' }
];
</script>