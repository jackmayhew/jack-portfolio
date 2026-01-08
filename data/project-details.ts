import type { ProjectDetails } from '~/types/project/project-details-types'
import { githubUsername } from '~/constants/social-links'

// considered a markdown file, but felt overkill
export const projectDetails: ProjectDetails[] = [
  {
    title: 'CampVI',
    subtitle: 'The go-to Vancouver Island camping resource.',
    image: '/img/work/campvi.webp',
    paragraphs: [
      `I got tired of bouncing between a dozen sites every time I wanted to find a new campsite. So I built CampVI to fix that. One website with (almost) every campsite on the island, from provincial parks to hidden off-grid spots.`,
      `The interactive map and search features make it easy to find new campsites without the usual headache. It's turned into something people actually use, which is cool.`,
    ],
    techStack: 'Next.js, TypeScript, Sanity',
    url: 'https://www.campvi.ca/',
    slug: 'campvi',
  },
  {
    title: 'Refuge Kitty-Kat Rescue',
    subtitle: 'Helping cats find new homes.',
    image: '/img/work/refuge.webp',
    paragraphs: [
      `Refuge Kitty-Kat needed a new website. Their old one made it harder than it should've been for people to donate, volunteer, or adopt. I rebuilt it from scratch with those three things as the priority.`,

      {
        text: `The results have been good. More donations are flowing in, volunteer applications are up, and adoption rates are climbing. The site's also ranking well for local searches like: `,
        link: {
          text: `'cat rescue montreal.'`,
          url: 'https://www.google.ca/search?q=cat+rescue+montreal',
        },
      },
      `Nice knowing the work is helping cats find homes.`,
    ],
    techStack: 'Next.js, Tailwind, Hygraph',
    url: 'https://www.refugekittykat.com/',
    slug: 'refuge-kitty-kat-rescue',
  },
  {
    title: 'Loon',
    subtitle: 'Shop Canadian, without the extra legwork.',
    image: '/img/work/loon.webp',
    paragraphs: [
      `**LOON IS ARCHIVED.** Adding product data, marketing, and development became too time-consuming for a side project. The code's open-source if another dev wants to run with it.`,
      `Shopping Canadian online was annoying. You'd find something on Amazon, then have to manually search for a local store that carried it.`,
      `Loon handles that for you. It's a browser extension that shows Canadian alternatives while you shop online.`,
      `It was a solid project for tackling challenges like product matching, database design, and extension architecture.`,
    ],
    techStack: 'Vue 3, TypeScript, UnoCSS, Fastify, Supabase',
    url: 'https://getloon.ca/',
    githubUrl: `${githubUsername}/loon`,
    slug: 'loon',
  },
  {
    title: 'TabZen',
    subtitle: 'Clean, distraction-free guitar, bass, and drum tabs.',
    image: '/img/work/tabzen.webp',
    paragraphs: [
      `Guitar tab sites are a mess of ads and popups that regular adblockers don't catch. I got tired of always hiding elements via DevTools, so I built an extension to do it automatically.`,
      `TabZen strips out the clutter so you can actually read the tabs. That's it.`,
    ],
    techStack: 'HTML, CSS, JavaScript',
    url: 'https://tabzen.app/',
    slug: 'tabzen',
  },
]
