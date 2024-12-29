import {
    k as N,
    aC as O,
    d as w,
    a as E,
    h as m,
    c as y,
    l as V
} from "./DTouipjj.js";
const P = e => e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (t, s, n, r) => "#" + s + s + n + n + r + r).substring(1).match(/.{2}/g).map(t => parseInt(t, 16)),
    j = (e, t, s) => [e, t, s].map(n => 255 - parseInt(n, 10)),
    x = e => e ? (e == null ? void 0 : e.match(/(\d+(\.\d+)?)/g)).slice(0, 3) : [255, 255, 255],
    g = (e, t, s) => `background: ${e}; ${s&&`backdrop-filter: ${t?`blur(${t}px)`:"inherit"}`}`,
    R = (e, t) => {
        if (N(e)) return;
        const s = (e == null ? void 0 : e.imageStyle) || {};
        if (!(s != null && s.isUserChange)) return;
        const {
            styles: n,
            imageFilterSetting: r
        } = t || {}, {
            widgetBackgroundColor: f,
            widgetCoverBackgroundColor: h
        } = e || {}, {
            opacityPercentage: C,
            blur: k,
            isEnabledBlur: c,
            isEnabledLightTones: B
        } = s, v = k || (r == null ? void 0 : r.blur), a = !O(c), $ = a ? c : r == null ? void 0 : r.isEnabledBlur, l = (C || (r == null ? void 0 : r.opacityPercentage) || 100) / 100, u = $ ? v : null;
        if (!l) return g("transparent", u, a);
        const i = h ? ? f,
            [d, p, b] = i ? P(i) : x(n == null ? void 0 : n.overlayBg),
            o = B ? j(d, p, b) : [d, p, b];
        return g(`rgba(${o==null?void 0:o.join(",")}, ${l})`, u, a)
    },
    I = w({
        name: "BackgroundOverlay",
        props: {
            settings: {
                type: Object
            },
            contentClassNames: {
                type: String
            },
            align: {
                type: String,
                default: "center"
            }
        },
        setup(e) {
            const t = E(),
                s = m(() => {
                    switch (e.align) {
                        case "center":
                            return "items-center";
                        case "top":
                            return "items-start";
                        case "bottom":
                            return "items-end";
                        default:
                            return "items-center"
                    }
                });
            return {
                style: m(() => {
                    const r = t.getSite;
                    return R(e.settings, r)
                }),
                alignClassName: s
            }
        },
        render() {
            var e, t;
            return y("div", {
                class: "kmb-widget-overlay"
            }, [y("div", {
                style: this.style,
                class: V("kmb-widget-overlay-content", this.contentClassNames, this.alignClassName)
            }, [((e = this.$slots) == null ? void 0 : e.default) && ((t = this.$slots) == null ? void 0 : t.default({}))])])
        }
    });
export {
    I as B
};