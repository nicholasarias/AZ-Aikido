export { renderers } from '../../renderers.mjs';

const prerender = false;
const BASEROW_API_URL = "https://api.baserow.io";
const BASEROW_TOKEN = "YSRjvOCQB91NB3XBLeMGlAjGh4EMgZge";
const BASEROW_TABLE_ID = "769030";
const INTEREST_LABELS = {
  "": "General Questions",
  "adult-classes": "Adult Classes",
  "youth-classes": "Youth Classes",
  "seminars": "Seminars/Events"
};
const GET = async () => {
  return new Response(
    JSON.stringify({
      ok: true,
      message: "Contact API is live. Use POST to submit the form."
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const rawInterest = String(formData.get("interest") || "").trim();
    const interest = INTEREST_LABELS[rawInterest] ?? "General Questions";
    const message = String(formData.get("message") || "").trim();
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Name, email, and message are required."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!BASEROW_TOKEN || !BASEROW_TABLE_ID) ;
    const url = `${BASEROW_API_URL}/api/database/rows/table/${BASEROW_TABLE_ID}/?user_field_names=true`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Token ${BASEROW_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Phone: phone,
        Interest: interest,
        Message: message,
        "Created": (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
      })
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Baserow error:", res.status, text);
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Failed to save message."
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error handling contact form:", err);
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Internal server error."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
