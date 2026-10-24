// College games from each school's own public calendar feed (Sidearm Sports sites; Kylie, Oct 21, 2026, evening).
// ESPN carries no college exhibitions and the schools' box-office sales never reach Ticketmaster, so the feed a
// school publishes for "add to calendar" is read nightly instead: every scheduled game, exhibitions included, with
// the room. Both sides of a game can publish it; an away row at a room in this city places here too (Cal Baptist
// "at UCLA", Pauley Pavilion), which is how a school on another provider gets its home games. The nightly job only;
// the app reads the catalog. Same storage rule as the other feeds: the facts of a game, nothing of the page.
//
// Terms (sidearmsports.com/terms-of-service, read Oct 21, 2026): the feed is an offered download; the Services are
// for "personal, noncommercial use". Recorded in docs/reference/data-sources.md.

import { METROS } from '../../config/metros';
import { TEAMS, isCollegeTeam, schoolWord, sportWords, storedSchoolWord } from '../teams';
import type { CrowdEvent, Division, LocalDate } from '../types';
import { SIDEARM_SCHOOLS, type SidearmSchool } from './sidearmSchools';
import { venueByNameOrPlace, venueClosedOn } from './venueMatch';

const FEED = '/calendar.ashx/calendar.ics';

interface Vevent {
  uid: string;
  start: string | null;
  allDay: boolean;
  summary: string;
  location: string;
  description: string;
}

/** The feed's VEVENT blocks, lines unfolded and text unescaped. */
export function parseIcs(text: string): Vevent[] {
  const lines = text.replace(/\r\n/g, '\n').replace(/\n[ \t]/g, '').split('\n');
  const out: Vevent[] = [];
  let cur: Record<string, string> | null = null;
  const unescape = (s: string) => s.replace(/\\n/gi, '\n').replace(/\\,/g, ',').replace(/\;/g, ';').replace(/\\\\/g, '\\');
  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') cur = {};
    else if (line === 'END:VEVENT' && cur) {
      out.push({
        uid: cur.UID ?? '',
        start: cur.DTSTART ?? null,
        allDay: cur['DTSTART;VALUE=DATE'] !== undefined,
        summary: unescape(cur.SUMMARY ?? ''),
        location: unescape(cur.LOCATION ?? ''),
        description: unescape(cur.DESCRIPTION ?? ''),
      });
      if (cur['DTSTART;VALUE=DATE']) out[out.length - 1].start = cur['DTSTART;VALUE=DATE'];
      cur = null;
    } else if (cur) {
      const at = line.indexOf(':');
      if (at > 0) cur[line.slice(0, at)] = line.slice(at + 1);
    }
  }
  return out;
}

function localParts(iso: string, timeZone: string): { date: LocalDate; time: string } {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date(iso));
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  return { date: `${get('year')}-${get('month')}-${get('day')}`, time: `${get('hour')}:${get('minute')}` };
}

/** "20261022T020000Z" → an ISO instant; a date-only value stays a date. */
function whenOf(v: Vevent, timeZone: string): { date: LocalDate; time: string | null } | null {
  if (!v.start) return null;
  if (v.allDay || /^\d{8}$/.test(v.start)) return { date: `${v.start.slice(0, 4)}-${v.start.slice(4, 6)}-${v.start.slice(6, 8)}`, time: null };
  const m = v.start.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z?)$/);
  if (!m) return null;
  if (!m[7]) return { date: `${m[1]}-${m[2]}-${m[3]}`, time: `${m[4]}:${m[5]}` };
  return localParts(`${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}Z`, timeZone);
}

// The two-word sports before the word they share (field hockey before hockey, beach volleyball before volleyball).
const SPORTS: [RegExp, string][] = [
  [/field hockey/i, 'field hockey'], [/beach volleyball/i, 'beach volleyball'], [/cross country/i, 'cross country'],
  [/basketball/i, 'basketball'], [/football/i, 'football'], [/soccer/i, 'soccer'], [/baseball/i, 'baseball'],
  [/softball/i, 'softball'], [/volleyball/i, 'volleyball'], [/hockey/i, 'hockey'], [/lacrosse/i, 'lacrosse'],
  [/tennis/i, 'tennis'], [/water polo/i, 'water polo'], [/wrestling/i, 'wrestling'], [/gymnastics/i, 'gymnastics'],
  [/track/i, 'track'], [/swim/i, 'swimming'], [/golf/i, 'golf'], [/rowing|crew/i, 'rowing'], [/rugby/i, 'rugby'],
  [/fencing/i, 'fencing'],
];
function sportOf(summary: string): string {
  for (const [re, sport] of SPORTS) if (re.test(summary)) return sport;
  return 'other';
}

/** The side a program's words name ("Women's Soccer"); none for a bare "Volleyball", never guessed. */
function divisionOf(program: string): Division | undefined {
  if (/^women's\b/i.test(program)) return 'women';
  if (/^men's\b/i.test(program)) return 'men';
  return undefined;
}

/** The facts of a school's game the app keeps: the sport, the level, and the side when the feed named it. */
function audienceOf(program: string): CrowdEvent['audience'] {
  const division = divisionOf(program);
  return { domain: 'sports', sport: sportOf(program), level: 'college', ...(division ? { division } : {}) };
}

/**
 * The program as the app writes it: "MEN'S BASKETBALL" → "Men's Basketball", "Basketball (M)" → "Men's Basketball",
 * "#4 Ice Hockey" → "Ice Hockey", and a side the feed's prefix carries ("Pandas" → "Women's Volleyball"). Never a
 * guessed side: a bare "Volleyball" stays bare.
 */
function programWords(raw: string, side?: 'men' | 'women'): string {
  let p = raw.replace(/^#\d+\s+/, '').replace(/\s+/g, ' ').trim();
  const tagged = p.match(/^(.*?)\s*\((M|W)\)$/i);
  if (tagged) p = `${tagged[2].toUpperCase() === 'M' ? "Men's" : "Women's"} ${tagged[1]}`;
  if (p === p.toUpperCase()) p = p.toLowerCase().replace(/(^|[\s'/-])([a-z])/g, (_, b, c) => `${b}${c.toUpperCase()}`).replace(/'S\b/g, "'s");
  if (side && !/\b(?:men|women)'s\b/i.test(p)) p = `${side === 'women' ? "Women's" : "Men's"} ${p}`;
  return p;
}

/** "[L] USC Trojans Men's Basketball vs North Carolina (Exhibition)" → its parts. */
function readSummary(summary: string, school: SidearmSchool) {
  const name = summary.replace(/^\[[A-Z]\]\s*/, '').replace(/\s+/g, ' ').trim();
  // The longest prefix first, so "University of Alberta Pandas" wins over "University of Alberta".
  const prefix = [...school.school].sort((a, b) => b.length - a.length).find((s) => name.toLowerCase().startsWith(s.toLowerCase()));
  const rest = prefix ? name.slice(prefix.length).trim() : name;
  const m = rest.match(/^(.*?)\s+(vs\.?|at)\s+(.+)$/i);
  if (!m) return null;
  const program = programWords(m[1], prefix ? school.sides?.[prefix] : undefined); // "Men's Basketball"
  const home = /^vs/i.test(m[2]);
  let opponent = m[3].trim().replace(/^#\d+\s+/, '');
  // A trailing note ("- B1G Premiere", "- Exhibition", "(Exhibition)", "- Home") is kept apart from the opponent.
  const note = opponent.match(/\s[-–]\s(.+)$|\s(\([^)]*\))$/);
  if (note) opponent = opponent.slice(0, note.index).trim();
  const exhibition = /exhib/i.test(rest);
  return { program, home, opponent, exhibition };
}

/**
 * The room in "Los Angeles, Calif., Galen Center" or "Los Angeles, CA, Pauley Pavilion", as the names to try in order;
 * none for "TBD" or a bare city. The feeds vary (Oct 22, 2026, every covered city): "Chestnut, Hill, Mass., Conte
 * Forum" (a comma too many), ", Conte Forum" (no city), "Chaifetz Arena (Basketball)", "Toronto, Ont. (Mattamy
 * Athletic Centre)", "Molson Stadium (Montreal, Que)", "United Airlines Field at L.A. Memorial Coliseum". Each name
 * must still equal one on file in this city, so a state or a city never places a game.
 */
function roomCandidates(location: string): string[] {
  const out: string[] = [];
  const add = (name: string | undefined) => {
    const n = name?.replace(/\s+/g, ' ').trim();
    if (n && !/^tbd$/i.test(n) && !out.includes(n)) out.push(n);
  };
  // "Washington, D.C. / Capital One Arena", "Las Vegas, Nev. / The Pavilion": the room after a slash.
  const slash = location.match(/^.*?,[^/]*\/\s*(.+)$/);
  if (slash) add(slash[1]);
  const paren = location.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (paren && /,/.test(paren[2]) && !/,/.test(paren[1])) add(paren[1]); // "Molson Stadium (Montreal, Que)"
  else if (paren && /,/.test(paren[1]) && !/,/.test(paren[2])) add(paren[2]); // "Toronto, Ont. (Mattamy Athletic Centre)"
  const parts = location.split(/,\s*/).map((p) => p.trim()).filter(Boolean);
  if (parts.length >= 3) add(parts.slice(2).join(', '));
  // The last part alone when it reads as a room (two words or more): "Mass., Conte Forum", ", Conte Forum".
  const last = parts[parts.length - 1];
  if (last && /\s/.test(last)) add(last);
  for (const room of [...out]) {
    add(room.replace(/\s*\([^)]*\)\s*$/, '')); // "Chaifetz Arena (Basketball)"
    add(room.replace(/^.*\s+at\s+(the\s+)?/i, '')); // the building after "at"
    add(room.replace(/\s+at\s+.*$/i, '')); // the field before it
  }
  return out;
}

const plainWords = (s: string) => s.toLowerCase().replace(/\bice hockey\b/g, 'hockey').replace(/[^a-z0-9]+/g, ' ').trim();

/**
 * Our team record for a school's program, when one exists (Oct 22, 2026, every city): the school names the feed
 * uses (or an opponent's name, for the home side of an away row) against each college program's school word and
 * aliases in this city, then the program words against the program's sport words ("Men's Basketball"; "Ice Hockey"
 * and "Hockey" alike). A bare sport word ("Volleyball") links only when the school has one program of that sport on
 * file, never by guessing the side. The stored full name and aliases still match as they did ("USC Trojans Men's
 * Basketball").
 */
function teamIdFor(schoolNames: readonly string[], program: string, metroId: string): string | undefined {
  const schools = new Set(schoolNames.map(plainWords));
  // "Men's Hockey" (U Sports, Lindenwood) and "Men's Ice Hockey" are one program word.
  const hockey = (s: string) => s.replace(/\bice hockey\b/, 'hockey');
  const prog = hockey(plainWords(program));
  const wanted = new Set([...schools].map((s) => `${s} ${prog}`));
  for (const team of Object.values(TEAMS)) {
    for (const n of [team.name, ...(team.aliases ?? [])]) if (wanted.has(plainWords(n))) return team.id;
  }
  const programs = Object.values(TEAMS).filter(
    (t) => t.metroId === metroId && isCollegeTeam(t) && (schools.has(plainWords(schoolWord(t))) || schools.has(plainWords(storedSchoolWord(t))) || (t.aliases ?? []).some((a) => schools.has(plainWords(a)))),
  );
  const exact = programs.filter((t) => hockey(plainWords(sportWords(t))) === prog);
  if (exact.length === 1) return exact[0].id;
  const bare = programs.filter((t) => plainWords(t.sport) === prog || hockey(plainWords(sportWords(t))).replace(/^(?:men|women) s /, '') === prog);
  return bare.length === 1 ? bare[0].id : undefined;
}

/** One school's feed as games at rooms this city has on file. Throws when the feed can't be read. */
export async function loadSidearmSchool(school: SidearmSchool, fromDate?: LocalDate): Promise<CrowdEvent[]> {
  const metro = METROS[school.metroId];
  if (!metro) return [];
  const r = await fetch(`${school.site}${FEED}`, { headers: { Accept: 'text/calendar' } });
  if (!r.ok) throw new Error(`${school.site} answered ${r.status}`);
  const text = await r.text();
  if (!/BEGIN:VCALENDAR/.test(text)) throw new Error(`${school.site} did not return a calendar`);
  const events: CrowdEvent[] = [];
  for (const v of parseIcs(text)) {
    const when = whenOf(v, metro.timeZone);
    if (!when || (fromDate && when.date < fromDate)) continue;
    const read = readSummary(v.summary, school);
    if (!read) continue;
    const venue = roomCandidates(v.location)
      .map((name) => venueByNameOrPlace(school.metroId, name, undefined, undefined, when.date))
      .find(Boolean);
    if (!venue || venueClosedOn(venue, when.date)) continue;
    // The home side's record: this school's for a home row; for an away row at a room in this city, the opponent's
    // (Cal Baptist "at UCLA" links UCLA's program), so a school on another provider still gets its team link.
    const homeId = read.home ? teamIdFor([school.short, ...school.school], read.program, school.metroId) : teamIdFor([read.opponent], read.program, school.metroId);
    const awayName = read.home ? read.opponent : school.short;
    // The visitor's record too, when this city has one (Cal Baptist's own program at UCLA), so a favorite gets
    // credit for its away games (build 7.1, M9; a build 7 review had flagged name-only visitors).
    const awayId = read.home ? teamIdFor([read.opponent], read.program, school.metroId) : teamIdFor([school.short, ...school.school], read.program, school.metroId);
    // School names only, home first as every feed writes it (the title rules show "Cal Baptist at UCLA"); the
    // program goes on the label line, never in the title (Kylie, Oct 23, 2026, build 7.1 M9).
    const title = read.home ? `${school.short} vs. ${read.opponent}` : `${read.opponent} vs. ${school.short}`;
    const gameId = v.uid.match(/vcal_(\d+)/)?.[1] ?? v.uid.replace(/[^a-z0-9]+/gi, '-');
    const tm = v.description.match(/ticketmaster\.com\/[^\s]*\/event\/([A-Z0-9]+)/i)?.[1];
    events.push({
      id: `${when.date}-sa-${school.site.replace(/^https?:\/\//, '').replace(/[^a-z0-9]+/gi, '-')}-${gameId}`,
      metroId: school.metroId,
      date: when.date,
      start: when.time,
      kind: 'game',
      title,
      ...(read.exhibition ? { preseason: true } : {}),
      place: { type: 'venue', venueId: venue.id },
      audience: audienceOf(read.program),
      ...(homeId ? { teams: { home: homeId, away: awayId ?? awayName, awayOpponent: awayName.toLowerCase().replace(/[^a-z0-9]+/g, '-') } } : {}),
      ...(tm ? { ticketmasterId: tm } : {}),
      crowd: [],
      sourceId: 'sidearm',
    });
  }
  return events;
}

/** The program words a stored title can carry between the home school and "vs.", the longest first. */
const PROGRAM_IN_TITLE = new RegExp(
  "^(.*?)\\s+((?:Men's |Women's )?(?:Beach Volleyball|Field Hockey|Ice Hockey|Water Polo|Cross Country|Track(?: (?:&|and) Field)?|Swimming(?: (?:&|and) Diving)?|Basketball|Football|Soccer|Baseball|Softball|Volleyball|Hockey|Lacrosse|Tennis|Wrestling|Gymnastics|Golf|Rowing|Rugby|Fencing))\\s+vs\\.\\s+(.+)$",
  'i',
);

/**
 * A school-feed row saved before Oct 24, 2026 (build 7.1, M9 and M38), with the program in its title ("UCLA Men's
 * Basketball vs. Cal Baptist"), read as the rows are written now: school names only, the sport and side on the
 * audience, and the team record when one matches. Any other row comes back as it is, the same object, so a caller
 * can tell a repair from a pass. The catalog applies it on read and the nightly job writes it back to past rows;
 * nothing about a verdict is touched.
 */
export function repairSidearmRow(event: CrowdEvent): CrowdEvent {
  // A row written since the fix carries its level; it is never read again, so a school whose name ends in a sport
  // word ("Academy of Football") can't lose a word to a second pass.
  if (event.sourceId !== 'sidearm' || event.audience.domain !== 'sports' || event.audience.level !== undefined) return event;
  const m = event.title.match(PROGRAM_IN_TITLE);
  if (!m) return event;
  const [, home, program, away] = m;
  const homeId = event.teams?.home ?? teamIdFor([home], program, event.metroId);
  // The visitor's record where one matches, even on a row that already had the home side (its visitor was text).
  const awayId = (event.teams?.away && TEAMS[event.teams.away] ? event.teams.away : undefined) ?? teamIdFor([away], program, event.metroId);
  return {
    ...event,
    title: `${home} vs. ${away}`,
    audience: audienceOf(program),
    ...(homeId ? { teams: { ...(event.teams ?? {}), home: homeId, away: awayId ?? away, awayOpponent: event.teams?.awayOpponent ?? away.toLowerCase().replace(/[^a-z0-9]+/g, '-') } } : {}),
  };
}

/**
 * Every listed school in a city, each feed read once; a feed that fails is logged by the caller and costs nothing
 * else. Two schools publishing the same game (home and away) give two rows; the shared one-game rule in
 * `dropGamesCoveredByFeeds` keeps one.
 */
export async function loadSidearmSchedule(metroId: string, fromDate?: LocalDate): Promise<CrowdEvent[]> {
  const schools = SIDEARM_SCHOOLS.filter((s) => s.metroId === metroId);
  const out: CrowdEvent[] = [];
  const failed: string[] = [];
  for (const school of schools) {
    try {
      out.push(...(await loadSidearmSchool(school, fromDate)));
    } catch (error) {
      failed.push(`${school.short} (${error instanceof Error ? error.message : String(error)})`);
    }
  }
  if (failed.length) console.log(`${metroId}: school feeds not read: ${failed.join('; ')}.`);
  // Both schools publish the same game (USC vs LMU at Galen from both feeds): the first read keeps it.
  const minutes = (t: string | null) => (t ? Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5)) : null);
  const kept: CrowdEvent[] = [];
  for (const e of out) {
    const twin = kept.find((k) => k.place.type === 'venue' && e.place.type === 'venue' && k.place.venueId === e.place.venueId && k.date === e.date
      && k.audience.domain === 'sports' && e.audience.domain === 'sports' && k.audience.sport === e.audience.sport
      && (minutes(k.start) == null || minutes(e.start) == null || Math.abs((minutes(k.start) ?? 0) - (minutes(e.start) ?? 0)) <= 120));
    if (!twin) kept.push(e);
  }
  return kept;
}
