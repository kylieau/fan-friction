# Research prompt: genres for artists, the way sports have leagues

Written Oct 19, 2026 for a research model; a first draft, Kylie may rewrite it. Save the answer beside this file as `artist-genres-answer.md`. Nothing here is a decision.

## What Fan/Friction is
A personal log of live events with a friction read on each night. Sports teams are well structured on file: a sport, a league, a city, codes. Artists are not: a favorite artist is a name, and the app's lists call it "Artist" where a team's row says "Basketball · NBA". Kylie wants the same depth of information work for concerts that was done for sports.

## What to work out
1. **A genre taxonomy that fits a phone row**: one or two words under an artist's name ("Indie rock", "Country", "Hip-hop", "Latin", "EDM", "Classical", "Comedy" for touring comedians, "Theater" for touring shows). How many top-level genres, what the second level is, and which public sources assign them (Ticketmaster's segment / genre / subGenre, SeatGeek's taxonomy, MusicBrainz tags, Wikipedia infoboxes, Spotify's genres if public without a key). Say what each source covers and how they disagree.
2. **What an artist record should hold**: a canonical name, aliases ("The Weeknd" / "Weeknd"), a genre and subgenre, a home city if any, a type (band, solo, DJ, orchestra, comedian, touring production), and ids on the sellers' feeds (Ticketmaster attraction id, SeatGeek performer id) so a listing matches the favorite by id rather than by name.
3. **How a show's name is split**: the headliner, the tour name ("The Lost Tour"), the support ("w/ Alex G"), a festival or residency. The app shows the tour name under the artist's name on a Faves row when the seller wrote one; say how reliably sellers write it and what the fallback should be.
4. **Who is "big enough" to list**: the app lists events of about 1,000 and up and the friction read counts 5,000 and up. Say whether genre helps estimate a draw when no count exists, and what the overlap rule between two concerts the same night should use (the app's formula rates "audience overlap" between events; concerts of the same genre or era are Medium, different genres Low).
5. **Coverage**: pop, rock, hip-hop, Latin (regional Mexican is large in Los Angeles), country, K-pop, electronic, jazz, classical, comedy, touring theater, family shows. Say which the public sources cover thinly.

## House rules
- Public data only; name every source and its terms. 🚩 Flag anything that would cost money or need a key.
- Rules must work for every city, not only Los Angeles; give examples from at least three countries.
- Say less on screen: one or two words per artist.

## What to hand back
- The taxonomy (two levels), with the source that fills it and a coverage estimate.
- The artist record's fields, with a source per field.
- A worked example for ten artists across genres, three of them touring Los Angeles this fall, and two comedians.
- The open questions for Kylie.
