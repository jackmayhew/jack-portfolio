export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()
  const updateThemeColor = () => {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]')
    if (themeColorMeta) {
      // Use transparent or a color that matches your background transition
      themeColorMeta.setAttribute('content', 'transparent')
    }
  }

  updateThemeColor()

  watch(() => colorMode.preference, updateThemeColor)
})