# Artists and genres: a proposal from the Oct 19 research

Claude Code (Fable 5.1), Oct 19, 2026 (evening). For Kylie to decide; nothing here is built except the one bug fix in section 3. The research it answers is `docs/research/topics/artist-genres-answer.md` (its prompt is beside it). Mocks are DOM-injected on the real screens, not code: `artist-genres-mock-*.png` in this folder.

The research was written without the feed, so it did not know what the app already receives. This proposal runs today's rules over the seller listings on file (the latest nightly capture for Los Angeles, New York, Chicago, Miami and Dallas–Fort Worth: 326 shows) and over one live Ticketmaster pull for Los Angeles (1,000 music listings), and shows what they produce, so each call is about real rows.

## 1. What already exists (nothing to decide)

- **A genre on every show.** The nightly job keeps the seller's first classification as the show's genre (`audience.genre`): 17 labels across the 326 shows. The sheet and picker do not show it yet; the formula's overlap rule already uses it.
- **The tour line on a Faves row.** The row's title is the part of the seller's title after the artist's name ("beabadoobee: The Powerlines Tour" shows "The Powerlines Tour"; "Weezer · The Gathering" shows "The Gathering"), the whole title when what follows is a support act. Built Oct 18 and 19.
- **The artist's homepage** comes from Ticketmaster's attraction links through `api/artist-site.ts` (K7, Oct 12).
- **A Ticketmaster key is already in the nightly job** (`TICKETMASTER_API_KEY`), so the research's 🚩 on needing one does not apply. Its terms (storage for service-related periods, removals within 24 hours, no revenue from the API) are the same ones the stored venue ids already live under.
- **SeatGeek** is built and off until the client id lands (Kylie, Oct 17). Its logo attribution rule applies the day it turns on, wherever its data shows.

## 2. What today's data produces

### The seller's genre, mapped to the research's 18 top levels

The 326 shows in five cities, by the genre the feed gave them, and where each lands in the research's taxonomy:

| Feed genre | Shows | Research top level |
|---|---|---|
| Rock | 103 | Rock |
| Pop | 33 | Pop |
| Hip-Hop/Rap | 32 | Hip-hop |
| Dance/Electronic | 30 | Electronic |
| **Other** | 25 | missing |
| Country | 19 | Country |
| Latin | 16 | Latin |
| Alternative | 11 | Rock |
| R&B | 11 | R&B |
| World | 9 | Global |
| Classical | 8 | Classical |
| **Undefined** | 8 | missing |
| Metal | 7 | Metal |
| Reggae | 6 | Reggae |
| Jazz | 6 | Jazz |
| Folk | 1 | Folk |
| Religious | 1 | Faith |

So the first level is already in hand for 293 of 326 shows (90%), with a 15-word mapping table; 33 shows (10%) carry no usable genre. Comedy, Theater and Family are not in this count because the feed files them under other segments, where the app already types them (the event-type work, Oct 14).

### The seller's second level is not usable

The research's phone label ("Indie rock", "Regional Mexican", "K-pop") is its second level. A live pull of 1,000 Los Angeles music listings shows what Ticketmaster's `subGenre` holds:

| Genre › sub-genre | Listings |
|---|---|
| Rock › **Pop** | 167 |
| Rock › Alternative Rock | 116 |
| Other › Other | 115 |
| Pop › Electro Pop | 76 |
| Hip-Hop/Rap › Trap | 74 |
| Dance/Electronic › **Amapiano** | 63 |
| Latin › Latin | 50 |
| Metal › Nu-Metal | 37 |
| Undefined › Undefined | 28 |
| Pop › K-Pop | 5 |
| Alternative › Indie Rock | 2 |

"Rock › Pop" on 167 listings and "Amapiano" on 63 Los Angeles dance listings are seller defaults, not descriptions. The second level cannot come from the feed. It would have to come from Wikidata (free, keyless, CC0) or hand review, which is the research's own path, and that is a later step.

### The title split, run over the 240 seller titles that say more than the name

| Outcome | Titles | Example |
|---|---|---|
| Tour or show name split off | 171 | "The Powerlines Tour", "The Black Parade 2026", "Tour Ma Vie World Tour" |
| Whole title kept (a support line) | 29 | "Kacey Musgraves w/ Estevie", "Protomartyr with Special Guest: Accessory" |
| Artist is not first in the title | 40 | "2026 MONSTA X WORLD TOUR [THE X : NEXUS] IN LOS ANGELES", "Logic & G-Eazy: The Endless Summer Tour Part II", "JAY-Z30" |
| Seller wrote the name alone | 86 | the row repeats the artist (judgment call 7 in the Oct 19 gap review) |

The split works where sellers write "Artist: Tour" or "Artist – Tour", which is most of them. "Live 2026 with Special Guest Jon Cleary" splits off as a show name; the research calls "Live" generic. The 40 "not first" titles are co-headliners, all-caps tour brands and anniversary titles, where the research also says to keep the raw title.

## 3. Found and fixed on the way

The support-act check never matched "w/ ", "& " or "+ " (its word boundary sat after the slash), so "Kacey Musgraves w/ Estevie" showed "w/ Estevie" as the show's name on the Faves row. Fixed in the same session, a city-neutral correctness bug: the whole title stays. Counted after the fix: 171 split, 29 kept whole.

## 4. A finding for the formula, not built

The overlap rule reads two shows as **Medium** when their genres match and **Low** otherwise. Two "Other" shows, or two "Undefined" ones, match, so a date with two unclassified shows scores them as sharing an audience. The research says missing is **Unknown**, not Low and not a match. The fix is a formula change (unknown genre never matches, with a provisional neutral weight), which Kylie holds. Recommend: yes, with the neutral value set to Low's weight until a fitting says otherwise. Ratings are evidence, never a target.

## 5. The smallest next step (the research's own, checked against the code)

1. **An app-owned artist id behind each artist favorite.** Today an artist favorite is its label, matched to listings by exact name. The id lets aliases ("The Weeknd" / "Weeknd") and a seller's attraction id attach to it later without renaming the favorite.
2. **The display genre from the feed's first level,** through the 15-word mapping in section 2, shown on the sheet's sub-line and in the picker where "Artist" is today; "Music" when the feed says Other or Undefined; nothing invented.
3. **The tour split stays as built,** with the fix above. Where the seller wrote the name alone, the title line shows the genre, muted, instead of repeating the artist (the mock below).
4. **Log the attraction id** in the nightly run for the shows at 5,000+ rooms, so the match-by-id step has material when it is built. Nothing stored on a favorite yet.

Not in this step, each a 🚩 or a later call: Wikidata for the second level and aliases (free and keyless, but a new source to read and a review queue to run); MusicBrainz genre tags (🚩 CC BY-NC-SA, not free for commercial use); Spotify (🚩 a registered app and a Premium subscription; excluded); SeatGeek's logo attribution (when the client id lands); the research's full field model (entity type, origin, active periods, evidence per field), which mirrors the team-field model Kylie set aside on Oct 19 "for now".

### Mocks

- [Sheet, today](artist-genres-mock-sheet-now.png): "Artist" under every name. [Sheet, proposed](artist-genres-mock-sheet-genre.png): "Rock", "Country" from the feed's genre.
- [Faves rows, today](artist-genres-mock-rows-now.png): a bare-name listing repeats the artist ("beabadoobee / beabadoobee"); the first row shows the bug from section 3 before its fix. [Faves rows, proposed](artist-genres-mock-rows-genre-fallback.png): the genre as the muted fallback where no tour was written; tour lines unchanged.

## 6. The research's ten questions, one recommendation each

1. **Tour or genre on the Faves row?** Tour when the seller wrote one, genre as the fallback. As built, plus the fallback in the mock. Recommend yes.
2. **Eighteen categories?** Start with the feed's first level mapped to them (15 words in use today). Promote Regional Mexican or Afrobeats to a top level only when a second-level source exists; the feed cannot tell them apart. Recommend yes to the 18, nothing promoted yet.
3. **Favorite scope.** Productions, festivals, orchestras and comedians can already be favorites (artist, festival, venue kinds). A Hamilton favorite means every production until a production record exists. Recommend leave as is.
4. **Commercial intent and retention.** Working assumption: a personal tool, as direction.md says; the stored seller ids follow the terms the venue ids already follow. MusicBrainz genre tags stay out under that assumption too. Recommend confirm the assumption.
5. **Seller access.** A Ticketmaster key exists; SeatGeek is pending the client id; its visible attribution comes with it. Recommend no change.
6. **Uncertain sizes.** Already handled by the two thresholds (Kylie, Oct 6): listed from about 1,000, counted at 5,000+; the expected-crowd estimate carries its kind. Recommend no change.
7. **What "overlap" means.** Today it is one tier per pair from genre or sport. The research's three inputs (same fans, similar crowds, shared roads) are already split across Crowd fight and Gridlock. Recommend keep, with the Unknown fix in section 4.
8. **Era and crossover.** Not in the formula today and no public source carries it. Recommend leave it out.
9. **Home city for artists.** Nullable and off the phone row in the research; the app has no field. Recommend skip.
10. **First coverage audit.** From covered metros: Los Angeles, New York and Mexico City (for the Latin detail), 100 listings each over one four-week window, measured against each city's venue table. Recommend yes, when the next research slot comes.

## 7. What this would touch

`src/data/favorites.ts` (the id and the genre word), `src/components/FollowingSheet.tsx` and `FavoritesScreen.tsx` (the sub-line), `src/components/useFavoriteRows.ts` (the fallback), `src/data/sources/ticketmasterSource.ts` and `scripts/catalog-write.mjs` (the attraction-id log), `src/data/formula/overlap.ts` (section 4, held). No Map change. No new cost.
