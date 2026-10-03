import { TEAMS } from '../data/teams';
import type { CrowdEvent } from '../data/types';

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

/** Map chip line 1. College sport sits in the title: "USC vs Washington (CFB)". */
export function mapTitle(event: CrowdEvent): string {
  const tag = collegeAbbrev(event);
  if (!tag || event.title.includes(`(${tag})`)) return event.title;
  return `${event.title} (${tag})`;
}

/** Sheet and other one-line titles. A series stays in parentheses: "Dodgers vs Braves (NLDS G1)". */
export function listTitle(event: CrowdEvent): string {
  const base = mapTitle(event);
  if (event.series && !base.includes(`(${event.series})`)) return `${base} (${event.series})`;
  return base;
}
