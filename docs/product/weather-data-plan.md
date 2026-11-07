# The weather-data build: a plan for Kylie's review

**Status: a plan only (Builder Task (a), build 7.2; Kylie, Oct 30, 2026, B5 and G7). Nothing here is built, no new service is signed up for, nothing touches Supabase. Written by Claude Code, Nov 6, 2026.** Facts about outside services are as last published and need a look before any signup; every cost is a 🚩.

## 1. Sources

### What the app uses today
- **Open-Meteo** (`scripts/weather-fetch.mjs`, nightly): for every open-air event in the two-week archive window, the hour row at its start (feels-like, temperature, humidity, wind, UV, rain chance and amount, sunshine, cloud cover, a WMO weather code); the city point each evening; and the city point's daily feels-like high and low for the 16-day horizon. About 900 point-dates and 40 daily calls a night across the 40 cities (the Nov 6 log: Los Angeles 40 point-dates, Tampa 44, Ottawa 9). Past dates before the app use Open-Meteo's reanalysis archive, labeled estimated. **License:** free for non-commercial use; a public or paid Fan/Friction needs its paid plan (from about €29 a month when last published) or another source (the build brief's cost milestone). **Coverage:** worldwide, so Canada and Mexico read the same as the US. **No text forecast:** numbers and a code only.

### What a text forecast would need, by candidate
| Source | What it gives | License and cost | Covers | Notes |
|---|---|---|---|---|
| **A sentence built from the numbers we already store** | A short line from the day's code, rain chance, wind and the hourly feels-like trend | Nothing new | Every covered city, both countries | No new source, no new calls, the same words in every city; the sentence can only say what the numbers say |
| **NWS (api.weather.gov)** | A written forecast per period ("Mostly sunny, with a high near 74"), plus hourly numbers | Free, public domain, no key (a User-Agent header) | The US only: 30 of the 40 cities; not Toronto, Montreal, Vancouver, Ottawa, Edmonton, Mexico City | Prose in English; about 7 days ahead; one call per city-date |
| **Environment Canada (MSC open data)** | A written forecast per city in English and French | Free under Canada's open government licence | The five Canadian cities | A different feed shape; a second reader to write and keep |
| **Mexico's SMN (CONAGUA)** | City forecasts in Spanish, no steady public API | Free | Mexico City | Would need a page reader; the weakest of the three |
| **MET Norway (Locationforecast)** | Hourly numbers worldwide, no text | Free with attribution (CC BY 4.0), commercial use allowed | Every covered city | The free fallback for the numbers if Open-Meteo's terms bite; no sentence |
| **Commercial weather APIs** (OpenWeather, Visual Crossing, WeatherAPI, Tomorrow.io) | Numbers and, on some, a short description | Free tiers with daily caps (some want a card on file), paid above them | Worldwide | A key and an account each; the free caps are near our nightly call count, so a paid tier is likely soon 🚩 |

**Lean:** build the sentence from the numbers (row 1). It is the only candidate that treats the Canadian and Mexican cities like the American ones, needs no account, and keeps the city-neutral rule. NWS prose reads better in the US, but a feature that works in 30 cities and not the other 10 is not done, and it would need two more readers to match.

## 2. The M3 weather sentence
**What it needs:** the day's city-point rows (the code and rain chance at the evening hour, the hourly feels-like line for the afternoon and evening, the wind) and the daily high and low. All of it is stored today. A rule turns them into one or two short clauses: the sky from the code, the rain when the chance is 30% or more (with its hour), the wind when it is 15 mph or more, and the evening's drop when feels-like falls 8° or more after the start. Nothing else. About 12 words.

**Sample sentences (from the rule, not a feed):**
- "Mostly sunny. Cools to the low 60s after 8 pm."
- "A 40% chance of rain around 7 pm, then clearing."
- "Clear and cold: 28° at tip-off, 21° by the final horn."
- "Overcast and breezy, 18 mph from the west. Warm at kickoff, 84°."
- "Partly cloudy and mild all evening." (a quiet day keeps one clause)

The words follow the app's rules: no "night" (the strip says "Today's Weather"), sentence case, a city's own units (°C in Toronto).

## 3. The M33 roof note
**What exists:** every venue carries `roof: 'open' | 'covered' | 'indoor'` (2,263 rooms: 1,018 open, 102 covered, 1,149 indoor). The weather rows are fetched for open rooms only; "covered" is used for a roofed stand that still feels the wind (a covered grandstand, a pavilion).
**What is missing:** no value says *retractable* (six rooms mention it only in a comment), no value says *partly covered* (a canopy over the stands with the field open, like SoFi), and nothing records how sure each value is or where it came from.
**The note M33 wants:** "retractable-roof games note the roof." That is one line on the event page for a room with a retractable roof: "Retractable roof." The app cannot know whether it is open on the day (no feed says so), so the note states the fact and stops.
**How it would be sourced and checked:** a `roof: 'retractable'` value (and a `roofNote` for the canopy cases), set from each room's own page (the team or venue site) and checked once against a second source; a research prompt in `docs/research/topics/` lists the candidates by league (the retractable baseball parks, the football domes, Rogers Centre, Chase Field, Minute Maid, Globe Life, T-Mobile Park, loanDepot, American Family Field, State Farm, AT&T, Mercedes-Benz, NRG, Lucas Oil, Allegiant is fixed), and the fold writes a source line per room, as the capacity notes do. A retractable room keeps its weather rows (open is the common state for most of them in season).

## 4. Archive versus forecast
- **Future dates:** the nightly rewrites each date's rows while it sits inside the 16-day horizon, so a forecast sharpens as the day nears. The app shows the latest row saved before now.
- **Past dates:** the row the app shows today is the last forecast saved before the stamp locked (24 hours after the day's last start), not the observed weather. That is how the code reads (`src/data/weather.ts`), and the verdict itself is frozen at the scheduled start (#11). Kylie's Oct 5 clarification of the no-results rule (AGENTS.md) allows observed weather from the archive to rate a past date; the narrower reading in the code was an assistant's, not hers. Pre-app dates, with no saved forecast, read the reanalysis archive and say "estimated".
- **Where it lives:** the rows and the daily highs and lows are committed to the repo each night (`data/weather/<city>/`), and the catalog the app reads carries them for the window; the app never calls a weather service itself. Nothing changes here for the sentence or the roof note.

## 5. Cost and effort
| Piece | Money | Calls per night | Builder effort |
|---|---|---|---|
| The sentence from the numbers | None | None new | About a day: the rule, the samples checked on ten real dates in three cities, the strip's copy |
| The roof note | None | None | Half a day of research and fold, then an hour for the line |
| NWS text instead (US only) | None | About 500 more (one per US city-date in the window) | Two days, plus two more readers for Canada and Mexico or an honest gap |
| **If the app goes commercial** | Open-Meteo's plan from about €29 a month, or MET Norway free with a credit line and a one-day swap of the fetch script | The same | A day for the swap |

## 6. Questions for Kylie (up to five, with the builder's lean)
1. **The sentence: built from the numbers, or a text feed?** Lean: the numbers. Same words in every city, no account, no cost.
2. **The roof note: retractable rooms only, or every covered room too?** Lean: retractable only, as M33 says; a covered grandstand already shows weather like an open one.
3. **Open or closed on the day:** state "Retractable roof" and stop, or chase a game-day source later? Lean: state it and stop; no public feed says which.
4. **Past dates: what should the weather card show?** Today it shows the last forecast saved before the lock; your Oct 5 clarification allows the observed weather. Options: (a) the card shows what happened (observed, labeled) while the verdict keeps the frozen forecast it was judged on; (b) the card keeps the frozen forecast too. Lean, as a lean: (a), with "Forecast at 7:00 pm" becoming "What it was" and the stamp untouched, since the stamp rule and the card are separate things.
5. **The commercial switch, when it comes:** Open-Meteo's paid plan, or MET Norway free with attribution? Lean: MET Norway, since the numbers are the same and the credit line costs nothing; decide only when a launch is in view.
