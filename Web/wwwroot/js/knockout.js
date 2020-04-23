﻿/*!
 * Knockout JavaScript library v3.5.0-rc
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function () {
    (function (p) {
        var A = this || (0, eval)("this"), x = A.document, O = A.navigator, t = A.jQuery, G = A.JSON; t || "undefined" === typeof jQuery || (t = jQuery); (function (p) { "function" === typeof define && define.amd ? define(["exports", "require"], p) : "object" === typeof exports && "object" === typeof module ? p(module.exports || exports) : p(A.ko = {}) })(function (P, Q) {
            function J(a, c) { return null === a || typeof a in T ? a === c : !1 } function U(b, c) { var d; return function () { d || (d = a.a.setTimeout(function () { d = p; b() }, c)) } } function V(b, c) {
                var d; return function () {
                    clearTimeout(d);
                    d = a.a.setTimeout(b, c)
                }
            } function W(a, c) { c && "change" !== c ? "beforeChange" === c ? this.hc(a) : this.$a(a, c) : this.ic(a) } function X(a, c) { null !== c && c.o && c.o() } function Y(a, c) { var d = this.nd, e = d[u]; e.na || (this.Kb && this.ib[c] ? (d.nc(c, a, this.ib[c]), this.ib[c] = null, --this.Kb) : e.F[c] || d.nc(c, a, e.G ? { ga: a } : d.Wc(a)), a.Ia && a.ed()) } var a = "undefined" !== typeof P ? P : {}; a.b = function (b, c) { for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++)e = e[d[f]]; e[d[d.length - 1]] = c }; a.J = function (a, c, d) { a[c] = d }; a.version = "3.5.0-rc"; a.b("version",
                a.version); a.options = { deferUpdates: !1, useOnlyNativeEvents: !1, createChildContextWithAs: !1, foreachHidesDestroyed: !1 }; a.a = function () {
                    function b(a, b) { for (var c in a) f.call(a, c) && b(c, a[c]) } function c(a, b) { if (b) for (var c in b) f.call(b, c) && (a[c] = b[c]); return a } function d(a, b) { a.__proto__ = b; return a } function e(b, c, d, e) { var k = b[c].match(n) || []; a.a.B(d.match(n), function (b) { a.a.Ma(k, b, e) }); b[c] = k.join(" ") } var f = Object.prototype.hasOwnProperty, g = { __proto__: [] } instanceof Array, h = "function" === typeof Symbol, m =
                        {}, l = {}; m[O && /Firefox\/2/i.test(O.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"]; m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "); b(m, function (a, b) { if (b.length) for (var c = 0, d = b.length; c < d; c++)l[b[c]] = a }); var k = { propertychange: !0 }, q = x && function () { for (var a = 3, b = x.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];); return 4 < a ? a : p }(), n = /\S+/g, r; return {
                            Dc: ["authenticity_token",
                                /^__RequestVerificationToken(_.*)?$/], B: function (a, b, c) { if (a) if ("function" == typeof a.forEach) a.forEach(b, c); else for (var d = 0, e = a.length; d < e; d++)b.call(c, a[d], d, a) }, C: function (a, b) { if (a) { if ("function" == typeof a.indexOf) return a.indexOf(b); for (var c = 0, d = a.length; c < d; c++)if (a[c] === b) return c } return -1 }, pc: function (a, b, c) { if (a) { if ("function" == typeof a.find) return a.find(b, c); for (var d = 0, e = a.length; d < e; d++)if (b.call(c, a[d], d, a)) return a[d] } return p }, fb: function (b, c) {
                                    var d = a.a.C(b, c); 0 < d ? b.splice(d, 1) : 0 ===
                                        d && b.shift()
                                }, qc: function (b) { var c = []; b && a.a.B(b, function (b) { 0 > a.a.C(c, b) && c.push(b) }); return c }, Hb: function (a, b, c) { if (a && "function" == typeof a.map) return a.map(b, c); var d = []; if (a) for (var e = 0, k = a.length; e < k; e++)d.push(b.call(c, a[e], e)); return d }, cb: function (a, b, c) { if (a && "function" == typeof a.filter) return a.filter(b, c); var d = []; if (a) for (var e = 0, k = a.length; e < k; e++)b.call(c, a[e], e) && d.push(a[e]); return d }, eb: function (a, b) {
                                    if (b instanceof Array) a.push.apply(a, b); else for (var c = 0, d = b.length; c < d; c++)a.push(b[c]);
                                    return a
                                }, Ma: function (b, c, d) { var e = a.a.C(a.a.Ub(b), c); 0 > e ? d && b.push(c) : d || b.splice(e, 1) }, za: g, extend: c, setPrototypeOf: d, xb: g ? d : c, N: b, Fa: function (a, b, c) { if (!a) return a; var d = {}, e; for (e in a) f.call(a, e) && (d[e] = b.call(c, a[e], e, a)); return d }, Nb: function (b) { for (; b.firstChild;)a.removeNode(b.firstChild) }, Rb: function (b) { b = a.a.ka(b); for (var c = (b[0] && b[0].ownerDocument || x).createElement("div"), d = 0, e = b.length; d < e; d++)c.appendChild(a.ma(b[d])); return c }, Aa: function (b, c) {
                                    for (var d = 0, e = b.length, k = []; d < e; d++) {
                                        var f =
                                            b[d].cloneNode(!0); k.push(c ? a.ma(f) : f)
                                    } return k
                                }, sa: function (b, c) { a.a.Nb(b); if (c) for (var d = 0, e = c.length; d < e; d++)b.appendChild(c[d]) }, Sc: function (b, c) { var d = b.nodeType ? [b] : b; if (0 < d.length) { for (var e = d[0], k = e.parentNode, f = 0, l = c.length; f < l; f++)k.insertBefore(c[f], e); f = 0; for (l = d.length; f < l; f++)a.removeNode(d[f]) } }, Ta: function (a, b) {
                                    if (a.length) {
                                        for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;)a.splice(0, 1); for (; 1 < a.length && a[a.length - 1].parentNode !== b;)a.length--; if (1 < a.length) {
                                            var c =
                                                a[0], d = a[a.length - 1]; for (a.length = 0; c !== d;)a.push(c), c = c.nextSibling; a.push(d)
                                        }
                                    } return a
                                }, Uc: function (a, b) { 7 > q ? a.setAttribute("selected", b) : a.selected = b }, zb: function (a) { return null === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") }, Sd: function (a, b) { a = a || ""; return b.length > a.length ? !1 : a.substring(0, b.length) === b }, sd: function (a, b) {
                                    if (a === b) return !0; if (11 === a.nodeType) return !1; if (b.contains) return b.contains(1 !== a.nodeType ? a.parentNode : a); if (b.compareDocumentPosition) return 16 ==
                                        (b.compareDocumentPosition(a) & 16); for (; a && a != b;)a = a.parentNode; return !!a
                                }, Mb: function (b) { return a.a.sd(b, b.ownerDocument.documentElement) }, gd: function (b) { return !!a.a.pc(b, a.a.Mb) }, O: function (a) { return a && a.tagName && a.tagName.toLowerCase() }, uc: function (b) { return a.onError ? function () { try { return b.apply(this, arguments) } catch (c) { throw a.onError && a.onError(c), c; } } : b }, setTimeout: function (b, c) { return setTimeout(a.a.uc(b), c) }, Ac: function (b) { setTimeout(function () { a.onError && a.onError(b); throw b; }, 0) }, H: function (b,
                                    c, d) { var e = a.a.uc(d); d = k[c]; if (a.options.useOnlyNativeEvents || d || !t) if (d || "function" != typeof b.addEventListener) if ("undefined" != typeof b.attachEvent) { var f = function (a) { e.call(b, a) }, l = "on" + c; b.attachEvent(l, f); a.a.I.xa(b, function () { b.detachEvent(l, f) }) } else throw Error("Browser doesn't support addEventListener or attachEvent"); else b.addEventListener(c, e, !1); else r || (r = "function" == typeof t(b).on ? "on" : "bind"), t(b)[r](c, e) }, Cb: function (b, c) {
                                        if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                                        var d; "input" === a.a.O(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1; if (a.options.useOnlyNativeEvents || !t || d) if ("function" == typeof x.createEvent) if ("function" == typeof b.dispatchEvent) d = x.createEvent(l[c] || "HTMLEvents"), d.initEvent(c, !0, !0, A, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d); else throw Error("The supplied element doesn't support dispatchEvent"); else if (d && b.click) b.click(); else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c); else throw Error("Browser doesn't support triggering events");
                                        else t(b).trigger(c)
                                    }, c: function (b) { return a.M(b) ? b() : b }, Ub: function (b) { return a.M(b) ? b.w() : b }, Bb: function (b, c, d) { var k; c && ("object" === typeof b.classList ? (k = b.classList[d ? "add" : "remove"], a.a.B(c.match(n), function (a) { k.call(b.classList, a) })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, d) : e(b, "className", c, d)) }, yb: function (b, c) {
                                        var d = a.a.c(c); if (null === d || d === p) d = ""; var e = a.h.firstChild(b); !e || 3 != e.nodeType || a.h.nextSibling(e) ? a.h.sa(b, [b.ownerDocument.createTextNode(d)]) : e.data =
                                            d; a.a.yd(b)
                                    }, Tc: function (a, b) { a.name = b; if (7 >= q) try { var c = a.name.replace(/[&<>'"]/g, function (a) { return "&#" + a.charCodeAt(0) + ";" }); a.mergeAttributes(x.createElement("<input name='" + c + "'/>"), !1) } catch (d) { } }, yd: function (a) { 9 <= q && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom)) }, ud: function (a) { if (q) { var b = a.style.width; a.style.width = 0; a.style.width = b } }, Nd: function (b, c) { b = a.a.c(b); c = a.a.c(c); for (var d = [], e = b; e <= c; e++)d.push(e); return d }, ka: function (a) {
                                        for (var b = [], c = 0, d = a.length; c < d; c++)b.push(a[c]);
                                        return b
                                    }, Qa: function (a) { return h ? Symbol(a) : a }, Wd: 6 === q, Xd: 7 === q, T: q, Fc: function (b, c) { for (var d = a.a.ka(b.getElementsByTagName("input")).concat(a.a.ka(b.getElementsByTagName("textarea"))), e = "string" == typeof c ? function (a) { return a.name === c } : function (a) { return c.test(a.name) }, k = [], f = d.length - 1; 0 <= f; f--)e(d[f]) && k.push(d[f]); return k }, Ld: function (b) { return "string" == typeof b && (b = a.a.zb(b)) ? G && G.parse ? G.parse(b) : (new Function("return " + b))() : null }, $b: function (b, c, d) {
                                        if (!G || !G.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                                        return G.stringify(a.a.c(b), c, d)
                                    }, Md: function (c, d, e) {
                                        e = e || {}; var k = e.params || {}, f = e.includeFields || this.Dc, l = c; if ("object" == typeof c && "form" === a.a.O(c)) for (var l = c.action, h = f.length - 1; 0 <= h; h--)for (var g = a.a.Fc(c, f[h]), n = g.length - 1; 0 <= n; n--)k[g[n].name] = g[n].value; d = a.a.c(d); var m = x.createElement("form"); m.style.display = "none"; m.action = l; m.method = "post"; for (var q in d) c = x.createElement("input"), c.type = "hidden", c.name = q, c.value = a.a.$b(a.a.c(d[q])), m.appendChild(c); b(k, function (a, b) {
                                            var c = x.createElement("input");
                                            c.type = "hidden"; c.name = a; c.value = b; m.appendChild(c)
                                        }); x.body.appendChild(m); e.submitter ? e.submitter(m) : m.submit(); setTimeout(function () { m.parentNode.removeChild(m) }, 0)
                                    }
                        }
                }(); a.b("utils", a.a); a.b("utils.arrayForEach", a.a.B); a.b("utils.arrayFirst", a.a.pc); a.b("utils.arrayFilter", a.a.cb); a.b("utils.arrayGetDistinctValues", a.a.qc); a.b("utils.arrayIndexOf", a.a.C); a.b("utils.arrayMap", a.a.Hb); a.b("utils.arrayPushAll", a.a.eb); a.b("utils.arrayRemoveItem", a.a.fb); a.b("utils.cloneNodes", a.a.Aa); a.b("utils.createSymbolOrString",
                    a.a.Qa); a.b("utils.extend", a.a.extend); a.b("utils.fieldsIncludedWithJsonPost", a.a.Dc); a.b("utils.getFormFields", a.a.Fc); a.b("utils.objectMap", a.a.Fa); a.b("utils.peekObservable", a.a.Ub); a.b("utils.postJson", a.a.Md); a.b("utils.parseJson", a.a.Ld); a.b("utils.registerEventHandler", a.a.H); a.b("utils.stringifyJson", a.a.$b); a.b("utils.range", a.a.Nd); a.b("utils.toggleDomNodeCssClass", a.a.Bb); a.b("utils.triggerEvent", a.a.Cb); a.b("utils.unwrapObservable", a.a.c); a.b("utils.objectForEach", a.a.N); a.b("utils.addOrRemoveItem",
                        a.a.Ma); a.b("utils.setTextContent", a.a.yb); a.b("unwrap", a.a.c); Function.prototype.bind || (Function.prototype.bind = function (a) { var c = this; if (1 === arguments.length) return function () { return c.apply(a, arguments) }; var d = Array.prototype.slice.call(arguments, 1); return function () { var e = d.slice(0); e.push.apply(e, arguments); return c.apply(a, e) } }); a.a.g = new function () {
                            var b = 0, c = "__ko__" + (new Date).getTime(), d = {}, e, f; a.a.T ? (e = function (a, e) {
                                var f = a[c]; if (!f || "null" === f || !d[f]) {
                                    if (!e) return p; f = a[c] = "ko" + b++; d[f] =
                                        {}
                                } return d[f]
                            }, f = function (a) { var b = a[c]; return b ? (delete d[b], a[c] = null, !0) : !1 }) : (e = function (a, b) { var d = a[c]; !d && b && (d = a[c] = {}); return d }, f = function (a) { return a[c] ? (delete a[c], !0) : !1 }); return { get: function (a, b) { var c = e(a, !1); return c && c[b] }, set: function (a, b, c) { (a = e(a, c !== p)) && (a[b] = c) }, Ob: function (a, b, c) { a = e(a, !0); return a[b] || (a[b] = c) }, clear: f, V: function () { return b++ + c } }
                        }; a.b("utils.domData", a.a.g); a.b("utils.domData.clear", a.a.g.clear); a.a.I = new function () {
                            function b(b, c) {
                                var d = a.a.g.get(b, e);
                                d === p && c && (d = [], a.a.g.set(b, e, d)); return d
                            } function c(c) { var e = b(c, !1); if (e) for (var e = e.slice(0), f = 0; f < e.length; f++)e[f](c); a.a.g.clear(c); a.a.I.cleanExternalData(c); g[c.nodeType] && d(c.childNodes, !0) } function d(b, d) { for (var e = [], f, q = 0; q < b.length; q++)if (!d || 8 === b[q].nodeType) if (c(e[e.length] = f = b[q]), b[q] !== f) for (; q-- && -1 == a.a.C(e, b[q]);); } var e = a.a.g.V(), f = { 1: !0, 8: !0, 9: !0 }, g = { 1: !0, 9: !0 }; return {
                                xa: function (a, c) { if ("function" != typeof c) throw Error("Callback must be a function"); b(a, !0).push(c) }, vb: function (c,
                                    d) { var f = b(c, !1); f && (a.a.fb(f, d), 0 == f.length && a.a.g.set(c, e, p)) }, ma: function (a) { f[a.nodeType] && (c(a), g[a.nodeType] && d(a.getElementsByTagName("*"))); return a }, removeNode: function (b) { a.ma(b); b.parentNode && b.parentNode.removeChild(b) }, cleanExternalData: function (a) { t && "function" == typeof t.cleanData && t.cleanData([a]) }
                            }
                        }; a.ma = a.a.I.ma; a.removeNode = a.a.I.removeNode; a.b("cleanNode", a.ma); a.b("removeNode", a.removeNode); a.b("utils.domNodeDisposal", a.a.I); a.b("utils.domNodeDisposal.addDisposeCallback", a.a.I.xa);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.I.vb); (function () {
                var b = [0, "", ""], c = [1, "<table>", "</table>"], d = [3, "<table><tbody><tr>", "</tr></tbody></table>"], e = [1, "<select multiple='multiple'>", "</select>"], f = { thead: c, tbody: c, tfoot: c, tr: [2, "<table><tbody>", "</tbody></table>"], td: d, th: d, option: e, optgroup: e }, g = 8 >= a.a.T; a.a.ra = function (c, d) {
                    var e; if (t) if (t.parseHTML) e = t.parseHTML(c, d) || []; else {
                        if ((e = t.clean([c], d)) && e[0]) {
                            for (var k = e[0]; k.parentNode && 11 !== k.parentNode.nodeType;)k = k.parentNode;
                            k.parentNode && k.parentNode.removeChild(k)
                        }
                    } else { (e = d) || (e = x); var k = e.parentWindow || e.defaultView || A, q = a.a.zb(c).toLowerCase(), n = e.createElement("div"), r; r = (q = q.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && f[q[1]] || b; q = r[0]; r = "ignored<div>" + r[1] + c + r[2] + "</div>"; "function" == typeof k.innerShiv ? n.appendChild(k.innerShiv(r)) : (g && e.body.appendChild(n), n.innerHTML = r, g && n.parentNode.removeChild(n)); for (; q--;)n = n.lastChild; e = a.a.ka(n.lastChild.childNodes) } return e
                }; a.a.Kd = function (b, c) {
                    var d = a.a.ra(b,
                        c); return d.length && d[0].parentElement || a.a.Rb(d)
                }; a.a.Yb = function (b, c) { a.a.Nb(b); c = a.a.c(c); if (null !== c && c !== p) if ("string" != typeof c && (c = c.toString()), t) t(b).html(c); else for (var d = a.a.ra(c, b.ownerDocument), e = 0; e < d.length; e++)b.appendChild(d[e]) }
            })(); a.b("utils.parseHtmlFragment", a.a.ra); a.b("utils.setHtml", a.a.Yb); a.$ = function () {
                function b(c, e) {
                    if (c) if (8 == c.nodeType) { var f = a.$.Pc(c.nodeValue); null != f && e.push({ rd: c, Id: f }) } else if (1 == c.nodeType) for (var f = 0, g = c.childNodes, h = g.length; f < h; f++)b(g[f],
                        e)
                } var c = {}; return {
                    Qb: function (a) { if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()"); var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1); c[b] = a; return "\x3c!--[ko_memo:" + b + "]--\x3e" }, Yc: function (a, b) { var f = c[a]; if (f === p) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized."); try { return f.apply(null, b || []), !0 } finally { delete c[a] } }, Zc: function (c, e) {
                        var f =
                            []; b(c, f); for (var g = 0, h = f.length; g < h; g++) { var m = f[g].rd, l = [m]; e && a.a.eb(l, e); a.$.Yc(f[g].Id, l); m.nodeValue = ""; m.parentNode && m.parentNode.removeChild(m) }
                    }, Pc: function (a) { return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null }
                }
            }(); a.b("memoization", a.$); a.b("memoization.memoize", a.$.Qb); a.b("memoization.unmemoize", a.$.Yc); a.b("memoization.parseMemoText", a.$.Pc); a.b("memoization.unmemoizeDomNodeAndDescendants", a.$.Zc); a.la = function () {
                function b() {
                    if (f) for (var b = f, c = 0, d; h < f;)if (d = e[h++]) {
                        if (h > b) {
                            if (5E3 <=
                                ++c) { h = f; a.a.Ac(Error("'Too much recursion' after processing " + c + " task groups.")); break } b = f
                        } try { d() } catch (q) { a.a.Ac(q) }
                    }
                } function c() { b(); h = f = e.length = 0 } var d, e = [], f = 0, g = 1, h = 0; A.MutationObserver ? d = function (a) { var b = x.createElement("div"); (new MutationObserver(a)).observe(b, { attributes: !0 }); return function () { b.classList.toggle("foo") } }(c) : d = x && "onreadystatechange" in x.createElement("script") ? function (a) {
                    var b = x.createElement("script"); b.onreadystatechange = function () {
                    b.onreadystatechange = null; x.documentElement.removeChild(b);
                        b = null; a()
                    }; x.documentElement.appendChild(b)
                } : function (a) { setTimeout(a, 0) }; return { scheduler: d, wb: function (b) { f || a.la.scheduler(c); e[f++] = b; return g++ }, cancel: function (a) { a = a - (g - f); a >= h && a < f && (e[a] = null) }, resetForTesting: function () { var a = f - h; h = f = e.length = 0; return a }, Qd: b }
            }(); a.b("tasks", a.la); a.b("tasks.schedule", a.la.wb); a.b("tasks.runEarly", a.la.Qd); a.Sa = {
                throttle: function (b, c) {
                b.throttleEvaluation = c; var d = null; return a.Z({
                    read: b, write: function (e) {
                        clearTimeout(d); d = a.a.setTimeout(function () { b(e) },
                            c)
                    }
                })
                }, rateLimit: function (a, c) { var d, e, f; "number" == typeof c ? d = c : (d = c.timeout, e = c.method); a.Eb = !1; f = "notifyWhenChangesStop" == e ? V : U; a.rb(function (a) { return f(a, d) }) }, deferred: function (b, c) { if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled."); b.Eb || (b.Eb = !0, b.rb(function (c) { var e, f = !1; return function () { if (!f) { a.la.cancel(e); e = a.la.wb(c); try { f = !0, b.notifySubscribers(p, "dirty") } finally { f = !1 } } } })) }, notify: function (a,
                    c) { a.equalityComparer = "always" == c ? null : J }
            }; var T = { undefined: 1, "boolean": 1, number: 1, string: 1 }; a.b("extenders", a.Sa); a.ac = function (b, c, d) { this.ga = b; this.ad = c; this.cd = d; this.gc = !1; this.Fb = this.jc = null; a.J(this, "dispose", this.o); a.J(this, "disposeWhenNodeIsRemoved", this.j) }; a.ac.prototype.o = function () { this.Fb && a.a.I.vb(this.jc, this.Fb); this.gc = !0; this.cd() }; a.ac.prototype.j = function (b) { this.jc = b; a.a.I.xa(b, this.Fb = this.o.bind(this)) }; a.R = function () { a.a.xb(this, D); D.mb(this) }; var D = {
                mb: function (a) {
                a.S =
                    { change: [] }; a.lc = 1
                }, subscribe: function (b, c, d) { var e = this; d = d || "change"; var f = new a.ac(e, c ? b.bind(c) : b, function () { a.a.fb(e.S[d], f); e.ab && e.ab(d) }); e.Oa && e.Oa(d); e.S[d] || (e.S[d] = []); e.S[d].push(f); return f }, notifySubscribers: function (b, c) { c = c || "change"; "change" === c && this.Db(); if (this.Ua(c)) { var d = "change" === c && this.bd || this.S[c].slice(0); try { a.u.rc(); for (var e = 0, f; f = d[e]; ++e)f.gc || f.ad(b) } finally { a.u.end() } } }, lb: function () { return this.lc }, Bd: function (a) { return this.lb() !== a }, Db: function () { ++this.lc },
                rb: function (b) { var c = this, d = a.M(c), e, f, g, h, m; c.$a || (c.$a = c.notifySubscribers, c.notifySubscribers = W); var l = b(function () { c.Ia = !1; d && h === c && (h = c.ec ? c.ec() : c()); var a = f || m && c.ob(g, h); m = f = e = !1; a && c.$a(g = h) }); c.ic = function (a, b) { b && c.Ia || (m = !b); c.bd = c.S.change.slice(0); c.Ia = e = !0; h = a; l() }; c.hc = function (a) { e || (g = a, c.$a(a, "beforeChange")) }; c.kc = function () { m = !0 }; c.ed = function () { c.ob(g, c.w(!0)) && (f = !0) } }, Ua: function (a) { return this.S[a] && this.S[a].length }, zd: function (b) {
                    if (b) return this.S[b] && this.S[b].length ||
                        0; var c = 0; a.a.N(this.S, function (a, b) { "dirty" !== a && (c += b.length) }); return c
                }, ob: function (a, c) { return !this.equalityComparer || !this.equalityComparer(a, c) }, toString: function () { return "[object Object]" }, extend: function (b) { var c = this; b && a.a.N(b, function (b, e) { var f = a.Sa[b]; "function" == typeof f && (c = f(c, e) || c) }); return c }
            }; a.J(D, "init", D.mb); a.J(D, "subscribe", D.subscribe); a.J(D, "extend", D.extend); a.J(D, "getSubscriptionsCount", D.zd); a.a.za && a.a.setPrototypeOf(D, Function.prototype); a.R.fn = D; a.Lc = function (a) {
                return null !=
                    a && "function" == typeof a.subscribe && "function" == typeof a.notifySubscribers
            }; a.b("subscribable", a.R); a.b("isSubscribable", a.Lc); a.ia = a.u = function () { function b(a) { d.push(e); e = a } function c() { e = d.pop() } var d = [], e, f = 0; return { rc: b, end: c, Vb: function (b) { if (e) { if (!a.Lc(b)) throw Error("Only subscribable things can act as dependencies"); e.ld.call(e.md, b, b.dd || (b.dd = ++f)) } }, K: function (a, d, e) { try { return b(), a.apply(d, e || []) } finally { c() } }, Ea: function () { if (e) return e.v.Ea() }, kb: function () { if (e) return e.v.kb() }, pb: function () { if (e) return e.pb } } }();
            a.b("computedContext", a.ia); a.b("computedContext.getDependenciesCount", a.ia.Ea); a.b("computedContext.getDependencies", a.ia.kb); a.b("computedContext.isInitial", a.ia.pb); a.b("computedContext.registerDependency", a.ia.Vb); a.b("ignoreDependencies", a.Vd = a.u.K); var I = a.a.Qa("_latestValue"); a.qa = function (b) {
                function c() { if (0 < arguments.length) return c.ob(c[I], arguments[0]) && (c.va(), c[I] = arguments[0], c.ua()), this; a.u.Vb(c); return c[I] } c[I] = b; a.a.za || a.a.extend(c, a.R.fn); a.R.fn.mb(c); a.a.xb(c, E); a.options.deferUpdates &&
                    a.Sa.deferred(c, !0); return c
            }; var E = { equalityComparer: J, w: function () { return this[I] }, ua: function () { this.notifySubscribers(this[I], "spectate"); this.notifySubscribers(this[I]) }, va: function () { this.notifySubscribers(this[I], "beforeChange") } }; a.a.za && a.a.setPrototypeOf(E, a.R.fn); var F = a.qa.La = "__ko_proto__"; E[F] = a.qa; a.M = function (b) { if ((b = "function" == typeof b && b[F]) && b !== E[F] && b !== a.v.fn[F]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance"); return !!b };
            a.Wa = function (b) { return "function" == typeof b && (b[F] === E[F] || b[F] === a.v.fn[F] && b.Hc) }; a.b("observable", a.qa); a.b("isObservable", a.M); a.b("isWriteableObservable", a.Wa); a.b("isWritableObservable", a.Wa); a.b("observable.fn", E); a.J(E, "peek", E.w); a.J(E, "valueHasMutated", E.ua); a.J(E, "valueWillMutate", E.va); a.Ga = function (b) {
                b = b || []; if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined."); b = a.qa(b); a.a.xb(b, a.Ga.fn);
                return b.extend({ trackArrayChanges: !0 })
            }; a.Ga.fn = {
                remove: function (b) { for (var c = this.w(), d = [], e = "function" != typeof b || a.M(b) ? function (a) { return a === b } : b, f = 0; f < c.length; f++) { var g = c[f]; if (e(g)) { 0 === d.length && this.va(); if (c[f] !== g) throw Error("Array modified during remove; cannot remove item"); d.push(g); c.splice(f, 1); f-- } } d.length && this.ua(); return d }, removeAll: function (b) {
                    if (b === p) { var c = this.w(), d = c.slice(0); this.va(); c.splice(0, c.length); this.ua(); return d } return b ? this.remove(function (c) {
                        return 0 <=
                            a.a.C(b, c)
                    }) : []
                }, destroy: function (b) { var c = this.w(), d = "function" != typeof b || a.M(b) ? function (a) { return a === b } : b; this.va(); for (var e = c.length - 1; 0 <= e; e--) { var f = c[e]; d(f) && (f._destroy = !0) } this.ua() }, destroyAll: function (b) { return b === p ? this.destroy(function () { return !0 }) : b ? this.destroy(function (c) { return 0 <= a.a.C(b, c) }) : [] }, indexOf: function (b) { var c = this(); return a.a.C(c, b) }, replace: function (a, c) { var d = this.indexOf(a); 0 <= d && (this.va(), this.w()[d] = c, this.ua()) }, sorted: function (a) {
                    var c = this().slice(0);
                    return a ? c.sort(a) : c.sort()
                }, reversed: function () { return this().slice(0).reverse() }
            }; a.a.za && a.a.setPrototypeOf(a.Ga.fn, a.qa.fn); a.a.B("pop push reverse shift sort splice unshift".split(" "), function (b) { a.Ga.fn[b] = function () { var a = this.w(); this.va(); this.tc(a, b, arguments); var d = a[b].apply(a, arguments); this.ua(); return d === a ? this : d } }); a.a.B(["slice"], function (b) { a.Ga.fn[b] = function () { var a = this(); return a[b].apply(a, arguments) } }); a.Kc = function (b) {
                return a.M(b) && "function" == typeof b.remove && "function" ==
                    typeof b.push
            }; a.b("observableArray", a.Ga); a.b("isObservableArray", a.Kc); a.Sa.trackArrayChanges = function (b, c) {
                function d() { if (!e) { e = !0; m = b.notifySubscribers; b.notifySubscribers = function (a, b) { b && "change" !== b || ++h; return m.apply(this, arguments) }; var c = [].concat(b.w() || []); f = null; g = b.subscribe(function (d) { d = [].concat(d || []); if (b.Ua("arrayChange")) { var e; if (!f || 1 < h) f = a.a.Jb(c, d, b.Ib); e = f } c = d; f = null; h = 0; e && e.length && b.notifySubscribers(e, "arrayChange") }) } } b.Ib = {}; c && "object" == typeof c && a.a.extend(b.Ib,
                    c); b.Ib.sparse = !0; if (!b.tc) {
                        var e = !1, f = null, g, h = 0, m, l = b.Oa, k = b.ab; b.Oa = function (a) { l && l.call(b, a); "arrayChange" === a && d() }; b.ab = function (a) { k && k.call(b, a); "arrayChange" !== a || b.Ua("arrayChange") || (m && (b.notifySubscribers = m, m = p), g && g.o(), g = null, e = !1) }; b.tc = function (b, c, d) {
                            function k(a, b, c) { return l[l.length] = { status: a, value: b, index: c } } if (e && !h) {
                                var l = [], g = b.length, m = d.length, z = 0; switch (c) {
                                    case "push": z = g; case "unshift": for (c = 0; c < m; c++)k("added", d[c], z + c); break; case "pop": z = g - 1; case "shift": g && k("deleted",
                                        b[z], z); break; case "splice": c = Math.min(Math.max(0, 0 > d[0] ? g + d[0] : d[0]), g); for (var g = 1 === m ? g : Math.min(c + (d[1] || 0), g), m = c + m - 2, z = Math.max(g, m), R = [], K = [], p = 2; c < z; ++c, ++p)c < g && K.push(k("deleted", b[c], c)), c < m && R.push(k("added", d[p], c)); a.a.Ec(K, R); break; default: return
                                }f = l
                            }
                        }
                    }
            }; var u = a.a.Qa("_state"); a.v = a.Z = function (b, c, d) {
                function e() {
                    if (0 < arguments.length) {
                        if ("function" === typeof f) f.apply(g.jb, arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this
                    } g.na || a.u.Vb(e); (g.ja || g.G && e.Va()) && e.ea(); return g.U
                } "object" === typeof b ? d = b : (d = d || {}, b && (d.read = b)); if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed"); var f = d.write, g = { U: p, oa: !0, ja: !0, nb: !1, bc: !1, na: !1, tb: !1, G: !1, Rc: d.read, jb: c || d.owner, j: d.disposeWhenNodeIsRemoved || d.j || null, Ra: d.disposeWhen || d.Ra, Lb: null, F: {}, Y: 0, Cc: null }; e[u] = g; e.Hc = "function" === typeof f; a.a.za || a.a.extend(e, a.R.fn); a.R.fn.mb(e); a.a.xb(e, C); d.pure ? (g.tb = !0, g.G = !0,
                    a.a.extend(e, Z)) : d.deferEvaluation && a.a.extend(e, aa); a.options.deferUpdates && a.Sa.deferred(e, !0); g.j && (g.bc = !0, g.j.nodeType || (g.j = null)); g.G || d.deferEvaluation || e.ea(); g.j && e.fa() && a.a.I.xa(g.j, g.Lb = function () { e.o() }); return e
            }; var C = {
                equalityComparer: J, Ea: function () { return this[u].Y }, kb: function () { var b = []; a.a.N(this[u].F, function (a, d) { b[d.Ja] = d.ga }); return b }, nc: function (a, c, d) {
                    if (this[u].tb && c === this) throw Error("A 'pure' computed must not be called recursively"); this[u].F[a] = d; d.Ja = this[u].Y++;
                    d.Ka = c.lb()
                }, Va: function () { var a, c, d = this[u].F; for (a in d) if (Object.prototype.hasOwnProperty.call(d, a) && (c = d[a], this.Ha && c.ga.Ia || c.ga.Bd(c.Ka))) return !0 }, Hd: function () { this.Ha && !this[u].nb && this.Ha(!1) }, fa: function () { var a = this[u]; return a.ja || 0 < a.Y }, Pd: function () { this.Ia ? this[u].ja && (this[u].oa = !0) : this.Bc() }, Wc: function (a) { if (a.Eb) { var c = a.subscribe(this.Hd, this, "dirty"), d = a.subscribe(this.Pd, this); return { ga: a, o: function () { c.o(); d.o() } } } return a.subscribe(this.Bc, this) }, Bc: function () {
                    var b = this,
                    c = b.throttleEvaluation; c && 0 <= c ? (clearTimeout(this[u].Cc), this[u].Cc = a.a.setTimeout(function () { b.ea(!0) }, c)) : b.Ha ? b.Ha(!0) : b.ea(!0)
                }, ea: function (b) { var c = this[u], d = c.Ra, e = !1; if (!c.nb && !c.na) { if (c.j && !a.a.Mb(c.j) || d && d()) { if (!c.bc) { this.o(); return } } else c.bc = !1; c.nb = !0; try { e = this.xd(b) } finally { c.nb = !1 } return e } }, xd: function (b) {
                    var c = this[u], d = !1, e = c.tb ? p : !c.Y, d = { nd: this, ib: c.F, Kb: c.Y }; a.u.rc({ md: d, ld: Y, v: this, pb: e }); c.F = {}; c.Y = 0; var f = this.wd(c, d); c.Y ? d = this.ob(c.U, f) : (this.o(), d = !0); d && (c.G ? this.Db() :
                        this.notifySubscribers(c.U, "beforeChange"), c.U = f, this.notifySubscribers(c.U, "spectate"), !c.G && b && this.notifySubscribers(c.U), this.kc && this.kc()); e && this.notifySubscribers(c.U, "awake"); return d
                }, wd: function (b, c) { try { var d = b.Rc; return b.jb ? d.call(b.jb) : d() } finally { a.u.end(), c.Kb && !b.G && a.a.N(c.ib, X), b.oa = b.ja = !1 } }, w: function (a) { var c = this[u]; (c.ja && (a || !c.Y) || c.G && this.Va()) && this.ea(); return c.U }, rb: function (b) {
                    a.R.fn.rb.call(this, b); this.ec = function () {
                        this[u].G || (this[u].oa ? this.ea() : this[u].ja = !1);
                        return this[u].U
                    }; this.Ha = function (a) { this.hc(this[u].U); this[u].ja = !0; a && (this[u].oa = !0); this.ic(this, !a) }
                }, o: function () { var b = this[u]; !b.G && b.F && a.a.N(b.F, function (a, b) { b.o && b.o() }); b.j && b.Lb && a.a.I.vb(b.j, b.Lb); b.F = p; b.Y = 0; b.na = !0; b.oa = !1; b.ja = !1; b.G = !1; b.j = p; b.Ra = p; b.Rc = p; this.Hc || (b.jb = p) }
            }, Z = {
                Oa: function (b) {
                    var c = this, d = c[u]; if (!d.na && d.G && "change" == b) {
                    d.G = !1; if (d.oa || c.Va()) d.F = null, d.Y = 0, c.ea() && c.Db(); else {
                        var e = []; a.a.N(d.F, function (a, b) { e[b.Ja] = a }); a.a.B(e, function (a, b) {
                            var e = d.F[a], m =
                                c.Wc(e.ga); m.Ja = b; m.Ka = e.Ka; d.F[a] = m
                        }); c.Va() && c.ea() && c.Db()
                    } d.na || c.notifySubscribers(d.U, "awake")
                    }
                }, ab: function (b) { var c = this[u]; c.na || "change" != b || this.Ua("change") || (a.a.N(c.F, function (a, b) { b.o && (c.F[a] = { ga: b.ga, Ja: b.Ja, Ka: b.Ka }, b.o()) }), c.G = !0, this.notifySubscribers(p, "asleep")) }, lb: function () { var b = this[u]; b.G && (b.oa || this.Va()) && this.ea(); return a.R.fn.lb.call(this) }
            }, aa = { Oa: function (a) { "change" != a && "beforeChange" != a || this.w() } }; a.a.za && a.a.setPrototypeOf(C, a.R.fn); var M = a.qa.La; C[M] = a.v;
            a.Jc = function (a) { return "function" == typeof a && a[M] === C[M] }; a.Dd = function (b) { return a.Jc(b) && b[u] && b[u].tb }; a.b("computed", a.v); a.b("dependentObservable", a.v); a.b("isComputed", a.Jc); a.b("isPureComputed", a.Dd); a.b("computed.fn", C); a.J(C, "peek", C.w); a.J(C, "dispose", C.o); a.J(C, "isActive", C.fa); a.J(C, "getDependenciesCount", C.Ea); a.J(C, "getDependencies", C.kb); a.ub = function (b, c) { if ("function" === typeof b) return a.v(b, c, { pure: !0 }); b = a.a.extend({}, b); b.pure = !0; return a.v(b, c) }; a.b("pureComputed", a.ub); (function () {
                function b(a,
                    f, g) { g = g || new d; a = f(a); if ("object" != typeof a || null === a || a === p || a instanceof RegExp || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a; var h = a instanceof Array ? [] : {}; g.save(a, h); c(a, function (c) { var d = f(a[c]); switch (typeof d) { case "boolean": case "number": case "string": case "function": h[c] = d; break; case "object": case "undefined": var k = g.get(d); h[c] = k !== p ? k : b(d, f, g) } }); return h } function c(a, b) {
                        if (a instanceof Array) {
                            for (var c = 0; c < a.length; c++)b(c); "function" == typeof a.toJSON &&
                                b("toJSON")
                        } else for (c in a) b(c)
                    } function d() { this.keys = []; this.values = [] } a.Xc = function (c) { if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert."); return b(c, function (b) { for (var c = 0; a.M(b) && 10 > c; c++)b = b(); return b }) }; a.toJSON = function (b, c, d) { b = a.Xc(b); return a.a.$b(b, c, d) }; d.prototype = {
                        constructor: d, save: function (b, c) { var d = a.a.C(this.keys, b); 0 <= d ? this.values[d] = c : (this.keys.push(b), this.values.push(c)) }, get: function (b) {
                            b = a.a.C(this.keys, b); return 0 <= b ? this.values[b] :
                                p
                        }
                    }
            })(); a.b("toJS", a.Xc); a.b("toJSON", a.toJSON); a.Ud = function (b, c, d) { function e(c) { var e = a.ub(b, d).extend({ Ya: "always" }), h = e.subscribe(function (a) { a && (h.o(), c(a)) }); e.notifySubscribers(e.w()); return h } return "function" !== typeof Promise || c ? e(c.bind(d)) : new Promise(e) }; a.b("when", a.Ud); (function () {
            a.s = {
                L: function (b) {
                    switch (a.a.O(b)) {
                        case "option": return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.g.get(b, a.f.options.Sb) : 7 >= a.a.T ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value :
                            b.text : b.value; case "select": return 0 <= b.selectedIndex ? a.s.L(b.options[b.selectedIndex]) : p; default: return b.value
                    }
                }, wa: function (b, c, d) {
                    switch (a.a.O(b)) {
                        case "option": "string" === typeof c ? (a.a.g.set(b, a.f.options.Sb, p), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c) : (a.a.g.set(b, a.f.options.Sb, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof c ? c : ""); break; case "select": if ("" === c || null === c) c = p; for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f)if (h = a.s.L(b.options[f]),
                            h == c || "" === h && c === p) { e = f; break } if (d || 0 <= e || c === p && 1 < b.size) b.selectedIndex = e, 6 === a.a.T && a.a.setTimeout(function () { b.selectedIndex = e }, 0); break; default: if (null === c || c === p) c = ""; b.value = c
                    }
                }
            }
            })(); a.b("selectExtensions", a.s); a.b("selectExtensions.readValue", a.s.L); a.b("selectExtensions.writeValue", a.s.wa); a.l = function () {
                function b(b) {
                    b = a.a.zb(b); 123 === b.charCodeAt(0) && (b = b.slice(1, -1)); b += "\n,"; var c = [], d = b.match(e), q, n = [], h = 0; if (1 < d.length) for (var w = 0, B; B = d[w]; ++w) {
                        var v = B.charCodeAt(0); if (44 === v) {
                            if (0 >=
                                h) { c.push(q && n.length ? { key: q, value: n.join("") } : { unknown: q || n.join("") }); q = h = 0; n = []; continue }
                        } else if (58 === v) { if (!h && !q && 1 === n.length) { q = n.pop(); continue } } else if (47 === v && 1 < B.length && (47 === B.charCodeAt(1) || 42 === B.charCodeAt(1))) continue; else 47 === v && w && 1 < B.length ? (v = d[w - 1].match(f)) && !g[v[0]] && (b = b.substr(b.indexOf(B) + 1), d = b.match(e), w = -1, B = "/") : 40 === v || 123 === v || 91 === v ? ++h : 41 === v || 125 === v || 93 === v ? --h : q || n.length || 34 !== v && 39 !== v || (B = B.slice(1, -1)); n.push(B)
                    } return c
                } var c = ["true", "false", "null", "undefined"],
                    d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"), f = /[\])"'A-Za-z0-9_$]+$/, g = { "in": 1, "return": 1, "typeof": 1 }, h = {}; return {
                        Pa: [], ta: h, Tb: b, sb: function (e, f) {
                            function k(b, e) {
                                var f; if (!w) {
                                    var l = a.getBindingHandler(b); if (l && l.preprocess && !(e = l.preprocess(e, b, k))) return; if (l = h[b]) f = e, 0 <= a.a.C(c, f) ? f = !1 : (l = f.match(d),
                                        f = null === l ? !1 : l[1] ? "Object(" + l[1] + ")" + l[2] : f), l = f; l && n.push("'" + ("string" == typeof h[b] ? h[b] : b) + "':function(_z){" + f + "=_z}")
                                } g && (e = "function(){return " + e + " }"); q.push("'" + b + "':" + e)
                            } f = f || {}; var q = [], n = [], g = f.valueAccessors, w = f.bindingParams, B = "string" === typeof e ? b(e) : e; a.a.B(B, function (a) { k(a.key || a.unknown, a.value) }); n.length && k("_ko_property_writers", "{" + n.join(",") + " }"); return q.join(",")
                        }, Gd: function (a, b) { for (var c = 0; c < a.length; c++)if (a[c].key == b) return !0; return !1 }, Za: function (b, c, d, e, f) {
                            if (b &&
                                a.M(b)) !a.Wa(b) || f && b.w() === e || b(e); else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e)
                        }
                    }
            }(); a.b("expressionRewriting", a.l); a.b("expressionRewriting.bindingRewriteValidators", a.l.Pa); a.b("expressionRewriting.parseObjectLiteral", a.l.Tb); a.b("expressionRewriting.preProcessBindings", a.l.sb); a.b("expressionRewriting._twoWayBindings", a.l.ta); a.b("jsonExpressionRewriting", a.l); a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.l.sb); (function () {
                function b(a) {
                    return 8 == a.nodeType && g.test(f ?
                        a.text : a.nodeValue)
                } function c(a) { return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue) } function d(d, e) { for (var f = d, g = 1, h = []; f = f.nextSibling;) { if (c(f) && (a.a.g.set(f, l, !0), g-- , 0 === g)) return h; h.push(f); b(f) && g++ } if (!e) throw Error("Cannot find closing comment tag to match: " + d.nodeValue); return null } function e(a, b) { var c = d(a, b); return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null } var f = x && "\x3c!--test--\x3e" === x.createComment("test").text, g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                    h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, m = { ul: !0, ol: !0 }, l = "__ko_matchedEndComment__"; a.h = {
                        ca: {}, childNodes: function (a) { return b(a) ? d(a) : a.childNodes }, Ca: function (c) { if (b(c)) { c = a.h.childNodes(c); for (var d = 0, e = c.length; d < e; d++)a.removeNode(c[d]) } else a.a.Nb(c) }, sa: function (c, d) { if (b(c)) { a.h.Ca(c); for (var e = c.nextSibling, f = 0, l = d.length; f < l; f++)e.parentNode.insertBefore(d[f], e) } else a.a.sa(c, d) }, Qc: function (a, c) {
                            b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) :
                                a.appendChild(c)
                        }, Ic: function (c, d, e) { e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) : c.appendChild(d) : a.h.Qc(c, d) }, firstChild: function (a) { if (b(a)) return !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling; if (a.firstChild && c(a.firstChild)) throw Error("Found invalid end comment, as the first child of " + a); return a.firstChild }, nextSibling: function (d) {
                        b(d) && (d = e(d)); if (d.nextSibling && c(d.nextSibling)) {
                            var f = d.nextSibling; if (c(f) && !a.a.g.get(f, l)) throw Error("Found end comment without a matching opening comment, as child of " +
                                d); return null
                        } return d.nextSibling
                        }, Ad: b, Td: function (a) { return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null }, Nc: function (d) { if (m[a.a.O(d)]) { var f = d.firstChild; if (f) { do if (1 === f.nodeType) { var l; l = f.firstChild; var g = null; if (l) { do if (g) g.push(l); else if (b(l)) { var h = e(l, !0); h ? l = h : g = [l] } else c(l) && (g = [l]); while (l = l.nextSibling) } if (l = g) for (g = f.nextSibling, h = 0; h < l.length; h++)g ? d.insertBefore(l[h], g) : d.appendChild(l[h]) } while (f = f.nextSibling) } } }
                    }
            })(); a.b("virtualElements", a.h); a.b("virtualElements.allowedBindings",
                a.h.ca); a.b("virtualElements.emptyNode", a.h.Ca); a.b("virtualElements.insertAfter", a.h.Ic); a.b("virtualElements.prepend", a.h.Qc); a.b("virtualElements.setDomNodeChildren", a.h.sa); (function () {
                a.da = function () { this.kd = {} }; a.a.extend(a.da.prototype, {
                    nodeHasBindings: function (b) { switch (b.nodeType) { case 1: return null != b.getAttribute("data-bind") || a.i.getComponentNameForNode(b); case 8: return a.h.Ad(b); default: return !1 } }, getBindings: function (b, c) {
                        var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d,
                            c, b) : null; return a.i.mc(d, b, c, !1)
                    }, getBindingAccessors: function (b, c) { var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b, { valueAccessors: !0 }) : null; return a.i.mc(d, b, c, !0) }, getBindingsString: function (b) { switch (b.nodeType) { case 1: return b.getAttribute("data-bind"); case 8: return a.h.Td(b); default: return null } }, parseBindingsString: function (b, c, d, e) {
                        try {
                            var f = this.kd, g = b + (e && e.valueAccessors || ""), h; if (!(h = f[g])) {
                                var m, l = "with($context){with($data||{}){return{" + a.l.sb(b, e) + "}}}"; m = new Function("$context",
                                    "$element", l); h = f[g] = m
                            } return h(c, d)
                        } catch (k) { throw k.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + k.message, k; }
                    }
                }); a.da.instance = new a.da
                })(); a.b("bindingProvider", a.da); (function () {
                    function b(b) { var c = (b = a.a.g.get(b, L)) && b.P; c && (b.P = p, c.Oc()) } function c(c, d, e) { this.node = c; this.sc = d; this.gb = []; this.X = !1; d.P || a.a.I.xa(c, b); e && e.P && (e.P.gb.push(c), this.Gb = e) } function d(a) { return function () { return a } } function e(a) { return a() } function f(b) { return a.a.Fa(a.u.K(b), function (a, c) { return function () { return b()[c] } }) }
                    function g(b, c, e) { return "function" === typeof b ? f(b.bind(null, c, e)) : a.a.Fa(b, d) } function h(a, b) { return f(this.getBindings.bind(this, a, b)) } function m(b, c) { var d = a.h.firstChild(c); if (d) { var e, f = a.da.instance, k = f.preprocessNode; if (k) { for (; e = d;)d = a.h.nextSibling(e), k.call(f, e); d = a.h.firstChild(c) } for (; e = d;)d = a.h.nextSibling(e), l(b, e) } a.m.Ya(c, a.m.X) } function l(b, c) {
                        var d = b, e = 1 === c.nodeType; e && a.h.Nc(c); if (e || a.da.instance.nodeHasBindings(c)) d = q(c, null, b).bindingContextForDescendants; d && !B[a.a.O(c)] && m(d,
                            c)
                    } function k(b) { var c = [], d = {}, e = []; a.a.N(b, function y(f) { if (!d[f]) { var l = a.getBindingHandler(f); l && (l.after && (e.push(f), a.a.B(l.after, function (c) { if (b[c]) { if (-1 !== a.a.C(e, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", ")); y(c) } }), e.length--), c.push({ key: f, Gc: l })); d[f] = !0 } }); return c } function q(b, c, d) {
                        if (!c) { var f = a.a.g.Ob(b, L, {}); if (f.context) throw Error("You cannot apply bindings multiple times to the same element."); f.context = d } var l; if (c &&
                            "function" !== typeof c) l = c; else { var g = a.da.instance, q = g.getBindingAccessors || h, n = a.Z(function () { if ((l = c ? c(d, b) : q.call(g, b, d)) && d[r]) d[r](); return l }, null, { j: b }); l && n.fa() || (n = null) } var m = d, B; if (l) {
                                var v = function () { return a.a.Fa(n ? n() : l, e) }, w = n ? function (a) { return function () { return e(n()[a]) } } : function (a) { return l[a] }; v.get = function (a) { return l[a] && e(w(a)) }; v.has = function (a) { return a in l }; a.m.X in l && a.m.subscribe(b, a.m.X, function () { var c = (0, l[a.m.X])(); if (c) { var d = a.h.childNodes(b); d.length && c(d, a.yc(d[0])) } });
                                a.m.Ba in l && (m = a.m.Vc(b, d), a.m.subscribe(b, a.m.Ba, function () { var c = (0, l[a.m.Ba])(); c && a.h.firstChild(b) && c(b) })); f = k(l); a.a.B(f, function (c) {
                                    var d = c.Gc.init, e = c.Gc.update, f = c.key; if (8 === b.nodeType && !a.h.ca[f]) throw Error("The binding '" + f + "' cannot be used with virtual elements"); try {
                                    "function" == typeof d && a.u.K(function () {
                                        var a = d(b, w(f), v, m.$data, m); if (a && a.controlsDescendantBindings) {
                                            if (B !== p) throw Error("Multiple bindings (" + B + " and " + f + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                            B = f
                                        }
                                    }), "function" == typeof e && a.Z(function () { e(b, w(f), v, m.$data, m) }, null, { j: b })
                                    } catch (k) { throw k.message = 'Unable to process binding "' + f + ": " + l[f] + '"\nMessage: ' + k.message, k; }
                                })
                            } f = B === p; return { shouldBindDescendants: f, bindingContextForDescendants: f && m }
                    } function n(b, c) { return b && b instanceof a.W ? b : new a.W(b, p, p, c) } var r = a.a.Qa("_subscribable"), w = a.a.Qa("_ancestorBindingInfo"); a.f = {}; var B = { script: !0, textarea: !0, template: !0 }; a.getBindingHandler = function (b) { return a.f[b] }; var v = {}; a.W = function (b, c, d, e,
                        f) { function l() { var b = q ? h() : h, f = a.a.c(b); if (c) { if (c[r]) c[r](); a.a.extend(k, c); w in c && (k[w] = c[w]) } else k.$parents = [], k.$root = f, k.ko = a; k[r] = n; g ? f = k.$data : (k.$rawData = b, k.$data = f); d && (k[d] = f); e && e(k, c, f); return k.$data } var k = this, g = b === v, h = g ? p : b, q = "function" == typeof h && !a.M(h), n; f && f.exportDependencies ? l() : (n = a.ub(l), n.w(), n.fa() ? n.equalityComparer = null : k[r] = p) }; a.W.prototype.createChildContext = function (b, c, d, e) {
                            if (c && !a.options.createChildContextWithAs) {
                                var f = "function" == typeof b && !a.M(b); return new a.W(v,
                                    this, null, function (a) { d && d(a); a[c] = f ? b() : b })
                            } return new a.W(b, this, c, function (a, b) { a.$parentContext = b; a.$parent = b.$data; a.$parents = (b.$parents || []).slice(0); a.$parents.unshift(a.$parent); d && d(a) }, e)
                        }; a.W.prototype.extend = function (b) { return new a.W(v, this, null, function (c) { a.a.extend(c, "function" == typeof b ? b(c) : b) }) }; a.W.prototype.od = function (a, b) { return this.createChildContext(a, b, null, { exportDependencies: !0 }) }; var L = a.a.g.V(); c.prototype.Oc = function () { this.Gb && this.Gb.P && this.Gb.P.qd(this.node) };
                    c.prototype.qd = function (b) { a.a.fb(this.gb, b); !this.gb.length && this.X && this.wc() }; c.prototype.wc = function () { this.X = !0; this.sc.P && !this.gb.length && (this.sc.P = p, a.a.I.vb(this.node, b), a.m.Ya(this.node, a.m.Ba), this.Oc()) }; a.m = {
                        X: "childrenComplete", Ba: "descendantsComplete", subscribe: function (b, c, d, e) { b = a.a.g.Ob(b, L, {}); b.Da || (b.Da = new a.R); return b.Da.subscribe(d, e, c) }, Ya: function (b, c) {
                            var d = a.a.g.get(b, L); if (d && (d.Da && d.Da.notifySubscribers(b, c), c == a.m.X)) if (d.P) d.P.wc(); else if (d.Da && d.Da.Ua(a.m.Ba)) throw Error("descendantsComplete event not supported for bindings on this node");
                        }, Vc: function (b, d) { var e = a.a.g.Ob(b, L, {}); if (d[w] == e) return d; e.P || (e.P = new c(b, e, d[w])); return d.extend(function (a) { a[w] = e }) }
                    }; a.Rd = function (b) { return (b = a.a.g.get(b, L)) && b.context }; a.bb = function (b, c, d) { 1 === b.nodeType && a.h.Nc(b); return q(b, c, n(d)) }; a.hd = function (b, c, d) { d = n(d); return a.bb(b, g(c, d, b), d) }; a.Na = function (a, b) { 1 !== b.nodeType && 8 !== b.nodeType || m(n(a), b) }; a.oc = function (a, b, c) {
                    !t && A.jQuery && (t = A.jQuery); if (!b) {
                        if (b = A.document.body, !b) throw Error("ko.applyBindings: could not find window.document.body; has the document been loaded?");
                    } else if (1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"); l(n(a, c), b)
                    }; a.xc = function (b) { return !b || 1 !== b.nodeType && 8 !== b.nodeType ? p : a.Rd(b) }; a.yc = function (b) { return (b = a.xc(b)) ? b.$data : p }; a.b("bindingHandlers", a.f); a.b("bindingEvent", a.m); a.b("bindingEvent.subscribe", a.m.subscribe); a.b("applyBindings", a.oc); a.b("applyBindingsToDescendants", a.Na); a.b("applyBindingAccessorsToNode", a.bb); a.b("applyBindingsToNode",
                        a.hd); a.b("contextFor", a.xc); a.b("dataFor", a.yc)
                })(); (function (b) {
                    function c(c, e) { var l = Object.prototype.hasOwnProperty.call(f, c) ? f[c] : b, k; l ? l.subscribe(e) : (l = f[c] = new a.R, l.subscribe(e), d(c, function (b, d) { var e = !(!d || !d.synchronous); g[c] = { definition: b, Ed: e }; delete f[c]; k || e ? l.notifySubscribers(b) : a.la.wb(function () { l.notifySubscribers(b) }) }), k = !0) } function d(a, b) { e("getConfig", [a], function (c) { c ? e("loadComponent", [a, c], function (a) { b(a, c) }) : b(null, null) }) } function e(c, d, f, k) {
                        k || (k = a.i.loaders.slice(0));
                        var g = k.shift(); if (g) { var n = g[c]; if (n) { var r = !1; if (n.apply(g, d.concat(function (a) { r ? f(null) : null !== a ? f(a) : e(c, d, f, k) })) !== b && (r = !0, !g.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously."); } else e(c, d, f, k) } else f(null)
                    } var f = {}, g = {}; a.i = {
                        get: function (d, e) { var f = Object.prototype.hasOwnProperty.call(g, d) ? g[d] : b; f ? f.Ed ? a.u.K(function () { e(f.definition) }) : a.la.wb(function () { e(f.definition) }) : c(d, e) }, vc: function (a) { delete g[a] },
                        fc: e
                    }; a.i.loaders = []; a.b("components", a.i); a.b("components.get", a.i.get); a.b("components.clearCachedDefinition", a.i.vc)
                })(); (function () {
                    function b(b, c, d, e) { function g() { 0 === --B && e(h) } var h = {}, B = 2, v = d.template; d = d.viewModel; v ? f(c, v, function (c) { a.i.fc("loadTemplate", [b, c], function (a) { h.template = a; g() }) }) : g(); d ? f(c, d, function (c) { a.i.fc("loadViewModel", [b, c], function (a) { h[m] = a; g() }) }) : g() } function c(a, b, d) {
                        if ("function" === typeof b) d(function (a) { return new b(a) }); else if ("function" === typeof b[m]) d(b[m]);
                        else if ("instance" in b) { var e = b.instance; d(function () { return e }) } else "viewModel" in b ? c(a, b.viewModel, d) : a("Unknown viewModel value: " + b)
                    } function d(b) { switch (a.a.O(b)) { case "script": return a.a.ra(b.text); case "textarea": return a.a.ra(b.value); case "template": if (e(b.content)) return a.a.Aa(b.content.childNodes) }return a.a.Aa(b.childNodes) } function e(a) { return A.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType } function f(a, b, c) {
                        "string" === typeof b.require ? Q || A.require ? (Q || A.require)([b.require],
                            c) : a("Uses require, but no AMD loader is present") : c(b)
                    } function g(a) { return function (b) { throw Error("Component '" + a + "': " + b); } } var h = {}; a.i.register = function (b, c) { if (!c) throw Error("Invalid configuration for " + b); if (a.i.qb(b)) throw Error("Component " + b + " is already registered"); h[b] = c }; a.i.qb = function (a) { return Object.prototype.hasOwnProperty.call(h, a) }; a.i.unregister = function (b) { delete h[b]; a.i.vc(b) }; a.i.zc = {
                        getConfig: function (b, c) { c(a.i.qb(b) ? h[b] : null) }, loadComponent: function (a, c, d) {
                            var e = g(a);
                            f(e, c, function (c) { b(a, e, c, d) })
                        }, loadTemplate: function (b, c, f) { b = g(b); if ("string" === typeof c) f(a.a.ra(c)); else if (c instanceof Array) f(c); else if (e(c)) f(a.a.ka(c.childNodes)); else if (c.element) if (c = c.element, A.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType) f(d(c)); else if ("string" === typeof c) { var h = x.getElementById(c); h ? f(d(h)) : b("Cannot find element with ID " + c) } else b("Unknown element type: " + c); else b("Unknown template value: " + c) }, loadViewModel: function (a, b, d) { c(g(a), b, d) }
                    }; var m =
                        "createViewModel"; a.b("components.register", a.i.register); a.b("components.isRegistered", a.i.qb); a.b("components.unregister", a.i.unregister); a.b("components.defaultLoader", a.i.zc); a.i.loaders.push(a.i.zc); a.i.$c = h
                })(); (function () {
                    function b(b, e) {
                        var f = b.getAttribute("params"); if (f) {
                            var f = c.parseBindingsString(f, e, b, { valueAccessors: !0, bindingParams: !0 }), f = a.a.Fa(f, function (c) { return a.v(c, null, { j: b }) }), g = a.a.Fa(f, function (c) {
                                var e = c.w(); return c.fa() ? a.v({
                                    read: function () { return a.a.c(c()) }, write: a.Wa(e) &&
                                        function (a) { c()(a) }, j: b
                                }) : e
                            }); Object.prototype.hasOwnProperty.call(g, "$raw") || (g.$raw = f); return g
                        } return { $raw: {} }
                    } a.i.getComponentNameForNode = function (b) { var c = a.a.O(b); if (a.i.qb(c) && (-1 != c.indexOf("-") || "[object HTMLUnknownElement]" == "" + b || 8 >= a.a.T && b.tagName === c)) return c }; a.i.mc = function (c, e, f, g) {
                        if (1 === e.nodeType) {
                            var h = a.i.getComponentNameForNode(e); if (h) {
                                c = c || {}; if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component'); var m = {
                                    name: h, params: b(e,
                                        f)
                                }; c.component = g ? function () { return m } : m
                            }
                        } return c
                    }; var c = new a.da; 9 > a.a.T && (a.i.register = function (a) { return function (b) { return a.apply(this, arguments) } }(a.i.register), x.createDocumentFragment = function (b) { return function () { var c = b(), f = a.i.$c, g; for (g in f); return c } }(x.createDocumentFragment))
                })(); (function (b) {
                    function c(b, c, d) { c = c.template; if (!c) throw Error("Component '" + b + "' has no template"); b = a.a.Aa(c); a.h.sa(d, b) } function d(a, b, c) { var d = a.createViewModel; return d ? d.call(a, b, c) : b } var e = 0; a.f.component =
                        {
                            init: function (f, g, h, m, l) {
                                function k() { var a = q && q.dispose; "function" === typeof a && a.call(q); r && r.o(); n = q = r = null } var q, n, r, w = a.a.ka(a.h.childNodes(f)); a.h.Ca(f); a.a.I.xa(f, k); a.v(function () {
                                    var h = a.a.c(g()), m, p; "string" === typeof h ? m = h : (m = a.a.c(h.name), p = a.a.c(h.params)); if (!m) throw Error("No component name specified"); var z = a.m.Vc(f, l), u = n = ++e; a.i.get(m, function (e) {
                                        if (n === u) {
                                            k(); if (!e) throw Error("Unknown component '" + m + "'"); c(m, e, f); var g = d(e, p, { element: f, templateNodes: w }); e = z.createChildContext(g,
                                                b, function (a) { a.$component = g; a.$componentTemplateNodes = w }); g && g.koDescendantsComplete && (r = a.m.subscribe(f, a.m.Ba, g.koDescendantsComplete, g)); q = g; a.Na(e, f)
                                        }
                                    })
                                }, null, { j: f }); return { controlsDescendantBindings: !0 }
                            }
                        }; a.h.ca.component = !0
                })(); var S = { "class": "className", "for": "htmlFor" }; a.f.attr = {
                    update: function (b, c) {
                        var d = a.a.c(c()) || {}; a.a.N(d, function (c, d) {
                            d = a.a.c(d); var g = c.indexOf(":"), g = "lookupNamespaceURI" in b && 0 < g && b.lookupNamespaceURI(c.substr(0, g)), h = !1 === d || null === d || d === p; h ? g ? b.removeAttributeNS(g,
                                c) : b.removeAttribute(c) : d = d.toString(); 8 >= a.a.T && c in S ? (c = S[c], h ? b.removeAttribute(c) : b[c] = d) : h || (g ? b.setAttributeNS(g, c, d) : b.setAttribute(c, d)); "name" === c && a.a.Tc(b, h ? "" : d)
                        })
                    }
                }; (function () {
                    a.f.checked = {
                        after: ["value", "attr"], init: function (b, c, d) {
                            function e() { var e = b.checked, f = g(); if (!a.ia.pb() && (e || !m && !a.ia.Ea())) { var l = a.u.K(c); if (k) { var n = q ? l.w() : l, z = r; r = f; z !== f ? e && (a.a.Ma(n, f, !0), a.a.Ma(n, z, !1)) : a.a.Ma(n, f, e); q && a.Wa(l) && l(n) } else h && (f === p ? f = e : e || (f = p)), a.l.Za(l, d, "checked", f, !0) } } function f() {
                                var d =
                                    a.a.c(c()), e = g(); k ? (b.checked = 0 <= a.a.C(d, e), r = e) : b.checked = h && e === p ? !!d : g() === d
                            } var g = a.ub(function () { if (d.has("checkedValue")) return a.a.c(d.get("checkedValue")); if (n) return d.has("value") ? a.a.c(d.get("value")) : b.value }), h = "checkbox" == b.type, m = "radio" == b.type; if (h || m) { var l = c(), k = h && a.a.c(l) instanceof Array, q = !(k && l.push && l.splice), n = m || k, r = k ? g() : p; m && !b.name && a.f.uniqueName.init(b, function () { return !0 }); a.v(e, null, { j: b }); a.a.H(b, "click", e); a.v(f, null, { j: b }); l = p }
                        }
                    }; a.l.ta.checked = !0; a.f.checkedValue =
                        { update: function (b, c) { b.value = a.a.c(c()) } }
                })(); a.f["class"] = { update: function (b, c) { var d = a.a.zb(a.a.c(c())); a.a.Bb(b, b.__ko__cssValue, !1); b.__ko__cssValue = d; a.a.Bb(b, d, !0) } }; a.f.css = { update: function (b, c) { var d = a.a.c(c()); null !== d && "object" == typeof d ? a.a.N(d, function (c, d) { d = a.a.c(d); a.a.Bb(b, c, d) }) : a.f["class"].update(b, c) } }; a.f.enable = { update: function (b, c) { var d = a.a.c(c()); d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0) } }; a.f.disable = {
                    update: function (b, c) {
                        a.f.enable.update(b,
                            function () { return !a.a.c(c()) })
                    }
                }; a.f.event = { init: function (b, c, d, e, f) { var g = c() || {}; a.a.N(g, function (g) { "string" == typeof g && a.a.H(b, g, function (b) { var l, k = c()[g]; if (k) { try { var q = a.a.ka(arguments); e = f.$data; q.unshift(e); l = k.apply(e, q) } finally { !0 !== l && (b.preventDefault ? b.preventDefault() : b.returnValue = !1) } !1 === d.get(g + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation()) } }) }) } }; a.f.foreach = {
                    Mc: function (b) {
                        return function () {
                            var c = b(), d = a.a.Ub(c); if (!d || "number" == typeof d.length) return {
                                foreach: c,
                                templateEngine: a.aa.La
                            }; a.a.c(c); return { foreach: d.data, as: d.as, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.aa.La }
                        }
                    }, init: function (b, c) { return a.f.template.init(b, a.f.foreach.Mc(c)) }, update: function (b, c, d, e, f) { return a.f.template.update(b, a.f.foreach.Mc(c), d, e, f) }
                }; a.l.Pa.foreach = !1; a.h.ca.foreach = !0; a.f.hasfocus = {
                    init: function (b, c, d) {
                        function e(e) {
                        b.__ko_hasfocusUpdating =
                            !0; var f = b.ownerDocument; if ("activeElement" in f) { var g; try { g = f.activeElement } catch (k) { g = f.body } e = g === b } f = c(); a.l.Za(f, d, "hasfocus", e, !0); b.__ko_hasfocusLastValue = e; b.__ko_hasfocusUpdating = !1
                        } var f = e.bind(null, !0), g = e.bind(null, !1); a.a.H(b, "focus", f); a.a.H(b, "focusin", f); a.a.H(b, "blur", g); a.a.H(b, "focusout", g); b.__ko_hasfocusLastValue = !1
                    }, update: function (b, c) {
                        var d = !!a.a.c(c()); b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(),
                            a.u.K(a.a.Cb, null, [b, d ? "focusin" : "focusout"]))
                    }
                }; a.l.ta.hasfocus = !0; a.f.hasFocus = a.f.hasfocus; a.l.ta.hasFocus = "hasfocus"; a.f.html = { init: function () { return { controlsDescendantBindings: !0 } }, update: function (b, c) { a.a.Yb(b, c()) } }; (function () {
                    function b(b, d, e) {
                    a.f[b] = {
                        init: function (b, c, h, m, l) {
                            var k, q, n, r; d ? n = (q = h.get("as")) && !a.options.createChildContextWithAs : n = !0; n && (r = a.v(function () { return !e !== !a.a.c(c()) }, null, { j: b })); a.v(function () {
                                var e, h, m = !k; n ? h = r() : (e = a.a.c(c()), h = !!e); m && a.ia.Ea() && (k = a.a.Aa(a.h.childNodes(b),
                                    !0)); h ? (m || a.h.sa(b, a.a.Aa(k)), e = d ? l.createChildContext("function" == typeof e ? e : c, q) : r.fa() ? l.extend(function () { r(); return null }) : l, a.Na(e, b)) : a.h.Ca(b)
                            }, null, { j: b }); return { controlsDescendantBindings: !0 }
                        }
                    }; a.l.Pa[b] = !1; a.h.ca[b] = !0
                    } b("if"); b("ifnot", !1, !0); b("with", !0)
                })(); a.f.let = { init: function (b, c, d, e, f) { c = f.extend(c); a.Na(c, b); return { controlsDescendantBindings: !0 } } }; a.h.ca.let = !0; var N = {}; a.f.options = {
                    init: function (b) {
                        if ("select" !== a.a.O(b)) throw Error("options binding applies only to SELECT elements");
                        for (; 0 < b.length;)b.remove(0); return { controlsDescendantBindings: !0 }
                    }, update: function (b, c, d) {
                        function e() { return a.a.cb(b.options, function (a) { return a.selected }) } function f(a, b, c) { var d = typeof b; return "function" == d ? b(a) : "string" == d ? a[b] : c } function g(c, e) { if (w && k) a.s.wa(b, a.a.c(d.get("value")), !0); else if (r.length) { var f = 0 <= a.a.C(r, a.s.L(e[0])); a.a.Uc(e[0], f); w && !f && a.u.K(a.a.Cb, null, [b, "change"]) } } var h = b.multiple, m = 0 != b.length && h ? b.scrollTop : null, l = a.a.c(c()), k = d.get("valueAllowUnset") && d.has("value"),
                            q = d.get("optionsIncludeDestroyed"); c = {}; var n, r = []; k || (h ? r = a.a.Hb(e(), a.s.L) : 0 <= b.selectedIndex && r.push(a.s.L(b.options[b.selectedIndex]))); l && ("undefined" == typeof l.length && (l = [l]), n = a.a.cb(l, function (b) { return q || b === p || null === b || !a.a.c(b._destroy) }), d.has("optionsCaption") && (l = a.a.c(d.get("optionsCaption")), null !== l && l !== p && n.unshift(N))); var w = !1; c.beforeRemove = function (a) { b.removeChild(a) }; l = g; d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (l = function (b, c) {
                                g(0, c);
                                a.u.K(d.get("optionsAfterRender"), null, [c[0], b !== N ? b : p])
                            }); a.a.Xb(b, n, function (c, e, g) { g.length && (r = !k && g[0].selected ? [a.s.L(g[0])] : [], w = !0); e = b.ownerDocument.createElement("option"); c === N ? (a.a.yb(e, d.get("optionsCaption")), a.s.wa(e, p)) : (g = f(c, d.get("optionsValue"), c), a.s.wa(e, a.a.c(g)), c = f(c, d.get("optionsText"), g), a.a.yb(e, c)); return [e] }, c, l); a.u.K(function () {
                                if (k) a.s.wa(b, a.a.c(d.get("value")), !0); else {
                                    var c; h ? c = r.length && e().length < r.length : c = r.length && 0 <= b.selectedIndex ? a.s.L(b.options[b.selectedIndex]) !==
                                        r[0] : r.length || 0 <= b.selectedIndex; c && a.a.Cb(b, "change")
                                }
                            }); a.a.ud(b); m && 20 < Math.abs(m - b.scrollTop) && (b.scrollTop = m)
                    }
                }; a.f.options.Sb = a.a.g.V(); a.f.selectedOptions = {
                    after: ["options", "foreach"], init: function (b, c, d) { a.a.H(b, "change", function () { var e = c(), f = []; a.a.B(b.getElementsByTagName("option"), function (b) { b.selected && f.push(a.s.L(b)) }); a.l.Za(e, d, "selectedOptions", f) }) }, update: function (b, c) {
                        if ("select" != a.a.O(b)) throw Error("values binding applies only to SELECT elements"); var d = a.a.c(c()), e = b.scrollTop;
                        d && "number" == typeof d.length && a.a.B(b.getElementsByTagName("option"), function (b) { var c = 0 <= a.a.C(d, a.s.L(b)); b.selected != c && a.a.Uc(b, c) }); b.scrollTop = e
                    }
                }; a.l.ta.selectedOptions = !0; a.f.style = { update: function (b, c) { var d = a.a.c(c() || {}); a.a.N(d, function (c, d) { d = a.a.c(d); if (null === d || d === p || !1 === d) d = ""; t ? t(b).css(c, d) : (c = c.replace(/-(\w)/g, function (a, b) { return b.toUpperCase() }), b.style[c] = d, "" === d || "" != b.style[c] || isNaN(d) || (b.style[c] = d + "px")) }) } }; a.f.submit = {
                    init: function (b, c, d, e, f) {
                        if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
                        a.a.H(b, "submit", function (a) { var d, e = c(); try { d = e.call(f.$data, b) } finally { !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) } })
                    }
                }; a.f.text = { init: function () { return { controlsDescendantBindings: !0 } }, update: function (b, c) { a.a.yb(b, c()) } }; a.h.ca.text = !0; (function () {
                    if (A && A.navigator) {
                        var b = function (a) { if (a) return parseFloat(a[1]) }, c = A.navigator.userAgent, d, e, f, g, h; (d = A.opera && A.opera.version && parseInt(A.opera.version())) || (h = b(c.match(/Edge\/([^ ]+)$/))) || b(c.match(/Chrome\/([^ ]+)/)) || (e = b(c.match(/Version\/([^ ]+) Safari/))) ||
                            (f = b(c.match(/Firefox\/([^ ]+)/))) || (g = a.a.T || b(c.match(/MSIE ([^ ]+)/))) || (g = b(c.match(/rv:([^ )]+)/)))
                    } if (8 <= g && 10 > g) var m = a.a.g.V(), l = a.a.g.V(), k = function (b) { var c = this.activeElement; (c = c && a.a.g.get(c, l)) && c(b) }, q = function (b, c) { var d = b.ownerDocument; a.a.g.get(d, m) || (a.a.g.set(d, m, !0), a.a.H(d, "selectionchange", k)); a.a.g.set(b, l, c) }; a.f.textInput = {
                        init: function (b, c, l) {
                            function k(c, d) { a.a.H(b, c, d) } function m() {
                                var d = a.a.c(c()); if (null === d || d === p) d = ""; x !== p && d === x ? a.a.setTimeout(m, 4) : b.value !== d &&
                                    (y = !0, b.value = d, y = !1, t = b.value)
                            } function u() { K || (x = b.value, K = a.a.setTimeout(z, 4)) } function z() { clearTimeout(K); x = K = p; var d = b.value; t !== d && (t = d, a.l.Za(c(), l, "textInput", d)) } var t = b.value, K, x, A = 9 == a.a.T ? u : z, y = !1; g && k("keypress", z); 11 > g && k("propertychange", function (a) { y || "value" !== a.propertyName || A(a) }); 8 == g && (k("keyup", z), k("keydown", z)); q && (q(b, A), k("dragend", u)); (!g || 9 <= g) && k("input", A); 5 > e && "textarea" === a.a.O(b) ? (k("keydown", u), k("paste", u), k("cut", u)) : 11 > d ? k("keydown", u) : 4 > f ? (k("DOMAutoComplete",
                                z), k("dragdrop", z), k("drop", z)) : h && "number" === b.type && k("keydown", u); k("change", z); k("blur", z); a.v(m, null, { j: b })
                        }
                    }; a.l.ta.textInput = !0; a.f.textinput = { preprocess: function (a, b, c) { c("textInput", a) } }
                })(); a.f.uniqueName = { init: function (b, c) { if (c()) { var d = "ko_unique_" + ++a.f.uniqueName.pd; a.a.Tc(b, d) } } }; a.f.uniqueName.pd = 0; a.f.using = { init: function (b, c, d, e, f) { c = f.createChildContext(c); a.Na(c, b); return { controlsDescendantBindings: !0 } } }; a.h.ca.using = !0; a.f.value = {
                    after: ["options", "foreach"], init: function (b,
                        c, d) {
                            var e = a.a.O(b), f = "input" == e; if (!f || "checkbox" != b.type && "radio" != b.type) {
                                var g = ["change"], h = d.get("valueUpdate"), m = !1, l = null; h && ("string" == typeof h && (h = [h]), a.a.eb(g, h), g = a.a.qc(g)); var k = function () { l = null; m = !1; var e = c(), f = a.s.L(b); a.l.Za(e, d, "value", f) }; !a.a.T || !f || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.C(g, "propertychange") || (a.a.H(b, "propertychange", function () { m = !0 }), a.a.H(b, "focus", function () { m = !1 }), a.a.H(b, "blur", function () { m && k() })); a.a.B(g, function (c) {
                                    var d =
                                        k; a.a.Sd(c, "after") && (d = function () { l = a.s.L(b); a.a.setTimeout(k, 0) }, c = c.substring(5)); a.a.H(b, c, d)
                                }); var q; q = f && "file" == b.type ? function () { var d = a.a.c(c()); null === d || d === p || "" === d ? b.value = "" : a.u.K(k) } : function () { var f = a.a.c(c()), g = a.s.L(b); if (null !== l && f === l) a.a.setTimeout(q, 0); else if (f !== g || g === p) "select" === e ? (g = d.get("valueAllowUnset"), a.s.wa(b, f, g), g || f === a.s.L(b) || a.u.K(k)) : a.s.wa(b, f) }; a.v(q, null, { j: b })
                            } else a.bb(b, { checkedValue: c })
                    }, update: function () { }
                }; a.l.ta.value = !0; a.f.visible = {
                    update: function (b,
                        c) { var d = a.a.c(c()), e = "none" != b.style.display; d && !e ? b.style.display = "" : !d && e && (b.style.display = "none") }
                }; a.f.hidden = { update: function (b, c) { a.f.visible.update(b, function () { return !a.a.c(c()) }) } }; (function (b) { a.f[b] = { init: function (c, d, e, f, g) { return a.f.event.init.call(this, c, function () { var a = {}; a[b] = d(); return a }, e, f, g) } } })("click"); a.ba = function () { }; a.ba.prototype.renderTemplateSource = function () { throw Error("Override renderTemplateSource"); }; a.ba.prototype.createJavaScriptEvaluatorBlock = function () {
                    throw Error("Override createJavaScriptEvaluatorBlock");
                }; a.ba.prototype.makeTemplateSource = function (b, c) { if ("string" == typeof b) { c = c || x; var d = c.getElementById(b); if (!d) throw Error("Cannot find template with ID " + b); return new a.A.D(d) } if (1 == b.nodeType || 8 == b.nodeType) return new a.A.ha(b); throw Error("Unknown template type: " + b); }; a.ba.prototype.renderTemplate = function (a, c, d, e) { a = this.makeTemplateSource(a, e); return this.renderTemplateSource(a, c, d, e) }; a.ba.prototype.isTemplateRewritten = function (a, c) {
                    return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a,
                        c).data("isRewritten")
                }; a.ba.prototype.rewriteTemplate = function (a, c, d) { a = this.makeTemplateSource(a, d); c = c(a.text()); a.text(c); a.data("isRewritten", !0) }; a.b("templateEngine", a.ba); a.cc = function () {
                    function b(b, c, d, h) {
                        b = a.l.Tb(b); for (var m = a.l.Pa, l = 0; l < b.length; l++) {
                            var k = b[l].key; if (Object.prototype.hasOwnProperty.call(m, k)) {
                                var q = m[k]; if ("function" === typeof q) { if (k = q(b[l].value)) throw Error(k); } else if (!q) throw Error("This template engine does not support the '" + k + "' binding within its templates");
                            }
                        } d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.l.sb(b, { valueAccessors: !0 }) + " } })()},'" + d.toLowerCase() + "')"; return h.createJavaScriptEvaluatorBlock(d) + c
                    } var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g; return {
                        vd: function (b, c, d) { c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) { return a.cc.Jd(b, c) }, d) }, Jd: function (a, f) {
                            return a.replace(c,
                                function (a, c, d, e, k) { return b(k, c, d, f) }).replace(d, function (a, c) { return b(c, "\x3c!-- ko --\x3e", "#comment", f) })
                        }, jd: function (b, c) { return a.$.Qb(function (d, h) { var m = d.nextSibling; m && m.nodeName.toLowerCase() === c && a.bb(m, b, h) }) }
                    }
                }(); a.b("__tr_ambtns", a.cc.jd); (function () {
                a.A = {}; a.A.D = function (b) { if (this.D = b) { var c = a.a.O(b); this.Ab = "script" === c ? 1 : "textarea" === c ? 2 : "template" == c && b.content && 11 === b.content.nodeType ? 3 : 4 } }; a.A.D.prototype.text = function () {
                    var b = 1 === this.Ab ? "text" : 2 === this.Ab ? "value" : "innerHTML";
                    if (0 == arguments.length) return this.D[b]; var c = arguments[0]; "innerHTML" === b ? a.a.Yb(this.D, c) : this.D[b] = c
                }; var b = a.a.g.V() + "_"; a.A.D.prototype.data = function (c) { if (1 === arguments.length) return a.a.g.get(this.D, b + c); a.a.g.set(this.D, b + c, arguments[1]) }; var c = a.a.g.V(); a.A.D.prototype.nodes = function () {
                    var b = this.D; if (0 == arguments.length) {
                        var e = a.a.g.get(b, c) || {}, f = e.hb || (3 === this.Ab ? b.content : 4 === this.Ab ? b : p); if (!f || e.fd) if (e = this.text()) f = a.a.Kd(e, b.ownerDocument), this.text(""), a.a.g.set(b, c, { hb: f, fd: !0 });
                        return f
                    } a.a.g.set(b, c, { hb: arguments[0] })
                }; a.A.ha = function (a) { this.D = a }; a.A.ha.prototype = new a.A.D; a.A.ha.prototype.constructor = a.A.ha; a.A.ha.prototype.text = function () { if (0 == arguments.length) { var b = a.a.g.get(this.D, c) || {}; b.dc === p && b.hb && (b.dc = b.hb.innerHTML); return b.dc } a.a.g.set(this.D, c, { dc: arguments[0] }) }; a.b("templateSources", a.A); a.b("templateSources.domElement", a.A.D); a.b("templateSources.anonymousTemplate", a.A.ha)
                })(); (function () {
                    function b(b, c, d) {
                        var e; for (c = a.h.nextSibling(c); b && (e = b) !==
                            c;)b = a.h.nextSibling(e), d(e, b)
                    } function c(c, d) { if (c.length) { var e = c[0], f = c[c.length - 1], g = e.parentNode, h = a.da.instance, m = h.preprocessNode; if (m) { b(e, f, function (a, b) { var c = a.previousSibling, d = m.call(h, a); d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c)) }); c.length = 0; if (!e) return; e === f ? c.push(e) : (c.push(e, f), a.a.Ta(c, g)) } b(e, f, function (b) { 1 !== b.nodeType && 8 !== b.nodeType || a.oc(d, b) }); b(e, f, function (b) { 1 !== b.nodeType && 8 !== b.nodeType || a.$.Zc(b, [d]) }); a.a.Ta(c, g) } } function d(a) {
                        return a.nodeType ? a : 0 < a.length ?
                            a[0] : null
                    } function e(b, e, f, h, m) {
                        m = m || {}; var p = (b && d(b) || f || {}).ownerDocument, B = m.templateEngine || g; a.cc.vd(f, B, p); f = B.renderTemplate(f, h, m, p); if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes"); p = !1; switch (e) { case "replaceChildren": a.h.sa(b, f); p = !0; break; case "replaceNode": a.a.Sc(b, f); p = !0; break; case "ignoreTargetNode": break; default: throw Error("Unknown renderMode: " + e); }p && (c(f, h), m.afterRender && a.u.K(m.afterRender,
                            null, [f, h.$data]), "replaceChildren" == e && a.m.Ya(b, a.m.X)); return f
                    } function f(b, c, d) { return a.M(b) ? b() : "function" === typeof b ? b(c, d) : b } var g; a.Zb = function (b) { if (b != p && !(b instanceof a.ba)) throw Error("templateEngine must inherit from ko.templateEngine"); g = b }; a.Wb = function (b, c, h, m, r) {
                        h = h || {}; if ((h.templateEngine || g) == p) throw Error("Set a template engine before calling renderTemplate"); r = r || "replaceChildren"; if (m) {
                            var w = d(m); return a.Z(function () {
                                var g = c && c instanceof a.W ? c : new a.W(c, null, null, null, { exportDependencies: !0 }),
                                p = f(b, g.$data, g), g = e(m, r, p, g, h); "replaceNode" == r && (m = g, w = d(m))
                            }, null, { Ra: function () { return !w || !a.a.Mb(w) }, j: w && "replaceNode" == r ? w.parentNode : w })
                        } return a.$.Qb(function (d) { a.Wb(b, c, h, d, "replaceNode") })
                    }; a.Od = function (b, d, g, h, m) {
                        function w(b, c) { a.u.K(a.a.Xb, null, [h, b, v, g, u, c]); a.m.Ya(h, a.m.X) } function u(a, b) { c(b, t); g.afterRender && g.afterRender(b, a); t = null } function v(a, c) { t = m.createChildContext(a, g.as, function (a) { a.$index = c }); var d = f(b, a, t); return e(h, "ignoreTargetNode", d, t, g) } var t, z = !1 === g.includeDestroyed ||
                            a.options.foreachHidesDestroyed && !g.includeDestroyed; if (z || g.beforeRemove || !a.Kc(d)) return a.Z(function () { var b = a.a.c(d) || []; "undefined" == typeof b.length && (b = [b]); z && (b = a.a.cb(b, function (b) { return b === p || null === b || !a.a.c(b._destroy) })); w(b) }, null, { j: h }); w(d.w()); var x = d.subscribe(function (a) { w(d(), a) }, null, "arrayChange"); x.j(h); return x
                    }; var h = a.a.g.V(), m = a.a.g.V(); a.f.template = {
                        init: function (b, c) {
                            var d = a.a.c(c()); if ("string" == typeof d || d.name) a.h.Ca(b); else if ("nodes" in d) {
                                d = d.nodes || []; if (a.M(d)) throw Error('The "nodes" option must be a plain, non-observable array.');
                                var e = d[0] && d[0].parentNode; e && a.a.g.get(e, m) || (e = a.a.Rb(d), a.a.g.set(e, m, !0)); (new a.A.ha(b)).nodes(e)
                            } else if (d = a.h.childNodes(b), 0 < d.length) e = a.a.Rb(d), (new a.A.ha(b)).nodes(e); else throw Error("Anonymous template defined, but no template content was provided"); return { controlsDescendantBindings: !0 }
                        }, update: function (b, c, d, e, f) {
                            var g = c(); c = a.a.c(g); d = !0; e = null; "string" == typeof c ? c = {} : (g = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot))); "foreach" in c ? e = a.Od(g || b, d && c.foreach ||
                                [], c, b, f) : d ? (f = "data" in c ? f.od(c.data, c.as) : f, e = a.Wb(g || b, f, c, b)) : a.h.Ca(b); f = e; (c = a.a.g.get(b, h)) && "function" == typeof c.o && c.o(); a.a.g.set(b, h, !f || f.fa && !f.fa() ? p : f)
                        }
                    }; a.l.Pa.template = function (b) { b = a.l.Tb(b); return 1 == b.length && b[0].unknown || a.l.Gd(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates" }; a.h.ca.template = !0
                })(); a.b("setTemplateEngine", a.Zb); a.b("renderTemplate", a.Wb); a.a.Ec = function (a, c, d) {
                    if (a.length && c.length) {
                        var e, f, g, h, m; for (e = f =
                            0; (!d || e < d) && (h = a[f]); ++f) { for (g = 0; m = c[g]; ++g)if (h.value === m.value) { h.moved = m.index; m.moved = h.index; c.splice(g, 1); e = g = 0; break } e += g }
                    }
                }; a.a.Jb = function () {
                    function b(b, d, e, f, g) {
                        var h = Math.min, m = Math.max, l = [], k, p = b.length, n, r = d.length, w = r - p || 1, u = p + r + 1, v, t, z; for (k = 0; k <= p; k++)for (t = v, l.push(v = []), z = h(r, k + w), n = m(0, k - 1); n <= z; n++)v[n] = n ? k ? b[k - 1] === d[n - 1] ? t[n - 1] : h(t[n] || u, v[n - 1] || u) + 1 : n + 1 : k + 1; h = []; m = []; w = []; k = p; for (n = r; k || n;)r = l[k][n] - 1, n && r === l[k][n - 1] ? m.push(h[h.length] = { status: e, value: d[--n], index: n }) : k &&
                            r === l[k - 1][n] ? w.push(h[h.length] = { status: f, value: b[--k], index: k }) : (--n, --k, g.sparse || h.push({ status: "retained", value: d[n] })); a.a.Ec(w, m, !g.dontLimitMoves && 10 * p); return h.reverse()
                    } return function (a, d, e) { e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {}; a = a || []; d = d || []; return a.length < d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e) }
                }(); a.b("utils.compareArrays", a.a.Jb); (function () {
                    function b(b, c, d, h, m) {
                        var l = [], k = a.Z(function () {
                            var k = c(d, m, a.a.Ta(l, b)) || []; 0 < l.length && (a.a.Sc(l, k), h &&
                                a.u.K(h, null, [d, k, m])); l.length = 0; a.a.eb(l, k)
                        }, null, { j: b, Ra: function () { return !a.a.gd(l) } }); return { pa: l, Z: k.fa() ? k : p }
                    } var c = a.a.g.V(), d = a.a.g.V(); a.a.Xb = function (e, f, g, h, m, l) {
                        function k(b) { y = { ya: b, Pb: a.qa(x++) }; t.push(y); A.push(y); u || E.push(y) } function q(b) { y = r[b]; x !== b && D.push(y); y.Pb(x++); a.a.Ta(y.pa, e); t.push(y); A.push(y) } function n(b, c) { if (b) for (var d = 0, e = c.length; d < e; d++)a.a.B(c[d].pa, function (a) { b(a, d, c[d].ya) }) } f = f || []; "undefined" == typeof f.length && (f = [f]); h = h || {}; var r = a.a.g.get(e, c), u = !r,
                            t = [], v = 0, x = 0, z = [], A = [], C = [], D = [], E = [], y, I = 0; if (u) a.a.B(f, k); else {
                                if (!l || r && r._countWaitingForRemove) { var H = u ? [] : a.a.Hb(r, function (a) { return a.ya }); l = a.a.Jb(H, f, { dontLimitMoves: h.dontLimitMoves, sparse: !0 }) } for (var H = 0, F, G, J; F = l[H]; H++)switch (G = F.moved, J = F.index, F.status) {
                                    case "deleted": for (; v < J;)q(v++); G === p && (y = r[v], y.Z && (y.Z.o(), y.Z = p), a.a.Ta(y.pa, e).length && (h.beforeRemove && (t.push(y), A.push(y), I++ , y.ya === d ? y = null : C.push(y)), y && z.push.apply(z, y.pa))); v++; break; case "added": for (; x < J;)q(v++); G !==
                                        p ? q(G) : k(F.value)
                                }for (; x < f.length;)q(v++); t._countWaitingForRemove = I
                            } a.a.g.set(e, c, t); n(h.beforeMove, D); a.a.B(z, h.beforeRemove ? a.ma : a.removeNode); H = 0; f = a.h.firstChild(e); for (var M; y = A[H]; H++) { y.pa || a.a.extend(y, b(e, g, y.ya, m, y.Pb)); for (z = 0; v = y.pa[z]; f = v.nextSibling, M = v, z++)v !== f && a.h.Ic(e, v, M); !y.Cd && m && (m(y.ya, y.pa, y.Pb), y.Cd = !0) } n(h.beforeRemove, C); for (H = 0; H < C.length; ++H)C[H].ya = d; n(h.afterMove, D); n(h.afterAdd, E)
                    }
                })(); a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Xb); a.aa = function () {
                this.allowTemplateRewriting =
                    !1
                }; a.aa.prototype = new a.ba; a.aa.prototype.constructor = a.aa; a.aa.prototype.renderTemplateSource = function (b, c, d, e) { if (c = (9 > a.a.T ? 0 : b.nodes) ? b.nodes() : null) return a.a.ka(c.cloneNode(!0).childNodes); b = b.text(); return a.a.ra(b, e) }; a.aa.La = new a.aa; a.Zb(a.aa.La); a.b("nativeTemplateEngine", a.aa); (function () {
                a.Xa = function () {
                    var a = this.Fd = function () { if (!t || !t.tmpl) return 0; try { if (0 <= t.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2 } catch (a) { } return 1 }(); this.renderTemplateSource = function (b, e, f, g) {
                        g =
                        g || x; f = f || {}; if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."); var h = b.data("precompiled"); h || (h = b.text() || "", h = t.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h)); b = [e.$data]; e = t.extend({ koBindingContext: e }, f.templateOptions); e = t.tmpl(h, b, e); e.appendTo(g.createElement("div")); t.fragments = {}; return e
                    }; this.createJavaScriptEvaluatorBlock = function (a) { return "{{ko_code ((function() { return " + a + " })()) }}" };
                    this.addTemplate = function (a, b) { x.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>") }; 0 < a && (t.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, t.tmpl.tag.ko_with = { open: "with($1) {", close: "} " })
                }; a.Xa.prototype = new a.ba; a.Xa.prototype.constructor = a.Xa; var b = new a.Xa; 0 < b.Fd && a.Zb(b); a.b("jqueryTmplTemplateEngine", a.Xa)
                })()
        })
    })();
})();