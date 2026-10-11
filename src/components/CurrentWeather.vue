```vue
<script setup>
import { computed } from 'vue'
import { getIconUrl } from '../utils/format'

const props = defineProps({
  location: { type: Object, required: true },
  data: { type: Object, required: true },
})

const weather = computed(() => props.data.weather[0])

const theme = computed(() => {
  const temp = props.data.main.temp
  const id = weather.value.id
  const main = weather.value.main?.toLowerCase() || ''

  // Thunderstorm
  if (id >= 200 && id < 300) {
    return {
      card: 'bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900',
      border: 'border-indigo-300/20',
      label: 'text-purple-200',
      title: 'text-white',
      description: 'text-indigo-200',
      temperature: 'text-white',
      unit: 'text-indigo-200',
      statCard: 'bg-white/10 border border-white/10',
      statLabel: 'text-indigo-200',
      statValue: 'text-white',
      shadow: 'shadow-indigo-950/20',
    }
  }

  // Rain, drizzle and snow
  if ((id >= 300 && id < 600) || (id >= 600 && id < 700)) {
    const snowy = id >= 600

    return {
      card: snowy
        ? 'bg-gradient-to-br from-sky-100 via-cyan-50 to-white'
        : 'bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-500',
      border: snowy ? 'border-sky-200' : 'border-white/20',
      label: snowy ? 'text-sky-700' : 'text-sky-100',
      title: snowy ? 'text-slate-800' : 'text-white',
      description: snowy ? 'text-slate-600' : 'text-blue-100',
      temperature: snowy ? 'text-slate-900' : 'text-white',
      unit: snowy ? 'text-sky-600' : 'text-blue-100',
      statCard: snowy
        ? 'bg-white/75 border border-sky-100'
        : 'bg-white/15 border border-white/15',
      statLabel: snowy ? 'text-slate-500' : 'text-blue-100',
      statValue: snowy ? 'text-slate-800' : 'text-white',
      shadow: 'shadow-sky-900/10',
    }
  }

  // Atmosphere: fog, mist, haze, smoke, dust
  if (id >= 700 && id < 800) {
    return {
      card: 'bg-gradient-to-br from-slate-300 via-gray-200 to-stone-100',
      border: 'border-white/70',
      label: 'text-slate-600',
      title: 'text-slate-800',
      description: 'text-slate-600',
      temperature: 'text-slate-900',
      unit: 'text-slate-500',
      statCard: 'bg-white/65 border border-white/70',
      statLabel: 'text-slate-500',
      statValue: 'text-slate-800',
      shadow: 'shadow-slate-900/10',
    }
  }

  // Clear sky: change color according to temperature
  if (id === 800 || main.includes('clear')) {
    if (temp >= 35) {
      return {
        card: 'bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-300',
        border: 'border-white/50',
        label: 'text-orange-900',
        title: 'text-orange-950',
        description: 'text-orange-900',
        temperature: 'text-orange-950',
        unit: 'text-orange-800',
        statCard: 'bg-white/35 border border-white/40',
        statLabel: 'text-orange-900',
        statValue: 'text-orange-950',
        shadow: 'shadow-orange-900/10',
      }
    }

    if (temp >= 28) {
      return {
        card: 'bg-gradient-to-br from-yellow-300 via-amber-200 to-orange-100',
        border: 'border-white/70',
        label: 'text-amber-800',
        title: 'text-slate-900',
        description: 'text-amber-800',
        temperature: 'text-slate-950',
        unit: 'text-amber-700',
        statCard: 'bg-white/45 border border-white/60',
        statLabel: 'text-slate-600',
        statValue: 'text-slate-900',
        shadow: 'shadow-amber-900/10',
      }
    }

    return {
      card: 'bg-gradient-to-br from-sky-200 via-blue-100 to-amber-50',
      border: 'border-white/80',
      label: 'text-sky-700',
      title: 'text-slate-800',
      description: 'text-slate-600',
      temperature: 'text-slate-900',
      unit: 'text-sky-600',
      statCard: 'bg-white/60 border border-white/70',
      statLabel: 'text-slate-500',
      statValue: 'text-slate-800',
      shadow: 'shadow-sky-900/10',
    }
  }

  // Cloudy
  if (id > 800 || main.includes('cloud')) {
    return {
      card: 'bg-gradient-to-br from-slate-200 via-indigo-100 to-violet-100',
      border: 'border-white/80',
      label: 'text-indigo-700',
      title: 'text-slate-800',
      description: 'text-slate-600',
      temperature: 'text-slate-900',
      unit: 'text-indigo-600',
      statCard: 'bg-white/60 border border-white/70',
      statLabel: 'text-slate-500',
      statValue: 'text-slate-800',
      shadow: 'shadow-indigo-900/10',
    }
  }

  // Fallback for unusual weather conditions
  return {
    card: 'bg-gradient-to-br from-sky-100 via-white to-blue-100',
    border: 'border-white/80',
    label: 'text-sky-700',
    title: 'text-slate-800',
    description: 'text-slate-500',
    temperature: 'text-slate-900',
    unit: 'text-slate-400',
    statCard: 'bg-white/60 border border-white/70',
    statLabel: 'text-slate-500',
    statValue: 'text-slate-800',
    shadow: 'shadow-sky-900/10',
  }
})
</script>

<template>
  <section
    class="overflow-hidden rounded-3xl border p-5 shadow-xl backdrop-blur transition-colors duration-700 sm:p-8"
    :class="[theme.card, theme.border, theme.shadow]"
  >
    <div class="flex flex-wrap items-start justify-between gap-3">
      <div class="min-w-0">
        <p
          class="text-xs font-semibold uppercase tracking-[0.2em]"
          :class="theme.label"
        >
          Current Weather
        </p>

        <h2
          class="mt-2 break-words text-xl font-bold sm:text-2xl"
          :class="theme.title"
        >
          {{ location.name }}, {{ location.country }}
        </h2>

        <p class="mt-1 capitalize" :class="theme.description">
          {{ weather.description }}
        </p>
      </div>

      <img
        :src="getIconUrl(weather.icon?.replace('n', 'd'))"
        :alt="weather.description"
        class="h-20 w-20 shrink-0 drop-shadow-md transition-transform duration-500 sm:h-28 sm:w-28"
      />
    </div>

    <div class="mt-4 flex items-center gap-3 sm:mt-2">
      <p
        class="text-6xl font-extrabold tracking-tight sm:text-7xl"
        :class="theme.temperature"
      >
        {{ Math.round(data.main.temp) }}°
      </p>

      <span class="text-2xl font-medium" :class="theme.unit">C</span>
    </div>

    <dl class="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div
        class="rounded-2xl p-4 backdrop-blur-sm transition-colors duration-700"
        :class="theme.statCard"
      >
        <dt class="text-sm" :class="theme.statLabel">ခံစားရမှု</dt>
        <dd class="mt-2 text-xl font-bold" :class="theme.statValue">
          {{ Math.round(data.main.feels_like) }}°C
        </dd>
      </div>

      <div
        class="rounded-2xl p-4 backdrop-blur-sm transition-colors duration-700"
        :class="theme.statCard"
      >
        <dt class="text-sm" :class="theme.statLabel">စိုထိုင်းဆ</dt>
        <dd class="mt-2 text-xl font-bold" :class="theme.statValue">
          {{ data.main.humidity }}%
        </dd>
      </div>

      <div
        class="rounded-2xl p-4 backdrop-blur-sm transition-colors duration-700"
        :class="theme.statCard"
      >
        <dt class="text-sm" :class="theme.statLabel">လေတိုက်နှုန်း</dt>
        <dd class="mt-2 break-words text-xl font-bold" :class="theme.statValue">
          {{ data.wind.speed }} m/s
        </dd>
      </div>
    </dl>
  </section>
</template>
```