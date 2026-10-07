# Proposal: the entry you can edit, and nights you type in yourself

Oct 6, 2026. Step 1 of `docs/big-picture-plan-oct6.md`. Round 1 was reviewed by Kylie the same day; round 2 below carries her changes. Nothing here is built yet.

## Kylie's round-1 answers (Oct 6)
1. A You row opens the entry, yes, **but** the entry should mostly be the event page's content plus your own layer, and possibly a Letterboxd-style review.
2. Add the TV station when the event was televised. The event page will need pre-event and post-event forms.
3. The "+" for adding a night is fine, **but** a big enough hand-typed event might become something other people can see and add.
4. The logging bar is locked as the review words it: anything by hand; about 1,000+ pre-listed; 5,000+ feeds friction. (`AGENTS.md`, `docs/direction.md` status note and `BACKLOG.md` updated.)

## The problem
The log is the product, but an entry today is one tap. Kylie's migrated nights carry an outcome, a starter, a promo and a note; nobody else can write any of those, and nothing can be changed or removed. And only a listed event can be logged: a club show, an away game or a festival the catalog never heard of has no way in.

## 1. One page, two tenses, your layer on top
There is no separate entry page. **The event page is the entry.** A You row opens the event page directly (today it goes to the date page first). Once you've marked Attended, the page grows your layer near the top. A hand-typed night uses the same page with whatever is known.

**Before the night (upcoming):**
- Title, stakes, venue, start. **On TV: ESPN** when a broadcaster is known.
- The read, labeled **Forecast**, with its why line, and "locks {time}".
- Gold **Attend** / Attending.
- Weather forecast (open-air), Local competition, the crowd card (seats, sold out), share card.

**After the night (past):**
- Title, stakes, venue, start. **Was on ESPN** when known.
- The read, labeled **Stamped** (or Hand-rated, Nearby read, or absent when there is none).
- **Attended** button, then **your layer** directly under it (only when Attended is on):
  - **Review**: a few lines in your words. Letterboxd-style, no stars (see Open).
  - One line per fact, the same `FactList` look: Outcome, Starter, Promo, Notable, Setlist, With, TV. Empty ones hidden. A quiet **Edit** opens the form; tapping a line does the same.
  - Your Note, marked private.
- Then the crowd card (announced count once step 2 lands), weather during, Local competition, share card.
- At the very bottom, small: **Remove from log**, one confirm. Same as un-tapping Attended.

The "Attend / Attended" split already exists in the code as one `if` on the date; this proposal gives each branch a different page order and labels. Save and Attended stay on the event page, as locked.

## 2. The fields
Per kind, so a concert isn't asked for a starting pitcher.

| Field | Game | Show, festival, broadcast, special | Who sees it |
|---|---|---|---|
| Review | yes | yes | whoever can see your log (your visibility switch; default Only me) |
| Outcome | yes; automatic once step 2 lands | no | same |
| Starter | yes | no | same |
| Promo | yes | no | same |
| Notable | yes | yes | same |
| Setlist (link) | no | yes | same, as a "Setlist" link |
| TV (station) | yes | yes | same. Pre-filled from the feed when it has one (MLB and ESPN both list broadcasters; one extra field in the fetch, no new call). You can type it when it doesn't. |
| With | yes | yes | **only you** |
| Note | yes | yes | **only you** |

New fields: Review, Setlist, TV, With. Entries are free-form records in the account, so no database change. TV also becomes an **event** fact (`broadcast`), so the pre-event page can show it for everyone; the entry's TV line is for nights the feed didn't cover. The read never looks at any of these, so the no-results rule holds. A photo waits for storage 🚩.

The form is one sheet: labels and inputs, Review as a taller box, one gold **Save**, no hint text.

## 3. Typing in a night the catalog doesn't list
A **+** in the You header, beside the gear. Search first (the same team, artist, venue search Explore has, old venue names included). A listed night is one tap: Attended, then its page. Below the results, when nothing fits: **Add it yourself**.

That form: **What** (the title as you'd say it), **Type** (Game · Show · Festival · Live broadcast · Special event), **When** (a day, or a month, or just a year; the storage already keeps rough dates), **Where** (venue, with suggestions from the venue table; anything else kept as written) and the city from the metro list or **Somewhere else**; then the per-kind fields, all optional; one gold **Save**.

What the app does with it:
- By default it is **your entry only**: not on the map, moves nobody's read, listed for nobody else. If its date and city have a read, it takes that night's nearby read and says so; otherwise it has no score.
- Away games: a Game in another city, marked Away.

### 3a. When the room was big (Kylie's "other people can see/add" question)
Recommendation: **suggest, don't publish.** If the venue you picked holds about 5,000 or more in the venue table, or you tick **Big event**, the entry is also written to a small **suggested events** list that only Kylie can read. She checks it against a public source (v1 rule: public data only) and, when it's real, it is seeded as a catalog event. From then on it is on the map, other people can log it, and it feeds friction. Until then nothing moves for anyone.

Why not let it publish straight away: a hand-typed 5,000+ event would move everyone's read on that date, which breaks "friction is computed from public schedules, never argued"; duplicates and typos would pile up; and it is open posting by another name. Why not "later": the list costs nothing (one table, one flag), and it is the cheapest way to learn which big events the feeds miss before Ticketmaster arrives at step 4. No admin screen in this step; she reads the list in the Supabase dashboard. A screen comes if the list earns one.

When a suggested night is later seeded, the person's entry links to the new catalog event (the entry keeps a `suggestionId`, so the link is one lookup). "Is this it?" for other unlinked entries stays out of this step.

## Not in this step
Photos 🚩. Automatic scores (step 2). Re-linking other hand-typed nights to catalog events. An admin screen. Editing from the map or the date page. Nothing beyond what the facts already show reaches the share card or a profile. Note and With never leave your own screen.

## Open
- **Stars.** Letterboxd pairs a review with a star rating. Recommendation: no personal star rating for now. A night would then carry two numbers (the friction read and your stars) and the read is the one that makes the app. Revisit after a season of entries.
- Whether Review replaces Note over time. Kept separate for now: Review follows your visibility switch, Note is always private.

## Questions for Kylie (round 2)
1. One page: the event page in two tenses, your layer under Attended. Yes?
2. Review follows your visibility switch (default Only me); no stars for now?
3. Big hand-typed events go to a suggestions list you check, rather than publishing directly?

## Kylie's round-3 notes (Oct 6, after seeing it on the local site)
- **Only Review, With and Note are written by the person.** Outcome, Starter, Promo (and TV, Setlist, Notable) are facts about the event and come from a source: Starter and Promo before the game, Outcome after. They left the form the same day; the header keeps showing what is known. The results fetch is step 2 (she suggested about five hours after start, or one pass for all the night's events at the end of the night).
- Review and Note may be redundant. Open: merge into one Review (recommendation below).
- Add a night: exact day only (the month-only and year-only options are gone); City first, then Where lists that city's venues (plus "Another venue"); the Sport list needs a real design (leagues and levels), to be hammered out.
- Big event tick: confirmed that 5,000+ is the bar for the map and for feeding friction; the tick only files a suggestion.
- She likes the weather and local competition cards, and the type pills.

## Locked Oct 6 (round 3)
- **One piece of prose per night: Review.** Note is folded into Review on load; nothing writes a note any more. Review follows the visibility switch (Only me by default). With stays its own private line.
- **Results come from the nightly 12:15am Pacific run**, one pass for the day's games, not a per-event timer. Starters and promos come from the same feeds before the game. This is the first piece of step 2.
- **Sport list:** out for a second opinion, `docs/archive/second-opinions/sport-list-second-opinion-prompt.md`. The form keeps its placeholder list until Kylie decides.
