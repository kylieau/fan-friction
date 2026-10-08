// Moves finished research out of docs/ and keeps every link to it working.
//
//   node scripts/docs-tidy.mjs                 preview what would move (changes nothing)
//   node scripts/docs-tidy.mjs --apply         move it and fix the links
//   node scripts/docs-tidy.mjs --apply --hook  same, for the git pre-commit hook (stages the result,
//                                              and skips itself if it would touch a file with unstaged edits)
//   node scripts/docs-tidy.mjs --manifest f.json --apply   one-off moves: { "old/path.md": "new/path.md" } (docs-relative)
//
// The rule: a doc is finished when it carries a line that starts with `Status: closed` (an HTML comment
// around it is fine), e.g. `Status: closed, folded into product-decisions.md, Oct 8, 2026`. Prompt and
// answer files pair by name (x-prompt.md, x-research-prompt.md, x-answer.md, x-research-answer.md). When
// the answer is closed, the pair moves together to docs/archive/research/. Any other closed doc moves to
// docs/archive/proposals/. Only docs/*.md, docs/research-queue/*.md and docs/gap-reviews/*.md are scanned. A closed gap review moves to docs/archive/gap-reviews/ with its assets.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync, statSync, readdirSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = process.argv.slice(2);
const apply = args.includes('--apply');
const hook = args.includes('--hook');
const manifestPath = args.includes('--manifest') ? args[args.indexOf('--manifest') + 1] : null;

const git = (...a) => execFileSync('git', a, { cwd: root, encoding: 'utf8', maxBuffer: 1 << 28 });
const posix = (p) => p.split(path.sep).join('/');

// ---- what is in docs/ now (paths relative to docs/) -----------------------------------------------
const docsFiles = git('ls-files', '-z', 'docs').split('\0').filter(Boolean).map((p) => p.slice('docs/'.length));
const docsSet = new Set(docsFiles);

// ---- decide the moves: old docs-relative path -> new docs-relative path ----------------------------
const CLOSED = /^\s*(?:<!--\s*)?status:\s*closed\b/im;
const KEEP = new Set(['README.md', 'gap-reviews/README.md']);
const moves = new Map();

if (manifestPath) {
  const m = JSON.parse(readFileSync(path.resolve(manifestPath), 'utf8'));
  for (const [from, to] of Object.entries(m)) {
    const isDir = !docsSet.has(from);
    const matches = isDir ? docsFiles.filter((f) => f.startsWith(from.replace(/\/?$/, '/'))) : [from];
    if (!matches.length) throw new Error(`Not in docs/: ${from}`);
    for (const f of matches) moves.set(f, isDir ? posix(path.join(to, f.slice(from.replace(/\/?$/, '/').length))) : to);
  }
} else {
  const scanned = docsFiles.filter((f) => /^(research-queue\/|gap-reviews\/)?[^/]+\.md$/.test(f) && !KEEP.has(f));
  const pairKey = (f) => path.basename(f, '.md').replace(/(-research)?-(prompt|answer)$/, '');
  const kindOf = (f) => (/-answer\.md$/.test(f) ? 'answer' : /-prompt\.md$/.test(f) ? 'prompt' : null);
  const closed = scanned.filter((f) => CLOSED.test(readFileSync(path.join(root, 'docs', f), 'utf8')));
  for (const f of closed) {
    if (f.startsWith('gap-reviews/')) { // a closed gap review takes its screenshots with it
      moves.set(f, `archive/gap-reviews/${path.basename(f)}`);
      const key = path.basename(f, '.md').replace(/^gap-review-/, '');
      for (const a of docsFiles.filter((x) => x.startsWith(`gap-reviews/assets/${key}/`))) moves.set(a, `archive/gap-reviews/${a.slice('gap-reviews/'.length)}`);
    } else if (kindOf(f)) {
      const key = pairKey(f);
      for (const g of scanned.filter((x) => kindOf(x) && pairKey(x) === key)) moves.set(g, `archive/research/${path.basename(g)}`);
    } else {
      moves.set(f, `archive/proposals/${path.basename(f)}`);
    }
  }
}
for (const [from, to] of [...moves]) if (from === to || (existsSync(path.join(root, 'docs', to)) && !moves.has(to))) moves.delete(from);

if (!moves.size) {
  console.log('Nothing to tidy.');
  process.exit(0);
}

// ---- which files need their links fixed ------------------------------------------------------------
const TEXT = /\.(md|ts|tsx|mts|mjs|js|json|yml|yaml|py|txt|html|css|sql|tsv|sh)$/;
const allFiles = git('ls-files', '-z').split('\0').filter((p) => p && TEXT.test(p) && !p.startsWith('data/') && !p.endsWith('package-lock.json'));
const newPathOf = (repoPath) => (repoPath.startsWith('docs/') && moves.has(repoPath.slice(5)) ? `docs/${moves.get(repoPath.slice(5))}` : repoPath);

// A reference to a doc: optional `docs/` or ./ ../ prefix, then a path ending in a known extension.
const REF = /(?<![\w./-])(docs\/|(?:\.{1,2}\/)*)([A-Za-z0-9_][A-Za-z0-9_.\/-]*?\.(?:md|csv|py|pdf|png|html))(?![\w-])/g;

function rewrite(fileRepoPath, text) {
  const oldDir = path.posix.dirname(fileRepoPath);
  const newDir = path.posix.dirname(newPathOf(fileRepoPath));
  const inDocs = fileRepoPath.startsWith('docs/');
  // Links from a moving doc to something outside docs/ (code, config): keep them pointing at the same file.
  if (inDocs && newDir !== oldDir) {
    text = text.replace(/\]\((\.{1,2}\/[^)#\s]*)((?:#[^)\s]*)?)\)/g, (whole, rel, frag) => {
      const target = path.posix.normalize(path.posix.join(oldDir, rel));
      if (target.startsWith('docs/') || target.startsWith('..')) return whole; // doc targets are handled below
      return `](${path.posix.relative(newDir, target)}${frag})`;
    });
  }
  return text.replace(REF, (whole, prefix, rest, offset, str) => {
    const inLink = str.slice(Math.max(0, offset - 2), offset) === ']('; // a markdown link target
    let oldTarget; // repo-relative path of what this reference pointed at
    if (prefix === 'docs/') oldTarget = `docs/${rest}`;
    else if (prefix) oldTarget = path.posix.normalize(path.posix.join(oldDir, prefix, rest));
    else if (inDocs && fileRepoPath.endsWith('.md')) { // bare names are prose only in markdown; html/css use them as real paths
      const sibling = path.posix.normalize(path.posix.join(oldDir, rest));
      oldTarget = docsSet.has(sibling.slice(5)) ? sibling : docsSet.has(rest) ? `docs/${rest}` : null;
    }
    if (!oldTarget || !oldTarget.startsWith('docs/') || !docsSet.has(oldTarget.slice(5))) return whole;
    const newTarget = newPathOf(oldTarget);
    const targetMoved = newTarget !== oldTarget;
    const fileMoved = newDir !== oldDir;
    if (inLink) { // markdown link: always a path relative to where the file will live
      if (!targetMoved && !fileMoved) return whole;
      const rel = path.posix.relative(newDir, newTarget);
      return prefix.startsWith('.') && !rel.startsWith('.') ? `./${rel}` : rel;
    }
    if (prefix === 'docs/') return targetMoved ? newTarget : whole;
    if (prefix) { // relative link: recompute from where the file will live
      if (!targetMoved && !fileMoved) return whole;
      let rel = path.posix.relative(newDir, newTarget);
      if (!rel.startsWith('.')) rel = `./${rel}`;
      return rel;
    }
    return targetMoved ? newTarget : whole; // bare name in prose: spell out the new path
  });
}

const plan = [];
for (const f of allFiles) {
  const full = path.join(root, f);
  if (!existsSync(full) || statSync(full).size > 3_000_000) continue;
  const before = readFileSync(full, 'utf8');
  const after = rewrite(f, before);
  if (after !== before) plan.push({ f, after });
}

// ---- show it ---------------------------------------------------------------------------------------
console.log(`${moves.size} file(s) to move:`);
for (const [from, to] of moves) console.log(`  docs/${from}  ->  docs/${to}`);
console.log(`${plan.length} file(s) get link fixes${plan.length ? ': ' + plan.map((p) => p.f).slice(0, 12).join(', ') + (plan.length > 12 ? ', ...' : '') : ''}`);
if (!apply) {
  console.log('\nPreview only. Run with --apply to do it.');
  process.exit(0);
}

// ---- hook safety: don't fold someone's half-staged work into the commit ----------------------------
if (hook) {
  const dirty = new Set(git('diff', '--name-only', '-z').split('\0').filter(Boolean));
  const touched = [...plan.map((p) => p.f), ...[...moves.keys()].map((m) => `docs/${m}`)];
  const clash = touched.filter((t) => dirty.has(t));
  if (clash.length) {
    console.log(`docs-tidy: skipped (unstaged edits in ${clash.slice(0, 3).join(', ')}). Run \`npm run docs:tidy -- --apply\` after committing.`);
    process.exit(0);
  }
}

// ---- do it: fix links first (paths are still the old ones), then move ------------------------------
for (const { f, after } of plan) writeFileSync(path.join(root, f), after);
for (const [from, to] of moves) {
  execFileSync('mkdir', ['-p', path.join(root, 'docs', path.posix.dirname(to))]);
  git('mv', `docs/${from}`, `docs/${to}`);
}
for (const start of new Set([...moves.keys()].map((f) => path.posix.dirname(f)).filter((d) => d !== '.'))) {
  for (let dir = start; dir !== '.'; dir = path.posix.dirname(dir)) { // remove emptied folders, climbing up
    try { execFileSync('rmdir', [path.join(root, 'docs', dir)], { stdio: 'ignore' }); } catch { break; }
  }
}
if (hook) git('add', '--', ...new Set([...plan.map((p) => newPathOf(p.f)), ...[...moves.values()].map((m) => `docs/${m}`)]));
console.log(hook ? 'docs-tidy: archived finished docs and fixed their links.' : '\nDone. Review with `git status`, then commit.');
