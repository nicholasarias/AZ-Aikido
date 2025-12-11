import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B4bjZISI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_VpPS_4r8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Makino = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "title": "Arizona Aikido \u2013 Yon Makino Sensei" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="border-b border-slate-800 bg-slate-950/90"> <div class="mx-auto max-w-4xl px-4 py-8 md:py-12 flex flex-col gap-6 md:flex-row"> <img src="https://azaikido.org/userimages//20150415002.gif" alt="Yon Makino Sensei" class="h-48 w-48 md:h-56 md:w-56 rounded-2xl object-cover border border-slate-800"> <div> <p class="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
Senior instructor
</p> <h1 class="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
Yon Makino Sensei
</h1> <p class="mt-3 text-sm md:text-base text-slate-300">
Long-time Aikido practitioner whose path has taken him through several countries before
          settling at Arizona Aikido as a senior instructor.
</p> </div> </div> </section>  <section class="mx-auto max-w-4xl px-4 py-10 md:py-12 space-y-8 text-sm md:text-base text-slate-200"> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Early training</h2> <p>
According to his original biography, Makino first encountered Aikido as a junior high
        school student in a community college class. That early experience sparked an interest that
        carried through the rest of his life.
</p> </section> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Training abroad</h2> <p>
Over the years he has trained in multiple dojos and countries, including time outside the
        United States. That variety of experience gives him a broad perspective on both technique
        and dojo culture.
</p> <p>
Eventually he made Arizona Aikido his home dojo and became one of its senior instructors.
</p> </section> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Teaching at Arizona Aikido</h2> <p>
At Arizona Aikido, Makino Sensei teaches classes, participates in seminars, and often helps
        lead training at events such as camps and regional workshops.
</p> <p>
Students know him for clear explanations and for encouraging relaxed but committed practice.
</p> </section> </section> ` })}`;
}, "D:/Work/AZ-Aikido/src/pages/biography/makino.astro", void 0);

const $$file = "D:/Work/AZ-Aikido/src/pages/biography/makino.astro";
const $$url = "/biography/makino";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Makino,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
