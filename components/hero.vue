<template>
  <div>
    <div class="band intro text-4xl sm:text-5xl invisible">
      Just a guy who enjoys building cool things for the web and beyond.
      Currently living and working in Montreal.
    </div>
    <div class="mt-6">
      <img class="w-full rounded-[2rem]" src="/public/gifer.gif" rel="preload" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
useHead({
  script: [
    {
      src: "/SplitText.js",
      defer: true,
    },
  ],
});

let splitText;
let gltl;

function initSplitTextAndAnimations() {

  if (splitText) {
    splitText.revert();
  }

  splitText = new SplitText('.band', {
    type: "chars,words",
    charsClass: "char",
    wordsClass: "word"
  });

  const chars = splitText.chars;

  const tl = gsap.timeline({
    defaults: {
      ease: "back.out(1.7)",
      duration: 1
    }
  });

  tl.from(chars, {
    opacity: 0,
    scale: 1,
    y: 70,
    transformOrigin: "0% 50% -50",
    stagger: 0.01,
    onStart: () => {
      gsap.set(chars, { visibility: 'visible' }); // Ensure chars are visible at the start
    }
  });


  return tl;
}

onMounted(() => {
  gltl = initSplitTextAndAnimations();
});

onUnmounted(() => {
  if (splitText) {
    splitText.revert();
  }
});
</script>

<style scoped>
.char {
  display: inline-block;
}

.word {
  display: inline-block;
  margin-right: 0.25em;
}

.band {
  overflow: hidden;
}
</style>