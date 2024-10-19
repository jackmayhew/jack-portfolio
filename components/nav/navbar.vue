<template>
    <header class="sticky top-0	bg-white z-10">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-green" >Jacko</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/now">Now</NuxtLink></li>
          <li><button><Icon name="uil:sun" size="1.5em" /></button></li>
        </ul>
      </nav>
    </header>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
  color: green;
}
nav {
  color: black;
}
</style>