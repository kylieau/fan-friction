# Research answer: concert / non-sports expected size (v1)

Answer to `docs/archive/research/expected-draw-concerts-research-prompt.md`. Pasted by Kylie from Claude chat, Oct 6, 2026. Not a product lock — propose → her OK before build.

**Bottom line:** size upcoming shows with a fixed ladder. Start with an official sellout, then same-room history (used as a fill ratio), then that venue's own published average, then one global default ratio. Every estimate is capped at setup capacity. Refuse to size when the listing, the setup or the festival total is ambiguous. No fame tiers. All numbers below marked *illustrative* are placeholders, not recommendations.

## 1. Addenda

**What the industry actually has.** There is no public per-show scan data. The only broad per-show source is Billboard Boxscore, and it's voluntary: it reports box office data submitted by concert promoters, venues, booking agents or artist managers, and not all of them report. Coverage has also thinned. Live Nation reported more than 9,085 shows to Boxscore in 2009, but only 1,693 by 2011. Fans have also caught cases where shows were listed as completely sold out at full gross while sections went unfilled and tickets were given away.

Boxscore counts tickets sold or distributed, not bodies in seats. The biggest acts normally expect under 4% of buyers to no-show, while the average Live Nation concert saw about 12% stay home in 2019. One ticketing manager reported about 10% no-shows for symphony and opera, rising to about 20% for family shows.

| Source | Access | Use | Verdict |
|---|---|---|---|
| Boxscore figures, via free news coverage | Charts mostly behind Billboard Pro | Same-room history | **v1.** Transcribe by hand with a link; no scraping |
| Billboard year-end venue totals (attendance ÷ shows) | Same | Venue average per show | **v1** (new) |
| Wikipedia tour box-office tables | Free, CC BY-SA | Pointer to Boxscore rows | **v1** only when the row cites Boxscore |
| Official "sold out" statements (venue, artist, promoter) | Free | Sellout flag | **v1** |
| Ticketmaster Discovery status and on-sale dates | Free key | Cancel/postpone filter, run detection | **v1** (new) |
| Ticketmaster sold-out / limited flags | Internal endpoints | — | **Reject** (ToS) |
| City permits and council attendance caps | Free | Festival daily caps | **v1** (new) |
| Pollstar | Paid | — | **Reject** |
| Resale prices and listings (StubHub, SeatGeek, Vivid) | Partner APIs, ToS | — | **Reject** |
| Streaming or social follower counts | API ToS, circular | Fame tiers | **Reject** |
| Live Nation / AEG earnings | Free | Aggregates only | Context only |
| Post-event transit ridership | Sporadic | Evaluation | Park |

On Ticketmaster: Discovery event responses include an on-sale status code, which is enough for filtering. The sold-out flags that scrapers expose come from Ticketmaster's internal artist-events API reached behind a residential proxy, so treat them as off-limits. Permits are underrated for festivals. Coachella's daily number exists because of a unanimous Indio City Council vote raising the attendance cap from 99,000 to 125,000.

| Factor | Verdict |
|---|---|---|
| Capacity by setup | **v1.** Ceiling for every estimate |
| Same artist, same building | **v1.** Used as a fill ratio, not a raw count |
| Venue's own published average | **v1** (new). Non-circular default per room |
| Official sellout | **v1.** Only when announced |
| Run of nights | **v1.** Flat sizing per night, plus a bump |
| Festival per-day averages | **v1**, with a guard (Q6) |
| Cancel / postpone / TBA status | **v1** (new). Don't size |
| Non-performance listings (parking, VIP add-ons, upgrades) | **v1** (new). Filter out; dedupe on venue + start + performer |
| Same-day double shows (matinee + evening) | **v1** (new). Size each one; never sum to more than one house at a time |
| Fame tiers | **Reject.** No defensible free signal |
| Support acts / package tours | **Reject.** Already reflected in the room the promoter booked |
| On-sale speed | **Reject.** Only anecdotes; counts only as an official sellout |
| Day of week, month, holiday | Park |
| Genre | Park |
| Outdoor weather | Park (would double-count with Conditions) |
| Same artist, same metro, different building | Park |

## 2. Recommended v1 rule

Walk the ladder top to bottom and stop at the first rung that applies. Every estimate is capped at the capacity of the setup used for that show.

| Rung | Basis | Size | Label |
|---|---|---|---|
| 0 | A refuse case (listed below) | None | "Not sized" |
| 1 | Official sellout statement for this date | Setup capacity | Announced (sold out) |
| 2 | Same headliner, same building, within 4 yrs and since 2022 | Prior fill ratio × current setup capacity | Estimated |
| 3 | Night of a run of 2+ nights in the same building within ~14 days | max(rung 4 or 5, 0.90 × capacity) *illustrative* | Estimated |
| 4 | Venue's published average, within 3 yrs | Attendance ÷ shows, capped | Estimated |
| 5 | Nothing above applies | Global default ratio × setup capacity | Estimated |

**Refuse cases (rung 0):**
- Ticketmaster status is cancelled, postponed, or rescheduled with no date.
- The listing isn't a performance (parking, VIP add-on, upgrade).
- The venue table has no concert setup capacity for this room.
- The listing is in the Miscellaneous segment.
- It's an Arts & Theatre listing without production history (see Q7).
- It's a festival whose total is ambiguous and that has no published daily cap (see Q6).

| Q | Answer |
|---|---|
| 1. Default | Rung 5. Compute **one** global ratio, once: the median fill ratio across covered venues that have rung-4 data. Document the sources. *Illustrative:* Dickies Arena drew 589,157 across 79 shows, about 7,460 per show against a roughly 14k max, or ~0.55. That blends curtained and non-concert nights, which is what a "typical night" default should reflect. |
| 2. History | N ≥ 1 Boxscore-sourced show with the same headliner in the same building. Use the most recent tour. For a multi-night run, use run total ÷ (nights × capacity). For a renamed venue, match on building ID and ignore the name. For a renovated venue, transfer the ratio, not the count; discard the history if capacity changed by more than ~15% or the bowl was rebuilt. Don't use history from festival or package bills. |
| 3. Bands | No fame bands. The rule has only three numbers: the venue ratio, the global default and the run bump. Each one is sourced and revised on a schedule. |
| 4. Sellout | Only on an official statement. Never infer it from Ticketmaster availability, resale prices, or "sold out in minutes" posts. Even then, the copy notes that tickets aren't the same as bodies. |
| 5. Runs | Flat per night, with no taper in v1. A history ratio from a prior run applies to every night of this run. |
| 7. Arts / Misc | Stricter. Family productions often run multiple shows a day in partial setups, so concert capacity is wrong for them. Size only from an announcement or from the same production in the same building. Comedy in arenas follows the Music rule. Miscellaneous isn't sized. |

**Q6, festivals and halls.** A total is often unique pass-holders, not person-days. Coachella illustrates this: Wikipedia lists attendance of 250,000 as a two-weekend total, against a capacity of 125,000, while police describe the grounds as having a maximum capacity of about 125,000 people per day. Dividing the total by 6 days gives ~42k per day, about 3× too low. Comic-Con is murkier. Press reported an estimated 135,000 people at the four-day event, and fans dispute whether that figure is per day or for the whole event.

| Case | What's published | Per-day size | Label |
|---|---|---|---|
| A | Per-day figure or daily cap | Use it | Announced / reported |
| B | Total explicitly counted as cumulative person-days | Total ÷ days (Kylie's lock) | Estimated |
| C | Total of unclear type | If reported sold out and a daily cap is known, use the cap; otherwise not sized | Estimated / not sized |

Peak-day modeling is parked.

**Q8, labeling principles:**
- Round estimates to the nearest 1k (500 under 10k) and always prefix them "est."
- Always show the basis, e.g. "est. ~17k · drew 16,9xx here in 2024 (reported)" or "est. ~11k · typical night at this venue."
- Show announced and reported figures exactly, with their source. Give estimates lighter visual weight.
- Label Boxscore numbers as "reported tickets," not "crowd."

**Q10, bias risks:**

| Risk | Mitigation |
|---|---|
| Megastars overstated by assumed sellouts | Rung 1 requires an official statement |
| Boxscore over-reports successful shows | Evaluation is stratified by basis; history is never blended with the default |
| Local or niche acts in big rooms overstated | The venue ratio already includes their nights |
| Cities with many big rooms (NY/LA) look busier | Per-venue ratios rather than one capacity multiplier |
| Some segments under-covered in English-language press | Measure coverage gaps per segment; don't fill them by guessing |

## 3. Parked

- Day-of-week, month and holiday adjustments.
- Genre adjustments.
- Taper across runs and residencies.
- Peak festival day.
- Weather for outdoor shows.
- Using history from the same artist in a different building in the same metro.
- Separate GA-floor setups (until venue tables carry them).
- Transit ridership as evidence.

## 4. Evaluation plan

1. **Freeze every estimate** before the event, with its rung and inputs. Never overwrite it.
2. **After the event,** when press, Boxscore, or the venue publishes a number, store it as *reported*. Then log the signed error and the absolute % error.
3. **Report results by rung:** median error, signed bias and coverage (% of listings sized).
4. **Score only against reported numbers,** never against friction ratings or how a night felt.
5. **Recalibrate on a pre-committed trigger.** For example (*illustrative*): revise the global default at most once per season, and only if median signed error exceeds ±15% over ≥20 reported events.
6. **Track the share of reported events that were sellouts.** If it's high, read the error results as sellout-skewed.

## 5. Product locks for Kylie

1. **Does the ~5k friction gate apply to the estimate or to venue capacity?** I recommend the estimate. Note that a ~6k theater at a 0.55 default comes out around 3.3k and drops off the map.
2. **Rung 5 versus not sized:** should an unknown night get the global default or stay blank? I recommend the default, labeled.
3. **Festival case C:** confirm that the per-day averaging lock covers only totals known to be person-days. Also, the brief dates that lock Oct 7, 2026, but today is Oct 6, so it's worth confirming the lock actually exists.
4. **Can Boxscore "tickets" count as a reported crowd?** I recommend yes, with the "reported tickets" label.
5. **Whether to include the run bump at all,** and at what value.
