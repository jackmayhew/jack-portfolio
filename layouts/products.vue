<template>
  <div>
    <header>
      <NuxtLink to="/products">Products Merch</NuxtLink>
    </header>
    <div><slot /></div>
  </div>
  <footer>
    <ul>
        Footer:
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>
