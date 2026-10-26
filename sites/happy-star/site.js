/**
 * Happy Star — 160 E Broadway.
 *
 * A bakery counter and a savoury counter in one room. Unlike the rest of
 * this list it does have an ordering page on Uber Eats, so it is the one
 * business here with any kind of online presence at all.
 */

export default {
  slug: 'happy-star',
  name: 'Happy Star',
  nameZh: '餅屋',
  kind: 'Bakery and congee counter',
  neighborhood: 'Chinatown',
  checked: '25 October 2026',

  address: {
    street: '160 E Broadway',
    inside: null,
    locality: 'New York',
    region: 'NY',
    postalCode: '10002',
  },

  phone: '+12126088899',
  phoneDisplay: '(212) 608-8899',

  hours: {
    note: 'Open daily',
    display: '6:30 am – 7:00 pm',
    rows: [['Monday – Sunday', '6:30 am – 7 pm']],
  },

  payment: null,

  rating: { value: 3.7, count: 114 },

  fonts: ['Quicksand:wght@500;600;700', 'Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700'],
  favicon: { bg: '#3f9e94', fg: '#fff6ea', glyph: '★' },

  heroTitle: 'Two counters,<br>one <em>room</em>',
  lede: `Buns and egg tarts on one side, congee and rice noodle on the other.
    A mint-and-cream awning at the far end of East Broadway, open from
    half six.`,
  metaDescription:
    'Happy Star, a bakery and congee counter at 160 E Broadway in Chinatown, Manhattan. Buns, egg tarts, congee and steamed rice noodle. Open daily 6:30 am to 7 pm.',

  signature: {
    title: 'Breakfast for the price of a coffee',
    body: `The savoury counter is the half people underrate. One reviewer's
      whole order — pork and egg congee, plus two more items — came to
      <b>ten dollars for three things</b>, and they called the congee the star.
      Dim sum breakfast at bakery prices is a rare combination on this street.`,
  },

  story: {
    title: 'The bakery that also makes you breakfast',
    paragraphs: [
      `Happy Star has a pale mint and cream awning with a drawing of a bubble
       tea on it, which tells you most of what you need to know about the
       tone of the place. Inside, the room is split: a bakery case along one
       side and a hot counter along the other.`,
      `The bakery side does what Chinese bakeries do — coconut buns, pineapple
       buns, roast pork buns, egg tarts, sponge cake. The hot side does congee,
       steamed rice noodle rolls, turnip cake and shrimp dumplings, which is
       effectively a dim sum breakfast you can get at half six in the morning.`,
      `Its 3.7 average is the lowest here, built from 114 reviews that
       disagree with each other quite sharply. The consistent note across the
       good ones is value: "great food, great prices", and a warning that
       English at the counter is hit and miss.`,
    ],
  },

  mentions: [
    { name: 'Buns', count: 12 },
    { name: 'Coconut buns', count: 4 },
    { name: 'Egg tart', count: 3 },
    { name: 'Pineapple buns', count: 3 },
  ],

  gettingThere: [
    `The far end of East Broadway, past Rutgers, towards the bridge.`,
    `East Broadway (F) is the nearest stop, about five minutes west.`,
    `This is the one business on this list with any online ordering at all —
     there is an Uber Eats page. There is still no website.`,
  ],

  menuTitle: 'The case, and the hot counter',
  menuLede: `Two lists, because it is two counters. Taken from reviews, the
    Google listing and the business's third-party ordering page.`,

  sections: [
    {
      id: 'bakery',
      name: 'From the bakery case',
      blurb: 'Cantonese-style baked goods, out from early morning.',
      items: [
        { name: 'Coconut bun' },
        { name: 'Pineapple bun' },
        { name: 'Roast pork bun' },
        { name: 'Egg tart' },
        { name: 'Sponge cake' },
        { name: 'Steamed buns' },
      ],
    },
    {
      id: 'hot',
      name: 'From the hot counter',
      blurb: 'The half of the room people forget to mention.',
      items: [
        { name: 'Pork and egg congee', note: 'Called the star of the order in a 2026 review' },
        { name: 'Steamed rice noodle', note: 'Cheung fun' },
        { name: 'Turnip cake' },
        { name: 'Shrimp dumplings' },
        { name: 'Rice dishes' },
        { name: 'Noodle soup' },
      ],
      footnote: `Sources: the business's Google listing, its Uber Eats page and
        published reviews, read on 25 October 2026.`,
    },
  ],

  unknowns: [
    `<b>Prices.</b> There are prices on the Uber Eats page, but delivery-app
     prices are marked up and are not what you pay at the counter. Printing
     them here would be misleading, so this site prints none.`,
    `<b>Payment.</b> Third-party listings say cash only. The Google listing
     does not say, so neither does this page.`,
    `<b>The business's own name.</b> Google lists it as Happy Star; it is
     registered elsewhere as Happy Star Bakery Corp, and the awning carries
     Chinese characters reading 餅屋 — "cake house". Worth confirming which
     they prefer.`,
    `<b>The low rating.</b> 3.7 from 114 reviews is a genuinely divided
     verdict, not a rounding error. Anyone approaching this business should
     read the one-star reviews as well as the five-star ones.`,
  ],

  ornament: `<svg viewBox="0 0 240 240" fill="none" aria-hidden="true">
    <rect x="30" y="34" width="180" height="56" rx="6" fill="#fdf3e3"/>
    <rect x="30" y="78" width="180" height="16" rx="4" fill="#3f9e94"/>
    <path d="M120 44l7 15 16 2-12 11 3 16-14-8-14 8 3-16-12-11 16-2z" fill="#3f9e94"/>
    <g>
      <path d="M86 122h68l-9 86a12 12 0 0 1-12 11h-26a12 12 0 0 1-12-11z" fill="#fce4ea" stroke="#e8a8bb" stroke-width="3"/>
      <rect x="78" y="112" width="84" height="12" rx="6" fill="#fdf3e3" stroke="#e8a8bb" stroke-width="3"/>
      <rect x="132" y="70" width="7" height="50" rx="3.5" fill="#e8a8bb" transform="rotate(14 132 70)"/>
      <g fill="#4a3b36">
        <circle cx="105" cy="186" r="7"/><circle cx="125" cy="196" r="7"/>
        <circle cx="143" cy="184" r="7"/><circle cx="118" cy="174" r="6"/>
      </g>
    </g>
  </svg>`,
};
