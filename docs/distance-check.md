# The distance-discount check

_Written by `scripts/distance-check.mjs` on 2026-10-07. The design is pre-registered at the top of that script; the constants were not changed after the first run. Companion to `docs/distance-discount-proposal.md`._

**What was tested.** 6318 home games with an announced crowd and a baseline (the app's expected draw for that game, built from the seasons before its own), across 6 cities and 79 teams, seasons 2023–2026. Preseason and postseason out. 2175 sellouts (97%+ of the building) set aside; 92 games had no baseline. Competitors are other home games on file in the same city whose window overlaps (sports only: past concerts are not on file). The outcome is log(announced ÷ baseline), shown below as a percentage.

**No competitor effect shows on untouched seasons: neither full-weight competition nor any fade lowers the error against ignoring competitors. Crowd fight's premise, that same-night events cost each other buyers, is not supported by announced crowds in these cities, at least for sports against sports. The distance discount is moot until that is understood; nothing should be built.**

## Groups, all usable games (candidate B's distances)

| Group | Games | Sellout share | Median vs. baseline (open games) | Mean vs. baseline |
|---|---|---|---|---|
| no competitor | 3462 | 31.9% | 0.4% | 3.7% |
| nearest within 15 mi | 2136 | 40.6% | -1.5% | 4.5% |
| nearest 15–45 mi | 719 | 28.0% | 1.0% | 1.9% |
| nearest beyond 45 mi | 1 | 0.0% | -21.8% | -21.8% |

## Chosen on even seasons, scored on odd

Even seasons: 2224 games; odd seasons: 1919. The pull is the competitors' announced crowds, each times its time factor and its distance weight, summed, in units of 10,000 seats. A line is fit to the outcome on even seasons and its error measured on odd seasons.

| Rule | Near | Far | Slope (even) | Mean abs. error, odd seasons |
|---|---|---|---|---|
| Null: ignore competitors | — | — | — | 18.8% |
| No fade: every competitor at full weight | — | — | 0.0045 | 18.9% |
| Candidate A | 10 | 30 | 0.0065 | 18.9% |
| Candidate B | 15 | 45 | 0.0057 | 18.9% |
| Chosen on even seasons | 20 | 60 | 0.0051 | 18.9% |

A negative slope means competitors lower crowds. Errors differ in the third decimal when the effect is small; the groups table above is the plainer read.

### The grid on even seasons (best first)

| Near | Far | Slope | Mean abs. error (even) |
|---|---|---|---|
| 20 | 60 | 0.0051 | 19.3% |
| 15 | 60 | 0.0053 | 19.3% |
| 10 | 60 | 0.0056 | 19.3% |
| 20 | 45 | 0.0054 | 19.3% |
| 5 | 60 | 0.0061 | 19.3% |
| 15 | 45 | 0.0057 | 19.3% |
| 10 | 45 | 0.0060 | 19.3% |
| 5 | 45 | 0.0067 | 19.3% |

## By league, odd seasons

| League | Games | With a competitor | Median vs. baseline, none | Median, with | Error: null | Error: no fade | Error: B |
|---|---|---|---|---|---|---|---|
| College football | 131 | 101 | -0.7% | -3.1% | 19.3% | 19.3% | 19.3% |
| College men's basketball | 174 | 91 | -2.9% | -5.8% | 26.0% | 26.4% | 26.4% |
| College women's basketball | 151 | 51 | 23.7% | 27.9% | 50.2% | 50.2% | 50.2% |
| MLB | 958 | 260 | 2.1% | 0.7% | 13.6% | 13.6% | 13.6% |
| MLS | 165 | 132 | -0.9% | -2.7% | 13.4% | 14.2% | 14.3% |
| NBA | 48 | 21 | -7.1% | -7.5% | 3.7% | 3.9% | 3.9% |
| NHL | 109 | 80 | -1.9% | -7.9% | 9.0% | 8.9% | 8.7% |
| NWSL | 92 | 64 | -2.9% | -3.5% | 28.0% | 28.1% | 27.6% |
| WNBA | 73 | 51 | 4.8% | 38.7% | 20.5% | 20.1% | 20.0% |

## Caveats
- Sports against sports only: concerts, the biggest same-night competitors in several cities, are not on file for past dates. A season of archived Ticketmaster listings fixes that.
- The baseline already absorbs some competition: a team that always plays beside another draws its median with that competition in it. The test sees only the nights that differ from the usual.
- Straight-line miles. Rail and bridges are not in it.
