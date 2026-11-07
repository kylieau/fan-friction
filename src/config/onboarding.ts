/**
 * First-run onboarding (build 7.2, Section F; Kylie, Oct 30, 2026, Locked F1 to F13). The flow is built and gated:
 * off until Kylie approves the Welcome copy (F10 is open: she wants a fuller explanation of the verdict and of the
 * tags and marks), and the first-open "Where's home?" picker stays live meanwhile. `?setup=1` on any address opens
 * the flow for a look. Flip ONBOARDING_FLOW to true to make it the first-run path (F11).
 */
export const ONBOARDING_FLOW = false;

/** The Welcome step's words, drafted for her yes or edits (F10). Headings Title Case, body sentence case. */
export const WELCOME = {
  title: 'See How Crowded a Day Will Be',
  lead: 'Fan/Friction reads the crowds for the days and events near you, so you can plan around them.',
  verdictHeading: 'What a Verdict Is',
  verdictLine: 'A verdict is a score from 1 to 10 and a word for how crowded a day or event will be. It comes from the events that day, the crowds they draw, and how they overlap. Who wins never counts.',
  exampleDay: 'Example day: a stadium game and two concerts',
  marksHeading: 'Tags and Marks',
  marksLine: 'A ticket, a TV, or a bookmark marks what you plan: Attending, Watching, or Interested. Every crowd number says where it comes from: announced, reported, or estimated.',
  promise: 'Under a minute. Every step has defaults, and every step can be skipped.',
} as const;
