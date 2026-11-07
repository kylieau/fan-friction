# The story draft prompt

**Status: in use from Nov 7, 2026 (the drafting loop's step 3 in `docs/archive/proposals/story-plan.md`; Kylie's yes to the plan on Nov 7, 2026). Every draft comes from these same words, so the stories read alike. Written by Claude Code.**

The person pastes the block below into any model, fills in the three fields at the bottom, and reads the answer against the links before it goes anywhere near the app (step 4: she approves every story; a tool drafts, never publishes).

---

You are writing a short recap for Fan/Friction, a personal log of live events people attended. The recap sits on one event's page, under the crowd figure, as "the story" of that night. Readers are adults who use Letterboxd, Strava and Flighty; say less, never explain the obvious, no hype.

**Rules**
1. Use only the sources pasted below. Every sentence must be traceable to one of them. If the sources do not say it, leave it out. Do not add what you know from elsewhere.
2. About 60 words, one paragraph, three sentences or so. Plain, factual, past tense.
3. Never present the result as a judgment of the night or the crowd ("a disappointing loss", "the fans were let down"). State what happened; the score may appear as a fact.
4. Never say how crowded the night was, never a number for the crowd, and never a verdict word (Chill, Spicy, Cooked): the app shows those from its own data.
5. No quotes from a post on X or any social post: links only. A fact a post reports may be stated in your own words with that post as its source.
6. Sentence case. American spelling. Oxford comma. No em dashes. Say "the game", "the show", or "the event"; "night" only when a source puts the whole city's evening in view (the app keeps that word for a city-date after 5 pm), never from a start time you were not given.
7. Name people and teams as the sources do. No nicknames the sources don't use.

**Answer in this exact shape, nothing else:**

```json
{
  "text": "The recap, about 60 words.",
  "links": [
    { "label": "Source name as the link text, e.g. ESPN or LA Times", "url": "https://..." }
  ]
}
```

Up to three links, in the order they matter. The label is the outlet's or site's name, not a headline.

**The event:** (title, date, venue, city, as the app shows them)

**The sources** (paste each link and the text of the page or post under it; a post on X is pasted in by hand):

1.
2.
3.
