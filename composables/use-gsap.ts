import gsap from 'gsap'

/**
 * Fades in a target element using GSAP.
 * @param target - The element to animate.
 * @returns An object with a `cleanup` function to call on component unmount.
 */
export function pageLoadGSAP(target: gsap.DOMTarget) {
  // return a dummy cleanup function if the target isn't valid
  if (!target) {
    console.warn('gsap pageLoad animation called with no target')
    return { cleanup: () => {} }
  }

  const context = gsap.context(() => {
    const timeline = gsap.timeline()
    timeline.fromTo(
      target,
      { y: 15, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power2.out' },
      0.5,
    )
  })

  return {
    cleanup: () => context.revert(),
  }
}
