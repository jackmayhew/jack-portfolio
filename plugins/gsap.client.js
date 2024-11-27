import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  // Defensive initialization
  if (typeof window !== 'undefined') {
    // Ensure ScrollTrigger is loaded client-side
    try {
      // Force mobile-specific configurations
      gsap.config({
        force3D: true,
        nullTargetWarn: false
      })

      // Explicitly import ScrollTrigger and register
      gsap.registerPlugin(ScrollTrigger)

      // Aggressive touch event handling
      ScrollTrigger.config({
        ignoreMobileResize: true,
        preventDefault: true,
        autoRefreshEvents: []
      })

      // Add global touch event listeners to prevent blocking
      window.addEventListener('touchstart', (e) => {
        // Prevent potential event blocking
        e.stopPropagation()
      }, { passive: true })

      // Force ScrollTrigger to reset on route changes
      nuxtApp.hook('page:finish', () => {
        ScrollTrigger.refresh()
        ScrollTrigger.getAll().forEach(trigger => trigger.refresh())
      })
    } catch (error) {
      console.error('GSAP ScrollTrigger initialization error:', error)
    }
  }
  
  nuxtApp.provide('gsap', gsap)
})