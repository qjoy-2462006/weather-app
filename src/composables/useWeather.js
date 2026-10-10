import { ref } from 'vue'
import { getCoordinates, getCurrentWeather, getForecast } from '../services/weatherApi'
import { groupForecastByDay } from '../utils/format'

export function useWeather() {
    const location = ref(null)
    const current = ref(null)
    const forecast = ref([])
    const loading = ref(false)
    const error = ref('')

    async function search(city) {
        const name = city.trim()
        if (!name) return

        loading.value = true
        error.value = ''

        try {
        const loc = await getCoordinates(name)
        const [cur, fc] = await Promise.all([
            getCurrentWeather(loc.lat, loc.lon),
            getForecast(loc.lat, loc.lon),
        ])
        location.value = loc
        current.value = cur
        forecast.value = groupForecastByDay(fc)
        } catch (e) {
        error.value = e.message
        current.value = null
        forecast.value = []
        } finally {
        loading.value = false
        }
    }

    return { location, current, forecast, loading, error, search }
}