var Sr = Object.defineProperty;
var bn = (e) => {
  throw TypeError(e);
};
var Ir = (e, t, n) => t in e ? Sr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Z = (e, t, n) => Ir(e, typeof t != "symbol" ? t + "" : t, n), wn = (e, t, n) => t.has(e) || bn("Cannot " + n);
var U = (e, t, n) => (wn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qt = (e, t, n) => t.has(e) ? bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ht = (e, t, n, r) => (wn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
const Nr = "5";
var jn;
typeof window < "u" && ((jn = window.__svelte ?? (window.__svelte = {})).v ?? (jn.v = /* @__PURE__ */ new Set())).add(Nr);
let Ue = !1, Rr = !1;
function xr() {
  Ue = !0;
}
xr();
const Dr = 1, Pr = 2, jr = 16, Mr = 1, Br = 2, Fr = 4, Ur = 8, qr = 16, Hr = 4, Yr = 1, Vr = 2, nn = "[", rn = "[!", sn = "]", je = {}, H = Symbol(), zr = "http://www.w3.org/1999/xhtml", yn = !1, se = 2, Mn = 4, Ot = 8, Lt = 16, de = 32, Re = 64, gt = 128, W = 256, bt = 512, Y = 1024, _e = 2048, xe = 4096, ve = 8192, St = 16384, Bn = 32768, It = 65536, Gr = 1 << 17, Wr = 1 << 19, Fn = 1 << 20, Gt = 1 << 21, Me = Symbol("$state"), Un = Symbol("legacy props"), Jr = Symbol("");
var Nt = Array.isArray, Kr = Array.prototype.indexOf, an = Array.from, wt = Object.keys, yt = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, qn = Object.getOwnPropertyDescriptors, Zr = Object.prototype, Xr = Array.prototype, ln = Object.getPrototypeOf, mn = Object.isExtensible;
function Qr(e) {
  return typeof e == "function";
}
const We = () => {
};
function ei(e) {
  return e();
}
function mt(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const ti = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let et = [], tt = [];
function Hn() {
  var e = et;
  et = [], mt(e);
}
function Yn() {
  var e = tt;
  tt = [], mt(e);
}
function Vn(e) {
  et.length === 0 && queueMicrotask(Hn), et.push(e);
}
function ni(e) {
  tt.length === 0 && ti(Yn), tt.push(e);
}
function $n() {
  et.length > 0 && Hn(), tt.length > 0 && Yn();
}
function zn(e) {
  return e === this.v;
}
function ri(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function on(e) {
  return !ri(e, this.v);
}
function ii(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function si() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ai(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function li() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function oi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ui(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function fi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ci() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function vi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Se(e, t) {
  if (typeof e != "object" || e === null || Me in e)
    return e;
  const n = ln(e);
  if (n !== Zr && n !== Xr)
    return e;
  var r = /* @__PURE__ */ new Map(), i = Nt(e), s = be(0), a = m, l = (o) => {
    var u = m;
    J(a);
    var f;
    return f = o(), J(u), f;
  };
  return i && r.set("length", be(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, u, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && fi();
        var v = r.get(u);
        return v === void 0 ? (v = l(() => be(f.value)), r.set(u, v)) : I(
          v,
          l(() => Se(f.value))
        ), !0;
      },
      deleteProperty(o, u) {
        var f = r.get(u);
        if (f === void 0)
          u in o && r.set(
            u,
            l(() => be(H))
          );
        else {
          if (i && typeof u == "string") {
            var v = (
              /** @type {Source<number>} */
              r.get("length")
            ), c = Number(u);
            Number.isInteger(c) && c < v.v && I(v, c);
          }
          I(f, H), kn(s);
        }
        return !0;
      },
      get(o, u, f) {
        var _;
        if (u === Me)
          return e;
        var v = r.get(u), c = u in o;
        if (v === void 0 && (!c || (_ = $e(o, u)) != null && _.writable) && (v = l(() => be(Se(c ? o[u] : H))), r.set(u, v)), v !== void 0) {
          var d = p(v);
          return d === H ? void 0 : d;
        }
        return Reflect.get(o, u, f);
      },
      getOwnPropertyDescriptor(o, u) {
        var f = Reflect.getOwnPropertyDescriptor(o, u);
        if (f && "value" in f) {
          var v = r.get(u);
          v && (f.value = p(v));
        } else if (f === void 0) {
          var c = r.get(u), d = c == null ? void 0 : c.v;
          if (c !== void 0 && d !== H)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return f;
      },
      has(o, u) {
        var d;
        if (u === Me)
          return !0;
        var f = r.get(u), v = f !== void 0 && f.v !== H || Reflect.has(o, u);
        if (f !== void 0 || $ !== null && (!v || (d = $e(o, u)) != null && d.writable)) {
          f === void 0 && (f = l(() => be(v ? Se(o[u]) : H)), r.set(u, f));
          var c = p(f);
          if (c === H)
            return !1;
        }
        return v;
      },
      set(o, u, f, v) {
        var L;
        var c = r.get(u), d = u in o;
        if (i && u === "length")
          for (var _ = f; _ < /** @type {Source<number>} */
          c.v; _ += 1) {
            var g = r.get(_ + "");
            g !== void 0 ? I(g, H) : _ in o && (g = l(() => be(H)), r.set(_ + "", g));
          }
        c === void 0 ? (!d || (L = $e(o, u)) != null && L.writable) && (c = l(() => be(void 0)), I(
          c,
          l(() => Se(f))
        ), r.set(u, c)) : (d = c.v !== H, I(
          c,
          l(() => Se(f))
        ));
        var b = Reflect.getOwnPropertyDescriptor(o, u);
        if (b != null && b.set && b.set.call(v, f), !d) {
          if (i && typeof u == "string") {
            var w = (
              /** @type {Source<number>} */
              r.get("length")
            ), k = Number(u);
            Number.isInteger(k) && k >= w.v && I(w, k + 1);
          }
          kn(s);
        }
        return !0;
      },
      ownKeys(o) {
        p(s);
        var u = Reflect.ownKeys(o).filter((c) => {
          var d = r.get(c);
          return d === void 0 || d.v !== H;
        });
        for (var [f, v] of r)
          v.v !== H && !(f in o) && u.push(f);
        return u;
      },
      setPrototypeOf() {
        ci();
      }
    }
  );
}
function kn(e, t = 1) {
  I(e, e.v + t);
}
const nt = /* @__PURE__ */ new Map();
function rt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: zn,
    rv: 0,
    wv: 0
  };
  return n;
}
function be(e, t) {
  const n = rt(e);
  return pi(n), n;
}
// @__NO_SIDE_EFFECTS__
function re(e, t = !1) {
  var r;
  const n = rt(e);
  return t || (n.equals = on), Ue && O !== null && O.l !== null && ((r = O.l).s ?? (r.s = [])).push(n), n;
}
function En(e, t) {
  return I(
    e,
    Ee(() => p(e))
  ), t;
}
function I(e, t, n = !1) {
  m !== null && !ie && Mt() && (m.f & (se | Lt)) !== 0 && !(M != null && M.includes(e)) && vi();
  let r = n ? Se(t) : t;
  return Gn(e, r);
}
function Gn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    at ? nt.set(e, t) : nt.set(e, n), e.v = t, e.wv = nr(), Wn(e, _e), Mt() && $ !== null && ($.f & Y) !== 0 && ($.f & (de | Re)) === 0 && (z === null ? gi([e]) : z.push(e));
  }
  return t;
}
function Wn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Mt(), i = n.length, s = 0; s < i; s++) {
      var a = n[s], l = a.f;
      (l & _e) === 0 && (!r && a === $ || (ee(a, t), (l & (Y | W)) !== 0 && ((l & se) !== 0 ? Wn(
        /** @type {Derived} */
        a,
        xe
      ) : Pt(
        /** @type {Effect} */
        a
      ))));
    }
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  var t = se | _e, n = m !== null && (m.f & se) !== 0 ? (
    /** @type {Derived} */
    m
  ) : null;
  return $ === null || n !== null && (n.f & W) !== 0 ? t |= W : $.f |= Fn, {
    ctx: O,
    deps: null,
    effects: null,
    equals: zn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? $
  };
}
// @__NO_SIDE_EFFECTS__
function un(e) {
  const t = /* @__PURE__ */ it(e);
  return t.equals = on, t;
}
function Jn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      le(
        /** @type {Effect} */
        t[n]
      );
  }
}
function di(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & se) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function _i(e) {
  var t, n = $;
  ae(di(e));
  try {
    Jn(e), t = ir(e);
  } finally {
    ae(n);
  }
  return t;
}
function Kn(e) {
  var t = _i(e), n = (me || (e.f & W) !== 0) && e.deps !== null ? xe : Y;
  ee(e, n), e.equals(t) || (e.v = t, e.wv = nr());
}
function Rt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let C = !1;
function ce(e) {
  C = e;
}
let A;
function Q(e) {
  if (e === null)
    throw Rt(), je;
  return A = e;
}
function Be() {
  return Q(
    /** @type {TemplateNode} */
    /* @__PURE__ */ he(A)
  );
}
function N(e) {
  if (C) {
    if (/* @__PURE__ */ he(A) !== null)
      throw Rt(), je;
    A = e;
  }
}
function Wt() {
  for (var e = 0, t = A; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === sn) {
        if (e === 0) return t;
        e -= 1;
      } else (n === nn || n === rn) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ he(t)
    );
    t.remove(), t = r;
  }
}
var Cn, Zn, Xn, Qn;
function Jt() {
  if (Cn === void 0) {
    Cn = window, Zn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Xn = $e(t, "firstChild").get, Qn = $e(t, "nextSibling").get, mn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), mn(n) && (n.__t = void 0);
  }
}
function st(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return Xn.call(e);
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return Qn.call(e);
}
function R(e, t) {
  if (!C)
    return /* @__PURE__ */ Ne(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(A)
  );
  if (n === null)
    n = A.appendChild(st());
  else if (t && n.nodeType !== 3) {
    var r = st();
    return n == null || n.before(r), Q(r), r;
  }
  return Q(n), n;
}
function An(e, t) {
  if (!C) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ne(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ he(n) : n;
  }
  return A;
}
function oe(e, t = 1, n = !1) {
  let r = C ? A : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ he(r);
  if (!C)
    return r;
  var s = r == null ? void 0 : r.nodeType;
  if (n && s !== 3) {
    var a = st();
    return r === null ? i == null || i.after(a) : r.before(a), Q(a), a;
  }
  return Q(r), /** @type {TemplateNode} */
  r;
}
function er(e) {
  e.textContent = "";
}
let ht = !1, $t = !1, kt = null, Ie = !1, at = !1;
function Tn(e) {
  at = e;
}
let Qe = [];
let m = null, ie = !1;
function J(e) {
  m = e;
}
let $ = null;
function ae(e) {
  $ = e;
}
let M = null;
function hi(e) {
  M = e;
}
function pi(e) {
  m !== null && m.f & Gt && (M === null ? hi([e]) : M.push(e));
}
let j = null, V = 0, z = null;
function gi(e) {
  z = e;
}
let tr = 1, Et = 0, me = !1;
function nr() {
  return ++tr;
}
function qe(e) {
  var v;
  var t = e.f;
  if ((t & _e) !== 0)
    return !0;
  if ((t & xe) !== 0) {
    var n = e.deps, r = (t & W) !== 0;
    if (n !== null) {
      var i, s, a = (t & bt) !== 0, l = r && $ !== null && !me, o = n.length;
      if (a || l) {
        var u = (
          /** @type {Derived} */
          e
        ), f = u.parent;
        for (i = 0; i < o; i++)
          s = n[i], (a || !((v = s == null ? void 0 : s.reactions) != null && v.includes(u))) && (s.reactions ?? (s.reactions = [])).push(u);
        a && (u.f ^= bt), l && f !== null && (f.f & W) === 0 && (u.f ^= W);
      }
      for (i = 0; i < o; i++)
        if (s = n[i], qe(
          /** @type {Derived} */
          s
        ) && Kn(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
    }
    (!r || $ !== null && !me) && ee(e, Y);
  }
  return !1;
}
function bi(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & gt) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= gt;
      }
    n = n.parent;
  }
  throw ht = !1, e;
}
function wi(e) {
  return (e.f & St) === 0 && (e.parent === null || (e.parent.f & gt) === 0);
}
function xt(e, t, n, r) {
  if (ht) {
    if (n === null && (ht = !1), wi(t))
      throw e;
    return;
  }
  n !== null && (ht = !0);
  {
    bi(e, t);
    return;
  }
}
function rr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      M != null && M.includes(e) || ((s.f & se) !== 0 ? rr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? ee(s, _e) : (s.f & Y) !== 0 && ee(s, xe), Pt(
        /** @type {Effect} */
        s
      )));
    }
}
function ir(e) {
  var d;
  var t = j, n = V, r = z, i = m, s = me, a = M, l = O, o = ie, u = e.f;
  j = /** @type {null | Value[]} */
  null, V = 0, z = null, me = (u & W) !== 0 && (ie || !Ie || m === null), m = (u & (de | Re)) === 0 ? e : null, M = null, On(e.ctx), ie = !1, Et++, e.f |= Gt;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (j !== null) {
      var c;
      if (Ct(e, V), v !== null && V > 0)
        for (v.length = V + j.length, c = 0; c < j.length; c++)
          v[V + c] = j[c];
      else
        e.deps = v = j;
      if (!me)
        for (c = V; c < v.length; c++)
          ((d = v[c]).reactions ?? (d.reactions = [])).push(e);
    } else v !== null && V < v.length && (Ct(e, V), v.length = V);
    if (Mt() && z !== null && !ie && v !== null && (e.f & (se | xe | _e)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      z.length; c++)
        rr(
          z[c],
          /** @type {Effect} */
          e
        );
    return i !== null && (Et++, z !== null && (r === null ? r = z : r.push(.../** @type {Source[]} */
    z))), f;
  } finally {
    j = t, V = n, z = r, m = i, me = s, M = a, On(l), ie = o, e.f ^= Gt;
  }
}
function yi(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Kr.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & se) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (j === null || !j.includes(t)) && (ee(t, xe), (t.f & (W | bt)) === 0 && (t.f ^= bt), Jn(
    /** @type {Derived} **/
    t
  ), Ct(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ct(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      yi(e, n[r]);
}
function Dt(e) {
  var t = e.f;
  if ((t & St) === 0) {
    ee(e, Y);
    var n = $, r = O, i = Ie;
    $ = e, Ie = !0;
    try {
      (t & Lt) !== 0 ? Ii(e) : or(e), lr(e);
      var s = ir(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = tr;
      var a = e.deps, l;
      yn && Rr && e.f & _e;
    } catch (o) {
      xt(o, e, n, r || e.ctx);
    } finally {
      Ie = i, $ = n;
    }
  }
}
function mi() {
  try {
    li();
  } catch (e) {
    if (kt !== null)
      xt(e, kt, null);
    else
      throw e;
  }
}
function sr() {
  var e = Ie;
  try {
    var t = 0;
    for (Ie = !0; Qe.length > 0; ) {
      t++ > 1e3 && mi();
      var n = Qe, r = n.length;
      Qe = [];
      for (var i = 0; i < r; i++) {
        var s = ki(n[i]);
        $i(s);
      }
    }
  } finally {
    $t = !1, Ie = e, kt = null, nt.clear();
  }
}
function $i(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (St | ve)) === 0)
        try {
          qe(r) && (Dt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? ur(r) : r.fn = null));
        } catch (i) {
          xt(i, r, null, r.ctx);
        }
    }
}
function Pt(e) {
  $t || ($t = !0, queueMicrotask(sr));
  for (var t = kt = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (Re | de)) !== 0) {
      if ((n & Y) === 0) return;
      t.f ^= Y;
    }
  }
  Qe.push(t);
}
function ki(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, i = (r & (de | Re)) !== 0, s = i && (r & Y) !== 0;
    if (!s && (r & ve) === 0) {
      if ((r & Mn) !== 0)
        t.push(n);
      else if (i)
        n.f ^= Y;
      else {
        var a = m;
        try {
          m = n, qe(n) && Dt(n);
        } catch (u) {
          xt(u, n, null, n.ctx);
        } finally {
          m = a;
        }
      }
      var l = n.first;
      if (l !== null) {
        n = l;
        continue;
      }
    }
    var o = n.parent;
    for (n = n.next; n === null && o !== null; )
      n = o.next, o = o.parent;
  }
  return t;
}
function P(e) {
  var t;
  for ($n(); Qe.length > 0; )
    $t = !0, sr(), $n();
  return (
    /** @type {T} */
    t
  );
}
function p(e) {
  var t = e.f, n = (t & se) !== 0;
  if (m !== null && !ie) {
    if (!(M != null && M.includes(e))) {
      var r = m.deps;
      e.rv < Et && (e.rv = Et, j === null && r !== null && r[V] === e ? V++ : j === null ? j = [e] : (!me || !j.includes(e)) && j.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), s = i.parent;
    s !== null && (s.f & W) === 0 && (i.f ^= W);
  }
  return n && (i = /** @type {Derived} */
  e, qe(i) && Kn(i)), at && nt.has(e) ? nt.get(e) : e.v;
}
function Ee(e) {
  var t = ie;
  try {
    return ie = !0, e();
  } finally {
    ie = t;
  }
}
const Ei = -7169;
function ee(e, t) {
  e.f = e.f & Ei | t;
}
function Ci(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Me in e)
      Kt(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Me in n && Kt(n);
      }
  }
}
function Kt(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Kt(e[r], t);
      } catch {
      }
    const n = ln(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = qn(n);
      for (let i in r) {
        const s = r[i].get;
        if (s)
          try {
            s.call(e);
          } catch {
          }
      }
    }
  }
}
function ar(e) {
  $ === null && m === null && ai(), m !== null && (m.f & W) !== 0 && $ === null && si(), at && ii();
}
function Ai(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function De(e, t, n, r = !0) {
  var i = $, s = {
    ctx: O,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | _e,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Dt(s), s.f |= Bn;
    } catch (o) {
      throw le(s), o;
    }
  else t !== null && Pt(s);
  var a = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Fn | gt)) === 0;
  if (!a && r && (i !== null && Ai(s, i), m !== null && (m.f & se) !== 0)) {
    var l = (
      /** @type {Derived} */
      m
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return s;
}
function fn(e) {
  const t = De(Ot, null, !1);
  return ee(t, Y), t.teardown = e, t;
}
function Zt(e) {
  ar();
  var t = $ !== null && ($.f & de) !== 0 && O !== null && !O.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      O
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: $,
      reaction: m
    });
  } else {
    var r = cn(e);
    return r;
  }
}
function Ti(e) {
  return ar(), lt(e);
}
function Oi(e) {
  const t = De(Re, e, !0);
  return () => {
    le(t);
  };
}
function Li(e) {
  const t = De(Re, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? At(t, () => {
      le(t), r(void 0);
    }) : (le(t), r(void 0));
  });
}
function cn(e) {
  return De(Mn, e, !1);
}
function ct(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    O
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = lt(() => {
    e(), !r.ran && (r.ran = !0, I(n.l.r2, !0), Ee(t));
  });
}
function Si() {
  var e = (
    /** @type {ComponentContextLegacy} */
    O
  );
  lt(() => {
    if (p(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & Y) !== 0 && ee(n, xe), qe(n) && Dt(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function lt(e) {
  return De(Ot, e, !0);
}
function Je(e, t = [], n = it) {
  const r = t.map(n);
  return jt(() => e(...r.map(p)));
}
function jt(e, t = 0) {
  return De(Ot | Lt | t, e, !0);
}
function Fe(e, t = !0) {
  return De(Ot | de, e, !0, t);
}
function lr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = at, r = m;
    Tn(!0), J(null);
    try {
      t.call(null);
    } finally {
      Tn(n), J(r);
    }
  }
}
function or(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    (n.f & Re) !== 0 ? n.parent = null : le(n, t), n = r;
  }
}
function Ii(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & de) === 0 && le(t), t = n;
  }
}
function le(e, t = !0) {
  var n = !1;
  if ((t || (e.f & Wr) !== 0) && e.nodes_start !== null) {
    for (var r = e.nodes_start, i = e.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ he(r)
      );
      r.remove(), r = s;
    }
    n = !0;
  }
  or(e, t && !n), Ct(e, 0), ee(e, St);
  var a = e.transitions;
  if (a !== null)
    for (const o of a)
      o.stop();
  lr(e);
  var l = e.parent;
  l !== null && l.first !== null && ur(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ur(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function At(e, t) {
  var n = [];
  vn(e, n, !0), fr(n, () => {
    le(e), t && t();
  });
}
function fr(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var i of e)
      i.out(r);
  } else
    t();
}
function vn(e, t, n) {
  if ((e.f & ve) === 0) {
    if (e.f ^= ve, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var i = r.next, s = (r.f & It) !== 0 || (r.f & de) !== 0;
      vn(r, t, s ? n : !1), r = i;
    }
  }
}
function Tt(e) {
  cr(e, !0);
}
function cr(e, t) {
  if ((e.f & ve) !== 0) {
    e.f ^= ve, (e.f & Y) === 0 && (e.f ^= Y), qe(e) && (ee(e, _e), Pt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & It) !== 0 || (n.f & de) !== 0;
      cr(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
function vr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let O = null;
function On(e) {
  O = e;
}
function dr(e, t = !1, n) {
  var r = O = {
    p: O,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Ue && !t && (O.l = {
    s: null,
    u: null,
    r1: [],
    r2: rt(!1)
  }), fn(() => {
    r.d = !0;
  });
}
function _r(e) {
  const t = O;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = $, r = m;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          ae(s.effect), J(s.reaction), cn(s.fn);
        }
      } finally {
        ae(n), J(r);
      }
    }
    O = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Mt() {
  return !Ue || O !== null && O.l === null;
}
const Ni = ["touchstart", "touchmove"];
function Ri(e) {
  return Ni.includes(e);
}
let Ln = !1;
function hr() {
  Ln || (Ln = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function dn(e) {
  var t = m, n = $;
  J(null), ae(null);
  try {
    return e();
  } finally {
    J(t), ae(n);
  }
}
function xi(e, t, n, r = n) {
  e.addEventListener(t, () => dn(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), hr();
}
const Di = /* @__PURE__ */ new Set(), Sn = /* @__PURE__ */ new Set();
function Pi(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || Xe.call(t, s), !s.cancelBubble)
      return dn(() => n == null ? void 0 : n.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Vn(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Ke(e, t, n, r, i) {
  var s = { capture: r, passive: i }, a = Pi(e, t, n, s);
  (t === document.body || t === window || t === document) && fn(() => {
    t.removeEventListener(e, a, s);
  });
}
function Xe(e) {
  var k;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((k = e.composedPath) == null ? void 0 : k.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  ), a = 0, l = e.__root;
  if (l) {
    var o = i.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    o <= u && (a = o);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    yt(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = m, v = $;
    J(null), ae(null);
    try {
      for (var c, d = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var g = s["__" + r];
          if (g != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s))
            if (Nt(g)) {
              var [b, ...w] = g;
              b.apply(s, [e, ...w]);
            } else
              g.call(s, e);
        } catch (L) {
          c ? d.push(L) : c = L;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        s = _;
      }
      if (c) {
        for (let L of d)
          queueMicrotask(() => {
            throw L;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, J(f), ae(v);
    }
  }
}
function pr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ke(e, t) {
  var n = (
    /** @type {Effect} */
    $
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function He(e, t) {
  var n = (t & Yr) !== 0, r = (t & Vr) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (C)
      return ke(A, null), A;
    i === void 0 && (i = pr(s ? e : "<!>" + e), n || (i = /** @type {Node} */
    /* @__PURE__ */ Ne(i)));
    var a = (
      /** @type {TemplateNode} */
      r || Zn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(a)
      ), o = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      ke(l, o);
    } else
      ke(a, a);
    return a;
  };
}
function ji() {
  if (C)
    return ke(A, null), A;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = st();
  return e.append(t, n), ke(t, n), e;
}
function we(e, t) {
  if (C) {
    $.nodes_end = A, Be();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Xt = !0;
function Le(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function gr(e, t) {
  return br(e, t);
}
function Mi(e, t) {
  Jt(), t.intro = t.intro ?? !1;
  const n = t.target, r = C, i = A;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(n)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== nn); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ he(s);
    if (!s)
      throw je;
    ce(!0), Q(
      /** @type {Comment} */
      s
    ), Be();
    const a = br(e, { ...t, anchor: s });
    if (A === null || A.nodeType !== 8 || /** @type {Comment} */
    A.data !== sn)
      throw Rt(), je;
    return ce(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === je)
      return t.recover === !1 && oi(), Jt(), er(n), ce(!1), gr(e, t);
    throw a;
  } finally {
    ce(r), Q(i);
  }
}
const Pe = /* @__PURE__ */ new Map();
function br(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  Jt();
  var l = /* @__PURE__ */ new Set(), o = (v) => {
    for (var c = 0; c < v.length; c++) {
      var d = v[c];
      if (!l.has(d)) {
        l.add(d);
        var _ = Ri(d);
        t.addEventListener(d, Xe, { passive: _ });
        var g = Pe.get(d);
        g === void 0 ? (document.addEventListener(d, Xe, { passive: _ }), Pe.set(d, 1)) : Pe.set(d, g + 1);
      }
    }
  };
  o(an(Di)), Sn.add(o);
  var u = void 0, f = Li(() => {
    var v = n ?? t.appendChild(st());
    return Fe(() => {
      if (s) {
        dr({});
        var c = (
          /** @type {ComponentContext} */
          O
        );
        c.c = s;
      }
      i && (r.$$events = i), C && ke(
        /** @type {TemplateNode} */
        v,
        null
      ), Xt = a, u = e(v, r) || {}, Xt = !0, C && ($.nodes_end = A), s && _r();
    }), () => {
      var _;
      for (var c of l) {
        t.removeEventListener(c, Xe);
        var d = (
          /** @type {number} */
          Pe.get(c)
        );
        --d === 0 ? (document.removeEventListener(c, Xe), Pe.delete(c)) : Pe.set(c, d);
      }
      Sn.delete(o), v !== n && ((_ = v.parentNode) == null || _.removeChild(v));
    };
  });
  return Qt.set(u, f), u;
}
let Qt = /* @__PURE__ */ new WeakMap();
function Bi(e, t) {
  const n = Qt.get(e);
  return n ? (Qt.delete(e), n(t)) : Promise.resolve();
}
function Ze(e, t, [n, r] = [0, 0]) {
  C && n === 0 && Be();
  var i = e, s = null, a = null, l = H, o = n > 0 ? It : 0, u = !1;
  const f = (c, d = !0) => {
    u = !0, v(d, c);
  }, v = (c, d) => {
    if (l === (l = c)) return;
    let _ = !1;
    if (C && r !== -1) {
      if (n === 0) {
        const b = (
          /** @type {Comment} */
          i.data
        );
        b === nn ? r = 0 : b === rn ? r = 1 / 0 : (r = parseInt(b.substring(1)), r !== r && (r = l ? 1 / 0 : -1));
      }
      const g = r > n;
      !!l === g && (i = Wt(), Q(i), ce(!1), _ = !0, r = -1);
    }
    l ? (s ? Tt(s) : d && (s = Fe(() => d(i))), a && At(a, () => {
      a = null;
    })) : (a ? Tt(a) : d && (a = Fe(() => d(i, [n + 1, r]))), s && At(s, () => {
      s = null;
    })), _ && ce(!0);
  };
  jt(() => {
    u = !1, t(f), u || v(null, null);
  }, o), C && (i = A);
}
function Fi(e, t, n, r) {
  for (var i = [], s = t.length, a = 0; a < s; a++)
    vn(t[a].e, i, !0);
  var l = s > 0 && i.length === 0 && n !== null;
  if (l) {
    var o = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    er(o), o.append(
      /** @type {Element} */
      n
    ), r.clear(), ye(e, t[0].prev, t[s - 1].next);
  }
  fr(i, () => {
    for (var u = 0; u < s; u++) {
      var f = t[u];
      l || (r.delete(f.k), ye(e, f.prev, f.next)), le(f.e, !l);
    }
  });
}
function Ui(e, t, n, r, i, s = null) {
  var a = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  C && Be();
  var o = null, u = !1, f = /* @__PURE__ */ un(() => {
    var v = n();
    return Nt(v) ? v : v == null ? [] : an(v);
  });
  jt(() => {
    var v = p(f), c = v.length;
    if (u && c === 0)
      return;
    u = c === 0;
    let d = !1;
    if (C) {
      var _ = (
        /** @type {Comment} */
        a.data === rn
      );
      _ !== (c === 0) && (a = Wt(), Q(a), ce(!1), d = !0);
    }
    if (C) {
      for (var g = null, b, w = 0; w < c; w++) {
        if (A.nodeType === 8 && /** @type {Comment} */
        A.data === sn) {
          a = /** @type {Comment} */
          A, d = !0, ce(!1);
          break;
        }
        var k = v[w], L = r(k, w);
        b = wr(
          A,
          l,
          g,
          null,
          k,
          L,
          w,
          i,
          t,
          n
        ), l.items.set(L, b), g = b;
      }
      c > 0 && Q(Wt());
    }
    C || qi(v, l, a, i, t, r, n), s !== null && (c === 0 ? o ? Tt(o) : o = Fe(() => s(a)) : o !== null && At(o, () => {
      o = null;
    })), d && ce(!0), p(f);
  }), C && (a = A);
}
function qi(e, t, n, r, i, s, a) {
  var l = e.length, o = t.items, u = t.first, f = u, v, c = null, d = [], _ = [], g, b, w, k;
  for (k = 0; k < l; k += 1) {
    if (g = e[k], b = s(g, k), w = o.get(b), w === void 0) {
      var L = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      c = wr(
        L,
        t,
        c,
        c === null ? t.first : c.next,
        g,
        b,
        k,
        r,
        i,
        a
      ), o.set(b, c), d = [], _ = [], f = c.next;
      continue;
    }
    if (Hi(w, g, k), (w.e.f & ve) !== 0 && Tt(w.e), w !== f) {
      if (v !== void 0 && v.has(w)) {
        if (d.length < _.length) {
          var x = _[0], T;
          c = x.prev;
          var K = d[0], E = d[d.length - 1];
          for (T = 0; T < d.length; T += 1)
            In(d[T], x, n);
          for (T = 0; T < _.length; T += 1)
            v.delete(_[T]);
          ye(t, K.prev, E.next), ye(t, c, K), ye(t, E, x), f = x, c = E, k -= 1, d = [], _ = [];
        } else
          v.delete(w), In(w, f, n), ye(t, w.prev, w.next), ye(t, w, c === null ? t.first : c.next), ye(t, c, w), c = w;
        continue;
      }
      for (d = [], _ = []; f !== null && f.k !== b; )
        (f.e.f & ve) === 0 && (v ?? (v = /* @__PURE__ */ new Set())).add(f), _.push(f), f = f.next;
      if (f === null)
        continue;
      w = f;
    }
    d.push(w), c = w, f = w.next;
  }
  if (f !== null || v !== void 0) {
    for (var B = v === void 0 ? [] : an(v); f !== null; )
      (f.e.f & ve) === 0 && B.push(f), f = f.next;
    var S = B.length;
    if (S > 0) {
      var Ce = null;
      Fi(t, B, Ce, o);
    }
  }
  $.first = t.first && t.first.e, $.last = c && c.e;
}
function Hi(e, t, n, r) {
  Gn(e.v, t), e.i = n;
}
function wr(e, t, n, r, i, s, a, l, o, u) {
  var f = (o & Dr) !== 0, v = (o & jr) === 0, c = f ? v ? /* @__PURE__ */ re(i) : rt(i) : i, d = (o & Pr) === 0 ? a : rt(a), _ = {
    i: d,
    v: c,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return _.e = Fe(() => l(e, c, d, u), C), _.e.prev = n && n.e, _.e.next = r && r.e, n === null ? t.first = _ : (n.next = _, n.e.next = _.e), r !== null && (r.prev = _, r.e.prev = _.e), _;
  } finally {
  }
}
function In(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, s = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); s !== r; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ he(s)
    );
    i.before(s), s = a;
  }
}
function ye(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Yi(e, t, n, r, i) {
  var s = e, a = "", l;
  jt(() => {
    if (a === (a = t() ?? "")) {
      C && Be();
      return;
    }
    l !== void 0 && (le(l), l = void 0), a !== "" && (l = Fe(() => {
      if (C) {
        A.data;
        for (var o = Be(), u = o; o !== null && (o.nodeType !== 8 || /** @type {Comment} */
        o.data !== ""); )
          u = o, o = /** @type {TemplateNode} */
          /* @__PURE__ */ he(o);
        if (o === null)
          throw Rt(), je;
        ke(A, u), s = Q(o);
        return;
      }
      var f = a + "", v = pr(f);
      ke(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), s.before(v);
    }));
  });
}
const Nn = [...` 	
\r\f \v\uFEFF`];
function Vi(e, t, n) {
  var r = "" + e;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var l = a + s;
          (a === 0 || Nn.includes(r[a - 1])) && (l === r.length || Nn.includes(r[l])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(l + 1) : a = l;
        }
  }
  return r === "" ? null : r;
}
function zi(e, t, n, r, i, s) {
  var a = e.__className;
  if (C || a !== n) {
    var l = Vi(n, r, s);
    (!C || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : e.className = l), e.__className = n;
  } else if (s && i !== s)
    for (var o in s) {
      var u = !!s[o];
      (i == null || u !== !!i[o]) && e.classList.toggle(o, u);
    }
  return s;
}
const Gi = Symbol("is custom element"), Wi = Symbol("is html");
function Ji(e) {
  if (C) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          X(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          X(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = n, ni(n), hr();
  }
}
function X(e, t, n, r) {
  var i = Ki(e);
  C && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = n) && (t === "loading" && (e[Jr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Zi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ki(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Gi]: e.nodeName.includes("-"),
      [Wi]: e.namespaceURI === zr
    })
  );
}
var Rn = /* @__PURE__ */ new Map();
function Zi(e) {
  var t = Rn.get(e.nodeName);
  if (t) return t;
  Rn.set(e.nodeName, t = []);
  for (var n, r = e, i = Element.prototype; i !== r; ) {
    n = qn(r);
    for (var s in n)
      n[s].set && t.push(s);
    r = ln(r);
  }
  return t;
}
const Xi = () => performance.now(), fe = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Xi(),
  tasks: /* @__PURE__ */ new Set()
};
function yr() {
  const e = fe.now();
  fe.tasks.forEach((t) => {
    t.c(e) || (fe.tasks.delete(t), t.f());
  }), fe.tasks.size !== 0 && fe.tick(yr);
}
function Qi(e) {
  let t;
  return fe.tasks.size === 0 && fe.tick(yr), {
    promise: new Promise((n) => {
      fe.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      fe.tasks.delete(t);
    }
  };
}
function vt(e, t) {
  dn(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function es(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function xn(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [i, s] = r.split(":");
    if (!i || s === void 0) break;
    const a = es(i.trim());
    t[a] = s.trim();
  }
  return t;
}
const ts = (e) => e;
function Yt(e, t, n, r) {
  var i = (e & Hr) !== 0, s = "both", a, l = t.inert, o = t.style.overflow, u, f;
  function v() {
    var b = m, w = $;
    J(null), ae(null);
    try {
      return a ?? (a = n()(t, (r == null ? void 0 : r()) ?? /** @type {P} */
      {}, {
        direction: s
      }));
    } finally {
      J(b), ae(w);
    }
  }
  var c = {
    is_global: i,
    in() {
      t.inert = l, vt(t, "introstart"), u = en(t, v(), f, 1, () => {
        vt(t, "introend"), u == null || u.abort(), u = a = void 0, t.style.overflow = o;
      });
    },
    out(b) {
      t.inert = !0, vt(t, "outrostart"), f = en(t, v(), u, 0, () => {
        vt(t, "outroend"), b == null || b();
      });
    },
    stop: () => {
      u == null || u.abort(), f == null || f.abort();
    }
  }, d = (
    /** @type {Effect} */
    $
  );
  if ((d.transitions ?? (d.transitions = [])).push(c), Xt) {
    var _ = i;
    if (!_) {
      for (var g = (
        /** @type {Effect | null} */
        d.parent
      ); g && (g.f & It) !== 0; )
        for (; (g = g.parent) && (g.f & Lt) === 0; )
          ;
      _ = !g || (g.f & Bn) !== 0;
    }
    _ && cn(() => {
      Ee(() => c.in());
    });
  }
}
function en(e, t, n, r, i) {
  var s = r === 1;
  if (Qr(t)) {
    var a, l = !1;
    return Vn(() => {
      if (!l) {
        var b = t({ direction: s ? "in" : "out" });
        a = en(e, b, n, r, i);
      }
    }), {
      abort: () => {
        l = !0, a == null || a.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  if (n == null || n.deactivate(), !(t != null && t.duration))
    return i(), {
      abort: We,
      deactivate: We,
      reset: We,
      t: () => r
    };
  const { delay: o = 0, css: u, tick: f, easing: v = ts } = t;
  var c = [];
  if (s && n === void 0 && (f && f(0, 1), u)) {
    var d = xn(u(0, 1));
    c.push(d, d);
  }
  var _ = () => 1 - r, g = e.animate(c, { duration: o });
  return g.onfinish = () => {
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var w = r - b, k = (
      /** @type {number} */
      t.duration * Math.abs(w)
    ), L = [];
    if (k > 0) {
      var x = !1;
      if (u)
        for (var T = Math.ceil(k / 16.666666666666668), K = 0; K <= T; K += 1) {
          var E = b + w * v(K / T), B = xn(u(E, 1 - E));
          L.push(B), x || (x = B.overflow === "hidden");
        }
      x && (e.style.overflow = "hidden"), _ = () => {
        var S = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return b + w * v(S / k);
      }, f && Qi(() => {
        if (g.playState !== "running") return !1;
        var S = _();
        return f(S, 1 - S), !0;
      });
    }
    g = e.animate(L, { duration: k, fill: "forwards" }), g.onfinish = () => {
      _ = () => r, f == null || f(r, 1 - r), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = We);
    },
    deactivate: () => {
      i = We;
    },
    reset: () => {
      r === 0 && (f == null || f(1, 0));
    },
    t: () => _()
  };
}
function ns(e, t, n = t) {
  xi(e, "change", (r) => {
    var i = r ? e.defaultChecked : e.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (C && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Ee(t) == null) && n(e.checked), lt(() => {
    var r = t();
    e.checked = !!r;
  });
}
function rs(e, t, n) {
  var r = $e(e, t);
  r && r.set && (e[t] = n, fn(() => {
    e[t] = null;
  }));
}
function is(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    O
  ), n = t.l.u;
  if (!n) return;
  let r = () => Ci(t.s);
  if (e) {
    let i = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ it(() => {
      let l = !1;
      const o = t.s;
      for (const u in o)
        o[u] !== s[u] && (s[u] = o[u], l = !0);
      return l && i++, i;
    });
    r = () => p(a);
  }
  n.b.length && Ti(() => {
    Dn(t, r), mt(n.b);
  }), Zt(() => {
    const i = Ee(() => n.m.map(ei));
    return () => {
      for (const s of i)
        typeof s == "function" && s();
    };
  }), n.a.length && Zt(() => {
    Dn(t, r), mt(n.a);
  });
}
function Dn(e, t) {
  if (e.l.s)
    for (const n of e.l.s) p(n);
  t();
}
function ss(e) {
  O === null && vr(), Ue && O.l !== null ? os(O).m.push(e) : Zt(() => {
    const t = Ee(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function as(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function ls() {
  const e = O;
  return e === null && vr(), (t, n, r) => {
    var s;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (s = e.s.$$events) == null ? void 0 : s[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = Nt(i) ? i.slice() : [i], l = as(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const o of a)
        o.call(e.x, l);
      return !l.defaultPrevented;
    }
    return !0;
  };
}
function os(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
let dt = !1;
function us(e) {
  var t = dt;
  try {
    return dt = !1, [e(), dt];
  } finally {
    dt = t;
  }
}
function Pn(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function q(e, t, n, r) {
  var K;
  var i = (n & Mr) !== 0, s = !Ue || (n & Br) !== 0, a = (n & Ur) !== 0, l = (n & qr) !== 0, o = !1, u;
  a ? [u, o] = us(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var f = Me in e || Un in e, v = a && (((K = $e(e, t)) == null ? void 0 : K.set) ?? (f && t in e && ((E) => e[t] = E))) || void 0, c = (
    /** @type {V} */
    r
  ), d = !0, _ = !1, g = () => (_ = !0, d && (d = !1, l ? c = Ee(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  u === void 0 && r !== void 0 && (v && s && ui(), u = g(), v && v(u));
  var b;
  if (s)
    b = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? g() : (d = !0, _ = !1, E);
    };
  else {
    var w = (i ? it : un)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    w.f |= Gr, b = () => {
      var E = p(w);
      return E !== void 0 && (c = /** @type {V} */
      void 0), E === void 0 ? c : E;
    };
  }
  if ((n & Fr) === 0)
    return b;
  if (v) {
    var k = e.$$legacy;
    return function(E, B) {
      return arguments.length > 0 ? ((!s || !B || k || o) && v(B ? b() : E), E) : b();
    };
  }
  var L = !1, x = /* @__PURE__ */ re(u), T = /* @__PURE__ */ it(() => {
    var E = b(), B = p(x);
    return L ? (L = !1, B) : x.v = E;
  });
  return a && p(T), i || (T.equals = on), function(E, B) {
    if (arguments.length > 0) {
      const S = B ? p(T) : s && a ? Se(E) : E;
      if (!T.equals(S)) {
        if (L = !0, I(x, S), _ && c !== void 0 && (c = S), Pn(T))
          return E;
        Ee(() => p(T));
      }
      return E;
    }
    return Pn(T) ? T.v : p(T);
  };
}
function fs(e) {
  return new cs(e);
}
var ue, G;
class cs {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    qt(this, ue);
    /** @type {Record<string, any>} */
    qt(this, G);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, l) => {
      var o = /* @__PURE__ */ re(l);
      return n.set(a, o), o;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, l) {
          return p(n.get(l) ?? r(l, Reflect.get(a, l)));
        },
        has(a, l) {
          return l === Un ? !0 : (p(n.get(l) ?? r(l, Reflect.get(a, l))), Reflect.has(a, l));
        },
        set(a, l, o) {
          return I(n.get(l) ?? r(l, o), o), Reflect.set(a, l, o);
        }
      }
    );
    Ht(this, G, (t.hydrate ? Mi : gr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && P(), Ht(this, ue, i.$$events);
    for (const a of Object.keys(U(this, G)))
      a === "$set" || a === "$destroy" || a === "$on" || yt(this, a, {
        get() {
          return U(this, G)[a];
        },
        /** @param {any} value */
        set(l) {
          U(this, G)[a] = l;
        },
        enumerable: !0
      });
    U(this, G).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, U(this, G).$destroy = () => {
      Bi(U(this, G));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    U(this, G).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    U(this, ue)[t] = U(this, ue)[t] || [];
    const r = (...i) => n.call(this, ...i);
    return U(this, ue)[t].push(r), () => {
      U(this, ue)[t] = U(this, ue)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    U(this, G).$destroy();
  }
}
ue = new WeakMap(), G = new WeakMap();
let mr;
typeof HTMLElement == "function" && (mr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    Z(this, "$$ctor");
    /** Slots */
    Z(this, "$$s");
    /** @type {any} The Svelte component instance */
    Z(this, "$$c");
    /** Whether or not the custom element is connected */
    Z(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Z(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Z(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Z(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Z(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Z(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Z(this, "$$me");
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (s) => {
          const a = document.createElement("slot");
          i !== "default" && (a.name = i), we(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = vs(this);
      for (const i of this.$$s)
        i in r && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), n.default = !0) : n[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = pt(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = fs({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Oi(() => {
        lt(() => {
          var i;
          this.$$r = !0;
          for (const s of wt(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = pt(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const a = this.$$c.$on(i, s);
          this.$$l_u.set(s, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, n, r) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = pt(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return wt(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function pt(e, t, n, r) {
  var s;
  const i = (s = n[e]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function vs(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ds(e, t, n, r, i, s) {
  let a = class extends mr {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return wt(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return wt(t).forEach((l) => {
    yt(a.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(o) {
        var v;
        o = pt(l, o, t), this.$$d[l] = o;
        var u = this.$$c;
        if (u) {
          var f = (v = $e(u, l)) == null ? void 0 : v.get;
          f ? u[l] = o : u.$set({ [l]: o });
        }
      }
    });
  }), r.forEach((l) => {
    yt(a.prototype, l, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[l];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
/*! js-cookie v3.0.1 | MIT */
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      e[r] = n[r];
  }
  return e;
}
var _s = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function tn(e, t) {
  function n(i, s, a) {
    if (!(typeof document > "u")) {
      a = _t({}, t, a), typeof a.expires == "number" && (a.expires = new Date(Date.now() + a.expires * 864e5)), a.expires && (a.expires = a.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var l = "";
      for (var o in a)
        a[o] && (l += "; " + o, a[o] !== !0 && (l += "=" + a[o].split(";")[0]));
      return document.cookie = i + "=" + e.write(s, i) + l;
    }
  }
  function r(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var s = document.cookie ? document.cookie.split("; ") : [], a = {}, l = 0; l < s.length; l++) {
        var o = s[l].split("="), u = o.slice(1).join("=");
        try {
          var f = decodeURIComponent(o[0]);
          if (a[f] = e.read(u, f), i === f)
            break;
        } catch {
        }
      }
      return i ? a[i] : a;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function(i, s) {
        n(
          i,
          "",
          _t({}, s, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return tn(this.converter, _t({}, this.attributes, i));
      },
      withConverter: function(i) {
        return tn(_t({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var Vt = tn(_s, { path: "/" });
function hs(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  return r.length !== n.length ? !1 : r.every((i) => n.includes(i));
}
const ps = (e) => e;
function zt(e, { delay: t = 0, duration: n = 400, easing: r = ps } = {}) {
  const i = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (s) => `opacity: ${s * i}`
  };
}
var gs = /* @__PURE__ */ He(`<button class="cookieConsentToggle" part="toggle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17
        0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13
        35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0
        0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77
        54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11
        80.53-12.76l69.13-35.21a132.273 132.273 0 0 0
        57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176
        368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32
        32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33
        32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32
        32-14.33 32-32 32z"></path></svg></button>`), bs = /* @__PURE__ */ He('<button type="submit" class="cookieConsent__Button" part="button button--reject"> </button>'), ws = /* @__PURE__ */ He('<div class="cookieConsentWrapper" part="wrapper"><div class="cookieConsent" part="consent"><div class="cookieConsent__Left" part="consent--left"><div class="cookieConsent__Content" part="consent--content"><p class="cookieConsent__Title" part="consent--title"> </p> <p class="cookieConsent__Description" part="consent--description"><!></p></div></div> <div class="cookieConsent__Right" part="consent--right"><button type="button" class="cookieConsent__Button" part="button button--settings"> </button> <!> <button type="submit" class="cookieConsent__Button cookieConsent__Button--Accept" part="button button--accept"> </button></div></div></div>'), ys = /* @__PURE__ */ He('<div><input type="checkbox" part="operations--list-item-input"> <label> </label> <span class="cookieConsentOperations__ItemLabel" part="operations--list-item-description"> </span></div>'), ms = /* @__PURE__ */ He('<div class="cookieConsentOperations" part="operations"><div class="cookieConsentOperations__List" part="operations--list"><!> <button type="submit" class="cookieConsent__Button cookieConsent__Button--Close" part="button button--close"> </button></div></div>'), $s = /* @__PURE__ */ He("<!> <!> <!>", 1);
function $r(e, t) {
  dr(t, !1);
  const n = /* @__PURE__ */ re(), r = /* @__PURE__ */ re(), i = /* @__PURE__ */ re(), s = /* @__PURE__ */ re(), a = ls();
  let l = q(t, "cookieName", 12, null), o = q(t, "canRejectCookies", 12, !1), u = q(t, "showEditIcon", 12, !0), f = q(t, "acceptAllLabel", 12, "Accept all"), v = q(t, "acceptSelectedLabel", 12, "Accept selected"), c = q(t, "rejectLabel", 12, "Reject all"), d = q(t, "settingsLabel", 12, "Cookie settings"), _ = q(t, "closeLabel", 12, "Close settings"), g = q(t, "editLabel", 12, "Edit cookie settings"), b = q(t, "visible", 12, !0), w = /* @__PURE__ */ re(!1), k = /* @__PURE__ */ re(!1), L = q(t, "heading", 12, "GDPR Notice"), x = q(t, "description", 12, "We use cookies to offer a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. Please review our privacy policy & cookies information page. By clicking accept, you consent to our privacy policy & use of cookies."), T = q(t, "cookieConfig", 28, () => ({}));
  const K = { sameSite: "strict" };
  let E = q(t, "choices", 28, () => ({}));
  const S = /* @__PURE__ */ re(Object.assign({}, {
    necessary: {
      label: "Necessary cookies",
      description: "Used for cookie control. Can't be turned off.",
      value: !0
    },
    tracking: {
      label: "Tracking cookies",
      description: "Used for advertising purposes.",
      value: !0
    },
    analytics: {
      label: "Analytics cookies",
      description: "Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.",
      value: !0
    },
    marketing: {
      label: "Marketing cookies",
      description: "Used for marketing data.",
      value: !0
    }
  }, E()));
  function Ce() {
    I(w, b());
  }
  ss(() => {
    if (!l())
      throw new Error("You must set gdpr cookie name");
    const h = Vt.get(l());
    if (!h) {
      Ce();
      return;
    }
    try {
      const { choices: y } = JSON.parse(h);
      if (!hs(p(r), y))
        throw new Error("cookie consent has changed");
      Bt(y);
    } catch {
      kr(), Ce();
    }
  });
  function _n(h) {
    const y = /* @__PURE__ */ new Date();
    y.setDate(y.getDate() + 365);
    const F = Object.assign({}, K, T(), { expires: y });
    Vt.set(l(), JSON.stringify({ choices: h }), F);
  }
  function kr() {
    const { path: h } = T();
    Vt.remove(l(), Object.assign({}, h ? { path: h } : {}));
  }
  function Bt(h) {
    const y = Object.keys(p(r));
    for (const F of y) {
      const te = h[F];
      p(S)[F] && En(S, p(S)[F].value = te), a(F, { agreed: te }), window.dispatchEvent(new CustomEvent(`consent:${F}`, { detail: { agreed: te } }));
    }
    I(w, !1);
  }
  function Er() {
    _n(p(i)), Bt(p(i));
  }
  function Cr() {
    _n(p(r)), Bt(p(r));
  }
  ct(() => p(S), () => {
    I(n, Object.values(p(S)).map((h, y) => Object.assign({}, h, {
      id: Object.keys(p(S))[y]
    })));
  }), ct(() => p(n), () => {
    I(r, p(n).reduce(
      (h, y) => (h[y.id] = y.value ? y.value : !1, h),
      {}
    ));
  }), ct(() => p(n), () => {
    I(i, p(n).reduce(
      (h, y) => (h[y.id] = y.id === "necessary", h),
      {}
    ));
  }), ct(() => p(r), () => {
    I(s, Object.values(p(r)).every((h) => h === !0));
  }), Si(), is();
  var hn = $s(), pn = An(hn);
  {
    var Ar = (h) => {
      var y = gs();
      Je(() => X(y, "aria-label", g())), Ke("click", y, Ce), Yt(3, y, () => zt), we(h, y);
    };
    Ze(pn, (h) => {
      u() && h(Ar);
    });
  }
  var gn = oe(pn, 2);
  {
    var Tr = (h) => {
      var y = ws(), F = R(y), te = R(F), Ae = R(te), Ye = R(Ae), Ve = R(Ye, !0);
      N(Ye);
      var D = oe(Ye, 2), ot = R(D);
      Yi(ot, x), N(D), N(Ae), N(te);
      var ut = oe(te, 2), Te = R(ut), ze = R(Te, !0);
      N(Te);
      var pe = oe(Te, 2);
      {
        var ft = (Ge) => {
          var ge = bs(), Ft = R(ge, !0);
          N(ge), Je(() => {
            X(ge, "aria-label", c()), Le(Ft, c());
          }), Ke("click", ge, Er), we(Ge, ge);
        };
        Ze(pe, (Ge) => {
          o() && Ge(ft);
        });
      }
      var ne = oe(pe, 2), Oe = R(ne, !0);
      N(ne), N(ut), N(F), N(y), Je(() => {
        Le(Ve, L()), X(Te, "aria-label", d()), Le(ze, d()), X(ne, "aria-label", p(s) ? f() : v()), Le(Oe, p(s) ? f() : v());
      }), Ke("click", Te, () => {
        I(k, !0);
      }), Ke("click", ne, Cr), Yt(3, y, () => zt), we(h, y);
    };
    Ze(gn, (h) => {
      p(w) && h(Tr);
    });
  }
  var Or = oe(gn, 2);
  {
    var Lr = (h) => {
      var y = ms(), F = R(y), te = R(F);
      Ui(te, 1, () => p(n), (Ve) => Ve.id, (Ve, D) => {
        var ot = ji(), ut = An(ot);
        {
          var Te = (ze) => {
            var pe = ys();
            let ft;
            var ne = R(pe);
            Ji(ne);
            var Oe = oe(ne, 2), Ge = R(Oe, !0);
            N(Oe);
            var ge = oe(Oe, 2), Ft = R(ge, !0);
            N(ge), N(pe), Je(
              (Ut) => {
                ft = zi(pe, 1, "cookieConsentOperations__Item", null, ft, Ut), X(pe, "part", `operations--list-item ${p(D).id === "necessary" ? "operations--list-item--disabled" : ""}`), X(ne, "id", `gdpr-check-${p(D).id}`), ne.disabled = p(D).id === "necessary", X(Oe, "for", `gdpr-check-${p(D).id}`), X(Oe, "part", `operations--list-item-label ${p(S)[p(D).id].value ? "operations--list-item-label--checked" : ""}`), Le(Ge, p(D).label), Le(Ft, p(D).description);
              },
              [
                () => ({ disabled: p(D).id === "necessary" })
              ],
              un
            ), ns(ne, () => p(S)[p(D).id].value, (Ut) => En(S, p(S)[p(D).id].value = Ut)), we(ze, pe);
          };
          Ze(ut, (ze) => {
            Object.hasOwnProperty.call(p(S), p(D).id) && p(S)[p(D).id] && ze(Te);
          });
        }
        we(Ve, ot);
      });
      var Ae = oe(te, 2), Ye = R(Ae, !0);
      N(Ae), N(F), N(y), Je(() => {
        X(Ae, "aria-label", _()), Le(Ye, _());
      }), Ke("click", Ae, () => {
        I(k, !1);
      }), Yt(3, y, () => zt), we(h, y);
    };
    Ze(Or, (h) => {
      p(k) && h(Lr);
    });
  }
  return we(e, hn), rs(t, "show", Ce), _r({
    show: Ce,
    get cookieName() {
      return l();
    },
    set cookieName(h) {
      l(h), P();
    },
    get canRejectCookies() {
      return o();
    },
    set canRejectCookies(h) {
      o(h), P();
    },
    get showEditIcon() {
      return u();
    },
    set showEditIcon(h) {
      u(h), P();
    },
    get acceptAllLabel() {
      return f();
    },
    set acceptAllLabel(h) {
      f(h), P();
    },
    get acceptSelectedLabel() {
      return v();
    },
    set acceptSelectedLabel(h) {
      v(h), P();
    },
    get rejectLabel() {
      return c();
    },
    set rejectLabel(h) {
      c(h), P();
    },
    get settingsLabel() {
      return d();
    },
    set settingsLabel(h) {
      d(h), P();
    },
    get closeLabel() {
      return _();
    },
    set closeLabel(h) {
      _(h), P();
    },
    get editLabel() {
      return g();
    },
    set editLabel(h) {
      g(h), P();
    },
    get visible() {
      return b();
    },
    set visible(h) {
      b(h), P();
    },
    get heading() {
      return L();
    },
    set heading(h) {
      L(h), P();
    },
    get description() {
      return x();
    },
    set description(h) {
      x(h), P();
    },
    get cookieConfig() {
      return T();
    },
    set cookieConfig(h) {
      T(h), P();
    },
    get choices() {
      return E();
    },
    set choices(h) {
      E(h), P();
    }
  });
}
customElements.define("cookie-consent-banner", ds(
  $r,
  {
    cookieName: { attribute: "cookie-name" },
    canRejectCookies: {
      attribute: "can-reject-cookies",
      type: "Boolean"
    },
    showEditIcon: { attribute: "show-edit-icon", type: "Boolean" },
    acceptAllLabel: { attribute: "accept-all-label" },
    acceptSelectedLabel: { attribute: "accept-selected-label" },
    rejectLabel: { attribute: "reject-label" },
    settingsLabel: { attribute: "settings-label" },
    closeLabel: { attribute: "close-label" },
    editLabel: { attribute: "edit-label" },
    visible: { attribute: "visible", type: "Boolean" },
    settingsShown: { attribute: "settings-shown", type: "Boolean" },
    cookieConfig: { attribute: "cookie-config", type: "Object" },
    shown: { attribute: "shown", type: "Boolean" },
    choices: { attribute: "choices", type: "Object" },
    heading: {},
    description: {}
  },
  [],
  ["show"],
  !0
));
const Es = {
  Banner: $r
};
export {
  Es as default
};
