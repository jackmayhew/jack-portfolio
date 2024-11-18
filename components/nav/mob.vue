<template>
    <div class="nav-menu">
        <div ref="wrapper" class="nav-wrapper" :class="isNavOpened || waitToggle ? '' : 'menu-disabled'">
            <div ref="wrapperInner" class="nav-wrapper-inner">
                <div ref="background" class="nav-background"></div>
                <ul ref="wrapperList">
                    <li v-for="(link, index) in navigationLinks" :key="index" class="js-item menu-item">
                        <NuxtLink :to="link.path" @click="toggleNav" :class="waitToggle ? 'disable' : 'menu-active'">
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                    <li class="js-item menu-item">
                        <a href="https://github.com/jackmayhew" target="_blank" rel="noopener">
                            GitHub
                        </a>
                    </li>
                </ul>
                <div class="wrap-footer">
                    <div class="js-item wrap-footer-icons">
                        <a href="mailto:jackmayhew5@gmail.com">
                            <Icon name="tabler:mail" size="36" />
                        </a>
                        <a href="https://github.com/jackmayhew" target="_blank" rel="noopener">
                            <Icon name="tabler:brand-github" size="36" />
                        </a>
                        <a href="https://www.linkedin.com/in/jack-mayhew-610b042b2/" target="_blank" rel="noopener">
                            <Icon name="tabler:brand-linkedin" size="36" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
        <button class="ham flex items-center h-6 relative justify-center" @click="toggleNav"
            aria-label="open mobile menu">
            <div class="hamburger" :class="{ open: isOpen }">
                <span></span>
                <span></span>
            </div>
        </button>
    </div>
    <div class="menu-overlay"></div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';

const route = useRoute();

const wrapper = ref(null);
const wrapperInner = ref(null);
const background = ref(null);
const wrapperList = ref(null);

const cachedHeight = ref(null);

const isNavOpened = ref(false);
const waitToggle = ref(false);
const isOpen = ref(false)

const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Now', path: '/now' },
    { name: 'Contact', path: '/contact' },
];

function toggleNav() {
    if (waitToggle.value) return;
    waitToggle.value = true;
    isOpen.value = !isOpen.value;

    const timeline = gsap.timeline({
        onComplete: () => (waitToggle.value = false),
    });

    if (!cachedHeight.value) {
        cachedHeight.value = wrapperInner.value.offsetHeight;
    }

    if (isNavOpened.value) {
        timeline.to(wrapperInner.value, { height: 0, y: -10, duration: 0.6, ease: 'expo.inOut' }, 0)
        timeline.to('.menu-overlay', { opacity: 0, duration: 0.6, ease: 'expo.inOut' }, 0)
    }
    else {
        const wrapperHeight = cachedHeight.value;
        timeline
            .set(wrapper.value, { height: wrapperHeight, width: "100%" })
            .set('.menu-overlay', {
                opacity: 1,
                duration: .6,
            }, 0)
            .set(wrapperInner.value, {
                y: "-1.5rem",
                scaleX: 0,
                width: "3rem",
                height: "3rem",
            }, 0)
            .to(wrapperInner.value, {
                y: 0,
                scaleX: 1,
                height: wrapperHeight,
                duration: .6,
                ease: "expo.inOut",
            }, 0)
            .to(wrapperInner.value, {
                width: "100%",
                duration: .6,
                ease: "expo.inOut",
            }, .3)
            .fromTo(
                '.js-item',
                { opacity: 0, x: 60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: (index) => 1 + index * 0.05,
                    stagger: 0.1,
                    ease: 'expo.out',
                },
                '-=0.4'
            );
    }

    isNavOpened.value = !isNavOpened.value;
}

// close on back/forward browser navigation
watch(() => route.path, () => {
    if (isNavOpened.value) {
        waitToggle.value = false;
        toggleNav();
    }
},
);
</script>

<style scoped>
.disable {
    pointer-events: none;
}

.menu-disabled {
    opacity: 0 !important;
    pointer-events: none;
}

.nav-menu {
    overflow: hidden;
}

.nav-wrapper {
    position: absolute;
    top: calc(100%);
    right: 0;
    width: 100%;
    height: 0;
    /* overflow: hidden; */
    /* background-color: #A1C6EA; */
    /* F0E4D7 */
    /* 5C6D70 */
    /* A1C6EA */
    /* B0C4DE */
    /* ffd37d */
    color: #131212;
    transform-origin: top left;
    z-index: 1000;
    border-radius: 1.5rem;
}



.nav-wrapper-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #70a2e1;
    border-radius: 1.5rem;
    right: 0;
    position: absolute;
    /* width: 0; */
    /* right: 0;
    position: absolute; */
    overflow: hidden;

}

.nav-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    transform-origin: left center;
    z-index: -1;
    transform: scaleX(0);
}

ul {
    width: 100%;
    padding: 1.75rem 2rem;
}


.menu-item {
    list-style: none;
    margin: .5rem 0;
    font-size: 2.25rem;
    opacity: 0;
    transform: translateX(60px);
    font-weight: 600;
}

.menu-item:last-child {
    margin-bottom: 0;
}

.wrap-footer {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: flex-start;
    /* margin-top: 2rem; */
    background-color: #3c61e5;
    width: 100%;
    /* padding: 1.75rem 2rem; */
    gap: 10px;
    padding: 1.75rem;
}

.wrap-footer span {
    color: white;
}

.wrap-footer-icons {
    display: flex;
    gap: 10px;
}

.ham {
    border-radius: 9999px;
    width: 3rem;
    height: 3rem;
    z-index: 1000;
    background-color: #70a2e1;
    color: #fff;
    /* background-color: #FDFAF5; */
}

/* .dark-mode .ham {
    background-color: #121212;
} */

.hamburger {
    width: 17px;
    height: 9px;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.hamburger span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: #fff;
    /* background-color: #131212; */
    transition: all 0.3s ease-in-out;
    border-radius: 999em;
}

.dark-mode .hamburger span {
    background-color: #DDDDDD;
}

.hamburger.open span:nth-child(1) {
    transform: translateY(2.75px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
    transform: translateY(-2.75px) rotate(-45deg);
}


.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(253, 250, 245, .8);
    opacity: 0;
    transition: opacity .2s linear;
    pointer-events: none;
    will-change: opacity;
}

.dark-mode .menu-overlay {
    background-color: rgba(18, 18, 18, 0.8)
}



.router-link-active:before {
    position: absolute;
    top: calc(50% - 3px);
    left: -1rem;
    display: none;
    width: 6px;
    height: 6px;
    background: currentcolor;
    border-radius: 50%;
    transform: translate3d(1rem, 0, 0) scale(0);
    transition: transform .4s cubic-bezier(0.86, 0, 0.07, 1);
    content: "";
}

.router-link-active:before {
    display: block;
}

.router-link-active:before {
    transform: translate3d(0, 0, 0) scale(1);
}
</style>