# Tester interview guide (Kylie interviews a friend)

For Kylie, in person or on a call, about 20–30 minutes, with the tester's phone and the app open. The paste-into-Claude version is `tester-brief.md`; this is the same interview for when a tester would rather just talk. A tester's own setup (their nights, what's left out, any open items) lives in `private/testers/<name>/` and never in the repo.

## Before the interview
- [ ] The tester's nights are in their account (You tab shows them).
- [ ] The reads show on their nights in covered cities. Open one yourself first.
- [ ] Any games you left out on purpose: they've added them with **Add a night**, or plan to during the interview.
- [ ] You've picked 2–3 of their nights to compare (one busy, one quiet, if the log has both). **Don't look up the app's read for them in front of the tester.**
- [ ] Something to take notes on. Write their words, not your summary.

## Ground rules (you know the formula; they don't)
- **Ask, then wait.** Don't fill silences.
- **Don't explain or defend** the app, and don't say how friction works. If they ask "what does this mean?", answer "what do you think it means?" and write that down. Their guess is the finding.
- **Don't use the app's words first.** Let them name things: "crowded," "a nightmare to park." Avoid saying friction, Crowd fight, Gridlock or Spicy before they do.
- **Their rating comes first.** For the comparison nights, they rate from memory *before* opening the read.
- **Neither number is the "right" one** (`docs/formula-v4.md`, Oct 6 rule). When they differ, ask what they were counting. A tester's ratings are evidence beside the read, never a target.
- Let criticism stand. Don't say "that's coming."

## The interview

**1. Their nights (5 min)**
- "Open the You tab. Do these look like your nights?"
- "Anything missing, wrong, or named the way you wouldn't say it?" (titles, venues, dates, who they were rooting for)
- "Anything you'd want to see on a night that isn't there?"

**2. Logging (5 min)**
- "Add a night you went to that isn't here." Watch; don't help unless they're stuck for more than a minute. Note where they hesitate.
- "Would you bother doing that after a game? What would make you, or stop you?"

**3. Their read vs. the app's (10 min).** For each of the 2–3 nights you picked:
1. Before they open it: "Thinking back, how hard was that night? Getting there, the crowds, other stuff going on, the heat. Anything." Write their words.
2. "If you had to put it on a scale: Chill, Mild, Spicy, Brutal, Cooked, and 1 to 10?" (Show the five words on paper if it helps; don't explain them.)
3. Now: "Open that night." Let them read it.
4. "Does that match? What's it counting that you weren't, or the other way round?" Write down both what they were counting (the game, the drive, parking, crowds, weather, mood) and what the app's reason says.

**4. Looking ahead (3 min)**
- "Open Explore and pick a date coming up. Would anything here change whether you'd go to something?"

**5. Confusing or missing (3 min)**
- "Anything you didn't get without me here?"
- "Anything you looked for and couldn't find?"

**6. Overall (2 min)**
- "Would you keep using this?"
- "What one thing would change your answer?"

## Notes sheet
| Night | Their words | Their word + number | App's word + number | What they counted | What the app's reason said |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Also capture: wrong or missing data; confusing; wanted; would they keep using it and why; best quotes (verbatim).

## Afterwards
Paste the notes into a Claude session in this repo. Claude sorts them the way Kylie's own notes are sorted (data fixes; structural, raised before building; polish, batched), keeps the ratings table beside the reads as evidence, and saves the notes in the tester's `private/` folder.
