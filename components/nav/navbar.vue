<template>
  <header class="sticky top-0 bg-light-bg dark:bg-dark-bg z-10">
    <nav class="py-4 px-6 mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-lg font-bold z-50" @click="closeMobileMenu">
        Jack
      </NuxtLink>
      <ul class="flex items-center gap-4 sm:gap-6">
        <li v-for="link in navigationLinks" :key="link.path" class="hidden xs:block">
          <NuxtLink :to="link.path" class="link text-lg">
            {{ link.name }}
          </NuxtLink>
        </li>
        <li class="w-6 h-6 flex">
          <ClientOnly>
            <div :class="[colorMode.value === 'dark' ? 'dark' : 'light']" class="flex toggle">
              <button class="" title="Toggle Theme" @click="toggleColorMode">
                <svg class="w-full h-full stroke-light-text dark:stroke-dark-text" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <!-- Moon -->
                  <path pathLength="1" class="moon-icon" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  <!-- Sun -->
                  <circle pathLength="1" class="sun-icon" cx="12" cy="12" r="5"></circle>
                  <line pathLength="1" class="sun-icon" x1="12" y1="1" x2="12" y2="3"></line>
                  <line pathLength="1" class="sun-icon" x1="12" y1="21" x2="12" y2="23"></line>
                  <line pathLength="1" class="sun-icon" x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line pathLength="1" class="sun-icon" x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line pathLength="1" class="sun-icon" x1="1" y1="12" x2="3" y2="12"></line>
                  <line pathLength="1" class="sun-icon" x1="21" y1="12" x2="23" y2="12"></line>
                  <line pathLength="1" class="sun-icon" x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line pathLength="1" class="sun-icon" x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </button>
            </div>
          </ClientOnly>
        </li>
        <li class="flex xs:hidden">
          <button class="w-6 h-6" @click="toggleMobileMenu">
            <svg
              class="fill-text-light dark:fill-dark-text transition-transform duration-500 ease-in-out hover:scale-110"
              viewBox="0 0 19 12">
              <path
                d="m.742 3.26.485.874c.043-.024.13-.07.26-.136.22-.11.476-.233.765-.361A22.92 22.92 0 0 1 4.997 2.62c4.476-1.34 8.75-1.219 12.241 1.1.18.12.357.245.531.376l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008.375 9.443.246 4.71 1.663c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
              <path
                d="m.742 6.748.485.874c.043-.023.13-.07.26-.135.22-.111.476-.233.765-.362A22.92 22.92 0 0 1 4.997 6.11c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.245.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 3.864 9.443 3.735 4.71 5.152c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
              <path
                d="m.742 10.237.485.874c.043-.024.13-.07.26-.136.22-.11.476-.232.765-.36a22.92 22.92 0 0 1 2.745-1.016c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.244.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 7.353 9.443 7.224 4.71 8.64c-1.037.31-2 .674-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
    <MobileMenu :isOpen="isMobileMenuOpen" :toggleMenu="toggleMobileMenu" :closeMobileMenu="closeMobileMenu"
      :navigationLinks="navigationLinks" />
  </header>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['mobile-menu-click']);
const isMobileMenuOpen = ref(false);
const colorMode = useColorMode();

const navigationLinks = [
  { path: '/about', name: 'About' },
  { path: '/now', name: 'Now' },
  { path: '/contact', name: 'Contact' }
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

<style>
.moon-icon {
  stroke-dasharray: 1px 1px;
  opacity: 1;
}

.sun-icon {
  stroke-dasharray: 1px 1px;
  opacity: 1;
}

.toggle:not(.dark) .moon-icon {
  stroke-dasharray: 0px 1px;
  opacity: 0;
  transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
}

.toggle:not(.dark) .sun-icon {
  stroke-dasharray: 1px 1px;
  opacity: 1;
  transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
}


.toggle.dark .moon-icon {
  stroke-dasharray: 1px 1px;
  opacity: 1;
  transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
}

.toggle.dark .sun-icon {
  stroke-dasharray: 0px 1px;
  opacity: 0;
  transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
}
</style>