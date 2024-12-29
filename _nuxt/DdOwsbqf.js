import {
    d as i,
    c as t,
    dV as s,
    ei as n
} from "./DTouipjj.js";
import {
    B as a
} from "./Da-Zh8W_.js";
import {
    C as l
} from "./DGj8rNO4.js";
import {
    T as d
} from "./sFqkYj9i.js";
import {
    S as o
} from "./BdcEM9KQ.js";
import {
    D as m
} from "./CpA-KWho.js";
const c = i({
    name: "TextItem",
    props: {
        settings: {
            type: Object,
            required: !0
        },
        widgetIndex: {
            type: Number,
            default: 0
        },
        isEnabledDivider: {
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
        return t(l, {
            settings: this.settings,
            animateClassName: this.animateClassName,
            isEnabledAnimation: this.isEnabledAnimation,
            class: "kmb-widget-text-content"
        }, {
            default: () => {
                var e;
                return [t("div", {
                    class: "kmb-widget-titles-info"
                }, [t(o, {
                    value: this.settings.subtitle,
                    class: "kmb-widget-md-el-group"
                }, null), t(d, {
                    value: this.settings.title,
                    widgetIndex: this.widgetIndex,
                    isEnabledDivider: this.isEnabledDivider
                }, null)]), t(m, {
                    class: "kmb-text-description",
                    value: this.settings.description
                }, null), t(a, {
                    class: "kmb-widget-btn-group-center",
                    isEnabled: (e = this.settings.button) == null ? void 0 : e.isEnabled
                }, {
                    default: () => [t(s, {
                        value: this.settings.button,
                        elementType: n.Primary
                    }, null)]
                })]
            }
        })
    }
});
export {
    c as T
};