// Loads the non-league events from past-dates research answers (the CSV format of
// docs/research/events-and-dates/past-nights-research-prompt.md) so those dates count their concerts,
// festivals and other big events (Kylie, Oct 15, 2026). Any city:
//   node scripts/research-events-load.mjs --metro=la --files=<answer.md>[,<supplement.md>] [--places=<points.json>] --out=<file.sql>
// --places maps a place with no venue on file to its point: { "ROW DTLA": [lng, lat] } (look it up by hand).
// Games are skipped (the league feeds own them), but each is checked against the catalog and any game
// the catalog lacks is printed. A venue is matched only within the city; an unknown venue stops the run.
// Grounds with no per-day crowd (fairs, conventions, a race, a street fair) are listed unsized: shown on
// the date, feeding nobody's friction. A crowd goes in only where the row gives one for that day.
// Writes SQL to paste into Supabase plus the rows as JSON; every row is an upsert. A list of dates can be
// personal: keep the inputs and the output outside the repo (e.g. the git-ignored private/ folder).

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (name) => process.argv.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3);
const metroId = arg('metro');
const out = arg('out');
const files = arg('files')?.split(',').filter(Boolean) ?? [];
const placesFile = arg('places');
if (!metroId || !out || files.length === 0) {
  console.error('Usage: node scripts/research-events-load.mjs --metro=<id> --files=<a.md,b.md> --out=<file.sql>');
  process.exit(1);
}

/** One CSV line, with quoted fields. */
function csvLine(line) {
  const cells = [];
  let cur = '';
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (quoted) {
      if (c === '"' && line[i + 1] === '"') (cur += '"'), i++;
      else if (c === '"') quoted = false;
      else cur += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') cells.push(cur), (cur = '');
    else cur += c;
  }
  cells.push(cur);
  return cells.map((x) => x.trim());
}

/** The rows of the CSV block whose header starts with `head`. */
function block(text, head) {
  const rows = [];
  for (const fence of text.matchAll(/```[a-z]*\n([\s\S]*?)```/g)) {
    const lines = fence[1].split('\n').filter((l) => l.trim());
    if (!lines[0]?.startsWith(head)) continue;
    const keys = csvLine(lines[0]);
    for (const line of lines.slice(1)) {
      const cells = csvLine(line);
      rows.push(Object.fromEntries(keys.map((k, i) => [k, cells[i] ?? ''])));
    }
  }
  return rows;
}

const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
const sqlText = (s) => (s == null ? 'null' : `'${String(s).replace(/'/g, "''")}'`);
const sqlJson = (o) => `${sqlText(JSON.stringify(o))}::jsonb`;

/**
 * "reported approximately 10,000 Saturday" → 10,000 reported. A multi-day total is averaged into a day, labeled
 * estimated, only when it says it counts admissions day by day ("cumulative attendance", "turnstile", "person-days")
 * (Kylie, Oct 7, 2026, C3 in docs/product/expected-draw-decisions-oct7.md). A total of unclear kind ("attendees",
 * passes sold) is not a day's crowd: a three-day pass holder is in the crowd every day. That stays unsized.
 */
function crowdOf(text) {
  if (!text) return [];
  const n = text.match(/(\d{1,3}(?:,\d{3})+|\d{4,})/);
  if (!n) return [];
  const days = Number(text.match(/(?:across|over)\s+(?:all\s+)?(\d+)\s+days/i)?.[1] ?? 0);
  if (days > 1) {
    if (!/cumulative|turnstile|person-days|daily admissions|admissions over/i.test(text)) return [];
    const total = Number(n[1].replace(/,/g, ''));
    return [{ count: Math.round(total / days), kind: 'estimated', note: `About ${total.toLocaleString('en-US')} admissions over ${days} days, averaged per day.` }];
  }
  // "175000 over Apr 11-13; city forecast; not Sunday-only": a weekend figure, not the day's.
  if (/across|weekend|total|not \w+-only|over [A-Z][a-z]{2,8}\.? \d+\s*[-–]\s*\d+/i.test(text)) return [];
  const kind = /announced/i.test(text) ? 'announced' : /estimat/i.test(text) ? 'estimated' : 'reported';
  return [{ count: Number(n[1].replace(/,/g, '')), kind, note: 'From the date research.' }];
}

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
let exitCode = 0;
try {
  const { METROS } = await server.ssrLoadModule('/src/config/metros.ts');
  if (!METROS[metroId]) throw new Error(`Unknown metro: ${metroId}`);
  const { venueByNameOrPlace } = await server.ssrLoadModule('/src/data/sources/venueMatch.ts');
  const { catalogEvents } = await server.ssrLoadModule('/src/data/sources/catalogSource.ts');
  const { seedEvents } = await server.ssrLoadModule('/src/data/sources/seedSource.ts');
  const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');

  const venueOf = (name) => {
    // Name variants answers use: "(Irvine)", "The …", "Angel Stadium of Anaheim", "Los Angeles Memorial Coliseum",
    // "Fairplex Grandstand" (filed as Fairplex).
    const base = name.replace(/\s*\([^)]*\)\s*$/, '');
    const tries = [name, base, base.replace(/^The /i, ''), base.replace(/\s+of\s+[A-Z][a-z]+$/, ''), base.replace(/^Los Angeles /, 'LA '), base.replace(/\s+Grandstand$/i, '')];
    for (const t of tries) {
      const v = venueByNameOrPlace(metroId, t);
      if (v) return v;
    }
    return null;
  };

  const points = placesFile ? JSON.parse(await readFile(placesFile, 'utf8')) : {};
  const missingPoints = new Set();
  /** A place with no seated room: at a venue's point when its name is one we know, else from --places. */
  const pointFor = (name) => {
    const v = venueOf(name);
    if (v) return { type: 'point', location: v.location, name };
    if (Array.isArray(points[name])) return { type: 'point', location: points[name], name };
    missingPoints.add(name);
    return null;
  };
  const events = [];
  const unknownVenues = new Set();
  const gamesToCheck = [];
  for (const file of files) {
    const text = await readFile(file, 'utf8');
    for (const r of block(text, 'city,date,weekday')) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date) || /cancel|postpone/i.test(r.status)) continue;
      if (r.kind === 'game') {
        gamesToCheck.push(r);
        continue;
      }
      const start = /^\d{2}:\d{2}$/.test(r.start_local) ? r.start_local : null;
      const crowd = crowdOf(r.attendance);
      const invited = /^yes/i.test(r.invited);
      const grounds = r.booking === 'grounds';
      const venue = grounds ? null : venueOf(r.venue);
      if (!grounds && !venue) {
        unknownVenues.add(r.venue);
        continue;
      }
      const place = venue ? { type: 'venue', venueId: venue.id } : pointFor(r.venue);
      if (!place) continue;
      const facts = [r.facts, r.run].filter(Boolean).join('; ');
      // "3 shows Oct 15; Oct 16; Oct 19": nights the act played this city that week (the occasion rule's run).
      const runCount = Number(r.run.match(/^(\d+)\s+(?:shows|concerts|dates|nights|local shows|los angeles dates)/i)?.[1] ?? 0);
      const occasionFacts = runCount > 1 ? { occasionFacts: { run: runCount } } : {};
      if (r.kind === 'show') {
        const performers = r.performer.split(';').map((p) => p.trim()).filter(Boolean);
        const title = r.title.split(' / ')[0].trim();
        events.push({
          id: `${r.date}-research-${slug(title)}`,
          metroId,
          date: r.date,
          start,
          kind: 'show',
          title,
          place,
          audience: { domain: 'music', genre: r.league_or_genre || 'Other' },
          performer: performers[0] ?? title,
          ...occasionFacts,
          ...(invited ? { invited: true } : {}),
          crowd,
          sourceId: 'research',
          ...(facts ? { note: facts } : {}),
          sourceUrl: r.source_url,
        });
      } else {
        // A festival or special: sized by its room when it has one, else listed unsized unless the row gives a day's crowd.
        events.push({
          id: `${r.date}-research-${slug(r.title)}`,
          metroId,
          date: r.date,
          start,
          kind: r.kind === 'festival' ? 'festival' : 'special',
          title: r.title.replace(/\s*\((?:day \d+|opening day|[A-Z][a-z]{2} \d+ admission day)\)$/i, ''),
          place,
          audience: { domain: 'other', tag: slug(r.league_or_genre || r.kind) },
          ...(invited ? { invited: true } : {}),
          crowd,
          sourceId: 'research',
          ...(facts ? { note: facts } : {}),
          sourceUrl: r.source_url,
        });
      }
    }
    for (const r of block(text, 'city,date,start_local,end_local')) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date)) continue;
      events.push({
        id: `${r.date}-research-${slug(r.name)}`,
        metroId,
        date: r.date,
        start: /^\d{2}:\d{2}$/.test(r.start_local) ? r.start_local : null,
        kind: 'special',
        title: r.name,
        place: pointFor(r.route_or_area || r.name) ?? { type: 'point', location: [0, 0], name: 'missing' },
        audience: { domain: 'other', tag: slug(r.crowd_kind || 'crowd-event') },
        crowd: crowdOf(r.expected_crowd),
        sourceId: 'research',
        sourceUrl: r.source_url,
      });
    }
  }
  if (unknownVenues.size) throw new Error(`Venues not on file in ${metroId}; add them or list the event by name: ${[...unknownVenues].join('; ')}`);
  if (missingPoints.size) throw new Error(`No point for: ${[...missingPoints].join('; ')}. Add them to the --places file.`);

  // One event per booking across answers (the first file wins; later ones fill a missing start or crowd): same date and
  // place, and the same headliner or one title inside the other ("Muse" / "Muse - The 2nd Law Tour").
  const placeKey = (e) => (e.place.type === 'venue' ? e.place.venueId : (venueOf(e.place.name)?.id ?? e.place.name.toLowerCase()));
  const words = (t) => t.toLowerCase().replace(/\s*\([^)]*\)/g, '').replace(/\s+-\s+.*$/, '').replace(/[^a-z0-9 ]/g, '').replace(/\b(the|\d{4})\b/g, '').replace(/\s+/g, ' ').trim();
  const sameBooking = (a, b) =>
    a.date === b.date &&
    placeKey(a) === placeKey(b) &&
    ((a.performer && b.performer && a.performer.toLowerCase() === b.performer.toLowerCase()) || (words(a.title) && words(b.title) && (words(a.title).includes(words(b.title)) || words(b.title).includes(words(a.title)))));
  const merged = [];
  let duplicates = 0;
  for (const e of events) {
    const first = merged.find((m) => sameBooking(m, e));
    if (!first) {
      merged.push(e);
      continue;
    }
    duplicates++;
    if (!first.start && e.start) first.start = e.start;
    if (!first.crowd.length && e.crowd.length) first.crowd = e.crowd;
    if (!first.occasionFacts && e.occasionFacts) first.occasionFacts = e.occasionFacts;
  }
  events.length = 0;
  events.push(...merged);
  if (duplicates) console.log(`${duplicates} rows were the same booking in another answer; merged.`);

  // A hand-seeded date is the whole list for that day (index.ts, preferSeed): its research rows are not written.
  const seeded = new Set();
  for (const d of new Set(events.map((e) => e.date))) if ((await seedEvents.eventsOn(metroId, d)).length) seeded.add(d);
  const kept = [...new Map(events.filter((e) => !seeded.has(e.date)).map((e) => [e.id, e])).values()].sort((a, b) => a.id.localeCompare(b.id));
  if (seeded.size) console.log(`Hand-seeded, left as they are: ${[...seeded].join(', ')}`);

  // Games: the feeds own them. One row per game across answers; a game the catalog lacks is added from the research.
  const teamId = (name) => {
    // "Los Angeles Clippers" is the record "LA Clippers": match the full name, else the nickname within this city.
    const n = name.toLowerCase();
    const all = Object.values(TEAMS);
    return (all.find((t) => t.name.toLowerCase() === n) ?? all.find((t) => t.metroId === metroId && n.endsWith(` ${t.shortName.toLowerCase()}`)) ?? all.find((t) => n.endsWith(` ${t.shortName.toLowerCase()}`)))?.id;
  };
  const nick = (name) => (name || '').split(' ').pop().toLowerCase();
  // Teams not on file: a long matchup loses its mascots so both sides fit ("Arizona Wildcats" → "Arizona"); a club
  // name ending "SC", "FC" or a number keeps its name. A college game carries its sport code in the title's tag
  // slot ("(MBB)") so the label names men's and women's alike.
  const MASCOTS2 = /\s+(?:Tar Heels|Crimson Tide|Blue Devils|Sun Devils|Golden Bears|Golden Eagles|Fighting Irish|Horned Frogs|Yellow Jackets|Nittany Lions|Demon Deacons|Mean Green|Red Raiders|Scarlet Knights|Rainbow Warriors|Red Storm|Blue Raiders|Golden Gophers)$/;
  const place = (name) => (/\b(?:SC|FC|\d+)$/.test(name) && !/\d{2}ers$/.test(name) ? name : MASCOTS2.test(name) ? name.replace(MASCOTS2, '') : name.replace(/\s+\S+$/, ''));
  const CODES = [[/women's basketball/i, 'WBB'], [/men's basketball/i, 'MBB'], [/women's volleyball/i, 'WVB'], [/men's volleyball/i, 'MVB'], [/women's soccer/i, 'WSOC'], [/men's soccer/i, 'MSOC']];
  const unlistedTitle = (g) => {
    let [home, away] = [g.home_team, g.away_team];
    if (`${home} vs. ${away}`.length > 32) [home, away] = [place(home), place(away)];
    const code = CODES.find(([re]) => re.test(g.league_or_genre))?.[1];
    // With no team records the title is shown as written: at a neutral site the designated visitor goes first (N17).
    const [a, b] = /neutral-site/i.test(g.facts) ? [away, home] : [home, away];
    return `${a} vs. ${b}${code ? ` (${code})` : ''}`;
  };
  const seenGames = new Set();
  const SPORTS = [[/basketball|NBA|WNBA/i, 'basketball'], [/baseball|MLB|League/i, 'baseball'], [/soccer|USL|MLS|NWSL/i, 'soccer'], [/hockey|NHL|AHL/i, 'hockey'], [/football|NFL/i, 'football']];
  for (const g of gamesToCheck) {
    const venue = venueOf(g.venue);
    const key = `${g.date}|${venue?.id ?? g.venue}|${[nick(g.home_team), nick(g.away_team)].sort().join('-')}`;
    if (seenGames.has(key)) continue;
    seenGames.add(key);
    const listed = await catalogEvents.eventsOn(metroId, g.date).catch(() => []);
    // On file when a feed game (not an earlier research row, which this file replaces) is in the same room that day and
    // its title names either side ("UCLA vs. Washington" for "Washington at UCLA Bruins").
    const names = `${g.home_team} ${g.away_team}`.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length >= 3 && !['los', 'angeles', 'state'].includes(w));
    const found = listed.some((e) => e.kind === 'game' && e.sourceId !== 'research' && (!venue || (e.place.type === 'venue' && e.place.venueId === venue.id)) && names.some((w) => e.title.toLowerCase().includes(w)));
    if (found) continue;
    if (!venue || seeded.has(g.date)) {
      console.log(`Not in the catalog, not added: ${g.date} ${g.title} (${g.venue})`);
      continue;
    }
    const [homeId, awayId] = [teamId(g.home_team), teamId(g.away_team)];
    const both = homeId && awayId;
    const sport = both ? TEAMS[homeId].sport : SPORTS.find(([re]) => re.test(g.league_or_genre))?.[1];
    if (!sport) {
      console.log(`Not added (sport unclear): ${g.date} ${g.title}`);
      continue;
    }
    const level = g.level === 'college' ? 'college' : g.level === 'lower' ? 'lower' : undefined;
    kept.push({
      id: `${g.date}-research-${slug(g.title)}`,
      metroId,
      date: g.date,
      start: /^\d{2}:\d{2}$/.test(g.start_local) ? g.start_local : null,
      kind: 'game',
      // Feed style, home first; the title rules turn it into "Away at Home". Teams not on file keep their names.
      title: both ? `${TEAMS[homeId].shortName} vs. ${TEAMS[awayId].shortName}` : unlistedTitle(g),
      place: { type: 'venue', venueId: venue.id },
      audience: { domain: 'sports', sport, ...(level ? { level } : {}) },
      ...(both ? { teams: { home: homeId, away: awayId } } : {}),
      ...(g.stakes ? { stakes: { round: g.stakes } } : {}),
      ...(/neutral-site/i.test(g.facts) ? { neutralSite: true } : {}),
      ...(/preseason/i.test(`${g.facts} ${g.title}`) ? { preseason: true } : {}),
      crowd: crowdOf(g.attendance),
      sourceId: 'research',
      sourceUrl: g.source_url,
    });
    console.log(`Added from the research (the feeds don't carry it): ${g.date} ${g.title} (${g.venue})`);
  }

  const capturedAt = new Date().toISOString();
  const lines = [
    `-- Fan/Friction: ${kept.length} researched events on ${new Set(kept.map((e) => e.date)).size} past date(s) in ${metroId} (concerts, festivals, other big events).`,
    `-- Made ${capturedAt.slice(0, 10)} by scripts/research-events-load.mjs. Paste into Supabase's SQL Editor and Run.`,
    '-- Safe to run more than once. It first removes the researched rows already loaded for these dates, so a newer',
    '-- answer replaces an older one instead of sitting beside it; league games from the feeds are untouched.',
    '',
    // One transaction: if anything fails, the rows already there stay as they were.
    'begin;',
    `delete from public.events where source_id = 'research' and metro_id = ${sqlText(metroId)} and date in (${[...new Set(kept.map((e) => e.date))].sort().map(sqlText).join(', ')});`,
  ];
  for (const e of kept) {
    lines.push(
      'insert into public.events (id, metro_id, date, start, kind, title, source_id, captured_at, data) values (' +
        [sqlText(e.id), sqlText(e.metroId), sqlText(e.date), sqlText(e.start), sqlText(e.kind), sqlText(e.title), sqlText(e.sourceId), sqlText(capturedAt), sqlJson(e)].join(', ') +
        ') on conflict (id) do update set metro_id = excluded.metro_id, date = excluded.date, start = excluded.start, kind = excluded.kind, title = excluded.title, source_id = excluded.source_id, captured_at = excluded.captured_at, data = excluded.data;',
    );
  }
  lines.push('commit;');
  await mkdir(path.dirname(path.resolve(out)), { recursive: true });
  await writeFile(out, lines.join('\n') + '\n');
  await writeFile(out.replace(/\.sql$/, '') + '.json', JSON.stringify({ schema: 1, metroId, capturedAt, events: kept }, null, 2) + '\n');
  const unsized = kept.filter((e) => e.place.type === 'point' && e.crowd.length === 0).length;
  console.log(`${metroId}: ${kept.length} events (${unsized} listed unsized) on ${new Set(kept.map((e) => e.date)).size} dates; ${gamesToCheck.length} game rows checked against the catalog.`);
  console.log(`Wrote ${out}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  exitCode = 1;
} finally {
  await server.close();
}
process.exit(exitCode);
