// How a feed's name is written on screen (Kylie's leans, Oct 9, 2026; build notes 2, event naming).
// Feeds often send names in ALL CAPS. They are title-cased, except names whose official
// styling is unusual (kept here by hand) and acronyms of four letters or fewer.

/** Names written exactly as the act writes them. Add to this list; never guess at one. */
export const OFFICIAL_STYLING = ['for KING & COUNTRY', 'deadmau5', 'MØ', 'BAND-MAID', 'LANY', 'JPEGMAFIA', 'MGMT', 'AJR', 'BTS', 'TLC', 'LP', 'KISS', 'ABBA', 'RÜFÜS DU SOL'];

const OFFICIAL = new Map(OFFICIAL_STYLING.map((name) => [name.toLowerCase(), name]));

/** Lower-case words inside a title-cased name. */
const SMALL = new Set(['and', 'of', 'the', 'a', 'an', 'at', 'in', 'on', 'for', 'to', 'de', 'y', 'la', 'el', 'los', 'las', 'del', 'with', 'vs', 'feat']);

function titleCase(name: string): string {
  return name
    .toLowerCase()
    .split(' ')
    .map((word, i) => {
      if (!word) return word;
      if (i > 0 && SMALL.has(word)) return word;
      // Each letter after a non-letter too: "o'neal" -> "O'Neal", "band-maid" -> "Band-Maid".
      return word.replace(/(^|[^\p{L}\p{N}])(\p{L})/gu, (_m, before: string, letter: string) => `${before}${letter.toUpperCase()}`);
    })
    .join(' ');
}

/**
 * The name as it should read: a feed's ALL CAPS becomes title case ("SLAYER" -> "Slayer"),
 * unless the official styling list has it or it is an acronym of four letters or fewer
 * ("AJR", "BTS"). Mixed-case names pass through untouched.
 */
export function displayName(raw: string): string {
  const name = raw.trim().replace(/\s+/g, ' ');
  if (!name) return name;
  const official = OFFICIAL.get(name.toLowerCase());
  if (official) return official;
  const letters = name.replace(/[^\p{L}]/gu, '');
  const allCaps = letters.length > 0 && letters === letters.toUpperCase() && letters !== letters.toLowerCase();
  if (!allCaps) return name;
  if (!name.includes(' ') && letters.length <= 4) return name;
  return titleCase(name);
}
