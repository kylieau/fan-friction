// For scripts that compute reads without Supabase (the nightly archive, the
// formula table): fill the app's catalog cache from the index files on disk,
// so weather, results and snapshots resolve the way they do in the app.
// Usage, after a vite dev server is up:  await primeFromFiles(server, 'la')

export async function primeFromFiles(server, metroId) {
  const { primeFromRows } = await server.ssrLoadModule('/src/data/catalogCache.ts');
  const { WEATHER_ROWS, WEATHER_DAYS } = await server.ssrLoadModule('/src/data/weatherIndex.ts');
  const { GAME_RESULTS } = await server.ssrLoadModule('/src/data/resultsIndex.ts');
  const { ARCHIVE_FORECASTS } = await server.ssrLoadModule('/src/data/startForecastIndex.ts');
  primeFromRows(metroId, {
    hours: WEATHER_ROWS.filter((r) => r.metroId === metroId),
    days: WEATHER_DAYS.filter((d) => d.metroId === metroId),
    results: GAME_RESULTS.filter((r) => r.metroId === metroId),
    snapshots: ARCHIVE_FORECASTS.filter((r) => r.metroId === metroId),
  });
}
