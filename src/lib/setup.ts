import { getPref, setPref } from './prefs';
import { getHomeId, setHomeId, subscribeHome } from './homeCity';
import { DEFAULT_METRO } from '../config/metros';
import { ONBOARDING_FLOW } from '../config/onboarding';

// First-run setup on this device (build 7.2, Section F): which steps were skipped, whether the Resume Setup nudge was
// dismissed, and whether home is the skip fallback (F2: "Los Angeles (Default)" in Settings) rather than a pick.

export type SetupStep = 'welcome' | 'home' | 'see' | 'faves';
export const SETUP_STEPS: readonly SetupStep[] = ['welcome', 'home', 'see', 'faves'];

export interface SetupState {
  skipped: SetupStep[];
  dismissed: boolean;
  homeDefault: boolean;
}

const PREF = 'setup';
const EMPTY: SetupState = { skipped: [], dismissed: false, homeDefault: false };
const listeners = new Set<() => void>();
let cached: SetupState | null = null;

function read(): SetupState {
  const raw = getPref<Partial<SetupState> | null>(PREF, null);
  if (!raw || typeof raw !== 'object') return EMPTY;
  const skipped = Array.isArray(raw.skipped) ? raw.skipped.filter((s): s is SetupStep => (SETUP_STEPS as readonly string[]).includes(s as string)) : [];
  return { skipped, dismissed: raw.dismissed === true, homeDefault: raw.homeDefault === true };
}

export function getSetup(): SetupState {
  if (!cached) cached = read();
  return cached;
}

function write(next: SetupState) {
  cached = next;
  setPref(PREF, next);
  listeners.forEach((l) => l());
}

export function subscribeSetup(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** A step skipped: remembered for the nudge (F3). */
export function markSkipped(steps: readonly SetupStep[]) {
  const was = getSetup();
  write({ ...was, skipped: [...new Set([...was.skipped, ...steps])] });
}

/** A step completed (now or on a resume): no longer skipped. */
export function markDone(step: SetupStep) {
  const was = getSetup();
  if (!was.skipped.includes(step)) return;
  write({ ...was, skipped: was.skipped.filter((s) => s !== step) });
}

/** The nudge's ×: hidden for good (F3). */
export function dismissNudge() {
  write({ ...getSetup(), dismissed: true });
}

/** Set Up Again (F8): the nudge can show again if steps are skipped this time. */
export function resetDismissal() {
  write({ ...getSetup(), dismissed: false });
}

let markingDefault = false;

/**
 * Skipping Where's Home (F2, F12): Los Angeles as the fallback, marked Default, never over a home already set (an
 * account's, or an earlier pick). A later real pick clears the mark (the subscription below).
 */
export function defaultHome() {
  if (getHomeId()) return;
  markingDefault = true;
  setHomeId(DEFAULT_METRO.id);
  markingDefault = false;
  write({ ...getSetup(), homeDefault: true });
}

subscribeHome(() => {
  if (markingDefault) return;
  if (getSetup().homeDefault) write({ ...getSetup(), homeDefault: false });
});

// ---------- Opening the flow from elsewhere (Set Up Again, Resume Setup) ----------

const openListeners = new Set<(step: SetupStep) => void>();

export function requestSetup(step: SetupStep) {
  openListeners.forEach((l) => l(step));
}

export function onSetupRequest(listener: (step: SetupStep) => void) {
  openListeners.add(listener);
  return () => openListeners.delete(listener);
}

/** The first skipped step in flow order, for the nudge (F3). */
export function firstSkipped(): SetupStep | null {
  const { skipped } = getSetup();
  return SETUP_STEPS.find((s) => skipped.includes(s)) ?? null;
}

// ---------- The gate (F10: off until the Welcome copy is approved; `?setup=1` previews it for this session) ----------

const PREVIEW = 'fan-friction:setup-preview';

export function enableSetupPreview() {
  try {
    sessionStorage.setItem(PREVIEW, '1');
  } catch {
    /* storage can be blocked */
  }
}

export function setupEnabled(): boolean {
  if (ONBOARDING_FLOW) return true;
  try {
    return sessionStorage.getItem(PREVIEW) === '1';
  } catch {
    return false;
  }
}
