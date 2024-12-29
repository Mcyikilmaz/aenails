import {
    d as m,
    h as u,
    c as t,
    dV as d,
    ei as o
} from "./DTouipjj.js";
import {
    B as b
} from "./Da-Zh8W_.js";
import {
    C as p
} from "./DGj8rNO4.js";
import {
    T as c
} from "./sFqkYj9i.js";
import {
    D as g
} from "./CpA-KWho.js";
import {
    S as y
} from "./BAxPsTSp.js";
const w = m({
    name: "BannerContent",
    props: {
        settings: {
            type: Object
        },
        widgetIndex: {
            type: Number,
            default: 0
        },
        isSimplyTitle: {
            type: Boolean,
            default: !1
        },
        isSecondaryButton: {
            type: Boolean,
            default: !0
        },
        isEnabledDescription: {
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
    setup(e) {
        return {
            isEnabledContent: u(() => {
                const {
                    title: n,
                    description: a,
                    primaryButton: l,
                    secondaryButton: r
                } = e.settings;
                return (n == null ? void 0 : n.isEnabled) || (a == null ? void 0 : a.isEnabled) || (l == null ? void 0 : l.isEnabled) || (r == null ? void 0 : r.isEnabled)
            }),
            renderTitle: () => e.isSimplyTitle ? t(y, {
                value: e.settings.title,
                class: "kmb-banner-simply-title"
            }, null) : t(c, {
                value: e.settings.title,
                widgetIndex: e.widgetIndex,
                isEnabledDivider: !1,
                class: "kmb-banner-title"
            }, null)
        }
    },
    render() {
        if (this.isEnabledContent) return t("div", {
            class: "kmb-widget-banner-content kmb-widget-banner-content-bg py-6 md_py-10 md_px-6 w-full"
        }, [t(p, {
            settings: this.settings,
            animateClassName: this.animateClassName,
            isEnabledAnimation: this.isEnabledAnimation
        }, {
            default: () => {
                var e, i;
                return [this.renderTitle(), this.isEnabledDescription && t(g, {
                    value: this.settings.description,
                    class: "kmb-banner-description"
                }, null), t(b, {
                    isEnabled: ((e = this.settings.primaryButton) == null ? void 0 : e.isEnabled) || ((i = this.settings.secondaryButton) == null ? void 0 : i.isEnabled),
                    class: "kmb-widget-btn-group-center"
                }, {
                    default: () => {
                        var s, n;
                        return [t(d, {
                            value: this.settings.primaryButton,
                            isEnabled: (s = this.settings.primaryButton) == null ? void 0 : s.isEnabled,
                            elementType: o.Primary
                        }, null), this.isSecondaryButton && t(d, {
                            value: this.settings.secondaryButton,
                            isEnabled: (n = this.settings.secondaryButton) == null ? void 0 : n.isEnabled,
                            elementType: o.Secondary,
                            classNames: "kmb-widget-secondary-btn"
                        }, null)]
                    }
                })]
            }
        })])
    }
});
export {
    w as B
};