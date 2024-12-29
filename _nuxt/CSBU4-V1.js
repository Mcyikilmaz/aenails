import {
    u as N,
    _ as R
} from "./DKKV0rm8.js";
import {
    d as V,
    a as _,
    x as o,
    h as l,
    aW as D,
    k as W,
    aC as A,
    ag as F,
    aX as T,
    c as s,
    l as h
} from "./DTouipjj.js";
import {
    g as X
} from "./ChJXfJ3s.js";
const G = a => a > 600 ? a * .03 : a > 400 ? a * .025 : a * .015,
    Z = V({
        name: "BackgroundImage",
        props: {
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
            isMobile: {
                type: Boolean,
                default: !1
            },
            isEnabledParallaxEffect: {
                type: Boolean,
                default: !0
            }
        },
        setup(a, {
            slots: r
        }) {
            const w = _(),
                u = o(null),
                y = o(0),
                n = o(null),
                c = o(null),
                d = o(!1),
                B = l(() => w.getSite),
                p = l(() => w.isMobileDevice),
                m = l(() => X(a.widget, a.imageResize, a.index)),
                k = l(() => D(a.image, m.value)),
                z = l(() => {
                    const e = k.value,
                        t = N();
                    return t ? t(e, {
                        format: "webp",
                        quality: 90
                    }) : e
                }),
                C = l(() => {
                    var e, t;
                    return (e = a.image) != null && e.alt ? a.image.alt : ((t = B.value) == null ? void 0 : t.title) || "hocoos"
                }),
                O = l(() => {
                    var e;
                    return ((e = m.value) == null ? void 0 : e.width) || null
                }),
                g = l(() => {
                    var e;
                    return ((e = m.value) == null ? void 0 : e.height) || null
                }),
                P = l(() => ({
                    backgroundImage: `url(${z.value})`,
                    minHeight: `${g.value}px`
                })),
                S = l(() => {
                    const e = {};
                    return e.transform = `translate3d(0, ${y.value}%, 0) scale(1.3)`, e
                }),
                $ = l(() => {
                    var t;
                    if (W(a.settings)) return !1;
                    const e = ((t = a.settings) == null ? void 0 : t.imageStyle) || {};
                    return !A(e == null ? void 0 : e.isEnabledBlur)
                }),
                f = l(() => {
                    var e;
                    return !a.isEnabledParallaxEffect || p.value ? !1 : ((e = a.settings) == null ? void 0 : e.isEnabledParallaxEffect) || !1
                }),
                j = () => {
                    try {
                        n.value = new IntersectionObserver(M, {
                            threshold: .5
                        })
                    } catch (e) {
                        console.log(e)
                    }
                },
                M = e => {
                    try {
                        e == null || e.forEach(t => {
                            t.isIntersecting ? d.value = !0 : d.value = !1
                        })
                    } catch (t) {
                        console.log(t)
                    }
                },
                U = (e, t, b, i, L) => (e - t) / (b - t) * (L - i) + i,
                v = () => {
                    var e;
                    try {
                        if (q()) {
                            const t = (e = u.value) == null ? void 0 : e.getBoundingClientRect(),
                                b = t.top,
                                i = t.height;
                            c.value == null && (c.value = G(i)), y.value = U(b, 0, i, 0, -c.value)
                        }
                    } catch (t) {
                        console.log(t)
                    }
                },
                q = () => u.value && n.value ? (n.value.observe(u.value), d.value) : !1,
                I = () => {
                    try {
                        c.value = null, v()
                    } catch (e) {
                        console.log(e)
                    }
                },
                E = () => {
                    try {
                        window == null || window.requestAnimationFrame(() => {
                            v()
                        })
                    } catch (e) {
                        console.log(e)
                    }
                },
                x = (e, t = {}) => s(R, {
                    src: k.value,
                    alt: C.value,
                    quality: 90,
                    loading: "lazy",
                    densities: "x1",
                    provider: "customImgProv",
                    style: t,
                    class: h("kmb-bg-widget-image-item", e),
                    "data-width": O.value,
                    "data-height": g.value
                }, null),
                H = () => a.isMobile ? s("div", {
                    class: "kmb-widget-bg-image-content"
                }, [x("kmb-widget-bg-mobile-image w-full"), r.default && s("div", {
                    class: "kmb-widget-bg-image-mobile-content w-full"
                }, [r.default({})])]) : s("div", {
                    class: "kmb-widget-bg-image-content"
                }, [s("div", {
                    class: "kmb-widget-bg-image",
                    style: P.value,
                    "data-height": g.value
                }, [r.default && r.default({})])]);
            return F(() => {
                f.value && (j(), v(), window == null || window.addEventListener("scroll", E, !1), window == null || window.addEventListener("resize", I, !1))
            }), T(() => {
                f.value && (window == null || window.removeEventListener("scroll", E, !1), window == null || window.removeEventListener("resize", I, !1), n.value && n.value.disconnect())
            }), {
                root: u,
                height: g,
                hasCustomBlur: $,
                parallaxBgStyle: S,
                isEnabledBgParallaxEffect: f,
                renderImage: x,
                renderBackgroundImageContent: H
            }
        },
        render() {
            var a, r;
            return this.isEnabledBgParallaxEffect ? s("div", {
                ref: "root",
                class: h("kmb-widget-bg-image-item kmb-parallax-wrapper", {
                    "kmb-widget-bg-has-custom-blur": this.hasCustomBlur
                }),
                style: `min-height: ${this.height}px;`
            }, [s("div", {
                class: "kmb-widget-bg-image",
                "data-height": this.height
            }, [this.renderImage("kmb-widget-bg-parallax-image", this.parallaxBgStyle)]), s("div", {
                class: "kmb-widget-bg-image-content"
            }, [((a = this.$slots) == null ? void 0 : a.default) && ((r = this.$slots) == null ? void 0 : r.default({}))])]) : s("div", {
                ref: "root",
                class: h("kmb-widget-bg-image-item", {
                    "kmb-widget-bg-has-custom-blur": this.hasCustomBlur
                })
            }, [this.renderBackgroundImageContent()])
        }
    });
export {
    Z as B
};