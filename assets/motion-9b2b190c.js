import { r as b, R as us } from './index-30b3ec0c.js';
const hs = b.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: 'never',
  }),
  Yt = b.createContext({}),
  Re = b.createContext(null),
  qt = typeof document < 'u',
  on = qt ? b.useLayoutEffect : b.useEffect,
  fs = b.createContext({ strict: !1 });
function Fi(t, e, n, s) {
  const { visualElement: i } = b.useContext(Yt),
    o = b.useContext(fs),
    r = b.useContext(Re),
    a = b.useContext(hs).reducedMotion,
    c = b.useRef();
  (s = s || o.renderer),
    !c.current &&
      s &&
      (c.current = s(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: r,
        blockInitialAnimation: r ? r.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const l = c.current;
  return (
    b.useInsertionEffect(() => {
      l && l.update(n, r);
    }),
    on(() => {
      l && l.render();
    }),
    b.useEffect(() => {
      l && l.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? on : b.useEffect)(() => {
      l && l.animationState && l.animationState.animateChanges();
    }),
    l
  );
}
function ft(t) {
  return (
    typeof t == 'object' && Object.prototype.hasOwnProperty.call(t, 'current')
  );
}
function Ei(t, e, n) {
  return b.useCallback(
    (s) => {
      s && t.mount && t.mount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == 'function' ? n(s) : ft(n) && (n.current = s));
    },
    [e],
  );
}
function Ct(t) {
  return typeof t == 'string' || Array.isArray(t);
}
function Zt(t) {
  return typeof t == 'object' && typeof t.start == 'function';
}
const Be = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  Fe = ['initial', ...Be];
function Jt(t) {
  return Zt(t.animate) || Fe.some((e) => Ct(t[e]));
}
function ds(t) {
  return !!(Jt(t) || t.variants);
}
function ki(t, e) {
  if (Jt(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Ct(n) ? n : void 0,
      animate: Ct(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function ji(t) {
  const { initial: e, animate: n } = ki(t, b.useContext(Yt));
  return b.useMemo(() => ({ initial: e, animate: n }), [an(e), an(n)]);
}
function an(t) {
  return Array.isArray(t) ? t.join(' ') : t;
}
const cn = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  wt = {};
for (const t in cn) wt[t] = { isEnabled: (e) => cn[t].some((n) => !!e[n]) };
function Oi(t) {
  for (const e in t) wt[e] = { ...wt[e], ...t[e] };
}
const ms = b.createContext({}),
  ps = b.createContext({}),
  Ii = Symbol.for('motionComponentSymbol');
function Ui({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: s,
  Component: i,
}) {
  t && Oi(t);
  function o(a, c) {
    let l;
    const u = { ...b.useContext(hs), ...a, layoutId: Ni(a) },
      { isStatic: h } = u,
      f = ji(a),
      d = s(a, h);
    if (!h && qt) {
      f.visualElement = Fi(i, d, u, e);
      const m = b.useContext(ps),
        p = b.useContext(fs).strict;
      f.visualElement && (l = f.visualElement.loadFeatures(u, p, t, m));
    }
    return b.createElement(
      Yt.Provider,
      { value: f },
      l && f.visualElement
        ? b.createElement(l, { visualElement: f.visualElement, ...u })
        : null,
      n(i, a, Ei(d, f.visualElement, c), d, h, f.visualElement),
    );
  }
  const r = b.forwardRef(o);
  return (r[Ii] = i), r;
}
function Ni({ layoutId: t }) {
  const e = b.useContext(ms).id;
  return e && t !== void 0 ? e + '-' + t : t;
}
function Gi(t) {
  function e(s, i = {}) {
    return Ui(t(s, i));
  }
  if (typeof Proxy > 'u') return e;
  const n = new Map();
  return new Proxy(e, {
    get: (s, i) => (n.has(i) || n.set(i, e(i)), n.get(i)),
  });
}
const Wi = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function Ee(t) {
  return typeof t != 'string' || t.includes('-')
    ? !1
    : !!(Wi.indexOf(t) > -1 || /[A-Z]/.test(t));
}
const Gt = {};
function $i(t) {
  Object.assign(Gt, t);
}
const Lt = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  ct = new Set(Lt);
function gs(t, { layout: e, layoutId: n }) {
  return (
    ct.has(t) ||
    t.startsWith('origin') ||
    ((e || n !== void 0) && (!!Gt[t] || t === 'opacity'))
  );
}
const O = (t) => !!(t && t.getVelocity),
  Hi = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  zi = Lt.length;
function Ki(
  t,
  { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 },
  s,
  i,
) {
  let o = '';
  for (let r = 0; r < zi; r++) {
    const a = Lt[r];
    if (t[a] !== void 0) {
      const c = Hi[a] || a;
      o += `${c}(${t[a]}) `;
    }
  }
  return (
    e && !t.z && (o += 'translateZ(0)'),
    (o = o.trim()),
    i ? (o = i(t, s ? '' : o)) : n && s && (o = 'none'),
    o
  );
}
const ys = (t) => (e) => typeof e == 'string' && e.startsWith(t),
  vs = ys('--'),
  ge = ys('var(--'),
  _i =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  Xi = (t, e) => (e && typeof t == 'number' ? e.transform(t) : t),
  tt = (t, e, n) => Math.min(Math.max(n, t), e),
  lt = {
    test: (t) => typeof t == 'number',
    parse: parseFloat,
    transform: (t) => t,
  },
  bt = { ...lt, transform: (t) => tt(0, 1, t) },
  jt = { ...lt, default: 1 },
  Vt = (t) => Math.round(t * 1e5) / 1e5,
  Qt = /(-)?([\d]*\.?[\d])+/g,
  xs =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Yi =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Rt(t) {
  return typeof t == 'string';
}
const Bt = (t) => ({
    test: (e) => Rt(e) && e.endsWith(t) && e.split(' ').length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  q = Bt('deg'),
  G = Bt('%'),
  x = Bt('px'),
  qi = Bt('vh'),
  Zi = Bt('vw'),
  ln = {
    ...G,
    parse: (t) => G.parse(t) / 100,
    transform: (t) => G.transform(t * 100),
  },
  un = { ...lt, transform: Math.round },
  Ps = {
    borderWidth: x,
    borderTopWidth: x,
    borderRightWidth: x,
    borderBottomWidth: x,
    borderLeftWidth: x,
    borderRadius: x,
    radius: x,
    borderTopLeftRadius: x,
    borderTopRightRadius: x,
    borderBottomRightRadius: x,
    borderBottomLeftRadius: x,
    width: x,
    maxWidth: x,
    height: x,
    maxHeight: x,
    size: x,
    top: x,
    right: x,
    bottom: x,
    left: x,
    padding: x,
    paddingTop: x,
    paddingRight: x,
    paddingBottom: x,
    paddingLeft: x,
    margin: x,
    marginTop: x,
    marginRight: x,
    marginBottom: x,
    marginLeft: x,
    rotate: q,
    rotateX: q,
    rotateY: q,
    rotateZ: q,
    scale: jt,
    scaleX: jt,
    scaleY: jt,
    scaleZ: jt,
    skew: q,
    skewX: q,
    skewY: q,
    distance: x,
    translateX: x,
    translateY: x,
    translateZ: x,
    x,
    y: x,
    z: x,
    perspective: x,
    transformPerspective: x,
    opacity: bt,
    originX: ln,
    originY: ln,
    originZ: x,
    zIndex: un,
    fillOpacity: bt,
    strokeOpacity: bt,
    numOctaves: un,
  };
function ke(t, e, n, s) {
  const { style: i, vars: o, transform: r, transformOrigin: a } = t;
  let c = !1,
    l = !1,
    u = !0;
  for (const h in e) {
    const f = e[h];
    if (vs(h)) {
      o[h] = f;
      continue;
    }
    const d = Ps[h],
      m = Xi(f, d);
    if (ct.has(h)) {
      if (((c = !0), (r[h] = m), !u)) continue;
      f !== (d.default || 0) && (u = !1);
    } else h.startsWith('origin') ? ((l = !0), (a[h] = m)) : (i[h] = m);
  }
  if (
    (e.transform ||
      (c || s
        ? (i.transform = Ki(t.transform, n, u, s))
        : i.transform && (i.transform = 'none')),
    l)
  ) {
    const { originX: h = '50%', originY: f = '50%', originZ: d = 0 } = a;
    i.transformOrigin = `${h} ${f} ${d}`;
  }
}
const je = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Ts(t, e, n) {
  for (const s in e) !O(e[s]) && !gs(s, n) && (t[s] = e[s]);
}
function Ji({ transformTemplate: t }, e, n) {
  return b.useMemo(() => {
    const s = je();
    return (
      ke(s, e, { enableHardwareAcceleration: !n }, t),
      Object.assign({}, s.vars, s.style)
    );
  }, [e]);
}
function Qi(t, e, n) {
  const s = t.style || {},
    i = {};
  return (
    Ts(i, s, t),
    Object.assign(i, Ji(t, e, n)),
    t.transformValues ? t.transformValues(i) : i
  );
}
function tr(t, e, n) {
  const s = {},
    i = Qi(t, e, n);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((s.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'),
      (i.touchAction =
        t.drag === !0 ? 'none' : `pan-${t.drag === 'x' ? 'y' : 'x'}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (s.tabIndex = 0),
    (s.style = i),
    s
  );
}
const er = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'transformValues',
  'custom',
  'inherit',
  'onLayoutAnimationStart',
  'onLayoutAnimationComplete',
  'onLayoutMeasure',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'ignoreStrict',
  'viewport',
]);
function Wt(t) {
  return (
    t.startsWith('while') ||
    (t.startsWith('drag') && t !== 'draggable') ||
    t.startsWith('layout') ||
    t.startsWith('onTap') ||
    t.startsWith('onPan') ||
    er.has(t)
  );
}
let bs = (t) => !Wt(t);
function nr(t) {
  t && (bs = (e) => (e.startsWith('on') ? !Wt(e) : t(e)));
}
try {
  nr(require('@emotion/is-prop-valid').default);
} catch {}
function sr(t, e, n) {
  const s = {};
  for (const i in t)
    (i === 'values' && typeof t.values == 'object') ||
      ((bs(i) ||
        (n === !0 && Wt(i)) ||
        (!e && !Wt(i)) ||
        (t.draggable && i.startsWith('onDrag'))) &&
        (s[i] = t[i]));
  return s;
}
function hn(t, e, n) {
  return typeof t == 'string' ? t : x.transform(e + n * t);
}
function ir(t, e, n) {
  const s = hn(e, t.x, t.width),
    i = hn(n, t.y, t.height);
  return `${s} ${i}`;
}
const rr = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  or = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function ar(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? rr : or;
  t[o.offset] = x.transform(-s);
  const r = x.transform(e),
    a = x.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Oe(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: s,
    originX: i,
    originY: o,
    pathLength: r,
    pathSpacing: a = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  h,
  f,
) {
  if ((ke(t, l, u, f), h)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: d, style: m, dimensions: p } = t;
  d.transform && (p && (m.transform = d.transform), delete d.transform),
    p &&
      (i !== void 0 || o !== void 0 || m.transform) &&
      (m.transformOrigin = ir(
        p,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    s !== void 0 && (d.scale = s),
    r !== void 0 && ar(d, r, a, c, !1);
}
const Vs = () => ({ ...je(), attrs: {} }),
  Ie = (t) => typeof t == 'string' && t.toLowerCase() === 'svg';
function cr(t, e, n, s) {
  const i = b.useMemo(() => {
    const o = Vs();
    return (
      Oe(o, e, { enableHardwareAcceleration: !1 }, Ie(s), t.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [e]);
  if (t.style) {
    const o = {};
    Ts(o, t.style, t), (i.style = { ...o, ...i.style });
  }
  return i;
}
function lr(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const c = (Ee(n) ? cr : tr)(s, o, r, n),
      u = { ...sr(s, typeof n == 'string', t), ...c, ref: i },
      { children: h } = s,
      f = b.useMemo(() => (O(h) ? h.get() : h), [h]);
    return b.createElement(n, { ...u, children: f });
  };
}
const Ue = (t) => t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function Ss(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const o in n) t.style.setProperty(o, n[o]);
}
const As = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function Cs(t, e, n, s) {
  Ss(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(As.has(i) ? i : Ue(i), e.attrs[i]);
}
function Ne(t, e) {
  const { style: n } = t,
    s = {};
  for (const i in n)
    (O(n[i]) || (e.style && O(e.style[i])) || gs(i, t)) && (s[i] = n[i]);
  return s;
}
function ws(t, e) {
  const n = Ne(t, e);
  for (const s in t)
    if (O(t[s]) || O(e[s])) {
      const i =
        Lt.indexOf(s) !== -1
          ? 'attr' + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      n[i] = t[s];
    }
  return n;
}
function Ge(t, e, n, s = {}, i = {}) {
  return (
    typeof e == 'function' && (e = e(n !== void 0 ? n : t.custom, s, i)),
    typeof e == 'string' && (e = t.variants && t.variants[e]),
    typeof e == 'function' && (e = e(n !== void 0 ? n : t.custom, s, i)),
    e
  );
}
function ur(t) {
  const e = b.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const $t = (t) => Array.isArray(t),
  hr = (t) => !!(t && typeof t == 'object' && t.mix && t.toValue),
  fr = (t) => ($t(t) ? t[t.length - 1] || 0 : t);
function Ut(t) {
  const e = O(t) ? t.get() : t;
  return hr(e) ? e.toValue() : e;
}
function dr(
  { scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n },
  s,
  i,
  o,
) {
  const r = { latestValues: mr(s, i, o, t), renderState: e() };
  return n && (r.mount = (a) => n(s, a, r)), r;
}
const Ds = (t) => (e, n) => {
  const s = b.useContext(Yt),
    i = b.useContext(Re),
    o = () => dr(t, e, s, i);
  return n ? o() : ur(o);
};
function mr(t, e, n, s) {
  const i = {},
    o = s(t, {});
  for (const f in o) i[f] = Ut(o[f]);
  let { initial: r, animate: a } = t;
  const c = Jt(t),
    l = ds(t);
  e &&
    l &&
    !c &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const h = u ? a : r;
  return (
    h &&
      typeof h != 'boolean' &&
      !Zt(h) &&
      (Array.isArray(h) ? h : [h]).forEach((d) => {
        const m = Ge(t, d);
        if (!m) return;
        const { transitionEnd: p, transition: T, ...v } = m;
        for (const y in v) {
          let g = v[y];
          if (Array.isArray(g)) {
            const P = u ? g.length - 1 : 0;
            g = g[P];
          }
          g !== null && (i[y] = g);
        }
        for (const y in p) i[y] = p[y];
      }),
    i
  );
}
const pr = {
    useVisualState: Ds({
      scrapeMotionValuesFromProps: ws,
      createRenderState: Vs,
      onMount: (t, e, { renderState: n, latestValues: s }) => {
        try {
          n.dimensions =
            typeof e.getBBox == 'function'
              ? e.getBBox()
              : e.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Oe(
          n,
          s,
          { enableHardwareAcceleration: !1 },
          Ie(e.tagName),
          t.transformTemplate,
        ),
          Cs(e, n);
      },
    }),
  },
  gr = {
    useVisualState: Ds({
      scrapeMotionValuesFromProps: Ne,
      createRenderState: je,
    }),
  };
function yr(t, { forwardMotionProps: e = !1 }, n, s) {
  return {
    ...(Ee(t) ? pr : gr),
    preloadedFeatures: n,
    useRender: lr(e),
    createVisualElement: s,
    Component: t,
  };
}
function H(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
const Ms = (t) =>
  t.pointerType === 'mouse'
    ? typeof t.button != 'number' || t.button <= 0
    : t.isPrimary !== !1;
function te(t, e = 'page') {
  return { point: { x: t[e + 'X'], y: t[e + 'Y'] } };
}
const vr = (t) => (e) => Ms(e) && t(e, te(e));
function z(t, e, n, s) {
  return H(t, e, vr(n), s);
}
const xr = (t, e) => (n) => e(t(n)),
  J = (...t) => t.reduce(xr);
function Ls(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? ((e = t), n) : !1;
  };
}
const fn = Ls('dragHorizontal'),
  dn = Ls('dragVertical');
function Rs(t) {
  let e = !1;
  if (t === 'y') e = dn();
  else if (t === 'x') e = fn();
  else {
    const n = fn(),
      s = dn();
    n && s
      ? (e = () => {
          n(), s();
        })
      : (n && n(), s && s());
  }
  return e;
}
function Bs() {
  const t = Rs(!0);
  return t ? (t(), !1) : !0;
}
class nt {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
function Pr(t) {
  let e = [],
    n = [],
    s = 0,
    i = !1,
    o = !1;
  const r = new WeakSet(),
    a = {
      schedule: (c, l = !1, u = !1) => {
        const h = u && i,
          f = h ? e : n;
        return (
          l && r.add(c),
          f.indexOf(c) === -1 && (f.push(c), h && i && (s = e.length)),
          c
        );
      },
      cancel: (c) => {
        const l = n.indexOf(c);
        l !== -1 && n.splice(l, 1), r.delete(c);
      },
      process: (c) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([e, n] = [n, e]), (n.length = 0), (s = e.length), s))
          for (let l = 0; l < s; l++) {
            const u = e[l];
            u(c), r.has(u) && (a.schedule(u), t());
          }
        (i = !1), o && ((o = !1), a.process(c));
      },
    };
  return a;
}
const A = { delta: 0, timestamp: 0, isProcessing: !1 },
  Tr = 40;
let ye = !0,
  Dt = !1;
const ee = ['read', 'update', 'preRender', 'render', 'postRender'],
  gt = ee.reduce((t, e) => ((t[e] = Pr(() => (Dt = !0))), t), {}),
  br = (t) => gt[t].process(A),
  Fs = (t) => {
    (Dt = !1),
      (A.delta = ye ? 1e3 / 60 : Math.max(Math.min(t - A.timestamp, Tr), 1)),
      (A.timestamp = t),
      (A.isProcessing = !0),
      ee.forEach(br),
      (A.isProcessing = !1),
      Dt && ((ye = !1), requestAnimationFrame(Fs));
  },
  Vr = () => {
    (Dt = !0), (ye = !0), A.isProcessing || requestAnimationFrame(Fs);
  },
  w = ee.reduce((t, e) => {
    const n = gt[e];
    return (t[e] = (s, i = !1, o = !1) => (Dt || Vr(), n.schedule(s, i, o))), t;
  }, {});
function _(t) {
  ee.forEach((e) => gt[e].cancel(t));
}
function mn(t, e) {
  const n = 'pointer' + (e ? 'enter' : 'leave'),
    s = 'onHover' + (e ? 'Start' : 'End'),
    i = (o, r) => {
      if (o.type === 'touch' || Bs()) return;
      const a = t.getProps();
      t.animationState &&
        a.whileHover &&
        t.animationState.setActive('whileHover', e),
        a[s] && w.update(() => a[s](o, r));
    };
  return z(t.current, n, i, { passive: !t.getProps()[s] });
}
class Sr extends nt {
  mount() {
    this.unmount = J(mn(this.node, !0), mn(this.node, !1));
  }
  unmount() {}
}
class Ar extends nt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(':focus-visible');
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = J(
      H(this.node.current, 'focus', () => this.onFocus()),
      H(this.node.current, 'blur', () => this.onBlur()),
    );
  }
  unmount() {}
}
const Es = (t, e) => (e ? (t === e ? !0 : Es(t, e.parentElement)) : !1),
  F = (t) => t;
function ie(t, e) {
  if (!e) return;
  const n = new PointerEvent('pointer' + t);
  e(n, te(n));
}
class Cr extends nt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = F),
      (this.removeEndListeners = F),
      (this.removeAccessibleListeners = F),
      (this.startPointerPress = (e, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const s = this.node.getProps(),
          o = z(
            window,
            'pointerup',
            (a, c) => {
              if (!this.checkPressEnd()) return;
              const { onTap: l, onTapCancel: u } = this.node.getProps();
              w.update(() => {
                Es(this.node.current, a.target) ? l && l(a, c) : u && u(a, c);
              });
            },
            { passive: !(s.onTap || s.onPointerUp) },
          ),
          r = z(window, 'pointercancel', (a, c) => this.cancelPress(a, c), {
            passive: !(s.onTapCancel || s.onPointerCancel),
          });
        (this.removeEndListeners = J(o, r)), this.startPress(e, n);
      }),
      (this.startAccessiblePress = () => {
        const e = (o) => {
            if (o.key !== 'Enter' || this.isPressing) return;
            const r = (a) => {
              a.key !== 'Enter' ||
                !this.checkPressEnd() ||
                ie('up', (c, l) => {
                  const { onTap: u } = this.node.getProps();
                  u && w.update(() => u(c, l));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = H(this.node.current, 'keyup', r)),
              ie('down', (a, c) => {
                this.startPress(a, c);
              });
          },
          n = H(this.node.current, 'keydown', e),
          s = () => {
            this.isPressing && ie('cancel', (o, r) => this.cancelPress(o, r));
          },
          i = H(this.node.current, 'blur', s);
        this.removeAccessibleListeners = J(n, i);
      });
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: s, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive('whileTap', !0),
      s && w.update(() => s(e, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !Bs()
    );
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: s } = this.node.getProps();
    s && w.update(() => s(e, n));
  }
  mount() {
    const e = this.node.getProps(),
      n = z(this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(e.onTapStart || e.onPointerStart),
      }),
      s = H(this.node.current, 'focus', this.startAccessiblePress);
    this.removeStartListeners = J(n, s);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const ve = new WeakMap(),
  re = new WeakMap(),
  wr = (t) => {
    const e = ve.get(t.target);
    e && e(t);
  },
  Dr = (t) => {
    t.forEach(wr);
  };
function Mr({ root: t, ...e }) {
  const n = t || document;
  re.has(n) || re.set(n, {});
  const s = re.get(n),
    i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(Dr, { root: t, ...e })), s[i];
}
function Lr(t, e, n) {
  const s = Mr(e);
  return (
    ve.set(t, n),
    s.observe(t),
    () => {
      ve.delete(t), s.unobserve(t);
    }
  );
}
const Rr = { some: 0, all: 1 };
class Br extends nt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = 'some', once: o } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == 'number' ? i : Rr[i],
      },
      a = (c) => {
        const { isIntersecting: l } = c;
        if (
          this.isInView === l ||
          ((this.isInView = l), o && !l && this.hasEnteredView)
        )
          return;
        l && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', l);
        const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(),
          f = l ? u : h;
        f && f(c);
      };
    return Lr(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: e, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(Fr(e, n)) && this.startObserver();
  }
  unmount() {}
}
function Fr({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Er = {
  inView: { Feature: Br },
  tap: { Feature: Cr },
  focus: { Feature: Ar },
  hover: { Feature: Sr },
};
function ks(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
function kr(t) {
  const e = {};
  return t.values.forEach((n, s) => (e[s] = n.get())), e;
}
function jr(t) {
  const e = {};
  return t.values.forEach((n, s) => (e[s] = n.getVelocity())), e;
}
function ne(t, e, n) {
  const s = t.getProps();
  return Ge(s, e, n !== void 0 ? n : s.custom, kr(t), jr(t));
}
const Or = 'framerAppearId',
  Ir = 'data-' + Ue(Or);
let Ur = F,
  We = F;
const Q = (t) => t * 1e3,
  K = (t) => t / 1e3,
  Nr = { current: !1 },
  js = (t) => Array.isArray(t) && typeof t[0] == 'number';
function Os(t) {
  return !!(
    !t ||
    (typeof t == 'string' && Is[t]) ||
    js(t) ||
    (Array.isArray(t) && t.every(Os))
  );
}
const Tt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  Is = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Tt([0, 0.65, 0.55, 1]),
    circOut: Tt([0.55, 0, 1, 0.45]),
    backIn: Tt([0.31, 0.01, 0.66, -0.59]),
    backOut: Tt([0.33, 1.53, 0.69, 0.99]),
  };
function Us(t) {
  if (t) return js(t) ? Tt(t) : Array.isArray(t) ? t.map(Us) : Is[t];
}
function Gr(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i,
    repeat: o = 0,
    repeatType: r = 'loop',
    ease: a,
    times: c,
  } = {},
) {
  const l = { [e]: n };
  c && (l.offset = c);
  const u = Us(a);
  return (
    Array.isArray(u) && (l.easing = u),
    t.animate(l, {
      delay: s,
      duration: i,
      easing: Array.isArray(u) ? 'linear' : u,
      fill: 'both',
      iterations: o + 1,
      direction: r === 'reverse' ? 'alternate' : 'normal',
    })
  );
}
const pn = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
  },
  oe = {},
  Ns = {};
for (const t in pn)
  Ns[t] = () => (oe[t] === void 0 && (oe[t] = pn[t]()), oe[t]);
function Wr(t, { repeat: e, repeatType: n = 'loop' }) {
  const s = e && n !== 'loop' && e % 2 === 1 ? 0 : t.length - 1;
  return t[s];
}
const Gs = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  $r = 1e-7,
  Hr = 12;
function zr(t, e, n, s, i) {
  let o,
    r,
    a = 0;
  do (r = e + (n - e) / 2), (o = Gs(r, s, i) - t), o > 0 ? (n = r) : (e = r);
  while (Math.abs(o) > $r && ++a < Hr);
  return r;
}
function Ft(t, e, n, s) {
  if (t === e && n === s) return F;
  const i = (o) => zr(o, 0, 1, t, n);
  return (o) => (o === 0 || o === 1 ? o : Gs(i(o), e, s));
}
const Kr = Ft(0.42, 0, 1, 1),
  _r = Ft(0, 0, 0.58, 1),
  Ws = Ft(0.42, 0, 0.58, 1),
  Xr = (t) => Array.isArray(t) && typeof t[0] != 'number',
  $s = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  Hs = (t) => (e) => 1 - t(1 - e),
  zs = (t) => 1 - Math.sin(Math.acos(t)),
  $e = Hs(zs),
  Yr = $s($e),
  Ks = Ft(0.33, 1.53, 0.69, 0.99),
  He = Hs(Ks),
  qr = $s(He),
  Zr = (t) =>
    (t *= 2) < 1 ? 0.5 * He(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  Jr = {
    linear: F,
    easeIn: Kr,
    easeInOut: Ws,
    easeOut: _r,
    circIn: zs,
    circInOut: Yr,
    circOut: $e,
    backIn: He,
    backInOut: qr,
    backOut: Ks,
    anticipate: Zr,
  },
  gn = (t) => {
    if (Array.isArray(t)) {
      We(t.length === 4);
      const [e, n, s, i] = t;
      return Ft(e, n, s, i);
    } else if (typeof t == 'string') return Jr[t];
    return t;
  },
  ze = (t, e) => (n) =>
    !!(
      (Rt(n) && Yi.test(n) && n.startsWith(t)) ||
      (e && Object.prototype.hasOwnProperty.call(n, e))
    ),
  _s = (t, e, n) => (s) => {
    if (!Rt(s)) return s;
    const [i, o, r, a] = s.match(Qt);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(o),
      [n]: parseFloat(r),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Qr = (t) => tt(0, 255, t),
  ae = { ...lt, transform: (t) => Math.round(Qr(t)) },
  at = {
    test: ze('rgb', 'red'),
    parse: _s('red', 'green', 'blue'),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      'rgba(' +
      ae.transform(t) +
      ', ' +
      ae.transform(e) +
      ', ' +
      ae.transform(n) +
      ', ' +
      Vt(bt.transform(s)) +
      ')',
  };
function to(t) {
  let e = '',
    n = '',
    s = '',
    i = '';
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const xe = { test: ze('#'), parse: to, transform: at.transform },
  dt = {
    test: ze('hsl', 'hue'),
    parse: _s('hue', 'saturation', 'lightness'),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      'hsla(' +
      Math.round(t) +
      ', ' +
      G.transform(Vt(e)) +
      ', ' +
      G.transform(Vt(n)) +
      ', ' +
      Vt(bt.transform(s)) +
      ')',
  },
  j = {
    test: (t) => at.test(t) || xe.test(t) || dt.test(t),
    parse: (t) =>
      at.test(t) ? at.parse(t) : dt.test(t) ? dt.parse(t) : xe.parse(t),
    transform: (t) =>
      Rt(t) ? t : t.hasOwnProperty('red') ? at.transform(t) : dt.transform(t),
  },
  C = (t, e, n) => -n * t + n * e + t;
function ce(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
        ? e
        : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t
  );
}
function eo({ hue: t, saturation: e, lightness: n, alpha: s }) {
  (t /= 360), (e /= 100), (n /= 100);
  let i = 0,
    o = 0,
    r = 0;
  if (!e) i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      c = 2 * n - a;
    (i = ce(c, a, t + 1 / 3)), (o = ce(c, a, t)), (r = ce(c, a, t - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s,
  };
}
const le = (t, e, n) => {
    const s = t * t;
    return Math.sqrt(Math.max(0, n * (e * e - s) + s));
  },
  no = [xe, at, dt],
  so = (t) => no.find((e) => e.test(t));
function yn(t) {
  const e = so(t);
  let n = e.parse(t);
  return e === dt && (n = eo(n)), n;
}
const Xs = (t, e) => {
  const n = yn(t),
    s = yn(e),
    i = { ...n };
  return (o) => (
    (i.red = le(n.red, s.red, o)),
    (i.green = le(n.green, s.green, o)),
    (i.blue = le(n.blue, s.blue, o)),
    (i.alpha = C(n.alpha, s.alpha, o)),
    at.transform(i)
  );
};
function io(t) {
  var e, n;
  return (
    isNaN(t) &&
    Rt(t) &&
    (((e = t.match(Qt)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((n = t.match(xs)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Ys = { regex: _i, countKey: 'Vars', token: '${v}', parse: F },
  qs = { regex: xs, countKey: 'Colors', token: '${c}', parse: j.parse },
  Zs = { regex: Qt, countKey: 'Numbers', token: '${n}', parse: lt.parse };
function ue(t, { regex: e, countKey: n, token: s, parse: i }) {
  const o = t.tokenised.match(e);
  o &&
    ((t['num' + n] = o.length),
    (t.tokenised = t.tokenised.replace(e, s)),
    t.values.push(...o.map(i)));
}
function Ht(t) {
  const e = t.toString(),
    n = {
      value: e,
      tokenised: e,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes('var(--') && ue(n, Ys), ue(n, qs), ue(n, Zs), n;
}
function Js(t) {
  return Ht(t).values;
}
function Qs(t) {
  const { values: e, numColors: n, numVars: s, tokenised: i } = Ht(t),
    o = e.length;
  return (r) => {
    let a = i;
    for (let c = 0; c < o; c++)
      c < s
        ? (a = a.replace(Ys.token, r[c]))
        : c < s + n
          ? (a = a.replace(qs.token, j.transform(r[c])))
          : (a = a.replace(Zs.token, Vt(r[c])));
    return a;
  };
}
const ro = (t) => (typeof t == 'number' ? 0 : t);
function oo(t) {
  const e = Js(t);
  return Qs(t)(e.map(ro));
}
const et = {
    test: io,
    parse: Js,
    createTransformer: Qs,
    getAnimatableNone: oo,
  },
  ti = (t, e) => (n) => `${n > 0 ? e : t}`;
function ei(t, e) {
  return typeof t == 'number'
    ? (n) => C(t, e, n)
    : j.test(t)
      ? Xs(t, e)
      : t.startsWith('var(')
        ? ti(t, e)
        : si(t, e);
}
const ni = (t, e) => {
    const n = [...t],
      s = n.length,
      i = t.map((o, r) => ei(o, e[r]));
    return (o) => {
      for (let r = 0; r < s; r++) n[r] = i[r](o);
      return n;
    };
  },
  ao = (t, e) => {
    const n = { ...t, ...e },
      s = {};
    for (const i in n)
      t[i] !== void 0 && e[i] !== void 0 && (s[i] = ei(t[i], e[i]));
    return (i) => {
      for (const o in s) n[o] = s[o](i);
      return n;
    };
  },
  si = (t, e) => {
    const n = et.createTransformer(e),
      s = Ht(t),
      i = Ht(e);
    return s.numVars === i.numVars &&
      s.numColors === i.numColors &&
      s.numNumbers >= i.numNumbers
      ? J(ni(s.values, i.values), n)
      : ti(t, e);
  },
  Mt = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s;
  },
  vn = (t, e) => (n) => C(t, e, n);
function co(t) {
  return typeof t == 'number'
    ? vn
    : typeof t == 'string'
      ? j.test(t)
        ? Xs
        : si
      : Array.isArray(t)
        ? ni
        : typeof t == 'object'
          ? ao
          : vn;
}
function lo(t, e, n) {
  const s = [],
    i = n || co(t[0]),
    o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const c = Array.isArray(e) ? e[r] || F : e;
      a = J(c, a);
    }
    s.push(a);
  }
  return s;
}
function ii(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if ((We(o === e.length), o === 1)) return () => e[0];
  t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const r = lo(e, s, i),
    a = r.length,
    c = (l) => {
      let u = 0;
      if (a > 1) for (; u < t.length - 2 && !(l < t[u + 1]); u++);
      const h = Mt(t[u], t[u + 1], l);
      return r[u](h);
    };
  return n ? (l) => c(tt(t[0], t[o - 1], l)) : c;
}
function uo(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = Mt(0, e, s);
    t.push(C(n, 1, i));
  }
}
function ho(t) {
  const e = [0];
  return uo(e, t.length - 1), e;
}
function fo(t, e) {
  return t.map((n) => n * e);
}
function mo(t, e) {
  return t.map(() => e || Ws).splice(0, t.length - 1);
}
function zt({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: s = 'easeInOut',
}) {
  const i = Xr(s) ? s.map(gn) : gn(s),
    o = { done: !1, value: e[0] },
    r = fo(n && n.length === e.length ? n : ho(e), t),
    a = ii(r, e, { ease: Array.isArray(i) ? i : mo(e, i) });
  return {
    calculatedDuration: t,
    next: (c) => ((o.value = a(c)), (o.done = c >= t), o),
  };
}
function ri(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const po = 5;
function oi(t, e, n) {
  const s = Math.max(e - po, 0);
  return ri(n - t(s), e - s);
}
const he = 0.001,
  go = 0.01,
  xn = 10,
  yo = 0.05,
  vo = 1;
function xo({
  duration: t = 800,
  bounce: e = 0.25,
  velocity: n = 0,
  mass: s = 1,
}) {
  let i, o;
  Ur(t <= Q(xn));
  let r = 1 - e;
  (r = tt(yo, vo, r)),
    (t = tt(go, xn, K(t))),
    r < 1
      ? ((i = (l) => {
          const u = l * r,
            h = u * t,
            f = u - n,
            d = Pe(l, r),
            m = Math.exp(-h);
          return he - (f / d) * m;
        }),
        (o = (l) => {
          const h = l * r * t,
            f = h * n + n,
            d = Math.pow(r, 2) * Math.pow(l, 2) * t,
            m = Math.exp(-h),
            p = Pe(Math.pow(l, 2), r);
          return ((-i(l) + he > 0 ? -1 : 1) * ((f - d) * m)) / p;
        }))
      : ((i = (l) => {
          const u = Math.exp(-l * t),
            h = (l - n) * t + 1;
          return -he + u * h;
        }),
        (o = (l) => {
          const u = Math.exp(-l * t),
            h = (n - l) * (t * t);
          return u * h;
        }));
  const a = 5 / t,
    c = To(i, o, a);
  if (((t = Q(t)), isNaN(c)))
    return { stiffness: 100, damping: 10, duration: t };
  {
    const l = Math.pow(c, 2) * s;
    return { stiffness: l, damping: r * 2 * Math.sqrt(s * l), duration: t };
  }
}
const Po = 12;
function To(t, e, n) {
  let s = n;
  for (let i = 1; i < Po; i++) s = s - t(s) / e(s);
  return s;
}
function Pe(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const bo = ['duration', 'bounce'],
  Vo = ['stiffness', 'damping', 'mass'];
function Pn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function So(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!Pn(t, Vo) && Pn(t, bo)) {
    const n = xo(t);
    (e = { ...e, ...n, velocity: 0, mass: 1 }), (e.isResolvedFromDuration = !0);
  }
  return e;
}
function ai({ keyframes: t, restDelta: e, restSpeed: n, ...s }) {
  const i = t[0],
    o = t[t.length - 1],
    r = { done: !1, value: i },
    {
      stiffness: a,
      damping: c,
      mass: l,
      velocity: u,
      duration: h,
      isResolvedFromDuration: f,
    } = So(s),
    d = u ? -K(u) : 0,
    m = c / (2 * Math.sqrt(a * l)),
    p = o - i,
    T = K(Math.sqrt(a / l)),
    v = Math.abs(p) < 5;
  n || (n = v ? 0.01 : 2), e || (e = v ? 0.005 : 0.5);
  let y;
  if (m < 1) {
    const g = Pe(T, m);
    y = (P) => {
      const S = Math.exp(-m * T * P);
      return (
        o - S * (((d + m * T * p) / g) * Math.sin(g * P) + p * Math.cos(g * P))
      );
    };
  } else if (m === 1) y = (g) => o - Math.exp(-T * g) * (p + (d + T * p) * g);
  else {
    const g = T * Math.sqrt(m * m - 1);
    y = (P) => {
      const S = Math.exp(-m * T * P),
        k = Math.min(g * P, 300);
      return (
        o - (S * ((d + m * T * p) * Math.sinh(k) + g * p * Math.cosh(k))) / g
      );
    };
  }
  return {
    calculatedDuration: (f && h) || null,
    next: (g) => {
      const P = y(g);
      if (f) r.done = g >= h;
      else {
        let S = d;
        g !== 0 && (m < 1 ? (S = oi(y, g, P)) : (S = 0));
        const k = Math.abs(S) <= n,
          D = Math.abs(o - P) <= e;
        r.done = k && D;
      }
      return (r.value = r.done ? o : P), r;
    },
  };
}
function Tn({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: r,
  min: a,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  const h = t[0],
    f = { done: !1, value: h },
    d = (V) => (a !== void 0 && V < a) || (c !== void 0 && V > c),
    m = (V) =>
      a === void 0
        ? c
        : c === void 0 || Math.abs(a - V) < Math.abs(c - V)
          ? a
          : c;
  let p = n * e;
  const T = h + p,
    v = r === void 0 ? T : r(T);
  v !== T && (p = v - h);
  const y = (V) => -p * Math.exp(-V / s),
    g = (V) => v + y(V),
    P = (V) => {
      const L = y(V),
        W = g(V);
      (f.done = Math.abs(L) <= l), (f.value = f.done ? v : W);
    };
  let S, k;
  const D = (V) => {
    d(f.value) &&
      ((S = V),
      (k = ai({
        keyframes: [f.value, m(f.value)],
        velocity: oi(g, V, f.value),
        damping: i,
        stiffness: o,
        restDelta: l,
        restSpeed: u,
      })));
  };
  return (
    D(0),
    {
      calculatedDuration: null,
      next: (V) => {
        let L = !1;
        return (
          !k && S === void 0 && ((L = !0), P(V), D(V)),
          S !== void 0 && V > S ? k.next(V - S) : (!L && P(V), f)
        );
      },
    }
  );
}
const Ao = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: () => w.update(e, !0),
      stop: () => _(e),
      now: () => (A.isProcessing ? A.timestamp : performance.now()),
    };
  },
  bn = 2e4;
function Vn(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < bn; ) (e += n), (s = t.next(e));
  return e >= bn ? 1 / 0 : e;
}
const Co = { decay: Tn, inertia: Tn, tween: zt, keyframes: zt, spring: ai };
function Kt({
  autoplay: t = !0,
  delay: e = 0,
  driver: n = Ao,
  keyframes: s,
  type: i = 'keyframes',
  repeat: o = 0,
  repeatDelay: r = 0,
  repeatType: a = 'loop',
  onPlay: c,
  onStop: l,
  onComplete: u,
  onUpdate: h,
  ...f
}) {
  let d = 1,
    m = !1,
    p,
    T;
  const v = () => {
    p && p(),
      (T = new Promise((M) => {
        p = M;
      }));
  };
  v();
  let y;
  const g = Co[i] || zt;
  let P;
  g !== zt &&
    typeof s[0] != 'number' &&
    ((P = ii([0, 100], s, { clamp: !1 })), (s = [0, 100]));
  const S = g({ ...f, keyframes: s });
  let k;
  a === 'mirror' &&
    (k = g({
      ...f,
      keyframes: [...s].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let D = 'idle',
    V = null,
    L = null,
    W = null;
  S.calculatedDuration === null && o && (S.calculatedDuration = Vn(S));
  const { calculatedDuration: $ } = S;
  let X = 1 / 0,
    ut = 1 / 0;
  $ !== null && ((X = $ + r), (ut = X * (o + 1) - r));
  let E = 0;
  const B = (M) => {
      if (L === null) return;
      d > 0 && (L = Math.min(L, M)), V !== null ? (E = V) : (E = (M - L) * d);
      const Et = E - e,
        Qe = Et < 0;
      (E = Math.max(Et, 0)), D === 'finished' && V === null && (E = ut);
      let tn = E,
        en = S;
      if (o) {
        const se = E / X;
        let kt = Math.floor(se),
          st = se % 1;
        !st && se >= 1 && (st = 1),
          st === 1 && kt--,
          (kt = Math.min(kt, o + 1));
        const sn = !!(kt % 2);
        sn &&
          (a === 'reverse'
            ? ((st = 1 - st), r && (st -= r / X))
            : a === 'mirror' && (en = k));
        let rn = tt(0, 1, st);
        E > ut && (rn = a === 'reverse' && sn ? 1 : 0), (tn = rn * X);
      }
      const vt = Qe ? { done: !1, value: s[0] } : en.next(tn);
      P && (vt.value = P(vt.value));
      let { done: nn } = vt;
      !Qe && $ !== null && (nn = E >= ut);
      const Bi =
        V === null &&
        (D === 'finished' || (D === 'running' && nn) || (d < 0 && E <= 0));
      return h && h(vt.value), Bi && Ri(), vt;
    },
    Y = () => {
      y && y.stop(), (y = void 0);
    },
    ht = () => {
      (D = 'idle'), Y(), v(), (L = W = null);
    },
    Ri = () => {
      (D = 'finished'), u && u(), Y(), v();
    },
    Ze = () => {
      if (m) return;
      y || (y = n(B));
      const M = y.now();
      c && c(),
        V !== null ? (L = M - V) : (!L || D === 'finished') && (L = M),
        (W = L),
        (V = null),
        (D = 'running'),
        y.start();
    };
  t && Ze();
  const Je = {
    then(M, Et) {
      return T.then(M, Et);
    },
    get time() {
      return K(E);
    },
    set time(M) {
      (M = Q(M)),
        (E = M),
        V !== null || !y || d === 0 ? (V = M) : (L = y.now() - M / d);
    },
    get duration() {
      const M = S.calculatedDuration === null ? Vn(S) : S.calculatedDuration;
      return K(M);
    },
    get speed() {
      return d;
    },
    set speed(M) {
      M === d || !y || ((d = M), (Je.time = K(E)));
    },
    get state() {
      return D;
    },
    play: Ze,
    pause: () => {
      (D = 'paused'), (V = E);
    },
    stop: () => {
      (m = !0), D !== 'idle' && ((D = 'idle'), l && l(), ht());
    },
    cancel: () => {
      W !== null && B(W), ht();
    },
    complete: () => {
      D = 'finished';
    },
    sample: (M) => ((L = 0), B(M)),
  };
  return Je;
}
const wo = new Set([
    'opacity',
    'clipPath',
    'filter',
    'transform',
    'backgroundColor',
  ]),
  Ot = 10,
  Do = 2e4,
  Mo = (t, e) => e.type === 'spring' || t === 'backgroundColor' || !Os(e.ease);
function Lo(t, e, { onUpdate: n, onComplete: s, ...i }) {
  if (
    !(
      Ns.waapi() &&
      wo.has(e) &&
      !i.repeatDelay &&
      i.repeatType !== 'mirror' &&
      i.damping !== 0 &&
      i.type !== 'inertia'
    )
  )
    return !1;
  let r = !1,
    a,
    c;
  const l = () => {
    c = new Promise((v) => {
      a = v;
    });
  };
  l();
  let { keyframes: u, duration: h = 300, ease: f, times: d } = i;
  if (Mo(e, i)) {
    const v = Kt({ ...i, repeat: 0, delay: 0 });
    let y = { done: !1, value: u[0] };
    const g = [];
    let P = 0;
    for (; !y.done && P < Do; ) (y = v.sample(P)), g.push(y.value), (P += Ot);
    (d = void 0), (u = g), (h = P - Ot), (f = 'linear');
  }
  const m = Gr(t.owner.current, e, u, { ...i, duration: h, ease: f, times: d }),
    p = () => m.cancel(),
    T = () => {
      w.update(p), a(), l();
    };
  return (
    (m.onfinish = () => {
      t.set(Wr(u, i)), s && s(), T();
    }),
    {
      then(v, y) {
        return c.then(v, y);
      },
      get time() {
        return K(m.currentTime || 0);
      },
      set time(v) {
        m.currentTime = Q(v);
      },
      get speed() {
        return m.playbackRate;
      },
      set speed(v) {
        m.playbackRate = v;
      },
      get duration() {
        return K(h);
      },
      play: () => {
        r || (m.play(), _(p));
      },
      pause: () => m.pause(),
      stop: () => {
        if (((r = !0), m.playState === 'idle')) return;
        const { currentTime: v } = m;
        if (v) {
          const y = Kt({ ...i, autoplay: !1 });
          t.setWithVelocity(y.sample(v - Ot).value, y.sample(v).value, Ot);
        }
        T();
      },
      complete: () => m.finish(),
      cancel: T,
    }
  );
}
function Ro({ keyframes: t, delay: e, onUpdate: n, onComplete: s }) {
  const i = () => (
    n && n(t[t.length - 1]),
    s && s(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: F,
      pause: F,
      stop: F,
      then: (o) => (o(), Promise.resolve()),
      cancel: F,
      complete: F,
    }
  );
  return e
    ? Kt({ keyframes: [0, 1], duration: 0, delay: e, onComplete: i })
    : i();
}
const Bo = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  Fo = (t) => ({
    type: 'spring',
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Eo = { type: 'keyframes', duration: 0.8 },
  ko = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  jo = (t, { keyframes: e }) =>
    e.length > 2
      ? Eo
      : ct.has(t)
        ? t.startsWith('scale')
          ? Fo(e[1])
          : Bo
        : ko,
  Te = (t, e) =>
    t === 'zIndex'
      ? !1
      : !!(
          typeof e == 'number' ||
          Array.isArray(e) ||
          (typeof e == 'string' &&
            (et.test(e) || e === '0') &&
            !e.startsWith('url('))
        ),
  Oo = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function Io(t) {
  const [e, n] = t.slice(0, -1).split('(');
  if (e === 'drop-shadow') return t;
  const [s] = n.match(Qt) || [];
  if (!s) return t;
  const i = n.replace(s, '');
  let o = Oo.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + '(' + o + i + ')';
}
const Uo = /([a-z-]*)\(.*?\)/g,
  be = {
    ...et,
    getAnimatableNone: (t) => {
      const e = t.match(Uo);
      return e ? e.map(Io).join(' ') : t;
    },
  },
  No = {
    ...Ps,
    color: j,
    backgroundColor: j,
    outlineColor: j,
    fill: j,
    stroke: j,
    borderColor: j,
    borderTopColor: j,
    borderRightColor: j,
    borderBottomColor: j,
    borderLeftColor: j,
    filter: be,
    WebkitFilter: be,
  },
  Ke = (t) => No[t];
function ci(t, e) {
  let n = Ke(t);
  return (
    n !== be && (n = et), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const li = (t) => /^0[^.\s]+$/.test(t);
function Go(t) {
  if (typeof t == 'number') return t === 0;
  if (t !== null) return t === 'none' || t === '0' || li(t);
}
function Wo(t, e, n, s) {
  const i = Te(e, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const r = s.from !== void 0 ? s.from : t.get();
  let a;
  const c = [];
  for (let l = 0; l < o.length; l++)
    o[l] === null && (o[l] = l === 0 ? r : o[l - 1]),
      Go(o[l]) && c.push(l),
      typeof o[l] == 'string' && o[l] !== 'none' && o[l] !== '0' && (a = o[l]);
  if (i && c.length && a)
    for (let l = 0; l < c.length; l++) {
      const u = c[l];
      o[u] = ci(e, a);
    }
  return o;
}
function $o({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: s,
  staggerDirection: i,
  repeat: o,
  repeatType: r,
  repeatDelay: a,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
function ui(t, e) {
  return t[e] || t.default || t;
}
const _e =
  (t, e, n, s = {}) =>
  (i) => {
    const o = ui(s, t) || {},
      r = o.delay || s.delay || 0;
    let { elapsed: a = 0 } = s;
    a = a - Q(r);
    const c = Wo(e, t, n, o),
      l = c[0],
      u = c[c.length - 1],
      h = Te(t, l),
      f = Te(t, u);
    let d = {
      keyframes: c,
      velocity: e.getVelocity(),
      ease: 'easeOut',
      ...o,
      delay: -a,
      onUpdate: (m) => {
        e.set(m), o.onUpdate && o.onUpdate(m);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      ($o(o) || (d = { ...d, ...jo(t, d) }),
      d.duration && (d.duration = Q(d.duration)),
      d.repeatDelay && (d.repeatDelay = Q(d.repeatDelay)),
      !h || !f || Nr.current || o.type === !1)
    )
      return Ro(d);
    if (
      e.owner &&
      e.owner.current instanceof HTMLElement &&
      !e.owner.getProps().onUpdate
    ) {
      const m = Lo(e, t, d);
      if (m) return m;
    }
    return Kt(d);
  };
function _t(t) {
  return !!(O(t) && t.add);
}
const Ho = (t) => /^\-?\d*\.?\d+$/.test(t);
function Xe(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Ye(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class qe {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Xe(this.subscriptions, e), () => Ye(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const zo = (t) => !isNaN(parseFloat(t));
class Ko {
  constructor(e, n = {}) {
    (this.version = '10.12.16'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (s, i = !0) => {
        (this.prev = this.current), (this.current = s);
        const { delta: o, timestamp: r } = A;
        this.lastUpdated !== r &&
          ((this.timeDelta = o),
          (this.lastUpdated = r),
          w.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => w.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: s }) => {
        s !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = e),
      (this.canTrackVelocity = zo(this.current)),
      (this.owner = n.owner);
  }
  onChange(e) {
    return this.on('change', e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new qe());
    const s = this.events[e].add(n);
    return e === 'change'
      ? () => {
          s(),
            w.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    (this.passiveEffect = e), (this.stopPassiveEffect = n);
  }
  set(e, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(e, n)
      : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n), (this.prev = e), (this.timeDelta = s);
  }
  jump(e) {
    this.updateAndNotify(e),
      (this.prev = e),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? ri(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function yt(t, e) {
  return new Ko(t, e);
}
const hi = (t) => (e) => e.test(t),
  _o = { test: (t) => t === 'auto', parse: (t) => t },
  fi = [lt, x, G, q, Zi, qi, _o],
  xt = (t) => fi.find(hi(t)),
  Xo = [...fi, j, et],
  Yo = (t) => Xo.find(hi(t));
function qo(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, yt(n));
}
function Zo(t, e) {
  const n = ne(t, e);
  let {
    transitionEnd: s = {},
    transition: i = {},
    ...o
  } = n ? t.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = fr(o[r]);
    qo(t, r, a);
  }
}
function Jo(t, e, n) {
  var s, i;
  const o = Object.keys(e).filter((a) => !t.hasValue(a)),
    r = o.length;
  if (r)
    for (let a = 0; a < r; a++) {
      const c = o[a],
        l = e[c];
      let u = null;
      Array.isArray(l) && (u = l[0]),
        u === null &&
          (u =
            (i = (s = n[c]) !== null && s !== void 0 ? s : t.readValue(c)) !==
              null && i !== void 0
              ? i
              : e[c]),
        u != null &&
          (typeof u == 'string' && (Ho(u) || li(u))
            ? (u = parseFloat(u))
            : !Yo(u) && et.test(l) && (u = ci(c, l)),
          t.addValue(c, yt(u, { owner: t })),
          n[c] === void 0 && (n[c] = u),
          u !== null && t.setBaseTarget(c, u));
    }
}
function Qo(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function ta(t, e, n) {
  const s = {};
  for (const i in t) {
    const o = Qo(i, e);
    if (o !== void 0) s[i] = o;
    else {
      const r = n.getValue(i);
      r && (s[i] = r.get());
    }
  }
  return s;
}
function ea({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return (e[n] = !1), s;
}
function di(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let {
    transition: o = t.getDefaultTransition(),
    transitionEnd: r,
    ...a
  } = t.makeTargetAnimatable(e);
  const c = t.getValue('willChange');
  s && (o = s);
  const l = [],
    u = i && t.animationState && t.animationState.getState()[i];
  for (const h in a) {
    const f = t.getValue(h),
      d = a[h];
    if (!f || d === void 0 || (u && ea(u, h))) continue;
    const m = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const T = t.getProps()[Ir];
      T && (m.elapsed = window.HandoffAppearAnimations(T, h, f, w));
    }
    f.start(_e(h, f, d, t.shouldReduceMotion && ct.has(h) ? { type: !1 } : m));
    const p = f.animation;
    _t(c) && (c.add(h), p.then(() => c.remove(h))), l.push(p);
  }
  return (
    r &&
      Promise.all(l).then(() => {
        r && Zo(t, r);
      }),
    l
  );
}
function Ve(t, e, n = {}) {
  const s = ne(t, e, n.custom);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(di(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: l = 0,
              staggerChildren: u,
              staggerDirection: h,
            } = i;
            return na(t, e, l + c, u, h, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [c, l] = a === 'beforeChildren' ? [o, r] : [r, o];
    return c().then(() => l());
  } else return Promise.all([o(), r(n.delay)]);
}
function na(t, e, n = 0, s = 0, i = 1, o) {
  const r = [],
    a = (t.variantChildren.size - 1) * s,
    c = i === 1 ? (l = 0) => l * s : (l = 0) => a - l * s;
  return (
    Array.from(t.variantChildren)
      .sort(sa)
      .forEach((l, u) => {
        l.notify('AnimationStart', e),
          r.push(
            Ve(l, e, { ...o, delay: n + c(u) }).then(() =>
              l.notify('AnimationComplete', e),
            ),
          );
      }),
    Promise.all(r)
  );
}
function sa(t, e) {
  return t.sortNodePosition(e);
}
function ia(t, e, n = {}) {
  t.notify('AnimationStart', e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => Ve(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == 'string') s = Ve(t, e, n);
  else {
    const i = typeof e == 'function' ? ne(t, e, n.custom) : e;
    s = Promise.all(di(t, i, n));
  }
  return s.then(() => t.notify('AnimationComplete', e));
}
const ra = [...Be].reverse(),
  oa = Be.length;
function aa(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: s }) => ia(t, n, s)));
}
function ca(t) {
  let e = aa(t);
  const n = ua();
  let s = !0;
  const i = (c, l) => {
    const u = ne(t, l);
    if (u) {
      const { transition: h, transitionEnd: f, ...d } = u;
      c = { ...c, ...d, ...f };
    }
    return c;
  };
  function o(c) {
    e = c(t);
  }
  function r(c, l) {
    const u = t.getProps(),
      h = t.getVariantContext(!0) || {},
      f = [],
      d = new Set();
    let m = {},
      p = 1 / 0;
    for (let v = 0; v < oa; v++) {
      const y = ra[v],
        g = n[y],
        P = u[y] !== void 0 ? u[y] : h[y],
        S = Ct(P),
        k = y === l ? g.isActive : null;
      k === !1 && (p = v);
      let D = P === h[y] && P !== u[y] && S;
      if (
        (D && s && t.manuallyAnimateOnMount && (D = !1),
        (g.protectedKeys = { ...m }),
        (!g.isActive && k === null) ||
          (!P && !g.prevProp) ||
          Zt(P) ||
          typeof P == 'boolean')
      )
        continue;
      const V = la(g.prevProp, P);
      let L = V || (y === l && g.isActive && !D && S) || (v > p && S);
      const W = Array.isArray(P) ? P : [P];
      let $ = W.reduce(i, {});
      k === !1 && ($ = {});
      const { prevResolvedValues: X = {} } = g,
        ut = { ...X, ...$ },
        E = (B) => {
          (L = !0), d.delete(B), (g.needsAnimating[B] = !0);
        };
      for (const B in ut) {
        const Y = $[B],
          ht = X[B];
        m.hasOwnProperty(B) ||
          (Y !== ht
            ? $t(Y) && $t(ht)
              ? !ks(Y, ht) || V
                ? E(B)
                : (g.protectedKeys[B] = !0)
              : Y !== void 0
                ? E(B)
                : d.add(B)
            : Y !== void 0 && d.has(B)
              ? E(B)
              : (g.protectedKeys[B] = !0));
      }
      (g.prevProp = P),
        (g.prevResolvedValues = $),
        g.isActive && (m = { ...m, ...$ }),
        s && t.blockInitialAnimation && (L = !1),
        L &&
          !D &&
          f.push(
            ...W.map((B) => ({ animation: B, options: { type: y, ...c } })),
          );
    }
    if (d.size) {
      const v = {};
      d.forEach((y) => {
        const g = t.getBaseTarget(y);
        g !== void 0 && (v[y] = g);
      }),
        f.push({ animation: v });
    }
    let T = !!f.length;
    return (
      s && u.initial === !1 && !t.manuallyAnimateOnMount && (T = !1),
      (s = !1),
      T ? e(f) : Promise.resolve()
    );
  }
  function a(c, l, u) {
    var h;
    if (n[c].isActive === l) return Promise.resolve();
    (h = t.variantChildren) === null ||
      h === void 0 ||
      h.forEach((d) => {
        var m;
        return (m = d.animationState) === null || m === void 0
          ? void 0
          : m.setActive(c, l);
      }),
      (n[c].isActive = l);
    const f = r(u, c);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function la(t, e) {
  return typeof e == 'string' ? e !== t : Array.isArray(e) ? !ks(e, t) : !1;
}
function it(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function ua() {
  return {
    animate: it(!0),
    whileInView: it(),
    whileHover: it(),
    whileTap: it(),
    whileDrag: it(),
    whileFocus: it(),
    exit: it(),
  };
}
class ha extends nt {
  constructor(e) {
    super(e), e.animationState || (e.animationState = ca(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    this.unmount(), Zt(e) && (this.unmount = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let fa = 0;
class da extends nt {
  constructor() {
    super(...arguments), (this.id = fa++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: e,
        onExitComplete: n,
        custom: s,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i) return;
    const o = this.node.animationState.setActive('exit', !e, {
      custom: s ?? this.node.getProps().custom,
    });
    n && !e && o.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const ma = { animation: { Feature: ha }, exit: { Feature: da } },
  Sn = (t, e) => Math.abs(t - e);
function pa(t, e) {
  const n = Sn(t.x, e.x),
    s = Sn(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class mi {
  constructor(e, n, { transformPagePoint: s } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const l = de(this.lastMoveEventInfo, this.history),
          u = this.startEvent !== null,
          h = pa(l.offset, { x: 0, y: 0 }) >= 3;
        if (!u && !h) return;
        const { point: f } = l,
          { timestamp: d } = A;
        this.history.push({ ...f, timestamp: d });
        const { onStart: m, onMove: p } = this.handlers;
        u ||
          (m && m(this.lastMoveEvent, l),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, l);
      }),
      (this.handlePointerMove = (l, u) => {
        (this.lastMoveEvent = l),
          (this.lastMoveEventInfo = fe(u, this.transformPagePoint)),
          w.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (l, u) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: h, onSessionEnd: f } = this.handlers,
          d = de(
            l.type === 'pointercancel'
              ? this.lastMoveEventInfo
              : fe(u, this.transformPagePoint),
            this.history,
          );
        this.startEvent && h && h(l, d), f && f(l, d);
      }),
      !Ms(e))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = s);
    const i = te(e),
      o = fe(i, this.transformPagePoint),
      { point: r } = o,
      { timestamp: a } = A;
    this.history = [{ ...r, timestamp: a }];
    const { onSessionStart: c } = n;
    c && c(e, de(o, this.history)),
      (this.removeListeners = J(
        z(window, 'pointermove', this.handlePointerMove),
        z(window, 'pointerup', this.handlePointerUp),
        z(window, 'pointercancel', this.handlePointerUp),
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), _(this.updatePoint);
  }
}
function fe(t, e) {
  return e ? { point: e(t.point) } : t;
}
function An(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function de({ point: t }, e) {
  return {
    point: t,
    delta: An(t, pi(e)),
    offset: An(t, ga(e)),
    velocity: ya(e, 0.1),
  };
}
function ga(t) {
  return t[0];
}
function pi(t) {
  return t[t.length - 1];
}
function ya(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = pi(t);
  for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > Q(e))); ) n--;
  if (!s) return { x: 0, y: 0 };
  const o = K(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function I(t) {
  return t.max - t.min;
}
function Se(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function Cn(t, e, n, s = 0.5) {
  (t.origin = s),
    (t.originPoint = C(e.min, e.max, t.origin)),
    (t.scale = I(n) / I(e)),
    (Se(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    (t.translate = C(n.min, n.max, t.origin) - t.originPoint),
    (Se(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function St(t, e, n, s) {
  Cn(t.x, e.x, n.x, s ? s.originX : void 0),
    Cn(t.y, e.y, n.y, s ? s.originY : void 0);
}
function wn(t, e, n) {
  (t.min = n.min + e.min), (t.max = t.min + I(e));
}
function va(t, e, n) {
  wn(t.x, e.x, n.x), wn(t.y, e.y, n.y);
}
function Dn(t, e, n) {
  (t.min = e.min - n.min), (t.max = t.min + I(e));
}
function At(t, e, n) {
  Dn(t.x, e.x, n.x), Dn(t.y, e.y, n.y);
}
function xa(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? C(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? C(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function Mn(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function Pa(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: Mn(t.x, n, i), y: Mn(t.y, e, s) };
}
function Ln(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function Ta(t, e) {
  return { x: Ln(t.x, e.x), y: Ln(t.y, e.y) };
}
function ba(t, e) {
  let n = 0.5;
  const s = I(t),
    i = I(e);
  return (
    i > s
      ? (n = Mt(e.min, e.max - s, t.min))
      : s > i && (n = Mt(t.min, t.max - i, e.min)),
    tt(0, 1, n)
  );
}
function Va(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const Ae = 0.35;
function Sa(t = Ae) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Ae),
    { x: Rn(t, 'left', 'right'), y: Rn(t, 'top', 'bottom') }
  );
}
function Rn(t, e, n) {
  return { min: Bn(t, e), max: Bn(t, n) };
}
function Bn(t, e) {
  return typeof t == 'number' ? t : t[e] || 0;
}
const Fn = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  mt = () => ({ x: Fn(), y: Fn() }),
  En = () => ({ min: 0, max: 0 }),
  R = () => ({ x: En(), y: En() });
function N(t) {
  return [t('x'), t('y')];
}
function gi({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function Aa({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Ca(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function me(t) {
  return t === void 0 || t === 1;
}
function Ce({ scale: t, scaleX: e, scaleY: n }) {
  return !me(t) || !me(e) || !me(n);
}
function rt(t) {
  return Ce(t) || yi(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function yi(t) {
  return kn(t.x) || kn(t.y);
}
function kn(t) {
  return t && t !== '0%';
}
function Xt(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function jn(t, e, n, s, i) {
  return i !== void 0 && (t = Xt(t, i, s)), Xt(t, n, s) + e;
}
function we(t, e = 0, n = 1, s, i) {
  (t.min = jn(t.min, e, n, s, i)), (t.max = jn(t.max, e, n, s, i));
}
function vi(t, { x: e, y: n }) {
  we(t.x, e.translate, e.scale, e.originPoint),
    we(t.y, n.translate, n.scale, n.originPoint);
}
function wa(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (r = o.projectionDelta);
    const c = o.instance;
    (c && c.style && c.style.display === 'contents') ||
      (s &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        pt(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), vi(t, r)),
      s && rt(o.latestValues) && pt(t, o.latestValues));
  }
  (e.x = On(e.x)), (e.y = On(e.y));
}
function On(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999
    ? t
    : 1;
}
function Z(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function In(t, e, [n, s, i]) {
  const o = e[i] !== void 0 ? e[i] : 0.5,
    r = C(t.min, t.max, o);
  we(t, e[n], e[s], r, e.scale);
}
const Da = ['x', 'scaleX', 'originX'],
  Ma = ['y', 'scaleY', 'originY'];
function pt(t, e) {
  In(t.x, e, Da), In(t.y, e, Ma);
}
function xi(t, e) {
  return gi(Ca(t.getBoundingClientRect(), e));
}
function La(t, e, n) {
  const s = xi(t, n),
    { scroll: i } = e;
  return i && (Z(s.x, i.offset.x), Z(s.y, i.offset.y)), s;
}
const Ra = new WeakMap();
class Ba {
  constructor(e) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = R()),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const i = (c) => {
        this.stopAnimation(), n && this.snapToCursor(te(c, 'page').point);
      },
      o = (c, l) => {
        const { drag: u, dragPropagation: h, onDragStart: f } = this.getProps();
        if (
          u &&
          !h &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Rs(u)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          N((m) => {
            let p = this.getAxisMotionValue(m).get() || 0;
            if (G.test(p)) {
              const { projection: T } = this.visualElement;
              if (T && T.layout) {
                const v = T.layout.layoutBox[m];
                v && (p = I(v) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[m] = p;
          }),
          f && w.update(() => f(c, l), !1, !0);
        const { animationState: d } = this.visualElement;
        d && d.setActive('whileDrag', !0);
      },
      r = (c, l) => {
        const {
          dragPropagation: u,
          dragDirectionLock: h,
          onDirectionLock: f,
          onDrag: d,
        } = this.getProps();
        if (!u && !this.openGlobalLock) return;
        const { offset: m } = l;
        if (h && this.currentDirection === null) {
          (this.currentDirection = Fa(m)),
            this.currentDirection !== null && f && f(this.currentDirection);
          return;
        }
        this.updateAxis('x', l.point, m),
          this.updateAxis('y', l.point, m),
          this.visualElement.render(),
          d && d(c, l);
      },
      a = (c, l) => this.stop(c, l);
    this.panSession = new mi(
      e,
      { onSessionStart: i, onStart: o, onMove: r, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() },
    );
  }
  stop(e, n) {
    const s = this.isDragging;
    if ((this.cancel(), !s)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && w.update(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !It(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints &&
      this.constraints[e] &&
      (r = xa(r, this.constraints[e], this.elastic[e])),
      o.set(r);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      { layout: s } = this.visualElement.projection || {},
      i = this.constraints;
    e && ft(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && s
        ? (this.constraints = Pa(s.layoutBox, e))
        : (this.constraints = !1),
      (this.elastic = Sa(n)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        N((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = Va(s.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !ft(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = La(s, i.root, this.visualElement.getTransformPagePoint());
    let r = Ta(i.layout.layoutBox, o);
    if (n) {
      const a = n(Aa(r));
      (this.hasMutatedConstraints = !!a), a && (r = gi(a));
    }
    return r;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: r,
        onDragTransitionEnd: a,
      } = this.getProps(),
      c = this.constraints || {},
      l = N((u) => {
        if (!It(u, n, this.currentDirection)) return;
        let h = (c && c[u]) || {};
        r && (h = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          d = i ? 40 : 1e7,
          m = {
            type: 'inertia',
            velocity: s ? e[u] : 0,
            bounceStiffness: f,
            bounceDamping: d,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...h,
          };
        return this.startAxisValueAnimation(u, m);
      });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return s.start(_e(e, s, 0, n));
  }
  stopAnimation() {
    N((e) => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
    const n = '_drag' + e.toUpperCase(),
      s = this.visualElement.getProps(),
      i = s[n];
    return (
      i ||
      this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    N((n) => {
      const { drag: s } = this.getProps();
      if (!It(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - C(r, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!ft(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    N((r) => {
      const a = this.getAxisMotionValue(r);
      if (a) {
        const c = a.get();
        i[r] = ba({ min: c, max: c }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      N((r) => {
        if (!It(r, e, null)) return;
        const a = this.getAxisMotionValue(r),
          { min: c, max: l } = this.constraints[r];
        a.set(C(c, l, i[r]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Ra.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = z(e, 'pointerdown', (c) => {
        const { drag: l, dragListener: u = !0 } = this.getProps();
        l && u && this.start(c);
      }),
      s = () => {
        const { dragConstraints: c } = this.getProps();
        ft(c) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener('measure', s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), s();
    const r = H(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        'didUpdate',
        ({ delta: c, hasLayoutChanged: l }) => {
          this.isDragging &&
            l &&
            (N((u) => {
              const h = this.getAxisMotionValue(u);
              h &&
                ((this.originPoint[u] += c[u].translate),
                h.set(h.get() + c[u].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: r = Ae,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a,
    };
  }
}
function It(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Fa(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? (n = 'y') : Math.abs(t.x) > e && (n = 'x'), n;
}
class Ea extends nt {
  constructor(e) {
    super(e),
      (this.removeGroupControls = F),
      (this.removeListeners = F),
      (this.controls = new Ba(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || F);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Un = (t) => (e, n) => {
  t && w.update(() => t(e, n));
};
class ka extends nt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = F);
  }
  onPointerDown(e) {
    this.session = new mi(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: s,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Un(e),
      onStart: Un(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && w.update(() => i(o, r));
      },
    };
  }
  mount() {
    this.removePointerDownListener = z(this.node.current, 'pointerdown', (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function ja() {
  const t = b.useContext(Re);
  if (t === null) return [!0, null];
  const { isPresent: e, onExitComplete: n, register: s } = t,
    i = b.useId();
  return b.useEffect(() => s(i), []), !e && n ? [!1, () => n && n(i)] : [!0];
}
const Nt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Nn(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const Pt = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == 'string')
        if (x.test(t)) t = parseFloat(t);
        else return t;
      const n = Nn(t, e.target.x),
        s = Nn(t, e.target.y);
      return `${n}% ${s}%`;
    },
  },
  Oa = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = et.parse(t);
      if (i.length > 5) return s;
      const o = et.createTransformer(t),
        r = typeof i[0] != 'number' ? 1 : 0,
        a = n.x.scale * e.x,
        c = n.y.scale * e.y;
      (i[0 + r] /= a), (i[1 + r] /= c);
      const l = C(a, c, 0.5);
      return (
        typeof i[2 + r] == 'number' && (i[2 + r] /= l),
        typeof i[3 + r] == 'number' && (i[3 + r] /= l),
        o(i)
      );
    },
  };
class Ia extends us.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
        layoutId: i,
      } = this.props,
      { projection: o } = e;
    $i(Ua),
      o &&
        (n.group && n.group.add(o),
        s && s.register && i && s.register(o),
        o.root.didUpdate(),
        o.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Nt.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: s,
        drag: i,
        isPresent: o,
      } = this.props,
      r = s.projection;
    return (
      r &&
        ((r.isPresent = o),
        i || e.layoutDependency !== n || n === void 0
          ? r.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== o &&
          (o
            ? r.promote()
            : r.relegate() ||
              w.postRender(() => {
                const a = r.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      queueMicrotask(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
      } = this.props,
      { projection: i } = e;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Pi(t) {
  const [e, n] = ja(),
    s = b.useContext(ms);
  return us.createElement(Ia, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: b.useContext(ps),
    isPresent: e,
    safeToRemove: n,
  });
}
const Ua = {
    borderRadius: {
      ...Pt,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: Pt,
    borderTopRightRadius: Pt,
    borderBottomLeftRadius: Pt,
    borderBottomRightRadius: Pt,
    boxShadow: Oa,
  },
  Ti = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  Na = Ti.length,
  Gn = (t) => (typeof t == 'string' ? parseFloat(t) : t),
  Wn = (t) => typeof t == 'number' || x.test(t);
function Ga(t, e, n, s, i, o) {
  i
    ? ((t.opacity = C(0, n.opacity !== void 0 ? n.opacity : 1, Wa(s))),
      (t.opacityExit = C(e.opacity !== void 0 ? e.opacity : 1, 0, $a(s))))
    : o &&
      (t.opacity = C(
        e.opacity !== void 0 ? e.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        s,
      ));
  for (let r = 0; r < Na; r++) {
    const a = `border${Ti[r]}Radius`;
    let c = $n(e, a),
      l = $n(n, a);
    if (c === void 0 && l === void 0) continue;
    c || (c = 0),
      l || (l = 0),
      c === 0 || l === 0 || Wn(c) === Wn(l)
        ? ((t[a] = Math.max(C(Gn(c), Gn(l), s), 0)),
          (G.test(l) || G.test(c)) && (t[a] += '%'))
        : (t[a] = l);
  }
  (e.rotate || n.rotate) && (t.rotate = C(e.rotate || 0, n.rotate || 0, s));
}
function $n(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Wa = bi(0, 0.5, $e),
  $a = bi(0.5, 0.95, F);
function bi(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(Mt(t, e, s)));
}
function Hn(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function U(t, e) {
  Hn(t.x, e.x), Hn(t.y, e.y);
}
function zn(t, e, n, s, i) {
  return (
    (t -= e), (t = Xt(t, 1 / n, s)), i !== void 0 && (t = Xt(t, 1 / i, s)), t
  );
}
function Ha(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (
    (G.test(e) && ((e = parseFloat(e)), (e = C(r.min, r.max, e / 100) - r.min)),
    typeof e != 'number')
  )
    return;
  let a = C(o.min, o.max, s);
  t === o && (a -= e),
    (t.min = zn(t.min, e, n, a, i)),
    (t.max = zn(t.max, e, n, a, i));
}
function Kn(t, e, [n, s, i], o, r) {
  Ha(t, e[n], e[s], e[i], e.scale, o, r);
}
const za = ['x', 'scaleX', 'originX'],
  Ka = ['y', 'scaleY', 'originY'];
function _n(t, e, n, s) {
  Kn(t.x, e, za, n ? n.x : void 0, s ? s.x : void 0),
    Kn(t.y, e, Ka, n ? n.y : void 0, s ? s.y : void 0);
}
function Xn(t) {
  return t.translate === 0 && t.scale === 1;
}
function Vi(t) {
  return Xn(t.x) && Xn(t.y);
}
function De(t, e) {
  return (
    t.x.min === e.x.min &&
    t.x.max === e.x.max &&
    t.y.min === e.y.min &&
    t.y.max === e.y.max
  );
}
function Yn(t) {
  return I(t.x) / I(t.y);
}
class _a {
  constructor() {
    this.members = [];
  }
  add(e) {
    Xe(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (Ye(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      s.instance && s.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = s),
        n && (e.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function qn(t, e, n) {
  let s = '';
  const i = t.x.translate / e.x,
    o = t.y.translate / e.y;
  if (
    ((i || o) && (s = `translate3d(${i}px, ${o}px, 0) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const { rotate: c, rotateX: l, rotateY: u } = n;
    c && (s += `rotate(${c}deg) `),
      l && (s += `rotateX(${l}deg) `),
      u && (s += `rotateY(${u}deg) `);
  }
  const r = t.x.scale * e.x,
    a = t.y.scale * e.y;
  return (r !== 1 || a !== 1) && (s += `scale(${r}, ${a})`), s || 'none';
}
const Xa = (t, e) => t.depth - e.depth;
class Ya {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    Xe(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    Ye(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(Xa),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function qa(t, e) {
  const n = performance.now(),
    s = ({ timestamp: i }) => {
      const o = i - n;
      o >= e && (_(s), t(o - e));
    };
  return w.read(s, !0), () => _(s);
}
function Za(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function Ja(t) {
  return t instanceof SVGElement && t.tagName !== 'svg';
}
function Qa(t, e, n) {
  const s = O(t) ? t : yt(t);
  return s.start(_e('', s, e, n)), s.animation;
}
const Zn = ['', 'X', 'Y', 'Z'],
  Jn = 1e3;
let tc = 0;
const ot = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Si({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      (this.id = tc++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (ot.totalNodes =
            ot.resolvedTargetDeltas =
            ot.recalculatedProjection =
              0),
            this.nodes.forEach(sc),
            this.nodes.forEach(cc),
            this.nodes.forEach(lc),
            this.nodes.forEach(ic),
            Za(ot);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = r),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Ya());
    }
    addEventListener(r, a) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new qe()),
        this.eventHandlers.get(r).add(a)
      );
    }
    notifyListeners(r, ...a) {
      const c = this.eventHandlers.get(r);
      c && c.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Ja(r)), (this.instance = r);
      const { layoutId: c, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(r),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (l || c) && (this.isLayoutDirty = !0),
        t)
      ) {
        let h;
        const f = () => (this.root.updateBlockedByResize = !1);
        t(r, () => {
          (this.root.updateBlockedByResize = !0),
            h && h(),
            (h = qa(f, 250)),
            Nt.hasAnimatedSinceResize &&
              ((Nt.hasAnimatedSinceResize = !1), this.nodes.forEach(ts));
        });
      }
      c && this.root.registerSharedNode(c, this),
        this.options.animate !== !1 &&
          u &&
          (c || l) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: h,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: d,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const p =
                  this.options.transition || u.getDefaultTransition() || mc,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: v } =
                  u.getProps(),
                y = !this.targetLayout || !De(this.targetLayout, m) || d,
                g = !f && d;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(h, g);
                const P = { ...ui(p, 'layout'), onPlay: T, onComplete: v };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((P.delay = 0), (P.type = !1)),
                  this.startAnimation(P);
              } else
                f || ts(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = m;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        _(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(uc),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        (h.shouldResetTransform = !0),
          h.updateScroll('snapshot'),
          h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c) return;
      const l = this.getTransformTemplate();
      (this.prevTransformTemplateValue = l ? l(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Qn);
        return;
      }
      this.isUpdating || this.nodes.forEach(oc),
        (this.isUpdating = !1),
        this.nodes.forEach(ac),
        this.nodes.forEach(ec),
        this.nodes.forEach(nc),
        this.clearAllSnapshots();
      const a = performance.now();
      (A.delta = tt(0, 1e3 / 60, a - A.timestamp)),
        (A.timestamp = a),
        (A.isProcessing = !0),
        gt.update.process(A),
        gt.preRender.process(A),
        gt.render.process(A),
        (A.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(rc), this.sharedNodes.forEach(hc);
    }
    scheduleUpdateProjection() {
      w.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      w.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
      const r = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = R()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          r ? r.layoutBox : void 0,
        );
    }
    updateScroll(r = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === r &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: r,
            isRoot: s(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const r = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Vi(this.projectionDelta),
        c = this.getTransformTemplate(),
        l = c ? c(this.latestValues, '') : void 0,
        u = l !== this.prevTransformTemplateValue;
      r &&
        (a || rt(this.latestValues) || u) &&
        (i(this.instance, l),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return (
        r && (c = this.removeTransform(c)),
        pc(c),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: c,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r) return R();
      const a = r.measureViewportBox(),
        { scroll: c } = this.root;
      return c && (Z(a.x, c.offset.x), Z(a.y, c.offset.y)), a;
    }
    removeElementScroll(r) {
      const a = R();
      U(a, r);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c],
          { scroll: u, options: h } = l;
        if (l !== this.root && u && h.layoutScroll) {
          if (u.isRoot) {
            U(a, r);
            const { scroll: f } = this.root;
            f && (Z(a.x, -f.offset.x), Z(a.y, -f.offset.y));
          }
          Z(a.x, u.offset.x), Z(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const c = R();
      U(c, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          pt(c, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          rt(u.latestValues) && pt(c, u.latestValues);
      }
      return rt(this.latestValues) && pt(c, this.latestValues), c;
    }
    removeTransform(r) {
      const a = R();
      U(a, r);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        if (!l.instance || !rt(l.latestValues)) continue;
        Ce(l.latestValues) && l.updateSnapshot();
        const u = R(),
          h = l.measurePageBox();
        U(u, h),
          _n(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u);
      }
      return rt(this.latestValues) && _n(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      (this.targetDelta = r),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== A.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== c;
      if (
        !(
          r ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: h, layoutId: f } = this.options;
      if (!(!this.layout || !(h || f))) {
        if (
          ((this.resolvedRelativeTargetAt = A.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = R()),
              (this.relativeTargetOrigin = R()),
              At(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                d.layout.layoutBox,
              ),
              U(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = R()), (this.targetWithTransforms = R())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                va(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : U(this.target, this.layout.layoutBox),
                  vi(this.target, this.targetDelta))
                : U(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const d = this.getClosestProjectingParent();
            d &&
            !!d.resumingFrom == !!this.resumingFrom &&
            !d.options.layoutScroll &&
            d.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = d),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = R()),
                (this.relativeTargetOrigin = R()),
                At(this.relativeTargetOrigin, this.target, d.target),
                U(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ot.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ce(this.parent.latestValues) ||
          yi(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var r;
      const a = this.getLead(),
        c = !!this.resumingFrom || this !== a;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          (!((r = this.parent) === null || r === void 0) &&
            r.isProjectionDirty)) &&
          (l = !1),
        c &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === A.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: h } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || h))
      )
        return;
      U(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        d = this.treeScale.y;
      wa(this.layoutCorrected, this.treeScale, this.path, c),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: m } = a;
      if (!m) {
        this.projectionTransform &&
          ((this.projectionDelta = mt()),
          (this.projectionTransform = 'none'),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = mt()),
        (this.projectionDeltaWithTransform = mt()));
      const p = this.projectionTransform;
      St(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.projectionTransform = qn(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== p ||
          this.treeScale.x !== f ||
          this.treeScale.y !== d) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', m)),
        ot.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), r)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(r, a = !1) {
      const c = this.snapshot,
        l = c ? c.latestValues : {},
        u = { ...this.latestValues },
        h = mt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = R(),
        d = c ? c.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        p = d !== m,
        T = this.getStack(),
        v = !T || T.members.length <= 1,
        y = !!(p && !v && this.options.crossfade === !0 && !this.path.some(dc));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (P) => {
        const S = P / 1e3;
        es(h.x, r.x, S),
          es(h.y, r.y, S),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (At(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            fc(this.relativeTarget, this.relativeTargetOrigin, f, S),
            g && De(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = R()),
            U(g, this.relativeTarget)),
          p &&
            ((this.animationValues = u), Ga(u, l, this.latestValues, S, y, v)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (_(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = w.update(() => {
          (Nt.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Qa(0, Jn, {
              ...r,
              onUpdate: (a) => {
                this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
              },
              onComplete: () => {
                r.onComplete && r.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const r = this.getStack();
      r && r.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Jn),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let {
        targetWithTransforms: a,
        target: c,
        layout: l,
        latestValues: u,
      } = r;
      if (!(!a || !c || !l)) {
        if (
          this !== r &&
          this.layout &&
          l &&
          Ai(this.options.animationType, this.layout.layoutBox, l.layoutBox)
        ) {
          c = this.target || R();
          const h = I(this.layout.layoutBox.x);
          (c.x.min = r.target.x.min), (c.x.max = c.x.min + h);
          const f = I(this.layout.layoutBox.y);
          (c.y.min = r.target.y.min), (c.y.max = c.y.min + f);
        }
        U(a, c),
          pt(a, u),
          St(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new _a()),
        this.sharedNodes.get(r).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity:
          l && l.shouldPreserveFollowOpacity
            ? l.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: a } = this.options;
      return a
        ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: a } = this.options;
      return a
        ? (r = this.getStack()) === null || r === void 0
          ? void 0
          : r.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: c } = {}) {
      const l = this.getStack();
      l && l.promote(this, c),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let a = !1;
      const { latestValues: c } = r;
      if (((c.rotate || c.rotateX || c.rotateY || c.rotateZ) && (a = !0), !a))
        return;
      const l = {};
      for (let u = 0; u < Zn.length; u++) {
        const h = 'rotate' + Zn[u];
        c[h] && ((l[h] = c[h]), r.setStaticValue(h, 0));
      }
      r.render();
      for (const u in l) r.setStaticValue(u, l[u]);
      r.scheduleRender();
    }
    getProjectionStyles(r = {}) {
      var a, c;
      const l = {};
      if (!this.instance || this.isSVG) return l;
      if (this.isVisible) l.visibility = '';
      else return { visibility: 'hidden' };
      const u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (l.opacity = ''),
          (l.pointerEvents = Ut(r.pointerEvents) || ''),
          (l.transform = u ? u(this.latestValues, '') : 'none'),
          l
        );
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const p = {};
        return (
          this.options.layoutId &&
            ((p.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (p.pointerEvents = Ut(r.pointerEvents) || '')),
          this.hasProjected &&
            !rt(this.latestValues) &&
            ((p.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
          p
        );
      }
      const f = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(),
        (l.transform = qn(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        u && (l.transform = u(f, l.transform));
      const { x: d, y: m } = this.projectionDelta;
      (l.transformOrigin = `${d.origin * 100}% ${m.origin * 100}% 0`),
        h.animationValues
          ? (l.opacity =
              h === this
                ? (c =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && c !== void 0
                  ? c
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (l.opacity =
              h === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ''
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0);
      for (const p in Gt) {
        if (f[p] === void 0) continue;
        const { correct: T, applyTo: v } = Gt[p],
          y = l.transform === 'none' ? f[p] : T(f[p], h);
        if (v) {
          const g = v.length;
          for (let P = 0; P < g; P++) l[v[P]] = y;
        } else l[p] = y;
      }
      return (
        this.options.layoutId &&
          (l.pointerEvents = h === this ? Ut(r.pointerEvents) || '' : 'none'),
        l
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Qn),
        this.root.sharedNodes.clear();
    }
  };
}
function ec(t) {
  t.updateLayout();
}
function nc(t) {
  var e;
  const n =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners('didUpdate')) {
    const { layoutBox: s, measuredBox: i } = t.layout,
      { animationType: o } = t.options,
      r = n.source !== t.layout.source;
    o === 'size'
      ? N((h) => {
          const f = r ? n.measuredBox[h] : n.layoutBox[h],
            d = I(f);
          (f.min = s[h].min), (f.max = f.min + d);
        })
      : Ai(o, n.layoutBox, s) &&
        N((h) => {
          const f = r ? n.measuredBox[h] : n.layoutBox[h],
            d = I(s[h]);
          (f.max = f.min + d),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[h].max = t.relativeTarget[h].min + d));
        });
    const a = mt();
    St(a, s, n.layoutBox);
    const c = mt();
    r ? St(c, t.applyTransform(i, !0), n.measuredBox) : St(c, s, n.layoutBox);
    const l = !Vi(a);
    let u = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: d } = h;
        if (f && d) {
          const m = R();
          At(m, n.layoutBox, f.layoutBox);
          const p = R();
          At(p, s, d.layoutBox),
            De(m, p) || (u = !0),
            h.options.layoutRoot &&
              ((t.relativeTarget = p),
              (t.relativeTargetOrigin = m),
              (t.relativeParent = h));
        }
      }
    }
    t.notifyListeners('didUpdate', {
      layout: s,
      snapshot: n,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeTargetChanged: u,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function sc(t) {
  ot.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function ic(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function rc(t) {
  t.clearSnapshot();
}
function Qn(t) {
  t.clearMeasurements();
}
function oc(t) {
  t.isLayoutDirty = !1;
}
function ac(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify('BeforeLayoutMeasure'),
    t.resetTransform();
}
function ts(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function cc(t) {
  t.resolveTargetDelta();
}
function lc(t) {
  t.calcProjection();
}
function uc(t) {
  t.resetRotation();
}
function hc(t) {
  t.removeLeadSnapshot();
}
function es(t, e, n) {
  (t.translate = C(e.translate, 0, n)),
    (t.scale = C(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function ns(t, e, n, s) {
  (t.min = C(e.min, n.min, s)), (t.max = C(e.max, n.max, s));
}
function fc(t, e, n, s) {
  ns(t.x, e.x, n.x, s), ns(t.y, e.y, n.y, s);
}
function dc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const mc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function ss(t) {
  (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
}
function pc(t) {
  ss(t.x), ss(t.y);
}
function Ai(t, e, n) {
  return (
    t === 'position' || (t === 'preserve-aspect' && !Se(Yn(e), Yn(n), 0.2))
  );
}
const gc = Si({
    attachResizeListener: (t, e) => H(t, 'resize', e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  pe = { current: void 0 },
  Ci = Si({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!pe.current) {
        const t = new gc({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (pe.current = t);
      }
      return pe.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : 'none';
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === 'fixed',
  }),
  yc = {
    pan: { Feature: ka },
    drag: { Feature: Ea, ProjectionNode: Ci, MeasureLayout: Pi },
  },
  vc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function xc(t) {
  const e = vc.exec(t);
  if (!e) return [,];
  const [, n, s] = e;
  return [n, s];
}
function Me(t, e, n = 1) {
  const [s, i] = xc(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  return o ? o.trim() : ge(i) ? Me(i, e, n + 1) : i;
}
function Pc(t, { ...e }, n) {
  const s = t.current;
  if (!(s instanceof Element)) return { target: e, transitionEnd: n };
  n && (n = { ...n }),
    t.values.forEach((i) => {
      const o = i.get();
      if (!ge(o)) return;
      const r = Me(o, s);
      r && i.set(r);
    });
  for (const i in e) {
    const o = e[i];
    if (!ge(o)) continue;
    const r = Me(o, s);
    r && ((e[i] = r), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: e, transitionEnd: n };
}
const Tc = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY',
  ]),
  wi = (t) => Tc.has(t),
  bc = (t) => Object.keys(t).some(wi),
  is = (t) => t === lt || t === x,
  rs = (t, e) => parseFloat(t.split(', ')[e]),
  os =
    (t, e) =>
    (n, { transform: s }) => {
      if (s === 'none' || !s) return 0;
      const i = s.match(/^matrix3d\((.+)\)$/);
      if (i) return rs(i[1], e);
      {
        const o = s.match(/^matrix\((.+)\)$/);
        return o ? rs(o[1], t) : 0;
      }
    },
  Vc = new Set(['x', 'y', 'z']),
  Sc = Lt.filter((t) => !Vc.has(t));
function Ac(t) {
  const e = [];
  return (
    Sc.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 &&
        (e.push([n, s.get()]), s.set(n.startsWith('scale') ? 1 : 0));
    }),
    e.length && t.render(),
    e
  );
}
const as = {
    width: ({ x: t }, { paddingLeft: e = '0', paddingRight: n = '0' }) =>
      t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({ y: t }, { paddingTop: e = '0', paddingBottom: n = '0' }) =>
      t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, { top: e }) => parseFloat(e),
    left: (t, { left: e }) => parseFloat(e),
    bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
    right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
    x: os(4, 13),
    y: os(5, 14),
  },
  Cc = (t, e, n) => {
    const s = e.measureViewportBox(),
      i = e.current,
      o = getComputedStyle(i),
      { display: r } = o,
      a = {};
    r === 'none' && e.setStaticValue('display', t.display || 'block'),
      n.forEach((l) => {
        a[l] = as[l](s, o);
      }),
      e.render();
    const c = e.measureViewportBox();
    return (
      n.forEach((l) => {
        const u = e.getValue(l);
        u && u.jump(a[l]), (t[l] = as[l](c, o));
      }),
      t
    );
  },
  wc = (t, e, n = {}, s = {}) => {
    (e = { ...e }), (s = { ...s });
    const i = Object.keys(e).filter(wi);
    let o = [],
      r = !1;
    const a = [];
    if (
      (i.forEach((c) => {
        const l = t.getValue(c);
        if (!t.hasValue(c)) return;
        let u = n[c],
          h = xt(u);
        const f = e[c];
        let d;
        if ($t(f)) {
          const m = f.length,
            p = f[0] === null ? 1 : 0;
          (u = f[p]), (h = xt(u));
          for (let T = p; T < m && f[T] !== null; T++)
            d ? We(xt(f[T]) === d) : (d = xt(f[T]));
        } else d = xt(f);
        if (h !== d)
          if (is(h) && is(d)) {
            const m = l.get();
            typeof m == 'string' && l.set(parseFloat(m)),
              typeof f == 'string'
                ? (e[c] = parseFloat(f))
                : Array.isArray(f) && d === x && (e[c] = f.map(parseFloat));
          } else
            h != null &&
            h.transform &&
            d != null &&
            d.transform &&
            (u === 0 || f === 0)
              ? u === 0
                ? l.set(d.transform(u))
                : (e[c] = h.transform(f))
              : (r || ((o = Ac(t)), (r = !0)),
                a.push(c),
                (s[c] = s[c] !== void 0 ? s[c] : e[c]),
                l.jump(f));
      }),
      a.length)
    ) {
      const c = a.indexOf('height') >= 0 ? window.pageYOffset : null,
        l = Cc(e, t, a);
      return (
        o.length &&
          o.forEach(([u, h]) => {
            t.getValue(u).set(h);
          }),
        t.render(),
        qt && c !== null && window.scrollTo({ top: c }),
        { target: l, transitionEnd: s }
      );
    } else return { target: e, transitionEnd: s };
  };
function Dc(t, e, n, s) {
  return bc(e) ? wc(t, e, n, s) : { target: e, transitionEnd: s };
}
const Mc = (t, e, n, s) => {
    const i = Pc(t, e, s);
    return (e = i.target), (s = i.transitionEnd), Dc(t, e, n, s);
  },
  Le = { current: null },
  Di = { current: !1 };
function Lc() {
  if (((Di.current = !0), !!qt))
    if (window.matchMedia) {
      const t = window.matchMedia('(prefers-reduced-motion)'),
        e = () => (Le.current = t.matches);
      t.addListener(e), e();
    } else Le.current = !1;
}
function Rc(t, e, n) {
  const { willChange: s } = e;
  for (const i in e) {
    const o = e[i],
      r = n[i];
    if (O(o)) t.addValue(i, o), _t(s) && s.add(i);
    else if (O(r)) t.addValue(i, yt(o, { owner: t })), _t(s) && s.remove(i);
    else if (r !== o)
      if (t.hasValue(i)) {
        const a = t.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        const a = t.getStaticValue(i);
        t.addValue(i, yt(a !== void 0 ? a : o, { owner: t }));
      }
  }
  for (const i in n) e[i] === void 0 && t.removeValue(i);
  return e;
}
const cs = new WeakMap(),
  Mi = Object.keys(wt),
  Bc = Mi.length,
  ls = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  Fc = Fe.length;
class Ec {
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      visualState: o,
    },
    r = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.scheduleRender = () => w.render(this.render, !1, !0));
    const { latestValues: a, renderState: c } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = c),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = r),
      (this.isControllingVariants = Jt(n)),
      (this.isVariantNode = ds(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: l, ...u } = this.scrapeMotionValuesFromProps(n, {});
    for (const h in u) {
      const f = u[h];
      a[h] !== void 0 && O(f) && (f.set(a[h], !1), _t(l) && l.add(h));
    }
  }
  scrapeMotionValuesFromProps(e, n) {
    return {};
  }
  mount(e) {
    (this.current = e),
      cs.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
      Di.current || Lc(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : Le.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    cs.delete(this.current),
      this.projection && this.projection.unmount(),
      _(this.notifyUpdate),
      _(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) this.features[e].unmount();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const s = ct.has(e),
      i = n.on('change', (r) => {
        (this.latestValues[e] = r),
          this.props.onUpdate && w.update(this.notifyUpdate, !1, !0),
          s && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on('renderRequest', this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      i(), o();
    });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures({ children: e, ...n }, s, i, o) {
    let r, a;
    for (let c = 0; c < Bc; c++) {
      const l = Mi[c],
        {
          isEnabled: u,
          Feature: h,
          ProjectionNode: f,
          MeasureLayout: d,
        } = wt[l];
      f && (r = f),
        u(n) &&
          (!this.features[l] && h && (this.features[l] = new h(this)),
          d && (a = d));
    }
    if (!this.projection && r) {
      this.projection = new r(
        this.latestValues,
        this.parent && this.parent.projection,
      );
      const {
        layoutId: c,
        layout: l,
        drag: u,
        dragConstraints: h,
        layoutScroll: f,
        layoutRoot: d,
      } = n;
      this.projection.setOptions({
        layoutId: c,
        layout: l,
        alwaysMeasureLayout: !!u || (h && ft(h)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof l == 'string' ? l : 'both',
        initialPromotionConfig: o,
        layoutScroll: f,
        layoutRoot: d,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const e in this.features) {
      const n = this.features[e];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : R();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  makeTargetAnimatable(e, n = !0) {
    return this.makeTargetAnimatableFromInstance(e, this.props, n);
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let s = 0; s < ls.length; s++) {
      const i = ls[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = e['on' + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Rc(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(e = !1) {
    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const s = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (s.initial = this.props.initial), s
      );
    }
    const n = {};
    for (let s = 0; s < Fc; s++) {
      const i = Fe[s],
        o = this.props[i];
      (Ct(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    n !== this.values.get(e) &&
      (this.removeValue(e), this.bindToMotionValue(e, n)),
      this.values.set(e, n),
      (this.latestValues[e] = n.get());
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        n !== void 0 &&
        ((s = yt(n, { owner: this })), this.addValue(e, s)),
      s
    );
  }
  readValue(e) {
    return this.latestValues[e] !== void 0 || !this.current
      ? this.latestValues[e]
      : this.readValueFromInstance(this.current, e, this.options);
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var n;
    const { initial: s } = this.props,
      i =
        typeof s == 'string' || typeof s == 'object'
          ? (n = Ge(this.props, s)) === null || n === void 0
            ? void 0
            : n[e]
          : void 0;
    if (s && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !O(o)
      ? o
      : this.initialValues[e] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new qe()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class Li extends Ec {
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  makeTargetAnimatableFromInstance(
    { transition: e, transitionEnd: n, ...s },
    { transformValues: i },
    o,
  ) {
    let r = ta(s, e || {}, this);
    if ((i && (n && (n = i(n)), s && (s = i(s)), r && (r = i(r))), o)) {
      Jo(this, s, r);
      const a = Mc(this, s, r, n);
      (n = a.transitionEnd), (s = a.target);
    }
    return { transition: e, transitionEnd: n, ...s };
  }
}
function kc(t) {
  return window.getComputedStyle(t);
}
class jc extends Li {
  readValueFromInstance(e, n) {
    if (ct.has(n)) {
      const s = Ke(n);
      return (s && s.default) || 0;
    } else {
      const s = kc(e),
        i = (vs(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == 'string' ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return xi(e, n);
  }
  build(e, n, s, i) {
    ke(e, n, s, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n) {
    return Ne(e, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    O(e) &&
      (this.childSubscription = e.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(e, n, s, i) {
    Ss(e, n, s, i);
  }
}
class Oc extends Li {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (ct.has(n)) {
      const s = Ke(n);
      return (s && s.default) || 0;
    }
    return (n = As.has(n) ? n : Ue(n)), e.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return R();
  }
  scrapeMotionValuesFromProps(e, n) {
    return ws(e, n);
  }
  build(e, n, s, i) {
    Oe(e, n, s, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, s, i) {
    Cs(e, n, s, i);
  }
  mount(e) {
    (this.isSVGTag = Ie(e.tagName)), super.mount(e);
  }
}
const Ic = (t, e) =>
    Ee(t)
      ? new Oc(e, { enableHardwareAcceleration: !1 })
      : new jc(e, { enableHardwareAcceleration: !0 }),
  Uc = { layout: { ProjectionNode: Ci, MeasureLayout: Pi } },
  Nc = { ...ma, ...Er, ...yc, ...Uc },
  $c = Gi((t, e) => yr(t, e, Nc, Ic));
export { $c as m };
