<template>
  <header class="sticky top-0 bg-white z-10">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold text-green">Jacko</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/now">Now</NuxtLink></li>
        <li>
          <button><Icon name="uil:sun" size="1.5em" /></button>
        </li>
      </ul>
    </nav>
  </header>
  <!-- <h1>Color mode: {{ $colorMode.value }}</h1>
  <select v-model="$colorMode.preference">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="sepia">Sepia</option>
  </select> -->
</template>

<script setup>
const colorMode = useColorMode();
console.log(colorMode.preference);
</script>

<style>
.router-link-exact-active {
  color: green;
}
nav {
  color: black;
}
.dark-mode body {
  background-color: #091a28 !important;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
