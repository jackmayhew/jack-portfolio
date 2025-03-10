<template>
  <header class="navbar px-6">
    <nav class="py-4 mx-auto relative flex justify-between items-center">
      <NuxtLink to="/" class="logo nav-logo text-4xl font-semibold z-50 select-none">
        Jack
      </NuxtLink>
      <ul class="flex items-center gap-2 sm:gap-5 sm:gap-6">
        <li v-for="link in navigationLinks" :key="link.path" class="hidden sm:block">
          <NuxtLink :to="link.path" class="link text-lg z-50">
            {{ link.name }}
          </NuxtLink>
        </li>
        <li class="hidden sm:block">
          <a href="https://github.com/jackmayhew" target="_blank" rel="noopener noreferrer" class="link text-lg">
            GitHub
          </a>
        </li>
        <li class="w-6 h-6 flex z-50">
          <ClientOnly>
            <div :class="colorMode.value === 'dark' ? 'dark' : 'light'" class="flex toggle">
              <button class="ignore-click" title="Toggle Theme" @click="toggleColorMode">
                <ThemeToggle />
              </button>
            </div>
          </ClientOnly>
        </li>
        <li class="flex sm:hidden">
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

<style scoped>
.link {
  position: relative;
  height: 1.125rem;
  line-height: 1.1rem;
  display: block;
}

.link::before,
.link::after {
  position: absolute;
  width: 100%;
  height: 2px;
  background: currentColor;
  top: 100%;
  left: 0;
  pointer-events: none;
}

.link::before {
  content: "";
  transform-origin: 100% 50%;
  transform: scale3d(0, 1, 1);
  transition: transform 0.4s;
}

.link:hover::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}

.router-link-active::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}

.disabled {
  pointer-events: none;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  right: 0;
  left: 0;
  pointer-events: auto !important;
}
</style>