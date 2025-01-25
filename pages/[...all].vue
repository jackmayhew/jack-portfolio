<!-- root/error.vue not working? i think because i remoevd app.vue. either way, this is fine  -->
<template>
    <main>
        <h1 class="text-5xl sm:text-6xl">404 - Page Not Found</h1>
        <h2 class="mt-2 text-xl sm:text-2xl">
            The page you're looking for might have moved, been deleted, 
            or never existed in the first place! Please return to the homepage.
        </h2>
        <div class="w-full max-w-3xl mx-auto">
            <div class="mt-8 text-lg">
                <NuxtLink to="/" class="btn flex items-center gap-2 w-fit text-white text-xl font-bold py-2 px-4 rounded">
                    Homepage
                </NuxtLink>
            </div>
        </div>
    </main>
</template>

<script setup>
useHead({
    title: '404'
})
</script>