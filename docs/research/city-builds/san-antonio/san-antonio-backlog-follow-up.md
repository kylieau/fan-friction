# San Antonio — BACKLOG follow-up (city build)

Oct 13, 2026 · Cursor Cloud Agent. Items to verify on Kylie’s next review form. Not product decisions.

## Ticketmaster venue IDs

No Ticketmaster API key in the build environment. Concert rooms ship without `ticketmasterIds` until verified (C12). Catch-up when a key is available (`node scripts/ticketmaster-venues.mjs --metro=san-antonio`).

Rooms needing lookup: Alamodome, Frost Bank Center, Freeman Coliseum, Real Life Amphitheater, Retama Park, Wolff Stadium, Toyota Field, Benson Stadium, Cowboys Dancehall, Whitewater Amphitheater, R&J Music Pavilion, Sunken Garden Theater, UTSA Convocation Center, Floore’s outdoor, The Espee, Boeing Center at Tech Port, Laurie Auditorium, Lila Cockrell Theatre, Majestic Theatre, Tobin Center, McDermott Convocation Center, Aztec Theatre.

## Capacities left blank or weak

- **Illusions Theater** (inside Alamodome): not a separate row; capacity unknown in research.
- **Freeman rodeo-only setup** vs concert: one concert row stored; rodeo 9,500 not a separate capacity row.
- **Real Life Amphitheater**: 2026 calendar unverified; seated 6,000 vs 8,000 conflict preserved in note.
- **Retama Park**: 15,000 from Stadium Journey (reported, undated).
- **R&J Music Pavilion**: listed for sale; 2026 activity unverified.

## Open sites and hand-listed events (not seeded)

Stock Show & Rodeo grounds totals, Fiesta umbrella and sub-events, Wurstfest, Valero Texas Open, parade routes, NIOSA, Alamo Bowl Fan Zone at The Espee, NCAA volleyball at Alamodome (Dec 2026), Spurs Moody Center “home” games (Austin room). Gaps follow-up prompts not run yet (`san-antonio-gaps-followup-prompt.md`).

## Feeds and attendance gaps

- **UIW** football and basketball: ESPN schedules returned no attendance lines in the pull window.
- **Spurs** attendance file excludes Moody Center and Mexico City neutral games (not San Antonio buildings).
- **Missions** occasional Whataburger Field away-home feed rows stay unmapped.

## Edge and status flags

- **Whitewater Amphitheater**: Chapter 11 sale; shared catchment with Austin—listed only here.
- **Real Life Amphitheater**: last confirmed concerts 2022.
- **Cowboys Dancehall** / **R&J**: threshold-care standing-heavy rooms.
