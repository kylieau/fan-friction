# Research prompt: how full theater, arts, comedy and classical rooms get, by room size

Paste everything below the line into the research tool. Kylie runs it herself (build 7.1, item M35, "research first, ship later").

---

I'm building a US events app that shows an expected crowd figure on every event and uses those figures to judge how busy an area is on a given day. Concerts already have estimates. **Theater, arts, comedy, dance, classical, opera, and family shows don't**, so their rows show no number. Today the app only knows each room's seated capacity (for example Peacock Theater in Los Angeles, about 7,100, and Long Beach Arena, 13,000 to 14,500 depending on setup).

I need published, citable figures to turn **capacity × a fill rate** into an honest estimate, and to know when I should only say "Up to N" (the capacity as a ceiling).

Please find and summarize:

1. **Average paid or attended capacity (fill rate) by category**, from published sources only:
   - Broadway and touring Broadway (The Broadway League, Broadway grosses data, touring season reports)
   - Regional and nonprofit theater (TCG Theatre Facts and similar)
   - Orchestras and classical series (League of American Orchestras, published annual reports)
   - Opera, ballet and dance (OPERA America, Dance/USA)
   - Comedy (arena and theater comedy tours, from Pollstar or Billboard Boxscore if available)
   - Family shows and touring spectacles (Disney on Ice, Cirque du Soleil, Blue Man Group, etc.)
2. **How fill changes with room size.** Use bands: under 1,000; 1,000 to 2,999; 3,000 to 5,999; 6,000 to 11,999; 12,000+ seats. If a source doesn't break it out by size, say so instead of inventing a split.
3. **How fill changes by day of week and run length** (opening night vs. mid-run, weekday vs. weekend matinee), only where a source reports it.
4. **Configurations.** When an arena hosts a theater-style or half-house show (stage at one end, curtained upper bowl), what share of the listed capacity is typically sold? Cite examples.
5. **Where per-show figures are published**, so the app could use a real number instead of an average (Broadway League weekly grosses, Billboard Boxscore, Pollstar, venue or city annual reports, nonprofit annual reports or 990s).

Rules for the answer:
- Cite every number with a source name, year, and URL. Prefer 2022 to 2026 data; mark anything pre-2020 as older and say whether the pandemic years distort it.
- **Don't guess or interpolate.** If no source exists for a band or category, write "No published figure" and suggest the safest fallback (for example "show Up to N").
- Give a final table: category × room-size band → fill rate (range), source, confidence (high / medium / low).
- Finish with a short recommendation: which categories have strong enough data to estimate now, and which should stay "Up to N".
