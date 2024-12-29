import {
    d as i,
    a as n,
    h as s,
    c as e,
    l as a
} from "./DTouipjj.js";
import {
    D as r
} from "./CSeXQNZn.js";
import {
    B as m
} from "./pNlHzN8B.js";
import {
    W as o
} from "./Bty5CZTZ.js";
import {
    B as b
} from "./CQYeYB87.js";
import "./CSBU4-V1.js";
import "./DKKV0rm8.js";
import "./ChJXfJ3s.js";
import "./DxYf3bfi.js";
import "./C2lLGaZ9.js";
import "./DwDAZxOX.js";
import "./Da-Zh8W_.js";
import "./DGj8rNO4.js";
import "./sFqkYj9i.js";
import "./CxE-YYPM.js";
import "./UUMGnSYt.js";
import "./CaeezY1z.js";
import "./CpA-KWho.js";
import "./CZhf7AfE.js";
import "./BAxPsTSp.js";
const A = i({
    name: "BannerT1V5",
    props: { ...r,
        settings: {
            type: Object,
            required: !0
        }
    },
    setup() {
        const t = n();
        return {
            isMobile: s(() => t.isMobileDevice)
        }
    },
    render() {
        return e(o, {
            class: "banner banner-type-t1 banner-t1-v5",
            settings: this.settings
        }, {
            default: () => [e("div", {
                class: "kmb-widget-container-fluid"
            }, [e("div", {
                class: "kmb-widget-content"
            }, [e("div", {
                class: a("kmb-banner-main-bg", {
                    "kmb-banner-main-bg-mobile": this.isMobile
                })
            }, [e(m, {
                widget: this.widget,
                image: this.settings.image,
                settings: this.settings,
                class: "kmb-widget-banner-item banner-bg kmb-widget-bg-image-flex-content bg-center z-1 relative",
                classNames: "kmb-widget-banner-item kmb-widget-bg-image-with-overlay bg-center w-full"
            }, {
                default: () => [e("div", {
                    class: "kmb-widget-container"
                }, [e(b, {
                    settings: this.settings,
                    widgetIndex: this.widgetIndex,
                    animateClassName: this.animateClassName,
                    isEnabledAnimation: this.isEnabledAnimation,
                    class: "kmb-widget-mini-banner-bg kmb-widget-banner-box text-center"
                }, null)])]
            })])])])]
        })
    }
});
export {
    A as
    default
};