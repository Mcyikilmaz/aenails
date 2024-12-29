import {
    d as e,
    c as t,
    dz as o,
    dy as a,
    l as n
} from "./DTouipjj.js";
import {
    D as m
} from "./CSeXQNZn.js";
import {
    C as r
} from "./Bp1k_N5J.js";
import {
    C as l
} from "./h1oPd0I8.js";
import {
    B as c
} from "./CSBU4-V1.js";
import {
    B as d
} from "./C2lLGaZ9.js";
import {
    C as p
} from "./D6VQgJAk.js";
import {
    W as g
} from "./CAnXH1mw.js";
import {
    W as f
} from "./Bty5CZTZ.js";
import "./CaeezY1z.js";
import "./CPceHiJ5.js";
import "./B4PKYeeb.js";
import "./1IXFzUcJ.js";
import "./OrTNUIWI.js";
import "./Rj87BO-F.js";
import "./CxE-YYPM.js";
import "./UUMGnSYt.js";
import "./C7Z4lVx2.js";
import "./CxoEgsqs.js";
import "./CctDz5RS.js";
import "./CpJAUb91.js";
import "./DfxtQXwc.js";
import "./D6uAcWDZ.js";
import "./DchZZv4k.js";
import "./Da-Zh8W_.js";
import "./Dgre5qvW.js";
import "./BcDAoa_v.js";
import "./6SHmCfzU.js";
import "./DKKV0rm8.js";
import "./ChJXfJ3s.js";
import "./DxYf3bfi.js";
import "./DGj8rNO4.js";
import "./sFqkYj9i.js";
import "./BdcEM9KQ.js";
import "./CpA-KWho.js";
import "./CZhf7AfE.js";
import "./DwDAZxOX.js";
const Y = e({
    name: "ContactUsT4V1",
    props: { ...m,
        settings: {
            type: Object,
            required: !0
        }
    },
    render() {
        return t(f, {
            class: "contacts contacts-t4 contacts-t4-v1",
            settings: this.settings
        }, {
            default: () => [t(g, {
                settings: this.settings
            }, {
                default: () => [t(c, {
                    widget: this.widget,
                    settings: this.settings,
                    image: this.settings.image,
                    class: "kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay"
                }, {
                    default: () => [t(d, {
                        settings: this.settings,
                        contentClassNames: "md_py-16 py-10"
                    }, {
                        default: () => {
                            var i, s;
                            return [t("div", {
                                class: "kmb-widget-container"
                            }, [t("div", {
                                class: "kmb-widget-content contacts-content w-full"
                            }, [t("div", {
                                class: "contact-form-block"
                            }, [t("div", {
                                class: "kmb-widget-card-overlay z-10 sm_p-10 p-4 w-full kmb-widget-lg-el-group"
                            }, [t(p, {
                                settings: this.settings,
                                widgetIndex: this.widgetIndex,
                                animateClassName: this.animateClassName,
                                isEnabledAnimation: this.isEnabledAnimation,
                                isEnabledDivider: !1,
                                class: "text-center"
                            }, null), t("div", {
                                class: "kmb-sm-widget-container kmb-widget-container-none-space"
                            }, [t(r, {
                                isEnabledLabel: !1,
                                isEnabledPlaceholder: !0,
                                contactForm: this.settings.contactForm,
                                class: "kmb-widget-contact-form-border-bottom-fields"
                            }, null)])]), o(t("div", {
                                class: "kmb-widget-card-overlay w-full kmb-widget-lg-el-group p-4"
                            }, [t(l, {
                                contactInformations: this.settings.contactInformation,
                                class: n("kmb-inline-contact-informations-list item-full-width", {
                                    "kmb-inline-center-contact-informations-list": ((s = (i = this.settings.contactInformation) == null ? void 0 : i.items) == null ? void 0 : s.length) < 3
                                })
                            }, null)]), [
                                [a("animate-onscroll"), {
                                    className: `animate__animated ${this.animateClassName}`,
                                    isEnabled: this.isEnabledAnimation
                                }]
                            ])])])])]
                        }
                    })]
                })]
            })]
        })
    }
});
export {
    Y as
    default
};