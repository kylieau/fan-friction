import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { CROWD_RANGE_TOP, crowdRangeLabel, crowdRangeOf, getPersonalLog, setCrowdRange, subscribePersonalLog, type CrowdRange } from '../data';
import { FurtherOutInfo } from '../components/FurtherOut';

const STOP = 5000;
const LABELS = [0, 20000, 40000, 60000, CROWD_RANGE_TOP];
const fmt = (n: number) => n.toLocaleString('en-US');

/** A typed value: digits only, snapped to the nearest 1,000, inside 0–80,000. */
function snapTyped(text: string): number {
  const n = Number(text.replace(/[^0-9]/g, ''));
  if (!Number.isFinite(n)) return 0;
  return Math.min(CROWD_RANGE_TOP, Math.max(0, Math.round(n / 1000) * 1000));
}

/**
 * Settings › Crowd size (build 5, item 6; board minsize-r6): a two-handle slider from 0 to 80,000+ that snaps to
 * 5,000s, and Min and Max fields that take any whole thousand (a typed value can sit between stops). 0 is no
 * minimum, 80,000+ no maximum. A display filter only: scores never change. Saved as you go. A dropdown's contents
 * inside the Settings panel since build 6 (item 8).
 */
export function CrowdSizeSettings() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const saved = crowdRangeOf(log);
  const [min, setMin] = useState(saved.min ?? 0);
  const [max, setMax] = useState(saved.max ?? CROWD_RANGE_TOP);
  const timer = useRef<number | undefined>(undefined);

  // Save a moment after the last change, so a drag writes once.
  const save = (nextMin: number, nextMax: number, showUnknown = saved.showUnknown) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      const range: CrowdRange = {
        ...(nextMin > 0 ? { min: nextMin } : {}),
        ...(nextMax < CROWD_RANGE_TOP ? { max: nextMax } : {}),
        ...(showUnknown === false ? { showUnknown: false } : {}),
        ...scope,
      };
      setCrowdRange(range);
    }, 350);
  };
  useEffect(() => () => window.clearTimeout(timer.current), []);

  // Min above Max (or Max below Min): the other end moves to match.
  const apply = (nextMin: number, nextMax: number, moved: 'min' | 'max') => {
    if (nextMin > nextMax) {
      if (moved === 'min') nextMax = nextMin;
      else nextMin = nextMax;
    }
    setMin(nextMin);
    setMax(nextMax);
    save(nextMin, nextMax);
  };

  // Where the range applies (Kylie, Oct 19, 2026): the map and lists each have a switch; every save keeps them.
  const scope: CrowdRange = {
    ...(saved.mapOff ? { mapOff: true } : {}),
    ...(saved.listsOff ? { listsOff: true } : {}),
    ...(saved.furtherMapOff ? { furtherMapOff: true } : {}),
    ...(saved.furtherListsOff ? { furtherListsOff: true } : {}),
  };
  const current: CrowdRange = { ...(min > 0 ? { min } : {}), ...(max < CROWD_RANGE_TOP ? { max } : {}), ...scope };
  const toggle = (patch: CrowdRange) => {
    window.clearTimeout(timer.current);
    setCrowdRange({ ...current, ...(saved.showUnknown === false ? { showUnknown: false } : {}), ...patch });
  };
  const pct = (n: number) => `${(n / CROWD_RANGE_TOP) * 100}%`;
  const showUnknown = saved.showUnknown !== false;

  return (
    <>
      <div className="settings">
        <div className="crowd-picker">
          <div className="crowd-picker-value">{crowdRangeLabel(current)}</div>
          <div className="range-slider" style={{ ['--lo' as string]: pct(min), ['--hi' as string]: pct(max) }}>
            <div className="range-track" aria-hidden>
              {Array.from({ length: CROWD_RANGE_TOP / STOP + 1 }, (_, i) => (
                <span key={i} className="range-tick" style={{ left: pct(i * STOP) }} />
              ))}
              <span className="range-fill" />
            </div>
            <input
              type="range"
              min={0}
              max={CROWD_RANGE_TOP}
              step={1000}
              value={min}
              aria-label="Minimum crowd size"
              aria-valuetext={min > 0 ? fmt(min) : 'No min'}
              onChange={(e) => apply(Math.round(Number(e.target.value) / STOP) * STOP, max, 'min')}
            />
            <input
              type="range"
              min={0}
              max={CROWD_RANGE_TOP}
              step={1000}
              value={max}
              aria-label="Maximum crowd size"
              aria-valuetext={max < CROWD_RANGE_TOP ? fmt(max) : 'No max'}
              onChange={(e) => apply(min, Math.round(Number(e.target.value) / STOP) * STOP, 'max')}
            />
          </div>
          <div className="range-labels" aria-hidden>
            {LABELS.map((n) => (
              <span key={n} style={{ left: pct(n) }}>
                {n === CROWD_RANGE_TOP ? `${fmt(n)}+` : fmt(n)}
              </span>
            ))}
          </div>
          <div className="range-fields">
            <NumberField label="Min" value={min > 0 ? min : null} empty="No min" onCommit={(n) => apply(n, max, 'min')} />
            <span className="range-dash" aria-hidden>
              –
            </span>
            <NumberField label="Max" value={max < CROWD_RANGE_TOP ? max : null} empty="No max" onCommit={(n) => apply(min, n === 0 ? CROWD_RANGE_TOP : n, 'max')} />
          </div>
          <p className="you-fine">Slider moves in steps of 5,000. Type any thousand for exact values. 80,000+ means no max.</p>
        </div>
      </div>
      {/* Where the range applies (Kylie, Oct 19, 2026: one range, a switch for the map and one for lists, both on). The
          map switch covers the map and its sheet; lists are date pages, the Explore List and search. Home keeps today's
          three biggest; a favorite's page and the Local Competition timeline are never filtered (Kylie, Oct 14). */}
      <div className="settings">
        <div className="settings-heading">Applies</div>
        <button type="button" className="settings-row settings-link" role="switch" aria-checked={!saved.mapOff} onClick={() => toggle({ mapOff: !saved.mapOff })}>
          <span>Apply on the map</span>
          <span className="settings-value">{saved.mapOff ? 'Off' : 'On'}</span>
        </button>
        <button type="button" className="settings-row settings-link" role="switch" aria-checked={!saved.listsOff} onClick={() => toggle({ listsOff: !saved.listsOff })}>
          <span>Apply on date pages and lists</span>
          <span className="settings-value">{saved.listsOff ? 'Off' : 'On'}</span>
        </button>
        <p className="you-fine">Home always shows today's three biggest events, and a favorite's page shows all of its events.</p>
        <p className="you-fine">Events you've stubbed or friends are attending always show.</p>
      </div>
      <div className="settings">
        <div className="settings-heading">Unknown size</div>
        <button
          type="button"
          className="settings-row settings-link"
          role="switch"
          aria-checked={showUnknown}
          onClick={() => {
            const next = !showUnknown;
            toggle(next ? { showUnknown: undefined } : { showUnknown: false });
          }}
        >
          <span>Show events with unknown size</span>
          <span className="settings-value">{showUnknown ? 'On' : 'Off'}</span>
        </button>
      </div>
      {/* Further out (Kylie, Oct 19–20, 2026): its own two switches, both on; the line under the heading says what
          the group is (Kylie, Oct 20: "needs a helper explanation"; wording and the unbroken "2-hour", Oct 20 afternoon). */}
      <div className="settings">
        {/* The definition sits behind the same (i) as on the event page (Kylie, Oct 21, 2026: "the same info icon on
            settings as well"); it was a line under the heading from Oct 20. */}
        <div className="settings-heading settings-heading-info">
          Further out <FurtherOutInfo />
        </div>
        <button type="button" className="settings-row settings-link" role="switch" aria-checked={!saved.furtherMapOff} onClick={() => toggle({ furtherMapOff: !saved.furtherMapOff })}>
          <span>Show on the map</span>
          <span className="settings-value">{saved.furtherMapOff ? 'Off' : 'On'}</span>
        </button>
        <button type="button" className="settings-row settings-link" role="switch" aria-checked={!saved.furtherListsOff} onClick={() => toggle({ furtherListsOff: !saved.furtherListsOff })}>
          <span>Show on date pages and lists</span>
          <span className="settings-value">{saved.furtherListsOff ? 'Off' : 'On'}</span>
        </button>
      </div>
    </>
  );
}

/** A Min or Max box: full numbers with commas, the number pad, snapped to a whole thousand when you leave it. */
function NumberField({ label, value, empty, onCommit }: { label: string; value: number | null; empty: string; onCommit: (n: number) => void }) {
  const [text, setText] = useState<string | null>(null);
  const shown = text ?? (value != null ? fmt(value) : '');
  const commit = () => {
    if (text === null) return;
    onCommit(text.trim() === '' ? 0 : snapTyped(text));
    setText(null);
  };
  return (
    <label className="field range-field">
      <span className="field-label">{label}</span>
      <input
        className="account-input"
        inputMode="numeric"
        enterKeyHint="done"
        value={shown}
        placeholder={empty}
        onChange={(e) => setText(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
        }}
      />
    </label>
  );
}
