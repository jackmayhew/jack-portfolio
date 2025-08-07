import gsap from 'gsap'

export function pageLoadGSAP() {
  const context = gsap.context(() => {
    const timeline = gsap.timeline()
    timeline.fromTo(
      '.main-content',
      { y: 15, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power2.out' },
      0.5,
    )
  })

  return {
    context,
    cleanup: () => context.revert(),
  }
}
