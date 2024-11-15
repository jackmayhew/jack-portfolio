<template>
  <div class="">
    <div class="band intro pb-1 text-4xl sm:text-5xl invisible">
      Just a guy who enjoys building cool things for the web and beyond.
      Currently living and working in Montreal.
    </div>
    <div class="mt-6">
      <img class="hero__image w-full rounded-3xl" src="/img/hero.webp" alt="Jack at computer" rel="preload" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const props = defineProps(['isFromMobileMenu']);
let splitText;
let gltl;

function heroText() {
  if (splitText) {
    splitText.revert();
  }

  splitText = new SplitText('.band', {
    type: "chars,words,lines",
    charsClass: "bandChar",
    wordsClass: "word",
    linesClass: "line",
    position: "relative"
  });

  const chars = splitText.chars;
  const lines = splitText.lines;
  const delay = props.isFromMobileMenu ? .7 : .2;

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 0.8
    }
  });

  tl.delay(delay);

  lines.forEach((line, i) => {
    const charsInLine = line.querySelectorAll('.bandChar');
    tl.from(charsInLine, {
      y: -50,
      autoAlpha: 0,
      stagger: 0.02,
      duration: 0.6,
    }, i * 0.1);
  });

  gsap.set('.band', { visibility: 'visible' });
  return tl;
}

onMounted(() => {
  gltl = heroText();
  const context = gsap.context(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(".hero__image",
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, delay: 0.2, duration: 0.5, ease: "power2.out" })
  });
  return () => context.revert();
});

onUnmounted(() => {
  if (splitText) {
    splitText.revert();
  }
});
</script>

<style scoped>
.hero__image {
  width: 100%;
  height: auto;
  display: block;
}

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