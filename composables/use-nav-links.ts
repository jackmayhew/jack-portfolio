export function useNavLinks() {
  const navigationLinks = [
    { path: '/about', name: 'About' },
    { path: '/now', name: 'Now' },
    { path: '/contact', name: 'Contact' },
    { path: 'https://github.com/jackmayhew', name: 'GitHub', external: true },
  ]
  return {
    navigationLinks,
  }
}
