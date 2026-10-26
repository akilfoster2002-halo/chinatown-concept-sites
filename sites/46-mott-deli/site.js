/**
 * 46 Mott Deli — 46 Mott St.
 *
 * Facts from the Google listing read 2026-10-25. The history comes from
 * named published sources (Resy, Mott Street Girls) and is attributed in
 * the copy rather than asserted as the shop's own words.
 */

export default {
  slug: '46-mott-deli',
  name: '46 Mott Deli',
  nameZh: null,
  kind: 'Cantonese snack shop',
  neighborhood: 'Chinatown',
  checked: '25 October 2026',

  address: {
    street: '46 Mott St',
    inside: null,
    locality: 'New York',
    region: 'NY',
    postalCode: '10013',
  },

  phone: '+16467156699',
  phoneDisplay: '(646) 715-6699',

  hours: {
    note: 'Closed Tuesdays',
    display: 'Wed – Mon, from 9 or 10 am to 7 pm',
    rows: [
      ['Monday', '10 am – 7 pm'],
      ['Tuesday', 'Closed'],
      ['Wednesday', '10 am – 7 pm'],
      ['Thursday', '10 am – 7 pm'],
      ['Friday', '10 am – 7 pm'],
      ['Saturday', '9 am – 7 pm'],
      ['Sunday', '9 am – 7 pm'],
    ],
  },

  payment: null,

  rating: { value: 4.8, count: 196 },

  fonts: ['Archivo+Black', 'Archivo:wght@400;500;600;700'],
  favicon: { bg: '#c8102e', fg: '#ffcf2d', glyph: '46' },

  heroTitle: 'The number<br>is the <em>sign</em>',
  lede: `A yellow 46 the size of a window, on a red awning on Mott Street.
    Inside: tofu pudding, warm soy milk, rice cakes and herbal tea — the
    Cantonese snacks that used to be on every block and now are not.`,
  metaDescription:
    '46 Mott Deli, a Cantonese snack shop at 46 Mott St in Chinatown, Manhattan. Tofu pudding, soy milk, rice cakes and herbal teas. Closed Tuesdays. 4.8 stars from 196 Google reviews.',

  signature: {
    title: 'Tofu pudding, fifty-six times over',
    body: `<b>56 of the 196 Google reviews mention the tofu pudding</b> — more
      than a quarter of everyone who has ever written about this shop. It is
      served warm, soft enough to drink, and it is the thing to order if you
      only order one thing.`,
  },

  story: {
    title: 'The shop that kept the block alive',
    paragraphs: [
      `46 Mott opened in 2018 in a storefront that had held Fong On, a
       family tofu business, for more than eighty years. Taking on that
       address came with an obligation, and the shop has treated it that way.`,
      `During the pandemic, general manager Patrick Mock — born and raised in
       Chinatown — worked with Send Chinatown Love and Assemblywoman Yuh-Line
       Niou to give away more than 70,000 hot meals to front-line workers,
       seniors and neighbours. In December 2020 he started Light Up Chinatown,
       which hung 250 lanterns over these streets to pull foot traffic back.
       <span class="src">Reported by Resy and Mott Street Girls.</span>`,
      `The food is deliberately old-fashioned: tofu pudding, soy milk, rice
       cakes, herbal jellies, zongzi, tea eggs, mooncakes in season. The shop
       calls it old-school nostalgia. Google files it under "Asian grocery
       shop", which undersells it, and reviewers keep reaching for the word
       bodega.`,
    ],
  },

  mentions: [
    { name: 'Tofu pudding', count: 56 },
    { name: 'Soy milk', count: 27 },
    { name: 'Rice cakes', count: 13 },
    { name: 'Mochi', count: 8 },
  ],

  gettingThere: [
    `Mott Street between Bayard and Pell, in the middle of the oldest block
     in Chinatown.`,
    `Canal St (J, N, Q, R, W, Z, 6) is two minutes north. Grand St (B, D) is
     about the same to the east.`,
    `Closed on Tuesdays — the one day worth checking before you walk over.`,
  ],

  menuTitle: 'Tofu, rice, and things in jars',
  menuLede: `Assembled from published reviews and the shop's public listing.
    The freezer case and the seasonal shelf both turn over, so treat this as
    the shape of the place rather than a stock list.`,

  sections: [
    {
      id: 'tofu',
      name: 'Tofu and soy',
      blurb: 'The heart of the shop, and the reason for the queue at the counter.',
      items: [
        { name: 'Tofu pudding', note: 'Served warm — mentioned in 56 reviews' },
        { name: 'Soy milk', note: 'Hot or cold' },
      ],
    },
    {
      id: 'sweets',
      name: 'Cakes and sweets',
      items: [
        { name: 'Rice cakes' },
        { name: 'Mochi' },
        { name: 'Mung bean cake' },
        { name: 'Herbal jelly', note: 'Also sold as grass jelly' },
        { name: 'Mooncakes', note: 'Seasonal' },
      ],
    },
    {
      id: 'savoury',
      name: 'Savoury',
      items: [
        { name: 'Zongzi', note: 'Sticky rice in bamboo leaf; a peanut version is reviewed' },
        { name: 'Congee' },
        { name: 'Buns' },
        { name: 'Tea eggs' },
        { name: 'Frozen dumplings', note: 'To take home' },
      ],
    },
    {
      id: 'drinks',
      name: 'Herbal drinks',
      items: [
        { name: 'Herbal teas', note: 'Selection changes' },
      ],
      footnote: `Sources: the shop's Google listing, Mott Street Girls, Resy and
        Eat This NY, all read on 25 October 2026.`,
    },
  ],

  unknowns: [
    `<b>Prices.</b> The shop has handwritten price cards on the wall, visible
     in photographs, but publishes no price list. Nothing on this site carries
     a price.`,
    `<b>Payment.</b> Not stated on the Google listing.`,
    `<b>Saturday and Sunday opening.</b> Google says 9 am at the weekend and
     10 am on weekdays; some third-party listings say 10 am every day.
     The listing's own hours are what appear here.`,
    `<b>The full range.</b> This is a shop with shelves, not a kitchen with a
     menu. Anything shelf-stable may come and go.`,
  ],

  ornament: `<svg viewBox="0 0 240 240" fill="none" aria-hidden="true">
    <rect x="18" y="52" width="204" height="136" rx="10" fill="#c8102e"/>
    <rect x="30" y="64" width="180" height="112" rx="5" fill="#ffcf2d"/>
    <text x="120" y="152" font-family="Archivo Black, Impact, sans-serif" font-size="96"
          text-anchor="middle" fill="#c8102e">46</text>
    <rect x="18" y="188" width="204" height="12" rx="6" fill="#7f8c3f"/>
  </svg>`,
};
