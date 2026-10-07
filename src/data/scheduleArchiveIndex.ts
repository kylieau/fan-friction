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
  { metroId: 'atlanta', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21' },
  { metroId: 'la', capturedOn: '2026-10-04', from: '2026-10-04', through: '2026-10-18' },
  { metroId: 'la', capturedOn: '2026-10-05', from: '2026-10-05', through: '2026-10-19' },
  { metroId: 'la', capturedOn: '2026-10-06', from: '2026-10-06', through: '2026-10-20' },
  { metroId: 'la', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21' },
  { metroId: 'new-york', capturedOn: '2026-10-06', from: '2026-10-06', through: '2026-10-20' },
  { metroId: 'new-york', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21' },
  { metroId: 'san-diego', capturedOn: '2026-10-06', from: '2026-10-06', through: '2026-10-20' },
  { metroId: 'san-diego', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21' },
  { metroId: 'seattle', capturedOn: '2026-10-06', from: '2026-10-06', through: '2026-10-20' },
  { metroId: 'seattle', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21' },
];
