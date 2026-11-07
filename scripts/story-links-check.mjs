// The story section's weekly link check (build 7.2, Section D, D4g; Kylie, Oct 30, 2026, Locked): every story's
// source links are asked for their page; the addresses that are gone (404 or 410, or no answer on two tries) are
// written to src/data/seed/storyLinksBroken.ts, and the app leaves those rows out of the source line while the story
// stays. A refusal that says nothing about a phone's browser (403 from a site that blocks robots, a 5xx) is logged and
// kept on screen. Runs from .github/workflows/story-links.yml every Monday; also by hand: node scripts/story-links-check.mjs

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(root, 'src/data/seed/storyLinksBroken.ts');
const TIMEOUT_MS = 15000;

async function ask(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { method, redirect: 'follow', signal: controller.signal, headers: { 'user-agent': 'Mozilla/5.0 (fan-friction story link check)' } });
    return res.status;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** Gone for good: 404 or 410, or no answer at all on two tries. Anything else is kept. */
async function gone(url) {
  let status = await ask(url, 'HEAD');
  if (status === null || status === 405 || status === 403) status = await ask(url, 'GET');
  if (status === 404 || status === 410) return { gone: true, status };
  if (status === null) {
    const again = await ask(url, 'GET');
    if (again === null) return { gone: true, status: 'no answer' };
    status = again;
  }
  return { gone: false, status };
}

const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
let broken = [];
try {
  const { STORIES } = await server.ssrLoadModule('/src/data/seed/stories.ts');
  const links = [...new Set(Object.values(STORIES).flatMap((story) => story.links.map((link) => link.url)))];
  console.log(`${Object.keys(STORIES).length} stories, ${links.length} links`);
  for (const url of links) {
    const result = await gone(url);
    console.log(`${result.gone ? 'GONE' : 'ok  '} ${result.status} ${url}`);
    if (result.gone) broken.push(url);
  }
} finally {
  await server.close();
}
broken.sort();
const text = `// Written by scripts/story-links-check.mjs (weekly, .github/workflows/story-links.yml): source links that are gone.
// The story block leaves these rows out; the story stays (build 7.2, D4g). Do not edit by hand.
export const BROKEN_STORY_LINKS: ReadonlySet<string> = new Set<string>(${JSON.stringify(broken, null, 2)});
`;
const before = await readFile(OUT, 'utf8').catch(() => '');
if (before !== text) {
  await writeFile(OUT, text);
  console.log(`wrote ${path.relative(root, OUT)} (${broken.length} broken)`);
} else console.log(`${path.relative(root, OUT)} unchanged (${broken.length} broken)`);
