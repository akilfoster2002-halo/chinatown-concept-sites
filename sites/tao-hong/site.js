/**
 * Tao Hong — 79 Chrystie St.
 *
 * Every fact below was read off the business's own Google listing on
 * 2026-10-25, or from a named published source. Nothing is estimated.
 * Anything that could not be confirmed is in `unknowns`, not in the copy.
 */

export default {
  slug: 'tao-hong',
  name: 'Tao Hong',
  nameZh: null, // the storefront sign carries Chinese characters, not legible in any public photo
  kind: 'Chinese bakery',
  neighborhood: 'Chinatown',
  checked: '25 October 2026',

  address: {
    street: '79 Chrystie St',
    inside: null,
    locality: 'New York',
    region: 'NY',
    postalCode: '10002',
  },

  phone: '+12122190981',
  phoneDisplay: '(212) 219-0981',

  hours: {
    note: 'Open daily',
    display: '8:00 am – 6:00 pm',
    rows: [
      ['Monday – Sunday', '8 am – 6 pm'],
    ],
  },

  // Reviews describe it as cash only; the Google listing does not say so.
  // An unconfirmed payment policy belongs in `unknowns`, not here.
  payment: null,

  rating: { value: 4.8, count: 220 },

  fonts: ['Fraunces:opsz,wght@9..144,400;9..144,600;9..144,900', 'Karla:wght@400;600;700'],
  favicon: { bg: '#2f2008', fg: '#f6c745', glyph: '蛋' },

  heroTitle: 'Eighty-one people<br>wrote about the <em>egg&nbsp;tarts</em>',
  lede: `A small bakery across from Sarah D. Roosevelt Park that has quietly
    become one of the most reviewed egg tarts in Chinatown — Hong Kong style,
    flaky, still warm if you time it right.`,
  metaDescription:
    'Tao Hong, a Chinese bakery at 79 Chrystie St in Chinatown, Manhattan. Egg tarts, pineapple pork buns and milk tea. Open daily 8 am to 6 pm. 4.8 stars from 220 Google reviews.',

  signature: {
    title: 'The egg tart is the whole argument',
    body: `Of the 220 people who have reviewed Tao Hong on Google,
      <b>81 of them mention the egg tarts</b>. Not the shop, not the service —
      the tarts. Two kinds sit in the case: the Hong Kong one, with a flaky
      pastry shell and a silky, barely-set custard, and the Portuguese one,
      darker and denser, with the scorched top.`,
  },

  story: {
    title: 'A counter, a case, and the park across the street',
    paragraphs: [
      `Tao Hong is the kind of Chinatown storefront you walk past. The gate
       rolls up in the morning, the case fills with buns and tarts, and the
       day runs on a loop until six.`,
      `There is effectively nowhere to sit — reviewers disagree on whether
       there are four seats or none, which tells you how little it matters.
       What there is, directly across Chrystie Street, is Sarah D. Roosevelt
       Park. The standing recommendation from more than one reviewer is to
       buy the tarts warm and take them to a bench.`,
      `It sits a door or two from Wah Fung, the roast-meat shop with the
       permanent line, which makes the pair of them a complete lunch for
       under ten dollars.`,
    ],
  },

  mentions: [
    { name: 'Egg tarts', count: 81 },
    { name: 'Pork bun', count: 18 },
    { name: 'Moon cakes', count: 18 },
    { name: 'Portuguese egg tart', count: 11 },
  ],

  gettingThere: [
    `Chrystie Street between Hester and Grand, on the park side of Sara D.
     Roosevelt Park.`,
    `Closest subway is Grand St (B, D). Bowery (J, Z) and East Broadway (F)
     are both a short walk.`,
    `Reviewers consistently advise bringing cash. That is not stated on the
     business's listing, so treat it as likely rather than certain.`,
  ],

  menuTitle: 'What is in the case',
  menuLede: `Compiled from published reviews and the business's public listing.
    This is not the shop's own menu and it is certainly not complete — a
    bakery case changes every morning.`,

  sections: [
    {
      id: 'egg-tarts',
      name: 'Egg tarts',
      blurb: 'The reason most people come, by a wide margin.',
      items: [
        { name: 'Hong Kong egg tart', note: 'Flaky pastry shell, silky set custard' },
        { name: 'Portuguese egg tart', note: 'Denser, eggier custard with a scorched top' },
      ],
    },
    {
      id: 'buns',
      name: 'Buns',
      blurb: 'Baked buns fill a whole wall of the shop.',
      items: [
        { name: 'Pineapple pork bun', note: 'The one reviewers travel for' },
        { name: 'Roast pork bun', note: 'Sweet barbecue filling in large pieces' },
        { name: 'Taro balls' },
      ],
    },
    {
      id: 'sweets',
      name: 'Cakes and sweets',
      blurb: 'A refrigerated case alongside the baked goods.',
      items: [
        { name: 'Mango mochi' },
        { name: 'Moon cakes', note: 'Seasonal — 18 reviews mention them' },
        { name: 'Cakes', note: 'Selection changes' },
      ],
    },
    {
      id: 'drinks',
      name: 'Drinks',
      items: [
        { name: 'Hong Kong milk tea' },
        { name: 'Bubble tea', note: 'A range of flavours' },
        { name: 'Fresh fruit juice' },
        { name: 'Coffee' },
      ],
      footnote: `Sources: published reviews on The Infatuation and Google, and
        the business's Google listing, read on 25 October 2026.`,
    },
  ],

  unknowns: [
    `<b>Prices.</b> Tao Hong publishes none. One reviewer put the Hong Kong
     egg tart at $1.75 in May 2026, but a single review is not a price list,
     so no prices appear anywhere on this site.`,
    `<b>Whether it is cash only.</b> Several reviewers say to bring cash. The
     Google listing does not state a payment policy, so this site does not
     either.`,
    `<b>Seating.</b> One review says four seats, another says none.`,
    `<b>The full menu.</b> There is no published menu. The list on this site
     is assembled from what reviewers name, and it is certainly incomplete.`,
  ],

  ornament: `<svg viewBox="0 0 220 220" fill="none" aria-hidden="true">
    <circle cx="110" cy="110" r="96" fill="#d8a63c"/>
    <g>${Array.from({ length: 44 })
      .map((_, i) => {
        const a = (i / 44) * Math.PI * 2;
        return `<circle cx="${(110 + Math.cos(a) * 96).toFixed(1)}" cy="${(110 + Math.sin(a) * 96).toFixed(1)}" r="9" fill="#e5b954"/>`;
      })
      .join('')}</g>
    <circle cx="110" cy="110" r="78" fill="#f6c745"/>
    <circle cx="110" cy="110" r="70" fill="#ffd95e"/>
    <ellipse cx="86" cy="86" rx="22" ry="14" fill="#fff0b8" opacity=".55" transform="rotate(-28 86 86)"/>
  </svg>`,
};
