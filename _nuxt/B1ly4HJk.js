var Te = Object.defineProperty;
var Ie = (e, n, l) => n in e ? Te(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: l
}) : e[n] = l;
var R = (e, n, l) => Ie(e, typeof n != "symbol" ? n + "" : n, l);
import {
    em as De,
    k as Se,
    en as K,
    eo as Be,
    ep as Le,
    d as Ee,
    b as Me,
    e as qe,
    x as H,
    h as Q,
    y as W,
    c as T,
    l as ae,
    eq as x,
    dV as Ce,
    ei as Ae,
    I as Pe,
    er as ce,
    E as c,
    es as ue,
    et as me,
    eu as de,
    ev as Re,
    ew as ie,
    ex as oe,
    ey as He
} from "./DTouipjj.js";
import {
    F as G
} from "./B4PKYeeb.js";
import {
    F as s
} from "./lrIEU_yr.js";
import {
    n as Ne,
    F as re,
    a as Ve
} from "./CPceHiJ5.js";
import {
    W as xe
} from "./DchZZv4k.js";
import {
    s as Ye
} from "./CaeezY1z.js";
import "./D8g3dv9t.js";
import {
    d as B
} from "./7p9R_JUH.js";
import {
    B as je
} from "./Da-Zh8W_.js";
import {
    F as ne
} from "./Dgre5qvW.js";
import {
    M as Ue
} from "./BcDAoa_v.js";
class We {
    constructor(n, l = new De) {
        this.dayOfWeek = n, this.availableTime = l
    }
}
const Ge = e => {
    if (!e) return [];
    const n = [];
    return Object.entries(e).forEach(([l, F]) => {
        F.isOpened && n.push(new We(l, F))
    }), n
};
var fe = (e => (e[e.sun = 0] = "sun", e[e.mon = 1] = "mon", e[e.tue = 2] = "tue", e[e.wed = 3] = "wed", e[e.thu = 4] = "thu", e[e.fri = 5] = "fri", e[e.sat = 6] = "sat", e))(fe || {});
const be = (e, n) => {
        if (!(!e || Ne(e))) return n.find(l => +fe[l.dayOfWeek] == e.getDay())
    },
    $e = (e, n, l, F) => {
        const y = B(l),
            d = B(F).startOf("day").add(y.hour(), "hours").add(y.minute(), "minutes").add(y.second(), "seconds"),
            I = e == null ? void 0 : e.some(g => {
                const o = B(g);
                return d.isSame(o, "minute")
            });
        if (Se(n)) return I;
        const p = e == null ? void 0 : e.some(g => {
            const {
                durationHours: o,
                durationMinutes: i,
                scheduledAt: u,
                breakAfterHours: w,
                breakAfterMinutes: h,
                breakBeforeHours: v,
                breakBeforeMinutes: M
            } = g, b = B(u), E = b.add(o, "hour").add(i, "minute");
            if (d.isSame(b) || d.isAfter(b) && d.isBefore(E)) return !0;
            const C = b.subtract(v, "hour").subtract(M, "minute");
            if (d.isAfter(C) && d.isBefore(b)) return !0;
            const _ = E.add(w, "hour").add(h, "minute");
            return !!(d.isAfter(b) && d.isBefore(_))
        });
        return I || p
    },
    $ = e => e < 10 ? +("0" + e) : e,
    O = (e, n) => {
        try {
            return (n == null ? void 0 : n.toLowerCase()) === "am" ? e === 12 ? 0 : e : e === 12 ? 12 : e + 12
        } catch (l) {
            console.log(l)
        }
    },
    Oe = (e, n, l, F, y) => {
        var I;
        const d = (I = be(l, n)) == null ? void 0 : I.availableTime;
        if (new Date().getTime() > new Date(e).getTime() && l.getDate() == new Date().getDate() || $e(F, y, e, l)) return !1;
        if (l && d) {
            const [p, g, o] = [new Date, new Date, new Date(e)], i = O(d.startHour, d.startTimeFormat), u = O(d.endHour, d.endTimeFormat);
            return o.setSeconds(5), p.setHours(i, $(d.startMinute), 0), g.setHours(u, $(d.endMinute), 10), o.getTime() >= p.getTime() && o.getTime() <= g.getTime()
        }
    },
    _e = Oe,
    ze = {
        [K.Days]: "day",
        [K.Weeks]: "week",
        [K.Months]: "month"
    },
    Je = (e, n, l, F) => {
        var w;
        const y = B(),
            {
                maxUpfrontPeriodValue: d,
                maxUpfrontPeriodType: I
            } = l || new Be,
            {
                startsAt: p,
                endsAt: g
            } = (F == null ? void 0 : F.vacation) || new Le,
            o = y.add(d, ze[I]),
            i = B(e),
            u = (i.isAfter(p) || i.isSame(p)) && (i.isBefore(g) || i.isSame(g));
        if ((i.isBefore(o) || i.isSame(y)) && !u) {
            const h = (w = be(e, n)) == null ? void 0 : w.availableTime;
            if (e && h) {
                if (B(e).isAfter(B(), "day") || B(e).isSame(B(), "day")) return !0;
                const [v, M, b] = [new Date(e), new Date(e), new Date], E = O(h.startHour, h.startTimeFormat), C = O(h.endHour, h.endTimeFormat);
                return v.setHours(E, $(h.startMinute), 0), M.setHours(C, $(h.endMinute), 10), b.getTime() >= v.getTime() && b.getTime() <= M.getTime()
            }
        }
    },
    Ke = Je,
    le = [s.Location, s.Service, s.StaffMember],
    Qe = [x.Checkbox, x.RadioButton],
    Xe = [s.FirstName, s.LastName, s.Email, s.Phone, s.Message, s.Date, s.Time, s.Location, s.Service, s.StaffMember],
    Ze = () => Pe({
        [s.Location]: new X({
            apiRequestName: ce,
            apiRequestFilter: new G({
                take: 200,
                orderBy: c("id"),
                fields: [c("id"), c("workingTime"), c("title")].join(",")
            }),
            apiMapFields: {
                value: c("id"),
                label: c("title")
            }
        }),
        [s.Service]: new X({
            apiRequestName: ue,
            apiRequestFilter: new G({
                take: 200,
                orderBy: c("id"),
                fields: [c("id"), c("title"), c("price"), c("maxUpfrontPeriodValue"), c("maxUpfrontPeriodType"), c("durationMinutes"), c("durationHours"), c("breakBeforeHours"), c("breakBeforeMinutes"), c("breakAfterHours"), c("breakAfterMinutes")].join(",")
            }),
            apiMapFields: {
                value: c("id"),
                label: c("title")
            }
        }),
        [s.StaffMember]: new X({
            apiRequestName: me,
            apiRequestFilter: new G({
                take: 200,
                orderBy: c("id"),
                fields: [c("id"), c("atLocations"), c("firstName"), c("vacation"), c("lastName")].join(",")
            }),
            apiMapFields: {
                value: c("id"),
                label: c("firstName")
            }
        })
    });
class et {
    constructor(n) {
        R(this, "locations", []);
        R(this, "workers", []);
        R(this, "services", []);
        R(this, "request", new de);
        Object.assign(this, n)
    }
}
class X {
    constructor(n) {
        R(this, "apiRequestFilter", new G);
        R(this, "apiMapFields", {
            value: "id",
            label: "title"
        });
        Object.assign(this, n)
    }
}
const bt = Ee({
    name: "BookingContactForm",
    props: {
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
        }
    },
    setup(e) {
        const {
            $api: n
        } = Me(), l = qe(), F = H({}), y = H([]), d = H(!1), I = H(!1), p = Ze(), g = H(null), o = H([]), i = H(new et), u = Q(() => {
            var t, a;
            return W((t = e.contactForm) == null ? void 0 : t.style) ? new xe : (a = e.contactForm) == null ? void 0 : a.style
        }), w = Q(() => {
            var r, m, f, k;
            const {
                workerId: t
            } = i.value.request;
            return ((m = (r = i.value) == null ? void 0 : r.workers) == null ? void 0 : m.find(D => D.id == t)) || ((k = (f = i.value) == null ? void 0 : f.workers) == null ? void 0 : k[0])
        }), h = Q(() => {
            var r, m, f, k;
            const {
                serviceId: t
            } = i.value.request;
            return ((m = (r = i.value) == null ? void 0 : r.services) == null ? void 0 : m.find(D => D.id == t)) || ((k = (f = i.value) == null ? void 0 : f.services) == null ? void 0 : k[0])
        }), v = t => {
            var a, r, m, f;
            try {
                return t == s.Time ? !((m = (r = (a = e.contactForm) == null ? void 0 : a.fields) == null ? void 0 : r.find(D => D.name == s.Date)) == null ? void 0 : m.value) : t == s.Date ? !((f = o.value) != null && f.length) : !1
            } catch {}
        }, M = t => Qe.includes(t.type) || e.isEnabledLabel, b = (t, a) => {
            try {
                const {
                    request: r
                } = i.value;
                r.locationId = a == s.Location ? t : r.locationId, r.serviceId = a == s.Service ? t : r.serviceId, r.workerId = a == s.StaffMember ? t : r.workerId
            } catch {}
        }, E = () => {
            var t;
            try {
                const a = p[s.Location];
                if (a) {
                    const {
                        workerId: r,
                        serviceId: m
                    } = (t = i.value) == null ? void 0 : t.request;
                    a.apiRequestFilter.queryParameters = new ce({
                        serviceIds: [m],
                        workerIds: [r],
                        siteId: l
                    })
                }
            } catch {}
        }, C = () => {
            var t;
            try {
                const a = p[s.StaffMember];
                if (a) {
                    const {
                        locationId: r,
                        serviceId: m
                    } = (t = i.value) == null ? void 0 : t.request;
                    a.apiRequestFilter.queryParameters = new me({
                        serviceIds: [m],
                        locationIds: [r],
                        siteId: l
                    })
                }
            } catch {}
        }, _ = () => {
            var t;
            try {
                const a = p[s.Service];
                if (a) {
                    const {
                        locationId: r,
                        workerId: m
                    } = (t = i.value) == null ? void 0 : t.request;
                    a.apiRequestFilter.queryParameters = new ue({
                        workerIds: [m],
                        locationIds: [r],
                        siteId: l
                    })
                }
            } catch {}
        }, ve = t => {
            try {
                if (t == s.Service) {
                    const {
                        serviceId: a
                    } = i.value.request;
                    if (!W(i.value.services)) {
                        const r = i.value.services.find(m => m.id == a);
                        if (r) {
                            const {
                                price: m,
                                durationHours: f,
                                durationMinutes: k
                            } = r;
                            m && (i.value.request.price = m), i.value.request.duration = `${f||0} h ${k||"00"} min`
                        }
                    }
                }
            } catch {}
        }, he = () => {
            var t, a, r, m, f;
            try {
                const {
                    locationId: k,
                    workerId: D
                } = (t = i.value) == null ? void 0 : t.request, A = (r = (a = i.value) == null ? void 0 : a.workers) == null ? void 0 : r.find(L => L.id == D), q = (f = (m = i.value) == null ? void 0 : m.locations) == null ? void 0 : f.find(L => L.id == k);
                if (q && A) {
                    const {
                        workingTime: L
                    } = q;
                    o.value = Ge(L)
                } else o.value = []
            } catch {}
        }, ke = (t, a) => {
            try {
                if (a == s.Location) {
                    i.value.locations = (t == null ? void 0 : t.results) || [];
                    return
                }
                if (a == s.StaffMember) {
                    i.value.workers = (t == null ? void 0 : t.results) || [];
                    return
                }
                if (a == s.Service) {
                    i.value.services = (t == null ? void 0 : t.results) || [];
                    return
                }
            } catch {}
        }, Fe = (t, a) => {
            try {
                b(t, a), E(), C(), _(), ve(a), he(), pe()
            } catch {}
        }, ge = () => {
            try {
                e.contactForm.fields.forEach(t => {
                    t.value = t.type == x.Checkbox ? !1 : null
                }), W(e.contactForm.customFields) || e.contactForm.customFields.forEach(t => {
                    var a;
                    t.value = t.type == x.Checkbox ? !1 : null, t.type == x.Checkbox && ((a = t.options) == null || a.forEach(r => {
                        r.isEnabled = !1
                    }))
                }), g && g.value.reset()
            } catch {}
        }, pe = async () => {
            var t;
            try {
                const {
                    locationId: a,
                    workerId: r
                } = i.value.request, m = await n.get(new Re({
                    workerId: r,
                    locationIds: [a],
                    siteId: l
                }));
                y.value = (t = m.results.filter(f => {
                    if (f.status == ie.Approved) return f
                })) == null ? void 0 : t.map(f => {
                    var D, A, q, L;
                    const k = ((A = (D = i.value) == null ? void 0 : D.services) == null ? void 0 : A.find(N => (N == null ? void 0 : N.id) == (f == null ? void 0 : f.serviceId))) || ((L = (q = i.value) == null ? void 0 : q.services) == null ? void 0 : L[0]);
                    return { ...f,
                        ...k
                    }
                })
            } catch {}
        };
        return {
            form: g,
            style: u,
            errors: F,
            filters: p,
            isLoading: d,
            bookedDate: y,
            isShowMessage: I,
            bookingDetails: i,
            selectedWorker: w,
            selectedService: h,
            availableDaysOfWeekList: o,
            onSubmitForm: async t => {
                var a, r, m, f, k, D, A, q, L, N, Z;
                try {
                    t.preventDefault();
                    const ee = [...e.contactForm.fields, ...e.contactForm.customFields],
                        te = Ve(ee);
                    if (F.value = te.errors, te.isValid) {
                        d.value = !0;
                        const S = {},
                            j = [];
                        (a = e.contactForm.fields) == null || a.forEach(U => {
                            const {
                                name: V,
                                value: Y,
                                type: z,
                                label: J,
                                lczText: P
                            } = U;
                            S[V] = {
                                value: Y
                            }, Xe.includes(V) || j.push(new oe({
                                value: Y,
                                type: z,
                                label: (P == null ? void 0 : P.lczValue) || J
                            }))
                        }), W(e.contactForm.customFields) || e.contactForm.customFields.forEach(U => {
                            const {
                                name: V,
                                value: Y,
                                type: z,
                                label: J,
                                lczText: P
                            } = U;
                            V == s.Phone ? S[V] || (S[V] = {
                                value: Y
                            }) : j.push(new oe({
                                value: Y,
                                type: z,
                                label: Ye((P == null ? void 0 : P.lczValue) || J)
                            }))
                        });
                        const we = (r = S[s.Date]) == null ? void 0 : r.value,
                            ye = (m = S[s.Time]) == null ? void 0 : m.value,
                            se = B(we + " " + ye, "DD/MM/YYYY hh:mm a").toISOString();
                        B().isBefore(se) && await n.post(new de({
                            siteId: l,
                            email: (f = S[s.Email]) == null ? void 0 : f.value,
                            firstName: (k = S[s.FirstName]) == null ? void 0 : k.value,
                            lastName: (D = S[s.LastName]) == null ? void 0 : D.value,
                            phone: (A = S[s.Phone]) == null ? void 0 : A.value,
                            note: (q = S[s.Message]) == null ? void 0 : q.value,
                            locationId: (L = S[s.Location]) == null ? void 0 : L.value,
                            serviceId: (N = S[s.Service]) == null ? void 0 : N.value,
                            workerId: (Z = S[s.StaffMember]) == null ? void 0 : Z.value,
                            scheduledAt: se,
                            customFields: j.length ? j : null,
                            price: i.value.request.price,
                            source: He.Client,
                            status: ie.Pending
                        })) && (I.value = !0, ge())
                    }
                } catch {} finally {
                    d.value = !1
                }
            },
            isDisabledField: v,
            onFetchBookingData: ke,
            onChangeBookingData: Fe,
            isEnabledCustomFieldLabel: M
        }
    },
    render() {
        var e, n, l, F, y, d, I, p, g;
        return T("div", {
            class: ae("kmb-site-default-form-wrap kmb-widget-booking-contact-form", {
                "kmb-widget-form-border-bottom-fields": !this.isEnabledLabel,
                "kmb-widget-form-has-label-color": !!((e = this.style) != null && e.labelColor),
                "kmb-widget-form-has-field-color": !!((n = this.style) != null && n.fieldColor),
                "kmb-widget-form-has-border-color": !!((l = this.style) != null && l.fieldBorderColor)
            }),
            style: {
                "--label-color": (F = this.style) == null ? void 0 : F.labelColor,
                "--field-color": (y = this.style) == null ? void 0 : y.fieldColor,
                "--field-border-color": (d = this.style) == null ? void 0 : d.fieldBorderColor,
                "--field-background-color": (I = this.style) == null ? void 0 : I.fieldBackgroundColor
            }
        }, [T("form", {
            ref: "form",
            class: "kmb-widget-form kmb-widget-booking-form kmb-widget-contact-form",
            onSubmit: async o => await this.onSubmitForm(o)
        }, [T("div", {
            class: "kmb-widget-row"
        }, [(p = this.contactForm.fields) == null ? void 0 : p.map(o => {
            const {
                key: i,
                name: u,
                label: w,
                lczText: h
            } = o, v = this.filters[u], M = this.isEnabledCustomFieldLabel(o) ? (h == null ? void 0 : h.lczValue) || w : null;
            return T("div", {
                class: ae("kmb-widget-col kmb-widget-form-group", {
                    "w-1-2": u == s.FirstName || u == s.LastName || u == s.Time || u == s.Date,
                    "w-full": u != s.Date && u != s.Time && u != s.FirstName && u != s.LastName
                })
            }, [T(ne, {
                label: M,
                class: "kmb-widget-form-group"
            }, {
                default: () => [T(re, {
                    field: o,
                    modelValue: o.value,
                    "onUpdate:modelValue": b => o.value = b,
                    error: this.errors[i],
                    isEnabledLabel: this.isEnabledCustomFieldLabel(o),
                    isEnabledPlaceholder: !this.isEnabledCustomFieldLabel(o) && this.isEnabledPlaceholder,
                    apiRequestName: v == null ? void 0 : v.apiRequestName,
                    apiMapFields: v == null ? void 0 : v.apiMapFields,
                    apiRequestFilter: v == null ? void 0 : v.apiRequestFilter,
                    onChange: b => {
                        le.includes(u) && this.onChangeBookingData(b, u)
                    },
                    onFetch: b => {
                        le.includes(u) && this.onFetchBookingData(b, u)
                    },
                    isDisabled: this.isDisabledField(u),
                    disabledDate: b => !Ke(b, this.availableDaysOfWeekList, this.selectedService, this.selectedWorker),
                    disabledTime: b => {
                        var E;
                        return !_e(b, this.availableDaysOfWeekList, B((E = this.contactForm.fields.find(C => +C.type == s.Date)) == null ? void 0 : E.value, "DD/MM/YYYY").toDate(), this.bookedDate, this.selectedService)
                    },
                    datePickerPopuClass: o.type == x.Date ? "kmb-site-booking-form-date-datepicker-popup" : "kmb-site-booking-form-date-time-popup",
                    timePickerOptions: {
                        start: "00:00",
                        step: "00:15",
                        end: "23:45"
                    }
                }, null)]
            })])
        }), (g = this.contactForm.customFields) == null ? void 0 : g.map(o => {
            const {
                key: i,
                label: u,
                lczText: w
            } = o, h = this.isEnabledCustomFieldLabel(o) ? (w == null ? void 0 : w.lczValue) || u : null;
            return T(ne, {
                label: h,
                class: "w-full kmb-widget-col kmb-widget-form-group kmb-custom-field-group"
            }, {
                default: () => [T(re, {
                    field: o,
                    modelValue: o.value,
                    "onUpdate:modelValue": v => o.value = v,
                    error: this.errors[i],
                    isEnabledLabel: this.isEnabledCustomFieldLabel(o),
                    isEnabledPlaceholder: !this.isEnabledCustomFieldLabel(o) && this.isEnabledPlaceholder,
                    disabledDate: () => !1,
                    timePickerOptions: {
                        start: "00:00",
                        step: "00:15",
                        end: "23:45"
                    }
                }, null)]
            })
        })]), T(je, {
            class: "kmb-widget-btn-group-center"
        }, {
            default: () => [T(Ce, {
                isLoading: this.isLoading,
                type: "submit",
                class: "kmb-submit-form-btn",
                value: this.contactForm.button,
                elementType: Ae.Primary
            }, null)]
        })]), T(Ue, {
            modalType: "xsDefault",
            isOpened: this.isShowMessage,
            classes: "kmb-site-confirmation-modal kmb-site-pop-up-widget kmb-site-pop-up-widget-confirmation-modal",
            onClose: o => {
                this.isShowMessage = o
            }
        }, {
            default: () => {
                var o, i, u, w;
                return [T("div", {
                    class: "kmb-site-confirmation-modal-wrap kmb-site-subscribe-confirmation-wrap text-center"
                }, [T("h2", {
                    class: "kmb-site-confirmation-modal-title kmb-widget-title-h2",
                    innerHTML: ((i = (o = this.contactForm.confirmationTitle) == null ? void 0 : o.lczText) == null ? void 0 : i.lczValue) || this.$t("messages.tnankYouForRegistering")
                }, null), T("div", {
                    class: "kmb-site-confirmation-modal-form-message kmb-success-sumbit-form-message kmb-widget-text-body2",
                    innerHTML: ((w = (u = this.contactForm.confirmationMessage) == null ? void 0 : u.lczText) == null ? void 0 : w.lczValue) || this.$t("messages.youEillReceiveDetailsInEmail")
                }, null)])]
            }
        })])
    }
});
export {
    bt as B
};