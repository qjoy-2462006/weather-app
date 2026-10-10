<script setup>
import { useWeather } from './composables/useWeather'

const { location, current, forecast, loading, error, search } = useWeather()
search('Yangon')
</script>

<template>
  <pre class="p-4 text-sm">{{ { loading, error, location, temp: current?.main.temp, forecast } }}</pre>
</template>