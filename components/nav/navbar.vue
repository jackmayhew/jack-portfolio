<template>
  <header class="sticky top-0 bg-light-bg dark:bg-dark-bg z-10">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold text-green">Jacko</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/now">Now</NuxtLink></li>
        <li class="w-6 h-6">
          <button @click="toggleColorMode">
            <ClientOnly>
              <div class="w-6 h-6">
                <Icon
                  :name="colorMode.value === 'dark' ? 'uil:moon' : 'uil:sun'"
                  class="w-full h-full"
                />
              </div>
            </ClientOnly>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style>
.router-link-exact-active {
  color: green;
}
</style>
