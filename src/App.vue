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
  <div class="min-h-screen bg-gradient-to-b from-sky-200 to-sky-50 px-4 py-8">
    <main class="mx-auto flex max-w-3xl flex-col gap-6">
      <h1 class="text-3xl font-bold text-slate-900">🌤 Weather App</h1>

      <SearchBar :disabled="loading" @search="search" />

      <LoadingSpinner v-if="loading" />
      <ErrorMessage v-else-if="error" :message="error" />
      <template v-else-if="current">
        <CurrentWeather :location="location" :data="current" />
        <ForecastList :days="forecast" />
      </template>
      <p v-else class="text-center text-slate-600">
        မြို့အမည်ရိုက်ပြီး ရာသီဥတုကို ရှာကြည့်ပါ။
      </p>
    </main>
  </div>
</template>