import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B4bjZISI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_VpPS_4r8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Takagi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "title": "Arizona Aikido \u2013 Jon Mamoru Takagi Sensei" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="border-b border-slate-800 bg-slate-950/90"> <div class="mx-auto max-w-4xl px-4 py-8 md:py-12 flex flex-col gap-6 md:flex-row"> <img src="https://azaikido.org/userimages//20070525002.jpg" alt="Jon Mamoru Takagi Sensei" class="h-48 w-48 md:h-56 md:w-56 rounded-2xl object-cover border border-slate-800"> <div> <p class="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
Founder
</p> <h1 class="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
Jon Mamoru Takagi Sensei
</h1> <p class="mt-3 text-sm md:text-base text-slate-300">
Founder of Arizona Aikikai and a pioneer of Aikido in the United States whose teaching
          shaped the art in Arizona and beyond.
</p> </div> </div> </section>  <section class="mx-auto max-w-4xl px-4 py-10 md:py-12 space-y-8 text-sm md:text-base text-slate-200"> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Early life</h2> <p>
Jon Mamoru Takagi was born in Honolulu, Hawaii, in 1942 and grew up in the Kaimuki
        neighborhood in a Japanese American family. As a teenager he was drawn to Aikido as a way
        to build confidence and to connect mind and body.
</p> <p>
He began training Aikido in Honolulu in the late 1950s and soon became deeply committed to
        the art, continuing to practice even as he moved to the mainland United States.
</p> </section> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Aikido journey</h2> <p>
In the 1960s Takagi traveled across the United States, training at dojos including New York
        Aikikai and meeting a number of senior teachers. Those experiences helped shape his
        understanding of Aikido and its different approaches.
</p> <p>
He eventually settled in Arizona and began teaching in Phoenix, sharing what he had learned
        with a growing group of students.
</p> </section> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Founding Arizona Aikikai</h2> <p>
In 1968 he founded Arizona Aikikai in Phoenix, the dojo that would become the root of
        Arizona Aikido. He taught not only at the dojo but also in college and community programs,
        introducing many people in Arizona to Aikido for the first time.
</p> <p>
The dojo became a training center for students from around the region and hosted seminars
        with visiting teachers, strengthening Arizona’s connection to the larger Aikido
        community.
</p> </section> <section class="space-y-3"> <h2 class="text-lg font-semibold text-slate-50">Legacy</h2> <p>
Takagi Sensei died in 1984 after being struck by a drunk driver while cycling. His death
        was a tremendous loss, but the dojo he founded continued under the leadership of his
        senior students.
</p> <p>
His influence is still felt in the training culture, stories, and traditions of Arizona
        Aikido, and in the many students and instructors who trace their Aikido back to his work
        in Phoenix.
</p> </section> </section> ` })}`;
}, "D:/Work/AZ-Aikido/src/pages/biography/takagi.astro", void 0);

const $$file = "D:/Work/AZ-Aikido/src/pages/biography/takagi.astro";
const $$url = "/biography/takagi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Takagi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
