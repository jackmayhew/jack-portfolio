<template>
  <header class="sticky top-0 bg-light-bg dark:bg-dark-bg z-10">
    <nav class="py-4 px-6 container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-lg font-bold z-50" :class="{ 'disabled__link': isAnimating }"
        @click="menuOpen = false">
        Jacko
      </NuxtLink>
      <ul class="flex items-center gap-4 sm:gap-6">
        <li v-for="link in navigationLinks" :key="link.path" class="hidden xs:block">
          <NuxtLink :to="link.path" class="text-lg">
            {{ link.name }}
          </NuxtLink>
        </li>
        <li class="flex">
          <button @click="toggleColorMode" class="w-6 h-6 hover:opacity-80 transition-opacity"
            aria-label="Toggle theme">
            <ClientOnly>
              <Icon v-if="colorMode.value === 'dark'" name="uil:moon" class="w-full h-full text-dark-text" />
              <Icon v-if="colorMode.value === 'light'" name="uil:sun" class="w-full h-full text-light-text" />
            </ClientOnly>
          </button>
        </li>
        <!-- <li class="flex items-center block xs:hidden z-50">
          <button class="w-6 h-6" :aria-label="menuOpen ? 'Close menu' : 'Open menu'" :disabled="isAnimating"
            @click="toggleMenu">
            <template v-if="burgerIcon">
              <svg class="fill-black dark:fill-white transition-transform duration-500 ease-in-out hover:scale-110"
                viewBox="0 0 19 12">
                <path
                  d="m.742 3.26.485.874c.043-.024.13-.07.26-.136.22-.11.476-.233.765-.361A22.92 22.92 0 0 1 4.997 2.62c4.476-1.34 8.75-1.219 12.241 1.1.18.12.357.245.531.376l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008.375 9.443.246 4.71 1.663c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
                <path
                  d="m.742 6.748.485.874c.043-.023.13-.07.26-.135.22-.111.476-.233.765-.362A22.92 22.92 0 0 1 4.997 6.11c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.245.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 3.864 9.443 3.735 4.71 5.152c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
                <path
                  d="m.742 10.237.485.874c.043-.024.13-.07.26-.136.22-.11.476-.232.765-.36a22.92 22.92 0 0 1 2.745-1.016c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.244.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 7.353 9.443 7.224 4.71 8.64c-1.037.31-2 .674-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
              </svg>
            </template>
<template v-else>
              <svg
                class="stroke-black dark:stroke-white fill-none transition-transform duration-500 ease-in-out hover:scale-110"
                viewBox="0 0 25 16">
                <path d="M2.238 7.079h2.727M2.482 9.496l-.666-2.7" />
                <path d="M23.753 5.403s-1.87 16.88-22.03 1.785" />
              </svg>
            </template>
</button>
</li> -->
        <li>
          <button @click="toggleMobileMenu">Menu</button>

        </li>
      </ul>
    </nav>
    <!-- <MobileMenu :is-open="menuOpen" :is-animating="isAnimating" @update-burger-icon="updateBurgerIcon"
      @update-animating-state="updateAnimatingState" @close-menu="menuOpen = false" /> -->

    <Ok :isOpen="isMobileMenuOpen" :toggleMenu="toggleMobileMenu" />
  </header>
</template>

<script setup>
import { ref } from 'vue'

const navigationLinks = [
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/now', name: 'Now' }
]


const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};




const colorMode = useColorMode()
const menuOpen = ref(false)
const burgerIcon = ref(true)
const isAnimating = ref(false)

const updateAnimatingState = (state) => {
  isAnimating.value = state
}

const updateBurgerIcon = (newState) => {
  burgerIcon.value = newState
}

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style>
.router-link-exact-active {
  color: green;
}

.disabled__link {
  pointer-events: none;
}
</style>