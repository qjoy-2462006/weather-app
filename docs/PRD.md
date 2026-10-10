# Weather App: Product Requirements Document (PRD)

Version 1.0 · 2026-10-10 · Status: Phase 1 (MVP) တည်ဆောက်ပြီး၊ Phase 2 စီစဉ်ဆဲ

## 1. အကျဉ်းချုပ်

Weather App သည် အသုံးပြုသူက မြို့အမည်ရိုက်ထည့်ပြီး လက်ရှိရာသီဥတုနှင့် ရက် ၅ ရက်စာ ခန့်မှန်းချက်ကို ကြည့်နိုင်သော single-page web application ဖြစ်သည်။ OpenWeatherMap API ကို Fetch ဖြင့်ခေါ်ပြီး Vue 3 + Vite + Tailwind CSS ဖြင့် တည်ဆောက်ထားသည်။ Front-end developer တစ်ဦး၏ သင်ယူမှုနှင့် portfolio project အဖြစ်လည်း ရည်ရွယ်သည်။

## 2. ရည်ရွယ်ချက်နှင့် အောင်မြင်မှုစံနှုန်း

**ရည်ရွယ်ချက်**

- မြို့တစ်ခု၏ ရာသီဥတုကို စက္ကန့်အနည်းငယ်အတွင်း ရှင်းရှင်းလင်းလင်း ပြသရန်
- API ခေါ်ခြင်း၊ state စီမံခြင်း၊ component ခွဲခြင်းတို့ကို စနစ်တကျ လေ့ကျင့်ရန်
- Git branch workflow ဖြင့် feature တစ်ခုချင်း တည်ဆောက်ရန်
- Deploy လုပ်ပြီး live demo link ပေးနိုင်ရန်

**အောင်မြင်မှုစံနှုန်း**

- မြို့အမည်မှန်လျှင် ရလဒ်ကို loading ပြီး ၃ စက္ကန့်ခန့်အတွင်း ပြသနိုင်ခြင်း (network ပေါ်မူတည်)
- Error ရှိလျှင် (မြို့မတွေ့၊ offline၊ key မှား) နားလည်လွယ်သော မြန်မာစာ message ပြခြင်း
- Mobile, tablet, desktop သုံးမျိုးလုံးတွင် layout မပျက်ခြင်း
- API key ကို GitHub repo ထဲ မရောက်စေခြင်း

## 3. Target Users

| အမျိုးအစား | လိုအပ်ချက် |
| --- | --- |
| ပုံမှန်သုံးစွဲသူ | မြို့တစ်ခု၏ ရာသီဥတုကို မြန်မြန်ကြည့်လိုသူ |
| Developer (project ပိုင်ရှင်) | Clean code structure၊ ထပ်တိုးရလွယ်သော architecture |

## 4. Scope

**In scope (Phase 1)**

- မြို့အမည်ဖြင့် ရှာဖွေခြင်း
- လက်ရှိရာသီဥတု ပြသခြင်း
- ရက် ၅ ရက် forecast ပြသခြင်း
- Loading / Error / Empty state
- Responsive UI

**Out of scope (လက်ရှိ)**

- User account / login
- Backend server
- Hourly forecast၊ map၊ weather alerts
- One Call API 3.0 (card ချိတ်ရန်လိုနိုင်သဖြင့်)

## 5. Functional Requirements

| ID | Requirement | Status |
| --- | --- | --- |
| FR-01 | User သည် input တွင် မြို့အမည်ရိုက်ပြီး Enter သို့မဟုတ် ခလုတ်နှိပ်၍ ရှာနိုင်ရမည် | တည်ဆောက်ပြီး |
| FR-02 | Input အလွတ် (သို့) space သာပါလျှင် request မပို့ရ | တည်ဆောက်ပြီး |
| FR-03 | မြို့အမည်ကို Geocoding API ဖြင့် lat/lon အဖြစ်ပြောင်းရမည် | တည်ဆောက်ပြီး |
| FR-04 | လက်ရှိအပူချိန်၊ ခံစားရမှု၊ စိုထိုင်းဆ၊ လေအမြန်နှုန်း၊ အခြေအနေ၊ icon ပြရမည် | တည်ဆောက်ပြီး |
| FR-05 | ရက် ၅ ရက်စာ forecast (အမြင့်/အနိမ့်အပူချိန်၊ icon၊ ဖော်ပြချက်) ကို ကဒ်ဖြင့်ပြရမည် | တည်ဆောက်ပြီး |
| FR-06 | Current နှင့် forecast ကို တပြိုင်နက် (parallel) ခေါ်ရမည် | တည်ဆောက်ပြီး |
| FR-07 | ရှာဖွေနေစဉ် loading indicator ပြပြီး ခလုတ်ကို disable လုပ်ရမည် | တည်ဆောက်ပြီး |
| FR-08 | Error ဖြစ်လျှင် အကြောင်းရင်းနှင့်ကိုက်ညီသော message ပြရမည် | တည်ဆောက်ပြီး |
| FR-09 | စတင်ဖွင့်ချိန်တွင် ရှာရန်လမ်းညွှန်စာ (empty state) ပြရမည် | တည်ဆောက်ပြီး |

## 6. User Flow

1. App ဖွင့်သည် → empty state စာပြ
2. မြို့အမည်ရိုက်၍ ရှာသည်
3. Loading spinner ပြ၊ ခလုတ် disable
4. Geocoding → (Current + Forecast parallel)
5. အောင်မြင်လျှင် ရာသီဥတုကဒ်နှင့် forecast ပြ၊ မအောင်မြင်လျှင် error box ပြ
6. User က မြို့အသစ် ထပ်ရှာနိုင်သည်

## 7. UI/UX Requirements

- Mobile-first layout၊ content အများဆုံးအကျယ် `max-w-3xl`
- Forecast grid: mobile တွင် ၂ column၊ `md` မှစ၍ ၅ column
- ကဒ်များတွင် rounded, shadow, padding တစ်သားတည်း
- Error သည် အနီရောင်ဘောင် (`role=alert`)၊ Loading သည် `role=status`
- စာလုံးနှင့် နောက်ခံ contrast ကောင်းရမည်
- ရက်စွဲကို `Sun, Oct 11` ပုံစံဖြင့်ပြ

## 8. Technical Architecture

**Tech stack**

| အပိုင်း | ရွေးချယ်မှု |
| --- | --- |
| Build tool | Vite (Node 20.19+ / 22.12+) |
| Framework | Vue 3 (Composition API, `script setup`) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| HTTP | Browser Fetch API |
| Version control | Git + GitHub (feature branch workflow) |
| Data source | OpenWeatherMap (Free plan) |

**Folder structure**

```
src/
├── components/   SearchBar, CurrentWeather, ForecastList,
│                 LoadingSpinner, ErrorMessage
├── composables/  useWeather.js   (state + logic)
├── services/     weatherApi.js   (API calls)
├── utils/        format.js       (icon URL, ရက်စွဲ, forecast grouping)
├── App.vue
├── main.js
└── style.css
```

**Layer တာဝန်ခွဲဝေမှု**

- `services`: HTTP request နှင့် error message သာ ကိုင်တွယ်
- `composables`: state (`location`, `current`, `forecast`, `loading`, `error`) နှင့် `search()` flow
- `components`: UI သာ၊ props ဖြင့် data လက်ခံ၊ events ဖြင့် အပေါ်သို့ပို့
- `utils`: pure helper functions

## 9. API Integration

Base URL: `https://api.openweathermap.org`

| ရည်ရွယ်ချက် | Endpoint | Parameters |
| --- | --- | --- |
| မြို့ → lat/lon | `/geo/1.0/direct` | `q`, `limit=1`, `appid` |
| လက်ရှိရာသီဥတု | `/data/2.5/weather` | `lat`, `lon`, `units=metric`, `appid` |
| Forecast (၃ နာရီခြား) | `/data/2.5/forecast` | `lat`, `lon`, `units=metric`, `appid` |

**Forecast ကို ရက်အလိုက်ပြောင်းသည့် စည်းမျဉ်း**

- `list` (၄၀ items) ကို `dt + city.timezone` ဖြင့် မြို့၏ဒေသစံတော်ချိန်သို့ပြောင်း၍ ရက်အလိုက် group လုပ်
- ရက်တစ်ခုချင်း၏ min/max ကို `temp_min`/`temp_max` မှ တွက်၊ Math.round ဖြင့်ပြ
- Icon နှင့် ဖော်ပြချက်ကို ၁၂:၀၀ နှင့် အနီးဆုံး item မှ ယူ
- ပထမ ၅ ရက်ကိုသာပြ (ဒီနေ့သည် တစ်စိတ်တစ်ပိုင်းသာ ပါနိုင်သည်)

**Error handling**

| အခြေအနေ | ပြသမည့် message |
| --- | --- |
| Network မရှိ | Internet ချိတ်ဆက်မှု မရှိပါ |
| 401 | API key မမှန်ပါ (သို့) မ activate ဖြစ်သေးပါ |
| 404 | ရှာမတွေ့ပါ |
| 429 | Request များလွန်းပါတယ်၊ ခဏစောင့်ပါ |
| Geocoding ရလဒ်အလွတ် | မြို့ကို ရှာမတွေ့ပါ |
| အခြား | Server error (status code) |

## 10. Data Model (Front-end state)

```
location: { name, country, lat, lon }
current:  OpenWeatherMap /weather response
forecast: [{ date, min, max, icon, description }]
loading:  boolean
error:    string
```

## 11. Non-Functional Requirements

- **Performance**: Request နှစ်ခုကို `Promise.all` ဖြင့် parallel ခေါ်
- **Compatibility**: Modern browsers (ES modules)
- **Maintainability**: Layer ခွဲထားသဖြင့် UI မထိဘဲ API ပြောင်းနိုင်
- **Accessibility**: `alt` text၊ `role` attributes၊ form ကို keyboard ဖြင့်သုံးနိုင်
- **Rate limit**: Free plan limit ကျော်လျှင် 429 ကို ကိုင်တွယ်

## 12. Security

- API key ကို `.env` (`VITE_OWM_API_KEY`) တွင်သာထား၊ `.gitignore` ထဲတွင် `.env` ပါရမည်
- `.env.example` (key အလွတ်) ကိုသာ commit လုပ်
- **ကန့်သတ်ချက်**: `VITE_` variable များသည် build ပြီးနောက် browser code ထဲတွင် မြင်နိုင်သည်။ Front-end only project တွင် ရှောင်၍မရ
- လျော့ချနည်း: key ပေါက်ကြားလျှင် dashboard တွင် regenerate လုပ်၊ production အတွက် serverless/backend proxy ကို စဉ်းစား

## 13. Acceptance Criteria / Test Checklist

- [ ] မြို့မှန်ကန်စွာ ရှာတွေ့ပြီး current + forecast ၅ ကဒ် ပေါ်
- [ ] မြို့အမည်မှား → error box ပေါ်
- [ ] Input အလွတ် → request မထွက်
- [ ] DevTools Offline → offline message ပေါ်
- [ ] API key မှား → 401 message ပေါ်
- [ ] ရှာနေစဉ် ခလုတ် disable
- [ ] Mobile / tablet / desktop တွင် layout မပျက်
- [ ] GitHub repo တွင် `.env` မပါ

## 14. Git Workflow

- `main` ကို တည်ငြိမ်အောင်ထား
- Feature တစ်ခုစီကို `feature/...` branch ဖြင့်လုပ်၊ Pull Request ဖြင့် merge
- Commit message prefix: `feat:`, `fix:`, `chore:`, `style:`, `refactor:`, `docs:`
- ပြီးခဲ့သော branch များ: `feature/setup-tailwind`, `feature/api-service`, `feature/ui-components`

## 15. Deployment Plan

1. `npm run build` → `dist/`
2. `npm run preview` ဖြင့် production build ကို local စမ်း
3. Netlify / Vercel / GitHub Pages တစ်ခုရွေး
4. Hosting dashboard တွင် `VITE_OWM_API_KEY` ထည့်
5. GitHub Pages သုံးလျှင် `vite.config.js` တွင် `base` ညှိ

## 16. Roadmap

| Phase | အကြောင်းအရာ | Status |
| --- | --- | --- |
| 1 | Setup, Git, Tailwind, .env, API service, composable, components, styling | တည်ဆောက်ပြီး |
| 2 | `feature/unit-toggle` (°C/°F) | စီစဉ်ဆဲ |
| 2 | `feature/recent-searches` (localStorage) | စီစဉ်ဆဲ |
| 2 | `feature/geolocation` | စီစဉ်ဆဲ |
| 2 | `feature/dark-mode` | စီစဉ်ဆဲ |
| 2 | `feature/debounce-autocomplete` | စီစဉ်ဆဲ |
| 3 | Manual testing ပြီးဆုံး၊ Deploy၊ README (screenshot၊ setup၊ live demo link) | စီစဉ်ဆဲ |

## 17. Risks

| Risk | သက်ရောက်မှု | လျော့ချနည်း |
| --- | --- | --- |
| API key browser တွင် မြင်နိုင် | Key အလွဲသုံးစားခံရနိုင် | .env + gitignore၊ regenerate၊ နောက်ပိုင်း proxy |
| Key အသစ် activate နှောင့်နှေး | 401 error | စောစီးစွာယူ၊ message ရှင်းရှင်းပြ |
| Free plan rate limit | 429 | Debounce၊ caching စဉ်းစား |
| Forecast ၏ ဒီနေ့ကဒ်က တစ်စိတ်တစ်ပိုင်း | min/max မမှန်ဟု ထင်နိုင် | UI တွင် ရှင်းပြ (သို့) ဒီနေ့ကို လက်ရှိအချက်အလက်နှင့် ပေါင်း |
| Tailwind version ကွာခြားမှု | Class နာမည်ကွဲ | Docs စစ်၊ version pin |

## 18. Open Questions

- Unit toggle ကို API `units` ပြောင်း၍ ပြန်ခေါ်မလား၊ client တွင် တွက်မလား
- မြို့အမည်တူများ (ဥပမာ တိုင်းပြည်ကွဲ) ကို ဘယ်လိုရွေးခိုင်းမလား (autocomplete ဖြင့်ဖြေရှင်းနိုင်)
- မြန်မာ/English ဘာသာစကား နှစ်မျိုးထောက်ခံမလား
- Production တွင် proxy ထည့်မလား၊ key ကို ကန့်သတ်ပဲ ဆက်သုံးမလား
