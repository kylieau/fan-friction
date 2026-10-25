# Follow-ups, Oct 24, 2026 (after build 7.1)

Mocks drawn by Claude Code in the headless phone (390 × 844) with CSS or DOM changes injected into the live app; nothing here is approved. The rows use EXAMPLE plans on real Oct 24 and Oct 18 Los Angeles events.

## Explore List calendar (the legend is already removed, `59ec513f`)
| Frame | What it shows |
|---|---|
| `cal-a-plain.png` | A: every tile plain; past numbers grey, today ringed. |
| `cal-b-build4.png` | B: back to build 4 (Kylie, V05, Oct 12): today and ahead in their verdict colour, past days plain grey. |
| `cal-c-keep.png` | C: as shipped in build 7.1 (M29), minus the legend: past days faded. |

## Your answer on event rows (Attending, Watching, Interested, Attended)
| Frame | What it shows |
|---|---|
| `rows-0-now.png` | Today: the answer always on its own line under the row. |
| `rows-a-first-free-slot.png` | A (lean): the answer takes the first free right edge under the title: the label line, else the venue line; Bay FC (no label, weather on the venue line) keeps its own line, stacked under the weather. |
| `rows-a-fallback-tag-and-weather.png` | A's fallback, today's markup: the venue line holds the occasion tag and the weather, so the answer stacks under them. |
| `rows-b-icon-on-title-line.png` | B: the icon alone on the title line before the crowd figure, no word. |
