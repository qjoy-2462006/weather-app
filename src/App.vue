<template>
  <div class="min-h-screen bg-sky-100 flex items-center justify-center">
    <h1 class="text-4xl font-bold text-sky-700">Tailwind အလုပ်လုပ်တယ်!</h1>
  </div>
</template>

<script setup>
console.log('key loaded:', Boolean(import.meta.env.VITE_OWM_API_KEY))
</script>