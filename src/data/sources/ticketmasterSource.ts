// Concerts and other ticketed shows from Ticketmaster's Discovery API, for the
// nightly job only (the key never reaches the app). Terms, Oct 6, 2026
// (docs/archive/proposals/ticketmaster-review-oct6.md): store the facts of a night, not the
// content, so each event keeps its name, date, start, venue, performers and
// Ticketmaster's id, and nothing else. Sports listings are left to the league
// feeds. Only venues the app knows are kept, and since Oct 9, 2026 (C002) the
// pull asks for them by venue id, a dozen venues a call, so a busy city is never
// cut at Ticketmaster's 1,000-result ceiling (New York has ~6,000 listings a
// month). A venue with no id on record is searched by its name near its spot.
// A listing still matches a venue by id, else by name, else by being within
// 300 m of the building. Unknown rooms are counted, not kept.

import { COVERED_METRO_IDS, METROS } from '../../config/metros';
import type { CrowdEvent, LocalDate } from '../types';
import { VENUES } from '../venues';
import { showKeys, venueByNameOrPlace, venueClosedOn } from './venueMatch';
import { isAddOnListing, listingKey, parentedAddOn } from './addOns';

const API = 'https://app.ticketmaster.com/discovery/v2/events.json';
/** How far ahead to list, in days. The schedule archive keeps 14; the catalog can hold more. */
const DAYS_AHEAD = 120;
const PAGE_SIZE = 200;
/** Ticketmaster stops paging at 1,000 results per query. A dozen venues over two months stays far under it. */
const MAX_PAGES = 5;
const WINDOW_DAYS = 60;
const VENUES_PER_CALL = 12;
/** A venue with no Ticketmaster id on record: its current name, searched this close to its spot (miles). */
const NAME_SEARCH_MILES = 3;

interface TmVenue {
  id: string;
  name: string;
  location?: { latitude: string; longitude: string };
}

interface TmEvent {
  id: string;
  name: string;
  dates: { start: { localDate: string; localTime?: string; dateTBA?: boolean; timeTBA?: boolean }; status?: { code?: string } };
  classifications?: { segment?: { name?: string }; genre?: { name?: string }; subGenre?: { name?: string } }[];
  _embedded?: {
    venues?: TmVenue[];
    attractions?: { id?: string; name: string }[];
  };
}

export interface TicketmasterPull {
  events: CrowdEvent[];
  /** Listings at rooms the venue table doesn't have, by venue name, most first. */
  unknownVenues: { name: string; count: number }[];
  /** Miscellaneous listings at 5,000+ rooms, with what the feed says about them (Kylie, Oct 16: the next add-on rule comes from feed facts, not words). */
  bigRoomSpecials: { name: string; venueId: string; segment: string; genre: string; subGenre: string; dropped: boolean }[];
  /** Every listing the add-on filter dropped, for the nightly log and the filter check. */
  droppedAddOns: { name: string; venueId: string; date: LocalDate }[];
  pages: number;
}

/** The venue record a Ticketmaster venue matches, or undefined. */
function venueFor(metroId: string, v: TmVenue, date: LocalDate) {
  const ours = Object.values(VENUES).filter((venue) => venue.metroId === metroId);
  const byId = ours.find((venue) => venue.ticketmasterIds?.includes(v.id));
  if (byId) return byId;
  // By name, else within 300 m of a room we know (C016); shared with the other sellers (venueMatch.ts).
  return venueByNameOrPlace(metroId, v.name, v.location ? Number(v.location.latitude) : undefined, v.location ? Number(v.location.longitude) : undefined, date);
}

/**
 * Buildings whose games no league feed lists (docs/product/no-feed-teams-proposal.md; Kylie's OK, Oct 8, 2026): the AHL,
 * ECHL, PWHL, WHL, CFL, UFL, USL Super League, MASL, cricket, rodeo and motorsport rooms. Sports listings are kept
 * only here, and a feed game at the same building on the same date still wins (the catalog and archive drop the
 * Ticketmaster copy).
 */
const SPORTS_FROM_TICKETMASTER = new Set([
  // Milwaukee smaller sports and races; league-feed games at the same building/date still win.
  'uwm-panther-arena', 'al-mcguire-center', 'klotsche-center', 'franklin-field', 'dockhounds-ballpark',
  'frawley-stadium', 'mann-skyline-stage',
  'kapco-park', 'milwaukee-mile', 'slinger-speedway', 'hart-park-stadium', 'engelmann-stadium',
  'al-lang-stadium', 'tampa-bay-downs', 'wish-farms-soundstage',
  // Columbus: UFL and MLS Next Pro have no league feed. Mid-Ohio stays off this list (edge circuit, not the metro default).
  'historic-crew-stadium',
  // Pittsburgh: weekly dirt racing has no league feed (docs/research/city-builds/pittsburgh/pittsburgh-venue-table-answer.md A06).
  'lernerville-speedway',
  // Detroit: USL Championship has no separate league feed in the app; Keyworth is DCFC home through 2027.
  'keyworth-stadium',
  // Cleveland: G League, Frontier League and indoor soccer have no league feed; Crushers/Charge/Crunch/Wolstein public events may list here.
  'public-hall-cleveland', 'wolstein-center', 'forefront-field',
  // Austin rooms whose primary tenants have no league feed (Stars hockey still comes from HockeyTech and wins on the same date).
  'heb-center-cedar-park', 'luedecke-arena', 'house-park', 'moody-center', 'myers-stadium', 'disch-falk-field',
  'gregory-gym', 'mccombs-field', 'bobcat-soccer-complex', 'bobcat-softball-stadium',
  'desert-diamond-arena', 'phoenix-raceway', 'firebird-motorsports-park',
  // Sacramento rooms with no league feed: community-college football, racing, rodeo, and Sac State volleyball.
  'hughes-stadium', 'all-american-speedway', 'dan-russell-rodeo-arena', 'sac-state-nest',
  // Reliant Stadium also has the Texans on ESPN; a same-day feed game still wins. Rodeo and bowl listings are not NFL games.
  'reliant-stadium', 'reliant-arena', 'sam-houston-race-park',
  // Minneapolis rooms with no league schedule feed: Aurora, MNUFC2, Gophers volleyball, women's hockey.
  'nsc-stadium', 'tco-stadium', 'ridder-arena', 'maturi-pavilion', 'anderson-arena',
  'valley-fields', 'wilson-ice-arena', 'pettit-national-ice-center', 'buuck-field-house',
  'ozaukee-ice-center', 'schneider-stadium', 'time-of-grace-center', 'raabe-stadium',
  'dickies-arena', 'will-rogers-coliseum', 'cutx-event-center', 'grand-prairie-stadium', 'mansfield-stadium', 'cotton-bowl', 'toyota-stadium', 'comerica-center', 'texas-motor-speedway',
  // The Dogs and Boomers (American Association, Frontier League) have no schedule in MLB's partner-league feed, so their parks are swept too.
  'allstate-arena', 'now-arena', 'chicagoland-speedway', 'impact-field', 'wintrust-field',
  'toyota-arena', 'pechanga-arena', 'acrisure-arena',
  'climate-pledge-arena', 'angel-of-the-winds-arena', 'accesso-showare-center',
  'gas-south-arena', 'echopark-speedway',
  'kezar-stadium', 'oakland-coliseum',
  'place-bell', 'percival-molson-stadium', 'cepsum-stadium', 'iga-stadium',
  // Vancouver rooms whose tenants are not fully on a league feed (CFL schedule was empty; NLL listings had no venue;
  // CEBL, CPL, NSL, MLS Next Pro and U Sports have no adapter). A feed game at the same building and date still wins.
  'bc-place', 'rogers-arena', 'pacific-coliseum', 'langley-events-centre', 'langley-centre-gym',
  'willoughby-stadium', 'swangard-stadium', 'thunderbird-arena', 'thunderbird-stadium', 'war-memorial-gym',
  // Mexico City rooms with no league feed. Liga MX and Capitanes stay on ESPN, so Banorte, CU and Arena CDMX are not swept.
  'estadio-alfredo-harp-helu', 'gimnasio-juan-de-la-barrera', 'arena-mexico', 'estadio-wilfrido-massieu', 'estadio-ciudad-de-los-deportes',
  // Las Vegas rooms whose tenants have no league feed (NASCAR, indoor football, lacrosse, rodeo). Feed games at the same building still win.
  'las-vegas-motor-speedway', 'lvms-dirt-track', 'lvms-bullring', 'lees-family-forum', 'orleans-arena', 'thomas-mack-center', 'cashman-field',
  // Kansas City rooms with no league schedule in MLB or ESPN (ECHL, MASL, NASCAR, Big 12/PBR, NAIA, Monarchs).
  'cable-dahmer-arena', 'kansas-speedway', 't-mobile-center', 'municipal-auditorium-arena', 'legends-field',
  // Toronto rooms whose clubs are not on MLB/ESPN/HockeyTech (CFL feed is empty; OHL, NLL, CPL, NSL, U Sports).
  'bmo-field', 'caa-centre-brampton', 'tribute-communities-centre', 'uoft-varsity-stadium', 'uoft-varsity-arena', 'york-lions-stadium', 'mattamy-athletic-centre', 'kimel-field-house',
  // Denver: NLL feed lists Mammoth home games without a venue; Ball Arena Ticketmaster lacrosse still wins when both exist.
  'ball-arena', 'denver-coliseum', 'hamilton-gymnasium', 'peter-barton-lacrosse-stadium',
  // Raleigh–Durham rooms whose tenants have no league feed (CPL and USL2 clubs, UFA, Shaw, Duke and UNC soccer and lacrosse, fair rodeos). Feed games at the same building still win.
  'north-main-athletic-complex-stadium', 'nomaco-park', 'durham-county-memorial-stadium', 'koskinen-stadium', 'dorrance-field', 'dorton-arena',
  // Ottawa–Gatineau rooms with no league feed (Frontier League, OHL, QMJHL, CEBL, CPL, U Sports, USL Super League).
  'ottawa-stadium', 'centre-slush-puppie', 'hard-rock-live-ottawa', 'arena-at-td-place', 'theatre-casino-lac-leamy',
]);

function kindOf(segment: string | undefined, venueId: string): CrowdEvent['kind'] | null {
  switch (segment) {
    case 'Music':
      return 'show';
    case 'Arts & Theatre':
    case 'Miscellaneous':
    case 'Film':
      return 'special';
    case 'Sports':
      return SPORTS_FROM_TICKETMASTER.has(venueId) ? 'game' : null; // elsewhere the league feeds own sports
    default:
      return 'special';
  }
}

/** A listing name without a venue or "City, ST" tail the seller glued on; exported for the check script. */
export function untagName(name: string, venueNames: string[]): string {
  let n = name.trim();
  const bar = n.lastIndexOf(' | ');
  if (bar > 0) {
    const tail = n.slice(bar + 3).trim().toLowerCase();
    if (venueNames.some((v) => v.toLowerCase() === tail)) n = n.slice(0, bar).trim();
  }
  return n.replace(/\s+[–—-]\s+[A-Z][A-Za-z.' ]+,\s*[A-Z]{2}$/, '').trim();
}

/** The sport a Ticketmaster genre names ("Hockey" → hockey); "other" when it is a rodeo, a race or unclear. */
function sportOf(genre: string | undefined): string {
  const g = (genre ?? '').toLowerCase();
  // Lucha libre is wrestling (build 5, item 13). CMLL listings came in as boxing; the raw genre text is unconfirmed
  // (no key outside the nightly job), so the rule keys on the words "lucha libre" in the genre or the event name.
  if (g.includes('lucha libre')) return 'wrestling';
  for (const s of ['hockey', 'basketball', 'football', 'soccer', 'baseball', 'lacrosse', 'volleyball', 'rodeo', 'motorsports', 'tennis', 'cricket', 'wrestling', 'boxing']) if (g.includes(s)) return s;
  return 'other';
}

function addDays(date: LocalDate, days: number): LocalDate {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

/** A performer's nights at one venue within a week of each other: the run each night belongs to. */
function markRuns(events: CrowdEvent[]) {
  const groups = new Map<string, CrowdEvent[]>();
  for (const e of events) {
    if (!e.performer || e.place.type !== 'venue') continue;
    const key = `${e.performer.toLowerCase()}|${e.place.venueId}`;
    groups.set(key, [...(groups.get(key) ?? []), e]);
  }
  for (const list of groups.values()) {
    if (list.length < 2) continue;
    for (const e of list) {
      const [y, m, d] = e.date.split('-').map(Number);
      const t = Date.UTC(y, m - 1, d);
      const run = list.filter((o) => {
        const [oy, om, od] = o.date.split('-').map(Number);
        return Math.abs(Date.UTC(oy, om - 1, od) - t) <= 7 * 86_400_000;
      }).length;
      if (run >= 2) e.occasionFacts = { ...(e.occasionFacts ?? {}), run };
    }
  }
}

// Ticketmaster allows five requests a second and 5,000 a day, and answers 429 to both. Every
// request waits its turn (the old pause ran only between pages of one window, so the first
// request of each window went out back to back). A per-second refusal ("spike arrest") is
// retried after a pause; only the daily quota stops the run.
const MIN_GAP_MS = 250;
let lastRequestAt = 0;

async function getPage(url: string): Promise<Response> {
  for (let attempt = 0; ; attempt++) {
    const wait = lastRequestAt + MIN_GAP_MS - Date.now();
    if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
    lastRequestAt = Date.now();
    const r = await fetch(url);
    if (r.status !== 429) return r;
    const reason = await r.text().catch(() => '');
    if (/quota/i.test(reason) || attempt >= 3) {
      throw new Error(`Ticketmaster: ${/quota/i.test(reason) ? 'over the daily quota' : 'still refusing after retries'} (${reason.slice(0, 120)})`);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000 * 2 ** attempt));
  }
}

/** Upcoming listings for one covered city. Throws when the feed can't be read. */
export async function loadTicketmasterEvents(metroId: string, apiKey: string, now = new Date()): Promise<TicketmasterPull> {
  const metro = METROS[metroId];
  if (!metro) throw new Error(`Unknown metro ${metroId}`);
  const today = now.toLocaleDateString('en-CA', { timeZone: metro.timeZone });
  const through = addDays(today, DAYS_AHEAD);
  const events: CrowdEvent[] = [];
  const unknown = new Map<string, number>();
  const bigRoomSpecials: TicketmasterPull['bigRoomSpecials'] = [];
  const droppedAddOns: TicketmasterPull['droppedAddOns'] = [];
  const roomListings = new Map<string, string[]>();
  const rawNames = new Map<string, string>();
  const showKeysOf = new Map<string, string[]>();
  const seen = new Set<string>();
  // Ticketmaster can list one show twice under two ids (a second listing, a package). The same
  // performer in the same building at the same date and start is one show, counted once.
  const shows = new Set<string>();
  let pages = 0;
  // The queries: the city's venues by id, a dozen at a time per two-month window; then each
  // venue with no id by its name near its spot, over the whole horizon.
  const ours = Object.values(VENUES).filter((venue) => venue.metroId === metroId);
  const withIds = ours.filter((venue) => venue.ticketmasterIds?.length);
  const queries: Record<string, string>[] = [];
  for (let i = 0; i < withIds.length; i += VENUES_PER_CALL) {
    const ids = withIds.slice(i, i + VENUES_PER_CALL).flatMap((venue) => venue.ticketmasterIds ?? []);
    for (let from = today; from <= through; from = addDays(from, WINDOW_DAYS)) {
      const to = addDays(from, WINDOW_DAYS - 1) < through ? addDays(from, WINDOW_DAYS - 1) : through;
      queries.push({ venueId: ids.join(','), startDateTime: `${from}T00:00:00Z`, endDateTime: `${to}T23:59:59Z` });
    }
  }
  for (const venue of ours.filter((v) => !v.ticketmasterIds?.length)) {
    queries.push({
      keyword: venue.names[venue.names.length - 1].name,
      latlong: `${venue.location[1]},${venue.location[0]}`,
      radius: String(NAME_SEARCH_MILES),
      unit: 'miles',
      startDateTime: `${today}T00:00:00Z`,
      endDateTime: `${through}T23:59:59Z`,
    });
  }
  for (const query of queries) {
  for (let page = 0; page < MAX_PAGES; page++) {
    const params = new URLSearchParams({ apikey: apiKey, ...query, size: String(PAGE_SIZE), page: String(page), sort: 'date,asc' });
    const r = await getPage(`${API}?${params}`);
    if (!r.ok) throw new Error(`Ticketmaster answered ${r.status}`);
    const json = (await r.json()) as { _embedded?: { events?: TmEvent[] }; page?: { totalPages?: number } };
    pages++;
    for (const e of json._embedded?.events ?? []) {
      if (seen.has(e.id)) continue;
      seen.add(e.id);
      if (/cancel|postpon|resched/i.test(e.dates.status?.code ?? '')) continue;
      if (e.dates.start.dateTBA || !e.dates.start.localDate) continue;
      const segment = e.classifications?.[0]?.segment?.name;
      const tmVenue = e._embedded?.venues?.[0];
      if (!tmVenue) continue;
      const venue = venueFor(metroId, tmVenue, e.dates.start.localDate);
      if (!venue) {
        if (segment !== 'Sports') unknown.set(tmVenue.name, (unknown.get(tmVenue.name) ?? 0) + 1);
        continue;
      }
      // A closed room takes no listing inside its closed window (the Apollo during its renovation; Kylie, Oct 16).
      if (venueClosedOn(venue, e.dates.start.localDate)) continue;
      const kind = kindOf(segment, venue.id);
      if (!kind) continue;
      // Every placed listing's name, kept for the same-room parent check after the pass (add-on layer 3).
      const roomDay = `${venue.id}|${e.dates.start.localDate}`;
      roomListings.set(roomDay, [...(roomListings.get(roomDay) ?? []), listingKey(e.name)]);
      const addOn = isAddOnListing(e.name, kind, {
        acts: (e._embedded?.attractions ?? []).map((a) => a.name).filter(Boolean),
        genre: e.classifications?.[0]?.genre?.name,
      });
      // What the feed says about a miscellaneous listing at a big room (a stadium tour got a stadium's crowd, Oct 16), for the log.
      if (kind === 'special' && Math.max(0, ...venue.capacity.map((c) => c.seats)) >= 5000) {
        const c = e.classifications?.[0];
        bigRoomSpecials.push({ name: e.name.trim(), venueId: venue.id, segment: segment ?? '', genre: c?.genre?.name ?? '', subGenre: c?.subGenre?.name ?? '', dropped: addOn });
      }
      if (addOn) {
        droppedAddOns.push({ name: e.name.trim(), venueId: venue.id, date: e.dates.start.localDate });
        continue;
      }
      const attractions = e._embedded?.attractions ?? [];
      const performers = attractions.map((a) => a.name).filter(Boolean);
      // The acts' attraction ids, kept for shows at 5,000+ rooms (Kylie, Oct 19, 2026, the artist-genres answers): the
      // material for matching a favorite by id later. In the feed's order; never the website's page number.
      const bigRoom = Math.max(0, ...venue.capacity.map((c) => c.seats)) >= 5000;
      const performerIds = attractions.map((a) => a.id).filter((id): id is string => Boolean(id));
      // A listing name with the venue or the city glued on ("Jurassic Quest – Anaheim, CA | Anaheim Convention Center")
      // reads as the event alone (Oct 16): the tail after " | " goes when it names a room we have, and a trailing
      // "City, ST" tag goes. Any city; the name is otherwise kept as written.
      const name = untagName(e.name, venue.names.map((n) => n.name));
      const performer = (performers[0] ?? name).trim();
      const genre = e.classifications?.[0]?.genre?.name ?? e.classifications?.[0]?.segment?.name ?? 'Other';
      // One performer in one building on one date is one show, whatever time each listing carries (C014); one event
      // listed under two segments with two performer names is caught by its name (the shared key, venueMatch.ts).
      // The duplicate check runs after the pass, once add-on layer 3 has had the whole night (an add-on caught only by
      // its parent must never stand in for the real show).
      showKeysOf.set(`${e.dates.start.localDate}-tm-${e.id}`, showKeys(e.dates.start.localDate, venue.id, performer, e.name));
      events.push({
        id: `${e.dates.start.localDate}-tm-${e.id}`,
        metroId,
        date: e.dates.start.localDate,
        start: e.dates.start.timeTBA || !e.dates.start.localTime ? null : e.dates.start.localTime.slice(0, 5),
        kind,
        title: kind === 'show' ? performer : name,
        // The full listing name when it says more than the act ("Bruno Mars: The Romantic Tour"; build notes 2, event naming).
        ...(kind === 'show' && name.toLowerCase() !== performer.toLowerCase() ? { officialTitle: name } : {}),
        place: { type: 'venue', venueId: venue.id },
        audience: kind === 'show' ? { domain: 'music', genre } : kind === 'game' ? { domain: 'sports', sport: sportOf(`${genre} ${e.classifications?.[0]?.subGenre?.name ?? ''} ${e.name}`) } : { domain: 'other', tag: genre },
        performer,
        // Whether that performer is an act the feed names, or the listing's name standing in (R16; from the Oct 20 run).
        act: performers.length > 0,
        ...(kind === 'show' && bigRoom && performerIds.length ? { performerIds } : {}),
        crowd: [],
        sourceId: 'ticketmaster',
        ticketmasterId: e.id,
      });
      rawNames.set(events[events.length - 1].id, e.name);
    }
    const total = json.page?.totalPages ?? 1;
    if (page + 1 >= total) break;
  }
  }
  // Add-on layer 3: a listing that is another same-room, same-date listing's name plus add-on words drops.
  const kept = events.filter((event) => {
    const raw = rawNames.get(event.id) ?? event.title;
    const roomDay = `${event.place.type === 'venue' ? event.place.venueId : ''}|${event.date}`;
    if (!parentedAddOn(raw, roomListings.get(roomDay) ?? [])) return true;
    droppedAddOns.push({ name: raw.trim(), venueId: event.place.type === 'venue' ? event.place.venueId : '', date: event.date });
    const special = bigRoomSpecials.find((s) => s.name === raw.trim() && !s.dropped);
    if (special) special.dropped = true;
    return false;
  }).filter((event) => {
    const [show, named] = showKeysOf.get(event.id) ?? [event.id, event.id];
    if (shows.has(show) || shows.has(named)) return false;
    shows.add(show);
    shows.add(named);
    return true;
  });
  markRuns(kept);
  return {
    events: kept,
    unknownVenues: [...unknown].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count),
    bigRoomSpecials,
    droppedAddOns,
    pages,
  };
}

export const TICKETMASTER_METRO_IDS = [...COVERED_METRO_IDS];
