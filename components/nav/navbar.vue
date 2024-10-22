<template>
  <header class="sticky top-0 bg-light-bg dark:bg-dark-bg z-10">
    <nav class="py-4 px-6 flex justify-between items-center">
      <NuxtLink @click="menuOpen = false" to="/" class="font-bold text-green z-50">Jacko</NuxtLink>
      <ul class="flex items-center gap-4">
        <li class="hidden xs:block">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li class="hidden xs:block">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li class="hidden xs:block">
          <NuxtLink to="/now">Now</NuxtLink>
        </li>
        <li class="w-6 h-6">
          <button @click="toggleColorMode">
            <ClientOnly>
              <div class="w-6 h-6">
                <Icon :name="colorMode.value === 'dark' ? 'uil:moon' : 'uil:sun'"
                  class="w-full h-full text-light-text dark:text-dark-text" />
              </div>
            </ClientOnly>
          </button>
        </li>
        <li class="flex items-center block xs:hidden z-50">
          <button v-show="burgerIcon" @click="menuOpen = true" class="burger" :disabled="isAnimating"
            aria-label="Open menu">
            <svg class="fill-black dark:fill-white" viewbox="0 0 19 12" aria-label="opem menu button">
              <path
                d="m.742 3.26.485.874c.043-.024.13-.07.26-.136.22-.11.476-.233.765-.361A22.92 22.92 0 0 1 4.997 2.62c4.476-1.34 8.75-1.219 12.241 1.1.18.12.357.245.531.376l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008.375 9.443.246 4.71 1.663c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z">
              </path>
              <path
                d="m.742 6.748.485.874c.043-.023.13-.07.26-.135.22-.111.476-.233.765-.362A22.92 22.92 0 0 1 4.997 6.11c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.245.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 3.864 9.443 3.735 4.71 5.152c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z">
              </path>
              <path
                d="m.742 10.237.485.874c.043-.024.13-.07.26-.136.22-.11.476-.232.765-.36a22.92 22.92 0 0 1 2.745-1.016c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.244.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 7.353 9.443 7.224 4.71 8.64c-1.037.31-2 .674-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z">
              </path>
            </svg>
          </button>

          <button v-show="!burgerIcon" @click="menuOpen = false" :disabled="isAnimating"
            class="button-close unbutton stroke-black dark:stroke-white" aria-label="close menu button">
            <svg class="closeburg " viewbox="0 0 25 16">
              <path d="M2.238 7.079h2.727M2.482 9.496l-.666-2.7"></path>
              <path d="M23.753 5.403s-1.87 16.88-22.03 1.785"></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
    <MobileMenu 
      :isOpen="menuOpen" 
      @update-burger-icon="updateBurgerIcon" 
      @update-animating-state="updateAnimatingState"
      @close-menu="menuOpen = false" 
      />
  </header>
</template>

<script setup>
import { ref } from 'vue';

const colorMode = useColorMode();
const menuOpen = ref(false);
const burgerIcon = ref(true);
const isAnimating = ref(false);

const updateAnimatingState = (state) => {
  isAnimating.value = state;
};

const updateBurgerIcon = (newState) => {
  burgerIcon.value = newState;
};

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style>
.router-link-exact-active {
  color: green;
}

.burger {
  width: 25px;
  height: 25px;
}

.button-close {
  fill: none;
  width: 25px;
  height: 25px;
}

.button-close svg,
.burger svg {
  transition: transform 0.5s ease;
}

.button-close:hover svg,
.burger:hover svg {
  transform: scale(1.1);
}
</style>
