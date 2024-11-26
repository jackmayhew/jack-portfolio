export default defineNuxtPlugin(() => {
    const colorMode = useColorMode()
    const updateThemeColor = () => {
      const themeColorMeta = document.querySelector('meta[name="theme-color"]')
      if (themeColorMeta) {
        const color = colorMode.preference === 'dark' ? '#000000' : '#ffffff'
        themeColorMeta.setAttribute('content', color)
      } else {
        console.warn('meta[name="theme-color"] not found')
      }
    }

    updateThemeColor()
  
    watch(() => colorMode.preference, updateThemeColor)
  })
  