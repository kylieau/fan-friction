# Gap follow-up for the past-dates research: answer and checks

Run Oct 6, 2026 on `gap-followup-prompt.md`. The model couldn't read setlist.fm correctly through its fetch tool and leaned on readdork.com's venue logs, which don't list every show. Claude then checked the setlist.fm venue archives directly (they load normally) and settled most of Part A. Public event listings only.

## Model's answer

### Parts A–C: events found
```csv
part,city,date,start_local,start_note,kind,title,performer_or_teams,venue,capacity_in_setup,status,proof_url,attendance,attendance_kind,attendance_source
A,Los Angeles,2026-04-24,19:00,listed show time (jambase); no post-show proof found,show,Third Day 30th Anniversary Tour,Third Day; Zach Williams,Kia Forum,,not_confirmed,https://www.jambase.com/show/third-day-kia-forum-20260424,,,
C,Los Angeles,2026-04-04,,no source found for scheduled start,show,LANY Soft World Tour,LANY,Intuit Dome,,happened,https://readdork.com/setlists/lany-2026-04-04,,,
C,Los Angeles,2026-04-04,18:30,venue page: event starts 6:30 PM; doors 6:00 PM (youtubetheater.com/events/detail/log-1),show,Lamb of God North American Tour,Lamb of God; Kublai Khan TX; Fit For An Autopsy; Sanguisugabogg,YouTube Theater (Inglewood),,happened,https://metalinsider.net/photos/photos-review-lamb-of-god-dominate-los-angeles-with-kublai-khan-tx-fit-for-an-autopsy-sanguisugabogg,,,
C,Los Angeles,2026-09-20,20:00,start from event listings,show,De Sonora Para El Mundo Tour,Carín León,BMO Stadium,,not_confirmed,https://expositionpark.ca.gov/calendar/category/concert/list,,,
C,Los Angeles,2026-09-20,19:30,venue page; gates 5:30 PM,show,Gregory Alan Isakov with the Hollywood Bowl Orchestra,Gregory Alan Isakov; José González; Hollywood Bowl Orchestra,Hollywood Bowl,,not_confirmed,https://www.hollywoodbowl.com/events/performances/4344/2026-09-20/gregory-alan-isakov-with-the-hollywood-bowl-orchestra,,,
```

Venue and date checks: every Part A cell came back "couldn't tell," except Kia Forum Apr 24 (Third Day listed) and UFC, which was Sep 19, not Sep 20 (lalive.com). Part B (unchecked venues on all 15 dates): all "couldn't tell"; only pre-sale listings were found.

### Part D: fan zones and watch parties
```csv
event,city,date,hours,free_or_ticketed,crowd,crowd_kind,crowd_source,notes
FIFA Fan Festival Los Angeles,Los Angeles,2026-06-12,11:00-21:00,ticketed ($10; 12 and under free),,,,"No Jun 12 figure. LA Magazine reported 100,000+ visitors across the Jun 11-14 opening weekend (multi-day total, not daily). Hours: lacoliseum.com fan festival page"
Union Station World Cup Fan Zone,Los Angeles,2026-06-26,,free (Eventbrite registration),,,,"No crowd number; Reuters (Jun 27): 'thousands'. Hours not found. No other official LA fan zone that day (Farmers Market Jun 18-21; Downey Jun 20; Hansen Dam Jul 2-5)"
Canadiens Watch Party - Street Edition,Montreal,2026-05-25,from 17:00 to end of game,free (first come),,,,"Three giant screens; no crowd figure (nhl.com/canadiens watch-party page)"
Seven Lions at Waterfront Park,San Diego,2026-08-22,listed start 17:00,ticketed (18+),,,,"Happened (EDM Identity recap); no crowd figure or setup capacity"
```

### Part E: October 2026 watch parties (four cities)
None of 5,000+ found or announced. Checked: Padres away NLDS games (no 2026 Gallagher Square announcement found), Dodgers at Atlanta (none), Yankees at Tampa Bay (none), Liberty (couldn't confirm October games), Seattle (Mariners missed the playoffs).

Pages that wouldn't load: setlist.fm venue and search pages (returned the wrong page); readdork.com/venues/crypto-com-arena (404).

## Claude's checks against setlist.fm venue archives (Oct 6, 2026)
Concerts only. Comedy, family shows and other events may not appear.

**Confirmed (happened):**
- Apr 4: LANY at Intuit Dome. Lamb of God at YouTube Theater (doors 6:00, show 6:30) therefore counts under the theater rule (YouTube Theater with Intuit Dome is one zone).
- Apr 24: Third Day at Kia Forum.
- Jun 26: **new**, Kid Cudi with Big Boi and Dot da Genius ("The Rebel Ragers" tour) at Crypto.com Arena. 6:30 pm per the arena's own page (per the build session).
- Sep 20: Gregory Alan Isakov at the Hollywood Bowl. **New:** Haruomi Hosono with Toro y Moi supporting at the Greek Theatre, 8:00 pm (billing and time per the build session).

**Ruled out (no concert in the archive):**
- Crypto.com Arena: Feb 25, Mar 18, Apr 24, Apr 26, Apr 30 (its 2026 concerts before July: Feb 1 Grammys, Feb 4, Feb 26, May 21, Jun 6, 10, 11, 13, 14, 18, 25, 26).
- Intuit Dome: Mar 18, Apr 24, Apr 26, Apr 30, Jun 26 (Feb 28 to Jul 11: Feb 28, Mar 20, Apr 4, May 5, 7, 9, 10, Jun 13, 14, Jul 11).
- Kia Forum: Feb 25, Mar 18, Apr 30, Jun 12 (nearby shows: Feb 23 and 27, Mar 13 and 20, Apr 29, Jun 11 and 13).
- FivePoint Amphitheatre isn't the 2026 Irvine venue; Great Park Live is (its 2026 shows found: Aug 29, Oct 23, Nov 15).

## Correction from the build session (Oct 6, 2026)
**Carín León at BMO Stadium, Sep 20, 8:00 pm (doors 6:00), 22,000 seats**: scheduled across Ticketmaster, AXS (BMO's own ticketer), Songkick, Bandsintown and Spotify, with no cancellation found. Include it. Sep 20 was already the heaviest date in the set; leaving out a 22,000-seat stadium show would have been the biggest single error.

## Crowd figures: none usable
The fan zones, the Canadiens' watch party and Seven Lions stay listed but don't feed friction until a real figure exists. The FIFA Fan Festival's 100,000+ is a four-day total, not a daily figure; don't divide it into one.

## Still open (minor)
The Greek Theatre on the spring dates; Galen Center, Long Beach Arena, the Rose Bowl, Great Park Live; non-baseball nights at Dodger and Angel stadiums; WWE, boxing and awards shows.
