import {
    L as e
} from "./Rj87BO-F.js";
import {
    d as l,
    c as t
} from "./DTouipjj.js";
const s = l({
    name: "FieldGroup",
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
        return t("div", {
            class: "kmb-site-default-group kmb-default-group"
        }, [this.label && t(e, {
            label: this.label,
            isMandatory: this.isMandatory,
            labelClassName: this.labelClassName,
            tooltipContent: this.tooltipContent,
            tooltipPlacement: this.tooltipPlacement
        }, null), this.$slots.default && this.$slots.default({})])
    }
});
export {
    s as F
};