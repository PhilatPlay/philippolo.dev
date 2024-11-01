import { j as e } from './index-30b3ec0c.js';
import { t as n } from './index-a6761604.js';
const o = () =>
  e.jsx(e.Fragment, {
    children: e.jsx('div', {
      className: 'flex justify-center gap-7 w-[90%] flex-wrap mx-auto',
      children: n.map((t, r) =>
        e.jsxs(
          'div',
          {
            onContextMenu: (s) => s.preventDefault(),
            className:
              'group cursor-pointer hover:-translate-y-2 hover:rotate-[360deg] duration-200 w-[150px] h-[150px] relative flex  rounded-full  flex-col items-center justify-center p-[2px]',
            children: [
              e.jsx('div', {
                className:
                  'h-[98%] text-white flex justify-center items-center  rounded-full z-[1] w-[98%] bg-primary',
                children: e.jsxs('div', {
                  className: '',
                  children: [
                    e.jsx('h1', {
                      className: 'font-bold text-center',
                      children: t.name,
                    }),
                    e.jsx('img', {
                      src: t.img,
                      className: 'w-20 h-20',
                      alt: t.name,
                    }),
                  ],
                }),
              }),
              e.jsx('div', {
                className:
                  'green-pink-gradient group-hover:animate-spin absolute inset-0 z-0 rounded-full',
              }),
            ],
          },
          `technology-${r}`,
        ),
      ),
    }),
  });
export { o as default };
