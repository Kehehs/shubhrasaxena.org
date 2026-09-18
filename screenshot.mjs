import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, 'temporary screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const width = parseInt(process.argv[4] || '1440', 10);
const height = parseInt(process.argv[5] || '900', 10);

const existing = fs.readdirSync(outDir).filter(f => /^screenshot-\d+/.test(f));
const nums = existing.map(f => parseInt(f.match(/^screenshot-(\d+)/)[1], 10));
const next = nums.length ? Math.max(...nums) + 1 : 1;
const fileName = `screenshot-${next}${label ? '-' + label : ''}.png`;
const outPath = path.join(outDir, fileName);

function findChrome() {
  const base = path.join(os.homedir(), '.cache/puppeteer/chrome');
  if (!fs.existsSync(base)) return null;
  for (const v of fs.readdirSync(base)) {
    for (const dir of ['chrome-mac-arm64', 'chrome-mac-x64']) {
      const p = path.join(base, v, dir, 'Google Chrome for Testing.app', 'Contents', 'MacOS', 'Google Chrome for Testing');
      if (fs.existsSync(p)) return p;
    }
  }
  return null;
}

const executablePath = findChrome();
if (!executablePath) {
  console.error('Could not find cached Chrome for Testing under ~/.cache/puppeteer/chrome');
  process.exit(1);
}

const browser = await puppeteer.launch({ executablePath, headless: true });
const page = await browser.newPage();
await page.setViewport({ width, height });
await page.goto(url, { waitUntil: 'networkidle0' });
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved ${outPath}`);
