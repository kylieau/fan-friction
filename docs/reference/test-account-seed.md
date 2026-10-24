# The test-account seed (build 7.1, M15)

Locked by Kylie on Oct 23, 2026. A way to give test account A a believable log, so agents can check every view (Your Stubs, Your Year, Spend, tags, Upcoming, the event page) against real catalog events without ever touching her own account.

**Kylie runs it. Agents never run its write path, never open her export, and never commit any of it.**

## What it writes, and only to test account A
- **A sample of her events, as events and dates only.** From her "Export my events" file it keeps, for each sampled stub, the catalog event and its date plus the event's public facts (title, venue, city, kind, sport, the sides). Nothing of hers travels: no review, who-with, seats, cost, tags, sale amounts, stub level or plans. Hand-typed stubs and stubs without an exact day are left out.
- **EXAMPLE data around them**, marked "EXAMPLE" wherever it is text: seats, costs (Free on some), reviews, who-with and tags on those stubs; and plans (Attending, Watching, Interested, some with an EXAMPLE seat and cost) on real upcoming catalog events in Los Angeles, New York City, Chicago and Seattle.
- **Not written:** friends' rows and other people's Activity (they need rows on other accounts). The older `scripts/seed-test-accounts.mjs` keeps account B following A.

## How to run it
1. Export your events from Profile & Settings › Your Events › Export my events, and put the file in the git-ignored `private/` folder.
2. Dry run (prints counts, touches nothing):
   `node scripts/seed-test-account-sample.mjs --from private/<your export>.json --size 24`
3. Write (replaces only its own rows on A, ids starting `seed-sample-`; anything else on A stays):
   `node scripts/seed-test-account-sample.mjs --from private/<your export>.json --size 24 --confirm`

Options: `--size` (1–200, default 24) sets how many of your events are sampled; `--seed <number>` repeats the same random choices; `--show` (dry run only) prints the rows it would write.

## Safety
- A dry run unless `--confirm` is given.
- Idempotent: a second run replaces the first run's rows and nothing else.
- Credentials only from the git-ignored `private/test-accounts.json`, read in the write path only; nothing is printed.
- No database changes. Tested by the builder with a made-up EXAMPLE export and the dry run only (`--show` proved the export's private review, who-with, seat, cost and tags never reach a written row).
