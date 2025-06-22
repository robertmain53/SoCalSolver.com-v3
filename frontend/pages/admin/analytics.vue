<template>
  <div class="p-6">
    <WeeklyTrends />
    <h1 class="text-2xl font-bold mb-4">📊 Calculator Usage Analytics</h1>
    <p class="text-sm text-gray-500 mb-6">Based on mock data (replace with GA export or API)</p>

    <div v-if="chartData.length">
      <h2 class="text-lg font-semibold mb-2">📈 Pageviews Over Time</h2>
      <canvas ref="chartCanvas" class="mb-8"></canvas>
    </div>

    <div>
      <h2 class="text-lg font-semibold mb-2">🏅 Top Calculators</h2>
      <table class="min-w-full text-sm text-left border-collapse">
        <thead>
          <tr class="border-b">
            <th class="p-2">Slug</th>
            <th class="p-2">Total Views</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(total, slug) in sortedTotals" :key="slug" class="border-b hover:bg-gray-50">
            <td class="p-2">{{ slug }}</td>
            <td class="p-2">{{ total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import WeeklyTrends from '~/components/WeeklyTrends.vue'
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const chartCanvas = ref(null)
const chartData = ref([])
const totalViews = ref({})

onMounted(async () => {
  const raw = await $fetch('/analytics/mock.json')
  const labels = Object.keys(raw)
  const allSlugs = new Set()
  const totals = {}

  for (const day of labels) {
    for (const slug in raw[day]) {
      allSlugs.add(slug)
      totals[slug] = (totals[slug] || 0) + raw[day][slug]
    }
  }

  const datasets = [...allSlugs].map(slug => ({
    label: slug,
    data: labels.map(day => raw[day][slug] || 0),
    fill: false,
    tension: 0.2
  }))

  chartData.value = { labels, datasets }
  totalViews.value = totals

  new Chart(chartCanvas.value.getContext('2d'), {
    type: 'line',
    data: { labels, datasets }
  })
})

const sortedTotals = computed(() =>
  Object.fromEntries(
    Object.entries(totalViews.value).sort((a, b) => b[1] - a[1])
  )
)
</script>