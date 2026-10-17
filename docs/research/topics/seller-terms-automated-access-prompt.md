# Research prompt: automated-access terms of AXS, DICE, Goldenvoice, Insomniac and Framework

Written by Claude Code, Oct 17, 2026, at Kylie's request (she won't paste the clauses by hand; an agent should fetch them). Save the answer beside this file as `seller-terms-automated-access-answer.md` (a second model's answer takes a `-claude` or `-codex` suffix). Why it matters: build 5, item 1 wanted these promoters' listings as sources; a normal fetch of each site returned 403 or an unreadable page, so their terms were never read, and nothing lists from them until the terms are known (`BACKLOG.md`, "Item 1 sources not built").

## Prompt to paste

You are checking whether a small, non-commercial app may read public event listings from five ticket sellers and promoters by automated means. Do not sign up, log in, buy anything, or bypass any block; if a page cannot be opened normally, say so and stop on that site. Public sources only.

For each of these five: **AXS (axs.com)**, **DICE (dice.fm)**, **Goldenvoice (goldenvoice.com)**, **Insomniac (insomniac.com)** and **Framework (frameworkla.com, or its DICE storefront if it has no site of its own)**:

1. Open the current Terms of Use (or Terms of Service) and quote, verbatim, every clause that covers automated access, scraping, crawling, bots, data extraction, caching or republishing of listings. Give the page URL, the "last updated" date on the page, and the heading or section number of each clause.
2. Open `/robots.txt` on the same domain and quote it in full. Note whether event, venue and city pages are allowed or disallowed, and whether a sitemap is listed.
3. Say whether the seller publishes any official way to get listings: a public API, an affiliate or partner feed, an RSS or iCal feed, structured data (JSON-LD or schema.org Event markup) on its event pages, or a widget. Give the URL and the terms that govern that channel, with any cost. 🚩 Flag anything that costs money or needs a credit card.
4. Say whether the same listings also appear on Ticketmaster or SeatGeek (which the app already reads), with one example event per seller.
5. Give one plain-language verdict per seller: **allowed**, **allowed through an official channel only**, **forbidden without written consent**, or **could not read the terms**, with the clause that decides it.

Rules for the answer: quote, do not paraphrase, in sections 1 and 2. Keep each seller in its own section. Where a page would not open, record the URL and what happened (a 403, a page that renders only with JavaScript, a login wall). Do not use a cached copy, an archive site, or a third party's summary of the terms. End with a table: seller, verdict, deciding clause, official channel (yes/no), on Ticketmaster or SeatGeek (yes/no).
