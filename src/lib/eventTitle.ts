import { TEAMS } from '../data/teams';
import type { CrowdEvent } from '../data/types';

const SQUAD_TAG = 'CFB|MBB|WBB';

/** College football is CFB. College basketball is MBB, or WBB when the team says so. */
function collegeAbbrev(event: CrowdEvent): string | null {
  if (event.audience.domain !== 'sports' || !event.teams) return null;
  const sides = [TEAMS[event.teams.home], TEAMS[event.teams.away]].filter((t) => t !== undefined);
  if (!sides.some((t) => /college/i.test(t.league))) return null;
  if (event.audience.sport === 'football') return 'CFB';
  if (event.audience.sport === 'basketball') {
    const women = sides.some((t) => /women|wbb/i.test(t.league) || t.id.endsWith('-wbb'));
    return women ? 'WBB' : 'MBB';
  }
  return null;
}

/**
 * Squad tag sits right after the first name: "USC (CFB) vs Washington".
 * A unique pro name (Dodgers, Lakers) gets no tag. Never leave the tag at the end.
 */
function withSquadTag(title: string, tag: string | null): string {
  let rest = title.trim();
  let found = tag;
  const trailing = rest.match(new RegExp(`^(.*?)\\s+\\((${SQUAD_TAG})\\)\\s*$`));
  if (trailing) {
    rest = trailing[1].trim();
    found = found ?? trailing[2];
  }
  const vs = rest.match(/^(.*?)\s+(vs\.?)\s+(.*)$/i);
  if (!vs) return rest;
  let first = vs[1].trim();
  const onFirst = first.match(new RegExp(`^(.*?)\\s+\\((${SQUAD_TAG})\\)\\s*$`));
  if (onFirst) {
    first = onFirst[1].trim();
    found = found ?? onFirst[2];
  }
  const second = vs[3].trim();
  if (!found) return `${first} ${vs[2]} ${second}`;
  return `${first} (${found}) ${vs[2]} ${second}`;
}

/** Map chip line 1. No venue, and no series (that has its own line on the chip). */
export function mapTitle(event: CrowdEvent): string {
  return withSquadTag(event.title, collegeAbbrev(event));
}

/** Sheet and other one-line titles. A series stays in parentheses: "Dodgers vs Braves (NLDS G1)". */
export function listTitle(event: CrowdEvent): string {
  const base = mapTitle(event);
  if (event.series && !base.includes(`(${event.series})`)) return `${base} (${event.series})`;
  return base;
}
