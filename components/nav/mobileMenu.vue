<template>
  <div class="menu__inner js-menu-inner fixed top-0 left-0 w-full h-dvh flex items-center z-[1] rounded-[10px] overflow-hidden invisible opacity-0">
    <ul class="menu__inner-background js-menu-inner-background absolute top-0 left-0 h-full w-full list-none p-0 m-0 text-[0]">
      <li v-for="n in 5" :key="n" class="relative inline-block h-full overflow-hidden first:w-[21px] last:w-[21px] [&:nth-child(2)]:w-[calc(33.33%-14px)] [&:nth-child(3)]:w-[calc(33.33%-14px)] [&:nth-child(4)]:w-[calc(33.33%-14px)]">
        <i class="bg-white dark:bg-[#0e0e0e] absolute left-0 top-0 w-full h-full invisible opacity-0 after:content-[''] after:block after:h-full after:w-[1px] after:bg-[#F6F6F9] dark:after:bg-[#1a1a1a] after:z-[1]"></i>
      </li>
    </ul>
    <div class="menu__items-wrapper relative pl-[22px] flex h-full items-center">
      <ul class="menu__items-list js-menu-items-list">
        <li v-for="link in mobileLinks" :key="link.path" class="js-menu-item mb-2">
          <NuxtLink @click="closeMobileMenu" :to="link.path" class="text-[50px] leading-[50px] mobile-menu-link">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </div>
    <button class="menu__trigger js-menu-close absolute top-0 right-0 p-4 px-6 cursor-pointer w-20" @click="toggleMenu">
      <svg class="stroke-black dark:stroke-white fill-none transition-transform duration-500 ease-in-out hover:scale-110" viewBox="0 0 25 16">
        <path d="M2.238 7.079h2.727M2.482 9.496l-.666-2.7" />
        <path d="M23.753 5.403s-1.87 16.88-22.03 1.785" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { TimelineMax, Power4, Power1, Back } from 'gsap';

const props = defineProps({
  isOpen: Boolean,
  toggleMenu: Function,
  closeMobileMenu: Function,
  navigationLinks: Array
});

const mobileLinks = computed(() => [
{ path: '/', name: 'Home' },
  ...props.navigationLinks
]);

let timeline;

onMounted(() => {
  function initMenu() {
    const menuInner = document.querySelector('.js-menu-inner'),
      menuInnerBackgroundItems = document.querySelectorAll('.js-menu-inner-background i'),
      menuItems = document.querySelectorAll('.js-menu-items-list li'),
      menuClose = document.querySelector('.js-menu-close');

    timeline = new TimelineMax({ paused: true });

    timeline
      .to(menuInner, 1, { autoAlpha: 1, ease: Power4.easeOut }, 'start')
      .fromTo(
        menuInnerBackgroundItems,
        0.25,
        { x: '-100%', autoAlpha: 0 },
        { x: '0%', autoAlpha: 1, ease: Power1.easeOut },
        'start'
      )
      .staggerFromTo(
        menuItems,
        0.4,
        { x: -30, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, delay: 0.35, ease: Back.easeOut.config(1) },
        0.15,
        'start'
      )
      .fromTo(menuClose, 0.2, { x: -10, autoAlpha: 0 }, { x: 0, autoAlpha: 1, delay: 1, ease: Power1.easeOut }, 'start');
  }

  initMenu();
});


watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    timeline.play();
    document.querySelector('body').classList.add('locked');
  } else {
    timeline.timeScale(1.25).reverse();
    document.querySelector('body').classList.remove('locked');
  }
});
</script>

<style scoped>
.menu__trigger--close {
  visibility: hidden;
  opacity: 0;
}
</style>