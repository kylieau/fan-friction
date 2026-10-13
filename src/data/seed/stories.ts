// "The night" story (build notes 4, P4; BACKLOG Step 7, Kylie Oct 4): a short paragraph and a few
// source links for one event, shown on its event page under the crowd. Hand-seeded copy only, no
// screenshots or embedded posts. Empty until the stories are written; an event with none shows nothing.

export interface NightStory {
  /** One short paragraph, plain text. */
  text: string;
  /** Source names as link text. */
  links: { label: string; url: string }[];
}

/** Event id → its story. */
export const STORIES: Record<string, NightStory> = {};

export function storyFor(eventId: string): NightStory | undefined {
  return STORIES[eventId];
}
