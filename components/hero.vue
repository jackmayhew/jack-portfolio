<template>
    <div>
      <div class="band intro text-4xl sm:text-5xl">
        Just a guy who enjoys building cool things for the web and beyond.
        Currently living and working in Montreal.
      </div>
      <div class="mt-6">
        <img class="w-full rounded-[2rem]" src="/public/gifer.gif"  rel="preload"/>

      </div>
    </div>
  </template>
  
  <script setup>
//   import { onMounted } from "vue";
//   import gsap from "gsap";
//   useHead({
//     script: [
//       {
//         src: "/SplitText.js",
//         defer: true,
//       },
//     ],
//   });
  
//   const select = e => document.querySelector(e);
  
//   let gltl;
  
//   function initSplitTextAndAnimations() {
//     const bandST = new SplitText('.band', { type: "chars", charsClass: "bandChar", position: "relative" });
  
//     const tl = gsap.timeline({
//       defaults: {
//         ease: "power2",
//         duration: .5,
//         delay: 0.25,
//         z: 0.01,
//         rotation: 0.01,
//         transformPerspective: 1000,
//         transformStyle: "preserve-3d",
//         backfaceVisibility: "hidden",
//       },
//     });
  
//     // Animate opacity and y position for each bandChar
//     tl.from(".bandChar", {
//       y: -30,
//       autoAlpha: 0, // Start with opacity 0
//       stagger: 0.06,
//     });
  
//     return tl;
//   }
  
//   onMounted(() => {
//     gltl = initSplitTextAndAnimations();
//   });
  </script>
  
  
  <style scoped>
  .band {
    overflow: hidden;
  }
  </style>
  