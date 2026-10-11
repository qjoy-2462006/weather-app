```vue
<script setup>
import { computed } from 'vue'
import { getIconUrl, formatDay } from '../utils/format'

const props = defineProps({
  days: { type: Array, required: true },
})

const getTheme = (day) => {
  const id = Number(day.icon?.slice(0, 2))
  const temp = Number(day.max)
  const description = (day.description || '').toLowerCase()

  // Thunderstorm
  if (id >= 20 && id < 30 || description.includes('thunder')) {
    return {
      card: 'bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-800',
      border: 'border-indigo-300/20',
      date: 'text-indigo-200',
      temperature: 'text-white',
      separator: 'text-indigo-300',
      description: 'text-indigo-200',
    }
  }

  // Rain and drizzle
  if (
    (id >= 30 && id < 60) ||
    description.includes('rain') ||
    description.includes('drizzle')
  ) {
    return {
      card: 'bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400',
      border: 'border-white/20',
      date: 'text-blue-50',
      temperature: 'text-white',
      separator: 'text-blue-100',
      description: 'text-blue-50',
    }
  }

  // Snow
  if (
    (id >= 60 && id < 70) ||
    description.includes('snow') ||
    description.includes('sleet')
  ) {
    return {
      card: 'bg-gradient-to-br from-sky-100 via-cyan-50 to-white',
      border: 'border-sky-200',
      date: 'text-sky-700',
      temperature: 'text-slate-800',
      separator: 'text-sky-400',
      description: 'text-slate-500',
    }
  }

  // Fog, mist, haze
  if (
    (id >= 70 && id < 80) ||
    description.includes('fog') ||
    description.includes('mist') ||
    description.includes('haze')
  ) {
    return {
      card: 'bg-gradient-to-br from-slate-300 via-gray-200 to-stone-100',
      border: 'border-white/70',
      date: 'text-slate-600',
      temperature: 'text-slate-800',
      separator: 'text-slate-400',
      description: 'text-slate-500',
    }
  }

  // Clear and hot
  if (id === 80 || description.includes('clear')) {
    if (temp >= 35) {
      return {
        card: 'bg-gradient-to-br from-amber-400 via-orange-300 to-yellow-200',
        border: 'border-white/60',
        date: 'text-orange-900',
        temperature: 'text-orange-950',
        separator: 'text-orange-700',
        description: 'text-orange-900',
      }
    }

    if (temp >= 28) {
      return {
        card: 'bg-gradient-to-br from-yellow-200 via-amber-100 to-orange-50',
        border: 'border-white/80',
        date: 'text-amber-800',
        temperature: 'text-slate-900',
        separator: 'text-amber-600',
        description: 'text-amber-800',
      }
    }

    return {
      card: 'bg-gradient-to-br from-sky-200 via-blue-100 to-amber-50',
      border: 'border-white/80',
      date: 'text-sky-700',
      temperature: 'text-slate-900',
      separator: 'text-sky-500',
      description: 'text-slate-600',
    }
  }

  // Cloudy
  if (id > 80 || description.includes('cloud')) {
    return {
      card: 'bg-gradient-to-br from-slate-200 via-indigo-100 to-violet-100',
      border: 'border-white/80',
      date: 'text-indigo-700',
      temperature: 'text-slate-800',
      separator: 'text-indigo-400',
      description: 'text-slate-600',
    }
  }

  // Fallback
  return {
    card: 'bg-gradient-to-br from-sky-100 via-white to-blue-100',
    border: 'border-white/80',
    date: 'text-slate-600',
    temperature: 'text-slate-900',
    separator: 'text-slate-400',
    description: 'text-slate-500',
  }
}

const themedDays = computed(() =>
  props.days.map((day) => ({
    ...day,
    theme: getTheme(day),
  })),
)
</script>

<template>
  <section>
    <div class="mb-4 flex flex-wrap items-end justify-between gap-2">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          5-Day Outlook
        </p>

        <h3 class="mt-1 text-xl font-bold text-slate-800">
          ရက်ကြိုတင်ခန့်မှန်းချက်
        </h3>
      </div>
    </div>

    <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      <li
        v-for="day in themedDays"
        :key="day.date"
        class="flex min-w-0 flex-col items-center rounded-2xl border p-3 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4"
        :class="[day.theme.card, day.theme.border]"
      >
        <span class="text-sm font-semibold" :class="day.theme.date">
          {{ formatDay(day.date) }}
        </span>

        <img
          :src="getIconUrl(day.icon)"
          :alt="day.description"
          class="my-2 h-14 w-14 drop-shadow-sm transition-transform duration-300 sm:h-16 sm:w-16"
        />

        <span
          class="text-sm font-bold sm:text-base"
          :class="day.theme.temperature"
        >
          {{ day.max }}°
          <span :class="day.theme.separator">/</span>
          {{ day.min }}°
        </span>

        <span
          class="mt-1 w-full break-words text-xs capitalize leading-relaxed"
          :class="day.theme.description"
        >
          {{ day.description }}
        </span>
      </li>
    </ul>
  </section>
</template>
```