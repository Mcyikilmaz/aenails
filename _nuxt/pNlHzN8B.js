import {
    d as l,
    a as g,
    h as o,
    c as s,
    l as i
} from "./DTouipjj.js";
import {
    B as a
} from "./CSBU4-V1.js";
import {
    B as n
} from "./C2lLGaZ9.js";
const u = l({
    name: "BackgroundImageOverlay",
    props: {
        widgetKey: {
            type: Number
        },
        image: {
            type: Object,
            required: !0
        },
        imageResize: {
            type: Object
        },
        settings: {
            type: Object
        },
        widget: {
            type: Object
        },
        index: {
            type: Number,
            default: 0
        },
        classNames: {
            type: String
        },
        contentClassNames: {
            type: String
        },
        align: {
            type: String,
            default: "center"
        },
        isEnabledMobile: {
            type: Boolean,
            default: !0
        }
    },
    setup(e) {
        const t = g();
        return {
            isMobile: o(() => e.isEnabledMobile ? t.isMobileDevice : !1)
        }
    },
    render() {
        return this.isMobile ? s("div", {
            class: "kmb-widget-bg-image-overlay-content-group kmb-widget-mobile-bg-image"
        }, [s(a, {
            isMobile: !0,
            image: this.image,
            index: this.index,
            widget: this.widget,
            settings: this.settings,
            imageResize: this.imageResize,
            class: i(this.classNames)
        }, {
            default: () => [s(n, {
                align: this.align,
                settings: this.settings,
                contentClassNames: `flex ${this.contentClassNames?this.contentClassNames:""}`,
                class: "kmb-widget-bg-image-overlay-content"
            }, {
                default: () => {
                    var e, t;
                    return [((e = this.$slots) == null ? void 0 : e.default) && ((t = this.$slots) == null ? void 0 : t.default({}))]
                }
            })]
        })]) : s(a, {
            image: this.image,
            index: this.index,
            widget: this.widget,
            settings: this.settings,
            imageResize: this.imageResize,
            class: i(this.classNames)
        }, {
            default: () => [s(n, {
                align: this.align,
                settings: this.settings,
                contentClassNames: `flex ${this.contentClassNames?this.contentClassNames:""}`,
                class: "kmb-widget-bg-image-overlay-content"
            }, {
                default: () => {
                    var e, t;
                    return [((e = this.$slots) == null ? void 0 : e.default) && ((t = this.$slots) == null ? void 0 : t.default({}))]
                }
            })]
        })
    }
});
export {
    u as B
};