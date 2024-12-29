import {
    ez as P,
    d as q,
    w,
    x as R,
    h as p,
    eq as d,
    ag as S,
    c as n,
    l as b,
    ab as v,
    C as B,
    y as E,
    eA as g
} from "./DTouipjj.js";
import {
    F as I
} from "./B4PKYeeb.js";
import {
    i as V
} from "./1IXFzUcJ.js";
import {
    s as _
} from "./CaeezY1z.js";
import {
    S as j
} from "./OrTNUIWI.js";
import {
    R as A,
    D as O
} from "./C7Z4lVx2.js";
import {
    C as $
} from "./CpJAUb91.js";
import {
    i as U
} from "./DfxtQXwc.js";
import {
    i as Y
} from "./D6uAcWDZ.js";
const H = e => e < P,
    G = e => e === !0 || e === !1 || toString.call(e) === "[object Boolean]",
    z = /^[0-9.,]+$/,
    W = e => z.test(e),
    J = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
    K = e => e == null ? void 0 : e.match(J);

function C(e) {
    return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !B(e)
}
const oe = q({
        name: "FormField",
        props: {
            field: {
                type: Object,
                required: !0
            },
            index: {
                type: Number,
                default: 0
            },
            error: {
                type: String
            },
            maxlength: {
                type: Number
            },
            isDisabled: {
                type: Boolean,
                default: !1
            },
            disabledDate: {
                type: Function
            },
            disabledTime: {
                type: Function
            },
            isEnabledLabel: {
                type: Boolean,
                default: !0
            },
            isEnabledPlaceholder: {
                type: Boolean,
                default: !0
            },
            datePickerPopuClass: {
                type: String
            },
            timePickerOptions: {
                type: Object
            },
            apiRequestName: {
                type: [String, Object, Function]
            },
            apiRequestFilter: {
                type: Object,
                default: () => new I
            },
            apiMapFields: {
                type: Object
            }
        },
        emits: ["input", "change", "fetch", "update:modelValue"],
        setup(e, {
            emit: s
        }) {
            const {
                t: c
            } = w(), u = R(null), m = p(() => {
                const t = e.field,
                    a = d[t.type];
                if (a) return `kmb_site_${a==null?void 0:a.toLocaleLowerCase()}_${t.key}`;
                const {
                    key: l
                } = t;
                return `kmb_site_field_${l}`
            }), f = p(() => {
                var a;
                const t = d[e.field.type];
                return t ? `kmb-site-field-group kmb-site-${(a=t==null?void 0:t.toLocaleLowerCase())==null?void 0:a.replace(/\s/g,"-")}-group` : "kmb-site-field-group kmb-field-group"
            }), h = p(() => {
                if (!e.isEnabledPlaceholder) return;
                const {
                    lczText: t,
                    label: a,
                    isMandatory: l
                } = e.field, i = (t == null ? void 0 : t.lczValue) || a;
                return i ? `${_(i)}${l?"*":""}` : null
            }), T = () => {
                try {
                    const {
                        type: t,
                        options: a
                    } = e.field;
                    t == d.Checkbox && (v(a) || (V(e.field.value) || (e.field.value = []), a.forEach(l => {
                        const {
                            lczText: i,
                            label: r,
                            isEnabled: o
                        } = l;
                        if (o) {
                            const x = (i == null ? void 0 : i.lczValue) || r;
                            e.field.value.findIndex(N => N == x) == -1 && e.field.value.push(x)
                        }
                    })))
                } catch (t) {
                    console.log(t)
                }
            }, k = t => {
                const {
                    label: a,
                    lczText: l
                } = t || {};
                return (l == null ? void 0 : l.lczValue) || a || "Option"
            }, y = t => {
                try {
                    s("change", t), s("input", t), s("update:modelValue", t)
                } catch (a) {
                    console.log(a)
                }
            }, F = (t, a) => {
                try {
                    const l = a || t.target.value;
                    u.value = l, s("input", l), s("update:modelValue", l)
                } catch (l) {
                    console.log(l)
                }
            }, L = (t, a) => {
                try {
                    V(e.field.value) || (e.field.value = []);
                    const l = e.field.value,
                        {
                            lczText: i,
                            label: r
                        } = a,
                        o = (i == null ? void 0 : i.lczValue) || r;
                    t ? l.push(o) : l.splice(l.indexOf(o), 1)
                } catch (l) {
                    console.log(l)
                }
            }, M = () => {
                if (e.field) {
                    const {
                        type: t,
                        options: a,
                        isMandatory: l
                    } = e.field;
                    if (t == d.TextArea) return n("textarea", {
                        class: b("kmb-site-form-control textarea-field", {
                            required: l,
                            "kmb-field-has-error": e.error,
                            "kmb-filed-has-value": u.value
                        }),
                        name: m.value,
                        placeholder: h.value,
                        onInput: F,
                        maxlength: e.maxlength
                    }, null);
                    if (t == d.RadioButton) {
                        if (!v(a)) return n("div", {
                            class: b("kmb-widget-form-radio-group", {
                                required: l,
                                "kmb-field-has-error": e.error
                            })
                        }, [a.map(i => {
                            const r = k(i);
                            return n(A, {
                                inputValue: r,
                                modelValue: e.field.value,
                                "onUpdate:modelValue": o => e.field.value = o,
                                onChange: o => y(o),
                                class: "mb-4"
                            }, C(r) ? r : {
                                default: () => [r]
                            })
                        })])
                    } else if (t == d.Checkbox) {
                        if (!v(a)) return n("div", {
                            class: b("kmb-widget-form-checkbox-group", {
                                required: l,
                                "kmb-field-has-error": e.error
                            })
                        }, [a.map(i => {
                            const r = k(i);
                            return n($, {
                                modelValue: i.isEnabled,
                                "onUpdate:modelValue": o => i.isEnabled = o,
                                onChange: o => L(o, i),
                                class: "mb-4"
                            }, C(r) ? r : {
                                default: () => [r]
                            })
                        })])
                    } else if (t == d.DropDown) {
                        const i = e.isEnabledLabel ? {} : {
                            placeholder: h.value
                        };
                        return n(j, {
                            modelValue: e.field.value,
                            texts: i,
                            apiRequestName: e.apiRequestName,
                            apiMapFields: e.apiMapFields,
                            apiRequestFilter: e.apiRequestFilter,
                            class: b("kmb-site-form-select", {
                                required: l,
                                "kmb-field-has-error": e.error
                            }),
                            onChange: r => {
                                y(r)
                            },
                            onFetch: r => {
                                s("fetch", r)
                            }
                        }, {
                            default: () => [a == null ? void 0 : a.map(r => {
                                const o = k(r);
                                return n("option", {
                                    value: r.id ? r.id : o
                                }, [o])
                            })]
                        })
                    }
                    return t == d.Date ? n("div", {
                        class: "kmb-widget-date-field"
                    }, [n(O, {
                        modelValue: e.field.value,
                        "onUpdate:modelValue": i => e.field.value = i,
                        disabledDate: e.disabledDate || H,
                        isDisabled: e.isDisabled,
                        popupClass: e.datePickerPopuClass,
                        placeholder: e.isEnabledLabel ? "DD / MM / YYYY" : h.value,
                        onChange: i => {
                            y(i)
                        }
                    }, null)]) : t == d.Time ? n("div", {
                        class: "kmb-widget-date-field kmb-widget-data-time-field"
                    }, [n(O, {
                        modelValue: e.field.value,
                        "onUpdate:modelValue": i => e.field.value = i,
                        type: "time",
                        format: "hh:mm a",
                        valueType: "format",
                        placeholder: e.isEnabledLabel ? c("labels.timeFormat") : h.value,
                        disabledTime: e.disabledTime,
                        isDisabled: e.isDisabled,
                        timePickerOptions: e.timePickerOptions,
                        popupClass: e.datePickerPopuClass,
                        onChange: i => {
                            y(i)
                        }
                    }, {
                        default: () => [e.timePickerOptions && n("template", {
                            slot: "kmb-picker-header"
                        }, [n("div", {
                            class: "kmb-time-picker-header font-semibold text-blue-darkest text-base py-2"
                        }, [c("labels.aviliableTimeSlots")])])]
                    })]) : n("input", {
                        class: b("kmb-site-form-control input-field", {
                            required: l,
                            "kmb-field-has-error": e.error,
                            "kmb-filed-has-value": u.value
                        }),
                        type: "text",
                        name: m.value,
                        placeholder: h.value,
                        onInput: F,
                        maxlength: e.maxlength
                    }, null)
                }
            };
            return S(() => {
                T()
            }), {
                fieldTypeGroupName: f,
                renderField: M
            }
        },
        render() {
            return n("div", {
                class: b("kmb-widget-field kmb-site-field relative", this.fieldTypeGroupName)
            }, [this.renderField(), this.error && n("span", {
                class: "field-error-message kmb-error-msg kmb-widget-text-caption3"
            }, [this.$t(this.error)])])
        }
    }),
    Q = [d.Time, d.Date, d.DropDown, d.Checkbox, d.RadioButton],
    D = e => {
        if (!e || !(e != null && e.isMandatory)) return;
        const {
            value: s,
            validationRule: c,
            type: u
        } = e;
        if (E(s) || G(s) && s == !1) return "messages.pleaseFillMandatoryField";
        if (Q.includes(u)) return null;
        if (c == g.Email) {
            if (!U(s)) return "messages.theFieldIsIncorrect"
        } else if (c == g.NumbersOnly) {
            if (!W(s)) return "messages.theFieldMustBeOnlyNumber"
        } else if (c == g.Phone) {
            if (!K(s)) return "messages.theFieldMustBeOnlyNumber"
        } else if (c == g.LettersOnly && !Y(s)) return "messages.theFieldMustBeOnlyLetters";
        return null
    },
    de = e => {
        const s = {};
        return e && (Array.isArray(e) ? e.forEach((u, m) => {
            const f = D(u);
            f && (s[u.key || m] = f)
        }) : Object.keys(e).forEach(u => {
            const m = e[u],
                f = D(m);
            f && (s[u] = f)
        })), {
            isValid: E(s),
            errors: s
        }
    };
export {
    oe as F, de as a, H as n
};