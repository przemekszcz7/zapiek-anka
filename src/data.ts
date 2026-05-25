import { MenuItem, AddonItem, Review, FoodImage } from './types';

export const RESTAURANT_INFO = {
  name: "Zapiek-ANKA",
  tagline: "Najlepsze szybkie jedzenie w Gostyninie",
  description: "Tradycyjne zapiekanki z pieca, soczyste burgery, pyszne hot-dogi oraz chrupiące frytki. Przygotowywane na świeżo ze starannie dobranych składników. Odwiedź nas lub zamów telefonicznie!",
  address: "Legionów Polskich 6B, Gostynin 09-500",
  phone: "516 921 001",
  facebookUrl: "https://www.facebook.com/profile.php?id=100085177032615",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.0333926171215!2d19.460433212670676!3d52.4241926432011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b86d54d9e0797%3A0x70f6f741183a72da!2sLegion%C3%B3w%20Polskich%206B%2C%2009-500%20Gostynin!5e0!3m2!1spl!2spl!4v1779701872620!5m2!1spl!2spl",
  googleMapsLink: "https://maps.google.com/?q=Legion%C3%B3w+Polskich+6B,+Gostynin+09-500",
  openingHours: [
    { day: "Poniedziałek", hours: "11:00 - 20:00", openTime: 11, closeTime: 20 },
    { day: "Wtorek", hours: "11:00 - 20:00", openTime: 11, closeTime: 20 },
    { day: "Środa", hours: "11:00 - 20:00", openTime: 11, closeTime: 20 },
    { day: "Czwartek", hours: "11:00 - 20:00", openTime: 11, closeTime: 20 },
    { day: "Piątek", hours: "11:00 - 20:00", openTime: 11, closeTime: 20 },
    { day: "Sobota", hours: "11:00 - 20:00", openTime: 11, closeTime: 20 },
    { day: "Niedziela", hours: "ZAMKNIĘTE", openTime: 0, closeTime: 0 }
  ]
};

export const MENU_CATEGORIES = [
  { id: 'zapiekanki', name: 'Zapiekanki', icon: 'zapiekanka' },
  { id: 'hamburgery', name: 'Hamburgery', icon: 'hamburger' },
  { id: 'hotdogi', name: 'Hot-Dogi', icon: 'hotdog' },
  { id: 'frytki_nuggetsy', name: 'Frytki i nuggetsy', icon: 'frytki' }
];

export const MENU_ITEMS: { [category: string]: MenuItem[] } = {
  zapiekanki: [
    {
      id: 'zap_klasyczna',
      name: 'ZAPIEKANKA KLASYCZNA',
      ingredients: 'bułka, ser, pieczarki',
      priceSmall: 8.50,
      priceLarge: 16.00,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_szynka',
      name: 'ZAPIEKANKA Z SZYNKĄ',
      ingredients: 'bułka, ser, pieczarki, szynka',
      priceSmall: 9.50,
      priceLarge: 18.00,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_wedzonka',
      name: 'ZAPIEKANKA Z WĘDZONKĄ',
      ingredients: 'bułka, ser, pieczarki, boczek wędzony',
      priceSmall: 9.50,
      priceLarge: 18.00,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_salami',
      name: 'ZAPIEKANKA Z SALAMI',
      ingredients: 'bułka, ser, pieczarki, salami',
      priceSmall: 9.50,
      priceLarge: 18.00,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_warzywa',
      name: 'ZAPIEKANKA Z WARZYWAMI',
      ingredients: 'bułka, ser, pieczarki, kapusta, pomidor, ogórek, cebula czerwona',
      priceSmall: 9.50,
      priceLarge: 18.00,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_goralska',
      name: 'ZAPIEKANKA GÓRALSKA',
      ingredients: 'bułka, ser wędzony, pieczarki',
      priceSmall: 9.50,
      priceLarge: 18.00,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_hiszpanska',
      name: 'ZAPIEKANKA HISZPAŃSKA',
      ingredients: 'bułka, ser, pieczarki, salami, cebula czerwona',
      priceSmall: 10.50,
      priceLarge: 20.00,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_wloska',
      name: 'ZAPIEKANKA WŁOSKA',
      ingredients: 'bułka, ser mozzarella, pieczarki, pomidor',
      priceSmall: 11.00,
      priceLarge: 20.50,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_swojska',
      name: 'ZAPIEKANKA SWOJSKA',
      ingredients: 'bułka, ser wędzony, pieczarki, boczek wędzony, ogórek kiszony',
      priceSmall: 10.50,
      priceLarge: 21.00,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_szwarcwaldzka',
      name: 'ZAPIEKANKA SZWARCWALDZKA',
      ingredients: 'bułka, ser, pieczarki, szynka dojrzewająca, pomidor suszony',
      priceSmall: 11.50,
      priceLarge: 22.00,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_kebab',
      name: 'ZAPIEKANKA Z KEBABEM',
      ingredients: 'bułka, ser, pieczarki, mięso kebab',
      priceSmall: 12.00,
      priceLarge: 22.50,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_turecka',
      name: 'ZAPIEKANKA TURECKA',
      ingredients: 'bułka, ser, pieczarki, mięso kebab, warzywa',
      priceSmall: 13.00,
      priceLarge: 23.50,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    },
    {
      id: 'zap_chopska',
      name: 'ZAPIEKANKA CHŁOPSKA',
      ingredients: 'bułka, ser wędzony, pieczarki, czerwona cebula, kiełbasa, ogórek',
      priceSmall: 10.50,
      priceLarge: 21.00,
      takeawaySmall: 2.00,
      takeawayLarge: 3.00,
      isCustomizable: true
    }
  ],
  hamburgery: [
    {
      id: 'burg_klasyk',
      name: 'HAMBURGER',
      ingredients: 'bułka, kotlet drobiowy, sosy',
      priceSingle: 7.50,
      takeawaySingle: 1.00,
      isCustomizable: true
    },
    {
      id: 'burg_warzywa',
      name: 'HAMBURGER Z WARZYWAMI',
      ingredients: 'bułka, kotlet drobiowy, ogórek, pomidor, kapusta pekińska, sałata, sosy',
      priceSingle: 9.50,
      takeawaySingle: 1.00,
      isCustomizable: true
    },
    {
      id: 'burg_cheese',
      name: 'CHEESEBURGER',
      ingredients: 'bułka, kotlet drobiowy, ser plastry, sosy',
      priceSingle: 8.50,
      takeawaySingle: 1.00,
      isCustomizable: true
    },
    {
      id: 'burg_cheese_warzywa',
      name: 'CHEESEBURGER Z WARZYWAMI',
      ingredients: 'bułka, kotlet drobiowy, ser plastry, ogórek, pomidor, kapusta pekińska, sałata, sosy',
      priceSingle: 10.50,
      takeawaySingle: 1.00,
      isCustomizable: true
    },
    {
      id: 'burg_drwal',
      name: 'DRWALBURGER',
      ingredients: 'bułka, kotlet drobiowy, pieczarki, ser wędzony, pomidor, sałata, sosy',
      priceSingle: 10.00,
      takeawaySingle: 1.00,
      isCustomizable: true
    },
    {
      id: 'burg_max',
      name: 'MAXBURGER',
      ingredients: 'bułka, kotlet drobiowy, boczek grillowany, ser wędzony, ogórek kiszony, czerwona cebula, sosy',
      priceSingle: 11.00,
      takeawaySingle: 1.00,
      isCustomizable: true
    }
  ],
  hotdogi: [
    {
      id: 'hd_klasyk',
      name: 'HOT-DOG',
      ingredients: 'bułka, parówka, sosy',
      priceSingle: 7.00,
      takeawaySingle: 1.50,
      isCustomizable: true
    },
    {
      id: 'hd_warzywa',
      name: 'HOT-DOG Z WARZYWAMI',
      ingredients: 'bułka, parówka, ogórek, pomidor, kapusta pekińska, sałata, sosy',
      priceSingle: 9.00,
      takeawaySingle: 1.50,
      isCustomizable: true
    },
    {
      id: 'hd_hot',
      name: 'HOT-HOT-DOG (PIKANTNY)',
      ingredients: 'bułka, parówka, papryczki jalapeno, pomidor, sałata, ostre sosy',
      priceSingle: 9.00,
      takeawaySingle: 1.50,
      isCustomizable: true
    }
  ],
  frytki_nuggetsy: [
    {
      id: 'frytki_male',
      name: 'MAŁE FRYTKI',
      ingredients: 'Złociste, chrupiące frytki (porcja mała)',
      priceSingle: 6.00,
      takeawaySingle: 2.00
    },
    {
      id: 'frytki_duze',
      name: 'DUŻE FRYTKI',
      ingredients: 'Złociste, chrupiące frytki (porcja duża)',
      priceSingle: 9.00,
      takeawaySingle: 3.00
    },
    {
      id: 'nuggets_male',
      name: 'MAŁE NUGGETSY',
      ingredients: 'Soczyste kawałki kurczaka w chrupiącej panierce (porcja mała)',
      priceSingle: 10.00,
      takeawaySingle: 2.00
    },
    {
      id: 'nuggets_duze',
      name: 'DUŻE NUGGETSY',
      ingredients: 'Soczyste kawałki kurczaka w chrupiącej panierce (porcja duża)',
      priceSingle: 15.00,
      takeawaySingle: 3.00
    }
  ]
};

export const ADDONS_LIST: AddonItem[] = [
  { id: 'add_szynka_salami_boczek', name: 'Szynka / Salami / Boczek', priceSmall: 2.00, priceLarge: 3.00 },
  { id: 'add_warzywa_suszony_pom', name: 'Warzywa / Pomidor suszony', priceSmall: 2.00, priceLarge: 3.00 },
  { id: 'add_szynka_szwarcwald', name: 'Szynka Szwarclwaldzka', priceSmall: 2.00, priceLarge: 4.00 },
  { id: 'add_kebab_drobiowy', name: 'Kebab drobiowy', priceSmall: 4.00, priceLarge: 7.00 },
  { id: 'add_cebula_jalapeno', name: 'Cebula czerwona lub prażona / Jalapeno', priceSmall: 1.00, priceLarge: 2.00 }
];

export const SOSES_LIST = {
  lagodne: [
    'Ketchup', 'Musztarda', 'Majonez', 'Sos Tatarski', 'Sos Czosnkowy', 'Sos Tysiąca Wysp', 'Sos Duński', 'Sos Bazyliowy'
  ],
  ostre: [
    'Sos Meksykański', 'Sos Arabski', 'Sos Serowo-Chili', 'Sos Amerykański z cebulką', 'Sos Paprykowy'
  ]
};

export const REVIEWS: Review[] = [
  {
    id: 'rev_1',
    author: "Zadowolona Klientka",
    rating: 5,
    content: "Pyszne zapiekanki. Krótki czas oczekiwania. duży wybór sosów. Możliwość dodania lub odjęcia składników na życzenie klienta. ☺️ Niskie ceny.",
    date: "Facebook"
  },
  {
    id: 'rev_2',
    author: "Smakosz Gostynina",
    rating: 5,
    content: "Bardzo dobre zapiekanki w bardzo dobrych i przystępnych cenach. Palce lizać. Niebo w gębie. Warto tam zajrzeć. Fajna i miła obsługa. Gorąco polecam 😊😊",
    date: "Facebook"
  },
  {
    id: 'rev_3',
    author: "Lokalny Przewodnik",
    rating: 5,
    content: "Bardzo pyszne zapiekanki i wystrój lokalu bardzo miła obsługa polecam",
    date: "Facebook"
  }
];

export const IMAGES: FoodImage[] = [
  {
    src: "https://i.ibb.co/1fbNwk8D/625605133-856762657172961-6013956539268995030-n.jpg",
    title: "ROMABURGER",
    description: "Chrupiąca bułka, soczysty kotlet drobiowy, ciągnący ser mozzarella, świeży pomidor, chrupiąca sałata, czerwona cebula oraz wyśmienite sosy do wyboru!"
  },
  {
    src: "https://i.ibb.co/kVpKp321/635158416-868574569325103-6202011149993683151-n.jpg",
    title: "Zapiekanka Pepperoni",
    description: "Tu aromatyczne plastry pepperoni łączą się z czarnymi oliwkami. Smak dopełnia zielone jalapeno w parze z piklami."
  },
  {
    src: "https://i.ibb.co/DDKJ8Ctk/645863193-882491314600095-6345368838411145263-n.jpg",
    title: "Hot dog grillowany",
    description: "Chrupiąca grillowana bagietka, grillowana kiełbasa 100% mięsa, pomidor, ogórek kiszony, czerwona cebula, kapusta pekińska, wybrane sosy oraz pachnąca prażona cebulka!"
  },
  {
    src: "https://i.ibb.co/39rpnv4L/702695600-941795865336306-2844583075404380246-n.jpg",
    title: "Nasza Zapiekanka Rumiana",
    description: "Perfekcyjnie dopieczona zapiekanka o złocistym serze i świeżych pieczarkach."
  },
  {
    src: "https://i.ibb.co/m5zrbp0D/687035863-930365383146021-5961588183285461821-n.jpg",
    title: "Napoje Bubble Tea",
    description: "Wyśmienite, pyszne i niezwykle orzeźwiające napoje Bubble Tea z pękającymi owocowymi kuleczkami Boba!"
  },
  {
    src: "https://i.ibb.co/yBG44wbC/680017123-924718997043993-2727921780767043923-n.jpg",
    title: "Nasz Lokal",
    description: "Zapraszamy do odwiedzenia naszego punktu i spróbowania pyszności na miejscu!"
  }
];
