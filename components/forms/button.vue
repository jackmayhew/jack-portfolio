<!-- DirectionAwareButton.vue -->
<template>
    <button
      class="button button--bestia"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="buttonRef"
    >
      <div 
        class="button__bg" 
        :style="{ 
          '--mouse-x': mouseX + 'px', 
          '--mouse-y': mouseY + 'px'
        }"
      ></div>
      <span><slot>Submit</slot></span>
    </button>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const buttonRef = ref(null)
  const mouseX = ref(0)
  const mouseY = ref(0)
  
  const handleMouseEnter = (event) => {
    if (!buttonRef.value) return
    
    const rect = buttonRef.value.getBoundingClientRect()
    mouseX.value = event.clientX - rect.left
    mouseY.value = event.clientY - rect.top
  }
  
  const handleMouseLeave = () => {
    mouseX.value = 0
    mouseY.value = 0
  }
  </script>
  
  <style scoped>
  .button {
    pointer-events: auto;
    cursor: pointer;
    background: #e7e7e7;
    /* border: none; */
    padding: 1.5rem 3rem;
    margin: 0;
    font-size: inherit;
    position: relative;
    display: inline-block;
  }
  
  .button--bestia {
    font-size: 1.15rem;
    color: #fff;
    background: none;
    padding: 0;
  }
  
  .button--bestia .button__bg {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background:  rgb(229 229 229);
    border-radius: 0.85rem;
    overflow: hidden;
  }
  
  .button--bestia .button__bg::before,
  .button--bestia .button__bg::after {
    content: '';
    position: absolute;
    background: #000;
  }
  
  .button--bestia .button__bg::before {
    width: 400%;
    height: 0;
    padding-bottom: 400%;
    top: var(--mouse-y, 50%);
    left: var(--mouse-x, 50%);
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 1);
    will-change: transform;
  }
  
  .button--bestia:hover .button__bg::before {
    transition: transform 1.5s ;
    /* cubic-bezier(0.1, 0, 0.3, 1) */
    transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
  }
  
  .button--bestia .button__bg::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .button--bestia:hover .button__bg::after {
    opacity: 1;
    transition-duration: 0.01s;
    transition-delay: 0.75s;
  }
  
  .button--bestia span {
    display: block;
    position: relative;
    padding: 1rem 2.25rem;
    mix-blend-mode: difference;
  }
  </style>