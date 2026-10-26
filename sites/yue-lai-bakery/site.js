/**
 * Yue Lai Bakery — 137 E Broadway.
 *
 * Opens at six in the morning, which is earlier than anything else on this
 * list and is the whole character of the place.
 *
 * Note: Google's photo set for this listing contains at least one photograph
 * of a different storefront (160 E Broadway). That is recorded in `unknowns`
 * and no visual claim on this site rests on those photographs.
 */

export default {
  slug: 'yue-lai-bakery',
  name: 'Yue Lai Bakery',
  nameZh: null,
  kind: 'Chinese bakery',
  neighborhood: 'Chinatown',
  checked: '25 October 2026',

  address: {
    street: '137 E Broadway',
    inside: null,
    locality: 'New York',
    region: 'NY',
    postalCode: '10002',
  },

  phone: '+19172572263',
  phoneDisplay: '(917) 257-2263',

  hours: {
    note: 'Open daily from 6 am',
    display: '6:00 am – 7:30 pm (Sat to 7 pm)',
    rows: [
      ['Monday – Friday', '6 am – 7:30 pm'],
      ['Saturday', '6 am – 7 pm'],
      ['Sunday', '6 am – 7:30 pm'],
    ],
  },

  payment: null,

  rating: { value: 3.9, count: 29 },

  fonts: ['Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400', 'Public+Sans:wght@400;500;600;700'],
  favicon: { bg: '#1d2b44', fg: '#f0b256', glyph: '6' },

  heroTitle: 'Open at <em>six</em>',
  lede: `Before the F train gets busy, before anything else on East Broadway
    unlocks, there is a bakery here with a full case. Thirteen and a half
    hours a day, every day.`,
  metaDescription:
    'Yue Lai Bakery, a Chinese bakery at 137 E Broadway in Chinatown, Manhattan. Buns, taro buns and iced coffee from 6 am daily. 3.9 stars from 29 Google reviews.',

  signature: {
    title: 'Thirteen and a half hours, seven days',
    body: `Six in the morning until half seven at night, every day of the week.
      Nothing else on this street keeps those hours. <b>The shop's whole
      proposition is that it is open when you need it</b>, with the buns
      already out and the coffee already on.`,
  },

  story: {
    title: 'A bun shop with a long day',
    paragraphs: [
      `Yue Lai sits on the stretch of East Broadway past Rutgers, in the part
       of Chinatown that serves the neighbourhood rather than visitors. It
       has been trading for years — one directory has it at fourteen and
       counting, though that figure has been sitting there a while.`,
      `What reviewers describe is range: a lot of different buns and twists,
       neatly displayed, and staff who will tell you what to get. The baked
       pork buns have a habit of selling out. One food blogger went three
       times before catching them.`,
      `It has 29 reviews and a 3.9 average, which is the lowest on this list.
       It also has the longest opening hours on this list. Those two facts
       sitting together is more interesting than either one alone.`,
    ],
  },

  mentions: [
    { name: 'Buns', count: 7 },
    { name: 'Taro bun', count: 2 },
    { name: 'Iced coffee', count: 2 },
    { name: 'Choices', count: 2 },
  ],

  gettingThere: [
    `East Broadway past Rutgers Street, on the Seward Park side.`,
    `East Broadway (F) is the closest stop and comes up a few blocks west.`,
    `There is a Bitcoin ATM registered at the same address, which is a strange
     thing for a bakery to be filed next to and is noted here only because
     Google lists it.`,
  ],

  menuTitle: 'Buns, twists and the coffee',
  menuLede: `Taken from what reviewers and one published blog post name. The
    case is large and most of it has never been written down anywhere.`,

  sections: [
    {
      id: 'buns',
      name: 'Buns',
      blurb: 'The bulk of the case, and what people come back for.',
      items: [
        { name: 'Baked pork bun', note: 'Sells out — one blogger missed it three visits running' },
        { name: 'Cream filled bun', note: 'Soft and sweet with an eggy cream centre' },
        { name: 'Coconut bun', note: 'A firmer custard filling, condensed and coconut milk' },
        { name: 'Taro bun' },
        { name: 'Plain sweet bun', note: 'Large and round, sugar on top' },
      ],
    },
    {
      id: 'pastry',
      name: 'Rolls and twists',
      items: [
        { name: 'Cream filled roll', note: 'Split, filled with whipped cream, rock sugar on top' },
        { name: 'Twists', note: 'Reviewers describe a wide selection' },
      ],
    },
    {
      id: 'drinks',
      name: 'Drinks',
      items: [{ name: 'Iced coffee' }],
      footnote: `Sources: the bakery's Google listing and a 2022 write-up on
        Dining on a Shoestring in NYC, read on 25 October 2026.`,
    },
  ],

  unknowns: [
    `<b>Prices.</b> A 2022 blog post listed buns at $1.50. That is four years
     old and is not reproduced here. No price on this site.`,
    `<b>The phone number.</b> Google lists (917) 257-2263. Yellow Pages lists
     (212) 227-1617 for the same business. The Google number is used here.`,
    `<b>Payment.</b> Yelp says cards are accepted; Yellow Pages says cash.
     The Google listing says nothing, so neither does this page.`,
    `<b>Photographs.</b> At least one photograph filed under this business on
     Google shows a storefront at 160 E Broadway, which is a different shop.
     No description of this bakery's appearance on this site is drawn from
     those photographs.`,
  ],

  ornament: `<svg viewBox="0 0 240 240" fill="none" aria-hidden="true">
    <defs><linearGradient id="dawn" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1d2b44"/><stop offset=".55" stop-color="#5b5676"/>
      <stop offset="1" stop-color="#f0b256"/>
    </linearGradient></defs>
    <circle cx="120" cy="120" r="96" fill="url(#dawn)"/>
    <circle cx="120" cy="156" r="40" fill="#ffd79a"/>
    <rect x="24" y="168" width="192" height="6" rx="3" fill="#1d2b44" opacity=".55"/>
    <g stroke="#ffe7c2" stroke-width="3" stroke-linecap="round" opacity=".75">
      <path d="M58 92h36M58 106h22M146 92h36M164 106h18"/>
    </g>
    <text x="120" y="78" font-family="Newsreader, Georgia, serif" font-size="30"
          text-anchor="middle" fill="#ffe7c2" letter-spacing="3">6:00</text>
  </svg>`,
};
