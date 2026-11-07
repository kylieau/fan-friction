# The story section: how a story gets written, checked, and kept honest

**Status: closed, Kylie's yes on Nov 7, 2026 ("good with leans for all", deferring). The four questions below carried no lean, so the picks under them are the builder's, recorded Nov 7, and any of them is hers to overturn. The candidates script and the draft prompt the loop names are written the same day.**

**Earlier status: a plan for Kylie's yes (Nov 6, 2026). Nothing here is built except the weekly link check (D4g) and the block the app already shows. Written by Claude Code from the Section D locks in `docs/build-7-2/build-notes-7-2.md` (Kylie, Oct 30, 2026).**

## What is locked (Section D)
- A short recap, about three sentences, one paragraph, about 60 words, up to 3 source rows (D1, D4d).
- Under Up Against and above This Day, and under Getting There where it shows (D3). Checked Nov 6: the built block sits there.
- A tool drafts each story from its sources; a person edits and approves every one before it goes live (D4a).
- The first stories go to the biggest verdicts and sold-out events (D4b); recaps only, after the event (D4c).
- No story, no block (D4e): built that way since build 4.
- Live after approval, spot-checked afterwards, ideally by several models, automated (D4f).
- Source links open in the phone's browser; a weekly check finds broken links and hides the broken row, the story stays (D4g).
- The built single 14pt line of source links stays (D5); the section's title is still open (D2).

## Where stories live
Today the app reads `src/data/seed/stories.ts`, an event id to a text and its links, empty since build 4. The plan keeps stories in the repo, one file, reviewed in a commit like any other change, so nothing new is stored in Supabase (D4g: the check "never runs against Supabase without Kylie's OK") and no account or key is needed.

## The drafting loop (D4a)
1. **Pick the events.** After each nightly run, a script lists the past week's events with the biggest verdicts and the sold-out ones (D4b) that have no story yet: `node scripts/story-candidates.mjs [metro ...] [--days=7] [--json]` (written Nov 7, 2026; it reads the day files and the results on disk, calls nothing, writes nothing: the week's top three verdict dates' biggest draws and every sold-out event, with the final score, the attendance and whether a story exists).
2. **Gather the sources.** For each candidate, a person collects up to three public links: the box score or league recap, a local outlet's report, and a post on X when one is the best account of the night (her note on D1). Only links, never screenshots or embedded posts (the Oct 4 lock); post text is not shown in the app unless she says so.
3. **Draft.** A model writes the recap from those sources alone, in the app's voice (plain, factual, no hype, no score as a verdict), about 60 words, every claim traceable to one of the links. The prompt is saved beside the stories so every draft comes from the same words: `docs/research/topics/story-draft-prompt.md` (written Nov 7, 2026: the rules, the JSON shape `stories.ts` takes, the fields to fill).
4. **Approve.** The person reads the draft against the sources, edits, and commits it to `stories.ts`. The commit message names the event. Nothing goes live before this step.
5. **Spot-check (D4f).** After the deploy, two other models read each new story against its links and answer one question: does any sentence say something the links do not? A disagreement goes back to the person. This can run as a script on the repo (one API call per model per story) once Kylie approves the models and their cost; until then the person does it by hand.

## X as a source: what is possible and what it costs
- **Links only, no API (free, possible now):** a person pastes the post's address as a source row. The app shows the row's label and opens the post in the phone's browser. The drafting model reads the post as the person pastes it in (its text goes into the prompt by hand). This is the Oct 4 lock's shape and costs nothing.
- **Reading posts by program (a 🚩 cost):** the X API's free tier allows no reading of posts; the lowest paid tier with reads was a monthly plan at about $100 a month when last published, with a cap on posts read, and X has changed its plans more than once. Searching for the night's posts would also need a search query per event and a rule for which accounts count (the team, the venue, local reporters). Nothing is built from X until Kylie approves a plan and its cost, and no key is requested before that.
- **Showing a post's text in the app:** not without her word (the notes' D1 conflict line). A quoted sentence in the recap, with the link as its source, is the nearest the lock allows.

## The weekly link check (D4g), built Nov 6, 2026
- `scripts/story-links-check.mjs` reads every story's links, asks each address for its page (a HEAD request, then a GET when HEAD is refused), with a 15-second limit, and writes the addresses that fail with a 404 or 410, or no answer twice, to `src/data/seed/storyLinksBroken.ts`. The app leaves those rows out of the source line; the story stays. A link that fails for any other reason (a 403 from a site that blocks robots, a 5xx) is listed in the run's log and kept on screen, since a robot's refusal says nothing about a phone's browser.
- `.github/workflows/story-links.yml` runs it every Monday at 08:31 UTC and commits the file when it changed. Free on the public repo, no key. With zero stories it writes nothing and stays green.
- A broken link comes back on its own once the address answers again (the file is rewritten each week).

## Open for Kylie (answered Nov 7, 2026: she deferred; no lean had been offered, so these are the builder's picks)
1. The section's title (D2): the built block says "The Evening" or "The Day". **Pick: keep it as built** (the block's own words already follow the "night" rule); D2 stays open only if she wants another title.
2. Which models spot-check, and whether that runs by script (a per-story API cost) or by hand. **Pick: by hand until there are stories to check; a script is a 🚩 per-story API cost and waits for her OK and a named model pair.**
3. Whether a post on X may be quoted in a recap, with the link as its source. **Pick: no quoting; links only, the Oct 4 lock's shape.** A recap may say what happened in its own words with the post as a source row.
4. Who the person in step 4 is while it is only her: the same loop works with one approver. **Pick: Kylie approves every story; a tool drafts, never publishes.**
