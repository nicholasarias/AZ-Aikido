import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B4bjZISI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_VpPS_4r8.mjs';
export { renderers } from '../renderers.mjs';

const $$Directions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "title": "Arizona Aikido \u2013 Directions" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="border-b border-slate-800 bg-slate-950/90"> <div class="mx-auto max-w-5xl px-4 py-8 md:py-14"> <p class="text-[11px] font-semibold uppercase tracking-[0.25em] text-violet-400">
Visit the dojo
</p> <h1 class="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
Directions &amp; Dojo Location
</h1> <p class="mt-4 text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
Arizona Aikido’s dojo is located on West Camelback Road in central Phoenix, with easy
        access by car, light rail, and bus.
</p> </div> </section>  <section class="mx-auto max-w-5xl px-4 py-8 md:py-14 space-y-10 text-sm md:text-base text-slate-200 leading-relaxed"> <!-- Address + contact quick info --> <section class="grid gap-6 md:grid-cols-2 items-start"> <div class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Dojo address</h2> <address class="not-italic leading-relaxed text-slate-100 space-y-1"> <div>Arizona Aikido – Agatsu Dojo</div> <div>939 W Camelback Rd</div> <div>Phoenix, AZ 85013</div> </address> <div class="mt-3 space-y-1 text-sm"> <p>
Phone:
<a href="tel:16022668321" class="font-semibold text-violet-300 hover:text-violet-200">
602-266-8321
</a> </p> <p>
Email:
<a href="mailto:Contact@AZAikido.org" class="font-semibold text-violet-300 hover:text-violet-200 break-all">
Contact@AZAikido.org
</a> </p> </div> <p class="mt-3 text-xs text-slate-400">
Mailing address for correspondence is different from the dojo location. See the
<a href="/contact" class="text-violet-300 hover:text-violet-200 underline underline-offset-2">
Contact
</a>
page for mailing details.
</p> <a href="https://www.google.com/maps?q=939+W+Camelback+Rd,+Phoenix,+AZ+85013" target="_blank" rel="noreferrer" class="mt-3 inline-flex text-xs font-semibold text-violet-300 hover:text-violet-200 underline underline-offset-4">
Open in Google Maps
</a> </div> <!-- Map embed --> <div class="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"> <iframe title="Map to Arizona Aikido" src="https://www.google.com/maps?q=939+W+Camelback+Rd,+Phoenix,+AZ+85013&output=embed" loading="lazy" class="h-64 sm:h-72 w-full" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </section> <!-- Transit & parking info --> <section class="space-y-4"> <h2 class="text-lg font-semibold text-slate-50">Getting there</h2> <div class="grid gap-4 md:grid-cols-3"> <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2"> <h3 class="text-sm font-semibold text-slate-100">By car</h3> <p class="text-xs md:text-sm text-slate-300">
The dojo is on the south side of West Camelback Road, just east of the 11th Avenue
            traffic light. There is parking available at the dojo and on nearby streets.
</p> </div> <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2"> <h3 class="text-sm font-semibold text-slate-100">By light rail</h3> <p class="text-xs md:text-sm text-slate-300">
Take the Valley Metro light rail to the
<span class="font-semibold">7th Avenue</span>
station. From there, walk west along Camelback Road to the dojo at 939 W Camelback Rd.
</p> </div> <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2"> <h3 class="text-sm font-semibold text-slate-100">From the airport</h3> <p class="text-xs md:text-sm text-slate-300">
From Phoenix Sky Harbor Airport, use the Sky Train connection to the light rail, then
            ride to the 7th Avenue station and walk west to the dojo.
</p> </div> </div> </section> </section> ` })}`;
}, "D:/Work/AZ-Aikido/src/pages/directions.astro", void 0);

const $$file = "D:/Work/AZ-Aikido/src/pages/directions.astro";
const $$url = "/directions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Directions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
