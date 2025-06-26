export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    const { locale } = useI18n()
    const route = useRoute()
    // eslint-disable-next-line no-console
    console.log('[NUXT SSR] locale:', locale.value, 'route:', route.fullPath)
  }
})
