import type { TimelineEvent } from '~/types/now/timeline-event.types'

// considered using a markdown file, but felt overkill. sticking with js object for now
export const now: TimelineEvent[] = [
  {
    displayDate: 'August 2025',
    formateDate: '2024-08-17',
    desc: `Built Loon, a browser extension that helps Canadians find local alternatives while shopping online. It's live and the MVP is officially launching 2025/08/22. Built it to make supporting local businesses easier.`,
    link: {
      url: 'https://getloon.ca/',
      text: 'Check it out.',
    },
  },
  {
    displayDate: 'October 2024',
    formateDate: '2024-10-31',
    desc: `Built a new portfolio website (the one you're on now). Kept it simple and minimalist. First time building with Nuxt and I'm really liking it. The developer experience is smooth and the tooling is really nice. You can check out the code on my `,
    link: {
      url: 'https://github.com/jackmayhew/jack-portfolio',
      text: 'GitHub.',
    },
  },
  {
    displayDate: 'April 2024',
    formateDate: '2024-06-15',
    desc: `Worked with Refuge Kitty Kat Rescue to build their new website. Cool to see it actually help their mission - more donations, volunteers, and cat adoptions. Nothing beats working on projects that make a real difference.`,
  },
  {
    displayDate: 'December 2023',
    formateDate: '2022-11-01',
    desc: `Moved to Montreal! Still getting used to it but it's been good. My French is rusty but slowly coming back. Big fan of smoked meat sandwiches.`,
  },
]
