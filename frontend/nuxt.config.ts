export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'static'
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    lazy: false,
    locales: [
      { code: 'en', name: 'English' },
      { code: 'it', name: 'Italiano' },
      { code: 'fr', name: 'Français' },
    ],
    detectBrowserLanguage: false
  },
  app: {
    head: {
      link: [
        {
          rel: 'alternate',
          hreflang: 'en',
          href: 'https://example.com/en'
        },
        {
          rel: 'alternate',
          hreflang: 'it',
          href: 'https://example.com/it'
        },
        {
          rel: 'alternate',
          hreflang: 'fr',
          href: 'https://example.com/fr'
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://example.com'
        }
      ]
    }
  }
})
