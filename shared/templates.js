/**
 * The document shell and both page templates, shared by every site.
 *
 * Nothing here knows about any particular restaurant. Everything that differs
 * between them lives in sites/<slug>/site.js (content) and
 * sites/<slug>/theme.css (colour, type, ornament).
 */

export const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** A price is either a number of dollars or null. Null is never guessed at. */
export function formatPrice(price) {
  if (typeof price === 'number') return `$${price}`;
  return null;
}

function fontLink(site) {
  const families = site.fonts.map((f) => `family=${f}`).join('&');
  return `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?${families}&display=swap">`;
}

/**
 * The concept-site ribbon.
 *
 * These sites are built for businesses that have not commissioned them, so
 * every page says so where a visitor cannot miss it, and every page is
 * noindex. Remove both the moment a business takes one on.
 */
function ribbon(site) {
  return `<div class="ribbon">
  <p class="ribbon__text">
    Concept site &mdash; an unofficial demonstration, not affiliated with ${esc(site.name)}.
    <a class="ribbon__link" href="#about-this-site">Why it exists</a>
  </p>
</div>`;
}

function header(site, page) {
  return `<header class="site-head">
  <div class="wrap site-head__inner">
    <a class="wordmark" href="index.html">
      <span class="wordmark__name">${esc(site.name)}</span>
      ${site.nameZh ? `<span class="wordmark__zh" lang="zh">${esc(site.nameZh)}</span>` : ''}
    </a>
    <nav class="site-nav" aria-label="Main">
      <a class="site-nav__link${page === 'home' ? ' is-current' : ''}" href="index.html"${page === 'home' ? ' aria-current="page"' : ''}>Home</a>
      <a class="site-nav__link${page === 'menu' ? ' is-current' : ''}" href="menu.html"${page === 'menu' ? ' aria-current="page"' : ''}>What they sell</a>
      <a class="site-nav__link site-nav__link--call" href="tel:${esc(site.phone)}">${esc(site.phoneDisplay)}</a>
    </nav>
  </div>
</header>`;
}

function footer(site) {
  return `<footer class="site-foot" id="about-this-site">
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-col">
        <h2 class="foot-col__title">${esc(site.name)}</h2>
        <address class="foot-address">
          ${esc(site.address.street)}${site.address.inside ? `<br><span class="foot-inside">${esc(site.address.inside)}</span>` : ''}<br>
          ${esc(site.address.locality)}, ${esc(site.address.region)} ${esc(site.address.postalCode)}
        </address>
        <p><a class="foot-link" href="tel:${esc(site.phone)}">${esc(site.phoneDisplay)}</a></p>
        <p><a class="foot-link" href="${esc(directionsUrl(site))}" rel="noopener">Directions</a></p>
      </div>

      <div class="foot-col">
        <h2 class="foot-col__title">Hours</h2>
        <dl class="foot-hours">
          ${site.hours.rows
            .map(
              ([label, value]) =>
                `<div class="foot-hours__row"><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`
            )
            .join('\n          ')}
        </dl>
        ${site.payment ? `<p class="foot-note">${esc(site.payment)}</p>` : ''}
      </div>

      <div class="foot-col foot-col--about">
        <h2 class="foot-col__title">About this site</h2>
        <p class="foot-about">
          This is a <b>concept website</b>, built as a demonstration by
          Sofia Sites. It is not affiliated with ${esc(site.name)}, it is not
          the business&rsquo;s official site, and no one there has asked for
          it or approved it.
        </p>
        <p class="foot-about">
          Everything on it was taken from public listings and is
          <a class="foot-link" href="index.html#facts">marked with where it came from</a>.
          Hours and prices change. Call before you go.
        </p>
        <p class="foot-about">
          ${esc(site.name)} &mdash; if you want this, it is yours.
        </p>
      </div>
    </div>

    <p class="foot-base">
      Built by Sofia Sites &middot; not affiliated with ${esc(site.name)} &middot;
      facts checked ${esc(site.checked)}
    </p>
  </div>
</footer>`;
}

function directionsUrl(site) {
  return (
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      `${site.name}, ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`
    )
  );
}

function layout(site, { title, description, page, body }) {
  return `<!doctype html>
<html lang="en" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">

  <!-- A concept site for a business that has not commissioned it is never
       something search engines should index as that business's own page. -->
  <meta name="robots" content="noindex, nofollow">

  ${fontLink(site)}
  <link rel="stylesheet" href="styles/base.css">
  <link rel="stylesheet" href="styles/theme.css">
  <link rel="icon" href="data:image/svg+xml,${encodeURIComponent(favicon(site))}">
  <script>document.documentElement.classList.remove('no-js');</script>
</head>
<body class="theme-${esc(site.slug)}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${ribbon(site)}
  ${header(site, page)}
  <main id="main">
${body}
  </main>
  ${footer(site)}
  <script src="scripts/site.js" defer></script>
</body>
</html>
`;
}

function favicon(site) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="${site.favicon.bg}"/><text x="16" y="23" font-family="Georgia,serif" font-size="19" font-weight="700" text-anchor="middle" fill="${site.favicon.fg}">${site.favicon.glyph}</text></svg>`;
}

/* ---------------------------------------------------------------- sections */

function factsBlock(site) {
  const rows = [
    ['Address', `${site.address.street}${site.address.inside ? `, ${site.address.inside}` : ''}`],
    ['Phone', site.phoneDisplay],
    ['Hours', site.hours.display],
    site.payment ? ['Payment', site.payment] : null,
    ['Google rating', `${site.rating.value} from ${site.rating.count.toLocaleString()} reviews`],
  ].filter(Boolean);

  return `<section class="facts reveal" id="facts" aria-labelledby="facts-title">
  <div class="wrap">
    <h2 class="section-title" id="facts-title">The verified facts</h2>
    <p class="section-lede">
      Every line below was read off ${esc(site.name)}&rsquo;s own Google Business
      listing on ${esc(site.checked)}. Nothing here is estimated.
    </p>
    <dl class="facts-list">
      ${rows
        .map(
          ([k, v]) => `<div class="facts-row">
        <dt class="facts-row__key">${esc(k)}</dt>
        <dd class="facts-row__val">${esc(v)}</dd>
      </div>`
        )
        .join('\n      ')}
    </dl>
    ${
      site.unknowns.length
        ? `<div class="unknowns">
      <h3 class="unknowns__title">What this site does not claim to know</h3>
      <ul class="unknowns__list">
        ${site.unknowns.map((u) => `<li>${u}</li>`).join('\n        ')}
      </ul>
    </div>`
        : ''
    }
  </div>
</section>`;
}

/**
 * Google publishes how many reviews mention each topic. It is the one piece of
 * hard data about what people actually order here, so it is shown as data --
 * counted, attributed and dated -- rather than dressed up as a chef's pick.
 */
function mentionsBlock(site) {
  const max = Math.max(...site.mentions.map((m) => m.count));
  return `<section class="mentions reveal" aria-labelledby="mentions-title">
  <div class="wrap">
    <h2 class="section-title" id="mentions-title">What people come for</h2>
    <p class="section-lede">
      Not a chef&rsquo;s pick &mdash; a count. This is how many of the
      ${site.rating.count.toLocaleString()} Google reviews mention each thing by name.
    </p>
    <ul class="mention-list">
      ${site.mentions
        .map(
          (m) => `<li class="mention">
        <span class="mention__name">${esc(m.name)}</span>
        <span class="mention__bar" aria-hidden="true"><i style="--fill:${Math.round((m.count / max) * 100)}%"></i></span>
        <span class="mention__count">${m.count} <span class="mention__unit">mentions</span></span>
      </li>`
        )
        .join('\n      ')}
    </ul>
    <p class="mentions__foot">Counted from the Google listing on ${esc(site.checked)}.</p>
  </div>
</section>`;
}

function visitBlock(site) {
  return `<section class="visit reveal" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit__grid">
    <div>
      <h2 class="section-title" id="visit-title">Going there</h2>
      <address class="visit__address">
        ${esc(site.address.street)}<br>
        ${site.address.inside ? `${esc(site.address.inside)}<br>` : ''}
        ${esc(site.address.locality)}, ${esc(site.address.region)} ${esc(site.address.postalCode)}
      </address>
      <p class="visit__hours"><b>${esc(site.hours.note)}</b><br>${esc(site.hours.display)}</p>
      ${site.payment ? `<p class="visit__pay">${esc(site.payment)}</p>` : ''}
      <div class="visit__actions">
        <a class="btn btn--primary" href="tel:${esc(site.phone)}">Call ${esc(site.phoneDisplay)}</a>
        <a class="btn btn--ghost" href="${esc(directionsUrl(site))}" rel="noopener">Get directions</a>
      </div>
    </div>
    <div class="visit__aside">
      ${site.gettingThere.map((p) => `<p>${p}</p>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

/* -------------------------------------------------------------- home page */

export function homePage(site) {
  const body = `
<section class="hero">
  <div class="wrap hero__inner">
    <p class="hero__eyebrow">${esc(site.kind)} &middot; ${esc(site.neighborhood)}</p>
    <h1 class="hero__title">${site.heroTitle}</h1>
    <p class="hero__lede">${site.lede}</p>
    <div class="hero__actions">
      <a class="btn btn--primary" href="menu.html">See what they sell</a>
      <a class="btn btn--ghost" href="#visit">${esc(site.address.street)}</a>
    </div>
    <p class="hero__meta">
      <span class="stars" aria-hidden="true">&#9733;</span>
      <b>${site.rating.value}</b> from ${site.rating.count.toLocaleString()} Google reviews
      &middot; ${esc(site.hours.display)}${site.payment ? ` &middot; ${esc(site.payment)}` : ''}
    </p>
  </div>
  <div class="hero__ornament" aria-hidden="true">${site.ornament}</div>
</section>

<section class="signature reveal" aria-labelledby="sig-title">
  <div class="wrap signature__inner">
    <h2 class="signature__title" id="sig-title">${site.signature.title}</h2>
    <p class="signature__body">${site.signature.body}</p>
  </div>
</section>

<section class="story reveal" aria-labelledby="story-title">
  <div class="wrap story__inner">
    <h2 class="section-title" id="story-title">${esc(site.story.title)}</h2>
    <div class="story__prose">
      ${site.story.paragraphs.map((p) => `<p>${p}</p>`).join('\n      ')}
    </div>
  </div>
</section>

${mentionsBlock(site)}

${visitBlock(site)}

${factsBlock(site)}
`;

  return layout(site, {
    title: `${site.name} — ${site.kind} at ${site.address.street}, Chinatown`,
    description: site.metaDescription,
    page: 'home',
    body,
  });
}

/* -------------------------------------------------------------- menu page */

function itemRow(item) {
  const price = formatPrice(item.price);
  return `<li class="item">
        <span class="item__name">${esc(item.name)}</span>
        <span class="item__leader" aria-hidden="true"></span>
        ${
          price
            ? `<span class="item__price">${esc(price)}</span>`
            : `<span class="item__price item__price--ask">Ask at the counter</span>`
        }
        ${item.note ? `<span class="item__note">${esc(item.note)}</span>` : ''}
      </li>`;
}

function sectionBlock(section) {
  return `<section class="cat reveal" id="${esc(section.id)}" aria-labelledby="${esc(section.id)}-title">
      <header class="cat__head">
        <h2 class="cat__name" id="${esc(section.id)}-title">${esc(section.name)}</h2>
        ${section.blurb ? `<p class="cat__blurb">${section.blurb}</p>` : ''}
      </header>
      <ul class="item-list">
        ${section.items.map(itemRow).join('\n        ')}
      </ul>
      ${section.footnote ? `<p class="cat__foot">${section.footnote}</p>` : ''}
    </section>`;
}

export function menuPage(site) {
  const count = site.sections.reduce((n, s) => n + s.items.length, 0);

  const body = `
<section class="menu-hero">
  <div class="wrap">
    <p class="hero__eyebrow">${count} things &middot; ${site.sections.length} groups</p>
    <h1 class="menu-hero__title">${esc(site.menuTitle)}</h1>
    <p class="menu-hero__lede">${site.menuLede}</p>
  </div>
</section>

<div class="menu-body">
  <div class="wrap">
    ${site.sections.map(sectionBlock).join('\n\n    ')}

    <aside class="menu-note reveal">
      <p class="menu-note__text">
        <b>No prices are shown, and that is deliberate.</b>
        ${esc(site.name)} does not publish a price list anywhere, and a price
        copied from a review or an old blog post is a guess dressed up as a
        fact. Rather than print a number that might be wrong, this site prints
        none. Call <a href="tel:${esc(site.phone)}">${esc(site.phoneDisplay)}</a>
        or read the counter.
      </p>
      <a class="btn btn--primary" href="index.html#visit">How to get there</a>
    </aside>
  </div>
</div>
`;

  return layout(site, {
    title: `What they sell — ${site.name}, ${site.address.street}`,
    description: `What ${site.name} sells at ${site.address.street} in Chinatown, Manhattan: ${site.sections
      .map((s) => s.name.toLowerCase())
      .join(', ')}. Compiled from public listings.`,
    page: 'menu',
    body,
  });
}

/* ------------------------------------------------------------- site index */

export function indexPage(sites) {
  const cards = sites
    .map(
      (s) => `<li class="idx-card">
        <a class="idx-card__link" href="${esc(s.slug)}/index.html">
          <span class="idx-card__name">${esc(s.name)}</span>
          <span class="idx-card__kind">${esc(s.kind)}</span>
          <span class="idx-card__addr">${esc(s.address.street)}</span>
          <span class="idx-card__rating">${s.rating.value} &#9733; &middot; ${s.rating.count.toLocaleString()} reviews</span>
        </a>
      </li>`
    )
    .join('\n      ');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Chinatown concept sites — Sofia Sites</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    :root { color-scheme: light dark; --bg:#12100f; --fg:#f6f1e8; --dim:#a79e92; --line:#2e2a26; }
    * { box-sizing: border-box; }
    body { margin:0; background:var(--bg); color:var(--fg); font:16px/1.6 ui-sans-serif,system-ui,-apple-system,sans-serif; padding:3rem 1rem 5rem; }
    .wrap { max-width:60rem; margin:0 auto; }
    h1 { font-size:clamp(1.9rem,5vw,3rem); margin:0 0 .5rem; letter-spacing:-.02em; }
    .sub { color:var(--dim); max-width:46rem; margin:0 0 .9rem; }
    ul { list-style:none; padding:0; margin:2.5rem 0 0; display:grid; gap:1rem; grid-template-columns:repeat(auto-fill,minmax(16rem,1fr)); }
    .idx-card__link { display:grid; gap:.3rem; padding:1.4rem; border:1px solid var(--line); border-radius:14px; text-decoration:none; color:inherit; background:#1a1715; transition:border-color .15s ease, transform .15s ease; }
    .idx-card__link:hover, .idx-card__link:focus-visible { border-color:#6e6358; transform:translateY(-2px); }
    .idx-card__name { font-size:1.25rem; font-weight:700; }
    .idx-card__kind, .idx-card__addr, .idx-card__rating { color:var(--dim); font-size:.88rem; }
    .note { margin-top:3rem; padding-top:1.5rem; border-top:1px solid var(--line); color:var(--dim); font-size:.88rem; max-width:46rem; }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>Chinatown concept sites</h1>
    <p class="sub">
      Seven Manhattan Chinatown food businesses that have a phone number and
      no website. Each has been given one here as a demonstration.
    </p>
    <ul>
      ${cards}
    </ul>
    <p class="note">
      These are unofficial concept sites built by Sofia Sites. None of these
      businesses has commissioned, reviewed or approved one, none of these
      pages is a business's official site, and every page is marked noindex.
      Facts come from public listings and are dated on each site.
    </p>
  </div>
</body>
</html>
`;
}
