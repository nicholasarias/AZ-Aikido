import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B4bjZISI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_VpPS_4r8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Sakakibara = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "title": "Arizona Aikido \u2013 Tsuneji \u201CTony\u201D Sakakibara Sensei" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="border-b border-slate-800 bg-slate-950/90"> <div class="mx-auto max-w-4xl px-4 py-8 md:py-12 flex flex-col gap-6 md:flex-row"> <img src="https://azaikido.org/userimages//20070525001.jpg" alt="Tsuneji &quot;Tony&quot; Sakakibara Sensei" class="h-48 w-48 md:h-56 md:w-56 rounded-2xl object-cover border border-slate-800"> <div> <p class="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
Chief Instructor & Chief Instructor Emeritus
</p> <h1 class="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
Tsuneji “Tony” Sakakibara Sensei
</h1> <p class="mt-3 text-sm md:text-base text-slate-300">
Long-time Chief Instructor of Arizona Aikido whose leadership carried the dojo forward
          after the passing of its founder.
</p> </div> </div> </section>  <section class="mx-auto max-w-4xl px-4 py-10 md:py-12 space-y-8 text-sm md:text-base text-slate-200"> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Early life and martial arts</h2> <p>
Tsuneji “Tony” Sakakibara was born in Handa, Japan, and grew up in a large family. Before
        he began Aikido he spent many years practicing Judo, developing strong throwing skills and
        a deep familiarity with falling and body movement.
</p> </section> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Training with Takagi Sensei</h2> <p>
He started Aikido training under Jon Takagi Sensei at Arizona Aikikai in 1968. His Judo
        background gave him a solid base, and he progressed to dan rank under Takagi and other
        senior instructors.
</p> <p>
Over time he became one of the dojo’s most senior students and took on greater teaching and
        leadership responsibilities.
</p> </section> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Chief Instructor of Arizona Aikido</h2> <p>
After Takagi Sensei’s death, Sakakibara Sensei stepped into the role of Chief Instructor,
        helping keep the dojo together during a difficult period. He guided Arizona Aikido through
        changes in affiliation and helped reconnect it with both Aikikai Hombu Dojo and Aikido
        Schools of Ueshiba.
</p> <p>
Even after other instructors began teaching more classes, he continued as Chief Instructor
        Emeritus and remained an important presence on the mat and in the community.
</p> </section> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Legacy</h2> <p>
Students remember him for his direct teaching style, his sense of humor, and his emphasis
        on serious, committed practice. His influence can still be seen in how classes are taught
        and how the dojo approaches training and community.
</p> </section> </section> ` })}`;
}, "D:/Work/AZ-Aikido/src/pages/biography/sakakibara.astro", void 0);

const $$file = "D:/Work/AZ-Aikido/src/pages/biography/sakakibara.astro";
const $$url = "/biography/sakakibara";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sakakibara,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
