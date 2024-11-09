<template>
  <header ref="header" class="gsap-menu sticky top-0 bg-light-bg dark:bg-dark-bg z-10">
    <nav class="py-4 px-6 mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-lg font-semibold z-50" @click="closeMobileMenu">
        Jack
      </NuxtLink>
      <ul class="flex items-center gap-4 sm:gap-6">
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
        <li class="w-6 h-6 flex">
          <ClientOnly>
            <div :class="[colorMode.value === 'dark' ? 'dark' : 'light']" class="flex toggle">
              <button class="" title="Toggle Theme" @click="toggleColorMode">
                <ThemeToggle />
              </button>
            </div>
          </ClientOnly>
        </li>
        <li class="flex xs:hidden">
          <button class="w-6 h-6" @click="toggleMobileMenu" aria-label="open mobile menu">
            <MobileMenuOpen />
          </button>
        </li>
      </ul>
    </nav>
    <MobileMenu 
      :isOpen="isMobileMenuOpen" 
      :toggleMenu="toggleMobileMenu" 
      :closeMobileMenu="closeMobileMenu"
      :navigationLinks="navigationLinks" 
    />
  </header>
</template>

<script setup>

import { ref } from 'vue'
const emit = defineEmits(['mobile-menu-click']);
const isMobileMenuOpen = ref(false);
const colorMode = useColorMode();
const header = ref(null);

const navigationLinks = [
  { path: '/about', name: 'About' },
  { path: '/now', name: 'Now' },
  { path: '/contact', name: 'Contact' },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  if (isMobileMenuOpen.value) {
    emit('mobile-menu-click');
  }
  isMobileMenuOpen.value = false;
};

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<style scoped></style>