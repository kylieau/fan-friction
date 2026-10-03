// Colors from the build brief (v4 mockups). Light theme, no orange, and gold
// is never used for text on white. These become CSS variables at startup.
export const THEME = {
  bg: '#F7F8FA',
  card: '#FFFFFF',
  ink: '#0F1B2D',
  inkSoft: '#2D3748',
  ink2: '#4A5568',
  muted: '#7B8798',
  line: '#E5E9F0',
  track: '#E8ECF2',
  barOff: '#DDE3EC',
  /** Dodger blue: scores and selected states. */
  dodger: '#005A9C',
  /** UCLA blue: secondary. */
  ucla: '#2774AE',
  /** Pale ground for the map header, the tab bar, and the sheet. */
  chrome: '#DAEBFE',
  /** UCLA gold: the one primary button per screen, and the hottest heat. */
  gold: '#FFD100',
  /**
   * One step darker than the crowd glow (#FFD100), for the Today sun only.
   * Darker so it does not read as another gold blob. Buttons and the glow stay on gold.
   */
  sun: '#CCA700',
  paleBlue: '#9CC3E4',
  water: '#D5E5F3',
} as const;

export type ThemeColor = keyof typeof THEME;

export function applyTheme(root: HTMLElement = document.documentElement) {
  for (const [key, value] of Object.entries(THEME)) {
    root.style.setProperty(`--${key}`, value);
  }
}
