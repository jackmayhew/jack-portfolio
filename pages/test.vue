<template>
    <div>
        test
    </div>
</template>

<script setup>

definePageMeta({
  layout: "test",
});
// WHY THE FUCK DOES THIS BREAK THE MENU ANIMATION
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
</script>
