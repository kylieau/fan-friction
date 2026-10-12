# Game naming: "Away at Home" vs "vs." — research + decision (Oct 11, 2026)

## Prompt (Kylie ran it on an outside model)
Fan/Friction event names must be identical everywhere (chips, lists, event page, feed lines, share cards, log). For team sports, should the canonical name be "Away at Home", "Home vs. Away", or something else? Asked for: the convention by league/sport/region, pros and cons for a personal diary, neutral sites, team-relative forms on a team page, and a rule set covering postseason labels and chip truncation.

## Answer (summary)
- **North American convention is visitor first, home second.** ESPN "Los Angeles Dodgers @ Milwaukee Brewers"; MLB "Dodgers (1-0) at Brewers (0-1)", "LAD@MIL - Game 2"; Baseball-Reference "Dodgers at Brewers"; NFL "Giants at Rams"; ESPN NBA "Lakers @ Warriors".
- **Soccer and most of the world list home first.** "vs." has no agreed order: Ticketmaster writes home-first "Brewers vs. Dodgers", MLB highlight titles write away-first "Dodgers vs. Brewers" for a game in Milwaukee, and ESPN mixes. AP-style previews add a separate location line when they use "vs.". SeatGeek uses "at".
- **"at" is unambiguous in any sport and country**, and it survives being seen out of context. Its cons are cosmetic: the local team often comes second, and it won't match Ticketmaster stubs. Solve that with emphasis and team-relative views, not by reordering.
- **Neutral sites:** "at" falsely implies a host (e.g. the NFL Melbourne game, with the Rams as designated home). ESPN uses "vs." for neutral games (e.g. "Indiana vs Alabama", Rose Bowl, Pasadena).
- **Team-relative forms** on a team page are standard (SeatGeek "vs Los Angeles Angels · Home · American Family Field"). Risks: a "vs" symbol collision, leakage onto shared surfaces, viewer-relative names, and the log must stay canonical.
- **Truncation:** never an ellipsis on "Away at Home", since it cuts off the home team. Step down instead.
- Unverified: an AP rule on order, The Athletic/Apple Sports house style. Letterboxd is a structural precedent only (one canonical title, the date disambiguates).

## Decision (Kylie approved Oct 11, 2026; for the next build)
1. **Home-venue games:** {Away} at {Home} everywhere, every sport including soccer. Pro teams use nicknames ("Dodgers at Brewers"); college uses school names ("USC at UCLA").
2. **Neutral sites:** "vs." ONLY for neutral sites ("vs." itself means neutral). Event name first when it has one: "Rose Bowl · Alabama vs. Indiana"; "49ers vs. Rams · Melbourne". Designated visitor first.
3. **Labels are a separate field, rendered first:** "NLCS G2 · Dodgers at Brewers". Short game numbers (G2), "WC G1", "World Series G7", "NFC Championship", "Super Bowl 2027". Doubleheaders are "DH1/DH2".
4. **Identity is event ID + date**, not the string.
5. **Team-relative forms** ("vs Padres" = home, "@ Brewers" = away; neutral "vs 49ers · Melbourne") ONLY on a favorite team's own page, via a separate formatter. Never on share cards, the feed, notifications, search or the log.
6. **Emphasis, not reordering**, for the user's team (e.g. bold/tint).
7. **Map chips (Mock Mosaic change, approved):** keep the settled chip rules (team names in Barlow Semi Condensed, the L1b chip). When too long, step down in this order: drop or shorten the label, then shorter nicknames, and only last resort official abbreviations (LAD @ MIL). Never truncate the home team with "…".
8. One formatter, deterministic output per size tier, so every chip matches every chip and every full name matches every full name.

Status: closed, folded into `docs/product/product-decisions.md` (Oct 12, 2026 decisions, §3.2) and `src/lib/eventTitle.ts`, Oct 12, 2026
