import { useState, useSyncExternalStore } from 'react';
import { ChevronDown } from '../components/Icons';
import { FILTER_LEVELS, FILTER_TYPES, getPersonalLog, hiddenEventTypesOf, setHiddenEventTypes, subscribePersonalLog, type FilterTop } from '../data';

/**
 * Settings › Event Types (build 7.2, Section C; Kylie, Oct 30 form C1 to C13 and Nov 4 taxonomy lock; mocks
 * `docs/build-7-2/mockups/event-types/03` and `04`): a full page under Crowd Size with one card of the nine top
 * types. Each type is a row with a switch and a chevron that opens its sub-types; Sports opens first and also carries
 * the level switches (Pro, Minor League, College; High School waits for a source, C5c). A parent switch reads mixed
 * when some of its children are off; tapping a mixed parent turns everything under it on, tapping an on parent turns
 * the whole type off. Types with no events yet (Parades & Road Events, Pop-Ups & Watch Parties) are not listed (C6).
 * Only the keys that are off are saved (C8). A display filter only: verdicts and totals never change.
 */
export function EventTypesSettings() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const hidden = hiddenEventTypesOf(log);
  const [open, setOpen] = useState<ReadonlySet<string>>(() => new Set(['sports']));
  const save = (next: Set<string>) => setHiddenEventTypes([...next]);
  const toggleKey = (key: string) => {
    const next = new Set(hidden);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    save(next);
  };
  const toggleOpen = (key: string) =>
    setOpen((set) => {
      const next = new Set(set);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <>
      <div className="settings types-settings">
        <p className="types-lead">Turn off types you never want in Explore, the map, day lineups, and Local Competition.</p>
        <p className="types-lead types-promise">Your plans, stubs, faves, and friends' activity always show.</p>
        <div className="settings-heading">Show These Types</div>
        <div className="card types-card">
          {FILTER_TYPES.filter((t) => !t.dormant).map((top) => (
            <TypeGroup key={top.key} top={top} hidden={hidden} open={open.has(top.key)} onOpen={() => toggleOpen(top.key)} onToggle={toggleKey} onSave={save} />
          ))}
        </div>
        <p className="you-fine">Verdicts and crowd numbers still count hidden events, so a day reads the same either way.</p>
      </div>
    </>
  );
}

/** The switches under a type that a person can see today: its live sub-types, plus the levels under Sports. */
function childKeys(top: FilterTop): string[] {
  const keys = top.subs.filter((s) => !s.dormant).map((s) => s.key);
  if (top.key === 'sports') for (const l of FILTER_LEVELS) if (!l.dormant) keys.push(l.key);
  return keys;
}

/** "All On", "10 of 12 On · 1 Level Off", "Off": the line under a type's name. */
function summary(top: FilterTop, hidden: ReadonlySet<string>): string {
  if (hidden.has(top.key)) return 'Off';
  const subs = top.subs.filter((s) => !s.dormant);
  if (subs.length === 0) return 'On';
  const subsOff = subs.filter((s) => hidden.has(s.key)).length;
  const levelsOff = top.key === 'sports' ? FILTER_LEVELS.filter((l) => !l.dormant && hidden.has(l.key)).length : 0;
  if (subsOff === 0 && levelsOff === 0) return 'All On';
  const parts = [`${subs.length - subsOff} of ${subs.length} On`];
  if (levelsOff > 0) parts.push(`${levelsOff} ${levelsOff === 1 ? 'Level' : 'Levels'} Off`);
  return parts.join(' · ');
}

function TypeGroup({ top, hidden, open, onOpen, onToggle, onSave }: { top: FilterTop; hidden: ReadonlySet<string>; open: boolean; onOpen: () => void; onToggle: (key: string) => void; onSave: (next: Set<string>) => void }) {
  const subs = top.subs.filter((s) => !s.dormant);
  const levels = top.key === 'sports' ? FILTER_LEVELS.filter((l) => !l.dormant) : [];
  const expandable = subs.length > 0;
  const off = hidden.has(top.key);
  const children = childKeys(top);
  const mixed = !off && children.some((k) => hidden.has(k));
  const state: 'on' | 'off' | 'mixed' = off ? 'off' : mixed ? 'mixed' : 'on';
  const line = summary(top, hidden);
  // The parent switch: off → on (the type comes back, its children as they were); mixed → everything under it on;
  // on → the whole type off, stored as the one parent key (C8: only hidden keys, never a list of children).
  const tapParent = () => {
    const next = new Set(hidden);
    if (off) next.delete(top.key);
    else if (mixed) for (const k of children) next.delete(k);
    else next.add(top.key);
    onSave(next);
  };
  const panelId = `types-${top.key}`;
  return (
    <div className={`types-group${open && expandable ? ' open' : ''}`}>
      <div className="types-top">
        {expandable ? (
          <button type="button" className="types-top-words" aria-expanded={open} aria-controls={panelId} onClick={onOpen}>
            <span className="settings-row-title">{top.label}</span>
            <span className="settings-row-sub">{line}</span>
          </button>
        ) : (
          <span className="types-top-words">
            <span className="settings-row-title">{top.label}</span>
            <span className="settings-row-sub">{line}</span>
          </span>
        )}
        {expandable && (
          <button type="button" className="types-chevron" aria-label={open ? `Collapse ${top.label}` : `Expand ${top.label}`} aria-expanded={open} aria-controls={panelId} onClick={onOpen}>
            <span className={`settings-section-chevron${open ? ' open' : ''}`} aria-hidden>
              <ChevronDown />
            </span>
          </button>
        )}
        {/* A native checkbox, not role="switch": a switch cannot be mixed, a checkbox can (its `indeterminate` property,
            which React has no prop for, so a ref sets it). The label around it gives the 48 × 28 control a 68 × 52 tap
            area (mock 03, callout 2; Codex, Section C review). */}
        <label className="types-switch-wrap">
          <input
            ref={(el) => {
              if (el) el.indeterminate = state === 'mixed';
            }}
            type="checkbox"
            className={`switch${state === 'mixed' ? ' mixed' : ''}`}
            aria-label={`${top.label}, ${line.toLowerCase()}`}
            checked={state !== 'off'}
            onChange={tapParent}
          />
        </label>
      </div>
      {expandable && open && (
        <div id={panelId} className="types-children">
          {levels.length > 0 && (
            <>
              <div className="types-subhead">
                Levels <span aria-hidden>·</span> Apply to Every Sport
              </div>
              <div className="types-levels">
                {levels.map((l) => (
                  <label key={l.key} className={`types-level${off ? ' is-off' : ''}`}>
                    <span>{l.label}</span>
                    <input type="checkbox" className="switch" role="switch" checked={!off && !hidden.has(l.key)} disabled={off} onChange={() => onToggle(l.key)} />
                  </label>
                ))}
              </div>
              <div className="types-subhead">By Sport</div>
            </>
          )}
          <ul className="types-subs">
            {subs.map((s) => (
              <li key={s.key}>
                <label className={`types-sub${off ? ' is-off' : ''}`}>
                  <span>{s.label}</span>
                  <input type="checkbox" className="switch" role="switch" checked={!off && !hidden.has(s.key)} disabled={off} onChange={() => onToggle(s.key)} />
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
