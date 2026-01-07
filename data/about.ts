import type { AboutItem } from '~/types/about/about-item.types'
import { emailAddress } from '~/constants/social-links'

// considered a markdown file, but felt overkill
export const about: AboutItem[] = [
  {
    headline: 'Intro',
    text: `I started coding in 2019, building websites for friends and family. Nothing fancy, but it was enough to get me hooked. From there, I got to work studying all things web development and working towards landing my first role.`,
  },
  {
    headline: 'Work Experience',
    text: `In 2022, I worked as a full-stack developer at Gain Group in Victoria, BC, building websites for luxury car dealerships and diving deep into the wonderful world of email development. Really enjoyed working with the team and I learned a ton.`,
  },
  {
    headline: 'Nowadays',
    text: `These days, I split my time between carpentry and freelance web development. Different tools, but equally satisfying when everything comes together!`,
  },
  {
    headline: 'Outside of Coding',
    text: `Outside of coding, you can find me playing baseball or soccer, surfing, or playing my bass guitar. Currently living and working in Victoria, BC.`,
  },
  {
    headline: 'Get in Touch',
    text: `If you're around and want to chat, `,
    link: {
      url: `mailto:${emailAddress}`,
      text: 'drop me a message!',
    },
  },
]
