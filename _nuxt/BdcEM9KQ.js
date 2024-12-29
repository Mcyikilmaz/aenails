import {
    D as t
} from "./CxE-YYPM.js";
import {
    d as l,
    c as s
} from "./DTouipjj.js";
const u = l({
    name: "SubTitle",
    props: {
        value: {
            type: Object
        }
    },
    render() {
        var e, a;
        if (this.value) return s(t, {
            value: (e = this.value.lczText) == null ? void 0 : e.lczValue,
            isEnabled: (a = this.value) == null ? void 0 : a.isEnabled,
            tag: this.value.tag || "h3",
            maxChars: this.value.maxChars,
            class: "kmb-widget-sub-title"
        }, null)
    }
});
export {
    u as S
};