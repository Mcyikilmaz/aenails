import {
    d as l,
    h as d,
    c as e,
    dV as s,
    ei as n
} from "./DTouipjj.js";
import {
    B as o
} from "./Da-Zh8W_.js";
import {
    C as r
} from "./DGj8rNO4.js";
import {
    T as u
} from "./sFqkYj9i.js";
import {
    S as m
} from "./BdcEM9KQ.js";
import {
    D as b
} from "./CpA-KWho.js";
const E = l({
    name: "AboutUsItem",
    props: {
        settings: {
            type: Object,
            required: !0
        },
        widgetIndex: {
            type: Number,
            default: 0
        },
        isSecondaryButton: {
            type: Boolean,
            default: !0
        },
        isEnabledSubTitle: {
            type: Boolean,
            default: !0
        },
        isEnabledButtons: {
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
    setup(a) {
        return {
            isEnabledDivider: d(() => {
                var t, i;
                return (i = (t = a.settings) == null ? void 0 : t.isEnabledDivider) == null ? void 0 : i.isEnabled
            })
        }
    },
    render() {
        return e(r, {
            settings: this.settings,
            animateClassName: this.animateClassName,
            isEnabledAnimation: this.isEnabledAnimation,
            class: "kmb-widget-default-info"
        }, {
            default: () => [e("div", {
                class: "kmb-widget-titles-info kmb-widget-lg-divider text-center"
            }, [this.isEnabledSubTitle && e(m, {
                value: this.settings.subtitle
            }, null), e(u, {
                value: this.settings.title,
                isEnabledDivider: this.isEnabledDivider,
                widgetIndex: this.widgetIndex
            }, null), e(b, {
                value: this.settings.description,
                class: "text-center"
            }, null)]), this.isEnabledButtons && e(o, {
                class: "kmb-widget-btn-group-center -mx-2"
            }, {
                default: () => [e(s, {
                    value: this.settings.primaryButton,
                    elementType: n.Primary
                }, null), this.isSecondaryButton && e(s, {
                    value: this.settings.secondaryButton,
                    elementType: n.Secondary,
                    classNames: "kmb-widget-secondary-btn"
                }, null)]
            })]
        })
    }
});
export {
    E as A
};