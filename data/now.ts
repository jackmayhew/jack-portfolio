import type { TimelineEvent } from '~/types/now/timeline-event.types'

// considered using a markdown file, but felt overkill. sticking with js object for now
export const now: TimelineEvent[] = [
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
  {
    displayDate: 'March 2022',
    formateDate: '2022-05-01',
    desc: `Starting a new role at Gain Group. Excited to dig in and learn from the team. First real dev job so there's a lot to figure out, but that's part of the fun.`,
  },
]
