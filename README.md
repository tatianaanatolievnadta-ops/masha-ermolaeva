# Сайт Марии — косметолог и массажист

Astro + TypeScript + Tailwind. Спецификация: `SPEC.md`, бренд: `BRAND.md`.

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте http://localhost:4321

## Что заполнить Маше

1. `src/config/site.ts` — фамилия, город, район, телефон, адрес, соцсети, лицензия, Метрика.
2. Цены — поле `priceFrom` в файлах `src/content/services/*.md`.
3. Фото — заменить SVG в `public/images/` на WebP/AVIF.
4. `.env` — токен Telegram-бота и chat id (см. `.env.example`).

## Сборка

```bash
npm run build
npm run preview
```

Статика в `dist/`. Для формы записи на Node-хостинге (Timeweb Cloud) нужен adapter и переменные `TELEGRAM_*`. Без них заявки пишутся в лог сервера при `astro preview` / Node.

## Юридическое

На каждой медицинской странице — предупреждение о противопоказаниях. Перед запуском тексты показать юристу.
