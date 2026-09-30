import type { Metro } from '../config/metros';

/** "Wed, Sep 30" in the metro's own time zone. */
export function shortDate(date: Date, metro: Metro) {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: metro.timeZone,
  });
}

/** "Sep 30" in the metro's own time zone. */
export function monthDay(date: Date, metro: Metro) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: metro.timeZone });
}
