// The friend line on a map chip (build notes 4, 1.9; Kylie V06, Oct 12–13): one friend, never you,
// ordered Attending > Watching > Interested, "+N" for the other friends with a status there.
// Drawn here as HTML for the chip, like typeIcons.ts: the same ticket, TV and bookmark as "+ Stub it".

import type { FeedItem } from '../data';
import { feedKind, type ActivityKind } from '../lib/activity';

export interface ChipActivity {
  kind: ActivityKind;
  name: string;
  /** Other friends with a status at this event. */
  more: number;
}

/** Who wins the chip's one name. Before an event Attending first; after it Attended first. */
const PRIORITY: ActivityKind[] = ['attending', 'attended', 'watching', 'watched', 'interested'];

export function friendName(item: FeedItem): string {
  return item.friend.displayName ?? item.friend.handle ?? 'Someone';
}

/** One entry per event id that has at least one friend with a status. */
export function chipActivities(items: readonly FeedItem[]): Map<string, ChipActivity> {
  const byEvent = new Map<string, FeedItem[]>();
  for (const item of items) {
    if (!item.eventId || item.example) continue;
    byEvent.set(item.eventId, [...(byEvent.get(item.eventId) ?? []), item]);
  }
  const out = new Map<string, ChipActivity>();
  for (const [eventId, list] of byEvent) {
    const ranked = [...list].sort((a, b) => PRIORITY.indexOf(feedKind(a)) - PRIORITY.indexOf(feedKind(b)));
    const first = ranked[0];
    out.set(eventId, { kind: feedKind(first), name: friendName(first), more: list.length - 1 });
  }
  return out;
}

const ATTRS = 'width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';

const ICONS = {
  ticket: '<path d="M3 9V6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5V9a2.5 2.5 0 0 0 0 5v2.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5V14a2.5 2.5 0 0 0 0-5Z"/><path d="M14 5v14" stroke-dasharray="2 2.5"/>',
  tv: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M8 21h8M12 18v3M8 3l4 3 4-3"/>',
  bookmark: '<path d="M6 3.5h12v17l-6-4-6 4z"/>',
};

function iconFor(kind: ActivityKind): string {
  const path = kind === 'watching' || kind === 'watched' ? ICONS.tv : kind === 'interested' ? ICONS.bookmark : ICONS.ticket;
  return `<svg class="crowd-activity-icon" ${ATTRS}>${path}</svg>`;
}

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

/** The chip's third line. The name ends in an ellipsis; the "+N" is never cut. */
export function activityLineHtml(a: ChipActivity): string {
  return (
    `<span class="crowd-activity">${iconFor(a.kind)}` +
    `<span class="crowd-activity-name">${escapeHtml(a.name)}</span>` +
    (a.more > 0 ? `<span class="crowd-activity-more">+${a.more}</span>` : '') +
    `</span>`
  );
}

/** Put the line on a chip, or take it off. The chip grows only while it has one. */
export function applyChipActivity(el: HTMLElement, a: ChipActivity | undefined) {
  el.querySelector('.crowd-activity')?.remove();
  el.classList.toggle('has-activity', Boolean(a));
  if (a) el.querySelector('.crowd-line')?.insertAdjacentHTML('beforeend', activityLineHtml(a));
}

/**
 * The tapped chip's card line: "Sam +1 attending · Priya interested" (friends only), one segment
 * per answer kind, in the ladder's order.
 */
export interface CardSegment {
  kind: ActivityKind;
  text: string;
}

const CARD_ORDER: ActivityKind[] = ['attending', 'watching', 'interested', 'attended', 'watched'];
const CARD_WORD: Record<ActivityKind, string> = {
  attending: 'attending',
  watching: 'watching',
  interested: 'interested',
  attended: 'attended',
  watched: 'watched',
};

export function cardSegments(items: readonly FeedItem[]): CardSegment[] {
  const groups = new Map<ActivityKind, string[]>();
  for (const item of items) {
    const kind = feedKind(item);
    groups.set(kind, [...(groups.get(kind) ?? []), friendName(item)]);
  }
  return CARD_ORDER.filter((kind) => groups.has(kind)).map((kind) => {
    const names = groups.get(kind)!;
    return { kind, text: `${names[0]}${names.length > 1 ? ` +${names.length - 1}` : ''} ${CARD_WORD[kind]}` };
  });
}
