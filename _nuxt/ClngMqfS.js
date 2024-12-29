import {
    d as B,
    h as g,
    k as E,
    dz as C,
    dy as I,
    c as t,
    l,
    dV as a,
    ei as s
} from "./DTouipjj.js";
import {
    B as r
} from "./Da-Zh8W_.js";
import {
    C as u
} from "./DGj8rNO4.js";
import {
    D as c
} from "./CpA-KWho.js";
import {
    S as d
} from "./OfnFSVbK.js";
import {
    I as o
} from "./BCajdyOO.js";
import {
    P as k
} from "./S7wm6enr.js";
const z = B({
    name: "ServiceItem",
    props: {
        item: {
            type: Object,
            required: !0
        },
        widget: {
            type: Object,
            required: !0
        },
        settings: {
            type: Object,
            required: !0
        },
        imageResize: {
            type: Object
        },
        index: {
            type: Number,
            default: 0
        },
        type: {
            type: String,
            default: "image"
        },
        itemUIType: {
            type: Number,
            default: 1
        },
        linkButtonLabelType: {
            type: Number
        },
        isRowItem: {
            type: Boolean,
            default: !1
        },
        isBackgroundImage: {
            type: Boolean,
            default: !1
        },
        isEnabledPrice: {
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
    setup(e) {
        const w = g(() => {
                var i, m;
                return e.isEnabledPrice ? (m = (i = e.item) == null ? void 0 : i.price) == null ? void 0 : m.isEnabled : !1
            }),
            b = g(() => {
                var i;
                return E(e.settings.isEnabledCurrency) ? !1 : (i = e.settings.isEnabledCurrency) == null ? void 0 : i.isEnabled
            }),
            n = g(() => {
                var i;
                return e.isEnabledButtons ? (i = e.item.button) == null ? void 0 : i.isEnabled : !1
            }),
            v = () => t("div", {
                class: "kmb-widget-item-content kmb-service-item-content"
            }, [t(u, {
                settings: e.item
            }, {
                default: () => [t("div", {
                    class: "kmb-widget-item-inner-content"
                }, [t(d, {
                    value: e.item.serviceName,
                    class: "kmb-widget-item-title kmb-service-name"
                }, null), t(c, {
                    value: e.item.description,
                    isTitle: !0,
                    class: "kmb-widget-item-description kmb-service-description"
                }, null), e.isEnabledPrice && t(k, {
                    value: e.item.price,
                    isDisplayCurrency: !0,
                    isEnabledCurrency: b.value,
                    class: "kmb-service-price"
                }, null)]), n.value && t(r, {
                    class: "kmb-widget-single-btn-group kmb-widget-btn-group-center kmb-service-item-btn-group"
                }, {
                    default: () => [t(a, {
                        value: e.item.button,
                        linkButtonLabelType: e.linkButtonLabelType,
                        elementType: s.Primary
                    }, null)]
                })]
            })]),
            y = () => {
                const i = w.value || n.value;
                return t("div", {
                    class: "kmb-widget-item-content kmb-service-item-content"
                }, [t(u, {
                    settings: e.item
                }, {
                    default: () => {
                        var m;
                        return [t("div", {
                            class: "kmb-widget-item-inner-content"
                        }, [t(d, {
                            value: e.item.serviceName,
                            class: "kmb-widget-item-title kmb-service-name"
                        }, null), t(c, {
                            value: e.item.description,
                            isTitle: !0,
                            class: "kmb-widget-item-description kmb-service-description mb-0"
                        }, null)]), i && t("div", {
                            class: "kmb-widget-item-inner-content-price relative mt-6"
                        }, [e.isEnabledPrice && t(k, {
                            value: (m = e.item) == null ? void 0 : m.price,
                            isDisplayCurrency: !0,
                            isEnabledCurrency: b.value,
                            class: "kmb-service-price"
                        }, null), n.value && t(r, {
                            class: "kmb-widget-single-btn-group kmb-widget-btn-group-center kmb-service-item-btn-group"
                        }, {
                            default: () => [t(a, {
                                value: e.item.button,
                                linkButtonLabelType: e.linkButtonLabelType,
                                elementType: s.Primary
                            }, null)]
                        })])]
                    }
                })])
            },
            f = () => t(u, {
                settings: e.item
            }, {
                default: () => [t("div", {
                    class: l("kmb-widget-item-content kmb-service-item-content", {
                        "kmb-service-item-content-border": e.isRowItem
                    })
                }, [t("div", {
                    class: "kmb-widget-row items-center"
                }, [t("div", {
                    class: l("w-full kmb-widget-col", {
                        "lg_w-1-3": e.isRowItem
                    })
                }, [t(d, {
                    value: e.item.serviceName,
                    class: "kmb-widget-item-title kmb-service-name text-left"
                }, null)]), t("div", {
                    class: l("w-full kmb-widget-col kmb-lg-widget-col-group", {
                        "lg_w-1-3": e.isRowItem
                    })
                }, [t(c, {
                    value: e.item.description,
                    isTitle: !0,
                    class: "kmb-widget-item-description kmb-service-description text-left kmb-widget-col-group mt-6"
                }, null), n.value && t(r, {
                    class: "kmb-widget-single-btn-group kmb-widget-btn-group-left kmb-service-item-btn-group"
                }, {
                    default: () => [t(a, {
                        value: e.item.button,
                        linkButtonLabelType: e.linkButtonLabelType,
                        elementType: s.Primary
                    }, null)]
                })]), t("div", {
                    class: l("w-full kmb-widget-col", e.isRowItem ? "lg_w-1-3" : "mt-8")
                }, [t("div", {
                    class: "kmb-service-image-group kmb-widget-item-image kmb-widget-el-group mx-auto flex justify-center"
                }, [t(o, {
                    type: e.type,
                    index: e.index,
                    widget: e.widget,
                    value: e.item.image,
                    resize: e.imageResize,
                    class: "kmb-widget-service-image kmb-widget-full-image"
                }, null)])])])])]
            }),
            T = () => t("div", {
                class: l("kmb-widget-item-content kmb-service-item-content h-full", {
                    "kmb-service-item-content-border": e.isRowItem
                })
            }, [t(u, {
                settings: e.item
            }, {
                default: () => [t("div", {
                    class: "kmb-widget-item-inner-content w-full"
                }, [t(d, {
                    value: e.item.serviceName,
                    class: "kmb-widget-item-title kmb-service-name text-left"
                }, null), t(c, {
                    value: e.item.description,
                    isTitle: !0,
                    class: "kmb-widget-item-description kmb-service-description text-left kmb-widget-col-group"
                }, null)]), t("div", {
                    class: "w-full flex-col flex justify-end"
                }, [t("div", {
                    class: "kmb-service-image-group kmb-widget-item-image"
                }, [t(o, {
                    type: e.type,
                    index: e.index,
                    widget: e.widget,
                    value: e.item.image,
                    resize: e.imageResize,
                    class: "kmb-widget-service-image kmb-widget-full-image"
                }, null)]), n.value && t(r, {
                    class: "kmb-widget-single-btn-group kmb-widget-btn-group-left kmb-service-item-btn-group mt-10"
                }, {
                    default: () => [t(a, {
                        value: e.item.button,
                        linkButtonLabelType: e.linkButtonLabelType,
                        elementType: s.Primary
                    }, null)]
                })])]
            })]);
        return {
            isEnabledButton: n,
            isEnabledCurrency: b,
            renderContent: () => {
                switch (e.itemUIType) {
                    case 1:
                        return v();
                    case 2:
                        return y();
                    case 3:
                        return f();
                    case 4:
                        return T();
                    default:
                        return v()
                }
            }
        }
    },
    render() {
        return C(t("div", {
            class: "kmb-service-item kmb-widget-item"
        }, [!this.isBackgroundImage && t("div", {
            class: "kmb-service-image-group kmb-widget-item-image kmb-widget-el-group mx-auto flex justify-center"
        }, [t(o, {
            type: this.type,
            index: this.index,
            widget: this.widget,
            value: this.item.image,
            resize: this.imageResize,
            class: l("kmb-widget-service-image", {
                "kmb-widget-service-icon": this.type == "icon"
            })
        }, null)]), this.renderContent()]), [
            [I("animate-onscroll"), {
                className: `animate__animated ${this.animateClassName}`,
                isEnabled: this.isEnabledAnimation
            }]
        ])
    }
});
export {
    z as S
};