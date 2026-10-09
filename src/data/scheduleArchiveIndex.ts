// Snapshot windows on disk. scripts/schedule-index.mjs rewrites this file
// after a nightly archive run. A night inside a window can be stamped from
// the saved schedule. Do not edit by hand.

export interface ScheduleSnapshotSpan {
  metroId: string;
  capturedOn: string;
  from: string;
  through: string;
  /** The sources that ran for this capture (mlb, espn, ticketmaster, ...). A date is "checked" only when every source the city uses now ran. */
  sources: string[];
}

export const SCHEDULE_SNAPSHOTS: readonly ScheduleSnapshotSpan[] = [
  { metroId: 'atlanta', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'atlanta', capturedOn: '2026-10-08', from: '2026-10-08', through: '2026-10-22', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'atlanta', capturedOn: '2026-10-09', from: '2026-10-09', through: '2026-10-23', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'bay-area', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'bay-area', capturedOn: '2026-10-08', from: '2026-10-08', through: '2026-10-22', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'bay-area', capturedOn: '2026-10-09', from: '2026-10-09', through: '2026-10-23', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'chicago', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'chicago', capturedOn: '2026-10-08', from: '2026-10-08', through: '2026-10-22', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'chicago', capturedOn: '2026-10-09', from: '2026-10-09', through: '2026-10-23', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'dallas-fort-worth', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'dallas-fort-worth', capturedOn: '2026-10-08', from: '2026-10-08', through: '2026-10-22', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'dallas-fort-worth', capturedOn: '2026-10-09', from: '2026-10-09', through: '2026-10-23', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'la', capturedOn: '2026-10-04', from: '2026-10-04', through: '2026-10-18', sources: ['mlb', 'espn', 'seed'] },
  { metroId: 'la', capturedOn: '2026-10-05', from: '2026-10-05', through: '2026-10-19', sources: ['mlb', 'espn', 'seed'] },
  { metroId: 'la', capturedOn: '2026-10-06', from: '2026-10-06', through: '2026-10-20', sources: ['mlb', 'espn', 'seed', 'ticketmaster'] },
  { metroId: 'la', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'la', capturedOn: '2026-10-08', from: '2026-10-08', through: '2026-10-22', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'la', capturedOn: '2026-10-09', from: '2026-10-09', through: '2026-10-23', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'montreal', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'montreal', capturedOn: '2026-10-08', from: '2026-10-08', through: '2026-10-22', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'montreal', capturedOn: '2026-10-09', from: '2026-10-09', through: '2026-10-23', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'new-york', capturedOn: '2026-10-06', from: '2026-10-06', through: '2026-10-20', sources: ['mlb', 'espn', 'seed', 'ticketmaster'] },
  { metroId: 'new-york', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'new-york', capturedOn: '2026-10-08', from: '2026-10-08', through: '2026-10-22', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'new-york', capturedOn: '2026-10-09', from: '2026-10-09', through: '2026-10-23', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'san-diego', capturedOn: '2026-10-06', from: '2026-10-06', through: '2026-10-20', sources: ['mlb', 'espn', 'seed', 'ticketmaster'] },
  { metroId: 'san-diego', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'san-diego', capturedOn: '2026-10-08', from: '2026-10-08', through: '2026-10-22', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'san-diego', capturedOn: '2026-10-09', from: '2026-10-09', through: '2026-10-23', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'seattle', capturedOn: '2026-10-06', from: '2026-10-06', through: '2026-10-20', sources: ['mlb', 'espn', 'seed', 'ticketmaster'] },
  { metroId: 'seattle', capturedOn: '2026-10-07', from: '2026-10-07', through: '2026-10-21', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'seattle', capturedOn: '2026-10-08', from: '2026-10-08', through: '2026-10-22', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
  { metroId: 'seattle', capturedOn: '2026-10-09', from: '2026-10-09', through: '2026-10-23', sources: ['mlb', 'espn', 'hockeytech', 'seed', 'ticketmaster'] },
];
