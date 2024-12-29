import {
    d as a,
    c as t,
    dz as r,
    dy as n,
    ab as l,
    l as i,
    ad as m,
    dH as o,
    dJ as d
} from "./DTouipjj.js";
import {
    D as c
} from "./CSeXQNZn.js";
import {
    S as g
} from "./OfnFSVbK.js";
import {
    W as p
} from "./CAnXH1mw.js";
import {
    W as u
} from "./Bty5CZTZ.js";
import "./D73DMgDQ.js";
import "./CxE-YYPM.js";
import "./UUMGnSYt.js";
import "./CaeezY1z.js";
import "./DxYf3bfi.js";
import "./DwDAZxOX.js";
const D = a({
    name: "BannerT8V1",
    props: { ...c,
        settings: {
            type: Object,
            required: !0
        }
    },
    render() {
        return t(u, {
            class: "banner banner-t8 banner-t8-v1 kmb-widget-bg kmb-widget-no-radius",
            settings: this.settings
        }, {
            default: () => [t(p, {
                settings: this.settings,
                isFullContainerByDefault: !1,
                fullContainerClassName: "kmb-widget-container-fluid-frame"
            }, {
                default: () => {
                    var s;
                    return [r(t("div", {
                        class: "kmb-widget-content text-center py-10"
                    }, [t("div", {
                        class: "kmb-widget-row items-center md_justify-between justify-center"
                    }, [t("div", {
                        class: "md_w-1-2 w-full kmb-widget-col md_text-left text-center kmb-md-widget-col-group"
                    }, [t(g, {
                        value: this.settings.title
                    }, null)]), t("div", {
                        class: "md_w-1-2 w-full kmb-widget-col text-right"
                    }, [t("ul", {
                        class: "kmb-blog-post-share-actions-list kmb-md-widget-row justify-center md_justify-end"
                    }, [!l(this.settings.shareActions) && ((s = this.settings.shareActions) == null ? void 0 : s.map(e => t("li", {
                        class: i("kmb-md-widget-col kmb-widget-el-group")
                    }, [t("a", {
                        href: e.url || "#",
                        class: "kmb-share-icon-wrap",
                        ref: "noreferrer",
                        target: "_blank",
                        title: m(o[e.type])
                    }, [t("i", {
                        class: i(d(e.type))
                    }, null)])])))])])])]), [
                        [n("animate-onscroll"), {
                            className: `animate__animated ${this.animateClassName}`,
                            isEnabled: this.isEnabledAnimation
                        }]
                    ])]
                }
            })]
        })
    }
});
export {
    D as
    default
};