<template>
  <div class="hero sm:min-h-screen">
    <p class="band intro pb-1 text-4xl sm:text-5xl invisible">
      Just a guy who enjoys building cool things for the web and beyond.
      Currently living and working in Montreal.
    </p>
    <div class="mt-6">
      <img class="hero-img w-full h-auto block rounded-3xl invisible opacity-0" src="/img/hero.webp"
        alt="Jack at computer" loading="eager" width="492" height="358" />
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";

const props = defineProps({
  gsapDelay: Number,
});

let splitText;
let gltl;

function gsapText() {
  if (splitText) {
    splitText.revert();
  }

  splitText = new SplitText(".band", {
    type: "chars,words,lines",
    charsClass: "bandChar",
    wordsClass: "word",
    linesClass: "line",
    position: "relative",
  });

  const lines = splitText.lines;

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 0.8,
    },
  });

  tl.delay(props.gsapDelay);

  lines.forEach((line, i) => {
    const charsInLine = line.querySelectorAll(".bandChar");
    tl.from(
      charsInLine,
      {
        y: -50,
        autoAlpha: 0,
        stagger: 0.02,
        duration: 0.6,
      },
      i * 0.1
    );
  });

  gsap.set(".band", { visibility: "visible" });
  return tl;
}

function gsapImage() {
  const tl = gsap.timeline();
  tl.fromTo(
    ".hero-img",
    { y: 40, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" }
  );
  return tl;
}

onMounted(() => {
  gltl = gsap.timeline();
  gltl.add(gsapText()).add(gsapImage(), props.gsapDelay);
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
