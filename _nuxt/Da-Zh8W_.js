import {
    d as e,
    dz as a,
    dy as t,
    c as s
} from "./DTouipjj.js";
const n = e({
    name: "ButtonGroup",
    props: {
        isEnabled: {
            type: Boolean,
            default: !0
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
    render() {
        if (this.isEnabled && this.$slots.default) return a(s("div", {
            class: "kmb-widget-btn-group"
        }, [this.$slots.default({})]), [
            [t("animate-onscroll"), {
                className: `animate__animated ${this.animateClassName}`,
                isEnabled: this.isEnabledAnimation
            }]
        ])
    }
});
export {
    n as B
};