# Second-opinion prompt: how should a personal event log classify a game?

Copy everything below the line into another model. Paste the answer back to Claude to fold in. Drafted Oct 6, 2026. Research and design opinion only; nothing here is a decision.

---

I'm building Fan/Friction, a phone app that is a personal diary of the live events someone attended: pro and college sports, concerts, festivals, in one log. Think Letterboxd for nights out. It launches in Los Angeles but must work in any US city and eventually worldwide, so the way it classifies things has to hold up beyond one market.

When someone adds a game the catalog doesn't already list (an away game, a minor-league night, a high-school rivalry game), the form asks what kind of game it was. The same labels drive the log's filters and stats ("12 nights of women's basketball this year", "most-seen team"), and the labels the catalog already uses for listed games (an NBA game is "Basketball", a UCLA women's game is "Women's basketball").

**Users are not dumb.** They use Letterboxd, Strava and Flighty. The form should not spend space explaining itself, and it should take as few taps as possible.

## The question
What should the form ask, and what words should the log then show, so that it is quick for the person, works for any city or country, and gives stats that make sense?

## The options I'm weighing
1. **One flat list.** Baseball, Basketball, Football, Hockey, Soccer, Women's basketball, Other. Quick, but "Women's basketball" as a sport beside "Basketball" is lopsided, and it says nothing about pro vs. college vs. high school.
2. **Two questions: Sport, then Level.** Sport (Baseball, Basketball, Football, Hockey, Soccer, Volleyball, Tennis, Golf, Motorsport, Combat sports, Other), then Level (Pro, College, High school, Other). For Pro, a league list that depends on the sport (MLB, NBA, WNBA, NFL, NHL, MLS, NWSL, Liga MX, …). For College, Men's or Women's. The log row then reads "Hockey · NHL" or "Basketball · College women's".
3. **League first.** Pick the league or competition (NBA, WNBA, Big Ten, Premier League, …) and derive the sport and level from it. Precise, but the list is long and worldwide it is enormous.
4. **Free text with suggestions.** Type anything; the app suggests known leagues and sports as you type and normalizes behind the scenes.

## Constraints
- The data model already stores, for every listed game, a **sport** (lowercase word) and a **level** (pro, lower, college, school). Whatever the form asks should map onto those two, or make a case for changing them.
- Gender matters to users (the WNBA and women's college basketball are their own fan cultures), but "women's" is not a sport. Where should it live: on the level, on the league, or as its own field?
- Non-US sports and competitions must fit without a redesign: a Premier League match, a cricket Test, an NRL game, a Liga MX match in LA.
- Concerts and festivals are separate kinds and are not part of this question.
- Stats should let someone filter by sport, by league, and by team without the labels fighting each other.

## What I want back
1. Your recommendation among the four, or a better fifth, with the reasoning in a few sentences.
2. The exact fields and the option lists for the first version (US-centric is fine for the list, but the structure must be worldwide).
3. How the log row and the stats should read for five examples: a Dodgers game, a WNBA game, a UCLA women's basketball game, a high-school football rivalry game in an NFL stadium, a Premier League match attended abroad.
4. How Letterboxd, Strava, Setlist.fm or any comparable log handles a similar "what kind of thing was this" question, if you know of one that does it well.
5. Anything in my options that you think is wrong.

Keep it concrete. Tables beat prose.
