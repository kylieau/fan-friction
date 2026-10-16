# Answer: how many people are there on one day of a multi-day event

Answer to the research brief "how many people are there on one day of a multi-day event" (`multiday-attendance-prompt.md`; status: open). Research only; Kylie decides the rule. Pasted into the repo by Claude Code on Oct 16, 2026, as returned.

**How to read this file**

- Every source was seen on **2026-10-15**. Sources sit in the same table row or sentence as the fact they support.
- Each fact is marked **O** (observed: read on the organizer's own page or document), **R** (reported: press, trade press, encyclopedia, or another third party), or **J** (my judgment or my arithmetic).
- "Not published" means I searched and found no figure. It does not prove none exists.
- Pages that would not load are listed at the end. I did not work around them.

---

## Short version

1. The same word, "attendance", is used for four different things, sometimes by the same organizer in different years. NYCC reported 33,000 *unique* attendees in 2006 but counts *tickets* today, and since it stopped selling multi-day passes, each ticket is one person-day ([ICv2 2006](https://icv2.com/print/article/8738); [ICv2, Fensterman interview](https://icv2.com/print/article/38979)). R
2. The kind of figure can usually be read from cues in the wording (section 2.1). When it can, every kind except "nothing published" can be turned into a per-day number with a stated confidence.
3. Two findings make the problem easier than it looks:
   - Sold-out, capped festivals run very close to their daily cap. Billboard's 2014 boxscore put Coachella at about 96,500 a day against a 99,000 cap, and Stagecoach at 63,400 a day against a 65,000 cap (section 1.1). So "sold out at a cap of X a day" is a good per-day figure.
   - The app only needs to know whether a day clears 5,000 and roughly how big it is. For a figure of unclear kind, the most cautious reading (treat it as person-days and divide by days open) gives a **floor**. If the floor clears 5,000, the event can be sized without knowing the kind (section 3, row 7).
4. Days are very uneven at long-run gate events (fairs: the busiest day was 2.1 times the average and the slowest 0.4 times at the 2023 State Fair of Texas), and moderately uneven at race weekends (Sunday is roughly 46% of a three-day total at Long Beach). At capped, pass-based festivals they are flat.

---

## 1. What organizers actually publish

### 1.1 Multi-day music festivals

| Event, year | Figure | What it counts | Basis | Source |
|---|---|---|---|---|
| Coachella (Indio), from 2017 | Daily cap raised from 99,000 to 125,000, phased in | Per-day permit cap set by Indio City Council (2016 vote) | R | [Pollstar, Apr 2016](https://news.pollstar.com/?p=264642); [Hypebot](https://www.hypebot.com/when-is-a-festival-too-big-coachella-stagecoach-to-expand/) |
| Coachella, 2012 proposal | Caps described as "per day" (95,000 then, 99,000 proposed) | Confirms the cap is a daily number | R | [Pollstar, Sep 2012](https://news.pollstar.com/2012/09/13/goldenvoice-proposes-more-desert-fests/) |
| Coachella 2014 | 96,500 per day; 579,000 total over 6 days | Billboard boxscore. The "total" is per-day × days, i.e. person-days | R | [Spin, citing Billboard](https://www.spin.com/?p=119643) |
| Coachella 2023 | Weekend 1 "very limited" passes at lineup launch; press later reported Weekend 1 sold out | Pass sales status, no count | R | [Pollstar, Jan 2023](https://news.pollstar.com/2023/01/10/bad-bunny-frank-ocean-blackpink-to-headline-coachella-2023/); [HotNewHipHop](https://www.hotnewhiphop.com/642485-where-to-buy-tickets-for-coachella-2023) |
| Coachella 2023 | No official attendance count found | | — | Not published |
| Stagecoach 2014 | 63,400 per day; 190,200 total | Billboard boxscore, person-days | R | [EDM Maniac, citing Billboard](https://edmmaniac.com/coachella-valley-music-arts-festival-break-records-brings-home-the-money-in-2014) |
| Stagecoach 2012 | Sells out at 65,000 | Daily sellout level | R | [Pollstar, Sep 2012](https://news.pollstar.com/2012/09/13/goldenvoice-proposes-more-desert-fests/) |
| Stagecoach 2015 | 70,000 tickets sold; $312.57 average per three-day pass | **Passes**, not person-days (gross ÷ 70,000 = the per-pass price) | R | [FOH Online](https://fohonline.com/?p=119442) |
| Stagecoach 2017 | About 225,000 attended; cap 75,000 per day | Person-days = cap × 3 | R | [InvestorPlace, Sep 2017](https://investorplace.com/2017/09/stagecoach-festival-2018/) |
| Stagecoach 2018 | Record 75,000+ | Kind not stated; equals the daily cap | R | [Mix 100.5](https://www.mix1005.fm/stagecoach-sets-new-attendance-record-in-2018-75000/) |
| Stagecoach 2019 | Crowd estimated at 80,000 (Desert Sun headline, Apr 27, 2019) | A crowd estimate; the encyclopedia calls it a "peak" | R | [Wikipedia, citing Desert Sun](https://en.wikipedia.org/wiki/Stagecoach_Festival) (Desert Sun page blocked, see end) |
| Stagecoach 2022 | No figure found | | — | Not published |
| Stagecoach (AEG sponsorship page, 2024 edition) | 80,000/Day | Organizer's own per-day statement | O | [AEG Global Partnerships](https://aeggp.com/festivals/stagecoach) |
| Lollapalooza (Chicago), 2023 contract on | Up to 115,000 per day, up 15,000 from the previous contract | Per-day cap in the Park District contract | R | [Chicago Tribune via AOL](https://www.aol.com/entertainment/lollapalooza-contract-chicago-could-fest-100000964.html) |
| Lollapalooza 2025 | About 115,000 per day (organizers) | Per-day | R | [FOX 32 Chicago](https://fox32chicago.com/news/lollapalooza-attendance-2025) |
| Lollapalooza 2018 | 109,300 on day 1 (officials); about 400,000 expected over 4 days | A day count, plus a four-day person-day total | R | [CBS Chicago](https://chicago.cbslocal.com/2018/08/03/arrests-hospital-lollapalooza/) |
| Austin City Limits | About 75,000 per day; 450,000 over two three-day weekends | Per-day, and its person-day total | R | [Wikipedia](https://en.wikipedia.org/wiki/Austin_City_Limits_Music_Festival); [Austin Chronicle, 2013](https://www.austinchronicle.com/music/playback-acl-fest-cant-stop-the-music-11758998/) |
| ACL 2013 | 13% of buyers bought both weekends | Shows passes ≠ unique people across weekends | R | [Austin Chronicle, 2013](https://www.austinchronicle.com/music/playback-acl-fest-cant-stop-the-music-11758998/) |
| ACL 2013, weekend 1 | 75,000 a day expected "judging from ticket sales"; a regular said it felt less crowded | Sold is not the same as present | R | [KUT](https://www.kut.org/post/austin-city-limits-fest-weekend-one-wrap) |
| EDC Las Vegas 2023 | 525,000+ attendees over three nights, announced **before** the event | Person-days (a review put it at 170,000+ each day) | R | [KTNV, May 2023](https://ktnv.com/morningblend/edc-las-vegas-5-16-23); [EDMTunes](https://www.edmtunes.com/2023/05/another-year-of-magic-at-edc-las-vegas-2023/amp/) |
| Adult Swim Festival 2018 (ROW DTLA, Oct 5 preview night + Oct 6–7) | More than 20,000 fans, per Adult Swim | Kind not stated; single-day and weekend passes were both sold | R | [Deadline, Jun 2019](https://deadline.com/2019/06/rick-morty-adult-swim-festival-season-4-screening-november-1202637576); passes: [The Comic's Comic](https://thecomicscomic.com/2018/03/16/adult-swim-will-host-its-first-comedymusic-festival-in-los-angeles-in-october-2018/) |
| Adult Swim Festival 2019 | Expected 20,000 "for the two nights" at a 20,000-capacity stadium | Ambiguous again: could be per night or total | R | [Pollstar, Nov 2019](https://news.pollstar.com/2019/11/14/second-annual-adult-swim-festival-takes-over-banc-of-california-stadium-with-vince-staples-jamie-xx-2-chainz-tierra-whack/) |
| Outside Lands, Governors Ball, BeachLife, small two-day city festivals | Not researched in this pass | | — | — |

Pattern (J): music festivals publish a **per-day cap or per-day figure** much more often than a total. Totals, when they appear, are usually per-day × days (Billboard boxscores, ACL, EDC, Lollapalooza). The exception is a **passes-sold** figure (Stagecoach 2015), which is the per-day crowd, not a total.

### 1.2 Comic cons and fan conventions

| Event, year | Figure | What it counts | Basis | Source |
|---|---|---|---|---|
| San Diego Comic-Con | About 135,000 attendees over 4 days | **Unique**: badges carry names, a four-day badge counts once | R | [Comics Beat, quoting Glanzer](https://www.comicsbeat.com/nycc-15-biggest-ever-with-167000-tickets-sold); [San Diego Tourism profile, 2024](https://connect.sandiego.org/wp-content/uploads/2024/06/Comic-Con-July2024-Convention-Profile-1222888.pdf) |
| San Diego Comic-Con | Counted per day or by turnstile, it would be 330,000–360,000 | Person-days equivalent stated by the organizer's spokesman | R | [ICv2, Glanzer panel](https://icv2.com/articles/columns/view/36850/comic-cons-david-glanzer-con-growth-fan-dollars-sdccs-future-san-diego) |
| San Diego Comic-Con 2015 | About 60,000 people come downtown without badges | Unnamed studio study; low reliability | R | [Comics Beat](https://www.comicsbeat.com/sdcc-15-about-60000-people-show-up-without-badges) |
| New York Comic Con 2006 | 33,000+ unique attendees | Unique | R | [ICv2](https://icv2.com/print/article/8738) |
| New York Comic Con 2017 | 200,000; only one-day passes were sold that year | Tickets = person-days | R | [Publishers Weekly](https://www.publishersweekly.com/pw/by-topic/booknews/comics/article/75048-new-york-comic-con-2017-sells-record-200-000-tickets.html) |
| New York Comic Con | One ticket counts as one, whatever its number of days | Organizer's own method | R | [ICv2, Fensterman interview](https://icv2.com/print/article/38979) |
| New York Comic Con 2018 | 250,000+, including separately ticketed side events | Tickets, mixed events | R | [Publishers Weekly](https://www.publishersweekly.com/pw/by-topic/booknews/comics/article/78281-a-record-250-000-fans-mob-new-york-comic-con-2018.html) |
| Anime Expo 2017 | 115,726 unique (incl. 8,068 at pre-show night); 357,178 turnstile | Both kinds published | O | [Anime Expo release](https://www.anime-expo.org/?p=3785) |
| Anime Expo 2018 | 110,000 unique (a badge-sales cap); 350,000+ turnstile | Both kinds | R | [Anime News Network](https://admin.animenewsnetwork.com/daily-briefs/2018-07-11/anime-expo-2018-caps-out-attendance-at-110000-next-year-dates-set/.134138) |
| Anime Expo 2019, pre-show release | "More than 350,000", footnoted as turnstile for all show days, with over 110,000 uniques | Organizer defines its headline figure as turnstile | O | [Anime Expo, Jun 21 2019](https://www.anime-expo.org/2019/06/21/anime-expo-2019-thrills-fans-japanese-pop-culture-four-day-show-los-angeles/) |
| Anime Expo 2019, post-show | Nearly 350,000 attendees over five days (Jul 3 pre-show to Jul 7) | Kind not restated; same headline number as the turnstile figure | R | [SPJA release, reposted by Parks and Cons](https://parksandcons.com/industry-updates/28th-annual-anime-expo-delights-more-than-350k-fans-of-japanese-pop-culture) |
| Anime NYC 2019 | 46,000 unique, explicitly not turnstile | Unique | R | [Publishers Weekly](https://www.publishersweekly.com/pw/by-topic/booknews/comics/article/81772-manga-novels-anime-games-mingle-at-anime-nyc-2019.html) |
| WonderCon, C2E2 | Not researched in this pass | | — | — |

Pattern (J): conventions publish either **unique** or **turnstile/tickets**, and good ones say which. The ratio of person-days to unique people is 3.09 at Anime Expo 2017 (357,178 ÷ 115,726) and 2.4–2.7 at SDCC (330,000–360,000 ÷ 135,000), for four-day shows. J (arithmetic)

### 1.3 Trade shows, expos and auto shows

| Event, year | Figure | What it counts | Basis | Source |
|---|---|---|---|---|
| NAMM 2013 (Anaheim, Jan 24–27) | 93,908 total registrants | Unique registrations (trade show) | O | [NAMM release, Jan 28 2013](https://ww1.namm.org/node/17029) |
| NAMM 2018 (Jan 25–28) | 115,085 registrants | Unique registrations | R | [Orange County Business Journal](https://www.ocbj.com/news/2018/jan/30/namm-number-115085-10/); [ProSoundWeb](https://www.prosoundweb.com/show-central-news-new-products-from-winter-namm-2018/) |
| CES 2024 | 138,789 verified attendees (audited by Alliance for Audited Media, UFI standards), incl. exhibitors and media | Audited unique | O | [CTA release](https://www.ces.tech/press-releases/ces-audit-confirms-decision-makers-flocked-to-2024-show); [CES audit summary PDF](https://ces.tech/media/5tmfzidk/attendeeauditsummary_2024.pdf). Trade press prints 138,739 ([TSNN](https://tsnn.com/news/ces-2024-audit-verifies-138700-attendees-marking-20-yearoveryear-surge)) |
| Detroit auto show (NAIAS) 2019 | 774,179 total ticketed attendance over the public days | Admissions (person-days) | R | [CBS Detroit](https://www.cbsnews.com/detroit/news/more-than-750k-people-attended-the-north-american-international-auto-show/) |
| Toronto auto show 2023 | 350,000+ over the run; single-day record 56,122 on Sunday, Feb 19 | Admissions, plus a day count | R | [Motor1](https://www.motor1.com/features/705935/auto-show-attendance-2023/) |
| LA Auto Show 2022 (Nov 18–27) | No figure found; the show's own pages describe attendance only as "hundreds of thousands" | | R | [Vehicle Dynamics International event listing](https://www.vehicledynamicsinternational.com/?p=5722) |
| LA Auto Show 2023 | Reported as not releasing official numbers | | R | [MediaPost](https://www.mediapost.com/publications/article/401236/la-auto-show-chock-full-of-vehicles-execs.html?edition=) |
| New York and Chicago auto shows | Not researched in this pass | | — | — |

Pattern (J): association trade shows publish **unique registrants or audited attendance**, rarely day counts. Public auto shows publish **ticketed admissions** or nothing.

### 1.4 County and state fairs

| Event, year | Figure | What it counts | Basis | Source |
|---|---|---|---|---|
| L.A. County Fair 2015 (19 days) | 1,276,817 total; top day 110,728 (a Saturday) | Gate admissions | R | [Patch / City News Service](https://patch.com/california/venice/la-county-fair-more-popular-deep-fried-guacamole) |
| L.A. County Fair 2016 (Sep 2–25, closed Mon–Tue except Labor Day, 19 days) | More than 1.3 million; up 3.18%; final Saturday 121,157, the biggest single day since 2007 | Gate admissions, plus one day count | R | [FOX 11](https://www.foxla.com/news/la-county-fair-attendance-increases-3-percent-in-2016); [NBC LA](https://www.nbclosangeles.com/the-scene/la-county-fair-by-the-impressive-numbers/110572/?amp=1) |
| L.A. County Fair 2016, Sunday counts | Not published in what I found | | — | — |
| Minnesota State Fair 2018 (12 days) | 2,046,533 total; daily counts published | Gate admissions by day | R | [Star Tribune](https://m.startribune.com/2018-minnesota-state-fair-attendance/491847561/); [KROC](https://krocnews.com/state-fair-attendance-set-new-record-at-over-2-million/); [FOX 9](https://www.fox9.com/news/1st-friday-of-minnesota-state-fair-sets-new-daily-attendance-record) |
| Minnesota State Fair 2023 | 1,835,826 total; Friday 164,741, Thursday 106,327 | Gate admissions by day | R | [Twin Cities Business](https://tcbmag.com/2023-minnesota-state-fair-attendance-down-less-than-1/); [KSTP](https://kstp.com/kstp-news/local-news/more-than-106000-visitors-attended-day-1-of-the-minnesota-state-fair/) |
| State Fair of Texas | Full daily attendance table on the fair's site, by year | Gate admissions by day | O | [bigtex.com daily attendance](https://bigtex.com/about-us/daily-attendance/) |
| State Fair of Texas 2023 | 2,341,449 total; peak Saturday 208,731 (Texas–OU game day); low Wednesday 40,088 | Gate admissions | R | [KVUE](https://kvue.com/article/news/local/state-fair/state-fair-of-texas-2023-stats/287-1f909798-b59e-4565-b45f-84c8e026dc29) |
| State Fair of Texas 2024 | 2,385,855 total; peak Saturday 212,003; 12 of 24 days above 100,000 | Gate admissions | O / R | [bigtex.com](https://bigtex.com/about-us/daily-attendance/); [Dallas Morning News](https://dmn-dallas-news-prod.cdn.arcpublishing.com/news/texas/2024/10/22/state-fair-of-texas-welcomed-nearly-24m-people-this-season-what-were-the-busiest-days) |
| State Fair of Texas | Headcount via a ticketing system only since 2016; earlier figures leaned on coupon sales and eyeball estimates | Method change | R | [D Magazine, 2017](https://www.dmagazine.com/frontburner/2017/10/state-fair-of-texas-attendance/) |
| OC Fair | Not researched in this pass | | — | — |

Pattern (J): fairs publish **cumulative gate admissions**, and the best (Minnesota, Texas) publish every day. These are the cleanest kind for the app.

### 1.5 Race weekends and street events

| Event, year | Figure | What it counts | Basis | Source |
|---|---|---|---|---|
| Grand Prix of Long Beach 2012 | About 65,000 expected Saturday; 170,000 expected for the weekend | Pre-event organizer expectations | R | [CBS LA](https://www.cbsnews.com/losangeles/news/grand-prix-procelebrity-race-gets-under-way-in-long-beach/) |
| Long Beach 2014 (40th edition, race Sunday Apr 13) | Organizer called it the most successful in a decade; no count found | | R | [IndyCar, Oct 2014](https://www.indycar.com/news/2014/10/10-16-toyota-grand-prix-of-long-beach-tickets-available-october-20) |
| Long Beach 2015 | Attendance surpassed 181,000, the most in a dozen years; more than 80,000 expected Sunday | Three-day total (admissions); Sunday expectation | R | [IndyCar notes](https://www.indycar.com/news/2015/04/4-22-notes-long-beach-attendance-rises); [Patch / CNS, Apr 17 2015](https://patch.com/california/lagunabeach/toyota-grand-prix-long-beach-begins-today) |
| Long Beach 2016 | Organizer: does not give out official numbers; estimate of 180,000 for three days | Organizer estimate | R | [Racer](https://racer.com/2016/04/17/indycar-long-beach-notebook/) |
| Long Beach 2017 | Sunday about 85,000; three-day about 183,000 | A day count and its total | R | [Sports Business Daily, Apr 2018](https://www.sportsbusinessdaily.com/Daily/Issues/2018/04/17/Events-and-Attractions/Long-Beach.aspx); [Long Beach Post](https://lbpost.com/sports/?p=112) |
| Long Beach 2025 | Headline said nearly 200,000 expected **Sunday**; other coverage puts about 200,000 across all three days the year before | Press conflating a weekend total with a day | R | [CBS LA, 2025](https://www.cbsnews.com/losangeles/news/nearly-200000-expected-sunday-as-acura-grand-prix-of-long-beach-celebrates-50-years); [LA Times via AOL](https://www.aol.com/news/everything-know-long-beach-grand-110008348.html) |
| IndyCar and NASCAR weekends elsewhere | Not researched in this pass | | — | — |

Pattern (J): race weekends publish a **three-day total** (admissions) and occasionally a race-day number. The press sometimes attaches the weekend total to Sunday, which would overstate the race day by about double.

---

## 2. How to turn each kind into a day's crowd

### 2.1 Cues for classifying a figure (J, built from the examples above)

| Wording or context | Most likely kind |
|---|---|
| "per day", "daily", "each day" | Per-day figure |
| "turnstile", "admissions", "visits", "through the gates", "gate attendance", fair totals | Cumulative admissions |
| "tickets sold" where only single-day tickets exist (NYCC 2017 on) | Cumulative admissions |
| Billboard/Pollstar boxscore "total attendance" for a festival, when it equals a round per-day number × days | Cumulative admissions |
| "unique", "individual", "registrants", "audited", named badges | Unique attendees |
| "passes", "wristbands", "three-day passes sold", a gross ÷ count that equals a multi-day pass price | Passes sold |
| "capacity", "cap", "permit", "contract allows" | Capacity cap |
| "over X fans", "more than X", no method stated | Unclear kind |

Two warnings (R, then J):
- The same organizer can change kind when ticketing changes. NYCC's 2006 figure was unique; its later figures are tickets, which became person-days once only single-day tickets were sold ([ICv2](https://icv2.com/print/article/38979); [PW](https://www.publishersweekly.com/pw/by-topic/booknews/comics/article/75048-new-york-comic-con-2017-sells-record-200-000-tickets.html)).
- A per-day cap may not include everyone on site. Lollapalooza's day 1 in 2018 was reported at 109,300 while the contract then in force allowed 100,000 a day ([CBS Chicago](https://chicago.cbslocal.com/2018/08/03/arrests-hospital-lollapalooza/); [Tribune via AOL](https://www.aol.com/entertainment/lollapalooza-contract-chicago-could-fest-100000964.html)). I could not find out why. J: treat caps as approximate, not exact.

### 2.2 Methods by kind

| Kind | Method | Confidence (J) | Evidence |
|---|---|---|---|
| Count for that day | Use it | High | Fairs (Texas, Minnesota), Lollapalooza day 1, Long Beach Sunday 2017 |
| Per-day figure for the edition | Same number every open day | High when the event is capped and sold out; medium otherwise | ACL, Lollapalooza, Stagecoach (AEG) |
| Per-day cap + sellout evidence | Cap = the day's crowd | Medium-high. Boxscores put sold-out days at about 97–98% of cap: Coachella 2014 96,500 vs 99,000; Stagecoach 2014 63,400 vs 65,000 (J, arithmetic on section 1.1) | Coachella, Stagecoach |
| Cumulative admissions, no daily split | Total ÷ open days, then day-of-week weight (2.3) | Medium for the average; low for a specific day at fairs, where days range from 0.4× to 2.1× the average | Fairs, auto shows, Anime Expo turnstile |
| Unique attendees | Unique × day-share factor (share of the run the average person attends). Fan conventions: 0.7 (range 0.6–0.77). Trade shows: 0.6 (range 0.5–0.75) | Low-medium for conventions (two data points); low for trade shows (no data found) | AX 2017: 3.09 days of 4 = 0.77; SDCC: 2.4–2.7 of 4 = 0.61–0.67 (J). Trade-show factor is pure judgment |
| Passes sold | Multi-day passes + that day's single-day tickets. If the mix is unknown: floor = total ÷ days, ceiling = total | Medium when the mix is known; low otherwise | Stagecoach 2015 (passes) |
| Unclear kind / round marketing figure | Floor = figure ÷ open days (the reading that gives the smallest daily crowd). Use only to decide whether a day clears 5,000, shown as "at least" | Low as a size; fairly safe as a threshold test, since every other reading is bigger. Risk: marketing figures can be rounded up | Adult Swim 2018 |
| Nothing usable | Unsized | — | LA Auto Show 2022 |

### 2.3 How uneven are the days? (published splits)

Day ÷ average day for the run (J, arithmetic on the cited figures):

| Event | Day | Count | Average day | Ratio | Source |
|---|---|---|---|---|---|
| Minnesota State Fair 2018 | Thu (opening) | 122,695 | 170,544 | 0.72 | [Star Tribune](https://m.startribune.com/2018-minnesota-state-fair-attendance/491847561/) |
| | Fri (rain) | 108,059 | | 0.63 | same |
| | Sat (1st) | 222,194 | | 1.30 | same |
| | Sun (1st) | 184,716 | | 1.08 | same |
| | Wed (2nd) | 144,940 | | 0.85 | [KROC](https://krocnews.com/state-fair-attendance-set-new-record-at-over-2-million/) |
| | Thu (2nd) | 156,764 | | 0.92 | same |
| | Sat (2nd, all-time record) | 270,426 | | 1.59 | [FOX 9](https://www.fox9.com/news/1st-friday-of-minnesota-state-fair-sets-new-daily-attendance-record) (KSTP prints 270,789) |
| | Mon (Labor Day, rain) | 171,000+ | | ≈1.00 | [KROC](https://krocnews.com/state-fair-attendance-set-new-record-at-over-2-million/) |
| State Fair of Texas 2023 | Peak Sat (game day) | 208,731 | 97,560 | 2.14 | [KVUE](https://kvue.com/article/news/local/state-fair/state-fair-of-texas-2023-stats/287-1f909798-b59e-4565-b45f-84c8e026dc29) |
| | Low Wed | 40,088 | | 0.41 | same |
| | Final Sun | 118,256 | | 1.21 | [bigtex.com](https://bigtex.com/about-us/daily-attendance/) |
| State Fair of Texas 2024 | Peak Sat | 212,003 | 99,411 | 2.13 | [Dallas Morning News](https://dmn-dallas-news-prod.cdn.arcpublishing.com/news/texas/2024/10/22/state-fair-of-texas-welcomed-nearly-24m-people-this-season-what-were-the-busiest-days) |
| | Final Sun | 125,394 | | 1.26 | [bigtex.com](https://bigtex.com/about-us/daily-attendance/) |
| L.A. County Fair 2016 | Final Sat | 121,157 | ≈68,400 | 1.77 | [FOX 11](https://www.foxla.com/news/la-county-fair-attendance-increases-3-percent-in-2016) |
| Toronto auto show 2023 | Sun (record) | 56,122 | ≈35,000 (350,000+ ÷ 10) | ≈1.6 | [Motor1](https://www.motor1.com/features/705935/auto-show-attendance-2023/) |
| Long Beach GP 2017 | Sun (race day) | ≈85,000 | — | 46% of the ≈183,400 three-day total | [SBD](https://www.sportsbusinessdaily.com/Daily/Issues/2018/04/17/Events-and-Attractions/Long-Beach.aspx); [LB Post](https://lbpost.com/sports/?p=112) |
| Long Beach GP 2012 | Sat (expected) | ≈65,000 | — | 38% of the 170,000 expected total | [CBS LA](https://www.cbsnews.com/losangeles/news/grand-prix-procelebrity-race-gets-under-way-in-long-beach/) |

Day weights I propose from this (J):

| Event type | Weight per open day (relative to the run's average; rescale so the run's weights average 1.0) |
|---|---|
| Capped, pass-based festival; sold out | Flat (1.0 each day) |
| Fairs and other long-run gate events | Mon–Thu 0.7 · Fri 0.9 · Sat 1.5 · Sun 1.2 · holiday Monday 1.0. Expect ±30% on any single day; a big single draw (a game, a headliner) can push a day to 2× |
| Three-day race weekend | Share of the total: Fri 0.16 · Sat 0.38 · Sun 0.46 (from one event, Long Beach) |
| Conventions, trade shows, auto shows | Flat (no day splits found; Saturday is probably the peak at public shows, which Toronto supports) |

---

## 3. A rule to react to

City-neutral: it uses only the kind of figure, the open days, and the event type. Rows are in priority order: use the first row the event qualifies for.

| # | Kind of published figure | How the app sizes the day | Label | Note shown |
|---|---|---|---|---|
| 1 | A count for that day | Use it | announced (organizer) · reported (press, police, city) | "Count for this day, from {source}." |
| 2 | A per-day figure for this edition ("about 115,000 a day") | Same number on every open day | announced · reported | "{Source} said about {X} people a day." |
| 3 | Per-day cap or permit, **and** a sellout report for this edition | The cap | estimated | "Sold out; {authority} allows {X} a day. Actual count not published." |
| 4 | Cumulative admissions (turnstile, gate, single-day tickets, a boxscore total that is per-day × days) | Total ÷ open days × day weight (section 2.3) | estimated | "{Total} admissions over {N} days, spread by day of week." |
| 5 | Unique attendees (named badges, registrants, audited) | Unique × day-share factor (0.7 fan conventions, 0.6 trade shows), flat across days | estimated | "{X} individual people over {N} days, adjusted for people who come more than one day." |
| 6 | Multi-day passes sold | Passes + that day's single-day tickets if known; otherwise the floor (row 7) | estimated | "{X} passes sold; each pass holder can come every day." |
| 7 | Unclear kind or round marketing figure ("over 20,000 fans") | Floor = figure ÷ open days. Size only if the floor is 5,000 or more | estimated | "{Source} said '{wording}' without saying how it counted. At least about {Y} a day." |
| 8 | *Optional, Kylie's call:* nothing for this edition, but the same organizer published a per-day figure for the same event, venue and format in a nearby year | The lower of the nearest earlier and nearest later per-day figures | estimated | "No {year} count published; based on the {year} figure." |
| 9 | Nothing usable ("hundreds of thousands", or nothing) | Unsized | — | "Size not published." |

**Stays unsized:** a cap with no sellout evidence (show "up to {cap}" at most); preview, pre-show or fan-fest nights with no count of their own; row 7 when the floor is under 5,000; any event whose open days aren't known; row 9.

**Compared with today's rule** (J): today's rule is rows 1, 2 and 4 with a flat split. Rows 3, 5, 6 and 7 are new. Row 7 is the biggest change, because it sizes figures of unclear kind, but only as a floor and only for the 5,000 threshold. Row 8 is the riskiest and is the one I'd leave out if Kylie wants the app to stay strictly to published data.

---

## 4. Worked examples

All per-day figures below are my arithmetic on the cited sources (J), and all are **estimated** under the rule above unless marked otherwise.

| Event | Day(s) | Per-day figure | Label | Rule row and working | Source |
|---|---|---|---|---|---|
| Coachella 2023, Weekend 1 | Fri Apr 14 · Sat Apr 15 · Sun Apr 16 | 125,000 each | estimated | Row 3. The city's daily cap is 125,000; Weekend 1 was reported sold out | Cap: [Pollstar 2016](https://news.pollstar.com/?p=264642). Sellout: [HotNewHipHop](https://www.hotnewhiphop.com/642485-where-to-buy-tickets-for-coachella-2023); [Pollstar, Jan 2023](https://news.pollstar.com/2023/01/10/bad-bunny-frank-ocean-blackpink-to-headline-coachella-2023/) |
| Stagecoach 2018 | Fri Apr 27 · Sat Apr 28 · Sun Apr 29 | 75,000 each | estimated | Row 7 would give a floor of 25,000. But the 75,000+ figure equals the daily cap in force the year before, and the festival sells three-day passes, so I read it as a daily crowd (row 6 with all-pass sales). Kylie may prefer the row 7 floor | [Mix 100.5](https://www.mix1005.fm/stagecoach-sets-new-attendance-record-in-2018-75000/); cap: [InvestorPlace](https://investorplace.com/2017/09/stagecoach-festival-2018/) |
| Stagecoach 2019 | Fri Apr 26 · Sat Apr 27 · Sun Apr 28 | 80,000 each | estimated | The Desert Sun's crowd estimate, published on the Saturday. I couldn't load the article to check which day it describes, so all three days are estimated rather than Saturday being "reported" | [Wikipedia, citing Desert Sun](https://en.wikipedia.org/wiki/Stagecoach_Festival) |
| Stagecoach 2022 | Fri Apr 29 · Sat Apr 30 · Sun May 1 | **Unsized** under rows 1–7. With row 8: 80,000 each | — / estimated | No 2022 figure or sellout report found. Row 8: the 2019 figure (80,000) and the organizer's 2024 figure (80,000/Day) agree | [Wikipedia](https://en.wikipedia.org/wiki/Stagecoach_Festival); [AEG Global Partnerships](https://aeggp.com/festivals/stagecoach) |
| Adult Swim Festival 2018, Los Angeles | Fri Oct 5 (preview night) · Sat Oct 6 · Sun Oct 7 | Fri: **unsized**. Sat and Sun: at least about 6,700 each | — / estimated | Row 7. Floor = 20,000 ÷ 3 open days = 6,667. The preview night is likely smaller than the main days, so it gets no number of its own; the main days are at least the average. If the figure were unique people, each main day could be up to about 20,000 | [Deadline](https://deadline.com/2019/06/rick-morty-adult-swim-festival-season-4-screening-november-1202637576); dates: [Variety](https://variety.com/2018/music/news/rick-and-morty-adult-swim-festival-1202914290) |
| Anime Expo 2019 | Wed Jul 3 (pre-show night) · Thu Jul 4 to Sun Jul 7 | Jul 3: **unsized** (row 8 would give about 8,000, the 2017 pre-show count). Jul 4–7: about 85,500 each | — / estimated | Row 4. The organizer defines its "350,000" as turnstile. (350,000 − about 8,000 pre-show) ÷ 4 = 85,500. Cross-check with row 5: 110,000 uniques × 3.09 days ÷ 4 = about 85,000 | [AX pre-show release](https://www.anime-expo.org/2019/06/21/anime-expo-2019-thrills-fans-japanese-pop-culture-four-day-show-los-angeles/); [post-show release](https://parksandcons.com/industry-updates/28th-annual-anime-expo-delights-more-than-350k-fans-of-japanese-pop-culture); [AX 2017](https://www.anime-expo.org/?p=3785) |
| 2022 L.A. Auto Show | Fri Nov 18 to Sun Nov 27 | **Unsized** | — | Row 9. No figure found | [MediaPost](https://www.mediapost.com/publications/article/401236/la-auto-show-chock-full-of-vehicles-execs.html?edition=) (no numbers released for 2023 either) |
| NAMM 2013 | Thu Jan 24 to Sun Jan 27 | About 56,000 each (range 47,000–70,000) | estimated (low confidence) | Row 5. 93,908 registrants × 0.6 trade-show factor. No day split found, so flat | [NAMM](https://ww1.namm.org/node/17029) |
| NAMM 2018 | Thu Jan 25 to Sun Jan 28 | About 69,000 each (range 57,500–86,300) | estimated (low confidence) | Row 5. 115,085 registrants × 0.6 | [OCBJ](https://www.ocbj.com/news/2018/jan/30/namm-number-115085-10/) |
| Grand Prix of Long Beach 2014, race day | Sun Apr 13 | About 80,000 | estimated | No 2014 count found, so rows 1–7 give nothing and this is **unsized** unless row 8 is adopted. Row 8: organizer's 2015 Sunday expectation (80,000+) and 2017 Sunday count (about 85,000); lower = 80,000. Cross-check: Sunday share 0.46 × a 2014 total below 2015's 181,000 gives about 80,000–83,000 | [Patch / CNS 2015](https://patch.com/california/lagunabeach/toyota-grand-prix-long-beach-begins-today); [SBD](https://www.sportsbusinessdaily.com/Daily/Issues/2018/04/17/Events-and-Attractions/Long-Beach.aspx); [IndyCar 2015](https://www.indycar.com/news/2015/04/4-22-notes-long-beach-attendance-rises) |
| L.A. County Fair 2016, a Sunday | Sun Sep 4, 11, 18 or 25 | About 82,000 (range 74,000–86,000) | estimated | Row 4. "More than 1.3 million" ÷ 19 days = 68,400 average × Sunday weight 1.2 (range 1.08–1.26, the Sundays observed at Minnesota and Texas). Labor Day weekend's Sunday (Sep 4) and the final Sunday (Sep 25) are probably at the top of the range | [FOX 11](https://www.foxla.com/news/la-county-fair-attendance-increases-3-percent-in-2016); [NBC LA](https://www.nbclosangeles.com/the-scene/la-county-fair-by-the-impressive-numbers/110572/?amp=1) |

**What the examples show** (J): under today's rule only Anime Expo and the L.A. County Fair would get a size. Under the proposed rule without row 8, eight of the eleven event-entries get one (Stagecoach 2022, the 2014 Long Beach race day and the 2022 L.A. Auto Show stay unsized). With row 8, only the L.A. Auto Show stays unsized.

---

## 5. Limits and open questions

- **Not researched in this pass:** Outside Lands, Governors Ball, BeachLife, small two-day city festivals, WonderCon, C2E2, the New York and Chicago auto shows, the OC Fair, and IndyCar or NASCAR weekends other than Long Beach.
- **Primary boxscores not opened.** The Billboard figures for Coachella and Stagecoach 2014 come from secondary reports of Billboard ([Spin](https://www.spin.com/?p=119643); [EDM Maniac](https://edmmaniac.com/coachella-valley-music-arts-festival-break-records-brings-home-the-money-in-2014)).
- **The trade-show factor (0.6) has no data behind it.** NAMM registrants include exhibitor staff, who probably attend every day, which would push the factor up. An organizer or audit report with daily badge scans would settle it.
- **The race-weekend weights come from one event** (Long Beach). Other street races may differ.
- **Crowds outside the gate** (for example, people downtown during Comic-Con without badges) are not in any of these figures, but they do use the roads.
- **Small discrepancies between sources:** Minnesota's record day is 270,426 (fair-cited) or 270,789 (KSTP); CES 2024 is 138,789 (CTA) or 138,739 (trade press). I used the organizer's figure where one exists.

## 6. Pages that would not load

| Page | Result |
|---|---|
| [Desert Sun, "Record-breaking Stagecoach crowd estimated at 80,000…" (Apr 27, 2019)](https://www.desertsun.com/story/life/entertainment/music/stagecoach/2019/04/27/record-breaking-stagecoach-crowd-estimated-80000/3602446002/) | Blocked for my fetch tool. The figure above comes from the encyclopedia entry that cites it |
