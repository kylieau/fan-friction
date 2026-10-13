// Stub tags (build notes 4, "Stub tags", T01–T13): free-form words you put on a stub, Letterboxd-style.
// Kept on the stub's own row as `userTags`, so they follow that stub's privacy (T01). Not `tags`: that
// field holds the system labels (team, side, "Concerts") that Stats and the Stubs filter read.

import type { Entry, Plan, Seats } from './types';

/** Longest tag, in characters (T04). Rows end a long one in an ellipsis; the tag page shows it in full. */
export const TAG_MAX = 24;

/**
 * One tag as it is stored (T06): letters, numbers, spaces, ' and &, lowercase, single spaces, at most
 * 24 characters. Null when nothing is left.
 */
export function normalizeTag(raw: string): string | null {
  const cleaned = raw
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^\p{L}\p{N} '&]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, TAG_MAX)
    .trim();
  return cleaned.length > 0 ? cleaned : null;
}

/** A list of tags, normalized, without repeats, in the order given. */
export function normalizeTags(raw: readonly string[] | undefined): string[] {
  const out: string[] = [];
  for (const tag of raw ?? []) {
    const next = normalizeTag(tag);
    if (next && !out.includes(next)) out.push(next);
  }
  return out;
}

/** The tags on a stub or a plan. */
export function userTagsOf(row: Pick<Entry | Plan, 'userTags'>): string[] {
  return row.userTags ?? [];
}

export interface TagSummary {
  tag: string;
  /** Stubs and plans carrying it. */
  count: number;
  /** The latest date among them, for "most recent". */
  lastDate: string;
}

/**
 * Every tag you use, most-used first, then most recent (T09). Plans count too: a tag carries from a
 * plan to its stub, so it is already yours before the date.
 */
export function tagSummaries(entries: readonly Entry[], plans: readonly Plan[]): TagSummary[] {
  const map = new Map<string, TagSummary>();
  const add = (tags: string[] | undefined, date: string) => {
    for (const tag of tags ?? []) {
      const seen = map.get(tag);
      if (seen) {
        seen.count += 1;
        if (date > seen.lastDate) seen.lastDate = date;
      } else {
        map.set(tag, { tag, count: 1, lastDate: date });
      }
    }
  };
  for (const entry of entries) add(entry.userTags, entry.when.sort);
  // An Interested plan carries no tags (T02), so whatever is stored there is not counted or suggested.
  for (const plan of plans) if (!plan.interested) add(plan.userTags, plan.date);
  return [...map.values()].sort((a, b) => b.count - a.count || b.lastDate.localeCompare(a.lastDate) || a.tag.localeCompare(b.tag));
}

/** Rows with their tags replaced by `rename`: a tag mapped to null is removed, to another tag is renamed or merged. */
export function retag<T extends { userTags?: string[] }>(rows: readonly T[], rename: (tag: string) => string | null): T[] {
  return rows.map((row) => {
    if (!row.userTags || row.userTags.length === 0) return row;
    const next = normalizeTags(row.userTags.map((tag) => rename(tag) ?? '').filter(Boolean));
    if (next.length === row.userTags.length && next.every((tag, i) => tag === row.userTags![i])) return row;
    const { userTags: _old, ...rest } = row;
    void _old;
    return (next.length > 0 ? { ...rest, userTags: next } : rest) as T;
  });
}

// ---------- Seats (build notes 4, "Stub tags: suggestions" 7) ----------


/** Sanity caps per part, set from the longest values seen (the Fenway roof deck is 45), never a fit to a form. */
export const SEAT_LIMITS = { area: 80, section: 40, row: 24, seat: 40, details: 140 } as const;

/**
 * Seats as they are stored: each part as typed (trimmed, spaces collapsed, capped); undefined when every
 * part is empty. A seat saved before the Oct 13 research has area "GA", "Floor" or "Pit": GA becomes the
 * "No assigned seat" toggle, Floor and Pit are already Area text.
 */
export function normalizeSeats(raw: Seats | undefined): Seats | undefined {
  if (!raw) return undefined;
  const clean = (value: string | undefined, max: number) => {
    const text = (value ?? '').trim().replace(/\s+/g, ' ').slice(0, max).trim();
    return text.length > 0 ? text : undefined;
  };
  const out: Seats = {};
  let area = clean(raw.area, SEAT_LIMITS.area);
  let noSeat = raw.noSeat === true;
  if (area === 'GA') {
    noSeat = true;
    area = undefined;
  }
  if (noSeat) out.noSeat = true;
  if (area) out.area = area;
  const section = clean(raw.section, SEAT_LIMITS.section);
  const row = clean(raw.row, SEAT_LIMITS.row);
  const seat = clean(raw.seat, SEAT_LIMITS.seat);
  const details = clean(raw.details, SEAT_LIMITS.details);
  if (section) out.section = section;
  if (row) out.row = row;
  if (seat) out.seat = seat;
  if (details) out.details = details;
  return Object.keys(out).length > 0 ? out : undefined;
}

/**
 * "GA · Lawn · Sec 112 · Row 8 · Seat 4", "Floor · Row 3", "Suite 42". The one line, without Details
 * (that sits on its own line). "Sec" only when the section is a bare number or number and letter.
 */
export function seatsLine(seats: Seats | undefined): string {
  const s = normalizeSeats(seats);
  if (!s) return '';
  const section = s.section ? (/^\d+[A-Za-z]?$/.test(s.section) ? `Sec ${s.section}` : s.section) : undefined;
  return [s.noSeat ? 'GA' : undefined, s.area, section, s.row && `Row ${s.row}`, s.seat && `Seat ${s.seat}`].filter(Boolean).join(' · ');
}
