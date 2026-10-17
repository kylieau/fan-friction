# Color roles (Kylie, Oct 10, 2026)

Decided in the Mock Mosaic on Oct 9–10, 2026 and recorded in `docs/reviews/build-notes-2-oct10.md`, section 7. The rule in one line: **blue means action, gold means crowd, violet means friction.** Each accent keeps one meaning, so none appears out of the blue. Components use the token (a CSS variable set from `src/config/theme.ts`), never a raw hex.

## Tokens

| Token | CSS variable | Value | Use | Never |
|---|---|---|---|---|
| `action` | `--action` | #005A9C | buttons, links, chevrons, the selected tab, "Why 4.7 ›" | crowd or friction |
| `crowd.mark` | `--crowdMark` | #FFD100 | map dots and glow; a badge fill with ink text ("Biggest crowd") | text on light, buttons, the tab bar, links |
| `crowd.icon` | `--crowdIcon` | #B98500 | the filled two-person crowd mark before a crowd figure in text | |
| `crowd.bar` | `--crowdBar` | #E3A600 | crowd bars (the Why card) and every Local Competition bar (build 6, item 3: one identity color, not a size encoding) | |
| `crowd.onInk` | `--crowdOnInk` | #FFD100 | the crowd number and date on the dark share card | |
| `fight.container` | `--fightContainer` | #E6DDF8 | the friction pill's one tint, every level, Unopposed included (build 6, item 1; Kylie, Oct 16), the "Toughest fight" badge | |
| `fight.ink` | `--fightInk` | #3F2A78 | the friction pill's text on that tint (8.9:1) | |
| `fight` | `--fight` | #6A3FBF | the friction ring on rows and beside the event page's pill, the "Up against" label and left rule, rival dots | links, buttons, the day read |
| `fight.bar` | `--fightBar` | #B39DE6 | the ring's violet for a dark theme, when one exists (build 6, spec only) | text |
| no-fight bar | `--noFightBar` | #AEB8C6 | the Why card's quiet crowd bar (a room under the floor) | |
| tag ink | `--tagInk` | #4B5A70 | the occasion outline tag and its text | |

The day read's own ladder (Chill through Cooked) is unchanged. The one approved exception to "gold is crowd": the Cooked read keeps gold text on ink (`.read-big.cooked`).

## Why
Material 3 color roles and on-colors: components point to a named role; 60-30-10 keeps the accents around a tenth of the screen. Gold and violet are woven through the app (Home, Explore, the event page, My Stubs, Favorites, the share card) so they do not appear out of nowhere, but each keeps its one meaning.

## Where each accent lands (7.4)
- **Home:** the crowd mark beside the city crowd total and on row crowds. "Why 4.7 ›" stays action blue.
- **Explore:** the crowd mark on "8 events · 83k" and on the chip card's figure.
- **Event page:** the gold crowd fill bar stays. "Up against": violet label and left rule, violet rival dots, gold crowd marks on each rival. Build 6: the friction pill with its ring in the Crowd card and in "Up against"; Local Competition bars on the date page are gold.
- **My Stubs:** the crowd mark on the "Fans with you" stat; a gold "Biggest crowd" badge with ink text; a pale violet "Toughest fight" badge.
- **Favorites:** a next line follows the Explore pattern (gold crowd mark, then the violet friction ring; build 6).
- **Share card:** gold date and crowd on ink; the violet pill with a thin white outline.

Retired Oct 17, 2026 (build 6, item 1): `fight.deep` (#2C1A57, the Steamrolled pill) and `unopposed` (#EEF2F7, the Unopposed pill): every level now shares `fight.container`.

## Decided against
- A gold tab-bar dot or any gold decoration: it would make the crowd signal into branding.
- Violet shading on the calendar: the calendar already shades by read.
- Violet on "Why 4.7 ›" or any link.
- Gold text on light backgrounds (1.3–2.2:1 contrast).
- A blue friction ramp: it blended with the read box and action blue and looked tappable.
- A warm orange-to-maroon friction ramp: it read as an error, and its middle step looked mustard, like crowd gold, to red-green colorblind users.
- Keeping the gold glow dot in text rows (it looked like a map pin and blurred at row size); a gold pill with an ink number (loudest, a third pill, competed with violet, looked like a badge); an outline crowd icon (busier, less gold); #C08C00 for the icon (fails 3:1 on the selected tint).
- Violet crowd bars on the Why card (they mixed up crowd and friction); #FFD100 bars (vanish on the pale track).

Mocks: [friction-colors.png](friction-colors.png), [crowd-mark.png](crowd-mark.png), [crowd-icon-filled.png](crowd-icon-filled.png), [p3-gold.png](p3-gold.png), [accents-everywhere.png](accents-everywhere.png).
