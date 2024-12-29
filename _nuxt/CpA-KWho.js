import {
    d as t,
    c as i,
    l as s
} from "./DTouipjj.js";
import {
    W as n
} from "./CZhf7AfE.js";
import {
    D as l
} from "./CxE-YYPM.js";
const r = t({
    name: "Description",
    props: {
        value: {
            type: Object,
            default: () => new n
        },
        isTitle: {
            type: Boolean,
            default: !1
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
        var e, a;
        if (this.value) return i(l, {
            value: (e = this.value.lczText) == null ? void 0 : e.lczValue,
            isEnabled: (a = this.value) == null ? void 0 : a.isEnabled,
            tag: "div",
            maxChars: this.value.maxChars,
            animateClassName: this.animateClassName,
            isEnabledAnimation: this.isEnabledAnimation,
            class: s("kmb-widget-description", this.isTitle ? "kmb-widget-text-body1" : "kmb-widget-text-body2")
        }, null)
    }
});
export {
    r as D
};