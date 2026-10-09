// "Night" or "day" for a city-date (Kylie, Oct 9): "night" only when every known
// start that date is at or after 5 pm; "day" when any event starts earlier. A date
// with no known start times reads as a night, since nearly every big event is one.

const EVENING = '17:00';

export function dayWord(events: readonly { start?: string | null }[]): 'day' | 'night' {
  const starts = events.map((e) => e.start).filter((s): s is string => Boolean(s));
  return starts.some((s) => s < EVENING) ? 'day' : 'night';
}

/** The same rule for one event. */
export function dayWordFor(event: { start?: string | null }): 'day' | 'night' {
  return dayWord([event]);
}

/** "Tonight" or "Today" for a date, by the same rule. */
export function tonightWord(events: readonly { start?: string | null }[]): 'Today' | 'Tonight' {
  return dayWord(events) === 'day' ? 'Today' : 'Tonight';
}
