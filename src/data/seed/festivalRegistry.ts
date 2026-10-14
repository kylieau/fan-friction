// The hand-kept festival and promoter list (build 5, item 1, source (c); Kylie, Oct 14). Big festivals and
// promoters are few and stable, so a short list kept by hand covers them: who runs each, where it usually is, and
// where its dates and daily size come from. An edition becomes an event only once its date, site and one day's size
// are sourced (pop-up sizing, src/data/sources/popupSizing.ts: festivals are sized per day). None are listed yet:
// every 2026 edition below has passed except Escape, which is outside Los Angeles (regional events, item 2, wait for
// Kylie's rule). Facts from docs/build-5/research/concerts-ticketmaster-misses-oct13-answer.txt; unknowns left out.
// Not read by the app yet.

export interface FestivalRecord {
  name: string;
  promoter: string;
  /** Where it has been held, as the research names it; not a venue row (open sites are not hand-listed yet). */
  usualSite: string;
  /** The covered city it would belong to, or "regional" when it sits outside one (item 2). */
  metroId: string | 'regional';
  /** Who sells it, per the research. */
  ticketing: string;
  /** Where to check the next edition's dates and size. */
  checkAt: string;
  /** The research's size note, with its source, for the next edition's sizing. */
  sizeNote?: string;
  /** Editions with a sourced date, site and daily size; empty until one is. */
  editions: { dates: string[]; dailySize?: number; source: string }[];
}

export const FESTIVALS: FestivalRecord[] = [
  { name: 'HARD Summer', promoter: 'HARD / Insomniac', usualSite: 'Hollywood Park, Inglewood', metroId: 'la', ticketing: 'Front Gate', checkAt: 'hardsummer.com', sizeNote: '~85,000 a day, sold out in 2025 (EDM Identity)', editions: [] },
  { name: 'Nocturnal Wonderland', promoter: 'Insomniac', usualSite: 'Glen Helen Regional Park, San Bernardino', metroId: 'regional', ticketing: 'Front Gate', checkAt: 'insomniac.com', sizeNote: '80,000+ over the 2023 weekend, per the sheriff (Fontana Herald News)', editions: [] },
  { name: 'Escape Halloween', promoter: 'Insomniac', usualSite: 'NOS Events Center, San Bernardino', metroId: 'regional', ticketing: 'Front Gate', checkAt: 'insomniac.com', sizeNote: '125,000 over two nights in 2017 (Fontana Herald News)', editions: [] },
  { name: 'Ocean Way', promoter: 'Goldenvoice', usualSite: 'Santa Monica Beach', metroId: 'la', ticketing: 'Festival site (platform unverified)', checkAt: 'oceanwayfestival.com', sizeNote: 'Up to 35,000 a day (Locale)', editions: [] },
  { name: 'Lollapalooza', promoter: 'C3 Presents (Live Nation)', usualSite: 'Grant Park', metroId: 'chicago', ticketing: 'Festival site', checkAt: 'lollapalooza.com', sizeNote: '115,000 a day, the cap in its city contract (Chicago Tribune via Recorder)', editions: [] },
  { name: 'Riot Fest', promoter: 'Riot Fest', usualSite: 'Douglass Park', metroId: 'chicago', ticketing: 'riotfest.org (one comparison site lists Ticketmaster; verify)', checkAt: 'riotfest.org', sizeNote: 'Up to 50,000 a day (WBEZ)', editions: [] },
];

/**
 * Promoter sources from the item (Framework's feed; Goldenvoice and Insomniac pages), and why none is read yet.
 * Checked Oct 14 (docs/build-5/handoff-5.md).
 */
export const PROMOTER_SOURCES = [
  { promoter: 'Framework', source: 'WordPress / The Events Calendar feed', status: 'Not built: no official site found (its shows sell through DICE, which refuses a normal fetch).' },
  { promoter: 'Goldenvoice', source: 'Public pages', status: "Not built: the terms page's text could not be read; check the automated-access clause first." },
  { promoter: 'Insomniac', source: 'Public pages', status: 'Not built: its terms bar robots, spiders and scrapers. Its festivals are in FESTIVALS, checked by hand.' },
];
