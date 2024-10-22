<template>
  <div>
    <div class="band intro text-4xl sm:text-5xl invisible">
      Just a guy who enjoys building cool things for the web and beyond.
      Currently living and working in Montreal.
    </div>
    <div class="mt-6">
      <img class="w-full rounded-3xl" src="/public/gifer.gif" rel="preload" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";

let splitText;
let gltl;

function initSplitTextAndAnimations() {
  if (splitText) {
    splitText.revert();
  }

  splitText = new SplitText('.band', {
    type: "chars,words,lines",  // Added lines splitting
    charsClass: "bandChar",
    wordsClass: "word",
    linesClass: "line",
    position: "relative"
  });

  const chars = splitText.chars;
  const lines = splitText.lines;

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",  // Changed easing for smoother motion
      duration: 0.8  // Faster overall animation
    }
  });

  // Animate each line's characters together
  lines.forEach((line, i) => {
    const charsInLine = line.querySelectorAll('.bandChar');

    tl.from(charsInLine, {
      y: -50,  // Reduced distance for snappier feel
      autoAlpha: 0,
      stagger: 0.02,  // Much tighter stagger between chars
      duration: 0.6,  // Faster per-line duration
    }, i * 0.1);  // Slight delay between lines
  });

  gsap.set('.band', { visibility: 'visible' });

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
.bandChar {
  display: inline-block;
  position: relative;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.word {
  display: inline-block;
  margin-right: 0.25em;
}

.line {
  display: block;
  overflow: hidden;
}

.band {
  overflow: hidden;
  position: relative;
  perspective: 200px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>