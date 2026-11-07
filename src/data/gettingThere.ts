// Getting There (build 7.2, Section E; Kylie, Oct 30 E3 to E14 and Nov 4 R4a, R4b, R4h): when crowds around a venue
// make the roads nearby Light, Busy or Heavy. An estimate from schedules and crowd sizes, never live traffic (E14), in
// area names only (R4b). Everything here is read off the verdict's own Gridlock hours (`formula/gridlock.ts`,
// `roadHours`), so a strip's worst cell is the zone's score and the card can never disagree with the verdict. Nothing
// here feeds the read: the formula is untouched and the setting that shows these surfaces is a display setting.

import { METROS } from '../config/metros';
import { listTitle, splitTitleLabel } from '../lib/eventTitle';
import { rainyFor, roadHours, roadWindows, type ZoneHours } from './formula';
import type { CrowdEvent } from './types';
import { isStrained, VENUES, venueNameOn } from './venues';

export type RoadCue = 'light' | 'busy' | 'heavy';

/**
 * The cue words (E4: Light, Busy, Heavy) and their cut points on the score's 1 to 10 scale: Light below 2, Busy from
 * 2 (about 10% over the area's usual event night), Heavy from 4 (about a third over). Placeholders until the offline
 * Caltrans PeMS check (E13). E4's mock numbers were 3 and 6; on those the mock's own overlap afternoon (Chargers out,
 * Clippers in at Inglewood, 2.1) read Light, so Kylie took the builder's lean of 2 and 4 on Nov 6, 2026 ("fine with
 * your leans across the board", deferring rather than deliberating; gap report 7.2, group 4).
 */
export const ROAD_CUTS = { busy: 2, heavy: 4 } as const;

export function roadCue(value: number): RoadCue {
  return value >= ROAD_CUTS.heavy ? 'heavy' : value >= ROAD_CUTS.busy ? 'busy' : 'light';
}

export function cueWord(cue: RoadCue): string {
  return cue === 'heavy' ? 'Heavy' : cue === 'busy' ? 'Busy' : 'Light';
}

const CUE_RANK: Record<RoadCue, number> = { light: 0, busy: 1, heavy: 2 };

function worse(a: RoadCue, b: RoadCue): RoadCue {
  return CUE_RANK[a] >= CUE_RANK[b] ? a : b;
}

/** 16.5 → "4:30 pm", 13 → "1:00 pm", 0 or 24 → "12:00 am". */
export function roadClock(hour: number): string {
  const h = ((Math.floor(hour) % 24) + 24) % 24;
  const m = Math.round((hour - Math.floor(hour)) * 60);
  const twelve = h % 12 === 0 ? 12 : h % 12;
  return `${twelve}:${String(m).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`;
}

/** "about 4:30 to 6:00 pm", with the meridiem once when both ends share it. */
export function roadSpan(from: number, to: number): string {
  const a = roadClock(from);
  const b = roadClock(to);
  const [aTime, aM] = a.split(' ');
  const [, bM] = b.split(' ');
  return aM === bM ? `${aTime} to ${b}` : `${a} to ${b}`;
}

/** One whole-hour cell of a strip (R4f, builder's lean: whole hours, since the data is start times and crowd sizes). */
export interface RoadCell {
  /** The hour the cell starts (17 is 5 to 6 pm). */
  hour: number;
  cue: RoadCue;
  value: number;
}

export interface RoadWindow {
  from: number;
  to: number;
  cue: RoadCue;
}

export interface AreaRoads {
  id: string;
  /** The area's name ("Inglewood"), or the venue's when the zone has none on file. */
  name: string;
  /** The worst cue of the day here. */
  cue: RoadCue;
  /** The zone's Gridlock score, which is the worst half hour. */
  score: number;
  cells: RoadCell[];
  /** The run of hours at the worst cue around the peak; null when the whole day is Light. */
  window: RoadWindow | null;
  /** Why the peak is what it is, in event words: "Texans at Chargers lets out as Pelicans at Clippers fans arrive." */
  why: string;
  /** Honesty lines (E8, E9): a hillside room, a room with no size on file, a start time not set. */
  notes: string[];
  events: CrowdEvent[];
  hours: ZoneHours;
}

export interface DateRoads {
  metroId: string;
  date: string;
  /** Worst first. Empty on a quiet day. */
  areas: AreaRoads[];
  /** The strips' axis in whole hours, the same way Local Competition frames its bars. */
  axis: { lo: number; hi: number };
  /** The one-line summary: the worst window and why, or the quiet sentence (E7). */
  summary: string;
  /** No area has an event at all. */
  quiet: boolean;
  /** Areas have events but none is busier than its usual event night, so there is no window to draw. */
  allLight: boolean;
}

/** "A and B", "A, B, and C" (Oxford comma): the list titles without their labels ("· Neutral site (MBB)"), which are row decoration, not prose. */
function plainName(e: CrowdEvent): string {
  return splitTitleLabel(listTitle(e)).name.split(' · ')[0];
}

function names(events: readonly CrowdEvent[]): string {
  const list = [...new Set(events.map(plainName))];
  if (list.length <= 1) return list[0] ?? '';
  if (list.length === 2) return `${list[0]} and ${list[1]}`;
  return `${list.slice(0, -1).join(', ')}, and ${list[list.length - 1]}`;
}

/** The sentence for a peak half hour, with what lifted the background ("in the Friday rush") when something did. */
function whyAt(arriving: readonly CrowdEvent[], leaving: readonly CrowdEvent[], background: readonly string[]): string {
  const tail = background.length > 0 ? `, in ${background.join(' and ')}` : '';
  // Two shows of one act in one room: the first lets out as the next one's crowd arrives.
  if (leaving.length > 0 && arriving.length > 0 && names(leaving) === names(arriving)) return `${names(leaving)}'s first show lets out as the next one's fans arrive${tail}.`;
  // An act that is both letting out and arriving (two shows) is named once, on the leaving side.
  const leavingNames = new Set(leaving.map(plainName));
  const arrivingOnly = arriving.filter((e) => !leavingNames.has(plainName(e)));
  if (leaving.length > 0 && arrivingOnly.length > 0) return `${names(leaving)} lets out as ${names(arrivingOnly)} fans arrive${tail}.`;
  if (leaving.length > 0 && arriving.length > 0) return `${names(leaving)}'s first show lets out as the next one's fans arrive${tail}.`;
  if (arriving.length > 1) return `${names(arriving)} fans arrive together${tail}.`;
  if (arriving.length === 1) return `${names(arriving)} fans arrive${tail}.`;
  if (leaving.length > 1) return `${names(leaving)} let out together${tail}.`;
  if (leaving.length === 1) return `${names(leaving)} lets out${tail}.`;
  return `Crowds nearby spill onto these roads${tail}.`;
}

function areaOf(hours: ZoneHours, date: string): AreaRoads {
  const peak = hours.halves.reduce((best, h) => (h.value > best.value ? h : best), hours.halves[0]);
  const cue = roadCue(peak.value);
  let window: RoadWindow | null = null;
  if (cue !== 'light') {
    let i = hours.halves.indexOf(peak);
    let j = i;
    while (i > 0 && roadCue(hours.halves[i - 1].value) === cue) i -= 1;
    while (j < hours.halves.length - 1 && roadCue(hours.halves[j + 1].value) === cue) j += 1;
    window = { from: hours.halves[i].hour, to: hours.halves[j].hour + 0.5, cue };
  }
  const notes: string[] = [];
  for (const e of hours.events) {
    const venue = e.place.type === 'venue' ? VENUES[e.place.venueId] : undefined;
    if (venue && isStrained(venue)) {
      const line = `${venueNameOn(venue, date)}: few roads in, so it reads busier.`;
      if (!notes.includes(line)) notes.push(line);
    }
  }
  if (hours.capacityUnknown.length > 0) notes.push(`No room size on file for ${hours.capacityUnknown.join(' or ')}; read against the expected crowd.`);
  if (hours.startAssumed.length > 0) notes.push(`Start time not set for ${names(hours.startAssumed)}; a usual start is assumed.`);
  return { id: hours.zone.id, name: hours.zone.name, cue, score: hours.score, cells: [], window, why: whyAt(peak.arriving, peak.leaving, hours.backgroundWhy), notes, events: hours.events, hours };
}

/** The roads for one date in a city, from every event on it (hidden ones included, as the verdict counts them). */
export function dateRoads(metroId: string, date: string, events: readonly CrowdEvent[], before?: Date): DateRoads {
  const city = METROS[metroId]?.name ?? 'this city';
  const zones = roadHours(metroId, date, events, rainyFor(events, before));
  const areas = zones.map((z) => areaOf(z, date)).sort((a, b) => b.score - a.score);
  if (areas.length === 0) {
    return { metroId, date, areas: [], axis: { lo: 12, hi: 21 }, summary: `Nothing big enough to strain the roads in ${city}.`, quiet: true, allLight: true };
  }
  // The axis: from the earliest arrival to the last exit, in whole hours (as the Local Competition bars frame theirs).
  let lo = 24;
  let hi = 0;
  for (const area of areas) {
    for (const e of area.events) {
      const w = roadWindows(e);
      lo = Math.min(lo, Math.floor(w.arriveFrom));
      hi = Math.max(hi, Math.ceil(w.leaveTo));
    }
  }
  lo = Math.max(0, lo);
  hi = Math.min(24, Math.max(hi, lo + 1));
  for (const area of areas) {
    const cells: RoadCell[] = [];
    for (let h = lo; h < hi; h += 1) {
      const halves = area.hours.halves.filter((x) => x.hour >= h && x.hour < h + 1);
      const value = Math.max(1, ...halves.map((x) => x.value));
      cells.push({ hour: h, cue: roadCue(value), value });
    }
    area.cells = cells;
  }
  const worst = areas[0];
  // Every area Light: no area is busier than its own usual event night, which is what the cues measure. The card
  // says that in one line and draws no strips (a row of Light cells says nothing); the areas stay for the map.
  const summary = worst.window ? `${worst.name}, about ${roadSpan(worst.window.from, worst.window.to)}. ${worst.why}` : 'No busier than a usual event night around the venues in play.';
  return { metroId, date, areas, axis: { lo, hi }, summary, quiet: false, allLight: !worst.window };
}

export interface EventRoads {
  area: AreaRoads;
  arriving: RoadWindow;
  /** Null when the exit runs past midnight, outside the modeled day. */
  leaving: RoadWindow | null;
  /** The other events in the area whose fans arrive while this one lets out. */
  others: CrowdEvent[];
  /** "Inglewood: Busy arriving before the start, Heavy leaving about 4:30 to 6:00 pm as Pelicans at Clippers fans arrive." */
  line: string;
}

/** The worst cue over a window, or null when no sampled half hour falls in it (an exit past midnight: the formula never counts it). */
function cueOver(hours: ZoneHours, from: number, to: number): RoadCue | null {
  let cue: RoadCue | null = null;
  for (const h of hours.halves) if (h.hour >= from && h.hour < to) cue = worse(cue ?? 'light', roadCue(h.value));
  return cue;
}

/** This event's arrival and exit, in its area, or null when it is not in any zone (a small room, no venue, further out). */
export function eventRoads(roads: DateRoads, eventId: string): EventRoads | null {
  const area = roads.areas.find((a) => a.events.some((e) => e.id === eventId));
  if (!area) return null;
  const event = area.events.find((e) => e.id === eventId)!;
  const w = roadWindows(event);
  const arriving: RoadWindow = { from: w.arriveFrom, to: w.start, cue: cueOver(area.hours, w.arriveFrom, w.start) ?? 'light' };
  const leaveCue = cueOver(area.hours, w.end, w.leaveTo);
  const leaving: RoadWindow | null = leaveCue ? { from: w.end, to: w.leaveTo, cue: leaveCue } : null;
  const others = leaving
    ? area.events.filter((o) => {
        if (o.id === eventId) return false;
        const ow = roadWindows(o);
        return ow.arriveFrom < leaving.to && ow.start > leaving.from;
      })
    : [];
  const tail = others.length > 0 ? ` as ${names(others)} fans arrive` : '';
  const line = leaving
    ? `${area.name}: ${cueWord(arriving.cue)} arriving before the start, ${cueWord(leaving.cue)} leaving about ${roadSpan(leaving.from, leaving.to)}${tail}.`
    : `${area.name}: ${cueWord(arriving.cue)} arriving before the start. The exit runs past midnight, which is not estimated.`;
  return { area, arriving, leaving, others, line };
}

/** The one line for a past date (R4h): only when the roads read Heavy around the venue that day. */
export function pastRoadsLine(roads: DateRoads, eventId: string): string | null {
  const area = roads.areas.find((a) => a.events.some((e) => e.id === eventId));
  if (!area || area.cue !== 'heavy') return null;
  return `Roads read Heavy around ${area.name} that day, by the schedule estimate.`;
}
