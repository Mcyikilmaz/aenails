import {
    d as l,
    a as o,
    h as i,
    c as r
} from "./DTouipjj.js";
import {
    t as d
} from "./C14uxwHB.js";
const m = e => e ? /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/i.test(e) : !1,
    g = l({
        name: "Price",
        props: {
            value: {
                type: [String, Number],
                required: !0
            },
            site: {
                type: Object
            },
            currency: {
                type: String
            },
            startSign: {
                type: String,
                default: null
            },
            isEnabled: {
                type: Boolean,
                default: !0
            },
            isEnabledCurrency: {
                type: Boolean,
                default: !0
            },
            isDisplayCurrency: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const s = o(),
                a = i(() => s.getSite),
                u = i(() => {
                    if (e.value) {
                        if (m(e.value)) return e.value;
                        const t = e.value.toString().replace(/[^\d,.]/g, "");
                        return parseFloat(t || 0).toString()
                    }
                    return d(0).toString()
                }),
                c = i(() => {
                    var t, n;
                    return e.isDisplayCurrency ? ((t = a.value) == null ? void 0 : t.widgetDisplayCurrencyCode) || e.currency || "USD" : e.currency || ((n = a.value) == null ? void 0 : n.paymentCurrencyCode) || "USD"
                });
            return {
                amount: u,
                displayCurrency: c
            }
        },
        render() {
            if (this.isEnabled) return r("div", {
                class: "kmb-widget-price kmb-item-price kmb-site-default-dir"
            }, [this.startSign && r("span", {
                class: "kmb-item-start-sign"
            }, [this.startSign]), r("span", {
                class: "kmb-site-price-amount kmb-widget-price-amount kmb-item-price-amount",
                innerHTML: this.amount
            }, null), this.isEnabledCurrency && r("span", {
                class: "kmb-widget-price-currency kmb-item-currency ml-1"
            }, [this.displayCurrency])])
        }
    });
export {
    g as P
};