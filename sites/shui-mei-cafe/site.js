/**
 * Shui Mei Cafe — 67 E Broadway.
 *
 * The trickiest entry on this list: the name is genuinely unsettled. Google
 * says Shui Mei Cafe, a 2026 reviewer says it now trades as QQ Cafe, and the
 * awning in Google's own photographs reads differently again. The site is
 * built to say so rather than to pick one and sound confident.
 */

export default {
  slug: 'shui-mei-cafe',
  name: 'Shui Mei Cafe',
  nameZh: '福州小吃店',
  kind: 'Fuzhou snack counter',
  neighborhood: 'Chinatown',
  checked: '25 October 2026',

  address: {
    street: '67 E Broadway',
    inside: null,
    locality: 'New York',
    region: 'NY',
    postalCode: '10002',
  },

  phone: '+16463268810',
  phoneDisplay: '(646) 326-8810',

  hours: {
    note: 'Open daily',
    display: '7:30 am – 7:00 pm',
    rows: [['Monday – Sunday', '7:30 am – 7 pm']],
  },

  payment: null,

  rating: { value: 4.5, count: 126 },

  fonts: ['Lobster+Two:ital,wght@0,700;1,700', 'Jost:wght@400;500;600;700'],
  favicon: { bg: '#f2b705', fg: '#8c2466', glyph: '麵' },

  heroTitle: 'Peanut noodles,<br>and <em>mix them well</em>',
  lede: `A Fuzhou counter on East Broadway with a gold awning and a dish people
    keep coming back for. Order the peanut noodles. Then do what every single
    review tells you to do and stir them from the bottom.`,
  metaDescription:
    'Shui Mei Cafe, a Fuzhou snack counter at 67 E Broadway in Chinatown, Manhattan. Peanut noodles, Fujianese wontons and fish ball soup. Open daily 7:30 am to 7 pm. 4.5 stars from 126 Google reviews.',

  signature: {
    title: 'The peanut noodles have a user manual',
    body: `Read the reviews in order and the same instruction appears again and
      again: the sauce sits at the bottom, so <b>mix them well before the first
      bite</b>. People who did say it is the best thing on East Broadway.
      People who did not say it was fine. Same bowl.`,
  },

  story: {
    title: 'A counter that has changed its name and not its noodles',
    paragraphs: [
      `This is a seat-yourself, order-at-the-counter, carry-your-own-tray kind
       of place, and it has been on East Broadway long enough that customers
       talk about growing up on it. One reviewer this year wrote that their
       family has been coming "since it first opened — back when it was still
       known as Shui Mei Cafe", and that it now trades as QQ Cafe.`,
      `Google still lists it as Shui Mei Cafe. The awning in Google's own
       photographs carries a third set of words. This site keeps the Google
       name because that is the name the phone number is attached to, and says
       all of this out loud rather than picking one and sounding certain.`,
      `What has not changed is the food: peanut noodles, Fujianese wontons,
       fish ball soup, pan-fried pork dumplings. Reviewers call it a hole in
       the wall serving Fuzhou street food at value prices, which is exactly
       what it looks like.`,
    ],
  },

  mentions: [
    { name: 'Peanut noodles', count: 11 },
    { name: 'Wonton', count: 10 },
    { name: 'Fujianese wontons', count: 4 },
    { name: 'Fujianese food', count: 3 },
  ],

  gettingThere: [
    `East Broadway between Market and Catherine, on the north side.`,
    `East Broadway (F) is two minutes away. The B and D at Grand St are about
     seven.`,
    `There are seats, but not many — reviewers describe it as small with a
     few tables where you seat yourself.`,
  ],

  menuTitle: 'Noodles, wontons, soup',
  menuLede: `A short list taken from what reviewers name. The counter has more
    than this, written up on the wall, and none of it is published anywhere.`,

  sections: [
    {
      id: 'noodles',
      name: 'Noodles',
      blurb: 'The dish the place is known for.',
      items: [
        { name: 'Peanut noodles', note: 'Named in 11 reviews. Stir from the bottom.' },
      ],
    },
    {
      id: 'wontons',
      name: 'Wontons and dumplings',
      items: [
        { name: 'Fujianese wontons', note: 'Named in 10 reviews' },
        { name: 'Pan-fried pork dumplings' },
      ],
    },
    {
      id: 'soup',
      name: 'Soup',
      items: [
        { name: 'Fish ball soup' },
      ],
      footnote: `Sources: the business's Google listing and published reviews,
        read on 25 October 2026.`,
    },
  ],

  unknowns: [
    `<b>The name.</b> Google says Shui Mei Cafe. A 2026 reviewer says the same
     business now trades as QQ Cafe. The awning in Google's photographs reads
     differently from both. Anyone making contact should ask what they call
     themselves now.`,
    `<b>The phone number.</b> Google lists (646) 326-8810. Several directories
     list (212) 791-2819 for the same address. The Google number is used here
     because it is the one on the business's own listing.`,
    `<b>Prices.</b> Not published. Directory listings estimate $1–10 a head;
     an estimate is not a price, so none appear on this site.`,
    `<b>Payment.</b> Described as cash only in third-party listings, not stated
     on the Google listing.`,
  ],

  // Photography lives in sites/<slug>/images/. These are representative
  // images of the dishes named, not photographs taken at this business --
  // every page that shows one says so.
  images: {
    heroAlt: 'A bowl of peanut noodles topped with scallions and sesame seeds',
    showcaseTitle: 'Noodles first, then everything else',
    showcaseLede: 'Fuzhou home cooking at counter prices. Order the noodles, then work outwards.',
    dishes: [
      { label: 'Peanut noodles', alt: 'Flat wheat noodles coated in peanut sauce with scallions and sesame' },
      { label: 'Wonton soup', alt: 'Wontons in a clear broth in a blue rimmed bowl' },
      { label: 'Pan-fried dumplings', alt: 'Pork dumplings with scallions on a plate' },
    ],
  },

  ornament: `<svg viewBox="0 0 240 240" fill="none" aria-hidden="true">
    <circle cx="120" cy="124" r="92" fill="#2b2320"/>
    <circle cx="120" cy="124" r="78" fill="#3a302b"/>
    <g stroke="#d8a358" stroke-width="9" stroke-linecap="round" fill="none">
      <path d="M62 118c18-16 38 14 58-2s34 12 58-6"/>
      <path d="M62 140c18-16 38 14 58-2s34 12 58-6"/>
      <path d="M68 96c18-16 34 12 54-4s32 10 52-8"/>
    </g>
    <g fill="#8fbf5a">
      <rect x="92" y="104" width="16" height="5" rx="2.5" transform="rotate(-18 92 104)"/>
      <rect x="132" y="126" width="16" height="5" rx="2.5" transform="rotate(24 132 126)"/>
      <rect x="108" y="146" width="14" height="5" rx="2.5" transform="rotate(-8 108 146)"/>
    </g>
  </svg>`,
};
