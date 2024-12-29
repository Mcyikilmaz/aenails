var C = Object.defineProperty;
var g = (a, e, o) => e in a ? C(a, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
}) : a[e] = o;
var d = (a, e, o) => g(a, typeof e != "symbol" ? e + "" : e, o);
import {
    ab as b,
    k as v,
    e6 as u,
    d as w,
    h as f,
    y as h,
    dz as x,
    dy as T,
    c as i
} from "./DTouipjj.js";
const E = a => {
    if (!b(a)) {
        let e = [];
        const o = a.reduce(function(s, t) {
            return s[t == null ? void 0 : t.type] = s[t == null ? void 0 : t.type] || [], s[t == null ? void 0 : t.type].push(t), s
        }, Object.create(null));
        v(o) || Object.keys(o).map((s, t) => {
            var l;
            const n = o[s];
            if (!b(n)) {
                const r = n[0],
                    p = ((l = r == null ? void 0 : r.lczText) == null ? void 0 : l.lczValue) || (r == null ? void 0 : r.label) || null,
                    y = (r == null ? void 0 : r.type) || u.Name,
                    k = n == null ? void 0 : n.map(c => ({
                        key: c == null ? void 0 : c.key,
                        value: c == null ? void 0 : c.value
                    }));
                e.unshift({
                    type: y,
                    label: p,
                    contactInformations: k
                })
            }
        });
        const m = [];
        return a.map((s, t) => {
            m[t] = e.find(n => (n == null ? void 0 : n.type) == (s == null ? void 0 : s.type))
        }), e = m, e
    }
    return []
};
class I {
    constructor(e) {
        d(this, "labelColor", null);
        d(this, "textColor", null);
        Object.assign(this, e)
    }
}
const z = w({
    name: "ContactInformations",
    props: {
        contactInformations: {
            type: Object,
            required: !0
        },
        isEnabledAnimation: {
            type: Boolean,
            default: !1
        },
        animateClassName: {
            type: String,
            default: "animate__fadeInUp"
        }
    },
    setup(a) {
        const e = f(() => {
                var t;
                return ((t = a.contactInformations) == null ? void 0 : t.style) || new I
            }),
            o = f(() => {
                var n;
                let t = {};
                return E((n = a.contactInformations) == null ? void 0 : n.items).filter(l => !t[l.type] && (t[l.type] = !0))
            });
        return {
            style: e,
            groupContactInformations: o,
            renderLabel: t => {
                var l;
                const n = ((l = t.lczText) == null ? void 0 : l.lczValue) || t.label;
                if (n) return i("p", {
                    class: "kmb-widget-contact-label kmb-display-name-label kmb-widget-el-group font-semibold kmb-widget-sub-title",
                    innerHTML: n
                }, null)
            },
            renderContactValue: (t, n) => {
                if (t === u.Phone || t === u.Email) {
                    const l = t === u.Phone ? "tel" : "mailto";
                    return i("a", {
                        href: `${l}:${n.value}`,
                        class: "kmb-widget-contact-item-value kmb-widget-text-body2",
                        innerHTML: n.value
                    }, null)
                } else return i("span", {
                    class: "kmb-widget-contact-item-value kmb-widget-text-body2",
                    innerHTML: n.value
                }, null)
            }
        }
    },
    render() {
        var a, e;
        if (!h(this.groupContactInformations)) return x(i("div", {
            class: "kmb-contact-informations",
            style: {
                "--label-color": (a = this.style) == null ? void 0 : a.labelColor,
                "--text-color": (e = this.style) == null ? void 0 : e.textColor
            }
        }, [i("div", {
            class: "kmb-contact-informations-list"
        }, [this.groupContactInformations.map(o => i("div", {
            class: "kmb-contact-information-item"
        }, [i("div", {
            class: "kmb-widget-contacts-info text-left"
        }, [this.renderLabel(o), o.contactInformations && i("ul", {
            class: "kmb-widget-contacts-list"
        }, [o.contactInformations.map(m => i("li", {
            class: "kmb-widget-contact-item kmb-widget-md-el-group"
        }, [this.renderContactValue(o.type, m)]))])])]))])]), [
            [T("animate-onscroll"), {
                className: `animate__animated ${this.animateClassName}`,
                isEnabled: this.isEnabledAnimation
            }]
        ])
    }
});
export {
    z as C
};