/**
 * First-run onboarding (build 7.2, Section F; Kylie, Oct 30, 2026, Locked F1 to F13). The flow was built behind this
 * gate on Nov 6 while the Welcome copy waited (F10); Kylie approved the copy on Nov 7, 2026 (deferring to the lean), so
 * the flow is the first-run path (F11) and the old first-open "Where's home?" picker shows only when this is false.
 * `?setup=1` on any address opens the flow for a look either way.
 */
export const ONBOARDING_FLOW = true;

/** The Welcome step's words (F10, approved Nov 7, 2026; "Fan/Friction verdict" named once here per R7j). Headings Title Case, body sentence case. */
export const WELCOME = {
  title: 'See How Crowded a Day Will Be',
  lead: 'Fan/Friction reads the crowds for the days and events near you, so you can plan around them.',
  verdictHeading: 'What a Verdict Is',
  verdictLine: 'The Fan/Friction verdict is a score from 1 to 10 and a word for how crowded a day or event will be. It comes from the events that day, the crowds they draw, and how they overlap. Who wins never counts.',
  exampleDay: 'Example day: a stadium game and two concerts',
  marksHeading: 'Tags and Marks',
  marksLine: 'A ticket, a TV, or a bookmark marks what you plan: Attending, Watching, or Interested. Every crowd number says where it comes from: announced, reported, or estimated.',
  promise: 'Under a minute. Every step has defaults, and every step can be skipped.',
} as const;
