// Starter tags for the tag panel (build notes 4, "Stub tags: suggestions"; research: starter-tags-research-answer §3).
// Blended under your own tags, split by concert and sport, sport-specific only when the sport is known,
// and a starter you never tap retires after about 10 views. Which starters count as "after the
// fact" is the builder's call, flagged in the plan (docs/build-4/claude-build-plan-oct13.md).

import { getPref, setPref } from './prefs';

export interface TagContext {
  domain: 'sports' | 'concert' | 'other';
  sport?: string;
  /** The event is still ahead: no after-the-fact tags (rain, comeback, walk-off...). */
  ahead: boolean;
}

const CROSS_ANYTIME = ['first time', 'milestone', 'farewell', 'road trip', 'birthday', 'date night', 'free tickets'];
const CROSS_AFTER = ['autograph', 'merch', 'rain'];
const SPORTS_ANYTIME = ['giveaway', 'fireworks', 'theme night', 'rivalry', 'debut', 'tailgate'];
const SPORTS_AFTER = ['comeback', 'overtime'];
const CONCERT_ANYTIME = ['hometown show', 'barricade'];
const CONCERT_AFTER = ['surprise guest', 'live debut', 'deep cut', 'cover', 'great opener', 'acoustic'];
const BY_SPORT: Record<string, string[]> = {
  baseball: ['walk-off', 'no-hitter', 'foul ball'],
  hockey: ['hat trick'],
  soccer: ['hat trick'],
};

/** The starters that fit this event, in the order they are tried. */
export function startersFor(ctx: TagContext): string[] {
  const out: string[] = [];
  const add = (list: string[]) => list.forEach((t) => out.push(t));
  add(CROSS_ANYTIME);
  if (ctx.domain === 'sports') add(SPORTS_ANYTIME);
  if (ctx.domain === 'concert') add(CONCERT_ANYTIME);
  if (!ctx.ahead) {
    add(CROSS_AFTER);
    if (ctx.domain === 'sports') {
      add(SPORTS_AFTER);
      add(BY_SPORT[(ctx.sport ?? '').toLowerCase()] ?? []);
    }
    if (ctx.domain === 'concert') add(CONCERT_AFTER);
  }
  return out;
}

const RETIRE_AFTER = 10;
interface StarterUse {
  shown: number;
  tapped: boolean;
}
const PREF = 'starter-tags';

function uses(): Record<string, StarterUse> {
  return getPref<Record<string, StarterUse>>(PREF, {});
}

/** A starter you tapped stays; one shown about 10 times without a tap retires. */
export function activeStarters(list: string[]): string[] {
  const seen = uses();
  return list.filter((tag) => seen[tag]?.tapped || (seen[tag]?.shown ?? 0) < RETIRE_AFTER);
}

/** Count one view of each starter that was on screen. */
export function noteStartersShown(tags: string[]) {
  if (tags.length === 0) return;
  const seen = uses();
  for (const tag of tags) seen[tag] = { shown: (seen[tag]?.shown ?? 0) + 1, tapped: seen[tag]?.tapped ?? false };
  setPref(PREF, seen);
}

export function noteStarterTapped(tag: string) {
  const seen = uses();
  seen[tag] = { shown: seen[tag]?.shown ?? 0, tapped: true };
  setPref(PREF, seen);
}
