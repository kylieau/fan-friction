# Ticketmaster Discovery API: what the free key allows (Oct 6, 2026)

Step 7, slice (a) of `docs/big-picture-plan-oct6.md`: read the terms before anyone signs up. Read from Ticketmaster's developer portal on Oct 6, 2026 (getting-started page and terms of use). Nothing is built or connected.

## The key
- **Free.** Register on developer.ticketmaster.com; Discovery API access is granted on registration. No card.
- **Quota:** 5,000 calls a day, 5 a second. Over quota answers 429. Higher limits are granted on request to apps that follow the terms, the branding guidelines and "proper representation" of the data.
- **Our need:** one call per city per night for the next few weeks of listings (a few pages each), so tens of calls a day for Los Angeles and San Diego. The quota is not a constraint; a dozen cities would still be under 500 calls a day.

## The terms that matter for Fan/Friction
| Clause | What it means for us | How we comply |
|---|---|---|
| **Caching:** store Event Content only "for reasonable periods in order to provide the service you are providing" | Long-term storage of Ticketmaster's content (images, descriptions, prices, links) is out. The facts of a night (who played, where, when) are what the log and the stamp need. | The nightly job keeps only the facts: name, date, start time, venue, performer and the Ticketmaster event id. No images, prices, descriptions or deep links are stored. Those facts are what the schedule archive already holds for sports. |
| **Removal within 24 hours** when a content owner asks | A listing may have to go. | The catalog is one table; a removal is a row delete, and the nightly job will not re-add an id on a block list. |
| **Privacy disclosure** "through a privacy policy or otherwise displayed in the footer of each page" | We must say how visitor data is collected and used. | Settings already carries the data credits; add a short privacy line there (what the app stores: your log, in your account or on your phone; no location; no tracking). 🚩 Not a cost. Worth having anyway. |
| **No revenue** from the API | Fine today. | The app is free and non-commercial. A public launch or any revenue reopens this, as it does for MLB's feed and Open-Meteo (`docs/build-brief.md`, cost milestones). |
| **No replica** of Ticketmaster's experience | We don't sell or list tickets. | A listing shows the night and its read, never a buy button. A text link to the event page is allowed; it is optional for us. |
| **Branding guidelines** | Required only to raise the quota. | Not needed at our volume. Revisit if we ever ask for more. |

## What the feed gives (for slice b)
Events by city or by venue id, with name, date and local start, venue (name, address, coordinates, Ticketmaster venue id), classification (segment, genre, subgenre), attractions (the performers) and sale dates. Capacity is not in the feed; the venue table supplies it, which is why the table had to come first. Sports events appear too, so slice (b) must dedupe against the league feeds (match on venue and date, prefer the league's record).

## Recommendation
Sign up for the free key when slice (b) is ready to use it, and then only for upcoming listings in the covered cities. Store the facts, not the content. Add the privacy line to Settings before the first concert shows. The key lives in GitHub's secrets like the Supabase key; the nightly job uses it; the app never sees it.

## For Kylie, when the time comes
1. developer.ticketmaster.com → Get your API key → register (free). Copy the Consumer Key.
2. GitHub → Settings → Secrets and variables → Actions → Repository secrets → `TICKETMASTER_API_KEY`.
3. Say when it's in; the nightly job picks it up.
