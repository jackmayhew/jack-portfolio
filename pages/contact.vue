<script setup lang="ts">
useHead({
  title: 'Contact',
})
</script>

<template>
  <main>
    <Header
      title="Contact Jack"
      subtitle="Always happy to chat!"
    />
    <div class="mt-8 text-lg">
      <ContactForm />
    </div>
    <Footer />
  </main>
</template>
