import { r as v, g as Q, j as u, s as D } from './index-30b3ec0c.js';
var E = {},
  W = { exports: {} },
  X = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Y = X,
  G = Y;
function A() { }
function q() { }
q.resetWarningCache = A;
var Z = function () {
  function e(o, t, r, c, a, s) {
    if (s !== G) {
      var d = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((d.name = 'Invariant Violation'), d);
    }
  }
  e.isRequired = e;
  function n() {
    return e;
  }
  var i = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: n,
    element: e,
    elementType: e,
    instanceOf: n,
    node: e,
    objectOf: n,
    oneOf: n,
    oneOfType: n,
    shape: n,
    exact: n,
    checkPropTypes: q,
    resetWarningCache: A,
  };
  return (i.PropTypes = i), i;
};
W.exports = Z();
var B = W.exports,
  U = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var n = {}.hasOwnProperty;
    function i() {
      for (var o = [], t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        if (r) {
          var c = typeof r;
          if (c === 'string' || c === 'number') o.push(r);
          else if (Array.isArray(r)) {
            if (r.length) {
              var a = i.apply(null, r);
              a && o.push(a);
            }
          } else if (c === 'object') {
            if (
              r.toString !== Object.prototype.toString &&
              !r.toString.toString().includes('[native code]')
            ) {
              o.push(r.toString());
              continue;
            }
            for (var s in r) n.call(r, s) && r[s] && o.push(s);
          }
        }
      }
      return o.join(' ');
    }
    e.exports ? ((i.default = i), (e.exports = i)) : (window.classNames = i);
  })();
})(U);
var J = U.exports;
E.__esModule = !0;
E.default = void 0;
var ee = R(v),
  m = R(B),
  te = R(J);
function R(e) {
  return e && e.__esModule ? e : { default: e };
}
const L = ({
  animate: e = !0,
  className: n = '',
  layout: i = '2-columns',
  lineColor: o = '#FFF',
  children: t,
}) => (
  typeof window == 'object' &&
  document.documentElement.style.setProperty('--line-color', o),
  ee.default.createElement(
    'div',
    {
      className: (0, te.default)(n, 'vertical-timeline', {
        'vertical-timeline--animate': e,
        'vertical-timeline--two-columns': i === '2-columns',
        'vertical-timeline--one-column-left':
          i === '1-column' || i === '1-column-left',
        'vertical-timeline--one-column-right': i === '1-column-right',
      }),
    },
    t,
  )
);
L.propTypes = {
  children: m.default.oneOfType([
    m.default.arrayOf(m.default.node),
    m.default.node,
  ]).isRequired,
  className: m.default.string,
  animate: m.default.bool,
  layout: m.default.oneOf([
    '1-column-left',
    '1-column',
    '2-columns',
    '1-column-right',
  ]),
  lineColor: m.default.string,
};
var ne = L;
E.default = ne;
var N = {};
function j() {
  return (
    (j =
      Object.assign ||
      function (e) {
        for (var n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          for (var o in i)
            Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
        }
        return e;
      }),
    j.apply(this, arguments)
  );
}
function ie(e, n) {
  (e.prototype = Object.create(n.prototype)),
    (e.prototype.constructor = e),
    I(e, n);
}
function I(e, n) {
  return (
    (I =
      Object.setPrototypeOf ||
      function (o, t) {
        return (o.__proto__ = t), o;
      }),
    I(e, n)
  );
}
function re(e, n) {
  if (e == null) return {};
  var i = {},
    o = Object.keys(e),
    t,
    r;
  for (r = 0; r < o.length; r++)
    (t = o[r]), !(n.indexOf(t) >= 0) && (i[t] = e[t]);
  return i;
}
var S = new Map(),
  x = new WeakMap(),
  $ = 0,
  H = void 0;
function oe(e) {
  H = e;
}
function ae(e) {
  return e ? (x.has(e) || (($ += 1), x.set(e, $.toString())), x.get(e)) : '0';
}
function se(e) {
  return Object.keys(e)
    .sort()
    .filter(function (n) {
      return e[n] !== void 0;
    })
    .map(function (n) {
      return n + '_' + (n === 'root' ? ae(e.root) : e[n]);
    })
    .toString();
}
function le(e) {
  var n = se(e),
    i = S.get(n);
  if (!i) {
    var o = new Map(),
      t,
      r = new IntersectionObserver(function (c) {
        c.forEach(function (a) {
          var s,
            d =
              a.isIntersecting &&
              t.some(function (p) {
                return a.intersectionRatio >= p;
              });
          e.trackVisibility && typeof a.isVisible > 'u' && (a.isVisible = d),
            (s = o.get(a.target)) == null ||
            s.forEach(function (p) {
              p(d, a);
            });
        });
      }, e);
    (t =
      r.thresholds ||
      (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
      (i = { id: n, observer: r, elements: o }),
      S.set(n, i);
  }
  return i;
}
function C(e, n, i, o) {
  if (
    (i === void 0 && (i = {}),
      o === void 0 && (o = H),
      typeof window.IntersectionObserver > 'u' && o !== void 0)
  ) {
    var t = e.getBoundingClientRect();
    return (
      n(o, {
        isIntersecting: o,
        target: e,
        intersectionRatio: typeof i.threshold == 'number' ? i.threshold : 0,
        time: 0,
        boundingClientRect: t,
        intersectionRect: t,
        rootBounds: t,
      }),
      function () { }
    );
  }
  var r = le(i),
    c = r.id,
    a = r.observer,
    s = r.elements,
    d = s.get(e) || [];
  return (
    s.has(e) || s.set(e, d),
    d.push(n),
    a.observe(e),
    function () {
      d.splice(d.indexOf(n), 1),
        d.length === 0 && (s.delete(e), a.unobserve(e)),
        s.size === 0 && (a.disconnect(), S.delete(c));
    }
  );
}
var ce = [
  'children',
  'as',
  'triggerOnce',
  'threshold',
  'root',
  'rootMargin',
  'onChange',
  'skip',
  'trackVisibility',
  'delay',
  'initialInView',
  'fallbackInView',
];
function F(e) {
  return typeof e.children != 'function';
}
var V = (function (e) {
  ie(n, e);
  function n(o) {
    var t;
    return (
      (t = e.call(this, o) || this),
      (t.node = null),
      (t._unobserveCb = null),
      (t.handleNode = function (r) {
        t.node &&
          (t.unobserve(),
            !r &&
            !t.props.triggerOnce &&
            !t.props.skip &&
            t.setState({ inView: !!t.props.initialInView, entry: void 0 })),
          (t.node = r || null),
          t.observeNode();
      }),
      (t.handleChange = function (r, c) {
        r && t.props.triggerOnce && t.unobserve(),
          F(t.props) || t.setState({ inView: r, entry: c }),
          t.props.onChange && t.props.onChange(r, c);
      }),
      (t.state = { inView: !!o.initialInView, entry: void 0 }),
      t
    );
  }
  var i = n.prototype;
  return (
    (i.componentDidUpdate = function (t) {
      (t.rootMargin !== this.props.rootMargin ||
        t.root !== this.props.root ||
        t.threshold !== this.props.threshold ||
        t.skip !== this.props.skip ||
        t.trackVisibility !== this.props.trackVisibility ||
        t.delay !== this.props.delay) &&
        (this.unobserve(), this.observeNode());
    }),
    (i.componentWillUnmount = function () {
      this.unobserve(), (this.node = null);
    }),
    (i.observeNode = function () {
      if (!(!this.node || this.props.skip)) {
        var t = this.props,
          r = t.threshold,
          c = t.root,
          a = t.rootMargin,
          s = t.trackVisibility,
          d = t.delay,
          p = t.fallbackInView;
        this._unobserveCb = C(
          this.node,
          this.handleChange,
          {
            threshold: r,
            root: c,
            rootMargin: a,
            trackVisibility: s,
            delay: d,
          },
          p,
        );
      }
    }),
    (i.unobserve = function () {
      this._unobserveCb && (this._unobserveCb(), (this._unobserveCb = null));
    }),
    (i.render = function () {
      if (!F(this.props)) {
        var t = this.state,
          r = t.inView,
          c = t.entry;
        return this.props.children({
          inView: r,
          entry: c,
          ref: this.handleNode,
        });
      }
      var a = this.props,
        s = a.children,
        d = a.as,
        p = re(a, ce);
      return v.createElement(d || 'div', j({ ref: this.handleNode }, p), s);
    }),
    n
  );
})(v.Component);
V.displayName = 'InView';
V.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 };
function de(e) {
  var n = e === void 0 ? {} : e,
    i = n.threshold,
    o = n.delay,
    t = n.trackVisibility,
    r = n.rootMargin,
    c = n.root,
    a = n.triggerOnce,
    s = n.skip,
    d = n.initialInView,
    p = n.fallbackInView,
    h = v.useRef(),
    b = v.useState({ inView: !!d }),
    w = b[0],
    _ = b[1],
    k = v.useCallback(
      function (y) {
        h.current !== void 0 && (h.current(), (h.current = void 0)),
          !s &&
          y &&
          (h.current = C(
            y,
            function (T, P) {
              _({ inView: T, entry: P }),
                P.isIntersecting &&
                a &&
                h.current &&
                (h.current(), (h.current = void 0));
            },
            {
              root: c,
              rootMargin: r,
              threshold: i,
              trackVisibility: t,
              delay: o,
            },
            p,
          ));
      },
      [Array.isArray(i) ? i.toString() : i, c, r, a, s, t, p, o],
    );
  v.useEffect(function () {
    !h.current && w.entry && !a && !s && _({ inView: !!d });
  });
  var f = [k, w.inView, w.entry];
  return (f.ref = f[0]), (f.inView = f[1]), (f.entry = f[2]), f;
}
const ue = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      InView: V,
      default: V,
      defaultFallbackInView: oe,
      observe: C,
      useInView: de,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
),
  pe = Q(ue);
N.__esModule = !0;
N.default = void 0;
var g = M(v),
  l = M(B),
  O = M(J),
  fe = pe;
function M(e) {
  return e && e.__esModule ? e : { default: e };
}
const z = ({
  children: e = '',
  className: n = '',
  contentArrowStyle: i = null,
  contentStyle: o = null,
  date: t = '',
  dateClassName: r = '',
  icon: c = null,
  iconClassName: a = '',
  iconOnClick: s = null,
  onTimelineElementClick: d = null,
  iconStyle: p = null,
  id: h = '',
  position: b = '',
  style: w = null,
  textClassName: _ = '',
  intersectionObserverProps: k = {
    rootMargin: '0px 0px -40px 0px',
    triggerOnce: !0,
  },
  visible: f = !1,
}) =>
  g.default.createElement(fe.InView, k, ({ inView: y, ref: T }) =>
    g.default.createElement(
      'div',
      {
        ref: T,
        id: h,
        className: (0, O.default)(n, 'vertical-timeline-element', {
          'vertical-timeline-element--left': b === 'left',
          'vertical-timeline-element--right': b === 'right',
          'vertical-timeline-element--no-children': e === '',
        }),
        style: w,
      },
      g.default.createElement(
        g.default.Fragment,
        null,
        g.default.createElement(
          'span',
          {
            style: p,
            onClick: s,
            className: (0, O.default)(a, 'vertical-timeline-element-icon', {
              'bounce-in': y || f,
              'is-hidden': !(y || f),
            }),
          },
          c,
        ),
        g.default.createElement(
          'div',
          {
            style: o,
            onClick: d,
            className: (0, O.default)(_, 'vertical-timeline-element-content', {
              'bounce-in': y || f,
              'is-hidden': !(y || f),
            }),
          },
          g.default.createElement('div', {
            style: i,
            className: 'vertical-timeline-element-content-arrow',
          }),
          e,
          g.default.createElement(
            'span',
            { className: (0, O.default)(r, 'vertical-timeline-element-date') },
            t,
          ),
        ),
      ),
    ),
  );
z.propTypes = {
  children: l.default.oneOfType([
    l.default.arrayOf(l.default.node),
    l.default.node,
  ]),
  className: l.default.string,
  contentArrowStyle: l.default.shape({}),
  contentStyle: l.default.shape({}),
  date: l.default.node,
  dateClassName: l.default.string,
  icon: l.default.element,
  iconClassName: l.default.string,
  iconStyle: l.default.shape({}),
  iconOnClick: l.default.func,
  onTimelineElementClick: l.default.func,
  id: l.default.string,
  position: l.default.string,
  style: l.default.shape({}),
  textClassName: l.default.string,
  visible: l.default.bool,
  intersectionObserverProps: l.default.shape({
    root: l.default.object,
    rootMargin: l.default.string,
    threshold: l.default.number,
    triggerOnce: l.default.bool,
  }),
};
var he = z;
N.default = he;
var K = { VerticalTimeline: E.default, VerticalTimelineElement: N.default };
const me = ({ experience: e }) =>
  u.jsxs(K.VerticalTimelineElement, {
    contentStyle: { background: '#1d1836', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid  #232631' },
    date: e.date,
    iconStyle: { background: e.iconBg },
    icon: u.jsx('div', {
      className: 'flex justify-center items-center w-full h-full',
      children: u.jsx('img', {
        src: e.icon,
        alt: e.company_name,
        className: 'w-[60%] h-[60%] object-contain',
      }),
    }),
    children: [
      u.jsxs('div', {
        children: [
          u.jsx('h3', {
            className: 'text-white text-[24px] font-bold',
            children: e.title,
          }),
          u.jsx('p', {
            className: 'text-secondary text-[16px] font-semibold',
            style: { margin: 0 },
            children: e.company_name,
          }),
        ],
      }),
      u.jsx('ul', {
        className: 'mt-5 list-disc ml-5 space-y-2',
        children: e.points.map((n, i) =>
          u.jsx(
            'li',
            {
              className: 'text-white-100 text-[14px] pl-1 tracking-wider',
              children: n,
            },
            `experience-point-${i}`,
          ),
        ),
      }),
    ],
  }),
  ge = [
    {
      title: 'Full Stack Devloper',
      company_name: 'Revature - bankapp & followEm',
      icon: 'assets/images/eng.png',
      iconBg: '#383E56',
      date: '2021',
      points: [
        'Developed and maintained web applications using Java with both React and Angular along with other related technologies.',
        'Implemented responsive design, ensuring cross-browser compatibility.',
        'Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
        'Participated in code reviews and provided constructive feedback to other developers.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company_name: 'Infosys - Burlington Northern Santa Fe Railway',
      icon: 'assets/images/chatbot.png',
      iconBg: '#E6DEDD',
      date: '2021 - 2023',
      points: [
        'Developed RESTful APIs using Java and the Spring framework, optimizing backend services and ensuring secure, efficient data handling.',
        'Integrated front-end applications built with Angular, improving the user experience and responsiveness of internal tools.',
        '⦁	Managed database operations using SQL with DB2, enhancing data retrieval speed and reliability.',
        '⦁	Implemented CI/CD pipelines with Maven, Gradle, and Jenkins, ensuring high-quality code and seamless deployments.',
        '⦁	Conducted unit and integration testing with JUnit and Mockito, delivering a reliable, well-tested application.',
        '⦁	Collaborated in Agile teams to deliver features on time, maintaining high standards for code scalability and performance.',
      ],
    },
    {
      title: 'Architect - Lead Developer',
      company_name: 'dropLogik & fundThePatriots',
      icon: 'assets/images/build.png',
      iconBg: '#383E56',
      date: '2024',
      points: [
        'Developed RESTful APIs using NodeJS and Express, optimizing backend services and ensuring secure, efficient data handling.',
        'Integrated front-end applications built with JavaScript/"Fund the Patriots" and React/"dropLogik", improving the user experience and responsiveness of internal tools.',
        '⦁	Managed database operations using NoSQL with MongoDB, enhancing data retrieval speed and reliability.',
        '⦁	Implemented CI/CD pipelines with Red Hat, ensuring high-quality code and seamless deployments.',
        '⦁	Currently conducting unit and integration testing with Jest and MochaJS, ensuring the delivery of reliable, well-tested application.',
        '⦁	Utilized an Agile environment to deliver features on time, maintaining high standards for code scalability and performance.',
      ],
    },
    {
      title: 'Your Developer',
      company_name: 'You - yourProject',
      icon: 'assets/images/robotic-brain.png',
      iconBg: '#E6DEDD',
      date: '2025',
      points: [
        'Will..',
        'Design and implement full-stack applications that are scalable, reliable, and user-focused.',
        'Develop and optimize front-end interfaces and user experiences for high engagement and intuitive navigation.',
        'Architect and maintain efficient databases and data models to ensure seamless data flow and integrity.',
        'Collaborate with cross-functional teams to translate business requirements into technical solutions that drive impact.',
        'Enhance and maintain backend systems with a focus on performance, security, and code quality.',
        'Lead continuous improvements in CI/CD pipelines, ensuring smooth deployments and minimal downtime.',
        'Utilize data-driven insights to guide development choices and prioritize user-centric features.',
        'Mentor and support team members, contributing to a collaborative and innovative environment',
      ],
    },
  ],
  ye = () =>
    u.jsxs('div', {
      id: 'work',
      className: 'py-44',
      children: [
        u.jsxs('div', {
          children: [
            u.jsx('p', {
              className: `${D.sectionSubText} text-center`,
              children: 'What I have done Lately',
            }),
            u.jsx('h2', {
              className: `${D.sectionHeadText} text-center`,
              children: 'Project Experience',
            }),
          ],
        }),
        u.jsx('div', {
          className: '',
          children: u.jsx(K.VerticalTimeline, {
            children: ge.map((e, n) =>
              u.jsx(me, { experience: e }, `experience-${n}`),
            ),
          }),
        }),
      ],
    });
export { ye as default };
