<template>
  <div class="mx-auto max-w-screen-md wrapper bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
    <Navbar />
    <NuxtPage class="page" />
    <Footer class="page" />
  </div>
</template>

<script setup></script>

<style>
.page-enter-active {
  transition: all 0.3s ease-out;
}

.page-leave-active {
  transition: all 0.15s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.page-leave-to {
  opacity: 0;
}

.page {
  position: relative;
  min-height: 100%;
}

.dark-mode body {
  background-color: #111;
}

</style>
