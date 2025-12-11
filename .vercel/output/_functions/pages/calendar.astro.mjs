import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_B4bjZISI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_VpPS_4r8.mjs';
export { renderers } from '../renderers.mjs';

const $$Calendar = createComponent(($$result, $$props, $$slots) => {
  const events = [
    {
      date: "February 15\u201316, 2025",
      title: "Arizona Aikido Seminar",
      subtitle: "Weekend seminar \u2013 all levels welcome",
      location: "Arizona Aikido (Agatsu Dojo), Phoenix, AZ",
      details: "Intensive weekend training focusing on fundamentals, ukemi, and weapons work. Suitable for newer students and advanced students alike.",
      note: "Please confirm dates and times with the dojo; seminar details may change."
    },
    {
      date: "Ongoing",
      title: "Regular Aikido Classes",
      subtitle: "Weekly adult and youth classes",
      location: "Arizona Aikido \u2013 Agatsu Dojo, 939 W Camelback Rd, Phoenix, AZ",
      details: "See the Schedule page for current adult and youth class times. Visitors are welcome to watch a class or join as beginners.",
      linkText: "View weekly schedule",
      linkHref: "/schedule"
    },
    {
      date: "To be announced",
      title: "Fall Mountain Camp",
      subtitle: "Annual Aikido camp in the Arizona high country",
      location: "Location and dates announced in News section",
      details: "Arizona Aikido hosts an annual mountain training camp with instructors from Aikido Schools of Ueshiba and invited teachers.",
      note: "Details are posted on the News page and email list when confirmed."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "title": "Arizona Aikido \u2013 Calendar" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="border-b border-slate-800 bg-slate-950/90"> <div class="mx-auto max-w-5xl px-4 py-8 md:py-14"> <p class="text-[11px] font-semibold uppercase tracking-[0.25em] text-violet-400">
Events &amp; seminars
</p> <h1 class="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
Calendar
</h1> <p class="mt-4 text-sm md:text-base text-slate-300 max-w-3xl">
This page highlights upcoming seminars, special events, and ongoing training opportunities
        at Arizona Aikido. Regular weekly class times are listed on the Schedule page.
</p> </div> </section>  <section class="mx-auto max-w-5xl px-4 py-8 md:py-14 space-y-8 text-sm md:text-base text-slate-200 leading-relaxed"> <section class="space-y-3"> <h2 class="text-lg md:text-xl font-semibold text-slate-50">
Upcoming &amp; recurring events
</h2> <p class="text-sm md:text-base text-slate-300">
For the most accurate and current information, please confirm dates and times with the
        dojo by email or phone. News posts and seminar flyers may include additional details about
        instructors, schedules, and fees.
</p> </section> <div class="space-y-5"> ${events.map((event) => renderTemplate`<article class="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:p-6"> <p class="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-violet-300"> ${event.date} </p> <h3 class="mt-2 text-base md:text-lg font-semibold text-slate-50"> ${event.title} </h3> ${event.subtitle && renderTemplate`<p class="mt-1 text-xs md:text-sm text-slate-300"> ${event.subtitle} </p>`} <p class="mt-3 text-xs md:text-sm text-slate-400"> ${event.location} </p> <p class="mt-3 text-sm text-slate-200"> ${event.details} </p> ${event.linkHref && renderTemplate`<a${addAttribute(event.linkHref, "href")} class="mt-3 inline-flex text-xs font-semibold text-violet-300 hover:text-violet-200 underline underline-offset-4"> ${event.linkText} </a>`} ${event.note && renderTemplate`<p class="mt-3 text-[11px] text-slate-500"> ${event.note} </p>`} </article>`)} </div> <!-- Note to dojo / admin --> <section class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5"> <h2 class="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
For dojo staff
</h2> <p class="mt-2 text-xs md:text-sm text-slate-400">
To add or update events on this Calendar page, edit the <code>events</code> list in
<code>src/pages/calendar.astro</code>. Each entry controls the date, title, description,
        and links shown above.
</p> </section> </section> ` })}`;
}, "D:/Work/AZ-Aikido/src/pages/calendar.astro", void 0);

const $$file = "D:/Work/AZ-Aikido/src/pages/calendar.astro";
const $$url = "/calendar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calendar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
