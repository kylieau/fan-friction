import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  crowdRangeLabel,
  crowdRangeOf,
  favoriteOfficialName,
  favoritesOf,
  FILTER_TYPES,
  getPersonalLog,
  hiddenEventTypesOf,
  hiddenSwitchCount,
  setHiddenEventTypes,
  setTemperatureUnit,
  subscribePersonalLog,
  temperatureUnitOf,
} from '../data';
import { DEFAULT_METRO, METROS, metroUsesCelsius } from '../config/metros';
import { WELCOME } from '../config/onboarding';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { defaultHome, dismissNudge, firstSkipped, getSetup, markDone, markSkipped, requestSetup, SETUP_STEPS, setupEnabled, subscribeSetup, type SetupStep } from '../lib/setup';
import { CityList } from './HomePicker';
import { ReadTile } from './ReadTile';
import { CrowdSizeSettings } from '../screens/SettingsCrowdScreen';
import { childKeys, typeSummary } from '../screens/SettingsEventTypesScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';

type Step = SetupStep | 'done';
const ORDER: readonly Step[] = ['welcome', 'home', 'see', 'faves', 'done'];
const SAMPLE_TILES = [1.4, 3.1, 5.2, 7.4, 9.3];

/**
 * First-run onboarding (build 7.2, Section F; Kylie, Oct 30, 2026, Locked; mocks `onboarding/01` to `09`): Welcome,
 * Where's Home, What To See, Follow Your Faves, then Done. Every step can be skipped (F2) and has Back; "Skip setup" on
 * Welcome ends everything with the defaults (F13). Skipped steps are remembered for the Resume Setup nudge (F3).
 * A Change on Done returns to that step and then back to Done. Gated by `ONBOARDING_FLOW` (F10: the Welcome copy
 * waits for Kylie) and opened by `?setup=1` for a look, by Set Up Again (F8) and by the nudge.
 */
export function Onboarding({ start = 'welcome', onClose }: { start?: SetupStep; onClose: () => void }) {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(start);
  const [fromDone, setFromDone] = useState(false);
  const home = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const at = ORDER.indexOf(step);
  const index = Math.min(at, 3);

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => ev.key === 'Escape' && step !== 'welcome' && goBack();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const go = (next: Step) => {
    setStep(next);
    document.querySelector('.setup-body')?.scrollTo({ top: 0 });
  };
  const forward = () => {
    if (step !== 'done') markDone(step);
    if (fromDone) {
      setFromDone(false);
      go('done');
    } else go(ORDER[at + 1]);
  };
  const goBack = () => {
    if (fromDone) {
      setFromDone(false);
      go('done');
    } else if (at > 0) go(ORDER[at - 1]);
  };
  const skip = () => {
    if (step === 'welcome') {
      // Skip setup: the whole flow, every default (F13, F2).
      markSkipped(SETUP_STEPS);
      defaultHome();
      finish();
      return;
    }
    if (step !== 'done') markSkipped([step]);
    if (step === 'home') defaultHome();
    if (fromDone) {
      setFromDone(false);
      go('done');
    } else go(ORDER[at + 1]);
  };
  const change = (target: SetupStep) => {
    setFromDone(true);
    go(target);
  };
  const finish = () => {
    if (!getHomeId()) defaultHome();
    onClose();
    navigate('/explore');
  };

  const homeMetro = home ? METROS[home] : null;
  const unit = temperatureUnitOf(log) ?? (home && metroUsesCelsius(home) ? 'C' : 'F');
  const hidden = hiddenEventTypesOf(log);
  const favorites = favoritesOf(log);
  const tops = FILTER_TYPES.filter((t) => !t.dormant);
  const topFour = tops.slice(0, 4);
  const rest = tops.slice(4);
  const restOff = rest.filter((t) => hidden.has(t.key)).length;
  const offCount = hiddenSwitchCount(hidden);

  const titles: Record<Step, string> = { welcome: WELCOME.title, home: "Where's Home?", see: 'What Do You Want to See?', faves: 'Follow Your Faves', done: "You're All Set" };

  return (
    <div className="setup-screen" role="dialog" aria-modal="true" aria-label={titles[step]}>
      <header className="setup-head">
        {step === 'welcome' ? (
          <span className="setup-head-side" />
        ) : (
          <button type="button" className="setup-back" onClick={goBack}>
            <span aria-hidden>‹</span> Back
          </button>
        )}
        <span className="setup-progress" aria-label={step === 'done' ? 'All steps done' : `Step ${index + 1} of 4`}>
          <span className="setup-step-word">{step === 'done' ? 'All Steps Done' : `Step ${index + 1} of 4`}</span>
          <span className="setup-dots" aria-hidden>
            {SETUP_STEPS.map((s, i) => (
              <span key={s} className={`setup-dot${step === 'done' ? ' filled' : i === index ? ' current' : ''}`} />
            ))}
          </span>
        </span>
        {step === 'done' ? (
          <span className="setup-head-side" />
        ) : (
          <button type="button" className="setup-skip" onClick={skip}>
            {step === 'welcome' ? 'Skip setup' : 'Skip'}
          </button>
        )}
      </header>

      <div className="setup-body">
        {step === 'welcome' && (
          <>
            <span className="setup-brand">Fan/Friction</span>
            <h1 className="setup-title">{WELCOME.title}</h1>
            <p className="setup-lead">{WELCOME.lead}</p>
            <h2 className="setup-heading">{WELCOME.verdictHeading}</h2>
            <div className="card setup-card">
              <div className="setup-tiles" aria-label="Verdicts from Chill to Cooked">
                {SAMPLE_TILES.map((n) => (
                  <ReadTile key={n} rating={n} />
                ))}
              </div>
              <div className="setup-tiles-ends" aria-hidden>
                <span>Fewer people</span>
                <span>More people</span>
              </div>
              <p className="setup-card-line">{WELCOME.verdictLine}</p>
              <div className="setup-example">
                <ReadTile rating={7.4} />
                <span className="setup-example-words">
                  <strong>Sat, Nov 7</strong>
                  <span>{WELCOME.exampleDay}</span>
                </span>
              </div>
            </div>
            <h2 className="setup-heading">{WELCOME.marksHeading}</h2>
            <div className="card setup-card">
              <p className="setup-card-line">{WELCOME.marksLine}</p>
            </div>
          </>
        )}

        {step === 'home' && (
          <>
            <h1 className="setup-title">{titles.home}</h1>
            <p className="setup-lead">Explore opens on your home city. Pick it, or search for another.</p>
            <CityList stars={false} />
            <div className="card setup-units">
              <span className="settings-row-words">
                <span className="settings-row-title">Temperature Units</span>
                <span className="settings-row-sub">{homeMetro ? `°${metroUsesCelsius(homeMetro.id) ? 'C' : 'F'} for ${homeMetro.name}. Canada and Mexico homes use °C.` : 'Follows your home city. Canada and Mexico use °C.'}</span>
              </span>
              <span className="unit-control" role="radiogroup" aria-label="Temperature units">
                <button type="button" role="radio" aria-checked={unit === 'F'} className={unit === 'F' ? 'on' : ''} onClick={() => setTemperatureUnit('F')}>
                  °F
                </button>
                <button type="button" role="radio" aria-checked={unit === 'C'} className={unit === 'C' ? 'on' : ''} onClick={() => setTemperatureUnit('C')}>
                  °C
                </button>
              </span>
            </div>
          </>
        )}

        {step === 'see' && (
          <>
            <h1 className="setup-title">{titles.see}</h1>
            <p className="setup-lead">Both start wide open. Narrow them now, or leave them.</p>
            <h2 className="setup-heading">Crowd Size</h2>
            <div className="setup-crowd">
              <CrowdSizeSettings />
            </div>
            <h2 className="setup-heading">Event Types</h2>
            <div className="card types-card setup-types">
              {topFour.map((top) => {
                const off = hidden.has(top.key);
                const children = childKeys(top);
                const mixed = !off && children.some((k) => hidden.has(k));
                const line = typeSummary(top, hidden);
                const tap = () => {
                  const next = new Set(hidden);
                  if (off) next.delete(top.key);
                  else if (mixed) for (const k of children) next.delete(k);
                  else next.add(top.key);
                  setHiddenEventTypes([...next]);
                };
                return (
                  <div key={top.key} className="types-group">
                    <div className="types-top">
                      <span className="types-top-words">
                        <span className="settings-row-title">{top.label}</span>
                        <span className="settings-row-sub">{line}</span>
                      </span>
                      <label className="types-switch-wrap">
                        <input
                          ref={(el) => {
                            if (el) el.indeterminate = mixed;
                          }}
                          type="checkbox"
                          className={`switch${mixed ? ' mixed' : ''}`}
                          aria-label={`${top.label}, ${line.toLowerCase()}`}
                          checked={!off}
                          onChange={tap}
                        />
                      </label>
                    </div>
                  </div>
                );
              })}
              {rest.length > 0 && (
                <div className="types-group setup-more-types">
                  <div className="types-top">
                    <span className="types-top-words">
                      <span className="settings-row-title setup-more-title">
                        {rest.length} More {rest.length === 1 ? 'Type' : 'Types'}
                      </span>
                      <span className="settings-row-sub">
                        {rest.length > 2 ? `${rest[0].label}, ${rest[1].label}, and ${rest.length - 2} more.` : rest.map((t) => t.label).join(' and ') + '.'} {restOff === 0 ? 'All On.' : `${restOff} Off.`}
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {step === 'faves' && (
          <>
            <h1 className="setup-title">{titles.faves}</h1>
            <p className="setup-lead">Their games and shows land in Upcoming. Follow a few, or none.</p>
            <div className="setup-faves">
              <FavoritesScreen embedded edit />
            </div>
          </>
        )}

        {step === 'done' && (
          <>
            <h1 className="setup-title">{titles.done}</h1>
            <p className="setup-lead">Explore opens on {homeMetro?.name ?? DEFAULT_METRO.name}. Pick a day on the strip to see how crowded it will be.</p>
            <h2 className="setup-heading">Your Setup</h2>
            <div className="card setup-rows">
              <SetupRow label="Home" value={homeMetro?.name ?? `${DEFAULT_METRO.name} (Default)`} sub={`Temperature Units: °${unit}`} onChange={() => change('home')} />
              <SetupRow label="Crowd Size" value={crowdRangeLabel(crowdRangeOf(log))} onChange={() => change('see')} />
              <SetupRow label="Event Types" value={offCount === 0 ? 'All On' : `${offCount} Off`} onChange={() => change('see')} />
              <SetupRow
                label="Faves"
                value={favorites.length === 0 ? 'None' : `${favorites.length} Followed`}
                sub={favorites.length > 0 ? favorites.slice(0, 2).map(favoriteOfficialName).join(', ') + (favorites.length > 2 ? `, and ${favorites.length - 2} more` : '') : undefined}
                onChange={() => change('faves')}
              />
            </div>
            <h2 className="setup-heading">First Things to Try</h2>
            <div className="card setup-rows setup-tips">
              <p>Tap a day on the strip to see its events and verdict.</p>
              <p>Open an event to mark it Attending, Watching, or Interested.</p>
            </div>
            <p className="setup-fine">
              Change any of this later in <strong>You › Profile & Settings</strong>.
            </p>
          </>
        )}
      </div>

      <footer className="setup-foot">
        {step === 'welcome' && <p className="setup-fine setup-promise">{WELCOME.promise}</p>}
        {step === 'see' && (
          <p className="setup-fine setup-promise">
            <strong>Fine-tune later in Settings.</strong> Sports levels, music genres, and more types are there.
          </p>
        )}
        {step === 'faves' && <p className="setup-fine setup-promise">Search any team, artist, or venue. Manage Faves anytime in You.</p>}
        {step === 'welcome' ? (
          <button type="button" className="gold-button setup-primary" onClick={forward}>
            Get started
          </button>
        ) : step === 'done' ? (
          <button type="button" className="gold-button setup-primary" onClick={finish}>
            Start exploring
          </button>
        ) : (
          <button type="button" className="gold-button setup-primary" disabled={step === 'home' && !home} onClick={forward}>
            Continue
          </button>
        )}
      </footer>
    </div>
  );
}

function SetupRow({ label, value, sub, onChange }: { label: string; value: string; sub?: string; onChange: () => void }) {
  return (
    <div className="setup-row">
      <span className="setup-row-label">{label}</span>
      <span className="setup-row-value">
        <span>{value}</span>
        {sub && <span className="setup-row-sub">{sub}</span>}
      </span>
      <button type="button" className="link-button setup-row-change" onClick={onChange} aria-label={`Change ${label}`}>
        Change
      </button>
    </div>
  );
}

/**
 * The Resume Setup nudge (F3): one compact row on the empty Upcoming and at the foot of Settings while steps were
 * skipped and it was not dismissed. A tap opens the first skipped step; the × hides it for good. No tab badge.
 */
export function SetupNudge({ children }: { children?: ReactNode }) {
  const setup = useSyncExternalStore(subscribeSetup, getSetup, getSetup);
  const first = firstSkipped();
  if (!setupEnabled() || !first || setup.dismissed) return null;
  const n = setup.skipped.length;
  return (
    <div className="card setup-nudge">
      <button type="button" className="setup-nudge-main" onClick={() => requestSetup(first)}>
        <span className="setup-nudge-title">Resume Setup</span>
        <span className="setup-nudge-sub">
          You skipped {n} {n === 1 ? 'step' : 'steps'}. Defaults are on.
        </span>
      </button>
      <button type="button" className="setup-nudge-x" aria-label="Hide Resume Setup" onClick={dismissNudge}>
        <span aria-hidden>✕</span>
      </button>
      {children}
    </div>
  );
}
