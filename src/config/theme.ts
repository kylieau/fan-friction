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
  /** Crowd bars. */
  crowdBar: '#E3A600',
  /** The crowd number and date on the dark share card. */
  crowdOnInk: '#FFD100',
  /** The Squeezed pill and the Toughest fight badge, with ink text. */
  fightContainer: '#E6DDF8',
  /** The Swamped pill, the Up against label and rule, rival dots. Never links, buttons or the day read. */
  fight: '#6A3FBF',
  /** The Steamrolled pill. */
  fightDeep: '#2C1A57',
  /** Non-text graphics only. */
  fightBar: '#B39DE6',
  /** A crowd bar with no friction. */
  noFightBar: '#AEB8C6',
  /** The Unopposed pill's ground. */
  unopposed: '#EEF2F7',
  /** Outline tags and their text. */
  tagInk: '#4B5A70',
} as const;

export type ThemeColor = keyof typeof THEME;

export function applyTheme(root: HTMLElement = document.documentElement) {
  for (const [key, value] of Object.entries(THEME)) {
    root.style.setProperty(`--${key}`, value);
  }
}
