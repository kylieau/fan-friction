# Proposal: short labels for college tournament games (Oct 15, 2026)

Status: **approved and built (Kylie, Oct 15, 2026): first round stays Notable (2 points).** She may want more research on this later (BACKLOG). The LA dates below were reloaded (private SQL 0034).

## The problem
College basketball and hockey postseason games show ESPN's whole headline as their label, for men and women alike:

> Sacramento St at UCLA · WBB (NCAA Women's Championship pres. by Capital One - Greenville Regional 1 - First round)

The round text also feeds the occasion score (`roundPoints` in `src/data/formula/occasion.ts`), and the raw text scores unevenly. "1st Round" gets 3 points only because it contains the word "round". "Sweet 16" and "Elite 8" get 0 points, because they contain neither "round" nor "final". (Expected crowds are not affected: `roundBand` doesn't size college postseasons.)

## Proposal
1. **One short label per round, the NCAA's own words:** First Four, First round, Second round, Sweet 16, Elite Eight, Final Four, National Championship; Frozen Four for hockey. The NCAA tournament is plain. Any other tournament is named first: NIT First round, WBIT Second round, Crown Second round, FCS Semifinal, Big Ten Tournament Quarterfinal. Gender, sponsor, region and city leave the label, since MBB / WBB already says which.
2. **Points that match the pro playoffs:** First round 2 (like an NBA or NHL first round); Second round, Sweet 16, Elite Eight, Final Four and Frozen Four 3; National Championship 4.

**Kylie's choice:** a first-round tournament game becomes "Notable" (2 points, like the pros), or stays "Major" (3 points, as the raw text happens to score now). Recommended: 2, for consistency with every other sport's first round.

## Before and after (Los Angeles, every college tournament home game loaded, 2022–2026)

| Date | Game | Label now → proposed | Occasion | Date rating |
|---|---|---|---|---|
| 2022-03-18 | UC Irvine at UCLA · WBB | Women's NIT - First round → NIT First round | Major → Notable | 1 → 1 |
| 2022-03-20 | Air Force at UCLA · WBB | Women's NIT - Second round → NIT Second round | Major | 1 → 1 |
| 2023-03-18 | Sacramento St at UCLA · WBB | NCAA Women's Championship pres. by Capital One - Greenville Regional 1 - First round → First round | Major → Notable | 3.1 → 3.1 |
| 2023-03-20 | Oklahoma at UCLA · WBB | (same headline) - Second round → Second round | Major | 1 → 1 |
| 2024-03-23 | Texas A&M-CC at USC · WBB; CA Baptist at UCLA · WBB | NCAA Women's Championship - Regional 3 in Portland / 2 in Albany - First round → First round | Major → Notable | 3.9 → 3.8 |
| 2024-03-25 | Creighton at UCLA · WBB; Kansas at USC · WBB | … - Second round → Second round | Major | 6.7 → 6.7 |
| 2025-03-21 | Southern at UCLA · WBB | NCAA Women's Championship - Regional 1 in Spokane - First round → First round | Major → Notable | 3.7 → 3.7 |
| 2025-03-23 | Richmond at UCLA · WBB | … - Second round → Second round | Major | 7.4 → 7.4 |
| 2026-03-21 | CA Baptist at UCLA · WBB | NCAA Women's Basketball Championship - Regional 2 in Sacramento - First round → First round | Major → Notable | 1.3 → 1.3 |
| 2026-03-23 | Oklahoma St at UCLA · WBB | … - Second round → Second round | Major | 5.4 → 5.4 |

One date rating moves (3.9 → 3.8). On Mar 18, 2023 the two games' verdicts trade places (Galaxy Moderate → Low, Sacramento St Low → Moderate), and the date's rating stays the same. No LA home game reached the Sweet 16 or later, but other cities' do: those go from 0 to 3 points.

Checked against every college postseason headline on file (40 cities' crowd history plus the loaded LA dates). WNBA, MLS and NWSL playoff headlines are untouched.

## To build (after the OK)
- `src/data/sources/roundLabel.ts`: add `collegeTournamentRound(raw)`. It splits the headline on " - ", matches the last part against the round list above, keeps the NCAA plain, and prefixes NIT / WBIT / CBI / CIT / Crown / FCS / "<Conference> Tournament". It returns undefined (the headline stays) when the round isn't recognized. Call it from `otherPostseason` for college paths only (pass the ESPN path in from `espnSource.ts`).
- `src/data/formula/occasion.ts`, `roundPoints`: add `sweet 16|elite eight|final four|frozen four` to the 3-point list. "First round" already scores 2 and "National Championship" 4.
- Stored past games keep the old headline until reloaded. Rerun `scripts/past-dates-load.mjs` for the affected dates; the paste upserts the new label.
- Check: `npm run build`, `node scripts/titles-check.mjs`, and this table again.
