/**
 * Fu Zhou Wei Zhong Wei Jia Xiang Feng Wei — 88 E Broadway, Stall B45.
 *
 * The highest-reviewed business on this list (596 reviews) and the hardest
 * to find: it is a stall in the basement of the East Broadway Mall.
 * Facts from the Google listing read 2026-10-25.
 */

export default {
  slug: 'fu-zhou-wei-zhong-wei',
  name: 'Fu Zhou Wei Zhong Wei',
  nameZh: '福州味中味家乡风味',
  kind: 'Fuzhou bun and dumpling stall',
  neighborhood: 'Chinatown',
  checked: '25 October 2026',

  address: {
    street: '88 E Broadway',
    inside: 'Stall B45, East Broadway Mall — basement level',
    locality: 'New York',
    region: 'NY',
    postalCode: '10002',
  },

  phone: '+12124313555',
  phoneDisplay: '(212) 431-3555',

  hours: {
    note: 'Open daily',
    display: '9:00 am – 7:00 pm',
    rows: [['Monday – Sunday', '9 am – 7 pm']],
  },

  payment: 'Cash only',

  rating: { value: 4.7, count: 596 },

  fonts: ['Oswald:wght@400;500;600;700', 'Inter:wght@400;500;600;700'],
  favicon: { bg: '#15423a', fg: '#e8402f', glyph: '味' },

  heroTitle: 'Go <em>downstairs</em>',
  lede: `596 people have reviewed a stall in the basement of the East Broadway
    Mall, and they gave it 4.7. Steamed buns, fried dumplings, cash in hand.
    The hardest part is finding the stairs.`,
  metaDescription:
    'Fu Zhou Wei Zhong Wei, a Fuzhou bun and dumpling stall at 88 E Broadway in the East Broadway Mall basement, Chinatown, Manhattan. Cash only, open daily 9 am to 7 pm. 4.7 stars from 596 Google reviews.',

  signature: {
    title: 'Sixty-seven reviews mention the basement',
    body: `That is the giveaway. <b>67 people felt they had to explain where
      this place is</b> before they could tell you about the food — down the
      escalator in a quiet mall off East Broadway, past the empty units, to
      stall B45. Forty-eight of them then wrote about the bao.`,
  },

  story: {
    title: 'A mall most people walk over',
    paragraphs: [
      `The East Broadway Mall sits under the Manhattan Bridge approach. Most of
       it is quiet now; reviewers describe long stretches of shuttered units
       and say so plainly. The stall at B45 is the reason the lights are
       still worth turning on.`,
      `What it sells is Fuzhou home cooking in its cheapest and most direct
       form: small steamed buns, fried dumplings, sesame buns with pork. One
       of the most-liked reviews on the listing calls the small steamed buns
       the best thing the writer has eaten in Chinatown. Another just says
       "super homey place with the best price in town".`,
      `It is cash only, and 18 separate reviews say so, which suggests a
       number of people have learned that at the counter.`,
    ],
  },

  mentions: [
    { name: 'Basement location', count: 67 },
    { name: 'Bao', count: 48 },
    { name: 'Fried dumplings', count: 34 },
    { name: 'Cash only', count: 18 },
  ],

  gettingThere: [
    `East Broadway Mall, 88 E Broadway. Go in and head down to the basement
     level — the stall is B45.`,
    `East Broadway (F) comes up almost at the door. Grand St (B, D) is a
     five-minute walk.`,
    `Bring cash. Eighteen reviews make the same point.`,
  ],

  menuTitle: 'Buns, and things folded around pork',
  menuLede: `Drawn from what reviewers name on the listing and in published
    write-ups. The stall posts its menu on the wall in Chinese; this is not
    a translation of it, and it is not complete.`,

  sections: [
    {
      id: 'buns',
      name: 'Buns',
      blurb: 'What most of the 596 reviews are about.',
      items: [
        { name: 'Small steamed buns', note: 'Sold by the handful' },
        { name: 'Sesame bun with pork' },
        { name: 'Bao', note: 'Named in 48 reviews' },
      ],
    },
    {
      id: 'dumplings',
      name: 'Dumplings',
      items: [
        { name: 'Fried dumplings', note: 'Named in 34 reviews' },
        { name: 'Xiao long bao', note: 'Soup dumplings' },
        { name: 'Beef-paste soup dumplings' },
      ],
      footnote: `Sources: the stall's Google listing and published coverage in
        Eater and Eat This NY, read on 25 October 2026.`,
    },
  ],

  unknowns: [
    `<b>Prices.</b> One 2024 guide quoted six buns for $4. Two years is a long
     time in a cash business, so that figure is not reproduced here and no
     price appears anywhere on this site.`,
    `<b>The full menu.</b> The wall menu is in Chinese and has not been
     published anywhere. What is listed here is only what reviewers name.`,
    `<b>How long the mall stays open.</b> More than one reviewer has written
     that the East Broadway Mall may not last much longer. That is opinion,
     not fact, but it is repeated often enough to be worth knowing.`,
    `<b>The English name.</b> Google lists it as Fu Zhou Wei Zhong Wei Jia
     Xiang Feng Wei; Yelp lists it as Fuzhou Wei Zhong Wei. The shorter form
     is used here.`,
  ],

  ornament: `<svg viewBox="0 0 240 240" fill="none" aria-hidden="true">
    <g stroke="#9fb3a8" stroke-width="5" fill="#d9e2db">
      <ellipse cx="120" cy="188" rx="86" ry="22"/>
      <rect x="34" y="150" width="172" height="40" rx="10"/>
      <ellipse cx="120" cy="150" rx="86" ry="22"/>
      <rect x="34" y="112" width="172" height="40" rx="10"/>
      <ellipse cx="120" cy="112" rx="86" ry="22"/>
      <rect x="34" y="74" width="172" height="40" rx="10"/>
      <ellipse cx="120" cy="74" rx="86" ry="22" fill="#eef3ef"/>
    </g>
    <g fill="#ffffff" opacity=".5">
      <path d="M96 56c0-12 12-14 12-26 0-6-4-10-4-10 14 4 18 14 18 22 0 10-10 12-10 20"/>
      <path d="M128 52c0-10 10-12 10-22 0-5-3-8-3-8 11 3 15 11 15 18 0 8-8 10-8 16"/>
    </g>
  </svg>`,
};
