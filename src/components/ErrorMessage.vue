```vue
<script setup>
defineProps({ message: { type: String, required: true } })
</script>

<template>
  <div
    class="flex items-start gap-3 rounded-2xl border border-rose-200/80 bg-rose-50/90 p-4 shadow-lg shadow-rose-900/5 backdrop-blur sm:p-5"
    role="alert"
  >
    <div
      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm"
      aria-hidden="true"
    >
      ⚠️
    </div>

    <div class="min-w-0 flex-1">
      <p class="font-semibold text-rose-800">Unable to load weather</p>
      <p class="mt-1 break-words text-sm leading-6 text-rose-700">
        {{ message }}
      </p>
    </div>
  </div>
</template>
```