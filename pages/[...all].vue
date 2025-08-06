<script setup lang="ts">
// root/error.vue not working?

useHead({
  title: '404',
})
</script>

<template>
  <main>
    <h1 class="text-5xl sm:text-6xl">
      404 - Page Not Found
    </h1>
    <h2 class="mt-2 text-xl sm:text-2xl">
      The page you're looking for might have moved, been deleted,
      or never existed in the first place!
    </h2>
    <div class="w-full max-w-3xl mx-auto">
      <div class="mt-4 text-lg">
        <ButtonLink url="`/" text="Homepage" width="150px" />
      </div>
    </div>
    <Footer />
  </main>
</template>
