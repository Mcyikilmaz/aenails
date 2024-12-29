import {
    d as a,
    dz as s,
    dy as m,
    c as e,
    dV as n
} from "./DTouipjj.js";
import {
    i as l
} from "./UUMGnSYt.js";
import {
    I as o
} from "./BCajdyOO.js";
const b = a({
    name: "LogosItem",
    props: {
        widget: {
            type: Object,
            required: !0
        },
        item: {
            type: Object,
            required: !0
        },
        index: {
            type: Number,
            default: 0
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
    render(r) {
        var t, i;
        return s(e("div", {
            class: "kmb-widget-logo-item"
        }, [e(o, {
            value: this.item.image,
            index: this.index,
            widget: this.widget,
            class: "kmb-logos-img kmb-image-center"
        }, null), e(n, {
            value: this.item.button,
            isEnabled: !l((i = (t = this.item.button) == null ? void 0 : t.lczText) == null ? void 0 : i.lczValue),
            classNames: "kmb-site-logo-btn",
            class: "text-center w-full"
        }, null)]), [
            [m("animate-onscroll"), {
                className: `animate__animated ${this.animateClassName}`,
                isEnabled: this.isEnabledAnimation
            }]
        ])
    }
});
export {
    b as L
};