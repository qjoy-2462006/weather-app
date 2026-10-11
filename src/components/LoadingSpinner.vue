```vue
<template>
  <div
    class="flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/70 bg-white/60 px-5 py-12 shadow-lg shadow-sky-900/5 backdrop-blur sm:py-16"
    role="status"
    aria-live="polite"
  >
    <div class="relative flex h-14 w-14 items-center justify-center">
      <div
        class="absolute inset-0 animate-spin rounded-full border-4 border-sky-100 border-t-sky-600"
      ></div>
      <span class="text-xl" aria-hidden="true">🌤️</span>
    </div>

    <div class="text-center">
      <p class="font-semibold text-slate-800">Loading weather...</p>
      <p class="mt-1 text-sm text-slate-500">
        Fetching the latest weather data...
      </p>
    </div>
  </div>
</template>
```