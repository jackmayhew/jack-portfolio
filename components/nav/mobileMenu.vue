<!-- still a wip - need to clean up, new colours, and might just keep css instead of using tailwind -->
<template>
    <div class="nav-menu">
        <div ref="wrapper" class="nav-wrapper" :class="menuIsOpen ? '' : 'menu-disabled'">
            <div ref="wrapperInner" class="nav-wrapper-inner">
                <!-- <ul>
                    <li v-for="(link, index) in navigationLinks" :key="index" class="">
                        <NuxtLink :to="link.path" @click="toggleNav" class="menu-item block w-fit">
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                    <li class="">
                        <a class="menu-item block w-fit" href="https://github.com/jackmayhew" target="_blank"
                            rel="noopener">
                            GitHub
                        </a>
                    </li>
                </ul> -->
                <ul>
                <div class="poop">item</div>
                <div class="poop">item</div>
                <div class="poop">item</div>
                <div class="poop">item</div>                    
                </ul>

                <div class="nav-footer">
                    <div class="footer-bg"></div>
                    <!-- <div class="menu-item nav-footer-icons">
                        <a href="mailto:jackmayhew5@gmail.com" aria-label="email">
                            <Icon name="tabler:mail" size="36" />
                        </a>
                        <a href="https://github.com/jackmayhew" target="_blank" rel="noopener" aria-label="github">
                            <Icon name="tabler:brand-github" size="36" />
                        </a>
                        <a href="https://www.linkedin.com/in/jack-mayhew-610b042b2/" target="_blank" rel="noopener"
                            aria-label="linkedin">
                            <Icon name="tabler:brand-linkedin" size="36" />
                        </a>
                    </div> -->
                </div>
            </div>
        </div>
        <button class="ignore-click hamburger-button" @click="toggleNav" aria-label="open mobile menu">
            <div class="hamburger" :class="{ open: hamburgerToggle }">
                <span></span>
                <span></span>
            </div>
        </button>
    </div>
    <div class="menu-overlay"></div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onClickOutside } from '@vueuse/core'

const route = useRoute();

const wrapper = ref(null);
const wrapperInner = ref(null);

const menuHeight = ref(null);
const menuIsOpen = ref(false);
const currentAnimation = ref(null);
const menuIsAnimating = ref(false);
const hamburgerToggle = ref(false);

const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Now', path: '/now' },
    { name: 'Contact', path: '/contact' },
];

function toggleNav() {
    if (currentAnimation.value) currentAnimation.value.kill();

    menuIsAnimating.value = true;

    const timeline = gsap.timeline({
        onComplete: () => {
            menuIsAnimating.value = false;
            currentAnimation.value = null;
        }
    });

    currentAnimation.value = timeline;

    if (!menuHeight.value) menuHeight.value = wrapperInner.value.offsetHeight;

    if (menuIsOpen.value) {
        timeline.to(wrapperInner.value, { height: 0, y: -10, duration: 0.6, ease: 'expo.inOut' }, 0)
            .to('.menu-overlay', { opacity: 0, duration: 0.6, ease: 'expo.inOut' }, 0)
    }
    else {
        const wrapperHeight = menuHeight.value;
        timeline
            .set(wrapper.value, { height: wrapperHeight, opacity: 0, width: "100%" })
            .set(wrapperInner.value, { y: "-3.5rem", scaleX: 0, width: "3rem", height: "3rem" })
            .set('.menu-overlay', { opacity: 1, duration: .6 })
            // .set('.menu-item', { opacity: 0, x: 60 })
            .set('.poop', { opacity: 0, x: 60 })
            .set('.footer-bg', { width: "0" })
            .to(wrapper.value, { opacity: 1, width: "100%" })
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
            // .to('.menu-item', {
            //     opacity: 1,
            //     x: 0,
            //     duration: (index) => 1 + index * 0.05,
            //     stagger: 0.1,
            //     ease: 'expo.out',
            // }, 1)
            // .to('.menu-item', {
            //     opacity: 1,
            //     x: 0,
            //     duration: 1,
            //     // stagger: 0.1,
            //     ease: 'expo.out',
            // }, .5)

            .to('.poop', {
                opacity: 1,
                x: 0,
                duration: (index) => 1 + index * 0.05,
                stagger: 0.1,
                ease: 'expo.out',
            }, '-=.4')
            // .to('.poop', {
            //     opacity: 1,
            //     x: 0,
            //     duration: 1,
            //     // stagger: 0.1,
            //     ease: 'expo.out',
            // }, .5)
            .to('.footer-bg', {
                width: "100%",
                duration: .8,
                ease: "expo.inOut",
            }, .3)
    }

    menuIsOpen.value = !menuIsOpen.value;
    hamburgerToggle.value = !hamburgerToggle.value;
    document.body.classList.toggle('locked');
    document.querySelector('.menu-overlay').classList.toggle('pointer-events-auto');
}




// close on browser navigation


watch(() => route.path, () => {
    if (menuIsOpen.value) {
        menuIsAnimating.value = false;
        toggleNav();
    }
});

onClickOutside(wrapper, event => {
    if (event.target.closest('.ignore-click')) return;
    if (!menuIsOpen.value || menuIsAnimating.value) return;
    menuIsAnimating.value = false;
    toggleNav();
})
</script>

<style scoped>
.nav-menu {
    overflow: hidden;
    --menu-bg: #70a2e1;
    --menu-footer: #3c61e5;
    --dark-menu-bg: #1c1c1c;
    --dark-menu-footer: #161616;
}

.nav-wrapper {
    position: absolute;
    width: 100%;
    height: 0;
    top: 100%;
    right: 0;
    transform-origin: top right;
    z-index: 1;
    border-radius: 1.5rem;
    opacity: 0;
    background-color: transparent;
}

.nav-wrapper-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #131212;
    background-color: var(--menu-bg);
    border-radius: 1.5rem;
    right: 0;
    position: absolute;
    overflow: hidden;
    will-change: transform, width, height;
}

.nav-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: left center;
    transform: scaleX(0);
}

ul {
    width: 100%;
    padding: 1.75rem 2rem;
}

.menu-item {
    list-style: none;
    margin-bottom: .5rem;
    font-size: 2.25rem;
    opacity: 0;
    transform: translateX(60px);
    font-weight: 600;
    will-change: transform, opacity;
    transform: translateZ(0);
}

.menu-item:last-child {
    margin-bottom: 0;
}


.nav-footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 1.75rem 0;
    gap: 10px;
    margin-left: auto;
    position: relative;
}

.footer-bg {
    height: 100%;
    position: absolute;
    width: 0%;
    right: 0;
    background-color: var(--menu-footer);
    border-radius: 1px 0 1.5rem 1.5rem;
}

.nav-footer span {
    color: white;
    transition: color .2s;
}

.nav-footer span:hover {
    color: #131212;
}

.nav-footer-icons {
    display: flex;
    gap: 10px;
    /* width: 100%; */
    padding: 0 2rem;
}

.nav-footer-icons a {
    display: flex;
}

.hamburger-button {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    border-radius: 9999px;
    width: 3rem;
    height: 3rem;
    background-color: var(--menu-bg);
    pointer-events: auto;
    z-index: 9999;
    transition: background-color 0.2s ease;
}

.active-hamburger {
    background-color: var(--menu-footer);
}

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
    transition: all 0.3s ease-in-out;
    border-radius: 999em;
}

.hamburger.open span:nth-child(1) {
    transform: translateY(3px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
    transform: translateY(-3px) rotate(-45deg);
}

.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    /* z-index: 1; */
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: rgba(253, 250, 245, .8);
    opacity: 0;
    transition: opacity .2s linear;
    pointer-events: none;
    will-change: opacity;
}

.dark-mode .nav-wrapper-inner {
    background-color: var(--dark-menu-bg);
    color: #DDDDDD;
}

.dark-mode .footer-bg {
    background-color: var(--dark-menu-footer);
}

.dark-mode .nav-footer span {
    color: #DDDDDD;
}

.dark-mode .nav-footer span:hover {
    color: #fff;
}

.dark-mode .hamburger-button {
    background-color: var(--dark-menu-bg);
}

.dark-mode .hamburger span {
    background-color: #DDDDDD;
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
    transition: transform 4s cubic-bezier(0.86, 0, 0.07, 1);
    content: "";
}

.router-link-active:before {
    display: block;
}

.router-link-active:before {
    transform: translate3d(0, 0, 0) scale(1);
}

.pointer-events-auto {
    pointer-events: auto !important;
}

.disable {
    pointer-events: none;
}

.menu-disabled {
    /* opacity: 0 !important; */
    pointer-events: none;
}
</style>