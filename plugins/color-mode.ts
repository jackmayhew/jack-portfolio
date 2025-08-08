import { watch } from 'vue'

export default defineNuxtPlugin(() => {
  // updates the browser's theme-color meta tag to match the current color mode
  const colorMode = useColorMode()

  const updateThemeColor = (newColorMode: string) => {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]')
    if (themeColorMeta) {
      const color = newColorMode === 'dark' ? '#121212' : '#FDFAF5'
      themeColorMeta.setAttribute('content', color)
    }
  }

  watch(() => colorMode.value, updateThemeColor, { immediate: true })
})
