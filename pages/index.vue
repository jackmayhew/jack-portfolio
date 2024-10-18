<template>
  <main class="px-8 md:px-4">
    <div class="mt-6 sm:mt-12">
      <div class="intro text-3xl sm:text-5xl">
        <span class="underline font-semibold">Jack Mayhew</span> is a full stack
        developer who enjoys building cool things for the web and beyond.
        Currently living in Montreal with
        <span class="underline whitespace-nowrap">T-bone</span>.
      </div>
      <div class="mt-6">
        <img class="rounded-2xl" src="/george.jpg" alt="" />
      </div>
    </div>
    <div v-for="(project, index) in projects" :key="index">
      <WorkCard
        :title="project.title"
        :date="project.date"
        :desc="project.desc"
        :url="project.url"
        :stack="project.stack"
        :image="project.image"
      />
    </div>

    <!-- <div class="h-dvh"></div> -->
  </main>
</template>

<script setup>
const projects = [
  {
    title: "Refuge Kitty-Kat Rescue",
    date: "2024",
    desc: `Refuge Kitty-Kat Rescue is a nonprofit organization based in Montreal dedicated to rescuing and rehoming cats in need.`,
    url: "https://www.refugekittykat.com/",
    stack: "Next.js, Tailwind, and Hypgraph",
    image: "/george2.jpg",
  },
  {
    title: "CampVI",
    date: "2023",
    desc: `CampVI is the go-to camping resource for Vancouver Island, making it easy for users to discover campsites and plan their next adventure.`,
    url: "https://www.campvi.ca/",
    stack: "Next.js, TypeScript, and Sanity.io",
    image: "/george2.jpg",
  },
  {
    title: "MTL Spots",
    date: "2022",
    desc: `MTL Spots is a platform built for skateboarders to discover and share skate spots in Montreal.`,
    url: "https://www.mtlspots.ca/",
    stack: "Next.js, TypeScript, SCSS, S3, and MongoDB",
    image: "/george2.jpg",
  },
  {
    title: "Floss Dental Hygiene Services",
    date: "2022",
    desc: `Floss is a private dental hygiene clinic in Comox, BC, dedicated to providing preventive dental care in a comfortable and welcoming environment.`,
    url: "https://www.flossdentalhygiene.ca/",
    stack: "GSAP, SCSS, and cPanel",
    image: "/george2.jpg",
  },
];

useHead({
  title: "Jack",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<style scoped>
main {
  color: black;
}

.h-dvh {
  height: 100vh;
}
</style>
