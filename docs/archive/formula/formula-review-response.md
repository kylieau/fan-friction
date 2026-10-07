# Outside review of the rating formula (Oct 5, 2026)

Kylie ran `docs/archive/formula/formula-review-prompt.md` through a research-grade model and pasted the answer below, verbatim. Claude's re-check of its arithmetic and the decisions taken from it are in `formula-v4.md`.

---

I'll check the two attendance-substitution papers you mentioned before writing, since you flagged one figure as unverified. Both papers are real. Wallrafen, Pawlowski and Deutscher (2019), "Substitution in sports: The case of lower division football attendance," Journal of Sports Economics 20(3), 319–343, and Wallrafen, Nalbantis and Pawlowski (2022), "Competition and Fan Substitution Between Professional Sports Leagues," Review of Industrial Organization 61(1), 21–43. The 2022 paper finds significant cross-sport substitution in Germany, where handball, basketball and hockey leagues lose attendance to football, and its second measure shows the effect shrinks as the time gap to the nearest football game grows. I could not confirm a "0.3–0.5 points per day" figure; treat it as unverified. The design-relevant lesson is that substitution is a function of both distance and time gap, and the time effect decays rather than switching off — which argues for a continuous time factor, not your 1/0.5/0 step.

Here is the review. I reworked all thirteen nights by hand under the replacements below; the numbers are mine, so check a couple before trusting them.

## The two things wrong with v3

**It measures the wrong quantity.** "Highest event score among 15k+ venues" is the pain of the single most-squeezed room. Your hand ratings measure how much of the night's crowd is in a fight. Those diverge exactly where your table says they do (nights 4 and 6). This is the one structural change that matters; most other gaps are downstream.

**The time rule double-buffers.** You add an hour to *both* windows, so a 1:00 Kings game (ends ~3:30) "overlaps" a 5:08 World Series start. A fan can attend both; that is weak substitution, not strong. Buffer once, and make it decay: `t = clamp(0, 1, 1 − gap/4h)` where gap is the time from the earlier event's end to the later event's start (negative when they overlap → t = 1). Kings→WS gap 1h38 → t = 0.59. Same-day-but-far-apart falls to ~0.25 at a 3-hour gap and 0 at 4, which matches the decay finding above.

## 1. Structure

Keep two (soon three) named reasons; the "why" line needs separable causes, and a single blended index can't produce "World Series 1.5 mi away." But drop louder-wins. On nights where two reasons are both moderate, max() throws one away entirely, and your +0.5 bump is a fixed step that fires the same for (3.1, 3.1) and (8, 8).

Use: **rating = max(R) + 0.25 × Σ over other reasons of (R − 3)⁺**, capped at 10. A second reason adds nothing until it clears 3 (noise floor), then a quarter of its excess. Worked (using my recomputed components from sections 2–4):

- Night 5: CF 6.1, G 1.0 → 6.1. Hand 5–6.
- Night 6: CF 4.9, G 3.8 → 4.9 + 0.2 = 5.1. Hand 4.
- Night 11: CF 5.8, G 1.0 → 5.8. Hand 7 (result-shaped; I think 6 is right).

## 2. Date Crowd fight — contested seats

Per event, keep your D_E (noisy-OR over competitors). Then:

**C = Σ cap(E) × D_E** over every event ≥ 5,000 seats ("contested seats").
**CF_date = 1 + 2.5 × log2(1 + C / S₀)**, S₀ = 10,000 for LA.

The log makes volume matter without letting one mega-night pin the scale. S₀ should scale per city; use 0.2 × the median capacity of the city's 15k+ venues (LA ≈ 50k → 10k). Flag: that's a guess at the scaling rule, not a measured one.

| Night | Contested seats | CF_date | v3 | Hand |
|---|---|---|---|---|
| 1 | 134k | 10.0 | 10.0 | 9 |
| 2 | 43k | 7.0 | 8.4 | 7 |
| 4 | 15.6k | 4.4 | 5.5 | 4 |
| 6 | 19.8k | 4.9 | 8.3 | 4 |

(Night 1 detail: WS D=0.51, Lakers 0.79, ELAC 0.51, USC 0.48, both concerts ~0.48. Night 6: Lakers 0.52, WS 0.18.) Across all 13, this version has a mean absolute error of about 0.75 against your hand ratings versus about 1.6 for v3's CF, and it already puts night 5 above night 7 without any Gridlock. Caveat: I set 2.5 and 10k by eye on these nights, so the fit flatters it; the claim is that the *shape* is right.

This also dissolves gap 8: no 15k floor needed. Everything ≥ 5k feeds C; small rooms contribute little because they're seat-weighted.

## 3. Conditions

Yes, it enters. Your definition is "how hard the night was for fans," not "how much competition"; a 1:05 kickoff at 98° feels-like is friction by that definition. Make it a **third reason, computed per event, seat-weighted to the date**, so it also powers the per-event line.

Per open-air event: `T_eff = apparent temperature at start hour, +8°F if start is 10:00–17:00 and shortwave radiation > 500 W/m²` (sun load in a concrete bowl). `h = clamp(0, 1, (T_eff − 85)/20)`. Rain: `r = 0.25 if precip probability ≥ 50% and ≥ 1 mm in the event window; 0.5 if ≥ 5 mm or thunderstorm`. Cold: `k = clamp(0,1,(20 − wind chill)/20)`. `w_E = max(h, r, k)`; event Conditions = 1 + 9w_E. Roofed venues: w = 0. Date Conditions = 1 + 9 × Σ(cap × w_E)/Σcap.

- Night 10: Rams 90° + 8 = 98 → h 0.65; Dodgers similar → date Cond 6.9. With CF 5.5: 6.9 + 0.25 × 2.5 = **7.5** (hand 8).
- Night 12: UCLA 11:30 at 100°+ → 1.0; USC 3:00 → 1.0; Dodgers 6:10 ~0.4; Weeknd 0. Weighted 0.65 → Cond 6.8. CF 8.6 → **9.5**. Hand 7. This is my biggest disagreement with your hand: 293k seats across four big events on a 100° day is a 9 in LA. I'd revisit the 7, not the formula.
- Night 13: r = 0.25 → Cond 3.25; CF 1; G 2.5 (wet-road factor) → **3.3** (hand 3).

Source: Open-Meteo. Free for non-commercial use, worldwide, hourly 16-day forecast with apparent_temperature, precipitation_probability, precipitation and shortwave_radiation, and a separate historical (ERA5 reanalysis) API back to 1940. The archive matters for your "recalculate every stamp" rule: pre-app dates have no saved forecast, so use reanalysis as a stand-in for what the forecast would have said and label it "estimated." NWS is US-only and 7 days; skip it. Freeze the Conditions input at your existing lock (24 h after last start) using the last forecast, not the observed weather, or you violate "no results."

## 4. Gridlock, lightest viable

Honest finding: once CF is breadth-based, Gridlock is **not** what separates night 5 from night 7. Its job on your 13 nights is nights 8–9 (single-venue Friday evening) and night 3 (two sellouts in Inglewood). That is a much smaller tool.

Inputs per city: venue lat/lon (you have it), one city type word, and that's all. Zones: venues within 2 km (or 5 min OSRM). Per zone:

- `load = Σ cap of events in the zone whose arrival windows (start−2h to start) or exit windows (end to end+1h) coincide, + 0.15 × same for zones within 12 min, + 0.05 × within 30 min`
- `normal = largest venue in the zone + the same 0.15/0.05 spill from the largest venue in each neighbouring zone` — this is the fix for the Dodgers-plus-Kings problem: a routine LA night includes the usual spillover, so it should read routine.
- `background`: weekday start 16:00–19:30 = 1.3 (Friday 1.4), Sunday before 14:00 = 0.9, rain 1.15, else 1.0
- `s = clamp(1, 10, 1 + 7.5 × log2(background × load / normal))`: normal → 1, +25% → 3.4, +50% → 5.4, double → 8.5

Your 5 + 5·log2 with a 1.25 reference puts every ordinary single-game night at 3.4, which contradicts night 7 = 1. Mine anchors normal at 1.

Worked: night 9 (Fri, Swift and Angels each alone) → 1.4 → G 4.6, rating 4.6 (hand 5). Night 8 → 4.7 (hand 4). Night 3 (Mon, Beyoncé + Rauw in Inglewood: 88k/70k × 1.3 = 1.63) → G 6.3, rating 6.85 (hand 6). Night 4 (Tue) → G 3.8, rating 4.6. Night 1 Inglewood (three shows, Friday) → 9.0, irrelevant under CF 10.

What the full zone design buys: road shares, rail flags, per-car and peak-share constants, named choke points. On these 13 nights it would change almost nothing, because every Gridlock-driven night is explained by "one zone, one time-of-day factor." It would matter in New York and London (see 12). Build it second, after you have a season of LA stamps to test against.

Keep from your draft: the strike/closure rule (capacity lost cuts normal; half-mode loss or policing refusal → 10). Add one hand field per venue: "strained" (Hollywood Bowl, Rose Bowl, Arrowhead-type single-road sites) → background × 1.25 always.

## 5. Overlap tiers

Keep three tiers at 0.7 / 0.35 / 0.15. Medium = **0.35**: the German effects are a few percent of attendance, so weights are already generous; more to the point, the tier weights and your 14 (my 2.5) are not separately identifiable from 13 nights — only the ratios between tiers are. 0.7:0.35:0.15 is roughly 2:1 steps; leave it and tune one scale constant.

Replace the Marquee lift (a one-tier jump, cross-sport, hard to explain) with **asymmetric pull**: `d = w × t × (m_c × cap_c)/(m_E × cap_E + m_c × cap_c)`, with m = 1.0 Routine, 1.1 Notable, 1.3 Major, 1.6 Marquee. This also replaces "soften verdict by occasion": the Marquee event's own D is small because its m sits in the denominator. Night 6: Lakers d = 0.7 × 89.6/108.5 = 0.58 → 9.1; WS d = 0.12 → 2.7 → Low. Night 2 Galaxy: D 0.37 → 6.1 → Heavy, as you hand-called it, without any lift. Cross-domain lift (concert vs sports) stays off.

One hole: "same sport, same level, not rivals" (Chargers vs Rams on night 11) isn't in your tier list. Put it in Medium.

## 6. Broad flag

It only decides Medium vs Low on cross-sport pairs, so it's worth about one point on nights like 4. Keep it, but source it from Google Trends: a team is Broad if its 12-month search interest in the metro is ≥ 60% of the metro's top team's. Free, worldwide, 20 minutes per city per season, and the LA poll becomes a check rather than the source. The simpler rule ("top-level pro") fails on Clippers, Angels, Kings and Chargers, which is most of your LA cases.

## 7. Occasion from facts

Points, take the max then add bonuses: championship final 4; later playoff round 3; first playoff round or play-in 2; home/season opener 2; first game in a new market or new stadium 3; farewell or final game at a venue, or a Marquee-tier artist's tour opener/closer 3; rivalry flag 2; both teams ≥ .600 after game 40 (or both ranked, college) +1; announced sellout ≥ 24 h ahead +1; publicized star debut/return +1. Map: ≤1 Routine, 2 Notable, 3 Major, ≥4 Marquee.

- Chargers' first LA home game: new market 3 → **Major**. You hand-called Notable; I'd push back, a franchise's first game in a city is Major on its face.
- UCLA–USC 2022: rivalry 2 + both ranked 1 → **Major**. Matches your call.
- Dodgers–Giants, July (night 7): rivalry 2 → **Notable**. Matches. Dodgers–Braves on April 1 (night 4): game ~5, standings rule not live → **Routine**, not your Notable.

## 8. Floors and clusters

One rule: cap ≥ 5,000 feeds C and Gridlock load; everything smaller is logged and receives a read. No 15k floor. Skip clustering in v1; seat-weighting already makes three 3k rooms worth 9k of load if you *want* to sum them later (same zone, starts within 1 h, Gridlock only).

## 9. The "why" line

Lead with whichever reason set the max; inside it, lead with the largest single term. Templates:

- CF (event): "[Competitor] [distance] away, [overlapping / back-to-back]." Night 6 Lakers: "World Series G3 1.5 mi away, same hours."
- CF (date): "[N] big events, [C] seats in a fight; [top puller] pulls on most of them." Night 1: "Six big events, 134,000 seats in a fight; World Series G1 pulls on every one."
- G: "[Zone]: [events] arriving together, [day/time]." Night 9: "Friday 6:30 start at SoFi; otherwise quiet."
- Cond: "[T_eff]° feels-like at a [time] [start], no roof." Night 10: "98° feels-like at a 1:05 kickoff, open bowl; Dodgers home same hour."
- Append a second clause only if the runner-up term is within 20% of the leader.

## 10. Missing inputs

Never a dash. Start unknown → sport/genre default start (concert 8:00 pm, NFL 1:05 Sun local...), t capped at 0.5 for its pairs, label "estimated." Capacity unknown → venue's listed max, "estimated." Weather unavailable (> 16 days out, or no archive) → Cond = 1 and the line reads "weather not in yet." Confidence label on the date: **Firm** (all inputs known, ≤ 7 days out), **Likely** (one estimate or 8–16 days), **Early** (beyond 16 days or two+ estimates).

## 11. Calibration plan

Collect announced attendance from MLB (statsapi.mlb.com game feeds), NBA and NHL (league stats APIs or Basketball/Hockey-Reference), MLS (league site), college football (school releases; CFB Data API), NFL (Pro-Football-Reference). Expected attendance for a game = median of that team's same-season home games in the same bucket (weekday class × month × opponent class); shortfall = expected − announced. Hold out a random 20% of game-dates per season plus one entire season.

Success, in order: (a) on held-out games, the event's D predicts shortfall % with the right sign, and the implied Medium weight lands between 0.2 and 0.6; (b) Spearman rank correlation of date rating vs your hand ratings ≥ 0.8, as a sanity check only, since the hand is noisy; (c) no single-event, mild-weather night reads above 3. Warning: MLB and NFL report tickets distributed, not turnstiles, and season tickets dominate, so the shortfall signal is muted for the Dodgers. College and MLS are your cleanest series.

## 12. Other cities

- **New York / London (transit):** Gridlock becomes station load; the venue-capacity ratio still works if "normal" is the venue's own normal. Extra inputs: one rail line/station per venue and a service-alert feed (MTA, TfL both free) feeding your capacity-lost rule — that's the Coldplay/Tube-strike case.
- **Kansas City (one team):** nearly every night is single-event, so the formula reads 1–3 most nights. That's correct, but Arrowhead traffic is itself the friction; the "strained venue" flag handles it.
- **Las Vegas (destination hub):** Destination events draw outsiders, so capacity understates road load. Destination flag → Gridlock load × 1.5 and the Strip as a named choke point; CF already lowers the tier.
- **Kolkata-type authority caps:** your "policing refusal → 10" rule is right; it needs one per-date hand field, "authority restriction," with a % capacity lost.

## 13. Verdict, by movement per hour

1. Contested-seat CF_date (section 2): moves nights 4, 6 and 2 by 1–3 points, ~2 hours.
2. Conditions via Open-Meteo, forecast + archive: fixes 10, 12, 13; a day.
3. Lightest Gridlock with spill-adjusted normal and the time-of-day factor: fixes 8, 9; half a day.
4. Single-buffer, decaying t: small, prevents the Kings–WS bug.
5. Asymmetric pull in place of Marquee lift + verdict softening: cleaner, little movement.
6. Occasion-from-facts: moves nothing on the 13 but is required to rate any upcoming date.
7. Broad via Trends: low priority, LA is already covered.
8. Full zone design: defer until one LA season of stamps exists.

Keep untouched: the 1-hour buffer size, your default durations, 0.7/0.35/0.15, the log2 shape for Gridlock, the 24-hour lock, capacity-not-attendance, and the no-results rule. Those are sound.

Two last pushbacks. Hand ratings on nights 11 and 12 look low to me, and night 1's hand verdicts (Lakers Heavy, USC Extreme) run opposite to the arithmetic, which suggests the USC call was shaped by the empty-stadium story — a result. And thirteen nights can reject v3's worst-victim rule, which they do; they cannot confirm the constants I've proposed, which is why the attendance series in section 11 is the real next step.
