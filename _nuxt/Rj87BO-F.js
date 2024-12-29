import {
    d as a,
    c as e,
    U as l,
    l as t
} from "./DTouipjj.js";
import {
    D as s
} from "./CxE-YYPM.js";
const o = a({
    name: "Label",
    props: {
        label: {
            type: String
        },
        labelClassName: {
            type: String,
            default: ""
        },
        tooltipContent: {
            type: String
        },
        tooltipPlacement: {
            type: String,
            default: "auto"
        },
        isMandatory: {
            type: Boolean,
            default: !1
        }
    },
    render() {
        return e("label", {
            class: t("kmb-site-label kmb-widget-field-label", this.labelClassName)
        }, [e(s, {
            value: this.label,
            tag: "span",
            isEnabledAlignClass: !0,
            class: "kmb-field-label"
        }, null), this.isMandatory && e("span", {
            class: "required"
        }, [l("*")])])
    }
});
export {
    o as L
};