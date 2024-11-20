<!-- root/error.vue not working? -->
<template>
    <main class="gsap-load">
        <h1 class="text-5xl sm:text-6xl">404 - Page Not Found</h1>
        <h2 class="mt-2 text-xl sm:text-2xl">The page you're looking for might have been moved, deleted, or never existed in the first place! Please return to the homepage.</h2>
        <div class="w-full max-w-3xl mx-auto">
            <div class="mt-8 text-lg">
                <p class="mt-5">
                    <NuxtLink to="/" class="w-fit flex px-6 py-2 rounded-lg border-2 border-neutral-200 dark:border-gray-700 transition-colors duration-300 hover:border-neutral-300">Go Home</NuxtLink>
                </p>
                
            </div>
        </div>
    </main>
</template>

<script setup>
useHead({
    title: '404'
})
</script>

<style scoped></style>