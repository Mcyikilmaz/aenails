import {
    dE as s,
    d as r,
    h as a,
    dF as n,
    dG as l,
    c as i,
    l as p
} from "./DTouipjj.js";
import {
    D as c
} from "./CxE-YYPM.js";
import "./UUMGnSYt.js";
import "./CaeezY1z.js";
const m = (e, o) => {
        var t;
        return s((t = e.footerSettings) == null ? void 0 : t.enabledSettings, o)
    },
    g = r({
        name: "FooterCopiright",
        props: {
            site: {
                type: Object,
                required: !0
            },
            columnSize: {
                type: String,
                default: "w-full"
            }
        },
        setup(e) {
            return {
                isFreePlan: a(() => {
                    var t;
                    return ((t = e.site) == null ? void 0 : t.subscriptionPlan) === n.FreeTrial
                })
            }
        },
        render() {
            if (m(this.site, l.Copyright) && this.site.footerCopyright) return i("div", {
                class: p("kmb-footer-bottom", this.columnSize)
            }, [i(c, {
                value: this.isFreePlan ? this.$t("labels.createdWithHocoos", {
                    emodji: "💖"
                }) : this.site.footerCopyright,
                tag: "span",
                class: "footer-copyright kmb-widget-text-caption3"
            }, null)])
        }
    });
export {
    g as
    default
};