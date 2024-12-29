import {
    d as oe,
    b as ue,
    x as u,
    eD as de,
    h as o,
    y,
    ag as pe,
    aX as he,
    e3 as B,
    eE as me,
    c as s,
    dz as V,
    eF as ve,
    dy as fe,
    l as O,
    e5 as be,
    ea as ge
} from "./DTouipjj.js";
import {
    F as ye
} from "./B4PKYeeb.js";
import {
    L as ke
} from "./Rj87BO-F.js";
const L = {
        placeholder: "select",
        empty: "No results",
        selectAll: "Select all",
        selectNone: "Select none",
        remoteSearch: "Search"
    },
    T = l => l ? l.reduce((r, i) => {
        const d = i.type;
        return d === "option" ? r.push(Object.assign({
            label: i.children[0] || "Option"
        }, i.props)) : d === "optgroup" && r.push(Object.assign({
            options: T(i.children)
        }, i.props)), r
    }, []) : [],
    xe = oe({
        name: "Select",
        props: {
            modelValue: {
                type: [String, Number]
            },
            label: {
                type: String
            },
            error: {
                type: String
            },
            success: {
                type: String
            },
            multiple: {
                type: Boolean,
                default: !1
            },
            search: {
                type: Boolean,
                default: !1
            },
            remote: {
                type: Boolean,
                default: !1
            },
            controls: {
                type: Boolean,
                default: !1
            },
            collapseHeaders: {
                type: Boolean,
                default: !1
            },
            isDisabled: {
                type: Boolean,
                default: !1
            },
            texts: {
                type: Object,
                default: () => L
            },
            displayMax: {
                type: Number,
                default: 0
            },
            displayText: {
                type: String,
                default: "{0} items selected"
            },
            options: {
                type: Array,
                default: () => []
            },
            apiRequestName: {
                type: [String, Object, Function]
            },
            apiRequestFilter: {
                type: Object,
                default: () => new ye
            },
            apiMapFields: {
                type: Object
            }
        },
        emits: ["input", "change", "fetch", "update:modelValue"],
        setup(l, {
            emit: r
        }) {
            const {
                $api: i
            } = ue(), d = u(""), x = u({}), R = u(null), j = u(!1), p = u(!1), D = u(!1), f = u(!1), b = u(l.options), c = u(l.modelValue), {
                proxy: h
            } = de(), m = o(() => ({ ...L,
                ...l.texts
            })), M = o(() => I(C.value)), v = o(() => {
                let e = {};
                if (c.value != null) {
                    let t = c.value;
                    l.multiple || (t = [c.value]), Array.isArray(t) && (e = t.reduce((a, n) => (M.value[n] && Object.assign(a, {
                        [n]: M.value[n]
                    }), a), {}))
                }
                return e
            }), k = o(() => Object.values(v.value).map(e => e.label)), q = o(() => l.displayMax && l.displayMax < k.value.length ? l.displayText.replace("{0}", `${k.value.length}`) : k.value.join(", ")), C = o(() => {
                var t;
                return (t = b.value) == null ? void 0 : t.reduce((a, n) => (n.options ? (a.push({
                    header: n.label
                }), a.push(...n.options.map(g => Object.assign(g, {
                    parentHeader: n.label
                })))) : a.push(n), a), [])
            }), w = o(() => C.value.filter(G)), E = o(() => l.search && w.value.length === 0 && d.value), $ = o(() => new RegExp(`${d.value}`, "ig")), P = o(() => y(k.value) ? m.value.placeholder : q.value), U = () => {
                b.value = l.options
            }, z = async () => {
                try {
                    if (!l.apiRequestName || !l.apiMapFields) return;
                    D.value = !0;
                    const e = l.apiRequestName,
                        {
                            value: t,
                            label: a
                        } = l.apiMapFields,
                        {
                            orderBy: n,
                            take: g,
                            skip: ce,
                            fields: S,
                            queryParameters: ie
                        } = l.apiRequestFilter,
                        N = await i.get(new e({
                            include: "total",
                            orderBy: n,
                            take: g,
                            skip: ce,
                            ...ie,
                            ...(S == null ? void 0 : S.length) && {
                                fields: S
                            }
                        }));
                    if (r("fetch", N), y(N.results)) return;
                    b.value = N.results.map(H => ({
                        value: H[t || "id"],
                        label: H[a || "title"]
                    }))
                } catch (e) {
                    console.log(e)
                } finally {
                    D.value = !1
                }
            }, I = (e, t = {}) => {
                try {
                    return e.reduce((a, n) => (n.header || Object.assign(a, {
                        [n.value]: n
                    }), a), t)
                } catch (a) {
                    console.log(a)
                }
            }, X = e => {
                try {
                    return e ? e.match($.value) !== null : !0
                } catch (t) {
                    console.log(t)
                }
            }, G = e => {
                try {
                    const t = !e.parentHeader || !x.value[e.parentHeader],
                        a = X(e.label || e.header);
                    return t && (l.remote || a)
                } catch (t) {
                    console.log(t)
                }
            }, J = (e, t) => {
                try {
                    if (e.preventDefault(), M.value[t].disabled) {
                        e.stopPropagation();
                        return
                    }
                    let a;
                    l.multiple ? (e.stopPropagation(), a = Object.keys(v.value).map(n => v.value[n].value), v.value[t] ? a = a.filter(n => n !== t) : a.push(t)) : (a = t, p.value = !1), c.value = a, r("input", c.value), r("update:modelValue", c.value), r("change", c.value)
                } catch (a) {
                    console.log(a)
                }
            }, K = () => {
                var e;
                try {
                    f.value = !0, c.value = [].concat(c.value || [], (e = w.value) == null ? void 0 : e.filter(t => !t.header && !t.disabled).map(t => t.value))
                } catch (t) {
                    console.log(t)
                }
            }, Q = () => {
                try {
                    f.value = !1, c.value = []
                } catch (e) {
                    console.log(e)
                }
            }, W = () => {
                p.value = !1
            }, F = () => {
                try {
                    if (!(h != null && h.$el) || !R.value) return;
                    const e = R.value.getBoundingClientRect(),
                        t = h == null ? void 0 : h.$el.getBoundingClientRect(),
                        n = (window.innerHeight || document.documentElement.clientHeight) - t.bottom,
                        g = t.top;
                    n < e.height && g > n ? j.value = !0 : j.value = !1
                } catch (e) {
                    console.log(e)
                }
            }, A = () => {
                try {
                    p.value && window.requestAnimationFrame(() => {
                        F()
                    })
                } catch (e) {
                    console.log(e)
                }
            }, Y = async () => {
                try {
                    if (l.isDisabled) return;
                    p.value = !p.value, p.value && (be(() => {
                        F()
                    }), await z())
                } catch (e) {
                    console.log(e)
                }
            }, Z = () => {
                var e, t;
                if (l.multiple && l.controls) return s("li", {
                    class: O("kmb-select-controls", {
                        "selected-option": f.value
                    })
                }, [s("button", {
                    class: "kmb-select-all-options",
                    onClick: () => {
                        f.value ? Q() : K()
                    }
                }, [s("i", {
                    class: "multiple-option-checkbox"
                }, null), f.value ? (e = m.value) == null ? void 0 : e.selectNone : (t = m.value) == null ? void 0 : t.selectAll])])
            }, _ = () => {
                if (l.search) return s("li", {
                    class: "kmb-select-search"
                }, [s("div", {
                    class: "kmb-select-search-group"
                }, [s("i", {
                    class: "kmb-site-icon-search"
                }, null), V(s("input", {
                    class: "kmb-site-form-control",
                    "onUpdate:modelValue": e => d.value = e,
                    placeholder: m.value.remoteSearch,
                    autofocus: !0,
                    disabled: l.isDisabled
                }, null), [
                    [ge, d.value]
                ])])])
            }, ee = () => s("li", {
                class: "empty-result-control"
            }, [s("span", {
                class: "text-muted"
            }, [m.value.remoteSearch])]), te = () => s("li", {
                class: "kmb-site-select-option-item empty-result"
            }, [s("span", {
                class: "text-muted"
            }, [m.value.empty])]), le = () => s("li", {
                class: "kmb-site-select-option-item kmb-site-select-option-loading-item p-2"
            }, [s("i", {
                class: "kmb-site-icon kmb-site-icon-loading kmb-site-icon-spiner-loading"
            }, null)]), se = e => e.header ? s("span", null, [e.header, s("a", {
                title: "Toggle",
                href: "#"
            }, [l.collapseHeaders && s("i", {
                class: O("kmb-site-icon", {
                    "glyphicon-chevron-down": !x.value[e.header],
                    "icon-right-open": x.value[e.header]
                })
            }, null)])]) : s("a", {
                href: "#",
                onClick: t => J(t, e.value)
            }, [!!v.value[e.value] && !l.multiple && s("i", {
                class: "kmb-site-icon kmb-site-icon-ok"
            }, null), l.multiple && s("i", {
                class: "multiple-option-checkbox"
            }, null), e.label]), ae = () => {
                var e;
                return s("ul", {
                    class: "select-dropdown-list"
                }, [(e = w.value) == null ? void 0 : e.map((t, a) => s("li", {
                    key: a || t.header,
                    "data-value": t.value,
                    class: O({
                        "dropdown-header": t.header,
                        "selected-option": l.multiple && !!v.value[t.value],
                        disabled: t.disabled,
                        "has-header": !!t.parentHeader
                    })
                }, [se(t)]))])
            }, ne = () => l.search && !d.value && l.remote ? ee() : D.value ? le() : E.value || y(b.value) ? te() : ae(), re = () => {
                if (p.value) return s("ul", {
                    class: "kmb-select-drop",
                    ref: "dropdown"
                }, [_(), Z(), ne()])
            };
            return pe(() => {
                window && window.addEventListener("scroll", A)
            }), he(() => {
                window && window.removeEventListener("scroll", A)
            }), B(() => l.modelValue, e => {
                c.value = e
            }), B(() => l.options, U, {
                deep: !0
            }), {
                isDropdownTop: j,
                isOpen: p,
                dropdown: R,
                filtered: w,
                selectValue: c,
                placeholder: P,
                dataOptions: b,
                onOpenSelect: Y,
                onCloseSelect: W,
                renderSelectDrop: re
            }
        },
        render() {
            var l;
            if (y(this.options) && this.$slots.default) {
                const r = me(this.$slots.default());
                if (!y(r)) {
                    const i = T(r);
                    this.dataOptions = i
                }
            }
            return s("div", {
                class: O("kmb-site-component kmb-site-select kmb-site-field-group kmb-field-group", {
                    droup: this.isDropdownTop,
                    open: this.isOpen,
                    "kmb-disabled-select": this.isDisabled,
                    "kmb-multiple-select": this.multiple,
                    "kmb-field-group-has-error": this.error,
                    "kmb-field-group-has-success kmb-field-group-has-success-select": this.success
                })
            }, [V(s("select", {
                "onUpdate:modelValue": r => this.selectValue = r,
                multiple: this.multiple,
                class: "hidden",
                disabled: this.isDisabled
            }, [(l = this.filtered) == null ? void 0 : l.map((r, i) => s("option", {
                key: i,
                value: r.value,
                disabled: r.disabled
            }, [r.label]))]), [
                [ve, this.selectValue]
            ]), this.label && s(ke, {
                label: this.label
            }, null), V(s("div", {
                class: "kmb-site-select-container kmb-select-container"
            }, [s("button", {
                type: "button",
                class: "kmb-select-toggle",
                onClick: () => this.onOpenSelect()
            }, [s("span", {
                class: "placeholder"
            }, [this.placeholder]), s("span", {
                class: "kmb-caret"
            }, [s("i", {
                class: "kmb-site-icon-angle-down"
            }, null)])]), this.renderSelectDrop()]), [
                [fe("click-outside"), this.onCloseSelect]
            ]), this.error && s("span", {
                class: "kmb-error-msg kmb-widget-text-caption3"
            }, [this.error])])
        }
    });
export {
    xe as S
};