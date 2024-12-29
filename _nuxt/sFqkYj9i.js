import {
    d as t,
    ek as i,
    c as l,
    l as s
} from "./DTouipjj.js";
import {
    D as n
} from "./CxE-YYPM.js";
const r = t({
    name: "Title",
    props: {
        value: {
            type: Object,
            default: () => new i
        },
        widgetIndex: {
            type: Number,
            default: 1
        },
        isEnabledDivider: {
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
        var e, a;
        if (this.value) return l(n, {
            value: (e = this.value.lczText) == null ? void 0 : e.lczValue,
            isEnabled: (a = this.value) == null ? void 0 : a.isEnabled,
            tag: this.widgetIndex == 0 ? "h1" : this.value.tag || "h2",
            maxChars: this.value.maxChars,
            isEnabledAlignClass: !0,
            animateClassName: this.animateClassName,
            isEnabledAnimation: this.isEnabledAnimation,
            class: s("kmb-widget-title kmb-widget-title-h1", {
                "kmb-widget-title-no-divider": !this.isEnabledDivider
            })
        }, null)
    }
});
export {
    r as T
};