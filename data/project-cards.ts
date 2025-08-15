import type { ProjectCard } from '~/types/project/project-card.types'

// considered using a markdown file, but felt overkill. sticking with js object for now
export const projectCards: ProjectCard[] = [
  {
    title: 'Loon',
    slug: 'loon',
    date: '2025',
    desc: `A browser extension that finds Canadian alternatives and deals while you shop online, making it easy to support local businesses.`,
    url: 'https://getloon.ca/',
    stack: 'Vue 3, TypeScript, UnoCSS, Fastify, Supabase',
    image: '/img/work/loon.webp',
  },
  {
    title: 'Refuge Kitty-Kat Rescue',
    slug: 'refuge-kitty-kat-rescue',
    date: '2024',
    desc: `Collaborated with Refuge Kitty Kat Rescue, a nonprofit cat rescue in Montreal, to design and develop their new website.`,
    url: 'https://www.refugekittykat.com/',
    stack: 'Next.js, Tailwind, Hygraph',
    image: '/img/work/refuge.webp',
  },
  {
    title: 'CampVI',
    slug: 'campvi',
    date: '2024',
    desc: `The go-to Vancouver Island camping resource. Explore everything from popular provincial parks to hidden off-grid gems.`,
    url: 'https://www.campvi.ca/',
    stack: 'Next.js, TypeScript, Sanity.io',
    image: '/img/work/campvi.webp',
  },
  {
    title: 'TabZen',
    slug: 'tabzen',
    date: '2024',
    desc: `TabZen is a browser extension that removes disruptive ads and visual clutter from guitar, bass, and drum tabs & chords.`,
    url: 'https://tabzen.app/',
    stack: 'HTML, CSS, JavaScript, Chrome Extensions API',
    image: '/img/work/tabzen.webp',
  },
]
