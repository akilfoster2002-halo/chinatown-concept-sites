/**
 * M&W Bakery — 25 E Broadway.
 *
 * The smallest review count on this list (24) and the plainest shop.
 * Facts from the Google listing read 2026-10-25.
 */

export default {
  slug: 'mw-bakery',
  name: 'M&W Bakery',
  nameZh: null,
  kind: 'Chinese bakery',
  neighborhood: 'Chinatown',
  checked: '25 October 2026',

  address: {
    street: '25 E Broadway',
    inside: null,
    locality: 'New York',
    region: 'NY',
    postalCode: '10002',
  },

  phone: '+12122850918',
  phoneDisplay: '(212) 285-0918',

  hours: {
    note: 'Open daily',
    display: '7:00 am – 5:30 pm',
    rows: [['Monday – Sunday', '7 am – 5:30 pm']],
  },

  payment: null,

  rating: { value: 4.3, count: 24 },

  fonts: ['Zilla+Slab:wght@400;500;600;700', 'IBM+Plex+Sans:wght@400;500;600;700'],
  favicon: { bg: '#ffffff', fg: '#c0392b', glyph: 'M' },

  heroTitle: 'In, out,<br><em>two buns</em>',
  lede: `A plain Chinese bakery at the bottom of East Broadway. One reviewer
    described the décor as designed to get customers in and out as fast as
    possible, and meant it as a compliment.`,
  metaDescription:
    'M&W Bakery, a Chinese bakery at 25 E Broadway in Chinatown, Manhattan. Roast pork buns, pineapple buns and zongzi. Open daily 7 am to 5:30 pm. 4.3 stars from 24 Google reviews.',

  signature: {
    title: 'A roast pork bun and nothing to look at',
    body: `There is no concept here and no seating to speak of. There is a case
      of buns, a counter, and staff that four separate reviewers out of
      twenty-four went out of their way to call <b>nice</b> — which, on a
      sample that small, is most of the people who have ever written anything
      about this shop.`,
  },

  story: {
    title: 'The bakery at the quiet end',
    paragraphs: [
      `25 East Broadway is the top of the street, right where it meets Chatham
       Square and the traffic. M&W has a white vinyl sign with red lettering
       and a green frame around the window — the kind of shopfront that has
       not been redesigned because it never needed to be.`,
      `It opens at seven and closes at half five, which is a baker's day
       rather than a restaurant's. The range is what you would expect and want:
       roast pork buns, pork and cabbage buns, pineapple buns, zongzi, and a
       shelf of sweet things with glazes.`,
      `Twenty-four reviews is not many, and 4.3 is not 4.8. This is a
       neighbourhood shop that serves its block, which is a perfectly good
       thing to be and an unusually easy thing to put on a page.`,
    ],
  },

  mentions: [
    { name: 'Nice workers', count: 4 },
    { name: 'Pork bun', count: 3 },
    { name: 'Pineapple', count: 2 },
    { name: 'Milk', count: 2 },
  ],

  gettingThere: [
    `The Chatham Square end of East Broadway, a few doors in from the square.`,
    `East Broadway (F) is five minutes down the street. Canal St and the
     Bowery are both a short walk north.`,
    `Reviewers mention no seating inside. This is a shop you buy from and
     walk out of.`,
  ],

  menuTitle: 'What is in the case',
  menuLede: `Taken from what the shop's reviewers name and photograph. A
    bakery case is restocked daily, so this is the shape of the range rather
    than today's shelf.`,

  sections: [
    {
      id: 'savoury-buns',
      name: 'Savoury buns',
      blurb: 'The reason the regulars come in.',
      items: [
        { name: 'Roast pork bun' },
        { name: 'Pork and cabbage bun' },
        { name: 'Zongzi', note: 'Sticky rice wrapped in bamboo leaf' },
      ],
    },
    {
      id: 'sweet-buns',
      name: 'Sweet buns and pastries',
      items: [
        { name: 'Pineapple bun' },
        { name: 'Lemon crisp' },
        { name: 'Peanut butter bun with lemon glaze' },
      ],
      footnote: `Sources: the bakery's Google listing and the reviews on it,
        read on 25 October 2026.`,
    },
  ],

  unknowns: [
    `<b>Prices.</b> Not published anywhere. Reviews say "low prices" and leave
     it there, so no figures appear on this site.`,
    `<b>Payment.</b> One review says cash only; another third-party listing
     says cards are accepted. The Google listing states nothing, so neither
     does this page.`,
    `<b>Hours.</b> Google says 7 am – 5:30 pm daily. Apple Maps says
     8:30 am – 8 pm. The Google listing is used here, but the gap is wide
     enough to be worth a phone call.`,
    `<b>The full range.</b> Twenty-four reviews do not describe a whole
     bakery. Most of what this shop sells is not named anywhere online.`,
  ],

  ornament: `<svg viewBox="0 0 240 240" fill="none" aria-hidden="true">
    <rect x="16" y="40" width="208" height="54" rx="4" fill="#ffffff" stroke="#d8cfc0" stroke-width="3"/>
    <text x="120" y="78" font-family="Zilla Slab, Georgia, serif" font-size="34" font-weight="700"
          text-anchor="middle" fill="#c0392b" letter-spacing="2">M&amp;W</text>
    <rect x="16" y="100" width="208" height="12" rx="3" fill="#3f7d6a"/>
    <g fill="#e2b06a" stroke="#c8954f" stroke-width="2.5">
      <ellipse cx="68" cy="152" rx="38" ry="27"/>
      <ellipse cx="156" cy="158" rx="42" ry="29"/>
      <ellipse cx="110" cy="196" rx="40" ry="26"/>
    </g>
    <g stroke="#c8954f" stroke-width="2.5" fill="none" opacity=".8">
      <path d="M50 146c8 4 18 4 28 0M138 152c10 4 22 4 32 0M92 190c10 4 22 4 32 0"/>
    </g>
  </svg>`,
};
