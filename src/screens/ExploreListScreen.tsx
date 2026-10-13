import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "../data";
import { addDays } from "../lib/dates";
import { mondayOf, weekOf } from "../data/cityList";
import { activityGroups, activityLine, yourActivity } from "../lib/activity";
import { getPref } from "../lib/prefs";
import { datePath, mapPath, useView } from "../lib/view";
import { showsOnMap } from "../map/crowdPoints";
import { DayRow } from "../components/DayRow";
import { ExploreHeader } from "../components/ExploreHeader";
import { ExploreModeSwitch } from "../components/ExploreModeSwitch";
import { ReadTile } from "../components/ReadTile";
import { WeekCalendar, type CalendarRead } from "../components/WeekCalendar";

const LIST_MEMORY_KEY = "fan-friction:list-return";
/** Weeks loaded ahead of the first one, and per scroll step. */
const FIRST_AHEAD = 4;
const STEP = 2;

interface ListMemory {
  href: string;
  firstMonday: string;
  scrollTop: number;
}

function readMemory(href: string): ListMemory | null {
  try {
    const raw = sessionStorage.getItem(LIST_MEMORY_KEY);
    const parsed = raw ? (JSON.parse(raw) as Partial<ListMemory>) : null;
    if (
      parsed &&
      parsed.href === href &&
      typeof parsed.firstMonday === "string" &&
      typeof parsed.scrollTop === "number"
    )
      return parsed as ListMemory;
  } catch {
    /* storage blocked */
  }
  return null;
}

/** "WED, OCT 14", with TODAY / TOMORROW in front (build notes 4, 1.3). */
function dayLabel(date: string, today: string): string {
  const base = new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
  const lead =
    date === today ? "Today" : date === addDays(today, 1) ? "Tomorrow" : null;
  return lead ? `${lead} · ${base}` : base;
}

/** "OCT 12–18", or "OCT 26–NOV 1" across months. */
function weekSpan(monday: string): string {
  const sunday = addDays(monday, 6);
  const m = (d: string) =>
    new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", {
      month: "short",
      timeZone: "UTC",
    });
  return m(monday) === m(sunday)
    ? `${m(monday)} ${Number(monday.slice(8))}–${Number(sunday.slice(8))}`
    : `${m(monday)} ${Number(monday.slice(8))}–${m(sunday)} ${Number(sunday.slice(8))}`;
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
  const [areaOpen, setAreaOpen] = useState(false);
  const [range, setRange] = useState<{ from: string; through: string } | null>(
    null,
  );
  const [weeks, setWeeks] = useState<Map<string, CityDate[]>>(new Map());
  const [topDate, setTopDate] = useState(target);
  // The Today pill (V07): shows whenever today is off screen; ↓ from the past, ↑ from the future.
  const [pill, setPill] = useState<"down" | "up" | null>(null);

  // Friends and your own answers, under the rows (the same Activity switch as the Map's sheet).
  const log = useSyncExternalStore(
    subscribePersonalLog,
    getPersonalLog,
    getPersonalLog,
  );
  const account = useSyncExternalStore(
    subscribeAccount,
    getAccount,
    getAccount,
  );
  const activityOn = getPref<boolean>("explore-activity", true);
  const [friends, setFriends] = useState<FeedItem[]>([]);
  useEffect(() => {
    let current = true;
    if (!account) {
      setFriends([]);
      return;
    }
    followingFeed(300).then(
      (list) =>
        current && setFriends(list.filter((f) => f.metroId === metro.id)),
    );
    return () => {
      current = false;
    };
  }, [account?.id, metro.id]);

  // The range, then the first weeks: from the remembered place, else the target day's week.
  const memory = useRef(readMemory(href));
  useEffect(() => {
    let current = true;
    setRange(null);
    setWeeks(new Map());
    getListRange(metro.id, today).then((r) => current && setRange(r));
    return () => {
      current = false;
    };
  }, [metro.id, today]);

  const loading = useRef(new Set<string>());
  const loadWeeks = useCallback(
    (mondays: string[]) => {
      const need = mondays.filter((m) => !loading.current.has(m));
      need.forEach((m) => loading.current.add(m));
      return Promise.all(
        need.map((m) =>
          getListWeek(metro.id, m).then((days) => [m, days] as const),
        ),
      ).then((rows) => {
        setWeeks((prev) => {
          const next = new Map(prev);
          for (const [m, days] of rows) next.set(m, days);
          return next;
        });
      });
    },
    [metro.id],
  );
  useEffect(() => {
    loading.current = new Set();
  }, [metro.id]);

  const rangeFirstMonday = range ? mondayOf(range.from) : null;
  const rangeLastMonday = range ? mondayOf(range.through) : null;

  // A target outside the range (a famous date, say) cannot be shown here: the Map shows any day.
  useEffect(() => {
    if (range && (target < range.from || target > range.through)) {
      navigate(
        mapPath({ metroId: metro.id, date: target, today, view: "map" }),
        { replace: true },
      );
    }
  }, [range, target, today, metro.id, navigate]);

  useEffect(() => {
    if (!range || target < range.from || target > range.through) return;
    const anchor = memory.current?.firstMonday ?? mondayOf(target);
    const first =
      rangeFirstMonday && anchor < rangeFirstMonday ? rangeFirstMonday : anchor;
    const list: string[] = [];
    for (
      let m = first;
      m <= addDays(mondayOf(target), FIRST_AHEAD * 7) &&
      m <= (rangeLastMonday ?? m);
      m = addDays(m, 7)
    )
      list.push(m);
    void loadWeeks(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  const mondays = useMemo(() => [...weeks.keys()].sort(), [weeks]);
  const firstLoaded = mondays[0];
  const lastLoaded = mondays[mondays.length - 1];

  // The days that show: a row for every event at a known venue, empty days hidden (V08).
  const days = useMemo(() => {
    const out: { date: string; day: CityDate; events: CrowdEvent[] }[] = [];
    if (!range) return out;
    for (const monday of mondays) {
      for (const day of weeks.get(monday) ?? []) {
        if (day.date < range.from || day.date > range.through) continue;
        const events = day.events.filter(showsOnMap);
        if (events.length > 0) out.push({ date: day.date, day, events });
      }
    }
    return out;
  }, [weeks, mondays, range]);

  // Keep the place when earlier weeks are added above: the scroll moves by the height they take.
  const beforeAdd = useRef<{ height: number; top: number } | null>(null);
  useLayoutEffect(() => {
    const el = scroller.current;
    const saved = beforeAdd.current;
    if (el && saved) {
      el.scrollTop = saved.top + (el.scrollHeight - saved.height);
      beforeAdd.current = null;
    }
  }, [firstLoaded]);

  const loadEarlier = useCallback(() => {
    if (!firstLoaded || !rangeFirstMonday || firstLoaded <= rangeFirstMonday)
      return;
    const el = scroller.current;
    if (el) beforeAdd.current = { height: el.scrollHeight, top: el.scrollTop };
    const list: string[] = [];
    for (let i = 1; i <= STEP; i++) {
      const m = addDays(firstLoaded, -7 * i);
      if (m >= rangeFirstMonday) list.push(m);
    }
    void loadWeeks(list);
  }, [firstLoaded, rangeFirstMonday, loadWeeks]);

  const loadLater = useCallback(
    (through = STEP) => {
      if (!lastLoaded || !rangeLastMonday || lastLoaded >= rangeLastMonday)
        return;
      const list: string[] = [];
      for (let i = 1; i <= through; i++) {
        const m = addDays(lastLoaded, 7 * i);
        if (m <= rangeLastMonday) list.push(m);
      }
      void loadWeeks(list);
    },
    [lastLoaded, rangeLastMonday, loadWeeks],
  );

  // Open on the target day (or the next with events), once, or put back where you left.
  const placed = useRef(false);
  useLayoutEffect(() => {
    const el = scroller.current;
    if (!el || placed.current || days.length === 0) return;
    if (memory.current) {
      el.scrollTop = memory.current.scrollTop;
    } else {
      const first = days.find((d) => d.date >= target) ?? days[days.length - 1];
      const node = el.querySelector<HTMLElement>(`[data-day="${first.date}"]`);
      if (node) el.scrollTop = node.offsetTop - 1;
    }
    placed.current = true;
    setTopDate(topOf(el) ?? target);
    updatePill(el);
  }, [days, target]);

  const topOf = (el: HTMLElement): string | null => {
    const nodes = el.querySelectorAll<HTMLElement>("[data-day]");
    for (const node of nodes) {
      if (node.offsetTop + node.offsetHeight > el.scrollTop + 4)
        return node.dataset.day ?? null;
    }
    return null;
  };

  const updatePill = (el: HTMLElement) => {
    const todayNode = el.querySelector<HTMLElement>(`[data-day="${today}"]`);
    const view = el.getBoundingClientRect();
    if (todayNode) {
      const r = todayNode.getBoundingClientRect();
      setPill(
        r.bottom < view.top + 4
          ? "up"
          : r.top > view.bottom - 4
            ? "down"
            : null,
      );
      return;
    }
    const top = topOf(el);
    setPill(top && top < today ? "down" : top && top > today ? "up" : null);
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

  // Remember where you were for Back from an event.
  const latest = useRef({ firstLoaded, href });
  latest.current = { firstLoaded, href };
  useEffect(
    () => () => {
      const el = scroller.current;
      if (!el || !latest.current.firstLoaded) return;
      try {
        sessionStorage.setItem(
          LIST_MEMORY_KEY,
          JSON.stringify({
            href: latest.current.href,
            firstMonday: latest.current.firstLoaded,
            scrollTop: el.scrollTop,
          }),
        );
      } catch {
        /* storage blocked */
      }
    },
    [],
  );

  // The calendar follows the week at the top; every row it shows must have its week loaded.
  const calendarMonday = mondayOf(topDate);
  useEffect(() => {
    if (!rangeLastMonday) return;
    const need: string[] = [];
    for (let i = 0; i < 3; i++) {
      const m = addDays(calendarMonday, 7 * i);
      if (
        m <= rangeLastMonday &&
        (!rangeFirstMonday || m >= rangeFirstMonday) &&
        !weeks.has(m)
      )
        need.push(m);
    }
    if (need.length > 0) void loadWeeks(need);
  }, [calendarMonday, rangeFirstMonday, rangeLastMonday, weeks, loadWeeks]);

  const reads = useMemo(() => {
    const out = new Map<string, CalendarRead>();
    for (const monday of mondays) {
      for (const day of weeks.get(monday) ?? []) {
        out.set(day.date, {
          rating: day.rating?.rating ?? null,
          hasEvents: day.events.some(showsOnMap),
        });
      }
    }
    return out;
  }, [weeks, mondays]);

  const pickDay = async (date: string) => {
    const el = scroller.current;
    if (!el || !range) return;
    // A day with no rows jumps to the next day that has some (V08), loading forward as needed.
    let search = date;
    for (let guard = 0; guard < 40; guard++) {
      const monday = mondayOf(search);
      if (!weeks.has(monday)) await loadWeeks([monday]);
      const found = (weeks.get(monday) ?? []).find(
        (d) => d.date >= search && d.events.some(showsOnMap),
      );
      const node = found
        ? el.querySelector<HTMLElement>(`[data-day="${found.date}"]`)
        : null;
      if (node) {
        el.scrollTo({ top: node.offsetTop - 1, behavior: "smooth" });
        return;
      }
      search = addDays(monday, 7);
      if (search > range.through) return;
    }
  };

  // The band under the calendar: the week at the top and how many rows it has.
  const weekCount = useMemo(() => {
    if (!range) return 0;
    return weekOf(calendarMonday).reduce((sum, date) => {
      const day = (weeks.get(calendarMonday) ?? []).find(
        (d) => d.date === date,
      );
      return (
        sum +
        (day && date >= range.from && date <= range.through
          ? day.events.filter(showsOnMap).length
          : 0)
      );
    }, 0);
  }, [weeks, calendarMonday, range]);
  const thisMonday = mondayOf(today);

  const toToday = () => {
    const el = scroller.current;
    if (!el) return;
    const first = days.find((d) => d.date >= today);
    const node = first
      ? el.querySelector<HTMLElement>(`[data-day="${first.date}"]`)
      : null;
    if (node) el.scrollTo({ top: node.offsetTop - 1, behavior: "smooth" });
  };

  const lineFor = (event: CrowdEvent) =>
    activityOn
      ? activityLine(
          activityGroups(
            friends.filter((f) => f.eventId === event.id),
            yourActivity(event.id, log),
          ),
        )
      : null;

  const firstIsPast = days.length > 0 && days[0].date < today;

  return (
    <div className="screen explore-list">
      <div className="explore-list-top">
        <ExploreHeader
          metro={metro}
          areaOpen={areaOpen}
          onAreaOpenChange={setAreaOpen}
        >
          <ExploreModeSwitch view="list" />
        </ExploreHeader>
        {range && (
          <WeekCalendar
            monday={calendarMonday}
            reads={reads}
            today={today}
            range={range}
            onPick={(d) => void pickDay(d)}
          />
        )}
        {range && (
          <div className="explore-list-band">
            {calendarMonday === thisMonday ? "This week" : ""}
            {calendarMonday === thisMonday ? " · " : ""}
            {weekSpan(calendarMonday)} · {weekCount}{" "}
            {weekCount === 1 ? "event" : "events"}
          </div>
        )}
      </div>
      <div className="explore-list-body">
        {pill && (
          <button
            type="button"
            className={`today-pill is-${pill}`}
            onClick={toToday}
          >
            {pill === "down" ? "↓" : "↑"} Today
          </button>
        )}
        <div className="explore-list-scroll" ref={scroller} onScroll={onScroll}>
          {range && days.length === 0 && weeks.size > 0 && (
            <p className="you-fine explore-list-empty">Nothing listed yet.</p>
          )}
          {firstIsPast && <div className="explore-list-earlier">Earlier</div>}
          {days.map(({ date, day, events }) => (
            <section
              key={date}
              className="explore-list-day"
              data-day={date}
              aria-label={dayLabel(date, today)}
            >
              <Link
                to={datePath(date, metro.id)}
                className="explore-list-dayhead"
              >
                <span className="explore-list-daylabel">
                  {dayLabel(date, today)}
                </span>
                <ReadTile
                  rating={day.rating?.rating ?? null}
                  empty={day.empty}
                />
              </Link>
              <ul className="day-list" aria-label={dayLabel(date, today)}>
                {[...events]
                  .sort((a, b) =>
                    (a.start ?? "99").localeCompare(b.start ?? "99"),
                  )
                  .map((e) => (
                    <li key={e.id}>
                      <DayRow event={e} line={lineFor(e)} />
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
