!function (e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = e.length, n = Z.type(e);
    return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
  }

  function r(e, t, n) {
    if (Z.isFunction(t)) return Z.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n
    });
    if (t.nodeType) return Z.grep(e, function (e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (at.test(t)) return Z.filter(t, e, n);
      t = Z.filter(t, e)
    }
    return Z.grep(e, function (e) {
      return U.call(t, e) >= 0 !== n
    })
  }

  function i(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) ;
    return e
  }

  function o(e) {
    var t = ht[e] = {};
    return Z.each(e.match(pt) || [], function (e, n) {
      t[n] = !0
    }), t
  }

  function s() {
    J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
  }

  function a() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {}
      }
    }), this.expando = Z.expando + a.uid++
  }

  function u(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(xt, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
      try {
        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : bt.test(n) ? Z.parseJSON(n) : n
      } catch (i) {
      }
      yt.set(e, t, n)
    } else n = void 0;
    return n
  }

  function l() {
    return !0
  }

  function c() {
    return !1
  }

  function f() {
    try {
      return J.activeElement
    } catch (e) {
    }
  }

  function d(e, t) {
    return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function p(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function h(e) {
    var t = Ot.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function g(e, t) {
    for (var n = 0, r = e.length; r > n; n++) vt.set(e[n], "globalEval", !t || vt.get(t[n], "globalEval"))
  }

  function m(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (vt.hasData(e) && (o = vt.access(e), s = vt.set(t, o), l = o.events)) {
        delete s.handle, s.events = {};
        for (i in l) for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
      }
      yt.hasData(e) && (a = yt.access(e), u = Z.extend({}, a), yt.set(t, u))
    }
  }

  function v(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
  }

  function y(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && kt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
  }

  function b(t, n) {
    var r, i = Z(n.createElement(t)).appendTo(n.body),
      o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
    return i.detach(), o
  }

  function x(e) {
    var t = J, n = Rt[e];
    return n || (n = b(e, t), "none" !== n && n || (Mt = (Mt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Mt[0].contentDocument, t.write(), t.close(), n = b(e, t), Mt.detach()), Rt[e] = n), n
  }

  function w(e, t, n) {
    var r, i, o, s, a = e.style;
    return n = n || Bt(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), _t.test(s) && It.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
  }

  function T(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  function C(e, t) {
    if (t in e) return t;
    for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Gt.length; i--;) if (t = Gt[i] + n, t in e) return t;
    return r
  }

  function k(e, t, n) {
    var r = Xt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function N(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Z.css(e, n + Tt[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Tt[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Tt[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Tt[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Tt[o] + "Width", !0, i)));
    return s
  }

  function E(e, t, n) {
    var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Bt(e),
      s = "border-box" === Z.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), _t.test(i)) return i;
      r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
    }
    return i + N(e, t, n || (s ? "border" : "content"), r, o) + "px"
  }

  function S(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = vt.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ct(r) && (o[s] = vt.access(r, "olddisplay", x(r.nodeName)))) : (i = Ct(r), "none" === n && i || vt.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
    for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
    return e
  }

  function D(e, t, n, r, i) {
    return new D.prototype.init(e, t, n, r, i)
  }

  function j() {
    return setTimeout(function () {
      Qt = void 0
    }), Qt = Z.now()
  }

  function A(e, t) {
    var n, r = 0, i = {height: e};
    for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Tt[r], i["margin" + n] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function L(e, t, n) {
    for (var r, i = (nn[t] || []).concat(nn["*"]), o = 0, s = i.length; s > o; o++) if (r = i[o].call(n, t, e)) return r
  }

  function $(e, t, n) {
    var r, i, o, s, a, u, l, c, f = this, d = {}, p = e.style, h = e.nodeType && Ct(e), g = vt.get(e, "fxshow");
    n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
      a.unqueued || u()
    }), a.unqueued++, f.always(function () {
      f.always(function () {
        a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = Z.css(e, "display"), c = "none" === l ? vt.get(e, "olddisplay") || x(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
    }));
    for (r in t) if (i = t[r], Kt.exec(i)) {
      if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
        if ("show" !== i || !g || void 0 === g[r]) continue;
        h = !0
      }
      d[r] = g && g[r] || Z.style(e, r)
    } else l = void 0;
    if (Z.isEmptyObject(d)) "inline" === ("none" === l ? x(e.nodeName) : l) && (p.display = l); else {
      g ? "hidden" in g && (h = g.hidden) : g = vt.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function () {
        Z(e).hide()
      }), f.done(function () {
        var t;
        vt.remove(e, "fxshow");
        for (t in d) Z.style(e, t, d[t])
      });
      for (r in d) s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
    }
  }

  function q(e, t) {
    var n, r, i, o, s;
    for (n in e) if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
      o = s.expand(o), delete e[r];
      for (n in o) n in e || (e[n] = o[n], t[n] = i)
    } else t[r] = i
  }

  function H(e, t, n) {
    var r, i, o = 0, s = tn.length, a = Z.Deferred().always(function () {
      delete u.elem
    }), u = function () {
      if (i) return !1;
      for (var t = Qt || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
      return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
    }, l = a.promise({
      elem: e,
      props: Z.extend({}, t),
      opts: Z.extend(!0, {specialEasing: {}}, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Qt || j(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r
      },
      stop: function (t) {
        var n = 0, r = t ? l.tweens.length : 0;
        if (i) return this;
        for (i = !0; r > n; n++) l.tweens[n].run(1);
        return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
      }
    }), c = l.props;
    for (q(c, l.opts.specialEasing); s > o; o++) if (r = tn[o].call(l, e, c, l.opts)) return r;
    return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function F(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0, o = t.toLowerCase().match(pt) || [];
      if (Z.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function O(e, t, n, r) {
    function i(a) {
      var u;
      return o[a] = !0, Z.each(e[a] || [], function (e, a) {
        var l = a(t, n, r);
        return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
      }), u
    }

    var o = {}, s = e === xn;
    return i(t.dataTypes[0]) || !o["*"] && i("*")
  }

  function P(e, t) {
    var n, r, i = Z.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && Z.extend(!0, e, r), e
  }

  function W(e, t, n) {
    for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r) for (i in a) if (a[i] && a[i].test(r)) {
      u.unshift(i);
      break
    }
    if (u[0] in n) o = u[0]; else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break
        }
        s || (s = i)
      }
      o = o || s
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
  }

  function M(e, t, n, r) {
    var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
    if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
    for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
      if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
        break
      }
      if (s !== !0) if (s && e["throws"]) t = s(t); else try {
        t = s(t)
      } catch (f) {
        return {state: "parsererror", error: s ? f : "No conversion from " + u + " to " + o}
      }
    }
    return {state: "success", data: t}
  }

  function R(e, t, n, r) {
    var i;
    if (Z.isArray(t)) Z.each(t, function (t, i) {
      n || Nn.test(e) ? r(e, i) : R(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
    }); else if (n || "object" !== Z.type(t)) r(e, t); else for (i in t) R(e + "[" + i + "]", t[i], n, r)
  }

  function I(e) {
    return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }

  var _ = [], B = _.slice, z = _.concat, X = _.push, U = _.indexOf, V = {}, Y = V.toString, G = V.hasOwnProperty,
    Q = {}, J = e.document, K = "2.1.3", Z = function (e, t) {
      return new Z.fn.init(e, t)
    }, et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, tt = /^-ms-/, nt = /-([\da-z])/gi, rt = function (e, t) {
      return t.toUpperCase()
    };
  Z.fn = Z.prototype = {
    jquery: K, constructor: Z, selector: "", length: 0, toArray: function () {
      return B.call(this)
    }, get: function (e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
    }, pushStack: function (e) {
      var t = Z.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
      return Z.each(this, e, t)
    }, map: function (e) {
      return this.pushStack(Z.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    }, slice: function () {
      return this.pushStack(B.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor(null)
    }, push: X, sort: _.sort, splice: _.splice
  }, Z.extend = Z.fn.extend = function () {
    var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
    for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
    return s
  }, Z.extend({
    expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e)
    }, noop: function () {
    }, isFunction: function (e) {
      return "function" === Z.type(e)
    }, isArray: Array.isArray, isWindow: function (e) {
      return null != e && e === e.window
    }, isNumeric: function (e) {
      return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
    }, isPlainObject: function (e) {
      return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
    }, isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
    }, globalEval: function (e) {
      var t, n = eval;
      e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
    }, camelCase: function (e) {
      return e.replace(tt, "ms-").replace(nt, rt)
    }, nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, r) {
      var i, o = 0, s = e.length, a = n(e);
      if (r) {
        if (a) for (; s > o && (i = t.apply(e[o], r), i !== !1); o++) ; else for (o in e) if (i = t.apply(e[o], r), i === !1) break
      } else if (a) for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++) ; else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
      return e
    }, trim: function (e) {
      return null == e ? "" : (e + "").replace(et, "")
    }, makeArray: function (e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
    }, inArray: function (e, t, n) {
      return null == t ? -1 : U.call(t, e, n)
    }, merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
      return e.length = i, e
    }, grep: function (e, t, n) {
      for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
      return i
    }, map: function (e, t, r) {
      var i, o = 0, s = e.length, a = n(e), u = [];
      if (a) for (; s > o; o++) i = t(e[o], o, r), null != i && u.push(i); else for (o in e) i = t(e[o], o, r), null != i && u.push(i);
      return z.apply([], u)
    }, guid: 1, proxy: function (e, t) {
      var n, r, i;
      return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = B.call(arguments, 2), i = function () {
        return e.apply(t || this, r.concat(B.call(arguments)))
      }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
    }, now: Date.now, support: Q
  }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    V["[object " + t + "]"] = t.toLowerCase()
  });
  var it = function (e) {
    function t(e, t, n, r) {
      var i, o, s, a, u, l, f, p, h, g;
      if ((t ? t.ownerDocument || t : R) !== $ && L(t), t = t || $, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
      if (!r && H) {
        if (11 !== a && (i = yt.exec(e))) if (s = i[1]) {
          if (9 === a) {
            if (o = t.getElementById(s), !o || !o.parentNode) return n;
            if (o.id === s) return n.push(o), n
          } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && W(t, o) && o.id === s) return n.push(o), n
        } else {
          if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
          if ((s = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(s)), n
        }
        if (w.qsa && (!F || !F.test(e))) {
          if (p = f = M, h = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
            for (l = N(e), (f = t.getAttribute("id")) ? p = f.replace(xt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + d(l[u]);
            h = bt.test(e) && c(t.parentNode) || t, g = l.join(",")
          }
          if (g) try {
            return K.apply(n, h.querySelectorAll(g)), n
          } catch (m) {
          } finally {
            f || t.removeAttribute("id")
          }
        }
      }
      return S(e.replace(ut, "$1"), t, n, r)
    }

    function n() {
      function e(n, r) {
        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
      }

      var t = [];
      return e
    }

    function r(e) {
      return e[M] = !0, e
    }

    function i(e) {
      var t = $.createElement("div");
      try {
        return !!e(t)
      } catch (n) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
    }

    function s(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (r) return r;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1
    }

    function a(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }

    function u(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function l(e) {
      return r(function (t) {
        return t = +t, r(function (n, r) {
          for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function c(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }

    function f() {
    }

    function d(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r
    }

    function p(e, t, n) {
      var r = t.dir, i = n && "parentNode" === r, o = _++;
      return t.first ? function (t, n, o) {
        for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
      } : function (t, n, s) {
        var a, u, l = [I, o];
        if (s) {
          for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, s)) return !0
        } else for (; t = t[r];) if (1 === t.nodeType || i) {
          if (u = t[M] || (t[M] = {}), (a = u[r]) && a[0] === I && a[1] === o) return l[2] = a[2];
          if (u[r] = l, l[2] = e(t, n, s)) return !0
        }
      }
    }

    function h(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function g(e, n, r) {
      for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
      return r
    }

    function m(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++) (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
      return s
    }

    function v(e, t, n, i, o, s) {
      return i && !i[M] && (i = v(i)), o && !o[M] && (o = v(o, s)), r(function (r, s, a, u) {
        var l, c, f, d = [], p = [], h = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []),
          y = !e || !r && t ? v : m(v, d, e, a, u), b = n ? o || (r ? e : h || i) ? [] : s : y;
        if (n && n(y, b, a, u), i) for (l = m(b, p), i(l, [], a, u), c = l.length; c--;) (f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (l = [], c = b.length; c--;) (f = b[c]) && l.push(y[c] = f);
              o(null, b = [], l, u)
            }
            for (c = b.length; c--;) (f = b[c]) && (l = o ? et(r, f) : d[c]) > -1 && (r[l] = !(s[l] = f))
          }
        } else b = m(b === s ? b.splice(h, b.length) : b), o ? o(null, s, b, u) : K.apply(s, b)
      })
    }

    function y(e) {
      for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = p(function (e) {
        return e === t
      }, s, !0), l = p(function (e) {
        return et(t, e) > -1
      }, s, !0), c = [function (e, n, r) {
        var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
        return t = null, i
      }]; i > a; a++) if (n = T.relative[e[a].type]) c = [p(h(c), n)]; else {
        if (n = T.filter[e[a].type].apply(null, e[a].matches), n[M]) {
          for (r = ++a; i > r && !T.relative[e[r].type]; r++) ;
          return v(a > 1 && h(c), a > 1 && d(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ut, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && d(e))
        }
        c.push(n)
      }
      return h(c)
    }

    function b(e, n) {
      var i = n.length > 0, o = e.length > 0, s = function (r, s, a, u, l) {
        var c, f, d, p = 0, h = "0", g = r && [], v = [], y = D, b = r || o && T.find.TAG("*", l),
          x = I += null == y ? 1 : Math.random() || .1, w = b.length;
        for (l && (D = s !== $ && s); h !== w && null != (c = b[h]); h++) {
          if (o && c) {
            for (f = 0; d = e[f++];) if (d(c, s, a)) {
              u.push(c);
              break
            }
            l && (I = x)
          }
          i && ((c = !d && c) && p--, r && g.push(c))
        }
        if (p += h, i && h !== p) {
          for (f = 0; d = n[f++];) d(g, v, s, a);
          if (r) {
            if (p > 0) for (; h--;) g[h] || v[h] || (v[h] = Q.call(u));
            v = m(v)
          }
          K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
        }
        return l && (I = x, D = y), g
      };
      return i ? r(s) : s
    }

    var x, w, T, C, k, N, E, S, D, j, A, L, $, q, H, F, O, P, W, M = "sizzle" + 1 * new Date, R = e.document, I = 0,
      _ = 0, B = n(), z = n(), X = n(), U = function (e, t) {
        return e === t && (A = !0), 0
      }, V = 1 << 31, Y = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, K = G.push, Z = G.slice,
      et = function (e, t) {
        for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
        return -1
      },
      tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = rt.replace("w", "w#"),
      ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
      st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
      at = new RegExp(nt + "+", "g"), ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
      lt = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
      ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), dt = new RegExp(st),
      pt = new RegExp("^" + it + "$"), ht = {
        ID: new RegExp("^#(" + rt + ")"),
        CLASS: new RegExp("^\\.(" + rt + ")"),
        TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + ot),
        PSEUDO: new RegExp("^" + st),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + tt + ")$", "i"),
        needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
      }, gt = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/,
      yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, xt = /'|\\/g,
      wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), Tt = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }, Ct = function () {
        L()
      };
    try {
      K.apply(G = Z.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
    } catch (kt) {
      K = {
        apply: G.length ? function (e, t) {
          J.apply(e, Z.call(t))
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];) ;
          e.length = n - 1
        }
      }
    }
    w = t.support = {}, k = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1
    }, L = t.setDocument = function (e) {
      var t, n, r = e ? e.ownerDocument || e : R;
      return r !== $ && 9 === r.nodeType && r.documentElement ? ($ = r, q = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), H = !k(r), w.attributes = i(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), w.getElementsByTagName = i(function (e) {
        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
      }), w.getElementsByClassName = vt.test(r.getElementsByClassName), w.getById = i(function (e) {
        return q.appendChild(e).id = M, !r.getElementsByName || !r.getElementsByName(M).length
      }), w.getById ? (T.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && H) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      }, T.filter.ID = function (e) {
        var t = e.replace(wt, Tt);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }) : (delete T.find.ID, T.filter.ID = function (e) {
        var t = e.replace(wt, Tt);
        return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[i++];) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
        return H ? t.getElementsByClassName(e) : void 0
      }, O = [], F = [], (w.qsa = vt.test(r.querySelectorAll)) && (i(function (e) {
        q.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + M + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]")
      }), i(function (e) {
        var t = r.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
      })), (w.matchesSelector = vt.test(P = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function (e) {
        w.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), O.push("!=", st)
      }), F = F.length && new RegExp(F.join("|")), O = O.length && new RegExp(O.join("|")), t = vt.test(q.compareDocumentPosition), W = t || vt.test(q.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1
      }, U = t ? function (e, t) {
        if (e === t) return A = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && W(R, e) ? -1 : t === r || t.ownerDocument === R && W(R, t) ? 1 : j ? et(j, e) - et(j, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t) return A = !0, 0;
        var n, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
        if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : j ? et(j, e) - et(j, t) : 0;
        if (o === a) return s(e, t);
        for (n = e; n = n.parentNode;) u.unshift(n);
        for (n = t; n = n.parentNode;) l.unshift(n);
        for (; u[i] === l[i];) i++;
        return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
      }, r) : $
    }, t.matches = function (e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== $ && L(e), n = n.replace(ft, "='$1']"), !(!w.matchesSelector || !H || O && O.test(n) || F && F.test(n))) try {
        var r = P.call(e, n);
        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (i) {
      }
      return t(n, $, null, [e]).length > 0
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== $ && L(e), W(e, t)
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== $ && L(e);
      var n = T.attrHandle[t.toLowerCase()], r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
      return void 0 !== r ? r : w.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function (e) {
      var t, n = [], r = 0, i = 0;
      if (A = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), A) {
        for (; t = e[i++];) t === e[i] && (r = n.push(i));
        for (; r--;) e.splice(n[r], 1)
      }
      return j = null, e
    }, C = t.getText = function (e) {
      var t, n = "", r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else for (; t = e[r++];) n += C(t);
      return n
    }, T = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: ht,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(wt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        }, PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(wt, Tt).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = B[e + " "];
          return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && B(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
          })
        }, ATTR: function (e, n, r) {
          return function (i) {
            var o = t.attr(i, e);
            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
          }
        }, CHILD: function (e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode
          } : function (t, n, u) {
            var l, c, f, d, p, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode,
              v = a && t.nodeName.toLowerCase(), y = !u && !a;
            if (m) {
              if (o) {
                for (; g;) {
                  for (f = t; f = f[g];) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [s ? m.firstChild : m.lastChild], s && y) {
                for (c = m[M] || (m[M] = {}), l = c[e] || [], p = l[0] === I && l[1], d = l[0] === I && l[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (d = p = 0) || h.pop();) if (1 === f.nodeType && ++d && f === t) {
                  c[e] = [I, p, d];
                  break
                }
              } else if (y && (l = (t[M] || (t[M] = {}))[e]) && l[0] === I) d = l[1]; else for (; (f = ++p && f && f[g] || (d = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[M] || (f[M] = {}))[e] = [I, d]), f !== t));) ;
              return d -= i, d === r || d % r === 0 && d / r >= 0
            }
          }
        }, PSEUDO: function (e, n) {
          var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
            for (var r, i = o(e, n), s = i.length; s--;) r = et(e, i[s]), e[r] = !(t[r] = i[s])
          }) : function (e) {
            return o(e, 0, i)
          }) : o
        }
      },
      pseudos: {
        not: r(function (e) {
          var t = [], n = [], i = E(e.replace(ut, "$1"));
          return i[M] ? r(function (e, t, n, r) {
            for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
          }) : function (e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
          }
        }), has: r(function (e) {
          return function (n) {
            return t(e, n).length > 0
          }
        }), contains: r(function (e) {
          return e = e.replace(wt, Tt), function (t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
          }
        }), lang: r(function (e) {
          return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase(), function (t) {
            var n;
            do if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }), target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        }, root: function (e) {
          return e === q
        }, focus: function (e) {
          return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
          return e.disabled === !1
        }, disabled: function (e) {
          return e.disabled === !0
        }, checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0
        }, parent: function (e) {
          return !T.pseudos.empty(e)
        }, header: function (e) {
          return mt.test(e.nodeName)
        }, input: function (e) {
          return gt.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        }, first: l(function () {
          return [0]
        }), last: l(function (e, t) {
          return [t - 1]
        }), eq: l(function (e, t, n) {
          return [0 > n ? n + t : n]
        }), even: l(function (e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e
        }), odd: l(function (e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e
        }), lt: l(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
          return e
        }), gt: l(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }, T.pseudos.nth = T.pseudos.eq;
    for (x in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) T.pseudos[x] = a(x);
    for (x in {submit: !0, reset: !0}) T.pseudos[x] = u(x);
    return f.prototype = T.filters = T.pseudos, T.setFilters = new f, N = t.tokenize = function (e, n) {
      var r, i, o, s, a, u, l, c = z[e + " "];
      if (c) return n ? 0 : c.slice(0);
      for (a = e, u = [], l = T.preFilter; a;) {
        (!r || (i = lt.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ct.exec(a)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(ut, " ")
        }), a = a.slice(r.length));
        for (s in T.filter) !(i = ht[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
          value: r,
          type: s,
          matches: i
        }), a = a.slice(r.length));
        if (!r) break
      }
      return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
    }, E = t.compile = function (e, t) {
      var n, r = [], i = [], o = X[e + " "];
      if (!o) {
        for (t || (t = N(e)), n = t.length; n--;) o = y(t[n]), o[M] ? r.push(o) : i.push(o);
        o = X(e, b(i, r)), o.selector = e
      }
      return o
    }, S = t.select = function (e, t, n, r) {
      var i, o, s, a, u, l = "function" == typeof e && e, f = !r && N(e = l.selector || e);
      if (n = n || [], 1 === f.length) {
        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && H && T.relative[o[1].type]) {
          if (t = (T.find.ID(s.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);) if ((u = T.find[a]) && (r = u(s.matches[0].replace(wt, Tt), bt.test(o[0].type) && c(t.parentNode) || t))) {
          if (o.splice(i, 1), e = r.length && d(o), !e) return K.apply(n, r), n;
          break
        }
      }
      return (l || E(e, f))(r, t, !H, n, bt.test(e) && c(t.parentNode) || t), n
    }, w.sortStable = M.split("").sort(U).join("") === M, w.detectDuplicates = !!A, L(), w.sortDetached = i(function (e) {
      return 1 & e.compareDocumentPosition($.createElement("div"))
    }), i(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function (e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), w.attributes && i(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function (e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }), i(function (e) {
      return null == e.getAttribute("disabled")
    }) || o(tt, function (e, t, n) {
      var r;
      return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), t
  }(e);
  Z.find = it, Z.expr = it.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = it.uniqueSort, Z.text = it.getText, Z.isXMLDoc = it.isXML, Z.contains = it.contains;
  var ot = Z.expr.match.needsContext, st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, at = /^.[^:#\[\.,]*$/;
  Z.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, Z.fn.extend({
    find: function (e) {
      var t, n = this.length, r = [], i = this;
      if ("string" != typeof e) return this.pushStack(Z(e).filter(function () {
        for (t = 0; n > t; t++) if (Z.contains(i[t], this)) return !0
      }));
      for (t = 0; n > t; t++) Z.find(e, i[t], r);
      return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
    }, filter: function (e) {
      return this.pushStack(r(this, e || [], !1))
    }, not: function (e) {
      return this.pushStack(r(this, e || [], !0))
    }, is: function (e) {
      return !!r(this, "string" == typeof e && ot.test(e) ? Z(e) : e || [], !1).length
    }
  });
  var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = Z.fn.init = function (e, t) {
    var n, r;
    if (!e) return this;
    if ("string" == typeof e) {
      if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : lt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ut).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), st.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this
      }
      return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ut.ready ? ut.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
  };
  ct.prototype = Z.fn, ut = Z(J);
  var ft = /^(?:parents|prev(?:Until|All))/, dt = {children: !0, contents: !0, next: !0, prev: !0};
  Z.extend({
    dir: function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
        if (i && Z(e).is(n)) break;
        r.push(e)
      }
      return r
    }, sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  }), Z.fn.extend({
    has: function (e) {
      var t = Z(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; n > e; e++) if (Z.contains(this, t[e])) return !0
      })
    }, closest: function (e, t) {
      for (var n, r = 0, i = this.length, o = [], s = ot.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
        o.push(n);
        break
      }
      return this.pushStack(o.length > 1 ? Z.unique(o) : o)
    }, index: function (e) {
      return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), Z.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return Z.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return Z.dir(e, "parentNode", n)
    }, next: function (e) {
      return i(e, "nextSibling")
    }, prev: function (e) {
      return i(e, "previousSibling")
    }, nextAll: function (e) {
      return Z.dir(e, "nextSibling")
    }, prevAll: function (e) {
      return Z.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return Z.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return Z.dir(e, "previousSibling", n)
    }, siblings: function (e) {
      return Z.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return Z.sibling(e.firstChild)
    }, contents: function (e) {
      return e.contentDocument || Z.merge([], e.childNodes)
    }
  }, function (e, t) {
    Z.fn[e] = function (n, r) {
      var i = Z.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (dt[e] || Z.unique(i), ft.test(e) && i.reverse()), this.pushStack(i)
    }
  });
  var pt = /\S+/g, ht = {};
  Z.Callbacks = function (e) {
    e = "string" == typeof e ? ht[e] || o(e) : Z.extend({}, e);
    var t, n, r, i, s, a, u = [], l = !e.once && [], c = function (o) {
      for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++) if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
        t = !1;
        break
      }
      r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
    }, f = {
      add: function () {
        if (u) {
          var n = u.length;
          !function o(t) {
            Z.each(t, function (t, n) {
              var r = Z.type(n);
              "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
            })
          }(arguments), r ? s = u.length : t && (i = n, c(t))
        }
        return this
      }, remove: function () {
        return u && Z.each(arguments, function (e, t) {
          for (var n; (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
        }), this
      }, has: function (e) {
        return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
      }, empty: function () {
        return u = [], s = 0, this
      }, disable: function () {
        return u = l = t = void 0, this
      }, disabled: function () {
        return !u
      }, lock: function () {
        return l = void 0, t || f.disable(), this
      }, locked: function () {
        return !l
      }, fireWith: function (e, t) {
        return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
      }, fire: function () {
        return f.fireWith(this, arguments), this
      }, fired: function () {
        return !!n
      }
    };
    return f
  }, Z.extend({
    Deferred: function (e) {
      var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]],
        n = "pending", r = {
          state: function () {
            return n
          }, always: function () {
            return i.done(arguments).fail(arguments), this
          }, then: function () {
            var e = arguments;
            return Z.Deferred(function (n) {
              Z.each(t, function (t, o) {
                var s = Z.isFunction(e[t]) && e[t];
                i[o[1]](function () {
                  var e = s && s.apply(this, arguments);
                  e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                })
              }), e = null
            }).promise()
          }, promise: function (e) {
            return null != e ? Z.extend(e, r) : r
          }
        }, i = {};
      return r.pipe = r.then, Z.each(t, function (e, o) {
        var s = o[2], a = o[3];
        r[o[1]] = s.add, a && s.add(function () {
          n = a
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this
        }, i[o[0] + "With"] = s.fireWith
      }), r.promise(i), e && e.call(i, i), i
    }, when: function (e) {
      var t, n, r, i = 0, o = B.call(arguments), s = o.length, a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
        u = 1 === a ? e : Z.Deferred(), l = function (e, n, r) {
          return function (i) {
            n[e] = this, r[e] = arguments.length > 1 ? B.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
          }
        };
      if (s > 1) for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
      return a || u.resolveWith(r, o), u.promise()
    }
  });
  var gt;
  Z.fn.ready = function (e) {
    return Z.ready.promise().done(e), this
  }, Z.extend({
    isReady: !1, readyWait: 1, holdReady: function (e) {
      e ? Z.readyWait++ : Z.ready(!0)
    }, ready: function (e) {
      (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (gt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
    }
  }), Z.ready.promise = function (t) {
    return gt || (gt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), gt.promise(t)
  }, Z.ready.promise();
  var mt = Z.access = function (e, t, n, r, i, o, s) {
    var a = 0, u = e.length, l = null == n;
    if ("object" === Z.type(n)) {
      i = !0;
      for (a in n) Z.access(e, t, a, n[a], !0, o, s)
    } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
      return l.call(Z(e), n)
    })), t)) for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  };
  Z.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
    key: function (e) {
      if (!a.accepts(e)) return 0;
      var t = {}, n = e[this.expando];
      if (!n) {
        n = a.uid++;
        try {
          t[this.expando] = {value: n}, Object.defineProperties(e, t)
        } catch (r) {
          t[this.expando] = n, Z.extend(e, t)
        }
      }
      return this.cache[n] || (this.cache[n] = {}), n
    }, set: function (e, t, n) {
      var r, i = this.key(e), o = this.cache[i];
      if ("string" == typeof t) o[t] = n; else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t); else for (r in t) o[r] = t[r];
      return o
    }, get: function (e, t) {
      var n = this.cache[this.key(e)];
      return void 0 === t ? n : n[t]
    }, access: function (e, t, n) {
      var r;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
    }, remove: function (e, t) {
      var n, r, i, o = this.key(e), s = this.cache[o];
      if (void 0 === t) this.cache[o] = {}; else {
        Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(pt) || [])), n = r.length;
        for (; n--;) delete s[r[n]]
      }
    }, hasData: function (e) {
      return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
    }, discard: function (e) {
      e[this.expando] && delete this.cache[e[this.expando]]
    }
  };
  var vt = new a, yt = new a, bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, xt = /([A-Z])/g;
  Z.extend({
    hasData: function (e) {
      return yt.hasData(e) || vt.hasData(e)
    }, data: function (e, t, n) {
      return yt.access(e, t, n)
    }, removeData: function (e, t) {
      yt.remove(e, t)
    }, _data: function (e, t, n) {
      return vt.access(e, t, n)
    }, _removeData: function (e, t) {
      vt.remove(e, t)
    }
  }), Z.fn.extend({
    data: function (e, t) {
      var n, r, i, o = this[0], s = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
          vt.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof e ? this.each(function () {
        yt.set(this, e)
      }) : mt(this, function (t) {
        var n, r = Z.camelCase(e);
        if (o && void 0 === t) {
          if (n = yt.get(o, e), void 0 !== n) return n;
          if (n = yt.get(o, r), void 0 !== n) return n;
          if (n = u(o, r, void 0), void 0 !== n) return n
        } else this.each(function () {
          var n = yt.get(this, r);
          yt.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    }, removeData: function (e) {
      return this.each(function () {
        yt.remove(this, e)
      })
    }
  }), Z.extend({
    queue: function (e, t, n) {
      var r;
      return e ? (t = (t || "fx") + "queue", r = vt.get(e, t), n && (!r || Z.isArray(n) ? r = vt.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = Z.queue(e, t), r = n.length, i = n.shift(), o = Z._queueHooks(e, t), s = function () {
        Z.dequeue(e, t)
      };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return vt.get(e, n) || vt.access(e, n, {
        empty: Z.Callbacks("once memory").add(function () {
          vt.remove(e, [t + "queue", n])
        })
      })
    }
  }), Z.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = Z.queue(this, e, t);
        Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        Z.dequeue(this, e)
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, t) {
      var n, r = 1, i = Z.Deferred(), o = this, s = this.length, a = function () {
        --r || i.resolveWith(o, [o])
      };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = vt.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
      return a(), i.promise(t)
    }
  });
  var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Tt = ["Top", "Right", "Bottom", "Left"], Ct = function (e, t) {
    return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
  }, kt = /^(?:checkbox|radio)$/i;
  !function () {
    var e = J.createDocumentFragment(), t = e.appendChild(J.createElement("div")), n = J.createElement("input");
    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var Nt = "undefined";
  Q.focusinBubbles = "onfocusin" in e;
  var Et = /^key/, St = /^(?:mouse|pointer|contextmenu)|click/, Dt = /^(?:focusinfocus|focusoutblur)$/,
    jt = /^([^.]*)(?:\.(.+)|)$/;
  Z.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o, s, a, u, l, c, f, d, p, h, g, m = vt.get(e);
      if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
        return typeof Z !== Nt && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
      }), t = (t || "").match(pt) || [""], l = t.length; l--;) a = jt.exec(t[l]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (f = Z.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = Z.event.special[p] || {}, c = Z.extend({
        type: p,
        origType: g,
        data: r,
        handler: n,
        guid: n.guid,
        selector: i,
        needsContext: i && Z.expr.match.needsContext.test(i),
        namespace: h.join(".")
      }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(p, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), Z.event.global[p] = !0)
    },
    remove: function (e, t, n, r, i) {
      var o, s, a, u, l, c, f, d, p, h, g, m = vt.hasData(e) && vt.get(e);
      if (m && (u = m.events)) {
        for (t = (t || "").match(pt) || [""], l = t.length; l--;) if (a = jt.exec(t[l]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
          for (f = Z.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
          s && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, p, m.handle), delete u[p])
        } else for (p in u) Z.event.remove(e, p + t[l], n, r, !0);
        Z.isEmptyObject(u) && (delete m.handle, vt.remove(e, "events"))
      }
    },
    trigger: function (t, n, r, i) {
      var o, s, a, u, l, c, f, d = [r || J], p = G.call(t, "type") ? t.type : t,
        h = G.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !Dt.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t : new Z.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
        if (!i && !f.noBubble && !Z.isWindow(r)) {
          for (u = f.delegateType || p, Dt.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
          a === (r.ownerDocument || J) && d.push(a.defaultView || a.parentWindow || e)
        }
        for (o = 0; (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || p, c = (vt.get(s, "events") || {})[t.type] && vt.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
        return t.type = p, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[p]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = p, r[p](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
      }
    },
    dispatch: function (e) {
      e = Z.event.fix(e);
      var t, n, r, i, o, s = [], a = B.call(arguments), u = (vt.get(this, "events") || {})[e.type] || [],
        l = Z.event.special[e.type] || {};
      if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        for (s = Z.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
      if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) if (u.disabled !== !0 || "click" !== e.type) {
        for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
        r.length && s.push({elem: u, handlers: r})
      }
      return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, t) {
        var n, r, i, o = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
      }
    },
    fix: function (e) {
      if (e[Z.expando]) return e;
      var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
      for (s || (this.fixHooks[i] = s = St.test(i) ? this.mouseHooks : Et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
      return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          return this !== f() && this.focus ? (this.focus(), !1) : void 0
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          return this === f() && this.blur ? (this.blur(), !1) : void 0
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
        }, _default: function (e) {
          return Z.nodeName(e.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = Z.extend(new Z.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
      r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }
  }, Z.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  }, Z.Event = function (e, t) {
    return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void (this[Z.expando] = !0)) : new Z.Event(e, t)
  }, Z.Event.prototype = {
    isDefaultPrevented: c,
    isPropagationStopped: c,
    isImmediatePropagationStopped: c,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, Z.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    Z.event.special[e] = {
      delegateType: t, bindType: t, handle: function (e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), Q.focusinBubbles || Z.each({focus: "focusin", blur: "focusout"}, function (e, t) {
    var n = function (e) {
      Z.event.simulate(t, e.target, Z.event.fix(e), !0)
    };
    Z.event.special[t] = {
      setup: function () {
        var r = this.ownerDocument || this, i = vt.access(r, t);
        i || r.addEventListener(e, n, !0), vt.access(r, t, (i || 0) + 1)
      }, teardown: function () {
        var r = this.ownerDocument || this, i = vt.access(r, t) - 1;
        i ? vt.access(r, t, i) : (r.removeEventListener(e, n, !0), vt.remove(r, t))
      }
    }
  }), Z.fn.extend({
    on: function (e, t, n, r, i) {
      var o, s;
      if ("object" == typeof e) {
        "string" != typeof t && (n = n || t, t = void 0);
        for (s in e) this.on(s, t, n, e[s], i);
        return this
      }
      if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c; else if (!r) return this;
      return 1 === i && (o = r, r = function (e) {
        return Z().off(e), o.apply(this, arguments)
      }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function () {
        Z.event.add(this, e, r, n, t)
      })
    }, one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1)
    }, off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function () {
        Z.event.remove(this, e, n, t)
      })
    }, trigger: function (e, t) {
      return this.each(function () {
        Z.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, t) {
      var n = this[0];
      return n ? Z.event.trigger(e, t, n, !0) : void 0
    }
  });
  var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Lt = /<([\w:]+)/,
    $t = /<|&#?\w+;/, qt = /<(?:script|style|link)/i, Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ft = /^$|\/(?:java|ecma)script/i, Ot = /^true\/(.*)/, Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Wt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Wt.optgroup = Wt.option, Wt.tbody = Wt.tfoot = Wt.colgroup = Wt.caption = Wt.thead, Wt.th = Wt.td, Z.extend({
    clone: function (e, t, n) {
      var r, i, o, s, a = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
      if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
      if (t) if (n) for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++) m(o[r], s[r]); else m(e, a);
      return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
    }, buildFragment: function (e, t, n, r) {
      for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], d = 0, p = e.length; p > d; d++) if (i = e[d], i || 0 === i) if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i); else if ($t.test(i)) {
        for (o = o || c.appendChild(t.createElement("div")), s = (Lt.exec(i) || ["", ""])[1].toLowerCase(), a = Wt[s] || Wt._default, o.innerHTML = a[1] + i.replace(At, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
        Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
      } else f.push(t.createTextNode(i));
      for (c.textContent = "", d = 0; i = f[d++];) if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n)) for (l = 0; i = o[l++];) Ft.test(i.type || "") && n.push(i);
      return c
    }, cleanData: function (e) {
      for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
        if (Z.acceptData(n) && (i = n[vt.expando], i && (t = vt.cache[i]))) {
          if (t.events) for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
          vt.cache[i] && delete vt.cache[i]
        }
        delete yt.cache[n[yt.expando]]
      }
    }
  }), Z.fn.extend({
    text: function (e) {
      return mt(this, function (e) {
        return void 0 === e ? Z.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
        })
      }, null, e, arguments.length)
    }, append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = d(this, e);
          t.appendChild(e)
        }
      })
    }, prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = d(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    }, before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, remove: function (e, t) {
      for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
      return this
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
      return this
    }, clone: function (e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return Z.clone(this, e, t)
      })
    }, html: function (e) {
      return mt(this, function (e) {
        var t = this[0] || {}, n = 0, r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !qt.test(e) && !Wt[(Lt.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(At, "<$1></$2>");
          try {
            for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
            t = 0
          } catch (i) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var e = arguments[0];
      return this.domManip(arguments, function (t) {
        e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
      }), e && (e.length || e.nodeType) ? this : this.remove()
    }, detach: function (e) {
      return this.remove(e, !0)
    }, domManip: function (e, t) {
      e = z.apply([], e);
      var n, r, i, o, s, a, u = 0, l = this.length, c = this, f = l - 1, d = e[0], g = Z.isFunction(d);
      if (g || l > 1 && "string" == typeof d && !Q.checkClone && Ht.test(d)) return this.each(function (n) {
        var r = c.eq(n);
        g && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
      });
      if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
        for (i = Z.map(v(n, "script"), p), o = i.length; l > u; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
        if (o) for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) s = i[u], Ft.test(s.type || "") && !vt.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Pt, "")))
      }
      return this
    }
  }), Z.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    Z.fn[e] = function (e) {
      for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var Mt, Rt = {}, It = /^margin/, _t = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"), Bt = function (t) {
    return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
  };
  !function () {
    function t() {
      s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
      var t = e.getComputedStyle(s, null);
      n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
    }

    var n, r, i = J.documentElement, o = J.createElement("div"), s = J.createElement("div");
    s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
      pixelPosition: function () {
        return t(), n
      }, boxSizingReliable: function () {
        return null == r && t(), r
      }, reliableMarginRight: function () {
        var t, n = s.appendChild(J.createElement("div"));
        return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), s.removeChild(n), t
      }
    }))
  }(), Z.swap = function (e, t, n, r) {
    var i, o, s = {};
    for (o in t) s[o] = e.style[o], e.style[o] = t[o];
    i = n.apply(e, r || []);
    for (o in t) e.style[o] = s[o];
    return i
  };
  var zt = /^(none|table(?!-c[ea]).+)/, Xt = new RegExp("^(" + wt + ")(.*)$", "i"),
    Ut = new RegExp("^([+-])=(" + wt + ")", "i"), Vt = {position: "absolute", visibility: "hidden", display: "block"},
    Yt = {letterSpacing: "0", fontWeight: "400"}, Gt = ["Webkit", "O", "Moz", "ms"];
  Z.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = w(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {"float": "cssFloat"},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, s, a = Z.camelCase(t), u = e.style;
        return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
      }
    },
    css: function (e, t, n, r) {
      var i, o, s, a = Z.camelCase(t);
      return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Yt && (i = Yt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
    }
  }), Z.each(["height", "width"], function (e, t) {
    Z.cssHooks[t] = {
      get: function (e, n, r) {
        return n ? zt.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Vt, function () {
          return E(e, t, r)
        }) : E(e, t, r) : void 0
      }, set: function (e, n, r) {
        var i = r && Bt(e);
        return k(e, n, r ? N(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
      }
    }
  }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function (e, t) {
    return t ? Z.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
  }), Z.each({margin: "", padding: "", border: "Width"}, function (e, t) {
    Z.cssHooks[e + t] = {
      expand: function (n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Tt[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, It.test(e) || (Z.cssHooks[e + t].set = k)
  }), Z.fn.extend({
    css: function (e, t) {
      return mt(this, function (e, t, n) {
        var r, i, o = {}, s = 0;
        if (Z.isArray(t)) {
          for (r = Bt(e), i = t.length; i > s; s++) o[t[s]] = Z.css(e, t[s], !1, r);
          return o
        }
        return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
      }, e, t, arguments.length > 1)
    }, show: function () {
      return S(this, !0)
    }, hide: function () {
      return S(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Ct(this) ? Z(this).show() : Z(this).hide()
      })
    }
  }), Z.Tween = D, D.prototype = {
    constructor: D, init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = D.propHooks[this.prop];
      return e && e.get ? e.get(this) : D.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = D.propHooks[this.prop];
      return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
    }
  }, D.prototype.init.prototype = D.prototype, D.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
      }, set: function (e) {
        Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, Z.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, Z.fx = D.prototype.init, Z.fx.step = {};
  var Qt, Jt, Kt = /^(?:toggle|show|hide)$/, Zt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
    en = /queueHooks$/, tn = [$], nn = {
      "*": [function (e, t) {
        var n = this.createTween(e, t), r = n.cur(), i = Zt.exec(t), o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
          s = (Z.cssNumber[e] || "px" !== o && +r) && Zt.exec(Z.css(n.elem, e)), a = 1, u = 20;
        if (s && s[3] !== o) {
          o = o || s[3], i = i || [], s = +r || 1;
          do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
        }
        return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
      }]
    };
  Z.Animation = Z.extend(H, {
    tweener: function (e, t) {
      Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nn[n] = nn[n] || [], nn[n].unshift(t)
    }, prefilter: function (e, t) {
      t ? tn.unshift(e) : tn.push(e)
    }
  }), Z.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? Z.extend({}, e) : {
      complete: n || !n && t || Z.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !Z.isFunction(t) && t
    };
    return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
    }, r
  }, Z.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(Ct).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate: function (e, t, n, r) {
      var i = Z.isEmptyObject(e), o = Z.speed(t, n, r), s = function () {
        var t = H(this, Z.extend({}, e), o);
        (i || vt.get(this, "finish")) && t.stop(!0)
      };
      return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
    }, stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;
        delete e.stop, t(n)
      };
      return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0, i = null != e && e + "queueHooks", o = Z.timers, s = vt.get(this);
        if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && en.test(i) && r(s[i]);
        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        (t || !n) && Z.dequeue(this, e)
      })
    }, finish: function (e) {
      return e !== !1 && (e = e || "fx"), this.each(function () {
        var t, n = vt.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Z.timers, s = r ? r.length : 0;
        for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    }
  }), Z.each(["toggle", "show", "hide"], function (e, t) {
    var n = Z.fn[t];
    Z.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
    }
  }), Z.each({
    slideDown: A("show"),
    slideUp: A("hide"),
    slideToggle: A("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, t) {
    Z.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), Z.timers = [], Z.fx.tick = function () {
    var e, t = 0, n = Z.timers;
    for (Qt = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
    n.length || Z.fx.stop(), Qt = void 0
  }, Z.fx.timer = function (e) {
    Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
  }, Z.fx.interval = 13, Z.fx.start = function () {
    Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
  }, Z.fx.stop = function () {
    clearInterval(Jt), Jt = null
  }, Z.fx.speeds = {slow: 600, fast: 200, _default: 400}, Z.fn.delay = function (e, t) {
    return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
      var r = setTimeout(t, e);
      n.stop = function () {
        clearTimeout(r)
      }
    })
  }, function () {
    var e = J.createElement("input"), t = J.createElement("select"), n = t.appendChild(J.createElement("option"));
    e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
  }();
  var rn, on, sn = Z.expr.attrHandle;
  Z.fn.extend({
    attr: function (e, t) {
      return mt(this, Z.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
      return this.each(function () {
        Z.removeAttr(this, e)
      })
    }
  }), Z.extend({
    attr: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Nt ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? on : rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
    }, removeAttr: function (e, t) {
      var n, r, i = 0, o = t && t.match(pt);
      if (o && 1 === e.nodeType) for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }
  }), on = {
    set: function (e, t, n) {
      return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = sn[t] || Z.find.attr;
    sn[t] = function (e, t, r) {
      var i, o;
      return r || (o = sn[t], sn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, sn[t] = o), i
    }
  });
  var an = /^(?:input|select|textarea|button)$/i;
  Z.fn.extend({
    prop: function (e, t) {
      return mt(this, Z.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[Z.propFix[e] || e]
      })
    }
  }), Z.extend({
    propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
      var r, i, o, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          return e.hasAttribute("tabindex") || an.test(e.nodeName) || e.href ? e.tabIndex : -1
        }
      }
    }
  }), Q.optSelected || (Z.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }
  }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    Z.propFix[this.toLowerCase()] = this
  });
  var un = /[\t\r\n\f]/g;
  Z.fn.extend({
    addClass: function (e) {
      var t, n, r, i, o, s, a = "string" == typeof e && e, u = 0, l = this.length;
      if (Z.isFunction(e)) return this.each(function (t) {
        Z(this).addClass(e.call(this, t, this.className))
      });
      if (a) for (t = (e || "").match(pt) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
        s = Z.trim(r), n.className !== s && (n.className = s)
      }
      return this
    }, removeClass: function (e) {
      var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
      if (Z.isFunction(e)) return this.each(function (t) {
        Z(this).removeClass(e.call(this, t, this.className))
      });
      if (a) for (t = (e || "").match(pt) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
        for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
        s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
      }
      return this
    }, toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function (n) {
        Z(this).toggleClass(e.call(this, n, this.className, t), t)
      } : function () {
        if ("string" === n) for (var t, r = 0, i = Z(this), o = e.match(pt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else (n === Nt || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : vt.get(this, "__className__") || "")
      })
    }, hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(t) >= 0) return !0;
      return !1
    }
  });
  var ln = /\r/g;
  Z.fn.extend({
    val: function (e) {
      var t, n, r, i = this[0];
      {
        if (arguments.length) return r = Z.isFunction(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function (e) {
            return null == e ? "" : e + ""
          })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
        });
        if (i) return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
      }
    }
  }), Z.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = Z.find.attr(e, "value");
          return null != t ? t : Z.trim(Z.text(e))
        }
      }, select: {
        get: function (e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++) if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
            if (t = Z(n).val(), o) return t;
            s.push(t)
          }
          return s
        }, set: function (e, t) {
          for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), Z.each(["radio", "checkbox"], function () {
    Z.valHooks[this] = {
      set: function (e, t) {
        return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
      }
    }, Q.checkOn || (Z.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    Z.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), Z.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }, bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var cn = Z.now(), fn = /\?/;
  Z.parseJSON = function (e) {
    return JSON.parse(e + "")
  }, Z.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      n = new DOMParser, t = n.parseFromString(e, "text/xml")
    } catch (r) {
      t = void 0
    }
    return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
  };
  var dn = /#.*$/, pn = /([?&])_=[^&]*/, hn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, mn = /^(?:GET|HEAD)$/, vn = /^\/\//,
    yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, bn = {}, xn = {}, wn = "*/".concat("*"),
    Tn = e.location.href, Cn = yn.exec(Tn.toLowerCase()) || [];
  Z.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tn,
      type: "GET",
      isLocal: gn.test(Cn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": wn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (e, t) {
      return t ? P(P(e, Z.ajaxSettings), t) : P(Z.ajaxSettings, e)
    },
    ajaxPrefilter: F(bn),
    ajaxTransport: F(xn),
    ajax: function (e, t) {
      function n(e, t, n, s) {
        var u, c, v, y, x, T = t;
        2 !== b && (b = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = W(f, w, n)), y = M(f, y, w, u), u ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (Z.lastModified[i] = x), x = w.getResponseHeader("etag"), x && (Z.etag[i] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(d, [c, T, w]) : h.rejectWith(d, [w, T, v]), w.statusCode(m), m = void 0, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(d, [w, T]), l && (p.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
      }

      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t), d = f.context || f,
        p = f.context && (d.nodeType || d.jquery) ? Z(d) : Z.event, h = Z.Deferred(), g = Z.Callbacks("once memory"),
        m = f.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === b) {
              if (!s) for (s = {}; t = hn.exec(o);) s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          }, getAllResponseHeaders: function () {
            return 2 === b ? o : null
          }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return b || (e = y[n] = y[n] || e, v[e] = t), this
          }, overrideMimeType: function (e) {
            return b || (f.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]]; else w.always(e[w.status]);
            return this
          }, abort: function (e) {
            var t = e || x;
            return r && r.abort(t), n(0, t), this
          }
        };
      if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || Tn) + "").replace(dn, "").replace(vn, Cn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(pt) || [""], null == f.crossDomain && (u = yn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Cn[1] && u[2] === Cn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), O(bn, f, t, w), 2 === b) return w;
      l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !mn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pn.test(i) ? i.replace(pn, "$1_=" + cn++) : i + (fn.test(i) ? "&" : "?") + "_=" + cn++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + wn + "; q=0.01" : "") : f.accepts["*"]);
      for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
      if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === b)) return w.abort();
      x = "abort";
      for (c in {success: 1, error: 1, complete: 1}) w[c](f[c]);
      if (r = O(xn, f, t, w)) {
        w.readyState = 1, l && p.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function () {
          w.abort("timeout")
        }, f.timeout));
        try {
          b = 1, r.send(v, n)
        } catch (T) {
          if (!(2 > b)) throw T;
          n(-1, T)
        }
      } else n(-1, "No Transport");
      return w
    },
    getJSON: function (e, t, n) {
      return Z.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return Z.get(e, void 0, t, "script")
    }
  }), Z.each(["get", "post"], function (e, t) {
    Z[t] = function (e, n, r, i) {
      return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      })
    }
  }), Z._evalUrl = function (e) {
    return Z.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
  }, Z.fn.extend({
    wrapAll: function (e) {
      var t;
      return Z.isFunction(e) ? this.each(function (t) {
        Z(this).wrapAll(e.call(this, t))
      }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this)
    }, wrapInner: function (e) {
      return this.each(Z.isFunction(e) ? function (t) {
        Z(this).wrapInner(e.call(this, t))
      } : function () {
        var t = Z(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    }, wrap: function (e) {
      var t = Z.isFunction(e);
      return this.each(function (n) {
        Z(this).wrapAll(t ? e.call(this, n) : e)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
      }).end()
    }
  }), Z.expr.filters.hidden = function (e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0
  }, Z.expr.filters.visible = function (e) {
    return !Z.expr.filters.hidden(e)
  };
  var kn = /%20/g, Nn = /\[\]$/, En = /\r?\n/g, Sn = /^(?:submit|button|image|reset|file)$/i,
    Dn = /^(?:input|select|textarea|keygen)/i;
  Z.param = function (e, t) {
    var n, r = [], i = function (e, t) {
      t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
    };
    if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function () {
      i(this.name, this.value)
    }); else for (n in e) R(n, e[n], t, i);
    return r.join("&").replace(kn, "+")
  }, Z.fn.extend({
    serialize: function () {
      return Z.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = Z.prop(this, "elements");
        return e ? Z.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !Z(this).is(":disabled") && Dn.test(this.nodeName) && !Sn.test(e) && (this.checked || !kt.test(e))
      }).map(function (e, t) {
        var n = Z(this).val();
        return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
          return {name: t.name, value: e.replace(En, "\r\n")}
        }) : {name: t.name, value: n.replace(En, "\r\n")}
      }).get()
    }
  }), Z.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest
    } catch (e) {
    }
  };
  var jn = 0, An = {}, Ln = {0: 200, 1223: 204}, $n = Z.ajaxSettings.xhr();
  e.attachEvent && e.attachEvent("onunload", function () {
    for (var e in An) An[e]()
  }), Q.cors = !!$n && "withCredentials" in $n, Q.ajax = $n = !!$n, Z.ajaxTransport(function (e) {
    var t;
    return Q.cors || $n && !e.crossDomain ? {
      send: function (n, r) {
        var i, o = e.xhr(), s = ++jn;
        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
        for (i in n) o.setRequestHeader(i, n[i]);
        t = function (e) {
          return function () {
            t && (delete An[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Ln[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
          }
        }, o.onload = t(), o.onerror = t("error"), t = An[s] = t("abort");
        try {
          o.send(e.hasContent && e.data || null)
        } catch (a) {
          if (t) throw a
        }
      }, abort: function () {
        t && t()
      }
    } : void 0
  }), Z.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {
      "text script": function (e) {
        return Z.globalEval(e), e
      }
    }
  }), Z.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), Z.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (r, i) {
          t = Z("<script>").prop({async: !0, charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
          }), J.head.appendChild(t[0])
        }, abort: function () {
          n && n()
        }
      }
    }
  });
  var qn = [], Hn = /(=)\?(?=&|$)|\?\?/;
  Z.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = qn.pop() || Z.expando + "_" + cn++;
      return this[e] = !0, e
    }
  }), Z.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i, o, s,
      a = t.jsonp !== !1 && (Hn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Hn.test(t.data) && "data");
    return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Hn, "$1" + i) : t.jsonp !== !1 && (t.url += (fn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return s || Z.error(i + " was not called"), s[0]
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      s = arguments
    }, r.always(function () {
      e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, qn.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
    }), "script") : void 0
  }), Z.parseHTML = function (e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || J;
    var r = st.exec(e), i = !n && [];
    return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
  };
  var Fn = Z.fn.load;
  Z.fn.load = function (e, t, n) {
    if ("string" != typeof e && Fn) return Fn.apply(this, arguments);
    var r, i, o, s = this, a = e.indexOf(" ");
    return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
      url: e,
      type: i,
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
    }).complete(n && function (e, t) {
      s.each(n, o || [e.responseText, t, e])
    }), this
  }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    Z.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), Z.expr.filters.animated = function (e) {
    return Z.grep(Z.timers, function (t) {
      return e === t.elem
    }).length
  };
  var On = e.document.documentElement;
  Z.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, s, a, u, l, c = Z.css(e, "position"), f = Z(e), d = {};
      "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
    }
  }, Z.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        Z.offset.setOffset(this, e, t)
      });
      var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
      if (o) return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== Nt && (i = r.getBoundingClientRect()), n = I(o), {
        top: i.top + n.pageYOffset - t.clientTop,
        left: i.left + n.pageXOffset - t.clientLeft
      }) : i
    }, position: function () {
      if (this[0]) {
        var e, t, n = this[0], r = {top: 0, left: 0};
        return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - r.top - Z.css(n, "marginTop", !0),
          left: t.left - r.left - Z.css(n, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent || On; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
        return e || On
      })
    }
  }), Z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
    var r = "pageYOffset" === n;
    Z.fn[t] = function (i) {
      return mt(this, function (t, i, o) {
        var s = I(t);
        return void 0 === o ? s ? s[n] : t[i] : void (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
      }, t, i, arguments.length, null)
    }
  }), Z.each(["top", "left"], function (e, t) {
    Z.cssHooks[t] = T(Q.pixelPosition, function (e, n) {
      return n ? (n = w(e, t), _t.test(n) ? Z(e).position()[t] + "px" : n) : void 0
    })
  }), Z.each({Height: "height", Width: "width"}, function (e, t) {
    Z.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
      Z.fn[r] = function (r, i) {
        var o = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || i === !0 ? "margin" : "border");
        return mt(this, function (t, n, r) {
          var i;
          return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
        }, t, o ? r : void 0, o, null)
      }
    })
  }), Z.fn.size = function () {
    return this.length
  }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return Z
  });
  var Pn = e.jQuery, Wn = e.$;
  return Z.noConflict = function (t) {
    return e.$ === Z && (e.$ = Wn), t && e.jQuery === Z && (e.jQuery = Pn), Z
  }, typeof t === Nt && (e.jQuery = e.$ = Z), Z
}), function (e) {
  "use strict";

  function t(e) {
    return e instanceof Number || "number" == typeof e
  }

  e.fn.borderLayout = function () {
    var n = function (e, n) {
      e.style.position = "absolute", e.style.boxSizing = "border-box";
      for (var r in n) {
        var i = n[r];
        t(i) && (i = parseInt(i) + "px"), e.style[r] = i
      }
    }, r = function (e, t) {
      return "%" === e[e.length - 1] ? t * parseInt(e) / 100 : parseInt(e)
    }, i = function (e, t, n, i) {
      var o = r(e, t);
      return n && (n = r(n, t), n > o) ? n : i && (i = r(i, t), o > i) ? i : o
    };
    return this.each(function () {
      function t() {
        l && (b = l._data.width, b && (b = i(b, f, l._data["min-width"], l._data["max-width"]), k = b, x = parseInt(l._data.left) || 0, x && (w -= x, k += x), w -= b, n(l, {
          top: C,
          left: x,
          width: b,
          height: T
        }))), u && (b = u._data.width, b && (b = i(b, f, u._data["min-width"], u._data["max-width"]), x = parseInt(u._data.right) || 0, x && (w -= x), w -= b, n(u, {
          top: C,
          right: x,
          width: b,
          height: T
        })))
      }

      function r() {
        s && (b = s._data.height, b && (b = i(b, d, s._data["min-height"], s._data["max-height"]), T -= b, C = b, n(s, {
          top: 0,
          left: k,
          width: w,
          height: b
        }))), a && (b = a._data.height, b && (b = i(b, d, a._data["min-height"], a._data["max-height"]), T -= b, n(a, {
          bottom: 0,
          left: k,
          height: b,
          width: w
        })))
      }

      this.style.boxSizing = "border-box", this.style.overflow = "hidden", (this == document.body || e(this).hasClass("layout--body")) && n(this, {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      });
      for (var o, s, a, u, l, c = e(this).hasClass("layout--h"), f = this.clientWidth, d = this.clientHeight, p = 0, h = this.children; p < h.length;) {
        var g = h[p++], m = g.getAttribute("data-options");
        if (m) {
          m = m.replace(/(['"])?([a-zA-Z0-9\-]+)(['"])?:/g, '"$2":'), m = m.replace(/'/g, '"'), m = "{" + m + "}";
          try {
            m = JSON.parse(m)
          } catch (v) {
            continue
          }
          var y = m.region;
          y && (g._data = m, /center/i.test(y) ? o = g : /north/i.test(y) ? s = g : /south/i.test(y) ? a = g : /east/i.test(y) ? u = g : /west/i.test(y) && (l = g))
        }
      }
      var b, x, w = f, T = d, C = 0, k = 0;
      c ? (t(), r()) : (r(), t()), o && n(o, {top: C, left: k, width: w, height: T})
    })
  }, e(function () {
    e(".layout").borderLayout(), e(window).resize(function () {
      e(".layout").borderLayout()
    })
  })
}(jQuery), +function (e) {
  "use strict";

  function t(t, r) {
    return this.each(function () {
      var i = e(this), o = i.data("bs.modal"), s = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
      o || i.data("bs.modal", o = new n(this, s)), "string" == typeof t ? o[t](r) : s.show && o.show(r)
    })
  }

  var n = function (t, n) {
    this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  n.VERSION = "3.2.0", n.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, n.prototype.toggle = function (e) {
    return this.isShown ? this.hide() : this.show(e)
  }, n.prototype.show = function (t) {
    var n = this, r = e.Event("show.bs.modal", {relatedTarget: t});
    this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function () {
      var r = e.support.transition && n.$element.hasClass("fade");
      n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
      var i = e.Event("shown.bs.modal", {relatedTarget: t});
      r ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
        n.$element.trigger("focus").trigger(i)
      }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(i)
    }))
  }, n.prototype.hide = function (t) {
    t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
  }, n.prototype.enforceFocus = function () {
    e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
      this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
    }, this))
  }, n.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function (e) {
      27 == e.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
  }, n.prototype.hideModal = function () {
    var e = this;
    this.$element.hide(), this.backdrop(function () {
      e.$element.trigger("hidden.bs.modal")
    })
  }, n.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, n.prototype.backdrop = function (t) {
    var n = this, r = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var i = e.support.transition && r;
      if (this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
        e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
      }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
      i ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var o = function () {
        n.removeBackdrop(), t && t()
      };
      e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o()
    } else t && t()
  }, n.prototype.checkScrollbar = function () {
    document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
  }, n.prototype.setScrollbar = function () {
    var e = parseInt(this.$body.css("padding-right") || 0, 10);
    this.scrollbarWidth && this.$body.css("padding-right", e + this.scrollbarWidth)
  }, n.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", "")
  }, n.prototype.measureScrollbar = function () {
    var e = document.createElement("div");
    e.className = "modal-scrollbar-measure", this.$body.append(e);
    var t = e.offsetWidth - e.clientWidth;
    return this.$body[0].removeChild(e), t
  };
  var r = e.fn.modal;
  e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function () {
    return e.fn.modal = r, this
  }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
    var r = e(this), i = r.attr("href"), o = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
      s = o.data("bs.modal") ? "toggle" : e.extend({remote: !/#/.test(i) && i}, o.data(), r.data());
    r.is("a") && n.preventDefault(), o.one("show.bs.modal", function (e) {
      e.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
        r.is(":visible") && r.trigger("focus")
      })
    }), t.call(o, s, this)
  })
}(jQuery);
