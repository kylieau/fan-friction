# Answer: short sport labels that name men's and women's alike

Status: research answer, not a decision. Written Oct 15, 2026, in reply to the brief of the same date (`sport-labels-prompt.md`). Kylie decides; any format change gets a mockup before anything is built. Pasted into the repo by Claude Code on Oct 15, 2026, as returned.

**How facts are marked**

- **(O)** observed on a live page on Oct 15, 2026. Unless noted "fetched", I saw the page text through a search tool's extract of the page, not a full browser load.
- **(R)** reported: a secondary source, a third-party code library, or a news report says it.
- **(J)** my judgment, or something I believe from general knowledge but did not verify this session.

---

## Summary

1. **There is already a symmetric code system, and it comes from the NCAA itself.** The NCAA's own sport-code list gives every sport a three-letter code that starts with M, W or X (mixed): MBB/WBB, MVB/WVB, MSO/WSO, MIH/WIH, MLA/WLA and so on. Even single-sex sports carry the letter: baseball is MBA, softball WSB, football MFB, field hockey WFH. ([NCAA sport codes PDF](https://ncaaorg.s3.amazonaws.com/championships/resources/common/NCAA_SportCodes.pdf), (O, fetched)). This is strong backing for Kylie's rule: the governing body's internal codes never leave the men's side unmarked.
2. **The asymmetry lives in public-facing labels, not codes.** Ticketing, URLs and club names often mark only the women's side: SeatGeek's "Womens BB" suffix, CBS Sports' `/college-basketball/` vs `/womens-college-basketball/`, FotMob's "Barcelona (W)", Mexican media's "Femenil", and league names like WNBA/NBA and AFLW/AFL.
3. **Codes are readable to insiders, less so to casual fans.** I found no usability study of MBB/WBB-style codes. The best real-world pattern I saw is a local TV schedule that spells out "Men's Basketball" once, then switches to MBB/WBB for the rest of the list.
4. **Screen readers will not expand codes for you.** `<abbr title>` is ignored by default in JAWS and inconsistent elsewhere, so the app should supply spoken words ("women's basketball") behind every visible code.
5. **Recommendation to react to:** move the sport code into the existing event-label slot (Option B below): "California at UCLA (WBB · First round)" inline, and a label line reading "WBB · First round" in lists. This retires the separate middle-dot rule, so the app has one label system instead of two. Words appear in the spoken label and on the detail view. Details and trade-offs are in section 5.

---

## 1. The codes, sport by sport

### Where codes come from (sources)

| Source | What it uses | Symmetric? | Mark |
|---|---|---|---|
| NCAA sport-code list | 3 letters: M/W/X + sport (MBB, WBB, MSO, WSO, MIH, WIH, MLA, WLA, MTE, WTE, MGO, WGO, MSW, WSW, MTI/MTO, WTI/WTO, MCC, WCC, MGY, WGY, MFE, WFE, XFE, MCR, WCR, MRU, WRU, MWR, WWR, MWP, WWP, WSV, MBA, WSB, MFB, WFH) | Yes, fully | (O, fetched) [PDF](https://ncaaorg.s3.amazonaws.com/championships/resources/common/NCAA_SportCodes.pdf) |
| stats.ncaa.org | Same codes in its URLs and sport pickers (e.g. `/stats_sports/WSO/`) | Yes | (O) [stats.ncaa.org](https://stats.ncaa.org/stats_sports/WSO/teams?division_filter=2) |
| Code libraries built on NCAA stats | Same list (MBA, MBB, MFB, MIH, MLA, MSO, MTE, MVB, MWP, WBB, WBW, WFH, WIH, WLA, WSB, WSO, WSV, WTE, WVB, WWP) | Yes | (R) [sportsdataverse](https://www.npmjs.com/package/sportsdataverse), [ncaavolleyballr](https://cran.csiro.au/web/packages/ncaavolleyballr/vignettes/ncaavolleyballr.html) |
| NCAA.com navigation | Words with a gender suffix: "Basketball - Men", "Basketball - Women"; the promo links read "March Madness Live (DI MBB)" and "March Madness (DI WBB)" | Yes | (O) [NCAA.com](https://www.ncaa.com/stats/basketball-women/d1/current/individual/110/p6) |
| Athletic sites with the `/sports/mens-basketball/` URL pattern (the Sidearm-style pattern; I did not verify the platform per site) | Words, not codes: `/sports/mens-basketball/`, `/sports/womens-basketball/` | Yes | (O) [ACU](https://acusports.com/sports/mens-basketball/schedule/text), [Louisiana Tech](https://latechsports.com/sports/womens-basketball/schedule/text/2026-27), [UCLA](https://uclabruins.com/news/2026/08/17/womens-basketball-announces-home-non-conference-schedule) |
| PrestoSports sites (common in D-II/III, junior college, U Sports) | Lowercase codes in URLs: `wbkb`, `wvball` | Yes for these; men's equivalents (`mbkb` etc.) not checked | (O) [Dalhousie](https://dalhousie.prestosports.com/sports/wbkb/2023-24/schedule), [Hagerstown CC](https://athletics.hagerstowncc.edu/sports/wvball/2026-27/schedule?print=rss), [Westmoreland](https://athletics.westmoreland.edu/sports/wbkb/2026-27/schedule?print=rss) |
| U Sports (Canada) | "WBK" in poll file names; "Women's Basketball" in titles | Yes in titles | (O) [U Sports poll PDF](https://usports.ca/uploads/cis/Sports/Rankings/2023-24/Week_18_2024-01-23/WBK-Coaches-Jan22.pdf) |
| Athletic department news | "WBB vs. UTSA", "MBB vs. WKU" | Yes | (O) [Southern Miss](https://southernmiss.com/news/2022/1/27/general-mens-and-womens-basketball-announce-schedule-changes) |
| Local TV schedule | First line spelled out ("Men's Basketball:", "Women's Basketball:"), then "MBB:" / "WBB:" prefixes | Yes | (O) [WCHS](https://wchstv.com/sports/top-sports/local-college-sports-schedule-for-jan-25-31) |
| Student paper | Headline shorthand "W. Basketball:" | Partly (nav uses "Men's"/"Women's") | (O) [Stanford Daily](https://stanforddaily.com/tag/sage-indendi/) |
| Campus club sports | "(M)" and "(W)" after the sport | Yes | (O) [Auburn club sports](https://www.recwellness.auburn.edu/club-sports-teams) |

Not found: the older CSTV/CBS College Sports URL codes (`m-baskbl`, `w-baskbl`) that some legacy sites used. A search returned no live examples, so I cannot say how common they still are.

### Per-sport table

"Official" is the NCAA code. "Common" lists forms seen or, where marked (J), forms I believe are common but did not see this session. Symmetric means both sides are marked in that form.

| Sport | Official (M / W) | Common forms | Symmetric? | Notes |
|---|---|---|---|---|
| Basketball | MBB / WBB (O) | MBB/WBB (O: NCAA.com, Southern Miss, WCHS); wbkb (O: Presto); WBK (O: U Sports); NCAAM/NCAAW (O: ESPN, CBS); "W. Basketball" (O) | Mostly | Asymmetric forms seen: SeatGeek "Womens BB" with no men's suffix (O); "BB" for men alongside "WBB" (J, common in fan use). |
| Volleyball | MVB / WVB (O) | wvball (O: Presto); "Volleyball - Men/Women" (O: NCAA.com) | Yes | |
| Soccer | MSO / WSO (O) | MSOC/WSOC (J) | Yes | MSO/WSO are less readable than MSOC/WSOC (J). |
| Ice hockey | MIH / WIH (O) | MHKY/WHKY, MHOC/WHOC (J, unverified) | Yes | Many schools say just "Hockey" for men (J). Low confidence on which short form fans prefer. |
| Lacrosse | MLA / WLA (O) | MLAX/WLAX (J) | Yes | "LAX" is widespread fan shorthand (J). |
| Water polo | MWP / WWP (O) | MWP/WWP | Yes | |
| Tennis | MTE / WTE (O) | MTEN/WTEN (J) | Yes | |
| Golf | MGO / WGO (O) | MGOLF/WGOLF (J) | Yes | Golf is a meet, rarely "A at B". |
| Swimming & diving | MSW / WSW (O); diving tracked separately in one NCAA data set (R, [Unizin](https://docs.udp.unizin.org/tables/ref_ncaa_sports.html)) | MSD/WSD, MSWIM/WSWIM (J) | Yes | |
| Track & field | MTI, MTO / WTI, WTO (indoor/outdoor) (O) | MTF/WTF (J) | Yes | **Flag:** "WTF" reads as profanity. Avoid; see section 5. |
| Cross country | MCC / WCC (O) | MXC/WXC (J) | Yes | **Flag:** "WCC" is also the West Coast Conference (Pepperdine, LMU, etc. in the LA metro). Prefer XC. |
| Gymnastics | MGY / WGY (O) | MGYM/WGYM (J) | Yes | Few men's programs. |
| Fencing | MFE / WFE / XFE (mixed) (O) | — | Yes | NCAA runs one coed championship (O: NCAA.com lists "Fencing" unmarked; R: [Unizin](https://docs.udp.unizin.org/tables/ref_ncaa_sports.html) lists "FencingCoed"). Many meets are combined. |
| Rowing | MCR "Men's Crew", MLC lightweight / WCR "Women's Rowing" (O) | — | Codes yes; words no | The NCAA list calls the men's sport "Crew" and the women's "Rowing". NCAA championship is women only (O: NCAA.com "Rowing", unmarked). |
| Beach volleyball | — / WSV "Women's Sand Volleyball" (O) | "Beach Volleyball" (O: NCAA.com) | n/a in NCAA | No NCAA men's code. |
| Rugby | MRU / WRU (O) | — | Yes | |
| Wrestling | MWR / WWR (O) | — | Yes | NCAA.com lists "Wrestling - Men" and "Wrestling - Women" (O); women's wrestling's first NCAA championship season was 2025-26 (R, [Just Women's Sports](https://justwomenssports.com/tag/ncaa-emerging-sports-for-women/), [WTOP](https://wtop.com/ncaa-football/2026/08/what-to-know-as-womens-flag-football-surges-toward-ncaa-championship-status-ahead-of-2028-la-games/)). |
| Bowling, acrobatics & tumbling, stunt | MBO / WBW; WAT; WST (O) | — | Yes in codes | A&T and stunt became NCAA championship sports for 2026-27 (R, [NCAA](https://www.ncaa.org/?p=10684)). |

### Sports played by one side, or under different names

| Sport | Code | Needs a gender label? |
|---|---|---|
| Baseball / softball | MBA / WSB (O) | No (J). The names already differ, and neither name is "the default" with the other marked. If two same-day games at one school could still collide, label the sport ("Baseball", "Softball"), not the gender. |
| Football | MFB (O) | No (J). See flag football. |
| Field hockey | WFH (O) | No at NCAA level (J); no men's NCAA field hockey exists. |
| Women's flag football | None in the NCAA code list (O; the list does not include it) | Not as a gender label. It is a different sport from tackle football, so the label should be a sport word ("Flag") applied symmetrically: if one school has both on the same day, the tackle game also gets "Football" (J). Status: NCAA emerging sport since Jan 2026 (R, [NCAA](https://www.ncaa.org/?p=10684)); NAIA championship sport from 2026-27 (R, [NAIA release](https://www.saintfranciscougars.com/general/2026-27/releases/20260617nmx8ag)); more than 20 states sanction it for high school girls (R, [WTOP](https://wtop.com/ncaa-football/2026/08/what-to-know-as-womens-flag-football-surges-toward-ncaa-championship-status-ahead-of-2028-la-games/)). |

### Established forms that leave the men's side unmarked

| Form | Where | Mark |
|---|---|---|
| "Western Kentucky" (men) vs "Western Kentucky Womens BB" (women) in schedule rows | SeatGeek | (O) [men](https://seatgeek.com/western-kentucky-hilltoppers-mens-basketball-tickets/schedule), [women](https://seatgeek.com/western-kentucky-lady-toppers-womens-basketball-tickets/schedule) |
| `/college-basketball/` (men) vs `/womens-college-basketball/` | CBS Sports URLs (on-page labels are symmetric: NCAAM and NCAAW) | (O) [men](https://www.cbssports.com/college-basketball/scoreboard/CIT/20260109), [women](https://secure-www.cbssports.com/womens-college-basketball/scoreboard/20260302/) |
| "Lady Toppers", "Lady Eagles" nicknames | Team names | (O) SeatGeek, Southern Miss links above |
| "Barcelona (W)" vs "Barcelona" | FotMob | (O) [FotMob](https://www.fotmob.com/it/teams/401657/overview/barcelona) |
| "América vs Chivas Femenil" | Mexican sports media | (O) [Mediotiempo](https://www.mediotiempo.com/futbol/liga-mx-femenil/america-vs-chivas-femenil-en-vivo-a-que-hora-y-donde-ver-clasico-nacional-liga-mx-2024) |
| WNBA/NBA, AFLW/AFL, WBBL/BBL | League names | (J) Some fans deliberately write "AFLM" and "MBBL" to even it out (R, a reader comment at [Obstructing the Field](https://obstructingthefield.substack.com/p/a-batsman-by-any-other-name/comments)) |
| "BB" and "WBB" | Fan and some school shorthand | (J) |

Context: a Cambridge corpus study found gender marking is far more frequent for women's sport than men's ([Cambridge Papers in ELT](https://www.cambridge.org/elt/blog/wp-content/uploads/2016/08/Cambridge_Papers_in_ELT_Language_Gender_and_Sport.pdf), (R)). Until 2022 the NCAA reserved the "March Madness" brand for the men's tournament; a gender-equity review recommended extending it, and the NCAA did ([CBS Sports](https://www.cbssports.com/college-basketball/news/march-madness-branding-extended-to-ncaa-womens-tournament-following-recommendation-from-gender-equity-review/), [KHOU](https://www.khou.com/article/news/verify/sports-verify/march-madness-not-used-for-ncaa-womens-basketball-tournament-until-2022-mens-tournament-only-in-2021/536-6430e604-5ab7-484c-9c8b-bb222bcc120c), (R)). Kylie's rule follows the same direction as that change.

---

## 2. Other levels and countries

### High school

- **MaxPreps** abbreviates in navigation as "B. Basketball" and "G. Basketball", and its sport menu groups sports under "Boys" and "Girls", including Boys Football and Boys Baseball (O, [MaxPreps](https://www.maxpreps.com/ms/jackson/jackson-prep-patriots/tennis/girls/spring/25-26/schedule/)). Its girls' URLs read `/basketball/girls/` (O, [example](https://www.maxpreps.com/az/prescott/prescott-badgers/basketball/girls/schedule/)). I did not check the boys' URL pattern, so I cannot say whether the URL is symmetric.
- **Michigan's state association (MHSAA)** marks every sport Boys or Girls, even sports with one side only (Football: Boys; Field Hockey: Girls) (O, [MHSAA](https://www.mhsaa.com/sports/boys-volleyball/stories)). This is the most consistently symmetric scheme I found.
- **Codes like BBB/GBB, BVB/GVB, BSOC/GSOC** are, I believe, common in school calendars and social posts (J, not verified this session). "BBB" reads oddly; "BBK/GBK" or the words "Boys"/"Girls" are alternatives (J).

### Pro and national teams

- **League names already separate most pro teams.** In the app's metros, the women's pro teams (Sparks, Angel City, PWHL clubs, NWSL clubs) have their own names, so neither side needs a gender label (J). That outcome is symmetric: neither is marked.
- **Shared-name clubs are the exception.** Liga MX Femenil clubs share names with Liga MX clubs ("América" in both), and Mexican media mark only the women's side with "Femenil" (O, [Mediotiempo](https://www.mediotiempo.com/futbol/liga-mx-femenil/america-vs-chivas-femenil-en-vivo-a-que-hora-y-donde-ver-clasico-nacional-liga-mx-2024)). Some clubs use a separate women's name, e.g. Monterrey's Rayadas (O, [Claro Sports](https://www.clarosports.com/futbol/futbol-femenil/america-derrota-a-chivas-y-jugara-su-quinta-final-de-la-liga-mx-femenil-en-los-ultimos-seis-torneos/)). For the Mexican metros, the app would need a label for both sides wherever names collide (J).
- **App practice for shared-name clubs:** FotMob appends "(W)" to the women's club name and leaves the men's plain (O). Inside a women's league table, FotMob drops the "(W)" (O, same page), which shows that context can carry the gender. Sofascore's Liga F match page names the teams without a gender marker and names the league instead (O, [Sofascore](https://www.sofascore.com/barcelona-sporting-huelva/GhGsOhG)).
- **National teams:** USWNT and USMNT are a symmetric pair (J). "England Women" vs plain "England" is the common asymmetric form (J); commentators have long criticised "England" defaulting to the men's team (R, [New Statesman](https://www.newstatesman.com/culture/sport/2014/06/why-media-still-erasing-women-s-achievement-sport)). Nickname pairs such as Matildas/Socceroos or Lionesses/Three Lions are symmetric but need local knowledge (J).

### Outside the US

- **UK university sport (BUCS):** team names are symmetric and numbered: "Men's 1st", "Women's 1st", "Mixed 1st" (O, [Nottingham](https://www.nottingham.ac.uk/sport/performance-sport/bucs-fixtures-and-results.aspx), [Worcester](https://uwbasketball.wp.worc.ac.uk/index.php/tag/sport)). Fixture lists shorten these to M1 and W1 (O, [Derby Union](https://www.derbyunion.co.uk/legacy/getinvolved/sports/fixtures/)).
- **Style guides:** the Badminton World Federation's guide asks for "men's" and "women's" for event categories and rejects "ladies" when "men" is used (R, [BWF style guide](https://ghanabadminton.org/wp-content/uploads/2023/04/BWF-Style-Guide-2022_6Oct2022_V2.pdf)). A Scottish gender-equality guide recommends pairing "women's football" with "men's football" (R, [Engender](https://emcc.engender.org.uk/news/blog/how-to-win-at-gender-equal-sports-reporting-in-5-easy-step/)). A UK petition asking for "Chelsea Men's" naming was rejected as a matter for news organisations, not government (R, [UK Parliament](https://petition.parliament.uk/archived/petitions/631307)).
- **Shared convention?** Not a code, but a word convention: "Men's"/"Women's" (UK, Canada, international federations), and "Varonil"/"Femenil" in Mexico (J for "Varonil"; I did not verify how often it appears for clubs).

### Mixed and open events

- The NCAA code list has an X prefix for mixed (XFE, XRI, XSK and others) (O). NCAA.com lists fencing, rifle and skiing unmarked because each has one coed championship (O). BUCS uses "Mixed 1st" (O).
- For the app, the word "Mixed" (5 characters) is clearer than an X code (J).

---

## 3. Where the label goes: patterns in apps people use

What I could check this session:

| App / site | Pattern | Example | Mark |
|---|---|---|---|
| ESPN | League tag "NCAAW" in section labels; old scoreboards linked "M COLLEGE BB" and "W COLLEGE BB" side by side | "NCAAW News" | (O) [ESPN player page](https://global.espn.com/womens-college-basketball/player/_/id/5109044/isabelle-bolender), [ESPN 2000 scoreboard](https://www.espn.com/ncw/2001/20001210/sco.html) |
| CBS Sports | League tag as a prefix on video titles: "NCAAW Highlights: Baylor at Texas", "NCAAM Highlights: …" | Prefix, symmetric on page | (O) links above |
| Local TV listings | Prefix code after spelling it out once | "WBB: Troy vs. Marshall" | (O) [WCHS](https://wchstv.com/sports/top-sports/local-college-sports-schedule-for-jan-25-31) |
| Athletic departments | Prefix code | "WBB vs. UTSA" | (O) [Southern Miss](https://southernmiss.com/news/2022/1/27/general-mens-and-womens-basketball-announce-schedule-changes) |
| SeatGeek | Inside the team name, women only in the short form | "vs Kennesaw State Womens BB" | (O) |
| Resale listing | Inside the team name, at the end of the title | "Arizona Wildcats at UCLA Bruins Womens Basketball" | (O) [RateYourSeats](https://www.rateyourseats.com/tickets/ucla-bruins-womens-basketball) |
| FotMob | Inside the team name, parenthesised, women only | "OL Lyonnes (W)" | (O) |
| Sofascore | No team marker; the league line carries it | Liga F match page | (O) |
| BUCS / UK unis | Inside the team name, both sides | "Women's 1st", "Men's 1st" | (O) |
| Apple Sports | Men's and women's tournaments are separate followable leagues with brackets | In-app label wording not seen | (R) [MacTrast](https://www.mactrast.com/?p=171937) |

**Not reached in this pass:** Ticketmaster event titles, Google's sports cards, Yahoo Sports (no live page found), The Athletic, OneFootball, school calendar (.ics) exports, and the ESPN and Apple Sports apps themselves (only their web pages or press coverage). I could not take screenshots; the links above are the evidence.

**Patterns, summarised (J):**

- *After a middle dot* ("Cal at UCLA · WBB"): I did not see this form in any app I checked. It is the app's own current form.
- *In parentheses* ("Cal at UCLA (WBB)"): FotMob puts "(W)" in team names; I found no app that puts the sport code in parentheses after the whole matchup. It matches how the app already shows inline event labels ("Brewers at Dodgers (NLCS G3)").
- *As a prefix* ("WBB: Cal at UCLA"): the most common form among schools and local media, and CBS uses it with league tags. It suits lists that mix many sports.
- *Inside the team name* ("UCLA WBB", "UCLA Women"): common in ticketing and soccer apps, and the form most likely to end up marking only the women's side.
- *Own line or tag*: ESPN and Apple separate men's and women's into different leagues, so the matchup line carries no marker at all. That only works when the screen shows one league at a time, which the app's map does not (J).

**The hard case: sport plus stage.** I found no app that shows both a gender code and a tournament round on one matchup line. Apps either put the round in a separate field or rely on the league heading (J, from the apps checked). The four candidates, at phone width:

| Form | Chars (with "Sacramento St at UCLA") | Comment (J) |
|---|---|---|
| "Sacramento St at UCLA (WBB · First round)" | 41 | One parenthetical; matches the inline rule; too long for one 32-char line, fine in lists where the label has its own line. |
| "Sacramento St at UCLA · WBB (First round)" | 41 | Today's form; two separators to learn. |
| Title, then label line "WBB · First round" (17) | 21 + 17 | Fits easily; this is what the app's list rule already does for stages. |
| Stage only, sport elsewhere (icon, colour, section) | 21 + 11 | Shortest; relies on colour or an icon, which fails Kylie's "say which" aim for screen-reader and colour-blind users unless spoken text is added. |

---

## 4. Will people understand the codes?

**Casual fans.** I found no usability study, app-review evidence or survey on whether casual fans read MBB, WBB, MSOC or WVB. What I found:

- Codes are used for general audiences by schools and local TV (O, links above). The WCHS schedule spells the sport out on first use and then switches to codes, which suggests the editors did not assume every reader knows them (J).
- Several low-quality explainer pages exist purely to answer "what does MBB mean" (R, e.g. [this page](https://grandavehousing.calpoly.edu/news/decoding-mbb-in-sports-what)). That is a weak signal that the code confuses some people (J).
- My judgment: MBB/WBB, MVB/WVB, MXC/WXC and MLAX/WLAX are recognisable to anyone who follows college sport; MSO, MIH, MGO and MTE (the NCAA's own codes) are not. Golf, swim and track are meets more than matchups, so they will appear less often in "A at B" titles.

**Screen readers.**

- JAWS ignores `<abbr title>` expansions with default settings across recent versions and browsers (R, [PowerMapper test log](https://www.powermapper.com/products/sortsite/rules/acccompat-acronym-abbr-title/)). NVDA and JAWS mostly read the abbreviation itself; TalkBack reportedly reads the expansion (R, [WebAIM list](https://webaim.org/discussion/mail_message?id=41352)). Accessibility writers recommend spelling the term out rather than relying on `<abbr>` (R, [Go Make Things](https://gomakethings.com/abbreviations-suck/)).
- `aria-label` on a plain `<span>` is often ignored because the span has no role (R, [WebAIM list](https://webaim.org/discussion/mail_message?id=37272)).
- How "WBB" is spoken: a string with no vowels is usually spelled out letter by letter; "MSOC" or "WLAX" may be read as a made-up word ("em-sock") (J, untested).
- Practical pattern (J): render the visible code with `aria-hidden="true"` next to visually hidden text ("women's basketball"), or, in native iOS/Android views, set the cell's accessibility label to the spoken words ("California at UCLA, women's basketball, first round"). This gives every code a spoken form without changing what sighted users see.

**Space.** At about 32 characters per title line: "California at UCLA · WBB" is 24, "Mater Dei at Sierra Canyon · GBB" is exactly 32, and "California at UCLA (WBB · First round)" is 38, which does not fit one line. The label-line form keeps the title at 21 or less for these examples. The longest recommended code is 5 characters (MGOLF, MSWIM), and "Stan@UCLA WGOLF" fits a 16-character chip at 15 (J; counts are exact).

---

## 5. A recommendation to react to

### 5.1 The code list

Principle (J): M or W prefix plus the most readable short sport form, avoiding collisions. Where the NCAA's code is already readable, keep it.

| Sport | Men's | Women's | Confidence | Why / alternative |
|---|---|---|---|---|
| Basketball | MBB | WBB | High | NCAA code and the app's current label. |
| Volleyball | MVB | WVB | High | NCAA code. |
| Soccer | MSOC | WSOC | Medium-high | NCAA's MSO/WSO is less readable. |
| Ice hockey | MHKY | WHKY | Low | Readability guess; NCAA is MIH/WIH. Worth checking local team social handles before deciding. |
| Lacrosse | MLAX | WLAX | Medium-high | "LAX" is common shorthand; NCAA is MLA/WLA. |
| Water polo | MWP | WWP | High | NCAA code. |
| Tennis | MTEN | WTEN | Medium | NCAA is MTE/WTE. |
| Golf | MGOLF | WGOLF | Medium | Spells the word. |
| Swimming & diving | MSWIM | WSWIM | Medium | Alternative MSD/WSD. |
| Track & field | MTRK | WTRK | Low-medium | Avoids "WTF". |
| Cross country | MXC | WXC | High | Avoids "WCC" (West Coast Conference). |
| Gymnastics | MGYM | WGYM | Medium | NCAA is MGY/WGY. |
| Fencing | MFEN | WFEN | Low | Use "Mixed" for combined meets. |
| Rowing | MROW | WROW | Low-medium | Use the same word for both sides, though the NCAA list says "Crew" for men. |
| Beach volleyball | MBVB | WBVB | Low | Rare in the men's game. |
| Rugby | MRUG | WRUG | Low | NCAA is MRU/WRU. |
| Wrestling | MWR | WWR | Medium | NCAA code. |
| Baseball / softball / football / field hockey | none | none | Medium | Names already differ; add a sport word only to break a same-day tie. |
| Flag football | — | "Flag" (sport word) | Medium | Pair with "Football" for the tackle game when both appear. |
| High school | BBB, BVB, BSOC… | GBB, GVB, GSOC… | Low-medium | Same scheme with B/G; "Boys"/"Girls" in words. |
| Mixed / coed | "Mixed" | | Medium | Clearer than X codes. |

### 5.2 The format

Assumptions: chips use a compact "Away@Home" stand-in because I do not know the app's chip format, and chips show the code only when two same-day events would collide (the current rule). "First rd" is my guess at a short stage form, modelled on "NLCS G3". In the list column, `<br>` separates the title from the label line.

**Option A: middle dot, as today (sport after the title; stage in parentheses or on the label line)**

| Game | Chip (≤16) | List (title ≤32, then label line) | Full / inline |
|---|---|---|---|
| Cal at UCLA, WBB | Cal@UCLA·WBB (12) | California at UCLA · WBB | California at UCLA · WBB |
| Same, first round | Cal@UCLA·WBB (12) | California at UCLA · WBB<br>First round | California at UCLA · WBB (First round) |
| UCLA at USC, MVB | UCLA@USC·MVB (12) | UCLA at USC · MVB | UCLA at USC · MVB |
| Stanford at UCLA, WSOC | Stan@UCLA·WSOC (14) | Stanford at UCLA · WSOC | Stanford at UCLA · WSOC |
| Dodgers at Angels | LAD@LAA (7) | Dodgers at Angels | Dodgers at Angels |
| HS girls' basketball | MD@SC·GBB (9) | Mater Dei at Sierra Canyon · GBB (32) | Mater Dei at Sierra Canyon · GBB |

**Option B: one label slot (sport joins the event label; Kylie's parentheses idea)**

| Game | Chip (≤16) | List (title ≤32, then label line) | Full / inline |
|---|---|---|---|
| Cal at UCLA, WBB | Cal@UCLA WBB (12) | California at UCLA<br>WBB | California at UCLA (WBB) |
| Same, first round | Cal@UCLA WBB (12) | California at UCLA<br>WBB · First round | California at UCLA (WBB · First round) |
| UCLA at USC, MVB | UCLA@USC MVB (12) | UCLA at USC<br>MVB | UCLA at USC (MVB) |
| Stanford at UCLA, WSOC | Stan@UCLA WSOC (14) | Stanford at UCLA<br>WSOC | Stanford at UCLA (WSOC) |
| Dodgers at Angels | LAD@LAA (7) | Dodgers at Angels | Dodgers at Angels |
| HS girls' basketball | MD@SC GBB (9) | Mater Dei at Sierra Canyon<br>GBB | Mater Dei at Sierra Canyon (GBB) |

Variant B2 keeps the current "stage first" wording: "First round · WBB".

**Option C: prefix code**

| Game | Chip (≤16) | List (title ≤32, then label line) | Full / inline |
|---|---|---|---|
| Cal at UCLA, WBB | WBB Cal@UCLA (12) | WBB: California at UCLA | WBB: California at UCLA |
| Same, first round | WBB Cal@UCLA (12) | WBB: California at UCLA<br>First round | WBB: California at UCLA (First round) |
| UCLA at USC, MVB | MVB UCLA@USC (12) | MVB: UCLA at USC | MVB: UCLA at USC |
| Stanford at UCLA, WSOC | WSOC Stan@UCLA (14) | WSOC: Stanford at UCLA | WSOC: Stanford at UCLA |
| Dodgers at Angels | LAD@LAA (7) | Dodgers at Angels | Dodgers at Angels |
| HS girls' basketball | GBB MD@SC (9) | GBB: Mater Dei at Sierra Canyon (31) | GBB: Mater Dei at Sierra Canyon |

**Option D: words where there is room, codes where there is not**

| Game | Chip (≤16) | List (title ≤32, then label line) | Full / inline |
|---|---|---|---|
| Cal at UCLA, WBB | Cal@UCLA WBB (12) | California at UCLA<br>Women's basketball | California at UCLA (Women's basketball) |
| Same, first round | Cal@UCLA WBB (12) | California at UCLA<br>Women's basketball · First round (32) | California at UCLA (Women's basketball · First round) |
| UCLA at USC, MVB | UCLA@USC MVB (12) | UCLA at USC<br>Men's volleyball | UCLA at USC (Men's volleyball) |
| Stanford at UCLA, WSOC | Stan@UCLA WSOC (14) | Stanford at UCLA<br>Women's soccer | Stanford at UCLA (Women's soccer) |
| Dodgers at Angels | LAD@LAA (7) | Dodgers at Angels | Dodgers at Angels |
| HS girls' basketball | MD@SC GBB (9) | Mater Dei at Sierra Canyon<br>Girls' basketball | Mater Dei at Sierra Canyon (Girls' basketball) |

D's label line overflows 32 characters for longer pairs, e.g. "Women's water polo · Second round" is 33, so it needs a fallback to codes.

### 5.3 What each costs

| | Line length | Consistency with existing label rules | Casual-fan understanding |
|---|---|---|---|
| **A: dot** | Medium. Titles grow by 6–7 chars; hard case is 38 inline. | Two systems: dot for sport, parentheses or label line for stage. | Codes only. |
| **B: label slot** | Shortest list titles (no growth); hard case 38 inline. | One system: everything that isn't the matchup is "the label", shown on its own line in lists and in parentheses inline. Needs the "one label per event" rule to allow a compound label, and a call on stage-first vs sport-first. | Codes only, unless paired with spoken and detail-view words. |
| **C: prefix** | Like A. | Breaks "Away at Home" as the first thing in a title, and sorts and scans differently from pro games. | Codes, but the most familiar placement from school and local-TV listings. |
| **D: words/codes** | Longest; needs truncation rules. | Same slot as B, plus a second rule for when to switch to codes. | Best. |

### 5.4 Which I would pick, and why (J)

**Option B, with sport first inside the label ("WBB · First round"), and words for the spoken label and the event detail view.**

- It answers Kylie's parentheses question with a yes, and it puts the sport where the app already puts every other qualifier, so there is one rule to learn instead of two.
- It keeps "Away at Home" as the start of every title, so college games read like pro games.
- Every college or high school game gets a code for both sides; pro and differently named teams get none on either side.
- I would put the sport code before the stage, which bends the current "stage first" wording. The code is short and fixed-width (3–5 characters), it identifies the game rather than the moment in a season, and when a label line truncates, the stage is the better thing to lose. If Kylie prefers to keep stage first, variant B2 costs nothing in length.
- Taking D's words for spoken labels and the detail page covers the casual-fan and screen-reader gaps without lengthening list rows.

What it costs: the label line becomes compound, the "one label per event" rule needs rewording, and existing titles with "· MBB" need migrating. A mockup of B and B2 on the map bar and in a list would show whether the parentheses feel heavy.

### 5.5 Open questions for Kylie

1. Stage first or sport first inside the label (B vs B2)?
2. For shared-name clubs in the Mexican metros (América vs América Femenil), use the same M/W codes (MSOC/WSOC), or words ("Varonil"/"Femenil")?
3. Hockey code: MHKY/WHKY or the NCAA's MIH/WIH?
4. Track and field: MTRK/WTRK, or split indoor/outdoor as the NCAA does?

---

## Sources not reached

Attempted searches that returned nothing usable: Yahoo Sports' women's college basketball labels; legacy `m-baskbl`/`w-baskbl` URL codes. Not attempted for lack of time: Ticketmaster, Google sports cards, The Athletic, OneFootball, calendar exports, and the ESPN and Apple Sports apps (as distinct from their websites).
