<script setup>
import { getIconUrl, formatDay } from '../utils/format'

defineProps({ days: { type: Array, required: true } })
</script>

<template>
    <section>
        <h3 class="mb-3 text-lg font-semibold text-slate-800">ရက်ကြိုတင်ခန့်မှန်းချက်</h3>
        <ul class="grid grid-cols-2 gap-3 md:grid-cols-5">
        <li
            v-for="day in days"
            :key="day.date"
            class="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow"
        >
            <span class="text-sm font-medium text-slate-600">{{ formatDay(day.date) }}</span>
            <img :src="getIconUrl(day.icon)" :alt="day.description" class="h-14 w-14" />
            <span class="font-semibold text-slate-900">{{ day.max }}° / {{ day.min }}°</span>
            <span class="text-xs capitalize text-slate-500">{{ day.description }}</span>
        </li>
        </ul>
    </section>
</template>