# Event types, categories and subcategories — main 635a164

Read-only audit of `kylieau/fan-friction` at `origin/main` **635a164** (main's last commit Oct 14, 2026, 12:23 AM PT; checked 1:20 AM PT). Line refs are at that commit.

**Counts:** from `data/schedule-archive/*/*.json`. "Oct 13" = the 40 city files for 2026-10-13 (1,475 events, every covered city). "All" = all 118 archive files (4,444 event rows; the same event can appear in more than one file, so "All" is rows, not unique events). The archive is what the feeds produced; hand seeds and the Supabase catalog were not counted.

## 1. The layers at a glance

An event's type lives in four separate places, which don't line up one-to-one:

| Layer | Field | Where defined | Values |
|---|---|---|---|
| Kind | `CrowdEvent.kind` | `src/data/types.ts:79` | `game`, `show`, `festival`, `live-broadcast`, `special` |
| Audience domain | `audience.domain` | `src/data/types.ts:85-88` | `sports` (+ `sport`, optional `level`), `music` (+ `genre`), `other` (+ `tag`) |
| Sports level | `audience.level` / `Entry.level` | `src/data/types.ts:91` | `pro`, `lower`, `college`, `school`, `amateur` (absent = top pro) |
| Division | `Entry.division` | `src/data/types.ts:93` | `men`, `women`, `mixed` |
| Place type | `place.type` | `src/data/types.ts:123-126` | `venue`, `point`, `route` |
| Occasion (pull tier) | computed | `src/config/scoreLabels.ts:37-38`, `src/data/formula/occasion.ts:70,79` | `Routine`, `Notable`, `Major`, `Marquee` |
| Favorite kind | `Favorite.kind` | `src/data/types.ts:639` | `team`, `artist`, `venue`, `festival` |

`sport`, `genre` and `tag` are free strings: no TypeScript union and no database check constraint limits them.

## 2. Database (Supabase migrations)

- `public.events.kind text not null`: `supabase/migrations/0007_catalog.sql:14`. **No check constraint**. Sport, genre and tag live only inside `data jsonb`.
- Logged entries: `kind text not null -- game | show | festival | live-broadcast | special`, `supabase/migrations/0001_accounts.sql:112`. The allowed values are only a **comment, not a constraint**.
- The only check constraints in the migrations are on follow status, handles, watch places and blocks (0001, 0003, 0013, 0016, 0018, 0021). **None of them is on event type.**

## 3. Kind (`EventKind`)

| Key | Display label (Type fact, event page) | Add-form label | Chip icon | Count Oct 13 | Count All |
|---|---|---|---|---|---|
| `game` | the sport label (see §5) | "Game" | the sport's icon, else ticket | 427 | 1,444 |
| `show` | "Concert" | "Show" | `concert` (music note) | 745 | 2,261 |
| `festival` | "Festival" | "Festival" | `festival` (flag) | 0 | 1 (ComplexCon, hand seed in archive) |
| `live-broadcast` | "Live Broadcast" | "Live broadcast" | ticket (`special` fallback) | 0 | 0 (1 hand seed in `src/data/seed/kylieLog.ts:288`) |
| `special` | "Special" | "Special event" | `special` (ticket) | 303 | 738 |

- Type fact labels come from `eventTypeLabel` (`src/data/personalLog.ts:214-221`). The event page adds them as the "Type" fact (`personalLog.ts:493-497`).
- Add-form labels: `KINDS` in `src/screens/AddEntryScreen.tsx:34-40`.
- Stub rows for non-sport events: `personalLog.ts:558` uses "Live broadcast" / "Special" / "Event".
- Chip icons: `src/map/typeIcons.ts:9-35`. These are hand-drawn inline SVGs, 10px, stroke `#005A9C`, with no icon library. `iconKey` (`:30-35`): sports → the sport's icon if one exists, else `special`; `show` → `concert`; `festival` → `festival`; anything else → `special`.
- Product doc list: "Game, Show, Festival, Live Broadcast (Cosm-style watch parties), Special event" (`docs/product/product-decisions.md:132`).

## 4. Domain `sports`: `sport` values

| `sport` key | Type label | Chip icon (`typeIcons.ts` line) | Produced by | Oct 13 | All |
|---|---|---|---|---|---|
| `hockey` | Hockey | `hockey` :17 | ESPN, HockeyTech (`hockeytechSource.ts:214`), TM | 151 | 512 |
| `football` | Football | `football` :15 | ESPN, TM, seeds | 86 | 313 |
| `soccer` | Soccer | `soccer` :19 | ESPN, TM | 80 | 255 |
| `basketball` | Basketball (WNBA in logs: "Women's basketball", `personalLog.ts:219`) | `basketball` :13 | ESPN, TM | 74 | 253 |
| `baseball` | Baseball | `baseball` :11 | MLB (`mlbSource.ts:167`), ESPN college, seeds | 11 | 52 |
| `other` | "other" (raw, lowercase) | ticket fallback | TM `sportOf` fallback | 10 | 28 |
| `boxing` | "boxing" (raw) | ticket fallback | TM | 7 | 13 |
| `motorsports` | "motorsports" (raw) | ticket fallback | TM | 5 | 12 |
| `rodeo` | "rodeo" (raw) | ticket fallback | TM | 3 | 6 |
| `lacrosse` | "lacrosse" (raw) | ticket fallback | TM, ESPN `lacrosse/nll` | 0 | 0 |
| `tennis` | "tennis" (raw) | `tennis` :21 | TM | 0 | 0 |
| `cricket`, `wrestling` | raw | ticket fallback | TM | 0 | 0 |

- Ticketmaster's sport comes from `sportOf` (`src/data/sources/ticketmasterSource.ts:171-175`). It scans genre + subGenre + event name for hockey, basketball, football, soccer, baseball, lacrosse, rodeo, motorsports, tennis, cricket, wrestling, boxing, else `other`.
- TM `Sports` events only become `game` at venues on the `SPORTS_FROM_TICKETMASTER` list (`:155-167`). Elsewhere they're dropped (`null`) because the league feeds own sports.
- `sportLabel` (`personalLog.ts:199-208`) only maps the five main sports. Everything else shows its raw key.

**ESPN leagues** (`src/data/sources/espnSource.ts:17ff`, `path` = sport/league; count = team rows):

- Basketball: `mens-college-basketball` 77, `womens-college-basketball` 63, `nba` 26, `wnba` 12, `nba-development` 10.
- Football: `college-football` 58, `nfl` 26, `cfl` 5, `ufl` 2.
- Hockey: `nhl` 29, `mens-college-hockey` 6.
- Soccer: `usa.1` (MLS) 27, `usa.nwsl` 14, `usa.usl.1` 10, `mex.1` 4, `mex.w.1` 3, `usa.w.usl.1` 2.
- Other: `lacrosse/nll` 2, `baseball/college-baseball` 2.

The league is **not stored on the event**. It's only on the team (`Team.league`, `src/data/types.ts:70`).

**MLB:** always `baseball`, game types `S,R,F,D,L,W` requested (`mlbSource.ts:182`). Spring training (`S`) sets `preseason` (`:213`).

**HockeyTech** (AHL, ECHL, OHL and similar): always `hockey` (`hockeytechSource.ts:214`). All-Star and preseason seasons are skipped (`:161`).

**Level:** `audience.level` is **never set by any feed**: 0 of 1,475 events on Oct 13 have it. College is inferred from `Team.league` matching /college/ (`src/lib/eventTitle.ts:13`). Levels are only chosen on hand-added entries (`src/data/competitions.ts` `LEVELS`).

**Hand-entry sports list** (Add form): `SPORTS_SHOWN` Football, Basketball, Baseball, Soccer, Hockey, Volleyball; `SPORTS_MORE` Softball … Track & field, Other (`src/data/competitions.ts:16-31`). These display words are stored as `Entry.sport` in Title Case, while feed events store lowercase keys (§7).

## 5. Domain `music`: `genre` values

These are Ticketmaster's genre names, passed straight through (`ticketmasterSource.ts:286, 305`). There's no mapping and no icon per genre: every `show` uses the music-note icon and is labelled "Concert".

Oct 13 counts: Rock 233, Pop 91, Hip-Hop/Rap 67, Country 66, Other 61, Dance/Electronic 46, Latin 44, Metal 34, R&B 24, Alternative 14, World 13, Folk 10, Religious 9, Blues 9, Classical 8, Reggae 6, Ballads/Romantic 4, Undefined 3, Jazz 3.

Also in All: the lowercase seed genres `hip-hop`, `metal`, `rock`, `pop`, `classical`. Seeds also have `classic rock`, `k-pop`, `pop rock`, `latin`, `electronic` and `various` (`src/data/seed/*`).

Genre matters to scoring: same genre = Medium audience overlap, else Low (`src/data/formula/overlap.ts:68`). So "Rock" vs "rock" and "Hip-Hop/Rap" vs "hip-hop" count as **different** genres.

## 6. Domain `other`: `tag` values

TM `Arts & Theatre`, `Miscellaneous`, `Film` and unknown segments → `special`, with the genre as the tag (`ticketmasterSource.ts:155-167, 305`). All are labelled "Special" with the ticket icon.

Oct 13 counts:
- Undefined 107, Theatre 51, Comedy 28, Circus & Specialty Acts 25, Ice Shows 16, Spectacular 15, Miscellaneous 12, Arts & Theatre 7, fair 6, Classical 5, Family 5, Dance 4.
- Opera 3, Miscellaneous Theatre 3, Drama 3, Action/Adventure 2, Performance Art 2, Community/Civic 2.
- 1 each: Hobby/Special Interest Expos, Animation, Horror, Children's Theatre, Psychics/Mediums/Hypnotists, Magic & Illusion, Multimedia.

All adds: `convention` 18, Lecture/Seminar 4.

Seed-only tags: `fair`, `convention`, `horse-racing` (`src/data/seed/*`). Film genres (Animation, Horror, Action/Adventure) come from TM's Film segment.

## 7. Fallbacks

- `kindOf` default → `special` (`ticketmasterSource.ts:165`).
- Genre fallback → segment name → `'Other'` (`:286`).
- `sportOf` → `'other'` (`:174`).
- Icon fallback → ticket (`typeIcons.ts:31, 34`).
- `sportLabel` fallback → the raw key (`personalLog.ts:207`).
- Stub row sport fallback → "Sports" (`personalLog.ts:550`).
- Unknown size → `sizeTier` `'unknown'` (`src/data/read.ts:117`).

## 8. Gaps and inconsistencies

1. **No enforced vocabulary.** `kind` is unconstrained in the database (0007, 0001), and `sport`, `genre` and `tag` are free strings everywhere.
2. **Raw keys reach the UI.** The Type fact shows "other", "boxing", "motorsports", "rodeo" lowercase (`sportLabel` only maps five sports).
3. **"Special" is a catch-all for 303 events a day.** Theatre, comedy, circus, ice shows, film, fairs and 107 "Undefined" all show as "Special" with a ticket icon. The `tag` is never shown.
4. **Case and spelling drift in genres** (Rock/rock, Hip-Hop/Rap/hip-hop) silently changes audience overlap.
5. **Feed vs log sport strings differ.** Feeds store `baseball`; logs store `Baseball`/`Concerts` (`eventTypeLabel` checks `sport === 'Concerts'` and `'WNBA'`, `personalLog.ts:218-219`). Two vocabularies for one idea.
6. **The label for `show` differs by surface:** "Concert" on the event page and "Show" on the Add form.
7. **Live broadcast** has no icon of its own (ticket), and "Live Broadcast" vs "Live broadcast" casing differs (`personalLog.ts:216` vs `:558`, `AddEntryScreen.tsx:38`).
8. **The tennis icon exists, but no tennis events; lacrosse (NLL) events exist with no icon.** Volleyball, softball and golf are in the Add form with no feed and no icon.
9. **`level` is never set by feeds**, so college, minor-league and pro distinctions rely on `Team.league` string matching. ESPN's league path isn't kept on the event.
10. **Comedy, theatre and family** are product categories in all but name: there's no key, label or icon for them.
11. **Festival is almost unused by feeds** (TM festivals arrive as `show`). 1 festival row in the whole archive.
