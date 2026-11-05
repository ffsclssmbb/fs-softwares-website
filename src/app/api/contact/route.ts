import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_BODY_BYTES = 10 * 1024;
const ALLOWED_SYSTEMS = new Set([
  'Spreadsheets',
  'Legacy Software',
  'Cloud Software',
  'Custom Development',
  'Nothing Formal',
]);
const ALLOWED_BRANCH_COUNTS = new Set(['1', '2-5', '6-10', '10+']);
const ALLOWED_CONTACT_METHODS = new Set(['email', 'phone', 'both']);

function cleanString(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim();
  if (!normalized || normalized.length > maxLength) return null;
  return normalized;
}

function invalid(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const requestOrigin = new URL(request.url).origin;

  if (!origin || origin !== requestOrigin) {
    return invalid('Invalid request origin.', 403);
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return invalid('The submitted enquiry is too large.', 413);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return invalid('Invalid request body.');
  }

  // Quietly accept honeypot submissions without forwarding them.
  if (typeof body.website === 'string' && body.website.trim()) {
    return NextResponse.json({ ok: true }, { status: 202 });
  }

  const name = cleanString(body.name, 120);
  const company = cleanString(body.company, 160);
  const email = cleanString(body.email, 254);
  const phone = cleanString(body.phone, 40);
  const location = cleanString(body.location, 120);
  const industry = cleanString(body.industry, 80);
  const numberOfBranches = cleanString(body.numberOfBranches, 10);
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const preferredContact = cleanString(body.preferredContact, 10);
  const currentSystems = Array.isArray(body.currentSystems) ? body.currentSystems : [];

  if (!name || !company || !email || !phone || !location || !industry || !numberOfBranches || !preferredContact) {
    return invalid('Please complete all required fields.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return invalid('Please provide a valid email address.');
  }
  if (message.length > 4000) {
    return invalid('The message must be 4,000 characters or fewer.');
  }
  if (!ALLOWED_BRANCH_COUNTS.has(numberOfBranches) || !ALLOWED_CONTACT_METHODS.has(preferredContact)) {
    return invalid('One or more selected values are invalid.');
  }
  if (currentSystems.length > ALLOWED_SYSTEMS.size || currentSystems.some((item) => typeof item !== 'string' || !ALLOWED_SYSTEMS.has(item))) {
    return invalid('One or more selected systems are invalid.');
  }

  const webhookValue = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookValue) {
    return invalid('The contact service is not configured yet. Please use the regional contact details shown on this page.', 503);
  }

  let webhookUrl: URL;
  try {
    webhookUrl = new URL(webhookValue);
  } catch {
    return invalid('The contact service is not configured correctly.', 503);
  }
  if (webhookUrl.protocol !== 'https:') {
    return invalid('The contact service must use HTTPS.', 503);
  }

  const payload = {
    source: 'FS Softwares website contact form',
    submittedAt: new Date().toISOString(),
    enquiry: {
      name,
      company,
      email,
      phone,
      location,
      industry,
      numberOfBranches,
      currentSystems,
      message,
      preferredContact,
    },
  };

  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (process.env.CONTACT_WEBHOOK_BEARER_TOKEN) {
      headers.Authorization = `Bearer ${process.env.CONTACT_WEBHOOK_BEARER_TOKEN}`;
    }

    const delivery = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });

    if (!delivery.ok) {
      return invalid('We could not deliver your enquiry right now. Please use the regional contact details shown on this page.', 502);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return invalid('We could not deliver your enquiry right now. Please use the regional contact details shown on this page.', 502);
  }
}
