<template>
    <div class="menu-wrap fixed inset-0 grid pointer-events-none transition-opacity duration-300 opacity-0">
        <nav class="menu flex flex-col items-center justify-center w-full h-full gap-6">
            <NuxtLink v-for="link in navigationLinks" :key="link.path" @click="handleLinkClick" :to="link.path"
                class="menu__item js-link text-3xl hover:text-green transition-colors"
                :class="{ 'disabled__link': isAnimating }">
                {{ link.name }}
            </NuxtLink>
        </nav>
    </div>
    <svg class="overlay fixed inset-0 w-full h-full z-50 pointer-events-none" viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <path class="overlay__path" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
    </svg>
</template>

<script setup>
import { defineProps, defineEmits, watch, onMounted, ref } from 'vue'
import gsap from 'gsap'

const props = defineProps({
    isOpen: Boolean,
    isAnimating: Boolean
})

const emit = defineEmits(['updateBurgerIcon', 'updateAnimatingState', 'closeMenu'])

const navigationLinks = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/contact', name: 'contact' },
    { path: '/now', name: 'now' }
]

let isAnimating = false
let overlayPath, menuWrap, menuItems, body

const handleLinkClick = () => {
    emit('closeMenu')
    closeMenu()
}

onMounted(() => {
    overlayPath = document.querySelector('.overlay__path')
    menuWrap = document.querySelector('.menu-wrap')
    menuItems = menuWrap?.querySelectorAll('.menu__item') || []
    body = document.querySelector('body')
})

const openMenu = () => {
    if (isAnimating || !overlayPath || !menuWrap) return

    isAnimating = true
    emit('updateAnimatingState', true)

    gsap.timeline({
        onComplete: () => {
            isAnimating = false
            emit('updateAnimatingState', false)
        }
    })
        .set(overlayPath, {
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' },
            onComplete() {
                menuWrap.classList.add('menu-wrap--open')
                body.classList.add('locked')
            }
        })
        .to(overlayPath, {
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
            onComplete() {
                emit('updateBurgerIcon', false)
            }
        })
        .set(menuItems, { opacity: 0 })
        .set(overlayPath, { attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' } })
        .to(overlayPath, {
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        })
        .to(menuItems, {
            duration: 1.1,
            ease: 'power4',
            startAt: { y: 150 },
            y: 0,
            opacity: 1,
            stagger: 0.05
        }, '>-=1.1')
}

const closeMenu = () => {
    if (isAnimating || !overlayPath || !menuWrap) return

    isAnimating = true
    emit('updateAnimatingState', true)

    gsap.timeline({
        onComplete: () => {
            isAnimating = false
            emit('updateAnimatingState', false)
        }
    })
        .set(overlayPath, { attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' } })
        .to(overlayPath, {
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
        })
        .to(overlayPath, {
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
            onComplete() {
                emit('updateBurgerIcon', true)
                menuWrap.classList.remove('menu-wrap--open')
                body.classList.remove('locked')
            }
        })
        .set(overlayPath, { attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' } })
        .to(overlayPath, {
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        .to(menuItems, {
            duration: 0.8,
            ease: 'power2.in',
            y: 100,
            opacity: 0,
            stagger: -0.05
        }, 0)
}

watch(() => props.isOpen, (newVal) => {
    if (newVal) openMenu()
    else closeMenu()
})
</script>

<style scoped>
.menu-wrap {
    grid-area: 1/1/2/2;
}

.menu-wrap.menu-wrap--open {
    opacity: 1;
    pointer-events: auto;
    display: grid;
    background-color: #FBF7F5;
}

.overlay__path {
    fill: #FDFBFA;
}

.dark-mode .menu-wrap.menu-wrap--open {
    background-color: #121212;
}

.dark-mode .overlay__path {
    fill: #0e0e0e;
}

.menu__item {
    will-change: opacity, transform;
}

.disabled__link {
    pointer-events: none;
}
</style>