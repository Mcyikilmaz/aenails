import {
    d as i,
    h as l,
    ej as m,
    dz as o,
    dy as r,
    c,
    l as d
} from "./DTouipjj.js";
const g = i({
    name: "ContentAligment",
    props: {
        settings: {
            type: Object
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
    setup(e) {
        return {
            contentAligmenClassName: l(() => {
                var s, n;
                const a = ((s = e.settings) == null ? void 0 : s.contentAligmentType) || null;
                return a && ((n = m[a]) == null ? void 0 : n.class)
            })
        }
    },
    render() {
        var e, t;
        return o(c("div", {
            class: d("kmb-widget-aligment-wrap", this.contentAligmenClassName)
        }, [((e = this.$slots) == null ? void 0 : e.default) && ((t = this.$slots) == null ? void 0 : t.default({}))]), [
            [r("animate-onscroll"), {
                className: `animate__animated ${this.animateClassName}`,
                isEnabled: this.isEnabledAnimation
            }]
        ])
    }
});
export {
    g as C
};