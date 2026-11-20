// A team's filter tag on a stub, as the catalog writes it ("Kings", "UCLA MBB"). Until Nov 19, 2026 a college
// program's tag doubled its code ("UCLA MBB MBB": the program's short name already ends with the code and the tag
// appended it again), and every stub the catalog built carried the doubled word. Kylie, Nov 19: "let's fix the
// wart". The writer no longer doubles, and the stored copies are mended on every load (the phone's and the
// account's), so the stubs page's chips, the Ranks screen and the favorites' credit all read the one spelling.

import type { Entry } from './types';

/**
 * "UCLA MBB MBB" → "UCLA MBB", "UCLA BASEBALL Baseball" → "UCLA BASEBALL" (the code's case differed from the short
 * name's; Codex, Nov 19 review); anything else as written. Only a repeated last word goes, whatever its case, and the
 * first spelling stays; never a name's own words.
 */
export function mendTeamTag(tag: string): string {
  const m = /^(.+\s(\S+))\s\2$/i.exec(tag.trim());
  return m ? m[1] : tag;
}

/** A stub's system tags and opponents, each mended; the stub itself when nothing changes. Your own tags are untouched. */
export function mendEntryTags<T extends Pick<Entry, 'tags' | 'opponents'>>(entry: T): T {
  const tags = entry.tags?.map(mendTeamTag);
  const opponents = entry.opponents?.map(mendTeamTag);
  const changed = (tags && tags.some((t, i) => t !== entry.tags[i])) || (opponents && opponents.some((t, i) => t !== entry.opponents?.[i]));
  if (!changed) return entry;
  return { ...entry, ...(tags ? { tags } : {}), ...(opponents ? { opponents } : {}) };
}
