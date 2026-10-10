export function getIconUrl(icon) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
    }

    // forecast list (၃ နာရီခြား ၄၀ items) ကို ရက်အလိုက် အုပ်စုခွဲ
export function groupForecastByDay(forecast) {
    const offset = forecast.city.timezone // စက္ကန့်
    const days = new Map()

    for (const item of forecast.list) {
        const local = new Date((item.dt + offset) * 1000)
        const date = local.toISOString().slice(0, 10) // YYYY-MM-DD
        const hour = local.getUTCHours()

        if (!days.has(date)) {
        days.set(date, { date, min: Infinity, max: -Infinity, best: item, bestGap: Infinity })
        }
        const day = days.get(date)

        day.min = Math.min(day.min, item.main.temp_min)
        day.max = Math.max(day.max, item.main.temp_max)

        // မွန်းတည့် (12:00) နဲ့ အနီးဆုံး item ကို icon အတွက်ရွေး
        const gap = Math.abs(hour - 12)
        if (gap < day.bestGap) {
        day.best = item
        day.bestGap = gap
        }
    }

    return [...days.values()].slice(0, 5).map((d) => ({
        date: d.date,
        min: Math.round(d.min),
        max: Math.round(d.max),
        icon: d.best.weather[0].icon,
        description: d.best.weather[0].description,
    }))
}

export function formatDay(dateStr) {
    return new Date(`${dateStr}T00:00:00`).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    })
}