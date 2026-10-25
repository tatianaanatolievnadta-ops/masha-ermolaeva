import { site } from '@/config/site';

export function beautySalonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: `${site.firstName} ${site.lastName} — уход за лицом и телом`,
    description: site.tagline,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    image: new URL(site.ogImage, site.domain).href,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      streetAddress: site.address,
      addressCountry: 'RU',
    },
    geo:
      site.geo.lat && site.geo.lng
        ? {
            '@type': 'GeoCoordinates',
            latitude: site.geo.lat,
            longitude: site.geo.lng,
          }
        : undefined,
    openingHours: site.schedule,
    sameAs: [site.social.vk, site.social.telegram, site.social.max].filter(
      (u) => u && !u.includes('{')
    ),
    priceRange: '₽₽',
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  priceFrom: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'BeautySalon',
      name: site.name,
    },
    areaServed: site.city,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'RUB',
      price: opts.priceFrom,
      availability: 'https://schema.org/InStock',
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, site.domain).href,
    })),
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: `${site.firstName} ${site.lastName}`,
    jobTitle: 'Косметолог-эстетист и массажист',
    url: new URL('/obo-mne/', site.domain).href,
    worksFor: {
      '@type': 'BeautySalon',
      name: site.name,
    },
  };
}
