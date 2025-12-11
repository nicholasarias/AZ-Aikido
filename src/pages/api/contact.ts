import type { APIRoute } from 'astro';

export const prerender = false;

// .env
const BASEROW_API_URL = import.meta.env.BASEROW_API_URL || 'https://api.baserow.io';
const BASEROW_TOKEN = import.meta.env.BASEROW_TOKEN;
const BASEROW_TABLE_ID = import.meta.env.BASEROW_TABLE_ID;


const INTEREST_LABELS: Record<string, string> = {
  '': 'General Questions',          
  'adult-classes': 'Adult Classes',
  'youth-classes': 'Youth Classes',
  'seminars': 'Seminars/Events'
};


export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      ok: true,
      message: 'Contact API is live. Use POST to submit the form.'
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const rawInterest = String(formData.get('interest') || '').trim();
    const interest = INTEREST_LABELS[rawInterest] ?? 'General Questions';
    const message = String(formData.get('message') || '').trim();
    

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: 'Name, email, and message are required.'
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    if (!BASEROW_TOKEN || !BASEROW_TABLE_ID) {
      console.error('Missing Baserow env vars');
      return new Response(
        JSON.stringify({
          ok: false,
          error: 'Server is not configured correctly.'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const url = `${BASEROW_API_URL}/api/database/rows/table/${BASEROW_TABLE_ID}/?user_field_names=true`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Token ${BASEROW_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Phone: phone,
        Interest: interest,
        Message: message,
        'Created': new Date().toISOString().slice(0,10)
      })
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Baserow error:', res.status, text);

      return new Response(
        JSON.stringify({
          ok: false,
          error: 'Failed to save message.'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error handling contact form:', err);

    return new Response(
      JSON.stringify({
        ok: false,
        error: 'Internal server error.'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
