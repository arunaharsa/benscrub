/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
(function(e, t) {
    function P(e) {
        var t = e.length,
            n = b.type(e);
        return b.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }

    function B(e) {
        var t = H[e] = {};
        return b.each(e.match(E) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function I(e, n, r, i) {
        if (!b.acceptData(e)) return;
        var s, o, u = b.expando,
            a = typeof n == "string",
            f = e.nodeType,
            c = f ? b.cache : e,
            h = f ? e[u] : e[u] && u;
        if ((!h || !c[h] || !i && !c[h].data) && a && r === t) return;
        h || (f ? e[u] = h = l.pop() || b.guid++ : h = u), c[h] || (c[h] = {}, f || (c[h].toJSON = b.noop));
        if (typeof n == "object" || typeof n == "function") i ? c[h] = b.extend(c[h], n) : c[h].data = b.extend(c[h].data, n);
        return s = c[h], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[b.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[b.camelCase(n)])) : o = s, o
    }

    function q(e, t, n) {
        if (!b.acceptData(e)) return;
        var r, i, s, o = e.nodeType,
            u = o ? b.cache : e,
            a = o ? e[b.expando] : b.expando;
        if (!u[a]) return;
        if (t) {
            s = n ? u[a] : u[a].data;
            if (s) {
                b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in s ? t = [t] : (t = b.camelCase(t), t in s ? t = [t] : t = t.split(" "));
                for (r = 0, i = t.length; r < i; r++) delete s[t[r]];
                if (!(n ? U : b.isEmptyObject)(s)) return
            }
        }
        if (!n) {
            delete u[a].data;
            if (!U(u[a])) return
        }
        o ? b.cleanData([e], !0) : b.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
    }

    function R(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(F, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : j.test(r) ? b.parseJSON(r) : r
                } catch (s) {}
                b.data(e, n, r)
            } else r = t
        }
        return r
    }

    function U(e) {
        var t;
        for (t in e) {
            if (t === "data" && b.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function it() {
        return !0
    }

    function st() {
        return !1
    }

    function ct(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ht(e, t, n) {
        t = t || 0;
        if (b.isFunction(t)) return b.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return b.grep(e, function(e) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = b.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (at.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r)
        }
        return b.grep(e, function(e) {
            return b.inArray(e, t) >= 0 === n
        })
    }

    function pt(e) {
        var t = dt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Mt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function _t(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Pt(e, t) {
        var n, r = 0;
        for (;
            (n = e[r]) != null; r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }

    function Ht(e, t) {
        if (t.nodeType !== 1 || !b.hasData(e)) return;
        var n, r, i, s = b._data(e),
            o = b._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) b.event.add(t, n, u[n][r])
        }
        o.data && (o.data = b.extend({}, o.data))
    }

    function Bt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!b.support.noCloneEvent && t[b.expando]) {
            i = b._data(t);
            for (r in i.events) b.removeEvent(t, r, i.handle);
            t.removeAttribute(b.expando)
        }
        if (n === "script" && t.text !== e.text) _t(t).text = e.text, Dt(t);
        else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
        else if (n === "input" && xt.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
        else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }

    function jt(e, n) {
        var r, s, o = 0,
            u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u)
            for (u = [], r = e.childNodes || e;
                (s = r[o]) != null; o++) !n || b.nodeName(s, n) ? u.push(s) : b.merge(u, jt(s, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], u) : u
    }

    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--) {
            t = en[i] + n;
            if (t in e) return t
        }
        return r
    }

    function nn(e, t) {
        return e = t || e, b.css(e, "display") === "none" || !b.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            s[o] = b._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = b._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            o = 0;
        for (; s < 4; s += 2) n === "margin" && (o += b.css(e, n + Zt[s], !0, i)), r ? (n === "content" && (o -= b.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= b.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += b.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += b.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }

    function un(e, t, n) {
        var r = !0,
            i = t === "width" ? e.offsetWidth : e.offsetHeight,
            s = qt(e),
            o = b.support.boxSizing && b.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Rt(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (Jt.test(i)) return i;
            r = o && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function an(e) {
        var t = s,
            n = Qt[e];
        if (!n) {
            n = fn(e, t);
            if (n === "none" || !n) It = (It || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach();
            Qt[e] = n
        }
        return n
    }

    function fn(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
            r = b.css(n[0], "display");
        return n.remove(), r
    }

    function vn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function(t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && b.type(t) === "object")
            for (i in t) vn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function _n(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(E) || [];
            if (b.isFunction(n))
                while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Dn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, b.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                if (s) return !(a = f)
            }), a
        }
        var i = {},
            s = e === An;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Pn(e, n) {
        var r, i, s = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e
    }

    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (u in l) u in r && (n[l[u]] = r[u]);
        while (f[0] === "*") f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s)
            for (u in a)
                if (a[u] && a[u].test(s)) {
                    f.unshift(u);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        }
        if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function Bn(e, t) {
        var n, r, i, s, o = {},
            u = 0,
            a = e.dataTypes.slice(),
            f = a[0];
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (a[1])
            for (i in e.converters) o[i.toLowerCase()] = e.converters[i];
        for (; r = a[++u];)
            if (r !== "*") {
                if (f !== "*" && f !== r) {
                    i = o[f + " " + r] || o["* " + r];
                    if (!i)
                        for (n in o) {
                            s = n.split(" ");
                            if (s[1] === r) {
                                i = o[f + " " + s[0]] || o["* " + s[0]];
                                if (i) {
                                    i === !0 ? i = o[n] : o[n] !== !0 && (r = s[0], a.splice(u--, 0, r));
                                    break
                                }
                            }
                        }
                    if (i !== !0)
                        if (i && e["throws"]) t = i(t);
                        else try {
                            t = i(t)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: i ? l : "No conversion from " + f + " to " + r
                            }
                        }
                }
                f = r
            }
        return {
            state: "success",
            data: t
        }
    }

    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Yn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = b.now()
    }

    function Zn(e, t) {
        b.each(t, function(t, n) {
            var r = (Gn[t] || []).concat(Gn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function er(e, t, n) {
        var r, i, s = 0,
            o = Qn.length,
            u = b.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                if (i) return !1;
                var t = Xn || Yn(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; o < a; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Yn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = b.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    i = !0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        tr(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = Qn[s].call(f, e, l, f.opts);
            if (r) return r
        }
        return Zn(f, l), b.isFunction(f.opts.start) && f.opts.start.call(e, f), b.fx.timer(b.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function tr(e, t) {
        var n, r, i, s, o;
        for (i in e) {
            r = b.camelCase(i), s = t[r], n = e[i], b.isArray(n) && (s = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), o = b.cssHooks[r];
            if (o && "expand" in o) {
                n = o.expand(n), delete e[r];
                for (i in n) i in e || (e[i] = n[i], t[i] = s)
            } else t[r] = s
        }
    }

    function nr(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {},
            v = [],
            m = e.nodeType && nn(e);
        n.queue || (l = b._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, b.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], b.css(e, "display") === "inline" && b.css(e, "float") === "none" && (!b.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", b.support.shrinkWrapBlocks || h.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t) {
            o = t[i];
            if ($n.exec(o)) {
                delete t[i], a = a || o === "toggle";
                if (o === (m ? "hide" : "show")) continue;
                v.push(i)
            }
        }
        s = v.length;
        if (s) {
            u = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in u && (m = u.hidden), a && (u.hidden = !m), m ? b(e).show() : h.done(function() {
                b(e).hide()
            }), h.done(function() {
                var t;
                b._removeData(e, "fxshow");
                for (t in d) b.style(e, t, d[t])
            });
            for (i = 0; i < s; i++) r = v[i], f = h.createTween(r, m ? u[r] : 0), d[r] = u[r] || b.style(e, r), r in u || (u[r] = f.start, m && (f.end = f.start, f.start = r === "width" || r === "height" ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function sr(e) {
        return b.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = typeof t,
        s = e.document,
        o = e.location,
        u = e.jQuery,
        a = e.$,
        f = {},
        l = [],
        c = "1.9.1",
        h = l.concat,
        p = l.push,
        d = l.slice,
        v = l.indexOf,
        m = f.toString,
        g = f.hasOwnProperty,
        y = c.trim,
        b = function(e, t) {
            return new b.fn.init(e, t, r)
        },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        E = /\S+/g,
        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        x = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        N = /^[\],:{}\s]*$/,
        C = /(?:^|:|,)(?:\s*\[)+/g,
        k = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        L = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        A = /^-ms-/,
        O = /-([\da-z])/gi,
        M = function(e, t) {
            return t.toUpperCase()
        },
        _ = function(e) {
            if (s.addEventListener || e.type === "load" || s.readyState === "complete") D(), b.ready()
        },
        D = function() {
            s.addEventListener ? (s.removeEventListener("DOMContentLoaded", _, !1), e.removeEventListener("load", _, !1)) : (s.detachEvent("onreadystatechange", _), e.detachEvent("onload", _))
        };
    b.fn = b.prototype = {
        jquery: c,
        constructor: b,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = x.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1]) {
                        n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : s, !0));
                        if (T.test(i[1]) && b.isPlainObject(n))
                            for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    o = s.getElementById(i[2]);
                    if (o && o.parentNode) {
                        if (o.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = s, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return d.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return b.each(this, e, t)
        },
        ready: function(e) {
            return b.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: p,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !b.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((s = arguments[a]) != null)
                for (i in s) {
                    e = u[i], r = s[i];
                    if (u === r) continue;
                    l && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, o = e && b.isArray(e) ? e : []) : o = e && b.isPlainObject(e) ? e : {}, u[i] = b.extend(l, o, r)) : r !== t && (u[i] = r)
                }
            return u
    }, b.extend({
        noConflict: function(t) {
            return e.$ === b && (e.$ = a), t && e.jQuery === b && (e.jQuery = u), b
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? b.readyWait++ : b.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --b.readyWait : b.isReady) return;
            if (!s.body) return setTimeout(b.ready);
            b.isReady = !0;
            if (e !== !0 && --b.readyWait > 0) return;
            n.resolveWith(s, [b]), b.fn.trigger && b(s).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return b.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return b.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? f[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            if (!e || b.type(e) !== "object" || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || g.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || typeof e != "string") return null;
            typeof t == "boolean" && (n = t, t = !1), t = t || s;
            var r = T.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        },
        parseJSON: function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (t === null) return t;
            if (typeof t == "string") {
                t = b.trim(t);
                if (t && N.test(t.replace(k, "@").replace(L, "]").replace(C, ""))) return (new Function("return " + t))()
            }
            b.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && b.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && b.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(A, "ms-").replace(O, M)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                s = e.length,
                o = P(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r === !1) break
                    } else
                        for (i in e) {
                            r = t.apply(e[i], n);
                            if (r === !1) break
                        } else if (o)
                            for (; i < s; i++) {
                                r = t.call(e[i], i, e[i]);
                                if (r === !1) break
                            } else
                                for (i in e) {
                                    r = t.call(e[i], i, e[i]);
                                    if (r === !1) break
                                }
                        return e
        },
        trim: y && !y.call("ï»¿Â ") ? function(e) {
            return e == null ? "" : y.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(S, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return e != null && (P(Object(e)) ? b.merge(n, typeof e == "string" ? [e] : e) : p.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (v) return v.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                s = e.length,
                o = P(e),
                u = [];
            if (o)
                for (; i < s; i++) r = t(e[i], i, n), r != null && (u[u.length] = r);
            else
                for (i in e) r = t(e[i], i, n), r != null && (u[u.length] = r);
            return h.apply([], u)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (s = e[n], n = e, e = s), b.isFunction(e) ? (r = d.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(d.call(arguments)))
            }, i.guid = e.guid = e.guid || b.guid++, i) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a = 0,
                f = e.length,
                l = r == null;
            if (b.type(r) === "object") {
                s = !0;
                for (a in r) b.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t) {
                s = !0, b.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                    return l.call(b(e), n)
                }));
                if (n)
                    for (; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
            }
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }), b.ready.promise = function(t) {
        if (!n) {
            n = b.Deferred();
            if (s.readyState === "complete") setTimeout(b.ready);
            else if (s.addEventListener) s.addEventListener("DOMContentLoaded", _, !1), e.addEventListener("load", _, !1);
            else {
                s.attachEvent("onreadystatechange", _), e.attachEvent("onload", _);
                var r = !1;
                try {
                    r = e.frameElement == null && s.documentElement
                } catch (i) {}
                r && r.doScroll && function o() {
                    if (!b.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        D(), b.ready()
                    }
                }()
            }
        }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }), r = b(s);
    var H = {};
    b.Callbacks = function(e) {
        e = typeof e == "string" ? H[e] || B(e) : b.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function(t) {
                r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
                for (; a && o < s; o++)
                    if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
            },
            c = {
                add: function() {
                    if (a) {
                        var t = a.length;
                        (function i(t) {
                            b.each(t, function(t, n) {
                                var r = b.type(n);
                                r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
                            })
                        })(arguments), n ? s = a.length : r && (u = t, l(r))
                    }
                    return this
                },
                remove: function() {
                    return a && b.each(arguments, function(e, t) {
                        var r;
                        while ((r = b.inArray(t, a, r)) > -1) a.splice(r, 1), n && (r <= s && s--, r <= o && o--)
                    }), this
                },
                has: function(e) {
                    return e ? b.inArray(e, a) > -1 : !!a && !!a.length
                },
                empty: function() {
                    return a = [], this
                },
                disable: function() {
                    return a = f = r = t, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return f = t, r || c.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!i || f) && (n ? f.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, b.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", b.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return b.Deferred(function(n) {
                            b.each(t, function(t, s) {
                                var o = s[0],
                                    u = b.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = u && u.apply(this, arguments);
                                    e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? b.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, b.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = d.call(arguments),
                r = n.length,
                i = r !== 1 || e && b.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : b.Deferred(),
                o = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), b.support = function() {
        var t, n, r, o, u, a, f, l, c, h, p = s.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        u = s.createElement("select"), f = u.appendChild(s.createElement("option")), o = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: p.className !== "t",
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!o.value,
            optSelected: f.selected,
            enctype: !!s.createElement("form").enctype,
            html5Clone: s.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: s.compatMode === "CSS1Compat",
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        o = s.createElement("input"), o.setAttribute("value", ""), t.input = o.getAttribute("value") === "", o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "t"), o.setAttribute("name", "t"), a = s.createDocumentFragment(), a.appendChild(o), t.appendChecked = o.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in {
                submit: !0,
                change: !0,
                focusin: !0
            }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box", b(function() {
            var n, r, o, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = s.getElementsByTagName("body")[0];
            if (!a) return;
            n = s.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = o[0].offsetHeight === 0, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && o[0].offsetHeight === 0, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = p.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width === "4px", r = p.appendChild(s.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = o = r = null
        }), n = u = a = f = r = o = null, t
    }();
    var j = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        F = /([A-Z])/g;
    b.extend({
        cache: {},
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !U(e)
        },
        data: function(e, t, n) {
            return I(e, t, n)
        },
        removeData: function(e, t) {
            return q(e, t)
        },
        _data: function(e, t, n) {
            return I(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return q(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), b.fn.extend({
        data: function(e, n) {
            var r, i, s = this[0],
                o = 0,
                u = null;
            if (e === t) {
                if (this.length) {
                    u = b.data(s);
                    if (s.nodeType === 1 && !b._data(s, "parsedAttrs")) {
                        r = s.attributes;
                        for (; o < r.length; o++) i = r[o].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), R(s, i, u[i]));
                        b._data(s, "parsedAttrs", !0)
                    }
                }
                return u
            }
            return typeof e == "object" ? this.each(function() {
                b.data(this, e)
            }) : b.access(this, function(n) {
                if (n === t) return s ? R(s, e, b.data(s, e)) : null;
                this.each(function() {
                    b.data(this, e, n)
                })
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e)
            })
        }
    }), b.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = b._data(e, t), n && (!r || b.isArray(n) ? r = b._data(e, t, b.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = b._queueHooks(e, t),
                o = function() {
                    b.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), s.cur = i, i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    b._removeData(e, t + "queue"), b._removeData(e, n)
                })
            })
        }
    }), b.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && b.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                s = b.Deferred(),
                o = this,
                u = this.length,
                a = function() {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = b._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var z, W, X = /[\t\r\n]/g,
        V = /\r/g,
        $ = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        K = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Q = /^(?:checked|selected)$/i,
        G = b.support.getSetAttribute,
        Y = b.support.input;
    b.fn.extend({
        attr: function(e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = b.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = typeof e == "string" && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).addClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(E) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(X, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = b.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = arguments.length === 0 || typeof e == "string" && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).removeClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(E) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(X, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? b.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return b.isFunction(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var s, o = 0,
                        u = b(this),
                        a = t,
                        f = e.match(E) || [];
                    while (s = f[o++]) a = r ? a : !u.hasClass(s), u[a ? "addClass" : "removeClass"](s)
                } else if (n === i || n === "boolean") this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return r = b.valHooks[s.type] || b.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? n.replace(V, "") : n == null ? "" : n);
                return
            }
            return i = b.isFunction(e), this.each(function(n) {
                var s, o = b(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, n, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : b.isArray(s) && (s = b.map(s, function(e) {
                    return e == null ? "" : e + ""
                })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set" in r) || r.set(this, s, "value") === t) this.value = s
            })
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (b.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !b.nodeName(n.parentNode, "optgroup"))) {
                            t = b(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function(e, n, r) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (typeof e.getAttribute === i) return b.prop(e, n, r);
            o = a !== 1 || !b.isXMLDoc(e), o && (n = n.toLowerCase(), s = b.attrHooks[n] || (K.test(n) ? W : z));
            if (r === t) return s && o && "get" in s && (u = s.get(e, n)) !== null ? u : (typeof e.getAttribute !== i && (u = e.getAttribute(n)), u == null ? t : u);
            if (r !== null) return s && o && "set" in s && (u = s.set(e, r, n)) !== t ? u : (e.setAttribute(n, r + ""), r);
            b.removeAttr(e, n)
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                s = t && t.match(E);
            if (s && e.nodeType === 1)
                while (n = s[i++]) r = b.propFix[n] || n, K.test(n) ? !G && Q.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(G ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!b.support.radioValue && t === "radio" && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !b.isXMLDoc(e), o && (n = b.propFix[n] || n, s = b.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : $.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), W = {
        get: function(e, n) {
            var r = b.prop(e, n),
                i = typeof r == "boolean" && e.getAttribute(n),
                s = typeof r == "boolean" ? Y && G ? i != null : Q.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return s && s.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }
    };
    if (!Y || !G) b.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function(e, t, n) {
            if (!b.nodeName(e, "input")) return z && z.set(e, t, n);
            e.defaultValue = t
        }
    };
    G || (z = b.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && (n === "id" || n === "name" ||
                n === "coords" ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
        }
    }, b.attrHooks.contenteditable = {
        get: z.get,
        set: function(e, t, n) {
            z.set(e, t === "" ? !1 : t, n)
        }
    }, b.each(["width", "height"], function(e, t) {
        b.attrHooks[t] = b.extend(b.attrHooks[t], {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r == null ? t : r
            }
        })
    }), b.each(["href", "src"], function(e, t) {
        b.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })), b.support.style || (b.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function(e, t) {
                if (b.isArray(t)) return e.checked = b.inArray(b(e).val(), t) >= 0
            }
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;
    b.event = {
            global: {},
            add: function(e, n, r, s, o) {
                var u, a, f, l, c, h, p, d, v, m, g, y = b._data(e);
                if (!y) return;
                r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = b.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function(e) {
                    return typeof b === i || !!e && b.event.triggered === e.type ? t : b.event.dispatch.apply(h.elem, arguments)
                }, h.elem = e), n = (n || "").match(E) || [""], f = n.length;
                while (f--) {
                    u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort(), c = b.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = b.event.special[v] || {}, p = b.extend({
                        type: v,
                        origType: g,
                        data: s,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        needsContext: o && b.expr.match.needsContext.test(o),
                        namespace: m.join(".")
                    }, l);
                    if (!(d = a[v])) {
                        d = a[v] = [], d.delegateCount = 0;
                        if (!c.setup || c.setup.call(e, s, m, h) === !1) e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
                    }
                    c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), b.event.global[v] = !0
                }
                e = null
            },
            remove: function(e, t, n, r, i) {
                var s, o, u, a, f, l, c, h, p, d, v, m = b.hasData(e) && b._data(e);
                if (!m || !(l = m.events)) return;
                t = (t || "").match(E) || [""], f = t.length;
                while (f--) {
                    u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                    if (!p) {
                        for (p in l) b.event.remove(e, p + t[f], n, r, !0);
                        continue
                    }
                    c = b.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                    while (s--) o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                    a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && b.removeEvent(e, p, m.handle), delete l[p])
                }
                b.isEmptyObject(l) && (delete m.handle, b._removeData(e, "events"))
            },
            trigger: function(n, r, i, o) {
                var u, a, f, l, c, h, p, d = [i || s],
                    v = g.call(n, "type") ? n.type : n,
                    m = g.call(n, "namespace") ? n.namespace.split(".") : [];
                f = h = i = i || s;
                if (i.nodeType === 3 || i.nodeType === 8) return;
                if (nt.test(v + b.event.triggered)) return;
                v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[b.expando] ? n : new b.Event(v, typeof n == "object" && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : b.makeArray(r, [n]), c = b.event.special[v] || {};
                if (!o && c.trigger && c.trigger.apply(i, r) === !1) return;
                if (!o && !c.noBubble && !b.isWindow(i)) {
                    l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
                    for (; f; f = f.parentNode) d.push(f), h = f;
                    h === (i.ownerDocument || s) && d.push(h.defaultView || h.parentWindow || e)
                }
                p = 0;
                while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (b._data(f, "events") || {})[n.type] && b._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && b.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
                n.type = v;
                if (!o && !n.isDefaultPrevented() && (!c._default || c._default.apply(i.ownerDocument, r) === !1) && (v !== "click" || !b.nodeName(i, "a")) && b.acceptData(i) && a && i[v] && !b.isWindow(i)) {
                    h = i[a], h && (i[a] = null), b.event.triggered = v;
                    try {
                        i[v]()
                    } catch (y) {}
                    b.event.triggered = t, h && (i[a] = h)
                }
                return n.result
            },
            dispatch: function(e) {
                e = b.event.fix(e);
                var n, r, i, s, o, u = [],
                    a = d.call(arguments),
                    f = (b._data(this, "events") || {})[e.type] || [],
                    l = b.event.special[e.type] || {};
                a[0] = e, e.delegateTarget = this;
                if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
                u = b.event.handlers.call(this, e, f), n = 0;
                while ((s = u[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                        if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            },
            handlers: function(e, n) {
                var r, i, s, o, u = [],
                    a = n.delegateCount,
                    f = e.target;
                if (a && f.nodeType && (!e.button || e.type !== "click"))
                    for (; f != this; f = f.parentNode || this)
                        if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                            s = [];
                            for (o = 0; o < a; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? b(r, this).index(f) >= 0 : b.find(r, this, null, [f]).length), s[r] && s.push(i);
                            s.length && u.push({
                                elem: f,
                                handlers: s
                            })
                        }
                return a < n.length && u.push({
                    elem: this,
                    handlers: n.slice(a)
                }), u
            },
            fix: function(e) {
                if (e[b.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    u = this.fixHooks[i];
                u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new b.Event(o), t = r.length;
                while (t--) n = r[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || s), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, u = n.button,
                        a = n.fromElement;
                    return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || s, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        if (b.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== s.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === s.activeElement && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = b.extend(new b.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, b.removeEvent = s.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
        }, b.Event = function(e, t) {
            if (!(this instanceof b.Event)) return new b.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0
        }, b.Event.prototype = {
            isDefaultPrevented: st,
            isPropagationStopped: st,
            isImmediatePropagationStopped: st,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = it;
                if (!e) return;
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = it;
                if (!e) return;
                e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = it, this.stopPropagation()
            }
        }, b.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            b.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        s = e.handleObj;
                    if (!i || i !== r && !b.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                    return n
                }
            }
        }), b.support.submitBubbles || (b.event.special.submit = {
            setup: function() {
                if (b.nodeName(this, "form")) return !1;
                b.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                    r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), b._data(r, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (b.nodeName(this, "form")) return !1;
                b.event.remove(this, "._submit")
            }
        }), b.support.changeBubbles || (b.event.special.change = {
            setup: function() {
                if (Z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") b.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), b.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
                    });
                    return !1
                }
                b.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && b.event.simulate("change", this.parentNode, e, !0)
                    }), b._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return b.event.remove(this, "._change"), !Z.test(this.nodeName)
            }
        }), b.support.focusinBubbles || b.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    b.event.simulate(t, e.target, b.event.fix(e), !0)
                };
            b.event.special[t] = {
                setup: function() {
                    n++ === 0 && s.addEventListener(e, r, !0)
                },
                teardown: function() {
                    --n === 0 && s.removeEventListener(e, r, !0)
                }
            }
        }), b.fn.extend({
            on: function(e, n, r, i, s) {
                var o, u;
                if (typeof e == "object") {
                    typeof n != "string" && (r = r || n, n = t);
                    for (o in e) this.on(o, n, r, e[o], s);
                    return this
                }
                r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                if (i === !1) i = st;
                else if (!i) return this;
                return s === 1 && (u = i, i = function(e) {
                    return b().off(e), u.apply(this, arguments)
                }, i.guid = u.guid || (u.guid = b.guid++)), this.each(function() {
                    b.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if (typeof e == "object") {
                    for (s in e) this.off(s, n, e[s]);
                    return this
                }
                if (n === !1 || typeof n == "function") r = n, n = t;
                return r === !1 && (r = st), this.each(function() {
                    b.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    b.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return b.event.trigger(e, t, n, !0)
            }
        }),
        function(e, t) {
            function rt(e) {
                return J.test(e + "")
            }

            function it() {
                var e, t = [];
                return e = function(n, r) {
                    return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
                }
            }

            function st(e) {
                return e[w] = !0, e
            }

            function ot(e) {
                var t = c.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }

            function ut(e, t, n, r) {
                var i, s, o, u, a, f, h, v, m, y;
                (t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [];
                if (!e || typeof e != "string") return n;
                if ((u = t.nodeType) !== 1 && u !== 9) return [];
                if (!p && !r) {
                    if (i = K.exec(e))
                        if (o = i[1]) {
                            if (u === 9) {
                                s = t.getElementById(o);
                                if (!s || !s.parentNode) return n;
                                if (s.id === o) return n.push(s), n
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o) return n.push(s), n
                        } else {
                            if (i[2]) return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                            if ((o = i[3]) && S.getByClassName && t.getElementsByClassName) return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n
                        }
                    if (S.qsa && !d.test(e)) {
                        h = !0, v = w, m = t, y = u === 9 && e;
                        if (u === 1 && t.nodeName.toLowerCase() !== "object") {
                            f = ht(e), (h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", a = f.length;
                            while (a--) f[a] = v + pt(f[a]);
                            m = $.test(e) && t.parentNode || t, y = f.join(",")
                        }
                        if (y) try {
                            return _.apply(n, D.call(m.querySelectorAll(y), 0)), n
                        } catch (b) {} finally {
                            h || t.removeAttribute("id")
                        }
                    }
                }
                return Et(e.replace(R, "$1"), t, n, r)
            }

            function at(e, t) {
                var n = t && e,
                    r = n && (~t.sourceIndex || A) - (~e.sourceIndex || A);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ft(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            }

            function lt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e
                }
            }

            function ct(e) {
                return st(function(t) {
                    return t = +t, st(function(n, r) {
                        var i, s = e([], n.length, t),
                            o = s.length;
                        while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function ht(e, t) {
                var n, r, s, o, u, a, f, l = C[e + " "];
                if (l) return t ? 0 : l.slice(0);
                u = e, a = [], f = i.preFilter;
                while (u) {
                    if (!n || (r = U.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                    n = !1;
                    if (r = z.exec(u)) n = r.shift(), s.push({
                        value: n,
                        type: r[0].replace(R, " ")
                    }), u = u.slice(n.length);
                    for (o in i.filter)(r = V[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), s.push({
                        value: n,
                        type: o,
                        matches: r
                    }), u = u.slice(n.length));
                    if (!n) break
                }
                return t ? u.length : u ? ut.error(e) : C(e, a).slice(0)
            }

            function pt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; t < n; t++) r += e[t].value;
                return r
            }

            function dt(e, t, n) {
                var i = t.dir,
                    s = n && i === "parentNode",
                    o = T++;
                return t.first ? function(t, n, r) {
                    while (t = t[i])
                        if (t.nodeType === 1 || s) return e(t, n, r)
                } : function(t, n, u) {
                    var a, f, l, c = x + " " + o;
                    if (u) {
                        while (t = t[i])
                            if (t.nodeType === 1 || s)
                                if (e(t, n, u)) return !0
                    } else
                        while (t = t[i])
                            if (t.nodeType === 1 || s) {
                                l = t[w] || (t[w] = {});
                                if ((f = l[i]) && f[0] === c) {
                                    if ((a = f[1]) === !0 || a === r) return a === !0
                                } else {
                                    f = l[i] = [c], f[1] = e(t, n, u) || r;
                                    if (f[1] === !0) return !0
                                }
                            }
                }
            }

            function vt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function mt(e, t, n, r, i) {
                var s, o = [],
                    u = 0,
                    a = e.length,
                    f = t != null;
                for (; u < a; u++)
                    if (s = e[u])
                        if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                return o
            }

            function gt(e, t, n, r, i, s) {
                return r && !r[w] && (r = gt(r)), i && !i[w] && (i = gt(i, s)), st(function(s, o, u, a) {
                    var f, l, c, h = [],
                        p = [],
                        d = o.length,
                        v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                        m = e && (s || !t) ? mt(v, h, e, u, a) : v,
                        g = n ? i || (s ? e : d || r) ? [] : o : m;
                    n && n(m, g, u, a);
                    if (r) {
                        f = mt(g, p), r(f, [], u, a), l = f.length;
                        while (l--)
                            if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)(c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                        }
                    } else g = mt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
                })
            }

            function yt(e) {
                var t, n, r, s = e.length,
                    o = i.relative[e[0].type],
                    u = o || i.relative[" "],
                    a = o ? 1 : 0,
                    l = dt(function(e) {
                        return e === t
                    }, u, !0),
                    c = dt(function(e) {
                        return P.call(t, e) > -1
                    }, u, !0),
                    h = [function(e, n, r) {
                        return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }];
                for (; a < s; a++)
                    if (n = i.relative[e[a].type]) h = [dt(vt(h), n)];
                    else {
                        n = i.filter[e[a].type].apply(null, e[a].matches);
                        if (n[w]) {
                            r = ++a;
                            for (; r < s; r++)
                                if (i.relative[e[r].type]) break;
                            return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, a < r && yt(e.slice(a, r)), r < s && yt(e = e.slice(r)), r < s && pt(e))
                        }
                        h.push(n)
                    }
                return vt(h)
            }

            function bt(e, t) {
                var n = 0,
                    s = t.length > 0,
                    o = e.length > 0,
                    u = function(u, a, l, h, p) {
                        var d, v, m, g = [],
                            y = 0,
                            b = "0",
                            w = u && [],
                            E = p != null,
                            S = f,
                            T = u || o && i.find.TAG("*", p && a.parentNode || a),
                            N = x += S == null ? 1 : Math.random() || .1;
                        E && (f = a !== c && a, r = n);
                        for (;
                            (d = T[b]) != null; b++) {
                            if (o && d) {
                                v = 0;
                                while (m = e[v++])
                                    if (m(d, a, l)) {
                                        h.push(d);
                                        break
                                    }
                                E && (x = N, r = ++n)
                            }
                            s && ((d = !m && d) && y--, u && w.push(d))
                        }
                        y += b;
                        if (s && b !== y) {
                            v = 0;
                            while (m = t[v++]) m(w, g, a, l);
                            if (u) {
                                if (y > 0)
                                    while (b--) !w[b] && !g[b] && (g[b] = M.call(h));
                                g = mt(g)
                            }
                            _.apply(h, g), E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h)
                        }
                        return E && (x = N, f = S), w
                    };
                return s ? st(u) : u
            }

            function wt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; r < i; r++) ut(e, t[r], n);
                return n
            }

            function Et(e, t, n, r) {
                var s, o, a, f, l, c = ht(e);
                if (!r && c.length === 1) {
                    o = c[0] = c[0].slice(0);
                    if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !p && i.relative[o[1].type]) {
                        t = i.find.ID(a.matches[0].replace(et, tt), t)[0];
                        if (!t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    s = V.needsContext.test(e) ? 0 : o.length;
                    while (s--) {
                        a = o[s];
                        if (i.relative[f = a.type]) break;
                        if (l = i.find[f])
                            if (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t)) {
                                o.splice(s, 1), e = r.length && pt(o);
                                if (!e) return _.apply(n, D.call(r, 0)), n;
                                break
                            }
                    }
                }
                return u(e, c)(r, t, p, n, $.test(e)), n
            }

            function St() {}
            var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, w = "sizzle" + -(new Date),
                E = e.document,
                S = {},
                x = 0,
                T = 0,
                N = it(),
                C = it(),
                k = it(),
                L = typeof t,
                A = 1 << 31,
                O = [],
                M = O.pop,
                _ = O.push,
                D = O.slice,
                P = O.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                H = "[\\x20\\t\\r\\n\\f]",
                B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                j = B.replace("w", "w#"),
                F = "([*^$|!~]?=)",
                I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]",
                q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
                R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                U = new RegExp("^" + H + "*," + H + "*"),
                z = new RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"),
                W = new RegExp(q),
                X = new RegExp("^" + j + "$"),
                V = {
                    ID: new RegExp("^#(" + B + ")"),
                    CLASS: new RegExp("^\\.(" + B + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                },
                $ = /[\x20\t\r\n\f]*[+~]/,
                J = /^[^{]+\{\s*\[native code/,
                K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Q = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                Y = /'|\\/g,
                Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                tt = function(e, t) {
                    var n = "0x" + t - 65536;
                    return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
                };
            try {
                D.call(E.documentElement.childNodes, 0)[0].nodeType
            } catch (nt) {
                D = function(e) {
                    var t, n = [];
                    while (t = this[e++]) n.push(t);
                    return n
                }
            }
            o = ut.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }, l = ut.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : E;
                if (n === c || n.nodeType !== 9 || !n.documentElement) return c;
                c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), S.attributes = ot(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }), S.getByClassName = ot(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                }), S.getByName = ot(function(e) {
                    e.id = w + 0, e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", h.insertBefore(e, h.firstChild);
                    var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
                    return S.getIdNotName = !n.getElementById(w), h.removeChild(e), t
                }), i.attrHandle = ot(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#"
                }) ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                }, S.getIdNotName ? (i.find.ID = function(e, t) {
                    if (typeof t.getElementById !== L && !p) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(et, tt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (i.find.ID = function(e, n) {
                    if (typeof n.getElementById !== L && !p) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(et, tt);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = S.tagNameNoComments ? function(e, t) {
                    if (typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e)
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        s = t.getElementsByTagName(e);
                    if (e === "*") {
                        while (n = s[i++]) n.nodeType === 1 && r.push(n);
                        return r
                    }
                    return s
                }, i.find.NAME = S.getByName && function(e, t) {
                    if (typeof t.getElementsByName !== L) return t.getElementsByName(name)
                }, i.find.CLASS = S.getByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== L && !p) return t.getElementsByClassName(e)
                }, v = [], d = [":focus"];
                if (S.qsa = rt(n.querySelectorAll)) ot(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked")
                }), ot(function(e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
                });
                return (S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                    S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
                }), d = new RegExp(d.join("|")), v = new RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ? function(e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, y = h.compareDocumentPosition ? function(e, t) {
                    var r;
                    if (e === t) return a = !0, 0;
                    if (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) return r & 1 || e.parentNode && e.parentNode.nodeType === 11 ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : r & 4 ? -1 : 1;
                    return e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        s = e.parentNode,
                        o = t.parentNode,
                        u = [e],
                        f = [t];
                    if (e === t) return a = !0, 0;
                    if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
                    if (s === o) return at(e, t);
                    r = e;
                    while (r = r.parentNode) u.unshift(r);
                    r = t;
                    while (r = r.parentNode) f.unshift(r);
                    while (u[i] === f[i]) i++;
                    return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0
                }, a = !1, [0, 0].sort(y), S.detectDuplicates = a, c
            }, ut.matches = function(e, t) {
                return ut(e, null, null, t)
            }, ut.matchesSelector = function(e, t) {
                (e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']");
                if (S.matchesSelector && !p && (!v || !v.test(t)) && !d.test(t)) try {
                    var n = m.call(e, t);
                    if (n || S.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
                } catch (r) {}
                return ut(t, c, null, [e]).length > 0
            }, ut.contains = function(e, t) {
                return (e.ownerDocument || e) !== c && l(e), g(e, t)
            }, ut.attr = function(e, t) {
                var n;
                return (e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, ut.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ut.uniqueSort = function(e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                a = !S.detectDuplicates, e.sort(y);
                if (a) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, s = ut.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (!i)
                    for (; t = e[r]; r++) n += s(t);
                else if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string") return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (i === 3 || i === 4) return e.nodeValue;
                return n
            }, i = ut.selectors = {
                cacheLength: 50,
                createPseudo: st,
                match: V,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ut.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        return e === "*" ? function() {
                            return !0
                        } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = N[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ut.attr(r, e);
                            return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var s = e.slice(0, 3) !== "nth",
                            o = e.slice(-4) !== "last",
                            u = t === "of-type";
                        return r === 1 && i === 0 ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, a) {
                            var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                g = u && t.nodeName.toLowerCase(),
                                y = !a && !u;
                            if (m) {
                                if (s) {
                                    while (v) {
                                        c = t;
                                        while (c = c[v])
                                            if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                        d = v = e === "only" && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                d = [o ? m.firstChild : m.lastChild];
                                if (o && y) {
                                    l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if (c.nodeType === 1 && ++h && c === t) {
                                            l[e] = [x, p, h];
                                            break
                                        }
                                } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x) h = f[1];
                                else
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                            y && ((c[w] || (c[w] = {}))[e] = [x, h]);
                                            if (c === t) break
                                        } return h -= i, h === r || h % r === 0 && h / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                        return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                            var i, s = r(e, t),
                                o = s.length;
                            while (o--) i = P.call(e, s[o]), e[i] = !(n[i] = s[o])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: st(function(e) {
                        var t = [],
                            n = [],
                            r = u(e.replace(R, "$1"));
                        return r[w] ? st(function(e, t, n, i) {
                            var s, o = r(e, null, i, []),
                                u = e.length;
                            while (u--)
                                if (s = o[u]) e[u] = !(t[u] = s)
                        }) : function(e, i, s) {
                            return t[0] = e, r(t, null, s, n), !n.pop()
                        }
                    }),
                    has: st(function(e) {
                        return function(t) {
                            return ut(e, t).length > 0
                        }
                    }),
                    contains: st(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                    }),
                    lang: st(function(e) {
                        return X.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                                while ((t = t.parentNode) && t.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    text: function(e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                    },
                    first: ct(function() {
                        return [0]
                    }),
                    last: ct(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ct(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ct(function(e, t) {
                        var n = 0;
                        for (; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ct(function(e, t) {
                        var n = 1;
                        for (; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ct(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: ct(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; ++r < t;) e.push(r);
                        return e
                    })
                }
            };
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[n] = ft(n);
            for (n in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[n] = lt(n);
            u = ut.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    s = k[e + " "];
                if (!s) {
                    t || (t = ht(e)), n = t.length;
                    while (n--) s = yt(t[n]), s[w] ? r.push(s) : i.push(s);
                    s = k(e, bt(i, r))
                }
                return s
            }, i.pseudos.nth = i.pseudos.eq, i.filters = St.prototype = i.pseudos, i.setFilters = new St, l(), ut.attr = b.attr, b.find = ut, b.expr = ut.selectors, b.expr[":"] = b.expr.pseudos, b.unique = ut.uniqueSort, b.text = ut.getText, b.isXMLDoc = ut.isXML, b.contains = ut.contains
        }(e);
    var ot = /Until$/,
        ut = /^(?:parents|prev(?:Until|All))/,
        at = /^.[^:#\[\.,]*$/,
        ft = b.expr.match.needsContext,
        lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    b.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if (typeof e != "string") return r = this, this.pushStack(b(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (b.contains(r[t], this)) return !0
            }));
            n = [];
            for (t = 0; t < i; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function(e) {
            var t, n = b(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (b.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ht(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(ht(this, e, !0))
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? ft.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = ft.test(e) || typeof e != "string" ? b(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(s.length > 1 ? b.unique(s) : s)
        },
        index: function(e) {
            return e ? typeof e == "string" ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.fn.andSelf = b.fn.addBack, b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return b.dir(e, "parentNode", n)
        },
        next: function(e) {
            return ct(e, "nextSibling")
        },
        prev: function(e) {
            return ct(e, "previousSibling")
        },
        nextAll: function(e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return b.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return b.sibling(e.firstChild)
        },
        contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }
    }, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return ot.test(e) || (r = n), r && typeof r == "string" && (i = b.filter(r, i)), i = this.length > 1 && !lt[e] ? b.unique(i) : i, this.length > 1 && ut.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), b.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !b(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        vt = / jQuery\d+="(?:null|\d+)"/g,
        mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"),
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style|link)/i,
        xt = /^(?:checkbox|radio)$/i,
        Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^$|\/(?:java|ecma)script/i,
        Ct = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        At = pt(s),
        Ot = At.appendChild(s.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, b.fn.extend({
        text: function(e) {
            return b.access(this, function(e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return b.isFunction(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = b.isFunction(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = 0;
            for (;
                (n = this[r]) != null; r++)
                if (!e || b.filter(e, [n]).length > 0) !t && n.nodeType === 1 && b.cleanData(jt(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && b.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                return b.clone(this, e, t)
            })
        },
        html: function(e) {
            return b.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
                if (typeof e == "string" && !St.test(e) && (b.support.htmlSerialize || !mt.test(e)) && (b.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (b.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = b.isFunction(e);
            return !t && typeof e != "string" && (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = h.apply([], e);
            var i, s, o, u, a, f, l = 0,
                c = this.length,
                p = this,
                d = c - 1,
                v = e[0],
                m = b.isFunction(v);
            if (m || !(c <= 1 || typeof v != "string" || b.support.checkClone || !Tt.test(v))) return this.each(function(i) {
                var s = p.eq(i);
                m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r)
            });
            if (c) {
                f = b.buildFragment(e, this[0].ownerDocument, !1, this), i = f.firstChild, f.childNodes.length === 1 && (f = i);
                if (i) {
                    n = n && b.nodeName(i, "tr"), u = b.map(jt(f, "script"), _t), o = u.length;
                    for (; l < c; l++) s = f, l !== d && (s = b.clone(s, !0, !0), o && b.merge(u, jt(s, "script"))), r.call(n && b.nodeName(this[l], "table") ? Mt(this[l], "tbody") : this[l], s, l);
                    if (o) {
                        a = u[u.length - 1].ownerDocument, b.map(u, Dt);
                        for (l = 0; l < o; l++) s = u[l], Nt.test(s.type || "") && !b._data(s, "globalEval") && b.contains(a, s) && (s.src ? b.ajax({
                            url: s.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : b.globalEval((s.text || s.textContent || s.innerHTML || "").replace(kt, "")))
                    }
                    f = i = null
                }
            }
            return this
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                s = b(e),
                o = s.length - 1;
            for (; r <= o; r++) n = r === o ? this : this.clone(!0), b(s[r])[t](n), p.apply(i, n.get());
            return this.pushStack(i)
        }
    }), b.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = b.contains(e.ownerDocument, e);
            b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
            if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !b.isXMLDoc(e)) {
                r = jt(s), u = jt(e);
                for (o = 0;
                    (i = u[o]) != null; ++o) r[o] && Bt(i, r[o])
            }
            if (t)
                if (n) {
                    u = u || jt(e), r = r || jt(s);
                    for (o = 0;
                        (i = u[o]) != null; o++) Ht(i, r[o])
                } else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
                h = pt(t),
                p = [],
                d = 0;
            for (; d < c; d++) {
                s = e[d];
                if (s || s === 0)
                    if (b.type(s) === "object") b.merge(p, s.nodeType ? [s] : s);
                    else if (!Et.test(s)) p.push(t.createTextNode(s));
                else {
                    u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                    while (i--) u = u.lastChild;
                    !b.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                    if (!b.support.tbody) {
                        s = a === "table" && !wt.test(s) ? u.firstChild : l[1] === "<table>" && !wt.test(s) ? u : 0, i = s && s.childNodes.length;
                        while (i--) b.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                    }
                    b.merge(p, u.childNodes), u.textContent = "";
                    while (u.firstChild) u.removeChild(u.firstChild);
                    u = h.lastChild
                }
            }
            u && h.removeChild(u), b.support.appendChecked || b.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) {
                if (r && b.inArray(s, r) !== -1) continue;
                o = b.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u);
                if (n) {
                    i = 0;
                    while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, h
        },
        cleanData: function(e, t) {
            var n, r, s, o, u = 0,
                a = b.expando,
                f = b.cache,
                c = b.support.deleteExpando,
                h = b.event.special;
            for (;
                (n = e[u]) != null; u++)
                if (t || b.acceptData(n)) {
                    s = n[a], o = s && f[s];
                    if (o) {
                        if (o.events)
                            for (r in o.events) h[r] ? b.event.remove(n, r) : b.removeEvent(n, r, o.handle);
                        f[s] && (delete f[s], c ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, l.push(s))
                    }
                }
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
        zt = /opacity\s*=\s*([^)]*)/,
        Wt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Vt = /^margin/,
        $t = new RegExp("^(" + w + ")(.*)$", "i"),
        Jt = new RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Kt = new RegExp("^([+-])=(" + w + ")", "i"),
        Qt = {
            BODY: "block"
        },
        Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Yt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];
    b.fn.extend({
        css: function(e, n) {
            return b.access(this, function(e, n, r) {
                var i, s, o = {},
                    u = 0;
                if (b.isArray(n)) {
                    s = qt(e), i = n.length;
                    for (; u < i; u++) o[n[u]] = b.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            var t = typeof e == "boolean";
            return this.each(function() {
                (t ? e : nn(this)) ? b(this).show(): b(this).hide()
            })
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = b.camelCase(n),
                f = e.style;
            n = b.cssProps[a] || (b.cssProps[a] = tn(f, a)), u = b.cssHooks[n] || b.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(b.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !b.cssNumber[a] && (r += "px"), !b.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = b.camelCase(n);
            return n = b.cssProps[a] || (b.cssProps[a] = tn(e.style, a)), u = b.cssHooks[n] || b.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || b.isNumeric(s) ? s || 0 : o) : o
        },
        swap: function(e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        }
    }), e.getComputedStyle ? (qt = function(t) {
        return e.getComputedStyle(t, null)
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u.getPropertyValue(n) || u[n] : t,
            f = e.style;
        return u && (a === "" && !b.contains(e.ownerDocument, e) && (a = b.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : s.documentElement.currentStyle && (qt = function(e) {
        return e.currentStyle
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u[n] : t,
            f = e.style;
        return a == null && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
    }), b.each(["height", "width"], function(e, t) {
        b.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && Xt.test(b.css(e, "display")) ? b.swap(e, Gt, function() {
                    return un(e, t, r)
                }) : un(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && qt(e);
                return sn(e, n, r ? on(e, t, r, b.support.boxSizing && b.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function(e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = b.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && b.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return
            }
            n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i
        }
    }), b(function() {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function(e, t) {
                if (t) return b.swap(e, {
                    display: "inline-block"
                }, Rt, [e, "marginRight"])
            }
        }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, t) {
            b.cssHooks[t] = {
                get: function(e, n) {
                    if (n) return n = Rt(e, t), Jt.test(n) ? b(e).position()[t] + "px" : n
                }
            }
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !b.support.reliableHiddenOffsets && (e.style && e.style.display || b.css(e, "display")) === "none"
    }, b.expr.filters.visible = function(e) {
        return !b.expr.filters.hidden(e)
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Vt.test(e) || (b.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g,
        cn = /\[\]$/,
        hn = /\r?\n/g,
        pn = /^(?:submit|button|image|reset|file)$/i,
        dn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function(e, t) {
                var n = b(this).val();
                return n == null ? null : b.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(hn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(hn, "\r\n")
                }
            }).get()
        }
    }), b.param = function(e, n) {
        var r, i = [],
            s = function(e, t) {
                t = b.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional);
        if (b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+")
    }, b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var mn, gn, yn = b.now(),
        bn = /\?/,
        wn = /#.*$/,
        En = /([?&])_=[^&]*/,
        Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tn = /^(?:GET|HEAD)$/,
        Nn = /^\/\//,
        Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        kn = b.fn.load,
        Ln = {},
        An = {},
        On = "*/".concat("*");
    try {
        gn = o.href
    } catch (Mn) {
        gn = s.createElement("a"), gn.href = "", gn = gn.href
    }
    mn = Cn.exec(gn.toLowerCase()) || [], b.fn.load = function(e, n, r) {
        if (typeof e != "string" && kn) return kn.apply(this, arguments);
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), b.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && b.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            s = arguments, u.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            u.each(r, s || [e.responseText, t, e])
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), b.each(["get", "post"], function(e, n) {
        b[n] = function(e, r, i, s) {
            return b.isFunction(r) && (s = s || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Pn(Pn(e, b.ajaxSettings), t) : Pn(b.ajaxSettings, e)
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function(e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                if (w === 2) return;
                w = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, r && (E = Hn(c, x, r));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (b.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (b.etag[s] = S)), e === 204 ? (l = !0, T = "nocontent") : e === 304 ? (l = !0, T = "notmodified") : (l = Bn(c, E), T = l.state, g = l.data, y = l.error, l = !y);
                else {
                    y = T;
                    if (e || !T) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --b.active || b.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = b.ajaxSetup({}, n),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? b(h) : b.event,
                d = b.Deferred(),
                v = b.Callbacks("once memory"),
                m = c.statusCode || {},
                g = {},
                y = {},
                w = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (w === 2) {
                            if (!l) {
                                l = {};
                                while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                            }
                            t = l[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return w === 2 ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || S;
                        return f && f.abort(t), N(0, t), this
                    }
                };
            d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = b.trim(c.dataType || "*").toLowerCase().match(E) || [""], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (mn[3] || (mn[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = b.param(c.data, c.traditional)), Dn(Ln, c, n, x);
            if (w === 2) return x;
            a = c.global, a && b.active++ === 0 && b.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (b.lastModified[s] && x.setRequestHeader("If-Modified-Since", b.lastModified[s]), b.etag[s] && x.setRequestHeader("If-None-Match", b.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && w !== 2) {
                S = "abort";
                for (i in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[i](c[i]);
                f = Dn(An, c, n, x);
                if (!f) N(-1, "No Transport");
                else {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        w = 1, f.send(g, N)
                    } catch (T) {
                        if (!(w < 2)) throw T;
                        N(-1, T)
                    }
                }
                return x
            }
            return x.abort()
        },
        getScript: function(e, n) {
            return b.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        }
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), b.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = s.head || b("head")[0] || s.documentElement;
            return {
                send: function(t, i) {
                    n = s.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var jn = [],
        Fn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = jn.pop() || b.expando + "_" + yn++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || b.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
            u = arguments
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && b.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    });
    var In, qn, Rn = 0,
        Un = e.ActiveXObject && function() {
            var e;
            for (e in In) In[e](t, !0)
        };
    b.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && zn() || Wn()
    } : zn, qn = b.ajaxSettings.xhr(), b.support.cors = !!qn && "withCredentials" in qn, qn = b.support.ajax = !!qn, qn && b.ajaxTransport(function(n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function(e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = b.noop, Un && delete In[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, b(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
        Jn = new RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Kn = /queueHooks$/,
        Qn = [nr],
        Gn = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    s = Jn.exec(t),
                    o = i.cur(),
                    u = +o || 0,
                    a = 1,
                    f = 20;
                if (s) {
                    n = +s[2], r = s[3] || (b.cssNumber[e] ? "" : "px");
                    if (r !== "px" && u) {
                        u = b.css(i.elem, e, !0) || n || 1;
                        do a = a || ".5", u /= a, b.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                    }
                    i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                }
                return i
            }]
        };
    b.Animation = b.extend(er, {
        tweener: function(e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }
    }), b.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = b.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (e.elem.style[b.cssProps[e.prop]] != null || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.each(["toggle", "show", "hide"], function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), b.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e),
                s = b.speed(t, n, r),
                o = function() {
                    var t = er(this, b.extend({}, e), s);
                    o.finish = function() {
                        t.stop(!0)
                    }, (i || b._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = b.timers,
                    o = b._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && b.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = b._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = b.timers,
                    o = r ? r.length : 0;
                n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this);
                for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), b.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        r.duration = b.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
    }, b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
        var e, n = b.timers,
            r = 0;
        Xn = b.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t
    }, b.fx.timer = function(e) {
        e() && b.timers.push(e) && b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function() {
        Vn || (Vn = setInterval(b.fx.tick, b.fx.interval))
    }, b.fx.stop = function() {
        clearInterval(Vn), Vn = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem
        }).length
    }), b.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            b.offset.setOffset(this, e, t)
        });
        var n, r, s = {
                top: 0,
                left: 0
            },
            o = this[0],
            u = o && o.ownerDocument;
        if (!u) return;
        return n = u.documentElement, b.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s
    }, b.offset = {
        setOffset: function(e, t, n) {
            var r = b.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = b(e),
                s = i.offset(),
                o = b.css(e, "top"),
                u = b.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && b.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), b.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, b.fn.extend({
        position: function() {
            if (!this[0]) return;
            var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
            return b.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - b.css(r, "marginTop", !0),
                left: t.left - n.left - b.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s.documentElement;
                while (e && !b.nodeName(e, "html") && b.css(e, "position") === "static") e = e.offsetParent;
                return e || s.documentElement
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function(i) {
            return b.access(this, function(e, i, s) {
                var o = sr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? b(o).scrollLeft() : s, r ? s : b(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), b.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            b.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return b.access(this, function(n, r, i) {
                    var s;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? b.css(n, r, u) : b.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = b, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return b
    })
})(window),
function(e, t) {
    var n = function() {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function(e) {
            return e.namespace === "rails"
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function(t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(n) {
            var i, s, o, u, a, f, l, c;
            if (r.fire(n, "ajax:before")) {
                u = n.data("cross-domain"), a = u === t ? null : u, f = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (n.is("form")) {
                    i = n.attr("method"), s = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(r.inputChangeSelector) ? (i = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"), s = r.href(n), o = n.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function(e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function(e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function(e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    crossDomain: a
                }, f && (c.xhrFields = {
                    withCredentials: f
                }), s && (c.url = s);
                var p = r.ajax(c);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function(n) {
            var i = r.href(n),
                s = n.data("method"),
                o = n.attr("target"),
                u = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content"),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
        },
        disableFormElements: function(t) {
            t.find(r.disableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function(t) {
            t.find(r.enableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var t = e.data("confirm"),
                n = !1,
                i;
            return t ? (r.fire(e, "confirm") && (n = r.confirm(t), i = r.fire(e, "confirm:complete", [n])), n && i) : !0
        },
        blankInputs: function(t, n, r) {
            var i = e(),
                s, o, u = n || "input,textarea",
                a = t.find(u);
            return a.each(function() {
                s = e(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is("input[type=radio]") && a.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                    i = i.add(s)
                }
            }), i.length ? i : !1
        },
        nonBlankInputs: function(e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function(n, r) {
            var i = n.data("events"),
                s = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function(e, t) {
                if (typeof t.handler == "function") return s = t.handler(r)
            }), s
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function(e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }), e(document).delegate(r.linkDisableSelector, "ajax:complete", function() {
        r.enableElement(e(this))
    }), e(document).delegate(r.linkClickSelector, "click.rails", function(n) {
        var i = e(this),
            s = i.data("method"),
            o = i.data("params");
        if (!r.allowAction(i)) return r.stopEverything(n);
        i.is(r.linkDisableSelector) && r.disableElement(i);
        if (i.data("remote") !== t) {
            if ((n.metaKey || n.ctrlKey) && (!s || s === "GET") && !o) return !0;
            var u = r.handleRemote(i);
            return u === !1 ? r.enableElement(i) : u.error(function() {
                r.enableElement(i)
            }), !1
        }
        if (i.data("method")) return r.handleMethod(i), !1
    }), e(document).delegate(r.inputChangeSelector, "change.rails", function(t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
    }), e(document).delegate(r.formSubmitSelector, "submit.rails", function(n) {
        var i = e(this),
            s = i.data("remote") !== t,
            o = r.blankInputs(i, r.requiredInputSelector),
            u = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o])) return r.stopEverything(n);
        if (s) {
            if (u) {
                setTimeout(function() {
                    r.disableFormElements(i)
                }, 13);
                var a = r.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function() {
                    r.enableFormElements(i)
                }, 13), a
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
        }
        setTimeout(function() {
            r.disableFormElements(i)
        }, 13)
    }), e(document).delegate(r.formInputClickSelector, "click.rails", function(t) {
        var n = e(this);
        if (!r.allowAction(n)) return r.stopEverything(t);
        var i = n.attr("name"),
            s = i ? {
                name: i,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
        this == t.target && r.disableFormElements(e(this))
    }), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && r.enableFormElements(e(this))
    }), e(function() {
        var t = e("meta[name=csrf-token]").attr("content"),
            n = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + n + '"]').val(t)
    }))
}(jQuery),
function() {
    var e = this,
        t = e._,
        n = {},
        r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = i.toString,
        l = i.hasOwnProperty,
        c = r.forEach,
        h = r.map,
        p = r.reduce,
        d = r.reduceRight,
        v = r.filter,
        m = r.every,
        g = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        E = Object.keys,
        S = s.bind,
        x = function(e) {
            return e instanceof x ? e : this instanceof x ? (this._wrapped = e, void 0) : new x(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.4.4";
    var T = x.each = x.forEach = function(e, t, r) {
        if (null != e)
            if (c && e.forEach === c) e.forEach(t, r);
            else if (e.length === +e.length) {
            for (var i = 0, s = e.length; s > i; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else
            for (var o in e)
                if (x.has(e, o) && t.call(r, e[o], o, e) === n) return
    };
    x.map = x.collect = function(e, t, n) {
        var r = [];
        return null == e ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (T(e, function(e, s, o) {
                i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
            }), !i) throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        if (T(e, function(u, a, f) {
                a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
            }), !i) throw new TypeError(N);
        return n
    }, x.find = x.detect = function(e, t, n) {
        var r;
        return C(e, function(e, i, s) {
            return t.call(n, e, i, s) ? (r = e, !0) : void 0
        }), r
    }, x.filter = x.select = function(e, t, n) {
        var r = [];
        return null == e ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, x.reject = function(e, t, n) {
        return x.filter(e, function(e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, x.every = x.all = function(e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return null == e ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
            return (i = i && t.call(r, e, s, o)) ? void 0 : n
        }), !!i)
    };
    var C = x.some = x.any = function(e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return null == e ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
            return i || (i = t.call(r, e, s, o)) ? n : void 0
        }), !!i)
    };
    x.contains = x.include = function(e, t) {
        return null == e ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function(e) {
            return e === t
        })
    }, x.invoke = function(e, t) {
        var n = u.call(arguments, 2),
            r = x.isFunction(t);
        return x.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function(e, t) {
        return x.map(e, function(e) {
            return e[t]
        })
    }, x.where = function(e, t, n) {
        return x.isEmpty(t) ? n ? null : [] : x[n ? "find" : "filter"](e, function(e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, x.findWhere = function(e, t) {
        return x.where(e, t, !0)
    }, x.max = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -1 / 0;
        var r = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.min = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return 1 / 0;
        var r = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            r.computed > o && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.shuffle = function(e) {
        var t, n = 0,
            r = [];
        return T(e, function(e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    };
    var k = function(e) {
        return x.isFunction(e) ? e : function(t) {
            return t[e]
        }
    };
    x.sortBy = function(e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (r > n || r === void 0) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var L = function(e, t, n, r) {
        var i = {},
            s = k(t || x.identity);
        return T(e, function(t, o) {
            var u = s.call(n, t, o, e);
            r(i, u, t)
        }), i
    };
    x.groupBy = function(e, t, n) {
        return L(e, t, n, function(e, t, n) {
            (x.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, x.countBy = function(e, t, n) {
        return L(e, t, n, function(e, t) {
            x.has(e, t) || (e[t] = 0), e[t]++
        })
    }, x.sortedIndex = function(e, t, n, r) {
        n = null == n ? x.identity : k(n);
        for (var i = n.call(r, t), s = 0, o = e.length; o > s;) {
            var u = s + o >>> 1;
            i > n.call(r, e[u]) ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function(e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : u.call(e, 0, t)
    }, x.initial = function(e, t, n) {
        return u.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, x.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
    }, x.rest = x.tail = x.drop = function(e, t, n) {
        return u.call(e, null == t || n ? 1 : t)
    }, x.compact = function(e) {
        return x.filter(e, x.identity)
    };
    var A = function(e, t, n) {
        return T(e, function(e) {
            x.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n
    };
    x.flatten = function(e, t) {
        return A(e, t, [])
    }, x.without = function(e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.uniq = x.unique = function(e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e,
            s = [],
            o = [];
        return T(i, function(n, r) {
            (t ? r && o[o.length - 1] === n : x.contains(o, n)) || (o.push(n), s.push(e[r]))
        }), s
    }, x.union = function() {
        return x.uniq(a.apply(r, arguments))
    }, x.intersection = function(e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function(e) {
            return x.every(t, function(t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function(e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function(e) {
            return !x.contains(t, e)
        })
    }, x.zip = function() {
        for (var e = u.call(arguments), t = x.max(x.pluck(e, "length")), n = Array(t), r = 0; t > r; r++) n[r] = x.pluck(e, "" + r);
        return n
    }, x.object = function(e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if ("number" != typeof n) return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; i > r; r++)
            if (e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var i = r ? n : e.length; i--;)
            if (e[i] === t) return i;
        return -1
    }, x.range = function(e, t, n) {
        1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = Array(r); r > i;) s[i++] = e, e += n;
        return s
    }, x.bind = function(e, t) {
        if (e.bind === S && S) return S.apply(e, u.call(arguments, 1));
        var n = u.call(arguments, 2);
        return function() {
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.partial = function(e) {
        var t = u.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(u.call(arguments)))
        }
    }, x.bindAll = function(e) {
        var t = u.call(arguments, 1);
        return 0 === t.length && (t = x.functions(e)), T(t, function(t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function(e, t) {
        var n = {};
        return t || (t = x.identity),
            function() {
                var r = t.apply(this, arguments);
                return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
    }, x.delay = function(e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, x.defer = function(e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function(e, t) {
        var n, r, i, s, o = 0,
            u = function() {
                o = new Date, i = null, s = e.apply(n, r)
            };
        return function() {
            var a = new Date,
                f = t - (a - o);
            return n = this, r = arguments, 0 >= f ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s
        }
    }, x.debounce = function(e, t, n) {
        var r, i;
        return function() {
            var s = this,
                o = arguments,
                u = function() {
                    r = null, n || (i = e.apply(s, o))
                },
                a = n && !r;
            return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
        }
    }, x.once = function(e) {
        var t, n = !1;
        return function() {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, x.wrap = function(e, t) {
        return function() {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, x.compose = function() {
        var e = arguments;
        return function() {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function(e, t) {
        return 0 >= e ? t() : function() {
            return 1 > --e ? t.apply(this, arguments) : void 0
        }
    }, x.keys = E || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) x.has(e, n) && (t[t.length] = n);
        return t
    }, x.values = function(e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push(e[n]);
        return t
    }, x.pairs = function(e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push([n, e[n]]);
        return t
    }, x.invert = function(e) {
        var t = {};
        for (var n in e) x.has(e, n) && (t[e[n]] = n);
        return t
    }, x.functions = x.methods = function(e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, x.pick = function(e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        return T(n, function(n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function(e) {
        var t = {},
            n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) null == e[n] && (e[n] = t[n])
        }), e
    }, x.clone = function(e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function(e, t) {
        return t(e), e
    };
    var O = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
            case "[object String]":
                return e == t + "";
            case "[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var s = n.length; s--;)
            if (n[s] == e) return r[s] == t;
        n.push(e), r.push(t);
        var o = 0,
            u = !0;
        if ("[object Array]" == i) {
            if (o = e.length, u = o == t.length)
                for (; o-- && (u = O(e[o], t[o], n, r)););
        } else {
            var a = e.constructor,
                l = t.constructor;
            if (a !== l && !(x.isFunction(a) && a instanceof a && x.isFunction(l) && l instanceof l)) return !1;
            for (var c in e)
                if (x.has(e, c) && (o++, !(u = x.has(t, c) && O(e[c], t[c], n, r)))) break;
            if (u) {
                for (c in t)
                    if (x.has(t, c) && !(o--)) break;
                u = !o
            }
        }
        return n.pop(), r.pop(), u
    };
    x.isEqual = function(e, t) {
        return O(e, t, [], [])
    }, x.isEmpty = function(e) {
        if (null == e) return !0;
        if (x.isArray(e) || x.isString(e)) return 0 === e.length;
        for (var t in e)
            if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function(e) {
        return !!e && 1 === e.nodeType
    }, x.isArray = w || function(e) {
        return "[object Array]" == f.call(e)
    }, x.isObject = function(e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        x["is" + e] = function(t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function(e) {
        return !!e && !!x.has(e, "callee")
    }), "function" != typeof /./ && (x.isFunction = function(e) {
        return "function" == typeof e
    }), x.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function(e) {
        return x.isNumber(e) && e != +e
    }, x.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" == f.call(e)
    }, x.isNull = function(e) {
        return null === e
    }, x.isUndefined = function(e) {
        return e === void 0
    }, x.has = function(e, t) {
        return l.call(e, t)
    }, x.noConflict = function() {
        return e._ = t, this
    }, x.identity = function(e) {
        return e
    }, x.times = function(e, t, n) {
        for (var r = Array(e), i = 0; e > i; i++) r[i] = t.call(n, i);
        return r
    }, x.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var M = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    M.unescape = x.invert(M.escape);
    var _ = {
        escape: RegExp("[" + x.keys(M.escape).join("") + "]", "g"),
        unescape: RegExp("(" + x.keys(M.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function(e) {
        x[e] = function(t) {
            return null == t ? "" : ("" + t).replace(_[e], function(t) {
                return M[e][t]
            })
        }
    }), x.result = function(e, t) {
        if (null == e) return null;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function(e) {
        T(x.functions(e), function(t) {
            var n = x[t] = e[t];
            x.prototype[t] = function() {
                var e = [this._wrapped];
                return o.apply(e, arguments), j.call(this, n.apply(x, e))
            }
        })
    };
    var D = 0;
    x.uniqueId = function(e) {
        var t = ++D + "";
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var P = /(.)^/,
        H = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "  ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = RegExp([(n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source].join("|") + "|$", "g"),
            s = 0,
            o = "__p+='";
        e.replace(i, function(t, n, r, i, u) {
            return o += e.slice(s, u).replace(B, function(e) {
                return "\\" + H[e]
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = Function(n.variable || "obj", "_", o)
        } catch (u) {
            throw u.source = o, u
        }
        if (t) return r(t, x);
        var a = function(e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, x.chain = function(e) {
        return x(e).chain()
    };
    var j = function(e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], j.call(this, n)
        }
    }), T(["concat", "join", "slice"], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            return j.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this),
    function() {
        var e = this,
            t = e.Backbone,
            n = [],
            r = n.push,
            i = n.slice,
            s = n.splice,
            o;
        o = "undefined" != typeof exports ? exports : e.Backbone = {}, o.VERSION = "0.9.10";
        var u = e._;
        !u && "undefined" != typeof require && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender, o.noConflict = function() {
            return e.Backbone = t, this
        }, o.emulateHTTP = !1, o.emulateJSON = !1;
        var a = /\s+/,
            f = function(e, t, n, r) {
                if (!n) return !0;
                if ("object" == typeof n)
                    for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                else {
                    if (!a.test(n)) return !0;
                    n = n.split(a), i = 0;
                    for (var s = n.length; i < s; i++) e[t].apply(e, [n[i]].concat(r))
                }
            },
            l = function(e, t) {
                var n, r = -1,
                    i = e.length;
                switch (t.length) {
                    case 0:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx);
                        break;
                    case 1:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, t[0]);
                        break;
                    case 2:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, t[0], t[1]);
                        break;
                    case 3:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, t[0], t[1], t[2]);
                        break;
                    default:
                        for (; ++r < i;)(n = e[r]).callback.apply(n.ctx, t)
                }
            },
            n = o.Events = {
                on: function(e, t, n) {
                    return !f(this, "on", e, [t, n]) || !t ? this : (this._events || (this._events = {}), (this._events[e] || (this._events[e] = [])).push({
                        callback: t,
                        context: n,
                        ctx: n || this
                    }), this)
                },
                once: function(e, t, n) {
                    if (!f(this, "once", e, [t, n]) || !t) return this;
                    var r = this,
                        i = u.once(function() {
                            r.off(e, i), t.apply(this, arguments)
                        });
                    return i._callback = t, this.on(e, i, n), this
                },
                off: function(e, t, n) {
                    var r, i, s, o, a, l, c, h;
                    if (!this._events || !f(this, "off", e, [t, n])) return this;
                    if (!e && !t && !n) return this._events = {}, this;
                    o = e ? [e] : u.keys(this._events), a = 0;
                    for (l = o.length; a < l; a++)
                        if (e = o[a], r = this._events[e]) {
                            s = [];
                            if (t || n) {
                                c = 0;
                                for (h = r.length; c < h; c++) i = r[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && s.push(i)
                            }
                            this._events[e] = s
                        }
                    return this
                },
                trigger: function(e) {
                    if (!this._events) return this;
                    var t = i.call(arguments, 1);
                    if (!f(this, "trigger", e, t)) return this;
                    var n = this._events[e],
                        r = this._events.all;
                    return n && l(n, t), r && l(r, arguments), this
                },
                listenTo: function(e, t, n) {
                    var r = this._listeners || (this._listeners = {}),
                        i = e._listenerId || (e._listenerId = u.uniqueId("l"));
                    return r[i] = e, e.on(t, "object" == typeof t ? this : n, this), this
                },
                stopListening: function(e, t, n) {
                    var r = this._listeners;
                    if (r) {
                        if (e) e.off(t, "object" == typeof t ? this : n, this), !t && !n && delete r[e._listenerId];
                        else {
                            "object" == typeof t && (n = this);
                            for (var i in r) r[i].off(t, n, this);
                            this._listeners = {}
                        }
                        return this
                    }
                }
            };
        n.bind = n.on, n.unbind = n.off, u.extend(o, n);
        var c = o.Model = function(e, t) {
            var n, r = e || {};
            this.cid = u.uniqueId("c"), this.attributes = {}, t && t.collection && (this.collection = t.collection), t && t.parse && (r = this.parse(r, t) || {});
            if (n = u.result(this, "defaults")) r = u.defaults({}, r, n);
            this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        u.extend(c.prototype, n, {
            changed: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function() {
                return u.clone(this.attributes)
            },
            sync: function() {
                return o.sync.apply(this, arguments)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                return u.escape(this.get(e))
            },
            has: function(e) {
                return null != this.get(e)
            },
            set: function(e, t, n) {
                var r, i, s, o, a, f, l;
                if (null == e) return this;
                "object" == typeof e ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
                if (!this._validate(i, n)) return !1;
                s = n.unset, o = n.silent, e = [], a = this._changing, this._changing = !0, a || (this._previousAttributes = u.clone(this.attributes), this.changed = {}), l = this.attributes, f = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
                for (r in i) t = i[r], u.isEqual(l[r], t) || e.push(r), u.isEqual(f[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete l[r] : l[r] = t;
                if (!o) {
                    e.length && (this._pending = !0), t = 0;
                    for (r = e.length; t < r; t++) this.trigger("change:" + e[t], this, l[e[t]], n)
                }
                if (a) return this;
                if (!o)
                    for (; this._pending;) this._pending = !1, this.trigger("change", this, n);
                return this._changing = this._pending = !1, this
            },
            unset: function(e, t) {
                return this.set(e, void 0, u.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function(e) {
                var t = {},
                    n;
                for (n in this.attributes) t[n] = void 0;
                return this.set(t, u.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function(e) {
                return null == e ? !u.isEmpty(this.changed) : u.has(this.changed, e)
            },
            changedAttributes: function(e) {
                if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
                var t, n = !1,
                    r = this._changing ? this._previousAttributes : this.attributes,
                    i;
                for (i in e) u.isEqual(r[i], t = e[i]) || ((n || (n = {}))[i] = t);
                return n
            },
            previous: function(e) {
                return null == e || !this._previousAttributes ? null : this._previousAttributes[e]
            },
            previousAttributes: function() {
                return u.clone(this._previousAttributes)
            },
            fetch: function(e) {
                e = e ? u.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = e.success;
                return e.success = function(e, n, r) {
                    if (!e.set(e.parse(n, r), r)) return !1;
                    t && t(e, n, r)
                }, this.sync("read", this, e)
            },
            save: function(e, t, n) {
                var r, i, s = this.attributes;
                return null == e || "object" == typeof e ? (r = e, n = t) : (r = {})[e] = t, r && (!n || !n.wait) && !this.set(r, n) ? !1 : (n = u.extend({
                    validate: !0
                }, n), this._validate(r, n) ? (r && n.wait && (this.attributes = u.extend({}, s, r)), void 0 === n.parse && (n.parse = !0), i = n.success, n.success = function(e, t, n) {
                    e.attributes = s;
                    var o = e.parse(t, n);
                    n.wait && (o = u.extend(r || {}, o));
                    if (u.isObject(o) && !e.set(o, n)) return !1;
                    i && i(e, t, n)
                }, e = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === e && (n.attrs = r), e = this.sync(e, this, n), r && n.wait && (this.attributes = s), e) : !1)
            },
            destroy: function(e) {
                e = e ? u.clone(e) : {};
                var t = this,
                    n = e.success,
                    r = function() {
                        t.trigger("destroy", t, t.collection, e)
                    };
                e.success = function(e, t, i) {
                    (i.wait || e.isNew()) && r(), n && n(e, t, i)
                };
                if (this.isNew()) return e.success(this, null, e), !1;
                var i = this.sync("delete", this, e);
                return e.wait || r(), i
            },
            url: function() {
                var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || k();
                return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(e) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return null == this.id
            },
            isValid: function(e) {
                return !this.validate || !this.validate(this.attributes, e)
            },
            _validate: function(e, t) {
                if (!t.validate || !this.validate) return !0;
                e = u.extend({}, this.attributes, e);
                var n = this.validationError = this.validate(e, t) || null;
                return n ? (this.trigger("invalid", this, n, t || {}), !1) : !0
            }
        });
        var h = o.Collection = function(e, t) {
            t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this.models = [], this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({
                silent: !0
            }, t))
        };
        u.extend(h.prototype, n, {
            model: c,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e)
                })
            },
            sync: function() {
                return o.sync.apply(this, arguments)
            },
            add: function(e, t) {
                e = u.isArray(e) ? e.slice() : [e], t || (t = {});
                var n, i, o, a, f, l, c, h, p, d;
                c = [], h = t.at, p = this.comparator && null == h && 0 != t.sort, d = u.isString(this.comparator) ? this.comparator : null, n = 0;
                for (i = e.length; n < i; n++)(o = this._prepareModel(a = e[n], t)) ? (f = this.get(o)) ? t.merge && (f.set(a === o ? o.attributes : a, t), p && !l && f.hasChanged(d) && (l = !0)) : (c.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, null != o.id && (this._byId[o.id] = o)) : this.trigger("invalid", this, a, t);
                c.length && (p && (l = !0), this.length += c.length, null != h ? s.apply(this.models, [h, 0].concat(c)) : r.apply(this.models, c)), l && this.sort({
                    silent: !0
                });
                if (t.silent) return this;
                n = 0;
                for (i = c.length; n < i; n++)(o = c[n]).trigger("add", o, this, t);
                return l && this.trigger("sort", this, t), this
            },
            remove: function(e, t) {
                e = u.isArray(e) ? e.slice() : [e], t || (t = {});
                var n, r, i, s;
                n = 0;
                for (r = e.length; n < r; n++)
                    if (s = this.get(e[n])) delete this._byId[s.id], delete this._byId[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, s.trigger("remove", s, this, t)), this._removeReference(s);
                return this
            },
            push: function(e, t) {
                return e = this._prepareModel(e, t), this.add(e, u.extend({
                    at: this.length
                }, t)), e
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            },
            unshift: function(e, t) {
                return e = this._prepareModel(e, t), this.add(e, u.extend({
                    at: 0
                }, t)), e
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e), t
            },
            slice: function(e, t) {
                return this.models.slice(e, t)
            },
            get: function(e) {
                if (null != e) return this._idAttr || (this._idAttr = this.model.prototype.idAttribute), this._byId[e.id || e.cid || e[this._idAttr] || e]
            },
            at: function(e) {
                return this.models[e]
            },
            where: function(e) {
                return u.isEmpty(e) ? [] : this.filter(function(t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0
                })
            },
            sort: function(e) {
                if (!this.comparator) throw Error("Cannot sort a set without a comparator");
                return e || (e = {}), u.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
            },
            pluck: function(e) {
                return u.invoke(this.models, "get", e)
            },
            update: function(e, t) {
                t = u.extend({
                    add: !0,
                    merge: !0,
                    remove: !0
                }, t), t.parse && (e = this.parse(e, t));
                var n, r, i, s, o = [],
                    a = [],
                    f = {};
                u.isArray(e) || (e = e ? [e] : []);
                if (t.add && !t.remove) return this.add(e, t);
                r = 0;
                for (i = e.length; r < i; r++) n = e[r], s = this.get(n), t.remove && s && (f[s.cid] = !0), (t.add && !s || t.merge && s) && o.push(n);
                if (t.remove) {
                    r = 0;
                    for (i = this.models.length; r < i; r++) n = this.models[r], f[n.cid] || a.push(n)
                }
                return a.length && this.remove(a, t), o.length && this.add(o, t), this
            },
            reset: function(e, t) {
                t || (t = {}), t.parse && (e = this.parse(e, t));
                for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
                return t.previousModels = this.models.slice(), this._reset(), e && this.add(e, u.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), this
            },
            fetch: function(e) {
                e = e ? u.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = e.success;
                return e.success = function(e, n, r) {
                    e[r.update ? "update" : "reset"](n, r), t && t(e, n, r)
                }, this.sync("read", this, e)
            },
            create: function(e, t) {
                t = t ? u.clone(t) : {};
                if (!(e = this._prepareModel(e, t))) return !1;
                t.wait || this.add(e, t);
                var n = this,
                    r = t.success;
                return t.success = function(e, t, i) {
                    i.wait && n.add(e, i), r && r(e, t, i)
                }, e.save(null, t), e
            },
            parse: function(e) {
                return e
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models.length = 0, this._byId = {}
            },
            _prepareModel: function(e, t) {
                if (e instanceof c) return e.collection || (e.collection = this), e;
                t || (t = {}), t.collection = this;
                var n = new this.model(e, t);
                return n._validate(e, t) ? n : !1
            },
            _removeReference: function(e) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, n, r) {
                ("add" === e || "remove" === e) && n !== this || ("destroy" === e && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
            },
            sortedIndex: function(e, t, n) {
                t || (t = this.comparator);
                var r = u.isFunction(t) ? t : function(e) {
                    return e.get(t)
                };
                return u.sortedIndex(this.models, e, r, n)
            }
        }), u.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without indexOf shuffle lastIndexOf isEmpty chain".split(" "), function(e) {
            h.prototype[e] = function() {
                var t = i.call(arguments);
                return t.unshift(this.models), u[e].apply(u, t)
            }
        }), u.each(["groupBy", "countBy", "sortBy"], function(e) {
            h.prototype[e] = function(t, n) {
                var r = u.isFunction(t) ? t : function(e) {
                    return e.get(t)
                };
                return u[e](this.models, r, n)
            }
        });
        var p = o.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            d = /\((.*?)\)/g,
            v = /(\(\?)?:\w+/g,
            m = /\*\w+/g,
            g = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        u.extend(p.prototype, n, {
            initialize: function() {},
            route: function(e, t, n) {
                return u.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), o.history.route(e, u.bind(function(r) {
                    r = this._extractParameters(e, r), n && n.apply(this, r), this.trigger.apply(this, ["route:" + t].concat(r)), this.trigger("route", t, r), o.history.trigger("route", this, t, r)
                }, this)), this
            },
            navigate: function(e, t) {
                return o.history.navigate(e, t), this
            },
            _bindRoutes: function() {
                if (this.routes)
                    for (var e, t = u.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
            },
            _routeToRegExp: function(e) {
                return e = e.replace(g, "\\$&").replace(d, "(?:$1)?").replace(v, function(e, t) {
                    return t ? e : "([^/]+)"
                }).replace(m, "(.*?)"), RegExp("^" + e + "$")
            },
            _extractParameters: function(e, t) {
                return e.exec(t).slice(1)
            }
        });
        var y = o.History = function() {
                this.handlers = [], u.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            b = /^[#\/]|\s+$/g,
            w = /^\/+|\/+$/g,
            E = /msie [\w.]+/,
            S = /\/$/;
        y.started = !1, u.extend(y.prototype, n, {
            interval: 50,
            getHash: function(e) {
                return (e = (e || this).location.href.match(/#(.*)$/)) ? e[1] : ""
            },
            getFragment: function(e, t) {
                if (null == e)
                    if (this._hasPushState || !this._wantsHashChange || t) {
                        e = this.location.pathname;
                        var n = this.root.replace(S, "");
                        e.indexOf(n) || (e = e.substr(n.length))
                    } else e = this.getHash();
                return e.replace(b, "")
            },
            start: function(e) {
                if (y.started) throw Error("Backbone.history has already been started");
                y.started = !0, this.options = u.extend({}, {
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.options.pushState || !this.history || !this.history.pushState), e = this.getFragment();
                var t = document.documentMode,
                    t = E.exec(navigator.userAgent.toLowerCase()) && (!t || 7 >= t);
                this.root = ("/" + this.root + "/").replace(w, "/"), t && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(e)), this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !t ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = e, e = this.location, t = e.pathname.replace(/[^\/]$/, "$&/") === this.root;
                if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !t) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                this._wantsPushState && this._hasPushState && t && e.hash && (this.fragment = this.getHash().replace(b, ""), this.history.replaceState({}, document.title, this.root + this.fragment + e.search));
                if (!this.options.silent) return this.loadUrl()
            },
            stop: function() {
                o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), y.started = !1
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function() {
                var e = this.getFragment();
                e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe)));
                if (e === this.fragment) return !1;
                this.iframe && this.navigate(e), this.loadUrl() || this.loadUrl(this.getHash())
            },
            loadUrl: function(e) {
                var t = this.fragment = this.getFragment(e);
                return u.any(this.handlers, function(e) {
                    if (e.route.test(t)) return e.callback(t), !0
                })
            },
            navigate: function(e, t) {
                if (!y.started) return !1;
                if (!t || !0 === t) t = {
                    trigger: t
                };
                e = this.getFragment(e || "");
                if (this.fragment !== e) {
                    this.fragment = e;
                    var n = this.root + e;
                    if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                    }
                    t.trigger && this.loadUrl(e)
                }
            },
            _updateHash: function(e, t, n) {
                n ? (n = e.href.replace(/(javascript:|#).*$/, ""), e.replace(n + "#" + t)) : e.hash = "#" + t
            }
        }), o.history = new y;
        var x = o.View = function(e) {
                this.cid = u.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            T = /^(\S+)\s*(.*)$/,
            N = "model collection el id attributes className tagName events".split(" ");
        u.extend(x.prototype, n, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(e, t) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], !1 !== t && this.delegateEvents(), this
            },
            delegateEvents: function(e) {
                if (e || (e = u.result(this, "events"))) {
                    this.undelegateEvents();
                    for (var t in e) {
                        var n = e[t];
                        u.isFunction(n) || (n = this[e[t]]);
                        if (!n) throw Error('Method "' + e[t] + '" does not exist');
                        var r = t.match(T),
                            i = r[1],
                            r = r[2],
                            n = u.bind(n, this),
                            i = i + (".delegateEvents" + this.cid);
                        "" === r ? this.$el.on(i, n) : this.$el.on(i, r, n)
                    }
                }
            },
            undelegateEvents: function() {
                this.$el.off(".delegateEvents" + this.cid)
            },
            _configure: function(e) {
                this.options && (e = u.extend({}, u.result(this, "options"), e)), u.extend(this, u.pick(e, N)), this.options = e
            },
            _ensureElement: function() {
                if (this.el) this.setElement(u.result(this, "el"), !1);
                else {
                    var e = u.extend({}, u.result(this, "attributes"));
                    this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className")), e = o.$("<" + u.result(this, "tagName") + ">").attr(e), this.setElement(e, !1)
                }
            }
        });
        var C = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        o.sync = function(e, t, n) {
            var r = C[e];
            u.defaults(n || (n = {}), {
                emulateHTTP: o.emulateHTTP,
                emulateJSON: o.emulateJSON
            });
            var i = {
                type: r,
                dataType: "json"
            };
            n.url || (i.url = u.result(t, "url") || k()), null == n.data && t && ("create" === e || "update" === e || "patch" === e) && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {
                model: i.data
            } : {});
            if (n.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
                i.type = "POST", n.emulateJSON && (i.data._method = r);
                var s = n.beforeSend;
                n.beforeSend = function(e) {
                    e.setRequestHeader("X-HTTP-Method-Override", r);
                    if (s) return s.apply(this, arguments)
                }
            }
            "GET" !== i.type && !n.emulateJSON && (i.processData = !1);
            var a = n.success;
            n.success = function(e) {
                a && a(t, e, n), t.trigger("sync", t, e, n)
            };
            var f = n.error;
            return n.error = function(e) {
                f && f(t, e, n), t.trigger("error", t, e, n)
            }, e = n.xhr = o.ajax(u.extend(i, n)), t.trigger("request", t, e, n), e
        }, o.ajax = function() {
            return o.$.ajax.apply(o.$, arguments)
        }, c.extend = h.extend = p.extend = x.extend = y.extend = function(e, t) {
            var n = this,
                r;
            r = e && u.has(e, "constructor") ? e.constructor : function() {
                return n.apply(this, arguments)
            }, u.extend(r, n, t);
            var i = function() {
                this.constructor = r
            };
            return i.prototype = n.prototype, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.
            prototype, r
        };
        var k = function() {
            throw Error('A "url" property or function must be specified')
        }
    }.call(this),
    function(e, t, n) {
        "use strict";
        var r = e.document,
            i = e.Modernizr,
            s = function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            },
            o = "Moz Webkit O Ms".split(" "),
            u = function(e) {
                var t = r.documentElement.style,
                    n;
                if (typeof t[e] == "string") return e;
                e = s(e);
                for (var i = 0, u = o.length; i < u; i++) {
                    n = o[i] + e;
                    if (typeof t[n] == "string") return n
                }
            },
            a = u("transform"),
            f = u("transitionProperty"),
            l = {
                csstransforms: function() {
                    return !!a
                },
                csstransforms3d: function() {
                    var e = !!u("perspective");
                    if (e) {
                        var n = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                            r = "@media (" + n.join("transform-3d),(") + "modernizr)",
                            i = t("<style>" + r + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
                            s = t('<div id="modernizr" />').appendTo("html");
                        e = s.height() === 3, s.remove(), i.remove()
                    }
                    return e
                },
                csstransitions: function() {
                    return !!f
                }
            },
            c;
        if (i)
            for (c in l) i.hasOwnProperty(c) || i.addTest(c, l[c]);
        else {
            i = e.Modernizr = {
                _version: "1.6ish: miniModernizr for Isotope"
            };
            var h = " ",
                p;
            for (c in l) p = l[c](), i[c] = p, h += " " + (p ? "" : "no-") + c;
            t("html").addClass(h)
        }
        if (i.csstransforms) {
            var d = i.csstransforms3d ? {
                    translate: function(e) {
                        return "translate3d(" + e[0] + "px, " + e[1] + "px, 0) "
                    },
                    scale: function(e) {
                        return "scale3d(" + e + ", " + e + ", 1) "
                    }
                } : {
                    translate: function(e) {
                        return "translate(" + e[0] + "px, " + e[1] + "px) "
                    },
                    scale: function(e) {
                        return "scale(" + e + ") "
                    }
                },
                v = function(e, n, r) {
                    var i = t.data(e, "isoTransform") || {},
                        s = {},
                        o, u = {},
                        f;
                    s[n] = r, t.extend(i, s);
                    for (o in i) f = i[o], u[o] = d[o](f);
                    var l = u.translate || "",
                        c = u.scale || "",
                        h = l + c;
                    t.data(e, "isoTransform", i), e.style[a] = h
                };
            t.cssNumber.scale = !0, t.cssHooks.scale = {
                set: function(e, t) {
                    v(e, "scale", t)
                },
                get: function(e, n) {
                    var r = t.data(e, "isoTransform");
                    return r && r.scale ? r.scale : 1
                }
            }, t.fx.step.scale = function(e) {
                t.cssHooks.scale.set(e.elem, e.now + e.unit)
            }, t.cssNumber.translate = !0, t.cssHooks.translate = {
                set: function(e, t) {
                    v(e, "translate", t)
                },
                get: function(e, n) {
                    var r = t.data(e, "isoTransform");
                    return r && r.translate ? r.translate : [0, 0]
                }
            }
        }
        var m, g;
        i.csstransitions && (m = {
            WebkitTransitionProperty: "webkitTransitionEnd",
            MozTransitionProperty: "transitionend",
            OTransitionProperty: "oTransitionEnd otransitionend",
            transitionProperty: "transitionend"
        }[f], g = u("transitionDuration"));
        var y = t.event,
            b = t.event.handle ? "handle" : "dispatch",
            w;
        y.special.smartresize = {
            setup: function() {
                t(this).bind("resize", y.special.smartresize.handler)
            },
            teardown: function() {
                t(this).unbind("resize", y.special.smartresize.handler)
            },
            handler: function(e, t) {
                var n = this,
                    r = arguments;
                e.type = "smartresize", w && clearTimeout(w), w = setTimeout(function() {
                    y[b].apply(n, r)
                }, t === "execAsap" ? 0 : 100)
            }
        }, t.fn.smartresize = function(e) {
            return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"])
        }, t.Isotope = function(e, n, r) {
            this.element = t(n), this._create(e), this._init(r)
        };
        var E = ["width", "height"],
            S = t(e);
        t.Isotope.settings = {
            resizable: !0,
            layoutMode: "masonry",
            containerClass: "isotope",
            itemClass: "isotope-item",
            hiddenClass: "isotope-hidden",
            hiddenStyle: {
                opacity: 0,
                scale: .001
            },
            visibleStyle: {
                opacity: 1,
                scale: 1
            },
            containerStyle: {
                position: "relative",
                overflow: "hidden"
            },
            animationEngine: "best-available",
            animationOptions: {
                queue: !1,
                duration: 800
            },
            sortBy: "original-order",
            sortAscending: !0,
            resizesContainer: !0,
            transformsEnabled: !0,
            itemPositionDataEnabled: !1
        }, t.Isotope.prototype = {
            _create: function(e) {
                this.options = t.extend({}, t.Isotope.settings, e), this.styleQueue = [], this.elemCount = 0;
                var n = this.element[0].style;
                this.originalStyle = {};
                var r = E.slice(0);
                for (var i in this.options.containerStyle) r.push(i);
                for (var s = 0, o = r.length; s < o; s++) i = r[s], this.originalStyle[i] = n[i] || "";
                this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
                var u = {
                    "original-order": function(e, t) {
                        return t.elemCount++, t.elemCount
                    },
                    random: function() {
                        return Math.random()
                    }
                };
                this.options.getSortData = t.extend(this.options.getSortData, u), this.reloadItems(), this.offset = {
                    left: parseInt(this.element.css("padding-left") || 0, 10),
                    top: parseInt(this.element.css("padding-top") || 0, 10)
                };
                var a = this;
                setTimeout(function() {
                    a.element.addClass(a.options.containerClass)
                }, 0), this.options.resizable && S.bind("smartresize.isotope", function() {
                    a.resize()
                }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                    return !1
                })
            },
            _getAtoms: function(e) {
                var t = this.options.itemSelector,
                    n = t ? e.filter(t).add(e.find(t)) : e,
                    r = {
                        position: "absolute"
                    };
                return n = n.filter(function(e, t) {
                    return t.nodeType === 1
                }), this.usingTransforms && (r.left = 0, r.top = 0), n.css(r).addClass(this.options.itemClass), this.updateSortData(n, !0), n
            },
            _init: function(e) {
                this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(e)
            },
            option: function(e) {
                if (t.isPlainObject(e)) {
                    this.options = t.extend(!0, this.options, e);
                    var n;
                    for (var r in e) n = "_update" + s(r), this[n] && this[n]()
                }
            },
            _updateAnimationEngine: function() {
                var e = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                    t;
                switch (e) {
                    case "css":
                    case "none":
                        t = !1;
                        break;
                    case "jquery":
                        t = !0;
                        break;
                    default:
                        t = !i.csstransitions
                }
                this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
            },
            _updateTransformsEnabled: function() {
                this._updateUsingTransforms()
            },
            _updateUsingTransforms: function() {
                var e = this.usingTransforms = this.options.transformsEnabled && i.csstransforms && i.csstransitions && !this.isUsingJQueryAnimation;
                e || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = e ? this._translate : this._positionAbs
            },
            _filter: function(e) {
                var t = this.options.filter === "" ? "*" : this.options.filter;
                if (!t) return e;
                var n = this.options.hiddenClass,
                    r = "." + n,
                    i = e.filter(r),
                    s = i;
                if (t !== "*") {
                    s = i.filter(t);
                    var o = e.not(r).not(t).addClass(n);
                    this.styleQueue.push({
                        $el: o,
                        style: this.options.hiddenStyle
                    })
                }
                return this.styleQueue.push({
                    $el: s,
                    style: this.options.visibleStyle
                }), s.removeClass(n), e.filter(t)
            },
            updateSortData: function(e, n) {
                var r = this,
                    i = this.options.getSortData,
                    s, o;
                e.each(function() {
                    s = t(this), o = {};
                    for (var e in i) !n && e === "original-order" ? o[e] = t.data(this, "isotope-sort-data")[e] : o[e] = i[e](s, r);
                    t.data(this, "isotope-sort-data", o)
                })
            },
            _sort: function() {
                var e = this.options.sortBy,
                    t = this._getSorter,
                    n = this.options.sortAscending ? 1 : -1,
                    r = function(r, i) {
                        var s = t(r, e),
                            o = t(i, e);
                        return s === o && e !== "original-order" && (s = t(r, "original-order"), o = t(i, "original-order")), (s > o ? 1 : s < o ? -1 : 0) * n
                    };
                this.$filteredAtoms.sort(r)
            },
            _getSorter: function(e, n) {
                return t.data(e, "isotope-sort-data")[n]
            },
            _translate: function(e, t) {
                return {
                    translate: [e, t]
                }
            },
            _positionAbs: function(e, t) {
                return {
                    left: e,
                    top: t
                }
            },
            _pushPosition: function(e, t, n) {
                t = Math.round(t + this.offset.left), n = Math.round(n + this.offset.top);
                var r = this.getPositionStyles(t, n);
                this.styleQueue.push({
                    $el: e,
                    style: r
                }), this.options.itemPositionDataEnabled && e.data("isotope-item-position", {
                    x: t,
                    y: n
                })
            },
            layout: function(e, t) {
                var n = this.options.layoutMode;
                this["_" + n + "Layout"](e);
                if (this.options.resizesContainer) {
                    var r = this["_" + n + "GetContainerSize"]();
                    this.styleQueue.push({
                        $el: this.element,
                        style: r
                    })
                }
                this._processStyleQueue(e, t), this.isLaidOut = !0
            },
            _processStyleQueue: function(e, n) {
                var r = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                    s = this.options.animationOptions,
                    o = this.options.onLayout,
                    u, a, f, l;
                a = function(e, t) {
                    t.$el[r](t.style, s)
                };
                if (this._isInserting && this.isUsingJQueryAnimation) a = function(e, t) {
                    u = t.$el.hasClass("no-transition") ? "css" : r, t.$el[u](t.style, s)
                };
                else if (n || o || s.complete) {
                    var c = !1,
                        h = [n, o, s.complete],
                        p = this;
                    f = !0, l = function() {
                        if (c) return;
                        var t;
                        for (var n = 0, r = h.length; n < r; n++) t = h[n], typeof t == "function" && t.call(p.element, e, p);
                        c = !0
                    };
                    if (this.isUsingJQueryAnimation && r === "animate") s.complete = l, f = !1;
                    else if (i.csstransitions) {
                        var d = 0,
                            v = this.styleQueue[0],
                            y = v && v.$el,
                            b;
                        while (!y || !y.length) {
                            b = this.styleQueue[d++];
                            if (!b) return;
                            y = b.$el
                        }
                        var w = parseFloat(getComputedStyle(y[0])[g]);
                        w > 0 && (a = function(e, t) {
                            t.$el[r](t.style, s).one(m, l)
                        }, f = !1)
                    }
                }
                t.each(this.styleQueue, a), f && l(), this.styleQueue = []
            },
            resize: function() {
                this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
            },
            reLayout: function(e) {
                this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, e)
            },
            addItems: function(e, t) {
                var n = this._getAtoms(e);
                this.$allAtoms = this.$allAtoms.add(n), t && t(n)
            },
            insert: function(e, t) {
                this.element.append(e);
                var n = this;
                this.addItems(e, function(e) {
                    var r = n._filter(e);
                    n._addHideAppended(r), n._sort(), n.reLayout(), n._revealAppended(r, t)
                })
            },
            appended: function(e, t) {
                var n = this;
                this.addItems(e, function(e) {
                    n._addHideAppended(e), n.layout(e), n._revealAppended(e, t)
                })
            },
            _addHideAppended: function(e) {
                this.$filteredAtoms = this.$filteredAtoms.add(e), e.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                    $el: e,
                    style: this.options.hiddenStyle
                })
            },
            _revealAppended: function(e, t) {
                var n = this;
                setTimeout(function() {
                    e.removeClass("no-transition"), n.styleQueue.push({
                        $el: e,
                        style: n.options.visibleStyle
                    }), n._isInserting = !1, n._processStyleQueue(e, t)
                }, 10)
            },
            reloadItems: function() {
                this.$allAtoms = this._getAtoms(this.element.children())
            },
            remove: function(e, t) {
                this.$allAtoms = this.$allAtoms.not(e), this.$filteredAtoms = this.$filteredAtoms.not(e);
                var n = this,
                    r = function() {
                        e.remove(), t && t.call(n.element)
                    };
                e.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                    $el: e,
                    style: this.options.hiddenStyle
                }), this._sort(), this.reLayout(r)) : r()
            },
            shuffle: function(e) {
                this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(e)
            },
            destroy: function() {
                var e = this.usingTransforms,
                    t = this.options;
                this.$allAtoms.removeClass(t.hiddenClass + " " + t.itemClass).each(function() {
                    var t = this.style;
                    t.position = "", t.top = "", t.left = "", t.opacity = "", e && (t[a] = "")
                });
                var n = this.element[0].style;
                for (var r in this.originalStyle) n[r] = this.originalStyle[r];
                this.element.unbind(".isotope").undelegate("." + t.hiddenClass, "click").removeClass(t.containerClass).removeData("isotope"), S.unbind(".isotope")
            },
            _getSegments: function(e) {
                var t = this.options.layoutMode,
                    n = e ? "rowHeight" : "columnWidth",
                    r = e ? "height" : "width",
                    i = e ? "rows" : "cols",
                    o = this.element[r](),
                    u, a = this.options[t] && this.options[t][n] || this.$filteredAtoms["outer" + s(r)](!0) || o;
                u = Math.floor(o / a), u = Math.max(u, 1), this[t][i] = u, this[t][n] = a
            },
            _checkIfSegmentsChanged: function(e) {
                var t = this.options.layoutMode,
                    n = e ? "rows" : "cols",
                    r = this[t][n];
                return this._getSegments(e), this[t][n] !== r
            },
            _masonryReset: function() {
                this.masonry = {}, this._getSegments();
                var e = this.masonry.cols;
                this.masonry.colYs = [];
                while (e--) this.masonry.colYs.push(0)
            },
            _masonryLayout: function(e) {
                var n = this,
                    r = n.masonry;
                e.each(function() {
                    var e = t(this),
                        i = Math.ceil(e.outerWidth(!0) / r.columnWidth);
                    i = Math.min(i, r.cols);
                    if (i === 1) n._masonryPlaceBrick(e, r.colYs);
                    else {
                        var s = r.cols + 1 - i,
                            o = [],
                            u, a;
                        for (a = 0; a < s; a++) u = r.colYs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                        n._masonryPlaceBrick(e, o)
                    }
                })
            },
            _masonryPlaceBrick: function(e, t) {
                var n = Math.min.apply(Math, t),
                    r = 0;
                for (var i = 0, s = t.length; i < s; i++)
                    if (t[i] === n) {
                        r = i;
                        break
                    }
                var o = this.masonry.columnWidth * r,
                    u = n;
                this._pushPosition(e, o, u);
                var a = n + e.outerHeight(!0),
                    f = this.masonry.cols + 1 - s;
                for (i = 0; i < f; i++) this.masonry.colYs[r + i] = a
            },
            _masonryGetContainerSize: function() {
                var e = Math.max.apply(Math, this.masonry.colYs);
                return {
                    height: e
                }
            },
            _masonryResizeChanged: function() {
                return this._checkIfSegmentsChanged()
            },
            _fitRowsReset: function() {
                this.fitRows = {
                    x: 0,
                    y: 0,
                    height: 0
                }
            },
            _fitRowsLayout: function(e) {
                var n = this,
                    r = this.element.width(),
                    i = this.fitRows;
                e.each(function() {
                    var e = t(this),
                        s = e.outerWidth(!0),
                        o = e.outerHeight(!0);
                    i.x !== 0 && s + i.x > r && (i.x = 0, i.y = i.height), n._pushPosition(e, i.x, i.y), i.height = Math.max(i.y + o, i.height), i.x += s
                })
            },
            _fitRowsGetContainerSize: function() {
                return {
                    height: this.fitRows.height
                }
            },
            _fitRowsResizeChanged: function() {
                return !0
            },
            _cellsByRowReset: function() {
                this.cellsByRow = {
                    index: 0
                }, this._getSegments(), this._getSegments(!0)
            },
            _cellsByRowLayout: function(e) {
                var n = this,
                    r = this.cellsByRow;
                e.each(function() {
                    var e = t(this),
                        i = r.index % r.cols,
                        s = Math.floor(r.index / r.cols),
                        o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
                        u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;
                    n._pushPosition(e, o, u), r.index++
                })
            },
            _cellsByRowGetContainerSize: function() {
                return {
                    height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
                }
            },
            _cellsByRowResizeChanged: function() {
                return this._checkIfSegmentsChanged()
            },
            _straightDownReset: function() {
                this.straightDown = {
                    y: 0
                }
            },
            _straightDownLayout: function(e) {
                var n = this;
                e.each(function(e) {
                    var r = t(this);
                    n._pushPosition(r, 0, n.straightDown.y), n.straightDown.y += r.outerHeight(!0)
                })
            },
            _straightDownGetContainerSize: function() {
                return {
                    height: this.straightDown.y
                }
            },
            _straightDownResizeChanged: function() {
                return !0
            },
            _masonryHorizontalReset: function() {
                this.masonryHorizontal = {}, this._getSegments(!0);
                var e = this.masonryHorizontal.rows;
                this.masonryHorizontal.rowXs = [];
                while (e--) this.masonryHorizontal.rowXs.push(0)
            },
            _masonryHorizontalLayout: function(e) {
                var n = this,
                    r = n.masonryHorizontal;
                e.each(function() {
                    var e = t(this),
                        i = Math.ceil(e.outerHeight(!0) / r.rowHeight);
                    i = Math.min(i, r.rows);
                    if (i === 1) n._masonryHorizontalPlaceBrick(e, r.rowXs);
                    else {
                        var s = r.rows + 1 - i,
                            o = [],
                            u, a;
                        for (a = 0; a < s; a++) u = r.rowXs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                        n._masonryHorizontalPlaceBrick(e, o)
                    }
                })
            },
            _masonryHorizontalPlaceBrick: function(e, t) {
                var n = Math.min.apply(Math, t),
                    r = 0;
                for (var i = 0, s = t.length; i < s; i++)
                    if (t[i] === n) {
                        r = i;
                        break
                    }
                var o = n,
                    u = this.masonryHorizontal.rowHeight * r;
                this._pushPosition(e, o, u);
                var a = n + e.outerWidth(!0),
                    f = this.masonryHorizontal.rows + 1 - s;
                for (i = 0; i < f; i++) this.masonryHorizontal.rowXs[r + i] = a
            },
            _masonryHorizontalGetContainerSize: function() {
                var e = Math.max.apply(Math, this.masonryHorizontal.rowXs);
                return {
                    width: e
                }
            },
            _masonryHorizontalResizeChanged: function() {
                return this._checkIfSegmentsChanged(!0)
            },
            _fitColumnsReset: function() {
                this.fitColumns = {
                    x: 0,
                    y: 0,
                    width: 0
                }
            },
            _fitColumnsLayout: function(e) {
                var n = this,
                    r = this.element.height(),
                    i = this.fitColumns;
                e.each(function() {
                    var e = t(this),
                        s = e.outerWidth(!0),
                        o = e.outerHeight(!0);
                    i.y !== 0 && o + i.y > r && (i.x = i.width, i.y = 0), n._pushPosition(e, i.x, i.y), i.width = Math.max(i.x + s, i.width), i.y += o
                })
            },
            _fitColumnsGetContainerSize: function() {
                return {
                    width: this.fitColumns.width
                }
            },
            _fitColumnsResizeChanged: function() {
                return !0
            },
            _cellsByColumnReset: function() {
                this.cellsByColumn = {
                    index: 0
                }, this._getSegments(), this._getSegments(!0)
            },
            _cellsByColumnLayout: function(e) {
                var n = this,
                    r = this.cellsByColumn;
                e.each(function() {
                    var e = t(this),
                        i = Math.floor(r.index / r.rows),
                        s = r.index % r.rows,
                        o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
                        u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;
                    n._pushPosition(e, o, u), r.index++
                })
            },
            _cellsByColumnGetContainerSize: function() {
                return {
                    width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
                }
            },
            _cellsByColumnResizeChanged: function() {
                return this._checkIfSegmentsChanged(!0)
            },
            _straightAcrossReset: function() {
                this.straightAcross = {
                    x: 0
                }
            },
            _straightAcrossLayout: function(e) {
                var n = this;
                e.each(function(e) {
                    var r = t(this);
                    n._pushPosition(r, n.straightAcross.x, 0), n.straightAcross.x += r.outerWidth(!0)
                })
            },
            _straightAcrossGetContainerSize: function() {
                return {
                    width: this.straightAcross.x
                }
            },
            _straightAcrossResizeChanged: function() {
                return !0
            }
        }, t.fn.imagesLoaded = function(e) {
            function u() {
                e.call(n, r)
            }

            function a(e) {
                var n = e.target;
                n.src !== s && t.inArray(n, o) === -1 && (o.push(n), --i <= 0 && (setTimeout(u), r.unbind(".imagesLoaded", a)))
            }
            var n = this,
                r = n.find("img").add(n.filter("img")),
                i = r.length,
                s = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                o = [];
            return i || u(), r.bind("load.imagesLoaded error.imagesLoaded", a).each(function() {
                var e = this.src;
                this.src = s, this.src = e
            }), n
        };
        var x = function(t) {
            e.console && e.console.error(t)
        };
        t.fn.isotope = function(e, n) {
            if (typeof e == "string") {
                var r = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var n = t.data(this, "isotope");
                    if (!n) {
                        x("cannot call methods on isotope prior to initialization; attempted to call method '" + e + "'");
                        return
                    }
                    if (!t.isFunction(n[e]) || e.charAt(0) === "_") {
                        x("no such method '" + e + "' for isotope instance");
                        return
                    }
                    n[e].apply(n, r)
                })
            } else this.each(function() {
                var r = t.data(this, "isotope");
                r ? (r.option(e), r._init(n)) : t.data(this, "isotope", new t.Isotope(e, this, n))
            });
            return this
        }
    }(window, jQuery),
    function(e) {
        function t(t) {
            var n = t || window.event,
                r = [].slice.call(arguments, 1),
                i = 0,
                s = 0,
                o = 0,
                t = e.event.fix(n);
            return t.type = "mousewheel", n.wheelDelta && (i = n.wheelDelta / 120), n.detail && (i = -n.detail / 3), o = i, n.axis !== void 0 && n.axis === n.HORIZONTAL_AXIS && (o = 0, s = -1 * i), n.wheelDeltaY !== void 0 && (o = n.wheelDeltaY / 120), n.wheelDeltaX !== void 0 && (s = -1 * n.wheelDeltaX / 120), r.unshift(t, i, s, o), (e.event.dispatch || e.event.handle).apply(this, r)
        }
        var n = ["DOMMouseScroll", "mousewheel"];
        if (e.event.fixHooks)
            for (var r = n.length; r;) e.event.fixHooks[n[--r]] = e.event.mouseHooks;
        e.event.special.mousewheel = {
            setup: function() {
                if (this.addEventListener)
                    for (var e = n.length; e;) this.addEventListener(n[--e], t, !1);
                else this.onmousewheel = t
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var e = n.length; e;) this.removeEventListener(n[--e], t, !1);
                else this.onmousewheel = null
            }
        }, e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }(jQuery),
    function(e, t, n, r) {
        var i = n(e),
            s = n(t),
            o = n.fancybox = function() {
                o.open.apply(this, arguments)
            },
            u = navigator.userAgent.match(/msie/),
            a = null,
            f = t.createTouch !== r,
            l = function(e) {
                return e && e.hasOwnProperty && e instanceof n
            },
            c = function(e) {
                return e && "string" === n.type(e)
            },
            h = function(e) {
                return c(e) && 0 < e.indexOf("%")
            },
            p = function(e, t) {
                var n = parseInt(e, 10) || 0;
                return t && h(e) && (n *= o.getViewport()[t] / 100), Math.ceil(n)
            },
            d = function(e, t) {
                return p(e, t) + "px"
            };
        n.extend(o, {
            version: "2.1.4",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !f,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (u ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeChange: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(e, t) {
                if (e && (n.isPlainObject(t) || (t = {}), !1 !== o.close(!0))) return n.isArray(e) || (e = l(e) ? n(e).get() : [e]), n.each(e, function(i, s) {
                    var u = {},
                        a, f, h, p, d;
                    "object" === n.type(s) && (s.nodeType && (s = n(s)), l(s) ? (u = {
                        href: s.data("fancybox-href") || s.attr("href"),
                        title: s.data("fancybox-title") || s.attr("title"),
                        isDom: !0,
                        element: s
                    }, n.metadata && n.extend(!0, u, s.metadata())) : u = s), a = t.href || u.href || (c(s) ? s : null), f = t.title !== r ? t.title : u.title || "", p = (h = t.content || u.content) ? "html" : t.type || u.type, !p && u.isDom && (p = s.data("fancybox-type"), p || (p = (p = s.prop("class").match(/fancybox\.(\w+)/)) ? p[1] : null)), c(a) && (p || (o.isImage(a) ? p = "image" : o.isSWF(a) ? p = "swf" : "#" === a.charAt(0) ? p = "inline" : c(s) && (p = "html", h = s)), "ajax" === p && (d = a.split(/\s+/, 2), a = d.shift(), d = d.shift())), h || ("inline" === p ? a ? h = n(c(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : u.isDom && (h = s) : "html" === p ? h = a : !p && !a && u.isDom && (p = "inline", h = s)), n.extend(u, {
                        href: a,
                        type: p,
                        content: h,
                        title: f,
                        selector: d
                    }), e[i] = u
                }), o.opts = n.extend(!0, {}, o.defaults, t), t.keys !== r && (o.opts.keys = t.keys ? n.extend({}, o.defaults.keys, t.keys) : !1), o.group = e, o._start(o.opts.index)
            },
            cancel: function() {
                var e = o.coming;
                e && !1 !== o.trigger("onCancel") && (o.hideLoading(), o.ajaxLoad && o.ajaxLoad.abort(), o.ajaxLoad = null, o.imgPreload && (o.imgPreload.onload = o.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), o.coming = null, o.current || o._afterZoomOut(e))
            },
            close: function(e) {
                o.cancel(), !1 !== o.trigger("beforeClose") && (o.unbindEvents(), o.isActive && (!o.isOpen || !0 === e ? (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), o._afterZoomOut()) : (o.isOpen = o.isOpened = !1, o.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), o.wrap.stop(!0, !0).removeClass("fancybox-opened"), o.transitions[o.current.closeMethod]())))
            },
            play: function(e) {
                var t = function() {
                        clearTimeout(o.player.timer)
                    },
                    r = function() {
                        t(), o.current && o.player.isActive && (o.player.timer = setTimeout(o.next, o.current.playSpeed))
                    },
                    i = function() {
                        t(), n("body").unbind(".player"), o.player.isActive = !1, o.trigger("onPlayEnd")
                    };
                !0 === e || !o.player.isActive && !1 !== e ? o.current && (o.current.loop || o.current.index < o.group.length - 1) && (o.player.isActive = !0, n("body").bind({
                    "afterShow.player onUpdate.player": r,
                    "onCancel.player beforeClose.player": i,
                    "beforeLoad.player": t
                }), r(), o.trigger("onPlayStart")) : i()
            },
            next: function(e) {
                var t = o.current;
                t && (c(e) || (e = t.direction.next), o.jumpto(t.index + 1, e, "next"))
            },
            prev: function(e) {
                var t = o.current;
                t && (c(e) || (e = t.direction.prev), o.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function(e, t, n) {
                var i = o.current;
                i && (e = p(e), o.direction = t || i.direction[e >= i.index ? "next" : "prev"], o.router = n || "jumpto", i.loop && (0 > e && (e = i.group.length + e % i.group.length), e %= i.group.length), i.group[e] !== r && (o.cancel(), o._start(e)))
            },
            reposition: function(e, t) {
                var r = o.current,
                    i = r ? r.wrap : null,
                    s;
                i && (s = o._getPosition(t), e && "scroll" === e.type ? (delete s.position, i.stop(!0, !0).animate(s, 200)) : (i.css(s), r.pos = n.extend({}, r.dim, s)))
            },
            update: function(e) {
                var t = e && e.type,
                    n = !t || "orientationchange" === t;
                n && (clearTimeout(a), a = null), o.isOpen && !a && (a = setTimeout(function() {
                    var r = o.current;
                    r && !o.isClosing && (o.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && r.autoResize) && o._setDimension(), "scroll" === t && r.canShrink || o.reposition(e), o.trigger("onUpdate"), a = null)
                }, n && !f ? 0 : 300))
            },
            toggle: function(e) {
                o.isOpen && (o.current.fitToView = "boolean" === n.type(e) ? e : !o.current.fitToView, f && (o.wrap.removeAttr("style").addClass("fancybox-tmp"), o.trigger("onUpdate")), o.update())
            },
            hideLoading: function() {
                s.unbind(".loading"), n("#fancybox-loading").remove()
            },
            showLoading: function() {
                var e, t;
                o.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body"), s.bind("keydown.loading", function(e) {
                    27 === (e.which || e.keyCode) && (e.preventDefault(), o.cancel())
                }), o.defaults.fixed || (t = o.getViewport(), e.css({
                    position: "absolute",
                    top: .5 * t.h + t.y,
                    left: .5 * t.w + t.x
                }))
            },
            getViewport: function() {
                var t = o.current && o.current.locked || !1,
                    n = {
                        x: i.scrollLeft(),
                        y: i.scrollTop()
                    };
                return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = f && e.innerWidth ? e.innerWidth : i.width(), n.h = f && e.innerHeight ? e.innerHeight : i.height()), n
            },
            unbindEvents: function() {
                o.wrap && l(o.wrap) && o.wrap.unbind(".fb"), s.unbind(".fb"), i.unbind(".fb")
            },
            bindEvents: function() {
                var e = o.current,
                    t;
                e && (i.bind("orientationchange.fb" + (f ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), o.update), (t = e.keys) && s.bind("keydown.fb", function(i) {
                    var s = i.which || i.keyCode,
                        u = i.target || i.srcElement;
                    if (27 === s && o.coming) return !1;
                    !i.ctrlKey && !i.altKey && !i.shiftKey && !i.metaKey && (!u || !u.type && !n(u).is("[contenteditable]")) && n.each(t, function(t, u) {
                        if (1 < e.group.length && u[s] !== r) return o[t](u[s]), i.preventDefault(), !1;
                        if (-1 < n.inArray(s, u)) return o[t](), i.preventDefault(), !1
                    })
                }), n.fn.mousewheel && e.mouseWheel && o.wrap.bind("mousewheel.fb", function(t, r, i, s) {
                    for (var u = n(t.target || null), a = !1; u.length && !a && !u.is(".fancybox-skin") && !u.is(".fancybox-wrap");) a = u[0] && (!u[0].style.overflow || "hidden" !== u[0].style.overflow) && (u[0].clientWidth && u[0].scrollWidth > u[0].clientWidth || u[0].clientHeight && u[0].scrollHeight > u[0].clientHeight), u = n(u).parent();
                    0 !== r && !a && 1 < o.group.length && !e.canShrink && (0 < s || 0 < i ? o.prev(0 < s ? "down" : "left") : (0 > s || 0 > i) && o.next(0 > s ? "up" : "right"), t.preventDefault())
                }))
            },
            trigger: function(e, t) {
                var r, i = t || o.coming || o.current;
                if (i) {
                    n.isFunction(i[e]) && (r = i[e].apply(i, Array.prototype.slice.call(arguments, 1)));
                    if (!1 === r) return !1;
                    i.helpers && n.each(i.helpers, function(t, r) {
                        r && o.helpers[t] && n.isFunction(o.helpers[t][e]) && (r = n.extend(!0, {}, o.helpers[t].defaults, r), o.helpers[t][e](r, i))
                    }), n.event.trigger(e + ".fb")
                }
            },
            isImage: function(e) {
                return c(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)
            },
            isSWF: function(e) {
                return c(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(e) {
                var t = {},
                    r, i;
                e = p(e), r = o.group[e] || null;
                if (!r) return !1;
                t = n.extend(!0, {}, o.opts, r), r = t.margin, i = t.padding, "number" === n.type(r) && (t.margin = [r, r, r, r]), "number" === n.type(i) && (t.padding = [i, i, i, i]), t.modal && n.extend(!0, t, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                }), t.autoSize && (t.autoWidth = t.autoHeight = !0), "auto" === t.width && (t.autoWidth = !0), "auto" === t.height && (t.autoHeight = !0), t.group = o.group, t.index = e, o.coming = t;
                if (!1 === o.trigger("beforeLoad")) o.coming = null;
                else {
                    i = t.type, r = t.href;
                    if (!i) return o.coming = null, o.current && o.router && "jumpto" !== o.router ? (o.current.index = e, o[o.router](o.direction)) : !1;
                    o.isActive = !0;
                    if ("image" === i || "swf" === i) t.autoHeight = t.autoWidth = !1, t.scrolling = "visible";
                    "image" === i && (t.aspectRatio = !0), "iframe" === i && f && (t.scrolling = "scroll"), t.wrap = n(t.tpl.wrap).addClass("fancybox-" + (f ? "mobile" : "desktop") + " fancybox-type-" + i + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body"), n.extend(t, {
                        skin: n(".fancybox-skin", t.wrap),
                        outer: n(".fancybox-outer", t.wrap),
                        inner: n(".fancybox-inner", t.wrap)
                    }), n.each(["Top", "Right", "Bottom", "Left"], function(e, n) {
                        t.skin.css("padding" + n, d(t.padding[e]))
                    }), o.trigger("onReady");
                    if ("inline" === i || "html" === i) {
                        if (!t.content || !t.content.length) return o._error("content")
                    } else if (!r) return o._error("href");
                    "image" === i ? o._loadImage() : "ajax" === i ? o._loadAjax() : "iframe" === i ? o._loadIframe() : o._afterLoad()
                }
            },
            _error: function(e) {
                n.extend(o.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: o.coming.tpl.error
                }), o._afterLoad()
            },
            _loadImage: function() {
                var e = o.imgPreload = new Image;
                e.onload = function() {
                    this.onload = this.onerror = null, o.coming.width = this.width, o.coming.height = this.height, o._afterLoad()
                }, e.onerror = function() {
                    this.onload = this.onerror = null, o._error("image")
                }, e.src = o.coming.href, !0 !== e.complete && o.showLoading()
            },
            _loadAjax: function() {
                var e = o.coming;
                o.showLoading(), o.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                    url: e.href,
                    error: function(e, t) {
                        o.coming && "abort" !== t ? o._error("ajax", e) : o.hideLoading()
                    },
                    success: function(t, n) {
                        "success" === n && (e.content = t, o._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var e = o.coming,
                    t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", f ? "auto" : e.iframe.scrolling).attr("src", e.href);
                n(e.wrap).bind("onReset", function() {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (e) {}
                }), e.iframe.preload && (o.showLoading(), t.one("load", function() {
                    n(this).data("ready", 1), f || n(this).bind("load.fb", o.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), o._afterLoad()
                })), e.content = t.appendTo(e.inner), e.iframe.preload || o._afterLoad()
            },
            _preloadImages: function() {
                var e = o.group,
                    t = o.current,
                    n = e.length,
                    r = t.preload ? Math.min(t.preload, n - 1) : 0,
                    i, s;
                for (s = 1; s <= r; s += 1) i = e[(t.index + s) % n], "image" === i.type && i.href && ((new Image).src = i.href)
            },
            _afterLoad: function() {
                var e = o.coming,
                    t = o.current,
                    r, i, s, u, a;
                o.hideLoading();
                if (e && !1 !== o.isActive)
                    if (!1 === o.trigger("afterLoad", e, t)) e.wrap.stop(!0).trigger("onReset").remove(), o.coming = null;
                    else {
                        t && (o.trigger("beforeChange", t), t.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), o.unbindEvents(), r = e.content, i = e.type, s = e.scrolling, n.extend(o, {
                            wrap: e.wrap,
                            skin: e.skin,
                            outer: e.outer,
                            inner: e.inner,
                            current: e,
                            previous: t
                        }), u = e.href;
                        switch (i) {
                            case "inline":
                            case "ajax":
                            case "html":
                                e.selector ? r = n("<div>").html(r).find(e.selector) : l(r) && (r.data("fancybox-placeholder") || r.data("fancybox-placeholder", n('<div class="fancybox-placeholder"></div>').insertAfter(r).hide()), r = r.show().detach(), e.wrap.bind("onReset", function() {
                                    n(this).find(r).length && r.hide().replaceAll(r.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                }));
                                break;
                            case "image":
                                r = e.tpl.image.replace("{href}", u);
                                break;
                            case "swf":
                                r = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + u + '"></param>', a = "", n.each(e.swf, function(e, t) {
                                    r += '<param name="' + e + '" value="' + t + '"></param>', a += " " + e + '="' + t + '"'
                                }), r += '<embed src="' + u + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                        }(!l(r) || !r.parent().is(e.inner)) && e.inner.append(r), o.trigger("beforeShow"), e.inner.css("overflow", "yes" === s ? "scroll" : "no" === s ? "hidden" : s), o._setDimension(), o.reposition(), o.isOpen = !1, o.coming = null, o.bindEvents(), o.isOpened ? t.prevMethod && o.transitions[t.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), o.transitions[o.isOpened ? e.nextMethod : e.openMethod](), o._preloadImages()
                    }
            },
            _setDimension: function() {
                var e = o.getViewport(),
                    t = 0,
                    r = !1,
                    i = !1,
                    r = o.wrap,
                    s = o.skin,
                    u = o.inner,
                    a = o.current,
                    i = a.width,
                    f = a.height,
                    l = a.minWidth,
                    c = a.minHeight,
                    v = a.maxWidth,
                    m = a.maxHeight,
                    g = a.scrolling,
                    y = a.scrollOutside ? a.scrollbarWidth : 0,
                    w = a.margin,
                    E = p(w[1] + w[3]),
                    S = p(w[0] + w[2]),
                    T, N, C, k, L, A, O, M, _;
                r.add(s).add(u).width("auto").height("auto").removeClass("fancybox-tmp"), w = p(s.outerWidth(!0) - s.width()), T = p(s.outerHeight(!0) - s.height()), N = E + w, C = S + T, k = h(i) ? (e.w - N) * p(i) / 100 : i, L = h(f) ? (e.h - C) * p(f) / 100 : f;
                if ("iframe" === a.type) {
                    if (_ = a.content, a.autoHeight && 1 === _.data("ready")) try {
                        _[0].contentWindow.document.location && (u.width(k).height(9999), A = _.contents().find("body"), y && A.css("overflow-x", "hidden"), L = A.height())
                    } catch (D) {}
                } else if (a.autoWidth || a.autoHeight) u.addClass("fancybox-tmp"), a.autoWidth || u.width(k), a.autoHeight || u.height(L), a.autoWidth && (k = u.width()), a.autoHeight && (L = u.height()), u.removeClass("fancybox-tmp");
                i = p(k), f = p(L), M = k / L, l = p(h(l) ? p(l, "w") - N : l), v = p(h(v) ? p(v, "w") - N : v), c = p(h(c) ? p(c, "h") - C : c), m = p(h(m) ? p(m, "h") - C : m), A = v, O = m, a.fitToView && (v = Math.min(e.w - N, v), m = Math.min(e.h - C, m)), N = e.w - E, S = e.h - S, a.aspectRatio ? (i > v && (i = v, f = p(i / M)), f > m && (f = m, i = p(f * M)), i < l && (i = l, f = p(i / M)), f < c && (f = c, i = p(f * M))) : (i = Math.max(l, Math.min(i, v)), a.autoHeight && "iframe" !== a.type && (u.width(i), f = u.height()), f = Math.max(c, Math.min(f, m)));
                if (a.fitToView)
                    if (u.width(i).height(f), r.width(i + w), e = r.width(), E = r.height(), a.aspectRatio)
                        for (;
                            (e > N || E > S) && i > l && f > c && !(19 < t++);) f = Math.max(c, Math.min(m, f - 10)), i = p(f * M), i < l && (i = l, f = p(i / M)), i > v && (i = v, f = p(i / M)), u.width(i).height(f), r.width(i + w), e = r.width(), E = r.height();
                    else i = Math.max(l, Math.min(i, i - (e - N))), f = Math.max(c, Math.min(f, f - (E - S)));
                y && "auto" === g && f < L && i + w + y < N && (i += y), u.width(i).height(f), r.width(i + w), e = r.width(), E = r.height(), r = (e > N || E > S) && i > l && f > c, i = a.aspectRatio ? i < A && f < O && i < k && f < L : (i < A || f < O) && (i < k || f < L), n.extend(a, {
                    dim: {
                        width: d(e),
                        height: d(E)
                    },
                    origWidth: k,
                    origHeight: L,
                    canShrink: r,
                    canExpand: i,
                    wPadding: w,
                    hPadding: T,
                    wrapSpace: E - s.outerHeight(!0),
                    skinSpace: s.height() - f
                }), !_ && a.autoHeight && f > c && f < m && !i && u.height("auto")
            },
            _getPosition: function(e) {
                var t = o.current,
                    n = o.getViewport(),
                    r = t.margin,
                    i = o.wrap.width() + r[1] + r[3],
                    s = o.wrap.height() + r[0] + r[2],
                    r = {
                        position: "absolute",
                        top: r[0],
                        left: r[3]
                    };
                return t.autoCenter && t.fixed && !e && s <= n.h && i <= n.w ? r.position = "fixed" : t.locked || (r.top += n.y, r.left += n.x), r.top = d(Math.max(r.top, r.top + (n.h - s) * t.topRatio)), r.left = d(Math.max(r.left, r.left + (n.w - i) * t.leftRatio)), r
            },
            _afterZoomIn: function() {
                var e = o.current;
                e && (o.isOpen = o.isOpened = !0, o.wrap.css("overflow", "visible").addClass("fancybox-opened"), o.update(), (e.closeClick || e.nextClick && 1 < o.group.length) && o.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    !n(t.target).is("a") && !n(t.target).parent().is("a") && (t.preventDefault(), o[e.closeClick ? "close" : "next"]())
                }), e.closeBtn && n(e.tpl.closeBtn).appendTo(o.skin).bind("click.fb", function(e) {
                    e.preventDefault(), o.close()
                }), e.arrows && 1 < o.group.length && ((e.loop || 0 < e.index) && n(e.tpl.prev).appendTo(o.outer).bind("click.fb", o.prev), (e.loop || e.index < o.group.length - 1) && n(e.tpl.next).appendTo(o.outer).bind("click.fb", o.next)), o.trigger("afterShow"), !e.loop && e.index === e.group.length - 1 ? o.play(!1) : o.opts.autoPlay && !o.player.isActive && (o.opts.autoPlay = !1, o.play()))
            },
            _afterZoomOut: function(e) {
                e = e || o.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(o, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), o.trigger("afterClose", e)
            }
        }), o.transitions = {
            getOrigPosition: function() {
                var e = o.current,
                    t = e.element,
                    n = e.orig,
                    r = {},
                    i = 50,
                    s = 50,
                    u = e.hPadding,
                    a = e.wPadding,
                    f = o.getViewport();
                !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), l(n) ? (r = n.offset(), n.is("img") && (i = n.outerWidth(), s = n.outerHeight())) : (r.top = f.y + (f.h - s) * e.topRatio, r.left = f.x + (f.w - i) * e.leftRatio);
                if ("fixed" === o.wrap.css("position") || e.locked) r.top -= f.y, r.left -= f.x;
                return r = {
                    top: d(r.top - u * e.topRatio),
                    left: d(r.left - a * e.leftRatio),
                    width: d(i + a),
                    height: d(s + u)
                }
            },
            step: function(e, t) {
                var n, r, i = t.prop;
                r = o.current;
                var s = r.wrapSpace,
                    u = r.skinSpace;
                if ("width" === i || "height" === i) n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), o.isClosing && (n = 1 - n), r = "width" === i ? r.wPadding : r.hPadding, r = e - r, o.skin[i](p("width" === i ? r : r - s * n)), o.inner[i](p("width" === i ? r : r - s * n - u * n))
            },
            zoomIn: function() {
                var e = o.current,
                    t = e.pos,
                    r = e.openEffect,
                    i = "elastic" === r,
                    s = n.extend({
                        opacity: 1
                    }, t);
                delete s.position, i ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === r && (t.opacity = .1), o.wrap.css(t).animate(s, {
                    duration: "none" === r ? 0 : e.openSpeed,
                    easing: e.openEasing,
                    step: i ? this.step : null,
                    complete: o._afterZoomIn
                })
            },
            zoomOut: function() {
                var e = o.current,
                    t = e.closeEffect,
                    n = "elastic" === t,
                    r = {
                        opacity: .1
                    };
                n && (r = this.getOrigPosition(), e.closeOpacity && (r.opacity = .1)), o.wrap.animate(r, {
                    duration: "none" === t ? 0 : e.closeSpeed,
                    easing: e.closeEasing,
                    step: n ? this.step : null,
                    complete: o._afterZoomOut
                })
            },
            changeIn: function() {
                var e = o.current,
                    t = e.nextEffect,
                    n = e.pos,
                    r = {
                        opacity: 1
                    },
                    i = o.direction,
                    s;
                n.opacity = .1, "elastic" === t && (s = "down" === i || "up" === i ? "top" : "left", "down" === i || "right" === i ? (n[s] = d(p(n[s]) - 200), r[s] = "+=200px") : (n[s] = d(p(n[s]) + 200), r[s] = "-=200px")), "none" === t ? o._afterZoomIn() : o.wrap.css(n).animate(r, {
                    duration: e.nextSpeed,
                    easing: e.nextEasing,
                    complete: o._afterZoomIn
                })
            },
            changeOut: function() {
                var e = o.previous,
                    t = e.prevEffect,
                    r = {
                        opacity: .1
                    },
                    i = o.direction;
                "elastic" === t && (r["down" === i || "up" === i ? "top" : "left"] = ("up" === i || "left" === i ? "-" : "+") + "=200px"), e.wrap.animate(r, {
                    duration: "none" === t ? 0 : e.prevSpeed,
                    easing: e.prevEasing,
                    complete: function() {
                        n(this).trigger("onReset").remove()
                    }
                })
            }
        }, o.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !f,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            create: function(e) {
                e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo("body"), this.fixed = !1, e.fixed && o.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(e) {
                var t = this;
                e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (i.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                    n(e.target).hasClass("fancybox-overlay") && (o.isActive ? o.close() : t.close())
                }), this.overlay.css(e.css).show()
            },
            close: function() {
                n(".fancybox-overlay").remove(), i.unbind("resize.overlay"), this.overlay = null, !1 !== this.margin && (n("body").css("margin-right", this.margin), this.margin = !1), this.el && this.el.removeClass("fancybox-lock")
            },
            update: function() {
                var e = "100%",
                    n;
                this.overlay.width(e).height("100%"), u ? (n = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), s.width() > n && (e = s.width())) : s.width() > i.width() && (e = s.width()), this.overlay.width(e).height(s.height())
            },
            onReady: function(e, r) {
                n(".fancybox-overlay").stop(!0, !0), this.overlay || (this.margin = s.height() > i.height() || "scroll" === n("body").css("overflow-y") ? n("body").css("margin-right") : !1, this.el = t.all && !t.querySelector ? n("html") : n("body"), this.create(e)), e.locked && this.fixed && (r.locked = this.overlay.append(r.wrap), r.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(e, t) {
                t.locked && (this.el.addClass("fancybox-lock"), !1 !== this.margin && n("body").css("margin-right", p(this.margin) + t.scrollbarWidth)), this.open(e)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(e) {
                this.overlay && !o.isActive && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
            }
        }, o.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(e) {
                var t = o.current,
                    r = t.title,
                    i = e.type;
                n.isFunction(r) && (r = r.call(t.element, t));
                if (c(r) && "" !== n.trim(r)) {
                    t = n('<div class="fancybox-title fancybox-title-' + i + '-wrap">' + r + "</div>");
                    switch (i) {
                        case "inside":
                            i = o.skin;
                            break;
                        case "outside":
                            i = o.wrap;
                            break;
                        case "over":
                            i = o.inner;
                            break;
                        default:
                            i = o.skin, t.appendTo("body"), u && t.width(t.width()), t.wrapInner('<span class="child"></span>'), o.current.margin[2] += Math.abs(p(t.css("margin-bottom")))
                    }
                    t["top" === e.position ? "prependTo" : "appendTo"](i)
                }
            }
        }, n.fn.fancybox = function(e) {
            var t, r = n(this),
                i = this.selector || "",
                u = function(s) {
                    var u = n(this).blur(),
                        a = t,
                        f, l;
                    !s.ctrlKey && !s.altKey && !s.shiftKey && !s.metaKey && !u.is(".fancybox-wrap") && (f = e.groupAttr || "data-fancybox-group", l = u.attr(f), l || (f = "rel", l = u.get(0)[f]), l && "" !== l && "nofollow" !== l && (u = i.length ? n(i) : r, u = u.filter("[" + f + '="' + l + '"]'), a = u.index(this)), e.index = a, !1 !== o.open(u, e) && s.preventDefault())
                };
            return e = e || {}, t = e.index || 0, !i || !1 === e.live ? r.unbind("click.fb-start").bind("click.fb-start", u) : s.undelegate(i, "click.fb-start").delegate(i + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", u), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, s.ready(function() {
            n.scrollbarWidth === r && (n.scrollbarWidth = function() {
                var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    t = e.children(),
                    t = t.innerWidth() - t.height(99).innerWidth();
                return e.remove(), t
            });
            if (n.support.fixedPosition === r) {
                var e = n.support,
                    t = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    i = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
                t.remove(), e.fixedPosition = i
            }
            n.extend(o.defaults, {
                scrollbarWidth: n.scrollbarWidth(),
                fixed: n.support.fixedPosition,
                parent: n("body")
            })
        })
    }(window, document, jQuery),
    function(e) {
        var t = e.fancybox;
        t.helpers.buttons = {
            defaults: {
                skipSingle: !1,
                position: "top",
                tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>'
            },
            list: null,
            buttons: null,
            beforeLoad: function(e, t) {
                if (e.skipSingle && t.group.length < 2) {
                    t.helpers.buttons = !1, t.closeBtn = !0;
                    return
                }
                t.margin[e.position === "bottom" ? 2 : 0] += 30
            },
            onPlayStart: function() {
                this.buttons && this.buttons.play.attr("title", "Pause slideshow").addClass("btnPlayOn")
            },
            onPlayEnd: function() {
                this.buttons && this.buttons.play.attr("title", "Start slideshow").removeClass("btnPlayOn")
            },
            afterShow: function(n, r) {
                var i = this.buttons;
                i || (this.list = e(n.tpl).addClass(n.position).appendTo("body"), i = {
                    prev: this.list.find(".btnPrev").click(t.prev),
                    next: this.list.find(".btnNext").click(t.next),
                    play: this.list.find(".btnPlay").click(t.play),
                    toggle: this.list.find(".btnToggle").click(t.toggle)
                }), r.index > 0 || r.loop ? i.prev.removeClass("btnDisabled") : i.prev.addClass("btnDisabled"), r.loop || r.index < r.group.length - 1 ? (i.next.removeClass("btnDisabled"), i.play.removeClass("btnDisabled")) : (i.next.addClass("btnDisabled"), i.play.addClass("btnDisabled")), this.buttons = i, this.onUpdate(n, r)
            },
            onUpdate: function(e, t) {
                var n;
                if (!this.buttons) return;
                n = this.buttons.toggle.removeClass("btnDisabled btnToggleOn"), t.canShrink ? n.addClass("btnToggleOn") : t.canExpand || n.addClass("btnDisabled")
            },
            beforeClose: function() {
                this.list && this.list.remove(), this.list = null, this.buttons = null
            }
        }
    }(jQuery),
    function(e) {
        "use strict";
        var t = e.fancybox,
            n = function(t, n, r) {
                return r = r || "", e.type(r) === "object" && (r = e.param(r, !0)), e.each(n, function(e, n) {
                    t = t.replace("$" + e, n || "")
                }), r.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + r), t
            };
        t.helpers.media = {
            defaults: {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "opaque",
                        enablejsapi: 1
                    },
                    type: "iframe",
                    url: "//www.youtube.com/embed/$3"
                },
                vimeo: {
                    matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1
                    },
                    type: "iframe",
                    url: "//player.vimeo.com/video/$1"
                },
                metacafe: {
                    matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                    params: {
                        autoPlay: "yes"
                    },
                    type: "swf",
                    url: function(t, n, r) {
                        return r.swf.flashVars = "playerVars=" + e.param(n, !0), "//www.metacafe.com/fplayer/" + t[1] + "/.swf"
                    }
                },
                dailymotion: {
                    matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                    params: {
                        additionalInfos: 0,
                        autoStart: 1
                    },
                    type: "swf",
                    url: "//www.dailymotion.com/swf/video/$1"
                },
                twitvid: {
                    matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                    params: {
                        autoplay: 0
                    },
                    type: "iframe",
                    url: "//www.twitvid.com/embed.php?guid=$1"
                },
                twitpic: {
                    matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                    type: "image",
                    url: "//twitpic.com/show/full/$1/"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/"
                },
                google_maps: {
                    matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                    type: "iframe",
                    url: function(e) {
                        return "//maps.google." + e[1] + "/" + e[3] + "" + e[4] + "&output=" + (e[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
                    }
                }
            },
            beforeLoad: function(t, r) {
                var i = r.href || "",
                    s = !1,
                    o, u, a, f;
                for (o in t) {
                    u = t[o], a = i.match(u.matcher);
                    if (a) {
                        s = u.type, f = e.extend(!0, {}, u.params, r[o] || (e.isPlainObject(t[o]) ? t[o].params : null)), i = e.type(u.url) === "function" ? u.url.call(this, a, f, r) : n(u.url, a, f);
                        break
                    }
                }
                s && (r.href = i, r.type = s, r.autoHeight = !1)
            }
        }
    }(jQuery),
    function(e) {
        var t = e.fancybox;
        t.helpers.thumbs = {
            defaults: {
                width: 50,
                height: 50,
                position: "bottom",
                source: function(t) {
                    var n;
                    return t.element && (n = e(t.element).find("img").attr("src")), !n && t.type === "image" && t.href && (n = t.href), n
                }
            },
            wrap: null,
            list: null,
            width: 0,
            init: function(t, n) {
                var r = this,
                    i, s = t.width,
                    o = t.height,
                    u = t.source;
                i = "";
                for (var a = 0; a < n.group.length; a++) i += '<li><a style="width:' + s + "px;height:" + o + 'px;" href="javascript:jQuery.fancybox.jumpto(' + a + ');"></a></li>';
                this.wrap = e('<div id="fancybox-thumbs"></div>').addClass(t.position).appendTo("body"), this.list = e("<ul>" + i + "</ul>").appendTo(this.wrap), e.each(n.group, function(t) {
                    var i = u(n.group[t]);
                    if (!i) return;
                    e("<img />").load(function() {
                        var n = this.width,
                            i = this.height,
                            u, a, f;
                        if (!r.list || !n || !i) return;
                        u = n / s, a = i / o, f = r.list.children().eq(t).find("a"), u >= 1 && a >= 1 && (u > a ? (n = Math.floor(n / a), i = o) : (n = s, i = Math.floor(i / u))), e(this).css({
                            width: n,
                            height: i,
                            top: Math.floor(o / 2 - i / 2),
                            left: Math.floor(s / 2 - n / 2)
                        }), f.width(s).height(o), e(this).hide().appendTo(f).fadeIn(300)
                    }).attr("src", i)
                }), this.width = this.list.children().eq(0).outerWidth(!0), this.list.width(this.width * (n.group.length + 1)).css("left", Math.floor(e(window).width() * .5 - (n.index * this.width + this.width * .5)))
            },
            beforeLoad: function(e, t) {
                if (t.group.length < 2) {
                    t.helpers.thumbs = !1;
                    return
                }
                t.margin[e.position === "top" ? 0 : 2] += e.height + 15
            },
            afterShow: function(e, t) {
                this.list ? this.onUpdate(e, t) : this.init(e, t), this.list.children().removeClass("active").eq(t.index).addClass("active")
            },
            onUpdate: function(t, n) {
                this.list && this.list.stop(!0).animate({
                    left: Math.floor(e(window).width() * .5 - (n.index * this.width + this.width * .5))
                }, 150)
            },
            beforeClose: function() {
                this.wrap && this.wrap.remove(), this.wrap = null, this.list = null, this.width = 0
            }
        }
    }(jQuery),
    function(e) {
        "use strict";
        typeof define == "function" && define.amd ? define(["jquery"], e) : e($)
    }(function(e) {
        "use strict";
        var t = 0,
            n = window.Touch ? "touchstart" : "click";
        return e.fn.clickout = function(e, t) {
            t || (t = e, e = null);
            if (!(arguments.length > 0)) return this.trigger("clickout");
            this.on("clickout", e, t)
        }, jQuery.event.special.clickout = {
            add: function(r) {
                t++;
                var i = r.selector ? e(this).find(r.selector) : e(this);
                i.attr("data-clickout", t), e(this).on(n + ".clickout" + t, r.selector, function(t) {
                    t.originalEvent.clickin = e(this).attr("data-clickout")
                }), e(document).bind(n + ".clickout" + t, function(e) {
                    return function(t) {
                        (!t.originalEvent.clickin || t.originalEvent.clickin !== e) && r.handler.apply(this, arguments)
                    }
                }(t))
            },
            remove: function(t) {
                var r = t.selector ? e(this).find(t.selector) : e(this),
                    i = r.attr("data-clickout");
                return r.removeAttr("data-clickout"), e(document).unbind(n + ".clickout" + i), e(this).off(n + ".clickout" + i, t.selector), !1
            }
        }, e
    }),
    function() {
        (function(e, t, n) {
            var r, i, s;
            return s = "slidesjs", i = {
                width: 940,
                height: 528,
                start: 1,
                navigation: {
                    active: !0,
                    effect: "slide"
                },
                pagination: {
                    active: !0,
                    effect: "slide"
                },
                play: {
                    active: !1,
                    effect: "slide",
                    interval: 5e3,
                    auto: !1,
                    swap: !0
                },
                effect: {
                    slide: {
                        speed: 500
                    },
                    fade: {
                        speed: 300,
                        crossfade: !0
                    }
                },
                callback: {
                    loaded: function() {},
                    start: function() {},
                    complete: function() {}
                },
                productslide: !1,
                main_product_slide: !1
            }, r = function() {
                function t(t, n) {
                    this.element = t, this.options = e.extend(!0, {}, i, n), this._defaults = i, this._name = s, this.init()
                }
                return t
            }(), r.prototype.init = function() {
                var n, r, i, s, o, u, a = this;
                return a.options.productslide && (t.productslide = this), a.options.historyslide && (t.historyslide = this), a.options.main_product_slide && (t.main_product_slide = this), n = e(this.element), this.data = e.data(this), e.data(this, "animating", !1), e.data(this, "total", n.children().not(".slidesjs-navigation", n).length), e.data(this, "current", this.options.start - 1), e.data(this, "vendorPrefix", this._getVendorPrefix()), typeof TouchEvent != "undefined" && (e.data(this, "touch", !0), this.options.effect.slide.speed = this.options.effect.slide.speed / 2), n.css({
                    overflow: "hidden"
                }), n.slidesContainer = n.children().not(".slidesjs-navigation", n).wrapAll("<div class='slidesjs-container'>", n).parent().css({
                    overflow: "hidden",
                    position: "relative"
                }), e(".slidesjs-container", n).wrapInner("<div class='slidesjs-control'>", n).children(), e(".slidesjs-control", n).css({
                    position: "relative",
                    left: 0
                }), e(".slidesjs-control", n).children().addClass("slidesjs-slide").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 0,
                    display: "none",
                    webkitBackfaceVisibility: "hidden"
                }), e.each(e(".slidesjs-control", n).children(), function(t) {
                    var n;
                    return n = e(this), n.attr("slidesjs-index", t)
                }), this.data.touch && (e(".slidesjs-control", n).on("touchstart", function(e) {
                    return a._touchstart(e)
                }), e(".slidesjs-control", n).on("touchmove", function(e) {
                    return a._touchmove(e)
                }), e(".slidesjs-control", n).on("touchend", function(e) {
                    return a._touchend(e)
                })), n.fadeIn(0), this.update(), this.data.touch && this._setuptouch(), e(".slidesjs-control", n).children(":eq(" + this.data.current + ")").eq(0).fadeIn(0, function() {
                    return e(this).css({
                        zIndex: 10
                    })
                }), this.options.navigation.active && (o = e("<a>", {
                    "class": "slidesjs-previous slidesjs-navigation",
                    href: "#",
                    title: "Previous",
                    text: "Previous"
                }).appendTo(n), r = e("<a>", {
                    "class": "slidesjs-next slidesjs-navigation",
                    href: "#",
                    title: "Next",
                    text: "Next"
                }).appendTo(n)), e(".slidesjs-next", n).click(function(e) {
                    return e.preventDefault(), a.stop(), a.next(a.options.navigation.effect)
                }), e(".slidesjs-previous", n).click(function(e) {
                    return e.preventDefault(), a.stop(), a.previous(a.options.navigation.effect)
                }), this.options.play.active && (s = e("<a>", {
                    "class": "slidesjs-play slidesjs-navigation",
                    href: "#",
                    title: "Play",
                    text: "Play"
                }).appendTo(n), u = e("<a>", {
                    "class": "slidesjs-stop slidesjs-navigation",
                    href: "#",
                    title: "Stop",
                    text: "Stop"
                }).appendTo(n), s.click(function(e) {
                    return e.preventDefault(), a.play(!0)
                }), u.click(function(e) {
                    return e.preventDefault(), a.stop()
                }), this.options.play.swap && u.css({
                    display: "none"
                })), this.options.pagination.active && (i = e("<ul>", {
                    "class": "slidesjs-pagination"
                }).appendTo(n), e.each(new Array(this.data.total), function(t) {
                    var n, r;
                    return n = e("<li>", {
                        "class": "slidesjs-pagination-item"
                    }).appendTo(i), r = e("<a>", {
                        href: "#",
                        "data-slidesjs-item": t,
                        html: t + 1
                    }).appendTo(n), r.click(function(t) {
                        return t.preventDefault(), a.stop(), a.goto(e(t.currentTarget).attr("data-slidesjs-item") * 1 + 1)
                    })
                })), e(t).bind("resize", function() {
                    return a.update()
                }), this._setActive(), this.options.play.auto && this.play(), this.options.callback.loaded(this.options.start)
            }, r.prototype._setActive = function(t) {
                var n, r;
                return n = e(this.element), this.data = e.data(this), r = t > -1 ? t : this.data.current, e(".active", n).removeClass("active"), e("li:eq(" + r + ") a", n).addClass("active")
            }, r.prototype.update = function() {
                var t, n, r;
                return t = e(this.element), this.data = e.data(this), e(".slidesjs-control", t).children(":not(:eq(" + this.data.current + "))").css({
                    display: "none",
                    left: 0,
                    zIndex: 0
                }), r = t.width(), n = this.options.height / this.options.width * r, this.options.width = r, this.options.height = n, e(".slidesjs-control, .slidesjs-container", t).css({
                    width: r,
                    height: n
                })
            }, r.prototype.next = function(t) {
                var n;
                return n = e(this.element), this.data = e.data(this), e.data(this, "direction", "next"), t === void 0 && (t = this.options.navigation.effect), t === "fade" ? this._fade() : this._slide()
            }, r.prototype.previous = function(t) {
                var n;
                return n = e(this.element), this.data = e.data(this), e.data(this, "direction", "previous"), t === void 0 && (t = this.options.navigation.effect), t === "fade" ? this._fade() : this._slide()
            }, r.prototype.goto = function(t) {
                var n, r;
                n = e(this.element), this.data = e.data(this), r === void 0 && (r = this.options.pagination.effect), t > this.data.total ? t = this.data.total : t < 1 && (t = 1);
                if (typeof t == "number") return r === "fade" ? this._fade(t) : this._slide(t);
                if (typeof t == "string") {
                    if (t === "first") return r === "fade" ? this._fade(0) : this._slide(0);
                    if (t === "last") return r === "fade" ? this._fade(this.data.total) : this._slide(this.data.total)
                }
            }, r.prototype._setuptouch = function() {
                var t, n, r, i;
                return t = e(this.element), this.data = e.data(this), i = e(".slidesjs-control", t), n = this.data.current + 1, r = this.data.current - 1, r < 0 && (r = this.data.total - 1), n > this.data.total - 1 && (n = 0), i.children(":eq(" + n + ")").css({
                    display: "block",
                    left: this.options.width
                }), i.children(":eq(" + r + ")").css({
                    display: "block",
                    left: -this.options.width
                })
            }, r.prototype._touchstart = function(t) {
                var n, r;
                return n = e(this.element), this.data = e.data(this), r = t.originalEvent.touches[0], this._setuptouch(), e.data(this, "touchtimer", Number(new Date)), e.data(this, "touchstartx", r.pageX), e.data(this, "touchstarty", r.pageY), t.stopPropagation()
            }, r.prototype._touchend = function(t) {
                var n, r, i, s, o, u, a, f = this;
                return n = e(this.element), this.data = e.data(this), u = t.originalEvent.touches[0], s = e(".slidesjs-control", n), s.position().left > this.options.width * .5 || s.position().left > this.options.width * .1 && Number(new Date) - this.data.touchtimer < 250 ? (e.data(this, "direction", "previous"), this._slide()) : s.position().left < -(this.options.width * .5) || s.position().left < -(this.options.width * .1) && Number(new Date) - this.data.touchtimer < 250 ? (e.data(this, "direction", "next"), this._slide()) : (i = this.data.vendorPrefix, a = i + "Transform", r = i + "TransitionDuration", o = i + "TransitionTimingFunction", s[0].style[a] = "translateX(0px)", s[0].style[r] = this.options.effect.slide.speed * .85 + "ms"), s.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                    return i = f.data.vendorPrefix, a = i + "Transform", r = i + "TransitionDuration", o = i + "TransitionTimingFunction", s[0].style[a] = "", s[0].style[r] = "", s[0].style[o] = ""
                }), t.stopPropagation()
            }, r.prototype._touchmove = function(t) {
                var n, r, i, s, o;
                return n = e(this.element), this.data = e.data(this), s = t.originalEvent.touches[0], r = this.data.vendorPrefix, i = e(".slidesjs-control", n), o = r + "Transform", e.data(this, "scrolling", Math.abs(s.pageX - this.data.touchstartx) < Math.abs(s.pageY - this.data.touchstarty)), !this.data.animating && !this.data.scrolling && (t.preventDefault(), this._setuptouch(), i[0].style[o] = "translateX(" + (s.pageX - this.data.touchstartx) + "px)"), t.stopPropagation()
            }, r.prototype.play = function(t) {
                var n, r, i = this;
                n = e(this.element), this.data = e.data(this);
                if (!this.data.playInterval) {
                    t && (r = this.data.current, this.data.direction = "next", this.options.play.effect === "fade" ? this._fade() : this._slide()), e.data(this, "playInterval", setInterval(function() {
                        return r = i.data.current, i.data.direction = "next", i.options.play.effect === "fade" ? i._fade() : i._slide()
                    }, this.options.play.interval)), e.data(this, "playing", !0), e(".slidesjs-play", n).addClass("slidesjs-playing");
                    if (this.options.play.swap) return e(".slidesjs-play", n).hide(), e(".slidesjs-stop", n).show()
                }
            }, r.prototype.stop = function() {
                var t;
                t = e(this.element), this.data = e.data(this), clearInterval(this.data.playInterval), e.data(this, "playInterval", null), e.data(this, "playing", !1), e(".slidesjs-play", t).removeClass("slidesjs-playing");
                if (this.options.play.swap) return e(".slidesjs-stop", t).hide(), e(".slidesjs-play", t).show()
            }, r.prototype._slide = function(t) {
                var n, r, i, s, o, u, a, f, l, c, h = this;
                n = e(this.element), this.data = e.data(this);
                if (!this.data.animating && t !== this.data.current + 1) return e.data(this, "animating", !0), r = this.data.current, t > -1 ? (t -= 1, c = t > r ? 1 : -1, i = t > r ? -this.options.width : this.options.width, o = t) : (c = this.data.direction === "next" ? 1 : -1, i = this.data.direction === "next" ? -this.options.width : this.options.width, o = r + c), o === -1 && (o = this.data.total - 1), o === this.data.total && (o = 0), this._setActive(o), a = e(".slidesjs-control", n), t > -1 && a.children(":not(:eq(" + r + "))").css({
                    display: "none",
                    left: 0,
                    zIndex: 0
                }), a.children(":eq(" + o + ")").css({
                    display: "block",
                    left: c * this.options.width,
                    zIndex: 10
                }), this.options.callback.start(r + 1), this.data.vendorPrefix ? (u = this.data.vendorPrefix, l = u + "Transform", s = u + "TransitionDuration", f = u + "TransitionTimingFunction", a[0].style[l] = "translateX(" + i + "px)", a[0].style[s] = this.options.effect.slide.speed + "ms", a.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                    return a[0].style[l] = "", a[0].style[s] = "", a.children(":eq(" + o + ")").css({
                        left: 0
                    }), a.children(":eq(" + r + ")").css({
                        display: "none",
                        left: 0,
                        zIndex: 0
                    }), e.data(h, "current", o), e.data(h, "animating", !1), a.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"), a.children(":not(:eq(" + o + "))").css({
                        display: "none",
                        left: 0,
                        zIndex: 0
                    }), h.data.touch && h._setuptouch(), h.options.callback.complete(o + 1)
                })) : a.stop().animate({
                    left: i
                }, this.options.effect.slide.speed, function() {
                    return a.css({
                        left: 0
                    }), a.children(":eq(" + o + ")").css({
                        left: 0
                    }), a.children(":eq(" + r + ")").css({
                        display: "none",
                        left: 0,
                        zIndex: 0
                    }, e.data(h, "current", o), e.data(h, "animating", !1), h.options.callback.complete(o + 1))
                })
            }, r.prototype._fade = function(t) {
                var n, r, i, s, o, u = this;
                n = e(this.element), this.data = e.data(this);
                if (!this.data.animating && t !== this.data.current + 1) return e.data(this, "animating", !0), r = this.data.current, t ? (t -= 1, o = t > r ? 1 : -1, i = t) : (o = this.data.direction === "next" ? 1 : -1, i = r + o), i === -1 && (i = this.data.total - 1), i === this.data.total && (i = 0), this._setActive(i), s = e(".slidesjs-control", n), s.children(":eq(" + i + ")").css({
                    display: "block",
                    left: 0,
                    zIndex: 0
                }), this.options.callback.start(r + 1), this.options.effect.fade.crossfade ? s.children(":eq(" + this.data.current + ")").stop().fadeOut(this.options.effect.fade.speed, function() {
                    return s.children(":eq(" + i + ")").css({
                        zIndex: 10
                    }), e.data(u, "animating", !1), e.data(u, "current", i), u.options.callback.complete(i + 1)
                }) : (s.children(":eq(" + i + ")").css({
                    display: "none"
                }), s.children(":eq(" + r + ")").stop().fadeOut(this.options.effect.fade.speed, function() {
                    return s.children(":eq(" + i + ")").stop().fadeIn(u.options.effect.fade.speed).css({
                        zIndex: 10
                    }), e.data(u, "animating", !1), e.data(u, "current", i), u.options.callback.complete(i + 1)
                }))
            }, r.prototype._getVendorPrefix = function() {
                var e, t, r, i, s;
                e = n.body || n.documentElement, r = e.style, i = "transition", s = ["Moz", "Webkit", "Khtml", "O", "ms"], i = i.charAt(0).toUpperCase() + i.substr(1), t = 0;
                while (t < s.length) {
                    if (typeof r[s[t] + i] == "string") return s[t];
                    t++
                }
                return !1
            }, e.fn[s] = function(t) {
                return this.each(function() {
                    if (!e.data(this, "plugin_" + s)) return e.data(this, "plugin_" + s, new r(this, t))
                })
            }
        })(jQuery, window, document)
    }.call(this), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, r, i) {
            return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
        },
        easeInQuad: function(e, t, n, r, i) {
            return r * (t /= i) * t + n
        },
        easeOutQuad: function(e, t, n, r, i) {
            return -r * (t /= i) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, r, i) {
            return r * (t /= i) * t * t + n
        },
        easeOutCubic: function(e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, r, i) {
            return r * (t /= i) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, r, i) {
            return -r * ((t = t / i - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, r, i) {
            return r * (t /= i) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, r, i) {
            return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
        },
        easeOutSine: function(e, t, n, r, i) {
            return r * Math.sin(t / i * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, r, i) {
            return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
        },
        easeInExpo: function(e, t, n, r, i) {
            return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
        },
        easeOutExpo: function(e, t, n, r, i) {
            return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
        },
        easeInOutExpo: function(e, t, n, r, i) {
            return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function(e, t, n, r, i) {
            return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, r, i) {
            var s = 1.70158,
                o = 0,
                u = r;
            if (t == 0) return n;
            if ((t /= i) == 1) return n + r;
            o || (o = i * .3);
            if (u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(r / u);
            return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
        },
        easeOutElastic: function(e, t, n, r, i) {
            var s = 1.70158,
                o = 0,
                u = r;
            if (t == 0) return n;
            if ((t /= i) == 1) return n + r;
            o || (o = i * .3);
            if (u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(r / u);
            return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
        },
        easeInOutElastic: function(e, t, n, r, i) {
            var s = 1.70158,
                o = 0,
                u = r;
            if (t == 0) return n;
            if ((t /= i / 2) == 2) return n + r;
            o || (o = i * .3 * 1.5);
            if (u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(r / u);
            return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
        },
        easeInBack: function(e, t, n, r, i, s) {
            return s == undefined && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n
        },
        easeOutBack: function(e, t, n, r, i, s) {
            return s == undefined && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
        },
        easeInOutBack: function(e, t, n, r, i, s) {
            return s == undefined && (s = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
        },
        easeInBounce: function(e, t, n, r, i) {
            return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
        },
        easeOutBounce: function(e, t, n, r, i) {
            return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, r, i) {
            return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
        }
    }),
    function() {
        function n(t, n) {
            return n = n || "", typeof t != "string" && (t.global && n.indexOf("g") < 0 && (n += "g"), t.ignoreCase && n.indexOf("i") < 0 && (n += "i"), t.multiline && n.indexOf("m") < 0 && (n += "m"), t = t.source), new RegExp(t.replace(/#\{(\w+)\}/g, function(t, n) {
                var r = e.txt.regexen[n] || "";
                return typeof r != "string" && (r = r.source), r
            }), n)
        }

        function r(e, t) {
            return e.replace(/#\{(\w+)\}/g, function(e, n) {
                return t[n] || ""
            })
        }

        function i(e, t, n) {
            var r = String.fromCharCode(t);
            return n !== t && (r += "-" + String.fromCharCode(n)), e.push(r), e
        }

        function m(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        function w(e, t, n) {
            return n ? !e || e.match(t) && RegExp["$&"] === e : typeof e == "string" && e.match(t) && RegExp["$&"] === e
        }
        if (typeof e == "undefined" || e === null) var e = {};
        e.txt = {}, e.txt.regexen = {};
        var t = {
            "&": "&amp;",
            ">": "&gt;",
            "<": "&lt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        e.txt.htmlEscape = function(e) {
            return e && e.replace(/[&"'><]/g, function(e) {
                return t[e]
            })
        }, e.txt.regexSupplant = n, e.txt.stringSupplant = r, e.txt.addCharsToCharClass = i;
        var s = String.fromCharCode,
            o = [s(32), s(133), s(160), s(5760), s(6158), s(8232), s(8233), s(8239), s(8287), s(12288)];
        i(o, 9, 13), i(o, 8192, 8202);
        var u = [s(65534), s(65279), s(65535)];
        i(u, 8234, 8238), e.txt.regexen.spaces_group = n(o.join("")), e.txt.regexen.spaces = n("[" + o.join("") + "]"), e.txt.regexen.invalid_chars_group = n(u.join("")), e.txt.regexen.punct = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/, e.txt.regexen.rtl_chars = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/mg;
        var a = [];
        i(a, 1024, 1279), i(a, 1280, 1319), i(a, 11744, 11775), i(a, 42560, 42655), i(a, 1425, 1471), i(a, 1473, 1474), i(a, 1476, 1477), i(a, 1479, 1479), i(a, 1488, 1514), i(a, 1520, 1524), i(a, 64274, 64296), i(a, 64298, 64310), i(a, 64312, 64316), i(a, 64318, 64318), i(a, 64320, 64321), i(a, 64323, 64324), i(a, 64326, 64335), i(a, 1552, 1562), i(a, 1568, 1631), i(a, 1646, 1747), i(a, 1749, 1756), i(a, 1758, 1768), i(a, 1770, 1775), i(a, 1786, 1788), i(a, 1791, 1791), i(a, 1872, 1919), i(a, 2208, 2208), i(a, 2210, 2220), i(a, 2276, 2302), i(a, 64336, 64433), i(a, 64467, 64829), i(a, 64848, 64911), i(a, 64914, 64967), i(a, 65008, 65019), i(a, 65136, 65140), i(a, 65142, 65276), i(a, 8204, 8204), i(a, 3585, 3642), i(a, 3648, 3662), i(a, 4352, 4607), i(a, 12592, 12677), i(a, 43360, 43391), i(a, 44032, 55215), i(a, 55216, 55295), i(a, 65441, 65500), i(a, 12449, 12538), i(a, 12540, 12542), i(a, 65382, 65439), i(a, 65392, 65392), i(a, 65296, 65305), i(a, 65313, 65338), i(a, 65345, 65370), i(a, 12353, 12438), i(a, 12441, 12446), i(a, 13312, 19903), i(a, 19968, 40959), i(a, 173824, 177983), i(a, 177984, 178207), i(a, 194560, 195103), i(a, 12291, 12291), i(a, 12293, 12293), i(a, 12347, 12347), e.txt.regexen.nonLatinHashtagChars = n(a.join(""));
        var f = [];
        i(f, 192, 214), i(f, 216, 246), i(f, 248, 255), i(f, 256, 591), i(f, 595, 596), i(f, 598, 599), i(f, 601, 601), i(f, 603, 603), i(f, 611, 611), i(f, 616, 616), i(f, 623, 623), i(f, 626, 626), i(f, 649, 649), i(f, 651, 651), i(f, 699, 699), i(f, 768, 879), i(f, 7680, 7935), e.txt.regexen.latinAccentChars = n(f.join("")), e.txt.regexen.hashSigns = /[#ï¼ƒ]/, e.txt.regexen.hashtagAlpha = n(/[a-z_#{latinAccentChars}#{nonLatinHashtagChars}]/i), e.txt.regexen.hashtagAlphaNumeric = n(/[a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}]/i), e.txt.regexen.endHashtagMatch = n(/^(?:#{hashSigns}|:\/\/)/), e.txt.regexen.hashtagBoundary = n(/(?:^|$|[^&a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}])/), e.txt.regexen.validHashtag = n(/(#{hashtagBoundary})(#{hashSigns})(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi), e.txt.regexen.validMentionPrecedingChars = /(?:^|[^a-zA-Z0-9_!#$%&*@ï¼ ]|RT:?)/, e.txt.regexen.atSigns = /[@ï¼ ]/, e.txt.regexen.validMentionOrList = n("(#{validMentionPrecedingChars})(#{atSigns})([a-zA-Z0-9_]{1,20})(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?", "g"), e.txt.regexen.validReply = n(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/), e.txt.regexen.endMentionMatch = n(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/), e.txt.regexen.validUrlPrecedingChars = n(/(?:[^A-Za-z0-9@ï¼ $#ï¼ƒ#{invalid_chars_group}]|^)/), e.txt.regexen.invalidUrlWithoutProtocolPrecedingChars = /[-_.\/]$/, e.txt.regexen.invalidDomainChars = r("#{punct}#{spaces_group}#{invalid_chars_group}", e.txt.regexen), e.txt.regexen.validDomainChars = n(/[^#{invalidDomainChars}]/), e.txt.regexen.validSubdomain = n(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/), e.txt.regexen.validDomainName = n(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/), e.txt.regexen.validGTLD = n(/(?:(?:aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|xxx)(?=[^0-9a-zA-Z]|$))/), e.txt.regexen.validCCTLD = n(/(?:(?:ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)(?=[^0-9a-zA-Z]|$))/), e.txt.regexen.validPunycode = n(/(?:xn--[0-9a-z]+)/), e.txt.regexen.validDomain = n(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/), e.txt.regexen.validAsciiDomain = n(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi), e.txt.regexen.invalidShortDomain = n(/^#{validDomainName}#{validCCTLD}$/), e.txt.regexen.validPortNumber = n(/[0-9]+/), e.txt.regexen.validGeneralUrlPathChars = n(/[a-z0-9!\*';:=\+,\.\$\/%#\[\]\-_~|&#{latinAccentChars}]/i), e.txt.regexen.validUrlBalancedParens = n(/\(#{validGeneralUrlPathChars}+\)/i), e.txt.regexen.validUrlPathEndingChars = n(/[\+\-a-z0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i), e.txt.regexen.validUrlPath = n("(?:(?:#{validGeneralUrlPathChars}*(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*#{validUrlPathEndingChars})|(?:@#{validGeneralUrlPathChars}+/))", "i"), e.txt.regexen.validUrlQueryChars = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i, e.txt.regexen.validUrlQueryEndingChars = /[a-z0-9_&=#\/]/i, e.txt.regexen.extractUrl = n("((#{validUrlPrecedingChars})((https?:\\/\\/)?(#{validDomain})(?::(#{validPortNumber}))?(\\/#{validUrlPath}*)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))", "gi"), e.txt.regexen.validTcoUrl = /^https?:\/\/t\.co\/[a-z0-9]+/i, e.txt.regexen.cashtag = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i, e.txt.regexen.validCashtag = n("(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])", "gi"), e.txt.regexen.validateUrlUnreserved = /[a-z0-9\-._~]/i, e.txt.regexen.validateUrlPctEncoded = /(?:%[0-9a-f]{2})/i, e.txt.regexen.validateUrlSubDelims = /[!$&'()*+,;=]/i, e.txt.regexen.validateUrlPchar = n("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])", "i"), e.txt.regexen.validateUrlScheme = /(?:[a-z][a-z0-9+\-.]*)/i, e.txt.regexen.validateUrlUserinfo = n("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*", "i"), e.txt.regexen.validateUrlDecOctet = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i, e.txt.regexen.validateUrlIpv4 = n(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i), e.txt.regexen.validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i, e.txt.regexen.validateUrlIp = n("(?:#{validateUrlIpv4}|#{validateUrlIpv6})", "i"), e.txt.regexen.validateUrlSubDomainSegment = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i, e.txt.regexen.validateUrlDomainSegment = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i, e.txt.regexen.validateUrlDomainTld = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i, e.txt.regexen.validateUrlDomain = n(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i), e.txt.regexen.validateUrlHost = n("(?:#{validateUrlIp}|#{validateUrlDomain})", "i"), e.txt.regexen.validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, e.txt.regexen.validateUrlUnicodeDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, e.txt.regexen.validateUrlUnicodeDomainTld = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, e.txt.regexen.validateUrlUnicodeDomain = n(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i), e.txt.regexen.validateUrlUnicodeHost = n("(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})", "i"), e.txt.regexen.validateUrlPort = /[0-9]{1,5}/, e.txt.regexen.validateUrlUnicodeAuthority = n("(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?", "i"), e.txt.regexen.validateUrlAuthority = n("(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?", "i"), e.txt.regexen.validateUrlPath = n(/(\/#{validateUrlPchar}*)*/i), e.txt.regexen.validateUrlQuery = n(/(#{validateUrlPchar}|\/|\?)*/i), e.txt.regexen.validateUrlFragment = n(/(#{validateUrlPchar}|\/|\?)*/i), e.txt.regexen.validateUrlUnencoded = n("^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$", "i");
        var l = "tweet-url list-slug",
            c = "tweet-url username",
            h = "tweet-url hashtag",
            p = "tweet-url cashtag",
            d = {
                urlClass: !0,
                listClass: !0,
                usernameClass: !0,
                hashtagClass: !0,
                cashtagClass: !0,
                usernameUrlBase: !0,
                listUrlBase: !0,
                hashtagUrlBase: !0,
                cashtagUrlBase: !0,
                usernameUrlBlock: !0,
                listUrlBlock: !0,
                hashtagUrlBlock: !0,
                linkUrlBlock: !0,
                usernameIncludeSymbol: !0,
                suppressLists: !0,
                suppressNoFollow: !0,
                targetBlank: !0,
                suppressDataScreenName: !0,
                urlEntities: !0,
                symbolTag: !0,
                textWithSymbolTag: !0,
                urlTarget: !0,
                invisibleTagAttrs: !0,
                linkAttributeBlock: !0,
                linkTextBlock: !0,
                htmlEscapeNonEntities: !0
            },
            v = {
                disabled: !0,
                readonly: !0,
                multiple: !0,
                checked: !0
            };
        e.txt.tagAttrs = function(t) {
            var n = "";
            for (var r in t) {
                var i = t[r];
                v[r] && (i = i ? r : null);
                if (i == null) continue;
                n += " " + e.txt.htmlEscape(r) + '="' + e.txt.htmlEscape(i.toString()) + '"'
            }
            return n
        }, e.txt.linkToText = function(t, n, i, s) {
            s.suppressNoFollow || (i.rel = "nofollow"), s.linkAttributeBlock && s.linkAttributeBlock(t, i), s.linkTextBlock && (n = s.linkTextBlock(t, n));
            var o = {
                text: n,
                attr: e.txt.tagAttrs(i)
            };
            return r("<a#{attr} target='_blank'>#{text}</a>", o)
        }, e.txt.linkToTextWithSymbol = function(t, n, r, i, s) {
            var o = s.symbolTag ? "<" + s.symbolTag + ">" + n + "</" + s.symbolTag + ">" : n;
            r = e.txt.htmlEscape(r);
            var u = s.textWithSymbolTag ? "<" + s.textWithSymbolTag + ">" + r + "</" + s.textWithSymbolTag + ">" : r;
            return s.usernameIncludeSymbol || !n.match(e.txt.regexen.atSigns) ? e.txt.linkToText(t, o + u, i, s) : o + e.txt.linkToText(t, u, i, s)
        }, e.txt.linkToHashtag = function(t, n, r) {
            var i = n.substring(t.indices[0], t.indices[0] + 1),
                s = e.txt.htmlEscape(t.hashtag),
                o = m(r.htmlAttrs || {});
            return o.href = r.hashtagUrlBase + s, o.title = "#" + s, o["class"] = r.hashtagClass, s[0].match(e.txt.regexen.rtl_chars) && (o["class"] += " rtl"), r.targetBlank && (o.target = "_blank"), e.txt.linkToTextWithSymbol(t, i, s, o, r)
        }, e.txt.linkToCashtag = function(t, n, r) {
            var i = e.txt.htmlEscape(t.cashtag),
                s = m(r.htmlAttrs || {});
            return s.href = r.cashtagUrlBase + i, s.title = "$" + i, s["class"] = r.cashtagClass, r.targetBlank && (s.target = "_blank"), e.txt.linkToTextWithSymbol(t, "$", i, s, r)
        }, e.txt.linkToMentionAndList = function(t, n, r) {
            var i = n.substring(t.indices[0], t.indices[0] + 1),
                s = e.txt.htmlEscape(t.screenName),
                o = e.txt.htmlEscape(t.listSlug),
                u = t.listSlug && !r.suppressLists,
                a = m(r.htmlAttrs || {});
            return a["class"] = u ? r.listClass : r.usernameClass, a.href = u ? r.listUrlBase + s + o : r.usernameUrlBase + s, !u && !r.suppressDataScreenName && (a["data-screen-name"] = s), r.targetBlank && (a.target = "_blank"), e.txt.linkToTextWithSymbol(t, i, u ? s + o : s, a, r)
        }, e.txt.linkToUrl = function(t, n, r) {
            var i = t.url,
                s = i,
                o = e.txt.htmlEscape(s),
                u = r.urlEntities && r.urlEntities[i] || t;
            u.display_url && (o = e.txt.linkTextWithEntity(u, r));
            var a = m(r.htmlAttrs || {});
            return a.href = i, r.targetBlank && (a.target = "_blank"), r.urlClass && (a["class"] = r.urlClass), r.urlTarget && (a.target = r.urlTarget), !r.title && u.display_url && (a.title = u.expanded_url), e.txt.linkToText(t, o, a, r)
        }, e.txt.linkTextWithEntity = function(t, n) {
            var i = t.display_url,
                s = t.expanded_url,
                o = i.replace(/â€¦/g, "");
            if (s.indexOf(o) != -1) {
                var u = s.indexOf(o),
                    a = {
                        displayUrlSansEllipses: o,
                        beforeDisplayUrl: s.substr(0, u),
                        afterDisplayUrl: s.substr(u + o.length),
                        precedingEllipsis: i.match(/^â€¦/) ? "â€¦" : "",
                        followingEllipsis: i.match(/â€¦$/) ? "â€¦" : ""
                    };
                for (var f in a) a.hasOwnProperty(f) && (a[f] = e.txt.htmlEscape(a[f]));
                return a.invisible = n.invisibleTagAttrs, r("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>", a)
            }
            return i
        }, e.txt.autoLinkEntities = function(t, n, r) {
            r = m(r || {}), r.hashtagClass = r.hashtagClass || h, r.hashtagUrlBase = r.hashtagUrlBase || "https://twitter.com/#!/search?q=%23", r.cashtagClass = r.cashtagClass || p, r.cashtagUrlBase = r.cashtagUrlBase || "https://twitter.com/#!/search?q=%24", r.listClass = r.listClass || l, r.usernameClass = r.usernameClass || c, r.usernameUrlBase = r.usernameUrlBase || "https://twitter.com/", r.listUrlBase = r.listUrlBase || "https://twitter.com/", r.htmlAttrs = e.txt.extractHtmlAttrsFromOptions(r), r.invisibleTagAttrs = r.invisibleTagAttrs || "style='position:absolute;left:-9999px;'";
            var i, s, o;
            if (r.urlEntities) {
                i = {};
                for (s = 0, o = r.urlEntities.length; s < o; s++) i[r.urlEntities[s].url] = r.urlEntities[s];
                r.urlEntities = i
            }
            var u = "",
                a = 0;
            n.sort(function(e, t) {
                return e.indices[0] - t.indices[0]
            });
            var f = r.htmlEscapeNonEntities ? e.txt.htmlEscape : function(e) {
                return e
            };
            for (var s = 0; s < n.length; s++) {
                var d = n[s];
                u += f(t.substring(a, d.indices[0])), d.url ? u += e.txt.linkToUrl(d, t, r) : d.hashtag ? u += e.txt.linkToHashtag(d, t, r) : d.screenName ? u += e.txt.linkToMentionAndList(d, t, r) : d.cashtag && (u += e.txt.linkToCashtag(d, t, r)), a = d.indices[1]
            }
            return u += f(t.substring(a, t.length)), u
        }, e.txt.autoLinkWithJSON = function(t, n, r) {
            var i = [];
            for (var s in n) i = i.concat(n[s]);
            for (var o = 0; o < i.length; o++) entity = i[o], entity.screen_name ? entity.screenName = entity.screen_name : entity.text && (entity.hashtag = entity.text);
            return e.txt.modifyIndicesFromUnicodeToUTF16(t, i), e.txt.autoLinkEntities(t, i, r)
        }, e.txt.extractHtmlAttrsFromOptions = function(e) {
            var t = {};
            for (var n in e) {
                var r = e[n];
                if (d[n]) continue;
                v[n] && (r = r ? n : null);
                if (r == null) continue;
                t[n] = r
            }
            return t
        }, e.txt.autoLink = function(t, n) {
            var r = e.txt.extractEntitiesWithIndices(t, {
                extractUrlsWithoutProtocol: !1
            });
            return e.txt.autoLinkEntities(t, r, n)
        }, e.txt.autoLinkUsernamesOrLists = function(t, n) {
            var r = e.txt.extractMentionsOrListsWithIndices(t);
            return e.txt.autoLinkEntities(t, r, n)
        }, e.txt.autoLinkHashtags = function(t, n) {
            var r = e.txt.extractHashtagsWithIndices(t);
            return e.txt.autoLinkEntities(t, r, n)
        }, e.txt.autoLinkCashtags = function(t, n) {
            var r = e.txt.extractCashtagsWithIndices(t);
            return e.txt.autoLinkEntities(t, r, n)
        }, e.txt.autoLinkUrlsCustom = function(t, n) {
            var r = e.txt.extractUrlsWithIndices(t, {
                extractUrlsWithoutProtocol: !1
            });
            return e.txt.autoLinkEntities(t, r, n)
        }, e.txt.removeOverlappingEntities = function(e) {
            e.sort(function(e, t) {
                return e.indices[0] - t.indices[0]
            });
            var t = e[0];
            for (var n = 1; n < e.length; n++) t.indices[1] > e[n].indices[0] ? (e.splice(n, 1), n--) : t = e[n]
        }, e.txt.extractEntitiesWithIndices = function(t, n) {
            var r = e.txt.extractUrlsWithIndices(t, n).concat(e.txt.extractMentionsOrListsWithIndices(t)).concat(e.txt.extractHashtagsWithIndices(t, {
                checkUrlOverlap: !1
            })).concat(e.txt.extractCashtagsWithIndices(t));
            return r.length == 0 ? [] : (e.txt.removeOverlappingEntities(r), r)
        }, e.txt.extractMentions = function(t) {
            var n = [],
                r = e.txt.extractMentionsWithIndices(t);
            for (var i = 0; i < r.length; i++) {
                var s = r[i].screenName;
                n.push(s)
            }
            return n
        }, e.txt.extractMentionsWithIndices = function(t) {
            var n = [],
                r, i = e.txt.extractMentionsOrListsWithIndices(t);
            for (var s = 0; s < i.length; s++) r = i[s], r.listSlug == "" && n.push({
                screenName: r.screenName,
                indices: r.indices
            });
            return n
        }, e.txt.extractMentionsOrListsWithIndices = function(t) {
            if (!t || !t.match(e.txt.regexen.atSigns)) return [];
            var n = [],
                r;
            return t.replace(e.txt.regexen.validMentionOrList, function(t, r, i, s, o, u, a) {
                var f = a.slice(u + t.length);
                if (!f.match(e.txt.regexen.endMentionMatch)) {
                    o = o || "";
                    var l = u + r.length,
                        c = l + s.length + o.length + 1;
                    n.push({
                        screenName: s,
                        listSlug: o,
                        indices: [l, c]
                    })
                }
            }), n
        }, e.txt.extractReplies = function(t) {
            if (!t) return null;
            var n = t.match(e.txt.regexen.validReply);
            return !n || RegExp.rightContext.match(e.txt.regexen.endMentionMatch) ? null : n[1]
        }, e.txt.extractUrls = function(t, n) {
            var r = [],
                i = e.txt.extractUrlsWithIndices(t, n);
            for (var s = 0; s < i.length; s++) r.push(i[s].url);
            return r
        }, e.txt.extractUrlsWithIndices = function(t, n) {
            n || (n = {
                extractUrlsWithoutProtocol: !0
            });
            if (!t || (n.extractUrlsWithoutProtocol ? !t.match(/\./) : !t.match(/:/))) return [];
            var r = [];
            while (e.txt.regexen.extractUrl.exec(t)) {
                var i = RegExp.$2,
                    s = RegExp.$3,
                    o = RegExp.$4,
                    u = RegExp.$5,
                    a = RegExp.$7,
                    f = e.txt.regexen.extractUrl.lastIndex,
                    l = f - s.length;
                if (!o) {
                    if (!n.extractUrlsWithoutProtocol || i.match(e.txt.regexen.invalidUrlWithoutProtocolPrecedingChars)) continue;
                    var c = null,
                        h = !1,
                        p = 0;
                    u.replace(e.txt.regexen.validAsciiDomain, function(t) {
                        var n = u.indexOf(t, p);
                        p = n + t.length, c = {
                            url: t,
                            indices: [l + n, l + p]
                        }, h = t.match(e.txt.regexen.invalidShortDomain), h || r.push(c)
                    });
                    if (c == null) continue;
                    a && (h && r.push(c), c.url = s.replace(u, c.url), c.indices[1] = f)
                } else s.match(e.txt.regexen.validTcoUrl) && (s = RegExp.lastMatch, f = l + s.length), r.push({
                    url: s,
                    indices: [l, f]
                })
            }
            return r
        }, e.txt.extractHashtags = function(t) {
            var n = [],
                r = e.txt.extractHashtagsWithIndices(t);
            for (var i = 0; i < r.length; i++) n.push(r[i].hashtag);
            return n
        }, e.txt.extractHashtagsWithIndices = function(t, n) {
            n || (n = {
                checkUrlOverlap: !0
            });
            if (!t || !t.match(e.txt.regexen.hashSigns)) return [];
            var r = [];
            t.replace(e.txt.regexen.validHashtag, function(t, n, i, s, o, u) {
                var a = u.slice(o + t.length);
                if (a.match(e.txt.regexen.endHashtagMatch)) return;
                var f = o + n.length,
                    l = f + s.length + 1;
                r.push({
                    hashtag: s,
                    indices: [f, l]
                })
            });
            if (n.checkUrlOverlap) {
                var i = e.txt.extractUrlsWithIndices(t);
                if (i.length > 0) {
                    var s = r.concat(i);
                    e.txt.removeOverlappingEntities(s), r = [];
                    for (var o = 0; o < s.length; o++) s[o].hashtag && r.push(s[o])
                }
            }
            return r
        }, e.txt.extractCashtags = function(t) {
            var n = [],
                r = e.txt.extractCashtagsWithIndices(t);
            for (var i = 0; i < r.length; i++) n.push(r[i].cashtag);
            return n
        }, e.txt.extractCashtagsWithIndices = function(t) {
            if (!t || t.indexOf("$") == -1) return [];
            var n = [];
            return t.replace(e.txt.regexen.validCashtag, function(e, t, r, i, s, o) {
                var u = s + t.length,
                    a = u + i.length + 1;
                n.push({
                    cashtag: i,
                    indices: [u, a]
                })
            }), n
        }, e.txt.modifyIndicesFromUnicodeToUTF16 = function(t, n) {
            e.txt.convertUnicodeIndices(t, n, !1)
        }, e.txt.modifyIndicesFromUTF16ToUnicode = function(t, n) {
            e.txt.convertUnicodeIndices(t, n, !0)
        }, e.txt.convertUnicodeIndices = function(e, t, n) {
            if (t.length == 0) return;
            var r = 0,
                i = 0;
            t.sort(function(e, t) {
                return e.indices[0] - t.indices[0]
            });
            var s = 0,
                o = t[0];
            while (r < e.length) {
                if (o.indices[0] == (n ? r : i)) {
                    var u = o.indices[1] - o.indices[0];
                    o.indices[0] = n ? i : r, o.indices[1] = o.indices[0] + u, s++;
                    if (s == t.length) break;
                    o = t[s]
                }
                var a = e.charCodeAt(r);
                55296 <= a && a <= 56319 && r < e.length - 1 && (a = e.charCodeAt(r + 1), 56320 <= a && a <= 57343 && r++), i++, r++
            }
        }, e.txt.splitTags = function(e) {
            var t = e.split("<"),
                n, r = [],
                i;
            for (var s = 0; s < t.length; s += 1) {
                i = t[s];
                if (!i) r.push("");
                else {
                    n = i.split(">");
                    for (var o = 0; o < n.length; o += 1) r.push(n[o])
                }
            }
            return r
        }, e.txt.hitHighlight = function(t, n, r) {
            var i = "em";
            n = n || [], r = r || {};
            if (n.length === 0) return t;
            var s = r.tag || i,
                o = ["<" + s + ">", "</" + s + ">"],
                u = e.txt.splitTags(t),
                a, f, l = "",
                c = 0,
                h = u[0],
                p = 0,
                d = 0,
                v = !1,
                m = h,
                g = [],
                y, b, w, E, S;
            for (a = 0; a < n.length; a += 1)
                for (f = 0; f < n[a].length; f += 1) g.push(n[a][f]);
            for (y = 0; y < g.length; y += 1) {
                b = g[y], w = o[y % 2], E = !1;
                while (h != null && b >= p + h.length) l += m.slice(d), v && b === p + m.length && (l += w, E = !0), u[c + 1] && (l += "<" + u[c + 1] + ">"), p += m.length, d = 0, c += 2, h = u[c], m = h, v = !1;
                !E && h != null ? (S = b - p, l += m.slice(d, S) + w, d = S, y % 2 === 0 ? v = !0 : v = !1) : E || (E = !0, l += w)
            }
            if (h != null) {
                d < m.length && (l += m.slice(d));
                for (y = c + 1; y < u.length; y += 1) l += y % 2 === 0 ? u[y] : "<" + u[y] + ">"
            }
            return l
        };
        var g = 140,
            y = [s(65534), s(65279), s(65535), s(8234), s(8235), s(8236), s(8237), s(8238)];
        e.txt.getTweetLength = function(t, n) {
            n || (n = {
                short_url_length: 20,
                short_url_length_https: 21
            });
            var r = t.length,
                i = e.txt.extractUrlsWithIndices(t);
            for (var s = 0; s < i.length; s++) r += i[s].indices[0] - i[s].indices[1], i[s].url.toLowerCase().match(/^https:\/\//) ? r += n.short_url_length_https : r += n.short_url_length;
            return r
        }, e.txt.isInvalidTweet = function(t) {
            if (!t) return "empty";
            if (e.txt.getTweetLength(t) > g) return "too_long";
            for (var n = 0; n < y.length; n++)
                if (t.indexOf(y[n]) >= 0) return "invalid_characters";
            return !1
        }, e.txt.isValidTweetText = function(t) {
            return !e.txt.isInvalidTweet(t)
        }, e.txt.isValidUsername = function(t) {
            if (!t) return !1;
            var n = e.txt.extractMentions(t);
            return n.length === 1 && n[0] === t.slice(1)
        };
        var b = n(/^#{validMentionOrList}$/);
        e.txt.isValidList = function(e) {
            var t = e.match(b);
            return !!t && t[1] == "" && !!t[4]
        }, e.txt.isValidHashtag = function(t) {
            if (!t) return !1;
            var n = e.txt.extractHashtags(t);
            return n.length === 1 && n[0] === t.slice(1)
        }, e.txt.isValidUrl = function(t, n, r) {
            n == null && (n = !0), r == null && (r = !0);
            if (!t) return !1;
            var i = t.match(e.txt.regexen.validateUrlUnencoded);
            if (!i || i[0] !== t) return !1;
            var s = i[1],
                o = i[2],
                u = i[3],
                a = i[4],
                f = i[5];
            return (!r || w(s, e.txt.regexen.validateUrlScheme) && s.match(/^https?$/i)) && w(u, e.txt.regexen.validateUrlPath) && w(a, e.txt.regexen.validateUrlQuery, !0) && w(f, e.txt.regexen.validateUrlFragment, !0) ? n && w(o, e.txt.regexen.validateUrlUnicodeAuthority) || !n && w(o, e.txt.regexen.validateUrlAuthority) : !1
        }, typeof module != "undefined" && module.exports && (module.exports = e.txt), typeof window != "undefined" && (window.twttr = e)
    }(), ! function(e) {
        "use strict";

        function r() {
            e(t).each(function() {
                i(e(this)).removeClass("open")
            })
        }

        function i(t) {
            var n = t.attr("data-target"),
                r;
            n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), r = n && e(n);
            if (!r || !r.length) r = t.parent();
            return r
        }
        var t = "[data-toggle=dropdown]",
            n = function(t) {
                var n = e(t).on("click.dropdown.data-api", this.toggle);
                e("html").on("click.dropdown.data-api", function() {
                    n.parent().removeClass("open")
                })
            };
        n.prototype = {
            constructor: n,
            toggle: function(t) {
                var n = e(this),
                    s, o;
                if (n.is(".disabled, :disabled")) return;
                return s = i(n), o = s.hasClass("open"), r(), o || s.toggleClass("open"), n.focus(), !1
            },
            keydown: function(n) {
                var r, s, o, u, a, f;
                if (!/(38|40|27)/.test(n.keyCode)) return;
                r = e(this), n.preventDefault(), n.stopPropagation();
                if (r.is(".disabled, :disabled")) return;
                u = i(r), a = u.hasClass("open");
                if (!a || a && n.keyCode == 27) return n.which == 27 && u.find(t).focus(), r.click();
                s = e("[role=menu] li:not(.divider):visible a", u);
                if (!s.length) return;
                f = s.index(s.filter(":focus")), n.keyCode == 38 && f > 0 && f--, n.keyCode == 40 && f < s.length - 1 && f++, ~f || (f = 0), s.eq(f).focus()
            }
        };
        var s = e.fn.dropdown;
        e.fn.dropdown = function(t) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("dropdown");
                i || r.data("dropdown", i = new n(this)), typeof t == "string" && i[t].call(r)
            })
        }, e.fn.dropdown.Constructor = n, e.fn.dropdown.noConflict = function() {
            return e.fn.dropdown = s, this
        }, e(document).on("click.dropdown.data-api", r).on("click.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }).on("click.dropdown-menu", function(e) {
            e.stopPropagation()
        }).on("click.dropdown.data-api", t, n.prototype.toggle).on("keydown.dropdown.data-api", t + ", [role=menu]", n.prototype.keydown)
    }(window.jQuery),
    function(e) {
        function r(t) {
            var n = {},
                r = /^jQuery\d+$/;
            return e.each(t.attributes, function(e, t) {
                t.specified && !r.test(t.name) && (n[t.name] = t.value)
            }), n
        }

        function i() {
            var t = e(this);
            t.val() === t.attr("placeholder") && t.hasClass("placeholder") && (t.data("placeholder-password") ? t.hide().next().attr("id", t.removeAttr("id").data("placeholder-id")).show().focus() : t.val("").removeClass("placeholder"))
        }

        function s(t) {
            var n, s = e(this),
                o = s,
                u = this.id;
            if (s.val() === "") {
                if (s.is(":password")) {
                    if (!s.data("placeholder-textinput")) {
                        try {
                            n = s.clone().attr({
                                type: "text"
                            })
                        } catch (a) {
                            n = e("<input>").attr(e.extend(r(this), {
                                type: "text"
                            }))
                        }
                        n.removeAttr("name").data("placeholder-password", !0).data("placeholder-id", u).bind("focus.placeholder", i), s.data("placeholder-textinput", n).data("placeholder-id", u).before(n)
                    }
                    s = s.removeAttr("id").hide().prev().attr("id", u).show()
                }
                s.addClass("placeholder").val(s.attr("placeholder"))
            } else s.removeClass("placeholder")
        }
        var t = "placeholder" in document.createElement("input"),
            n = "placeholder" in document.createElement("textarea");
        t && n ? (e.fn.placeholder = function() {
            return this
        }, e.fn.placeholder.input = e.fn.placeholder.textarea = !0) : (e.fn.placeholder = function() {
            return this.filter((t ? "textarea" : ":input") + "[placeholder]").bind("focus.placeholder", i).bind("blur.placeholder", s).trigger("blur.placeholder").end()
        }, e.fn.placeholder.input = t, e.fn.placeholder.textarea = n), e(function() {
            e("form").bind("submit.placeholder", function() {
                var t = e(".placeholder", this).each(i);
                setTimeout(function() {
                    t.each(s)
                }, 10)
            })
        }), e(window).bind("unload.placeholder", function() {
            e(".placeholder").val("")
        })
    }(jQuery);
var TIIA = TIIA || {};
TIIA.dispatcher = _.clone(Backbone.Events), TIIA.models = TIIA.models || {}, TIIA.views = TIIA.views || {}, TIIA.models.ArticleModalController = function() {
    function e(e) {
        this.loaded = !1, this.view = e.view, this.view_cloned = this.view.clone(), this.show_data = null, this.id = this.view.data("id"), this.modal_back = $("<div/>", {
            "class": "md_back"
        }), this.modal_window = $("<div/>", {
            id: "md_article",
            "class": "mdLFixed waiting"
        }), this.modal_article = null, this.close_btn = $("<a/>", {
            "class": "delete",
            href: "#",
            html: "ë‹«ê¸°"
        }), _.extend(this, Backbone.Events)
    }
    return e.prototype = {
        init: function() {
            var e = navigator.userAgent,
                t = {
                    iphone: e.match(/(iPhone|iPod)/),
                    blackberry: e.match(/BlackBerry/),
                    android: e.match(/Android/),
                    ipad: e.match(/iPad/)
                };
            !t.android && !t.iphone && this.view.find(".lightbox_iframe").click(_.bind(function(e) {
                e.preventDefault(), this.popup()
            }, this)), this.view.attr("data-inited", "true")
        },
        popup: function() {
            if (!this.loaded) {
                this.loaded = !0, this.modal_back = this.modal_back.appendTo($("body"));
                try {
                    this.modal_window = $("<div/>", {
                        id: "md_article",
                        "class": "mdLFixed waiting"
                    }), this.modal_window = this.modal_window.appendTo($("body"))
                } catch (e) {}
                this.modal_window.width(100), this.modal_window.height(100), this.modal_window.css({
                    left: $(window).width() / 2 - this.modal_window.width() / 2 + "px",
                    top: $(window).height() / 2 - this.modal_window.height() / 2 + "px"
                }), this.close_btn = this.close_btn.appendTo(this.modal_window), $.get(this.view.find(".lightbox_iframe").attr("href"), _.bind(function(e) {
                    this.modal_window.removeClass("waiting"), this.modal_article = $($.parseHTML(e, document, !0)).filter("div.popup_article, script"), this.modal_window.append(this.modal_article), this.modal_resize()
                }, this)), $(document).keyup = null, $(document).keyup(_.bind(function(e) {
                    e.keyCode == 27 && this.close_window_handler(e)
                }, this)), this.close_btn.click(_.bind(this.close_window_handler, this)), $(window).smartresize(_.bind(this.modal_resize, this)), this.modal_back.click(_.bind(function(e) {
                    this.close_window_handler(e)
                }, this))
            }
        },
        modal_resize: function() {
            this.modal_window.imagesLoaded(_.bind(function(e) {
                this.modal_window.width(this.modal_article.find(".modal_img").width() + 255), this.modal_window.height(this.modal_article.height() - 5);
                var t = this.modal_window.width(),
                    n = this.modal_window.height();
                n > $(window).height() ? (this.modal_window.height($(window).height() - 100), this.modal_article.find(".modal_img").height(this.modal_window.height()), t = this.modal_article.find(".modal_img").width() + 255, n = this.modal_window.height(), this.modal_window.width(t), $(".popup_article .ri .wrapper .info").css({
                    top: n - $(".popup_article .ri .wrapper .info").height() - 10
                })) : n < 550, t > $(window).width() - 255 ? (this.modal_window.width($(window).width() - 100), this.modal_article.find(".modal_img").width(this.modal_window.width() - 250), this.modal_window.height(this.modal_article.height())) : t < 550, n = this.modal_window.height(), $(".popup_article .ri .wrapper .info").css({
                    top: n - $(".popup_article .ri .wrapper .info").height() - 10
                }), this.modal_window.css({
                    left: $(window).width() / 2 - this.modal_window.width() / 2 + "px",
                    top: $(window).height() / 2 - this.modal_window.height() / 2 + "px"
                }), _.delay(_.bind(function() {
                    this.modal_article.css({
                        opacity: 1
                    }), this.modal_window.css({
                        opacity: 1
                    })
                }, this), 400)
            }, this))
        },
        close_window_handler: function(e) {
            e.preventDefault(), this.modal_back.remove(), this.modal_window.remove(), this.modal_article.remove(), this.loaded = !1
        }
    }, e
}(), TIIA.models.CategorySelector = function() {
    function e(e) {
        this.view = e.view, this.main_link = this.view.find(".dropdown-toggle"), this.title_link = this.view.find("h4"), this.filterby = this.view.data("filterby"), this.$li_click_handler = _.bind(this.li_click_handler, this)
    }
    return e.prototype = {
        toggle: function(e) {
            var t, n;
            if (this.main_link.is(".disabled, :disabled")) return;
            return t = this.getParent(this.main_link), n = t.hasClass("open"), this.clearMenus(), n || t.toggleClass("open"), this.main_link.focus(), !1
        },
        clearMenus: function() {
            $("[data-toggle=dropdown]").each(_.bind(function(e, t) {
                this.getParent($(t)).removeClass("open")
            }, this))
        },
        getParent: function(e) {
            var t = e.attr("data-target"),
                n;
            t || (t = e.attr("href"), t = t && /#/.test(t) && t.replace(/.*(?=#[^\s]*$)/, "")), n = t && $(t);
            if (!n || !n.length) n = e.parent();
            return n
        },
        init: function() {
            this.view.find("ul.dropdown-menu li").on("click", this.$li_click_handler), this.title_link.click(_.bind(function(e) {
                e.preventDefault(), _.bind(this.toggle, this)()
            }, this))
        },
        li_click_handler: function(e) {
            e.preventDefault(), this.set_product_category($(e.target).find("a")), this.set_product_category($(e.target))
        },
        set_product_category: function(e) {
            if (this.filterby == "product_line") {
                var t = e.attr("data-category-name");
                console.log(t);
                if (!_.isUndefined(t) && !_.isNull(t) && !_.isEmpty(t)) {
                    var n = $("#main_product_carousel_list .slidesjs-slide img[data-product-category-css-name=" + t + "]");
                    n.length > 0 && window.main_product_slide.goto(Number(n.parent().attr("slidesjs-index")) + 1)
                }
            }
            this.main_link.html(e.text() + '&nbsp;&nbsp;<img src="/assets/product_category_arrow.png" alt="arrow"/>'), this.main_link.attr("data-category-name", e.attr("data-category-name"));
            var r = [],
                i = [];
            $(".filter_by .dropdown a.dropdown-toggle").each(function(e, t) {
                $(t).attr("data-category-name") != "none" && r.push("." + $(t).attr("data-category-name"))
            }), $(".filter_by .dropdown a.dropdown-toggle").each(function(e, t) {
                i.push("." + $(t).attr("data-category-name"))
            });
            var s = [];
            $(".concern .list_area li.active .category_change_btn").each(function(e, t) {
                s.push("." + $(t).attr("data-category-name"))
            });
            if (_.uniq(i).length == 1 && _.uniq(i)[0] == ".none") s.length > 0 ? o = s.join("") + ", .carousel, .main_product_carousel, .editorial, .filtering" : o = "*";
            else {
                var o = "";
                s.length > 0 ? r.length > 0 ? o = s.join("") + r.join("") + ", .carousel, .main_product_carousel, .editorial, .filtering" : o = s.join("") + ", .carousel, .main_product_carousel, .editorial, .filtering" : r.length > 0 ? o = r.join("") + ", .carousel, .main_product_carousel, .editorial, .filtering" : o = "*"
            }
            $(".content").isotope({
                filter: o
            })
        }
    }, e
}(), TIIA.models.EmbedModalController = function() {
    function e(e) {
        this.loaded = !1, this.view = e.view, this.view_cloned = this.view.clone(), this.show_data = null, this.id = this.view.data("id"), this.modal_back = $("<div/>", {
            "class": "md_back"
        }), this.modal_window = $("<div/>", {
            id: "md_article",
            "class": "mdLFixed waiting"
        }), this.modal_article = null, this.close_btn = $("<a/>", {
            "class": "delete",
            href: "#",
            html: "ë‹«ê¸°"
        });
        var t = navigator.userAgent;
        this.checker = {
            iphone: t.match(/(iPhone|iPod)/),
            blackberry: t.match(/BlackBerry/),
            android: t.match(/Android/),
            ipad: t.match(/iPad/)
        }, _.extend(this, Backbone.Events)
    }
    return e.prototype = {
        init: function() {
            this.view.find("a.fancybox-embed").click(_.bind(function(e) {
                e.preventDefault(), this.popup()
            }, this)), this.view.attr("data-inited", "true")
        },
        popup: function() {
            if (!this.loaded) {
                this.loaded = !0, this.modal_back = this.modal_back.appendTo($("body"));
                try {
                    this.modal_window = $("<div/>", {
                        id: "md_article",
                        "class": "mdLFixed waiting"
                    }), this.modal_window = this.modal_window.appendTo($("body"))
                } catch (e) {}
                this.modal_window.width(100), this.modal_window.height(100), this.modal_window.css({
                    left: $(window).width() / 2 - this.modal_window.width() / 2 + "px",
                    top: $(window).height() / 2 - this.modal_window.height() / 2 + "px"
                }), this.close_btn = this.close_btn.appendTo(this.modal_window), $.get(this.view.find("a.fancybox-embed").attr("href"), _.bind(function(e) {
                    this.modal_window.removeClass("waiting"), this.modal_article = $($.parseHTML(e, document, !0)), this.modal_window.append(this.modal_article), this.modal_resize()
                }, this)), $(document).keyup = null, $(document).keyup(_.bind(function(e) {
                    e.keyCode == 27 && this.close_window_handler(e)
                }, this)), this.close_btn.click(_.bind(this.close_window_handler, this)), $(window).smartresize(_.bind(this.modal_resize, this)), this.modal_back.click(_.bind(function(e) {
                    this.close_window_handler(e)
                }, this))
            }
        },
        modal_resize: function() {
            this.modal_window.imagesLoaded(_.bind(function(e) {
                if (this.checker.iphone || this.checker.android) var t = $(window).width() - 10,
                    n = ($(window).width() - 10) * 9 / 16;
                else var t = $(window).width() - 250,
                    n = ($(window).width() - 250) * 9 / 16;
                this.modal_window.find("iframe").width(t), this.modal_window.find("iframe").height(n), this.modal_window.width(t), this.modal_window.height(n), this.modal_window.css({
                    left: $(window).width() / 2 - this.modal_window.width() / 2 + "px",
                    top: $(window).height() / 2 - this.modal_window.height() / 2 + "px"
                }), _.delay(_.bind(function() {
                    this.modal_article.css({
                        opacity: 1
                    }), this.modal_window.css({
                        opacity: 1
                    })
                }, this), 400)
            }, this))
        },
        close_window_handler: function(e) {
            e.preventDefault(), this.modal_back.remove(), this.modal_window.remove(), this.modal_article.remove(), this.loaded = !1
        }
    }, e
}(), TIIA.models.ProductShowController = function() {
    function e(e) {
        this.loaded = !1, this.view = e.view, this.view_cloned = this.view.clone(), this.show_data = null, this.id = this.view.data("id"), this.modal_back = $("<div/>", {
            "class": "md_back"
        }), this.modal_window = $("<div/>", {
            id: "md_product",
            "class": "mdLFixed waiting"
        }), this.modal_product = null, this.close_btn = $("<a/>", {
            "class": "delete",
            href: "#",
            html: "ë‹«ê¸°"
        }), _.extend(this, Backbone.Events)
    }
    return e.prototype = {
        init: function() {
            this.view.find(".product_show_btn").click(_.bind(function(e) {
                e.preventDefault(), this.popup()
            }, this)), this.view.hover(_.bind(function(e) {
                this.view.find(".text").show()
            }, this), _.bind(function(e) {
                this.view.find(".text").hide()
            }, this)), this.view.click(_.bind(function(e) {
                e.preventDefault(), this.popup()
            }, this))
        },
        popup: function() {
            if (!this.loaded) {
                this.loaded = !0, this.modal_back = this.modal_back.appendTo($("body"));
                try {
                    this.modal_window = $("<div/>", {
                        id: "md_product",
                        "class": "mdLFixed waiting"
                    }), this.modal_window = this.modal_window.appendTo($("body")).hide().fadeIn()
                } catch (e) {}
                this.modal_resize(), this.close_btn = this.close_btn.appendTo(this.modal_window), $.get(this.view.find(".product_show_btn").attr("href"), _.bind(function(e) {
                    this.modal_window.removeClass("waiting"), this.modal_product = $($.parseHTML(e, document, !0)), this.modal_window.append(this.modal_product);
                    try {
                        this.modal_product.hide().fadeIn(400, _.bind(function() {
                            this.modal_resize()
                        }, this))
                    } catch (t) {}
                }, this)), $(document).keyup = null, $(document).keyup(_.bind(function(e) {
                    e.keyCode == 27 && this.close_window_handler(e)
                }, this)), this.close_btn.click(_.bind(this.close_window_handler, this)), $(window).smartresize(_.bind(this.modal_resize, this)), this.modal_back.click(_.bind(function(e) {
                    this.close_window_handler(e)
                }, this))
            }
        },
        modal_resize: function() {
            this.modal_product != null && this.modal_window.height(this.modal_product.height()), this.modal_window.css({
                left: $(window).width() / 2 - this.modal_window.width() / 2 + "px",
                top: $(window).height() / 2 - this.modal_window.height() / 2 + "px"
            })
        },
        close_window_handler: function(e) {
            e.preventDefault(), this.modal_back.remove(), this.modal_window.remove(), this.modal_product.remove(), this.loaded = !1
        }
    }, e
}(), TIIA.views.event_upload_view = function() {
    function e() {
        $("#photo_event_field").uploadifive({
            uploadScript: $(".add_picture_event_form").attr("action") + ".json",
            formData: {
                authenticity_token: $("meta[name='csrf-token']").attr("content"),
                _method: "put"
            },
            onUploadComplete: function(e, t) {
                var n = _.template("<tr><td><img src='<%= thumb_url %>'/></td><td><div style='margin-top:10px'>URL:<br><%= original_filename %></div></td><td><a rel='nofollow' data-method='delete' data-confirm='are you sure?'' href='<%= delete_url %>''>delete</a></td></tr>");
                $(".event_photo_table tbody").append($(n(JSON.parse(t).picture)))
            }
        })
    }
    return e
}(), TIIA.views.loadmore_view = function() {
    function n(n) {
        e = n, $(".load_more_btn").click(function(n) {
            n.preventDefault(), t || ($(this).html('<img src="/assets/loading.png" alt="loading"/>'), $.get("/articles_xhr/" + (e + 1), function(n) {
                var r = $($.parseHTML(n, document, !0)).filter("div.article, script");
                e += 1, $(".content").append(r), $(".content").isotope("appended", r), t = !1, $(".load_more_btn").css({
                    opacity: 1
                }), $(".article .article_facebook, .article .article_instagraam").each(function(e, t) {
                    if ($(t).attr("data-inited") != "true") {
                        var n = new TIIA.models.ArticleModalController({
                            view: $(t)
                        });
                        n.init()
                    }
                }), $(".article a.fancybox-embed").each(function(e, t) {
                    if ($(t).attr("data-inited") != "true") {
                        var n = new TIIA.models.EmbedModalController({
                            view: $(t).closest(".article")
                        });
                        n.init()
                    }
                });
                var i = 236;
                $(".carousel").slidesjs({
                    width: i * 3 + 30,
                    height: i * 2 + 15,
                    play: {
                        active: !0,
                        auto: !0,
                        interval: 5e3,
                        swap: !1,
                        pauseOnHover: !0,
                        restartDelay: 2500
                    }
                })
            }), t = !0)
        })
    }
    var e, t = !1;
    return n
}(), TIIA.views.popup_view = function() {
    function n(n) {
        function f() {
            var e = document.createElement("p");
            e.style.width = "100%", e.style.height = "200px";
            var t = document.createElement("div");
            t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
            var n = e.offsetWidth;
            t.style.overflow = "scroll";
            var r = e.offsetWidth;
            return n == r && (r = t.clientWidth), document.body.removeChild(t), n - r
        }
        e = n.popup_permalink, t = n.popup_title;
        var r = 100,
            i = $("<div/>", {
                id: "md_contents"
            });
        i.html("<span>event name : " + t + "</span>");
        var s = $("<div/>", {
                "class": "md_back"
            }).appendTo($("body")),
            o = $("<div/>", {
                id: "md_article",
                "class": "mdLFixed waiting"
            }),
            u = $("<a/>", {
                "class": "delete",
                href: "#",
                html: "close"
            }),
            a = function() {
                o.width(i.outerWidth()), o.height(i.outerHeight()), o.css({
                    "margin-left": -1 * o.width() / 2 + "px",
                    left: "50%",
                    top: "100px",
                    position: "absolute"
                });
                var e = o.width(),
                    t = o.height();
                e > $(window).width() && (o.width(Math.round($(window).width() * .9)), o.css({
                    "margin-left": -1 * o.width() / 2 + "px"
                }), $(".event").css({
                    width: o.width() + "px"
                }), i.css({
                    width: o.width() + "px",
                    height: $(".event").height() + "px"
                }), $("#event_mailinglist_form .controls").css({
                    "padding-top": "4px"
                }), $("#event_mailinglist_form .form-actions input").css({
                    "padding-top": "10px"
                }), $(".text-1, .text-2, .text-3").css({
                    "font-size": "17pt"
                }), $(".text-2").css({
                    "padding-top": "100px",
                    "padding-bottom": "27px",
                    width: "100%"
                }), $("#natalie").css({
                    height: "auto"
                }), $(".text-3").css({
                    width: "auto",
                    "margin-bottom": "224px"
                }), $("#products").css({
                    height: "auto"
                }), $("#terms p").css({
                    "font-size": "10px"
                })), i.find(".event").outerHeight() < 500 && o.css({
                    top: "50%",
                    "margin-top": -(i.find(".event").outerHeight() / 2) + "px"
                }), _.delay(function() {
                    i.css({
                        opacity: 1
                    }), o.css({
                        opacity: 1
                    })
                }, 400)
            },
            l = function(e) {
                e.preventDefault(), s.remove(), o.remove(), i.remove()
            };
        o.appendTo($("body")), o.width(100), o.height(100), o.css({
            left: $(window).width() / 2 - o.width() / 2 + "px",
            top: $(window).height() / 2 - o.height() / 2 + "px"
        }), u.appendTo(o), u.css({
            overflow: "visible",
            "z-index": "10000"
        }), $.get("/" + e, function(e) {
            o.removeClass("waiting"), i.html(e), o.append(i), i.width(i.find(".event").outerWidth()), a()
        }), $(document).keyup = null, $(document).keyup(function(e) {
            e.keyCode == 27 && l(e)
        }), u.click(l), s.click(l)
    }
    var e, t;
    return n
}(), TIIA.views.product_show_view = function() {
    function e() {
        $(".product_detail .tab a").click(function(e) {
            e.preventDefault(), $(".product_detail .tab div.list").removeClass("active"), $(".description_area .description").hide(), $("#" + $(this).attr("data-target")).show(), $(this).parent().addClass("active")
        }), $("div.size_colorselector").children().length == 2 && $("div.size_colorselector .color_area, div.size_colorselector .size_area").css({
            left: 20
        }), $(".picture_area .padding_wrapper").slidesjs({
            width: 450,
            height: 450,
            navigation: {
                active: !1
            },
            productslide: !0
        }), $(window).smartresize(function(e) {}), $(window).smartresize(function(e) {
            $(window).width() < 1e3 && $("#md_product").css({
                height: "auto"
            }), t()
        }).smartresize(), _.delay(function() {
            $(window).width() < 1e3 && $("#md_product").css({
                height: "auto"
            })
        }, 600), $(".dropdown-toggle").dropdown(), $(".color_change_btn, .size_change_btn").click(function(e) {
            e.preventDefault();
            var t = $(this).attr("data-product-picture-id");
            window.productslide.goto(Number($(".picture_area .padding_wrapper .pic[data-product-picture-id=" + t + "]").attr("slidesjs-index"))), $(this).parent().parent().parent().find(".dropdown-toggle").html($(this).text())
        }), $("#desc_list").addClass("active")
    }

    function t() {
        var e = ($(".description_area").width() - 45) / 3;
        $(".tab .list a").width(Math.ceil(e)), $("#ingre_list a").width($("#ingre_list a").width() - 1)
    }
    return e
}(), TIIA.views.products_view = function() {
    function s() {
        $(".left_loader").height($(window).height()), $(".now_link a").click(function(e) {
            e.preventDefault(), $(".left_loader").unbind("hover", "**", "**"), $(".left_loader").width($(window).width()), $(".left_loader").addClass("waiting"), $(".left_loader").css({
                left: 0
            }), _.delay(function() {
                document.location.href = $(".now_link a").attr("href")
            }, 1e3)
        })
    }

    function o(e) {
        $("input, textarea").placeholder(), s(), r = e, $(".content").isotope({
            masonry: {
                columnWidth: 236,
                columnHeight: 236,
                gutterWidth: 15
            },
            itemSelector: ".product",
            layoutMode: "masonry"
        }), $(".twitter-text").each(function(e, t) {
            $(t).html(twttr.txt.autoLink($(t).html()))
        }), $(".lightbox").fancybox({
            helpers: {
                overlay: {
                    css: {
                        background: "rgba(58, 42, 45, 0.95)"
                    }
                }
            }
        }), $(window).smartresize(function() {
            $(".content").isotope({
                masonry: {
                    columnWidth: 251,
                    columnHeight: 251,
                    gutterHeight: 15
                },
                itemSelector: ".product",
                layoutMode: "masonry"
            }), $(".content").width() < 800 ? ($(".header").width($(".content").width() - 15), $(".footer").width($(".content").width() - 5)) : ($(".header").width($(".content").width() - 15), $(".footer").width($(".content").width() - 5)), $(".header").css({
                left: "50%",
                "margin-left": -$(".header").width() / 2 - 25 + "px"
            }), $(".content_company").css({
                "margin-left": $(window).width() / 2 - $(".content_company").width() / 2 - 7
            })
        }).smartresize(), a(), $(".product").each(function(e, n) {
            if ($(n).attr("id") != "main_product_carousel_list" && !$(n).hasClass("filtering")) {
                var r = new TIIA.models.ProductShowController({
                    view: $(n)
                });
                r.init(), t[$(n).data("id")] = r
            }
        }), r != null && t[r].popup(), _.delay(function() {
            $(".content").width() < 800 ? ($(".header").width($(".content").width() - 15), $(".footer").width($(".content").width() - 5)) : ($(".header").width($(".content").width() - 15), $(".footer").width($(".content").width() - 5)), $(".header").css({
                left: "50%",
                "margin-left": -$(".header").width() / 2 - 25 + "px"
            })
        }, 400), setInterval(function() {
            var e = new Date,
                t = e.getMinutes();
            t < 10 && (t = "0" + t), $(".hour_time").html(e.getHours()), $(".minute_time").html(t + " " + (e.getHours() >= 12 ? "pm" : "am"))
        }, 1e3), setInterval(function() {
            i % 2 == 1 ? $(".blink_clock").css({
                color: "#ffffff"
            }) : $(".blink_clock").css({
                color: "#000000"
            }), i += 1
        }, 500), u()
    }

    function u() {
        $(".line_area").each(function(e, t) {
            if (e > 0) {
                var r = new TIIA.models.CategorySelector({
                    view: $(t)
                });
                r.init(), n.push(r)
            }
        }), $(".concern .list_area li").click(function(e) {
            e.preventDefault(), $(this).toggleClass("active");
            var t = [];
            $(".concern .list_area li.active .category_change_btn").each(function(e, n) {
                t.push("." + $(n).attr("data-category-name"))
            });
            var n = [],
                r = [];
            $(".filter_by .dropdown a.dropdown-toggle").each(function(e, t) {
                $(t).attr("data-category-name") != "none" && n.push("." + $(t).attr("data-category-name"))
            }), $(".filter_by .dropdown a.dropdown-toggle").each(function(e, t) {
                r.push("." + $(t).attr("data-category-name"))
            });
            var t = [];
            $(".concern .list_area li.active .category_change_btn").each(function(e, n) {
                t.push("." + $(n).attr("data-category-name"))
            });
            var i = "";
            _.uniq(r).length == 1 && _.uniq(r)[0] == ".none" ? t.length > 0 ? i = t.join("") + ", .carousel, .main_product_carousel, .editorial, .filtering" : i = "*" : t.length > 0 ? n.length > 0 ? i = t.join("") + n.join("") + ", .carousel, .main_product_carousel, .editorial, .filtering" : i = t.join("") + ", .carousel, .main_product_carousel, .editorial, .filtering" : n.length > 0 ? i = n.join("") + ", .carousel, .main_product_carousel, .editorial, .filtering" : i = "*", $(".content").isotope({
                filter: i
            })
        })
    }

    function a() {
        $("#main_product_carousel_list").slidesjs({
            width: e * 3 + 30,
            height: e * 2 + 15,
            main_product_slide: !0,
            play: {
                active: !0,
                auto: !0,
                interval: 5e3,
                swap: !1,
                pauseOnHover: !0,
                restartDelay: 2500
            }
        }), $(".carousel").each(function(t, n) {
            var r = $(n).data("auto-slide"),
                i = $(n).data("duration");
            $(n).slidesjs({
                width: e * 3 + 30,
                height: e * 2 + 15,
                play: {
                    active: !0,
                    auto: r,
                    interval: i,
                    swap: !1,
                    pauseOnHover: !0,
                    restartDelay: 2500
                }
            })
        })
    }

    function f() {
        $(".size_1x1").width(e), $(".size_1x1").height(e), $(".size_1x1 .article_tweet").width(e - 6), $(".size_1x1 .article_tweet").height(e - 6), $(".size_1x2").width(e), $(".size_1x2").height(e * 2 + 15), $(".size_1x3").width(e), $(".size_1x3").height(e * 3 + 30), $(".size_2x1").width(e * 2 + 15), $(".size_2x1").height(e), $(".size_2x2").width(e * 2 + 15), $(".size_2x2").height(e * 2 + 15), $(".size_3x2").width(e * 3 + 30), $(".size_3x2").height(e * 2 + 15), $("div.instagram_photo img, div.facebook_photo a img").css({
            width: "100%",
            height: "100%"
        }), $("div.facebook_photo").width(e), $("div.facebook_photo").height(e), $("div.facebook_text").width(e), $("div.facebook_text .fb_text_wrapper").width(e - 36)
    }
    var e = 236,
        t = [],
        n = [],
        r, i = 0;
    return o
}(), $.Isotope.prototype._getCenteredMasonryColumns = function() {
    this.width = this.element.width();
    var e = this.element.parent().width(),
        t = this.options.masonry && this.options.masonry.columnWidth || this.$filteredAtoms.outerWidth(!0) || e,
        n = Math.floor(e / t);
    n = Math.max(n, 1), this.masonry.cols = n, this.masonry.columnWidth = t
}, $.Isotope.prototype._masonryReset = function() {
    this.masonry = {}, this._getCenteredMasonryColumns();
    var e = this.masonry.cols;
    this.masonry.colYs = [];
    while (e--) this.masonry.colYs.push(0)
}, $.Isotope.prototype._masonryResizeChanged = function() {
    var e = this.masonry.cols;
    return this._getCenteredMasonryColumns(), this.masonry.cols !== e
}, $.Isotope.prototype._masonryGetContainerSize = function() {
    var e = 0,
        t = this.masonry.cols;
    while (--t) {
        if (this.masonry.colYs[t] !== 0) break;
        e++
    }
    return {
        height: Math.max.apply(Math, this.masonry.colYs),
        width: (this.masonry.cols - e) * this.masonry.columnWidth
    }
}, TIIA.views.welcome_view = function() {
    function i() {
        $(".right_loader").height($(window).height - 20), $(".left_loader").height($(window).height - 20), $(".products_link a").click(function(e) {
            e.preventDefault(), $(".products_link a").unbind("hover", "**", "**"), $(".right_loader").width($(window).width()), $(".right_loader").addClass("waiting"), _.delay(function() {
                document.location.href = $(".products_link a").attr("href")
            }, 1e3)
        })
    }

    function s() {
        $("input, textarea").placeholder(), i(), $(".content").isotope({
            masonry: {
                columnWidth: 236,
                columnHeight: 236,
                gutterWidth: 15
            },
            itemSelector: ".article",
            layoutMode: "masonry"
        }), $(".article .article_facebook, .article .article_instagraam").each(function(e, t) {
            var n = new TIIA.models.ArticleModalController({
                view: $(t)
            });
            n.init()
        }), $(window).smartresize(function() {
            $(".content").isotope({
                masonry: {
                    columnWidth: 251,
                    columnHeight: 251,
                    gutterHeight: 15
                },
                itemSelector: ".article",
                layoutMode: "masonry"
            }), $(".content").width() < 800 ? ($(".header").width($(".content").width() - 17), $(".footer").width($(".content").width() - 15), $("#load_more_area").width($(".content").width() - 15)) : ($(".header").width($(".content").width() - 15), $(".footer").width($(".content").width() - 20), $("#load_more_area").width($(".content").width() - 15)), $(".header").css({
                left: "50%",
                "margin-left": -$(".header").width() / 2 - 27 + "px"
            }), $(".content_company").css({
                "margin-left": $(window).width() / 2 - $(".content_company").width() / 2 - 7
            })
        }).smartresize(), a(), _.delay(function() {
            $(".content").width() < 800 ? ($(".header").width($(".content").width() - 17), $(".footer").width($(".content").width() - 15), $("#load_more_area").width($(".content").width() - 15)) : ($(".header").width($(".content").width() - 15), $(".footer").width($(".content").width() - 15), $("#load_more_area").width($(".content").width() - 15)), $(".header").css({
                left: "50%",
                "margin-left": -$(".header").width() / 2 - 27 + "px"
            }), $(".content_company").css({
                "margin-left": $(window).width() / 2 - $(".content_company").width() / 2 - 7
            })
        }, 400)
    }

    function u() {
        (function() {
            var t = $("#history_carousel_wrapper div.pagination ul li.active");
            $("#history_carousel").slidesjs({
                width: e * 4 + 45,
                height: e * 2 + 15,
                pagination: {
                    active: !1
                },
                historyslide: !0,
                callback: {
                    start: function(e) {},
                    complete: function(e) {
                        $("#history_carousel_wrapper div.pagination ul li").removeClass("active"), $("#history_carousel_wrapper div.pagination ul li[data-slidejs-index=" + (e - 1) + "]").addClass("active")
                    }
                }
            }), $("#history_carousel_wrapper div.pagination ul li").hover(function(e) {
                $("#history_carousel_wrapper div.pagination ul li").removeClass("active"), $(this).addClass("active")
            }, function(e) {
                $("#history_carousel_wrapper div.pagination ul li").removeClass("active"), t.addClass("active")
            }), $("#history_carousel_wrapper div.pagination ul li").click(function(e) {
                var n = $(this).find("span").attr("data-year");
                $("#history_carousel_wrapper div.pagination ul li").removeClass("active"), window.historyslide.goto(Number($("#history_carousel .slidesjs-slide[data-year=" + n + "]").attr("slidesjs-index")) + 1), t = $(this)
            }), $(".change_year_btn").click(function(e) {
                e.preventDefault()
            })
        })()
    }

    function a() {
        $(".carousel").each(function(t, n) {
            var r = $(n).data("auto-slide"),
                i = $(n).data("duration");
            $(n).slidesjs({
                width: e * 3 + 30,
                height: e * 2 + 15,
                play: {
                    active: !0,
                    auto: r,
                    interval: i,
                    swap: !1,
                    pauseOnHover: !0,
                    restartDelay: 2500
                }
            })
        })
    }

    var e = 236,
        t, n, r = 0;
    return s
}();



function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function postEmailToGoogle(){
	var el_email = $('.email_text');
    var email = el_email.val();
    if ((email !== "") && (validateEmail(email))) {
        $.ajax({
            url: 'https://docs.google.com/forms/d/1BaRieNjpZAIZLUg3jAcvBuJtB5dt4Ot8gpo5_fgT-WQ/formResponse',
            data: {"entry.128654343" : email},
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function (){
                    el_email.val("");
            		alert("Thank you, your email has been accepted. We'll get back to you shortly.")
                    //Success message
                },
                200: function (){
                    el_email.val("");                    
            		alert("Thank you, your email has been accepted. We'll get back to you shortly.")
                    //Success Message
                }
            }
        });
    }
    else {
		alert("Please enter a valid email address");
    }
}

$(document).ready(function(){
	$('.mailinglist_btn').on('click', function(e){
		e.preventDefault();
		postEmailToGoogle();
	})
});