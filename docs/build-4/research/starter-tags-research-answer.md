# Starter Tags for an Event Log App (Sports & Concerts)

Research summary and recommended starter tag set for new users who haven't created tags yet.

---

## 1. What fans actually note and remember

Fan memories mix event facts, rare moments, and personal context. A 2025 study of concertgoers found lasting memories centered on the overall evaluation of the night, the venue, the performers' energy, the specific pieces played, and the social side of the event [1]. For games, the clearest signal is what teams use to drive attendance: bobblehead giveaways have the largest effect of any promotion type [2], fireworks nights rank near the top [3], and home openers and fan appreciation days still draw crowds even during losing seasons [4].

### Sports (~25)

- **Promos:** bobblehead / giveaway, fireworks, theme or heritage night, fan appreciation day, food or drink deal, postgame concert, kids run the bases
- **Occasion:** home opener, rivalry game, playoffs, season finale, last game at a venue, new stadium, away / road game
- **On the field:** player debut, retirement or jersey ceremony, milestone or record, comeback / walk-off, overtime / extra innings, no-hitter, shutout / hat trick, blowout
- **Fan moments:** caught a ball or puck, on the jumbotron, got an autograph, tailgate, rain delay or extreme weather, first game ever

### Concerts (~25)

- **Setlist moments:** surprise guest, cover, live debut, deep cut / rarity, acoustic set, extended encore. setlist.fm's notation system has dedicated markers for covers, guests joining the stage, tape intros, and free-text notes such as acoustic versions [5], and its setlists routinely flag live debuts and fans brought on stage [6].
- **The show:** great opener, tour opener or finale, hometown show, farewell tour, festival set, sound quality, venue
- **Personal:** first time seeing the artist, first concert ever, front row / barricade, crowd singalong, merch, meet and greet, birthday, rain, delayed or shortened show
- **Who you went with:** in one fan survey, most respondents named seeing music with friends and the crowd's energy as their favorite part, and many said their strongest first-concert memory was simply being in the same room as the artist [7].

---

## 2. How comparable apps handle tags

| App | Approach | Lesson |
|---|---|---|
| **Letterboxd** | Fully freeform tags on diary entries. Its FAQ explicitly suggests tags can describe the film or record how and with whom you watched it [8]. | Closest analog to your use case; tags as personal memory aids. |
| **Untappd** | Check-ins carry photo, notes, rating, serving style, friends, location, and flavor profiles [9]. Facts are structured; only flavor is a pick-list. | Split structured facts from expressive tags. |
| **Strava** | Small fixed set (~9): Race, Long Run, Commute, Workout, Competition, Recovery, With Pet, With Kid, For a Cause [10]. Some tags change app behavior (Race switches to race analysis; Commute tracks carbon saved). | Keep the curated set small; let tags drive features. |
| **Goodreads** | Read / Currently Reading / Want to Read are mutually exclusive default shelves; custom shelves act as free tags [11]. | Attended / going / watching should be an exclusive status, not tags. |
| **setlist.fm** | Song-level annotations (cover, guest, tape, info) live on the setlist itself [5]. | Song detail belongs in the setlist; event-level tags can summarize ("surprise guest"). |
| **Concert diaries** (Afterlight, Gigvault) | Log fast, add rating, photos, friends, setlist later and only if wanted [12]; Gigvault surfaces which friends shared shows across your history [13]. | Progressive disclosure; companions as structured data unlock stats. |

**Research note:** The MovieLens tagging studies compared algorithms for choosing which community tags to display and measured their effects on vocabulary evolution, tag adoption, and satisfaction [14]. Takeaway: the tags you show become the vocabulary users adopt. Your starter set will shape tagging behavior long-term, so choose carefully.

### Recommended practice

*(Judgment drawn from the patterns above, not a published standard.)*

- **How many:** Show 6–8 chips at once (one or two rows on mobile), with 10–12 total available on horizontal scroll.
- **Generic vs context-aware:** Context-aware. Filter by event type (sports vs concert) and status (upcoming events shouldn't offer "walk-off"). Use event data where available: if the team's promo schedule lists a giveaway, surface "giveaway" first.
- **When to stop:** Blend rather than cut over. Rank the user's own tags first by frequency and recency, and fill remaining slots with starters. Retire a starter after it's been shown ~10 times without a tap. Always autocomplete against existing tags, case-insensitively, to avoid near-duplicate sprawl [15].

---

## 3. Recommended starter set

All lowercase, short, no emoji.

### Cross-domain (10)

`first time` · `milestone` · `farewell` · `road trip` · `birthday` · `date night` · `free tickets` · `autograph` · `merch` · `rain`

### Sports only

`giveaway` · `fireworks` · `theme night` · `rivalry` · `comeback` · `overtime` · `debut` · `tailgate`

Sport-specific tags (`walk-off`, `no-hitter`, `hat trick`, `foul ball`) appear only when the sport is known.

### Concerts only

`surprise guest` · `live debut` · `deep cut` · `cover` · `great opener` · `acoustic` · `hometown show` · `barricade`

### Better as structured fields

| Field | Why |
|---|---|
| Seats (section / row / seat) | Factual, sortable, enables venue seat history |
| Companions (people picker) | Enables "shows with X" stats; covers "family", "friends", "solo" |
| Status: attended / going / watching | Mutually exclusive, like Goodreads shelves |
| Mode: in person / TV / stream | Drives stats; shouldn't be a tag |
| Score, result, game type (regular / playoffs) | Import from league data |
| Setlist, openers / lineup | Import from setlist sources rather than typing |
| Venue, festival | Entity links, not tags |
| Price paid, ticket source | Numeric / categorical |
| Weather | Auto-fill from date + venue; keep `rain` as a tag only for memorability |

**Auto-detectable:** `first time` (first visit to venue, first time seeing artist) and solo attendance can be derived from history and companions. Keep `first time` as a manual tag anyway, since new users' histories are incomplete.

### Avoid

Corny or redundant: `vibes`, `core memory`, `epic`, `unforgettable`, `bucket list`, `goosebumps`, `best night ever`, and quality words like `amazing` (the rating already covers sentiment).

---

## Sources

1. Böndel, Weining & Tröndle (2025), *Memories of the Concert Experience – What Remains?* — https://www.ssoar.info/ssoar/handle/document/102244
2. Barilla, Gruben & Levernier (2008), *The Effect of Promotions on Attendance at MLB Games*, Journal of Applied Business Research — https://clutejournals.com/index.php/JABR/article/view/1337
3. Stuursma (2019), *The Effect of Promotional Events on Gameday Attendance for MLB*, College of Wooster — https://openworks.wooster.edu/independentstudy/8426
4. Mount (2007), *Gender differences & the effect of promotional techniques on fan attendance at MLB games during a losing season*, Rowan University — https://rdw.rowan.edu/etd/824
5. setlist.fm, *Tutorial: How to Add or Edit a Setlist* — https://www.setlist.fm/tutorial
6. setlist.fm example setlist (Limp Bizkit, Tampa 2022) — https://www.setlist.fm/setlist/limp-bizkit/2022/hard-rock-event-center-tampa-fl-1bb655e8.html
7. The Capitol Theatre, *Calling All Live Music Lovers* fan survey — https://www.thecapitoltheatre.com/blog/detail/calling-all-live-music-lovers-a-youngster-perspective-on-live-music
8. Letterboxd FAQ — https://letterboxd.com/about/faq/
9. Untappd Help Center, check-ins — https://help.untappd.com/hc/en-us/articles/360034404451
10. Strava Support, *Strava Activity Tags* — https://support.strava.com/hc/en-us/articles/216919557
11. Book Riot, *Goodreads Hacks* — https://bookriot.com/goodreads-hacks/
12. Afterlight: Concert Diary, App Store — https://apps.apple.com/app/id6755545440
13. Gigvault on Product Hunt — https://www.producthunt.com/p/gigvault/three-months-in-everything-gigvault-does-today-and-it-is-still-free
14. Sen et al. (2006), *tagging, communities, vocabulary, evolution*, CSCW '06 — https://experts.umn.edu/en/publications/tagging-communities-vocabulary-evolution/
15. SaaS UI, *Tags, Labels & Chips UX Patterns* — https://www.saasui.design/blog/saas-tags-labels-chips-ux-patterns
