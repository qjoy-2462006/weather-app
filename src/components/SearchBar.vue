```vue
<script setup>
import { ref } from 'vue'

defineProps({ disabled: Boolean })
const emit = defineEmits(['search'])

const city = ref('')

function submit() {
  const name = city.value.trim()
  if (!name || !name.length) return
  emit('search', name)
}
</script>

<template>
  <form
    class="flex w-full flex-col gap-3 rounded-2xl border border-white/70 bg-white/80 p-3 shadow-lg shadow-sky-900/5 backdrop-blur sm:flex-row sm:gap-2"
    @submit.prevent="submit"
  >
    <input
      v-model="city"
      type="text"
      placeholder="မြို့အမည်ရိုက်ပါ... (ဥပမာ Yangon)"
      aria-label="မြို့အမည်"
      class="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
    />

    <button
      type="submit"
      :disabled="disabled || !city.trim()"
      class="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-sky-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:min-w-28"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      ရှာမယ်
    </button>
  </form>
</template>
```