import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_5HlnIKrw.mjs';
import { manifest } from './manifest_B0nzM4Wy.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/biography/crawford.astro.mjs');
const _page3 = () => import('./pages/biography/haines.astro.mjs');
const _page4 = () => import('./pages/biography/makino.astro.mjs');
const _page5 = () => import('./pages/biography/sakakibara.astro.mjs');
const _page6 = () => import('./pages/biography/takagi.astro.mjs');
const _page7 = () => import('./pages/biography.astro.mjs');
const _page8 = () => import('./pages/calendar.astro.mjs');
const _page9 = () => import('./pages/contact.astro.mjs');
const _page10 = () => import('./pages/cost.astro.mjs');
const _page11 = () => import('./pages/demo.astro.mjs');
const _page12 = () => import('./pages/directions.astro.mjs');
const _page13 = () => import('./pages/gallery.astro.mjs');
const _page14 = () => import('./pages/links.astro.mjs');
const _page15 = () => import('./pages/new-students.astro.mjs');
const _page16 = () => import('./pages/news.astro.mjs');
const _page17 = () => import('./pages/schedule.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/biography/crawford.astro", _page2],
    ["src/pages/biography/haines.astro", _page3],
    ["src/pages/biography/makino.astro", _page4],
    ["src/pages/biography/sakakibara.astro", _page5],
    ["src/pages/biography/takagi.astro", _page6],
    ["src/pages/biography/index.astro", _page7],
    ["src/pages/calendar.astro", _page8],
    ["src/pages/contact.astro", _page9],
    ["src/pages/cost.astro", _page10],
    ["src/pages/demo.astro", _page11],
    ["src/pages/directions.astro", _page12],
    ["src/pages/gallery.astro", _page13],
    ["src/pages/links.astro", _page14],
    ["src/pages/new-students.astro", _page15],
    ["src/pages/news.astro", _page16],
    ["src/pages/schedule.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6c013643-e8f4-4bc4-ba9f-39feb20e26d7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
