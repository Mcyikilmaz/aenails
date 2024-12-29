import {
    d as n,
    c as t,
    dV as s,
    ei as a
} from "./DTouipjj.js";
import {
    D as m
} from "./CSeXQNZn.js";
import {
    B as o
} from "./Da-Zh8W_.js";
import {
    I as r
} from "./BCajdyOO.js";
import {
    W as l
} from "./CAnXH1mw.js";
import {
    W as d
} from "./Bty5CZTZ.js";
import {
    A as u
} from "./bxhbWpKH.js";
import "./DKKV0rm8.js";
import "./ChJXfJ3s.js";
import "./DxYf3bfi.js";
import "./CfeTNxv7.js";
import "./DwDAZxOX.js";
import "./DGj8rNO4.js";
import "./sFqkYj9i.js";
import "./CxE-YYPM.js";
import "./UUMGnSYt.js";
import "./CaeezY1z.js";
import "./BdcEM9KQ.js";
import "./CpA-KWho.js";
import "./CZhf7AfE.js";
const P = n({
    name: "AboutUsT1V12",
    props: { ...m,
        settings: {
            type: Object,
            required: !0
        }
    },
    render() {
        return t(d, {
            class: "about-us about-us-t1 about-us-t1-v12",
            settings: this.settings
        }, {
            default: () => [t(l, {
                settings: this.settings,
                isFullContainerByDefault: !1,
                fullContainerClassName: "kmb-widget-container-fluid-frame"
            }, {
                default: () => {
                    var e, i;
                    return [t("div", {
                        class: "kmb-widget-content"
                    }, [t("div", {
                        class: "kmb-md-widget-container kmb-sm-widget-col-group"
                    }, [t(u, {
                        widgetIndex: this.widgetIndex,
                        settings: this.settings,
                        animateClassName: this.animateClassName,
                        isEnabledAnimation: this.isEnabledAnimation,
                        isEnabledButtons: !1
                    }, null)]), this.settings.image && t("div", {
                        class: "w-full flex justify-center kmb-widget-col-group"
                    }, [t(r, {
                        widget: this.widget,
                        value: this.settings.image,
                        animateClassName: this.animateClassName,
                        isEnabledAnimation: this.isEnabledAnimation,
                        class: "kmb-hs-image-h-auto kmb-hs-image-center"
                    }, null)]), t(o, {
                        isEnabled: ((e = this.settings.primaryButton) == null ? void 0 : e.isEnabled) || ((i = this.settings.secondaryButton) == null ? void 0 : i.isEnabled),
                        animateClassName: this.animateClassName,
                        isEnabledAnimation: this.isEnabledAnimation,
                        class: "kmb-widget-btn-group-center"
                    }, {
                        default: () => [t(s, {
                            value: this.settings.primaryButton,
                            elementType: a.Primary
                        }, null), t(s, {
                            value: this.settings.secondaryButton,
                            elementType: a.Secondary,
                            classNames: "kmb-widget-secondary-btn"
                        }, null)]
                    })])]
                }
            })]
        })
    }
});
export {
    P as
    default
};