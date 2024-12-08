<template>
    <div class="wrapper max-w-screen-md mx-auto">
      <Navbar class="relative max-w-screen-md mx-auto" />
      <div class="main-content px-6 mt-[6.5rem]">
        <NuxtPage />
        <Footer />
      </div>
    </div>
  </template>
  
  <script setup>  
 
  </script>
  
  
  <style>
  .page-enter-active {
    transition: all 0.3s ease-out;
    z-index: -1;
  }
  
  .page-leave-active {
    transition: all 0.15s ease-in;
    z-index: -1;
  }
  
  .page-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }
  
  .page-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  .main-content,
  .wrapper {
    min-height: 100vh;
    height: 100%;
  }
  </style>