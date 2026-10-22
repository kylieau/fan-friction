# Build 7 research: logging entry point — ChatGPT's answer
Source: Kylie pasted ChatGPT's research reply in chat, 2026-10-21. Saved for build 7. (Links/images in the original did not survive the paste.)

Recommendation: use both a persistent "+" and event-page logging. Strongest pattern: a prominent global entry point that intelligently surfaces relevant events, plus a contextual "Stub it" wherever an event appears. Not necessarily "+" as a fifth navigation tab.

## 1. How comparable apps handle logging (iOS, as of Oct 2026)

| App | Primary entry pattern | How logging works |
|---|---|---|
| Letterboxd | Bottom "+", plus contextual | Global + starts film search and diary entry; film pages also log. |
| Goodreads | Search-first / book page | Find book, choose Read / Currently Reading / Want to Read. No center create control documented. |
| The StoryGraph | Search-first / book page | Search title/ISBN, select status, add finish date or review. |
| Beli | Center Search / contextual add | Search restaurant, then add/rank. Center control is Search; not a verified create tab. |
| Untappd | Floating "+", plus contextual | Oct 2026 redesign: four nav tabs, yellow bottom-right check-in FAB, Check-in on drink/place pages. Nearby drinks suggested. |
| Strava | Dedicated Record tab | Record in bottom nav, then Start. Named task destination, not generic +. |
| Swarm / Foursquare | Bottom-right "+" | Tap +, choose suggested nearby place or search, check in. Can associate with an event. |
| Instagram | Historically center "+"; now varies | 2025–26 redesign moves Create to top-left in newer layouts. |
| TikTok | Center "+" | Add Post launches creation. |
| Serializd | Contextual quick-log | Show/episode logging incl. long-press posters. No verified universal center control. |
| Momento: Live Events | Add Event flow | Searches events across sports and concerts; uses favorite teams/artists to surface likely events. |
| Futbology | Nearby fixtures / contextual | Find nearby matches, check in at stadium; historical logging from results or manual. |
| Concert Archives | Search-first / concert page | Find concert, mark attendance, or add a missing one. |

Useful UI references: Letterboxd, Untappd 5.0, Swarm.

## 2. UX findings
- Discoverability: a prominent + is noticeable but semantically vague; NN/g recommends visible text labels for ambiguous icons. "Log" or "Stub it" clarifies.
- Apple HIG: tabs are for navigation, not actions. A raised + embedded as a tab is nonstandard; a separate floating/overlaid action above four real tabs is more defensible.
- When justified: Material FAB guidance — prominent floating action for the most important task, not on every screen. Letterboxd and Untappd are logging-app precedents.
- Accidental taps: real risks are wrong-target taps, crowded hit areas, and moving established buttons (Instagram muscle-memory complaints), not center + per se. ≥44×44 pt hit regions, adequate spacing.
- Accessibility: proper button role, VoiceOver label "Log an event", visible focus/pressed states, Dynamic Type, separation from adjacent tabs. Opening the sheet must not create a log automatically.
- Letterboxd usage: both routes demonstrably used; confusion between "watched" and "logged" repeatedly reported. No credible public split of which route most users use.

## 3. Fastest at an event
Fan/Friction can often predict the exact event. Global + → relevant event → Attended can beat searching; from an event page, Stub it → Attended/Watched is fastest. A "What's happening now" shortcut turns + into a context-aware quick action (precedents: Futbology nearby fixtures, Swarm nearby places, Untappd nearby drinks).
Low signal: predicted events from cached schedules; logs save locally immediately and sync later. Don't require venue GPS, live scores, photos, or network confirmation to record attendance.

## 4. Recommendation for Fan/Friction
Both routes: global + and contextual Stub it. Illustrative bar: Explore · Upcoming · Log · Friends · You (four destinations plus a separate log action).
+ sheet order:
1. Search field immediately available (doesn't block intentional search).
2. Happening Now / Today, ranked by favorite teams/artists, previously opened events, event time, optional location.
3. Nearby Today / Recent, with manual city selection when location is unavailable.
4. Attended / Watched on each suggested event or right after selection; don't require choosing mode before identifying the event.
Tradeoff: global + gives up some tab-bar symmetry and strict native convention for task speed; contextual-only is cleaner but more navigation and less obvious core behavior.
MVP: ship both and instrument entry_source (global + vs event page), median time to saved log, successful first logs, abandoned sheets.
Bottom line: don't copy Letterboxd's + as merely a way to open search; make Fan/Friction's + the fastest path to the event I'm at or watching right now.

Note for Fan/Friction copy rules: the wireframe used "Lakers vs. Warriors" and "Tonight" — our rules are Away at Home naming ("Warriors at Lakers") and no "night".
