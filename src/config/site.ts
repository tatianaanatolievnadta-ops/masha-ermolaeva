/**
 * Контакты и тексты бренда. Правки — здесь и в src/content.
 */
export const site = {
  name: 'Мария Ермолаева',
  firstName: 'Мария',
  middleName: 'Михайловна',
  lastName: 'Ермолаева',
  fullName: 'Ермолаева Мария Михайловна',
  slogan: 'Красота по плану',
  tagline:
    'Свежее лицо, лёгкое тело и спокойная голова — в уютном кабинете, без лишнего шума',

  city: 'Таганрог',
  district: 'Таганрог',
  address: '1-й Новый пер., 24',
  addressFull: 'г. Таганрог, 1-й Новый пер., 24',

  phone: '+7 (951) 820-65-85',
  phoneHref: 'tel:+79518206585',
  email: '{email@example.ru}',

  domain: 'https://krasota-po-planu.ru',
  /** Пока деплой на GitHub Pages Татьяны — обновите после публикации домена */
  githubPagesBase: 'https://tatianaanatolievnadta-ops.github.io/masha-ermolaeva',
  /** Главный кабинет Татьяны Анатольевны */
  makerUrl: 'https://tatianaanatolievnadta-ops.github.io/TatianaZhelihovskaya/',
  makerCabinetUrl: 'https://tatianaanatolievnadta-ops.github.io/TatianaZhelihovskaya/portfolio.html',
  makerName: 'Татьяна Желиховская',
  ogImage: '/images/masha/portrait-hero.jpg',

  photos: {
    hero: '/images/masha/portrait-hero.jpg',
    about: '/images/masha/portrait-warm.jpg',
    work: '/images/masha/generated-hands.jpg',
    diploma: '/images/masha/diploma-photo.jpg',
    logo: '/images/logo-masha-hands-heart.jpg',
    logoMark: '/images/logo-masha-hands-heart.jpg',
    heroAlt: 'Мария Ермолаева — уход за лицом и телом, Таганрог',
    aboutAlt: 'Мария Ермолаева, Таганрог',
    workAlt: 'Работа в кабинете',
  },

  /** Публично не показываем: лицензии нет, дипломы — только по запросу */
  showLicense: false,
  showDiplomas: false,
  showBeforeAfter: false,

  yearsPractice: '20',
  yearsSince: 2006,
  clientsCount: '500',

  schedule: '{Пн–Сб 10:00–20:00}',
  geo: {
    lat: 47.2795,
    lng: 38.9261,
  },

  social: {
    max: '{https://max.ru/...}',
    telegram: '{https://t.me/...}',
    vk: '{https://vk.com/...}',
    yandexMaps:
      'https://yandex.ru/maps/971/taganrog/?text=%D0%A2%D0%B0%D0%B3%D0%B0%D0%BD%D1%80%D0%BE%D0%B3%2C%201-%D0%B9%20%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%BF%D0%B5%D1%80%D0%B5%D1%83%D0%BB%D0%BE%D0%BA%2C%2024',
    twoGis: '{https://2gis.ru/...}',
  },

  disclaimer:
    'Результат индивидуален. Есть противопоказания — обсуждаем на личной консультации.',

  yandexMetrikaId: '{XXXXXX}',
  telegramBotToken: '',
  telegramChatId: '',

  authorMassageName: '{Название авторского массажа}',

  nav: [
    { href: '/#uslugi', label: 'Услуги' },
    { href: '/ceny/', label: 'Цены' },
    { href: '/otzyvy/', label: 'Отзывы' },
    { href: '/obo-mne/', label: 'Обо мне' },
    { href: '/blog/', label: 'Блог' },
    { href: '/kontakty/', label: 'Контакты' },
  ],
} as const;

export type SiteConfig = typeof site;

export function titleHome() {
  return `Уход за лицом и телом · ${site.city} — Мария Ермолаева`;
}

export function titleService(serviceName: string, priceFrom: number) {
  return `${serviceName} в ${site.city} — от ${priceFrom} ₽ | Мария Ермолаева`;
}

export function descriptionTemplate(result: string) {
  return `${result} Уход за лицом и телом в кабинете. Запись: ${site.phone}, ${site.city}.`;
}
