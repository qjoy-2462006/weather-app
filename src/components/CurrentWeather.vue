<script setup>
import { computed } from 'vue'
import { getIconUrl } from '../utils/format'

const props = defineProps({
    location: { type: Object, required: true },
    data: { type: Object, required: true },
})

const weather = computed(() => props.data.weather[0])
</script>

<template>
    <section class="rounded-2xl bg-white p-6 shadow-md">
        <h2 class="text-xl font-semibold text-slate-800">
        {{ location.name }}, {{ location.country }}
        </h2>

        <div class="flex items-center justify-between">
        <div>
            <p class="text-6xl font-bold text-slate-900">
            {{ Math.round(data.main.temp) }}°C
            </p>
            <p class="mt-1 capitalize text-slate-600">{{ weather.description }}</p>
        </div>
        <img :src="getIconUrl(weather.icon)" :alt="weather.description" class="h-24 w-24" />
        </div>

        <dl class="mt-4 grid grid-cols-3 gap-3 text-center">
        <div class="rounded-xl bg-sky-50 p-3">
            <dt class="text-xs text-slate-500">ခံစားရမှု</dt>
            <dd class="font-semibold text-slate-800">{{ Math.round(data.main.feels_like) }}°C</dd>
        </div>
        <div class="rounded-xl bg-sky-50 p-3">
            <dt class="text-xs text-slate-500">စိုထိုင်းဆ</dt>
            <dd class="font-semibold text-slate-800">{{ data.main.humidity }}%</dd>
        </div>
        <div class="rounded-xl bg-sky-50 p-3">
            <dt class="text-xs text-slate-500">လေ</dt>
            <dd class="font-semibold text-slate-800">{{ data.wind.speed }} m/s</dd>
        </div>
        </dl>
    </section>
</template>