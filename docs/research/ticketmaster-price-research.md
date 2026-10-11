# Ticketmaster price display: research prompt + answer (Oct 10, 2026)

_Saved verbatim from Kylie's Oct 10 bundle (Claude Code, Oct 10, 2026). The decision it feeds is in `docs/reviews/build-notes-2-oct10.md`, section 8.1; the fee-rule blocker is logged in `docs/product-decisions.md`._

## Prompt (run by Kylie on an outside model)
I'm building Fan/Friction, a free personal app (not yet monetized) where people log live sports and concerts they attend. It uses the Ticketmaster Discovery API v2 to list upcoming concerts and shows. An earlier internal terms review concluded: don't store Ticketmaster prices or deep links; a plain text link to the Ticketmaster event page is allowed; "never a buy button."
Question: Under Ticketmaster's current Discovery API Terms of Use, developer agreement, and branding/attribution guidelines, can my app show a starting price (e.g. "Tickets from $48 ›") as a text link to the Ticketmaster event page?
1. Is displaying priceRanges allowed? Conditions? 2. Caching/storing limits? 3. Does a price next to a link count as a "buy button"? 4. Affiliate links required/optional? 5. Resale price rules? 6. How do comparable apps do it?
Finish with a verdict and the safest compliant wording; flag anything unverified.

## Answer (summary of the returned research)
**Verdict: allowed with conditions.** Nothing in Ticketmaster's public developer terms forbids a "from $X" text link. The bigger risk is US fee-disclosure law, since priceRanges may not include fees.

1. priceRanges is a documented Discovery API field (type "standard", currency, min, max). The docs don't say if fees are included (unverified). The General Terms of Use (June 27, 2023) have no clause on price display, disclaimers or logos. The branding guide (design.ticketmaster.com) returned 401 and couldn't be verified. Binding conditions come from law: the FTC Unfair or Deceptive Fees rule (live-event tickets; total price shown upfront and more prominently; actively enforced, including a $10M April 2026 settlement and the FTC suit against Ticketmaster) and California SB 478 (no displayed price without all mandatory fees). A free, unmonetized app is arguably not a "business" advertising tickets; joining an affiliate program weakens that argument.
2. "You shall not" #6: don't cache or store Event Content beyond "reasonable periods" (no number given). Content must be removed within 24h on request. For reference, the partner feed refreshes hourly and Spotify refreshes 4x/day. Practical rule: fetch at view time, cache for minutes, never store prices in user logs.
3. No public text defines a "buy button" or CTA wording. The earlier "never a buy button" rule doesn't trace to any public clause (it may come from the branding guide). The terms prohibit replicating Ticketmaster.com and running your own checkout. Linking to event pages is the intended API use (the event URL field is "for purchasing tickets").
4. Affiliate (Impact) is optional, adds tracking, and pays no commission on presales or the first 24h after onsale. "You shall not" #11 bars deriving revenue except per agreement (contract terms aren't public). Earning commission makes the FTC rule harder to avoid.
5. No public resale clause. The API includes Ticketmaster Resale (TMR), which can be excluded via the source parameter. Treat resale pricing as out of scope.
6. Bandsintown (Partner API deal), Spotify (direct partnership and affiliate commission), Songkick (litigation history) and SeatGeek (competitor) aren't precedents for public Discovery API use.

Safest wording: "See tickets on Ticketmaster ›" (zero risk). With a price: all-in only if possible; otherwise, if deciding the rule doesn't reach a free app, show the price fetched live and never stored.
Unverified: branding guide, whether priceRanges includes fees, Impact contract terms, official consumer terms text, comparable apps' contracts. Contact: devportalinquiry@ticketmaster.com (Kylie chose not to email).

Sources: developer.ticketmaster.com/support/terms-of-use/ · developer.ticketmaster.com/support/faq/ · developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/ · developer.ticketmaster.com/products-and-docs/apis/getting-started/ · developer.ticketmaster.com/partners/distribution-partners/affiliate-sign-up · legal.ticketmaster.com/terms-of-use/ · ftc.gov fees rule FAQ · hudsoncook.com (Apr 2026 FTC settlement) · abc7news.com (FTC v. Live Nation/Ticketmaster) · insideclassactions.com (SB 478) · billboard.com (Bandsintown, Spotify) · hypebot.com

## Kylie's decision
Event-page line "Prices from $48+fees ›" (live lookup, never stored, upcoming only, not on the chip card); fallback "See tickets on Ticketmaster ›"; no resale prices; no affiliate program for now. BLOCKER for later milestones: revisit all-in pricing (FTC rule + CA SB 478) before monetization, affiliate, or launch at scale.
