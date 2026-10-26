/**
 * Builds every site in sites/ into dist/<slug>/.
 *
 *   node build.js                 all sites
 *   node build.js tao-hong        one site (what Render runs)
 *   node build.js --watch         rebuild on save
 *
 * Node built-ins only. No dependencies, no install step.
 */

import { mkdir, readdir, readFile, writeFile, rm, cp } from 'node:fs/promises';
import { existsSync, watch } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const SITES = path.join(here, 'sites');
const SHARED = path.join(here, 'shared');
const DIST = path.join(here, 'dist');

const args = process.argv.slice(2);
const watchMode = args.includes('--watch');
const only = args.filter((a) => !a.startsWith('--'));

async function listSites() {
  const entries = await readdir(SITES, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function buildSite(slug, stamp) {
  const dir = path.join(SITES, slug);
  const outDir = path.join(DIST, slug);

  // Cache-busting query so --watch picks up edits to the modules.
  const site = (await import(`./sites/${slug}/site.js?v=${stamp}`)).default;
  const { homePage, menuPage } = await import(`./shared/templates.js?v=${stamp}`);

  await mkdir(path.join(outDir, 'styles'), { recursive: true });
  await mkdir(path.join(outDir, 'scripts'), { recursive: true });

  await writeFile(path.join(outDir, 'index.html'), homePage(site));
  await writeFile(path.join(outDir, 'menu.html'), menuPage(site));

  // Shared stylesheet, then the site's own theme on top of it.
  await cp(path.join(SHARED, 'styles', 'base.css'), path.join(outDir, 'styles', 'base.css'));
  await cp(path.join(dir, 'theme.css'), path.join(outDir, 'styles', 'theme.css'));
  await cp(path.join(SHARED, 'scripts', 'site.js'), path.join(outDir, 'scripts', 'site.js'));

  // Each site's photography lives beside its data and ships as-is.
  const imgSrc = path.join(dir, 'images');
  if (existsSync(imgSrc)) {
    await cp(imgSrc, path.join(outDir, 'images'), { recursive: true });
  }

  // Tell crawlers to leave concept sites alone.
  await writeFile(
    path.join(outDir, 'robots.txt'),
    'User-agent: *\nDisallow: /\n'
  );

  return site.name;
}

async function build() {
  const stamp = Date.now();
  const all = await listSites();
  const targets = only.length ? only.filter((s) => all.includes(s)) : all;

  if (only.length && !targets.length) {
    console.error(`No such site. Available: ${all.join(', ')}`);
    process.exit(1);
  }

  if (!only.length && existsSync(DIST)) await rm(DIST, { recursive: true });

  for (const slug of targets) {
    const name = await buildSite(slug, stamp);
    console.log(`  built  ${slug.padEnd(24)} ${name}`);
  }

  // One site named on its own publishes at dist/<slug>, which is what Render's
  // publish path points at. Building everything also writes an index of them.
  if (!only.length) {
    const sites = [];
    for (const slug of targets) {
      sites.push((await import(`./sites/${slug}/site.js?v=${stamp}`)).default);
    }
    const { indexPage } = await import(`./shared/templates.js?v=${stamp}`);
    await writeFile(path.join(DIST, 'index.html'), indexPage(sites));
  }

  console.log(`\n${targets.length} site${targets.length === 1 ? '' : 's'} -> dist/`);
}

await build();

if (watchMode) {
  console.log('\nwatching for changes...');
  let queued = null;
  for (const dir of [SITES, SHARED]) {
    watch(dir, { recursive: true }, () => {
      clearTimeout(queued);
      queued = setTimeout(() => build().catch((e) => console.error(e.message)), 80);
    });
  }
}
