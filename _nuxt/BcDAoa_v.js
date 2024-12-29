import {
    _ as N
} from "./CxoEgsqs.js";
import {
    d as S,
    x as u,
    h as f,
    e3 as L,
    ag as A,
    aX as E,
    c as n,
    e4 as T,
    l as M,
    e5 as p
} from "./DTouipjj.js";
import {
    A as r
} from "./6SHmCfzU.js";
const w = (t, i, m = "body") => {
        try {
            if (m && i) {
                const a = (document == null ? void 0 : document.querySelector(m)) || document.body;
                if (a && (a != null && a.classList)) {
                    const {
                        classList: s
                    } = a;
                    t ? s.add(i) : s.remove(i)
                }
            }
        } catch (a) {
            console.log(a)
        }
    },
    c = "kmb-site-modal-default",
    B = {
        default: [c],
        smDefault: [c, "kmb-site-modal-sm-default"],
        xsDefault: [c, "kmb-site-modal-xs-default"],
        alert: [c, "kmb-site-modal-alert-default"]
    },
    $ = S({
        name: "Modal",
        props: {
            isOpened: {
                type: Boolean
            },
            modalType: {
                type: String,
                default: "default"
            },
            title: {
                type: String
            },
            container: {
                type: String
            },
            overlayClassNames: {
                type: String
            },
            animationEnterClassName: {
                type: String
            },
            animationLeaveClassName: {
                type: String
            },
            classes: {
                type: [String, Array],
                default: []
            },
            styles: {
                type: Object
            },
            isEnableToogleAnimation: {
                type: Boolean,
                default: !0
            },
            isDisabledOutsideClick: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["open", "close", "mounted"],
        setup(t, {
            emit: i
        }) {
            const m = u(null),
                a = u(null),
                s = u(!1),
                k = f(() => {
                    if (t.isEnableToogleAnimation == !1) return "";
                    const e = [r.Animated];
                    return t.animationEnterClassName ? e.push(t.animationEnterClassName) : e.push(r.BounceIn), e.join(" ")
                }),
                h = f(() => {
                    if (t.isEnableToogleAnimation == !1) return "";
                    const e = [r.Animated];
                    return t.animationLeaveClassName ? e.push(t.animationLeaveClassName) : e.push(r.BounceOut), e.join(" ")
                }),
                C = f(() => {
                    let e = B[t.modalType] || ["kmb-site-modal-default"];
                    return e = [...e, t.classes], s.value ? ["kmb-site-modal kmb-open-modal", e] : ["kmb-site-modal", "kmb-site-modal-default"]
                }),
                g = e => {
                    try {
                        if (e.target !== e.currentTarget || t.isDisabledOutsideClick) return;
                        d()
                    } catch (l) {
                        console.log(l)
                    }
                },
                v = e => {
                    try {
                        s.value && (e == null ? void 0 : e.keyCode) == 27 && d()
                    } catch (l) {
                        console.log(l)
                    }
                },
                y = e => {
                    try {
                        m.value = setTimeout(() => {
                            w(e, "kmb-body-site-modal-open")
                        }, 300)
                    } catch (l) {
                        console.log(l)
                    }
                },
                b = () => {
                    try {
                        a.value = Math.floor(Date.now() * Math.random()), s.value = !0, i("open", s.value), y(s.value), p(() => {
                            var l;
                            const e = document == null ? void 0 : document.querySelector(t.container || `#kmb_site_modal_${a.value||"default"}`);
                            if (e) {
                                const o = document == null ? void 0 : document.createElement("div");
                                o == null || o.setAttribute("id", `kmb_site_modal_overlay_${a.value}`), o == null || o.classList.add("kmb-site-modal-overlay", "kmb-site-modal-overlay-in"), t.overlayClassNames && (o == null || o.classList.add((l = t.overlayClassNames) == null ? void 0 : l.trim())), e.after(o)
                            }
                        })
                    } catch (e) {
                        console.log(e)
                    }
                },
                d = () => {
                    try {
                        s.value && (a.value = null, s.value = !1, _(), y(s.value), i("close", s.value))
                    } catch (e) {
                        console.log(e)
                    }
                },
                _ = () => {
                    {
                        const e = a.value ? `#kmb_site_modal_overlay_${a.value}` : ".kmb-site-modal-overlay",
                            l = document == null ? void 0 : document.querySelector(e);
                        l && l.remove()
                    }
                };
            return L(() => t.isOpened, e => {
                t.isOpened != null && (e ? b() : d())
            }, {
                immediate: !0
            }), A(() => {
                document == null || document.addEventListener("keydown", v), i("mounted")
            }), E(() => {
                d(), clearTimeout(m.value), document == null || document.removeEventListener("keydown", v)
            }), {
                modalId: a,
                modalClass: C,
                isShowModal: s,
                animationEnterClassNames: k,
                animationLeaveClassNames: h,
                show: b,
                hide: d,
                onHandleBackgroundClick: g
            }
        },
        render() {
            return n(N, null, {
                default: () => [n(T, {
                    name: "kmb-modal-fade",
                    "enter-active-class": this.animationEnterClassNames,
                    "leave-active-class": this.animationLeaveClassNames,
                    "data-visible": this.isShowModal
                }, {
                    default: () => [this.isShowModal && n("div", {
                        class: this.modalClass,
                        style: this.styles,
                        id: `kmb_site_modal_${this.modalId||"default"}`,
                        onMousedown: t => this.onHandleBackgroundClick(t),
                        onTouchstart: t => this.onHandleBackgroundClick(t)
                    }, [n("div", {
                        class: "kmb-site-modal-dialog"
                    }, [n("div", {
                        class: M("kmb-site-modal-content", {
                            "kmb-modal-without-title": !this.title
                        }),
                        ref: "modalContent"
                    }, [n("div", {
                        class: "kmb-site-modal-header text-center"
                    }, [this.title && n("p", {
                        class: "kmb-site-modal-title"
                    }, [this.title]), n("button", {
                        class: "kmb-site-close-modal-btn",
                        "aria-label": "close",
                        onClick: t => {
                            t.preventDefault(), this.hide()
                        }
                    }, [n("i", {
                        class: "kmb-site-icon kmb-site-icon-close"
                    }, null)])]), n("div", {
                        class: "kmb-site-modal-body"
                    }, [this.$slots.default && this.$slots.default({})])])])])]
                })]
            })
        }
    });
export {
    $ as M
};