<template>
  <div class="wrapper mx-auto max-w-screen-md bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
    <Navbar />
    <Transition name="content" mode="out-in" :appear="isMount">
      <div :key="$route.fullPath" class="px-6 mt-6 sm:mt-12 main__content" v-if="isMount">
        <NuxtPage />
        <Footer />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const isMount = ref(false)

onMounted(() => {
  setTimeout(() => {
    isMount.value = true
  }, 10)
})

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

.light-mode,
.light-mode body {
  background-color: #FBF7F5;
}

.dark-mode,
.dark-mode body {
  background-color: #121212;
}

.locked {
  overflow: hidden !important;
}

/* @keyframes noise {
  0% {
    transform: translate3d(0, 9rem, 0)
  }

  10% {
    transform: translate3d(-1rem, -4rem, 0)
  }

  20% {
    transform: translate3d(-8rem, 2rem, 0)
  }

  30% {
    transform: translate3d(9rem, -9rem, 0)
  }

  40% {
    transform: translate3d(-2rem, 7rem, 0)
  }

  50% {
    transform: translate3d(-9rem, -4rem, 0)
  }

  60% {
    transform: translate3d(2rem, 6rem, 0)
  }

  70% {
    transform: translate3d(7rem, -8rem, 0)
  }

  80% {
    transform: translate3d(-9rem, 1rem, 0)
  }

  90% {
    transform: translate3d(6rem, -5rem, 0)
  }

  to {
    transform: translate3d(-7rem, 0, 0)
  }
}

body:before {
    top: -10rem;
    left: -10rem;
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    z-index: 9;
    content: '';
    position: fixed;
    pointer-events: none;
    background-position: 50%;
    background-image: url(/noise.png);
    pointer-events: none;
    animation: noise 1s steps(2) infinite;
} */
</style>