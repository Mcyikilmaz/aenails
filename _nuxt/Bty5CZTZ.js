import {
    d as l,
    h as o,
    c,
    l as u
} from "./DTouipjj.js";
import {
    W as s
} from "./DwDAZxOX.js";
const B = l({
    name: "WidgetWrap",
    props: {
        settings: {
            type: Object
        },
        isEnabledBackgroundColor: {
            type: Boolean,
            default: !0
        }
    },
    setup(e) {
        const d = o(() => {
                var t;
                return `${((t=e.settings)==null?void 0:t.widgetTopPadding)??s.Top}px`
            }),
            a = o(() => {
                var t;
                return `${((t=e.settings)==null?void 0:t.widgetBottomPadding)??s.Bottom}px`
            }),
            r = o(() => {
                var t;
                return (t = e.settings) == null ? void 0 : t.widgetTextColor
            }),
            g = o(() => {
                var t;
                return (t = e.settings) == null ? void 0 : t.widgetSecondaryBgColor
            }),
            i = o(() => {
                var t;
                return (t = e.settings) == null ? void 0 : t.widgetBackgroundColor
            }),
            n = o(() => {
                var t;
                return (t = e.settings) == null ? void 0 : t.widgetCoverBackgroundColor
            });
        return {
            style: o(() => {
                const t = {
                    paddingTop: d.value,
                    paddingBottom: a.value,
                    color: r.value,
                    "--widget-color": r.value,
                    "--widget-bg": i.value,
                    "--widget-secondary-bg": g.value
                };
                return e.isEnabledBackgroundColor && (t.backgroundColor = i.value), t
            }),
            widgetTextColor: r,
            widgetBackgroundColor: i,
            widgetSecondaryBgColor: g,
            widgetCoverBackgroundColor: n
        }
    },
    render() {
        var e, d;
        return c("div", {
            class: u("kmb-page-widget", {
                "kmb-site-widget-has-color": !!this.widgetTextColor,
                "kmb-site-widget-has-background-color": !!this.widgetBackgroundColor,
                "kmb-site-widget-has-secondary-bg": !!this.widgetSecondaryBgColor,
                "kmb-site-widget-has-image-cover": !!this.widgetCoverBackgroundColor
            }),
            style: this.style
        }, [((e = this.$slots) == null ? void 0 : e.default) && ((d = this.$slots) == null ? void 0 : d.default({}))])
    }
});
export {
    B as W
};