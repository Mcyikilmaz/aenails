import {
    d as t,
    c as i
} from "./DTouipjj.js";
import {
    W as l
} from "./D73DMgDQ.js";
import {
    D as s
} from "./CxE-YYPM.js";
const d = t({
    name: "SubTitleBold",
    props: {
        value: {
            type: Object,
            default: () => new l
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
        var a, e;
        if (this.value) return i(s, {
            value: (a = this.value.lczText) == null ? void 0 : a.lczValue,
            isEnabled: (e = this.value) == null ? void 0 : e.isEnabled,
            tag: this.value.tag || "h4",
            maxChars: this.value.maxChars,
            animateClassName: this.animateClassName,
            isEnabledAnimation: this.isEnabledAnimation,
            class: "kmb-widget-title-h4"
        }, null)
    }
});
export {
    d as S
};