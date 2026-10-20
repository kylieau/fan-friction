**Saved by Claude Code on Oct 19, 2026 (evening), as Kylie pasted it** (GrokBot's answer to `seller-terms-automated-access-prompt.md`, written alongside Claude Code's `seller-terms-automated-access-answer.md`). **Checked by Claude Code the same evening:** Framework's "Terms and Conditions" section on its privacy-policy page and its "copy, use, or retransmit" sentence (confirmed); its sitemap address returning 404 (confirmed); Goldenvoice's events file selling 25 events on Ticketmaster (confirmed). **Not re-checked:** the AXS US and DICE US terms quotes. Both pages answered 403 to Claude Code's fetch tool and to `curl` that evening, so those two verdicts rest on GrokBot's reading alone.

# Answer: automated-access terms of AXS, DICE, Goldenvoice, Insomniac and Framework (Grok)

Answers `seller-terms-automated-access-prompt.md` (same folder). I did this research on my own and didn't read or copy the earlier answer (there wasn't one beside this prompt anyway). I fetched every page on **Mon Oct 19, 2026, 10:39–10:55 PM PT**. I used plain `curl` (its default user agent, no extra headers, no cookies) and the WebFetch tool, nothing else. I didn't log in, sign up, solve a CAPTCHA, use a browser, or open any cached or archived copy. Where curl was blocked and WebFetch got through, I say so. The quotes in sections 1 and 2 are copied verbatim from the pages as fetched. Section headings are given exactly as each page shows them, and where a page doesn't number its sections, I say so.

**Short version:** four of the five sellers' terms forbid automated collection of their listings. The fifth (Goldenvoice) has terms that load only with JavaScript, so I couldn't read them. None publishes an open listings feed for third-party apps: AXS and DICE limit theirs to partners. Framework is the one exception. Its site publishes an iCal feed (and an open WordPress events API), but its own terms still forbid copying or retransmitting "anything from or on the site without permission." Goldenvoice and Insomniac shows mostly already reach the app through Ticketmaster or AXS. DICE and Framework shows don't.

---

## 1. AXS (axs.com)

### 1.1 Terms of Use

- **URL:** `https://www.axs.com/legal/terms_of_use.html` (the US Terms of Use; `https://www.axs.com/about-terms-of-use_US_v1.html` redirects there). Page title: "Terms of Use - AXS US".
- **How it opened:** **plain curl got HTTP 403** from Cloudflare, with an AXS "Are you a real fan? … Completing the CAPTCHA proves you are a human" block page. `https://www.axs.com/about-terms-of-use` gives a 307 redirect to `/`, which also returns 403. **WebFetch opened the page**, and the quotes below come from that copy.
- **"Last updated" date:** no "last updated" date appeared in the page text I got back. (The opt-out clause refers to "the last updated date to these Terms", and the dispute section says it "does not apply to any disputes or claims pending as of September 24, 2025".)
- **Numbering:** the page has no section numbers. I give the headings it uses.

**Heading "CONTENT AND INTELLECTUAL PROPERTY RIGHTS" → subheading "Limited License; Restrictions"**

> We provide the Services to you for the purposes of providing you with information about us, as well as the exciting events, venues and other products and services offered or described on the Services. You are granted a revocable, limited, personal, non-exclusive and non-transferable license to use the Software and/or view or download the materials contained on the Services (the "Materials") to a single personal computer, and to print a hard copy of the materials contained on the Services, solely for your personal and non-commercial use, and provided all copyright, patent, trademark and other proprietary notices are left intact. You may not remove or obscure any copyright notice, trademark notice or other proprietary rights notices displayed on, or in conjunction with, the Materials. Except for the foregoing license or as limited by applicable law, you have no other rights in the Services or the Materials and you are not permitted to use, reproduce, modify, edit, display, publicly perform, distribute, reverse engineer, alter, enhance, exploit or create derivative works in any other media, by any means and for any purpose without our prior written permission. In all cases, the Site or Mobile App must be acknowledged as the source of the material.

> The grant of this limited license is conditional upon your agreement to and full compliance with these Terms. Any other use of the Software or any of the materials on the Services, including use on any other website, reproduction (for any purposes other than those noted above), modification, distribution, or republication, without our prior written permission is strictly prohibited, and is a violation of our proprietary rights and/or the rights or our licensors.

**Heading "USE OF SERVICES"** (bullets after "You may not use the Services to:")

> - obtain or attempt to obtain any materials or information through any means not intentionally made available through the Services;

> - "frame" or "mirror" the Services, or any part thereof; or

> - use any automatic means (e.g., robot, spider, offline reader, the Services search/retrieval application or other manual or automatic device or process) to (a) retrieve, index, data mine or in any way reproduce or circumvent the navigational structure or presentation of the Services or any content, and/or (b) to make multiple and repetitive inquiries to access, reload or "refresh" transactional event or ticketing pages. The only exception relates to public search engines used solely to create publicly available search indices (which we may revoke such rights at any time in our sole discretion).

> - train, develop, or enhance any artificial intelligence, machine learning or other automated decision-making system without AXS’s prior written consent. This restriction applies whether the data, content or materials regarding the Services is obtained through authorized or unauthorized means.

**Heading "THIRD-PARTY WEBSITES AND INTERACTIONS"** (paragraph beginning "Links/Framing:")

> Links/Framing: The Services contain links to other Internet websites. We provide such links for your convenience only, and we are not responsible for the content in any website linked to or from the Services. We disclaim all warranties, express or implied as to the accuracy, legality, reliability or validity of any content on any other such websites, and that such websites will be free of viruses or other harmful elements. You may establish a hypertext link to the Services so long as the link does not state or imply any sponsorship of your website by us. However, you may not, without our prior written permission, frame or inline link any of the content of the Services, or incorporate into another website or other service any of our material, content or intellectual property.

(Side note: the AXS **UK** terms at `https://www.axs.com/uk/about-terms-of-use_UK_v6.html` did open with plain curl (HTTP 200). They have the same "use any automatic means (e.g. robot, spider, offline reader …)" bullet. I relied on the US page because the app is US-based.)

### 1.2 robots.txt

`https://www.axs.com/robots.txt`: HTTP 200, `text/plain`. Full text, with its leading spaces kept as served:

```
Sitemap: https://www.static.discovery-prod.axs.com/uploads/sitemaps/sitemap_index.xml
  
  User-agent: *
  Disallow:
  Disallow: /users
  Disallow: /me
  Disallow: /search
  Disallow: /contributor
  Disallow: /*referrer=*
  Crawl-delay: 2

  User-agent: OAI-AdsBot
  Allow: /

  User-agent: OAI-SearchBot
  Allow: /
  
  User-agent: Twitterbot
  Allow: /
```

- **Event, venue and city pages:** not disallowed for `User-agent: *`. Only `/users`, `/me`, `/search`, `/contributor` and URLs containing `referrer=` are disallowed, and there's a `Crawl-delay: 2`. (Remember the terms forbid automated retrieval anyway, whatever robots.txt allows.)
- **Sitemap:** yes, `https://www.static.discovery-prod.axs.com/uploads/sitemaps/sitemap_index.xml`. It opened (HTTP 200) and lists per-country event sitemaps (`sitemap_event_au.xml`, `sitemap_event_de.xml`, …).

### 1.3 Official way to get listings

- **Public API:** none found. AXS's own partner page, `https://solutions.axs.com/us/partnerships-integrations/` (HTTP 200), describes "AXS Anywhere: Reach fans wherever they are discovering events through our integrated distribution partners." That's a partner-distribution program, not a self-serve API. `https://developers.axs.com/` returned **HTTP 403** (the same "Are you a real fan?" CAPTCHA page). An AEG-hosted AXS partnership brochure turned up in search (`view.ceros.com/aeg/axs-partnership-opportunities`) and lists an "AXS Event Discovery API" under "API Integration" for partners. Neither page posts any terms or price for it.
- **Affiliate/partner feed:** partner-only, as above. Access goes through AXS partnerships. 🚩 **No price is published.** It's a commercial partnership, so assume it may cost money or need a contract.
- **RSS/iCal:** none found.
- **Structured data on event pages:** I couldn't check. `https://www.axs.com/events/1427071/kacey-musgraves-tickets` returned 403 to curl, and WebFetch got only a bot-check page ("Ensuring a fair fan experience … Enable JavaScript and cookies to continue").
- **Widget:** none found.

### 1.4 On Ticketmaster or SeatGeek?

**Yes, some.** Example: **Kacey Musgraves, Crypto.com Arena, Mon Oct 19, 2026, 7:30 PM PT.** AXS sells it (`https://www.axs.com/events/1427071/kacey-musgraves-tickets`, per Goldenvoice/AEG's own events file, below). The same show is in the app's own Ticketmaster read saved today, `data/schedule-archive/la/2026-10-19.json`, as `ticketmasterId: "Z7r9jZ1A70kAg"`. Many AXS-only shows won't be on Ticketmaster, though. AXS is the primary seller for AEG rooms. I couldn't check SeatGeek: seatgeek.com returned 403 ("Please enable JS and disable any ad blocker") to curl, and the app's SeatGeek source is still off.

### 1.5 Verdict

**Forbidden without written consent.** The deciding clause is "Use of Services": "use any automatic means (e.g., robot, spider, offline reader …) to (a) retrieve, index, data mine or in any way reproduce … the Services or any content". The only exception is public search engines. Behind it sits "Limited License; Restrictions": republication "without our prior written permission is strictly prohibited". The only official channel is a partner API with no published terms or price.

---

## 2. DICE (dice.fm)

### 2.1 Terms of Use

- **URL:** `https://dicefm.zendesk.com/hc/en-gb/articles/4412973085841-United-States-Terms-of-Use` ("United States Terms of Use – DICE Help Center"). DICE's own link, `https://dice.fm/terms_and_conditions.html`, returns **HTTP 301** to `https://dicefm.zendesk.com/hc/sections/4412940081425-Terms-of-Use`. That page, and the article itself, returned **HTTP 403** (a Cloudflare "Just a moment..." challenge) to plain curl. `https://dice.fm/terms` and `https://dice.fm/` also returned 403 to curl. **WebFetch opened the US Terms article**, and the quotes below come from it.
- **"Last updated" date:** "Last Updated: March 10, 2026".

**Section 4, "PROPRIETARY RIGHTS AND LICENSES"**

> 4.1 As between you and DICE, all portions and components of the App and Services are owned solely by DICE. Without limiting the foregoing, the visual interfaces, graphics, design, compilation, information, data, computer code (including source code or object code), products, software, services, and all other elements of the App and Services ("Materials") provided by DICE are protected by intellectual property and other laws, and all Materials included in the App and Services are the property of DICE or its third party licensors. […]

(I cut 4.1 after its first two sentences. The rest is about trademarks.)

> 4.2 Subject to your complete and ongoing compliance with these Terms of Use, DICE grants you, solely for your personal, non-commercial use, a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to: (a) install and use one object code copy of the App on a mobile device that you own or control; and (b) access and use the App and the Services.

> 4.3 Except and solely to the extent such a restriction is impermissible under applicable law, you may not: (a) reproduce, distribute, publicly display, or publicly perform the App or Services; (b) make modifications to the App or Services; or (c) interfere with or circumvent any feature of the App or Services, including any security or access control mechanism. If you are prohibited under applicable law from using the App or Services, you may not use it.

> 4.5 All rights that we do not expressly grant to you in this Section 4 we hereby reserve, and we do not grant any implied licenses to you in these Terms of Use under any legal theory.

**Section 8, "USER CONDUCT"**

> 8.4 You also agree that you will not attempt to, or assist any third party in attempting to, do any of the following:
>
> - interfere or attempt to interfere with the proper functioning of the App or the Services or disrupt the operations or breach the security of the App or the Services;
> - reproduce, duplicate, copy, sell, resell, remove, modify or exploit the App, the Services, or their content or software in any way, except as expressly provided in these Terms of Use;
> - use software, devices, or other manual or automated processes to "crawl" any page of our website, App or Services, including but not limited to any use of any scripts or web crawlers;
> - Post any Objectionable Content on the App or Services;
> - use the App or Services for commercial benefit, such as by purchasing tickets for commercial, re-sale, or third party use;
> - use ticket purchasing software to purchase tickets; and
> - use the App or Services in any way that is fraudulent or illegal or that violates these Terms of Use.

> 8.5 We reserve the right to cancel any transaction or remove, suspend, edit or modify your access to the App and the Services at our discretion if we have reason to believe you have used the App or the Services in contravention of these Terms of Use. Any and all ticket(s) purchased as part of such transaction will be void.

### 2.2 robots.txt

`https://dice.fm/robots.txt`: HTTP 200, `text/plain; charset=utf-8` (this one opened with plain curl even though the rest of dice.fm returned 403). Full text:

```
# As a condition of accessing this website, you agree to abide by the following
# content signals:

# (a)  If a Content-Signal = yes, you may collect content for the corresponding
#      use.
# (b)  If a Content-Signal = no, you may not collect content for the
#      corresponding use.
# (c)  If the website operator does not include a Content-Signal for a
#      corresponding use, the website operator neither grants nor restricts
#      permission via Content-Signal with respect to the corresponding use.

# The content signals and their meanings are:

# search:   building a search index and providing search results (e.g., returning
#           hyperlinks and short excerpts from your website's contents). Search does not
#           include providing AI-generated search summaries.
# ai-input: inputting content into one or more AI models (e.g., retrieval
#           augmented generation, grounding, or other real-time taking of content for
#           generative AI search answers).
# ai-train: training or fine-tuning AI models.
# use:      how AI systems may consume the content (immediate, reference, or full).

# ANY RESTRICTIONS EXPRESSED VIA CONTENT SIGNALS ARE EXPRESS RESERVATIONS OF
# RIGHTS UNDER ARTICLE 4 OF THE EUROPEAN UNION DIRECTIVE 2019/790 ON COPYRIGHT
# AND RELATED RIGHTS IN THE DIGITAL SINGLE MARKET.

# BEGIN Cloudflare Managed content


User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference
Allow: /

# Training crawlers
User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: omgili
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: MistralAI-Training
Disallow: /

User-agent: meta-externalagent
Disallow: /

User-agent: GoogleOther
Disallow: /

User-agent: Baiduspider
Disallow: /

User-agent: PetalBot
Disallow: /

User-agent: AwarioSmartBot
User-agent: AwarioRssBot
Disallow: /

User-agent: Google-CloudVertexBot
Disallow: /

User-agent: QualifiedBot
Disallow: /

User-agent: Cotoyogi
Disallow: /

User-agent: ICC-Crawler
Disallow: /

User-agent: atlassian-bot
Disallow: /

User-agent: FishBot
Disallow: /

User-agent: BorderxBot
Disallow: /

User-agent: NavuBot
Disallow: /

User-agent: SemrushBot-SWA
Disallow: /

User-agent: WARDBot
Disallow: /

User-agent: magpie-crawler
Disallow: /

User-agent: KimiBot
Disallow: /

User-agent: CitibotSiteCrawler
Disallow: /

# END Cloudflare Managed Content
```

- **Event, venue and city pages:** allowed for `User-agent: *` (`Allow: /`), with `Content-Signal: search=yes,ai-train=no,use=reference`. Named AI-training crawlers are blocked from the whole site. robots.txt allows crawling, but Terms 8.4 bars it, and the Terms are the agreement that binds users.
- **Sitemap:** none listed.

### 2.3 Official way to get listings

- **Widget:** yes, for partners. The "Event Listing Creator" at `https://dice.fm/partners/widget` (403 to curl, opened with WebFetch) builds an embeddable event list, but its configuration asks for a "Partner ID: This is a 8-digit string that allows us to attribute clicks, views, and purchases to the relevant partner" and an "API key: This is a 40-digit string that will give you access to the API". Those credentials come from a DICE partner account. I found no separate terms or price for the widget on the page.
- **API:** the "Ticket Holders API" at `https://partners-endpoint.dice.fm/graphql/docs/index.html` (HTTP 200 to curl) is a GraphQL API for a partner's *own* events and ticket holders. Its docs say requests use an "API token" that "can be generated in MIO" (DICE's partner tool). It's not a public listings API, and I found no price.
- **RSS/iCal:** none found.
- **Structured data:** yes. A DICE event page (reached through `https://link.dice.fm/b3272cba0b50` with WebFetch) carries schema.org `MusicEvent` JSON-LD: name, startDate, endDate, location with address and geo, offers with lowPrice/highPrice, performer, organizer. But reading it still means fetching DICE pages by script, which Terms 8.4 forbids.
- 🚩 **Cost:** none published. The widget and API need a DICE partner account (an event seller's account), which this app doesn't have and shouldn't sign up for.

### 2.4 On Ticketmaster or SeatGeek?

**No, from what I could check.** Example: **HUGEL presents Make The Girls Dance, Reframe Studios Outdoors (Atwater Village, LA), Sat Oct 24, 2026, 6:00 PM PT**, `https://dice.fm/event/nv6wl8-hugel-presents-make-the-girls-dance-24th-oct-reframe-studios-outdoors-los-angeles-tickets`, presented by Framework. It isn't in the app's Ticketmaster read saved today (`la/2026-10-19.json`, window Oct 19–Nov 2). I couldn't open seatgeek.com (403). A search-index snippet of SeatGeek's `seatgeek.com/hugel-tickets/la` page reads "No Hugel concerts near Los Angeles", but that's a search snippet, not a page I opened. The same show is also on AXS (`https://www.axs.com/events/1488956/hugel-presents-make-the-girls-dance-tickets`, "Framework x Goldenvoice Present", per search), which the app doesn't read either. DICE generally sells its own inventory.

### 2.5 Verdict

**Forbidden without written consent.** The prohibition is actually flat: it names no consent route. The deciding clause is §8.4: "use software, devices, or other manual or automated processes to "crawl" any page of our website, App or Services, including but not limited to any use of any scripts or web crawlers". Backing it are §4.2 (the license is "solely for your personal, non-commercial use") and §4.3(a) (no reproducing or publicly displaying the Services). The widget and API are partner-only, so there's no official channel this app can use.

---

## 3. Goldenvoice (goldenvoice.com)

### 3.1 Terms of Use

- **What goldenvoice.com links to:** the site's footer links Terms to `https://www.aegpresents.com/terms/`. That URL returns a 131-byte page whose only content is `<meta http-equiv="refresh" content="0;url=https://aegworldwide.com/terms-of-use">`.
- **`https://aegworldwide.com/terms-of-use`:** HTTP 200 (34 KB), but **the terms text isn't in the HTML.** The page body has only an empty `<div id="otnotice-d3b98456-c654-4a68-818a-f286fdb59ada" class="otnotice"></div>`, which a OneTrust script fills in with JavaScript (`OneTrust.NoticeApi.LoadNotices([".../published/privacynotice.json"])`). WebFetch returned only the title, "Terms and Conditions of Use | AEG Worldwide". Fetching the JSON file that script names, with a plain curl request, returned **HTTP 404**. I didn't send any extra headers to get around that.
- **`https://www.goldenvoice.com/terms`, `/terms-of-use`, `/legal`:** each returns HTTP 200 with the site's homepage (the site serves the homepage for any path), not terms.
- **Result: a JavaScript-only page. I couldn't read the terms, so there are no clauses to quote and no "last updated" date.**

### 3.2 robots.txt

`https://www.goldenvoice.com/robots.txt`: HTTP 200, but `text/html; charset=UTF-8`. The body is the site's homepage HTML (byte-for-byte the same as `https://www.goldenvoice.com/`; it begins `<!DOCTYPE html>` … `<title>Goldenvoice - California Concert and Music Festival Promoter</title>`). **There's no robots.txt file to quote**, so there are no allow or disallow rules and no sitemap.

### 3.3 Official way to get listings

- **Public API / feed / RSS / iCal / widget:** none published that I found.
- **Structured data:** none. Neither the homepage nor `/shows` has any `application/ld+json`. Goldenvoice has no event pages of its own: `https://www.goldenvoice.com/events/detail/chelsea-wolfe-1500456` returns the homepage, and each show's "eventUrl" points to an `axs.com/events/...` page.
- **Not an official channel:** the `/shows` page loads its listings with JavaScript from a data file, `https://aegwebprod.blob.core.windows.net/json/events/19/events.json` (HTTP 200, 5.7 MB, 478 events). That's the site's internal data file, not a channel offered to third parties, and the terms that would govern it are the unreadable AEG terms above. I opened it once only to find the Ticketmaster example below. That isn't a recommendation to use it.
- **Cost:** none found.

### 3.4 On Ticketmaster or SeatGeek?

**Yes, some.** Example: **Chelsea Wolfe, "THE DARK World Tour", Orpheum Theatre (Los Angeles), Fri Oct 23, 2026.** Goldenvoice's own data gives the ticket link as `https://www.ticketmaster.com/event/090064D2B2B3A5F4`. The show is in the app's Ticketmaster read saved today as `ticketmasterId: "vvG10Z_u1wiB9V"`, with a start of 20:30. Goldenvoice's file says 8:00 PM; that's probably doors versus show time, so it's worth a check. But most Goldenvoice shows sell on AXS. In that file, 478 of 478 events have an AXS event page, and only 25 link a Ticketmaster ticket URL.

### 3.5 Verdict

**Couldn't read the terms.** No clause decides it, because the AEG Terms and Conditions of Use (`https://aegworldwide.com/terms-of-use`, linked from goldenvoice.com through aegpresents.com/terms/) render only with JavaScript. In practice Goldenvoice's listings are AXS listings (see AXS, forbidden), and the ones on Ticketmaster already reach the app.

---

## 4. Insomniac (insomniac.com)

### 4.1 Terms of Use

- **URL:** `https://www.insomniac.com/terms-of-use/`: HTTP 200 with plain curl. The full text is in the HTML.
- **"Last updated" date:** **none on the page.** The terms say "The “Last Updated” date above will tell you when these Terms were last revised", but no date appears above that line, or anywhere in the page HTML. The arbitration section mentions "pending as of June 3, 2026".
- **Numbering:** none. I give the headings.

**Opening paragraphs (no heading)**

> Welcome! The following are the terms of use (“Terms”) that govern your use of the websites and applications where this appears (collectively, the “Site”). Our Privacy Policy and any other policies, rules or guidelines that may be applicable to particular offers or features on the Site are also incorporated into these Terms. By visiting or using the Site, you expressly agree to these Terms, as updated from time to time.

**Heading "Code of Conduct"** (bullets after "You agree that you will comply with all applicable laws, rules and regulations, and that you will not:")

> Harvest or collect information about Site users;

> Use any area of the Site for commercial purposes, such as to conduct sales of tickets, products or services.

**Heading "Ownership of Content and Grant of Conditional License"**

> The Site and all data, text, designs, pages, print screens, images, artwork, photographs, audio and video clips, and HTML code, source code, or software that reside or are viewable or otherwise discoverable on the Site (collectively, the “Content”) are owned by us or our licensors. We own a copyright and, in many instances, patents and other intellectual property in the Site and Content. We may change the Content and features of the Site at any time.

> We grant you a limited, conditional, no-cost, non-exclusive, non-transferable, non-sublicensable license to view this Site and its Content as permitted by these Terms for non-commercial purposes only if, as a condition precedent, you agree that you will not:

(The relevant bullets of that list, verbatim:)

> Link to any portion of the Site other than the URL assigned to the home page of the Site;

> “Frame” or “mirror” any part of the Site;

> Use any robot, spider, offline reader, site search/retrieval application or other manual or automatic device, tool, or process to retrieve, index, data mine or in any way reproduce or circumvent the navigational structure or presentation of the Content or the Site, including with respect to any CAPTCHA displayed on the Site. Operators of public search engines may use spiders to copy materials from the Site for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of the materials, but not caches or archives of such materials. We may revoke this exception at any time and require removal of archived materials gathered in the past;

> Take any action that imposes or may impose (in our sole discretion) an unreasonable or disproportionately large load on our infrastructure;

> Access, reload or refresh transactional pages, or make any other request to transactional servers, more than once during any three-second interval;

> Request more than 1,000 pages of the Site in any 24-hour period, whether alone or with a group of individuals;

> Reproduce, modify, display, publicly perform, distribute or create derivative works of the Site or the Content;

> Use the Site or the Content in an attempt to, or in conjunction with, any device, program or service designed to circumvent any technological measure that effectively controls access to, or the rights in, the Site and/or Content in any way including, without limitation, by manual or automatic device or process, for any purpose.

> This license is expressly conditioned on your preexisting agreement to comply with, and your actual compliance with, each of the provisions described in this Ownership of Content and Grant of Conditional License section. This license exists only so long as you strictly comply with each of the provisions described in this section. Any use of the Site or Content by you or anyone acting on your behalf that does not strictly comply with each and every provision in this section exceeds the scope of the license granted to you herein, constitutes unauthorized reproduction, display, or creation of unauthorized derivative versions of the Site and Content, and infringes our copyrights, trademarks, patents and other rights in the Site and Content. You will not acquire any ownership rights by using the Site or the Content.

(The trademark paragraph that follows names Live Nation Entertainment, Inc., "Attn: Trademark Department, Legal, trademarks@livenation.com" as the place to write for permission.)

### 4.2 robots.txt

`https://www.insomniac.com/robots.txt`: HTTP 200, `text/plain`. Full text:

```
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /*?s=*
Disallow: /?s=*
```

- **Event, venue and city pages:** allowed. Only WordPress admin and include paths and site-search URLs are disallowed. `/events/...` pages are open to crawlers under robots.txt, but the Terms forbid robots anyway.
- **Sitemap:** none listed.

### 4.3 Official way to get listings

- **Public API / affiliate feed / widget:** none found.
- **RSS:** `https://www.insomniac.com/feed/` exists (HTTP 200, `application/rss+xml`), but it isn't an events feed. Its 10 items are off-topic posts ("How to Write Custom Essays US", "Research Paper Service – Tips For Selecting a Service Provider", …), and none are events. `https://www.insomniac.com/events/feed/` returns a 301 redirect to an empty body. No iCal feed was found.
- **Structured data:** yes. Event pages carry schema.org `Event` JSON-LD. For example, `https://www.insomniac.com/events/two-friends-2026-10-23-los-angeles-ca/` has `"@type":"Event","name":"Two Friends"`, a location (Hollywood Palladium), startDate and offers. But that's on pages the Terms forbid fetching by robot. (Its startDate reads `2026-10-23T20:00:00+00:00`, a local 8 PM time stamped as UTC, so it's unreliable.)
- **Cost:** none found.

### 4.4 On Ticketmaster or SeatGeek?

**Yes.** Example: **Two Friends, "Once Upon A Time In Los Angeles", Hollywood Palladium, Fri Oct 23, 2026** (8:00 PM PT per the app's read). Insomniac's homepage and event page link the ticket to `https://www.ticketmaster.com/event/090064A4ABA1D8E9`, and it's in the app's Ticketmaster read saved today as `ticketmasterId: "vvG10Z_13lIqNt"` (a second night, Oct 24, is `vvG10Z_13iOWiS`). Also on Insomniac's homepage and in the read: "WORSHIP North America Tour 2026", Kia Forum, Oct 23 (`ticketmaster.com/event/090064D3F4CB4635`; app id `vvG10Z_u2VwVbg`). Insomniac is a Live Nation company, and its festivals sell through Front Gate Tickets (for example `edclasvegas.frontgatetickets.com`), which the app doesn't read.

### 4.5 Verdict

**Forbidden without written consent.** The deciding clause is "Ownership of Content and Grant of Conditional License": "Use any robot, spider, offline reader, site search/retrieval application or other manual or automatic device, tool, or process to retrieve, index, data mine or in any way reproduce … the Content or the Site". The only exception is public search engines, and it excludes "caches or archives". Even the license to *view* the site is conditioned on not doing this, and even deep links are barred ("Link to any portion of the Site other than the URL assigned to the home page"). Its club and concert shows already reach the app through Ticketmaster.

---

## 5. Framework (the LA dance-music promoter)

### 5.0 Which site is Framework's?

- **`thisisframework.com` is the real promoter site.** Its title is "Framework - Dance Music Event Producers", and it carries the footer "© 2026 Framework Los Angeles. All Rights Reserved." Its event list (Hugel Oct 24, Adriatique Nov 7, ZHU Dec 4–5, …) sends ticket buttons to `link.dice.fm/...`, and DICE event pages name "Promoter: Framework", with the storefront at `https://dice.fm/promoters/framework-y7q2`.
- **`frameworkla.com` is a different company.** `https://frameworkla.com/` (apex) fails with a TLS error ("tlsv1 alert internal error"), and plain http timed out. `https://www.frameworkla.com/` (HTTP 200) is **Framework Studio LLC**, "an award-winning creative agency and production house" at 915 Wilshire Blvd. Its Terms of Use (`https://www.frameworkla.com/legal/terms`, "Last Updated: January 01, 2022", owned by "Framework Studios LLC") don't cover the promoter's listings. For the record, they do say, under "Code of Conduct": "use any robot, scraper or other automated or manual means to access any aspect of our website or equipment for any purpose;". `https://www.frameworkla.com/robots.txt` returned HTTP 200 with an empty body.

So I checked thisisframework.com below. Framework's DICE storefront falls under DICE's terms (section 2).

### 5.1 Terms

- **URL:** `https://thisisframework.com/privacy-policy/` (`/privacy/` redirects there). There's no separate terms page: `/terms/`, `/terms-of-use/`, `/terms-of-service/`, `/terms-and-conditions/` and `/legal/` all return 404. The page titled "Framework Privacy Policy" contains a section headed **"Terms and Conditions"**. It opened with plain curl (HTTP 200).
- **"Last updated" date:** "This policy was last updated on October 1, 2022." (This is the last sentence of the "Terms and Condition Changes." paragraph.)
- **Numbering:** none. I give the run-in headings.

**Heading "Terms and Conditions"**

> These terms and conditions are the only agreement between us and our users – continued use of the site and our services signifies that you have read and understood the terms effective as of the date of the use of the site – rights to services are not transferable and are subject to any limits by Framework. If you are dissatisfied with our site, our services or the products listed, your sole and exclusive remedy is to discontinue use of the site.

**Heading "Intellectual Property."** (line breaks as on the page)

> The “Framework” trademark as well as certain logos and other marks used in the web
> site are owned by Framework or its affiliates (“Framework”). You should assume that
> everything you see or read on this site is owned by Framework or used with permission.
> You may not copy, use, or retransmit anything from or on the site without permission.
> You may download one copy of the contents of the site to one computer for your
> personal and noncommercial home use provided you do not change any copyright, trademark, or other proprietary notice. Any commercial or promotional distribution, publishing, or exploitation of the site or any of its content, code, data, or materials thereon is strictly prohibited. You are prohibited in engaging in any conduct that interferes with the technological operation of the site or that tampers with any copyright protection applicable to the content of the site. Ignoring this policy may result in copyright, trademark, or other intellectual property violations. […]

(The cut part is about material users submit.)

**Heading "Terms and Condition Changes."**

> Framework may, at any time, revise these Terms and Conditions by updating this posting. You continued use of our site indicates your consent to such Terms and Conditions. You are bound by any revisions and should therefore periodically visit this page to review the then current terms and Conditions. This policy was last updated on October 1, 2022.

There's no clause that names robots, scraping, crawling or caching. The "copy, use, or retransmit … without permission" sentence is the one that covers it.

### 5.2 robots.txt

`https://thisisframework.com/robots.txt`: HTTP 200, `text/plain; charset=UTF-8` (`https://www.thisisframework.com/robots.txt` redirects to the same file). Full text:

```
# This virtual robots.txt file was created by the Virtual Robots.txt WordPress plugin: https://www.wordpress.org/plugins/pc-robotstxt/
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Disallow: /wp-includes/
Allow: /wp-includes/js/
Allow: /wp-includes/images/
Disallow: /trackback/
Disallow: /wp-login.php
Disallow: /wp-register.php
Sitemap: https://thisisframework.com/sitemap_index.xml
```

- **Event, venue and city pages:** allowed. Only WordPress admin, include, trackback, login and register paths are disallowed.
- **Sitemap:** listed as `https://thisisframework.com/sitemap_index.xml`, but **that URL returns HTTP 404**. (WordPress's default `https://thisisframework.com/wp-sitemap.xml` returns 200.)

### 5.3 Official way to get listings

- **iCal feed: yes.** Every page advertises `<link rel=alternate type=text/calendar title="Framework » iCal Feed" href="https://thisisframework.com/eventslist/?ical=1">`. It returned HTTP 200 (`text/calendar`) with **30 events** (`PRODID:-//Framework - ECPv6.18.2//NONSGML v1.0//EN`, `REFRESH-INTERVAL;VALUE=DURATION:PT1H`, `X-Robots-Tag:noindex`). It's free and needs no key. **No separate terms govern it**, so the site's Terms and Conditions above apply, including "You may not copy, use, or retransmit anything from or on the site without permission."
- **Events REST API:** the site links `https://thisisframework.com/wp-json/tribe/events/v1/`. That's The Events Calendar plugin's standard public API. It's open, no key, and `?per_page=3` returned HTTP 200 JSON with `total` 33. Each event includes its `website` ticket link (for example Hugel → `https://link.dice.fm/b3272cba0b50`). No separate terms.
- **Structured data:** yes. Event pages carry schema.org `Event` JSON-LD (Yoast). For example, `https://thisisframework.com/event/hugel/` has `"@type":"Event","name":"Hugel","startDate":"2026-10-24T18:00:00-07:00"` with location "Reframe Studios Outdoors".
- **DICE storefront:** `https://dice.fm/promoters/framework-y7q2`, under DICE's terms (crawling forbidden; section 2).
- **Cost:** none. Nothing here needs money or a credit card.

### 5.4 On Ticketmaster or SeatGeek?

**No, from what I could check.** Example: **Hugel, Reframe Studios Outdoors, Sat Oct 24, 2026, 6:00 PM PT** ("Framework & Goldenvoice presents"; tickets on DICE and on AXS). It isn't in the app's Ticketmaster read saved today. I matched all 33 events from Framework's events API against `la/2026-10-19.json` and none matched, though that read only covers Oct 19–Nov 2, so only Hugel falls inside it. SeatGeek couldn't be opened (403). Framework's tickets sell on DICE (most), AXS (Afrojack Nov 27 and AYYBO Jan 29, both at the Shrine Expo Hall), Tixr, Eventim and others.

### 5.5 Verdict

**Forbidden without written consent.** The terms say "without permission", not "written". The deciding clause is "Intellectual Property.": "You may not copy, use, or retransmit anything from or on the site without permission. You may download one copy of the contents of the site to one computer for your personal and noncommercial home use…" Framework does publish an iCal feed and an open events API, and nothing makes them off-limits to read. But the terms give no separate license to reuse what they contain, and showing those listings in another app is "retransmit[ting]" them. **This is the cheapest seller to ask:** a short email for permission to use the iCal feed would settle it. Framework lists `reservations@thisisframework.com` on DICE, and the site's contact address is behind Cloudflare email protection.

---

## Summary table

| Seller | Verdict | Deciding clause | Official channel (yes/no) | On Ticketmaster or SeatGeek (yes/no) |
|---|---|---|---|---|
| AXS | Forbidden without written consent | US Terms of Use, "Use of Services": "use any automatic means (e.g., robot, spider, offline reader …) to (a) retrieve, index, data mine or in any way reproduce … the Services or any content" (search-engine exception only); and "Limited License; Restrictions": republication "without our prior written permission is strictly prohibited" | No (partner-only "Event Discovery API" / "AXS Anywhere"; no public terms or price 🚩) | Yes, some (Kacey Musgraves, Crypto.com Arena, Oct 19, 2026, TM `Z7r9jZ1A70kAg`) |
| DICE | Forbidden without written consent (flat ban; no consent route named) | US Terms of Use (Last Updated March 10, 2026) §8.4: "use software, devices, or other manual or automated processes to "crawl" any page of our website, App or Services, including but not limited to any use of any scripts or web crawlers" | No (widget and Ticket Holders API need a DICE partner ID and API key; JSON-LD exists but is on crawl-forbidden pages) | No (Hugel, Reframe Studios, Oct 24, 2026: not in the app's TM read; SeatGeek not openable) |
| Goldenvoice | Couldn't read the terms | None readable: `aegworldwide.com/terms-of-use` (linked via `aegpresents.com/terms/`) loads its text only with JavaScript; no robots.txt either | No | Yes, some (Chelsea Wolfe, Orpheum Theatre, Oct 23, 2026, TM `vvG10Z_u1wiB9V`); most of its shows sell on AXS |
| Insomniac | Forbidden without written consent | Terms of Use (no date shown), "Ownership of Content and Grant of Conditional License": "Use any robot, spider, offline reader, site search/retrieval application or other manual or automatic device, tool, or process to retrieve, index, data mine or in any way reproduce … the Content or the Site" | No (RSS feed carries no events; JSON-LD only on robot-forbidden pages) | Yes (Two Friends, Hollywood Palladium, Oct 23, 2026, TM `vvG10Z_13lIqNt`) |
| Framework (thisisframework.com; frameworkla.com is a different company) | Forbidden without written consent (terms say "without permission") | Terms and Conditions on `/privacy-policy/` (last updated October 1, 2022), "Intellectual Property.": "You may not copy, use, or retransmit anything from or on the site without permission." | Yes (free iCal feed `eventslist/?ical=1` and open events API, but no license beyond the terms above) | No (Hugel, Oct 24, 2026: not in the app's TM read; sells on DICE and AXS) |

### What costs money

- 🚩 **AXS:** the only listings channel is a commercial partner integration. No price or terms are published, so assume a contract and possibly a fee. Nothing found asks for a credit card.
- **DICE:** no price published. Its widget and API need a DICE partner (event-seller) account, which isn't a sign-up for this app.
- **Goldenvoice, Insomniac, Framework:** nothing found that costs money. Framework's iCal feed and events API are free and keyless.

### Pages that didn't open normally (for the record)

| URL | What happened |
|---|---|
| `https://www.axs.com/`, `/terms-of-use`, `/legal`, `/legal/terms_of_use.html`, `/events/1427071/...` | curl: HTTP 403 (Cloudflare, AXS "Are you a real fan?" CAPTCHA page). WebFetch opened the terms page; the event page gave WebFetch a bot check ("Enable JavaScript and cookies to continue") |
| `https://www.axs.com/about-terms-of-use` | 307 to `/`, then 403 |
| `https://developers.axs.com/` | curl: HTTP 403 (same CAPTCHA page) |
| `https://dice.fm/`, `/terms`, `/legal`, `/partners/widget`, `https://link.dice.fm/...`, `https://widgets.dice.fm/...` | curl: HTTP 403 (Cloudflare "Just a moment..." challenge). WebFetch opened `/partners/widget` and the `link.dice.fm` event page. `https://dice.fm/terms` gave WebFetch a 404 |
| `https://dice.fm/terms_and_conditions.html` | 301 to `dicefm.zendesk.com/hc/sections/4412940081425-Terms-of-Use`, which gave curl 403. The US Terms article opened with WebFetch |
| `https://aegworldwide.com/terms-of-use` (Goldenvoice's terms) | HTTP 200, but the text renders only with JavaScript (OneTrust). WebFetch got the title only, and the notice JSON gave plain curl a 404 |
| `https://www.goldenvoice.com/robots.txt` | HTTP 200, but the body is the homepage HTML (no robots file) |
| `https://frameworkla.com/` (apex) | TLS error, "tlsv1 alert internal error"; http timed out |
| `https://seatgeek.com/...` | curl: HTTP 403, "Please enable JS and disable any ad blocker" |
| `https://www.ticketmaster.com/event/090064D2B2B3A5F4` | curl: HTTP 401 `{"response":"identify"}`; WebFetch returned an empty page. Ticketmaster presence was checked against the app's own saved Ticketmaster read instead |
