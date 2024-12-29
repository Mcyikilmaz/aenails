import {
    d as D,
    b as S,
    e as M,
    x as y,
    h as V,
    k as N,
    aX as I,
    c as s,
    dz as T,
    dy as P,
    l as g,
    dV as x,
    ei as O,
    eq as u,
    eT as U,
    eU as _
} from "./DTouipjj.js";
import {
    s as z
} from "./CaeezY1z.js";
import {
    F as G,
    a as $
} from "./CPceHiJ5.js";
import {
    W as A
} from "./DchZZv4k.js";
import {
    B as H
} from "./Da-Zh8W_.js";
import {
    F as j
} from "./Dgre5qvW.js";
import {
    M as q
} from "./BcDAoa_v.js";
var w = (t => (t[t.ContactForm = 1] = "ContactForm", t[t.CallBackForm = 2] = "CallBackForm", t))(w || {});
const R = [u.Checkbox, u.RadioButton, u.DropDown],
    F = t => {
        console.log(t)
    },
    te = D({
        name: "ContactForm",
        props: {
            formClassName: {
                type: String,
                default: ""
            },
            contactForm: {
                type: Object,
                required: !0
            },
            isEnabledLabel: {
                type: Boolean,
                default: !0
            },
            isEnabledPlaceholder: {
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
            },
            formType: {
                type: Number,
                default: w.ContactForm
            }
        },
        setup(t) {
            const {
                $api: f
            } = S(), b = M(), n = y(!1), m = y(null), d = y({}), c = y(void 0), h = V(() => {
                var o, e;
                return N((o = t.contactForm) == null ? void 0 : o.style) ? new A : (e = t.contactForm) == null ? void 0 : e.style
            }), p = o => {
                const {
                    label: e,
                    lczText: a,
                    type: i
                } = o;
                return t.isEnabledLabel ? (a == null ? void 0 : a.lczValue) || e : t.isEnabledPlaceholder && i === u.DropDown ? null : R.includes(i) ? (a == null ? void 0 : a.lczValue) || e : null
            }, l = () => {
                var o;
                try {
                    (o = t.contactForm.fields) == null || o.forEach(e => {
                        var a;
                        e.value = null, e.type == u.Checkbox && ((a = e.options) == null || a.forEach(i => {
                            i.isEnabled = !1
                        }))
                    }), m.value && m.value.reset()
                } catch (e) {
                    F(e)
                }
            }, r = async o => {
                try {
                    o.preventDefault();
                    const {
                        fields: e,
                        receiverEmail: a
                    } = t.contactForm ? ? {}, i = $(e);
                    if (d.value = i.errors, i.isValid) {
                        n.value = !0;
                        const C = e == null ? void 0 : e.map(v => {
                            const {
                                type: E,
                                value: L,
                                label: B,
                                lczText: k
                            } = v;
                            return new U({
                                type: E,
                                value: L,
                                label: z((k == null ? void 0 : k.lczValue) || B)
                            })
                        });
                        await f.post(new _({
                            receiverEmail: a,
                            formData: C,
                            siteId: b
                        })) && (l(), c.value = !0)
                    }
                } catch (e) {
                    F(e)
                } finally {
                    n.value = !1
                }
            };
            return I(() => {
                c.value = void 0
            }), {
                form: m,
                style: h,
                errors: d,
                isLoading: n,
                isShowConfirmationModal: c,
                formGroupLabel: p,
                onSubmitForm: r
            }
        },
        render() {
            var t, f, b, n, m, d, c, h, p;
            return s("div", {
                class: g("kmb-site-default-form-wrap kmb-widget-contact-form", this.formType == w.ContactForm ? "widget-contact-form" : "widget-call-back-form", {
                    "kmb-widget-form-border-bottom-fields": !this.isEnabledLabel,
                    "kmb-widget-form-has-label-color": !!((t = this.style) != null && t.labelColor),
                    "kmb-widget-form-has-field-color": !!((f = this.style) != null && f.fieldColor),
                    "kmb-widget-form-has-border-color": !!((b = this.style) != null && b.fieldBorderColor)
                }),
                style: {
                    "--label-color": (n = this.style) == null ? void 0 : n.labelColor,
                    "--field-color": (m = this.style) == null ? void 0 : m.fieldColor,
                    "--field-border-color": (d = this.style) == null ? void 0 : d.fieldBorderColor,
                    "--field-background-color": (c = this.style) == null ? void 0 : c.fieldBackgroundColor
                }
            }, [T(s("div", {
                class: "kmb-widget-contact-form-wrap"
            }, [s("form", {
                ref: "form",
                class: g("kmb-widget-form kmb-contact-form", this.formClassName),
                onSubmit: async l => await this.onSubmitForm(l)
            }, [s("div", {
                class: "kmb-widget-row items-end"
            }, [(p = (h = this.contactForm) == null ? void 0 : h.fields) == null ? void 0 : p.map((l, r) => {
                const {
                    key: o,
                    isMandatory: e
                } = l;
                return s("div", {
                    class: "kmb-widget-col kmb-widget-form-group w-full",
                    key: o || r
                }, [s(j, {
                    label: this.formGroupLabel(l),
                    isMandatory: e
                }, {
                    default: () => [s(G, {
                        modelValue: l.value,
                        "onUpdate:modelValue": a => l.value = a,
                        field: l,
                        error: this.errors[o || r],
                        isEnabledLabel: this.isEnabledLabel,
                        isEnabledPlaceholder: this.isEnabledPlaceholder
                    }, null)]
                })])
            })]), s(H, {
                class: "kmb-widget-btn-group-center"
            }, {
                default: () => [s(x, {
                    isLoading: this.isLoading,
                    type: "submit",
                    class: "kmb-submit-form-btn",
                    value: this.contactForm.button,
                    elementType: O.Primary
                }, null)]
            })])]), [
                [P("animate-onscroll"), {
                    className: `animate__animated ${this.animateClassName}`,
                    isEnabled: this.isEnabledAnimation
                }]
            ]), s(q, {
                modalType: "xsDefault",
                isOpened: this.isShowConfirmationModal,
                classes: "kmb-site-confirmation-modal kmb-site-contact-us-widget-confirmation-modal",
                onClose: () => {
                    this.isShowConfirmationModal = !1
                }
            }, {
                default: () => {
                    var l, r, o, e;
                    return [s("div", {
                        class: "kmb-site-confirmation-modal-wrap kmb-site-contact-us-confirmation-wrap text-center"
                    }, [s("h2", {
                        class: "kmb-site-confirmation-modal-title kmb-widget-title-h2",
                        innerHTML: ((r = (l = this.contactForm.confirmationTitle) == null ? void 0 : l.lczText) == null ? void 0 : r.lczValue) || this.$t("messages.thankYouForContactingUs")
                    }, null), s("div", {
                        class: "kmb-site-confirmation-modal-form-message kmb-success-sumbit-form-message kmb-widget-text-body2",
                        innerHTML: ((e = (o = this.contactForm.confirmationMessage) == null ? void 0 : o.lczText) == null ? void 0 : e.lczValue) || this.$t("messages.youEillReceiveDetailsInEmail")
                    }, null)])]
                }
            })])
        }
    });
export {
    te as C, w as W
};