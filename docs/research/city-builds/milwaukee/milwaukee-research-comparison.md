# Milwaukee research comparison and proposed incorporation

Oct 11, 2026 · Codex. Independent assessment, not a product decision. Kylie requested that both models' original answers be preserved, compared separately by prompt, and used together where useful. All four originals were already tracked in Git at review start; this review leaves their contents unchanged.

## Assessment

The supplied answers show **Codex conducted the broader, more traceable investigation for both prompts**. Claude delivers the clearer short account and several useful supplementary findings. This judgment is about the submitted reports and targeted source checks, not access to either model's complete search history or a claim that every citation has been verified.

| Prompt | Claude | Codex | Assessment |
|---|---|---|---|
| Venue table | 25 distinct A records, including a disputed destination, planned stadium and historical building. Useful major-venue summaries, capacity reconciliation and 2026 attendance. Explicitly leaves many suburban/college/fair leads unresearched; most coordinates are address-based approximations. | 99 core A records, including 57 WIAA school-gym candidates, plus six corridor-edge records. Covers additional suburban ballparks, racing, college rooms, fairs and conventions; links mapped features, operator manuals and selected feed IDs. | Codex is substantially more complete even after excluding the school rows. Claude is easier to scan and provides supplementary evidence worth checking. Neither inventory is an automatic approved venue list. |
| City travel | Clear narrative, explicit ranges and useful discussion of withdrawn service and construction. Estimates six venue/event shares, but several components are stated assumptions rather than observations; mixes those estimates with defaults in regional averages. | Locates arena planning documents, distinguishes the Brooklyn survey from Milwaukee evidence, examines historical shuttle counts and an attendee preference poll, and documents service constraints. Rejects numerical overrides where the evidence cannot support the requested person-share definition. | Codex demonstrates deeper source investigation and stronger quantitative discipline. Its refusal to produce unsupported shares is justified here. Claude's estimates are useful hypotheses, not ready inputs. |

Citation breadth is supporting context, not a score: venue answers contain 123 versus 414 distinct linked URLs (Claude versus Codex); travel answers 74 versus 157. Repeated links, verbosity and row count alone do not establish quality. Codex's long tables repeat boilerplate, mix candidates with confirmed rooms and are harder to review; a concise implementation register is still needed.

## Evidence checks and limits

- **Panther Arena:** the [operator technical manual](https://wcd.org/wp-content/uploads/2025/10/UWMPA_Tec-manual_202520.pdf), PDF page 4, directly supports Codex's setup-specific figures: basketball 9,497, hockey 9,536, soccer 9,403 and maximum GA-floor configuration 12,148. This is a material improvement over Claude's unresolved broad figures. The same manual also contains a generic 12,700 table entry, so retain configuration/source context rather than describing every figure as one universal capacity.
- **Arena travel appendix:** the [public planning appendix](https://city.milwaukee.gov/ImageLibrary/Groups/cityDCD/planning/cpc/ItemsLocations/Arena-Zoning/150724ArenaAppendixFpt1of3TrafficStudy.pdf), PDF pages 29–31, identifies Barclays Center and Nets patron surveys. It is not a local Milwaukee attendee split. Codex correctly investigated and rejected that transfer; Claude says its arena-study search found only parking guides.
- **Western-metro coverage:** the [DockHounds' official directions page](https://dockhounds.com/directions-and-parking/) confirms an Oconomowoc site and public event/parking context. This supports the usefulness of Codex's broader metro search; it does not independently verify the report's capacity or rename history.
- **Ballpark capacity remains unresolved:** [MLB's guide](https://www.mlb.com/news/featured/american-family-field-guide-capacity-seating-chart-parking-and-more) publishes 41,900. Claude cites reporting selecting 40,100 after seat removals. Its WTMJ page failed normal retrieval during this review; no bypass was attempted. Do not declare the lower figure disproved, or treat a seat-removal count as a mechanically sufficient new capacity. Preserve both sources and verify the dated inventory before adoption.

These are targeted checks, not a complete fact audit. Current feed IDs, map placements, source dates and configurations still need checking as their records are incorporated.

## Travel findings to use together

Both reports support a car-oriented region with distinct downtown/lakefront options; neither establishes a current representative full attendee mode split. Codex recommends provisional `sprawl`; Claude recommends `hub`. This is interpretive disagreement, not two competing measurements.

The current `src/data/formula/gridlock.ts` gives **both types the same 0.85 car-share fallback and 0.15 near-zone spill**, with the same far spill/distance logic. Choosing between them currently does not change the read. Both travel reports suggest other model behavior differs; that is not borne out by this implementation. Codex's earlier chat explanation of a spill difference was also incorrect.

Claude's Summerfest estimate explicitly assumes 2026 shuttle volumes, local-route/Hop trips and walking shares from older counts and context. It excludes remote park-and-ride travelers from its recommended venue-area car share while adding them to a separate car-involved share. That value is not directly compatible with a definition including car legs. Its regional averages mix assumed shares, fallback shares, daily averages from multi-day totals and an arena-capacity proxy. These can illustrate scenarios, but do not establish an observed regional car share. The prompt specifically required evidence before dividing multi-day totals into equal days; flag that departure.

Use Claude's historical ridership/service findings as leads and retain its transparently labelled estimates in the original. Do not import those point estimates or reported regional percentages into venue records yet. A fallback must remain identified as a model default, not a measured Milwaukee figure. Codex's unknown shares do not prove that public studies do not exist; they accurately describe what this investigation established.

## Concrete implementation proposal for Kylie

1. Use Milwaukee, Waukesha, Ozaukee and Washington counties as the initial listing area. Keep Racine/Kenosha corridor research available separately; exclude Alpine Valley and other distant destinations from this initial metro. This boundary is a recommendation, not a lock.
2. Build a reconciled register using Codex's broader inventory and manuals, supplemented by Claude's dated capacity and attendance leads. Include verified active public rooms around 1,000+; keep historical names/configurations for past dates. Do not activate planned buildings. School entries with only a capacity list still require exact room, location and public schedule verification before automatic listings.
3. Record `sprawl` provisionally, explicitly retaining the downtown exceptions. Leave venue car-share overrides unset where evidence is insufficient; use the existing default without calling it observed behavior. No formula changes or new distance rules.
4. Wire verified supported teams and room-matched concerts through existing feeds. Other sports and event-specific fair/festival listings can join only with a verified date, location and defensible crowd treatment; no multi-day-total division or nested audience double-counting. Keep unresolved coverage visible.
5. Check attendance calibration, access measurement, nightly catalog and phone screens through the existing new-city checklist. Confirm primary source details as each venue/team is incorporated. Historical event reconstruction remains a separate step.

No app files, city configuration, data jobs, source answers or formula constants were changed in this review. Research is reviewed but remains open until the implementation choices are approved and findings are actually incorporated.

## Original reports

- [Venue answer — Claude](milwaukee-venue-table-answer-claude.md)
- [Venue answer — Codex](milwaukee-venue-table-answer-codex.md)
- [Travel answer — Claude](milwaukee-city-type-answer-claude.md)
- [Travel answer — Codex](milwaukee-city-type-answer-codex.md)
