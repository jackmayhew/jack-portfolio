<template>
  <div class="wrapper mx-auto max-w-screen-md bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
    <Navbar @mobile-menu-click="setMobileTransition" />
    <Transition name="content" mode="out-in" :appear="isMount">
      <div :key="$route.fullPath" class="px-6 mt-6 sm:mt-12 main__content" v-if="isMount" :data-from-mobile="isFromMobileMenu">
        <NuxtPage :isFromMobileMenu="isFromMobileMenu" />
        <Footer />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'nuxt/app'

const isMount = ref(false)
const router = useRouter()
const isFromMobileMenu = ref(false)

const setMobileTransition = () => {
  isFromMobileMenu.value = true
}

router.afterEach(() => {
  setTimeout(() => {
    isFromMobileMenu.value = false
  }, 1100)
})

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

@media only screen and (max-width: 540px) {
  .content-enter-active[data-from-mobile="true"] {
    transition: all 0.3s ease-out .75s !important;
  }
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
</style>