import { R as i, j as a, s as c } from './index-30b3ec0c.js';
import { m as b } from './motion-9b2b190c.js';
var x = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
},
    u = i.createContext && i.createContext(x),
    s =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (s =
                    Object.assign ||
                    function (e) {
                        for (var r, t = 1, n = arguments.length; t < n; t++) {
                            r = arguments[t];
                            for (var l in r)
                                Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l]);
                        }
                        return e;
                    }),
                s.apply(this, arguments)
            );
        },
    v =
        (globalThis && globalThis.__rest) ||
        function (e, r) {
            var t = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                    r.indexOf(n) < 0 &&
                    (t[n] = e[n]);
            if (e != null && typeof Object.getOwnPropertySymbols == 'function')
                for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    r.indexOf(n[l]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
                        (t[n[l]] = e[n[l]]);
            return t;
        };
function h(e) {
    return (
        e &&
        e.map(function (r, t) {
            return i.createElement(r.tag, s({ key: t }, r.attr), h(r.child));
        })
    );
}
function g(e) {
    return function (r) {
        return i.createElement(j, s({ attr: s({}, e.attr) }, r), h(e.child));
    };
}
function j(e) {
    var r = function (t) {
        var n = e.attr,
            l = e.size,
            d = e.title,
            f = v(e, ['attr', 'size', 'title']),
            m = l || t.size || '1em',
            o;
        return (
            t.className && (o = t.className),
            e.className && (o = (o ? o + ' ' : '') + e.className),
            i.createElement(
                'svg',
                s(
                    { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
                    t.attr,
                    n,
                    f,
                    {
                        className: o,
                        style: s(s({ color: e.color || t.color }, t.style), e.style),
                        height: m,
                        width: m,
                        xmlns: 'http://www.w3.org/2000/svg',
                    },
                ),
                d && i.createElement('title', null, d),
                e.children,
            )
        );
    };
    return u !== void 0
        ? i.createElement(u.Consumer, null, function (t) {
            return r(t);
        })
        : r(x);
}
function y(e) {
    return g({
        tag: 'svg',
        attr: { viewBox: '0 0 1024 1024' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z',
                },
            },
        ],
    })(e);
}
const N = () => {
    const e = () => {
        window.scrollTo(0, 1e3);
    };
    return a.jsxs('section', {
        className: 'relative w-full h-screen mx-auto',
        children: [
            a.jsxs('div', {
                className: `absolute inset-0 top-[120px]  max-w-7xl mx-auto ${c.paddingX} flex flex-row items-start gap-5`,
                children: [
                    a.jsxs('div', {
                        className: 'flex flex-col justify-center items-center mt-5',
                        children: [
                            a.jsx('div', { className: 'w-5 h-5 rounded-full bg-[#915EFF]' }),
                            a.jsx('div', { className: 'w-1 sm:h-80 h-40 violet-gradient' }),
                        ],
                    }),
                    a.jsxs('div', {
                        children: [
                            a.jsxs('h1', {
                                className: `${c.heroHeadText} animate__bounce animate__animated text-white`,
                                children: [
                                    "Hi, I'm ",
                                    a.jsx('span', {
                                        className: 'text-[#915EFF]',
                                        children: 'Philip Polo',
                                    }),
                                ],
                            }),
                            a.jsxs('p', {
                                className: `${c.heroSubText} mt-2 animate__tada  text-white-100`,
                                children: [
                                    'I build full stack applications ',
                                    a.jsx('br', { className: 'sm:block hidden' }),
                                    ' with dynamic user interfaces.',
                                ],
                            }),
                            //   a.jsx('div', {
                            //     className: 'mt-10',
                            //     children: a.jsxs('button', {
                            //       className: `bg-transparent\r
                            //               border inline-flex items-center rounded-lg hover:bg-[#915EFF] duration-150 text-white font-bold gap-3 px-5 py-2 border-[#915EFF]`,
                            //       children: [
                            //         'Download CV ',
                            //         a.jsx(y, { className: 'text-2xl' }),
                            //       ],
                            //     }),
                            //   }),
                        ],
                    }),
                ],
            }),
            a.jsx('div', {
                id: 'about',
                className:
                    'absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center',
                children: a.jsx('a', {
                    href: '#about',
                    onClick: e,
                    children: a.jsx('div', {
                        className:
                            'w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2',
                        children: a.jsx(b.div, {
                            animate: { y: [0, 24, 0] },
                            transition: { duration: 1.5, repeat: 1 / 0, repeatType: 'loop' },
                            className: 'w-3 h-3 rounded-full bg-secondary mb-1',
                        }),
                    }),
                }),
            }),
        ],
    });
};
export { N as default };
