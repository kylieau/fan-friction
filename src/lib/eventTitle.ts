import { TEAMS } from '../data/teams';
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

/** Map chip line 1. No venue. The round, if any, is its own line. */
export function mapTitle(event: CrowdEvent): string {
  return withSquadTag(event.title, collegeAbbrev(event));
}

/** Matchup name on the sheet, the event page, and the log. The round is a separate line. */
export function listTitle(event: CrowdEvent): string {
  return mapTitle(event);
}
