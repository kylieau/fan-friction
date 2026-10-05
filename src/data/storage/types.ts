// The swappable save layer. Screens never talk to this file.
// Today the phone's local storage fills it. A later cloud store can
// implement the same two methods without a change to the screens.

import type { PersonalLog } from '../types';

export interface EntryStore {
  /** Read the saved log. The phone copy resolves immediately. A cloud store may wait. */
  load(): Promise<PersonalLog>;
  save(log: PersonalLog): Promise<void>;
}
