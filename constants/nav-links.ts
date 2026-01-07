import { githubUsername } from '~/constants/social-links'

export const navigationLinks = [
  { path: '/about', name: 'About' },
  { path: '/now', name: 'Now' },
  { path: '/contact', name: 'Contact' },
  { path: githubUsername, name: 'GitHub', external: true },
]
