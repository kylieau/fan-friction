// Activity on one event (build notes 3, 4.2, 4.6 and 8.1 items 11–12, 25): what you and the people
// you follow answered, in one vocabulary. Attending / Watching / Interested before the event,
// Attended / Watched after. A shared place rides along on a Friends watch only ("at home",
// "at Barney's Beanery"); a private watch never names one.

import type { Entry, PersonalLog, Plan } from '../data/types';
import type { FeedItem } from '../data/profiles';

export type ActivityKind = 'attending' | 'watching' | 'interested' | 'attended' | 'watched';

export interface ActivityPerson {
  name: string;
  /** A shared watch place, "Home" for the preset. */
  place?: string;
  /** True for the signed-in person's own answer. */
  you?: boolean;
}

export type ActivityGroups = Partial<Record<ActivityKind, ActivityPerson[]>>;

/** "Attending", "Watched": the word on a grouped list or a Stubs row. */
export const ACTIVITY_WORDS: Record<ActivityKind, string> = {
  attending: 'Attending',
  watching: 'Watching',
  interested: 'Interested',
  attended: 'Attended',
  watched: 'Watched',
};

const ORDER: ActivityKind[] = ['attending', 'watching', 'interested', 'attended', 'watched'];

function friendName(item: FeedItem): string {
  return item.friend.displayName ?? item.friend.handle ?? 'Someone';
}

export function feedKind(item: FeedItem): ActivityKind {
  if (item.kind === 'planning') return item.interested ? 'interested' : item.watched ? 'watching' : 'attending';
  return item.watched ? 'watched' : 'attended';
}

/** "at home", "at Barney's Beanery": the place clause for a shared watch, or an empty string. */
export function placeClause(place: string | undefined): string {
  if (!place) return '';
  return /^home$/i.test(place.trim()) ? ' at home' : ` at ${place}`;
}

/** Your own answer on an event: a plan ahead, or a logged entry, with a shared place when there is one. */
export function yourActivity(eventId: string, log: PersonalLog): ActivityPerson & { kind: ActivityKind } | null {
  const plan: Plan | undefined = log.plans.find((p) => p.eventId === eventId);
  if (plan) {
    const kind: ActivityKind = plan.interested ? 'interested' : plan.watch ? 'watching' : 'attending';
    return { name: 'You', you: true, kind, ...(plan.watch && plan.watchShare === 'friends' && plan.watchedPlace ? { place: plan.watchedPlace } : {}) };
  }
  const entry: Entry | undefined = log.added.find((e) => e.eventId === eventId);
  if (entry) {
    const kind: ActivityKind = entry.watched ? 'watched' : 'attended';
    return { name: 'You', you: true, kind, ...(entry.watched && entry.watchShare === 'friends' && entry.watchedPlace ? { place: entry.watchedPlace } : {}) };
  }
  return null;
}

/** Everyone's answers on one event, grouped by kind in the ladder's order; you first inside a group. */
export function activityGroups(items: readonly FeedItem[], you: (ActivityPerson & { kind: ActivityKind }) | null): ActivityGroups {
  const groups: ActivityGroups = {};
  const add = (kind: ActivityKind, person: ActivityPerson) => {
    (groups[kind] ??= []).push(person);
  };
  if (you) add(you.kind, { name: you.name, you: true, ...(you.place ? { place: you.place } : {}) });
  for (const item of items) add(feedKind(item), { name: friendName(item), ...(item.place ? { place: item.place } : {}) });
  return groups;
}

export function activityOrder(groups: ActivityGroups): ActivityKind[] {
  return ORDER.filter((kind) => (groups[kind]?.length ?? 0) > 0);
}

/**
 * The one small line under an Explore row (build notes 3, 4.2): "You're attending · Sam +1 attending",
 * "Priya is watching at home". One line, no event name. Null when nobody has answered.
 */
export function activityLine(groups: ActivityGroups): string | null {
  const parts: string[] = [];
  for (const kind of activityOrder(groups)) {
    const people = groups[kind]!;
    const you = people.find((p) => p.you);
    const others = people.filter((p) => !p.you);
    if (you) parts.push(`You're ${kind === 'attended' ? 'attended' : kind}${kind === 'watching' || kind === 'watched' ? placeClause(you.place) : ''}`.replace("You're attended", 'You attended').replace("You're watched", 'You watched'));
    if (others.length === 1) {
      const p = others[0];
      const verb = kind === 'attending' ? 'is attending' : kind === 'watching' ? 'is watching' : kind === 'interested' ? 'is interested' : kind === 'attended' ? 'attended' : 'watched';
      parts.push(`${p.name} ${verb}${kind === 'watching' || kind === 'watched' ? placeClause(p.place) : ''}`);
    } else if (others.length > 1) {
      parts.push(`${others[0].name} +${others.length - 1} ${kind}`);
    }
  }
  return parts.length > 0 ? parts.join(' · ') : null;
}

/** The feed sentence's start (Kylie, Oct 11, call 1; build notes 3, 4.7): "Sam is going to", "Sam is watching", "Sam went to", "Sam watched". The event follows, then the place for a shared watch. */
export function feedSentence(item: FeedItem): { lead: string; tail: string } {
  const name = friendName(item);
  const kind = feedKind(item);
  const lead = kind === 'interested' ? `${name} is interested in` : kind === 'watching' ? `${name} is watching` : kind === 'attending' ? `${name} is going to` : kind === 'watched' ? `${name} watched` : `${name} went to`;
  const tail = kind === 'watching' || kind === 'watched' ? placeClause(item.place) : '';
  return { lead, tail };
}
