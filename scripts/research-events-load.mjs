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
 * "reported approximately 10,000 Saturday" → 10,000 reported. A total over several days ("over 20,000 across all 3
 * days") is averaged into a day, labeled estimated (Kylie, Oct 7, 2026: "a per-day average of a multi-day total is fine
 * when it is labeled estimated"). A total whose days aren't given is left out rather than guessed.
 */
function crowdOf(text) {
  if (!text) return [];
  const n = text.match(/(\d{1,3}(?:,\d{3})+|\d{4,})/);
  if (!n) return [];
  const days = Number(text.match(/(?:across|over)\s+(?:all\s+)?(\d+)\s+days/i)?.[1] ?? 0);
  if (days > 1) {
    const total = Number(n[1].replace(/,/g, ''));
    return [{ count: Math.round(total / days), kind: 'estimated', note: `About ${total.toLocaleString('en-US')} over ${days} days, averaged per day.` }];
  }
  if (/across|weekend|total/i.test(text)) return [];
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
    const tries = [name, name.replace(/\s*\([^)]*\)\s*$/, ''), name.replace(/^The /i, '')];
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

  // A hand-seeded date is the whole list for that day (index.ts, preferSeed): its research rows are not written.
  const seeded = new Set();
  for (const d of new Set(events.map((e) => e.date))) if ((await seedEvents.eventsOn(metroId, d)).length) seeded.add(d);
  const kept = [...new Map(events.filter((e) => !seeded.has(e.date)).map((e) => [e.id, e])).values()].sort((a, b) => a.id.localeCompare(b.id));
  if (seeded.size) console.log(`Hand-seeded, left as they are: ${[...seeded].join(', ')}`);

  // Games: the feeds own them. Say which ones the catalog doesn't have.
  for (const g of gamesToCheck) {
    const listed = await catalogEvents.eventsOn(metroId, g.date).catch(() => []);
    const venue = venueOf(g.venue);
    const home = (g.home_team || '').split(' ').pop().toLowerCase();
    const found = listed.some((e) => e.kind === 'game' && (!venue || (e.place.type === 'venue' && e.place.venueId === venue.id)) && e.title.toLowerCase().includes(home));
    if (found) continue;
    // A game the feeds don't carry (a preseason game in another building): added from the research when both teams
    // and the building are on file, else reported.
    // "Los Angeles Clippers" is the record "LA Clippers": match the full name, else the nickname within this city.
    const teamId = (name) => {
      const n = name.toLowerCase();
      const all = Object.values(TEAMS);
      return (all.find((t) => t.name.toLowerCase() === n) ?? all.find((t) => t.metroId === metroId && n.endsWith(` ${t.shortName.toLowerCase()}`)) ?? all.find((t) => n.endsWith(` ${t.shortName.toLowerCase()}`)))?.id;
    };
    const [homeId, awayId] = [teamId(g.home_team), teamId(g.away_team)];
    if (!homeId || !awayId || !venue || seeded.has(g.date)) {
      console.log(`Not in the catalog, not added: ${g.date} ${g.title} (${g.venue})`);
      continue;
    }
    const sport = TEAMS[homeId].sport;
    kept.push({
      id: `${g.date}-research-${slug(g.title)}`,
      metroId,
      date: g.date,
      start: /^\d{2}:\d{2}$/.test(g.start_local) ? g.start_local : null,
      kind: 'game',
      title: `${TEAMS[homeId].shortName} vs. ${TEAMS[awayId].shortName}`,
      place: { type: 'venue', venueId: venue.id },
      audience: { domain: 'sports', sport },
      teams: { home: homeId, away: awayId },
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
    '-- Safe to run more than once: every row is an upsert.',
    '',
  ];
  for (const e of kept) {
    lines.push(
      'insert into public.events (id, metro_id, date, start, kind, title, source_id, captured_at, data) values (' +
        [sqlText(e.id), sqlText(e.metroId), sqlText(e.date), sqlText(e.start), sqlText(e.kind), sqlText(e.title), sqlText(e.sourceId), sqlText(capturedAt), sqlJson(e)].join(', ') +
        ') on conflict (id) do update set metro_id = excluded.metro_id, date = excluded.date, start = excluded.start, kind = excluded.kind, title = excluded.title, source_id = excluded.source_id, captured_at = excluded.captured_at, data = excluded.data;',
    );
  }
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
