import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B4bjZISI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_VpPS_4r8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Haines = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "title": "Arizona Aikido \u2013 Tom Haines Sensei" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="border-b border-slate-800 bg-slate-950/90"> <div class="mx-auto max-w-4xl px-4 py-8 md:py-12 flex flex-col gap-6 md:flex-row"> <img src="https://azaikido.org/userimages//20070708001.jpg" alt="Tom Haines Sensei" class="h-48 w-48 md:h-56 md:w-56 rounded-2xl object-cover border border-slate-800"> <div> <p class="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
President & Chief Instructor
</p> <h1 class="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
Tom Haines Sensei
</h1> <p class="mt-3 text-sm md:text-base text-slate-300">
Long-time Arizona Aikido instructor who began training in the 1970s and now serves as
          President and Chief Instructor of the dojo.
</p> </div> </div> </section>  <section class="mx-auto max-w-4xl px-4 py-10 md:py-12 space-y-8 text-sm md:text-base text-slate-200"> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Beginning training</h2> <p>
Tom Haines began Aikido training at Arizona Aikikai in the early 1970s. He earned his first
        black belt from Jon Takagi Sensei and continued to train through several major shifts in
        Aikido organizations.
</p> </section> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Teachers and ranks</h2> <p>
Over the years he trained with instructors such as Jon Takagi, Fumio Toyoda, TK Chiba, and
        Mitsugi Saotome, receiving dan rankings through Aikido Association of America, the United
        States Aikido Federation, and Aikido Schools of Ueshiba.
</p> <p>
This varied background informs the way he presents Aikido, connecting Arizona Aikido’s
        history with its present affiliation.
</p> </section> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Role at Arizona Aikido</h2> <p>
Haines Sensei has served the dojo not only as an instructor but also as an officer and
        leader, and he is currently President and Chief Instructor. He teaches regular classes,
        organizes seminars, and represents the dojo at events and demonstrations.
</p> </section> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Teaching approach</h2> <p>
Students often describe his teaching as clear, precise, and grounded in the principles
        passed down from his teachers, with attention both to martial effectiveness and to Aikido
        as a lifelong practice.
</p> </section> </section> ` })}`;
}, "D:/Work/AZ-Aikido/src/pages/biography/haines.astro", void 0);

const $$file = "D:/Work/AZ-Aikido/src/pages/biography/haines.astro";
const $$url = "/biography/haines";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Haines,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
