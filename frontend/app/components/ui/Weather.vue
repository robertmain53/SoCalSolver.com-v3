<script setup>
import { getWeather } from '../lib/WeatherApi.js'

const weatherData = ref(null)
const { locale } = useI18n()

const CACHE_EXPIRATION = 30 * 60 * 1000

async function fetchWeatherData(newLocale) {
  const cacheKey = `weatherData_${newLocale}`
  const cachedData = JSON.parse(localStorage.getItem(cacheKey))
  const now = new Date().getTime()

  if (cachedData && cachedData.timestamp && now - cachedData.timestamp < CACHE_EXPIRATION) {
    weatherData.value = cachedData.data
    return
  }

  try {
    const data = await getWeather(null, newLocale)
    weatherData.value = data
    localStorage.setItem(cacheKey, JSON.stringify({
      data,
      timestamp: now,
    }))
  }
  catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

watch(
  () => locale.value,
  (newLocale, oldLocale) => {
    if (newLocale !== oldLocale) {
      fetchWeatherData(newLocale)
    }
  },
)

onMounted(() => {
  fetchWeatherData(locale.value)
})
</script>

<template>
  <div
    class="flex items-center children:m0 space-x-2" :style="{
      height: '30px',
      opacity: weatherData ? 1 : 0,
      transition: 'opacity 0.3s ease',
    }"
  >
    <template v-if="weatherData">
      <p>{{ weatherData.location.name }}</p>
      <p class="font-bold">
        {{ weatherData.current.temp_c }}°C
      </p>
      <p>{{ weatherData.current.condition.text }}</p>
    </template>
  </div>
</template>
