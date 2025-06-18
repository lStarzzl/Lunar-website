import {r as y, R as og, F as ag} from "./monaco-Dj3DcQT7.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
var $h = {
    exports: {}
}
  , Qs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lg = y
  , ug = Symbol.for("react.element")
  , cg = Symbol.for("react.fragment")
  , dg = Object.prototype.hasOwnProperty
  , hg = lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , fg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Kh(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        dg.call(t, r) && !fg.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: ug,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: hg.current
    }
}
Qs.Fragment = cg;
Qs.jsx = Kh;
Qs.jsxs = Kh;
$h.exports = Qs;
var a = $h.exports
  , Xh = {
    exports: {}
}
  , Ue = {}
  , Gh = {
    exports: {}
}
  , Yh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(R, V) {
        var I = R.length;
        R.push(V);
        e: for (; 0 < I; ) {
            var K = I - 1 >>> 1
              , ae = R[K];
            if (0 < i(ae, V))
                R[K] = V,
                R[I] = ae,
                I = K;
            else
                break e
        }
    }
    function n(R) {
        return R.length === 0 ? null : R[0]
    }
    function r(R) {
        if (R.length === 0)
            return null;
        var V = R[0]
          , I = R.pop();
        if (I !== V) {
            R[0] = I;
            e: for (var K = 0, ae = R.length, et = ae >>> 1; K < et; ) {
                var wt = 2 * (K + 1) - 1
                  , kr = R[wt]
                  , jt = wt + 1
                  , We = R[jt];
                if (0 > i(kr, I))
                    jt < ae && 0 > i(We, kr) ? (R[K] = We,
                    R[jt] = I,
                    K = jt) : (R[K] = kr,
                    R[wt] = I,
                    K = wt);
                else if (jt < ae && 0 > i(We, I))
                    R[K] = We,
                    R[jt] = I,
                    K = jt;
                else
                    break e
            }
        }
        return V
    }
    function i(R, V) {
        var I = R.sortIndex - V.sortIndex;
        return I !== 0 ? I : R.id - V.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var u = []
      , c = []
      , d = 1
      , h = null
      , f = 3
      , v = !1
      , x = !1
      , w = !1
      , b = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(R) {
        for (var V = n(c); V !== null; ) {
            if (V.callback === null)
                r(c);
            else if (V.startTime <= R)
                r(c),
                V.sortIndex = V.expirationTime,
                t(u, V);
            else
                break;
            V = n(c)
        }
    }
    function S(R) {
        if (w = !1,
        g(R),
        !x)
            if (n(u) !== null)
                x = !0,
                Ft(N);
            else {
                var V = n(c);
                V !== null && q(S, V.startTime - R)
            }
    }
    function N(R, V) {
        x = !1,
        w && (w = !1,
        m(T),
        T = -1),
        v = !0;
        var I = f;
        try {
            for (g(V),
            h = n(u); h !== null && (!(h.expirationTime > V) || R && !F()); ) {
                var K = h.callback;
                if (typeof K == "function") {
                    h.callback = null,
                    f = h.priorityLevel;
                    var ae = K(h.expirationTime <= V);
                    V = e.unstable_now(),
                    typeof ae == "function" ? h.callback = ae : h === n(u) && r(u),
                    g(V)
                } else
                    r(u);
                h = n(u)
            }
            if (h !== null)
                var et = !0;
            else {
                var wt = n(c);
                wt !== null && q(S, wt.startTime - V),
                et = !1
            }
            return et
        } finally {
            h = null,
            f = I,
            v = !1
        }
    }
    var C = !1
      , P = null
      , T = -1
      , L = 5
      , E = -1;
    function F() {
        return !(e.unstable_now() - E < L)
    }
    function J() {
        if (P !== null) {
            var R = e.unstable_now();
            E = R;
            var V = !0;
            try {
                V = P(!0, R)
            } finally {
                V ? ce() : (C = !1,
                P = null)
            }
        } else
            C = !1
    }
    var ce;
    if (typeof p == "function")
        ce = function() {
            p(J)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var ht = new MessageChannel
          , Li = ht.port2;
        ht.port1.onmessage = J,
        ce = function() {
            Li.postMessage(null)
        }
    } else
        ce = function() {
            b(J, 0)
        }
        ;
    function Ft(R) {
        P = R,
        C || (C = !0,
        ce())
    }
    function q(R, V) {
        T = b(function() {
            R(e.unstable_now())
        }, V)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(R) {
        R.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || v || (x = !0,
        Ft(N))
    }
    ,
    e.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < R ? Math.floor(1e3 / R) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(R) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var V = 3;
            break;
        default:
            V = f
        }
        var I = f;
        f = V;
        try {
            return R()
        } finally {
            f = I
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(R, V) {
        switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            R = 3
        }
        var I = f;
        f = R;
        try {
            return V()
        } finally {
            f = I
        }
    }
    ,
    e.unstable_scheduleCallback = function(R, V, I) {
        var K = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay,
        I = typeof I == "number" && 0 < I ? K + I : K) : I = K,
        R) {
        case 1:
            var ae = -1;
            break;
        case 2:
            ae = 250;
            break;
        case 5:
            ae = 1073741823;
            break;
        case 4:
            ae = 1e4;
            break;
        default:
            ae = 5e3
        }
        return ae = I + ae,
        R = {
            id: d++,
            callback: V,
            priorityLevel: R,
            startTime: I,
            expirationTime: ae,
            sortIndex: -1
        },
        I > K ? (R.sortIndex = I,
        t(c, R),
        n(u) === null && R === n(c) && (w ? (m(T),
        T = -1) : w = !0,
        q(S, I - K))) : (R.sortIndex = ae,
        t(u, R),
        x || v || (x = !0,
        Ft(N))),
        R
    }
    ,
    e.unstable_shouldYield = F,
    e.unstable_wrapCallback = function(R) {
        var V = f;
        return function() {
            var I = f;
            f = V;
            try {
                return R.apply(this, arguments)
            } finally {
                f = I
            }
        }
    }
}
)(Yh);
Gh.exports = Yh;
var pg = Gh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mg = y
  , ze = pg;
function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Zh = new Set
  , ei = {};
function Rn(e, t) {
    ur(e, t),
    ur(e + "Capture", t)
}
function ur(e, t) {
    for (ei[e] = t,
    e = 0; e < t.length; e++)
        Zh.add(t[e])
}
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , aa = Object.prototype.hasOwnProperty
  , gg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , oc = {}
  , ac = {};
function vg(e) {
    return aa.call(ac, e) ? !0 : aa.call(oc, e) ? !1 : gg.test(e) ? ac[e] = !0 : (oc[e] = !0,
    !1)
}
function yg(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function xg(e, t, n, r) {
    if (t === null || typeof t > "u" || yg(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Me(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    je[e] = new Me(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    je[t] = new Me(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    je[e] = new Me(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    je[e] = new Me(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    je[e] = new Me(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    je[e] = new Me(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    je[e] = new Me(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    je[e] = new Me(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    je[e] = new Me(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Nl = /[\-:]([a-z])/g;
function Sl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Nl, Sl);
    je[t] = new Me(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Nl, Sl);
    je[t] = new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Nl, Sl);
    je[t] = new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    je[e] = new Me(e,1,!1,e.toLowerCase(),null,!1,!1)
});
je.xlinkHref = new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    je[e] = new Me(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function kl(e, t, n, r) {
    var i = je.hasOwnProperty(t) ? je[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (xg(t, n, i, r) && (n = null),
    r || i === null ? vg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Vt = mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Vi = Symbol.for("react.element")
  , zn = Symbol.for("react.portal")
  , Bn = Symbol.for("react.fragment")
  , bl = Symbol.for("react.strict_mode")
  , la = Symbol.for("react.profiler")
  , Qh = Symbol.for("react.provider")
  , Jh = Symbol.for("react.context")
  , Cl = Symbol.for("react.forward_ref")
  , ua = Symbol.for("react.suspense")
  , ca = Symbol.for("react.suspense_list")
  , Tl = Symbol.for("react.memo")
  , Bt = Symbol.for("react.lazy")
  , qh = Symbol.for("react.offscreen")
  , lc = Symbol.iterator;
function br(e) {
    return e === null || typeof e != "object" ? null : (e = lc && e[lc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var re = Object.assign, jo;
function Lr(e) {
    if (jo === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            jo = t && t[1] || ""
        }
    return `
` + jo + e
}
var No = !1;
function So(e, t) {
    if (!e || No)
        return "";
    No = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (i[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || i[o] !== s[l]) {
                                var u = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        No = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Lr(e) : ""
}
function wg(e) {
    switch (e.tag) {
    case 5:
        return Lr(e.type);
    case 16:
        return Lr("Lazy");
    case 13:
        return Lr("Suspense");
    case 19:
        return Lr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = So(e.type, !1),
        e;
    case 11:
        return e = So(e.type.render, !1),
        e;
    case 1:
        return e = So(e.type, !0),
        e;
    default:
        return ""
    }
}
function da(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Bn:
        return "Fragment";
    case zn:
        return "Portal";
    case la:
        return "Profiler";
    case bl:
        return "StrictMode";
    case ua:
        return "Suspense";
    case ca:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Jh:
            return (e.displayName || "Context") + ".Consumer";
        case Qh:
            return (e._context.displayName || "Context") + ".Provider";
        case Cl:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Tl:
            return t = e.displayName || null,
            t !== null ? t : da(e.type) || "Memo";
        case Bt:
            t = e._payload,
            e = e._init;
            try {
                return da(e(t))
            } catch {}
        }
    return null
}
function jg(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return da(t);
    case 8:
        return t === bl ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function rn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ef(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Ng(e) {
    var t = ef(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function _i(e) {
    e._valueTracker || (e._valueTracker = Ng(e))
}
function tf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ef(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function gs(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ha(e, t) {
    var n = t.checked;
    return re({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function uc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = rn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function nf(e, t) {
    t = t.checked,
    t != null && kl(e, "checked", t, !1)
}
function fa(e, t) {
    nf(e, t);
    var n = rn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? pa(e, t.type, n) : t.hasOwnProperty("defaultValue") && pa(e, t.type, rn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function cc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function pa(e, t, n) {
    (t !== "number" || gs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ir = Array.isArray;
function rr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + rn(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function ma(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(M(91));
    return re({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function dc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(M(92));
            if (Ir(n)) {
                if (1 < n.length)
                    throw Error(M(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: rn(n)
    }
}
function rf(e, t) {
    var n = rn(t.value)
      , r = rn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function hc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function sf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ga(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? sf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Fi, of = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Fi = Fi || document.createElement("div"),
        Fi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Fi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function ti(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Br = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Sg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Br).forEach(function(e) {
    Sg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Br[t] = Br[e]
    })
});
function af(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Br.hasOwnProperty(e) && Br[e] ? ("" + t).trim() : t + "px"
}
function lf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = af(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var kg = re({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function va(e, t) {
    if (t) {
        if (kg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(M(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(M(62))
    }
}
function ya(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var xa = null;
function Pl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var wa = null
  , ir = null
  , sr = null;
function fc(e) {
    if (e = Ti(e)) {
        if (typeof wa != "function")
            throw Error(M(280));
        var t = e.stateNode;
        t && (t = no(t),
        wa(e.stateNode, e.type, t))
    }
}
function uf(e) {
    ir ? sr ? sr.push(e) : sr = [e] : ir = e
}
function cf() {
    if (ir) {
        var e = ir
          , t = sr;
        if (sr = ir = null,
        fc(e),
        t)
            for (e = 0; e < t.length; e++)
                fc(t[e])
    }
}
function df(e, t) {
    return e(t)
}
function hf() {}
var ko = !1;
function ff(e, t, n) {
    if (ko)
        return e(t, n);
    ko = !0;
    try {
        return df(e, t, n)
    } finally {
        ko = !1,
        (ir !== null || sr !== null) && (hf(),
        cf())
    }
}
function ni(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = no(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(M(231, t, typeof n));
    return n
}
var ja = !1;
if (Rt)
    try {
        var Cr = {};
        Object.defineProperty(Cr, "passive", {
            get: function() {
                ja = !0
            }
        }),
        window.addEventListener("test", Cr, Cr),
        window.removeEventListener("test", Cr, Cr)
    } catch {
        ja = !1
    }
function bg(e, t, n, r, i, s, o, l, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var Ur = !1
  , vs = null
  , ys = !1
  , Na = null
  , Cg = {
    onError: function(e) {
        Ur = !0,
        vs = e
    }
};
function Tg(e, t, n, r, i, s, o, l, u) {
    Ur = !1,
    vs = null,
    bg.apply(Cg, arguments)
}
function Pg(e, t, n, r, i, s, o, l, u) {
    if (Tg.apply(this, arguments),
    Ur) {
        if (Ur) {
            var c = vs;
            Ur = !1,
            vs = null
        } else
            throw Error(M(198));
        ys || (ys = !0,
        Na = c)
    }
}
function An(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function pf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function pc(e) {
    if (An(e) !== e)
        throw Error(M(188))
}
function Eg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = An(e),
        t === null)
            throw Error(M(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return pc(i),
                    e;
                if (s === r)
                    return pc(i),
                    t;
                s = s.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, l = i.child; l; ) {
                if (l === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (l === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (l === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(M(189))
            }
        }
        if (n.alternate !== r)
            throw Error(M(190))
    }
    if (n.tag !== 3)
        throw Error(M(188));
    return n.stateNode.current === n ? e : t
}
function mf(e) {
    return e = Eg(e),
    e !== null ? gf(e) : null
}
function gf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = gf(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var vf = ze.unstable_scheduleCallback
  , mc = ze.unstable_cancelCallback
  , Mg = ze.unstable_shouldYield
  , Rg = ze.unstable_requestPaint
  , ue = ze.unstable_now
  , Ag = ze.unstable_getCurrentPriorityLevel
  , El = ze.unstable_ImmediatePriority
  , yf = ze.unstable_UserBlockingPriority
  , xs = ze.unstable_NormalPriority
  , Dg = ze.unstable_LowPriority
  , xf = ze.unstable_IdlePriority
  , Js = null
  , gt = null;
function Lg(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function")
        try {
            gt.onCommitFiberRoot(Js, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var ut = Math.clz32 ? Math.clz32 : _g
  , Ig = Math.log
  , Vg = Math.LN2;
function _g(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Ig(e) / Vg | 0) | 0
}
var Oi = 64
  , zi = 4194304;
function Vr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ws(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = Vr(l) : (s &= o,
        s !== 0 && (r = Vr(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = Vr(o) : s !== 0 && (r = Vr(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - ut(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function Fg(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Og(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - ut(s)
          , l = 1 << o
          , u = i[o];
        u === -1 ? (!(l & n) || l & r) && (i[o] = Fg(l, t)) : u <= t && (e.expiredLanes |= l),
        s &= ~l
    }
}
function Sa(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function wf() {
    var e = Oi;
    return Oi <<= 1,
    !(Oi & 4194240) && (Oi = 64),
    e
}
function bo(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function bi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - ut(t),
    e[t] = n
}
function zg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - ut(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function Ml(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - ut(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var $ = 0;
function jf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Nf, Rl, Sf, kf, bf, ka = !1, Bi = [], Gt = null, Yt = null, Zt = null, ri = new Map, ii = new Map, Ht = [], Bg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function gc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Gt = null;
        break;
    case "dragenter":
    case "dragleave":
        Yt = null;
        break;
    case "mouseover":
    case "mouseout":
        Zt = null;
        break;
    case "pointerover":
    case "pointerout":
        ri.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ii.delete(t.pointerId)
    }
}
function Tr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = Ti(t),
    t !== null && Rl(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function Ug(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Gt = Tr(Gt, e, t, n, r, i),
        !0;
    case "dragenter":
        return Yt = Tr(Yt, e, t, n, r, i),
        !0;
    case "mouseover":
        return Zt = Tr(Zt, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return ri.set(s, Tr(ri.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        ii.set(s, Tr(ii.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Cf(e) {
    var t = yn(e.target);
    if (t !== null) {
        var n = An(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = pf(n),
                t !== null) {
                    e.blockedOn = t,
                    bf(e.priority, function() {
                        Sf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ns(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            xa = r,
            n.target.dispatchEvent(r),
            xa = null
        } else
            return t = Ti(n),
            t !== null && Rl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function vc(e, t, n) {
    ns(e) && n.delete(t)
}
function Hg() {
    ka = !1,
    Gt !== null && ns(Gt) && (Gt = null),
    Yt !== null && ns(Yt) && (Yt = null),
    Zt !== null && ns(Zt) && (Zt = null),
    ri.forEach(vc),
    ii.forEach(vc)
}
function Pr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ka || (ka = !0,
    ze.unstable_scheduleCallback(ze.unstable_NormalPriority, Hg)))
}
function si(e) {
    function t(i) {
        return Pr(i, e)
    }
    if (0 < Bi.length) {
        Pr(Bi[0], e);
        for (var n = 1; n < Bi.length; n++) {
            var r = Bi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Gt !== null && Pr(Gt, e),
    Yt !== null && Pr(Yt, e),
    Zt !== null && Pr(Zt, e),
    ri.forEach(t),
    ii.forEach(t),
    n = 0; n < Ht.length; n++)
        r = Ht[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ht.length && (n = Ht[0],
    n.blockedOn === null); )
        Cf(n),
        n.blockedOn === null && Ht.shift()
}
var or = Vt.ReactCurrentBatchConfig
  , js = !0;
function Wg(e, t, n, r) {
    var i = $
      , s = or.transition;
    or.transition = null;
    try {
        $ = 1,
        Al(e, t, n, r)
    } finally {
        $ = i,
        or.transition = s
    }
}
function $g(e, t, n, r) {
    var i = $
      , s = or.transition;
    or.transition = null;
    try {
        $ = 4,
        Al(e, t, n, r)
    } finally {
        $ = i,
        or.transition = s
    }
}
function Al(e, t, n, r) {
    if (js) {
        var i = ba(e, t, n, r);
        if (i === null)
            Io(e, t, r, Ns, n),
            gc(e, r);
        else if (Ug(i, e, t, n, r))
            r.stopPropagation();
        else if (gc(e, r),
        t & 4 && -1 < Bg.indexOf(e)) {
            for (; i !== null; ) {
                var s = Ti(i);
                if (s !== null && Nf(s),
                s = ba(e, t, n, r),
                s === null && Io(e, t, r, Ns, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            Io(e, t, r, null, n)
    }
}
var Ns = null;
function ba(e, t, n, r) {
    if (Ns = null,
    e = Pl(r),
    e = yn(e),
    e !== null)
        if (t = An(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = pf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ns = e,
    null
}
function Tf(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Ag()) {
        case El:
            return 1;
        case yf:
            return 4;
        case xs:
        case Dg:
            return 16;
        case xf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var $t = null
  , Dl = null
  , rs = null;
function Pf() {
    if (rs)
        return rs;
    var e, t = Dl, n = t.length, r, i = "value"in $t ? $t.value : $t.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return rs = i.slice(e, 1 < r ? 1 - r : void 0)
}
function is(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ui() {
    return !0
}
function yc() {
    return !1
}
function He(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ui : yc,
        this.isPropagationStopped = yc,
        this
    }
    return re(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ui)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ui)
        },
        persist: function() {},
        isPersistent: Ui
    }),
    t
}
var xr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ll = He(xr), Ci = re({}, xr, {
    view: 0,
    detail: 0
}), Kg = He(Ci), Co, To, Er, qs = re({}, Ci, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Il,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Er && (Er && e.type === "mousemove" ? (Co = e.screenX - Er.screenX,
        To = e.screenY - Er.screenY) : To = Co = 0,
        Er = e),
        Co)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : To
    }
}), xc = He(qs), Xg = re({}, qs, {
    dataTransfer: 0
}), Gg = He(Xg), Yg = re({}, Ci, {
    relatedTarget: 0
}), Po = He(Yg), Zg = re({}, xr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Qg = He(Zg), Jg = re({}, xr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), qg = He(Jg), ev = re({}, xr, {
    data: 0
}), wc = He(ev), tv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, nv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, rv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function iv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = rv[e]) ? !!t[e] : !1
}
function Il() {
    return iv
}
var sv = re({}, Ci, {
    key: function(e) {
        if (e.key) {
            var t = tv[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = is(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? nv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Il,
    charCode: function(e) {
        return e.type === "keypress" ? is(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? is(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , ov = He(sv)
  , av = re({}, qs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , jc = He(av)
  , lv = re({}, Ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Il
})
  , uv = He(lv)
  , cv = re({}, xr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , dv = He(cv)
  , hv = re({}, qs, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , fv = He(hv)
  , pv = [9, 13, 27, 32]
  , Vl = Rt && "CompositionEvent"in window
  , Hr = null;
Rt && "documentMode"in document && (Hr = document.documentMode);
var mv = Rt && "TextEvent"in window && !Hr
  , Ef = Rt && (!Vl || Hr && 8 < Hr && 11 >= Hr)
  , Nc = " "
  , Sc = !1;
function Mf(e, t) {
    switch (e) {
    case "keyup":
        return pv.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Rf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Un = !1;
function gv(e, t) {
    switch (e) {
    case "compositionend":
        return Rf(t);
    case "keypress":
        return t.which !== 32 ? null : (Sc = !0,
        Nc);
    case "textInput":
        return e = t.data,
        e === Nc && Sc ? null : e;
    default:
        return null
    }
}
function vv(e, t) {
    if (Un)
        return e === "compositionend" || !Vl && Mf(e, t) ? (e = Pf(),
        rs = Dl = $t = null,
        Un = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ef && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var yv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function kc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yv[e.type] : t === "textarea"
}
function Af(e, t, n, r) {
    uf(r),
    t = Ss(t, "onChange"),
    0 < t.length && (n = new Ll("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Wr = null
  , oi = null;
function xv(e) {
    Hf(e, 0)
}
function eo(e) {
    var t = $n(e);
    if (tf(t))
        return e
}
function wv(e, t) {
    if (e === "change")
        return t
}
var Df = !1;
if (Rt) {
    var Eo;
    if (Rt) {
        var Mo = "oninput"in document;
        if (!Mo) {
            var bc = document.createElement("div");
            bc.setAttribute("oninput", "return;"),
            Mo = typeof bc.oninput == "function"
        }
        Eo = Mo
    } else
        Eo = !1;
    Df = Eo && (!document.documentMode || 9 < document.documentMode)
}
function Cc() {
    Wr && (Wr.detachEvent("onpropertychange", Lf),
    oi = Wr = null)
}
function Lf(e) {
    if (e.propertyName === "value" && eo(oi)) {
        var t = [];
        Af(t, oi, e, Pl(e)),
        ff(xv, t)
    }
}
function jv(e, t, n) {
    e === "focusin" ? (Cc(),
    Wr = t,
    oi = n,
    Wr.attachEvent("onpropertychange", Lf)) : e === "focusout" && Cc()
}
function Nv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return eo(oi)
}
function Sv(e, t) {
    if (e === "click")
        return eo(t)
}
function kv(e, t) {
    if (e === "input" || e === "change")
        return eo(t)
}
function bv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var dt = typeof Object.is == "function" ? Object.is : bv;
function ai(e, t) {
    if (dt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!aa.call(t, i) || !dt(e[i], t[i]))
            return !1
    }
    return !0
}
function Tc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Pc(e, t) {
    var n = Tc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Tc(n)
    }
}
function If(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? If(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Vf() {
    for (var e = window, t = gs(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = gs(e.document)
    }
    return t
}
function _l(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Cv(e) {
    var t = Vf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && If(n.ownerDocument.documentElement, n)) {
        if (r !== null && _l(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = Pc(n, s);
                var o = Pc(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Tv = Rt && "documentMode"in document && 11 >= document.documentMode
  , Hn = null
  , Ca = null
  , $r = null
  , Ta = !1;
function Ec(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ta || Hn == null || Hn !== gs(r) || (r = Hn,
    "selectionStart"in r && _l(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    $r && ai($r, r) || ($r = r,
    r = Ss(Ca, "onSelect"),
    0 < r.length && (t = new Ll("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Hn)))
}
function Hi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Wn = {
    animationend: Hi("Animation", "AnimationEnd"),
    animationiteration: Hi("Animation", "AnimationIteration"),
    animationstart: Hi("Animation", "AnimationStart"),
    transitionend: Hi("Transition", "TransitionEnd")
}
  , Ro = {}
  , _f = {};
Rt && (_f = document.createElement("div").style,
"AnimationEvent"in window || (delete Wn.animationend.animation,
delete Wn.animationiteration.animation,
delete Wn.animationstart.animation),
"TransitionEvent"in window || delete Wn.transitionend.transition);
function to(e) {
    if (Ro[e])
        return Ro[e];
    if (!Wn[e])
        return e;
    var t = Wn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in _f)
            return Ro[e] = t[n];
    return e
}
var Ff = to("animationend")
  , Of = to("animationiteration")
  , zf = to("animationstart")
  , Bf = to("transitionend")
  , Uf = new Map
  , Mc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function un(e, t) {
    Uf.set(e, t),
    Rn(t, [e])
}
for (var Ao = 0; Ao < Mc.length; Ao++) {
    var Do = Mc[Ao]
      , Pv = Do.toLowerCase()
      , Ev = Do[0].toUpperCase() + Do.slice(1);
    un(Pv, "on" + Ev)
}
un(Ff, "onAnimationEnd");
un(Of, "onAnimationIteration");
un(zf, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(Bf, "onTransitionEnd");
ur("onMouseEnter", ["mouseout", "mouseover"]);
ur("onMouseLeave", ["mouseout", "mouseover"]);
ur("onPointerEnter", ["pointerout", "pointerover"]);
ur("onPointerLeave", ["pointerout", "pointerover"]);
Rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Mv = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
function Rc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Pg(r, t, void 0, e),
    e.currentTarget = null
}
function Hf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                      , u = l.instance
                      , c = l.currentTarget;
                    if (l = l.listener,
                    u !== s && i.isPropagationStopped())
                        break e;
                    Rc(i, l, c),
                    s = u
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                    u = l.instance,
                    c = l.currentTarget,
                    l = l.listener,
                    u !== s && i.isPropagationStopped())
                        break e;
                    Rc(i, l, c),
                    s = u
                }
        }
    }
    if (ys)
        throw e = Na,
        ys = !1,
        Na = null,
        e
}
function G(e, t) {
    var n = t[Aa];
    n === void 0 && (n = t[Aa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Wf(t, e, 2, !1),
    n.add(r))
}
function Lo(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Wf(n, e, r, t)
}
var Wi = "_reactListening" + Math.random().toString(36).slice(2);
function li(e) {
    if (!e[Wi]) {
        e[Wi] = !0,
        Zh.forEach(function(n) {
            n !== "selectionchange" && (Mv.has(n) || Lo(n, !1, e),
            Lo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Wi] || (t[Wi] = !0,
        Lo("selectionchange", !1, t))
    }
}
function Wf(e, t, n, r) {
    switch (Tf(t)) {
    case 1:
        var i = Wg;
        break;
    case 4:
        i = $g;
        break;
    default:
        i = Al
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !ja || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Io(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var u = o.tag;
                        if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo,
                        u === i || u.nodeType === 8 && u.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = yn(l),
                    o === null)
                        return;
                    if (u = o.tag,
                    u === 5 || u === 6) {
                        r = s = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    ff(function() {
        var c = s
          , d = Pl(n)
          , h = [];
        e: {
            var f = Uf.get(e);
            if (f !== void 0) {
                var v = Ll
                  , x = e;
                switch (e) {
                case "keypress":
                    if (is(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = ov;
                    break;
                case "focusin":
                    x = "focus",
                    v = Po;
                    break;
                case "focusout":
                    x = "blur",
                    v = Po;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = Po;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = xc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = Gg;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = uv;
                    break;
                case Ff:
                case Of:
                case zf:
                    v = Qg;
                    break;
                case Bf:
                    v = dv;
                    break;
                case "scroll":
                    v = Kg;
                    break;
                case "wheel":
                    v = fv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = qg;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = jc
                }
                var w = (t & 4) !== 0
                  , b = !w && e === "scroll"
                  , m = w ? f !== null ? f + "Capture" : null : f;
                w = [];
                for (var p = c, g; p !== null; ) {
                    g = p;
                    var S = g.stateNode;
                    if (g.tag === 5 && S !== null && (g = S,
                    m !== null && (S = ni(p, m),
                    S != null && w.push(ui(p, S, g)))),
                    b)
                        break;
                    p = p.return
                }
                0 < w.length && (f = new v(f,x,null,n,d),
                h.push({
                    event: f,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                f && n !== xa && (x = n.relatedTarget || n.fromElement) && (yn(x) || x[At]))
                    break e;
                if ((v || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window,
                v ? (x = n.relatedTarget || n.toElement,
                v = c,
                x = x ? yn(x) : null,
                x !== null && (b = An(x),
                x !== b || x.tag !== 5 && x.tag !== 6) && (x = null)) : (v = null,
                x = c),
                v !== x)) {
                    if (w = xc,
                    S = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (w = jc,
                    S = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    b = v == null ? f : $n(v),
                    g = x == null ? f : $n(x),
                    f = new w(S,p + "leave",v,n,d),
                    f.target = b,
                    f.relatedTarget = g,
                    S = null,
                    yn(d) === c && (w = new w(m,p + "enter",x,n,d),
                    w.target = g,
                    w.relatedTarget = b,
                    S = w),
                    b = S,
                    v && x)
                        t: {
                            for (w = v,
                            m = x,
                            p = 0,
                            g = w; g; g = On(g))
                                p++;
                            for (g = 0,
                            S = m; S; S = On(S))
                                g++;
                            for (; 0 < p - g; )
                                w = On(w),
                                p--;
                            for (; 0 < g - p; )
                                m = On(m),
                                g--;
                            for (; p--; ) {
                                if (w === m || m !== null && w === m.alternate)
                                    break t;
                                w = On(w),
                                m = On(m)
                            }
                            w = null
                        }
                    else
                        w = null;
                    v !== null && Ac(h, f, v, w, !1),
                    x !== null && b !== null && Ac(h, b, x, w, !0)
                }
            }
            e: {
                if (f = c ? $n(c) : window,
                v = f.nodeName && f.nodeName.toLowerCase(),
                v === "select" || v === "input" && f.type === "file")
                    var N = wv;
                else if (kc(f))
                    if (Df)
                        N = kv;
                    else {
                        N = Nv;
                        var C = jv
                    }
                else
                    (v = f.nodeName) && v.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (N = Sv);
                if (N && (N = N(e, c))) {
                    Af(h, N, n, d);
                    break e
                }
                C && C(e, f, c),
                e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && pa(f, "number", f.value)
            }
            switch (C = c ? $n(c) : window,
            e) {
            case "focusin":
                (kc(C) || C.contentEditable === "true") && (Hn = C,
                Ca = c,
                $r = null);
                break;
            case "focusout":
                $r = Ca = Hn = null;
                break;
            case "mousedown":
                Ta = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ta = !1,
                Ec(h, n, d);
                break;
            case "selectionchange":
                if (Tv)
                    break;
            case "keydown":
            case "keyup":
                Ec(h, n, d)
            }
            var P;
            if (Vl)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                Un ? Mf(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (Ef && n.locale !== "ko" && (Un || T !== "onCompositionStart" ? T === "onCompositionEnd" && Un && (P = Pf()) : ($t = d,
            Dl = "value"in $t ? $t.value : $t.textContent,
            Un = !0)),
            C = Ss(c, T),
            0 < C.length && (T = new wc(T,e,null,n,d),
            h.push({
                event: T,
                listeners: C
            }),
            P ? T.data = P : (P = Rf(n),
            P !== null && (T.data = P)))),
            (P = mv ? gv(e, n) : vv(e, n)) && (c = Ss(c, "onBeforeInput"),
            0 < c.length && (d = new wc("onBeforeInput","beforeinput",null,n,d),
            h.push({
                event: d,
                listeners: c
            }),
            d.data = P))
        }
        Hf(h, t)
    })
}
function ui(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ss(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = ni(e, n),
        s != null && r.unshift(ui(e, s, i)),
        s = ni(e, t),
        s != null && r.push(ui(e, s, i))),
        e = e.return
    }
    return r
}
function On(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ac(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var l = n
          , u = l.alternate
          , c = l.stateNode;
        if (u !== null && u === r)
            break;
        l.tag === 5 && c !== null && (l = c,
        i ? (u = ni(n, s),
        u != null && o.unshift(ui(n, u, l))) : i || (u = ni(n, s),
        u != null && o.push(ui(n, u, l)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Rv = /\r\n?/g
  , Av = /\u0000|\uFFFD/g;
function Dc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Rv, `
`).replace(Av, "")
}
function $i(e, t, n) {
    if (t = Dc(t),
    Dc(e) !== t && n)
        throw Error(M(425))
}
function ks() {}
var Pa = null
  , Ea = null;
function Ma(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ra = typeof setTimeout == "function" ? setTimeout : void 0
  , Dv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Lc = typeof Promise == "function" ? Promise : void 0
  , Lv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lc < "u" ? function(e) {
    return Lc.resolve(null).then(e).catch(Iv)
}
: Ra;
function Iv(e) {
    setTimeout(function() {
        throw e
    })
}
function Vo(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    si(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    si(t)
}
function Qt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Ic(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var wr = Math.random().toString(36).slice(2)
  , mt = "__reactFiber$" + wr
  , ci = "__reactProps$" + wr
  , At = "__reactContainer$" + wr
  , Aa = "__reactEvents$" + wr
  , Vv = "__reactListeners$" + wr
  , _v = "__reactHandles$" + wr;
function yn(e) {
    var t = e[mt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[At] || n[mt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Ic(e); e !== null; ) {
                    if (n = e[mt])
                        return n;
                    e = Ic(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Ti(e) {
    return e = e[mt] || e[At],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function $n(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(M(33))
}
function no(e) {
    return e[ci] || null
}
var Da = []
  , Kn = -1;
function cn(e) {
    return {
        current: e
    }
}
function Y(e) {
    0 > Kn || (e.current = Da[Kn],
    Da[Kn] = null,
    Kn--)
}
function X(e, t) {
    Kn++,
    Da[Kn] = e.current,
    e.current = t
}
var sn = {}
  , Te = cn(sn)
  , De = cn(!1)
  , bn = sn;
function cr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return sn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Le(e) {
    return e = e.childContextTypes,
    e != null
}
function bs() {
    Y(De),
    Y(Te)
}
function Vc(e, t, n) {
    if (Te.current !== sn)
        throw Error(M(168));
    X(Te, t),
    X(De, n)
}
function $f(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(M(108, jg(e) || "Unknown", i));
    return re({}, n, r)
}
function Cs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn,
    bn = Te.current,
    X(Te, e),
    X(De, De.current),
    !0
}
function _c(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(M(169));
    n ? (e = $f(e, t, bn),
    r.__reactInternalMemoizedMergedChildContext = e,
    Y(De),
    Y(Te),
    X(Te, e)) : Y(De),
    X(De, n)
}
var kt = null
  , ro = !1
  , _o = !1;
function Kf(e) {
    kt === null ? kt = [e] : kt.push(e)
}
function Fv(e) {
    ro = !0,
    Kf(e)
}
function dn() {
    if (!_o && kt !== null) {
        _o = !0;
        var e = 0
          , t = $;
        try {
            var n = kt;
            for ($ = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            kt = null,
            ro = !1
        } catch (i) {
            throw kt !== null && (kt = kt.slice(e + 1)),
            vf(El, dn),
            i
        } finally {
            $ = t,
            _o = !1
        }
    }
    return null
}
var Xn = []
  , Gn = 0
  , Ts = null
  , Ps = 0
  , Ge = []
  , Ye = 0
  , Cn = null
  , bt = 1
  , Ct = "";
function pn(e, t) {
    Xn[Gn++] = Ps,
    Xn[Gn++] = Ts,
    Ts = e,
    Ps = t
}
function Xf(e, t, n) {
    Ge[Ye++] = bt,
    Ge[Ye++] = Ct,
    Ge[Ye++] = Cn,
    Cn = e;
    var r = bt;
    e = Ct;
    var i = 32 - ut(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - ut(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        bt = 1 << 32 - ut(t) + i | n << i | r,
        Ct = s + e
    } else
        bt = 1 << s | n << i | r,
        Ct = e
}
function Fl(e) {
    e.return !== null && (pn(e, 1),
    Xf(e, 1, 0))
}
function Ol(e) {
    for (; e === Ts; )
        Ts = Xn[--Gn],
        Xn[Gn] = null,
        Ps = Xn[--Gn],
        Xn[Gn] = null;
    for (; e === Cn; )
        Cn = Ge[--Ye],
        Ge[Ye] = null,
        Ct = Ge[--Ye],
        Ge[Ye] = null,
        bt = Ge[--Ye],
        Ge[Ye] = null
}
var Fe = null
  , _e = null
  , Q = !1
  , lt = null;
function Gf(e, t) {
    var n = Ze(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Fc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Fe = e,
        _e = Qt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Fe = e,
        _e = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Cn !== null ? {
            id: bt,
            overflow: Ct
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ze(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Fe = e,
        _e = null,
        !0) : !1;
    default:
        return !1
    }
}
function La(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ia(e) {
    if (Q) {
        var t = _e;
        if (t) {
            var n = t;
            if (!Fc(e, t)) {
                if (La(e))
                    throw Error(M(418));
                t = Qt(n.nextSibling);
                var r = Fe;
                t && Fc(e, t) ? Gf(r, n) : (e.flags = e.flags & -4097 | 2,
                Q = !1,
                Fe = e)
            }
        } else {
            if (La(e))
                throw Error(M(418));
            e.flags = e.flags & -4097 | 2,
            Q = !1,
            Fe = e
        }
    }
}
function Oc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Fe = e
}
function Ki(e) {
    if (e !== Fe)
        return !1;
    if (!Q)
        return Oc(e),
        Q = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Ma(e.type, e.memoizedProps)),
    t && (t = _e)) {
        if (La(e))
            throw Yf(),
            Error(M(418));
        for (; t; )
            Gf(e, t),
            t = Qt(t.nextSibling)
    }
    if (Oc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(M(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            _e = Qt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            _e = null
        }
    } else
        _e = Fe ? Qt(e.stateNode.nextSibling) : null;
    return !0
}
function Yf() {
    for (var e = _e; e; )
        e = Qt(e.nextSibling)
}
function dr() {
    _e = Fe = null,
    Q = !1
}
function zl(e) {
    lt === null ? lt = [e] : lt.push(e)
}
var Ov = Vt.ReactCurrentBatchConfig;
function Mr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(M(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(M(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var l = i.refs;
                o === null ? delete l[s] : l[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(M(284));
        if (!n._owner)
            throw Error(M(290, e))
    }
    return e
}
function Xi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function zc(e) {
    var t = e._init;
    return t(e._payload)
}
function Zf(e) {
    function t(m, p) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [p],
            m.flags |= 16) : g.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function i(m, p) {
        return m = tn(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function s(m, p, g) {
        return m.index = g,
        e ? (g = m.alternate,
        g !== null ? (g = g.index,
        g < p ? (m.flags |= 2,
        p) : g) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, p, g, S) {
        return p === null || p.tag !== 6 ? (p = Wo(g, m.mode, S),
        p.return = m,
        p) : (p = i(p, g),
        p.return = m,
        p)
    }
    function u(m, p, g, S) {
        var N = g.type;
        return N === Bn ? d(m, p, g.props.children, S, g.key) : p !== null && (p.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Bt && zc(N) === p.type) ? (S = i(p, g.props),
        S.ref = Mr(m, p, g),
        S.return = m,
        S) : (S = ds(g.type, g.key, g.props, null, m.mode, S),
        S.ref = Mr(m, p, g),
        S.return = m,
        S)
    }
    function c(m, p, g, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = $o(g, m.mode, S),
        p.return = m,
        p) : (p = i(p, g.children || []),
        p.return = m,
        p)
    }
    function d(m, p, g, S, N) {
        return p === null || p.tag !== 7 ? (p = Sn(g, m.mode, S, N),
        p.return = m,
        p) : (p = i(p, g),
        p.return = m,
        p)
    }
    function h(m, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Wo("" + p, m.mode, g),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Vi:
                return g = ds(p.type, p.key, p.props, null, m.mode, g),
                g.ref = Mr(m, null, p),
                g.return = m,
                g;
            case zn:
                return p = $o(p, m.mode, g),
                p.return = m,
                p;
            case Bt:
                var S = p._init;
                return h(m, S(p._payload), g)
            }
            if (Ir(p) || br(p))
                return p = Sn(p, m.mode, g, null),
                p.return = m,
                p;
            Xi(m, p)
        }
        return null
    }
    function f(m, p, g, S) {
        var N = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return N !== null ? null : l(m, p, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Vi:
                return g.key === N ? u(m, p, g, S) : null;
            case zn:
                return g.key === N ? c(m, p, g, S) : null;
            case Bt:
                return N = g._init,
                f(m, p, N(g._payload), S)
            }
            if (Ir(g) || br(g))
                return N !== null ? null : d(m, p, g, S, null);
            Xi(m, g)
        }
        return null
    }
    function v(m, p, g, S, N) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return m = m.get(g) || null,
            l(p, m, "" + S, N);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Vi:
                return m = m.get(S.key === null ? g : S.key) || null,
                u(p, m, S, N);
            case zn:
                return m = m.get(S.key === null ? g : S.key) || null,
                c(p, m, S, N);
            case Bt:
                var C = S._init;
                return v(m, p, g, C(S._payload), N)
            }
            if (Ir(S) || br(S))
                return m = m.get(g) || null,
                d(p, m, S, N, null);
            Xi(p, S)
        }
        return null
    }
    function x(m, p, g, S) {
        for (var N = null, C = null, P = p, T = p = 0, L = null; P !== null && T < g.length; T++) {
            P.index > T ? (L = P,
            P = null) : L = P.sibling;
            var E = f(m, P, g[T], S);
            if (E === null) {
                P === null && (P = L);
                break
            }
            e && P && E.alternate === null && t(m, P),
            p = s(E, p, T),
            C === null ? N = E : C.sibling = E,
            C = E,
            P = L
        }
        if (T === g.length)
            return n(m, P),
            Q && pn(m, T),
            N;
        if (P === null) {
            for (; T < g.length; T++)
                P = h(m, g[T], S),
                P !== null && (p = s(P, p, T),
                C === null ? N = P : C.sibling = P,
                C = P);
            return Q && pn(m, T),
            N
        }
        for (P = r(m, P); T < g.length; T++)
            L = v(P, m, T, g[T], S),
            L !== null && (e && L.alternate !== null && P.delete(L.key === null ? T : L.key),
            p = s(L, p, T),
            C === null ? N = L : C.sibling = L,
            C = L);
        return e && P.forEach(function(F) {
            return t(m, F)
        }),
        Q && pn(m, T),
        N
    }
    function w(m, p, g, S) {
        var N = br(g);
        if (typeof N != "function")
            throw Error(M(150));
        if (g = N.call(g),
        g == null)
            throw Error(M(151));
        for (var C = N = null, P = p, T = p = 0, L = null, E = g.next(); P !== null && !E.done; T++,
        E = g.next()) {
            P.index > T ? (L = P,
            P = null) : L = P.sibling;
            var F = f(m, P, E.value, S);
            if (F === null) {
                P === null && (P = L);
                break
            }
            e && P && F.alternate === null && t(m, P),
            p = s(F, p, T),
            C === null ? N = F : C.sibling = F,
            C = F,
            P = L
        }
        if (E.done)
            return n(m, P),
            Q && pn(m, T),
            N;
        if (P === null) {
            for (; !E.done; T++,
            E = g.next())
                E = h(m, E.value, S),
                E !== null && (p = s(E, p, T),
                C === null ? N = E : C.sibling = E,
                C = E);
            return Q && pn(m, T),
            N
        }
        for (P = r(m, P); !E.done; T++,
        E = g.next())
            E = v(P, m, T, E.value, S),
            E !== null && (e && E.alternate !== null && P.delete(E.key === null ? T : E.key),
            p = s(E, p, T),
            C === null ? N = E : C.sibling = E,
            C = E);
        return e && P.forEach(function(J) {
            return t(m, J)
        }),
        Q && pn(m, T),
        N
    }
    function b(m, p, g, S) {
        if (typeof g == "object" && g !== null && g.type === Bn && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Vi:
                e: {
                    for (var N = g.key, C = p; C !== null; ) {
                        if (C.key === N) {
                            if (N = g.type,
                            N === Bn) {
                                if (C.tag === 7) {
                                    n(m, C.sibling),
                                    p = i(C, g.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (C.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Bt && zc(N) === C.type) {
                                n(m, C.sibling),
                                p = i(C, g.props),
                                p.ref = Mr(m, C, g),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, C);
                            break
                        } else
                            t(m, C);
                        C = C.sibling
                    }
                    g.type === Bn ? (p = Sn(g.props.children, m.mode, S, g.key),
                    p.return = m,
                    m = p) : (S = ds(g.type, g.key, g.props, null, m.mode, S),
                    S.ref = Mr(m, p, g),
                    S.return = m,
                    m = S)
                }
                return o(m);
            case zn:
                e: {
                    for (C = g.key; p !== null; ) {
                        if (p.key === C)
                            if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                n(m, p.sibling),
                                p = i(p, g.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = $o(g, m.mode, S),
                    p.return = m,
                    m = p
                }
                return o(m);
            case Bt:
                return C = g._init,
                b(m, p, C(g._payload), S)
            }
            if (Ir(g))
                return x(m, p, g, S);
            if (br(g))
                return w(m, p, g, S);
            Xi(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = i(p, g),
        p.return = m,
        m = p) : (n(m, p),
        p = Wo(g, m.mode, S),
        p.return = m,
        m = p),
        o(m)) : n(m, p)
    }
    return b
}
var hr = Zf(!0)
  , Qf = Zf(!1)
  , Es = cn(null)
  , Ms = null
  , Yn = null
  , Bl = null;
function Ul() {
    Bl = Yn = Ms = null
}
function Hl(e) {
    var t = Es.current;
    Y(Es),
    e._currentValue = t
}
function Va(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function ar(e, t) {
    Ms = e,
    Bl = Yn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ae = !0),
    e.firstContext = null)
}
function Je(e) {
    var t = e._currentValue;
    if (Bl !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Yn === null) {
            if (Ms === null)
                throw Error(M(308));
            Yn = e,
            Ms.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Yn = Yn.next = e;
    return t
}
var xn = null;
function Wl(e) {
    xn === null ? xn = [e] : xn.push(e)
}
function Jf(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Wl(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    Dt(e, r)
}
function Dt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ut = !1;
function $l(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function qf(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Pt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Jt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    W & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        Dt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Wl(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    Dt(e, n)
}
function ss(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ml(e, n)
    }
}
function Bc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Rs(e, t, n, r) {
    var i = e.updateQueue;
    Ut = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var u = l
          , c = u.next;
        u.next = null,
        o === null ? s = c : o.next = c,
        o = u;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== o && (l === null ? d.firstBaseUpdate = c : l.next = c,
        d.lastBaseUpdate = u))
    }
    if (s !== null) {
        var h = i.baseState;
        o = 0,
        d = c = u = null,
        l = s;
        do {
            var f = l.lane
              , v = l.eventTime;
            if ((r & f) === f) {
                d !== null && (d = d.next = {
                    eventTime: v,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var x = e
                      , w = l;
                    switch (f = t,
                    v = n,
                    w.tag) {
                    case 1:
                        if (x = w.payload,
                        typeof x == "function") {
                            h = x.call(v, h, f);
                            break e
                        }
                        h = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = w.payload,
                        f = typeof x == "function" ? x.call(v, h, f) : x,
                        f == null)
                            break e;
                        h = re({}, h, f);
                        break e;
                    case 2:
                        Ut = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                f = i.effects,
                f === null ? i.effects = [l] : f.push(l))
            } else
                v = {
                    eventTime: v,
                    lane: f,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (c = d = v,
                u = h) : d = d.next = v,
                o |= f;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                f = l,
                l = f.next,
                f.next = null,
                i.lastBaseUpdate = f,
                i.shared.pending = null
            }
        } while (!0);
        if (d === null && (u = h),
        i.baseState = u,
        i.firstBaseUpdate = c,
        i.lastBaseUpdate = d,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        Pn |= o,
        e.lanes = o,
        e.memoizedState = h
    }
}
function Uc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(M(191, i));
                i.call(r)
            }
        }
}
var Pi = {}
  , vt = cn(Pi)
  , di = cn(Pi)
  , hi = cn(Pi);
function wn(e) {
    if (e === Pi)
        throw Error(M(174));
    return e
}
function Kl(e, t) {
    switch (X(hi, t),
    X(di, e),
    X(vt, Pi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ga(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ga(t, e)
    }
    Y(vt),
    X(vt, t)
}
function fr() {
    Y(vt),
    Y(di),
    Y(hi)
}
function ep(e) {
    wn(hi.current);
    var t = wn(vt.current)
      , n = ga(t, e.type);
    t !== n && (X(di, e),
    X(vt, n))
}
function Xl(e) {
    di.current === e && (Y(vt),
    Y(di))
}
var ee = cn(0);
function As(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Fo = [];
function Gl() {
    for (var e = 0; e < Fo.length; e++)
        Fo[e]._workInProgressVersionPrimary = null;
    Fo.length = 0
}
var os = Vt.ReactCurrentDispatcher
  , Oo = Vt.ReactCurrentBatchConfig
  , Tn = 0
  , ne = null
  , fe = null
  , me = null
  , Ds = !1
  , Kr = !1
  , fi = 0
  , zv = 0;
function Ne() {
    throw Error(M(321))
}
function Yl(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!dt(e[n], t[n]))
            return !1;
    return !0
}
function Zl(e, t, n, r, i, s) {
    if (Tn = s,
    ne = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    os.current = e === null || e.memoizedState === null ? Wv : $v,
    e = n(r, i),
    Kr) {
        s = 0;
        do {
            if (Kr = !1,
            fi = 0,
            25 <= s)
                throw Error(M(301));
            s += 1,
            me = fe = null,
            t.updateQueue = null,
            os.current = Kv,
            e = n(r, i)
        } while (Kr)
    }
    if (os.current = Ls,
    t = fe !== null && fe.next !== null,
    Tn = 0,
    me = fe = ne = null,
    Ds = !1,
    t)
        throw Error(M(300));
    return e
}
function Ql() {
    var e = fi !== 0;
    return fi = 0,
    e
}
function pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return me === null ? ne.memoizedState = me = e : me = me.next = e,
    me
}
function qe() {
    if (fe === null) {
        var e = ne.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = fe.next;
    var t = me === null ? ne.memoizedState : me.next;
    if (t !== null)
        me = t,
        fe = e;
    else {
        if (e === null)
            throw Error(M(310));
        fe = e,
        e = {
            memoizedState: fe.memoizedState,
            baseState: fe.baseState,
            baseQueue: fe.baseQueue,
            queue: fe.queue,
            next: null
        },
        me === null ? ne.memoizedState = me = e : me = me.next = e
    }
    return me
}
function pi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function zo(e) {
    var t = qe()
      , n = t.queue;
    if (n === null)
        throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = fe
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var l = o = null
          , u = null
          , c = s;
        do {
            var d = c.lane;
            if ((Tn & d) === d)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var h = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (l = u = h,
                o = r) : u = u.next = h,
                ne.lanes |= d,
                Pn |= d
            }
            c = c.next
        } while (c !== null && c !== s);
        u === null ? o = r : u.next = l,
        dt(r, t.memoizedState) || (Ae = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            ne.lanes |= s,
            Pn |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Bo(e) {
    var t = qe()
      , n = t.queue;
    if (n === null)
        throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        dt(s, t.memoizedState) || (Ae = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function tp() {}
function np(e, t) {
    var n = ne
      , r = qe()
      , i = t()
      , s = !dt(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    Ae = !0),
    r = r.queue,
    Jl(sp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || me !== null && me.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        mi(9, ip.bind(null, n, r, i, t), void 0, null),
        ge === null)
            throw Error(M(349));
        Tn & 30 || rp(n, t, i)
    }
    return i
}
function rp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ne.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ne.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function ip(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    op(t) && ap(e)
}
function sp(e, t, n) {
    return n(function() {
        op(t) && ap(e)
    })
}
function op(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !dt(e, n)
    } catch {
        return !0
    }
}
function ap(e) {
    var t = Dt(e, 1);
    t !== null && ct(t, e, 1, -1)
}
function Hc(e) {
    var t = pt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pi,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Hv.bind(null, ne, e),
    [t.memoizedState, e]
}
function mi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ne.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ne.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function lp() {
    return qe().memoizedState
}
function as(e, t, n, r) {
    var i = pt();
    ne.flags |= e,
    i.memoizedState = mi(1 | t, n, void 0, r === void 0 ? null : r)
}
function io(e, t, n, r) {
    var i = qe();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (fe !== null) {
        var o = fe.memoizedState;
        if (s = o.destroy,
        r !== null && Yl(r, o.deps)) {
            i.memoizedState = mi(t, n, s, r);
            return
        }
    }
    ne.flags |= e,
    i.memoizedState = mi(1 | t, n, s, r)
}
function Wc(e, t) {
    return as(8390656, 8, e, t)
}
function Jl(e, t) {
    return io(2048, 8, e, t)
}
function up(e, t) {
    return io(4, 2, e, t)
}
function cp(e, t) {
    return io(4, 4, e, t)
}
function dp(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function hp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    io(4, 4, dp.bind(null, t, e), n)
}
function ql() {}
function fp(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yl(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function pp(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yl(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function mp(e, t, n) {
    return Tn & 21 ? (dt(n, t) || (n = wf(),
    ne.lanes |= n,
    Pn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ae = !0),
    e.memoizedState = n)
}
function Bv(e, t) {
    var n = $;
    $ = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Oo.transition;
    Oo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        $ = n,
        Oo.transition = r
    }
}
function gp() {
    return qe().memoizedState
}
function Uv(e, t, n) {
    var r = en(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    vp(e))
        yp(t, n);
    else if (n = Jf(e, t, n, r),
    n !== null) {
        var i = Ee();
        ct(n, e, r, i),
        xp(n, t, r)
    }
}
function Hv(e, t, n) {
    var r = en(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (vp(e))
        yp(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , l = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                dt(l, o)) {
                    var u = t.interleaved;
                    u === null ? (i.next = i,
                    Wl(t)) : (i.next = u.next,
                    u.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Jf(e, t, i, r),
        n !== null && (i = Ee(),
        ct(n, e, r, i),
        xp(n, t, r))
    }
}
function vp(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne
}
function yp(e, t) {
    Kr = Ds = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function xp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ml(e, n)
    }
}
var Ls = {
    readContext: Je,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1
}
  , Wv = {
    readContext: Je,
    useCallback: function(e, t) {
        return pt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Je,
    useEffect: Wc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        as(4194308, 4, dp.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return as(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return as(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = pt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = pt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Uv.bind(null, ne, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = pt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Hc,
    useDebugValue: ql,
    useDeferredValue: function(e) {
        return pt().memoizedState = e
    },
    useTransition: function() {
        var e = Hc(!1)
          , t = e[0];
        return e = Bv.bind(null, e[1]),
        pt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ne
          , i = pt();
        if (Q) {
            if (n === void 0)
                throw Error(M(407));
            n = n()
        } else {
            if (n = t(),
            ge === null)
                throw Error(M(349));
            Tn & 30 || rp(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        Wc(sp.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        mi(9, ip.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = pt()
          , t = ge.identifierPrefix;
        if (Q) {
            var n = Ct
              , r = bt;
            n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = fi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = zv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , $v = {
    readContext: Je,
    useCallback: fp,
    useContext: Je,
    useEffect: Jl,
    useImperativeHandle: hp,
    useInsertionEffect: up,
    useLayoutEffect: cp,
    useMemo: pp,
    useReducer: zo,
    useRef: lp,
    useState: function() {
        return zo(pi)
    },
    useDebugValue: ql,
    useDeferredValue: function(e) {
        var t = qe();
        return mp(t, fe.memoizedState, e)
    },
    useTransition: function() {
        var e = zo(pi)[0]
          , t = qe().memoizedState;
        return [e, t]
    },
    useMutableSource: tp,
    useSyncExternalStore: np,
    useId: gp,
    unstable_isNewReconciler: !1
}
  , Kv = {
    readContext: Je,
    useCallback: fp,
    useContext: Je,
    useEffect: Jl,
    useImperativeHandle: hp,
    useInsertionEffect: up,
    useLayoutEffect: cp,
    useMemo: pp,
    useReducer: Bo,
    useRef: lp,
    useState: function() {
        return Bo(pi)
    },
    useDebugValue: ql,
    useDeferredValue: function(e) {
        var t = qe();
        return fe === null ? t.memoizedState = e : mp(t, fe.memoizedState, e)
    },
    useTransition: function() {
        var e = Bo(pi)[0]
          , t = qe().memoizedState;
        return [e, t]
    },
    useMutableSource: tp,
    useSyncExternalStore: np,
    useId: gp,
    unstable_isNewReconciler: !1
};
function ot(e, t) {
    if (e && e.defaultProps) {
        t = re({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function _a(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : re({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var so = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? An(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ee()
          , i = en(e)
          , s = Pt(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = Jt(e, s, i),
        t !== null && (ct(t, e, i, r),
        ss(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ee()
          , i = en(e)
          , s = Pt(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Jt(e, s, i),
        t !== null && (ct(t, e, i, r),
        ss(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ee()
          , r = en(e)
          , i = Pt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Jt(e, i, r),
        t !== null && (ct(t, e, r, n),
        ss(t, e, r))
    }
};
function $c(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !ai(n, r) || !ai(i, s) : !0
}
function wp(e, t, n) {
    var r = !1
      , i = sn
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Je(s) : (i = Le(t) ? bn : Te.current,
    r = t.contextTypes,
    s = (r = r != null) ? cr(e, i) : sn),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = so,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Kc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && so.enqueueReplaceState(t, t.state, null)
}
function Fa(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    $l(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Je(s) : (s = Le(t) ? bn : Te.current,
    i.context = cr(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (_a(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && so.enqueueReplaceState(i, i.state, null),
    Rs(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function pr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += wg(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Uo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Oa(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Xv = typeof WeakMap == "function" ? WeakMap : Map;
function jp(e, t, n) {
    n = Pt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Vs || (Vs = !0,
        Ya = r),
        Oa(e, t)
    }
    ,
    n
}
function Np(e, t, n) {
    n = Pt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Oa(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Oa(e, t),
        typeof r != "function" && (qt === null ? qt = new Set([this]) : qt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Xc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Xv;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = ay.bind(null, e, t, n),
    t.then(e, e))
}
function Gc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Yc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pt(-1, 1),
    t.tag = 2,
    Jt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Gv = Vt.ReactCurrentOwner
  , Ae = !1;
function Pe(e, t, n, r) {
    t.child = e === null ? Qf(t, null, n, r) : hr(t, e.child, n, r)
}
function Zc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return ar(t, i),
    r = Zl(e, t, n, r, s, i),
    n = Ql(),
    e !== null && !Ae ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Lt(e, t, i)) : (Q && n && Fl(t),
    t.flags |= 1,
    Pe(e, t, r, i),
    t.child)
}
function Qc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !au(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Sp(e, t, s, r, i)) : (e = ds(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ai,
        n(o, r) && e.ref === t.ref)
            return Lt(e, t, i)
    }
    return t.flags |= 1,
    e = tn(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Sp(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ai(s, r) && e.ref === t.ref)
            if (Ae = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Ae = !0);
            else
                return t.lanes = e.lanes,
                Lt(e, t, i)
    }
    return za(e, t, n, r, i)
}
function kp(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            X(Qn, Ve),
            Ve |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                X(Qn, Ve),
                Ve |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            X(Qn, Ve),
            Ve |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        X(Qn, Ve),
        Ve |= r;
    return Pe(e, t, i, n),
    t.child
}
function bp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function za(e, t, n, r, i) {
    var s = Le(n) ? bn : Te.current;
    return s = cr(t, s),
    ar(t, i),
    n = Zl(e, t, n, r, s, i),
    r = Ql(),
    e !== null && !Ae ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Lt(e, t, i)) : (Q && r && Fl(t),
    t.flags |= 1,
    Pe(e, t, n, i),
    t.child)
}
function Jc(e, t, n, r, i) {
    if (Le(n)) {
        var s = !0;
        Cs(t)
    } else
        s = !1;
    if (ar(t, i),
    t.stateNode === null)
        ls(e, t),
        wp(t, n, r),
        Fa(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , l = t.memoizedProps;
        o.props = l;
        var u = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Je(c) : (c = Le(n) ? bn : Te.current,
        c = cr(t, c));
        var d = n.getDerivedStateFromProps
          , h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || u !== c) && Kc(t, o, r, c),
        Ut = !1;
        var f = t.memoizedState;
        o.state = f,
        Rs(t, r, o, i),
        u = t.memoizedState,
        l !== r || f !== u || De.current || Ut ? (typeof d == "function" && (_a(t, n, d, r),
        u = t.memoizedState),
        (l = Ut || $c(t, n, l, r, f, u, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        o.props = r,
        o.state = u,
        o.context = c,
        r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        qf(e, t),
        l = t.memoizedProps,
        c = t.type === t.elementType ? l : ot(t.type, l),
        o.props = c,
        h = t.pendingProps,
        f = o.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = Je(u) : (u = Le(n) ? bn : Te.current,
        u = cr(t, u));
        var v = n.getDerivedStateFromProps;
        (d = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== h || f !== u) && Kc(t, o, r, u),
        Ut = !1,
        f = t.memoizedState,
        o.state = f,
        Rs(t, r, o, i);
        var x = t.memoizedState;
        l !== h || f !== x || De.current || Ut ? (typeof v == "function" && (_a(t, n, v, r),
        x = t.memoizedState),
        (c = Ut || $c(t, n, c, r, f, x, u) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, u),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, u)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        o.props = r,
        o.state = x,
        o.context = u,
        r = c) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ba(e, t, n, r, s, i)
}
function Ba(e, t, n, r, i, s) {
    bp(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && _c(t, n, !1),
        Lt(e, t, s);
    r = t.stateNode,
    Gv.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = hr(t, e.child, null, s),
    t.child = hr(t, null, l, s)) : Pe(e, t, l, s),
    t.memoizedState = r.state,
    i && _c(t, n, !0),
    t.child
}
function Cp(e) {
    var t = e.stateNode;
    t.pendingContext ? Vc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vc(e, t.context, !1),
    Kl(e, t.containerInfo)
}
function qc(e, t, n, r, i) {
    return dr(),
    zl(i),
    t.flags |= 256,
    Pe(e, t, n, r),
    t.child
}
var Ua = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ha(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Tp(e, t, n) {
    var r = t.pendingProps, i = ee.current, s = !1, o = (t.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    X(ee, i & 1),
    e === null)
        return Ia(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = lo(o, r, 0, null),
        e = Sn(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Ha(n),
        t.memoizedState = Ua,
        e) : eu(t, o));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return Yv(e, t, o, r, l, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        l = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = tn(i, u),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? s = tn(l, s) : (s = Sn(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? Ha(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = Ua,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = tn(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function eu(e, t) {
    return t = lo({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Gi(e, t, n, r) {
    return r !== null && zl(r),
    hr(t, e.child, null, n),
    e = eu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Yv(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Uo(Error(M(422))),
        Gi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = lo({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = Sn(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && hr(t, e.child, null, o),
        t.child.memoizedState = Ha(o),
        t.memoizedState = Ua,
        s);
    if (!(t.mode & 1))
        return Gi(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        s = Error(M(419)),
        r = Uo(s, r, void 0),
        Gi(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0,
    Ae || l) {
        if (r = ge,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            Dt(e, i),
            ct(r, e, i, -1))
        }
        return ou(),
        r = Uo(Error(M(421))),
        Gi(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = ly.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    _e = Qt(i.nextSibling),
    Fe = t,
    Q = !0,
    lt = null,
    e !== null && (Ge[Ye++] = bt,
    Ge[Ye++] = Ct,
    Ge[Ye++] = Cn,
    bt = e.id,
    Ct = e.overflow,
    Cn = t),
    t = eu(t, r.children),
    t.flags |= 4096,
    t)
}
function ed(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Va(e.return, t, n)
}
function Ho(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function Pp(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (Pe(e, t, r.children, n),
    r = ee.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && ed(e, n, t);
                else if (e.tag === 19)
                    ed(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (X(ee, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && As(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Ho(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && As(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Ho(t, !0, n, null, s);
            break;
        case "together":
            Ho(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ls(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Lt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Pn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child,
        n = tn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = tn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Zv(e, t, n) {
    switch (t.tag) {
    case 3:
        Cp(t),
        dr();
        break;
    case 5:
        ep(t);
        break;
    case 1:
        Le(t.type) && Cs(t);
        break;
    case 4:
        Kl(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        X(Es, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (X(ee, ee.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Tp(e, t, n) : (X(ee, ee.current & 1),
            e = Lt(e, t, n),
            e !== null ? e.sibling : null);
        X(ee, ee.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Pp(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        X(ee, ee.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        kp(e, t, n)
    }
    return Lt(e, t, n)
}
var Ep, Wa, Mp, Rp;
Ep = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Wa = function() {}
;
Mp = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        wn(vt.current);
        var s = null;
        switch (n) {
        case "input":
            i = ha(e, i),
            r = ha(e, r),
            s = [];
            break;
        case "select":
            i = re({}, i, {
                value: void 0
            }),
            r = re({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = ma(e, i),
            r = ma(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ks)
        }
        va(n, r);
        var o;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var l = i[c];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ei.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (l = i != null ? i[c] : void 0,
            r.hasOwnProperty(c) && u !== l && (u != null || l != null))
                if (c === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in u)
                            u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}),
                            n[o] = u[o])
                    } else
                        n || (s || (s = []),
                        s.push(c, n)),
                        n = u;
                else
                    c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    l = l ? l.__html : void 0,
                    u != null && l !== u && (s = s || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ei.hasOwnProperty(c) ? (u != null && c === "onScroll" && G("scroll", e),
                    s || l === u || (s = [])) : (s = s || []).push(c, u))
        }
        n && (s = s || []).push("style", n);
        var c = s;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
Rp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Rr(e, t) {
    if (!Q)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Se(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Qv(e, t, n) {
    var r = t.pendingProps;
    switch (Ol(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Se(t),
        null;
    case 1:
        return Le(t.type) && bs(),
        Se(t),
        null;
    case 3:
        return r = t.stateNode,
        fr(),
        Y(De),
        Y(Te),
        Gl(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ki(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        lt !== null && (Ja(lt),
        lt = null))),
        Wa(e, t),
        Se(t),
        null;
    case 5:
        Xl(t);
        var i = wn(hi.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Mp(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(M(166));
                return Se(t),
                null
            }
            if (e = wn(vt.current),
            Ki(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[mt] = t,
                r[ci] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    G("cancel", r),
                    G("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    G("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < _r.length; i++)
                        G(_r[i], r);
                    break;
                case "source":
                    G("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    G("error", r),
                    G("load", r);
                    break;
                case "details":
                    G("toggle", r);
                    break;
                case "input":
                    uc(r, s),
                    G("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    G("invalid", r);
                    break;
                case "textarea":
                    dc(r, s),
                    G("invalid", r)
                }
                va(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var l = s[o];
                        o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && $i(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && $i(r.textContent, l, e),
                        i = ["children", "" + l]) : ei.hasOwnProperty(o) && l != null && o === "onScroll" && G("scroll", r)
                    }
                switch (n) {
                case "input":
                    _i(r),
                    cc(r, s, !0);
                    break;
                case "textarea":
                    _i(r),
                    hc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = ks)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = sf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[mt] = t,
                e[ci] = r,
                Ep(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = ya(n, r),
                    n) {
                    case "dialog":
                        G("cancel", e),
                        G("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        G("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < _r.length; i++)
                            G(_r[i], e);
                        i = r;
                        break;
                    case "source":
                        G("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        G("error", e),
                        G("load", e),
                        i = r;
                        break;
                    case "details":
                        G("toggle", e),
                        i = r;
                        break;
                    case "input":
                        uc(e, r),
                        i = ha(e, r),
                        G("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = re({}, r, {
                            value: void 0
                        }),
                        G("invalid", e);
                        break;
                    case "textarea":
                        dc(e, r),
                        i = ma(e, r),
                        G("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    va(n, i),
                    l = i;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var u = l[s];
                            s === "style" ? lf(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && of(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ti(e, u) : typeof u == "number" && ti(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ei.hasOwnProperty(s) ? u != null && s === "onScroll" && G("scroll", e) : u != null && kl(e, s, u, o))
                        }
                    switch (n) {
                    case "input":
                        _i(e),
                        cc(e, r, !1);
                        break;
                    case "textarea":
                        _i(e),
                        hc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + rn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? rr(e, !!r.multiple, s, !1) : r.defaultValue != null && rr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ks)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Se(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Rp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(M(166));
            if (n = wn(hi.current),
            wn(vt.current),
            Ki(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[mt] = t,
                (s = r.nodeValue !== n) && (e = Fe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        $i(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && $i(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[mt] = t,
                t.stateNode = r
        }
        return Se(t),
        null;
    case 13:
        if (Y(ee),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Q && _e !== null && t.mode & 1 && !(t.flags & 128))
                Yf(),
                dr(),
                t.flags |= 98560,
                s = !1;
            else if (s = Ki(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(M(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(M(317));
                    s[mt] = t
                } else
                    dr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Se(t),
                s = !1
            } else
                lt !== null && (Ja(lt),
                lt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ee.current & 1 ? pe === 0 && (pe = 3) : ou())),
        t.updateQueue !== null && (t.flags |= 4),
        Se(t),
        null);
    case 4:
        return fr(),
        Wa(e, t),
        e === null && li(t.stateNode.containerInfo),
        Se(t),
        null;
    case 10:
        return Hl(t.type._context),
        Se(t),
        null;
    case 17:
        return Le(t.type) && bs(),
        Se(t),
        null;
    case 19:
        if (Y(ee),
        s = t.memoizedState,
        s === null)
            return Se(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                Rr(s, !1);
            else {
                if (pe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = As(e),
                        o !== null) {
                            for (t.flags |= 128,
                            Rr(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return X(ee, ee.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && ue() > mr && (t.flags |= 128,
                r = !0,
                Rr(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = As(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Rr(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !Q)
                        return Se(t),
                        null
                } else
                    2 * ue() - s.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Rr(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = ue(),
        t.sibling = null,
        n = ee.current,
        X(ee, r ? n & 1 | 2 : n & 1),
        t) : (Se(t),
        null);
    case 22:
    case 23:
        return su(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ve & 1073741824 && (Se(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(M(156, t.tag))
}
function Jv(e, t) {
    switch (Ol(t),
    t.tag) {
    case 1:
        return Le(t.type) && bs(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return fr(),
        Y(De),
        Y(Te),
        Gl(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Xl(t),
        null;
    case 13:
        if (Y(ee),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(M(340));
            dr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Y(ee),
        null;
    case 4:
        return fr(),
        null;
    case 10:
        return Hl(t.type._context),
        null;
    case 22:
    case 23:
        return su(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Yi = !1
  , be = !1
  , qv = typeof WeakSet == "function" ? WeakSet : Set
  , D = null;
function Zn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                oe(e, t, r)
            }
        else
            n.current = null
}
function $a(e, t, n) {
    try {
        n()
    } catch (r) {
        oe(e, t, r)
    }
}
var td = !1;
function ey(e, t) {
    if (Pa = js,
    e = Vf(),
    _l(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , l = -1
                      , u = -1
                      , c = 0
                      , d = 0
                      , h = e
                      , f = null;
                    t: for (; ; ) {
                        for (var v; h !== n || i !== 0 && h.nodeType !== 3 || (l = o + i),
                        h !== s || r !== 0 && h.nodeType !== 3 || (u = o + r),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (v = h.firstChild) !== null; )
                            f = h,
                            h = v;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (f === n && ++c === i && (l = o),
                            f === s && ++d === r && (u = o),
                            (v = h.nextSibling) !== null)
                                break;
                            h = f,
                            f = h.parentNode
                        }
                        h = v
                    }
                    n = l === -1 || u === -1 ? null : {
                        start: l,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ea = {
        focusedElem: e,
        selectionRange: n
    },
    js = !1,
    D = t; D !== null; )
        if (t = D,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            D = e;
        else
            for (; D !== null; ) {
                t = D;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var w = x.memoizedProps
                                  , b = x.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : ot(t.type, w), b);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(M(163))
                        }
                } catch (S) {
                    oe(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    D = e;
                    break
                }
                D = t.return
            }
    return x = td,
    td = !1,
    x
}
function Xr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && $a(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function oo(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ka(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Ap(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Ap(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[mt],
    delete t[ci],
    delete t[Aa],
    delete t[Vv],
    delete t[_v])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Dp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function nd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Dp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Xa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ks));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Xa(e, t, n),
        e = e.sibling; e !== null; )
            Xa(e, t, n),
            e = e.sibling
}
function Ga(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ga(e, t, n),
        e = e.sibling; e !== null; )
            Ga(e, t, n),
            e = e.sibling
}
var ye = null
  , at = !1;
function Ot(e, t, n) {
    for (n = n.child; n !== null; )
        Lp(e, t, n),
        n = n.sibling
}
function Lp(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
        try {
            gt.onCommitFiberUnmount(Js, n)
        } catch {}
    switch (n.tag) {
    case 5:
        be || Zn(n, t);
    case 6:
        var r = ye
          , i = at;
        ye = null,
        Ot(e, t, n),
        ye = r,
        at = i,
        ye !== null && (at ? (e = ye,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
        break;
    case 18:
        ye !== null && (at ? (e = ye,
        n = n.stateNode,
        e.nodeType === 8 ? Vo(e.parentNode, n) : e.nodeType === 1 && Vo(e, n),
        si(e)) : Vo(ye, n.stateNode));
        break;
    case 4:
        r = ye,
        i = at,
        ye = n.stateNode.containerInfo,
        at = !0,
        Ot(e, t, n),
        ye = r,
        at = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!be && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && $a(n, t, o),
                i = i.next
            } while (i !== r)
        }
        Ot(e, t, n);
        break;
    case 1:
        if (!be && (Zn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                oe(n, t, l)
            }
        Ot(e, t, n);
        break;
    case 21:
        Ot(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (be = (r = be) || n.memoizedState !== null,
        Ot(e, t, n),
        be = r) : Ot(e, t, n);
        break;
    default:
        Ot(e, t, n)
    }
}
function rd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new qv),
        t.forEach(function(r) {
            var i = uy.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function rt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ye = l.stateNode,
                        at = !1;
                        break e;
                    case 3:
                        ye = l.stateNode.containerInfo,
                        at = !0;
                        break e;
                    case 4:
                        ye = l.stateNode.containerInfo,
                        at = !0;
                        break e
                    }
                    l = l.return
                }
                if (ye === null)
                    throw Error(M(160));
                Lp(s, o, i),
                ye = null,
                at = !1;
                var u = i.alternate;
                u !== null && (u.return = null),
                i.return = null
            } catch (c) {
                oe(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ip(t, e),
            t = t.sibling
}
function Ip(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (rt(t, e),
        ft(e),
        r & 4) {
            try {
                Xr(3, e, e.return),
                oo(3, e)
            } catch (w) {
                oe(e, e.return, w)
            }
            try {
                Xr(5, e, e.return)
            } catch (w) {
                oe(e, e.return, w)
            }
        }
        break;
    case 1:
        rt(t, e),
        ft(e),
        r & 512 && n !== null && Zn(n, n.return);
        break;
    case 5:
        if (rt(t, e),
        ft(e),
        r & 512 && n !== null && Zn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                ti(i, "")
            } catch (w) {
                oe(e, e.return, w)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , l = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && nf(i, s),
                    ya(l, o);
                    var c = ya(l, s);
                    for (o = 0; o < u.length; o += 2) {
                        var d = u[o]
                          , h = u[o + 1];
                        d === "style" ? lf(i, h) : d === "dangerouslySetInnerHTML" ? of(i, h) : d === "children" ? ti(i, h) : kl(i, d, h, c)
                    }
                    switch (l) {
                    case "input":
                        fa(i, s);
                        break;
                    case "textarea":
                        rf(i, s);
                        break;
                    case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var v = s.value;
                        v != null ? rr(i, !!s.multiple, v, !1) : f !== !!s.multiple && (s.defaultValue != null ? rr(i, !!s.multiple, s.defaultValue, !0) : rr(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[ci] = s
                } catch (w) {
                    oe(e, e.return, w)
                }
        }
        break;
    case 6:
        if (rt(t, e),
        ft(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(M(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (w) {
                oe(e, e.return, w)
            }
        }
        break;
    case 3:
        if (rt(t, e),
        ft(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                si(t.containerInfo)
            } catch (w) {
                oe(e, e.return, w)
            }
        break;
    case 4:
        rt(t, e),
        ft(e);
        break;
    case 13:
        rt(t, e),
        ft(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (ru = ue())),
        r & 4 && rd(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (be = (c = be) || d,
        rt(t, e),
        be = c) : rt(t, e),
        ft(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (D = e,
                d = e.child; d !== null; ) {
                    for (h = D = d; D !== null; ) {
                        switch (f = D,
                        v = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Xr(4, f, f.return);
                            break;
                        case 1:
                            Zn(f, f.return);
                            var x = f.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (w) {
                                    oe(r, n, w)
                                }
                            }
                            break;
                        case 5:
                            Zn(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                sd(h);
                                continue
                            }
                        }
                        v !== null ? (v.return = f,
                        D = v) : sd(h)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (d === null) {
                        d = h;
                        try {
                            i = h.stateNode,
                            c ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = h.stateNode,
                            u = h.memoizedProps.style,
                            o = u != null && u.hasOwnProperty("display") ? u.display : null,
                            l.style.display = af("display", o))
                        } catch (w) {
                            oe(e, e.return, w)
                        }
                    }
                } else if (h.tag === 6) {
                    if (d === null)
                        try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (w) {
                            oe(e, e.return, w)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    d === h && (d = null),
                    h = h.return
                }
                d === h && (d = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        rt(t, e),
        ft(e),
        r & 4 && rd(e);
        break;
    case 21:
        break;
    default:
        rt(t, e),
        ft(e)
    }
}
function ft(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Dp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (ti(i, ""),
                r.flags &= -33);
                var s = nd(e);
                Ga(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , l = nd(e);
                Xa(e, l, o);
                break;
            default:
                throw Error(M(161))
            }
        } catch (u) {
            oe(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function ty(e, t, n) {
    D = e,
    Vp(e)
}
function Vp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
        var i = D
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Yi;
            if (!o) {
                var l = i.alternate
                  , u = l !== null && l.memoizedState !== null || be;
                l = Yi;
                var c = be;
                if (Yi = o,
                (be = u) && !c)
                    for (D = i; D !== null; )
                        o = D,
                        u = o.child,
                        o.tag === 22 && o.memoizedState !== null ? od(i) : u !== null ? (u.return = o,
                        D = u) : od(i);
                for (; s !== null; )
                    D = s,
                    Vp(s),
                    s = s.sibling;
                D = i,
                Yi = l,
                be = c
            }
            id(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            D = s) : id(e)
    }
}
function id(e) {
    for (; D !== null; ) {
        var t = D;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        be || oo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !be)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : ot(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Uc(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Uc(t, o, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var h = d.dehydrated;
                                    h !== null && si(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(M(163))
                    }
                be || t.flags & 512 && Ka(t)
            } catch (f) {
                oe(t, t.return, f)
            }
        }
        if (t === e) {
            D = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function sd(e) {
    for (; D !== null; ) {
        var t = D;
        if (t === e) {
            D = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function od(e) {
    for (; D !== null; ) {
        var t = D;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    oo(4, t)
                } catch (u) {
                    oe(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        oe(t, i, u)
                    }
                }
                var s = t.return;
                try {
                    Ka(t)
                } catch (u) {
                    oe(t, s, u)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Ka(t)
                } catch (u) {
                    oe(t, o, u)
                }
            }
        } catch (u) {
            oe(t, t.return, u)
        }
        if (t === e) {
            D = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            D = l;
            break
        }
        D = t.return
    }
}
var ny = Math.ceil
  , Is = Vt.ReactCurrentDispatcher
  , tu = Vt.ReactCurrentOwner
  , Qe = Vt.ReactCurrentBatchConfig
  , W = 0
  , ge = null
  , de = null
  , we = 0
  , Ve = 0
  , Qn = cn(0)
  , pe = 0
  , gi = null
  , Pn = 0
  , ao = 0
  , nu = 0
  , Gr = null
  , Re = null
  , ru = 0
  , mr = 1 / 0
  , St = null
  , Vs = !1
  , Ya = null
  , qt = null
  , Zi = !1
  , Kt = null
  , _s = 0
  , Yr = 0
  , Za = null
  , us = -1
  , cs = 0;
function Ee() {
    return W & 6 ? ue() : us !== -1 ? us : us = ue()
}
function en(e) {
    return e.mode & 1 ? W & 2 && we !== 0 ? we & -we : Ov.transition !== null ? (cs === 0 && (cs = wf()),
    cs) : (e = $,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Tf(e.type)),
    e) : 1
}
function ct(e, t, n, r) {
    if (50 < Yr)
        throw Yr = 0,
        Za = null,
        Error(M(185));
    bi(e, n, r),
    (!(W & 2) || e !== ge) && (e === ge && (!(W & 2) && (ao |= n),
    pe === 4 && Wt(e, we)),
    Ie(e, r),
    n === 1 && W === 0 && !(t.mode & 1) && (mr = ue() + 500,
    ro && dn()))
}
function Ie(e, t) {
    var n = e.callbackNode;
    Og(e, t);
    var r = ws(e, e === ge ? we : 0);
    if (r === 0)
        n !== null && mc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && mc(n),
        t === 1)
            e.tag === 0 ? Fv(ad.bind(null, e)) : Kf(ad.bind(null, e)),
            Lv(function() {
                !(W & 6) && dn()
            }),
            n = null;
        else {
            switch (jf(r)) {
            case 1:
                n = El;
                break;
            case 4:
                n = yf;
                break;
            case 16:
                n = xs;
                break;
            case 536870912:
                n = xf;
                break;
            default:
                n = xs
            }
            n = Wp(n, _p.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function _p(e, t) {
    if (us = -1,
    cs = 0,
    W & 6)
        throw Error(M(327));
    var n = e.callbackNode;
    if (lr() && e.callbackNode !== n)
        return null;
    var r = ws(e, e === ge ? we : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Fs(e, r);
    else {
        t = r;
        var i = W;
        W |= 2;
        var s = Op();
        (ge !== e || we !== t) && (St = null,
        mr = ue() + 500,
        Nn(e, t));
        do
            try {
                sy();
                break
            } catch (l) {
                Fp(e, l)
            }
        while (!0);
        Ul(),
        Is.current = s,
        W = i,
        de !== null ? t = 0 : (ge = null,
        we = 0,
        t = pe)
    }
    if (t !== 0) {
        if (t === 2 && (i = Sa(e),
        i !== 0 && (r = i,
        t = Qa(e, i))),
        t === 1)
            throw n = gi,
            Nn(e, 0),
            Wt(e, r),
            Ie(e, ue()),
            n;
        if (t === 6)
            Wt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !ry(i) && (t = Fs(e, r),
            t === 2 && (s = Sa(e),
            s !== 0 && (r = s,
            t = Qa(e, s))),
            t === 1))
                throw n = gi,
                Nn(e, 0),
                Wt(e, r),
                Ie(e, ue()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(M(345));
            case 2:
                mn(e, Re, St);
                break;
            case 3:
                if (Wt(e, r),
                (r & 130023424) === r && (t = ru + 500 - ue(),
                10 < t)) {
                    if (ws(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Ee(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Ra(mn.bind(null, e, Re, St), t);
                    break
                }
                mn(e, Re, St);
                break;
            case 4:
                if (Wt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - ut(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = ue() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ny(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ra(mn.bind(null, e, Re, St), r);
                    break
                }
                mn(e, Re, St);
                break;
            case 5:
                mn(e, Re, St);
                break;
            default:
                throw Error(M(329))
            }
        }
    }
    return Ie(e, ue()),
    e.callbackNode === n ? _p.bind(null, e) : null
}
function Qa(e, t) {
    var n = Gr;
    return e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
    e = Fs(e, t),
    e !== 2 && (t = Re,
    Re = n,
    t !== null && Ja(t)),
    e
}
function Ja(e) {
    Re === null ? Re = e : Re.push.apply(Re, e)
}
function ry(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!dt(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Wt(e, t) {
    for (t &= ~nu,
    t &= ~ao,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - ut(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function ad(e) {
    if (W & 6)
        throw Error(M(327));
    lr();
    var t = ws(e, 0);
    if (!(t & 1))
        return Ie(e, ue()),
        null;
    var n = Fs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Sa(e);
        r !== 0 && (t = r,
        n = Qa(e, r))
    }
    if (n === 1)
        throw n = gi,
        Nn(e, 0),
        Wt(e, t),
        Ie(e, ue()),
        n;
    if (n === 6)
        throw Error(M(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    mn(e, Re, St),
    Ie(e, ue()),
    null
}
function iu(e, t) {
    var n = W;
    W |= 1;
    try {
        return e(t)
    } finally {
        W = n,
        W === 0 && (mr = ue() + 500,
        ro && dn())
    }
}
function En(e) {
    Kt !== null && Kt.tag === 0 && !(W & 6) && lr();
    var t = W;
    W |= 1;
    var n = Qe.transition
      , r = $;
    try {
        if (Qe.transition = null,
        $ = 1,
        e)
            return e()
    } finally {
        $ = r,
        Qe.transition = n,
        W = t,
        !(W & 6) && dn()
    }
}
function su() {
    Ve = Qn.current,
    Y(Qn)
}
function Nn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Dv(n)),
    de !== null)
        for (n = de.return; n !== null; ) {
            var r = n;
            switch (Ol(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && bs();
                break;
            case 3:
                fr(),
                Y(De),
                Y(Te),
                Gl();
                break;
            case 5:
                Xl(r);
                break;
            case 4:
                fr();
                break;
            case 13:
                Y(ee);
                break;
            case 19:
                Y(ee);
                break;
            case 10:
                Hl(r.type._context);
                break;
            case 22:
            case 23:
                su()
            }
            n = n.return
        }
    if (ge = e,
    de = e = tn(e.current, null),
    we = Ve = t,
    pe = 0,
    gi = null,
    nu = ao = Pn = 0,
    Re = Gr = null,
    xn !== null) {
        for (t = 0; t < xn.length; t++)
            if (n = xn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        xn = null
    }
    return e
}
function Fp(e, t) {
    do {
        var n = de;
        try {
            if (Ul(),
            os.current = Ls,
            Ds) {
                for (var r = ne.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Ds = !1
            }
            if (Tn = 0,
            me = fe = ne = null,
            Kr = !1,
            fi = 0,
            tu.current = null,
            n === null || n.return === null) {
                pe = 1,
                gi = t,
                de = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , l = n
                  , u = t;
                if (t = we,
                l.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u
                      , d = l
                      , h = d.tag;
                    if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var f = d.alternate;
                        f ? (d.updateQueue = f.updateQueue,
                        d.memoizedState = f.memoizedState,
                        d.lanes = f.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var v = Gc(o);
                    if (v !== null) {
                        v.flags &= -257,
                        Yc(v, o, l, s, t),
                        v.mode & 1 && Xc(s, c, t),
                        t = v,
                        u = c;
                        var x = t.updateQueue;
                        if (x === null) {
                            var w = new Set;
                            w.add(u),
                            t.updateQueue = w
                        } else
                            x.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Xc(s, c, t),
                            ou();
                            break e
                        }
                        u = Error(M(426))
                    }
                } else if (Q && l.mode & 1) {
                    var b = Gc(o);
                    if (b !== null) {
                        !(b.flags & 65536) && (b.flags |= 256),
                        Yc(b, o, l, s, t),
                        zl(pr(u, l));
                        break e
                    }
                }
                s = u = pr(u, l),
                pe !== 4 && (pe = 2),
                Gr === null ? Gr = [s] : Gr.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var m = jp(s, u, t);
                        Bc(s, m);
                        break e;
                    case 1:
                        l = u;
                        var p = s.type
                          , g = s.stateNode;
                        if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (qt === null || !qt.has(g)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var S = Np(s, l, t);
                            Bc(s, S);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Bp(n)
        } catch (N) {
            t = N,
            de === n && n !== null && (de = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Op() {
    var e = Is.current;
    return Is.current = Ls,
    e === null ? Ls : e
}
function ou() {
    (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    ge === null || !(Pn & 268435455) && !(ao & 268435455) || Wt(ge, we)
}
function Fs(e, t) {
    var n = W;
    W |= 2;
    var r = Op();
    (ge !== e || we !== t) && (St = null,
    Nn(e, t));
    do
        try {
            iy();
            break
        } catch (i) {
            Fp(e, i)
        }
    while (!0);
    if (Ul(),
    W = n,
    Is.current = r,
    de !== null)
        throw Error(M(261));
    return ge = null,
    we = 0,
    pe
}
function iy() {
    for (; de !== null; )
        zp(de)
}
function sy() {
    for (; de !== null && !Mg(); )
        zp(de)
}
function zp(e) {
    var t = Hp(e.alternate, e, Ve);
    e.memoizedProps = e.pendingProps,
    t === null ? Bp(e) : de = t,
    tu.current = null
}
function Bp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Jv(n, t),
            n !== null) {
                n.flags &= 32767,
                de = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                pe = 6,
                de = null;
                return
            }
        } else if (n = Qv(n, t, Ve),
        n !== null) {
            de = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            de = t;
            return
        }
        de = t = e
    } while (t !== null);
    pe === 0 && (pe = 5)
}
function mn(e, t, n) {
    var r = $
      , i = Qe.transition;
    try {
        Qe.transition = null,
        $ = 1,
        oy(e, t, n, r)
    } finally {
        Qe.transition = i,
        $ = r
    }
    return null
}
function oy(e, t, n, r) {
    do
        lr();
    while (Kt !== null);
    if (W & 6)
        throw Error(M(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(M(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (zg(e, s),
    e === ge && (de = ge = null,
    we = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Zi || (Zi = !0,
    Wp(xs, function() {
        return lr(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Qe.transition,
        Qe.transition = null;
        var o = $;
        $ = 1;
        var l = W;
        W |= 4,
        tu.current = null,
        ey(e, n),
        Ip(n, e),
        Cv(Ea),
        js = !!Pa,
        Ea = Pa = null,
        e.current = n,
        ty(n),
        Rg(),
        W = l,
        $ = o,
        Qe.transition = s
    } else
        e.current = n;
    if (Zi && (Zi = !1,
    Kt = e,
    _s = i),
    s = e.pendingLanes,
    s === 0 && (qt = null),
    Lg(n.stateNode),
    Ie(e, ue()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Vs)
        throw Vs = !1,
        e = Ya,
        Ya = null,
        e;
    return _s & 1 && e.tag !== 0 && lr(),
    s = e.pendingLanes,
    s & 1 ? e === Za ? Yr++ : (Yr = 0,
    Za = e) : Yr = 0,
    dn(),
    null
}
function lr() {
    if (Kt !== null) {
        var e = jf(_s)
          , t = Qe.transition
          , n = $;
        try {
            if (Qe.transition = null,
            $ = 16 > e ? 16 : e,
            Kt === null)
                var r = !1;
            else {
                if (e = Kt,
                Kt = null,
                _s = 0,
                W & 6)
                    throw Error(M(331));
                var i = W;
                for (W |= 4,
                D = e.current; D !== null; ) {
                    var s = D
                      , o = s.child;
                    if (D.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var c = l[u];
                                for (D = c; D !== null; ) {
                                    var d = D;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Xr(8, d, s)
                                    }
                                    var h = d.child;
                                    if (h !== null)
                                        h.return = d,
                                        D = h;
                                    else
                                        for (; D !== null; ) {
                                            d = D;
                                            var f = d.sibling
                                              , v = d.return;
                                            if (Ap(d),
                                            d === c) {
                                                D = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = v,
                                                D = f;
                                                break
                                            }
                                            D = v
                                        }
                                }
                            }
                            var x = s.alternate;
                            if (x !== null) {
                                var w = x.child;
                                if (w !== null) {
                                    x.child = null;
                                    do {
                                        var b = w.sibling;
                                        w.sibling = null,
                                        w = b
                                    } while (w !== null)
                                }
                            }
                            D = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        D = o;
                    else
                        e: for (; D !== null; ) {
                            if (s = D,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Xr(9, s, s.return)
                                }
                            var m = s.sibling;
                            if (m !== null) {
                                m.return = s.return,
                                D = m;
                                break e
                            }
                            D = s.return
                        }
                }
                var p = e.current;
                for (D = p; D !== null; ) {
                    o = D;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null)
                        g.return = o,
                        D = g;
                    else
                        e: for (o = p; D !== null; ) {
                            if (l = D,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        oo(9, l)
                                    }
                                } catch (N) {
                                    oe(l, l.return, N)
                                }
                            if (l === o) {
                                D = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                D = S;
                                break e
                            }
                            D = l.return
                        }
                }
                if (W = i,
                dn(),
                gt && typeof gt.onPostCommitFiberRoot == "function")
                    try {
                        gt.onPostCommitFiberRoot(Js, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            $ = n,
            Qe.transition = t
        }
    }
    return !1
}
function ld(e, t, n) {
    t = pr(n, t),
    t = jp(e, t, 1),
    e = Jt(e, t, 1),
    t = Ee(),
    e !== null && (bi(e, 1, t),
    Ie(e, t))
}
function oe(e, t, n) {
    if (e.tag === 3)
        ld(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                ld(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qt === null || !qt.has(r))) {
                    e = pr(n, e),
                    e = Np(t, e, 1),
                    t = Jt(t, e, 1),
                    e = Ee(),
                    t !== null && (bi(t, 1, e),
                    Ie(t, e));
                    break
                }
            }
            t = t.return
        }
}
function ay(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ee(),
    e.pingedLanes |= e.suspendedLanes & n,
    ge === e && (we & n) === n && (pe === 4 || pe === 3 && (we & 130023424) === we && 500 > ue() - ru ? Nn(e, 0) : nu |= n),
    Ie(e, t)
}
function Up(e, t) {
    t === 0 && (e.mode & 1 ? (t = zi,
    zi <<= 1,
    !(zi & 130023424) && (zi = 4194304)) : t = 1);
    var n = Ee();
    e = Dt(e, t),
    e !== null && (bi(e, t, n),
    Ie(e, n))
}
function ly(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Up(e, n)
}
function uy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(M(314))
    }
    r !== null && r.delete(t),
    Up(e, n)
}
var Hp;
Hp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || De.current)
            Ae = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ae = !1,
                Zv(e, t, n);
            Ae = !!(e.flags & 131072)
        }
    else
        Ae = !1,
        Q && t.flags & 1048576 && Xf(t, Ps, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ls(e, t),
        e = t.pendingProps;
        var i = cr(t, Te.current);
        ar(t, n),
        i = Zl(null, t, r, e, i, n);
        var s = Ql();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Le(r) ? (s = !0,
        Cs(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        $l(t),
        i.updater = so,
        t.stateNode = i,
        i._reactInternals = t,
        Fa(t, r, e, n),
        t = Ba(null, t, r, !0, s, n)) : (t.tag = 0,
        Q && s && Fl(t),
        Pe(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ls(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = dy(r),
            e = ot(r, e),
            i) {
            case 0:
                t = za(null, t, r, e, n);
                break e;
            case 1:
                t = Jc(null, t, r, e, n);
                break e;
            case 11:
                t = Zc(null, t, r, e, n);
                break e;
            case 14:
                t = Qc(null, t, r, ot(r.type, e), n);
                break e
            }
            throw Error(M(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : ot(r, i),
        za(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : ot(r, i),
        Jc(e, t, r, i, n);
    case 3:
        e: {
            if (Cp(t),
            e === null)
                throw Error(M(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            qf(e, t),
            Rs(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = pr(Error(M(423)), t),
                    t = qc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = pr(Error(M(424)), t),
                    t = qc(e, t, r, n, i);
                    break e
                } else
                    for (_e = Qt(t.stateNode.containerInfo.firstChild),
                    Fe = t,
                    Q = !0,
                    lt = null,
                    n = Qf(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (dr(),
                r === i) {
                    t = Lt(e, t, n);
                    break e
                }
                Pe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return ep(t),
        e === null && Ia(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        Ma(r, i) ? o = null : s !== null && Ma(r, s) && (t.flags |= 32),
        bp(e, t),
        Pe(e, t, o, n),
        t.child;
    case 6:
        return e === null && Ia(t),
        null;
    case 13:
        return Tp(e, t, n);
    case 4:
        return Kl(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = hr(t, null, r, n) : Pe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : ot(r, i),
        Zc(e, t, r, i, n);
    case 7:
        return Pe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Pe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Pe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            X(Es, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (dt(s.value, o)) {
                    if (s.children === i.children && !De.current) {
                        t = Lt(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            o = s.child;
                            for (var u = l.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (s.tag === 1) {
                                        u = Pt(-1, n & -n),
                                        u.tag = 2;
                                        var c = s.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? u.next = u : (u.next = d.next,
                                            d.next = u),
                                            c.pending = u
                                        }
                                    }
                                    s.lanes |= n,
                                    u = s.alternate,
                                    u !== null && (u.lanes |= n),
                                    Va(s.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(M(341));
                            o.lanes |= n,
                            l = o.alternate,
                            l !== null && (l.lanes |= n),
                            Va(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            Pe(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        ar(t, n),
        i = Je(i),
        r = r(i),
        t.flags |= 1,
        Pe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = ot(r, t.pendingProps),
        i = ot(r.type, i),
        Qc(e, t, r, i, n);
    case 15:
        return Sp(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : ot(r, i),
        ls(e, t),
        t.tag = 1,
        Le(r) ? (e = !0,
        Cs(t)) : e = !1,
        ar(t, n),
        wp(t, r, i),
        Fa(t, r, i, n),
        Ba(null, t, r, !0, e, n);
    case 19:
        return Pp(e, t, n);
    case 22:
        return kp(e, t, n)
    }
    throw Error(M(156, t.tag))
}
;
function Wp(e, t) {
    return vf(e, t)
}
function cy(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ze(e, t, n, r) {
    return new cy(e,t,n,r)
}
function au(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function dy(e) {
    if (typeof e == "function")
        return au(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Cl)
            return 11;
        if (e === Tl)
            return 14
    }
    return 2
}
function tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ze(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ds(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        au(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Bn:
            return Sn(n.children, i, s, t);
        case bl:
            o = 8,
            i |= 8;
            break;
        case la:
            return e = Ze(12, n, t, i | 2),
            e.elementType = la,
            e.lanes = s,
            e;
        case ua:
            return e = Ze(13, n, t, i),
            e.elementType = ua,
            e.lanes = s,
            e;
        case ca:
            return e = Ze(19, n, t, i),
            e.elementType = ca,
            e.lanes = s,
            e;
        case qh:
            return lo(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Qh:
                    o = 10;
                    break e;
                case Jh:
                    o = 9;
                    break e;
                case Cl:
                    o = 11;
                    break e;
                case Tl:
                    o = 14;
                    break e;
                case Bt:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(M(130, e == null ? e : typeof e, ""))
        }
    return t = Ze(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Sn(e, t, n, r) {
    return e = Ze(7, e, r, t),
    e.lanes = n,
    e
}
function lo(e, t, n, r) {
    return e = Ze(22, e, r, t),
    e.elementType = qh,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Wo(e, t, n) {
    return e = Ze(6, e, null, t),
    e.lanes = n,
    e
}
function $o(e, t, n) {
    return t = Ze(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function hy(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = bo(0),
    this.expirationTimes = bo(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = bo(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function lu(e, t, n, r, i, s, o, l, u) {
    return e = new hy(e,t,n,l,u),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Ze(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    $l(s),
    e
}
function fy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: zn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function $p(e) {
    if (!e)
        return sn;
    e = e._reactInternals;
    e: {
        if (An(e) !== e || e.tag !== 1)
            throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Le(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(M(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Le(n))
            return $f(e, n, t)
    }
    return t
}
function Kp(e, t, n, r, i, s, o, l, u) {
    return e = lu(n, r, !0, e, i, s, o, l, u),
    e.context = $p(null),
    n = e.current,
    r = Ee(),
    i = en(n),
    s = Pt(r, i),
    s.callback = t ?? null,
    Jt(n, s, i),
    e.current.lanes = i,
    bi(e, i, r),
    Ie(e, r),
    e
}
function uo(e, t, n, r) {
    var i = t.current
      , s = Ee()
      , o = en(i);
    return n = $p(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Pt(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Jt(i, t, o),
    e !== null && (ct(e, i, o, s),
    ss(e, i, o)),
    o
}
function Os(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function ud(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function uu(e, t) {
    ud(e, t),
    (e = e.alternate) && ud(e, t)
}
function py() {
    return null
}
var Xp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function cu(e) {
    this._internalRoot = e
}
co.prototype.render = cu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(M(409));
    uo(e, t, null, null)
}
;
co.prototype.unmount = cu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        En(function() {
            uo(null, e, null, null)
        }),
        t[At] = null
    }
}
;
function co(e) {
    this._internalRoot = e
}
co.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = kf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++)
            ;
        Ht.splice(n, 0, e),
        n === 0 && Cf(e)
    }
}
;
function du(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function ho(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function cd() {}
function my(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var c = Os(o);
                s.call(c)
            }
        }
        var o = Kp(t, r, e, 0, null, !1, !1, "", cd);
        return e._reactRootContainer = o,
        e[At] = o.current,
        li(e.nodeType === 8 ? e.parentNode : e),
        En(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var c = Os(u);
            l.call(c)
        }
    }
    var u = lu(e, 0, !1, null, null, !1, !1, "", cd);
    return e._reactRootContainer = u,
    e[At] = u.current,
    li(e.nodeType === 8 ? e.parentNode : e),
    En(function() {
        uo(t, u, n, r)
    }),
    u
}
function fo(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var u = Os(o);
                l.call(u)
            }
        }
        uo(t, o, e, i)
    } else
        o = my(n, t, e, i, r);
    return Os(o)
}
Nf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Vr(t.pendingLanes);
            n !== 0 && (Ml(t, n | 1),
            Ie(t, ue()),
            !(W & 6) && (mr = ue() + 500,
            dn()))
        }
        break;
    case 13:
        En(function() {
            var r = Dt(e, 1);
            if (r !== null) {
                var i = Ee();
                ct(r, e, 1, i)
            }
        }),
        uu(e, 1)
    }
}
;
Rl = function(e) {
    if (e.tag === 13) {
        var t = Dt(e, 134217728);
        if (t !== null) {
            var n = Ee();
            ct(t, e, 134217728, n)
        }
        uu(e, 134217728)
    }
}
;
Sf = function(e) {
    if (e.tag === 13) {
        var t = en(e)
          , n = Dt(e, t);
        if (n !== null) {
            var r = Ee();
            ct(n, e, t, r)
        }
        uu(e, t)
    }
}
;
kf = function() {
    return $
}
;
bf = function(e, t) {
    var n = $;
    try {
        return $ = e,
        t()
    } finally {
        $ = n
    }
}
;
wa = function(e, t, n) {
    switch (t) {
    case "input":
        if (fa(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = no(r);
                    if (!i)
                        throw Error(M(90));
                    tf(r),
                    fa(r, i)
                }
            }
        }
        break;
    case "textarea":
        rf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && rr(e, !!n.multiple, t, !1)
    }
}
;
df = iu;
hf = En;
var gy = {
    usingClientEntryPoint: !1,
    Events: [Ti, $n, no, uf, cf, iu]
}
  , Ar = {
    findFiberByHostInstance: yn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , vy = {
    bundleType: Ar.bundleType,
    version: Ar.version,
    rendererPackageName: Ar.rendererPackageName,
    rendererConfig: Ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = mf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ar.findFiberByHostInstance || py,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qi.isDisabled && Qi.supportsFiber)
        try {
            Js = Qi.inject(vy),
            gt = Qi
        } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy;
Ue.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!du(t))
        throw Error(M(200));
    return fy(e, t, null, n)
}
;
Ue.createRoot = function(e, t) {
    if (!du(e))
        throw Error(M(299));
    var n = !1
      , r = ""
      , i = Xp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = lu(e, 1, !1, null, null, n, !1, r, i),
    e[At] = t.current,
    li(e.nodeType === 8 ? e.parentNode : e),
    new cu(t)
}
;
Ue.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","),
        Error(M(268, e)));
    return e = mf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ue.flushSync = function(e) {
    return En(e)
}
;
Ue.hydrate = function(e, t, n) {
    if (!ho(t))
        throw Error(M(200));
    return fo(null, e, t, !0, n)
}
;
Ue.hydrateRoot = function(e, t, n) {
    if (!du(e))
        throw Error(M(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = Xp;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Kp(t, null, e, 1, n ?? null, i, !1, s, o),
    e[At] = t.current,
    li(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new co(t)
}
;
Ue.render = function(e, t, n) {
    if (!ho(t))
        throw Error(M(200));
    return fo(null, e, t, !1, n)
}
;
Ue.unmountComponentAtNode = function(e) {
    if (!ho(e))
        throw Error(M(40));
    return e._reactRootContainer ? (En(function() {
        fo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[At] = null
        })
    }),
    !0) : !1
}
;
Ue.unstable_batchedUpdates = iu;
Ue.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ho(n))
        throw Error(M(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(M(38));
    return fo(e, t, n, !1, r)
}
;
Ue.version = "18.3.1-next-f1338f8080-20240426";
function Gp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gp)
        } catch (e) {
            console.error(e)
        }
}
Gp(),
Xh.exports = Ue;
var yy = Xh.exports, Yp, dd = yy;
Yp = dd.createRoot,
dd.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function vi() {
    return vi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    vi.apply(this, arguments)
}
var Xt;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Xt || (Xt = {}));
const hd = "popstate";
function xy(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: s, search: o, hash: l} = r.location;
        return qa("", {
            pathname: s,
            search: o,
            hash: l
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : zs(i)
    }
    return jy(t, n, null, e)
}
function he(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Zp(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function wy() {
    return Math.random().toString(36).substr(2, 8)
}
function fd(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function qa(e, t, n, r) {
    return n === void 0 && (n = null),
    vi({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? jr(t) : t, {
        state: n,
        key: t && t.key || r || wy()
    })
}
function zs(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function jr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function jy(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: s=!1} = r
      , o = i.history
      , l = Xt.Pop
      , u = null
      , c = d();
    c == null && (c = 0,
    o.replaceState(vi({}, o.state, {
        idx: c
    }), ""));
    function d() {
        return (o.state || {
            idx: null
        }).idx
    }
    function h() {
        l = Xt.Pop;
        let b = d()
          , m = b == null ? null : b - c;
        c = b,
        u && u({
            action: l,
            location: w.location,
            delta: m
        })
    }
    function f(b, m) {
        l = Xt.Push;
        let p = qa(w.location, b, m);
        c = d() + 1;
        let g = fd(p, c)
          , S = w.createHref(p);
        try {
            o.pushState(g, "", S)
        } catch (N) {
            if (N instanceof DOMException && N.name === "DataCloneError")
                throw N;
            i.location.assign(S)
        }
        s && u && u({
            action: l,
            location: w.location,
            delta: 1
        })
    }
    function v(b, m) {
        l = Xt.Replace;
        let p = qa(w.location, b, m);
        c = d();
        let g = fd(p, c)
          , S = w.createHref(p);
        o.replaceState(g, "", S),
        s && u && u({
            action: l,
            location: w.location,
            delta: 0
        })
    }
    function x(b) {
        let m = i.location.origin !== "null" ? i.location.origin : i.location.href
          , p = typeof b == "string" ? b : zs(b);
        return p = p.replace(/ $/, "%20"),
        he(m, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,m)
    }
    let w = {
        get action() {
            return l
        },
        get location() {
            return e(i, o)
        },
        listen(b) {
            if (u)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(hd, h),
            u = b,
            () => {
                i.removeEventListener(hd, h),
                u = null
            }
        },
        createHref(b) {
            return t(i, b)
        },
        createURL: x,
        encodeLocation(b) {
            let m = x(b);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: f,
        replace: v,
        go(b) {
            return o.go(b)
        }
    };
    return w
}
var pd;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(pd || (pd = {}));
function Ny(e, t, n) {
    return n === void 0 && (n = "/"),
    Sy(e, t, n, !1)
}
function Sy(e, t, n, r) {
    let i = typeof t == "string" ? jr(t) : t
      , s = hu(i.pathname || "/", n);
    if (s == null)
        return null;
    let o = Qp(e);
    ky(o);
    let l = null;
    for (let u = 0; l == null && u < o.length; ++u) {
        let c = Iy(s);
        l = Dy(o[u], c, r)
    }
    return l
}
function Qp(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (s, o, l) => {
        let u = {
            relativePath: l === void 0 ? s.path || "" : l,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        u.relativePath.startsWith("/") && (he(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        u.relativePath = u.relativePath.slice(r.length));
        let c = nn([r, u.relativePath])
          , d = n.concat(u);
        s.children && s.children.length > 0 && (he(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        Qp(s.children, t, d, c)),
        !(s.path == null && !s.index) && t.push({
            path: c,
            score: Ry(c, s.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (s, o) => {
        var l;
        if (s.path === "" || !((l = s.path) != null && l.includes("?")))
            i(s, o);
        else
            for (let u of Jp(s.path))
                i(s, o, u)
    }
    ),
    t
}
function Jp(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [s, ""] : [s];
    let o = Jp(r.join("/"))
      , l = [];
    return l.push(...o.map(u => u === "" ? s : [s, u].join("/"))),
    i && l.push(...o),
    l.map(u => e.startsWith("/") && u === "" ? "/" : u)
}
function ky(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Ay(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const by = /^:[\w-]+$/
  , Cy = 3
  , Ty = 2
  , Py = 1
  , Ey = 10
  , My = -2
  , md = e => e === "*";
function Ry(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(md) && (r += My),
    t && (r += Ty),
    n.filter(i => !md(i)).reduce( (i, s) => i + (by.test(s) ? Cy : s === "" ? Py : Ey), r)
}
function Ay(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Dy(e, t, n) {
    let {routesMeta: r} = e
      , i = {}
      , s = "/"
      , o = [];
    for (let l = 0; l < r.length; ++l) {
        let u = r[l]
          , c = l === r.length - 1
          , d = s === "/" ? t : t.slice(s.length) || "/"
          , h = gd({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: c
        }, d)
          , f = u.route;
        if (!h && c && n && !r[r.length - 1].route.index && (h = gd({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: !1
        }, d)),
        !h)
            return null;
        Object.assign(i, h.params),
        o.push({
            params: i,
            pathname: nn([s, h.pathname]),
            pathnameBase: Oy(nn([s, h.pathnameBase])),
            route: f
        }),
        h.pathnameBase !== "/" && (s = nn([s, h.pathnameBase]))
    }
    return o
}
function gd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Ly(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let s = i[0]
      , o = s.replace(/(.)\/+$/, "$1")
      , l = i.slice(1);
    return {
        params: r.reduce( (c, d, h) => {
            let {paramName: f, isOptional: v} = d;
            if (f === "*") {
                let w = l[h] || "";
                o = s.slice(0, s.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const x = l[h];
            return v && !x ? c[f] = void 0 : c[f] = (x || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}
function Ly(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Zp(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, l, u) => (r.push({
        paramName: l,
        isOptional: u != null
    }),
    u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function Iy(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Zp(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function hu(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Vy(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? jr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : _y(n, t) : t,
        search: zy(r),
        hash: By(i)
    }
}
function _y(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Ko(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Fy(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function qp(e, t) {
    let n = Fy(e);
    return t ? n.map( (r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function em(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = jr(e) : (i = vi({}, e),
    he(!i.pathname || !i.pathname.includes("?"), Ko("?", "pathname", "search", i)),
    he(!i.pathname || !i.pathname.includes("#"), Ko("#", "pathname", "hash", i)),
    he(!i.search || !i.search.includes("#"), Ko("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, l;
    if (o == null)
        l = n;
    else {
        let h = t.length - 1;
        if (!r && o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                h -= 1;
            i.pathname = f.join("/")
        }
        l = h >= 0 ? t[h] : "/"
    }
    let u = Vy(i, l)
      , c = o && o !== "/" && o.endsWith("/")
      , d = (s || o === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"),
    u
}
const nn = e => e.join("/").replace(/\/\/+/g, "/")
  , Oy = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , zy = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , By = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Uy(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const tm = ["post", "put", "patch", "delete"];
new Set(tm);
const Hy = ["get", ...tm];
new Set(Hy);
/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function yi() {
    return yi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    yi.apply(this, arguments)
}
const fu = y.createContext(null)
  , Wy = y.createContext(null)
  , Dn = y.createContext(null)
  , po = y.createContext(null)
  , Ln = y.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , nm = y.createContext(null);
function $y(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Ei() || he(!1);
    let {basename: r, navigator: i} = y.useContext(Dn)
      , {hash: s, pathname: o, search: l} = im(e, {
        relative: n
    })
      , u = o;
    return r !== "/" && (u = o === "/" ? r : nn([r, o])),
    i.createHref({
        pathname: u,
        search: l,
        hash: s
    })
}
function Ei() {
    return y.useContext(po) != null
}
function In() {
    return Ei() || he(!1),
    y.useContext(po).location
}
function rm(e) {
    y.useContext(Dn).static || y.useLayoutEffect(e)
}
function pu() {
    let {isDataRoute: e} = y.useContext(Ln);
    return e ? ix() : Ky()
}
function Ky() {
    Ei() || he(!1);
    let e = y.useContext(fu)
      , {basename: t, future: n, navigator: r} = y.useContext(Dn)
      , {matches: i} = y.useContext(Ln)
      , {pathname: s} = In()
      , o = JSON.stringify(qp(i, n.v7_relativeSplatPath))
      , l = y.useRef(!1);
    return rm( () => {
        l.current = !0
    }
    ),
    y.useCallback(function(c, d) {
        if (d === void 0 && (d = {}),
        !l.current)
            return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let h = em(c, JSON.parse(o), s, d.relative === "path");
        e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : nn([t, h.pathname])),
        (d.replace ? r.replace : r.push)(h, d.state, d)
    }, [t, r, o, s, e])
}
function im(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = y.useContext(Dn)
      , {matches: i} = y.useContext(Ln)
      , {pathname: s} = In()
      , o = JSON.stringify(qp(i, r.v7_relativeSplatPath));
    return y.useMemo( () => em(e, JSON.parse(o), s, n === "path"), [e, o, s, n])
}
function Xy(e, t) {
    return Gy(e, t)
}
function Gy(e, t, n, r) {
    Ei() || he(!1);
    let {navigator: i} = y.useContext(Dn)
      , {matches: s} = y.useContext(Ln)
      , o = s[s.length - 1]
      , l = o ? o.params : {};
    o && o.pathname;
    let u = o ? o.pathnameBase : "/";
    o && o.route;
    let c = In(), d;
    if (t) {
        var h;
        let b = typeof t == "string" ? jr(t) : t;
        u === "/" || (h = b.pathname) != null && h.startsWith(u) || he(!1),
        d = b
    } else
        d = c;
    let f = d.pathname || "/"
      , v = f;
    if (u !== "/") {
        let b = u.replace(/^\//, "").split("/");
        v = "/" + f.replace(/^\//, "").split("/").slice(b.length).join("/")
    }
    let x = Ny(e, {
        pathname: v
    })
      , w = qy(x && x.map(b => Object.assign({}, b, {
        params: Object.assign({}, l, b.params),
        pathname: nn([u, i.encodeLocation ? i.encodeLocation(b.pathname).pathname : b.pathname]),
        pathnameBase: b.pathnameBase === "/" ? u : nn([u, i.encodeLocation ? i.encodeLocation(b.pathnameBase).pathname : b.pathnameBase])
    })), s, n, r);
    return t && w ? y.createElement(po.Provider, {
        value: {
            location: yi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Xt.Pop
        }
    }, w) : w
}
function Yy() {
    let e = rx()
      , t = Uy(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return y.createElement(y.Fragment, null, y.createElement("h2", null, "Unexpected Application Error!"), y.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? y.createElement("pre", {
        style: i
    }, n) : null, null)
}
const Zy = y.createElement(Yy, null);
class Qy extends y.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? y.createElement(Ln.Provider, {
            value: this.props.routeContext
        }, y.createElement(nm.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Jy(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = y.useContext(fu);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Ln.Provider, {
        value: t
    }, r)
}
function qy(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , l = (i = n) == null ? void 0 : i.errors;
    if (l != null) {
        let d = o.findIndex(h => h.route.id && (l == null ? void 0 : l[h.route.id]) !== void 0);
        d >= 0 || he(!1),
        o = o.slice(0, Math.min(o.length, d + 1))
    }
    let u = !1
      , c = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let h = o[d];
            if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = d),
            h.route.id) {
                let {loaderData: f, errors: v} = n
                  , x = h.route.loader && f[h.route.id] === void 0 && (!v || v[h.route.id] === void 0);
                if (h.route.lazy || x) {
                    u = !0,
                    c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (d, h, f) => {
        let v, x = !1, w = null, b = null;
        n && (v = l && h.route.id ? l[h.route.id] : void 0,
        w = h.route.errorElement || Zy,
        u && (c < 0 && f === 0 ? (x = !0,
        b = null) : c === f && (x = !0,
        b = h.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, f + 1))
          , p = () => {
            let g;
            return v ? g = w : x ? g = b : h.route.Component ? g = y.createElement(h.route.Component, null) : h.route.element ? g = h.route.element : g = d,
            y.createElement(Jy, {
                match: h,
                routeContext: {
                    outlet: d,
                    matches: m,
                    isDataRoute: n != null
                },
                children: g
            })
        }
        ;
        return n && (h.route.ErrorBoundary || h.route.errorElement || f === 0) ? y.createElement(Qy, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: v,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var sm = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(sm || {})
  , Bs = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Bs || {});
function ex(e) {
    let t = y.useContext(fu);
    return t || he(!1),
    t
}
function tx(e) {
    let t = y.useContext(Wy);
    return t || he(!1),
    t
}
function nx(e) {
    let t = y.useContext(Ln);
    return t || he(!1),
    t
}
function om(e) {
    let t = nx()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || he(!1),
    n.route.id
}
function rx() {
    var e;
    let t = y.useContext(nm)
      , n = tx(Bs.UseRouteError)
      , r = om(Bs.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function ix() {
    let {router: e} = ex(sm.UseNavigateStable)
      , t = om(Bs.UseNavigateStable)
      , n = y.useRef(!1);
    return rm( () => {
        n.current = !0
    }
    ),
    y.useCallback(function(i, s) {
        s === void 0 && (s = {}),
        n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, yi({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
const vd = {};
function sx(e, t) {
    vd[t] || (vd[t] = !0,
    console.warn(t))
}
const yd = (e, t, n) => sx(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));
function ox(e, t) {
    (e == null ? void 0 : e.v7_startTransition) === void 0 && yd("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"),
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && !t && yd("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")
}
function it(e) {
    he(!1)
}
function ax(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=Xt.Pop, navigator: s, static: o=!1, future: l} = e;
    Ei() && he(!1);
    let u = t.replace(/^\/*/, "/")
      , c = y.useMemo( () => ({
        basename: u,
        navigator: s,
        static: o,
        future: yi({
            v7_relativeSplatPath: !1
        }, l)
    }), [u, l, s, o]);
    typeof r == "string" && (r = jr(r));
    let {pathname: d="/", search: h="", hash: f="", state: v=null, key: x="default"} = r
      , w = y.useMemo( () => {
        let b = hu(d, u);
        return b == null ? null : {
            location: {
                pathname: b,
                search: h,
                hash: f,
                state: v,
                key: x
            },
            navigationType: i
        }
    }
    , [u, d, h, f, v, x, i]);
    return w == null ? null : y.createElement(Dn.Provider, {
        value: c
    }, y.createElement(po.Provider, {
        children: n,
        value: w
    }))
}
function lx(e) {
    let {children: t, location: n} = e;
    return Xy(el(t), n)
}
new Promise( () => {}
);
function el(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return y.Children.forEach(e, (r, i) => {
        if (!y.isValidElement(r))
            return;
        let s = [...t, i];
        if (r.type === y.Fragment) {
            n.push.apply(n, el(r.props.children, s));
            return
        }
        r.type !== it && he(!1),
        !r.props.index || !r.props.children || he(!1);
        let o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = el(r.props.children, s)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function tl() {
    return tl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    tl.apply(this, arguments)
}
function ux(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, s;
    for (s = 0; s < r.length; s++)
        i = r[s],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function cx(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function dx(e, t) {
    return e.button === 0 && (!t || t === "_self") && !cx(e)
}
const hx = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , fx = "6";
try {
    window.__reactRouterVersion = fx
} catch {}
const px = "startTransition"
  , xd = og[px];
function mx(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , s = y.useRef();
    s.current == null && (s.current = xy({
        window: i,
        v5Compat: !0
    }));
    let o = s.current
      , [l,u] = y.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: c} = r || {}
      , d = y.useCallback(h => {
        c && xd ? xd( () => u(h)) : u(h)
    }
    , [u, c]);
    return y.useLayoutEffect( () => o.listen(d), [o, d]),
    y.useEffect( () => ox(r), [r]),
    y.createElement(ax, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: o,
        future: r
    })
}
const gx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , vx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Tt = y.forwardRef(function(t, n) {
    let {onClick: r, relative: i, reloadDocument: s, replace: o, state: l, target: u, to: c, preventScrollReset: d, viewTransition: h} = t, f = ux(t, hx), {basename: v} = y.useContext(Dn), x, w = !1;
    if (typeof c == "string" && vx.test(c) && (x = c,
    gx))
        try {
            let g = new URL(window.location.href)
              , S = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c)
              , N = hu(S.pathname, v);
            S.origin === g.origin && N != null ? c = N + S.search + S.hash : w = !0
        } catch {}
    let b = $y(c, {
        relative: i
    })
      , m = yx(c, {
        replace: o,
        state: l,
        target: u,
        preventScrollReset: d,
        relative: i,
        viewTransition: h
    });
    function p(g) {
        r && r(g),
        g.defaultPrevented || m(g)
    }
    return y.createElement("a", tl({}, f, {
        href: x || b,
        onClick: w || s ? r : p,
        ref: n,
        target: u
    }))
});
var wd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(wd || (wd = {}));
var jd;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(jd || (jd = {}));
function yx(e, t) {
    let {target: n, replace: r, state: i, preventScrollReset: s, relative: o, viewTransition: l} = t === void 0 ? {} : t
      , u = pu()
      , c = In()
      , d = im(e, {
        relative: o
    });
    return y.useCallback(h => {
        if (dx(h, n)) {
            h.preventDefault();
            let f = r !== void 0 ? r : zs(c) === zs(d);
            u(e, {
                replace: f,
                state: i,
                preventScrollReset: s,
                relative: o,
                viewTransition: l
            })
        }
    }
    , [c, u, d, r, i, n, e, s, o, l])
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , z = (e, t) => {
    const n = y.forwardRef( ({color: r="currentColor", size: i=24, strokeWidth: s=2, absoluteStrokeWidth: o, className: l="", children: u, ...c}, d) => y.createElement("svg", {
        ref: d,
        ...xx,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: o ? Number(s) * 24 / Number(i) : s,
        className: ["lucide", `lucide-${wx(e)}`, l].join(" "),
        ...c
    }, [...t.map( ([h,f]) => y.createElement(h, f)), ...Array.isArray(u) ? u : [u]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = z("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = z("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = z("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nx = z("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sx = z("Brain", [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = z("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = z("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mu = z("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = z("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = z("Cpu", [["rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    key: "1vbyd7"
}], ["rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6",
    key: "o3kz5p"
}], ["path", {
    d: "M15 2v2",
    key: "13l42r"
}], ["path", {
    d: "M15 20v2",
    key: "15mkzm"
}], ["path", {
    d: "M2 15h2",
    key: "1gxd5l"
}], ["path", {
    d: "M2 9h2",
    key: "1bbxkp"
}], ["path", {
    d: "M20 15h2",
    key: "19e6y8"
}], ["path", {
    d: "M20 9h2",
    key: "19tzq7"
}], ["path", {
    d: "M9 2v2",
    key: "165o2o"
}], ["path", {
    d: "M9 20v2",
    key: "i2bqo8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cx = z("Crown", [["path", {
    d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
    key: "zkxr6b"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = z("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = z("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = z("Eye", [["path", {
    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
    key: "rwhkz3"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = z("FileCode2", [["path", {
    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
    key: "1pf5j1"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "m5 12-3 3 3 3",
    key: "oke12k"
}], ["path", {
    d: "m9 18 3-3-3-3",
    key: "112psh"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Px = z("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ex = z("Fingerprint", [["path", {
    d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",
    key: "1jc9o5"
}], ["path", {
    d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",
    key: "1mxgy1"
}], ["path", {
    d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
    key: "ptglia"
}], ["path", {
    d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
    key: "1nerag"
}], ["path", {
    d: "M8.65 22c.21-.66.45-1.32.57-2",
    key: "13wd9y"
}], ["path", {
    d: "M14 13.12c0 2.38 0 6.38-1 8.88",
    key: "o46ks0"
}], ["path", {
    d: "M2 16h.01",
    key: "1gqxmh"
}], ["path", {
    d: "M21.8 16c.2-2 .131-5.354 0-6",
    key: "drycrb"
}], ["path", {
    d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",
    key: "1fgabc"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = z("FolderOpen", [["path", {
    d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
    key: "usdka0"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rx = z("Gift", [["rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1",
    key: "bkv52"
}], ["path", {
    d: "M12 8v13",
    key: "1c76mn"
}], ["path", {
    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
    key: "6wjy6b"
}], ["path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
    key: "1ihvrl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ax = z("Github", [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = z("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = z("HelpCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sd = z("Home", [["path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "y5dka4"
}], ["polyline", {
    points: "9 22 9 12 15 12 15 22",
    key: "e2us08"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dx = z("Key", [["circle", {
    cx: "7.5",
    cy: "15.5",
    r: "5.5",
    key: "yqb3hr"
}], ["path", {
    d: "m21 2-9.6 9.6",
    key: "1j0ho8"
}], ["path", {
    d: "m15.5 7.5 3 3L22 7l-3-3",
    key: "1rn1fs"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lx = z("Loader2", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ix = z("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vx = z("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = z("Minus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fx = z("PanelsTopLeft", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}], ["path", {
    d: "M3 9h18",
    key: "1pudct"
}], ["path", {
    d: "M9 21V9",
    key: "1oto5p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ox = z("Pen", [["path", {
    d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",
    key: "5qss01"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = z("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hm = z("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = z("Save", [["path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
    key: "1owoqh"
}], ["polyline", {
    points: "17 21 17 13 7 13 7 21",
    key: "1md35c"
}], ["polyline", {
    points: "7 3 7 8 15 8",
    key: "8nz8an"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bx = z("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kd = z("Settings2", [["path", {
    d: "M20 7h-9",
    key: "3s1dr2"
}], ["path", {
    d: "M14 17H5",
    key: "gfn3mx"
}], ["circle", {
    cx: "17",
    cy: "17",
    r: "3",
    key: "18b49y"
}], ["circle", {
    cx: "7",
    cy: "7",
    r: "3",
    key: "dfmy0x"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xi = z("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = z("Sparkles", [["path", {
    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
    key: "17u4zn"
}], ["path", {
    d: "M5 3v4",
    key: "bklmnn"
}], ["path", {
    d: "M19 17v4",
    key: "iiml17"
}], ["path", {
    d: "M3 5h4",
    key: "nem4j1"
}], ["path", {
    d: "M17 19h4",
    key: "lbex7p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bd = z("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = z("Terminal", [["polyline", {
    points: "4 17 10 11 4 5",
    key: "akl6gq"
}], ["line", {
    x1: "12",
    x2: "20",
    y1: "19",
    y2: "19",
    key: "q2wloq"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = z("ThumbsDown", [["path", {
    d: "M17 14V2",
    key: "8ymqnk"
}], ["path", {
    d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
    key: "s6e0r"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hx = z("ThumbsUp", [["path", {
    d: "M7 10v12",
    key: "1qc93n"
}], ["path", {
    d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
    key: "y3tblf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = z("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wx = z("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = z("XCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m15 9-6 6",
    key: "1uzhvr"
}], ["path", {
    d: "m9 9 6 6",
    key: "z0biqf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = z("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = z("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
  , gu = y.createContext({});
function vu(e) {
    const t = y.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const mo = y.createContext(null)
  , yu = y.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
class Kx extends y.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function Xx({children: e, isPresent: t}) {
    const n = y.useId()
      , r = y.useRef(null)
      , i = y.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: s} = y.useContext(yu);
    return y.useInsertionEffect( () => {
        const {width: o, height: l, top: u, left: c} = i.current;
        if (t || !r.current || !o || !l)
            return;
        r.current.dataset.motionPopId = n;
        const d = document.createElement("style");
        return s && (d.nonce = s),
        document.head.appendChild(d),
        d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
            document.head.removeChild(d)
        }
    }
    , [t]),
    a.jsx(Kx, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: y.cloneElement(e, {
            ref: r
        })
    })
}
const Gx = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o}) => {
    const l = vu(Yx)
      , u = y.useId()
      , c = y.useCallback(h => {
        l.set(h, !0);
        for (const f of l.values())
            if (!f)
                return;
        r && r()
    }
    , [l, r])
      , d = y.useMemo( () => ({
        id: u,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c,
        register: h => (l.set(h, !1),
        () => l.delete(h))
    }), s ? [Math.random(), c] : [n, c]);
    return y.useMemo( () => {
        l.forEach( (h, f) => l.set(f, !1))
    }
    , [n]),
    y.useEffect( () => {
        !n && !l.size && r && r()
    }
    , [n]),
    o === "popLayout" && (e = a.jsx(Xx, {
        isPresent: n,
        children: e
    })),
    a.jsx(mo.Provider, {
        value: d,
        children: e
    })
}
;
function Yx() {
    return new Map
}
function pm(e=!0) {
    const t = y.useContext(mo);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , s = y.useId();
    y.useEffect( () => {
        e && i(s)
    }
    , [e]);
    const o = y.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const Ji = e => e.key || "";
function Cd(e) {
    const t = [];
    return y.Children.forEach(e, n => {
        y.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const xu = typeof window < "u"
  , mm = xu ? y.useLayoutEffect : y.useEffect
  , on = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: s="sync", propagate: o=!1}) => {
    const [l,u] = pm(o)
      , c = y.useMemo( () => Cd(e), [e])
      , d = o && !l ? [] : c.map(Ji)
      , h = y.useRef(!0)
      , f = y.useRef(c)
      , v = vu( () => new Map)
      , [x,w] = y.useState(c)
      , [b,m] = y.useState(c);
    mm( () => {
        h.current = !1,
        f.current = c;
        for (let S = 0; S < b.length; S++) {
            const N = Ji(b[S]);
            d.includes(N) ? v.delete(N) : v.get(N) !== !0 && v.set(N, !1)
        }
    }
    , [b, d.length, d.join("-")]);
    const p = [];
    if (c !== x) {
        let S = [...c];
        for (let N = 0; N < b.length; N++) {
            const C = b[N]
              , P = Ji(C);
            d.includes(P) || (S.splice(N, 0, C),
            p.push(C))
        }
        s === "wait" && p.length && (S = p),
        m(Cd(S)),
        w(c);
        return
    }
    const {forceRender: g} = y.useContext(gu);
    return a.jsx(a.Fragment, {
        children: b.map(S => {
            const N = Ji(S)
              , C = o && !l ? !1 : c === b || d.includes(N)
              , P = () => {
                if (v.has(N))
                    v.set(N, !0);
                else
                    return;
                let T = !0;
                v.forEach(L => {
                    L || (T = !1)
                }
                ),
                T && (g == null || g(),
                m(f.current),
                o && (u == null || u()),
                r && r())
            }
            ;
            return a.jsx(Gx, {
                isPresent: C,
                initial: !h.current || n ? void 0 : !1,
                custom: C ? void 0 : t,
                presenceAffectsLayout: i,
                mode: s,
                onExitComplete: C ? void 0 : P,
                children: S
            }, N)
        }
        )
    })
}
  , Oe = e => e;
let sl = Oe;
function wu(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const gr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , Et = e => e * 1e3
  , Mt = e => e / 1e3
  , Zx = {
    skipAnimations: !1,
    useManualTiming: !1
};
function Qx(e) {
    let t = new Set
      , n = new Set
      , r = !1
      , i = !1;
    const s = new WeakSet;
    let o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function l(c) {
        s.has(c) && (u.schedule(c),
        e()),
        c(o)
    }
    const u = {
        schedule: (c, d=!1, h=!1) => {
            const v = h && r ? t : n;
            return d && s.add(c),
            v.has(c) || v.add(c),
            c
        }
        ,
        cancel: c => {
            n.delete(c),
            s.delete(c)
        }
        ,
        process: c => {
            if (o = c,
            r) {
                i = !0;
                return
            }
            r = !0,
            [t,n] = [n, t],
            t.forEach(l),
            t.clear(),
            r = !1,
            i && (i = !1,
            u.process(c))
        }
    };
    return u
}
const qi = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , Jx = 40;
function gm(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , o = qi.reduce( (m, p) => (m[p] = Qx(s),
    m), {})
      , {read: l, resolveKeyframes: u, update: c, preRender: d, render: h, postRender: f} = o
      , v = () => {
        const m = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Jx), 1),
        i.timestamp = m,
        i.isProcessing = !0,
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        h.process(i),
        f.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(v))
    }
      , x = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(v)
    }
    ;
    return {
        schedule: qi.reduce( (m, p) => {
            const g = o[p];
            return m[p] = (S, N=!1, C=!1) => (n || x(),
            g.schedule(S, N, C)),
            m
        }
        , {}),
        cancel: m => {
            for (let p = 0; p < qi.length; p++)
                o[qi[p]].cancel(m)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: Z, cancel: an, state: xe, steps: Go} = gm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Oe, !0)
  , vm = y.createContext({
    strict: !1
})
  , Td = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , vr = {};
for (const e in Td)
    vr[e] = {
        isEnabled: t => Td[e].some(n => !!t[n])
    };
function qx(e) {
    for (const t in e)
        vr[t] = {
            ...vr[t],
            ...e[t]
        }
}
const e1 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Ws(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || e1.has(e)
}
let ym = e => !Ws(e);
function t1(e) {
    e && (ym = t => t.startsWith("on") ? !Ws(t) : e(t))
}
try {
    t1(require("@emotion/is-prop-valid").default)
} catch {}
function n1(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (ym(i) || n === !0 && Ws(i) || !t && !Ws(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function r1(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , n = (...r) => e(...r);
    return new Proxy(n,{
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)),
        t.get(i))
    })
}
const go = y.createContext({});
function wi(e) {
    return typeof e == "string" || Array.isArray(e)
}
function vo(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const ju = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Nu = ["initial", ...ju];
function yo(e) {
    return vo(e.animate) || Nu.some(t => wi(e[t]))
}
function xm(e) {
    return !!(yo(e) || e.variants)
}
function i1(e, t) {
    if (yo(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || wi(n) ? n : void 0,
            animate: wi(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function s1(e) {
    const {initial: t, animate: n} = i1(e, y.useContext(go));
    return y.useMemo( () => ({
        initial: t,
        animate: n
    }), [Pd(t), Pd(n)])
}
function Pd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const o1 = Symbol.for("motionComponentSymbol");
function Jn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function a1(e, t, n) {
    return y.useCallback(r => {
        r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Jn(n) && (n.current = r))
    }
    , [t])
}
const Su = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , l1 = "framerAppearId"
  , wm = "data-" + Su(l1)
  , {schedule: ku, cancel: HN} = gm(queueMicrotask, !1)
  , jm = y.createContext({});
function u1(e, t, n, r, i) {
    var s, o;
    const {visualElement: l} = y.useContext(go)
      , u = y.useContext(vm)
      , c = y.useContext(mo)
      , d = y.useContext(yu).reducedMotion
      , h = y.useRef(null);
    r = r || u.renderer,
    !h.current && r && (h.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: d
    }));
    const f = h.current
      , v = y.useContext(jm);
    f && !f.projection && i && (f.type === "html" || f.type === "svg") && c1(h.current, n, i, v);
    const x = y.useRef(!1);
    y.useInsertionEffect( () => {
        f && x.current && f.update(n, c)
    }
    );
    const w = n[wm]
      , b = y.useRef(!!w && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, w)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, w)));
    return mm( () => {
        f && (x.current = !0,
        window.MotionIsMounted = !0,
        f.updateFeatures(),
        ku.render(f.render),
        b.current && f.animationState && f.animationState.animateChanges())
    }
    ),
    y.useEffect( () => {
        f && (!b.current && f.animationState && f.animationState.animateChanges(),
        b.current && (queueMicrotask( () => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, w)
        }
        ),
        b.current = !1))
    }
    ),
    f
}
function c1(e, t, n, r) {
    const {layoutId: i, layout: s, drag: o, dragConstraints: l, layoutScroll: u, layoutRoot: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : Nm(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || l && Jn(l),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        layoutScroll: u,
        layoutRoot: c
    })
}
function Nm(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : Nm(e.parent)
}
function d1({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    var s, o;
    e && qx(e);
    function l(c, d) {
        let h;
        const f = {
            ...y.useContext(yu),
            ...c,
            layoutId: h1(c)
        }
          , {isStatic: v} = f
          , x = s1(c)
          , w = r(c, v);
        if (!v && xu) {
            f1();
            const b = p1(f);
            h = b.MeasureLayout,
            x.visualElement = u1(i, w, f, t, b.ProjectionNode)
        }
        return a.jsxs(go.Provider, {
            value: x,
            children: [h && x.visualElement ? a.jsx(h, {
                visualElement: x.visualElement,
                ...f
            }) : null, n(i, c, a1(w, x.visualElement, d), w, v, x.visualElement)]
        })
    }
    l.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
    const u = y.forwardRef(l);
    return u[o1] = i,
    u
}
function h1({layoutId: e}) {
    const t = y.useContext(gu).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function f1(e, t) {
    y.useContext(vm).strict
}
function p1(e) {
    const {drag: t, layout: n} = vr;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const m1 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function bu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(m1.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function Ed(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function Cu(e, t, n, r) {
    if (typeof t == "function") {
        const [i,s] = Ed(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,s] = Ed(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}
const ol = e => Array.isArray(e)
  , g1 = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , v1 = e => ol(e) ? e[e.length - 1] || 0 : e
  , Ce = e => !!(e && e.getVelocity);
function fs(e) {
    const t = Ce(e) ? e.get() : e;
    return g1(t) ? t.toValue() : t
}
function y1({scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n}, r, i, s) {
    const o = {
        latestValues: x1(r, i, s, e),
        renderState: t()
    };
    return n && (o.onMount = l => n({
        props: r,
        current: l,
        ...o
    }),
    o.onUpdate = l => n(l)),
    o
}
const Sm = e => (t, n) => {
    const r = y.useContext(go)
      , i = y.useContext(mo)
      , s = () => y1(e, t, r, i);
    return n ? s() : vu(s)
}
;
function x1(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const f in s)
        i[f] = fs(s[f]);
    let {initial: o, animate: l} = e;
    const u = yo(e)
      , c = xm(e);
    t && c && !u && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    l === void 0 && (l = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || o === !1;
    const h = d ? l : o;
    if (h && typeof h != "boolean" && !vo(h)) {
        const f = Array.isArray(h) ? h : [h];
        for (let v = 0; v < f.length; v++) {
            const x = Cu(e, f[v]);
            if (x) {
                const {transitionEnd: w, transition: b, ...m} = x;
                for (const p in m) {
                    let g = m[p];
                    if (Array.isArray(g)) {
                        const S = d ? g.length - 1 : 0;
                        g = g[S]
                    }
                    g !== null && (i[p] = g)
                }
                for (const p in w)
                    i[p] = w[p]
            }
        }
    }
    return i
}
const Nr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Vn = new Set(Nr)
  , km = e => t => typeof t == "string" && t.startsWith(e)
  , bm = km("--")
  , w1 = km("var(--")
  , Tu = e => w1(e) ? j1.test(e.split("/*")[0].trim()) : !1
  , j1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Cm = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , It = (e, t, n) => n > t ? t : n < e ? e : n
  , Sr = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , ji = {
    ...Sr,
    transform: e => It(0, 1, e)
}
  , es = {
    ...Sr,
    default: 1
}
  , Mi = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , zt = Mi("deg")
  , yt = Mi("%")
  , _ = Mi("px")
  , N1 = Mi("vh")
  , S1 = Mi("vw")
  , Md = {
    ...yt,
    parse: e => yt.parse(e) / 100,
    transform: e => yt.transform(e * 100)
}
  , k1 = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    radius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    backgroundPositionX: _,
    backgroundPositionY: _
}
  , b1 = {
    rotate: zt,
    rotateX: zt,
    rotateY: zt,
    rotateZ: zt,
    scale: es,
    scaleX: es,
    scaleY: es,
    scaleZ: es,
    skew: zt,
    skewX: zt,
    skewY: zt,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: ji,
    originX: Md,
    originY: Md,
    originZ: _
}
  , Rd = {
    ...Sr,
    transform: Math.round
}
  , Pu = {
    ...k1,
    ...b1,
    zIndex: Rd,
    size: _,
    fillOpacity: ji,
    strokeOpacity: ji,
    numOctaves: Rd
}
  , C1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , T1 = Nr.length;
function P1(e, t, n) {
    let r = ""
      , i = !0;
    for (let s = 0; s < T1; s++) {
        const o = Nr[s]
          , l = e[o];
        if (l === void 0)
            continue;
        let u = !0;
        if (typeof l == "number" ? u = l === (o.startsWith("scale") ? 1 : 0) : u = parseFloat(l) === 0,
        !u || n) {
            const c = Cm(l, Pu[o]);
            if (!u) {
                i = !1;
                const d = C1[o] || o;
                r += `${d}(${c}) `
            }
            n && (t[o] = c)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function Eu(e, t, n) {
    const {style: r, vars: i, transformOrigin: s} = e;
    let o = !1
      , l = !1;
    for (const u in t) {
        const c = t[u];
        if (Vn.has(u)) {
            o = !0;
            continue
        } else if (bm(u)) {
            i[u] = c;
            continue
        } else {
            const d = Cm(c, Pu[u]);
            u.startsWith("origin") ? (l = !0,
            s[u] = d) : r[u] = d
        }
    }
    if (t.transform || (o || n ? r.transform = P1(t, e.transform, n) : r.transform && (r.transform = "none")),
    l) {
        const {originX: u="50%", originY: c="50%", originZ: d=0} = s;
        r.transformOrigin = `${u} ${c} ${d}`
    }
}
const E1 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , M1 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function R1(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? E1 : M1;
    e[s.offset] = _.transform(-r);
    const o = _.transform(t)
      , l = _.transform(n);
    e[s.array] = `${o} ${l}`
}
function Ad(e, t, n) {
    return typeof e == "string" ? e : _.transform(t + n * e)
}
function A1(e, t, n) {
    const r = Ad(t, e.x, e.width)
      , i = Ad(n, e.y, e.height);
    return `${r} ${i}`
}
function Mu(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: l=1, pathOffset: u=0, ...c}, d, h) {
    if (Eu(e, c, h),
    d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: f, style: v, dimensions: x} = e;
    f.transform && (x && (v.transform = f.transform),
    delete f.transform),
    x && (i !== void 0 || s !== void 0 || v.transform) && (v.transformOrigin = A1(x, i !== void 0 ? i : .5, s !== void 0 ? s : .5)),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && R1(f, o, l, u, !1)
}
const Ru = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Tm = () => ({
    ...Ru(),
    attrs: {}
})
  , Au = e => typeof e == "string" && e.toLowerCase() === "svg";
function Pm(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n)
        e.style.setProperty(s, n[s])
}
const Em = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Mm(e, t, n, r) {
    Pm(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(Em.has(i) ? i : Su(i), t.attrs[i])
}
const $s = {};
function D1(e) {
    Object.assign($s, e)
}
function Rm(e, {layout: t, layoutId: n}) {
    return Vn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!$s[e] || e === "opacity")
}
function Du(e, t, n) {
    var r;
    const {style: i} = e
      , s = {};
    for (const o in i)
        (Ce(i[o]) || t.style && Ce(t.style[o]) || Rm(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
    return s
}
function Am(e, t, n) {
    const r = Du(e, t, n);
    for (const i in e)
        if (Ce(e[i]) || Ce(t[i])) {
            const s = Nr.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
function L1(e, t) {
    try {
        t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        t.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Dd = ["x", "y", "width", "height", "cx", "cy", "r"]
  , I1 = {
    useVisualState: Sm({
        scrapeMotionValuesFromProps: Am,
        createRenderState: Tm,
        onUpdate: ({props: e, prevProps: t, current: n, renderState: r, latestValues: i}) => {
            if (!n)
                return;
            let s = !!e.drag;
            if (!s) {
                for (const l in i)
                    if (Vn.has(l)) {
                        s = !0;
                        break
                    }
            }
            if (!s)
                return;
            let o = !t;
            if (t)
                for (let l = 0; l < Dd.length; l++) {
                    const u = Dd[l];
                    e[u] !== t[u] && (o = !0)
                }
            o && Z.read( () => {
                L1(n, r),
                Z.render( () => {
                    Mu(r, i, Au(n.tagName), e.transformTemplate),
                    Mm(n, r)
                }
                )
            }
            )
        }
    })
}
  , V1 = {
    useVisualState: Sm({
        scrapeMotionValuesFromProps: Du,
        createRenderState: Ru
    })
};
function Dm(e, t, n) {
    for (const r in t)
        !Ce(t[r]) && !Rm(r, n) && (e[r] = t[r])
}
function _1({transformTemplate: e}, t) {
    return y.useMemo( () => {
        const n = Ru();
        return Eu(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function F1(e, t) {
    const n = e.style || {}
      , r = {};
    return Dm(r, n, e),
    Object.assign(r, _1(e, t)),
    r
}
function O1(e, t) {
    const n = {}
      , r = F1(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
function z1(e, t, n, r) {
    const i = y.useMemo( () => {
        const s = Tm();
        return Mu(s, t, Au(r), e.transformTemplate),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        Dm(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
function B1(e=!1) {
    return (n, r, i, {latestValues: s}, o) => {
        const u = (bu(n) ? z1 : O1)(r, s, o, n)
          , c = n1(r, typeof n == "string", e)
          , d = n !== y.Fragment ? {
            ...c,
            ...u,
            ref: i
        } : {}
          , {children: h} = r
          , f = y.useMemo( () => Ce(h) ? h.get() : h, [h]);
        return y.createElement(n, {
            ...d,
            children: f
        })
    }
}
function U1(e, t) {
    return function(r, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        const o = {
            ...bu(r) ? I1 : V1,
            preloadedFeatures: e,
            useRender: B1(i),
            createVisualElement: t,
            Component: r
        };
        return d1(o)
    }
}
function Lm(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function xo(e, t, n) {
    const r = e.getProps();
    return Cu(r, t, n !== void 0 ? n : r.custom, e)
}
const H1 = wu( () => window.ScrollTimeline !== void 0);
class W1 {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => {
            if (H1() && i.attachTimeline)
                return i.attachTimeline(t);
            if (typeof n == "function")
                return n(i)
        }
        );
        return () => {
            r.forEach( (i, s) => {
                i && i(),
                this.animations[s].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class $1 extends W1 {
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
}
function Lu(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const al = 2e4;
function Im(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < al; )
        t += n,
        r = e.next(t);
    return t >= al ? 1 / 0 : t
}
function Iu(e) {
    return typeof e == "function"
}
function Ld(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const Vu = e => Array.isArray(e) && typeof e[0] == "number"
  , K1 = {
    linearEasing: void 0
};
function X1(e, t) {
    const n = wu(e);
    return () => {
        var r;
        return (r = K1[t]) !== null && r !== void 0 ? r : n()
    }
}
const Ks = X1( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Vm = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
        r += e(gr(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
;
function _m(e) {
    return !!(typeof e == "function" && Ks() || !e || typeof e == "string" && (e in ll || Ks()) || Vu(e) || Array.isArray(e) && e.every(_m))
}
const Fr = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , ll = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Fr([0, .65, .55, 1]),
    circOut: Fr([.55, 0, 1, .45]),
    backIn: Fr([.31, .01, .66, -.59]),
    backOut: Fr([.33, 1.53, .69, .99])
};
function Fm(e, t) {
    if (e)
        return typeof e == "function" && Ks() ? Vm(e, t) : Vu(e) ? Fr(e) : Array.isArray(e) ? e.map(n => Fm(n, t) || ll.easeOut) : ll[e]
}
const st = {
    x: !1,
    y: !1
};
function Om() {
    return st.x || st.y
}
function G1(e, t, n) {
    var r;
    if (e instanceof Element)
        return [e];
    if (typeof e == "string") {
        let i = document;
        const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
        return s ? Array.from(s) : []
    }
    return Array.from(e)
}
function zm(e, t) {
    const n = G1(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function Id(e) {
    return t => {
        t.pointerType === "touch" || Om() || e(t)
    }
}
function Y1(e, t, n={}) {
    const [r,i,s] = zm(e, n)
      , o = Id(l => {
        const {target: u} = l
          , c = t(l);
        if (typeof c != "function" || !u)
            return;
        const d = Id(h => {
            c(h),
            u.removeEventListener("pointerleave", d)
        }
        );
        u.addEventListener("pointerleave", d, i)
    }
    );
    return r.forEach(l => {
        l.addEventListener("pointerenter", o, i)
    }
    ),
    s
}
const Bm = (e, t) => t ? e === t ? !0 : Bm(e, t.parentElement) : !1
  , _u = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , Z1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Q1(e) {
    return Z1.has(e.tagName) || e.tabIndex !== -1
}
const Or = new WeakSet;
function Vd(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Yo(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const J1 = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Vd( () => {
        if (Or.has(n))
            return;
        Yo(n, "down");
        const i = Vd( () => {
            Yo(n, "up")
        }
        )
          , s = () => Yo(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function _d(e) {
    return _u(e) && !Om()
}
function q1(e, t, n={}) {
    const [r,i,s] = zm(e, n)
      , o = l => {
        const u = l.currentTarget;
        if (!_d(l) || Or.has(u))
            return;
        Or.add(u);
        const c = t(l)
          , d = (v, x) => {
            window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", f),
            !(!_d(v) || !Or.has(u)) && (Or.delete(u),
            typeof c == "function" && c(v, {
                success: x
            }))
        }
          , h = v => {
            d(v, n.useGlobalTarget || Bm(u, v.target))
        }
          , f = v => {
            d(v, !1)
        }
        ;
        window.addEventListener("pointerup", h, i),
        window.addEventListener("pointercancel", f, i)
    }
    ;
    return r.forEach(l => {
        !Q1(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0),
        (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i),
        l.addEventListener("focus", c => J1(c, i), i)
    }
    ),
    s
}
function ew(e) {
    return e === "x" || e === "y" ? st[e] ? null : (st[e] = !0,
    () => {
        st[e] = !1
    }
    ) : st.x || st.y ? null : (st.x = st.y = !0,
    () => {
        st.x = st.y = !1
    }
    )
}
const Um = new Set(["width", "height", "top", "left", "right", "bottom", ...Nr]);
let ps;
function tw() {
    ps = void 0
}
const xt = {
    now: () => (ps === void 0 && xt.set(xe.isProcessing || Zx.useManualTiming ? xe.timestamp : performance.now()),
    ps),
    set: e => {
        ps = e,
        queueMicrotask(tw)
    }
};
function Fu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Ou(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class zu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Fu(this.subscriptions, t),
        () => Ou(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function Hm(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Fd = 30
  , nw = e => !isNaN(parseFloat(e));
class rw {
    constructor(t, n={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            const s = xt.now();
            this.updatedAt !== s && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = xt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = nw(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new zu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            Z.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = xt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Fd)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Fd);
        return Hm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Ni(e, t) {
    return new rw(e,t)
}
function iw(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ni(n))
}
function sw(e, t) {
    const n = xo(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const l = v1(s[o]);
        iw(e, o, l)
    }
}
function ow(e) {
    return !!(Ce(e) && e.add)
}
function ul(e, t) {
    const n = e.getValue("willChange");
    if (ow(n))
        return n.add(t)
}
function Wm(e) {
    return e.props[wm]
}
const $m = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , aw = 1e-7
  , lw = 12;
function uw(e, t, n, r, i) {
    let s, o, l = 0;
    do
        o = t + (n - t) / 2,
        s = $m(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > aw && ++l < lw);
    return o
}
function Ri(e, t, n, r) {
    if (e === t && n === r)
        return Oe;
    const i = s => uw(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : $m(i(s), t, r)
}
const Km = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Xm = e => t => 1 - e(1 - t)
  , Gm = Ri(.33, 1.53, .69, .99)
  , Bu = Xm(Gm)
  , Ym = Km(Bu)
  , Zm = e => (e *= 2) < 1 ? .5 * Bu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Uu = e => 1 - Math.sin(Math.acos(e))
  , Qm = Xm(Uu)
  , Jm = Km(Uu)
  , qm = e => /^0[^.\s]+$/u.test(e);
function cw(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || qm(e) : !0
}
const Zr = e => Math.round(e * 1e5) / 1e5
  , Hu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function dw(e) {
    return e == null
}
const hw = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Wu = (e, t) => n => !!(typeof n == "string" && hw.test(n) && n.startsWith(e) || t && !dw(n) && Object.prototype.hasOwnProperty.call(n, t))
  , e0 = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,s,o,l] = r.match(Hu);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , fw = e => It(0, 255, e)
  , Zo = {
    ...Sr,
    transform: e => Math.round(fw(e))
}
  , jn = {
    test: Wu("rgb", "red"),
    parse: e0("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Zo.transform(e) + ", " + Zo.transform(t) + ", " + Zo.transform(n) + ", " + Zr(ji.transform(r)) + ")"
};
function pw(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const cl = {
    test: Wu("#"),
    parse: pw,
    transform: jn.transform
}
  , qn = {
    test: Wu("hsl", "hue"),
    parse: e0("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + yt.transform(Zr(t)) + ", " + yt.transform(Zr(n)) + ", " + Zr(ji.transform(r)) + ")"
}
  , ke = {
    test: e => jn.test(e) || cl.test(e) || qn.test(e),
    parse: e => jn.test(e) ? jn.parse(e) : qn.test(e) ? qn.parse(e) : cl.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? jn.transform(e) : qn.transform(e)
}
  , mw = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function gw(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Hu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(mw)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const t0 = "number"
  , n0 = "color"
  , vw = "var"
  , yw = "var("
  , Od = "${}"
  , xw = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Si(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let s = 0;
    const l = t.replace(xw, u => (ke.test(u) ? (r.color.push(s),
    i.push(n0),
    n.push(ke.parse(u))) : u.startsWith(yw) ? (r.var.push(s),
    i.push(vw),
    n.push(u)) : (r.number.push(s),
    i.push(t0),
    n.push(parseFloat(u))),
    ++s,
    Od)).split(Od);
    return {
        values: n,
        split: l,
        indexes: r,
        types: i
    }
}
function r0(e) {
    return Si(e).values
}
function i0(e) {
    const {split: t, types: n} = Si(e)
      , r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o],
            i[o] !== void 0) {
                const l = n[o];
                l === t0 ? s += Zr(i[o]) : l === n0 ? s += ke.transform(i[o]) : s += i[o]
            }
        return s
    }
}
const ww = e => typeof e == "number" ? 0 : e;
function jw(e) {
    const t = r0(e);
    return i0(e)(t.map(ww))
}
const ln = {
    test: gw,
    parse: r0,
    createTransformer: i0,
    getAnimatableNone: jw
}
  , Nw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Sw(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Hu) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = Nw.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const kw = /\b([a-z-]*)\(.*?\)/gu
  , dl = {
    ...ln,
    getAnimatableNone: e => {
        const t = e.match(kw);
        return t ? t.map(Sw).join(" ") : e
    }
}
  , bw = {
    ...Pu,
    color: ke,
    backgroundColor: ke,
    outlineColor: ke,
    fill: ke,
    stroke: ke,
    borderColor: ke,
    borderTopColor: ke,
    borderRightColor: ke,
    borderBottomColor: ke,
    borderLeftColor: ke,
    filter: dl,
    WebkitFilter: dl
}
  , $u = e => bw[e];
function s0(e, t) {
    let n = $u(e);
    return n !== dl && (n = ln),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Cw = new Set(["auto", "none", "0"]);
function Tw(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const s = e[r];
        typeof s == "string" && !Cw.has(s) && Si(s).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const s of t)
            e[s] = s0(n, i)
}
const zd = e => e === Sr || e === _
  , Bd = (e, t) => parseFloat(e.split(", ")[t])
  , Ud = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return Bd(i[1], t);
    {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Bd(s[1], e) : 0
    }
}
  , Pw = new Set(["x", "y", "z"])
  , Ew = Nr.filter(e => !Pw.has(e));
function Mw(e) {
    const t = [];
    return Ew.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const yr = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: Ud(4, 13),
    y: Ud(5, 14)
};
yr.translateX = yr.x;
yr.translateY = yr.y;
const kn = new Set;
let hl = !1
  , fl = !1;
function o0() {
    if (fl) {
        const e = Array.from(kn).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = Mw(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([s,o]) => {
                var l;
                (l = r.getValue(s)) === null || l === void 0 || l.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    fl = !1,
    hl = !1,
    kn.forEach(e => e.complete()),
    kn.clear()
}
function a0() {
    kn.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (fl = !0)
    }
    )
}
function Rw() {
    a0(),
    o0()
}
class Ku {
    constructor(t, n, r, i, s, o=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = s,
        this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (kn.add(this),
        hl || (hl = !0,
        Z.read(a0),
        Z.resolveKeyframes(o0))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        for (let s = 0; s < t.length; s++)
            if (t[s] === null)
                if (s === 0) {
                    const o = i == null ? void 0 : i.get()
                      , l = t[t.length - 1];
                    if (o !== void 0)
                        t[0] = o;
                    else if (r && n) {
                        const u = r.readValue(n, l);
                        u != null && (t[0] = u)
                    }
                    t[0] === void 0 && (t[0] = l),
                    i && o === void 0 && i.set(t[0])
                } else
                    t[s] = t[s - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        kn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        kn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const l0 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , Aw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Dw(e) {
    const t = Aw.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function u0(e, t, n=1) {
    const [r,i] = Dw(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return l0(o) ? parseFloat(o) : o
    }
    return Tu(i) ? u0(i, t, n + 1) : i
}
const c0 = e => t => t.test(e)
  , Lw = {
    test: e => e === "auto",
    parse: e => e
}
  , d0 = [Sr, _, yt, zt, S1, N1, Lw]
  , Hd = e => d0.find(c0(e));
class h0 extends Ku {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let u = 0; u < t.length; u++) {
            let c = t[u];
            if (typeof c == "string" && (c = c.trim(),
            Tu(c))) {
                const d = u0(c, n.current);
                d !== void 0 && (t[u] = d),
                u === t.length - 1 && (this.finalKeyframe = c)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Um.has(r) || t.length !== 2)
            return;
        const [i,s] = t
          , o = Hd(i)
          , l = Hd(s);
        if (o !== l)
            if (zd(o) && zd(l))
                for (let u = 0; u < t.length; u++) {
                    const c = t[u];
                    typeof c == "string" && (t[u] = parseFloat(c))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            cw(t[i]) && r.push(i);
        r.length && Tw(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = yr[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: i} = this;
        if (!n || !n.current)
            return;
        const s = n.getValue(r);
        s && s.jump(this.measuredOrigin, !1);
        const o = i.length - 1
          , l = i[o];
        i[o] = yr[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([u,c]) => {
            n.getValue(u).set(c)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Wd = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (ln.test(e) || e === "0") && !e.startsWith("url("));
function Iw(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function Vw(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , o = Wd(i, t)
      , l = Wd(s, t);
    return !o || !l ? !1 : Iw(e) || (n === "spring" || Iu(n)) && r
}
const _w = e => e !== null;
function wo(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(_w)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
const Fw = 40;
class f0 {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", ...l}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = xt.now(),
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            ...l
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > Fw ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Rw(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = xt.now(),
        this.hasAttemptedResolve = !0;
        const {name: r, type: i, velocity: s, delay: o, onComplete: l, onUpdate: u, isGenerator: c} = this.options;
        if (!c && !Vw(t, r, i, s))
            if (o)
                this.options.duration = 0;
            else {
                u && u(wo(t, this.options, n)),
                l && l(),
                this.resolveFinishedPromise();
                return
            }
        const d = this.initPlayback(t, n);
        d !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...d
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
const te = (e, t, n) => e + (t - e) * n;
function Qo(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Ow({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , u = 2 * n - l;
        i = Qo(u, l, e + 1 / 3),
        s = Qo(u, l, e),
        o = Qo(u, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function Xs(e, t) {
    return n => n > 0 ? t : e
}
const Jo = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , zw = [cl, jn, qn]
  , Bw = e => zw.find(t => t.test(e));
function $d(e) {
    const t = Bw(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === qn && (n = Ow(n)),
    n
}
const Kd = (e, t) => {
    const n = $d(e)
      , r = $d(t);
    if (!n || !r)
        return Xs(e, t);
    const i = {
        ...n
    };
    return s => (i.red = Jo(n.red, r.red, s),
    i.green = Jo(n.green, r.green, s),
    i.blue = Jo(n.blue, r.blue, s),
    i.alpha = te(n.alpha, r.alpha, s),
    jn.transform(i))
}
  , Uw = (e, t) => n => t(e(n))
  , Ai = (...e) => e.reduce(Uw)
  , pl = new Set(["none", "hidden"]);
function Hw(e, t) {
    return pl.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function Ww(e, t) {
    return n => te(e, t, n)
}
function Xu(e) {
    return typeof e == "number" ? Ww : typeof e == "string" ? Tu(e) ? Xs : ke.test(e) ? Kd : Xw : Array.isArray(e) ? p0 : typeof e == "object" ? ke.test(e) ? Kd : $w : Xs
}
function p0(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => Xu(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
function $w(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Xu(e[i])(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
function Kw(e, t) {
    var n;
    const r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let s = 0; s < t.values.length; s++) {
        const o = t.types[s]
          , l = e.indexes[o][i[o]]
          , u = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
        r[s] = u,
        i[o]++
    }
    return r
}
const Xw = (e, t) => {
    const n = ln.createTransformer(t)
      , r = Si(e)
      , i = Si(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? pl.has(e) && !i.values.length || pl.has(t) && !r.values.length ? Hw(e, t) : Ai(p0(Kw(r, i), i.values), n) : Xs(e, t)
}
;
function m0(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? te(e, t, n) : Xu(e)(e, t)
}
const Gw = 5;
function g0(e, t, n) {
    const r = Math.max(t - Gw, 0);
    return Hm(n - e(r), t - r)
}
const se = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , qo = .001;
function Yw({duration: e=se.duration, bounce: t=se.bounce, velocity: n=se.velocity, mass: r=se.mass}) {
    let i, s, o = 1 - t;
    o = It(se.minDamping, se.maxDamping, o),
    e = It(se.minDuration, se.maxDuration, Mt(e)),
    o < 1 ? (i = c => {
        const d = c * o
          , h = d * e
          , f = d - n
          , v = ml(c, o)
          , x = Math.exp(-h);
        return qo - f / v * x
    }
    ,
    s = c => {
        const h = c * o * e
          , f = h * n + n
          , v = Math.pow(o, 2) * Math.pow(c, 2) * e
          , x = Math.exp(-h)
          , w = ml(Math.pow(c, 2), o);
        return (-i(c) + qo > 0 ? -1 : 1) * ((f - v) * x) / w
    }
    ) : (i = c => {
        const d = Math.exp(-c * e)
          , h = (c - n) * e + 1;
        return -qo + d * h
    }
    ,
    s = c => {
        const d = Math.exp(-c * e)
          , h = (n - c) * (e * e);
        return d * h
    }
    );
    const l = 5 / e
      , u = Qw(i, s, l);
    if (e = Et(e),
    isNaN(u))
        return {
            stiffness: se.stiffness,
            damping: se.damping,
            duration: e
        };
    {
        const c = Math.pow(u, 2) * r;
        return {
            stiffness: c,
            damping: o * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const Zw = 12;
function Qw(e, t, n) {
    let r = n;
    for (let i = 1; i < Zw; i++)
        r = r - e(r) / t(r);
    return r
}
function ml(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Jw = ["duration", "bounce"]
  , qw = ["stiffness", "damping", "mass"];
function Xd(e, t) {
    return t.some(n => e[n] !== void 0)
}
function e2(e) {
    let t = {
        velocity: se.velocity,
        stiffness: se.stiffness,
        damping: se.damping,
        mass: se.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Xd(e, qw) && Xd(e, Jw))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , s = 2 * It(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: se.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = Yw(e);
            t = {
                ...t,
                ...n,
                mass: se.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function v0(e=se.visualDuration, t=se.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const s = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , l = {
        done: !1,
        value: s
    }
      , {stiffness: u, damping: c, mass: d, duration: h, velocity: f, isResolvedFromDuration: v} = e2({
        ...n,
        velocity: -Mt(n.velocity || 0)
    })
      , x = f || 0
      , w = c / (2 * Math.sqrt(u * d))
      , b = o - s
      , m = Mt(Math.sqrt(u / d))
      , p = Math.abs(b) < 5;
    r || (r = p ? se.restSpeed.granular : se.restSpeed.default),
    i || (i = p ? se.restDelta.granular : se.restDelta.default);
    let g;
    if (w < 1) {
        const N = ml(m, w);
        g = C => {
            const P = Math.exp(-w * m * C);
            return o - P * ((x + w * m * b) / N * Math.sin(N * C) + b * Math.cos(N * C))
        }
    } else if (w === 1)
        g = N => o - Math.exp(-m * N) * (b + (x + m * b) * N);
    else {
        const N = m * Math.sqrt(w * w - 1);
        g = C => {
            const P = Math.exp(-w * m * C)
              , T = Math.min(N * C, 300);
            return o - P * ((x + w * m * b) * Math.sinh(T) + N * b * Math.cosh(T)) / N
        }
    }
    const S = {
        calculatedDuration: v && h || null,
        next: N => {
            const C = g(N);
            if (v)
                l.done = N >= h;
            else {
                let P = 0;
                w < 1 && (P = N === 0 ? Et(x) : g0(g, N, C));
                const T = Math.abs(P) <= r
                  , L = Math.abs(o - C) <= i;
                l.done = T && L
            }
            return l.value = l.done ? o : C,
            l
        }
        ,
        toString: () => {
            const N = Math.min(Im(S), al)
              , C = Vm(P => S.next(N * P).value, N, 30);
            return N + "ms " + C
        }
    };
    return S
}
function Gd({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: l, max: u, restDelta: c=.5, restSpeed: d}) {
    const h = e[0]
      , f = {
        done: !1,
        value: h
    }
      , v = T => l !== void 0 && T < l || u !== void 0 && T > u
      , x = T => l === void 0 ? u : u === void 0 || Math.abs(l - T) < Math.abs(u - T) ? l : u;
    let w = n * t;
    const b = h + w
      , m = o === void 0 ? b : o(b);
    m !== b && (w = m - h);
    const p = T => -w * Math.exp(-T / r)
      , g = T => m + p(T)
      , S = T => {
        const L = p(T)
          , E = g(T);
        f.done = Math.abs(L) <= c,
        f.value = f.done ? m : E
    }
    ;
    let N, C;
    const P = T => {
        v(f.value) && (N = T,
        C = v0({
            keyframes: [f.value, x(f.value)],
            velocity: g0(g, T, f.value),
            damping: i,
            stiffness: s,
            restDelta: c,
            restSpeed: d
        }))
    }
    ;
    return P(0),
    {
        calculatedDuration: null,
        next: T => {
            let L = !1;
            return !C && N === void 0 && (L = !0,
            S(T),
            P(T)),
            N !== void 0 && T >= N ? C.next(T - N) : (!L && S(T),
            f)
        }
    }
}
const t2 = Ri(.42, 0, 1, 1)
  , n2 = Ri(0, 0, .58, 1)
  , y0 = Ri(.42, 0, .58, 1)
  , r2 = e => Array.isArray(e) && typeof e[0] != "number"
  , Yd = {
    linear: Oe,
    easeIn: t2,
    easeInOut: y0,
    easeOut: n2,
    circIn: Uu,
    circInOut: Jm,
    circOut: Qm,
    backIn: Bu,
    backInOut: Ym,
    backOut: Gm,
    anticipate: Zm
}
  , Zd = e => {
    if (Vu(e)) {
        sl(e.length === 4);
        const [t,n,r,i] = e;
        return Ri(t, n, r, i)
    } else if (typeof e == "string")
        return sl(Yd[e] !== void 0),
        Yd[e];
    return e
}
;
function i2(e, t, n) {
    const r = []
      , i = n || m0
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let l = i(e[o], e[o + 1]);
        if (t) {
            const u = Array.isArray(t) ? t[o] || Oe : t;
            l = Ai(u, l)
        }
        r.push(l)
    }
    return r
}
function s2(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (sl(s === t.length),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const l = i2(t, r, i)
      , u = l.length
      , c = d => {
        if (o && d < e[0])
            return t[0];
        let h = 0;
        if (u > 1)
            for (; h < e.length - 2 && !(d < e[h + 1]); h++)
                ;
        const f = gr(e[h], e[h + 1], d);
        return l[h](f)
    }
    ;
    return n ? d => c(It(e[0], e[s - 1], d)) : c
}
function o2(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = gr(0, t, r);
        e.push(te(n, 1, i))
    }
}
function a2(e) {
    const t = [0];
    return o2(t, e.length - 1),
    t
}
function l2(e, t) {
    return e.map(n => n * t)
}
function u2(e, t) {
    return e.map( () => t || y0).splice(0, e.length - 1)
}
function Gs({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = r2(r) ? r.map(Zd) : Zd(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = l2(n && n.length === t.length ? n : a2(t), e)
      , l = s2(o, t, {
        ease: Array.isArray(i) ? i : u2(t, i)
    });
    return {
        calculatedDuration: e,
        next: u => (s.value = l(u),
        s.done = u >= e,
        s)
    }
}
const c2 = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => Z.update(t, !0),
        stop: () => an(t),
        now: () => xe.isProcessing ? xe.timestamp : xt.now()
    }
}
  , d2 = {
    decay: Gd,
    inertia: Gd,
    tween: Gs,
    keyframes: Gs,
    spring: v0
}
  , h2 = e => e / 100;
class Gu extends f0 {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: u} = this.options;
            u && u()
        }
        ;
        const {name: n, motionValue: r, element: i, keyframes: s} = this.options
          , o = (i == null ? void 0 : i.KeyframeResolver) || Ku
          , l = (u, c) => this.onKeyframesResolved(u, c);
        this.resolver = new o(s,l,n,r,i),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = this.options
          , l = Iu(n) ? n : d2[n] || Gs;
        let u, c;
        l !== Gs && typeof t[0] != "number" && (u = Ai(h2, m0(t[0], t[1])),
        t = [0, 100]);
        const d = l({
            ...this.options,
            keyframes: t
        });
        s === "mirror" && (c = l({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -o
        })),
        d.calculatedDuration === null && (d.calculatedDuration = Im(d));
        const {calculatedDuration: h} = d
          , f = h + i
          , v = f * (r + 1) - i;
        return {
            generator: d,
            mirroredGenerator: c,
            mapPercentToKeyframes: u,
            calculatedDuration: h,
            resolvedDuration: f,
            totalDuration: v
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: T} = this.options;
            return {
                done: !0,
                value: T[T.length - 1]
            }
        }
        const {finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: l, keyframes: u, calculatedDuration: c, totalDuration: d, resolvedDuration: h} = r;
        if (this.startTime === null)
            return s.next(0);
        const {delay: f, repeat: v, repeatType: x, repeatDelay: w, onUpdate: b} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1)
          , p = this.speed >= 0 ? m < 0 : m > d;
        this.currentTime = Math.max(m, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = d);
        let g = this.currentTime
          , S = s;
        if (v) {
            const T = Math.min(this.currentTime, d) / h;
            let L = Math.floor(T)
              , E = T % 1;
            !E && T >= 1 && (E = 1),
            E === 1 && L--,
            L = Math.min(L, v + 1),
            !!(L % 2) && (x === "reverse" ? (E = 1 - E,
            w && (E -= w / h)) : x === "mirror" && (S = o)),
            g = It(0, 1, E) * h
        }
        const N = p ? {
            done: !1,
            value: u[0]
        } : S.next(g);
        l && (N.value = l(N.value));
        let {done: C} = N;
        !p && c !== null && (C = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
        const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return P && i !== void 0 && (N.value = wo(u, this.options, i)),
        b && b(N.value),
        P && this.finish(),
        N
    }
    get duration() {
        const {resolved: t} = this;
        return t ? Mt(t.calculatedDuration) : 0
    }
    get time() {
        return Mt(this.currentTime)
    }
    set time(t) {
        t = Et(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = Mt(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=c2, onPlay: n, startTime: r} = this.options;
        this.driver || (this.driver = t(s => this.tick(s))),
        n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const f2 = new Set(["opacity", "clipPath", "filter", "transform"]);
function p2(e, t, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: l="easeInOut", times: u}={}) {
    const c = {
        [t]: n
    };
    u && (c.offset = u);
    const d = Fm(l, i);
    return Array.isArray(d) && (c.easing = d),
    e.animate(c, {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
const m2 = wu( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Ys = 10
  , g2 = 2e4;
function v2(e) {
    return Iu(e.type) || e.type === "spring" || !_m(e.ease)
}
function y2(e, t) {
    const n = new Gu({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let s = 0;
    for (; !r.done && s < g2; )
        r = n.sample(s),
        i.push(r.value),
        s += Ys;
    return {
        times: void 0,
        keyframes: i,
        duration: s - Ys,
        ease: "linear"
    }
}
const x0 = {
    anticipate: Zm,
    backInOut: Ym,
    circInOut: Jm
};
function x2(e) {
    return e in x0
}
class Qd extends f0 {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, element: i, keyframes: s} = this.options;
        this.resolver = new h0(s, (o, l) => this.onKeyframesResolved(o, l),n,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        let {duration: r=300, times: i, ease: s, type: o, motionValue: l, name: u, startTime: c} = this.options;
        if (!l.owner || !l.owner.current)
            return !1;
        if (typeof s == "string" && Ks() && x2(s) && (s = x0[s]),
        v2(this.options)) {
            const {onComplete: h, onUpdate: f, motionValue: v, element: x, ...w} = this.options
              , b = y2(t, w);
            t = b.keyframes,
            t.length === 1 && (t[1] = t[0]),
            r = b.duration,
            i = b.times,
            s = b.ease,
            o = "keyframes"
        }
        const d = p2(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: i,
            ease: s
        });
        return d.startTime = c ?? this.calcStartTime(),
        this.pendingTimeline ? (Ld(d, this.pendingTimeline),
        this.pendingTimeline = void 0) : d.onfinish = () => {
            const {onComplete: h} = this.options;
            l.set(wo(t, this.options, n)),
            h && h(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: d,
            duration: r,
            times: i,
            type: o,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return Mt(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return Mt(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = Et(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: n} = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return Oe;
            const {animation: r} = n;
            Ld(r, t)
        }
        return Oe
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: i, type: s, ease: o, times: l} = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: c, onUpdate: d, onComplete: h, element: f, ...v} = this.options
              , x = new Gu({
                ...v,
                keyframes: r,
                duration: i,
                type: s,
                ease: o,
                times: l,
                isGenerator: !0
            })
              , w = Et(this.time);
            c.setWithVelocity(x.sample(w - Ys).value, x.sample(w).value, Ys)
        }
        const {onStop: u} = this.options;
        u && u(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: l} = t;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: u, transformTemplate: c} = n.owner.getProps();
        return m2() && r && f2.has(r) && !u && !c && !i && s !== "mirror" && o !== 0 && l !== "inertia"
    }
}
const w2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , j2 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , N2 = {
    type: "keyframes",
    duration: .8
}
  , S2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , k2 = (e, {keyframes: t}) => t.length > 2 ? N2 : Vn.has(e) ? e.startsWith("scale") ? j2(t[1]) : w2 : S2;
function b2({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: u, elapsed: c, ...d}) {
    return !!Object.keys(d).length
}
const Yu = (e, t, n, r={}, i, s) => o => {
    const l = Lu(r, e) || {}
      , u = l.delay || r.delay || 0;
    let {elapsed: c=0} = r;
    c = c - Et(u);
    let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -c,
        onUpdate: f => {
            t.set(f),
            l.onUpdate && l.onUpdate(f)
        }
        ,
        onComplete: () => {
            o(),
            l.onComplete && l.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    b2(l) || (d = {
        ...d,
        ...k2(e, d)
    }),
    d.duration && (d.duration = Et(d.duration)),
    d.repeatDelay && (d.repeatDelay = Et(d.repeatDelay)),
    d.from !== void 0 && (d.keyframes[0] = d.from);
    let h = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0,
    d.delay === 0 && (h = !0)),
    h && !s && t.get() !== void 0) {
        const f = wo(d.keyframes, l);
        if (f !== void 0)
            return Z.update( () => {
                d.onUpdate(f),
                d.onComplete()
            }
            ),
            new $1([])
    }
    return !s && Qd.supports(d) ? new Qd(d) : new Gu(d)
}
;
function C2({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function w0(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var s;
    let {transition: o=e.getDefaultTransition(), transitionEnd: l, ...u} = t;
    r && (o = r);
    const c = []
      , d = i && e.animationState && e.animationState.getState()[i];
    for (const h in u) {
        const f = e.getValue(h, (s = e.latestValues[h]) !== null && s !== void 0 ? s : null)
          , v = u[h];
        if (v === void 0 || d && C2(d, h))
            continue;
        const x = {
            delay: n,
            ...Lu(o || {}, h)
        };
        let w = !1;
        if (window.MotionHandoffAnimation) {
            const m = Wm(e);
            if (m) {
                const p = window.MotionHandoffAnimation(m, h, Z);
                p !== null && (x.startTime = p,
                w = !0)
            }
        }
        ul(e, h),
        f.start(Yu(h, f, v, e.shouldReduceMotion && Um.has(h) ? {
            type: !1
        } : x, e, w));
        const b = f.animation;
        b && c.push(b)
    }
    return l && Promise.all(c).then( () => {
        Z.update( () => {
            l && sw(e, l)
        }
        )
    }
    ),
    c
}
function gl(e, t, n={}) {
    var r;
    const i = xo(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: s=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (s = n.transitionOverride);
    const o = i ? () => Promise.all(w0(e, i, n)) : () => Promise.resolve()
      , l = e.variantChildren && e.variantChildren.size ? (c=0) => {
        const {delayChildren: d=0, staggerChildren: h, staggerDirection: f} = s;
        return T2(e, t, d + c, h, f, n)
    }
    : () => Promise.resolve()
      , {when: u} = s;
    if (u) {
        const [c,d] = u === "beforeChildren" ? [o, l] : [l, o];
        return c().then( () => d())
    } else
        return Promise.all([o(), l(n.delay)])
}
function T2(e, t, n=0, r=0, i=1, s) {
    const o = []
      , l = (e.variantChildren.size - 1) * r
      , u = i === 1 ? (c=0) => c * r : (c=0) => l - c * r;
    return Array.from(e.variantChildren).sort(P2).forEach( (c, d) => {
        c.notify("AnimationStart", t),
        o.push(gl(c, t, {
            ...s,
            delay: n + u(d)
        }).then( () => c.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(o)
}
function P2(e, t) {
    return e.sortNodePosition(t)
}
function E2(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => gl(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = gl(e, t, n);
    else {
        const i = typeof t == "function" ? xo(e, t, n.custom) : t;
        r = Promise.all(w0(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const M2 = Nu.length;
function j0(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? j0(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < M2; n++) {
        const r = Nu[n]
          , i = e.props[r];
        (wi(i) || i === !1) && (t[r] = i)
    }
    return t
}
const R2 = [...ju].reverse()
  , A2 = ju.length;
function D2(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => E2(e, n, r)))
}
function L2(e) {
    let t = D2(e)
      , n = Jd()
      , r = !0;
    const i = u => (c, d) => {
        var h;
        const f = xo(e, d, u === "exit" ? (h = e.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
        if (f) {
            const {transition: v, transitionEnd: x, ...w} = f;
            c = {
                ...c,
                ...w,
                ...x
            }
        }
        return c
    }
    ;
    function s(u) {
        t = u(e)
    }
    function o(u) {
        const {props: c} = e
          , d = j0(e.parent) || {}
          , h = []
          , f = new Set;
        let v = {}
          , x = 1 / 0;
        for (let b = 0; b < A2; b++) {
            const m = R2[b]
              , p = n[m]
              , g = c[m] !== void 0 ? c[m] : d[m]
              , S = wi(g)
              , N = m === u ? p.isActive : null;
            N === !1 && (x = b);
            let C = g === d[m] && g !== c[m] && S;
            if (C && r && e.manuallyAnimateOnMount && (C = !1),
            p.protectedKeys = {
                ...v
            },
            !p.isActive && N === null || !g && !p.prevProp || vo(g) || typeof g == "boolean")
                continue;
            const P = I2(p.prevProp, g);
            let T = P || m === u && p.isActive && !C && S || b > x && S
              , L = !1;
            const E = Array.isArray(g) ? g : [g];
            let F = E.reduce(i(m), {});
            N === !1 && (F = {});
            const {prevResolvedValues: J={}} = p
              , ce = {
                ...J,
                ...F
            }
              , ht = q => {
                T = !0,
                f.has(q) && (L = !0,
                f.delete(q)),
                p.needsAnimating[q] = !0;
                const R = e.getValue(q);
                R && (R.liveStyle = !1)
            }
            ;
            for (const q in ce) {
                const R = F[q]
                  , V = J[q];
                if (v.hasOwnProperty(q))
                    continue;
                let I = !1;
                ol(R) && ol(V) ? I = !Lm(R, V) : I = R !== V,
                I ? R != null ? ht(q) : f.add(q) : R !== void 0 && f.has(q) ? ht(q) : p.protectedKeys[q] = !0
            }
            p.prevProp = g,
            p.prevResolvedValues = F,
            p.isActive && (v = {
                ...v,
                ...F
            }),
            r && e.blockInitialAnimation && (T = !1),
            T && (!(C && P) || L) && h.push(...E.map(q => ({
                animation: q,
                options: {
                    type: m
                }
            })))
        }
        if (f.size) {
            const b = {};
            f.forEach(m => {
                const p = e.getBaseTarget(m)
                  , g = e.getValue(m);
                g && (g.liveStyle = !0),
                b[m] = p ?? null
            }
            ),
            h.push({
                animation: b
            })
        }
        let w = !!h.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (w = !1),
        r = !1,
        w ? t(h) : Promise.resolve()
    }
    function l(u, c) {
        var d;
        if (n[u].isActive === c)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(f => {
            var v;
            return (v = f.animationState) === null || v === void 0 ? void 0 : v.setActive(u, c)
        }
        ),
        n[u].isActive = c;
        const h = o(u);
        for (const f in n)
            n[f].protectedKeys = {};
        return h
    }
    return {
        animateChanges: o,
        setActive: l,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = Jd(),
            r = !0
        }
    }
}
function I2(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Lm(t, e) : !1
}
function fn(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Jd() {
    return {
        animate: fn(!0),
        whileInView: fn(),
        whileHover: fn(),
        whileTap: fn(),
        whileDrag: fn(),
        whileFocus: fn(),
        exit: fn()
    }
}
class hn {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class V2 extends hn {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = L2(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        vo(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let _2 = 0;
class F2 extends hn {
    constructor() {
        super(...arguments),
        this.id = _2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const O2 = {
    animation: {
        Feature: V2
    },
    exit: {
        Feature: F2
    }
};
function ki(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function Di(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const z2 = e => t => _u(t) && e(t, Di(t));
function Qr(e, t, n, r) {
    return ki(e, t, z2(n), r)
}
const qd = (e, t) => Math.abs(e - t);
function B2(e, t) {
    const n = qd(e.x, t.x)
      , r = qd(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class N0 {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const h = ta(this.lastMoveEventInfo, this.history)
              , f = this.startEvent !== null
              , v = B2(h.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!f && !v)
                return;
            const {point: x} = h
              , {timestamp: w} = xe;
            this.history.push({
                ...x,
                timestamp: w
            });
            const {onStart: b, onMove: m} = this.handlers;
            f || (b && b(this.lastMoveEvent, h),
            this.startEvent = this.lastMoveEvent),
            m && m(this.lastMoveEvent, h)
        }
        ,
        this.handlePointerMove = (h, f) => {
            this.lastMoveEvent = h,
            this.lastMoveEventInfo = ea(f, this.transformPagePoint),
            Z.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (h, f) => {
            this.end();
            const {onEnd: v, onSessionEnd: x, resumeAnimation: w} = this.handlers;
            if (this.dragSnapToOrigin && w && w(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const b = ta(h.type === "pointercancel" ? this.lastMoveEventInfo : ea(f, this.transformPagePoint), this.history);
            this.startEvent && v && v(h, b),
            x && x(h, b)
        }
        ,
        !_u(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const o = Di(t)
          , l = ea(o, this.transformPagePoint)
          , {point: u} = l
          , {timestamp: c} = xe;
        this.history = [{
            ...u,
            timestamp: c
        }];
        const {onSessionStart: d} = n;
        d && d(t, ta(l, this.history)),
        this.removeListeners = Ai(Qr(this.contextWindow, "pointermove", this.handlePointerMove), Qr(this.contextWindow, "pointerup", this.handlePointerUp), Qr(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        an(this.updatePoint)
    }
}
function ea(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function eh(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function ta({point: e}, t) {
    return {
        point: e,
        delta: eh(e, S0(t)),
        offset: eh(e, U2(t)),
        velocity: H2(t, .1)
    }
}
function U2(e) {
    return e[0]
}
function S0(e) {
    return e[e.length - 1]
}
function H2(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = S0(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > Et(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const s = Mt(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
const k0 = 1e-4
  , W2 = 1 - k0
  , $2 = 1 + k0
  , b0 = .01
  , K2 = 0 - b0
  , X2 = 0 + b0;
function Be(e) {
    return e.max - e.min
}
function G2(e, t, n) {
    return Math.abs(e - t) <= n
}
function th(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = te(t.min, t.max, e.origin),
    e.scale = Be(n) / Be(t),
    e.translate = te(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= W2 && e.scale <= $2 || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= K2 && e.translate <= X2 || isNaN(e.translate)) && (e.translate = 0)
}
function Jr(e, t, n, r) {
    th(e.x, t.x, n.x, r ? r.originX : void 0),
    th(e.y, t.y, n.y, r ? r.originY : void 0)
}
function nh(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Be(t)
}
function Y2(e, t, n) {
    nh(e.x, t.x, n.x),
    nh(e.y, t.y, n.y)
}
function rh(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Be(t)
}
function qr(e, t, n) {
    rh(e.x, t.x, n.x),
    rh(e.y, t.y, n.y)
}
function Z2(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? te(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? te(n, e, r.max) : Math.min(e, n)),
    e
}
function ih(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function Q2(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: ih(e.x, n, i),
        y: ih(e.y, t, r)
    }
}
function sh(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function J2(e, t) {
    return {
        x: sh(e.x, t.x),
        y: sh(e.y, t.y)
    }
}
function q2(e, t) {
    let n = .5;
    const r = Be(e)
      , i = Be(t);
    return i > r ? n = gr(t.min, t.max - r, e.min) : r > i && (n = gr(e.min, e.max - i, t.min)),
    It(0, 1, n)
}
function ej(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const vl = .35;
function tj(e=vl) {
    return e === !1 ? e = 0 : e === !0 && (e = vl),
    {
        x: oh(e, "left", "right"),
        y: oh(e, "top", "bottom")
    }
}
function oh(e, t, n) {
    return {
        min: ah(e, t),
        max: ah(e, n)
    }
}
function ah(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const lh = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , er = () => ({
    x: lh(),
    y: lh()
})
  , uh = () => ({
    min: 0,
    max: 0
})
  , le = () => ({
    x: uh(),
    y: uh()
});
function Xe(e) {
    return [e("x"), e("y")]
}
function C0({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function nj({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function rj(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function na(e) {
    return e === void 0 || e === 1
}
function yl({scale: e, scaleX: t, scaleY: n}) {
    return !na(e) || !na(t) || !na(n)
}
function gn(e) {
    return yl(e) || T0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function T0(e) {
    return ch(e.x) || ch(e.y)
}
function ch(e) {
    return e && e !== "0%"
}
function Zs(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function dh(e, t, n, r, i) {
    return i !== void 0 && (e = Zs(e, i, r)),
    Zs(e, n, r) + t
}
function xl(e, t=0, n=1, r, i) {
    e.min = dh(e.min, t, n, r, i),
    e.max = dh(e.max, t, n, r, i)
}
function P0(e, {x: t, y: n}) {
    xl(e.x, t.translate, t.scale, t.originPoint),
    xl(e.y, n.translate, n.scale, n.originPoint)
}
const hh = .999999999999
  , fh = 1.0000000000001;
function ij(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let l = 0; l < i; l++) {
        s = n[l],
        o = s.projectionDelta;
        const {visualElement: u} = s.options;
        u && u.props.style && u.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && nr(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        P0(e, o)),
        r && gn(s.latestValues) && nr(e, s.latestValues))
    }
    t.x < fh && t.x > hh && (t.x = 1),
    t.y < fh && t.y > hh && (t.y = 1)
}
function tr(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function ph(e, t, n, r, i=.5) {
    const s = te(e.min, e.max, i);
    xl(e, t, n, s, r)
}
function nr(e, t) {
    ph(e.x, t.x, t.scaleX, t.scale, t.originX),
    ph(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function E0(e, t) {
    return C0(rj(e.getBoundingClientRect(), t))
}
function sj(e, t, n) {
    const r = E0(e, n)
      , {scroll: i} = t;
    return i && (tr(r.x, i.offset.x),
    tr(r.y, i.offset.y)),
    r
}
const M0 = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , oj = new WeakMap;
class aj {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = le(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = d => {
            const {dragSnapToOrigin: h} = this.getProps();
            h ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Di(d).point)
        }
          , s = (d, h) => {
            const {drag: f, dragPropagation: v, onDragStart: x} = this.getProps();
            if (f && !v && (this.openDragLock && this.openDragLock(),
            this.openDragLock = ew(f),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Xe(b => {
                let m = this.getAxisMotionValue(b).get() || 0;
                if (yt.test(m)) {
                    const {projection: p} = this.visualElement;
                    if (p && p.layout) {
                        const g = p.layout.layoutBox[b];
                        g && (m = Be(g) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[b] = m
            }
            ),
            x && Z.postRender( () => x(d, h)),
            ul(this.visualElement, "transform");
            const {animationState: w} = this.visualElement;
            w && w.setActive("whileDrag", !0)
        }
          , o = (d, h) => {
            const {dragPropagation: f, dragDirectionLock: v, onDirectionLock: x, onDrag: w} = this.getProps();
            if (!f && !this.openDragLock)
                return;
            const {offset: b} = h;
            if (v && this.currentDirection === null) {
                this.currentDirection = lj(b),
                this.currentDirection !== null && x && x(this.currentDirection);
                return
            }
            this.updateAxis("x", h.point, b),
            this.updateAxis("y", h.point, b),
            this.visualElement.render(),
            w && w(d, h)
        }
          , l = (d, h) => this.stop(d, h)
          , u = () => Xe(d => {
            var h;
            return this.getAnimationState(d) === "paused" && ((h = this.getAxisMotionValue(d).animation) === null || h === void 0 ? void 0 : h.play())
        }
        )
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new N0(t,{
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            contextWindow: M0(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: s} = this.getProps();
        s && Z.postRender( () => s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !ts(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = Z2(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , s = this.constraints;
        n && Jn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Q2(i.layoutBox, n) : this.constraints = !1,
        this.elastic = tj(r),
        s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Xe(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = ej(i.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Jn(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = sj(r, i.root, this.visualElement.getTransformPagePoint());
        let o = J2(i.layout.layoutBox, s);
        if (n) {
            const l = n(nj(o));
            this.hasMutatedConstraints = !!l,
            l && (o = C0(l))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l} = this.getProps()
          , u = this.constraints || {}
          , c = Xe(d => {
            if (!ts(d, n, this.currentDirection))
                return;
            let h = u && u[d] || {};
            o && (h = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , v = i ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: r ? t[d] : 0,
                bounceStiffness: f,
                bounceDamping: v,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...h
            };
            return this.startAxisValueAnimation(d, x)
        }
        );
        return Promise.all(c).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return ul(this.visualElement, t),
        r.start(Yu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Xe(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Xe(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Xe(n => {
            const {drag: r} = this.getProps();
            if (!ts(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: l} = i.layout.layoutBox[n];
                s.set(t[n] - te(o, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Jn(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Xe(o => {
            const l = this.getAxisMotionValue(o);
            if (l && this.constraints !== !1) {
                const u = l.get();
                i[o] = q2({
                    min: u,
                    max: u
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Xe(o => {
            if (!ts(o, t, null))
                return;
            const l = this.getAxisMotionValue(o)
              , {min: u, max: c} = this.constraints[o];
            l.set(te(u, c, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        oj.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Qr(t, "pointerdown", u => {
            const {drag: c, dragListener: d=!0} = this.getProps();
            c && d && this.start(u)
        }
        )
          , r = () => {
            const {dragConstraints: u} = this.getProps();
            Jn(u) && u.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        Z.read(r);
        const o = ki(window, "resize", () => this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
            this.isDragging && c && (Xe(d => {
                const h = this.getAxisMotionValue(d);
                h && (this.originPoint[d] += u[d].translate,
                h.set(h.get() + u[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            n(),
            s(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=vl, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: l
        }
    }
}
function ts(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function lj(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class uj extends hn {
    constructor(t) {
        super(t),
        this.removeGroupControls = Oe,
        this.removeListeners = Oe,
        this.controls = new aj(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Oe
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const mh = e => (t, n) => {
    e && Z.postRender( () => e(t, n))
}
;
class cj extends hn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Oe
    }
    onPointerDown(t) {
        this.session = new N0(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: M0(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: mh(t),
            onStart: mh(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session,
                i && Z.postRender( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Qr(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const ms = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function gh(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Dr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (_.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = gh(e, t.target.x)
          , r = gh(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , dj = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = ln.parse(e);
        if (i.length > 5)
            return r;
        const s = ln.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , l = n.x.scale * t.x
          , u = n.y.scale * t.y;
        i[0 + o] /= l,
        i[1 + o] /= u;
        const c = te(l, u, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
    }
};
class hj extends y.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        D1(fj),
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })),
        ms.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , o = r.projection;
        return o && (o.isPresent = s,
        i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || Z.postRender( () => {
            const l = o.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        ku.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function R0(e) {
    const [t,n] = pm()
      , r = y.useContext(gu);
    return a.jsx(hj, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: y.useContext(jm),
        isPresent: t,
        safeToRemove: n
    })
}
const fj = {
    borderRadius: {
        ...Dr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Dr,
    borderTopRightRadius: Dr,
    borderBottomLeftRadius: Dr,
    borderBottomRightRadius: Dr,
    boxShadow: dj
};
function pj(e, t, n) {
    const r = Ce(e) ? e : Ni(e);
    return r.start(Yu("", r, t, n)),
    r.animation
}
function mj(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const gj = (e, t) => e.depth - t.depth;
class vj {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Fu(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Ou(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(gj),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function yj(e, t) {
    const n = xt.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (an(r),
        e(s - t))
    }
    ;
    return Z.read(r, !0),
    () => an(r)
}
const A0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , xj = A0.length
  , vh = e => typeof e == "string" ? parseFloat(e) : e
  , yh = e => typeof e == "number" || _.test(e);
function wj(e, t, n, r, i, s) {
    i ? (e.opacity = te(0, n.opacity !== void 0 ? n.opacity : 1, jj(r)),
    e.opacityExit = te(t.opacity !== void 0 ? t.opacity : 1, 0, Nj(r))) : s && (e.opacity = te(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < xj; o++) {
        const l = `border${A0[o]}Radius`;
        let u = xh(t, l)
          , c = xh(n, l);
        if (u === void 0 && c === void 0)
            continue;
        u || (u = 0),
        c || (c = 0),
        u === 0 || c === 0 || yh(u) === yh(c) ? (e[l] = Math.max(te(vh(u), vh(c), r), 0),
        (yt.test(c) || yt.test(u)) && (e[l] += "%")) : e[l] = c
    }
    (t.rotate || n.rotate) && (e.rotate = te(t.rotate || 0, n.rotate || 0, r))
}
function xh(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const jj = D0(0, .5, Qm)
  , Nj = D0(.5, .95, Oe);
function D0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(gr(e, t, r))
}
function wh(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Ke(e, t) {
    wh(e.x, t.x),
    wh(e.y, t.y)
}
function jh(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function Nh(e, t, n, r, i) {
    return e -= t,
    e = Zs(e, 1 / n, r),
    i !== void 0 && (e = Zs(e, 1 / i, r)),
    e
}
function Sj(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (yt.test(t) && (t = parseFloat(t),
    t = te(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let l = te(s.min, s.max, r);
    e === s && (l -= t),
    e.min = Nh(e.min, t, n, l, i),
    e.max = Nh(e.max, t, n, l, i)
}
function Sh(e, t, [n,r,i], s, o) {
    Sj(e, t[n], t[r], t[i], t.scale, s, o)
}
const kj = ["x", "scaleX", "originX"]
  , bj = ["y", "scaleY", "originY"];
function kh(e, t, n, r) {
    Sh(e.x, t, kj, n ? n.x : void 0, r ? r.x : void 0),
    Sh(e.y, t, bj, n ? n.y : void 0, r ? r.y : void 0)
}
function bh(e) {
    return e.translate === 0 && e.scale === 1
}
function L0(e) {
    return bh(e.x) && bh(e.y)
}
function Ch(e, t) {
    return e.min === t.min && e.max === t.max
}
function Cj(e, t) {
    return Ch(e.x, t.x) && Ch(e.y, t.y)
}
function Th(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function I0(e, t) {
    return Th(e.x, t.x) && Th(e.y, t.y)
}
function Ph(e) {
    return Be(e.x) / Be(e.y)
}
function Eh(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class Tj {
    constructor() {
        this.members = []
    }
    add(t) {
        Fu(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (Ou(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Pj(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: c, rotate: d, rotateX: h, rotateY: f, skewX: v, skewY: x} = n;
        c && (r = `perspective(${c}px) ${r}`),
        d && (r += `rotate(${d}deg) `),
        h && (r += `rotateX(${h}deg) `),
        f && (r += `rotateY(${f}deg) `),
        v && (r += `skewX(${v}deg) `),
        x && (r += `skewY(${x}deg) `)
    }
    const l = e.x.scale * t.x
      , u = e.y.scale * t.y;
    return (l !== 1 || u !== 1) && (r += `scale(${l}, ${u})`),
    r || "none"
}
const vn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , zr = typeof window < "u" && window.MotionDebug !== void 0
  , ra = ["", "X", "Y", "Z"]
  , Ej = {
    visibility: "hidden"
}
  , Mh = 1e3;
let Mj = 0;
function ia(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function V0(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = Wm(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", Z, !(i || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && V0(r)
}
function _0({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, l=t == null ? void 0 : t()) {
            this.id = Mj++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                zr && (vn.totalNodes = vn.resolvedTargetDeltas = vn.recalculatedProjection = 0),
                this.nodes.forEach(Dj),
                this.nodes.forEach(Fj),
                this.nodes.forEach(Oj),
                this.nodes.forEach(Lj),
                zr && window.MotionDebug.record(vn)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let u = 0; u < this.path.length; u++)
                this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new vj)
        }
        addEventListener(o, l) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new zu),
            this.eventHandlers.get(o).add(l)
        }
        notifyListeners(o, ...l) {
            const u = this.eventHandlers.get(o);
            u && u.notify(...l)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = mj(o),
            this.instance = o;
            const {layoutId: u, layout: c, visualElement: d} = this.options;
            if (d && !d.current && d.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (c || u) && (this.isLayoutDirty = !0),
            e) {
                let h;
                const f = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0,
                    h && h(),
                    h = yj(f, 250),
                    ms.hasAnimatedSinceResize && (ms.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Ah))
                }
                )
            }
            u && this.root.registerSharedNode(u, this),
            this.options.animate !== !1 && d && (u || c) && this.addEventListener("didUpdate", ({delta: h, hasLayoutChanged: f, hasRelativeTargetChanged: v, layout: x}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const w = this.options.transition || d.getDefaultTransition() || Wj
                  , {onLayoutAnimationStart: b, onLayoutAnimationComplete: m} = d.getProps()
                  , p = !this.targetLayout || !I0(this.targetLayout, x) || v
                  , g = !f && v;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || f && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(h, g);
                    const S = {
                        ...Lu(w, "layout"),
                        onPlay: b,
                        onComplete: m
                    };
                    (d.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0,
                    S.type = !1),
                    this.startAnimation(S)
                } else
                    f || Ah(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = x
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            an(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(zj),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && V0(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const h = this.path[d];
                h.shouldResetTransform = !0,
                h.updateScroll("snapshot"),
                h.options.layoutRoot && h.willUpdate(!1)
            }
            const {layoutId: l, layout: u} = this.options;
            if (l === void 0 && !u)
                return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Rh);
                return
            }
            this.isUpdating || this.nodes.forEach(Vj),
            this.isUpdating = !1,
            this.nodes.forEach(_j),
            this.nodes.forEach(Rj),
            this.nodes.forEach(Aj),
            this.clearAllSnapshots();
            const l = xt.now();
            xe.delta = It(0, 1e3 / 60, l - xe.timestamp),
            xe.timestamp = l,
            xe.isProcessing = !0,
            Go.update.process(xe),
            Go.preRender.process(xe),
            Go.render.process(xe),
            xe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            ku.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Ij),
            this.sharedNodes.forEach(Bj)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Z.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Z.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let u = 0; u < this.path.length; u++)
                    this.path[u].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = le(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1),
            l) {
                const u = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: u,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : u
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , l = this.projectionDelta && !L0(this.projectionDelta)
              , u = this.getTransformTemplate()
              , c = u ? u(this.latestValues, "") : void 0
              , d = c !== this.prevTransformTemplateValue;
            o && (l || gn(this.latestValues) || d) && (i(this.instance, c),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const l = this.measurePageBox();
            let u = this.removeElementScroll(l);
            return o && (u = this.removeTransform(u)),
            $j(u),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: u,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var o;
            const {visualElement: l} = this.options;
            if (!l)
                return le();
            const u = l.measureViewportBox();
            if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(Kj))) {
                const {scroll: d} = this.root;
                d && (tr(u.x, d.offset.x),
                tr(u.y, d.offset.y))
            }
            return u
        }
        removeElementScroll(o) {
            var l;
            const u = le();
            if (Ke(u, o),
            !((l = this.scroll) === null || l === void 0) && l.wasRoot)
                return u;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c]
                  , {scroll: h, options: f} = d;
                d !== this.root && h && f.layoutScroll && (h.wasRoot && Ke(u, o),
                tr(u.x, h.offset.x),
                tr(u.y, h.offset.y))
            }
            return u
        }
        applyTransform(o, l=!1) {
            const u = le();
            Ke(u, o);
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                !l && d.options.layoutScroll && d.scroll && d !== d.root && nr(u, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }),
                gn(d.latestValues) && nr(u, d.latestValues)
            }
            return gn(this.latestValues) && nr(u, this.latestValues),
            u
        }
        removeTransform(o) {
            const l = le();
            Ke(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!c.instance || !gn(c.latestValues))
                    continue;
                yl(c.latestValues) && c.updateSnapshot();
                const d = le()
                  , h = c.measurePageBox();
                Ke(d, h),
                kh(l, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d)
            }
            return gn(this.latestValues) && kh(l, this.latestValues),
            l
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== xe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var l;
            const u = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== u;
            if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: h, layoutId: f} = this.options;
            if (!(!this.layout || !(h || f))) {
                if (this.resolvedRelativeTargetAt = xe.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const v = this.getClosestProjectingParent();
                    v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = le(),
                    this.relativeTargetOrigin = le(),
                    qr(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox),
                    Ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = le(),
                    this.targetWithTransforms = le()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    Y2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ke(this.target, this.layout.layoutBox),
                    P0(this.target, this.targetDelta)) : Ke(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const v = this.getClosestProjectingParent();
                        v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = le(),
                        this.relativeTargetOrigin = le(),
                        qr(this.relativeTargetOrigin, this.target, v.target),
                        Ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    zr && vn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || yl(this.parent.latestValues) || T0(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const l = this.getLead()
              , u = !!this.resumingFrom || this !== l;
            let c = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1),
            u && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
            this.resolvedRelativeTargetAt === xe.timestamp && (c = !1),
            c)
                return;
            const {layout: d, layoutId: h} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(d || h))
                return;
            Ke(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
              , v = this.treeScale.y;
            ij(this.layoutCorrected, this.treeScale, this.path, u),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox,
            l.targetWithTransforms = le());
            const {target: x} = l;
            if (!x) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (jh(this.prevProjectionDelta.x, this.projectionDelta.x),
            jh(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Jr(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
            (this.treeScale.x !== f || this.treeScale.y !== v || !Eh(this.projectionDelta.x, this.prevProjectionDelta.x) || !Eh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", x)),
            zr && vn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var l;
            if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(),
            o) {
                const u = this.getStack();
                u && u.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = er(),
            this.projectionDelta = er(),
            this.projectionDeltaWithTransform = er()
        }
        setAnimationOrigin(o, l=!1) {
            const u = this.snapshot
              , c = u ? u.latestValues : {}
              , d = {
                ...this.latestValues
            }
              , h = er();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const f = le()
              , v = u ? u.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , w = v !== x
              , b = this.getStack()
              , m = !b || b.members.length <= 1
              , p = !!(w && !m && this.options.crossfade === !0 && !this.path.some(Hj));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = S => {
                const N = S / 1e3;
                Dh(h.x, o.x, N),
                Dh(h.y, o.y, N),
                this.setTargetDelta(h),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (qr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                Uj(this.relativeTarget, this.relativeTargetOrigin, f, N),
                g && Cj(this.relativeTarget, g) && (this.isProjectionDirty = !1),
                g || (g = le()),
                Ke(g, this.relativeTarget)),
                w && (this.animationValues = d,
                wj(d, c, this.latestValues, N, p, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = N
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (an(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Z.update( () => {
                ms.hasAnimatedSinceResize = !0,
                this.currentAnimation = pj(0, Mh, {
                    ...o,
                    onUpdate: l => {
                        this.mixTargetDelta(l),
                        o.onUpdate && o.onUpdate(l)
                    }
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Mh),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: l, target: u, layout: c, latestValues: d} = o;
            if (!(!l || !u || !c)) {
                if (this !== o && this.layout && c && F0(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    u = this.target || le();
                    const h = Be(this.layout.layoutBox.x);
                    u.x.min = o.target.x.min,
                    u.x.max = u.x.min + h;
                    const f = Be(this.layout.layoutBox.y);
                    u.y.min = o.target.y.min,
                    u.y.max = u.y.min + f
                }
                Ke(l, u),
                nr(l, d),
                Jr(this.projectionDeltaWithTransform, this.layoutCorrected, l, d)
            }
        }
        registerSharedNode(o, l) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new Tj),
            this.sharedNodes.get(o).add(l);
            const c = l.options.initialPromotionConfig;
            l.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: l, preserveFollowOpacity: u}={}) {
            const c = this.getStack();
            c && c.promote(this, u),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let l = !1;
            const {latestValues: u} = o;
            if ((u.z || u.rotate || u.rotateX || u.rotateY || u.rotateZ || u.skewX || u.skewY) && (l = !0),
            !l)
                return;
            const c = {};
            u.z && ia("z", o, c, this.animationValues);
            for (let d = 0; d < ra.length; d++)
                ia(`rotate${ra[d]}`, o, c, this.animationValues),
                ia(`skew${ra[d]}`, o, c, this.animationValues);
            o.render();
            for (const d in c)
                o.setStaticValue(d, c[d]),
                this.animationValues && (this.animationValues[d] = c[d]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var l, u;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return Ej;
            const c = {
                visibility: ""
            }
              , d = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                c.opacity = "",
                c.pointerEvents = fs(o == null ? void 0 : o.pointerEvents) || "",
                c.transform = d ? d(this.latestValues, "") : "none",
                c;
            const h = this.getLead();
            if (!this.projectionDelta || !this.layout || !h.target) {
                const w = {};
                return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                w.pointerEvents = fs(o == null ? void 0 : o.pointerEvents) || ""),
                this.hasProjected && !gn(this.latestValues) && (w.transform = d ? d({}, "") : "none",
                this.hasProjected = !1),
                w
            }
            const f = h.animationValues || h.latestValues;
            this.applyTransformsToTarget(),
            c.transform = Pj(this.projectionDeltaWithTransform, this.treeScale, f),
            d && (c.transform = d(f, c.transform));
            const {x: v, y: x} = this.projectionDelta;
            c.transformOrigin = `${v.origin * 100}% ${x.origin * 100}% 0`,
            h.animationValues ? c.opacity = h === this ? (u = (l = f.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = h === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const w in $s) {
                if (f[w] === void 0)
                    continue;
                const {correct: b, applyTo: m} = $s[w]
                  , p = c.transform === "none" ? f[w] : b(f[w], h);
                if (m) {
                    const g = m.length;
                    for (let S = 0; S < g; S++)
                        c[m[S]] = p
                } else
                    c[w] = p
            }
            return this.options.layoutId && (c.pointerEvents = h === this ? fs(o == null ? void 0 : o.pointerEvents) || "" : "none"),
            c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var l;
                return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(Rh),
            this.root.sharedNodes.clear()
        }
    }
}
function Rj(e) {
    e.updateLayout()
}
function Aj(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = n.source !== e.layout.source;
        s === "size" ? Xe(h => {
            const f = o ? n.measuredBox[h] : n.layoutBox[h]
              , v = Be(f);
            f.min = r[h].min,
            f.max = f.min + v
        }
        ) : F0(s, n.layoutBox, r) && Xe(h => {
            const f = o ? n.measuredBox[h] : n.layoutBox[h]
              , v = Be(r[h]);
            f.max = f.min + v,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[h].max = e.relativeTarget[h].min + v)
        }
        );
        const l = er();
        Jr(l, r, n.layoutBox);
        const u = er();
        o ? Jr(u, e.applyTransform(i, !0), n.measuredBox) : Jr(u, r, n.layoutBox);
        const c = !L0(l);
        let d = !1;
        if (!e.resumeFrom) {
            const h = e.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
                const {snapshot: f, layout: v} = h;
                if (f && v) {
                    const x = le();
                    qr(x, n.layoutBox, f.layoutBox);
                    const w = le();
                    qr(w, r, v.layoutBox),
                    I0(x, w) || (d = !0),
                    h.options.layoutRoot && (e.relativeTarget = w,
                    e.relativeTargetOrigin = x,
                    e.relativeParent = h)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: u,
            layoutDelta: l,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: d
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function Dj(e) {
    zr && vn.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function Lj(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Ij(e) {
    e.clearSnapshot()
}
function Rh(e) {
    e.clearMeasurements()
}
function Vj(e) {
    e.isLayoutDirty = !1
}
function _j(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Ah(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function Fj(e) {
    e.resolveTargetDelta()
}
function Oj(e) {
    e.calcProjection()
}
function zj(e) {
    e.resetSkewAndRotation()
}
function Bj(e) {
    e.removeLeadSnapshot()
}
function Dh(e, t, n) {
    e.translate = te(t.translate, 0, n),
    e.scale = te(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Lh(e, t, n, r) {
    e.min = te(t.min, n.min, r),
    e.max = te(t.max, n.max, r)
}
function Uj(e, t, n, r) {
    Lh(e.x, t.x, n.x, r),
    Lh(e.y, t.y, n.y, r)
}
function Hj(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Wj = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Ih = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Vh = Ih("applewebkit/") && !Ih("chrome/") ? Math.round : Oe;
function _h(e) {
    e.min = Vh(e.min),
    e.max = Vh(e.max)
}
function $j(e) {
    _h(e.x),
    _h(e.y)
}
function F0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !G2(Ph(t), Ph(n), .2)
}
function Kj(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const Xj = _0({
    attachResizeListener: (e, t) => ki(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , sa = {
    current: void 0
}
  , O0 = _0({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!sa.current) {
            const e = new Xj({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            sa.current = e
        }
        return sa.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , Gj = {
    pan: {
        Feature: cj
    },
    drag: {
        Feature: uj,
        ProjectionNode: O0,
        MeasureLayout: R0
    }
};
function Fh(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , s = r[i];
    s && Z.postRender( () => s(t, Di(t)))
}
class Yj extends hn {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = Y1(t, n => (Fh(this.node, n, "Start"),
        r => Fh(this.node, r, "End"))))
    }
    unmount() {}
}
class Zj extends hn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Ai(ki(this.node.current, "focus", () => this.onFocus()), ki(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Oh(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , s = r[i];
    s && Z.postRender( () => s(t, Di(t)))
}
class Qj extends hn {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = q1(t, n => (Oh(this.node, n, "Start"),
        (r, {success: i}) => Oh(this.node, r, i ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const wl = new WeakMap
  , oa = new WeakMap
  , Jj = e => {
    const t = wl.get(e.target);
    t && t(e)
}
  , qj = e => {
    e.forEach(Jj)
}
;
function eN({root: e, ...t}) {
    const n = e || document;
    oa.has(n) || oa.set(n, {});
    const r = oa.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(qj,{
        root: e,
        ...t
    })),
    r[i]
}
function tN(e, t, n) {
    const r = eN(t);
    return wl.set(e, n),
    r.observe(e),
    () => {
        wl.delete(e),
        r.unobserve(e)
    }
}
const nN = {
    some: 0,
    all: 1
};
class rN extends hn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : nN[i]
        }
          , l = u => {
            const {isIntersecting: c} = u;
            if (this.isInView === c || (this.isInView = c,
            s && !c && this.hasEnteredView))
                return;
            c && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {onViewportEnter: d, onViewportLeave: h} = this.node.getProps()
              , f = c ? d : h;
            f && f(u)
        }
        ;
        return tN(this.node.current, o, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(iN(t, n)) && this.startObserver()
    }
    unmount() {}
}
function iN({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const sN = {
    inView: {
        Feature: rN
    },
    tap: {
        Feature: Qj
    },
    focus: {
        Feature: Zj
    },
    hover: {
        Feature: Yj
    }
}
  , oN = {
    layout: {
        ProjectionNode: O0,
        MeasureLayout: R0
    }
}
  , jl = {
    current: null
}
  , z0 = {
    current: !1
};
function aN() {
    if (z0.current = !0,
    !!xu)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => jl.current = e.matches;
            e.addListener(t),
            t()
        } else
            jl.current = !1
}
const lN = [...d0, ke, ln]
  , uN = e => lN.find(c0(e))
  , zh = new WeakMap;
function cN(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , s = n[r];
        if (Ce(i))
            e.addValue(r, i);
        else if (Ce(s))
            e.addValue(r, Ni(i, {
                owner: e
            }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, Ni(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Bh = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class dN {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Ku,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const v = xt.now();
            this.renderScheduledAt < v && (this.renderScheduledAt = v,
            Z.render(this.render, !1, !0))
        }
        ;
        const {latestValues: u, renderState: c, onUpdate: d} = o;
        this.onUpdate = d,
        this.latestValues = u,
        this.baseTarget = {
            ...u
        },
        this.initialValues = n.initial ? {
            ...u
        } : {},
        this.renderState = c,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = l,
        this.blockInitialAnimation = !!s,
        this.isControllingVariants = yo(n),
        this.isVariantNode = xm(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: h, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const v in f) {
            const x = f[v];
            u[v] !== void 0 && Ce(x) && x.set(u[v], !1)
        }
    }
    mount(t) {
        this.current = t,
        zh.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        z0.current || aN(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : jl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        zh.delete(this.current),
        this.projection && this.projection.unmount(),
        an(this.notifyUpdate),
        an(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Vn.has(t)
          , i = n.on("change", l => {
            this.latestValues[t] = l,
            this.props.onUpdate && Z.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , s = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            s(),
            o && o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in vr) {
            const n = vr[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : le()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Bh.length; r++) {
            const i = Bh[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = "on" + i
              , o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = cN(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Ni(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (l0(i) || qm(i)) ? i = parseFloat(i) : !uN(i) && ln.test(n) && (i = s0(t, n)),
        this.setBaseTarget(t, Ce(i) ? i.get() : i)),
        Ce(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const o = Cu(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            o && (i = o[t])
        }
        if (r && i !== void 0)
            return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !Ce(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new zu),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class B0 extends dN {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = h0
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Ce(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function hN(e) {
    return window.getComputedStyle(e)
}
class fN extends B0 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Pm
    }
    readValueFromInstance(t, n) {
        if (Vn.has(n)) {
            const r = $u(n);
            return r && r.default || 0
        } else {
            const r = hN(t)
              , i = (bm(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return E0(t, n)
    }
    build(t, n, r) {
        Eu(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Du(t, n, r)
    }
}
class pN extends B0 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = le
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Vn.has(n)) {
            const r = $u(n);
            return r && r.default || 0
        }
        return n = Em.has(n) ? n : Su(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Am(t, n, r)
    }
    build(t, n, r) {
        Mu(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Mm(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Au(t.tagName),
        super.mount(t)
    }
}
const mN = (e, t) => bu(e) ? new pN(t) : new fN(t,{
    allowProjection: e !== y.Fragment
})
  , gN = U1({
    ...O2,
    ...sN,
    ...Gj,
    ...oN
}, mN)
  , k = r1(gN);
function vN() {
    const [e,t] = y.useState(!1)
      , [n,r] = y.useState(!1)
      , i = In()
      , [s,o] = y.useState( () => {
        const d = localStorage.getItem("isExecutorMode");
        return d ? JSON.parse(d) : !0
    }
    );
    y.useEffect( () => {
        const d = () => r(window.scrollY > 20);
        window.addEventListener("scroll", d);
        const h = () => {
            const f = localStorage.getItem("isExecutorMode");
            o(f ? JSON.parse(f) : !0)
        }
        ;
        return window.addEventListener("storage", h),
        () => {
            window.removeEventListener("scroll", d),
            window.removeEventListener("storage", h)
        }
    }
    , []);
    const l = [{
        to: "/",
        label: "Home"
    }, {
        to: "/about",
        label: "About"
    }, {
        to: "/tutorial",
        label: "Help"
    }, {
        to: "/executor",
        label: "Executor"
    }, {
        to: "/download",
        label: "Download"
    }, {
        to: "/credits",
        label: "Credits"
    }, {
        to: "/donate",
        label: "Donate"
    }]
      , u = {
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    }
      , c = {
        hover: {
            scale: 1.05,
            transition: {
                duration: .2,
                ease: "easeInOut"
            }
        }
    };
    return a.jsxs(k.nav, {
        initial: "hidden",
        animate: "visible",
        variants: u,
        className: `fixed w-full z-50 transition-all duration-300 ${n ? "py-4" : "py-6"}`,
        children: [a.jsxs("div", {
            className: `absolute inset-0 ${n && !e ? "opacity-100" : "opacity-0"}`,
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-2xl"
            }), a.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
            }), a.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
            }), a.jsx("div", {
                className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20"
            }), a.jsx("div", {
                className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            })]
        }), a.jsx("div", {
            className: "relative max-w-7xl mx-auto px-6",
            children: a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs(Tt, {
                    to: "/",
                    className: "flex items-center space-x-3 group",
                    children: [a.jsxs(k.div, {
                        className: "relative",
                        whileHover: {
                            scale: 1.1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                        },
                        children: [a.jsx("div", {
                            className: "absolute -inset-2 bg-gradient-to-r from-white/30 via-white/10 to-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), a.jsxs("div", {
                            className: "relative",
                            children: [a.jsx(k.img, {
                                whileHover: {
                                    rotate: 360
                                },
                                transition: {
                                    duration: .8
                                },
                                className: "h-10 w-10 rounded-full",
                                src: "/images/xeno.png",
                                alt: "Xeno"
                            }), a.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"
                            })]
                        })]
                    }), a.jsx(k.span, {
                        className: "text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                        whileHover: {
                            scale: 1.05
                        },
                        transition: {
                            duration: .2
                        },
                        children: "Xeno"
                    })]
                }), a.jsx("div", {
                    className: "hidden md:flex items-center space-x-1",
                    children: l.map( ({to: d, label: h}) => a.jsx(k.div, {
                        variants: c,
                        whileHover: "hover",
                        children: a.jsxs(Tt, {
                            to: d,
                            className: "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 overflow-hidden group",
                            children: [i.pathname === d && a.jsx(k.div, {
                                layoutId: "navbar-indicator",
                                className: "absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-lg -z-10",
                                transition: {
                                    type: "spring",
                                    bounce: .2,
                                    duration: .6
                                }
                            }), a.jsx("span", {
                                className: `relative z-10 ${i.pathname === d ? "text-white" : "text-gray-400 group-hover:text-white"}`,
                                children: h
                            }), a.jsx("div", {
                                className: "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            })]
                        })
                    }, d))
                }), a.jsx(k.div, {
                    className: "hidden md:block",
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: .95
                    },
                    children: a.jsxs("a", {
                        href: "https://discord.gg/xeno-now",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group relative inline-flex items-center space-x-2 px-4 py-2 rounded-full overflow-hidden",
                        children: [a.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"
                        }), a.jsx("img", {
                            src: "/images/Discord-Icon-White.png",
                            alt: "Discord",
                            className: "relative w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                        }), a.jsx("span", {
                            className: "relative text-sm font-medium text-white group-hover:text-gray-200 transition-colors",
                            children: "Join Discord"
                        })]
                    })
                }), a.jsxs(k.button, {
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: .9
                    },
                    onClick: () => t(!e),
                    className: "md:hidden relative group p-2 rounded-lg overflow-hidden",
                    children: [a.jsx("div", {
                        className: "absolute inset-0 bg-white/5 backdrop-blur-sm"
                    }), a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    }), a.jsx(Vx, {
                        className: "relative w-6 h-6 text-white"
                    })]
                })]
            })
        }), a.jsx(on, {
            children: e && a.jsxs(k.div, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -20
                },
                transition: {
                    duration: .4,
                    ease: "easeOut"
                },
                className: "md:hidden fixed inset-0 z-50",
                children: [a.jsx(k.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .3
                    },
                    className: "absolute inset-0 bg-black/80 backdrop-blur-xl"
                }), a.jsxs(k.div, {
                    initial: {
                        opacity: 0,
                        scale: .95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: .95,
                        y: 20
                    },
                    transition: {
                        duration: .3,
                        delay: .1
                    },
                    className: "relative h-full flex flex-col",
                    children: [a.jsxs("div", {
                        className: "absolute inset-0",
                        children: [a.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
                        }), a.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
                        }), a.jsx("div", {
                            className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20"
                        }), a.jsx("div", {
                            className: "absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_8s_linear_infinite]"
                        })]
                    }), a.jsxs("div", {
                        className: "relative flex-1 px-6 py-8 overflow-y-auto",
                        children: [a.jsxs("div", {
                            className: "flex items-center justify-between mb-8",
                            children: [a.jsxs(Tt, {
                                to: "/",
                                className: "flex items-center space-x-3 group",
                                children: [a.jsxs(k.div, {
                                    className: "relative",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10
                                    },
                                    children: [a.jsx("div", {
                                        className: "absolute -inset-2 bg-gradient-to-r from-white/30 via-white/10 to-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                                    }), a.jsxs("div", {
                                        className: "relative",
                                        children: [a.jsx(k.img, {
                                            whileHover: {
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: .8
                                            },
                                            className: "h-10 w-10 rounded-full",
                                            src: "/images/xeno.png",
                                            alt: "Xeno"
                                        }), a.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"
                                        })]
                                    })]
                                }), a.jsx(k.span, {
                                    className: "text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    transition: {
                                        duration: .2
                                    },
                                    children: "Xeno"
                                })]
                            }), a.jsxs(k.button, {
                                whileHover: {
                                    scale: 1.1
                                },
                                whileTap: {
                                    scale: .9
                                },
                                onClick: () => t(!1),
                                className: "group relative p-2 rounded-lg overflow-hidden",
                                children: [a.jsx("div", {
                                    className: "absolute inset-0 bg-white/5 backdrop-blur-sm"
                                }), a.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                }), a.jsx(Hs, {
                                    className: "relative w-6 h-6 text-white"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "space-y-4",
                            children: [l.map( ({to: d, label: h}, f) => a.jsx(k.div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: f * .1
                                },
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: .98
                                },
                                children: a.jsxs(Tt, {
                                    to: d,
                                    onClick: () => t(!1),
                                    className: `group relative block px-6 py-4 rounded-xl transition-all duration-300 overflow-hidden ${i.pathname === d ? "bg-white/10" : "hover:bg-white/5"}`,
                                    children: [a.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                    }), a.jsx("div", {
                                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                    }), a.jsxs("div", {
                                        className: "relative flex items-center justify-between",
                                        children: [a.jsx("span", {
                                            className: `text-lg font-medium ${i.pathname === d ? "text-white" : "text-gray-400 group-hover:text-white"}`,
                                            children: h
                                        }), a.jsx(k.div, {
                                            initial: {
                                                x: -10,
                                                opacity: 0
                                            },
                                            animate: {
                                                x: 0,
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: f * .1 + .2
                                            },
                                            className: "w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors",
                                            whileHover: {
                                                scale: 1.1
                                            },
                                            whileTap: {
                                                scale: .9
                                            },
                                            children: a.jsx(Mn, {
                                                className: "w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform"
                                            })
                                        })]
                                    })]
                                })
                            }, d)), a.jsx(k.div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: l.length * .1
                                },
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: .98
                                },
                                children: a.jsxs("a", {
                                    href: "https://discord.gg/xeno-now",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: () => t(!1),
                                    className: "group relative block px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden",
                                    children: [a.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                    }), a.jsx("div", {
                                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                    }), a.jsxs("div", {
                                        className: "relative flex items-center justify-between",
                                        children: [a.jsxs("div", {
                                            className: "flex items-center space-x-4",
                                            children: [a.jsx("img", {
                                                src: "/images/Discord-Icon-White.png",
                                                alt: "Discord",
                                                className: "w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity"
                                            }), a.jsx("span", {
                                                className: "text-lg font-medium text-white",
                                                children: "Join Discord"
                                            })]
                                        }), a.jsx(k.div, {
                                            initial: {
                                                x: -10,
                                                opacity: 0
                                            },
                                            animate: {
                                                x: 0,
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: l.length * .1 + .2
                                            },
                                            className: "w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors",
                                            whileHover: {
                                                scale: 1.1
                                            },
                                            whileTap: {
                                                scale: .9
                                            },
                                            children: a.jsx(Mn, {
                                                className: "w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform"
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })]
                })]
            })
        })]
    })
}
function yN() {
    const e = [{
        icon: () => a.jsx("img", {
            src: "/images/Discord-Icon-White.png",
            alt: "Discord",
            className: "w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity"
        }),
        href: "https://discord.gg/xeno-now",
        label: "Discord"
    }, {
        icon: Ax,
        href: "https://github.com/rz-ve",
        label: "GitHub"
    }, {
        icon: Ix,
        href: "mailto:rizve@xeno.onl",
        label: "Email"
    }]
      , t = [{
        to: "/credits",
        label: "Credits"
    }, {
        to: "/tutorial",
        label: "Help"
    }, {
        to: "/download",
        label: "Download"
    }, {
        to: "/donate",
        label: "Donate"
    }];
    return a.jsxs("footer", {
        className: "relative bg-black/50 backdrop-blur-xl border-t border-white/5",
        children: [a.jsxs("div", {
            className: "absolute inset-0",
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            }), a.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"
            })]
        }), a.jsx("div", {
            className: "relative max-w-7xl mx-auto px-6 py-8",
            children: a.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 items-center",
                children: [a.jsxs(k.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "flex items-center gap-6 justify-center md:justify-start",
                    children: [a.jsxs(Tt, {
                        to: "/",
                        className: "group relative",
                        children: [a.jsx("div", {
                            className: "absolute -inset-2 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), a.jsx(k.img, {
                            whileHover: {
                                scale: 1.1
                            },
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                            },
                            src: "https://i.ibb.co/k0Y4yB1/xeno.png",
                            alt: "Xeno",
                            className: "h-10 w-10 rounded-full"
                        })]
                    }), a.jsx("div", {
                        className: "h-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
                    }), a.jsx("div", {
                        className: "text-lg bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent font-medium",
                        children: "Experience the future"
                    })]
                }), a.jsx(k.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    className: "flex flex-wrap justify-center gap-6",
                    children: t.map( (n, r) => a.jsx(Tt, {
                        to: n.to,
                        className: "text-gray-400 hover:text-white transition-colors relative group",
                        children: a.jsxs("span", {
                            className: "relative",
                            children: [n.label, a.jsx("span", {
                                className: "absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-white/0 via-white to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            })]
                        })
                    }, n.to))
                }), a.jsx(k.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6,
                        delay: .4
                    },
                    className: "flex items-center justify-center md:justify-end gap-6",
                    children: e.map( ({icon: n, href: r, label: i}) => a.jsxs(k.a, {
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group relative",
                        "aria-label": i,
                        whileHover: {
                            scale: 1.1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                        },
                        children: [a.jsx("div", {
                            className: "absolute -inset-3 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), typeof n == "function" ? a.jsx("div", {
                            className: "relative transform transition-all duration-300",
                            children: a.jsx(n, {})
                        }) : a.jsx(n, {
                            className: "w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-300"
                        })]
                    }, i))
                })]
            })
        })]
    })
}
const _t = () => a.jsxs(a.Fragment, {
    children: [a.jsxs("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [a.jsx("div", {
            className: "absolute inset-0 opacity-20",
            children: a.jsx(k.div, {
                animate: {
                    backgroundPosition: ["0% 0%", "100% 100%"]
                },
                transition: {
                    duration: 20,
                    repeat: 1 / 0,
                    ease: "linear"
                },
                className: "absolute inset-0",
                style: {
                    backgroundImage: "linear-gradient(45deg, transparent 95%, rgba(255,255,255,0.3) 95%), linear-gradient(-45deg, transparent 95%, rgba(255,255,255,0.3) 95%)",
                    backgroundSize: "60px 60px"
                }
            })
        }), a.jsx("div", {
            className: "absolute inset-0",
            children: [...Array(20)].map( (e, t) => a.jsx(k.div, {
                animate: {
                    y: ["0%", "100%"],
                    x: t % 2 === 0 ? ["-10%", "10%"] : ["10%", "-10%"],
                    opacity: [0, 1, 0]
                },
                transition: {
                    duration: Math.random() * 10 + 10,
                    repeat: 1 / 0,
                    delay: Math.random() * 5,
                    ease: "linear"
                },
                className: "absolute w-1 h-1 bg-white rounded-full",
                style: {
                    left: `${Math.random() * 100}%`,
                    top: "-5%"
                }
            }, t))
        })]
    }), a.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none"
    })]
});
function U0({children: e, className: t="", duration: n=4, clockwise: r=!0}) {
    const [i,s] = y.useState("TOP")
      , o = c => {
        const d = ["TOP", "RIGHT", "BOTTOM", "LEFT"]
          , h = d.indexOf(c)
          , f = r ? (h + 1) % d.length : (h - 1 + d.length) % d.length;
        return d[f]
    }
      , l = {
        TOP: "radial-gradient(30% 60% at 50% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT: "radial-gradient(30% 60% at 100% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM: "radial-gradient(30% 60% at 50% 100%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(30% 60% at 0% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
    }
      , u = "radial-gradient(80% 120% at 50% 50%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)";
    return y.useEffect( () => {
        const c = setInterval( () => {
            s(d => o(d))
        }
        , n * 1e3);
        return () => clearInterval(c)
    }
    , [n, r]),
    a.jsxs("div", {
        className: `relative ${t}`,
        children: [a.jsx(k.div, {
            className: "absolute -inset-[2px] rounded-3xl overflow-hidden",
            initial: {
                background: l[i],
                opacity: 0,
                scale: .95
            },
            animate: {
                background: u,
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: .7,
                ease: "easeOut",
                background: {
                    duration: n / 2,
                    ease: "linear"
                }
            },
            style: {
                filter: "blur(12px)"
            }
        }), a.jsx(k.div, {
            className: "relative",
            initial: {
                opacity: 0,
                scale: .95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: .7,
                ease: "easeOut"
            },
            children: e
        })]
    })
}
function xN({item: e, index: t, isOpen: n, onToggle: r}) {
    return a.jsxs(k.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .5,
            delay: .1 * t
        },
        className: "relative group",
        children: [a.jsx("div", {
            className: "absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"
        }), a.jsx("div", {
            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-white/20",
            children: a.jsxs("button", {
                onClick: r,
                className: "relative w-full p-6 text-left transition-all duration-300",
                children: [a.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [a.jsx("h3", {
                        className: "text-xl font-semibold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:text-white transition-colors",
                        children: e.q
                    }), a.jsxs("div", {
                        className: "relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300",
                        children: [n ? a.jsx(_x, {
                            className: "w-4 h-4 text-white"
                        }) : a.jsx(hm, {
                            className: "w-4 h-4 text-white"
                        }), a.jsx("div", {
                            className: "absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-all duration-300"
                        })]
                    })]
                }), a.jsx(k.div, {
                    initial: !1,
                    animate: {
                        height: n ? "auto" : 0,
                        opacity: n ? 1 : 0,
                        marginTop: n ? 16 : 0
                    },
                    transition: {
                        duration: .3
                    },
                    className: "overflow-hidden",
                    children: a.jsxs("div", {
                        className: "relative",
                        children: [a.jsx("div", {
                            className: "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white/30 to-transparent rounded-full"
                        }), a.jsx("p", {
                            className: "text-gray-400 pl-4 leading-relaxed",
                            children: e.a
                        })]
                    })
                })]
            })
        })]
    })
}
function wN() {
    const [e,t] = y.useState(null)
      , [n,r] = y.useState(!1);
    y.useEffect( () => {
        r(!0)
    }
    , []);
    const i = [{
        q: "Is Xeno Safe?",
        a: "Yes, Xeno is safe to use. It is a legit utility software without any protection to its core components so you could reverse it yourself and see how Xeno works! Make sure that you are getting Xeno from the official website."
    }, {
        q: "Can I get banned with Xeno?",
        a: "It is possible to get banned from using Xeno because Xeno is a utility software for Roblox but the chances are slim."
    }, {
        q: "How often does Xeno update?",
        a: "Xeno gets regular updates, usually within 24 hours prior to a Roblox update, to keep everything running smoothly and stay compatible with the latest changes."
    }]
      , s = o => {
        t(e === o ? null : o)
    }
    ;
    return a.jsxs("div", {
        className: "relative min-h-screen bg-black text-white overflow-hidden",
        children: [a.jsx(_t, {}), a.jsxs("div", {
            className: "relative min-h-screen flex flex-col",
            children: [a.jsx("div", {
                className: "flex-1 flex items-center justify-center pt-24 sm:pt-24",
                children: a.jsxs("div", {
                    className: "w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-12",
                    children: [a.jsxs(k.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "text-center space-y-8 mb-8",
                        children: [a.jsx("h1", {
                            className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent"
                        }), a.jsx("p", {
                            className: "text-gray-400 max-w-2xl mx-auto text-lg"
                        })]
                    }), a.jsx("div", {
                        style: {
                            willChange: "transform",
                            transform: "perspective(1200px) rotateX(10deg)",
                            opacity: n ? 1 : 0,
                            transition: "opacity 0.8s ease-in-out"
                        },
                        children: a.jsx(U0, {
                            className: "w-full max-w-[900px] mx-auto",
                            children: a.jsxs(k.div, {
                                initial: {
                                    opacity: 0,
                                    scale: .8
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: .8
                                },
                                className: "group relative",
                                style: {
                                    willChange: "transform",
                                    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                                    transition: "transform 0.3s ease-out"
                                },
                                onMouseMove: o => {
                                    const l = o.currentTarget.getBoundingClientRect()
                                      , u = o.clientX - l.left
                                      , c = o.clientY - l.top
                                      , d = l.width / 2
                                      , h = l.height / 2
                                      , f = (c - h) / 20
                                      , v = (d - u) / 20;
                                    o.currentTarget.style.transform = `perspective(1000px) rotateX(${f}deg) rotateY(${v}deg) scale3d(1.05, 1.05, 1.05)`
                                }
                                ,
                                onMouseLeave: o => {
                                    o.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
                                }
                                ,
                                children: [a.jsx("div", {
                                    className: "absolute -inset-2 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-2xl blur-xl opacity-100 transition-all duration-700"
                                }), a.jsxs("div", {
                                    className: "relative rounded-2xl overflow-hidden",
                                    children: [a.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 z-10 opacity-100 transition-opacity duration-500"
                                    }), a.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-100 transition-all duration-700 z-20"
                                    }), a.jsx("div", {
                                        className: "absolute -inset-1 bg-gradient-to-br from-white/10 via-white/5 to-transparent rotate-180 opacity-100 transition-all duration-700 z-20"
                                    }), a.jsx("img", {
                                        src: "/images/Xeno-V1.2.0.png",
                                        alt: "Xeno",
                                        className: "w-full h-full object-contain rounded-2xl transform transition-all duration-700 relative z-30"
                                    }), a.jsx("div", {
                                        className: "absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent opacity-100 transition-all duration-700 blur-xl"
                                    }), a.jsx("div", {
                                        className: "absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/20 to-transparent opacity-100 transition-all duration-700 blur-xl"
                                    })]
                                })]
                            })
                        })
                    }), a.jsxs(k.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .6
                        },
                        className: "flex flex-col sm:flex-row items-center justify-center gap-6",
                        children: [a.jsxs(Tt, {
                            to: "/download",
                            className: "group relative overflow-hidden rounded-xl w-full sm:w-auto",
                            children: [a.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white rounded-xl"
                            }), a.jsx("div", {
                                className: "absolute inset-[1px] bg-black rounded-[11px] transition-colors group-hover:bg-black/95"
                            }), a.jsxs("div", {
                                className: "relative px-6 sm:px-12 py-4 flex items-center justify-center space-x-2 text-lg font-medium",
                                children: [a.jsx("span", {
                                    className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:text-white transition-colors",
                                    children: "Download Now"
                                }), a.jsx(lm, {
                                    className: "w-5 h-5 text-white group-hover:scale-110 transition-transform"
                                })]
                            })]
                        }), a.jsxs(Tt, {
                            to: "/tutorial",
                            className: "group relative overflow-hidden rounded-xl",
                            children: [a.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                            }), a.jsx("div", {
                                className: "absolute inset-[1px] bg-black rounded-[11px]"
                            }), a.jsxs("div", {
                                className: "relative px-8 sm:px-12 py-4 flex items-center justify-center space-x-2 text-lg font-medium",
                                children: [a.jsx("span", {
                                    className: "text-white/90 group-hover:text-white transition-colors",
                                    children: "Help & Tutorial"
                                }), a.jsx(Mn, {
                                    className: "w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                                })]
                            })]
                        })]
                    }), a.jsx(k.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .5,
                            delay: 1
                        },
                        className: "text-gray-400 mt-4",
                        children: a.jsx("span", {
                            children: "Xeno executor is a free, keyless external executor for Roblox to optimize your gaming experience."
                        })
                    })]
                })
            }), a.jsxs(k.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    delay: .8
                },
                className: "w-full px-4 py-12 sm:py-16 relative",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none"
                }), a.jsxs("div", {
                    className: "max-w-6xl mx-auto relative",
                    children: [a.jsx(k.div, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "text-center mb-12",
                        children: a.jsx("h2", {
                            className: "text-5xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent inline-block",
                            children: "Frequently Asked Questions"
                        })
                    }), a.jsx("div", {
                        className: "space-y-4 max-w-3xl mx-auto",
                        children: a.jsx(on, {
                            children: i.map( (o, l) => a.jsx(xN, {
                                item: o,
                                index: l,
                                isOpen: e === l,
                                onToggle: () => s(l)
                            }, l))
                        })
                    })]
                })]
            })]
        })]
    })
}
function jN() {
    const [e,t] = y.useState(!1)
      , n = "/Xeno Tutorial.mp4"
      , r = [{
        title: "Xeno not opening",
        desc: "You do not have the required dependencies downloaded. Download Microsoft Visual C++ Redistributable and .NET Runtime 8.0.0",
        links: [{
            text: "Microsoft Visual C++ Redistributable",
            url: "https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170"
        }, {
            text: ".NET Runtime 8.0.0",
            url: "https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.100-windows-x64-installer"
        }]
    }, {
        title: "Script not executing",
        desc: "There was an interference attaching to Roblox and restarting Xeno would resume everything"
    }];
    return a.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [a.jsx(_t, {}), a.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [a.jsxs(k.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-8 mb-16",
                children: [a.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Help & Tutorial"
                }), a.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Learn how to use Xeno and troubleshoot common issues"
                })]
            }), a.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto",
                children: [a.jsxs(k.div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "relative group",
                    children: [a.jsx("div", {
                        className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    }), a.jsxs("div", {
                        className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden",
                        children: [a.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                        }), a.jsx("div", {
                            className: "relative p-6",
                            children: a.jsx("div", {
                                className: "aspect-video w-full rounded-lg overflow-hidden relative",
                                children: a.jsxs(k.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    className: "relative cursor-pointer group",
                                    onClick: () => t(!0),
                                    children: [a.jsx(k.video, {
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        transition: {
                                            duration: .3
                                        },
                                        src: n,
                                        className: "w-full h-full object-cover",
                                        muted: !0,
                                        playsInline: !0
                                    }), a.jsx(k.div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        whileHover: {
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: .2
                                        },
                                        className: "absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm",
                                        children: a.jsxs(k.div, {
                                            whileHover: {
                                                scale: 1.1
                                            },
                                            whileTap: {
                                                scale: .95
                                            },
                                            className: "relative group",
                                            children: [a.jsx("div", {
                                                className: "absolute -inset-4 bg-white/20 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity"
                                            }), a.jsx("div", {
                                                className: "relative w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg",
                                                children: a.jsx(rl, {
                                                    className: "w-8 h-8 text-black ml-1"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        })]
                    })]
                }), a.jsxs(k.div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "space-y-6",
                    children: [a.jsxs("h2", {
                        className: "text-3xl font-bold mb-8 flex items-center gap-3",
                        children: [a.jsx(dm, {
                            className: "w-8 h-8 text-white/80"
                        }), a.jsx("span", {
                            className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                            children: "Common Issues"
                        })]
                    }), r.map( (i, s) => a.jsxs(k.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .2 + s * .1
                        },
                        className: "group relative",
                        children: [a.jsx("div", {
                            className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), a.jsxs("div", {
                            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                            children: [a.jsx("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                            }), a.jsx("div", {
                                className: "relative p-6",
                                children: a.jsxs("div", {
                                    className: "flex items-start gap-4",
                                    children: [a.jsx("div", {
                                        className: "mt-1 p-2 bg-white/10 rounded-lg",
                                        children: a.jsx(nl, {
                                            className: "w-5 h-5 text-white/80"
                                        })
                                    }), a.jsxs("div", {
                                        className: "flex-1",
                                        children: [a.jsx("h3", {
                                            className: "text-xl font-semibold mb-3 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                            children: i.title
                                        }), a.jsx("p", {
                                            className: "text-gray-400 mb-4 leading-relaxed",
                                            children: i.desc
                                        }), i.links && a.jsx("div", {
                                            className: "space-y-3",
                                            children: i.links.map( (o, l) => a.jsxs("a", {
                                                href: o.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "group/link flex items-center gap-2 text-white/80 hover:text-white transition-colors",
                                                children: [a.jsx("span", {
                                                    className: "transform group-hover/link:translate-x-1 transition-transform",
                                                    children: "→"
                                                }), a.jsx("span", {
                                                    className: "border-b border-white/0 group-hover/link:border-white/100 transition-colors",
                                                    children: o.text
                                                })]
                                            }, l))
                                        })]
                                    })]
                                })
                            })]
                        })]
                    }, i.title))]
                })]
            })]
        }), a.jsx(on, {
            children: e && a.jsx(k.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm",
                onClick: () => t(!1),
                children: a.jsxs(k.div, {
                    initial: {
                        scale: .9,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: .9,
                        opacity: 0
                    },
                    transition: {
                        type: "spring",
                        duration: .5
                    },
                    className: "relative w-full max-w-6xl mx-4 aspect-video",
                    onClick: i => i.stopPropagation(),
                    children: [a.jsx("video", {
                        src: n,
                        className: "w-full h-full",
                        controls: !0,
                        autoPlay: !0,
                        playsInline: !0
                    }), a.jsx(k.button, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: .9
                        },
                        onClick: () => t(!1),
                        className: "absolute -top-12 right-0 p-2 bg-white/90 rounded-full hover:bg-white transition-colors",
                        children: a.jsx(Hs, {
                            className: "w-6 h-6 text-black"
                        })
                    })]
                })
            })
        })]
    })
}
function NN() {
    const [e,t] = y.useState(null)
      , n = [{
        title: "CashApp",
        desc: "Quick and easy payment",
        value: "$RizveA",
        icon: "/images/CashApp.png"
    }, {
        title: "PayPal",
        desc: "Send as friends & family",
        value: "ARizve",
        icon: "/images/Paypal.png"
    }, {
        title: "Bitcoin",
        desc: "Cryptocurrency payment",
        value: "bc1qvlds5l57ehkjlnrpzzrqq9j9mecml6xq6ztqy3",
        icon: "/images/Bitcoin.png"
    }, {
        title: "Ethereum",
        desc: "Cryptocurrency payment",
        value: "0x2c8fbe2030941a4f5d3147Ed7F6D5eeC5187661a",
        icon: "/images/Ethereum.png"
    }, {
        title: "Litecoin",
        desc: "Cryptocurrency payment",
        value: "LRXYK5s8ATvdCt2KkxH9w2patns4rxyoFp",
        icon: "/images/LiteCoin.png"
    }]
      , r = async (o, l) => {
        try {
            await navigator.clipboard.writeText(o),
            t(l),
            setTimeout( () => t(null), 2e3)
        } catch (u) {
            console.error("Failed to copy:", u)
        }
    }
      , i = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .1
            }
        }
    }
      , s = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .3
            }
        }
    };
    return a.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [a.jsx(_t, {}), a.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [a.jsxs(k.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-8 mb-16",
                children: [a.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Support Xeno"
                }), a.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Your support helps me continue developing and improving Xeno"
                })]
            }), a.jsxs(k.div, {
                variants: i,
                initial: "hidden",
                animate: "visible",
                className: "relative overflow-hidden rounded-2xl max-w-4xl mx-auto",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-50"
                }), a.jsxs("div", {
                    className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                    children: [a.jsx("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                    }), a.jsx("div", {
                        className: "overflow-x-auto",
                        children: a.jsxs("table", {
                            className: "w-full",
                            children: [a.jsx("thead", {
                                children: a.jsxs("tr", {
                                    className: "border-b border-white/10",
                                    children: [a.jsx("th", {
                                        className: "py-6 px-8 text-left text-sm font-medium text-gray-400",
                                        children: "Method"
                                    }), a.jsx("th", {
                                        className: "py-6 px-8 text-left text-sm font-medium text-gray-400",
                                        children: "Description"
                                    }), a.jsx("th", {
                                        className: "py-6 px-8 text-left text-sm font-medium text-gray-400",
                                        children: "Address"
                                    })]
                                })
                            }), a.jsx("tbody", {
                                children: n.map( (o, l) => a.jsxs(k.tr, {
                                    variants: s,
                                    className: "group hover:bg-white/5 transition-all duration-300",
                                    children: [a.jsx("td", {
                                        className: "py-6 px-8",
                                        children: a.jsxs("div", {
                                            className: "flex items-center space-x-4",
                                            children: [a.jsxs("div", {
                                                className: "relative w-14 h-14 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300",
                                                children: [a.jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                }), a.jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                                                }), a.jsx("img", {
                                                    src: o.icon,
                                                    alt: o.title,
                                                    className: "w-full h-full object-contain p-2"
                                                })]
                                            }), a.jsxs("div", {
                                                className: "space-y-1",
                                                children: [a.jsx("span", {
                                                    className: "font-medium text-lg bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                                    children: o.title
                                                }), a.jsx("p", {
                                                    className: "text-sm text-gray-400 group-hover:text-gray-300 transition-colors",
                                                    children: o.desc
                                                })]
                                            })]
                                        })
                                    }), a.jsx("td", {
                                        className: "py-6 px-8",
                                        children: a.jsxs("div", {
                                            className: "relative overflow-hidden rounded-xl bg-white/5 px-4 py-2 group-hover:bg-white/10 transition-all duration-300",
                                            children: [a.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            }), a.jsx("span", {
                                                className: "relative text-gray-400 group-hover:text-gray-300 transition-colors",
                                                children: o.desc
                                            })]
                                        })
                                    }), a.jsx("td", {
                                        className: "py-6 px-8",
                                        children: a.jsxs(k.button, {
                                            onClick: () => r(o.value, o.title),
                                            className: "group/btn relative flex items-center justify-between w-full max-w-xs bg-white/5 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden",
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: .98
                                            },
                                            children: [a.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                                            }), a.jsx("span", {
                                                className: "relative text-sm font-mono text-gray-300 truncate group-hover/btn:text-white transition-colors",
                                                children: o.value
                                            }), a.jsx(on, {
                                                mode: "wait",
                                                children: e === o.title ? a.jsx(k.div, {
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        scale: 0
                                                    },
                                                    className: "relative text-green-400",
                                                    children: a.jsx(hs, {
                                                        className: "w-4 h-4"
                                                    })
                                                }, "check") : a.jsx(k.div, {
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        scale: 0
                                                    },
                                                    className: "relative text-gray-400 group-hover/btn:text-white transition-colors",
                                                    children: a.jsx(am, {
                                                        className: "w-4 h-4"
                                                    })
                                                }, "copy")
                                            })]
                                        })
                                    })]
                                }, o.title))
                            })]
                        })
                    })]
                })]
            })]
        })]
    })
}
const SN = [{
    icon: Wx,
    title: "Good Community",
    description: "Join our growing community"
}, {
    icon: mu,
    title: "Multi Attach",
    description: "Attach to multiple Clients at once"
}, {
    icon: fm,
    title: "Performance",
    description: "Run scripts with high speed"
}];
function kN() {
    const [e,t] = y.useState("")
      , [n,r] = y.useState(!0)
      , [i,s] = y.useState("")
      , [o,l] = y.useState([]);
    y.useEffect( () => {
        (async () => {
            try {
                const h = await fetch("https://x3no.pages.dev/version.txt");
                if (!h.ok)
                    throw new Error("Failed to fetch version");
                const f = await h.text();
                t(f.trim());
                const v = await fetch("https://x3no.pages.dev/changelogs.txt");
                if (!v.ok)
                    throw new Error("Failed to fetch changelog");
                const x = await v.text();
                l(x.split(`
`).filter(w => w.trim())),
                r(!1)
            } catch {
                s("Failed to fetch information"),
                r(!1)
            }
        }
        )()
    }
    , []);
    const u = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .2
            }
        }
    }
      , c = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6
            }
        }
    };
    return a.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [a.jsxs("div", {
            className: "fixed inset-0 z-0",
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"
            }), a.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30"
            }), a.jsx("div", {
                className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20"
            })]
        }), a.jsx(_t, {}), a.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [a.jsxs(k.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-4 mb-12",
                children: [a.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Download Xeno"
                }), a.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Experience the next generation of scripting"
                })]
            }), a.jsxs(k.div, {
                variants: u,
                initial: "hidden",
                animate: "visible",
                className: "relative",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-2xl animate-pulse-slow"
                }), a.jsxs("div", {
                    className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden",
                    children: [a.jsx("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                    }), a.jsx("div", {
                        className: "relative p-8 sm:p-10",
                        children: a.jsxs("div", {
                            className: "grid lg:grid-cols-3 gap-8",
                            children: [a.jsxs("div", {
                                className: "lg:col-span-2",
                                children: [a.jsxs(k.div, {
                                    className: "flex flex-col sm:flex-row items-center gap-6 mb-10",
                                    variants: c,
                                    children: [a.jsxs("div", {
                                        className: "relative group",
                                        children: [a.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        }), a.jsx("img", {
                                            src: "/images/xeno.png",
                                            alt: "Xeno",
                                            className: "relative w-20 h-20 rounded-full unselectable"
                                        })]
                                    }), !n && !i && a.jsxs("div", {
                                        className: "text-center sm:text-left",
                                        children: [a.jsxs("h2", {
                                            className: "text-3xl font-bold text-white mb-2",
                                            children: ["Xeno ", e]
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-2 text-gray-400 justify-center sm:justify-start",
                                            children: [a.jsx(il, {
                                                className: "w-4 h-4"
                                            }), a.jsx("span", {
                                                children: "Latest Release"
                                            })]
                                        })]
                                    })]
                                }), a.jsx(k.div, {
                                    variants: u,
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10",
                                    children: SN.map( ({icon: d, title: h, description: f}, v) => a.jsxs(k.div, {
                                        variants: c,
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        className: "group relative",
                                        children: [a.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        }), a.jsx("div", {
                                            className: "relative h-full p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 group-hover:border-white/20",
                                            children: a.jsxs("div", {
                                                className: "flex flex-col gap-4",
                                                children: [a.jsxs(k.div, {
                                                    className: "relative",
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 300
                                                    },
                                                    children: [a.jsx("div", {
                                                        className: "absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                                    }), a.jsx(d, {
                                                        className: "relative w-6 h-6 text-white"
                                                    })]
                                                }), a.jsxs("div", {
                                                    children: [a.jsx("h3", {
                                                        className: "font-medium text-lg mb-1",
                                                        children: h
                                                    }), a.jsx("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: f
                                                    })]
                                                })]
                                            })
                                        })]
                                    }, h))
                                }), a.jsx(k.div, {
                                    variants: c,
                                    className: "flex flex-wrap gap-4",
                                    children: a.jsxs(Tt, {
                                        to: "/method",
                                        className: "group relative overflow-hidden rounded-xl",
                                        children: [a.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                                        }), a.jsx("div", {
                                            className: "absolute inset-[1px] bg-black rounded-[11px]"
                                        }), a.jsxs("div", {
                                            className: "relative px-8 sm:px-12 py-4 flex items-center justify-center space-x-2 text-lg font-medium",
                                            children: [a.jsx("span", {
                                                className: "text-white/90 group-hover:text-white transition-colors",
                                                children: "Download Now"
                                            }), a.jsx(Mn, {
                                                className: "w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                                            })]
                                        })]
                                    })
                                })]
                            }), a.jsxs(k.div, {
                                variants: c,
                                className: "relative",
                                children: [a.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl"
                                }), a.jsxs("div", {
                                    className: "relative bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10",
                                    children: [a.jsxs("h3", {
                                        className: "text-xl font-bold mb-6 flex items-center gap-2",
                                        children: [a.jsx(il, {
                                            className: "w-5 h-5"
                                        }), a.jsx("span", {
                                            children: "Latest Updates"
                                        })]
                                    }), n ? a.jsx("div", {
                                        className: "space-y-3",
                                        children: [...Array(5)].map( (d, h) => a.jsx("div", {
                                            className: "animate-pulse",
                                            children: a.jsx("div", {
                                                className: "h-4 bg-white/10 rounded w-3/4"
                                            })
                                        }, h))
                                    }) : i ? a.jsx("p", {
                                        className: "text-red-400",
                                        children: "Failed to load changelog"
                                    }) : a.jsx("div", {
                                        className: "space-y-2 max-h-[300px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent",
                                        children: o.map( (d, h) => a.jsxs(k.div, {
                                            variants: c,
                                            className: "group relative",
                                            children: [a.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                            }), a.jsxs("div", {
                                                className: "relative p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/5 group-hover:border-white/20",
                                                children: [a.jsx("div", {
                                                    className: "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-white to-gray-500 group-hover:h-full transition-all duration-300 rounded-r-full"
                                                }), a.jsx("p", {
                                                    className: "pl-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors",
                                                    children: d
                                                })]
                                            })]
                                        }, h))
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            })]
        })]
    })
}
function bN() {
    y.useEffect( () => {
        window.scrollTo(0, 0)
    }
    , []);
    const e = [{
        title: "Linkvertise",
        image: "/images/Linkvertise.png",
        description: "Quick and easy download through Linkvertise",
        url: "https://link-center.net/1210123/xeno-v115",
        features: ["Fast Download", "Secure Link", "Easy Process"]
    }, {
        title: "Lootlabs",
        image: "/images/LootLabs.png",
        description: "Faster and simple download through Lootlabs",
        url: "https://loot-link.com/s?cv43bEme",
        features: ["Easy Download", "Reliable Service", "Quick Access"]
    }, {
        title: "Work.ink",
        image: "/images/WorkInk.png",
        description: "Fast and reliable download through Work.ink",
        url: "https://work.ink/1Zeb/2u0b6ncr",
        features: ["Quick Download", "Reliable Service", "Simple Process"]
    }]
      , t = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .2
            }
        }
    }
      , n = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: .3,
                ease: "easeInOut"
            }
        }
    }
      , r = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .3
            }
        }
    };
    return a.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-20",
        children: [a.jsx(_t, {}), a.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [a.jsxs(k.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-6 mb-16",
                children: [a.jsx(k.h1, {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    children: "Choose Your Download Method"
                }), a.jsx(k.p, {
                    className: "text-xl text-gray-400 max-w-2xl mx-auto",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .3
                    },
                    children: "Select your preferred way to download Xeno"
                })]
            }), a.jsx(k.div, {
                variants: t,
                initial: "hidden",
                animate: "visible",
                className: "grid md:grid-cols-3 gap-8 max-w-7xl mx-auto",
                children: e.map( (i, s) => a.jsxs(k.div, {
                    variants: n,
                    whileHover: "hover",
                    className: "group relative w-full h-full",
                    children: [a.jsx("div", {
                        className: "absolute -inset-1 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    }), a.jsxs("div", {
                        className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden h-full",
                        children: [a.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                        }), a.jsx("div", {
                            className: "relative p-8 flex flex-col items-center justify-between h-full",
                            children: a.jsxs("div", {
                                className: "flex flex-col items-center space-y-6 w-full",
                                children: [a.jsxs(k.div, {
                                    className: "relative w-32 h-32 flex items-center justify-center",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    transition: {
                                        duration: .3
                                    },
                                    children: [a.jsx("div", {
                                        className: "absolute inset-0 bg-white/20 rounded-xl blur-xl animate-pulse-slow"
                                    }), a.jsx("img", {
                                        src: i.image,
                                        alt: i.title,
                                        className: "relative w-24 h-24 object-contain rounded-xl"
                                    })]
                                }), a.jsxs("div", {
                                    className: "text-center space-y-4 w-full",
                                    children: [a.jsx("h3", {
                                        className: "text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                        children: i.title
                                    }), a.jsx("p", {
                                        className: "text-gray-400",
                                        children: i.description
                                    }), a.jsx("div", {
                                        className: "space-y-2",
                                        children: i.features.map( (o, l) => a.jsxs(k.div, {
                                            variants: r,
                                            className: "flex items-center justify-center space-x-2 text-sm text-gray-400",
                                            children: [a.jsx(Mn, {
                                                className: "w-4 h-4"
                                            }), a.jsx("span", {
                                                children: o
                                            })]
                                        }, l))
                                    }), a.jsxs(k.a, {
                                        href: i.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center space-x-2 mt-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: .95
                                        },
                                        children: [a.jsx("span", {
                                            className: "font-medium",
                                            children: "Download Now"
                                        }), a.jsx(um, {
                                            className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })]
                }, i.title))
            })]
        })]
    })
}
function CN() {
    const e = pu();
    In();
    const [t,n] = y.useState(!1)
      , [r,i] = y.useState(0)
      , [s,o] = y.useState(!1);
    y.useState("");
    const [l,u] = y.useState(!0)
      , [c,d] = y.useState(!1)
      , [h,f] = y.useState("")
      , [v,x] = y.useState(!1)
      , [w,b] = y.useState(3)
      , m = "Xeno-v1.2.3.zip"
      , p = "/downloads/Xeno-v1.2.3.zip";
    y.useEffect( () => {
        const N = E => (E.preventDefault(),
        !1)
          , C = E => {
            if (E.key === "F12" || E.ctrlKey && E.shiftKey && (E.key === "I" || E.key === "i" || E.key === "J" || E.key === "j" || E.key === "C" || E.key === "c" || E.key === "E" || E.key === "e" || E.key === "O" || E.key === "o" || E.key === "P" || E.key === "p") || E.ctrlKey && (E.key === "U" || E.key === "u"))
                return E.preventDefault(),
                !1
        }
          , P = () => {
            const E = () => {}
            ;
            ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"].forEach(J => {
                console && typeof console == "object" && J in console && (console[J] = E)
            }
            )
        }
        ;
        document.addEventListener("contextmenu", N),
        document.addEventListener("keydown", C),
        P();
        const L = setInterval( () => {
            const E = window.outerWidth - window.innerWidth > 160
              , F = window.outerHeight - window.innerHeight > 160;
            (E || F) && f("Developer tools detected. Please close them to continue.")
        }
        , 1e3);
        return () => {
            document.removeEventListener("contextmenu", N),
            document.removeEventListener("keydown", C),
            clearInterval(L)
        }
    }
    , []),
    y.useEffect( () => {
        const N = setInterval( () => {
            u(C => !C)
        }
        , 1e3);
        return () => clearInterval(N)
    }
    , []),
    y.useEffect( () => {
        const N = () => {
            try {
                const P = Math.floor(Math.random() * 10) + 20
                  , T = Array.from({
                    length: P
                }, () => [ () => String.fromCharCode(Math.floor(Math.random() * 26) + 97), () => String.fromCharCode(Math.floor(Math.random() * 26) + 65), () => String.fromCharCode(Math.floor(Math.random() * 10) + 48), () => "-_~".charAt(Math.floor(Math.random() * 3))][Math.floor(Math.random() * 4)]()).join("");
                window.history.pushState({}, document.title, `/secure-verification/${T}`)
            } catch {}
        }
        ;
        N();
        const C = setInterval(N, 50);
        return () => {
            clearInterval(C)
        }
    }
    , []),
    y.useEffect( () => {
        if (t && r < 100) {
            const N = setInterval( () => {
                i(C => {
                    const P = C + 1;
                    return P >= 100 ? (clearInterval(N),
                    setTimeout( () => {
                        d(!0)
                    }
                    , 500),
                    100) : P
                }
                )
            }
            , 50);
            return () => clearInterval(N)
        }
    }
    , [t, r]),
    y.useEffect( () => {
        if (c) {
            const N = setTimeout( () => {
                x(!0);
                const C = setInterval( () => {
                    b(P => P <= 1 ? (clearInterval(C),
                    window.location.href = "/",
                    0) : P - 1)
                }
                , 1e3);
                return () => clearInterval(C)
            }
            , 500);
            return () => clearTimeout(N)
        }
    }
    , [c, e]);
    const g = () => {
        o(!0),
        setTimeout( () => {
            n(!0),
            o(!1),
            setTimeout( () => {
                try {
                    const N = document.createElement("a");
                    N.href = p,
                    N.download = m,
                    N.setAttribute("type", "application/x-rar-compressed"),
                    document.body.appendChild(N),
                    N.click(),
                    document.body.removeChild(N)
                } catch {
                    f("Failed to initiate download. Please try again.")
                }
            }
            , 3500)
        }
        , .1)
    }
      , S = () => {
        e("/")
    }
    ;
    return a.jsxs("div", {
        className: "min-h-screen bg-black flex items-center justify-center overflow-hidden",
        children: [a.jsx(_t, {}), a.jsx(on, {
            mode: "wait",
            children: a.jsx(k.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -20
                },
                transition: {
                    duration: .5
                },
                className: "relative z-10 max-w-md w-full mx-4",
                children: a.jsxs("div", {
                    className: "relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-white/20",
                    children: [a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"
                    }), a.jsx("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30"
                    }), a.jsx("div", {
                        className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-white/90 to-white"
                    }), a.jsx("div", {
                        className: "relative p-8",
                        children: a.jsx("div", {
                            className: "flex flex-col items-center text-center",
                            children: h ? a.jsxs(a.Fragment, {
                                children: [a.jsxs(k.div, {
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    },
                                    className: "mb-6 p-4 rounded-full bg-white/10 relative",
                                    children: [a.jsx(k.div, {
                                        animate: {
                                            scale: l ? 1.2 : 1,
                                            opacity: l ? .5 : .2
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: 1 / 0,
                                            repeatType: "reverse"
                                        },
                                        className: "absolute inset-0 rounded-full bg-white/20"
                                    }), a.jsx($x, {
                                        className: "w-12 h-12 text-white relative z-10"
                                    })]
                                }), a.jsx(k.h2, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    className: "text-2xl font-bold mb-2 bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent",
                                    children: "Download Failed"
                                }), a.jsx(k.p, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .5
                                    },
                                    className: "text-gray-400 mb-8",
                                    children: h
                                }), a.jsx(k.button, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .7
                                    },
                                    onClick: S,
                                    className: "px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl",
                                    children: "Return Home"
                                })]
                            }) : t ? a.jsxs(a.Fragment, {
                                children: [a.jsxs(k.div, {
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    },
                                    className: "mb-6 p-4 rounded-full bg-white/10 relative",
                                    children: [a.jsx(k.div, {
                                        animate: {
                                            scale: l ? 1.2 : 1,
                                            opacity: l ? .5 : .2
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: 1 / 0,
                                            repeatType: "reverse"
                                        },
                                        className: "absolute inset-0 rounded-full bg-white/20"
                                    }), c ? a.jsx(kx, {
                                        className: "w-12 h-12 text-white relative z-10"
                                    }) : a.jsx(lm, {
                                        className: "w-12 h-12 text-white relative z-10"
                                    })]
                                }), a.jsx(k.h2, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    className: "text-2xl font-bold mb-2 bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent",
                                    children: c ? "Download Complete" : "Preparing Download"
                                }), a.jsx(k.p, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .5
                                    },
                                    className: "text-gray-400 mb-8",
                                    children: c ? "Your file has been downloaded successfully." : "Please wait while we prepare your download..."
                                }), c ? a.jsxs(k.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    className: "flex items-center justify-center gap-2 mb-8 text-white/80",
                                    children: [a.jsx(Sd, {
                                        className: "w-4 h-4"
                                    }), a.jsxs("span", {
                                        children: ["Done, redirecting you back home in ", w, " seconds..."]
                                    })]
                                }) : a.jsxs(k.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    className: "flex items-center justify-center gap-2 mb-8 text-white/80",
                                    children: [a.jsx(Sd, {
                                        className: "w-4 h-4"
                                    }), a.jsx("span", {
                                        children: "Preparing your download, please wait..."
                                    })]
                                }), !c && a.jsx(k.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .6
                                    },
                                    className: "flex items-center justify-center gap-3 mb-6"
                                }), c && a.jsx(k.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .6
                                    },
                                    className: "flex items-center justify-center gap-3 mb-6"
                                }), a.jsxs(k.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .7
                                    },
                                    className: "w-full mb-8",
                                    children: [a.jsxs("div", {
                                        className: "flex justify-between mb-2",
                                        children: [a.jsx("span", {
                                            className: "text-white/80 text-sm",
                                            children: "Download Progress"
                                        }), a.jsxs("span", {
                                            className: "text-white/80 text-sm",
                                            children: [r, "%"]
                                        })]
                                    }), a.jsx("div", {
                                        className: "h-2 bg-white/10 rounded-full overflow-hidden",
                                        children: a.jsx(k.div, {
                                            className: "h-full bg-white rounded-full",
                                            initial: {
                                                width: "0%"
                                            },
                                            animate: {
                                                width: `${r}%`
                                            },
                                            transition: {
                                                duration: .5
                                            }
                                        })
                                    })]
                                }), a.jsxs(k.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .8
                                    },
                                    className: "mt-8 p-4 bg-white/10 rounded-lg border border-white/20 w-full shadow-lg shadow-white/10",
                                    children: [a.jsxs("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [a.jsx(xi, {
                                            className: "w-5 h-5 text-white"
                                        }), a.jsx("span", {
                                            className: "text-white font-medium",
                                            children: "Download"
                                        })]
                                    }), a.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Your download is protected with advanced security measures to ensure safe delivery."
                                    }), a.jsx("div", {
                                        className: "mt-4 flex items-center justify-center",
                                        children: a.jsx(k.div, {
                                            className: "h-1 bg-white/30 rounded-full w-full overflow-hidden",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 1
                                            },
                                            children: a.jsx(k.div, {
                                                className: "h-full bg-white rounded-full",
                                                initial: {
                                                    width: "0%"
                                                },
                                                animate: {
                                                    width: "100%"
                                                },
                                                transition: {
                                                    duration: 2,
                                                    ease: "easeInOut"
                                                }
                                            })
                                        })
                                    })]
                                }), a.jsx(k.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 1.2
                                    },
                                    className: "mt-8 flex items-center justify-center gap-8"
                                }), a.jsx(k.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 1.6
                                    },
                                    className: "mt-8 text-xs text-gray-500",
                                    children: a.jsx("p", {
                                        children: "This download process helps us maintain the security of our files."
                                    })
                                })]
                            }) : a.jsxs(a.Fragment, {
                                children: [a.jsxs(k.div, {
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    },
                                    className: "mb-6 p-4 rounded-full bg-white/10 relative",
                                    children: [a.jsx(k.div, {
                                        animate: {
                                            scale: l ? 1.2 : 1,
                                            opacity: l ? .5 : .2
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: 1 / 0,
                                            repeatType: "reverse"
                                        },
                                        className: "absolute inset-0 rounded-full bg-white/20"
                                    }), a.jsx(Ex, {
                                        className: "w-12 h-12 text-white relative z-10"
                                    })]
                                }), a.jsx(k.h2, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    className: "text-2xl font-bold mb-2 bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent",
                                    children: "Human Verification"
                                }), a.jsx(k.p, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .5
                                    },
                                    className: "text-gray-400 mb-8",
                                    children: "Verify you're human to access your download"
                                }), a.jsx(k.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .7
                                    },
                                    className: "w-full mb-8",
                                    children: a.jsx("div", {
                                        className: "h-2 bg-white/10 rounded-full overflow-hidden",
                                        children: a.jsx(k.div, {
                                            className: "h-full bg-white rounded-full",
                                            initial: {
                                                width: "0%"
                                            },
                                            animate: {
                                                width: s ? "100%" : "0%"
                                            },
                                            transition: {
                                                duration: .5
                                            }
                                        })
                                    })
                                }), a.jsxs(k.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .8
                                    },
                                    className: "mt-8 p-4 bg-white/10 rounded-lg border border-white/20 w-full shadow-lg shadow-white/10",
                                    children: [a.jsxs("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [a.jsx(xi, {
                                            className: "w-5 h-5 text-white"
                                        }), a.jsx("span", {
                                            className: "text-white font-medium",
                                            children: "Verification"
                                        })]
                                    }), a.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "This verification process helps us maintain the security of our downloads."
                                    }), a.jsx("div", {
                                        className: "mt-4 flex items-center justify-center",
                                        children: a.jsx(k.div, {
                                            className: "h-1 bg-white/30 rounded-full w-full overflow-hidden",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 1
                                            },
                                            children: a.jsx(k.div, {
                                                className: "h-full bg-white rounded-full",
                                                initial: {
                                                    width: "0%"
                                                },
                                                animate: {
                                                    width: s ? "100%" : "0%"
                                                },
                                                transition: {
                                                    duration: .5,
                                                    ease: "easeInOut"
                                                }
                                            })
                                        })
                                    })]
                                }), a.jsx(k.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 1.2
                                    },
                                    className: "mt-8 flex items-center justify-center gap-8"
                                }), a.jsx(k.button, {
                                    onClick: g,
                                    disabled: s,
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    className: `group relative overflow-hidden rounded-xl w-full transition-all duration-300 mt-8 ${s ? "bg-white/5 opacity-50 cursor-not-allowed" : "bg-white/5 hover:bg-white/10"}`,
                                    children: a.jsx("div", {
                                        className: "relative px-6 py-4 flex items-center justify-center space-x-2 text-lg font-medium",
                                        children: s ? a.jsxs(a.Fragment, {
                                            children: [a.jsx(Lx, {
                                                className: "w-5 h-5 text-white animate-spin"
                                            }), a.jsx("span", {
                                                className: "text-white",
                                                children: "Verifying..."
                                            })]
                                        }) : a.jsxs(a.Fragment, {
                                            children: [a.jsx("span", {
                                                className: "text-white",
                                                children: "Verify & Download"
                                            }), a.jsx(Mn, {
                                                className: "w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                                            })]
                                        })
                                    })
                                }), a.jsx(k.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 1.6
                                    },
                                    className: "mt-8 text-xs text-gray-500",
                                    children: a.jsx("p", {
                                        children: "This verification process helps us maintain the security of our files."
                                    })
                                })]
                            })
                        })
                    })]
                })
            }, t ? "downloading" : "verifying")
        })]
    })
}
const Uh = {};
function TN() {
    const [e,t] = y.useState([{
        name: "Rizve",
        role: "Owner of Xeno",
        link: "https://github.com/rz-ve",
        avatar: "",
        discordId: "924133673538830356"
    }, {
        name: "Nano",
        role: "Discord Server Manager",
        link: "https://discord.com/users/808779817977249832",
        avatar: "",
        discordId: "808779817977249832"
    }, {
        name: "Voxlis",
        role: "Domain Contributor",
        link: "https://voxlis.net",
        avatar: "",
        discordId: "1270744029168009258"
    }, {
        name: "Mxx_xx3",
        role: "Website Designer",
        link: "https://mxx3x.vercel.app",
        avatar: "",
        discordId: "1239176576382271499"
    }, {
        name: "Http2",
        role: "Xeno Contributor",
        link: "https://getluna.win",
        avatar: "",
        discordId: "1247924410510348340"
    }, {
        name: "Quivings",
        role: "Xeno Contributor",
        link: "https://getsolara.dev",
        avatar: "",
        discordId: "1325378791308001280"
    }])
      , n = [{
        name: "@xnegati",
        amount: "$200",
        platform: "PayPal"
    }, {
        name: "@doggysecretfree",
        amount: "$100",
        platform: "Patreon"
    }, {
        name: "@ajamu._.",
        amount: "$59.47",
        platform: "PayPal"
    }, {
        name: "@orangeado_",
        amount: "$50",
        platform: "Cash App"
    }, {
        name: "@larrrys.",
        amount: "$30",
        platform: "PayPal"
    }, {
        name: "@upio",
        amount: "$21",
        platform: "Crypto"
    }]
      , r = [{
        name: "@ww00719",
        amount: 21e3
    }, {
        name: "@doggysecretfree",
        amount: 8050
    }, {
        name: "@upio",
        amount: 4270
    }, {
        name: "@pand6a",
        amount: 3500
    }, {
        name: "@vunxa",
        amount: 1400
    }, {
        name: "@ryk_cbaool2025",
        amount: 1400
    }, {
        name: "@dostanhalat",
        amount: 1400
    }]
      , i = o => {
        switch (o) {
        case "PayPal":
            return a.jsx("img", {
                src: "/images/Paypal.png",
                alt: "PayPal",
                className: "h-5 w-auto inline-block mr-1"
            });
        case "Patreon":
            return a.jsx("img", {
                src: "/images/Patreon.png",
                alt: "Patreon",
                className: "h-5 w-auto inline-block mr-1"
            });
        case "Cash App":
            return a.jsx("img", {
                src: "/images/CashApp.png",
                alt: "Cash App",
                className: "h-5 w-auto inline-block mr-1"
            });
        case "Crypto":
            return a.jsx("img", {
                src: "/images/Bitcoin.png",
                alt: "Crypto",
                className: "h-5 w-auto inline-block mr-1"
            });
        default:
            return null
        }
    }
      , s = o => {
        switch (o) {
        case "Owner of Xeno":
            return a.jsx(Cx, {
                className: "w-4 h-4 inline-block mr-1"
            });
        case "Discord Server Manager":
            return a.jsx(xi, {
                className: "w-4 h-4 inline-block mr-1"
            });
        case "Domain Contributor":
            return a.jsx(cm, {
                className: "w-4 h-4 inline-block mr-1"
            });
        case "Website Designer":
            return a.jsx(Fx, {
                className: "w-4 h-4 inline-block mr-1"
            });
        case "Xeno Contributor":
            return a.jsx(mu, {
                className: "w-4 h-4 inline-block mr-1"
            });
        default:
            return a.jsx(Us, {
                className: "w-4 h-4 inline-block mr-1"
            })
        }
    }
    ;
    return y.useEffect( () => {
        (async () => {
            const l = [...e];
            for (let u = 0; u < l.length; u++) {
                const c = l[u];
                if (c.discordId) {
                    const d = Uh[c.discordId];
                    if (d) {
                        l[u] = {
                            ...c,
                            avatar: d
                        };
                        continue
                    }
                    try {
                        const h = await fetch(`https://discordlookup.mesalytic.moe/v1/user/${c.discordId}`);
                        if (h.ok) {
                            const f = await h.json();
                            if (f.avatar && f.avatar.link) {
                                const v = f.avatar.link;
                                l[u] = {
                                    ...c,
                                    avatar: v
                                },
                                Uh[c.discordId] = v
                            }
                        }
                    } catch (h) {
                        console.error(`Failed to fetch Discord profile for ${c.name}:`, h)
                    }
                }
            }
            t(l)
        }
        )()
    }
    , []),
    a.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-20",
        children: [a.jsx(_t, {}), a.jsxs("div", {
            className: "relative max-w-6xl mx-auto px-4 py-12",
            children: [a.jsxs(k.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-4 mb-12",
                children: [a.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Credits"
                }), a.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Thank you to everyone who has contributed to making Xeno possible"
                })]
            }), a.jsxs("div", {
                className: "grid gap-8",
                children: [a.jsxs(k.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "relative overflow-hidden",
                    children: [a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow"
                    }), a.jsxs("div", {
                        className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                        children: [a.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"
                        }), a.jsxs("div", {
                            className: "relative p-6",
                            children: [a.jsxs("h2", {
                                className: "text-2xl font-bold mb-6 flex items-center gap-3",
                                children: [a.jsxs("div", {
                                    className: "relative",
                                    children: [a.jsx("div", {
                                        className: "absolute inset-0 bg-white/20 rounded-full blur animate-pulse"
                                    }), a.jsx(Nx, {
                                        className: "w-6 h-6 relative"
                                    })]
                                }), a.jsx("span", {
                                    className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                    children: "Contributors"
                                })]
                            }), a.jsx("div", {
                                className: "overflow-x-auto",
                                children: a.jsxs("table", {
                                    className: "w-full",
                                    children: [a.jsx("thead", {
                                        children: a.jsxs("tr", {
                                            className: "border-b border-white/10",
                                            children: [a.jsx("th", {
                                                className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                children: "Avatar"
                                            }), a.jsx("th", {
                                                className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                children: "Name"
                                            }), a.jsx("th", {
                                                className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                children: "Role"
                                            }), a.jsx("th", {
                                                className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                children: "Link"
                                            })]
                                        })
                                    }), a.jsx("tbody", {
                                        children: e.map( (o, l) => a.jsxs(k.tr, {
                                            initial: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                duration: .5,
                                                delay: l * .1
                                            },
                                            className: "group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500",
                                            children: [a.jsx("td", {
                                                className: "py-3 px-4",
                                                children: a.jsxs("div", {
                                                    className: "relative group/avatar",
                                                    children: [a.jsx("div", {
                                                        className: "absolute -inset-1 bg-gradient-to-r from-white/50 to-white/20 rounded-full blur opacity-0 group-hover/avatar:opacity-100 transition-all duration-500"
                                                    }), a.jsx("div", {
                                                        className: "absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse-slow opacity-0 group-hover/avatar:opacity-100"
                                                    }), a.jsx("img", {
                                                        src: o.avatar || "https://cdn.discordapp.com/embed/avatars/0.png",
                                                        alt: o.name,
                                                        className: "w-10 h-10 rounded-full object-cover relative transform group-hover/avatar:scale-105 transition-all duration-500 ring-2 ring-white/10 group-hover/avatar:ring-white/30"
                                                    })]
                                                })
                                            }), a.jsx("td", {
                                                className: "py-3 px-4",
                                                children: a.jsx("span", {
                                                    className: "font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                                                    children: o.name
                                                })
                                            }), a.jsx("td", {
                                                className: "py-3 px-4",
                                                children: a.jsxs("span", {
                                                    className: "text-gray-400 group-hover:text-gray-300 transition-colors flex items-center",
                                                    children: [s(o.role), o.role]
                                                })
                                            }), a.jsx("td", {
                                                className: "py-3 px-4 text-right",
                                                children: a.jsxs("a", {
                                                    href: o.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group/link relative",
                                                    children: [a.jsxs("span", {
                                                        className: "relative",
                                                        children: [a.jsx("span", {
                                                            className: "absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500"
                                                        }), "Visit"]
                                                    }), a.jsx(um, {
                                                        className: "w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                                                    })]
                                                })
                                            })]
                                        }, o.name))
                                    })]
                                })
                            })]
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [a.jsxs(k.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "relative overflow-hidden group",
                        children: [a.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow"
                        }), a.jsxs("div", {
                            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                            children: [a.jsx("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"
                            }), a.jsxs("div", {
                                className: "relative p-6",
                                children: [a.jsxs("h2", {
                                    className: "text-2xl font-bold mb-6 flex items-center gap-3",
                                    children: [a.jsxs("div", {
                                        className: "relative",
                                        children: [a.jsx("div", {
                                            className: "absolute inset-0 bg-white/20 rounded-full blur animate-pulse"
                                        }), a.jsx(Rx, {
                                            className: "w-6 h-6 relative"
                                        })]
                                    }), a.jsx("span", {
                                        className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                        children: "Top Donators"
                                    })]
                                }), a.jsx("div", {
                                    className: "overflow-x-auto",
                                    children: a.jsxs("table", {
                                        className: "w-full",
                                        children: [a.jsx("thead", {
                                            children: a.jsxs("tr", {
                                                className: "border-b border-white/10",
                                                children: [a.jsx("th", {
                                                    className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                    children: "Username"
                                                }), a.jsx("th", {
                                                    className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                    children: "Amount"
                                                }), a.jsx("th", {
                                                    className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                    children: "Platform"
                                                })]
                                            })
                                        }), a.jsx("tbody", {
                                            children: n.map( (o, l) => a.jsxs(k.tr, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: .3,
                                                    delay: l * .05
                                                },
                                                className: "group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500",
                                                children: [a.jsx("td", {
                                                    className: "py-3 px-4",
                                                    children: a.jsx("span", {
                                                        className: "text-gray-300 group-hover:text-white transition-colors",
                                                        children: o.name
                                                    })
                                                }), a.jsx("td", {
                                                    className: "py-3 px-4 text-right",
                                                    children: a.jsx("span", {
                                                        className: "font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors",
                                                        children: o.amount
                                                    })
                                                }), a.jsx("td", {
                                                    className: "py-3 px-4 text-right",
                                                    children: a.jsxs("div", {
                                                        className: "flex items-center justify-end",
                                                        children: [i(o.platform), a.jsx("span", {
                                                            className: "text-gray-500 group-hover:text-gray-400 transition-colors",
                                                            children: o.platform
                                                        })]
                                                    })
                                                })]
                                            }, o.name))
                                        })]
                                    })
                                })]
                            })]
                        })]
                    }), a.jsxs(k.div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "relative overflow-hidden group",
                        children: [a.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow"
                        }), a.jsxs("div", {
                            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                            children: [a.jsx("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"
                            }), a.jsxs("div", {
                                className: "relative p-6",
                                children: [a.jsxs("h2", {
                                    className: "text-2xl font-bold mb-6 flex items-center gap-3",
                                    children: [a.jsxs("div", {
                                        className: "relative",
                                        children: [a.jsx("div", {
                                            className: "absolute inset-0 bg-white/20 rounded-full blur animate-pulse"
                                        }), a.jsx("img", {
                                            src: "/images/Robux.png",
                                            alt: "Robux",
                                            className: "w-6 h-6 relative"
                                        })]
                                    }), a.jsx("span", {
                                        className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                        children: "Robux Donators"
                                    })]
                                }), a.jsx("div", {
                                    className: "overflow-x-auto",
                                    children: a.jsxs("table", {
                                        className: "w-full",
                                        children: [a.jsx("thead", {
                                            children: a.jsxs("tr", {
                                                className: "border-b border-white/10",
                                                children: [a.jsx("th", {
                                                    className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                    children: "Username"
                                                }), a.jsx("th", {
                                                    className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                    children: "Amount"
                                                })]
                                            })
                                        }), a.jsx("tbody", {
                                            children: r.map( (o, l) => a.jsxs(k.tr, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: .3,
                                                    delay: l * .05
                                                },
                                                className: "group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500",
                                                children: [a.jsx("td", {
                                                    className: "py-3 px-4",
                                                    children: a.jsx("span", {
                                                        className: "text-gray-300 group-hover:text-white transition-colors",
                                                        children: o.name
                                                    })
                                                }), a.jsx("td", {
                                                    className: "py-3 px-4 text-right",
                                                    children: a.jsxs("div", {
                                                        className: "flex items-center justify-end",
                                                        children: [a.jsx("img", {
                                                            src: "/images/Robux.png",
                                                            alt: "Robux",
                                                            className: "h-5 w-auto mr-1"
                                                        }), a.jsxs("span", {
                                                            className: "font-mono text-yellow-400 group-hover:text-yellow-300 transition-colors",
                                                            children: [o.amount.toLocaleString(), " Robux"]
                                                        })]
                                                    })
                                                })]
                                            }, o.name))
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            })]
        })]
    })
}
function PN(e, t, n) {
    var r = this
      , i = y.useRef(null)
      , s = y.useRef(0)
      , o = y.useRef(null)
      , l = y.useRef([])
      , u = y.useRef()
      , c = y.useRef()
      , d = y.useRef(e)
      , h = y.useRef(!0);
    d.current = e;
    var f = typeof window < "u"
      , v = !t && t !== 0 && f;
    if (typeof e != "function")
        throw new TypeError("Expected a function");
    t = +t || 0;
    var x = !!(n = n || {}).leading
      , w = !("trailing"in n) || !!n.trailing
      , b = "maxWait"in n
      , m = "debounceOnServer"in n && !!n.debounceOnServer
      , p = b ? Math.max(+n.maxWait || 0, t) : null;
    y.useEffect(function() {
        return h.current = !0,
        function() {
            h.current = !1
        }
    }, []);
    var g = y.useMemo(function() {
        var S = function(E) {
            var F = l.current
              , J = u.current;
            return l.current = u.current = null,
            s.current = E,
            c.current = d.current.apply(J, F)
        }
          , N = function(E, F) {
            v && cancelAnimationFrame(o.current),
            o.current = v ? requestAnimationFrame(E) : setTimeout(E, F)
        }
          , C = function(E) {
            if (!h.current)
                return !1;
            var F = E - i.current;
            return !i.current || F >= t || F < 0 || b && E - s.current >= p
        }
          , P = function(E) {
            return o.current = null,
            w && l.current ? S(E) : (l.current = u.current = null,
            c.current)
        }
          , T = function E() {
            var F = Date.now();
            if (C(F))
                return P(F);
            if (h.current) {
                var J = t - (F - i.current)
                  , ce = b ? Math.min(J, p - (F - s.current)) : J;
                N(E, ce)
            }
        }
          , L = function() {
            if (f || m) {
                var E = Date.now()
                  , F = C(E);
                if (l.current = [].slice.call(arguments),
                u.current = r,
                i.current = E,
                F) {
                    if (!o.current && h.current)
                        return s.current = i.current,
                        N(T, t),
                        x ? S(i.current) : c.current;
                    if (b)
                        return N(T, t),
                        S(i.current)
                }
                return o.current || N(T, t),
                c.current
            }
        };
        return L.cancel = function() {
            o.current && (v ? cancelAnimationFrame(o.current) : clearTimeout(o.current)),
            s.current = 0,
            l.current = i.current = u.current = o.current = null
        }
        ,
        L.isPending = function() {
            return !!o.current
        }
        ,
        L.flush = function() {
            return o.current ? P(Date.now()) : c.current
        }
        ,
        L
    }, [x, b, t, p, w, v, f, m]);
    return g
}
function EN(e, t) {
    return e === t
}
function MN(e, t, n) {
    var r = EN
      , i = y.useRef(e)
      , s = y.useState({})[1]
      , o = PN(y.useCallback(function(u) {
        i.current = u,
        s({})
    }, [s]), t, n)
      , l = y.useRef(e);
    return r(l.current, e) || (o(e),
    l.current = e),
    [i.current, o]
}
function RN() {
    const [e,t] = y.useState(!1)
      , [n,r] = y.useState(!1);
    y.useEffect( () => {
        localStorage.getItem("hasSeenExecutorPopup") || t(!0)
    }
    , []);
    const i = s => {
        s ? (localStorage.setItem("hasSeenExecutorPopup", "true"),
        t(!1)) : r(!0)
    }
    ;
    return a.jsx(on, {
        children: e && a.jsxs(k.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-50 flex items-center justify-center px-4",
            children: [a.jsx(k.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: .6
                },
                exit: {
                    opacity: 0
                },
                className: "absolute inset-0 bg-black backdrop-blur-sm"
            }), a.jsxs(k.div, {
                initial: {
                    scale: .9,
                    opacity: 0,
                    y: 20
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                    y: 0
                },
                exit: {
                    scale: .9,
                    opacity: 0,
                    y: 20
                },
                className: "relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden max-w-md w-full",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"
                }), a.jsx("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-30"
                }), a.jsx("div", {
                    className: "relative p-8",
                    children: a.jsxs("div", {
                        className: "flex flex-col items-center text-center",
                        children: [a.jsx(k.div, {
                            initial: {
                                scale: 0
                            },
                            animate: {
                                scale: 1
                            },
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            },
                            className: "mb-6 bg-white/5 p-4 rounded-full backdrop-blur-sm",
                            children: a.jsx(dm, {
                                className: "w-12 h-12 text-white"
                            })
                        }), n ? a.jsxs(a.Fragment, {
                            children: [a.jsx("h2", {
                                className: "text-2xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                children: "How to Use Web-Based Executor"
                            }), a.jsxs("div", {
                                className: "text-left space-y-4 mb-8",
                                children: [a.jsx("p", {
                                    className: "text-gray-400",
                                    children: "Here's how to use the web-based executor:"
                                }), a.jsxs("ol", {
                                    className: "list-decimal list-inside text-gray-400 space-y-2",
                                    children: [a.jsx("li", {
                                        children: "Open Roblox and join any game"
                                    }), a.jsx("li", {
                                        children: "Launch your normal Xeno application"
                                    }), a.jsx("li", {
                                        children: 'Click "Attach" in the Xeno application'
                                    }), a.jsx("li", {
                                        children: "Return to this web executor"
                                    }), a.jsx("li", {
                                        children: "You can now execute scripts from here!"
                                    })]
                                })]
                            }), a.jsx(k.button, {
                                onClick: () => {
                                    localStorage.setItem("hasSeenExecutorPopup", "true"),
                                    t(!1)
                                }
                                ,
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: .98
                                },
                                className: "w-full bg-white/5 hover:bg-white/10 rounded-xl px-6 py-4 text-white font-medium transition-all duration-300",
                                children: "Got it!"
                            })]
                        }) : a.jsxs(a.Fragment, {
                            children: [a.jsx("h2", {
                                className: "text-2xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                children: "Web-Based Executor"
                            }), a.jsx("p", {
                                className: "text-gray-400 mb-8",
                                children: "Do you know how to use the web-based executor?"
                            }), a.jsxs("div", {
                                className: "flex flex-col gap-4 w-full",
                                children: [a.jsx(k.button, {
                                    onClick: () => i(!0),
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    className: "group relative overflow-hidden rounded-xl w-full bg-white/5 hover:bg-white/10 transition-all duration-300",
                                    children: a.jsxs("div", {
                                        className: "relative px-6 py-4 flex items-center justify-center space-x-2",
                                        children: [a.jsx(Sx, {
                                            className: "w-5 h-5 text-white"
                                        }), a.jsx("span", {
                                            className: "text-white font-medium",
                                            children: "I have a brain"
                                        })]
                                    })
                                }), a.jsx(k.button, {
                                    onClick: () => i(!1),
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    className: "group relative overflow-hidden rounded-xl w-full border border-white/10 hover:bg-white/5 transition-all duration-300",
                                    children: a.jsxs("div", {
                                        className: "relative px-6 py-4 flex items-center justify-center space-x-2",
                                        children: [a.jsx("span", {
                                            className: "text-gray-400 font-medium",
                                            children: "I don't have a brain"
                                        }), a.jsx(Mn, {
                                            className: "w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform"
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                })]
            })]
        })
    })
}
AbortSignal.timeout || (AbortSignal.timeout = function(t) {
    const n = new AbortController;
    return setTimeout( () => n.abort(), t),
    n.signal
}
);
function AN() {
    var nc;
    const [e,t] = y.useState([])
      , [n,r] = y.useState( () => {
        const j = localStorage.getItem("showClientManager");
        return j ? JSON.parse(j) : !1
    }
    )
      , [i,s] = y.useState( () => {
        const j = localStorage.getItem("showSettings");
        return j ? JSON.parse(j) : !1
    }
    )
      , [o,l] = y.useState( () => {
        const j = localStorage.getItem("xenoSettings");
        return j ? JSON.parse(j) : {
            autoSelectClients: !0,
            theme: "dark",
            fontSize: 14,
            minimap: !0,
            wordWrap: !1,
            showLineNumbers: !0
        }
    }
    )
      , [u,c] = y.useState( () => {
        const j = localStorage.getItem("isExecutorMode");
        return j ? JSON.parse(j) : !0
    }
    )
      , [d,h] = y.useState("")
      , [f,v] = y.useState("")
      , [x] = MN(f, 500)
      , [w,b] = y.useState([])
      , [m,p] = y.useState(!0)
      , [g,S] = y.useState(null)
      , [N,C] = y.useState(null)
      , [P,T] = y.useState(null)
      , [L,E] = y.useState(1)
      , [F,J] = y.useState( () => {
        const j = localStorage.getItem("xenoTabs");
        return j ? JSON.parse(j) : [{
            id: "1",
            title: "New Script",
            content: ""
        }]
    }
    )
      , [ce,ht] = y.useState( () => localStorage.getItem("xenoActiveTab") || "1")
      , [Li,Ft] = y.useState(null)
      , [q,R] = y.useState("")
      , V = y.useRef(null)
      , I = y.useRef(new Set)
      , [K,ae] = y.useState( () => {
        const j = localStorage.getItem("xenoSavedScripts");
        return j ? JSON.parse(j) : []
    }
    )
      , [et,wt] = y.useState(!1)
      , kr = "http://localhost:3110/o"
      , [jt,We] = y.useState(null)
      , [H0,Zu] = y.useState(!1)
      , [ie,ON] = y.useState( () => {
        const j = localStorage.getItem("scriptFilters");
        return j ? JSON.parse(j) : {
            mode: null,
            verified: null,
            patched: null,
            key: null,
            universal: null
        }
    }
    )
      , [_n,zN] = y.useState( () => {
        const j = localStorage.getItem("scriptSort");
        return j ? JSON.parse(j) : {
            by: "updatedAt",
            order: "desc"
        }
    }
    )
      , [W0,BN] = y.useState(!1);
    y.useEffect( () => {
        localStorage.setItem("xenoTabs", JSON.stringify(F))
    }
    , [F]),
    y.useEffect( () => {
        localStorage.setItem("xenoActiveTab", ce)
    }
    , [ce]),
    y.useEffect( () => {
        localStorage.setItem("isExecutorMode", JSON.stringify(u))
    }
    , [u]),
    y.useEffect( () => {
        localStorage.setItem("showClientManager", JSON.stringify(n))
    }
    , [n]),
    y.useEffect( () => {
        localStorage.setItem("showSettings", JSON.stringify(i))
    }
    , [i]),
    y.useEffect( () => {
        localStorage.setItem("xenoSettings", JSON.stringify(o))
    }
    , [o]),
    y.useEffect( () => {
        const j = localStorage.getItem("selectedClients");
        if (j) {
            const A = new Set(JSON.parse(j));
            I.current = A,
            t(O => O.map(B => ({
                ...B,
                selected: A.has(B.pid)
            })))
        }
    }
    , []),
    y.useEffect( () => {
        const j = Array.from(I.current);
        localStorage.setItem("selectedClients", JSON.stringify(j))
    }
    , [e]),
    y.useEffect( () => {
        !u && f === "" && v(Ii())
    }
    , [u, f]),
    y.useEffect( () => {
        if (!u && d === "") {
            const j = Ii();
            v(j),
            E(1),
            b([]),
            Fn(1, 0, j)
        }
    }
    , [u]),
    y.useEffect( () => {
        !u && x !== "" && (E(1),
        b([]),
        Fn(1, 0, x))
    }
    , [x, u]),
    y.useEffect( () => {
        L > 1 && !u && Fn(L)
    }
    , [L]),
    y.useEffect( () => {
        if (u) {
            const j = setTimeout( () => {
                Zu(!0)
            }
            , 100);
            return () => clearTimeout(j)
        } else
            Zu(!1)
    }
    , [u]),
    y.useEffect( () => {
        localStorage.setItem("scriptFilters", JSON.stringify(ie))
    }
    , [ie]),
    y.useEffect( () => {
        localStorage.setItem("scriptSort", JSON.stringify(_n))
    }
    , [_n]);
    const Qu = async () => {
        try {
            const j = await fetch("http://localhost:3110/o", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!j.ok)
                throw new Error("Failed to fetch clients");
            const A = await j.json();
            if (!Array.isArray(A))
                throw new Error("Invalid data format: Expected an array");
            const O = A.map(B => {
                if (!Array.isArray(B) || B.length < 4)
                    return console.warn("Skipping invalid client data:", B),
                    null;
                const [ve,U,$e,tt] = B
                  , nt = o.autoSelectClients || I.current.has(String(ve));
                return nt && I.current.add(String(ve)),
                {
                    pid: String(ve),
                    username: String(U),
                    playerName: String($e),
                    status: Number(tt),
                    selected: nt
                }
            }
            ).filter(B => B !== null);
            t(O),
            S(null)
        } catch (j) {
            console.error("Error fetching clients:", j),
            S("Failed to fetch clients"),
            t([])
        }
    }
    ;
    y.useEffect( () => {
        Qu();
        const j = setInterval(Qu, 5e3);
        return () => clearInterval(j)
    }
    , [o.autoSelectClients]);
    const Ii = () => {
        const j = ["aimbot", "esp", "pet simulator", "doors", "blox fruits", "jailbreak", "royale high", "adopt me", "arsenal", "survival", "brookhaven", "mm2", "simulator", "tycoon", "obby"]
          , A = Math.floor(Math.random() * j.length);
        return j[A]
    }
      , Fn = async (j, A=0, O) => {
        var ve;
        p(!0),
        S(null);
        let B;
        if (W0)
            B = "https://scriptblox.com/api/script/trending?max=20";
        else if (O) {
            const U = new URLSearchParams({
                q: O,
                page: j.toString(),
                max: "20",
                sortBy: _n.by,
                order: _n.order,
                strict: "true"
            });
            ie.mode && U.append("mode", ie.mode),
            ie.verified !== null && U.append("verified", ie.verified ? "1" : "0"),
            ie.patched !== null && U.append("patched", ie.patched ? "1" : "0"),
            ie.key !== null && U.append("key", ie.key ? "1" : "0"),
            ie.universal !== null && U.append("universal", ie.universal ? "1" : "0"),
            B = `https://scriptblox.com/api/script/search?${U.toString()}`
        } else {
            const U = new URLSearchParams({
                page: j.toString(),
                max: "20",
                sortBy: _n.by,
                order: _n.order
            });
            ie.mode && U.append("mode", ie.mode),
            ie.verified !== null && U.append("verified", ie.verified ? "1" : "0"),
            ie.patched !== null && U.append("patched", ie.patched ? "1" : "0"),
            ie.key !== null && U.append("key", ie.key ? "1" : "0"),
            ie.universal !== null && U.append("universal", ie.universal ? "1" : "0"),
            B = `https://scriptblox.com/api/script/fetch?${U.toString()}`
        }
        try {
            const U = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(B)}`, {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            });
            if (!U.ok)
                throw new Error(`HTTP error! status: ${U.status}`);
            const $e = await U.json();
            if (!((ve = $e.result) != null && ve.scripts))
                throw new Error("Invalid response format");
            const tt = H => {
                if (!H)
                    return "N/A";
                try {
                    const Nt = new Date(H);
                    return isNaN(Nt.getTime()) ? "N/A" : Nt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    })
                } catch {
                    return "N/A"
                }
            }
              , nt = $e.result.scripts.map(H => {
                var rc, ic, sc;
                let Nt = "";
                return H.image ? Nt = H.image.startsWith("http") ? H.image : `https://scriptblox.com${H.image}` : (rc = H.game) != null && rc.imageUrl && (Nt = H.game.imageUrl.startsWith("http") ? H.game.imageUrl : `https://scriptblox.com${H.game.imageUrl}`),
                {
                    id: H._id,
                    title: H.title || "Untitled Script",
                    loadstring: H.script || "",
                    description: ((ic = H.features) == null ? void 0 : ic[0]) || ((sc = H.game) == null ? void 0 : sc.name) || "",
                    imageUrl: Nt,
                    slug: H.slug || "",
                    isVerified: H.verified || !1,
                    isPatched: H.isPatched || !1,
                    hasKey: H.key || !1,
                    isUniversal: H.isUniversal || !1,
                    views: H.views || 0,
                    likeCount: H.likeCount || 0,
                    dislikeCount: H.dislikeCount || 0,
                    createdAt: tt(H.createdAt),
                    updatedAt: tt(H.updatedAt),
                    scriptType: H.scriptType || "",
                    matched: H.matched || []
                }
            }
            );
            b(H => j === 1 ? nt : [...H, ...nt]),
            S(null)
        } catch (U) {
            if (console.error("Error fetching scripts:", U),
            A < 3) {
                const $e = Math.min(1e3 * Math.pow(2, A), 5e3);
                console.log(`Retrying fetch (attempt ${A + 1}) in ${$e}ms...`),
                setTimeout( () => Fn(j, A + 1, O), $e);
                return
            }
            S("Failed to load scripts. Please try again.")
        } finally {
            p(!1)
        }
    }
      , $0 = j => {
        I.current.has(j) ? I.current.delete(j) : I.current.add(j),
        t(A => A.map(O => O.pid === j ? {
            ...O,
            selected: !O.selected
        } : O))
    }
      , Ju = async (j, A) => {
        const O = Array.from(I.current)
          , B = e.map(U => U.pid)
          , ve = O.filter(U => B.includes(U));
        if (ve.length === 0) {
            We(A),
            T(null),
            setTimeout( () => {
                We(null)
            }
            , 2e3);
            return
        }
        try {
            if (We(null),
            !(await fetch(kr, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain",
                    Clients: JSON.stringify(ve)
                },
                body: j
            })).ok)
                throw new Error("Failed to execute script");
            T(j),
            setTimeout( () => T(null), 2e3)
        } catch {
            We(A),
            T(null),
            setTimeout( () => {
                We(null)
            }
            , 2e3)
        }
    }
      , K0 = async (j, A) => {
        T(j),
        We(null);
        try {
            await Ju(j, A)
        } catch {
            We(A),
            T(null)
        }
    }
      , X0 = j => {
        const A = j.target.value;
        h(A),
        v(A),
        A === "" && qu()
    }
      , qu = () => {
        h("");
        const j = Ii();
        v(j),
        E(1),
        b([]),
        Fn(1, 0, j)
    }
      , G0 = () => {
        const j = String(Date.now())
          , A = {
            id: j,
            title: "New Script",
            content: ""
        };
        J(O => [...O, A]),
        ht(j)
    }
      , Y0 = (j, A) => {
        if (A.stopPropagation(),
        F.length === 1)
            return;
        const O = F.filter(B => B.id !== j);
        J(O),
        ce === j && ht(O[0].id)
    }
      , Z0 = (j, A) => {
        A.stopPropagation();
        const O = F.find(B => B.id === j);
        O && (R(O.title),
        Ft(j),
        setTimeout( () => {
            V.current && (V.current.focus(),
            V.current.select())
        }
        , 0))
    }
      , ec = j => {
        q.trim() && J(A => A.map(O => O.id === j ? {
            ...O,
            title: q.trim()
        } : O)),
        Ft(null)
    }
      , Q0 = (j, A) => {
        j.key === "Enter" ? (j.preventDefault(),
        ec(A)) : j.key === "Escape" && (j.preventDefault(),
        Ft(null))
    }
      , J0 = j => {
        j !== void 0 && J(A => A.map(O => O.id === ce ? {
            ...O,
            content: j
        } : O))
    }
      , q0 = () => {
        J(j => j.map(A => A.id === ce ? {
            ...A,
            content: ""
        } : A))
    }
      , eg = () => {
        const j = F.find(A => A.id === ce);
        if (j) {
            const A = new Blob([j.content],{
                type: "text/plain"
            })
              , O = URL.createObjectURL(A)
              , B = document.createElement("a");
            B.href = O,
            B.download = `${j.title}.lua`,
            document.body.appendChild(B),
            B.click(),
            document.body.removeChild(B),
            URL.revokeObjectURL(O)
        }
    }
      , tg = () => {
        const j = document.createElement("input");
        j.type = "file",
        j.accept = ".lua,.txt",
        j.onchange = A => {
            var B;
            const O = (B = A.target.files) == null ? void 0 : B[0];
            if (O) {
                const ve = new FileReader;
                ve.onload = U => {
                    var H;
                    const $e = (H = U.target) == null ? void 0 : H.result
                      , tt = String(Date.now())
                      , nt = {
                        id: tt,
                        title: O.name.replace(/\.[^/.]+$/, ""),
                        content: $e
                    };
                    J(Nt => [...Nt, nt]),
                    ht(tt)
                }
                ,
                ve.readAsText(O)
            }
        }
        ,
        j.click()
    }
      , tc = j => {
        switch (j) {
        case 0:
            return "text-red-500";
        case 1:
            return "text-yellow-500";
        case 2:
            return "text-cyan-500";
        case 3:
            return "text-green-500";
        default:
            return "text-gray-500"
        }
    }
      , ng = j => {
        switch (j) {
        case 0:
            return "Failed";
        case 1:
            return "Attaching";
        case 2:
            return "Waiting for Roblox";
        case 3:
            return "Attached";
        default:
            return "Unknown"
        }
    }
      , rg = j => {
        if (K.some(ve => ve.loadstring === j.loadstring))
            return;
        const O = {
            ...j,
            id: Date.now().toString(),
            savedAt: Date.now()
        }
          , B = [...K, O];
        ae(B),
        localStorage.setItem("xenoSavedScripts", JSON.stringify(B))
    }
      , ig = j => {
        ae(A => {
            const O = A.filter(B => B.id !== j.id && B.loadstring !== j.loadstring);
            return localStorage.setItem("xenoSavedScripts", JSON.stringify(O)),
            O
        }
        )
    }
      , sg = async () => {
        const j = F.find(A => A.id === ce);
        if (j && j.content) {
            const A = `editor-${ce}`;
            await Ju(j.content, A)
        }
    }
    ;
    return a.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [a.jsx(_t, {}), a.jsx(RN, {}), a.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [a.jsxs(k.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-8 mb-16",
                children: [a.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: !u && "Script Hub"
                }), a.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: !u && "Search and discover scripts from the ScriptBlox community"
                })]
            }), a.jsx(on, {
                mode: "wait",
                initial: !1,
                children: u ? a.jsxs(k.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .2
                    },
                    className: "relative",
                    children: [a.jsx("div", {
                        className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 to-white/0 rounded-xl blur opacity-75 transition-all duration-500"
                    }), a.jsxs("div", {
                        className: "relative bg-black/50 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-2 p-4 border-b border-white/10",
                            children: [a.jsxs("div", {
                                className: "flex-1 flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent",
                                children: [F.map(j => a.jsxs(k.div, {
                                    className: `group flex items-center gap-2 px-4 py-2 rounded-lg ${ce === j.id ? "bg-white/10" : "hover:bg-white/5"} transition-all cursor-pointer min-w-[120px] relative`,
                                    onClick: () => ht(j.id),
                                    whileTap: {
                                        scale: .98
                                    },
                                    children: [a.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                                    }), a.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                                    }), a.jsx(Px, {
                                        className: "w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity relative z-10"
                                    }), Li === j.id ? a.jsx("input", {
                                        ref: V,
                                        type: "text",
                                        value: q,
                                        onChange: A => R(A.target.value),
                                        onBlur: () => ec(j.id),
                                        onKeyDown: A => Q0(A, j.id),
                                        className: "bg-transparent border-none outline-none text-white w-full relative z-10",
                                        onClick: A => A.stopPropagation(),
                                        autoFocus: !0
                                    }) : a.jsxs(a.Fragment, {
                                        children: [a.jsx("span", {
                                            className: "flex-1 truncate relative z-10",
                                            children: j.title
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-1 relative z-10",
                                            children: [a.jsx(k.button, {
                                                onClick: A => Z0(j.id, A),
                                                className: "p-1 hover:bg-white/10 rounded transition-colors",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                whileTap: {
                                                    scale: .9
                                                },
                                                children: a.jsx(Ox, {
                                                    className: "w-3 h-3"
                                                })
                                            }), F.length > 1 && a.jsx(k.button, {
                                                onClick: A => Y0(j.id, A),
                                                className: "p-1 hover:bg-white/10 rounded transition-colors",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                whileTap: {
                                                    scale: .9
                                                },
                                                children: a.jsx(Xo, {
                                                    className: "w-3 h-3"
                                                })
                                            })]
                                        })]
                                    })]
                                }, j.id)), a.jsx(k.button, {
                                    onClick: G0,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    children: a.jsx(hm, {
                                        className: "w-4 h-4"
                                    })
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [a.jsx(k.button, {
                                    onClick: tg,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Open Script",
                                    children: a.jsx(Mx, {
                                        className: "w-4 h-4"
                                    })
                                }), a.jsx(k.button, {
                                    onClick: eg,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Save Script",
                                    children: a.jsx(zx, {
                                        className: "w-4 h-4"
                                    })
                                }), a.jsx(k.button, {
                                    onClick: q0,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Clear Script",
                                    children: a.jsx(Xo, {
                                        className: "w-4 h-4"
                                    })
                                }), a.jsx(k.button, {
                                    onClick: () => c(!1),
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Script Hub",
                                    children: a.jsx(Nd, {
                                        className: "w-4 h-4"
                                    })
                                }), a.jsx(k.button, {
                                    onClick: () => s(!i),
                                    className: `p-2 rounded-lg transition-colors ${i ? "bg-white/10" : "hover:bg-white/10"}`,
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Settings",
                                    children: a.jsx(kd, {
                                        className: "w-4 h-4"
                                    })
                                }), a.jsx(k.button, {
                                    onClick: () => r(!n),
                                    className: `p-2 rounded-lg transition-colors ${n ? "bg-white/10" : "hover:bg-white/10"}`,
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Client Manager",
                                    children: a.jsx(Us, {
                                        className: "w-4 h-4"
                                    })
                                }), a.jsxs(k.button, {
                                    onClick: sg,
                                    className: "flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    children: [a.jsx(rl, {
                                        className: "w-4 h-4"
                                    }), a.jsx("span", {
                                        children: "Execute"
                                    })]
                                })]
                            })]
                        }), i && a.jsxs("div", {
                            className: "border-b border-white/10 p-4 bg-black/20",
                            children: [a.jsx("div", {
                                className: "flex items-center justify-between mb-4",
                                children: a.jsxs("h3", {
                                    className: "text-sm font-medium flex items-center gap-2",
                                    children: [a.jsx(kd, {
                                        className: "w-4 h-4"
                                    }), a.jsx("span", {
                                        children: "Settings"
                                    })]
                                })
                            }), a.jsxs("div", {
                                className: "space-y-4",
                                children: [a.jsxs("div", {
                                    className: "flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer",
                                    onClick: () => l(j => ({
                                        ...j,
                                        autoSelectClients: !j.autoSelectClients
                                    })),
                                    children: [a.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [a.jsx("div", {
                                            className: "text-sm font-medium",
                                            children: "Auto-select Clients"
                                        }), a.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children: "Automatically select clients when they fetch"
                                        })]
                                    }), a.jsx("div", {
                                        className: `w-12 h-6 rounded-full relative transition-colors duration-300 ${o.autoSelectClients ? "bg-white/20" : "bg-white/5"}`,
                                        children: a.jsx("div", {
                                            className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${o.autoSelectClients ? "right-1" : "left-1"}`
                                        })
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer",
                                    onClick: () => l(j => ({
                                        ...j,
                                        theme: j.theme === "dark" ? "light" : "dark"
                                    })),
                                    children: [a.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [a.jsx("div", {
                                            className: "text-sm font-medium",
                                            children: "Theme"
                                        }), a.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children: "Switch between dark and light mode"
                                        })]
                                    }), a.jsx("div", {
                                        className: `w-12 h-6 rounded-full relative transition-colors duration-300 ${o.theme === "dark" ? "bg-white/20" : "bg-white/5"}`,
                                        children: a.jsx("div", {
                                            className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${o.theme === "dark" ? "right-1" : "left-1"}`
                                        })
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer",
                                    onClick: () => l(j => ({
                                        ...j,
                                        minimap: !j.minimap
                                    })),
                                    children: [a.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [a.jsx("div", {
                                            className: "text-sm font-medium",
                                            children: "Minimap"
                                        }), a.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children: "Show code minimap"
                                        })]
                                    }), a.jsx("div", {
                                        className: `w-12 h-6 rounded-full relative transition-colors duration-300 ${o.minimap ? "bg-white/20" : "bg-white/5"}`,
                                        children: a.jsx("div", {
                                            className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${o.minimap ? "right-1" : "left-1"}`
                                        })
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer",
                                    onClick: () => l(j => ({
                                        ...j,
                                        wordWrap: !j.wordWrap
                                    })),
                                    children: [a.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [a.jsx("div", {
                                            className: "text-sm font-medium",
                                            children: "Word Wrap"
                                        }), a.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children: "Wrap long lines"
                                        })]
                                    }), a.jsx("div", {
                                        className: `w-12 h-6 rounded-full relative transition-colors duration-300 ${o.wordWrap ? "bg-white/20" : "bg-white/5"}`,
                                        children: a.jsx("div", {
                                            className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${o.wordWrap ? "right-1" : "left-1"}`
                                        })
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer",
                                    onClick: () => l(j => ({
                                        ...j,
                                        showLineNumbers: !j.showLineNumbers
                                    })),
                                    children: [a.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [a.jsx("div", {
                                            className: "text-sm font-medium",
                                            children: "Line Numbers"
                                        }), a.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children: "Show line numbers in editor"
                                        })]
                                    }), a.jsx("div", {
                                        className: `w-12 h-6 rounded-full relative transition-colors duration-300 ${o.showLineNumbers ? "bg-white/20" : "bg-white/5"}`,
                                        children: a.jsx("div", {
                                            className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${o.showLineNumbers ? "right-1" : "left-1"}`
                                        })
                                    })]
                                })]
                            })]
                        }), n && a.jsxs("div", {
                            className: "border-b border-white/10 p-4 bg-black/20",
                            children: [a.jsxs("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [a.jsxs("h3", {
                                    className: "text-sm font-medium flex items-center gap-2",
                                    children: [a.jsx(Us, {
                                        className: "w-4 h-4"
                                    }), a.jsx("span", {
                                        children: "Connected Clients"
                                    })]
                                }), a.jsxs("span", {
                                    className: "text-xs text-gray-400",
                                    children: [e.length, " clients"]
                                })]
                            }), a.jsx("div", {
                                className: "space-y-2",
                                children: e.length === 0 ? a.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-400 p-4 bg-white/5 rounded-lg",
                                    children: [a.jsx(nl, {
                                        className: "w-4 h-4"
                                    }), a.jsx("span", {
                                        children: "No clients connected"
                                    })]
                                }) : a.jsx("div", {
                                    className: "grid gap-2",
                                    children: e.map(j => a.jsxs(k.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "group relative cursor-pointer",
                                        onClick: () => $0(j.pid),
                                        children: [a.jsx("div", {
                                            className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        }), a.jsx("div", {
                                            className: `relative p-3 rounded-lg transition-all duration-300 ${j.selected ? "bg-white/10" : "bg-white/5"}`,
                                            children: a.jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [a.jsxs("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [a.jsx("div", {
                                                        className: `w-2 h-2 rounded-full ${tc(j.status)} animate-pulse`
                                                    }), a.jsxs("div", {
                                                        className: "flex flex-col",
                                                        children: [a.jsx("span", {
                                                            className: "text-sm font-height",
                                                            children: j.username
                                                        }), a.jsx("span", {
                                                            className: `text-xs ${tc(j.status)}`,
                                                            children: ng(j.status)
                                                        })]
                                                    })]
                                                }), a.jsx("div", {
                                                    className: `w-5 h-5 rounded flex items-center justify-center ${j.selected ? "bg-white/20 text-white" : "border border-white/40"} transition-colors`,
                                                    children: j.selected && a.jsx(hs, {
                                                        className: "w-4 h-4"
                                                    })
                                                })]
                                            })
                                        })]
                                    }, j.pid))
                                })
                            })]
                        }), a.jsx("div", {
                            className: "h-[600px]",
                            children: H0 && a.jsx(ag, {
                                height: "100%",
                                defaultLanguage: "lua",
                                theme: o.theme === "dark" ? "vs-dark" : "vs-light",
                                value: (nc = F.find(j => j.id === ce)) == null ? void 0 : nc.content,
                                onChange: J0,
                                options: {
                                    minimap: {
                                        enabled: o.minimap
                                    },
                                    fontSize: o.fontSize,
                                    padding: {
                                        top: 20
                                    },
                                    smoothScrolling: !0,
                                    cursorSmoothCaretAnimation: "on",
                                    cursorBlinking: "smooth",
                                    formatOnPaste: !0,
                                    formatOnType: !0,
                                    wordWrap: o.wordWrap ? "on" : "off",
                                    lineNumbers: o.showLineNumbers ? "on" : "off"
                                }
                            }, "monaco-editor")
                        })]
                    })]
                }, "executor") : a.jsxs(k.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .2
                    },
                    children: [a.jsx("div", {
                        className: "max-w-7xl mx-auto mb-8",
                        children: a.jsxs("div", {
                            className: "flex items-center justify-between gap-4",
                            children: [a.jsxs("div", {
                                className: "relative flex-1",
                                children: [a.jsx("div", {
                                    className: "absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"
                                }), a.jsx("div", {
                                    className: "relative bg-black/50 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                                    children: a.jsxs("div", {
                                        className: "flex items-center px-4 py-3",
                                        children: [a.jsx(Bx, {
                                            className: "w-5 h-5 text-gray-400"
                                        }), a.jsx("input", {
                                            type: "text",
                                            value: d,
                                            onChange: X0,
                                            placeholder: "Search scripts...",
                                            className: "w-full px-4 py-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                        }), d && a.jsx("button", {
                                            onClick: qu,
                                            className: "p-1 hover:bg-white/10 rounded-full transition-colors ml-2",
                                            title: "Clear search",
                                            children: a.jsx(Hs, {
                                                className: "w-4 h-4 text-gray-400"
                                            })
                                        })]
                                    })
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [a.jsxs(k.button, {
                                    onClick: () => wt(!et),
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    className: `relative group px-6 py-3 rounded-xl overflow-hidden ${et ? "bg-yellow-500/20" : "bg-white/5"}`,
                                    title: "Saved Scripts",
                                    children: [a.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    }), a.jsxs("div", {
                                        className: "relative flex items-center gap-2",
                                        children: [a.jsx(bd, {
                                            className: `w-4 h-4 ${et ? "text-yellow-500" : "text-white"}`
                                        }), a.jsxs("span", {
                                            className: `${et ? "text-yellow-500" : "text-white"}`,
                                            children: [K.length, " Saved"]
                                        })]
                                    })]
                                }), a.jsxs(k.button, {
                                    onClick: () => c(!0),
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    className: "relative group px-6 py-3 rounded-xl overflow-hidden bg-white/5",
                                    children: [a.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    }), a.jsxs("div", {
                                        className: "relative flex items-center gap-2",
                                        children: [a.jsx(Nd, {
                                            className: "w-4 h-4"
                                        }), a.jsx("span", {
                                            children: "Editor"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }), a.jsx("div", {
                        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto",
                        children: a.jsx(on, {
                            mode: "wait",
                            children: m ? a.jsx(a.Fragment, {
                                children: [1, 2, 3, 4, 5, 6].map(j => a.jsx(k.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    className: "relative",
                                    children: a.jsxs("div", {
                                        className: "relative bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                                        children: [a.jsx("div", {
                                            className: "aspect-video w-full bg-white/5 animate-pulse"
                                        }), a.jsxs("div", {
                                            className: "p-6 space-y-4",
                                            children: [a.jsx("div", {
                                                className: "h-6 bg-white/5 rounded animate-pulse"
                                            }), a.jsxs("div", {
                                                className: "space-y-2",
                                                children: [a.jsx("div", {
                                                    className: "h-4 bg-white/5 rounded animate-pulse"
                                                }), a.jsx("div", {
                                                    className: "h-4 bg-white/5 rounded animate-pulse w-2/3"
                                                })]
                                            }), a.jsxs("div", {
                                                className: "flex gap-2",
                                                children: [a.jsx("div", {
                                                    className: "flex-1 h-10 bg-white/5 rounded animate-pulse"
                                                }), a.jsx("div", {
                                                    className: "flex-1 h-10 bg-white/5 rounded animate-pulse"
                                                }), a.jsx("div", {
                                                    className: "w-[52px] h-10 bg-white/5 rounded animate-pulse"
                                                })]
                                            })]
                                        })]
                                    })
                                }, `skeleton-${j}`))
                            }) : (et ? K : w).map(j => {
                                var O, B, ve;
                                const A = K.some(U => U.loadstring === j.loadstring);
                                return a.jsxs(k.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    className: "group relative",
                                    children: [a.jsx("div", {
                                        className: `absolute -inset-0.5 bg-gradient-to-r ${A ? "from-yellow-500/20 to-yellow-500/0" : "from-white/20 to-white/0"} rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500`
                                    }), a.jsxs("div", {
                                        className: `relative bg-gradient-to-br ${A ? "from-yellow-500/5 via-black/40 to-black/60 border-yellow-500/10" : "from-white/5 via-black/40 to-black/60 border-white/10"} backdrop-blur-xl rounded-xl border overflow-hidden`,
                                        children: [a.jsxs("div", {
                                            className: "aspect-video w-full overflow-hidden relative group",
                                            children: [j.imageUrl ? a.jsxs(a.Fragment, {
                                                children: [a.jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
                                                }), a.jsx("img", {
                                                    src: j.imageUrl,
                                                    alt: j.title,
                                                    className: "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500",
                                                    onError: U => {
                                                        const $e = U.target;
                                                        $e.style.display = "none";
                                                        const tt = $e.parentElement;
                                                        if (tt) {
                                                            tt.classList.add("bg-black/30", "flex", "items-center", "justify-center");
                                                            const nt = document.createElement("span");
                                                            nt.className = "text-gray-500 text-sm",
                                                            nt.textContent = "No image available",
                                                            tt.appendChild(nt)
                                                        }
                                                    }
                                                })]
                                            }) : a.jsx("div", {
                                                className: "w-full h-full bg-black/30 flex items-center justify-center",
                                                children: a.jsx("span", {
                                                    className: "text-gray-500 text-sm",
                                                    children: "No image available"
                                                })
                                            }), a.jsxs("div", {
                                                className: "absolute top-4 right-4 z-20 flex items-center gap-2",
                                                children: [j.isVerified && a.jsxs("div", {
                                                    className: "flex items-center gap-1 px-3 py-1.5 bg-blue-500/20 backdrop-blur-md rounded-full",
                                                    children: [a.jsx(xi, {
                                                        className: "w-4 h-4 text-blue-400"
                                                    }), a.jsx("span", {
                                                        className: "text-xs text-blue-400",
                                                        children: "Verified"
                                                    })]
                                                }), j.hasKey && a.jsxs("div", {
                                                    className: "flex items-center gap-1 px-3 py-1.5 bg-yellow-500/20 backdrop-blur-md rounded-full",
                                                    children: [a.jsx(Dx, {
                                                        className: "w-4 h-4 text-yellow-400"
                                                    }), a.jsx("span", {
                                                        className: "text-xs text-yellow-400",
                                                        children: "Key"
                                                    })]
                                                }), j.isPatched && a.jsxs("div", {
                                                    className: "flex items-center gap-1 px-3 py-1.5 bg-red-500/20 backdrop-blur-md rounded-full",
                                                    children: [a.jsx(nl, {
                                                        className: "w-4 h-4 text-red-400"
                                                    }), a.jsx("span", {
                                                        className: "text-xs text-red-400",
                                                        children: "Patched"
                                                    })]
                                                }), j.isUniversal && a.jsxs("div", {
                                                    className: "flex items-center gap-1 px-3 py-1.5 bg-purple-500/20 backdrop-blur-md rounded-full",
                                                    children: [a.jsx(cm, {
                                                        className: "w-4 h-4 text-purple-400"
                                                    }), a.jsx("span", {
                                                        className: "text-xs text-purple-400",
                                                        children: "Universal"
                                                    })]
                                                })]
                                            })]
                                        }), a.jsx("div", {
                                            className: "p-6",
                                            children: a.jsxs("div", {
                                                className: "flex flex-col gap-4",
                                                children: [a.jsx("h2", {
                                                    className: `text-xl font-bold bg-gradient-to-r ${A ? "from-yellow-500 via-yellow-400 to-yellow-500 group-hover:text-yellow-500" : "from-white via-gray-200 to-white group-hover:text-white"} bg-clip-text text-transparent transition-colors`,
                                                    children: j.title
                                                }), a.jsxs("div", {
                                                    className: "flex items-center gap-4 text-sm text-gray-400",
                                                    children: [a.jsxs("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [a.jsx(Tx, {
                                                            className: "w-4 h-4"
                                                        }), a.jsxs("span", {
                                                            children: [((O = j.views) == null ? void 0 : O.toLocaleString()) || "0", " views"]
                                                        })]
                                                    }), a.jsxs("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [a.jsx(Hx, {
                                                            className: "w-4 h-4"
                                                        }), a.jsx("span", {
                                                            children: ((B = j.likeCount) == null ? void 0 : B.toLocaleString()) || "0"
                                                        })]
                                                    }), a.jsxs("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [a.jsx(Ux, {
                                                            className: "w-4 h-4"
                                                        }), a.jsx("span", {
                                                            children: ((ve = j.dislikeCount) == null ? void 0 : ve.toLocaleString()) || "0"
                                                        })]
                                                    })]
                                                }), a.jsx("p", {
                                                    className: "text-sm text-gray-400 line-clamp-2",
                                                    children: j.description
                                                }), a.jsxs("div", {
                                                    className: "flex gap-2",
                                                    children: [a.jsx(k.button, {
                                                        onClick: () => {
                                                            navigator.clipboard.writeText(j.loadstring),
                                                            C(j.slug),
                                                            setTimeout( () => C(null), 2e3)
                                                        }
                                                        ,
                                                        className: "flex-1 group/btn relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors",
                                                        whileHover: {
                                                            scale: 1.02
                                                        },
                                                        whileTap: {
                                                            scale: .98
                                                        },
                                                        children: a.jsx(k.div, {
                                                            className: "relative px-4 py-2.5 flex items-center justify-center gap-2",
                                                            initial: !1,
                                                            animate: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            exit: {
                                                                opacity: 0,
                                                                y: 10
                                                            },
                                                            children: N === j.slug ? a.jsxs(k.div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: 10
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0
                                                                },
                                                                exit: {
                                                                    opacity: 0,
                                                                    y: -10
                                                                },
                                                                className: "flex items-center gap-2",
                                                                children: [a.jsx(hs, {
                                                                    className: "w-4 h-4 text-green-400"
                                                                }), a.jsx("span", {
                                                                    className: "text-green-400",
                                                                    children: "Copied!"
                                                                })]
                                                            }) : a.jsxs(k.div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: -10
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0
                                                                },
                                                                exit: {
                                                                    opacity: 0,
                                                                    y: 10
                                                                },
                                                                className: "flex items-center gap-2",
                                                                children: [a.jsx(am, {
                                                                    className: "w-4 h-4 text-white"
                                                                }), a.jsx("span", {
                                                                    className: "text-white",
                                                                    children: "Copy"
                                                                })]
                                                            })
                                                        })
                                                    }), a.jsx(k.button, {
                                                        onClick: () => K0(j.loadstring, j.id || j.slug),
                                                        className: `flex-1 group/btn relative overflow-hidden rounded-lg ${A ? "bg-yellow-500/10 hover:bg-yellow-500/20" : "bg-white/5 hover:bg-white/10"} transition-colors`,
                                                        whileHover: {
                                                            scale: 1.02
                                                        },
                                                        whileTap: {
                                                            scale: .98
                                                        },
                                                        children: a.jsx(k.div, {
                                                            className: "relative px-4 py-2.5 flex items-center justify-center gap-2",
                                                            initial: !1,
                                                            animate: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            exit: {
                                                                opacity: 0,
                                                                y: 10
                                                            },
                                                            children: P === j.loadstring ? a.jsxs(k.div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: 10
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0
                                                                },
                                                                exit: {
                                                                    opacity: 0,
                                                                    y: -10
                                                                },
                                                                className: "flex items-center gap-2",
                                                                children: [a.jsx(hs, {
                                                                    className: "w-4 h-4 text-green-400"
                                                                }), a.jsx("span", {
                                                                    className: "text-green-400",
                                                                    children: "Done!"
                                                                })]
                                                            }) : jt === (j.id || j.slug) ? a.jsxs(k.div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: 10
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0
                                                                },
                                                                exit: {
                                                                    opacity: 0,
                                                                    y: -10
                                                                },
                                                                className: "flex items-center gap-2",
                                                                children: [a.jsx(Hs, {
                                                                    className: "w-4 h-4 text-red-400"
                                                                }), a.jsx("span", {
                                                                    className: "text-red-400",
                                                                    children: "Failed!"
                                                                })]
                                                            }) : a.jsxs(k.div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: -10
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0
                                                                },
                                                                exit: {
                                                                    opacity: 0,
                                                                    y: 10
                                                                },
                                                                className: "flex items-center gap-2",
                                                                children: [a.jsx(rl, {
                                                                    className: `w-4 h-4 ${A ? "text-yellow-500" : "text-white"}`
                                                                }), a.jsx("span", {
                                                                    className: A ? "text-yellow-500" : "text-white",
                                                                    children: "Execute"
                                                                })]
                                                            })
                                                        })
                                                    }), A ? a.jsx(k.button, {
                                                        onClick: () => ig(j),
                                                        className: "group/btn relative overflow-hidden rounded-lg bg-red-500/10 hover:bg-red-500/20 transition-colors",
                                                        children: a.jsx("div", {
                                                            className: "relative px-4 py-2.5 flex items-center justify-center gap-2",
                                                            children: a.jsx(Xo, {
                                                                className: "w-4 h-4 text-red-500"
                                                            })
                                                        })
                                                    }) : a.jsx(k.button, {
                                                        onClick: () => rg(j),
                                                        className: "group/btn relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors",
                                                        children: a.jsx("div", {
                                                            className: "relative px-4 py-2.5 flex items-center justify-center gap-2",
                                                            children: a.jsx(bd, {
                                                                className: "w-4 h-4 text-yellow-500"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                }, j.id || j.slug)
                            }
                            )
                        })
                    }), !m && w.length > 0 && !et && a.jsxs(k.button, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        onClick: () => {
                            const j = L + 1;
                            E(j),
                            Fn(j, 0, x || Ii())
                        }
                        ,
                        className: "mx-auto mt-8 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2",
                        children: [m ? a.jsx("div", {
                            className: "animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"
                        }) : null, a.jsx("span", {
                            children: "Load More"
                        })]
                    })]
                }, "scripthub")
            })]
        })]
    })
}
const DN = () => a.jsxs("div", {
    className: "relative min-h-screen bg-black text-white flex items-center justify-center",
    children: [a.jsxs("div", {
        className: "relative z-10 text-center space-y-8",
        children: [a.jsxs("div", {
            className: "relative overflow-hidden",
            children: [a.jsx("div", {
                className: "text-8xl font-black tracking-tighter animate-fade-in",
                children: a.jsx("span", {
                    className: "bg-gradient-to-b from-white via-gray-200 to-transparent bg-clip-text text-transparent",
                    children: "404"
                })
            }), a.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            })]
        }), a.jsx("p", {
            className: "text-gray-400 text-lg max-w-md mx-auto",
            children: "The page you're looking for doesn't exist"
        }), a.jsxs("a", {
            href: "/",
            className: "inline-flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300 group",
            children: [a.jsx(jx, {
                className: "w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
            }), a.jsx("span", {
                className: "text-sm font-medium",
                children: "Go back home"
            })]
        })]
    }), a.jsx("div", {
        className: "absolute inset-0 overflow-hidden",
        children: a.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]"
        })
    })]
});
function LN() {
    const [e,t] = y.useState(null)
      , [n,r] = y.useState(!0);
    return y.useEffect( () => {
        (async () => {
            try {
                const o = await (await fetch("https://discord.com/api/guilds/1289659915790450849/widget.json")).json();
                t(o)
            } catch (s) {
                console.error("Error:", s)
            } finally {
                r(!1)
            }
        }
        )()
    }
    , []),
    n ? a.jsx("div", {
        className: "bg-black/90 backdrop-blur-xl rounded-2xl p-4 h-[400px] flex items-center justify-center",
        children: a.jsx("div", {
            className: "animate-pulse text-white/80",
            children: "Loading..."
        })
    }) : e ? a.jsxs("div", {
        className: "bg-black/90 backdrop-blur-xl rounded-2xl p-4 h-[400px] overflow-hidden",
        children: [a.jsxs("div", {
            className: "flex items-center space-x-3 mb-6 pb-4 border-b border-white/10",
            children: [a.jsx("img", {
                src: "/images/xeno.png",
                alt: "Xeno",
                className: "w-6 h-6 rounded-full"
            }), a.jsxs("div", {
                className: "flex-1",
                children: [a.jsx("h3", {
                    className: "text-white text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent",
                    children: e.name
                }), a.jsxs("p", {
                    className: "text-gray-400 text-sm",
                    children: [e.presence_count.toLocaleString(), " Members Online"]
                })]
            }), a.jsx("a", {
                href: "https://discord.gg/xeno-now",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/5 text-sm font-medium",
                children: "Join Discord"
            })]
        }), a.jsx("div", {
            className: "space-y-2 h-[320px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black/50 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-white/20",
            children: e.members.map( (i, s) => a.jsxs("div", {
                children: [a.jsxs(k.div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    className: "flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group relative overflow-hidden",
                    children: [a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    }), a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    }), a.jsxs("div", {
                        className: "relative",
                        children: [a.jsx("div", {
                            className: `absolute -inset-0.5 rounded-full
                  ${i.status === "online" ? "bg-emerald-400/40 group-hover:bg-emerald-400/60" : i.status === "idle" ? "bg-amber-400/40 group-hover:bg-amber-400/60" : i.status === "dnd" ? "bg-rose-500/40 group-hover:bg-rose-500/60" : "bg-gray-400/40 group-hover:bg-gray-400/60"} 
                  transition-all duration-300 group-hover:scale-110`
                        }), a.jsx("div", {
                            className: `absolute inset-0 rounded-full border-[3px]
                  ${i.status === "online" ? "border-emerald-400 group-hover:border-emerald-300" : i.status === "idle" ? "border-amber-400 group-hover:border-amber-300" : i.status === "dnd" ? "border-rose-500 group-hover:border-rose-400" : "border-gray-400 group-hover:border-gray-300"} 
                  transition-all duration-300 group-hover:scale-110`
                        }), a.jsx("img", {
                            src: i.avatar_url || "https://cdn.discordapp.com/embed/avatars/0.png",
                            alt: i.username,
                            className: "w-10 h-10 rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105"
                        })]
                    }), a.jsxs("div", {
                        className: "relative",
                        children: [a.jsx("p", {
                            className: "text-white font-medium group-hover:text-white transition-colors duration-300",
                            children: i.username
                        }), a.jsx("p", {
                            className: "text-gray-400 text-sm capitalize group-hover:text-gray-300 transition-colors duration-300",
                            children: i.status
                        })]
                    })]
                }), s < e.members.length - 1 && a.jsx("div", {
                    className: "h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-2 shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                })]
            }, i.id))
        })]
    }) : null
}
const IN = [{
    icon: mu,
    title: "External Execution"
}, {
    icon: fm,
    title: "Lightning Fast Execution"
}, {
    icon: xi,
    title: "100% Free & Keyless"
}, {
    icon: il,
    title: "Simple Design"
}, {
    icon: Us,
    title: "Easy to Use"
}, {
    icon: bx,
    title: "Lightweight"
}]
  , Hh = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: .1
        }
    }
}
  , Wh = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5
        }
    }
};
function VN() {
    const e = pu()
      , t = () => {
        localStorage.setItem("isExecutorMode", "false"),
        e("/executor")
    }
      , n = () => {
        localStorage.setItem("isExecutorMode", "true"),
        e("/executor")
    }
      , r = () => {
        e("/download")
    }
    ;
    return a.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [a.jsx(_t, {}), a.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [a.jsxs(k.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-8 mb-16",
                children: [a.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "About Xeno"
                }), a.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Experience the best free executor"
                })]
            }), a.jsxs(k.div, {
                variants: Hh,
                initial: "hidden",
                animate: "visible",
                className: "relative mb-16",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-2xl animate-pulse-slow"
                }), a.jsxs("div", {
                    className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden",
                    children: [a.jsx("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                    }), a.jsx("div", {
                        className: "relative p-8 sm:p-10",
                        children: a.jsx("div", {
                            className: "grid md:grid-cols-2 gap-8",
                            children: a.jsxs(k.div, {
                                variants: Wh,
                                className: "space-y-6 md:col-span-2",
                                children: [a.jsx("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                    children: "About Xeno"
                                }), a.jsxs("p", {
                                    className: "text-gray-400 text-lg leading-relaxed",
                                    children: ["Xeno is an external Roblox executor that combines features. Built with performance in mind, it offers seamless ", a.jsx("button", {
                                        onClick: n,
                                        className: "text-white hover:text-gray-300 transition-colors duration-200",
                                        children: "Script Execution"
                                    }), " and reliable memory management for the best experience."]
                                }), a.jsxs("p", {
                                    className: "text-gray-400 text-lg leading-relaxed",
                                    children: ["What sets Xeno apart is its commitment to being completely a ", a.jsx("button", {
                                        onClick: r,
                                        className: "text-white hover:text-gray-300 transition-colors duration-200",
                                        children: "Free And Keyless Executor"
                                    }), ", making it accessible to everyone. The interface is designed to be ", a.jsxs("span", {
                                        className: "group relative inline-block",
                                        children: [a.jsx("span", {
                                            className: "group-hover:hidden",
                                            children: "simple"
                                        }), a.jsx("span", {
                                            className: "hidden group-hover:inline",
                                            children: "fucked up"
                                        })]
                                    }), ", whether you're new to using these tools or an experienced user."]
                                }), a.jsxs("p", {
                                    className: "text-gray-400 text-lg leading-relaxed",
                                    children: ["With features like multi-attach support, ", a.jsx("button", {
                                        onClick: t,
                                        className: "text-white hover:text-gray-300 transition-colors duration-200",
                                        children: "Online Script Hub"
                                    }), " integration, and ", a.jsx("button", {
                                        onClick: n,
                                        className: "text-white hover:text-gray-300 transition-colors duration-200",
                                        children: "Online Script Execution"
                                    }), ", Xeno provides everything you need as a utility tool for Roblox. Regular updates ensure compatibility with the latest Roblox versions."]
                                }), a.jsxs("p", {
                                    className: "text-gray-400 text-lg leading-relaxed",
                                    children: ["Join our ", a.jsx("a", {
                                        href: "https://discord.gg/xeno-now",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-white hover:text-gray-300 transition-colors duration-200",
                                        children: "Discord"
                                    }), " to be part of Xeno's journey and get the latest updates and changelogs."]
                                })]
                            })
                        })
                    })]
                })]
            }), a.jsx(k.div, {
                variants: Hh,
                initial: "hidden",
                animate: "visible",
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
                children: IN.map( ({icon: i, title: s}, o) => a.jsxs(k.div, {
                    variants: Wh,
                    whileHover: {
                        scale: 1.05
                    },
                    className: "group relative",
                    children: [a.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    }), a.jsx("div", {
                        className: "relative h-full p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 group-hover:border-white/20",
                        children: a.jsxs("div", {
                            className: "flex flex-col gap-4",
                            children: [a.jsxs(k.div, {
                                className: "relative",
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                },
                                children: [a.jsx("div", {
                                    className: "absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                }), a.jsx(i, {
                                    className: "relative w-6 h-6 text-white"
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-medium text-lg group-hover:hidden",
                                    children: s
                                }), a.jsx("h3", {
                                    className: "font-medium text-lg hidden group-hover:block",
                                    children: s === "Simple Design" ? "Fucked up Design" : s
                                })]
                            })]
                        })
                    })]
                }, s))
            }), a.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
                children: a.jsx(U0, {
                    className: "w-full col-span-full rounded-3xl shadow-2xl",
                    children: a.jsx("div", {
                        className: "bg-gradient-to-br from-white/10 via-black/40 to-black/80 rounded-3xl p-2 sm:p-4 backdrop-blur-xl border border-white/10",
                        children: a.jsx(LN, {})
                    })
                })
            })]
        })]
    })
}
function _N() {
    const e = In()
      , n = !["/", "/tutorial", "/executor", "/donate", "/download", "/method", "/credits", "/about"].includes(e.pathname) && !e.pathname.includes("c1451e2e") && e.pathname !== "/"
      , r = e.pathname.includes("c1451e2e")
      , i = !n && !r;
    return a.jsxs("div", {
        className: "min-h-screen bg-black",
        children: [i && a.jsx(vN, {}), a.jsxs(lx, {
            children: [a.jsx(it, {
                path: "/",
                element: a.jsx(wN, {})
            }), a.jsx(it, {
                path: "/tutorial",
                element: a.jsx(jN, {})
            }), a.jsx(it, {
                path: "/executor",
                element: a.jsx(AN, {})
            }), a.jsx(it, {
                path: "/donate",
                element: a.jsx(NN, {})
            }), a.jsx(it, {
                path: "/download",
                element: a.jsx(kN, {})
            }), a.jsx(it, {
                path: "/method",
                element: a.jsx(bN, {})
            }), a.jsx(it, {
                path: "/credits",
                element: a.jsx(TN, {})
            }), a.jsx(it, {
                path: "/about",
                element: a.jsx(VN, {})
            }), a.jsx(it, {
                path: "/358b6e2e/8b29d578d32d/5b5f412b",
                element: a.jsx(CN, {})
            }), a.jsx(it, {
                path: "*",
                element: a.jsx(DN, {})
            })]
        }), i && a.jsx(yN, {})]
    })
}
function FN() {
    return a.jsx(mx, {
        children: a.jsx(_N, {})
    })
}
Yp(document.getElementById("root")).render(a.jsx(y.StrictMode, {
    children: a.jsx(FN, {})
}));
