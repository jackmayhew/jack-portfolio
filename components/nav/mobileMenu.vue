<template>
    <div class="menu-wrap fixed inset-0 grid pointer-events-none transition-opacity duration-300 opacity-0">
        <nav class="menu flex flex-col items-center justify-center w-full h-full">
            <NuxtLink @click="handleLinkClick" class="menu__item js-link text-3xl" to="/">home</NuxtLink>
            <NuxtLink @click="handleLinkClick" class="menu__item js-link text-3xl" to="/about">about</NuxtLink>
            <NuxtLink @click="handleLinkClick" class="menu__item js-link text-3xl" to="/contact">contact</NuxtLink>
            <NuxtLink @click="handleLinkClick" class="menu__item js-link text-3xl" to="/now">now</NuxtLink>
        </nav>
    </div>
    <svg class="overlay fixed inset-0 w-full h-full z-50" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path class="overlay__path" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z">
        </path>
    </svg>
</template>

<script setup>
import { defineProps, defineEmits, watch, onMounted, ref } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(['updateBurgerIcon', 'updateAnimatingState', 'closeMenu']);

let isAnimating = false;
let overlayPath, menuWrap, menuItems, body;

const handleLinkClick = () => {
    emit('closeMenu');
    closeMenu();
};

onMounted(() => {
    overlayPath = document.querySelector(".overlay__path");
    menuWrap = document.querySelector(".menu-wrap");
    menuItems = menuWrap ? menuWrap.querySelectorAll(".menu__item") : [];
    body = document.querySelector("body");
});

const openMenu = () => {
    if (isAnimating || !overlayPath || !menuWrap) return;

    isAnimating = true;
    emit('updateAnimatingState', true);



    gsap.timeline({ onComplete: () => (isAnimating = false, emit('updateAnimatingState', false)) })
        .set(overlayPath, {
            attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: "power4.in",
            attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
        })
        .to(overlayPath, {
            duration: 0.3,
            ease: "power2",
            attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
            onComplete() {
                emit('updateBurgerIcon', false);
                menuWrap.classList.add("menu-wrap--open");
                body.classList.add("locked");
            },
        })
        .set(menuItems, { opacity: 0 })
        .set(overlayPath, { attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" } })
        .to(overlayPath, {
            duration: 0.3,
            ease: "power2.in",
            attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" },
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: "power4",
            attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
        })
        .to(menuItems, {
            duration: 1.1,
            ease: "power4",
            startAt: { y: 150 },
            y: 0,
            opacity: 1,
            stagger: 0.05,
        }, ">-=1.1");
};

const closeMenu = () => {
    if (isAnimating || !overlayPath || !menuWrap) return;

    isAnimating = true;
    emit('updateAnimatingState', true);

    gsap.timeline({ onComplete: () => (isAnimating = false, emit('updateAnimatingState', false)) })
        .set(overlayPath, { attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" } })
        .to(overlayPath, {
            duration: 0.8,
            ease: "power4.in",
            attr: { d: "M 0 0 V 50 Q 50 100 100 50 V 0 z" },
        })
        .to(overlayPath, {
            duration: 0.3,
            ease: "power2",
            attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
            onComplete() {
                emit('updateBurgerIcon', true);
                menuWrap.classList.remove("menu-wrap--open");
                body.classList.remove("locked");
            },
        })
        .set(overlayPath, { attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" } })
        .to(overlayPath, {
            duration: 0.3,
            ease: "power2.in",
            attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: "power4",
            attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        .to(menuItems, {
            duration: 0.8,
            ease: "power2.in",
            y: 100,
            opacity: 0,
            stagger: -0.05,
        }, 0);
};

watch(() => props.isOpen, (newVal) => {
    if (newVal) openMenu();
    else closeMenu();
});
</script>



<style scoped>
.menu-wrap {
    grid-area: 1/1/2/2;
}

.menu-wrap.menu-wrap--open {
    opacity: 1;
    pointer-events: auto;
    display: grid;
    background-color: white;
}

.overlay {
    pointer-events: none;
    width: 100%;
}

.overlay__path {
    fill: #FFFFF2;
    ;
}


.dark-mode .menu-wrap.menu-wrap--open {
    background-color: black !important;

}

.dark-mode .overlay__path {
    fill: #111222;
    ;
}

.menu__item {
    will-change: opacity, transform;
}
</style>