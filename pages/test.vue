<template>
    <div>
        test
    </div>
</template>

<script setup>
// WHY THE FUCK DOES THIS BREAK THE MENU ANIMATION
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
</script>
