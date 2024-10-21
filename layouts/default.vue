<template>
  <div class="mx-auto max-w-screen-md wrapper bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
    <Navbar />
    <div class="px-6 mt-6 sm:mt-12">
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Jack",
  meta: [{ name: "description", content: "My amazing site." }],
  link: [
    {
      rel: "prefetch",
      href: "/gifer.gif"
    }
  ],
  bodyAttrs: {
    class: "test",
  },
});
</script>

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
