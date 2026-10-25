/**
 * Все данные в {скобках} из SPEC — заполняет Маша.
 * Меняйте только этот файл (и Markdown в src/content).
 */
export const site = {
  name: 'Мария {Фамилия}',
  firstName: 'Мария',
  lastName: '{Фамилия}',
  slogan: 'Красота по плану',
  tagline:
    'Красота по плану: свежее лицо, лёгкое тело и спокойная голова — в одних руках',

  city: '{город}',
  district: '{район}',
  address: '{адрес кабинета}',
  addressFull: '{город}, {район}, {адрес кабинета}',

  phone: '{+7 (XXX) XXX-XX-XX}',
  phoneHref: 'tel:+7XXXXXXXXXX',
  email: '{email@example.ru}',

  domain: 'https://krasota-po-planu.ru',
  ogImage: '/images/og-default.jpg',

  yearsPractice: '{N}',
  clientsCount: '{N}',

  schedule: '{Пн–Сб 10:00–20:00}',
  geo: {
    lat: 0,
    lng: 0,
  },

  social: {
    max: '{https://max.ru/...}',
    telegram: '{https://t.me/...}',
    vk: '{https://vk.com/...}',
    yandexMaps: '{https://yandex.ru/maps/...}',
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
  telegramBotToken: '', // только в env на сервере
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
  return `Косметолог и массажист в ${site.district}, ${site.city} — Мария ${site.lastName}`;
}

export function titleService(serviceName: string, priceFrom: number) {
  return `${serviceName} в ${site.city} — цена от ${priceFrom} ₽ | Мария ${site.lastName}`;
}

export function descriptionTemplate(result: string) {
  return `${result} Подробный анамнез, сертифицированные препараты, запись онлайн. ${site.district}, ${site.city}.`;
}
