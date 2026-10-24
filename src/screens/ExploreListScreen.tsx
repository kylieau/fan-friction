import { FurtherOutList } from '../components/FurtherOut';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { clearOpenedFromMap } from '../lib/mapReturn';
import {
  followingFeed,
  getAccount,
  getListRange,
  getListWeek,
  getPersonalLog,
  subscribeAccount,
  subscribePersonalLog,
  type CityDate,
  type CrowdEvent,
  type FeedItem,
  alwaysShownIds,
  crowdRangeOf,
  rangeOn,
  splitByRange,
} from '../data';
import { addDays } from '../lib/dates';
import { weekStartOf } from '../data/cityList';
import { friendsLine, yourActivity } from '../lib/activity';
import { getPref } from '../lib/prefs';
import { datePath, mapPath, useView } from '../lib/view';
import { showsOnMap } from '../map/crowdPoints';
import { DayRow } from '../components/DayRow';
import { HiddenLine } from '../components/HiddenLine';
import { ExploreHeader } from '../components/ExploreHeader';
import { ExploreModeSwitch } from '../components/ExploreModeSwitch';
import { ReadTile } from '../components/ReadTile';
import { WeekCalendar, type CalendarRead } from '../components/WeekCalendar';
import { ListBand } from '../components/ListBand';

const LIST_MEMORY_KEY = 'fan-friction:list-return';
/** Set when a row or a day band is tapped, so Back from there restores the place; read once on the next open. */
const LIST_ARMED_KEY = 'fan-friction:list-armed';

function peekArmed(): boolean {
  try {
    return sessionStorage.getItem(LIST_ARMED_KEY) === '1';
  } catch {
    return false;
  }
}

function disarm() {
  try {
    sessionStorage.removeItem(LIST_ARMED_KEY);
  } catch {
    /* storage blocked */
  }
}
/** Weeks loaded ahead of the first one, and per scroll step. */
const FIRST_AHEAD = 4;
const STEP = 2;

interface ListMemory {
  href: string;
  /** The day that was at the top when you left. */
  topDate: string;
}

function readMemory(href: string): ListMemory | null {
  try {
    const raw = sessionStorage.getItem(LIST_MEMORY_KEY);
    const parsed = raw ? (JSON.parse(raw) as Partial<ListMemory>) : null;
    if (parsed && parsed.href === href && typeof parsed.topDate === 'string') return parsed as ListMemory;
  } catch {
    /* storage blocked */
  }
  return null;
}

/** "WED, OCT 14", with TODAY / TOMORROW in front (build notes 4, 1.3). */
function dayLabel(date: string, today: string): string {
  const base = new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
  const lead = date === today ? 'Today' : date === addDays(today, 1) ? 'Tomorrow' : null;
  return lead ? `${lead} · ${base}` : base;
}

/**
 * Explore › List (build notes 4, 1.3–1.7). The title row, the calm calendar pinned above, then the
 * city's days as grey day bands with their rows. Opens on today; earlier days sit above and load as
 * you scroll up; later weeks load as you scroll down, as far as the catalog has events.
 */
export function ExploreListScreen() {
  const { metro, date: target, today } = useView();
  const navigate = useNavigate();
  const href = `${window.location.pathname}${window.location.search}`;
  const scroller = useRef<HTMLDivElement>(null);
  // Back from an event restores where you were; any other way in opens on today (Kylie: the List opens on today).
  const navType = useNavigationType();
  // Only Back from an event restores the place; every other way in (a reload, the tab bar, the switch) opens on today.
  const [initialMemory] = useState(() => (peekArmed() && navType === 'POP' ? readMemory(href) : null));
  const memory = useRef(initialMemory);
  const location = useLocation();
  const fromSwitch = Boolean((location.state as { fromSwitch?: boolean } | null)?.fromSwitch);
  useEffect(() => {
    clearOpenedFromMap();
    // Read once per open: the place is restored only for the Back that follows a tap on a row or a day band.
    disarm();
  }, []);

  const [areaOpen, setAreaOpen] = useState(false);
  const [range, setRange] = useState<{ from: string; through: string } | null>(null);
  const [weeks, setWeeks] = useState<Map<string, CityDate[]>>(new Map());
  const [topDate, setTopDate] = useState(memory.current?.topDate ?? target);
  // The Today pill (V07): shows whenever today is off screen; ↓ from the past, ↑ from the future.
  const [pill, setPill] = useState<'down' | 'up' | null>(null);

  // Friends and your own answers, under the rows (the same Activity switch as the Map's sheet).
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const activityOn = getPref<boolean>('explore-activity', true);
  const [friends, setFriends] = useState<FeedItem[]>([]);
  useEffect(() => {
    let current = true;
    if (!account) {
      setFriends([]);
      return;
    }
    followingFeed(300).then((list) => current && setFriends(list.filter((f) => (f.metroId ?? DEFAULT_METRO.id) === metro.id)));
    return () => {
      current = false;
    };
  }, [account?.id, metro.id]);

  // One city at a time: a week still loading for the city you left must not land in the new one.
  const metroRef = useRef(metro.id);
  metroRef.current = metro.id;
  const loading = useRef(new Set<string>());
  /** Where to scroll once its day has rows on screen, and whether to glide there. */
  const [pending, setPending] = useState<{
    date: string;
    smooth: boolean;
  } | null>({ date: memory.current?.topDate ?? target, smooth: false });
  const placed = useRef(false);
  const firstLoadedRef = useRef<string | undefined>(undefined);
  /** The day at the top and how far below the top edge it sits: after weeks are added, that day goes back there. */
  const beforeAdd = useRef<{ day: string; offset: number } | null>(null);
  const anchorNow = (el: HTMLElement) => {
    const nodes = el.querySelectorAll<HTMLElement>('[data-day]');
    for (const node of nodes) {
      if (node.offsetTop + node.offsetHeight > el.scrollTop + 1) return { day: node.dataset.day ?? '', offset: node.offsetTop - el.scrollTop };
    }
    return null;
  };

  const shownMetro = useRef(metro.id);
  useEffect(() => {
    if (shownMetro.current !== metro.id) {
      shownMetro.current = metro.id;
      // The city changed inside this screen: start over on today.
      loading.current = new Set();
      memory.current = null;
      placed.current = false;
      beforeAdd.current = null;
      setPending({ date: today, smooth: false });
      setTopDate(today);
      setPill(null);
    }
    let current = true;
    setRange(null);
    setWeeks(new Map());
    getListRange(metro.id, today)
      .catch(() => ({ from: today, through: today }))
      .then((r) => current && setRange(r));
    return () => {
      current = false;
    };
  }, [metro.id, today]);

  // A new ?date= while the List stays open (search's quick picks) is a new target.
  const lastTarget = useRef(target);
  useEffect(() => {
    if (lastTarget.current === target) return;
    lastTarget.current = target;
    setPending({ date: target, smooth: true });
  }, [target]);

  const loadWeeks = useCallback(
    (weekStarts: string[]) => {
      const forMetro = metro.id;
      const need = weekStarts.filter((m) => !loading.current.has(m));
      need.forEach((m) => loading.current.add(m));
      return Promise.all(need.map((m) => getListWeek(forMetro, m).then((days) => [m, days] as const))).then((rows) => {
        if (metroRef.current !== forMetro) return;
        // Earlier weeks arriving above what is on screen must not move it: keep the place by the height they add.
        const el = scroller.current;
        const first = firstLoadedRef.current;
        if (el && placed.current && first && rows.some(([m]) => m < first)) beforeAdd.current = anchorNow(el);
        setWeeks((prev) => {
          const next = new Map(prev);
          for (const [m, days] of rows) next.set(m, days);
          return next;
        });
      });
    },
    [metro.id],
  );

  const rangeFirstWeek = range ? weekStartOf(range.from) : null;
  const rangeLastWeek = range ? weekStartOf(range.through) : null;

  // A target outside the range (a famous date, say) cannot be shown here: the Map shows any day.
  useEffect(() => {
    if (range && (target < range.from || target > range.through)) {
      if (fromSwitch) {
        // From the Map's own switch: the List cannot show that day, so it opens on today instead of bouncing back.
        const next = new URLSearchParams(window.location.search);
        next.delete('date');
        navigate(`/explore?${next.toString()}`, { replace: true });
      } else {
        navigate(mapPath({ metroId: metro.id, date: target, today, view: 'map' }), { replace: true });
      }
    }
  }, [range, target, today, metro.id, navigate]);

  // The first weeks: from the remembered place, else the target day's week and a few after it.
  useEffect(() => {
    if (!range || target < range.from || target > range.through) return;
    const anchor = weekStartOf(memory.current?.topDate ?? target);
    const first = rangeFirstWeek && anchor < rangeFirstWeek ? rangeFirstWeek : anchor;
    const list: string[] = [];
    for (let m = first; m <= addDays(weekStartOf(target), FIRST_AHEAD * 7) && m <= (rangeLastWeek ?? m); m = addDays(m, 7)) list.push(m);
    void loadWeeks(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  const weekStarts = useMemo(() => [...weeks.keys()].sort(), [weeks]);
  const firstLoaded = weekStarts[0];
  const lastLoaded = weekStarts[weekStarts.length - 1];
  firstLoadedRef.current = firstLoaded;

  // The crowd size range (build 5, item 6): each band's rows show only what's in range, with its own
  // "N events outside your crowd size · Show"; Show reveals that band for this visit. The read box never changes.
  const [revealed, setRevealed] = useState<ReadonlySet<string>>(() => new Set());
  useEffect(() => setRevealed(new Set()), [metro.id]);
  const keep = useMemo(() => alwaysShownIds(log, friends), [log, friends]);
  const crowdRange = rangeOn(crowdRangeOf(log), 'lists');
  const furtherOff = Boolean(crowdRangeOf(log).furtherListsOff);

  // The days that show: a row for every event at a known venue, empty days hidden (V08). A day whose rows are all
  // outside the range keeps its band, so its hidden line can be found. A day with only further-out events that the
  // lists switch shows keeps its band too (found Oct 21, 2026: it vanished from the List).
  const days = useMemo(() => {
    const out: { date: string; day: CityDate; events: CrowdEvent[]; hidden: number; further: CrowdEvent[] }[] = [];
    if (!range) return out;
    for (const weekStart of weekStarts) {
      for (const day of weeks.get(weekStart) ?? []) {
        if (day.date < range.from || day.date > range.through) continue;
        const all = day.events.filter(showsOnMap);
        const further = (day.furtherOut ?? []).filter((e) => !furtherOff || keep.has(e.id));
        if (all.length === 0 && further.length === 0) continue;
        // The hidden count stays while the day shows everything, so its line can read Hide (Kylie, Oct 17).
        const split = splitByRange(all, crowdRange, keep);
        out.push({ date: day.date, day, events: revealed.has(day.date) ? all : split.shown, hidden: split.hidden.length, further });
      }
    }
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weeks, weekStarts, range, revealed, keep, furtherOff, crowdRange.min, crowdRange.max, crowdRange.showUnknown]);

  // Keep the place when earlier weeks are added above: the scroll moves by the height they take.
  useLayoutEffect(() => {
    const el = scroller.current;
    const saved = beforeAdd.current;
    if (el && saved) {
      const node = el.querySelector<HTMLElement>(`[data-day="${saved.day}"]`);
      if (node) el.scrollTop = node.offsetTop - saved.offset;
      beforeAdd.current = null;
    }
  }, [firstLoaded]);

  const loadEarlier = useCallback(() => {
    if (!firstLoaded || !rangeFirstWeek || firstLoaded <= rangeFirstWeek) return;
    const el = scroller.current;
    if (el) beforeAdd.current = anchorNow(el);
    const list: string[] = [];
    for (let i = 1; i <= STEP; i++) {
      const m = addDays(firstLoaded, -7 * i);
      if (m >= rangeFirstWeek) list.push(m);
    }
    void loadWeeks(list);
  }, [firstLoaded, rangeFirstWeek, loadWeeks]);

  const loadLater = useCallback(
    (through = STEP) => {
      if (!lastLoaded || !rangeLastWeek || lastLoaded >= rangeLastWeek) return;
      const list: string[] = [];
      for (let i = 1; i <= through; i++) {
        const m = addDays(lastLoaded, 7 * i);
        if (m <= rangeLastWeek) list.push(m);
      }
      void loadWeeks(list);
    },
    [lastLoaded, rangeLastWeek, loadWeeks],
  );

  // Scroll to the pending day once its week is loaded and it has rows; if it has none, to the next day
  // that does, loading forward as needed (V08). On Back the pending day is the one you left at the top.
  useLayoutEffect(() => {
    const el = scroller.current;
    if (!el || !range || !pending) return;
    if (pending.date < range.from || pending.date > range.through) {
      setPending(null);
      return;
    }
    const wantWeek = weekStartOf(pending.date);
    if (!weeks.has(wantWeek) || (firstLoaded && wantWeek < firstLoaded) || (lastLoaded && wantWeek > lastLoaded)) {
      // Every week between what is loaded and the target, so earlier and later weeks stay in order.
      const list: string[] = [];
      if (firstLoaded && wantWeek < firstLoaded) for (let m = wantWeek; m < firstLoaded; m = addDays(m, 7)) list.push(m);
      else if (lastLoaded && wantWeek > lastLoaded) for (let m = addDays(lastLoaded, 7); m <= wantWeek; m = addDays(m, 7)) list.push(m);
      else list.push(wantWeek);
      void loadWeeks(list);
      return;
    }
    const first = days.find((d) => d.date >= pending.date);
    const node = first ? el.querySelector<HTMLElement>(`[data-day="${first.date}"]`) : null;
    if (node) {
      if (pending.smooth) el.scrollTo({ top: node.offsetTop - 1, behavior: 'smooth' });
      else el.scrollTop = node.offsetTop - 1;
      placed.current = true;
      setPending(null);
      setTopDate(first!.date);
      updatePill(el);
      return;
    }
    if (rangeLastWeek && lastLoaded && lastLoaded < rangeLastWeek) {
      void loadWeeks([addDays(lastLoaded, 7)]);
      return;
    }
    placed.current = true;
    setPending(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pending, days, weeks, range]);

  const topOf = (el: HTMLElement): string | null => {
    const nodes = el.querySelectorAll<HTMLElement>('[data-day]');
    for (const node of nodes) {
      if (node.offsetTop + node.offsetHeight > el.scrollTop + 4) return node.dataset.day ?? null;
    }
    return null;
  };

  const updatePill = (el: HTMLElement) => {
    const todayNode = el.querySelector<HTMLElement>(`[data-day="${today}"]`);
    const view = el.getBoundingClientRect();
    if (todayNode) {
      const r = todayNode.getBoundingClientRect();
      setPill(r.bottom < view.top + 4 ? 'up' : r.top > view.bottom - 4 ? 'down' : null);
      return;
    }
    const top = topOf(el);
    setPill(top && top < today ? 'down' : top && top > today ? 'up' : null);
  };

  // Scroll: which day is at the top, and the sentinels for loading more.
  const raf = useRef(0);
  const onScroll = () => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const el = scroller.current;
      if (!el || !placed.current) return;
      const top = topOf(el);
      if (top) setTopDate(top);
      updatePill(el);
      if (el.scrollTop < 240) loadEarlier();
      if (el.scrollHeight - el.scrollTop - el.clientHeight < 600) loadLater();
    });
  };
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  // Remember the day at the top for Back from an event (the scroll box is gone by the time this cleans up).
  const latest = useRef({ href, topDate: target });
  latest.current.href = href;
  latest.current.topDate = topDate;
  useEffect(
    () => () => {
      const { href: at, topDate: top } = latest.current;
      try {
        sessionStorage.setItem(LIST_MEMORY_KEY, JSON.stringify({ href: at, topDate: top }));
      } catch {
        /* storage blocked */
      }
    },
    [],
  );

  // The calendar loads its own weeks as its rows come into view, separate from the list's, so browsing ahead
  // never adds weeks (or gaps) to the list. Anything the list already loaded is used first.
  const [calWeeks, setCalWeeks] = useState<Map<string, CityDate[]>>(new Map());
  const calLoading = useRef(new Set<string>());
  useEffect(() => {
    calLoading.current = new Set();
    setCalWeeks(new Map());
  }, [metro.id]);
  const needWeeks = useCallback(
    (list: string[]) => {
      const forMetro = metro.id;
      const need = list.filter((m) => !calLoading.current.has(m) && !weeks.has(m));
      need.forEach((m) => calLoading.current.add(m));
      if (need.length === 0) return;
      void Promise.all(need.map((m) => getListWeek(forMetro, m).then((days) => [m, days] as const))).then((rows) => {
        if (metroRef.current !== forMetro) return;
        setCalWeeks((prev) => {
          const next = new Map(prev);
          for (const [m, days] of rows) next.set(m, days);
          return next;
        });
      });
    },
    [metro.id, weeks],
  );
  const reads = useMemo(() => {
    const out = new Map<string, CalendarRead>();
    for (const source of [calWeeks, weeks]) {
      for (const days of source.values()) {
        for (const day of days) out.set(day.date, { rating: day.rating?.rating ?? null, hasEvents: day.events.some(showsOnMap) });
      }
    }
    return out;
  }, [weeks, calWeeks]);
  const allWeekStarts = useMemo(() => {
    if (!rangeFirstWeek || !rangeLastWeek) return [] as string[];
    const out: string[] = [];
    for (let m = rangeFirstWeek; m <= rangeLastWeek; m = addDays(m, 7)) out.push(m);
    return out;
  }, [rangeFirstWeek, rangeLastWeek]);

  const pickDay = (date: string) => setPending({ date, smooth: true });

  // The week band that sat under the calendar ("This Week's Lineup · N Events", build 5, item 5) is gone (build 7.1,
  // M27; Kylie, Oct 23, 2026): the calendar and the day rows say it.

  const toToday = () => {
    // A future deep link may not have loaded today's week yet. Use the same loader and
    // empty-day handling as a calendar tap before scrolling back.
    setPending({ date: today, smooth: true });
  };

  const lineFor = (event: CrowdEvent) => (activityOn ? friendsLine(friends.filter((f) => f.eventId === event.id)) : null);
  const youFor = (event: CrowdEvent) => (activityOn ? (yourActivity(event.id, log)?.kind ?? null) : null);

  const firstIsPast = days.length > 0 && days[0].date < today;

  return (
    <div className="screen explore-list">
      <div className="explore-list-top">
        <ExploreHeader metro={metro} areaOpen={areaOpen} onAreaOpenChange={setAreaOpen}>
          <ExploreModeSwitch view="list" />
        </ExploreHeader>
        {range && allWeekStarts.length > 0 && <WeekCalendar weekStarts={allWeekStarts} reads={reads} today={today} range={range} topDate={topDate} onPick={pickDay} onNeed={needWeeks} />}
      </div>
      <div className="explore-list-body">
        {pill && (
          <button type="button" className={`today-pill is-${pill}`} onClick={toToday}>
            {pill === 'down' ? '↓' : '↑'} Today
          </button>
        )}
        <div
          className="explore-list-scroll"
          ref={scroller}
          onScroll={onScroll}
          onClick={(ev) => {
            // A tap on a row or a day band leaves the List: arm the place for Back.
            if ((ev.target as HTMLElement).closest('a')) {
              try {
                sessionStorage.setItem(LIST_ARMED_KEY, '1');
              } catch {
                /* storage blocked */
              }
            }
          }}
        >
          {range && days.length === 0 && weeks.size > 0 && <p className="you-fine explore-list-empty">Nothing listed yet.</p>}
          {firstIsPast && <div className="explore-list-earlier">Earlier</div>}
          {days.map(({ date, day, events, hidden, further }) => (
            <section key={date} className="explore-list-day" data-day={date} aria-label={dayLabel(date, today)}>
              <Link to={datePath(date, metro.id)} className="list-band-link">
                <ListBand label={dayLabel(date, today)} right={<ReadTile size="inline" rating={day.rating?.rating ?? null} empty={day.empty} />} />
              </Link>
              <ul className="day-list" aria-label={dayLabel(date, today)}>
                {[...events]
                  .sort((a, b) => (a.start ?? '99').localeCompare(b.start ?? '99'))
                  .map((e) => (
                    <li key={e.id}>
                      <DayRow event={e} day={day.events} line={lineFor(e)} you={youFor(e)} />
                    </li>
                  ))}
              </ul>
              <HiddenLine
                count={hidden}
                shown={revealed.has(date)}
                onToggle={() =>
                  setRevealed((set) => {
                    const next = new Set(set);
                    if (next.has(date)) next.delete(date);
                    else next.add(date);
                    return next;
                  })
                }
              />
              {/* Further out (Kylie, Oct 19–20, 2026): the day's big events within about a 2-hour drive close the day,
                  under a small heading, never in its verdict. The lists switch hides them, except your stubs and
                  friends' plans. */}
              {(() => {
                if (further.length === 0) return null;
                return (
                  <>
                    <div className="settings-heading further-out-head">Further Out</div>
                    <FurtherOutList events={further} variant="list" />
                  </>
                );
              })()}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
