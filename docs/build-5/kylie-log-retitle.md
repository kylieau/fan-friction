# Your imported log: new names, for your yes

**On hold (Kylie, Oct 14): don't run 0027 yet.** She is adding research to flesh out the details on these events, and will answer the questions below after that; they aren't to be reopened before then. She confirmed the rename itself ("yes") and that the brackets on Dodgers games are the starters, which stay on each stub.

Written Oct 14, 2026 (Claude Code). You asked for the stubs imported from `docs/product/kylie-logs.md` (migration 0002) to be renamed. They're already in the old style ("UCLA MBB vs. Maryland"), so this renames them **to the new style** the rest of the app now uses ("Maryland at UCLA · Basketball"). If you meant something else, say so and nothing runs.

**How to apply:** read the table; if it's right, run `supabase/migrations/0027_kylie_log_titles.sql` in Supabase's SQL editor. It changes only rows that still have their old title, lists each change, and every phone picks the new names up on its next open. The table and the SQL come from one script, so they match.

**98 of 130 rows change.** The 32 concerts and festivals keep their names: the naming rules leave them as you wrote them. One co-bill ("Pitbull, Enrique Iglesias & Ricky Martin") is kept whole rather than cut at 32 characters.

## The rules used
- **Home team second, "at" between:** "Dodgers vs. Rockies" → "Rockies at Dodgers"; "Dodgers @ Padres" → "Dodgers at Padres".
- **Neutral sites keep "vs." and your order** (the Final Fours, the Elite Eight, the title game).
- **College squad codes become the sport, after the teams:** FB → Football, MBB → Basketball, WBB → Women's basketball, MVB/WVB → Men's/Women's volleyball, baseball → Baseball. The sport stays on every row, even past 32 characters: it's the only thing telling your UCLA men's games from the women's.
- **Pitcher nicknames leave the title** ("Dodgers (Yama) vs. Diamondbacks" → "Diamondbacks at Dodgers"); the starter is already stored on each stub and still shows there.
- **MLB playoff rounds go after the teams:** "NLWC Game 1: Dodgers vs. Reds" → "Reds at Dodgers · NLWC, Game 1"; past 32 characters the game number shortens: "Phillies at Dodgers · NLDS G3".
- **Cosm:** "Ohio State at Michigan · Watch party", the name decided earlier, until the Cosm research is back.

## Needs your word
1. **Men's basketball reads "Basketball"**, the word the app already uses for college MBB in listings, while women's reads "Women's basketball". Or "Men's basketball" on your rows?
2. **Rankings stay in the titles** ("#17 USC at #4 UCLA") until rankings and seeds get their own field (in BACKLOG for the next build). Or drop them now?
3. **NCAA rounds in words:** R64 → "First round", R32 → "Second round", E8 → "Elite Eight", natty → "National Championship", Final Four as is.
4. **Five rows wrap to three lines on My Stubs** (marked below), like "#1 UCLA vs. #1 South Carolina · Women's basketball · National Championship".

## Every change
| # | Date | Before | After | Needs your word |
|---|---|---|---|---|
| 1 | 2026-01-03 | #4 UCLA WBB vs. #17 USC | #17 USC at #4 UCLA · Women's basketball |  |
| 2 | 2026-01-10 | UCLA MBB vs. Maryland | Maryland at UCLA · Basketball |  |
| 3 | 2026-01-20 | UCLA MBB vs. #4 Purdue | #4 Purdue at UCLA · Basketball |  |
| 4 | 2026-01-21 | #3 UCLA WBB vs. Purdue | Purdue at #3 UCLA · Women's basketball |  |
| 5 | 2026-01-31 | UCLA MBB vs. Indiana | Indiana at UCLA · Basketball |  |
| 6 | 2026-02-01 | #2 UCLA WBB vs. #8 Iowa | #8 Iowa at #2 UCLA · Women's basketball |  |
| 7 | 2026-02-03 | UCLA MBB vs. Rutgers | Rutgers at UCLA · Basketball |  |
| 8 | 2026-02-07 | UCLA MBB vs. Washington | Washington at UCLA · Basketball |  |
| 9 | 2026-02-14 | CMS WBB @ Pomona-Pitzer | CMS at Pomona-Pitzer · Women's basketball |  |
| 10 | 2026-02-19 | #2 UCLA WBB vs. Washington | Washington at #2 UCLA · Women's basketball |  |
| 11 | 2026-02-20 | #1 UCLA MVB vs. #2 Long Beach | #2 Long Beach at #1 UCLA · Men's volleyball |  |
| 12 | 2026-02-21 | UCLA MBB vs. #10 Illinois | #10 Illinois at UCLA · Basketball |  |
| 13 | 2026-02-22 | #2 UCLA WBB vs. Wisconsin | Wisconsin at #2 UCLA · Women's basketball |  |
| 14 | 2026-02-24 | UCLA MBB vs. USC | USC at UCLA · Basketball |  |
| 15 | 2026-03-03 | #1 UCLA baseball vs. CSF | CSF at #1 UCLA · Baseball |  |
| 16 | 2026-03-03 | UCLA MBB vs. #9 Nebraska | #9 Nebraska at UCLA · Basketball |  |
| 17 | 2026-03-06 | #1 UCLA MVB vs. #4 USC | #4 USC at #1 UCLA · Men's volleyball |  |
| 18 | 2026-03-08 | #5 Cal Lutheran MVB vs. Baldwin Wallace | Baldwin Wallace at #5 Cal Lutheran · Men's volleyball |  |
| 19 | 2026-03-08 | #5 Cal Lutheran MVB vs. Kean | Kean at #5 Cal Lutheran · Men's volleyball |  |
| 20 | 2026-03-10 | Lakers vs. Timberwolves | Timberwolves at Lakers |  |
| 21 | 2026-03-21 | #1 UCLA WBB vs. Cal Baptist (R64) | Cal Baptist at #1 UCLA · Women's basketball · First round | "R64" → "First round"; three lines on My Stubs |
| 22 | 2026-03-23 | #1 UCLA WBB vs. Oklahoma State (R32) | Oklahoma State at #1 UCLA · Women's basketball · Second round | "R32" → "Second round"; three lines on My Stubs |
| 23 | 2026-03-26 | Dodgers (Yama) vs. Diamondbacks | Diamondbacks at Dodgers | starter Yamamoto stays on the stub |
| 24 | 2026-03-27 | Lakers vs. Nets | Nets at Lakers |  |
| 25 | 2026-03-28 | Dodgers (Glas) vs. Diamondbacks | Diamondbacks at Dodgers | starter Glasnow stays on the stub |
| 26 | 2026-03-29 | #1 UCLA WBB vs. #3 Duke (E8) | #1 UCLA vs. #3 Duke · Women's basketball · Elite Eight | "E8" → "Elite Eight"; neutral site: your order kept |
| 27 | 2026-04-03 | #1 UConn vs. #1 South Carolina (Final Four) | #1 UConn vs. #1 South Carolina · Women's basketball · Final Four | neutral site: your order kept; three lines on My Stubs |
| 28 | 2026-04-03 | #1 UCLA WBB vs. #1 Texas (Final Four) | #1 UCLA vs. #1 Texas · Women's basketball · Final Four | neutral site: your order kept |
| 29 | 2026-04-05 | #1 UCLA WBB vs. #1 South Carolina (natty) | #1 UCLA vs. #1 South Carolina · Women's basketball · National Championship | "natty" → "National Championship"; neutral site: your order kept; three lines on My Stubs |
| 30 | 2026-04-10 | Lakers vs. Suns | Suns at Lakers |  |
| 31 | 2026-04-15 | Dodgers (Sho) vs. Mets | Mets at Dodgers | starter Ohtani stays on the stub |
| 32 | 2026-05-13 | Sparks vs. Fever | Fever at Sparks |  |
| 33 | 2026-05-27 | Dodgers (Sho) vs. Rockies | Rockies at Dodgers | starter Ohtani stays on the stub |
| 34 | 2026-06-05 | Sparks vs. Wings | Wings at Sparks |  |
| 35 | 2026-06-07 | Dodgers (Sheehan) vs. Angels | Angels at Dodgers | starter Sheehan stays on the stub |
| 36 | 2026-07-03 | Dodgers (Sho) vs. Padres | Padres at Dodgers | starter Ohtani stays on the stub |
| 37 | 2026-07-04 | Dodgers (Yama) vs. Padres | Padres at Dodgers | starter Yamamoto stays on the stub |
| 38 | 2026-08-13 | Dodgers (Roki) vs. Brewers | Brewers at Dodgers | starter Sasaki stays on the stub |
| 39 | 2026-08-21 | Dodgers (Yama) vs. Pirates | Pirates at Dodgers | starter Yamamoto stays on the stub |
| 40 | 2026-09-17 | Mystics @ Sky | Mystics at Sky |  |
| 41 | 2026-09-21 | Rams vs. NY Giants | NY Giants at Rams |  |
| 42 | 2026-09-24 | Dodgers vs. Padres | Padres at Dodgers |  |
| 43 | 2025-01-01 | UCLA WBB vs. Michigan | Michigan at UCLA · Women's basketball |  |
| 44 | 2025-01-02 | Lakers vs. Trail Blazers | Trail Blazers at Lakers |  |
| 45 | 2025-01-17 | UCLA MBB vs. Iowa | Iowa at UCLA · Basketball |  |
| 46 | 2025-01-18 | Pomona-Pitzer WBB vs. La Verne | La Verne at Pomona-Pitzer · Women's basketball |  |
| 47 | 2025-01-21 | UCLA MBB vs. Wisconsin | Wisconsin at UCLA · Basketball |  |
| 48 | 2025-01-30 | UCLA MBB vs. Oregon | Oregon at UCLA · Basketball |  |
| 49 | 2025-02-02 | UCLA WBB vs. Minnesota | Minnesota at UCLA · Women's basketball |  |
| 50 | 2025-02-04 | UCLA MBB vs. Michigan State | Michigan State at UCLA · Basketball |  |
| 51 | 2025-02-05 | UCLA WBB vs. Ohio State | Ohio State at UCLA · Women's basketball |  |
| 52 | 2025-02-08 | UCLA MBB vs. Penn State | Penn State at UCLA · Basketball |  |
| 53 | 2025-02-15 | CMS WBB vs. Pomona-Pitzer | Pomona-Pitzer at CMS · Women's basketball |  |
| 54 | 2025-02-16 | UCLA WBB vs. Michigan State | Michigan State at UCLA · Women's basketball |  |
| 55 | 2025-02-18 | UCLA MBB vs. Minnesota | Minnesota at UCLA · Basketball |  |
| 56 | 2025-02-20 | UCLA WBB vs. Illinois | Illinois at UCLA · Women's basketball |  |
| 57 | 2025-02-23 | UCLA MBB vs. Ohio State | Ohio State at UCLA · Basketball |  |
| 58 | 2025-03-01 | UCLA WBB vs. USC | USC at UCLA · Women's basketball |  |
| 59 | 2025-03-04 | Lakers vs. Pelicans | Pelicans at Lakers |  |
| 60 | 2025-03-08 | UCLA MBB vs. USC | USC at UCLA · Basketball |  |
| 61 | 2025-03-21 | UCLA WBB vs. Southern | Southern at UCLA · Women's basketball |  |
| 62 | 2025-03-23 | UCLA WBB vs. Richmond | Richmond at UCLA · Women's basketball |  |
| 63 | 2025-04-04 | South Carolina vs. Texas (Final Four) | South Carolina vs. Texas · Women's basketball · Final Four | neutral site: your order kept; three lines on My Stubs |
| 64 | 2025-04-04 | UCLA WBB vs. UConn (Final Four) | UCLA vs. UConn · Women's basketball · Final Four | neutral site: your order kept |
| 65 | 2025-04-13 | LAFC vs. San Jose | San Jose at LAFC |  |
| 66 | 2025-05-18 | Dodgers vs. Angels | Angels at Dodgers |  |
| 67 | 2025-06-13 | Mariners vs. Guardians | Guardians at Mariners |  |
| 68 | 2025-06-29 | LAFC vs. Whitecaps | Whitecaps at LAFC |  |
| 69 | 2025-07-04 | Dodgers vs. Astros | Astros at Dodgers |  |
| 70 | 2025-08-14 | Braves @ Mets | Braves at Mets |  |
| 71 | 2025-08-23 | Dodgers @ Padres | Dodgers at Padres |  |
| 72 | 2025-08-30 | UCLA FB vs. Utah | Utah at UCLA · Football |  |
| 73 | 2025-09-07 | Sparks vs. Wings | Wings at Sparks |  |
| 74 | 2025-09-10 | Dodgers vs. Rockies | Rockies at Dodgers |  |
| 75 | 2025-09-12 | UCLA FB vs. New Mexico | New Mexico at UCLA · Football |  |
| 76 | 2025-09-19 | Dodgers vs. Giants | Giants at Dodgers |  |
| 77 | 2025-09-21 | Dodgers vs. Giants | Giants at Dodgers |  |
| 78 | 2025-09-30 | NLWC Game 1: Dodgers vs. Reds | Reds at Dodgers · NLWC, Game 1 |  |
| 79 | 2025-10-04 | UCLA FB vs. Penn State | Penn State at UCLA · Football |  |
| 80 | 2025-10-08 | NLDS Game 3: Dodgers vs. Phillies | Phillies at Dodgers · NLDS G3 |  |
| 81 | 2025-10-10 | UCLA WVB vs. USC | USC at UCLA · Women's volleyball |  |
| 82 | 2025-10-18 | UCLA FB vs. Maryland | Maryland at UCLA · Football |  |
| 83 | 2025-10-28 | UCLA MBB vs. Irvine | Irvine at UCLA · Basketball |  |
| 84 | 2025-11-03 | UCLA MBB vs. Eastern Washington | Eastern Washington at UCLA · Basketball |  |
| 85 | 2025-11-10 | UCLA MBB vs. West Georgia | West Georgia at UCLA · Basketball |  |
| 86 | 2025-11-21 | UCLA MBB vs. Presbyterian | Presbyterian at UCLA · Basketball |  |
| 87 | 2025-11-15 | UCLA FB @ Ohio State | UCLA at Ohio State · Football |  |
| 88 | 2025-11-22 | UCLA FB vs. Washington | Washington at UCLA · Football |  |
| 89 | 2025-11-23 | UCLA WBB vs. Southern | Southern at UCLA · Women's basketball |  |
| 90 | 2025-11-28 | Pomona-Pitzer WBB vs. Babson | Babson at Pomona-Pitzer · Women's basketball |  |
| 91 | 2025-11-29 | Ohio State @ Michigan, at Cosm | Ohio State at Michigan · Watch party | Cosm: "Watch party" until the Cosm research is back |
| 92 | 2025-11-30 | UCLA WBB vs. Tennessee | Tennessee at UCLA · Women's basketball |  |
| 93 | 2025-12-03 | Pomona-Pitzer WBB @ Caltech | Pomona-Pitzer at Caltech · Women's basketball |  |
| 94 | 2025-12-04 | Princeton WVB @ USC | Princeton at USC · Women's volleyball |  |
| 95 | 2025-12-06 | UCLA MBB vs. Oregon | Oregon at UCLA · Basketball |  |
| 96 | 2025-12-13 | UConn WBB @ USC | UConn at USC · Women's basketball |  |
| 97 | 2025-12-16 | UCLA WBB vs. Cal Poly Pomona | Cal Poly Pomona at UCLA · Women's basketball |  |
| 98 | 2025-12-17 | UCLA MBB vs. Arizona State | Arizona State at UCLA · Basketball |  |
