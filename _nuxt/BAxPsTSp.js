import {
    d as t,
    ek as i,
    c as l,
    l as s
} from "./DTouipjj.js";
import {
    D as n
} from "./CxE-YYPM.js";
const p = t({
    name: "SimplyTitle",
    props: {
        value: {
            type: Object,
            default: () => new i
        },
        tag: {
            type: String,
            default: "h2"
        },
        isSimple: {
            type: Boolean,
            default: !1
        },
        isCaption: {
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
        if (this.value) return l(n, {
            value: (e = this.value.lczText) == null ? void 0 : e.lczValue,
            isEnabled: (a = this.value) == null ? void 0 : a.isEnabled,
            tag: this.value.tag || "h2",
            maxChars: this.value.maxChars,
            animateClassName: this.animateClassName,
            isEnabledAnimation: this.isEnabledAnimation,
            class: s("kmb-simply-title", {
                "kmb-widget-title-h2": !this.isCaption && !this.isSimple,
                "kmb-widget-text-caption1": this.isCaption
            })
        }, null)
    }
});
export {
    p as S
};