import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_B4bjZISI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_VpPS_4r8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const instructors = [
    {
      name: "Jon Mamoru Takagi",
      role: "Founder of Arizona Aikido",
      href: "/biography/takagi",
      img: "https://azaikido.org/userimages/20131011001.jpg",
      position: "50% 50%"
    },
    {
      name: "Tsuneji Sakakibara",
      role: "Senior teacher and technical advisor",
      href: "/biography/sakakibara",
      img: "https://azaikido.org/userimages/20130723001.jpg",
      position: "50% 15%"
    },
    {
      name: "Yon Makino",
      role: "Senior instructor",
      href: "/biography/makino",
      img: "https://azaikido.org/userimages//20150415002.gif",
      position: "50% 25%"
    },
    {
      name: "Tom Haines",
      role: "Chief instructor and leader",
      href: "/biography/haines",
      img: "https://azaikido.org/userimages//20070708001.jpg",
      position: "50% 10%"
    },
    {
      name: "Don Crawford",
      role: "Instructor and past president",
      href: "/biography/crawford",
      img: "https://azaikido.org/userimages/20071021001.jpg",
      position: "50% 15%"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "title": "Arizona Aikido \u2013 Teachers and Biographies" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="border-b border-slate-800 bg-slate-950/90"> <div class="mx-auto max-w-6xl px-4 py-8 md:py-10"> <h1 class="text-2xl md:text-3xl font-semibold text-slate-50">
Teachers and history
</h1> <p class="mt-3 text-sm md:text-base text-slate-300 max-w-3xl">
Arizona Aikido stands on the work of many instructors and senior
        students. The people below represent key figures in the dojo’s
        lineage and leadership. Tap or click a card to read the full
        biography.
</p> </div> </section>  <section class="mx-auto max-w-6xl px-4 py-8 md:py-12 space-y-8"> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${instructors.map((person) => renderTemplate`<a${addAttribute(person.href, "href")} class="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80"> <div class="h-56 sm:h-60 w-full overflow-hidden bg-slate-900"> <img${addAttribute(person.img, "src")}${addAttribute(person.name, "alt")} loading="lazy" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"${addAttribute(`object-position: ${person.position};`, "style")}> </div> <div class="px-4 py-3 space-y-1"> <h2 class="text-sm font-semibold text-slate-50"> ${person.name} </h2> <p class="text-[11px] text-slate-400"> ${person.role} </p> <p class="text-[11px] text-violet-300 group-hover:text-violet-200">
Read full biography →
</p> </div> </a>`)} </div> <p class="text-xs text-slate-400">
Additional historical photos and context are available in the
<a href="/gallery#historical" class="text-violet-300 hover:text-violet-200 underline underline-offset-4">
historical image gallery
</a>.
</p> </section> ` })}`;
}, "D:/Work/AZ-Aikido/src/pages/biography/index.astro", void 0);

const $$file = "D:/Work/AZ-Aikido/src/pages/biography/index.astro";
const $$url = "/biography";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
