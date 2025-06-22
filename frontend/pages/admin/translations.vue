<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">🌐 Translation Manager</h1>
    <select v-model="selectedLocale" class="mb-4 p-2 border rounded">
      <option v-for="locale in locales" :key="locale" :value="locale">{{ locale }}</option>
    </select>
    <div v-if="translations">
      <textarea v-model="jsonText" class="w-full h-96 p-2 border rounded font-mono text-sm" />
      <button @click="save" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">💾 Save</button>
      <p v-if="statusMsg" class="mt-2 text-sm text-gray-500">{{ statusMsg }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const locales = ['en', 'fr', 'es', 'it', 'ko', 'zh']
const selectedLocale = ref('en')
const translations = ref(null)
const jsonText = ref('')
const statusMsg = ref('')

async function loadTranslations(locale: string) {
  try {
    const res = await fetch(`/i18n/locales/${locale}.json`)
    const data = await res.json()
    translations.value = data
    jsonText.value = JSON.stringify(data, null, 2)
    statusMsg.value = ''
  } catch (e) {
    statusMsg.value = 'Failed to load translations.'
  }
}

async function save() {
  try {
    const parsed = JSON.parse(jsonText.value)
    // This would POST to an API in a real app
    statusMsg.value = 'Saved (simulation only).'
  } catch (e) {
    statusMsg.value = 'Invalid JSON.'
  }
}

watch(selectedLocale, loadTranslations)
onMounted(() => loadTranslations(selectedLocale.value))
</script>
