<template>
<div class="stage">
    <div class="content">
        <h1 class="band">
            <span class="names">
                <span class="name name--red">jack jack</span>
                <span class="name name--blue">jack jack</span>
            </span>
        </h1>
        <h1 class="band">
            <span class="names">
                <span class="name name--red">jack jack</span>
                <span class="name name--blue">jack jack</span>
            </span>
        </h1>
        <h1 class="band">
            <span class="names">
                <span class="name name--red">jack jack</span>
                <span class="name name--blue">jack jack</span>
            </span>
        </h1>
        <h1 class="band">
            <span class="names">
                <span class="name name--red">jack jack</span>
                <span class="name name--blue">jack jack</span>
            </span>
        </h1>
        <h1 class="band">
            <span class="names">
                <span class="name name--red">jack jack</span>
                <span class="name name--blue">jack jack</span>
            </span>
        </h1>
        <h1 class="band">
            <span class="names">
                <span class="name name--red">jack jack</span>
                <span class="name name--blue">jack jack</span>
            </span>
        </h1>
        <h1 class="band">
            <span class="names">
                <span class="name name--red">jack jack</span>
                <span class="name name--blue">jack jack</span>
            </span>
        </h1>
        <h1 class="band">
            <span class="names">
                <span class="name name--red">jack jack</span>
                <span class="name name--blue">jack jack</span>
            </span>
        </h1>
        <h1 class="band">
            <span class="names">
                <span class="name name--red">jack jack</span>
                <span class="name name--blue">jack jack</span>
            </span>
        </h1>
        <h1 class="band">
            <span class="names">
                <span class="name name--red name__end name__end--red">jack jack</span>
                <span class="name name--blue name__end name__end--blue">jack jack</span>
            </span>
        </h1>
    </div>
</div>
</template>

<script setup>
useHead({
  script: [
    {
      src: "/SplitText.js",
      defer: true,
    },
  ],
});
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";

// Helper functions
const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);

// Initialize timeline outside onMounted so we can access it in other functions
let gltl;

function intro() {
    let tl = gsap.timeline({
        delay: .1,
        defaults: {
            duration: 2,
            ease: 'power4'
        }
    });
    tl.from('.names', {
        x: function(i) {
            return i % 2 == 0 ? 1000 : -1000;
        },
        stagger: 0.15    
    })
    .from('p span', {
        y: 70,
        stagger: 0.1
    }, 2)
    
    return tl;
}

function loopAnim() {
    let tl = gsap.timeline({
        repeat: -1
    });
    
    tl.to('.names', {
        y: -102,
        duration: 5,
        ease: 'none'
    })
    .from('.name__end--red .bandChar', {
        y: 120,
        duration: 3,
        ease: 'power4',
        stagger: 0.05
    }, 1)
    .from('.name__end--blue .bandChar', {
        y: 120,
        duration: 3,
        ease: 'power4',
        stagger: 0.05
    }, 1.3)
    .from('.band:nth-of-type(5) .name--blue .bandChar', {
        y: -120,
        duration: 2,
        ease: 'power4.inOut',
        stagger: -0.05
    }, 0)
    .to('.band:nth-of-type(6) .name--blue .bandChar', {
        y: 120,
        duration: 2,
        ease: 'power4.inOut',
        stagger: -0.05
    }, 0)
    
    return tl;
}

function init() {
    const stage = select('.stage');
    gsap.set(stage, { autoAlpha: 1 });
    gsap.set('.content', { rotate: -25 });
    stage.onclick = () => {
        gltl.restart();
    }
    
    gltl = gsap.timeline({ delay: .1 });
    gltl.add(intro());
    gltl.add(loopAnim(), 0);
}

function resize() {
    // const stage = select('.stage');
    // let vh = window.innerHeight;
    // let sh = stage.offsetHeight;
    // let scaleFactor = vh/sh;
    // if(scaleFactor < 1) {
    //     gsap.set(stage, { scale: scaleFactor });
    // } else {
    //     gsap.set(stage, { scale: 1 });
    // }
    const stage = select('.stage');
    gsap.set(stage, { scale: 1 });
}

onMounted(() => {
    // Initialize SplitText
    let bandST = new SplitText('.name', {
        type: "chars", 
        charsClass: "bandChar",
        position: "absolute"
    });

    // Initialize animations
    init();
    resize();

    // Add resize listener
    window.addEventListener('resize', resize);

    // Cleanup
    onUnmounted(() => {
        window.removeEventListener('resize', resize);
        // Optional: kill any active animations
        if (gltl) gltl.kill();
    });
});
</script>

<style scoped>

.stage {
  position: relative;
  /* min-width: 716px; */
  min-width: 100%;
  height: 500px;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  visibility: hidden;
  border-radius: 16px;
}

.content {
  position: absolute;
  top: -150px;
  left: 34px;
  width: 120%;
  height: 120%;
}

.band {
  position: relative;
  margin: 0;
  height: 102px;
  font-weight: 600;
  color: #d71111;
  font-size: 135px;
  letter-spacing: 0px;
  line-height: 0.8;
}

.names {
  display: block;
  position: relative;
  width: 150%;
  height: 120px;
  overflow: hidden;
}

.name {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: multiply;
}

.name--blue {
  color: #019ac5;
  position: absolute;
  top: 8px;
}

p {
  position: absolute;
  bottom: 24px;
  margin: 0;
  color: #d71111;
  font-size: 17px;
  letter-spacing: 0px;
  line-height: 1.3;
  text-align: right;
}

.date {
  left: 25px;
  text-align: left;
}

.location {
  left: 332px;
}

.guests {
  left: 566px;
}
</style>
