const BASE_URL = 'https://api.openweathermap.org'
const API_KEY = import.meta.env.VITE_OWM_API_KEY

const ERROR_MESSAGES = {
    401: 'API key မမှန်ပါ (သို့) မ activate ဖြစ်သေးပါ',
    404: 'ရှာမတွေ့ပါ',
    429: 'Request များလွန်းပါတယ်၊ ခဏစောင့်ပြီး ပြန်ကြိုးစားပါ',
    }

    async function request(path, params) {
    const query = new URLSearchParams({ ...params, appid: API_KEY })

    let res
    try {
        res = await fetch(`${BASE_URL}${path}?${query}`)
    } catch {
        throw new Error('Internet ချိတ်ဆက်မှု မရှိပါ')
    }

    if (!res.ok) {
        throw new Error(ERROR_MESSAGES[res.status] ?? `Server error (${res.status})`)
    }
    return res.json()
    }

    export async function getCoordinates(city) {
    const data = await request('/geo/1.0/direct', { q: city, limit: 1 })
    if (data.length === 0) {
        throw new Error(`"${city}" မြို့ကို ရှာမတွေ့ပါ`)
    }
    const { name, country, lat, lon } = data[0]
    return { name, country, lat, lon }
    }

    export function getCurrentWeather(lat, lon, units = 'metric') {
    return request('/data/2.5/weather', { lat, lon, units })
    }

    export function getForecast(lat, lon, units = 'metric') {
    return request('/data/2.5/forecast', { lat, lon, units })
}