import { TEAMS } from '../data/teams';
import { VENUES, venueNameOn } from '../data/venues';
import type { CrowdEvent } from '../data/types';

/** Tags that belong after the first name. CFB is stripped from old titles and never written back. */
const SQUAD_TAG = 'FB|MBB|WBB|CFB';

/** College football is (FB). College basketball is (MBB), or (WBB) when the team says so. */
function collegeAbbrev(event: CrowdEvent): string | null {
  if (event.audience.domain !== 'sports' || !event.teams) return null;
  const sides = [TEAMS[event.teams.home], TEAMS[event.teams.away]].filter((t) => t !== undefined);
  if (!sides.some((t) => /college/i.test(t.league))) return null;
  if (event.audience.sport === 'football') return 'FB';
  if (event.audience.sport === 'basketball') {
    const women = sides.some((t) => /women|wbb/i.test(t.league) || t.id.endsWith('-wbb'));
    return women ? 'WBB' : 'MBB';
  }
  return null;
}

/** A stored (CFB) is the old matchup tag. The name slot is (FB). */
function squadTag(raw: string): string {
  return raw === 'CFB' ? 'FB' : raw;
}

/**
 * Squad tag sits right after the first name: "USC (FB) vs Washington".
 * A unique pro name (Dodgers, Lakers) gets no tag. Never leave the tag at the end.
 */
function withSquadTag(title: string, tag: string | null): string {
  let rest = title.trim();
  let found = tag;
  const trailing = rest.match(new RegExp(`^(.*?)\\s+\\((${SQUAD_TAG})\\)\\s*$`));
  if (trailing) {
    rest = trailing[1].trim();
    found = found ?? squadTag(trailing[2]);
  }
  const vs = rest.match(/^(.*?)\s+(vs\.?)\s+(.*)$/i);
  if (!vs) return rest;
  let first = vs[1].trim();
  const onFirst = first.match(new RegExp(`^(.*?)\\s+\\((${SQUAD_TAG})\\)\\s*$`));
  if (onFirst) {
    first = onFirst[1].trim();
    found = found ?? squadTag(onFirst[2]);
  }
  const second = vs[3].trim();
  if (!found) return `${first} ${vs[2]} ${second}`;
  return `${first} (${found}) ${vs[2]} ${second}`;
}

/**
 * Concerts and music festivals: the headliner only. Tour and anniversary
 * stay on the full title. No made-up short name when a headliner is missing.
 */
function headliner(event: CrowdEvent): string | null {
  if (event.audience.domain !== 'music') return null;
  if (event.kind !== 'show' && event.kind !== 'festival') return null;
  const name = event.performer?.trim();
  return name || null;
}

function venueLabel(event: CrowdEvent): string | null {
  if (event.place.type !== 'venue') return null;
  const venue = VENUES[event.place.venueId];
  return venue ? venueNameOn(venue, event.date) : null;
}

/** True when another chip that night would show the same headliner. */
function sharesHeadliner(event: CrowdEvent, name: string, entry: readonly CrowdEvent[]): boolean {
  const key = name.toLowerCase();
  return entry.some(
    (other) =>
      other.id !== event.id &&
      other.date === event.date &&
      headliner(other)?.toLowerCase() === key,
  );
}

/** Home club as people say it: Dodgers, Ducks, Galaxy. Not the visitor, not ATL @ LAD. */
function spokenHome(event: CrowdEvent): string | null {
  if (event.audience.domain !== 'sports') return null;
  if (event.kind === 'show' || event.kind === 'festival') return null;
  const id = event.teams?.home;
  if (id && TEAMS[id]) return TEAMS[id].shortName;
  const bare = event.title.replace(new RegExp(`\\s+\\((${SQUAD_TAG})\\)`, 'g'), '');
  const first = bare.split(/\s+vs\.?\s+/i)[0]?.trim();
  return first || null;
}

function spokenAway(event: CrowdEvent): string | null {
  const id = event.teams?.away;
  if (id && TEAMS[id]) return TEAMS[id].shortName;
  return null;
}

/**
 * Postseason chip. Parentheses are the locked punctuation (Oct 4, 2026):
 * "Dodgers (NLDS G2)". Change this function to swap the delimiter.
 * Regular season and friendlies have no stakes, so they stay the home name.
 */
function postseasonChip(home: string, event: CrowdEvent): string {
  const round = event.stakes?.round;
  if (!round) return home;
  const game = event.stakes?.game;
  const series = game && game > 0 ? `${round} G${game}` : round;
  return `${home} (${series})`;
}

/** Squad tag and visitor only when two chips that night would otherwise match. */
function sportsChip(event: CrowdEvent, squad: boolean, visitor: boolean): string | null {
  const home = spokenHome(event);
  if (!home) return null;
  let name = home;
  if (squad) {
    const tag = collegeAbbrev(event);
    if (tag) name = `${name} (${tag})`;
  }
  if (visitor) {
    const away = spokenAway(event);
    if (away) name = `${name} · ${away}`;
  }
  return postseasonChip(name, event);
}

function sportsCollide(event: CrowdEvent, entry: readonly CrowdEvent[], squad: boolean, visitor: boolean): boolean {
  const mine = sportsChip(event, squad, visitor);
  if (!mine) return false;
  return entry.some(
    (other) =>
      other.id !== event.id && other.date === event.date && sportsChip(other, squad, visitor) === mine,
  );
}

/**
 * Map chip line 1. A concert is the headliner. A game is the home short name.
 * Postseason adds the round and game number in parentheses. The venue, a squad
 * tag, or the visitor is added only when two chips that night would otherwise
 * match. The sheet and the event page keep the full title.
 */
export function mapTitle(event: CrowdEvent, entry: readonly CrowdEvent[] = []): string {
  const name = headliner(event);
  if (name) {
    if (!sharesHeadliner(event, name, entry)) return name;
    const venue = venueLabel(event);
    return venue ? `${name} · ${venue}` : name;
  }
  if (spokenHome(event)) {
    if (!sportsCollide(event, entry, false, false)) return sportsChip(event, false, false)!;
    if (!sportsCollide(event, entry, true, false)) return sportsChip(event, true, false)!;
    return sportsChip(event, true, true)!;
  }
  return withSquadTag(event.title, collegeAbbrev(event));
}

/** Full official title on the sheet, the event page, and the log. The round is a separate line. */
export function listTitle(event: CrowdEvent): string {
  return withSquadTag(event.title, collegeAbbrev(event));
}
