import type { ProjectDetails } from '~/types/project/project-details-types'

// considered using a markdown file, but felt overkill. sticking with js object for now
export const projectDetails: ProjectDetails[] = [
  {
    title: 'Loon',
    subtitle: 'Shop Canadian, without the extra legwork.',
    image: '/img/work/loon.webp',
    paragraphs: [
      `Trying to shop from Canadian stores online often felt like a manual, frustrating process. You\'d find a product on a big international site, then have to start a whole separate search just to find a local alternative.`,
      `I built Loon to automate that second step. It’s a browser extension that finds you Canadian alternatives right when you need them. No more juggling a dozen tabs to find a local option.`,
      `The goal was to make supporting local businesses easier. It was also a solid project for tackling challenges like product matching, database design, and extension architecture.`,
      `Loon is open source, and is officially launching 2025/08/22.`,
    ],
    techStack: 'Vue 3, TypeScript, UnoCSS, Fastify, Supabase',
    url: 'https://getloon.ca/',
    githubUrl: 'https://github.com/jackmayhew/loon/',
    slug: 'loon',
  },
  {
    title: 'Refuge Kitty-Kat Rescue',
    subtitle: 'Helping cats find new homes, one click at a time.',
    image: '/img/work/refuge.webp',
    paragraphs: [
      `When Refuge Kitty-Kat reached out about their website struggles, I was eager to help. The local rescue was doing amazing work but their website wasn't doing them justice. I rebuilt their site from the ground up, focusing on what matters most: making it dead simple for people to donate, volunteer, and (most importantly) find their new cat.`,
      {
        text: `The results have been good - more donations are flowing in, volunteer applications are up, and adoption rates are climbing. Plus, the site's been ranking well, which means more eyes on adoption postings. Currently sitting second only to the SPCA for popular keywords like `,
        link: {
          text: `'cat rescue montreal.'`,
          url: 'https://www.google.ca/search?q=cat+rescue+montreal',
        },
      },
      `It's pretty cool seeing your code make a real difference. Knowing this project is helping more animals find their way to new homes - that's what it's all about.`,
    ],
    techStack: 'Next.js, Tailwind, Hygraph',
    url: 'https://www.refugekittykat.com/',
    slug: 'refuge-kitty-kat-rescue',
  },
  {
    title: 'CampVI',
    subtitle: 'The go-to Vancouver Island camping resource.',
    image: '/img/work/campvi.webp',
    paragraphs: [
      `As an avid camper frustrated with jumping between countless websites to plan trips, I built CampVI to solve a simple problem: finding the perfect campsite shouldn't be a hassle. The site brings together every type of camping spot on Vancouver Island - from provincial parks to hidden off-grid gems - all in one clean, modern interface.`,
      `What started as a personal project has grown into a genuine resource for the island's outdoor community. With an interactive map, intuitive search features, and detailed site info, CampVI helps adventurers spend less time planning and more time exploring.`,
      `It's nice getting messages from users who've discovered their new favourite camping spots through the site!`,
    ],
    techStack: 'Next.js, TypeScript, Sanity.io',
    url: 'https://www.campvi.ca/',
    slug: 'campvi',
  },
  {
    title: 'TabZen',
    subtitle: 'Clean, distraction-free guitar, bass, and drum tabs.',
    image: '/img/work/tabzen.webp',
    paragraphs: [
      `I built TabZen to solve a simple frustration: guitar tab sites are cluttered with ads and popups that standard adblockers miss. What started as me manually removing elements in DevTools turned into a browser extension that does the work automatically.`,
      `TabZen helps users focus on what matters - the music without the clutter. A simple fix for an annoying problem!`,
    ],
    techStack: 'HTML, CSS, JavaScript',
    url: 'https://tabzen.app/',
    slug: 'tabzen',
  },
]
