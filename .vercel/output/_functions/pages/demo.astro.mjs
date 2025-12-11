import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_B4bjZISI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_VpPS_4r8.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Demo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "data-astro-cid-prwxh6m4": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="water-background" style="opacity: 0;" data-astro-cid-prwxh6m4></div>  <div class="main-content" data-astro-cid-prwxh6m4> ${renderTemplate`<p class="bg-blue-800 p-4 text-white" data-astro-cid-prwxh6m4>**The Cheese is Meat**</p>` } </div> ${renderScript($$result2, "D:/Work/AZ-Aikido/src/pages/demo.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "D:/Work/AZ-Aikido/src/pages/demo.astro", void 0);

const $$file = "D:/Work/AZ-Aikido/src/pages/demo.astro";
const $$url = "/demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Demo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
