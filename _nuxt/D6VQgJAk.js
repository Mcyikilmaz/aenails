import {
    d as a,
    h as l,
    k as d,
    c as e
} from "./DTouipjj.js";
import {
    C as r
} from "./DGj8rNO4.js";
import {
    T as o
} from "./sFqkYj9i.js";
import {
    S as m
} from "./BdcEM9KQ.js";
import {
    D as u
} from "./CpA-KWho.js";
const D = a({
    name: "CommonTitles",
    props: {
        settings: {
            type: Object
        },
        widgetIndex: {
            type: Number,
            default: 0
        },
        isEnabledSubTitle: {
            type: Boolean,
            default: !0
        },
        isEnabledDescription: {
            type: Boolean,
            default: !0
        },
        isEnabledDivider: {
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
        }
    },
    setup(t) {
        return {
            isEnabledTitleDivider: l(() => {
                var i, s, n;
                return t.isEnabledDivider ? d((i = t.settings) == null ? void 0 : i.isEnabledDivider) ? !0 : (n = (s = t.settings) == null ? void 0 : s.isEnabledDivider) == null ? void 0 : n.isEnabled : !1
            })
        }
    },
    render() {
        return e(r, {
            settings: this.settings,
            animateClassName: this.animateClassName,
            isEnabledAnimation: this.isEnabledAnimation,
            class: "kmb-widget-titles-info"
        }, {
            default: () => [this.isEnabledSubTitle && e(m, {
                value: this.settings.subtitle
            }, null), e(o, {
                value: this.settings.title,
                widgetIndex: this.widgetIndex,
                isEnabledDivider: this.isEnabledTitleDivider
            }, null), this.isEnabledDescription && e(u, {
                value: this.settings.description
            }, null)]
        })
    }
});
export {
    D as C
};