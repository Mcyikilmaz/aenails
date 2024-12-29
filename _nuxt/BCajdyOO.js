import {
    _ as p
} from "./DKKV0rm8.js";
import {
    d as x,
    b as E,
    a as T,
    h as i,
    aW as _,
    E as S,
    k as r,
    dz as U,
    dy as N,
    c as d,
    l as o,
    d_ as P,
    dN as C
} from "./DTouipjj.js";
import {
    g as O
} from "./ChJXfJ3s.js";
import {
    I as z
} from "./CfeTNxv7.js";
const W = x({
    name: "Img",
    props: {
        value: {
            type: Object,
            required: !0
        },
        images: {
            type: Array
        },
        resize: {
            type: Object
        },
        type: {
            type: String
        },
        loading: {
            type: String
        },
        widget: {
            type: Object
        },
        index: {
            type: Number,
            default: 0
        },
        isEnabledAnimation: {
            type: Boolean,
            default: !1
        },
        isEnabledImagePreview: {
            type: Boolean,
            default: !1
        },
        isShowOriginalImageUrl: {
            type: Boolean,
            default: !1
        },
        animateClassName: {
            type: String,
            default: "animate__fadeInUp"
        }
    },
    emits: ["load"],
    setup(t) {
        const {
            $emitter: m
        } = E(), g = T(), h = i(() => g.getSite), u = i(() => {
            var e, a;
            return (e = t.value) != null && e.alt ? t.value.alt : ((a = h.value) == null ? void 0 : a.title) || "hocoos"
        }), s = i(() => O(t.widget, t.resize, t.index)), c = i(() => _(t.value, s.value, t.isShowOriginalImageUrl)), w = i(() => t.value.hasOwnProperty(S("isEnabled")) ? t.value.isEnabled : !0), y = i(() => {
            var e;
            return ((e = s.value) == null ? void 0 : e.width) || null
        }), f = i(() => {
            var e;
            return ((e = s.value) == null ? void 0 : e.height) || null
        }), v = i(() => t.type == "icon"), l = i(() => {
            var a, n;
            if (r(t.value) || r((a = t.value) == null ? void 0 : a.imageLink)) return !1;
            const {
                imageLink: e
            } = t.value;
            return !!((n = e == null ? void 0 : e.page) != null && n.id || e != null && e.externalLink)
        });
        return {
            alt: u,
            imageUrl: c,
            width: y,
            height: f,
            isEnabled: w,
            isIconType: v,
            isLinkedImage: l,
            onImageClick: () => {
                try {
                    if (l.value) {
                        const {
                            imageLink: e
                        } = t.value, a = e.isTargetBlank ? "_blank" : "_self";
                        if (e.urlType == P.Page) {
                            const {
                                id: n,
                                slug: b,
                                linkType: I
                            } = e.page;
                            if (n) {
                                const k = C({
                                    id: n,
                                    slug: b,
                                    pageTemplateType: I
                                });
                                window.open(k, a).focus()
                            }
                            return
                        }
                        e.externalLink && window.open(e.externalLink, a).focus()
                    }
                    t.isEnabledImagePreview && m.emit("imagePreview", new z({
                        images: t.images,
                        activeKey: t.value.key
                    }))
                } catch (e) {
                    console.log(e)
                }
            }
        }
    },
    render() {
        if (this.imageUrl && this.isEnabled) return U(d("div", {
            "data-width": this.width,
            class: o("kmb-widget-image", {
                "kmb-widget-image-icon kmb-widget-image-no-filter": this.isIconType
            })
        }, [d(p, {
            provider: "customImgProv",
            loading: "lazy",
            densities: "x1",
            alt: this.alt,
            src: this.imageUrl,
            width: this.width,
            height: this.height,
            "data-width": this.width,
            "data-height": this.height,
            placeholder: [this.width, this.height],
            onLoad: () => this.$emit("load"),
            onClick: () => this.onImageClick(),
            class: o("kmb-widget-image-item ", this.isIconType ? "kmb-widget-icon kmb-widget-type-icon" : "kmb-widget-type-image", {
                "cursor-pointer": this.isLinkedImage
            }),
            style: {
                width: this.isIconType ? `${this.width}px` : null,
                "max-width": this.width ? `${this.width}px` : null,
                "max-height": this.height ? `${this.height}px` : null
            }
        }, null)]), [
            [N("animate-onscroll"), {
                className: `animate__animated ${this.animateClassName}`,
                isEnabled: this.isEnabledAnimation
            }]
        ])
    }
});
export {
    W as I
};