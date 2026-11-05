import { EXAMPLE_FEED, type FeedItem } from '../data';
import { getPref } from './prefs';

/**
 * Dev only: a feed pasted into the phone's storage (`activity-example-feed`, a JSON list of feed lines) stands in for
 * the people you follow, so friends' rows and cards can be measured headless without an account. A production build
 * never reads it (`import.meta.env.DEV`); an empty list falls back to the example feed.
 */
export function devFeed(): FeedItem[] | null {
  if (!import.meta.env.DEV) return null;
  const pasted = getPref<FeedItem[] | null>('activity-example-feed', null);
  if (pasted === null) return null;
  return Array.isArray(pasted) && pasted.length > 0 ? pasted : EXAMPLE_FEED;
}
