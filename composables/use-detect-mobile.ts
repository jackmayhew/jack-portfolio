import { useWindowSize } from '@vueuse/core'
import { onMounted, ref } from 'vue'

export function useDetectMobile() {
  const isMobile = ref(false)
  const isIOS = ref(false)
  const { width } = useWindowSize()

  const checkForMobile = () => {
    // look for touch capability AND a small screen width.
    // correctly excludes iPads in landscape mode and touchscreen laptops
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    // consider anything under 768px (a common tablet breakpoint) to be "mobile-like"
    isMobile.value = hasTouch && width.value < 768
  }

  // watcher ensures it updates on resize (e.g., rotating a tablet)
  onMounted(() => {
    checkForMobile()
    watch(width, checkForMobile)
  })

  return { isMobile, isIOS }
}
