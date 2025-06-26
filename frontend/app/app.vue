<template>
  <ColorScheme>
    <div class="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <!-- Header -->
      <AppHeader />

      <!-- Main content -->
      <main class="flex-1 px4 py6 md:px8 md:py10">
        <NuxtPage />
      </main>

      <!-- Footer -->
      <AppFooter />
    </div>
  </ColorScheme>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { locale } = useI18n()
const route = useRoute()

if (process.server) {
  // This will log during SSR
  // eslint-disable-next-line no-console
  console.log('[NUXT SSR] locale:', locale.value, 'route:', route.fullPath)
}
</script>
