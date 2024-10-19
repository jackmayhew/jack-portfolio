<template>
  <div class="mx-auto text-white max-w-screen-md wrapper">
    <Navbar />
    <NuxtPage class="page" />
    <Footer />
  </div>
</template>

<style>
.page-enter-active {
  transition: all 0.3s ease-out;
}

.page-leave-active {
  transition: all 0.15s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.page-leave-to {
  opacity: 0;
  /* transform: translateY(-20px); */
}

.wrapper {
  color: black;
}

.page {
  position: relative;
  min-height: 100%;
}
</style>
