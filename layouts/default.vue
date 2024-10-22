<template>
  <div class="mx-auto max-w-screen-md wrapper bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
    <Navbar />
    <Transition name="content" mode="out-in">
      <div :key="$route.fullPath" class="px-6 mt-6 sm:mt-12">
        <NuxtPage />
        <Footer />
      </div>
    </Transition>
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
  script: [
    {
      src: "/SplitText.js",
      defer: true,
    },
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

.content-enter-active {
  transition: all 0.3s ease-out;
}

.content-leave-active {
  transition: all 0.15s ease-out;
}

.content-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.content-leave-to {
  opacity: 0;
}


.dark-mode body {
  background-color: #111;
}

.locked {
  overflow: hidden !important;
}
</style>