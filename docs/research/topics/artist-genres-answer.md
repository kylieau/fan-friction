# Genres for artists, the way sports have leagues

Research draft for Kylie · October 19, 2026 · Nothing here is a decision.

_Saved Oct 19, 2026 from Kylie's attachment (the answer to `artist-genres-prompt.md`). Status: open; read by Claude Code the same day; a proposal to Kylie comes before any artist field or genre is added._

## The useful equivalent of a league

Give each artist a stable identity and one short, curated genre label. Keep the seller's classification alongside it as evidence. A league has formal membership; a genre does not. Consequently, neither one seller's taxonomy nor a majority vote across sources should become the artist's permanent identity.

The proposed starting point is **18 top-level categories: 15 music categories and Comedy, Theater, and Family**. A second level supplies useful phone labels such as **Indie rock**, **Regional Mexican**, and **K-pop**. Store multiple supported styles behind the scenes, but choose only one label for a row. Keep tours, lineups, attendance estimates, and local demand on event records.

For a version requiring no credentials, use Wikidata, permitted MusicBrainz core data, and cited editorial research. Seller integrations are a separate option: they provide the strongest event-to-favorite identity links, but require credentials and contractual compliance. Spotify is unsuitable as a required genre source.

**Evidence boundaries.** This research used public documentation and public pages, without keys, accounts, or paid datasets. Three LA-area fall listings were checked against venue and seller pages. No authenticated feed, representative catalog audit, or audience-overlap dataset was examined. The taxonomy, precedence rules, and friction rules below are proposals. Coverage estimates are qualitative judgments, not measured percentages. Availability and terms were checked for this draft; recheck them before implementation.

## 1. A two-level taxonomy

Use stable internal codes independent of display wording. Every second-level label belongs to a top-level category; an artist may have several paths. `Unknown` is a missing value, not another musical genre.

In the table, **High** means broad classification should usually be straightforward for established ticketed acts; **Medium** means enrichment or judgment is often needed; **Low** means the proposed detail is poorly served by general artist databases. These estimates concern classification of already-discovered acts, not the percentage of all events a seller carries. They assume the chosen sources are permitted for the intended use.

Source abbreviations: **TM** = Ticketmaster classifications; **SG** = SeatGeek taxonomies and optional performer genres; **WD** = Wikidata; **WP** = Wikipedia infoboxes and their cited references; **MB** = MusicBrainz genre tags, subject to the license restriction in section 2. "Editorial" means a recorded judgment supported by an artist, label, production, or other cited source.

| Top level | Starting second-level vocabulary; each can be a phone label | Likely filling source | Estimated broad / specific coverage |
| --- | --- | --- | --- |
| Pop | Pop, Dance-pop, Indie pop, K-pop, J-pop, Cantopop | TM/SG broad; WD/WP or editorial for scene | High / Medium |
| Rock | Rock, Indie rock, Alternative rock, Classic rock, Punk, Post-punk | TM/SG; WD/WP; MB where permitted | High / High |
| Metal | Metal, Heavy metal, Metalcore, Death metal | TM plus WD/WP; MB where permitted | High / Medium |
| Hip-hop | Hip-hop, Trap, Drill, Grime | TM/SG broad; WD/WP or editorial | High / Medium |
| R&B | R&B, Soul, Neo-soul, Funk | TM/SG broad; WD/WP or editorial | High / Medium |
| Latin | Latin pop, Regional Mexican, Reggaeton, Salsa, Bachata, Samba, Bossa nova | TM broad; WD/WP and Spanish/Portuguese-language artist or promoter sources for detail | High / Medium |
| Country | Country, Country pop, Americana, Bluegrass | TM/SG; WD/WP or editorial | High / Medium |
| Electronic | EDM, House, Techno, Trance, Dubstep, DnB, Amapiano, Ambient | TM/SG broad; WD/WP, MB where permitted, artist/label descriptions | High / Medium |
| Jazz | Jazz, Vocal jazz, Jazz fusion, Big band | TM/SG broad; WD/WP and ensemble bios | High / Medium |
| Classical | Classical, Orchestral, Chamber, Choral, Opera, Contemporary classical | TM; WD/MB identity; orchestra and presenter programs | High / Medium |
| Folk | Folk, Indie folk, Folk rock, Celtic folk | TM broad; WD/WP or editorial | Medium / Medium |
| Blues | Blues, Electric blues, Acoustic blues | TM broad; WD/WP or editorial | Medium / Medium |
| Reggae | Reggae, Dancehall, Dub, Ska | TM broad; WD/WP or editorial | Medium / Medium |
| Global | Afrobeats, Afro-pop, Arabic pop, Indian pop, Qawwali, Flamenco, Fado, Traditional | WD/WP and locally authoritative artist/presenter sources; broad seller labels only as a starting point | Medium / Low |
| Faith | Gospel, Worship, Christian rock, Devotional | TM broad; WD/WP and artist/presenter descriptions | Medium / Medium |
| Comedy | Stand-up, Improv, Sketch, Musical comedy | TM/SG categories; comedian and venue pages | High / Medium |
| Theater | Musical, Play, Ballet, Dance | TM/SG categories; official production/presenter pages | High / Medium |
| Family | Ice show, Circus, Kids concert, Puppetry | TM/SG categories; official production/presenter pages | High / Medium |

This vocabulary is intentionally a starting set, not a claim that all music fits neatly into eighteen boxes. Add second-level terms when they make a row more recognizable. Consider a new top level when a growing catalog repeatedly needs it, for example an extensive Afrobeats catalog should not remain hidden in Global. Avoid "World" as the default display label for every artist outside a US/UK tradition.

`DnB` is the compact display spelling for drum and bass; preserve the full source term in the crosswalk.

**Latin needs detail.** Regional Mexican is a second-level label, not a synonym for all Latin music. Preserve finer evidence such as corridos tumbados, banda, norteño, and mariachi in optional style tags; these need not create a third navigation level. Never infer Latin, K-pop, or any genre from a person's ethnicity, nationality, or language alone. Likewise, Amapiano and Afrobeats are distinct styles; Brazilian music does not automatically share an audience with Mexican music.

**Allow crossover without making a long subtitle.** An artist can hold `Rock → Indie rock` and `Pop → Indie pop`; the row selects one. Opera can have Classical as its primary path and a theatrical event format. A children's concert can retain its musical genre and have `family_audience=true`. Family is a primary category for productions whose identity is the family show itself, rather than a universal replacement for music performed for children.

### How to fill and reconcile the label

1. Resolve the identity first. An event-level genre is weak evidence about every performer on its bill.
2. Preserve raw source terms and IDs with their source, date, and entity level. Map IDs and normalized terms through an explicit, versioned crosswalk. Do not assume identical words occupy identical levels across providers.
3. Prefer an existing reviewed label supported by specific evidence. Otherwise use a specific artist-level genre claim mapped to this vocabulary; fall back to the seller's broad artist classification. An official bio can supply detail missing from a seller category. WD, WP, and MB can all be incomplete or disputed.
4. Keep compatible claims together. Flag incompatible claims for review; do not count source votes as independent confirmation when sources may copy one another. Preserve an editorial override and its reason.
5. Treat blank, Undefined, Other, and unavailable subgenres as missing evidence. With no supported style, show **Music**, **Comedy**, **Theater**, or **Family** when the event kind is known. Otherwise omit the subtitle.

Concrete disagreements are visible in the public pages: Ticketmaster labels [MONSTA X Pop while its biography calls the group K-pop](https://www.ticketmaster.com/monsta-x-tickets/artist/2371302); its public [beabadoobee page says Rock](https://www.ticketmaster.com/beabadoobee-tickets/artist/2618990); and its [Calvin Harris page says Pop](https://www.ticketmaster.com/calvin-harris-tickets/artist/1149552), while [his label describes him as a DJ working across dance, pop, and electronic music](https://www.sonymusic.co.uk/artist/calvin-harris/). These are differences in granularity and emphasis, not necessarily erroneous identities.

### What the phone actually shows

- **Artist list:** `beabadoobee` with `Indie rock` beneath it.
- **A Faves row for a particular show:** artist name, then the verified tour title when available; otherwise the short genre label. The one-or-two-word limit applies to the genre, not to a real tour title.
- If both tour and genre must remain visible, give genre a compact separate position; do not concatenate multiple styles, hometown, and tour into the subtitle. Source credits belong in a usable detail surface, subject to each provider's actual display requirements.

## 2. Sources, coverage, access, and terms

Publicly readable does not mean freely reusable. The following are integration constraints from the published terms, not a conclusion that any particular future implementation is approved.

### Ticketmaster Discovery: event and seller identity backbone

The [Discovery API documentation](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) describes events, attractions, venues, and classifications across multiple countries. It supports attraction IDs and classifications at event and attraction level. The default allowance is 5,000 calls/day and 5 requests/second, with a 1,000-item deep-paging limit. **🚩 An API key is required.** A public signup path exists; this draft does not assume a guaranteed commercial entitlement or price.

Estimated coverage: strong for major ticketed acts in participating markets, variable for independent venues, nonparticipating sellers, and local productions. Fine distinctions such as regional Mexican styles and K-pop can require enrichment. The [classification tutorial](https://developer.ticketmaster.com/products-and-docs/tutorials/events-search/search_events_with_discovery_api.html) explains its segment → genre → subgenre hierarchy. This is the seller's organization, not the proposed app hierarchy: segment Music is not a phone genre.

Under the [General Terms of Use, updated June 27, 2023](https://developer.ticketmaster.com/support/terms-of-use/), the API is licensed rather than open data. Terms restrict storage to reasonable service-related periods, require requested removals within 24 hours, prohibit replicating Ticketmaster's essential experience, and restrict deriving revenue from API use. **🚩 Commercial use, archival retention, and persistent seller-derived records need an applicable permitted arrangement.** A favorite's app-owned identity should survive a seller-data refresh or removal without depending on a permanent raw seller snapshot.

### SeatGeek: useful second seller, with an access uncertainty

SeatGeek's [owned legacy Platform documentation](https://seatgeek.github.io/) describes performer IDs, hierarchical taxonomies, optional genres for some music performers, external links, and an event-specific `primary` performer flag. Taxonomies describe event categories; they are not a complete music-style hierarchy. Estimated coverage: useful for large market-facing events, especially in North America; finer music styles and worldwide completeness are uncertain. The old documentation is evidence of a data model, not proof that every field or new-app access remains available. The [platform URL now redirects to its developer portal](https://developer.seatgeek.com/).

**🚩 Client credentials are required; confirm access, current fields, quotas, and pricing with the current portal.** The [API/SDK Terms, updated March 17, 2025](https://seatgeek.com/api-terms), grant limited, revocable rights, permit additional agreements and fees, and require linked SeatGeek-logo attribution wherever its materials are accessed, used, or displayed. Do not promise a free open-data feed or assume a hidden credit on an About page satisfies those terms.

### MusicBrainz: good identity data; genre licensing is different

The [Artist model](https://musicbrainz.org/doc/Artist) supplies names, aliases, identity types, areas, and MBIDs. Estimated identity coverage is good for established recording artists and orchestras, less dependable for touring productions, family brands, and comedians without releases. Area is often a country, not a hometown. Birth dates for people are not career-start dates.

[Genres are selected, voted-on tags](https://musicbrainz.org/doc/Genre), rather than exclusive membership in a two-level tree. Their usefulness varies with contributors and styles. The [data license](https://musicbrainz.org/doc/About/Data_License) distinguishes CC0 core data from CC BY-NC-SA 3.0 supplementary data. The [download documentation explicitly places artist genre associations in the tag-derived data](https://musicbrainz.org/doc/MusicBrainz_Database/Download). **🚩 Do not treat artist genre assignments as CC0. Commercial licensing may cost money.** Core identity data and the genre vocabulary are different from the artist-to-genre assignments.

The [public API](https://musicbrainz.org/doc/MusicBrainz_API) needs no key for ordinary public reads, requires an identifying User-Agent, and describes free noncommercial use with separate commercial plans. Respect [its one-request-per-second limit](https://musicbrainz.org/doc/MusicBrainz_API/Rate_Limiting). **🚩 Commercial use of the hosted service is a separate access question even when retrieving CC0 fields.** Core dumps or a self-hosted service offer another route, with operating costs.

### Wikipedia and Wikidata: enrichment, with different licenses

Wikipedia infoboxes can supply genres, alternate names, origin, and years active. They are editorial, multilingual, and not uniformly populated. The [musical-artist template](https://en.wikipedia.org/wiki/Template:Infobox_musical_artist) is a useful structure, but comedians and productions use different templates. Estimated coverage is good for notable acts; weaker for emerging, local, and less-documented artists. Infobox genre lists are not ranked primary genres, and English Wikipedia is not a global completeness benchmark.

No API key is normally needed for public reads. Under [Wikimedia's developer guidance](https://foundation.wikimedia.org/wiki/Legal:Wikimedia_Developer_App_Guidelines), reused Wikipedia text generally carries CC BY-SA 4.0 attribution, change-notice, and share-alike requirements. Preserve the article/revision and inspect the underlying references; do not import biographies or images as if they were unlicensed facts.

[Wikidata structured data is CC0](https://www.wikidata.org/wiki/Wikidata:Licensing). Use its labels, aliases, genre statements, origin-related statements, and external identifiers where present, retaining claim references and qualifiers. Its [public data-access routes](https://www.wikidata.org/wiki/Wikidata:Data_access) support keyless reads, with service limits and identifying-request guidance. Estimated broad identity coverage is good for notable entities; genre and hometown completeness are variable. WD and WP can disagree or share the same underlying source; they are not automatically two independent witnesses.

### Spotify: exclude from the required path

**No supported keyless public genre API was found. 🚩 A registered application and access token are required.** The [Get Artist reference](https://developer.spotify.com/documentation/web-api/reference/get-an-artist) still documents a `genres` array but marks it **Deprecated**, and permits an empty result. Do not mistake documentation examples for a durable feed promise. Coverage concerns recording artists, not a general catalog of comedians, touring shows, or family productions.

The [2026 development-mode migration guide](https://developer.spotify.com/documentation/web-api/tutorials/february-2026-migration-guide) requires the app owner to maintain Spotify Premium; extended-quota apps are treated differently. **🚩 There is a subscription cost for that development route.** The [Developer Terms](https://developer.spotify.com/terms) restrict indefinite storage and standalone compilations, and the [Developer Policy](https://developer.spotify.com/policy) requires branding and links for displayed content. Do not use an unofficial scraped Spotify genre mirror to evade those constraints.

### Artist, venue, and production websites: verification, not an open feed

These are valuable for tour titles, support, format, origin, and local capacity. They have no common schema or open-data license. Public reading generally needs no key; bulk use and republication depend on each site's terms. For example, the [Kia Forum's Terms of Use](https://thekiaforum.com/terms-of-use/) restrict public/commercial reuse of its materials without written permission. Its pages below were consulted as evidence, not proposed as an unrestricted ingestion source. The same caution applies to the cited Sony Music, Dirty Hit, artist, orchestra, O2, Hamilton, and Disney On Ice pages: no bulk-reuse entitlement is claimed. No photos, biographies, or artwork need to be copied for this proposal.

## 3. What the artist record should hold

Use an app-owned ID. A favorite points to that ID; each permitted seller feed supplies mappings to it. Keep uncertainty explicit rather than forcing a city, subgenre, or performer ID to exist.

| Field | Proposed meaning | Source and handling |
| --- | --- | --- |
| `artist_id` | Permanent internal ID | App-generated; never a normalized artist name |
| `canonical_name` | Preferred public performing name, with intended spelling | Artist's official site; cross-check MB/WD and seller profiles |
| `sort_name` | Optional sorting form | MB or an app rule; does not replace displayed spelling |
| `aliases[]` | Name, language/script, alias kind, and evidence | MB aliases, WD aliases, official former names; separately mark app-added search variants |
| `entity_type` | Person, group, organization, or production | MB/WD identity plus official production information |
| `primary_type` | Solo, band, DJ, orchestra, choir, ensemble, comedian, touring production | Official bio/program and reviewed mapping; allow additional roles |
| `genre_paths[]` | Supported top-level/second-level pairs | Versioned crosswalk from permitted sources in section 2, with evidence per assertion |
| `display_genre` | One selected one-or-two-word label | App editorial selection from those paths; broad fallback if detail is unsupported |
| `style_tags[]` | Optional finer or crossover styles | Cited editorial evidence; permitted MB/WD/other assignments; not extra phone text |
| `origin_place` | Nullable city/region/country with a relationship such as formed-in or career-origin | Official bio, referenced WD/WP; MB area only if sufficiently specific |
| `current_base` | Separate, optional documented working base | Dated official bio; never inferred from a recent venue or birthplace |
| `active_periods[]` | Optional career periods for contextual research | Referenced official history/WP; interpret people's MB begin dates correctly |
| `external_ids[]` | Provider, entity kind, ID, source URL, verification status/date | TM attraction ID, SG performer ID, MBID, WD QID; permit multiple mappings where verified |
| `official_urls[]` | Identity anchors and local-language pages | Artist/production site, verified seller/WD links |
| `evidence[]` | Field/value, source, source entity, retrieval/revision date, license, confidence, mapping version | Generated while researching or ingesting; a record-wide source URL is insufficient |
| `review_status` | Reviewed, automatic, disputed, or unresolved; override reason | App-owned editorial state; keep source claims separate |

For aliases, preserve **The Weeknd** as a public name and allow **Weeknd** as a search variant. Removing "The," accents, punctuation, or case helps retrieve candidates; it does not prove identity. Legal names, former stage personas, side projects, tribute acts, and cover bands need explicit relationships rather than indiscriminate merging.

**Provider-ID matching rule:** once verified, exact `(provider, entity_kind, id)` joins an event participant to the favorite. A Ticketmaster attraction ID is not a SeatGeek performer ID. Ticketmaster's numeric public `/artist/2618990` page identifier is also not interchangeable with a Discovery attraction identifier. For example, the API documentation uses Adele attraction ID `K8vZ917Gku7`; never derive such an ID from the website number. Preserve the two namespaces separately. [Ticketmaster attraction lookup and filtering documentation](https://developer.ticketmaster.com/products-and-docs/apis/discovery/v2/).

When a new seller ID has no mapping, generate candidates using names/aliases and confirm with official links, MBID/WD links if supplied, location/history, and lineup context. A fuzzy name match must not silently create a permanent mapping. Maintain aliases for retired provider IDs and merge history where a provider changes records. An internal favorite can exist before any seller mapping does; it simply has incomplete automatic event coverage.

Touring productions need a parent work or franchise plus a specific production/company where identifiable. A favorite for Hamilton may intentionally cover all productions; an event still needs the actual production and venue. The [official North American tour cast page](https://hamiltonmusical.com/us-tour/cast/) demonstrates why the work and its touring company are distinct from individual cast members. Similarly, [Disney On Ice is a series of touring productions](https://www.disneyonice.com/en-us/), not a single musician.

## 4. Split the artist, tour, support, festival, and residency

Create an event record with `raw_title`, `display_title`, `participants[]` with roles, `tour_name`, `festival_id/name`, `residency_id/name`, `production_id`, venue/time/status, and evidence/confidence for each extracted value. All optional values can be null. The same artist can have a solo tour date, festival appearance, and residency without changing their artist record.

The [Ticketmaster response model](https://developer.ticketmaster.com/products-and-docs/apis/discovery-manual/v2/) exposes names, linked attractions, classifications, and other event fields, but not a universally populated, normalized headliner/support/tour decomposition. SeatGeek's documented event performer `primary` flag is useful where supplied; it does not resolve every co-headlining or festival bill. Do not assume the first attraction is the headliner or every other attraction is support. [SeatGeek event model](https://seatgeek.github.io/).

Suggested extraction order:

1. Use structured participant identities and explicit roles when the source supplies them.
2. Accept a separately stated tour title on the exact event or official tour page.
3. Parse familiar patterns only around a confirmed artist span: `Artist: Tour`, `Artist – Tour`, `Artist with Support`, and localized equivalents. A colon or dash alone is insufficient. Avoid splitting artist names such as Florence + the Machine or a title that itself contains punctuation.
4. Preserve explicit co-headliners as co-headliners. Keep "special guest," support, conductor, soloist, presenter, and composer as different roles. Beethoven is not the performing artist of an orchestra's Beethoven program.
5. Keep festival and residency identities separate. A festival title is not the tour title of every participant. A production title is not automatically a tour name. An add-on, parking pass, or VIP upgrade is not a second concert.
6. On low confidence, retain the raw title in details and leave `tour_name=null`. Do not manufacture a tour name from an album, last year's tour, or another city's date.

**Reliability:** named major tours often appear in public event titles; completeness is not guaranteed by the examined schemas. This research does not establish a seller-wide completion percentage. The verified examples below contain tour titles, but they were selected for demonstration. A contrasting [Ali Wong listing](https://www.ticketmaster.com/ali-wong-tickets/artist/1458779) uses both "Ali Wong" and "Ali Wong Live"; neither justifies inventing a formal tour brand. "Live" is generic event wording unless independently established as a tour title.

Fallback on the Faves row: verified tour title → identified festival/residency/production title when useful and correctly labeled → short genre → known event kind → no subtitle. Long real titles can truncate visually while the full title remains accessible. A missing tour title must not display "Unknown tour."

## 5. Ten worked artist records

These are proposed normalized records supported by public pages, not ten downloaded feed records. The first three are verified **upcoming Los Angeles-area appearances in fall 2026**; the venue is in **Inglewood**, not the City of Los Angeles. Dates are local, and scheduled listings are not proof of attendance.

In all ten records, `ticketmaster_attraction_id` and `seatgeek_performer_id` are **null / not fetched in this keyless research**. The numeric IDs below are verified **Ticketmaster website artist IDs only**, useful for later reconciliation. They must not be loaded into the feed-ID fields. This limitation is deliberate: no opaque feed IDs have been guessed.

| # | Canonical name and short label | Proposed stored path; type | Origin/base treatment and alias example | Verified public identity anchor |
| --- | --- | --- | --- | --- |
| 1 | **MONSTA X · K-pop** | Pop → K-pop; band/group | Origin Seoul, South Korea; alias `Monsta X` | [TM web artist 2371302](https://www.ticketmaster.com/monsta-x-tickets/artist/2371302); [origin reference](https://en.wikipedia.org/wiki/Monsta_X) |
| 2 | **beabadoobee · Indie rock** | Rock → Indie rock; solo/person; retain compatible pop styles | Career origin London, UK; birth origin Iloilo City, Philippines kept distinct; case variant `Beabadoobee` | [TM web artist 2618990](https://www.ticketmaster.com/beabadoobee-tickets/artist/2618990); [origin and genres](https://en.wikipedia.org/wiki/Beabadoobee); [label's description of stylistic range](https://store.dirtyhit.co.uk/release/299248-beabadoobee-beatopia) |
| 3 | **Doja Cat · Hip-hop** | Hip-hop → Hip-hop; solo/person; secondary Pop path | Origin Los Angeles, US; keep `DOJA CAT` as a case variant, not a separate act | [TM web artist 2062205](https://www.ticketmaster.com/doja-cat-tickets/artist/2062205); [origin reference](https://en.wikipedia.org/wiki/Doja_Cat) |
| 4 | **Peso Pluma · Regional Mexican** | Latin → Regional Mexican; solo/person; retain finer corrido evidence separately | Origin Guadalajara area, Mexico at the source's stated precision; no current residence inferred | [TM web artist 2979041 and biography](https://www.ticketmaster.com/peso-pluma-tickets/artist/2979041?page=3) |
| 5 | **Dolly Parton · Country** | Country → Country; solo/person | Origin Sevier County, Tennessee, US; city null rather than inventing an exact hometown | [TM web artist 732891](https://www.ticketmaster.com/Dolly-Parton-tickets/artist/732891); [official biography](https://www.dollyparton.com/bio) |
| 6 | **Calvin Harris · EDM** | Electronic → EDM; DJ/person; secondary Pop path | Origin Dumfries, UK; other stage persona `Love Regenerator` is a reviewed relationship, not an automatic ticket merge | [TM web artist 1149552](https://www.ticketmaster.com/calvin-harris-tickets/artist/1149552); [label bio](https://www.sonymusic.co.uk/artist/calvin-harris/); [origin/persona reference](https://en.wikipedia.org/wiki/Calvin_Harris) |
| 7 | **Laufey · Vocal jazz** | Jazz → Vocal jazz; solo/person; crossover tags retained | Icelandic-Chinese background; seller bio describes upbringing across Reykjavík and Washington and an LA working base. The biography is older, so current base remains unconfirmed | [TM web artist 2790801 and bio](https://www.ticketmaster.com/laufey-bilety/artist/2790801); [official album description](https://store.laufeymusic.com/products/bewitched-the-goddess-edition-navy-double-lp-r) |
| 8 | **Los Angeles Philharmonic · Classical** | Classical → Orchestral; orchestra/group | Organizational home Los Angeles, US; alias `LA Phil` | [TM web artist 770238](https://www.ticketmaster.com/los-angeles-philharmonic-tickets/artist/770238?page=1); [official organization description](https://www.laphil.com/) |
| 9 | **Ali Wong · Comedy** | Comedy → Stand-up; comedian/person | Origin San Francisco, US; current base null unless separately verified | [TM web artist 1458779](https://www.ticketmaster.com/ali-wong-tickets/artist/1458779); [official biography/book context](https://www.aliwong.com/deargirls) |
| 10 | **Trevor Noah · Comedy** | Comedy → Stand-up; comedian/person | Origin Johannesburg, South Africa; no current home city inferred | [TM web artist 1741923](https://www.ticketmaster.com/trevor-noah-tickets/artist/1741923?page=1); [official bio](https://www.trevornoah.com/about); [origin reference](https://en.wikipedia.org/wiki/Trevor_Noah) |

The chosen phone label is an editorial normalization, not necessarily the exact label printed by the linked seller. For example, "Vocal jazz" is a proposed specific display choice for Laufey, while her seller page's broad category is Jazz. Alias lists remain empty where no useful alternative was verified; they do not need filler.

### The three LA dates: actual title decomposition

| Date and venue | Confirmed headliner | Tour title stored separately | Support / other treatment |
| --- | --- | --- | --- |
| October 20, 2026 · Kia Forum, Inglewood | MONSTA X | `THE X : NEXUS`; retain raw seller wording `2026 MONSTA X WORLD TOUR [THE X : NEXUS] IN LOS ANGELES` | Support not specified on the consulted venue page; null, not "none." [Venue listing](https://thekiaforum.com/event/monsta-x/) |
| October 21, 2026 · Kia Forum, Inglewood | beabadoobee | `The Powerlines Tour` | Wisp explicitly listed as support. [Venue listing](https://thekiaforum.com/event/beabadoobee/) |
| October 22, 2026 · Kia Forum, Inglewood | Doja Cat | `Tour Ma Vie World Tour` | Latto explicitly listed as special guest. [Venue listing](https://thekiaforum.com/event/doja-cat/) |

`THE X : NEXUS` is a proposed short display form derived from explicit billing; preserve the full source title as evidence. None of these pages establishes actual turnout or proves a specific 5,000-person configuration. Their consecutive dates also mean they are **not** a worked example of two simultaneous crowds.

Additional format checks, outside the ten-artist set: `Hamilton · Theater` should resolve a work and touring production rather than favoriting every cast member; `Disney On Ice · Family` should resolve a franchise/production and show subtitle. A Dolly Parton residency retains Dolly as the artist; a canceled residency date must be suppressed as an active event even if its artist page remains discoverable. [The public Dolly listings include canceled dates](https://www.ticketmaster.com/Dolly-Parton-tickets/artist/732891).

### The same rules in at least three countries

- **United States:** beabadoobee at the Kia Forum, October 21, 2026: artist, tour, support, venue configuration, and local date are separate facts.
- **United Kingdom:** the [O2 lists beabadoobee on November 18, 2026](https://www.theo2.co.uk/events/detail/beabadoobee-2026), with The Powerlines Tour and Wisp. It directs buyers to AXS. The same artist identity and parsing work even when the local primary seller differs; Ticketmaster must not be assumed to be the originating seller everywhere.
- **Mexico:** the [public Laufey artist page lists Palacio de los Deportes, Ciudad de México, September 12, 2026](https://www.ticketmaster.com/laufey-bilety/artist/2790801), under A Matter of Time Tour: The Final Shows. This is a past scheduled listing as of this report, not a newly verified upcoming appearance or attendance report. Preserve local-language places, exact tour wording, and Mexico-specific seller mappings.

Artist origins in South Korea and South Africa provide further identity checks, but origin country must not substitute for the market of a particular show. The data rules use country codes, venue timezones, local dates, and local capacity evidence in every city.

## 6. Who is big enough, and what genre can tell friction

**Apply the size thresholds to an individual event or performance, not an artist's permanent fame.** A famous artist's small club date may be under 1,000; an unfamiliar regional act's local arena date may exceed 5,000. Two 3,000-person performances are not one concurrent 6,000-person crowd.

Proposed attendance evidence order:

1. Public reported attendance for that performance, or a credible organizer forecast for a future performance, explicitly distinguished.
2. Event-specific usable capacity, configuration, and any public sales evidence. A sold-out claim helps only when capacity and the meaning of sold-out are known.
3. Comparable recent dates for the same artist in that city or nearby market, adjusted cautiously for lineup, venue, configuration, date, and format.
4. Venue capacity alone as a ceiling or rough screening clue; no invented universal fill rate.

Store an estimate/range, method, sources, and confidence. For example, the [LA Phil site gives Walt Disney Concert Hall capacity as 2,265 seats](https://www.laphil.com/). That supplies a capacity clue for a show in that hall, not its attendance and not the size of an LA Phil appearance at another venue.

Suggested threshold handling:

- At least 1,000 supported by the estimate/range: eligible for the regular list.
- At least 5,000 supported: eligible for the counted friction population.
- Upper bound below a threshold: does not meet that threshold.
- Range straddles a threshold: mark provisional/uncertain internally. A candidate may remain discoverable, but must not silently enter a confirmed 5,000-plus total.
- No count evidence: retain an unknown size. A known large configuration may prioritize investigation; the artist's genre does not settle it.

Genre can help choose relevant comparison events, for example standing electronic shows versus seated orchestral programs, but **this research establishes no valid genre-to-attendance conversion**. Do not assign "EDM = 10,000" or "Jazz = under 1,000." Ticket inventory, social followers, streams, and seller popularity are not attendance. SeatGeek's legacy `score` is a relative market signal whose method may change, not a crowd count; `listing_count` counts listings. [SeatGeek score and event-stat documentation](https://seatgeek.github.io/).

### A practical overlap rule

Keep **audience overlap**, **crowd size**, and **competition for transport/space** as separate inputs. Two shows with different audiences can still create severe congestion near the same venue cluster. High substitutability also does not mean the same people physically attend both simultaneous events.

To implement the prompt's concert rule as a transparent starting heuristic:

1. Restrict comparison to relevant local catchments and overlapping event/arrival/departure windows, using venue-local times. "Same night" alone is too coarse, especially for matinees, early/late comedy shows, and midnight club sets.
2. **Medium** when the artists share a meaningful specific style, or there is independently supported shared audience-era context. Store the reason. "Both released music in 2026" does not establish a common era audience.
3. **Low** when their specific styles and known audience contexts differ, with no stronger contrary evidence.
4. **Unknown** when genre or context is absent. Do not turn missing data into Low. If the current formula requires a number, use an explicit, provisional neutral value and preserve the unknown status for later review.
5. Reserve **High**, if the app supports it, for separate evidence of a particularly close audience relationship, not merely a shared genre. Deduplicate the same concert appearing on multiple sellers before scoring pairs.

Suggested examples, **hypothetical pairs, not claims that these acts play the same night**:

- Two regional Mexican acts with comparable corrido-oriented bills → Medium as a starting guess.
- A reggaeton show and a mariachi show → do not automatically assign Medium just because both map to Latin; inspect style/context, otherwise Low or Unknown.
- Two indie-rock acts in a comparable scene → Medium.
- Two unrelated legacy acts → Medium only if shared audience-era evidence supports it; age or debut decade alone is insufficient.
- A conventional orchestral program and a drill show → Low as a starting guess; a crossover program may change that.
- Laufey versus a current pop act → review crossover evidence; "Jazz versus Pop" is too blunt to force Low.
- Ali Wong versus Trevor Noah → Medium from the shared stand-up format as a provisional rule, with low confidence about actual fan overlap. The same logic does not imply all family shows or theatrical productions share one audience.

For festivals, compare the billed program and relevant day, not one guessed headliner. Use co-headliners and prominent support as additional evidence; do not inflate audience counts by treating every participant as an independent crowd. Validate any numeric mapping from Low/Medium/High against Fan/Friction's observed nights before treating it as a calibrated estimate.

## 7. Coverage gaps and how to measure them

The documentation establishes source capabilities, not a measured completion rate for Fan/Friction's future catalog. The most likely weak spots are **specific style, entity linkage, and local event discovery**, and these should be measured separately.

- **Pop, rock, hip-hop, country:** broad labels are comparatively easy for established artists; mixed styles, aliases, and tribute acts still need care.
- **Latin, especially regional Mexican:** broad Latin can conceal distinctions needed for recognition and audience comparisons. Use Spanish-language references and test Mexican as well as US markets.
- **K-pop:** seller labels may collapse it into Pop; preserve the supported scene label and name/script variants. Group membership changes do not necessarily change the group identity.
- **Electronic:** artist personas, DJ collaborations, residencies, festivals, and very granular styles create mapping problems. EDM should not replace known Techno or House detail.
- **Jazz and classical:** artist identities may be strong while event billing is complex. Programs, composers, conductors, ensembles, and guest soloists require distinct roles; recording metadata alone will not reconstruct the live bill.
- **Comedy:** ticket categories can be useful; music databases only cover some comedians. Language, format, and audience context are more informative than a musical-era rule.
- **Touring theater and family:** seller and official production sources matter most. Music databases may cover cast albums while missing the actual touring company, show edition, or local performance.
- **Global/local traditions:** English-language and large-seller catalogs should not be treated as universal. Missing metadata is a reason to add a local source or leave a field unknown, not to invent a Western genre.

A suggested next audit, **not performed here**: sample 100 relevant listings each in Los Angeles, London, and Mexico City over the same four-week window. Include all requested formats and deliberately sample independent sellers. Review unique participant/production identities separately from listings. Measure seller discovery coverage against a specified venue-calendar reference set; correct identity matches; broad and specific genre completion; exact tour-title precision/recall where a tour exists; and unknown size at each threshold. Report denominators, disagreements, duplicate handling, and manual-review effort. A seller-only sample cannot measure the events that seller misses.

## 8. Open questions for Kylie

1. **Subtitle priority:** on an event-specific Faves row, should tour name replace genre, or should genre retain its own compact position? The proposal uses tour when known and genre as fallback.
2. **Taxonomy breadth:** do the eighteen categories feel right, and should Regional Mexican or Afrobeats become a top-level category if the catalog justifies it? The phone label can already be specific without that change.
3. **Favorite scope:** can people favorite productions, festivals, orchestras, and comedians alongside musicians? Does a Hamilton favorite mean every production, or one touring company?
4. **Commercial and retention needs:** is this strictly a personal tool, or might it become monetized? Does the event log need seller-derived details preserved indefinitely? Those choices affect seller arrangements and MusicBrainz tag licensing.
5. **Seller access:** is a Ticketmaster key acceptable? Is SeatGeek access already available, and is its required visible attribution acceptable? Without these, reliable automatic feed-ID matching remains incomplete.
6. **Unknown size:** should uncertain 1,000-plus candidates appear in discovery, and how should uncertain 5,000-plus events affect friction? The proposal keeps them out of confirmed totals.
7. **Meaning of overlap:** is the score about competition for the same fans, similarity of crowds, or shared transport pressure? These require distinct evidence, even if the UI ultimately shows one friction read.
8. **Era and crossover:** who can review era affinities, cross-genre audiences, and exceptions? No examined source provides a universal public concert-audience-overlap field.
9. **Home city:** is origin useful enough to maintain, given artists with multiple bases and productions with no hometown? It can remain nullable and off the phone row.
10. **First coverage audit:** which cities, venue set, and event formats should define "good enough" before any coverage percentage becomes a product claim?

The smallest credible next step is an identity-and-label prototype with explicit missing data: app-owned favorites, verified seller mappings where access permits, eighteen editable categories, short display labels, and event-specific tour parsing. The taxonomy can improve without changing what a favorite points to.
