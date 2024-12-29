import {
    d as n,
    h as a,
    ak as s,
    l,
    dy as r,
    dz as m
} from "./DTouipjj.js";
import {
    i as d
} from "./UUMGnSYt.js";
const c = n({
    name: "DynamicElement",
    props: {
        value: {
            type: String
        },
        tag: {
            type: String,
            default: "div"
        },
        title: {
            type: String
        },
        maxChars: {
            type: Number,
            default: 120
        },
        isEnabled: {
            type: Boolean,
            default: !0
        },
        isEnabledAlignClass: {
            type: Boolean,
            default: !1
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
    setup(e) {
        const t = a(() => e.isEnabled ? !d(e.value) : !1),
            i = a(() => {
                if (e.isEnabledAlignClass) return ""
            });
        return {
            isEnabledElement: t,
            titleAlign: i
        }
    },
    render() {
        if (!this.isEnabledElement) return;
        const e = s(this.tag, {
            class: l("kmb-widget-rich-text", this.titleAlign),
            title: this.title,
            "data-max-chars": this.maxChars,
            innerHTML: this.value
        });
        if (this.isEnabledAnimation) {
            const t = r("animate-onscroll");
            return m(e, [
                [t, {
                    className: `animate__animated ${this.animateClassName}`,
                    isEnabled: this.isEnabledAnimation
                }]
            ])
        }
        return e
    }
});
export {
    c as D
};