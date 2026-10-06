# Hard-access weight: the research answer (Oct 6, 2026)

Kylie ran `docs/hard-access-weight-prompt.md` and pasted this back. Kept as pasted, lightly trimmed. Claude's read and what was done are at the bottom.

## The answer, as pasted
Nobody has published a clean "few access roads → X% longer clearance" study, so no source gives ×1.25 directly. The indirect evidence says hard access matters more than 1.25 in a driving city. For transit, mode share is the stronger lever, but it should enter as the share of fans driving to that venue, not as a city label.

| Source | Setting | What was measured | Effect |
|---|---|---|---|
| StreetLight, Eras Tour (23 US stadiums, 62 shows) | Arrival hour, roads within 1 mile | Vehicle hours of delay vs. the same weekday that month | Average +277%; worst Gillette Stadium +1,270%; Arrowhead +737% |
| Same study | Transit-heavy venues | Same | Atlanta +32%; MetLife's delay fell 27% over three nights |
| Same study (caveat) | Low-baseline venues | — | Gillette's typical delay is low, so its percentage is inflated by the small baseline: the same normal-night comparison Gridlock uses |
| Hwang, Humphreys & Pyun, *J. Sports Economics* 2025 | Yankee Stadium, ~280k taxi trips | Game-day travel time | +6.3% through the stadium area, +17% before first pitch |
| MTA via WNYC | Yankee Stadium | Transit share | ~37% subway, ~45% with Metro-North, buses, ferries |
| WMATA PlanItMetro | Nationals Park, 2014 | Rail share | ~34% |
| TRB, "Get Me to the Ball Game on Time" | Shea, Jacobs Field, Anaheim | Arrivals, car occupancy | ~2.6 people per car without good rail |
| Humphreys & Pyun (WVU WP 17-05) | 25 MLB metros, 1990–2014 | Citywide traffic | VMT +6.9%, congestion +2%; too diluted to say anything about venue access |
| FHWA, Planned Special Events (2008) | National review | Data availability | Little or no data compare congestion near venues on event and non-event days |
| FHWA PSE checklists | Practice | Method | Ingress and egress planned separately; exits sized by lane capacity. No geometry multiplier exists |
| Dodgers / Spacer | Dodger Stadium | Lots, exit experience | 16,000 spaces; slow for the first 20–40 minutes, longer after sellouts (anecdotal) |
| Rose Bowl official / Wikipedia | Rose Bowl | Operations | Stack-parked in rows of five; streets converted to one lane for events |
| prked.com (weak) | Rose Bowl | Exit time | 60–120 minutes after a sold-out show; directional, not a measurement |

**What the evidence supports:** (1) direction yes, magnitude unmeasured: egress is cars divided by outbound lane throughput, and no study isolates access roads; (2) estimated effect: Rose Bowl and Dodger exit times run roughly 60–120 minutes against 30–45 at well-connected lots, a ratio of about 1.5–2.5×, so ×1.25 is at or below the low end; (3) transit is the bigger lever: similar crowds produced anything from −27% to +1,270% delay, with high-rail venues at the bottom; (4) watch for double counting: if the load already counts only cars, transit is handled there and the multiplier should be the same everywhere; a city-level ×1.1 only makes sense if the load counts every attendee; (5) watch for baseline effects: hillside and suburban venues have quiet normal nights, so the relative read already inflates there (the Gillette effect), and a big multiplier stacked on top could overstate it.

**Recommendation as given:** hard-access, car-dependent venue ×1.5 (defensible 1.3–2.0; low to moderate confidence). Drop the city-level ×1.1; scale by the venue's car share instead: if the load can't be car-based, use 1 + 0.5 × (car share ÷ 0.85), which falls to ×1.1–1.2 at 30–40% car share (low confidence; structural). Best long-term rule: cars per outbound lane (expected cars ÷ exit lanes), capped near ×2; needs lane counts per venue. Transit share belongs to the venue, not the city.

## Claude's read (Oct 6)
The two structural points are right and were adopted. The ×1.5 was tested and not adopted, for the research's own reason 5.

- **Measured on real nights.** Gridlock already compares a venue's night to its own quiet normal, so a hillside venue's read is inflated before any multiplier (the Gillette effect). Stacking ×1.5 on top: a lone Monday Dodgers game in July 2024 goes from 2.6 to **4.6**, Dodgers plus a Kings game on a Tuesday from 4.4 to 5.6, and ×2.0 makes that lone Monday game a 7.7. Nights with nothing else on cannot read as mid-friction; that is the product's whole promise. At ×1.25 the lone game reads 2.6 against a hand rating of 1, which is already the top of what feels honest.
- So the multiplier stays **×1.25 as a placeholder** (the research's "at or below the low end" is noted), and the better fix the research names, cars per outbound exit lane, goes on the list for when lane counts exist. That rule would raise the Rose Bowl and Dodger Stadium on a full night without touching a quiet one.
- **Transit now scales by the venue's car share, not the city.** Each venue can carry `carShare` (the share of fans who drive). Until a venue has a figure, the city type supplies a default: 0.85 in a driving city, 0.4 in a transit city. The hard-access factor is 1 + 0.25 × (car share ÷ 0.85): ×1.25 at 85% driving, ×1.12 at 40%. Every LA read is unchanged by this; a flagged venue in a transit city reads a little lower than before. Yankee Stadium (about 45% transit) or Nationals Park (34% rail) can be given their measured shares the day they are added.
- The load itself still counts every seat regardless of how people arrive. Making it car-based (seats × car share ÷ 2.6 per car) is part of the fuller Gridlock design parked for "a season of stamps," and the double-counting caution applies then: when the load becomes car-based, the transit scaling on the multiplier should come off.
