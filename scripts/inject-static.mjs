import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import es from '../src/content/es.js';
import en from '../src/content/en.js';
import { renderStatic } from '../src/seo/renderStatic.js';
import { assertMeta, renderSeoBlock } from '../src/seo/seoBlock.js';

const target = process.argv[2];
if (target !== 'public' && target !== 'build') {
  console.error('Usage: node scripts/inject-static.mjs <public|build>');
  process.exit(1);
}

assertMeta(es, 'es');
assertMeta(en, 'en');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', target);
const indexPath = path.join(root, 'index.html');
const source = fs.readFileSync(indexPath, 'utf8');

fs.writeFileSync(indexPath, apply(source, es, 'es'));

if (target === 'build') {
  const enDir = path.join(root, 'en');
  fs.mkdirSync(enDir, { recursive: true });
  fs.writeFileSync(path.join(enDir, 'index.html'), apply(source, en, 'en'));
}

function apply(html, t, lang) {
  let next = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
  next = replaceBetween(
    next,
    '<meta name="oikosgis" content="seo-start"',
    '<meta name="oikosgis" content="seo-end"',
    renderSeoBlock(t, lang)
  );
  next = replaceStatic(next, renderStatic(t, lang));
  return next;
}

function replaceBetween(html, startNeedle, endNeedle, content) {
  const start = html.indexOf(startNeedle);
  const end = html.indexOf(endNeedle);
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`Missing SEO markers (${startNeedle})`);
  }
  const startClose = html.indexOf('>', start);
  return `${html.slice(0, startClose + 1)}\n${content}\n    ${html.slice(end)}`;
}

function replaceStatic(html, content) {
  const start = html.indexOf('<div id="static-fallback"');
  if (start === -1) throw new Error('Missing #static-fallback');
  const token = /<\/?div\b[^>]*>/gi;
  token.lastIndex = start;
  let depth = 0;
  let end = -1;
  let match = token.exec(html);
  while (match) {
    depth += match[0].startsWith('</') ? -1 : 1;
    if (depth === 0) {
      end = match.index + match[0].length;
      break;
    }
    match = token.exec(html);
  }
  if (end === -1) throw new Error('Unclosed #static-fallback');
  return `${html.slice(0, start)}${content}${html.slice(end)}`;
}
