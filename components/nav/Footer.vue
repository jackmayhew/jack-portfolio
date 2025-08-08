<script setup lang="ts">
const { navigationLinks } = useNavLinks()
</script>

<template>
  <footer class="footer mt-24 sm:mt-32 rounded-lg">
    <div class="pt-4 pb-12 md:py-8 mx-auto w-full max-w-screen-xl">
      <div class="sm:flex sm:items-center sm:justify-between">
        <NuxtLink to="/" class="mb-4 sm:mb-0 flex items-center space-x-3 rtl:space-x-reverse">
          <span class="logo self-center text-4xl font-semibold whitespace-nowrap select-none">Jack</span>
        </NuxtLink>
        <ul class="mb-6 sm:mb-0 flex flex-wrap items-center text-sm font-medium">
          <li v-for="link in navigationLinks" :key="link.path">
            <a
              v-if="link.external"
              :href="link.path"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-4 sm:ml-6 sm:mr-0 hover:underline"
            >
              {{ link.name }}
            </a>
            <NuxtLink v-else :to="link.path" class="mr-4 sm:ml-6 sm:mr-0 hover:underline">
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <hr class="my-4 sm:mx-auto">
      <span class="block text-sm text-gray-500 dark:text-neutral-400">© {{ new Date().getFullYear() }}
        <NuxtLink to="/" class="hover:underline">Jack</NuxtLink>. All Rights Reserved.</span>
    </div>
  </footer>
</template>
