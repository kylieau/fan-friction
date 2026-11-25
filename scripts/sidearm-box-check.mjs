// The SIDEARM box-score reader's rules (build 7.3, B2; src/data/sources/sidearmBox.ts), on fixture pages shaped
// like the live ones read Nov 25, 2026 (USC men's basketball 2025-26, USC women's volleyball 2023). No network.
// Usage: node scripts/sidearm-box-check.mjs

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let failed = false;
const check = (ok, what) => {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${what}`);
  if (!ok) failed = true;
};
/** A page whose Nuxt payload is the given flat array. */
const page = (data) => `<html><body><script type="application/json" id="__NUXT_DATA__" data-ssr="true">${JSON.stringify(data)}</script></body></html>`;

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const box = await server.ssrLoadModule('/src/data/sources/sidearmBox.ts');

  // The season page: the school's own table, the opponents' table (the same games from the other side), a footer.
  const index = page([
    ['ShallowReactive', 1],
    { gameByGameStats: 2 },
    { ourGameByGameStats: 3, opponentGameByGameStats: 7 },
    [4, 5, 6],
    { date: 8, isAtHome: true, opponent: 9, boxscoreUrl: 10, isAFooterStat: false },
    { date: 11, isAtHome: false, opponent: 12, boxscoreUrl: 13, isAFooterStat: false },
    { date: 8, isAtHome: true, opponent: 9, boxscoreUrl: 10, isAFooterStat: true },
    [14],
    '11/03/25', 'Cal Poly', '/sports/mens-basketball/stats/2025/cal-poly/boxscore/34873',
    '11/07/25', 'Arizona St.', '/sports/mens-basketball/stats/2025/arizona-st-/boxscore/34879',
    { date: 8, isAtHome: false, opponent: 9, boxscoreUrl: 10, isAFooterStat: false },
  ]);
  const games = box.indexGames(index);
  check(games?.length === 2, "the season page lists each box score once, from the school's own table");
  check(games?.[0].home === true && games?.[0].date === '2025-11-03' && games?.[0].boxId === '34873', 'the home game: its date, number, and home flag from our side, not the opponents\' table');
  check(games?.[1].home === false, 'an away game reads as away');
  check(box.indexGames('<html>no payload</html>') === null, 'a page with no payload reads as nothing, not as an empty season');
  check(box.indexGames(page([{ error: 1 }, { statusCode: 404, message: 'Page not found' }])) === null, "a payload with no game-by-game table (an error page) reads as nothing, not as an empty season (Codex, B2 review)");
  check(box.indexGames(page([{ ourGameByGameStats: 1 }, []]))?.length === 0, 'a real table with no games yet is an empty season');

  const boxPage = (o) => page([{ game: 1 }, { date: 2, location: 3, stadium: 4, isNeutral: o.neutral ?? false, isAPostseasonGame: o.post ?? false, attendance: 5 }, o.date ?? '11/03/25', o.location, o.stadium ?? '0', o.attendance]);
  const hoops = box.boxFacts(boxPage({ location: 'Galen Center, Los Angeles, CA', attendance: '3902' }));
  check(hoops?.attendance === 3902 && hoops?.places.join('|') === 'Galen Center, Los Angeles, CA' && !hoops.neutral, "basketball's box: the crowd, and the room in the location line (the stadium line's 0 dropped)");
  const volley = box.boxFacts(boxPage({ date: '9/10/2023', location: 'Los Angeles, CA', stadium: 'Galen Center', attendance: '683' }));
  check(volley?.places[0] === 'Galen Center' && volley?.date === '2023-09-10', "volleyball's box: the room in the stadium line first, a four-digit year read");
  check(box.boxFacts(boxPage({ location: 'Galen Center', attendance: '0' }))?.attendance === undefined, 'a zero crowd is no crowd (never proof of an empty room)');
  check(box.boxFacts(boxPage({ location: 'Galen Center', attendance: '' }))?.attendance === undefined, 'a blank crowd is no crowd');
  check(box.boxFacts(boxPage({ location: 'Galen Center', attendance: '10,214' }))?.attendance === 10214, 'a crowd with a comma reads whole');
  check(box.boxFacts(boxPage({ location: 'Galen Center', attendance: '3902', neutral: true }))?.neutral === true, 'the neutral-site flag is read');
  check(box.boxFacts(boxPage({ location: 'Galen Center', attendance: '3902', post: true }))?.postseason === true, 'the postseason flag is read');

  // SIDEARM's older layout (Northeastern, read Nov 25, 2026): plain tables and a Game Details list.
  const legacyIndex = `<h3>Game By Game - Team Statistics</h3><table><tbody>
    <tr><td class="text-no-wrap">vs <a aria-label='boxscore for Boston U. on 11/03/25' href='/boxscore.aspx?id=13755&amp;path=mbball'>Boston U.</a></td><td>11/03/25</td><td>75-76</td></tr>
    <tr><td class="text-no-wrap">at <a aria-label='boxscore for Harvard on 11/11/25' href='/boxscore.aspx?id=13758&amp;path=mbball'>Harvard</a></td><td>11/11/25</td><td>70-61</td></tr>
    </tbody></table><h3>Game By Game - Opponents Statistics</h3><table><tbody>
    <tr><td class="text-no-wrap"><a aria-label='boxscore for Boston U. on 11/03/25' href='/boxscore.aspx?id=13755&amp;path=mbball'>Boston U.</a></td><td>11/03/25</td></tr>
    </tbody></table>`;
  const legacy = box.indexGames(legacyIndex);
  check(legacy?.length === 2 && legacy[0].home && !legacy[1].home && legacy[0].boxUrl === '/boxscore.aspx?id=13755&path=mbball', 'the older season page: the team table by its "vs"/"at", home and away, the link unescaped');
  const legacyBox = (att, site) => `<aside class="game-details"><dl><dt>Date</dt><dd>11/03/25</dd><dt>Time</dt><dd>7:30 PM</dd><dt>Attendance</dt><dd>${att}</dd><dt>Site</dt><dd>${site}</dd></dl></aside>`;
  const lb = box.boxFacts(legacyBox('2189', 'Matthews Arena, Boston, MA'));
  check(lb?.attendance === 2189 && lb?.places[0] === 'Matthews Arena, Boston, MA' && lb?.date === '2025-11-03', 'the older box score: the crowd, the site, and the date from its Game Details');
  check(box.boxFacts(legacyBox('', 'Matthews Arena, Boston, MA'))?.attendance === undefined, 'the older box score: a blank crowd is no crowd');
  check(box.indexGames('<html><body>Page not found</body></html>') === null, 'a page in neither layout reads as nothing');

  check(box.placeKey(['Lowell']) === 'lowell' && box.placeKey(['Lowell, Massachusetts']) === 'lowell', 'a city written two ways is one city (the city-only rule, Kylie, Nov 25)');
  check(box.placeKey(['Galen Center', 'Los Angeles, CA']) === 'los angeles', 'the city is read from the last place line');
  check(box.placeKey(['Matthews Arena, Boston, MA']) === undefined, 'a room, city, and state line names a room, not a city: it is never placed by the city rule');

  check(box.boxRoom('la', ['Galen Center, Los Angeles, CA'], '2025-11-03') === 'galen-center', 'the location line places the room on file');
  check(box.boxRoom('la', ['Galen Center', 'Los Angeles, CA'], '2023-09-10') === 'galen-center', 'the stadium line places the room on file');
  check(box.boxRoom('la', ['Los Angeles, CA'], '2023-09-10') === undefined, 'a city alone names no room (no usual-room default)');
  check(box.boxRoom('boston', ['Galen Center, Los Angeles, CA'], '2025-11-03') === undefined, "a room in another city never places a game in this one");

  check(box.sportPaths('hockey', 'women').join() === 'womens-ice-hockey,womens-hockey', "a women's hockey program tries both of the site's spellings");
  check(box.sportPaths('soccer', undefined).length === 0, 'a soccer program with no side named is never guessed');
  const winter = box.seasonsToRead('basketball', '2026-11-25');
  check(winter.map((s) => s.label).join() === '2023-24,2024-25,2025-26,2026-27' && winter[3].season === 2027, 'a winter sport in November: three past seasons and this one, named by both years, numbered by the end year');
  check(box.seasonsToRead('volleyball', '2026-11-25').map((s) => s.label).join() === '2023,2024,2025,2026', 'a fall sport: by calendar year');
  check(box.seasonsToRead('basketball', '2026-06-01')[3].label === '2025-26', 'in June the winter season just ended is still the current one');

  const robots = box.robotsFor('User-agent: BadBot\nDisallow: /\n\nUser-agent: *\nDisallow: /documents/\nDisallow: /*.js$\nAllow: /\nCrawl-delay: 30\n');
  check(robots.delaySeconds === 30, "the site's crawl delay for any crawler, not another bot's group");
  check(robots.allows('/sports/womens-volleyball/stats/2023') && !robots.allows('/documents/x.pdf') && !robots.allows('/a/b.js'), 'paths the robots file closes are never read; the stats pages are open');
  check(box.robotsFor('User-agent: *\nDisallow: /sports/\n').allows('/sports/football/stats/2025') === false, 'a site that closes its sports pages is not read');
  const named = box.robotsFor('User-agent: *\nAllow: /\nCrawl-delay: 5\n\nUser-agent: fan-friction\nDisallow: /sports/\nCrawl-delay: 60\n');
  check(!named.allows('/sports/football/stats/2025') && named.delaySeconds === 60, "a group naming this reader wins over the one for any crawler, its delay too (Codex, B2 review)");
} finally {
  await server.close();
}
console.log(failed ? '\nFAILED' : '\nall checks passed');
process.exit(failed ? 1 : 0);
