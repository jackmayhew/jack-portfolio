<template>
  <div class="menu__inner js-menu-inner">
    <ul class="menu__inner-background js-menu-inner-background">
      <li><i></i></li>
      <li><i></i></li>
      <li><i></i></li>
      <li><i></i></li>
      <li><i></i></li>
    </ul>
    <div class="menu__items-wrapper">
      <ul class="menu__items-list js-menu-items-list">
        <li v-for="link in navigationLinks" :key="link.path" class="js-menu-item">
          <NuxtLink @click="toggleMenu" :to="link.path">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </div>
    <button class="menu__trigger js-menu-close" @click="toggleMenu">Close</button>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { TimelineMax, Power4, Power1, Back } from 'gsap';

const props = defineProps({
  isOpen: Boolean,
  toggleMenu: Function
});

const navigationLinks = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/now', name: 'Now' }
];

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
.menu__trigger {
  position: absolute;
  top: 24px;
  right: 26px;
  cursor: pointer;
}


.menu__trigger--close {
  visibility: hidden;
  opacity: 0;
}


.menu__inner {
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
}

.menu__inner-background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 0;
}

.menu__inner-background li {
  position: relative;
  display: inline-block;
  height: 100%;
  overflow: hidden;
}

.menu__inner-background li:first-child,
.menu__inner-background li:last-child {
  width: 21px;
}

.menu__inner-background li:nth-child(2),
.menu__inner-background li:nth-child(3),
.menu__inner-background li:nth-child(4) {
  width: calc(33.33% - 14px);
}



.menu__inner-background li i {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
}

.menu__inner-background li i:after {
  content: "";
  display: block;
  height: 100%;
  width: 1px;
  background: #edeff5;
  z-index: 2;
}

.menu__items-wrapper {
  position: relative;
  padding-left: 22px;
}


.menu__items-list li {
  margin-bottom: 8px;
}

.menu__items-list li a {
  font-size: 50px;
  line-height: 50px;
}
</style>