import type { ProjectCard } from '~/types/project/project-card.types'

// considered a markdown file, but felt overkill
export const projectCards: ProjectCard[] = [
  {
    title: 'CampVI',
    slug: 'campvi',
    date: '2024',
    desc: `Find campsites across Vancouver Island, from popular provincial parks to hidden off-grid spots.`,
    url: 'https://www.campvi.ca/',
    stack: 'Next.js, TypeScript, Sanity',
    image: '/img/work/campvi.webp',
  },
  {
    title: 'Refuge Kitty-Kat Rescue',
    slug: 'refuge-kitty-kat-rescue',
    date: '2024',
    desc: `Designed and built a new website for Refuge Kitty Kat Rescue, a cat rescue nonprofit in Montreal.`,
    url: 'https://www.refugekittykat.com/',
    stack: 'Next.js, Tailwind, Hygraph',
    image: '/img/work/refuge.webp',
  },
  {
    title: 'Loon [Archived]',
    slug: 'loon',
    date: '2025',
    desc: `A browser extension that finds Canadian alternatives and deals while you shop online, making it easy to support local businesses.`,
    url: 'https://getloon.ca/',
    stack: 'Vue 3, TypeScript, UnoCSS, Fastify, Supabase',
    image: '/img/work/loon.webp',
  },
  {
    title: 'TabZen',
    slug: 'tabzen',
    date: '2024',
    desc: `TabZen is a browser extension that removes disruptive ads and visual clutter from guitar, bass, and drum tabs & chords.`,
    url: 'https://tabzen.app/',
    stack: 'HTML, CSS, JavaScript',
    image: '/img/work/tabzen.webp',
  },
]
