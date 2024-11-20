<template>
  <header class="gsap-menu px-6 sticky top-0 bg-light-bg dark:bg-dark-bg z-50">
    <nav class="py-4 mx-auto relative flex justify-between items-center naver">
      <NuxtLink to="/" class="text-lg font-semibold z-50">
        Jack
      </NuxtLink>
      <ul class="flex items-center gap-4 sm:gap-6 ">
        <li v-for="link in navigationLinks" :key="link.path" class="hidden xs:block">
          <NuxtLink :to="link.path" class="link text-lg">
            {{ link.name }}
          </NuxtLink>
        </li>
        <li class="hidden xs:block">
          <a href="https://github.com/jackmayhew" target="_blank" rel="noopener noreferrer" class="link text-lg">
            GitHub
          </a>
        </li>
        <li class="w-6 h-6 flex z-50">
          <ClientOnly>
            <div :class="[colorMode.value === 'dark' ? 'dark' : 'light']" class="flex toggle">
              <button class="ignore-click" title="Toggle Theme" @click="toggleColorMode">
                <ThemeToggle />
              </button>
            </div>
          </ClientOnly>
        </li>
        <li class="flex xs:hidden">
          <MobileMenu />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const colorMode = useColorMode()

const navigationLinks = [
  { path: '/about', name: 'About' },
  { path: '/now', name: 'Now' },
  { path: '/contact', name: 'Contact' },
];

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<style scoped></style>