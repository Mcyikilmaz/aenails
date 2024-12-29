import {
    D as o
} from "./CSeXQNZn.js";
import {
    d as a,
    c as t,
    A as n,
    z as m
} from "./DTouipjj.js";
import {
    C as r
} from "./D6VQgJAk.js";
import {
    C as l
} from "./DGj8rNO4.js";
import {
    S as d
} from "./BAxPsTSp.js";
import {
    W as g
} from "./CAnXH1mw.js";
import {
    W as p
} from "./Bty5CZTZ.js";
import {
    L as c
} from "./B0qAuK7Z.js";
import "./sFqkYj9i.js";
import "./CxE-YYPM.js";
import "./UUMGnSYt.js";
import "./CaeezY1z.js";
import "./BdcEM9KQ.js";
import "./CpA-KWho.js";
import "./CZhf7AfE.js";
import "./DxYf3bfi.js";
import "./DwDAZxOX.js";
import "./BCajdyOO.js";
import "./DKKV0rm8.js";
import "./ChJXfJ3s.js";
import "./CfeTNxv7.js";
const V = a({
    name: "LogosT3V1",
    props: { ...o,
        settings: {
            type: Object,
            required: !0
        }
    },
    render() {
        return t(p, {
            class: "logos logos-t3 logos-t3-v1",
            settings: this.settings
        }, {
            default: () => [t(g, {
                settings: this.settings,
                fullContainerClassName: "kmb-widget-container-fluid-frame"
            }, {
                default: () => [t("div", {
                    class: "kmb-widget-content logos-content kmb-widget-bg"
                }, [t("div", {
                    class: "kmb-widget-container py-10"
                }, [t(l, {
                    settings: this.settings,
                    animateClassName: this.animateClassName,
                    isEnabledAnimation: this.isEnabledAnimation
                }, {
                    default: () => [t(r, {
                        settings: this.settings,
                        widgetIndex: this.widgetIndex,
                        isEnabledDivider: !1,
                        isEnabledAnimation: !1,
                        class: "text-center kmb-widget-col-group"
                    }, null), t("div", {
                        class: "kmb-widget-logos-author kmb-widget-xl-col-group"
                    }, [t(d, {
                        value: this.settings.author,
                        isCaption: !0,
                        class: "text-center"
                    }, null)])]
                }), t(n, {
                    nav: !1,
                    indicators: !0,
                    items: this.settings.items,
                    animateClassName: this.animateClassName,
                    isEnabledAnimation: this.isEnabledAnimation,
                    uiSettings: this.settings.sliderSettings,
                    class: "kmb-site-slider-pagination-lg-group kmb-slider-aligin-center-navigation kmb-widget-slider-outside-row kmb-widget-slider-row",
                    settings: {
                        itemsToShow: 6,
                        breakpoints: {
                            0: {
                                itemsToShow: 2
                            },
                            420: {
                                itemsToShow: 3
                            },
                            560: {
                                itemsToShow: 4
                            },
                            780: {
                                itemsToShow: 5
                            },
                            992: {
                                itemsToShow: 6
                            }
                        }
                    }
                }, {
                    default: () => {
                        var e;
                        return [(e = this.settings.items) == null ? void 0 : e.map((s, i) => t(m, {
                            index: i,
                            key: s.key || i,
                            class: "kmb-widget-col text-center logos-item kmb-site-slider-full-height"
                        }, {
                            default: () => [t(c, {
                                item: s,
                                index: i,
                                widget: this.widget,
                                isEnabledAnimation: !1,
                                class: "kmb-cards-background-v2 h-full p-8"
                            }, null)]
                        }))]
                    }
                })])])]
            })]
        })
    }
});
export {
    V as
    default
};