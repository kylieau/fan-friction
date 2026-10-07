# Formula tuning session (Oct 5, 2026)

Scope: the soft spots left after v4 landed. Hand ratings are comparison only (Kylie's rule); the target is accuracy on attendance later. This session names the considerations that belong in the formula and fixes readings that are wrong on their face. **Kylie's rulings (Oct 6): option C, Gilmour gets the storyline point, the copy change is fine. All three are built.**

## 1. World Series Game 1 reads "Heavy" (10/25/24)

**What the number says.** The event verdict for the World Series is 6.8, Heavy, which is wrong on its face: a sold-out World Series opener is not losing fans to anything.

**Where it comes from.** It is not the Marquee pull being too weak. The pull on the World Series, by competitor:

| Competitor | Pull (d) | Size the formula uses |
|---|---|---|
| USC vs. Rutgers | 0.162 | 77,500 (Coliseum) |
| East LA Classic | 0.154 | 70,240 (SoFi) |
| Lakers vs. Suns | 0.122 | 18,997 (Crypto.com) |
| Jeff Lynne's ELO | 0.030 | 17,500 (Forum) |
| David Gilmour | 0.027 | 18,000 (Intuit Dome) |

The East LA Classic is a high-school game that drew about 18,000, but the formula sizes it at the full SoFi building. It pulls on the World Series harder than the Lakers do. USC vs. Rutgers (63,404 announced in a 77,500 building) has the same bias, smaller.

**The consideration to name:** an event's pulling size should be its *expected draw*, not the building it sits in. Building size is only the ceiling. This is already the calibration plan (review §11): expected = median of the team's same-season home games in the same bucket. Until that data job runs, the fix is a per-event `expectedDraw` fact, pre-event, labeled estimated, seeded only where it is clearly known (a high-school game in an NFL stadium, a theater act in an arena).

**What each option does** (event verdict, Crowd fight only):

| Event | Hand | Now | A: East LA at 18k | B: steeper pull (1/1.2/1.6/2.5) | C: A + B |
|---|---|---|---|---|---|
| World Series Game 1 | Low | Heavy 6.8 | Heavy 5.9 | Heavy 5.5 | Moderate 4.7 |
| USC vs. Rutgers | Extreme | Heavy 6.7 | Heavy 5.7 | Heavy 7.2 | Heavy 6.2 |
| World Series Game 2 | Low | Moderate 3.5 | Moderate 3.5 | Low 2.9 | Low 2.9 |
| Elton John (farewell) | Low | Moderate 3.0 | Moderate 3.0 | Low 2.7 | Low 2.7 |
| World Series Game 3 | Low | Low 2.7 | Low 2.7 | Low 2.2 | Low 2.2 |
| Chargers vs. Dolphins (first LA game) | Extreme | Moderate 5.4 | Moderate 5.4 | Moderate 5.2 | Moderate 5.2 |
| Clippers vs. Spurs | Moderate | Moderate 5.3 | Moderate 5.3 | Heavy 5.5 | Heavy 5.5 |

Date ratings barely move under any option; only 10/25/24 drops from 10.0 to 9.2 with the draw fix (still Cooked).

**Recommendation: C.** The draw fix is the honest one (it removes a wrong input). The steeper pull makes the asymmetry mean something: at 1.6 a Marquee event is pulled only 38% less than a Routine one of the same size, which is why three Routine events can still drag the World Series to Heavy. The remaining Moderate reading for Game 1 is defensible: USC's own fans were choosing that night. A pure shield (halving a Marquee event's pull-on) also works numerically but is a second mechanism doing the same job, which the review was trying to remove.

Not touched: Lakers vs. Suns reads Extreme 10.0 (hand: Heavy) and Lakers vs. Blazers 9.1. Same-city same-hours against the World Series. The hand ratings say Heavy; that is a band edge, and the bands are placeholders until calibration.

## 2. Gilmour's storyline point

Gilmour at Intuit Dome reads Notable (arena booking 2). Hand: Major. The seed already carries "rare LA run" as his fact chip. Under the Oct 5 storyline rule (+1 for a narrower story), setting `storyline: true` on the event makes it Major, pull 1.3 instead of 1.1. One seed flag; no formula change. Her call whether "first LA shows in eight years" is a storyline or just a booking.

Same question, same answer available, for Imagine Dragons at the Forum (10/26/24, hand Major, rule Notable) and Rauw Alejandro at Intuit Dome (4/28/25, hand Major, rule Notable). Recommendation: leave those two at Notable. Neither has a story beyond the booking.

## 3. Why-line copy

Date lines now read like a spreadsheet: "6 big events, 117,566 seats in a fight; World Series Game 1 pulls on most of them." The number is the formula's own term, not a fact a fan recognizes.

Proposed shape, leading with the puller and the count, no seat figure:

| Now | Proposed |
|---|---|
| 6 big events, 117,566 seats in a fight; World Series Game 1 pulls on most of them. | World Series Game 1 pulls on five other crowds. |
| 3 big events, 29,019 seats in a fight; Chargers vs. Dolphins pulls on most of them. | Chargers vs. Dolphins pulls on two other crowds. |
| Nothing else big that night. | Nothing else big that night. |
| Anaheim: Angels vs. Mariners alone, Friday evening. | (Gridlock line, unchanged) |

The seat figure stays on the date page as a detail line under the reason, where someone curious can see it. Event lines ("USC vs. Rutgers 1.5 mi away, same hours") already read well and stay.

## Built (Oct 6)
- `expectedDraw` on an event (`src/data/types.ts`), `drawSize` in `src/data/read.ts`: Crowd fight and Gridlock size an event by its expected draw, capped by the building. Seeded on the East LA Classic only.
- Pull table 1 / 1.2 / 1.6 / 2.5 (`src/data/formula/occasion.ts`).
- Gilmour: `storyline: true` in the seed, reads Major.
- Date why line: "World Series Game 1 pulls on five other crowds." The seat figure is a detail line on the date page.
- Side effects: 10/25/24 now 9.2 (was 10.0), still Cooked. Its Gridlock fell from 8.5 to 2.9 because the Inglewood zone no longer carries 70,240 at SoFi for the high-school game. The East LA Classic itself now reads Extreme (an 18,000 crowd pulled by a World Series); hand said Heavy; band edge. Mean gap from the hand ratings 0.75 (was 0.81), comparison only.

## Holdouts

No tuning here fits a constant to the hand ratings; the changes are a wrong input (building size as draw), one seed fact, and copy. The calibration holdouts (20% of game-dates plus one season, review §11) start with the attendance job.
