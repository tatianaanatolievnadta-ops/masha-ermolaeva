export const prerender = false;

interface BookingBody {
  name?: string;
  phone?: string;
  service?: string;
  time?: string;
  contact?: string;
  consent?: string;
  company?: string;
}

export async function POST({ request }: { request: Request }) {
  let body: BookingBody;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  // honeypot
  if (body.company) {
    return json({ ok: true });
  }

  const name = (body.name || '').trim();
  const phone = (body.phone || '').trim();
  if (!name || !phone || body.consent !== 'on') {
    return json({ ok: false, error: 'validation' }, 400);
  }

  const token = import.meta.env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID;

  const text = [
    '🆕 Заявка с сайта',
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Услуга: ${body.service || '—'}`,
    `Время: ${body.time || '—'}`,
    `Связь: ${body.contact || '—'}`,
  ].join('\n');

  if (token && chatId) {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });
    if (!tg.ok) {
      return json({ ok: false, error: 'telegram' }, 502);
    }
  } else {
    console.log('[booking]', text);
  }

  return json({ ok: true });
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
