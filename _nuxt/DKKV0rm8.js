import {
    aY as z,
    aZ as E,
    a_ as j,
    a$ as B,
    b0 as I,
    b1 as y,
    b2 as L,
    b3 as P,
    b4 as U,
    b as x,
    b5 as H,
    m as C,
    h as v,
    d as R,
    b6 as F,
    x as M,
    ag as O,
    b7 as D,
    b8 as T,
    b9 as J,
    ba as W
} from "./DTouipjj.js";
async function Y(e, t) {
    return await Z(t).catch(i => (console.error("Failed to get image meta for " + t, i + ""), {
        width: 0,
        height: 0,
        ratio: 0
    }))
}
async function Z(e) {
    if (typeof Image > "u") throw new TypeError("Image not supported");
    return new Promise((t, r) => {
        const i = new Image;
        i.onload = () => {
            const s = {
                width: i.width,
                height: i.height,
                ratio: i.width / i.height
            };
            t(s)
        }, i.onerror = s => r(s), i.src = e
    })
}

function G(e) {
    const t = {
            options: e
        },
        r = (s, a = {}) => A(t, s, a),
        i = (s, a = {}, n = {}) => r(s, { ...n,
            modifiers: I(a, n.modifiers || {})
        }).url;
    for (const s in e.presets) i[s] = (a, n, d) => i(a, n, { ...e.presets[s],
        ...d
    });
    return i.options = e, i.getImage = r, i.getMeta = (s, a) => K(t, s, a), i.getSizes = (s, a) => X(t, s, a), t.$img = i, i
}
async function K(e, t, r) {
    const i = A(e, t, { ...r
    });
    return typeof i.getMeta == "function" ? await i.getMeta() : await Y(e, i.url)
}

function A(e, t, r) {
    var c, u;
    if (t && typeof t != "string") throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);
    if (!t || t.startsWith("data:")) return {
        url: t
    };
    const {
        provider: i,
        defaults: s
    } = Q(e, r.provider || e.options.provider), a = V(e, r.preset);
    if (t = z(t) ? t : E(t), !i.supportsAlias) {
        for (const g in e.options.alias)
            if (t.startsWith(g)) {
                const h = e.options.alias[g];
                h && (t = j(h, t.slice(g.length)))
            }
    }
    if (i.validateDomains && z(t)) {
        const g = B(t).host;
        if (!e.options.domains.find(h => h === g)) return {
            url: t
        }
    }
    const n = I(r, a, s);
    n.modifiers = { ...n.modifiers
    };
    const d = n.modifiers.format;
    (c = n.modifiers) != null && c.width && (n.modifiers.width = y(n.modifiers.width)), (u = n.modifiers) != null && u.height && (n.modifiers.height = y(n.modifiers.height));
    const l = i.getImage(t, n, e);
    return l.format = l.format || d || "", l
}

function Q(e, t) {
    const r = e.options.providers[t];
    if (!r) throw new Error("Unknown provider: " + t);
    return r
}

function V(e, t) {
    if (!t) return {};
    if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
    return e.options.presets[t]
}

function X(e, t, r) {
    var b, _, q, o, m;
    const i = y((b = r.modifiers) == null ? void 0 : b.width),
        s = y((_ = r.modifiers) == null ? void 0 : _.height),
        a = L(r.sizes),
        n = (q = r.densities) != null && q.trim() ? P(r.densities.trim()) : e.options.densities;
    U(n);
    const d = i && s ? s / i : 0,
        l = [],
        c = [];
    if (Object.keys(a).length >= 1) {
        for (const f in a) {
            const p = $(f, String(a[f]), s, d, e);
            if (p !== void 0) {
                l.push({
                    size: p.size,
                    screenMaxWidth: p.screenMaxWidth,
                    media: `(max-width: ${p.screenMaxWidth}px)`
                });
                for (const w of n) c.push({
                    width: p._cWidth * w,
                    src: k(e, t, r, p, w)
                })
            }
        }
        ee(l)
    } else
        for (const f of n) {
            const p = Object.keys(a)[0];
            let w = p ? $(p, String(a[p]), s, d, e) : void 0;
            w === void 0 && (w = {
                size: "",
                screenMaxWidth: 0,
                _cWidth: (o = r.modifiers) == null ? void 0 : o.width,
                _cHeight: (m = r.modifiers) == null ? void 0 : m.height
            }), c.push({
                width: f,
                src: k(e, t, r, w, f)
            })
        }
    te(c);
    const u = c[c.length - 1],
        g = l.length ? l.map(f => `${f.media?f.media+" ":""}${f.size}`).join(", ") : void 0,
        h = g ? "w" : "x",
        S = c.map(f => `${f.src} ${f.width}${h}`).join(", ");
    return {
        sizes: g,
        srcset: S,
        src: u == null ? void 0 : u.src
    }
}

function $(e, t, r, i, s) {
    const a = s.options.screens && s.options.screens[e] || Number.parseInt(e),
        n = t.endsWith("vw");
    if (!n && /^\d+$/.test(t) && (t = t + "px"), !n && !t.endsWith("px")) return;
    let d = Number.parseInt(t);
    if (!a || !d) return;
    n && (d = Math.round(d / 100 * a));
    const l = i ? Math.round(d * i) : r;
    return {
        size: t,
        screenMaxWidth: a,
        _cWidth: d,
        _cHeight: l
    }
}

function k(e, t, r, i, s) {
    return e.$img(t, { ...r.modifiers,
        width: i._cWidth ? i._cWidth * s : void 0,
        height: i._cHeight ? i._cHeight * s : void 0
    }, r)
}

function ee(e) {
    var r;
    e.sort((i, s) => i.screenMaxWidth - s.screenMaxWidth);
    let t = null;
    for (let i = e.length - 1; i >= 0; i--) {
        const s = e[i];
        s.media === t && e.splice(i, 1), t = s.media
    }
    for (let i = 0; i < e.length; i++) e[i].media = ((r = e[i + 1]) == null ? void 0 : r.media) || ""
}

function te(e) {
    e.sort((r, i) => r.width - i.width);
    let t = null;
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r];
        i.width === t && e.splice(r, 1), t = i.width
    }
}
const N = () => {
    const e = C(),
        t = x();
    return t.$img || t._img || (t._img = G({ ...H,
        nuxt: {
            baseURL: e.app.baseURL
        },
        runtimeConfig: e
    }))
};

function ie(e) {
    var t;
    (t = performance == null ? void 0 : performance.mark) == null || t.call(performance, "mark_feature_usage", {
        detail: {
            feature: e
        }
    })
}
const re = {
        src: {
            type: String,
            required: !1
        },
        format: {
            type: String,
            required: !1
        },
        quality: {
            type: [Number, String],
            required: !1
        },
        background: {
            type: String,
            required: !1
        },
        fit: {
            type: String,
            required: !1
        },
        modifiers: {
            type: Object,
            required: !1
        },
        preset: {
            type: String,
            required: !1
        },
        provider: {
            type: String,
            required: !1
        },
        sizes: {
            type: [Object, String],
            required: !1
        },
        densities: {
            type: String,
            required: !1
        },
        preload: {
            type: [Boolean, Object],
            required: !1
        },
        width: {
            type: [String, Number],
            required: !1
        },
        height: {
            type: [String, Number],
            required: !1
        },
        alt: {
            type: String,
            required: !1
        },
        referrerpolicy: {
            type: String,
            required: !1
        },
        usemap: {
            type: String,
            required: !1
        },
        longdesc: {
            type: String,
            required: !1
        },
        ismap: {
            type: Boolean,
            required: !1
        },
        loading: {
            type: String,
            required: !1,
            validator: e => ["lazy", "eager"].includes(e)
        },
        crossorigin: {
            type: [Boolean, String],
            required: !1,
            validator: e => ["anonymous", "use-credentials", "", !0, !1].includes(e)
        },
        decoding: {
            type: String,
            required: !1,
            validator: e => ["async", "auto", "sync"].includes(e)
        },
        nonce: {
            type: [String],
            required: !1
        }
    },
    se = e => {
        const t = v(() => ({
                provider: e.provider,
                preset: e.preset
            })),
            r = v(() => ({
                width: y(e.width),
                height: y(e.height),
                alt: e.alt,
                referrerpolicy: e.referrerpolicy,
                usemap: e.usemap,
                longdesc: e.longdesc,
                ismap: e.ismap,
                crossorigin: e.crossorigin === !0 ? "anonymous" : e.crossorigin || void 0,
                loading: e.loading,
                decoding: e.decoding,
                nonce: e.nonce
            })),
            i = N(),
            s = v(() => ({ ...e.modifiers,
                width: y(e.width),
                height: y(e.height),
                format: e.format,
                quality: e.quality || i.options.quality,
                background: e.background,
                fit: e.fit
            }));
        return {
            options: t,
            attrs: r,
            modifiers: s
        }
    },
    ne = { ...re,
        placeholder: {
            type: [Boolean, String, Number, Array],
            required: !1
        },
        placeholderClass: {
            type: String,
            required: !1
        }
    },
    oe = ["src"],
    de = R({
        __name: "NuxtImg",
        props: ne,
        emits: ["load", "error"],
        setup(e, {
            emit: t
        }) {
            const r = e,
                i = F(),
                s = t,
                a = !1,
                n = N(),
                d = se(r),
                l = M(!1),
                c = M(),
                u = v(() => n.getSizes(r.src, { ...d.options.value,
                    sizes: r.sizes,
                    densities: r.densities,
                    modifiers: { ...d.modifiers.value,
                        width: y(r.width),
                        height: y(r.height)
                    }
                })),
                g = v(() => {
                    const o = { ...d.attrs.value,
                        "data-nuxt-img": ""
                    };
                    return (!r.placeholder || l.value) && (o.sizes = u.value.sizes, o.srcset = u.value.srcset), o
                }),
                h = v(() => {
                    let o = r.placeholder;
                    if (o === "" && (o = !0), !o || l.value) return !1;
                    if (typeof o == "string") return o;
                    const m = Array.isArray(o) ? o : typeof o == "number" ? [o, o] : [10, 10];
                    return n(r.src, { ...d.modifiers.value,
                        width: m[0],
                        height: m[1],
                        quality: m[2] || 50,
                        blur: m[3] || 3
                    }, d.options.value)
                }),
                S = v(() => r.sizes ? u.value.src : n(r.src, d.modifiers.value, d.options.value)),
                b = v(() => h.value ? h.value : S.value),
                q = x().isHydrating;
            return O(() => {
                if (h.value) {
                    const o = new Image;
                    S.value && (o.src = S.value), r.sizes && (o.sizes = u.value.sizes || "", o.srcset = u.value.srcset), o.onload = m => {
                        l.value = !0, s("load", m)
                    }, ie("nuxt-image");
                    return
                }
                c.value && (c.value.complete && q && (c.value.getAttribute("data-error") ? s("error", new Event("error")) : s("load", new Event("load"))), c.value.onload = o => {
                    s("load", o)
                }, c.value.onerror = o => {
                    s("error", o)
                })
            }), (o, m) => (D(), T("img", J({
                ref_key: "imgEl",
                ref: c,
                class: r.placeholder && !l.value ? r.placeholderClass : void 0
            }, { ...W(a) ? {
                    onerror: "this.setAttribute('data-error', 1)"
                } : {},
                ...g.value,
                ...W(i)
            }, {
                src: b.value
            }), null, 16, oe))
        }
    });
export {
    de as _, N as u
};