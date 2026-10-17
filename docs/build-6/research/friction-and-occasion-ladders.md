# Friction and Occasion ladders: what main does (research for build 6)

Read-only research against main (checked Oct 16, 2026; line numbers re-checked on 67c91d27). Two questions from Kylie, Oct 16: 1:22 PM PT (the friction ladder) and 2:04 PM PT (the occasion ladder). **Note:** this file is the findings, reconstructed from the working notes; the two prompts and the original chat answers are not stored in the repo, so they are paraphrased here, not verbatim. Paste the originals next to this file if they need to be on record.

## Prompt 1 (paraphrased): the friction ladder labels
Meaning in product terms and copy; where defined (`scoreLabels.ts`, `theme.ts`, mappings, numeric thresholds, inputs); one-dimensional and ordered, or categorical; color convention conflicts (gold / violet, hexes); representation rules (pill or word, color-blind, layout).

### Answer
- **Ladder.** `FRICTION_LEVELS = Low, Moderate, Heavy, Extreme`; shown words `Unopposed, Squeezed, Swamped, Steamrolled` (`src/config/scoreLabels.ts:40,48`). Low is stored but hidden on lists (`showFriction`, `:59`); Unopposed shows only on the event page.
- **One-dimensional and ordered.** A single score maps to four bands: `verdictFromScore` < 3 Low, < 5.5 Moderate, < 8 Heavy, >= 8 Extreme (`src/data/formula/crowdFight.ts:88`; the bands are labeled placeholders).
- **Inputs.** An event's friction is `verdictFromScore(max(crowd-fight score, conditions score))` (`src/data/formulaRead.ts`). Crowd fight = the event's pull against rivals within the window, using `EVENT_SCALE` 14, tier weights High 0.7 / Medium 0.35 / Low 0.15, a time factor, and `PULL` by occasion (`crowdFight.ts`). Conditions (heat, rain, cold) add a weather score for open-air events (`src/data/formula/weather.ts`: `1 + 9w`). Gridlock is not an input; it feeds the date's read only (`gridlock.ts`). Only events of 5,000 or more feed friction (`FRICTION_ATTENDEES`, `src/data/read.ts`).
- **Not the date read.** The date's 1-10 read (Chill / Mild / Spicy / Brutal / Cooked, `scoreLabels.ts:7-12`) combines crowd fight, gridlock and conditions; friction is per event.
- **Color roles** (`src/config/theme.ts`; `docs/design/colors.md`): blue = action, gold = crowd (`crowdMark`, `crowdIcon`, `crowdBar #E3A600`, `crowdOnInk`), violet = friction (`fightContainer #E6DDF8`, `fight #6A3FBF`, `fightDeep #2C1A57`, `fightBar #B39DE6`); `noFightBar #AEB8C6`, `unopposed #EEF2F7`, `tagInk #4B5A70`.
- **Representation on main.** A filled pill with the word only (`FrictionPill`, `src/components/EventTags.tsx:32`), four different fills (`styles.css:5784-5810`), plus the "by {rival} +N" line (`ByLine`). Words carry the meaning, so it does not rely on color alone; there is no ring or shape mark yet (build 6, item 1).

## Prompt 2 (paraphrased): the occasion ladder
Exact levels and order in code; what shows on screen at each level on each surface; the grey occasion labels (Home opener, Season finale); what decides the level (field, rule, hand-set, derived); decided rules and rejected ideas.

### Answer
- **Levels.** `OCCASIONS = Routine, Notable, Major, Marquee` (`scoreLabels.ts:37`). Pull weights `Routine 1, Notable 1.2, Major 1.6, Marquee 2.5` (`src/data/formula/occasion.ts:81`). `docs/reference/formula-v4.md:32` still lists 1 / 1.1 / 1.3 / 1.6 with a note that Oct 6 steepened it, so the code is current.
- **Derived, not hand-set.** `occasionPoints` adds points from `OccasionFacts`, playoff round and concert booking, plus bonuses; `occasionFromPoints` maps 4 or more to Marquee, 3 Major, 2 Notable, else Routine (`occasion.ts`). The tag is the formula's input, not a separate label.
- **On screen on main.** `OccasionTag` is an outlined uppercase word, nothing for Routine (`EventTags.tsx`); it prints on every row that has one (`EventTags.tsx:11-22`), on `ChipCard.tsx:30`, and as a key example on the map (`MapScreen.tsx:396`). Build 6 item 2 restricts lists to the day's top level.
- **Grey labels are separate.** "Home opener" and similar are title labels, not occasion levels (`src/lib/eventTitle.ts` `eventLabel`: stage, low, occasion, game, sport kinds; `TitleText.tsx:7` colors them). Season finale has no source field.
- **Stale doc.** The "Occasion shield" in `docs/reference/overlap-and-date-rating-v3.md:20` is no longer in code.
