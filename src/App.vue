<script setup>

import { useWeather } from './composables/useWeather'

import SearchBar from './components/SearchBar.vue'

import CurrentWeather from './components/CurrentWeather.vue'

import ForecastList from './components/ForecastList.vue'

import LoadingSpinner from './components/LoadingSpinner.vue'

import ErrorMessage from './components/ErrorMessage.vue'

const { location, current, forecast, loading, error, search } = useWeather()
</script>
<template>
<div

    class="relative min-h-screen overflow-hidden bg-[#101827] px-4 py-8 text-white sm:px-6 sm:py-12"
>
<!-- Soft ambient background glow -->
<div

      class="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/[0.07] blur-[110px]"
></div>
<div

      class="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-violet-500/[0.07] blur-[120px]"
></div>
<div

      class="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/[0.05] blur-[110px]"
></div>
<main

      class="relative mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-10"
>
<!-- Premium Header -->
<header class="text-center">
<div

          class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035] text-3xl shadow-xl shadow-black/5 backdrop-blur-xl sm:h-20 sm:w-20 sm:text-4xl"
>

          🌤️
</div>
<p

          class="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-sky-400"
>

          Weather Intelligence
</p>
<h1

          class="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl"
>

          Weather<span

            class="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent"
>App</span
>
</h1>
<p

          class="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base"
>

          ရာသီဥတုအခြေအနေနဲ့ ရက်ကြိုတင်ခန့်မှန်းချက်များကို တစ်နေရာတည်းမှာ

          ကြည့်ရှုပါ။
</p>
<div

          class="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.035] px-3 py-1.5"
>
<span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span

            class="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300 sm:text-xs"
>

            Live Weather Dashboard
</span>
</div>
</header>
<!-- Search Panel -->
<section

        class="mx-auto w-full max-w-3xl rounded-3xl border border-white/[0.08] bg-white/[0.025] p-3 shadow-xl shadow-black/[0.04] backdrop-blur-2xl sm:p-4"
>
<div class="mb-3 px-2 pt-1">
<p

            class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400"
>

            Explore a location
</p>
</div>
<SearchBar :disabled="loading" @search="search" />
</section>
<!-- Weather Content -->
<div class="flex min-h-40 flex-col gap-7 sm:gap-9">
<LoadingSpinner v-if="loading" />
<ErrorMessage v-else-if="error" :message="error" />
<template v-else-if="current">
<section class="space-y-4">
<div class="flex items-center justify-between gap-3">
<div>
<p

                  class="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400 sm:text-xs"
>

                  Weather Overview
</p>
<h2 class="mt-1 text-lg font-bold text-white sm:text-xl">

                  လက်ရှိရာသီဥတု
</h2>
</div>
<span

                class="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium text-slate-400 sm:text-xs"
>

                CURRENT
</span>
</div>
<CurrentWeather :location="location" :data="current" />
</section>
<section

            class="rounded-3xl border border-white/[0.06] bg-white/[0.015] p-3 sm:p-5"
>
<ForecastList :days="forecast" />
</section>
</template>
<!-- Empty State -->
<div

          v-else

          class="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] px-5 py-12 text-center shadow-xl shadow-black/[0.04] backdrop-blur-xl sm:px-8 sm:py-16"
>
<div

            class="pointer-events-none absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 rounded-full bg-sky-500/[0.06] blur-3xl"
></div>
<div

            class="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.035] text-5xl shadow-lg"

            aria-hidden="true"
>

            ⛅
</div>
<p class="text-lg font-bold text-white sm:text-xl">

            သင့်မြို့ရဲ့ ရာသီဥတုကို ရှာဖွေလိုက်ပါ
</p>
<p

            class="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400"
>

            မြို့အမည်ကို ရိုက်ထည့်ပြီး လက်ရှိရာသီဥတုနဲ့ ရက်ကြိုတင်ခန့်မှန်းချက်တွေကို

            ကြည့်ရှုနိုင်ပါတယ်။
</p>
<div

            class="mt-6 flex flex-wrap items-center justify-center gap-2"
>
<span

              class="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300"
>

              Yangon
</span>
<span

              class="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300"
>

              Mandalay
</span>
<span

              class="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300"
>

              Singapore
</span>
</div>
</div>
</div>
<!-- Footer -->
<footer class="border-t border-white/[0.06] pt-6 text-center">
<p

          class="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-xs"
>

          Weather Forecast
</p>
<p class="mt-2 text-xs text-slate-600">

          Stay informed. Stay prepared.
</p>
</footer>
</main>
</div>
</template>
 