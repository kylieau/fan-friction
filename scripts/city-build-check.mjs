// Sanity-check each covered metro: at least one venue, a map record, and a city-type line.
// Run: node scripts/city-build-check.mjs

import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' });
const { COVERED_METRO_IDS, METROS } = await server.ssrLoadModule('/src/config/metros.ts');
const { VENUES } = await server.ssrLoadModule('/src/data/venues.ts');
const { TEAMS } = await server.ssrLoadModule('/src/data/teams.ts');
const { SPORTS_FROM_TICKETMASTER } = await server.ssrLoadModule('/src/data/sources/ticketmasterSource.ts');
await server.close();

let fails = 0;
const ok = (name, cond) => {
  console.log(`${cond ? 'ok  ' : 'FAIL'} ${name}`);
  if (!cond) fails++;
};

for (const metroId of COVERED_METRO_IDS) {
  const venues = Object.values(VENUES).filter((v) => v.metroId === metroId);
  const teams = Object.values(TEAMS).filter((t) => t.metroId === metroId);
  ok(`${metroId}: METROS record`, Boolean(METROS[metroId]));
  ok(`${metroId}: at least one venue`, venues.length > 0);
  ok(`${metroId}: at least one home team`, teams.length > 0);
}

// Every building whose sports listings come from Ticketmaster must be a venue on file, or its games drop silently
// (found Oct 21, 2026: Toyota Arena's games went missing when the venue took a new id).
for (const venueId of SPORTS_FROM_TICKETMASTER) {
  ok(`ticketmaster sports: ${venueId} is a venue`, Boolean(VENUES[venueId]));
}

console.log(fails ? `${fails} failed` : 'all passed');
process.exit(fails ? 1 : 0);
