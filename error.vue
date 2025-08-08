<script setup lang="ts">
defineProps<{
  error: object
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
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
          <Button text="Go Home" width="150px" @click="handleError" />
        </div>
      </div>
      <Footer />
    </main>
  </NuxtLayout>
</template>
