// Text and links out of a research PDF, so a pasted answer can be saved with its sources.
// node scripts/pdf-text.mjs docs/answer.pdf [out.txt]  (prints to stdout without out.txt)
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync, writeFileSync } from 'node:fs';
const data = new Uint8Array(readFileSync(process.argv[2]));
const doc = await getDocument({ data, useSystemFonts: true }).promise;
let out = '';
for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const tc = await page.getTextContent();
  let line = '', lastY = null;
  for (const it of tc.items) {
    const y = Math.round(it.transform[5]);
    if (lastY !== null && Math.abs(y - lastY) > 2) { out += line + '\n'; line = ''; }
    line += it.str + (it.hasEOL ? '' : ' ');
    lastY = y;
  }
  out += line + `\n--- end page ${i} ---\n`;
  const annots = await page.getAnnotations();
  for (const a of annots) if (a.url) out += 'LINK: ' + a.url + '\n';
}
if (process.argv[3]) { writeFileSync(process.argv[3], out); console.error(doc.numPages, 'pages saved'); } else process.stdout.write(out);
