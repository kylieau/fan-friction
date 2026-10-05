// Snapshot windows on disk. scripts/schedule-index.mjs rewrites this file
// after a nightly archive run. A night inside a window can be stamped from
// the saved schedule. Do not edit by hand.

export interface ScheduleSnapshotSpan {
  metroId: string;
  capturedOn: string;
  from: string;
  through: string;
}

export const SCHEDULE_SNAPSHOTS: readonly ScheduleSnapshotSpan[] = [
  { metroId: 'la', capturedOn: '2026-10-04', from: '2026-10-04', through: '2026-10-18' },
];
