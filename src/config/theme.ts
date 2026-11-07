// Colors from the build brief (v4 mockups). Light theme, no orange, and gold
// is never used for text on white. These become CSS variables at startup.

/** Pale UCLA blue. One shell for the page ground and the map chrome. */
const SHELL = '#DAEBFE';

export const THEME = {
  /** Page ground, status bar, and the frame around the phone. Same as chrome. */
  bg: SHELL,
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
  /** Map header, tab bar (including the home-indicator inset), and the sheet. */
  chrome: SHELL,
  /** UCLA gold: the one primary button per screen, and the hottest heat. */
  gold: '#FFD100',
  /**
   * One step darker than the crowd glow (#FFD100), for the Today sun only.
   * Darker so it does not read as another gold blob. Buttons and the glow stay on gold.
   */
  sun: '#CCA700',
  paleBlue: '#9CC3E4',
  water: '#D5E5F3',
  // Color roles (Kylie, Oct 10, 2026; build notes 2, 7.3): blue = action, gold = crowd, violet = friction.
  /** Buttons, links, chevrons, the selected tab. Never crowd or friction. */
  action: '#005A9C',
  /** Map dots and glow; a badge fill with ink text. Never text on light, buttons, the tab bar or links. */
  crowdMark: '#FFD100',
  /** The crowd icon beside a figure in text. */
  crowdIcon: '#B98500',
  /**
   * A crowd ceiling ("14k cap", "Up to 10,258"; build 7.2, R3a and R3b): grey so a room size never reads as a count.
   * 5.4:1 on white; `muted` (3.65:1) fails the 4.5:1 check (I2).
   */
  ceiling: '#5F6B7D',
  /** Upcoming's YOUR FAVES band and the paler month strip under it (build 7.2, A1; Kylie, Oct 30). */
  favesBand: '#C9DAEE',
  monthStrip: '#E3EDF8',
  /**
   * Getting There's three road blues (build 7.2, Section E, E6: their own blues, no verdict colors, never red, orange
   * or yellow). Heavy sits away from the action blue (#005A9C) by the builder's call R4c; Light takes a thin ink edge
   * on the light-blue page (R4d).
   */
  roadLight: '#C9DDF1',
  roadBusy: '#5B93D0',
  roadHeavy: '#12406E',
  /** Crowd bars. */
  crowdBar: '#E3A600',
  /** The crowd number and date on the dark share card. */
  crowdOnInk: '#FFD100',
  /** The friction pill's one tint, every level (build 6, item 1), and the Toughest fight badge. */
  fightContainer: '#E6DDF8',
  /** The friction pill's text on that tint (8.9:1). */
  fightInk: '#3F2A78',
  /** The friction ring, the "Up against" label and rule, rival dots. Never links, buttons or the day read. */
  fight: '#6A3FBF',
  /** The ring's violet for a dark theme, when one exists (build 6, S5: spec only). Non-text graphics only. */
  fightBar: '#B39DE6',
  /** The Why card's quiet crowd bar (a room under the friction floor). */
  noFightBar: '#AEB8C6',
  /** Outline tags and their text. */
  tagInk: '#4B5A70',
} as const;

export type ThemeColor = keyof typeof THEME;

export function applyTheme(root: HTMLElement = document.documentElement) {
  for (const [key, value] of Object.entries(THEME)) {
    root.style.setProperty(`--${key}`, value);
  }
}
