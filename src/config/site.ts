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
    'Красота по плану: свежее лицо, лёгкое тело и спокойная голова — в одних руках',

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
    logo: '/images/logo-masha.jpg',
    logoMark: '/images/logo-masha-massage-v2.jpg',
    beforeBody: '/images/masha/body-before.jpg',
    afterBody: '/images/masha/body-after.jpg',
    heroAlt: 'Косметолог и массажист Мария Ермолаева в Таганроге',
    aboutAlt: 'Мария Ермолаева — косметолог и массажист, Таганрог',
    workAlt: 'Мария Ермолаева за работой с клиенткой',
    diplomaAlt: 'Диплом Марии Ермолаевой',
    beforeBodyAlt: 'До антицеллюлитного массажа — зона бедра и ягодиц',
    afterBodyAlt: 'После антицеллюлитного массажа — реакция тканей, Таганрог',
  },

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

  license: {
    number: '{номер}',
    date: '{дата}',
    issuedBy: '{кем выдана}',
  },

  disclaimer:
    'Имеются противопоказания. Необходима консультация специалиста.',

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
  return `Массажист и косметолог ${site.district}, ${site.city} — Мария Ермолаева`;
}

export function titleService(serviceName: string, priceFrom: number) {
  return `${serviceName} в ${site.city} — от ${priceFrom} ₽ | Мария Ермолаева`;
}

export function descriptionTemplate(result: string) {
  return `${result} Массаж и косметология в одних руках. Анамнез, план ухода, запись онлайн. ${site.address}, ${site.city}. Тел. ${site.phone}.`;
}
