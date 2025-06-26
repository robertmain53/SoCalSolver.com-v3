export default defineNuxtPlugin(async (nuxtApp) => {
    if (process.server) {
      const i18n = useI18n();
  
      const allLocales = i18n.availableLocales || [];
      for (const locale of allLocales) {
        try {
          await i18n.setLocale(locale);
        } catch (e) {
          console.warn(`[i18n preload] Failed to load locale ${locale}`, e);
        }
      }
  
      // Revert to default locale
      await i18n.setLocale(i18n.defaultLocale);
    }
  });
  