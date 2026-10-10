<script setup>
import { ref } from 'vue'

defineProps({ disabled: Boolean })
const emit = defineEmits(['search'])

const city = ref('')

function submit() {
    const name = city.value.trim()
    if (!name) return
    emit('search', name)
}
</script>

<template>
    <form class="flex gap-2" @submit.prevent="submit">
        <input
        v-model="city"
        type="text"
        placeholder="မြို့အမည်ရိုက်ပါ... (ဥပမာ Yangon)"
        class="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />
        <button
        type="submit"
        :disabled="disabled"
        class="rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
        ရှာမယ်
        </button>
    </form>
</template>