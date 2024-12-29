import {
    d as h,
    x as m,
    h as u,
    c as i,
    dz as f,
    eI as k,
    l as n,
    y as g
} from "./DTouipjj.js";
const C = h({
    name: "Checkbox",
    props: {
        id: {
            type: [String, Number]
        },
        modelValue: {
            type: [Object, Boolean, Array, String, Number],
            default: () => ({})
        },
        label: {
            type: [String, Number, Object],
            default: () => ({})
        },
        error: {
            type: String
        },
        checked: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        name: {
            type: String,
            default: "kmb-site-checkbox"
        },
        labelClassName: {
            type: String,
            default: ""
        },
        trueLabel: {
            type: [String, Number],
            required: !1
        },
        falseLabel: {
            type: [String, Number],
            required: !1
        }
    },
    emits: ["input", "change", "update:modelValue"],
    setup(e, {
        emit: t
    }) {
        const s = m(!1),
            l = u({
                get: () => e.modelValue !== void 0 ? e.modelValue : s.value,
                set: a => {
                    e.modelValue !== void 0 ? (t("input", a), t("update:modelValue", a)) : s.value = a
                }
            }),
            c = u(() => typeof l.value == "boolean" ? l.value : Array.isArray(l.value) ? l.value.includes(e.label) : l.value === e.trueLabel),
            o = () => {
                try {
                    Array.isArray(l.value) && !l.value.includes(e.label) ? l.value.push(e.label) : l.value = e.trueLabel || !0
                } catch (a) {
                    console.log(a)
                }
            },
            b = a => {
                try {
                    const r = a.target;
                    let d;
                    r.checked ? d = e.trueLabel === void 0 ? !0 : e.trueLabel : d = e.falseLabel === void 0 ? !1 : e.falseLabel, t("change", d, e.id, a)
                } catch (r) {
                    console.log(r)
                }
            };
        return e.checked && o(), {
            model: l,
            isChecked: c,
            handleChange: b
        }
    },
    render() {
        var e, t;
        return i("label", {
            class: n("kmb-site-checkbox", {
                "kmb-is-checked": this.isChecked,
                "kmb-is-disabled": this.disabled,
                "kmb-field-group-has-error kmb-site-checkbox-has-error": this.error
            })
        }, [f(i("input", {
            type: "checkbox",
            value: this.label,
            "onUpdate:modelValue": s => this.model = s,
            checked: this.isChecked,
            onChange: s => this.handleChange(s),
            disabled: this.disabled,
            id: this.id
        }, null), [
            [k, this.model]
        ]), i("span", {
            class: n("kmb-input-label kmb-site-checkbox-box-label", this.labelClassName)
        }, [(e = this.$slots) != null && e.default ? (t = this.$slots) == null ? void 0 : t.default({}) : g(this.label) ? null : this.label]), this.error && i("span", {
            class: "kmb-error-msg kmb-widget-text-caption3"
        }, [this.error])])
    }
});
export {
    C
};