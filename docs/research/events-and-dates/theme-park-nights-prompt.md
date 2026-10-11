# Research prompt: theme-park special nights, October 2026

Copy everything below the line into a research model. Paste the answer back to Claude to check. Drafted Oct 6, 2026. Research only: Kylie decides afterwards whether these nights count.

---

# Research brief: separately ticketed theme-park nights in October 2026

## What this is for
Fan/Friction is a personal log of live events (sports, concerts, festivals) with a "friction" read on each date: how many big events compete for the same fans, roads and transit that night. I'm deciding whether **separately ticketed theme-park nights** belong in that read. I mean events like Halloween Horror Nights or Knott's Scary Farm: a special evening event with its own ticket, not a park's normal daytime operation. An ordinary day at a park is background traffic and is out of scope.

I need facts to decide, not a recommendation.

**Cities:** Los Angeles (LA County and Orange County), San Diego (San Diego County), Seattle (King County, plus Tacoma and Everett), New York (the five boroughs plus northern New Jersey and Long Island).
**Dates:** October 1–31, 2026.

## What counts
- A theme park, amusement park, zoo or aquarium event that needs its **own ticket** (or a separate upcharge ticket), runs in the **evening** and has a name of its own.
- Examples to check (confirm each yourself; don't assume they run in 2026): Universal Studios Hollywood's Halloween Horror Nights; Knott's Scary Farm; Disneyland Resort's Oogie Boogie Bash; Six Flags Magic Mountain's Fright Fest; SeaWorld San Diego's Howl-O-Scream; Legoland California's Halloween event; Six Flags Great Adventure's Fright Fest; Coney Island Halloween events; zoo or garden lantern nights. Add any others you find in these four metros.
- Skip: regular park hours with Halloween decorations, haunted houses under about 2,000 nightly, and parks outside the four metros.

## For each event, find
1. Name, park, city, and the exact October 2026 dates it runs (list every night).
2. Hours on each night, and whether the park **closes to day guests** first and reopens for the event, or the event runs alongside normal hours.
3. Ticket: separate ticket or upcharge, and whether nights sell out or are capped. Note it if the operator publishes a nightly capacity limit.
4. Crowd size: any published nightly attendance, capacity, or a credible reported figure, with what kind of number it is (announced, reported or estimated) and the source. Say so if nothing is published. Don't estimate one yourself.
5. How people arrive: car, shuttle, rail, and the parking setup.
6. Traffic evidence: any official traffic advisory, police or transit notice, or local news report of road or transit congestion tied to the event (not to the park in general). Give the date and source.
7. **Same-night overlap:** which nights in October 2026 the event shares with a big event (5,000+) within about 15 minutes' drive. For example, Knott's Scary Farm and Angel Stadium or Honda Center nights, or Universal and the Hollywood Bowl. List the overlaps; don't judge them.

## How it compares with a normal day
For each park, if public: typical daily attendance on an October weekday or weekend versus the special event's nightly crowd. The question is whether the event adds a **new crowd at a new time** (an evening arrival and a late-night exit) or mostly the same people who'd be there anyway. Report what the sources say, with links.

## How to verify
- A source URL on every row. Prefer the park's own event page, then local news.
- 2026 dates only. A pattern from past years doesn't count as a 2026 date.
- If a page won't load normally, don't work around it. List it under "Pages that wouldn't load" with the URL.

## Output
One table per city, using these columns, in CSV inside a code block:

```
city,event,park,area,dates_2026,hours,closes_to_day_guests,ticket,nightly_crowd,crowd_kind,arrival,traffic_evidence,same_night_big_events,source_url
```

Then:
- **Normal day vs. event night:** a short table per park (typical daily attendance, event nightly crowd, sources).
- **Couldn't confirm:** anything you couldn't verify, and why.
- **Pages that wouldn't load.**

Facts only: no scores, no ratings, and no advice on what the app should do.
