import {
    dx as s,
    d as r,
    h as i,
    y as l,
    c as o,
    l as u
} from "./DTouipjj.js";
import {
    g as d
} from "./DxYf3bfi.js";
const C = (e, t = !0) => {
        try {
            return d(e, t) === s.Wide
        } catch (a) {
            console.log(a)
        }
    },
    f = r({
        name: "WidgetContainer",
        props: {
            settings: {
                type: Object
            },
            fullContainerClassName: {
                type: String
            },
            defaultContainerClassName: {
                type: String,
                default: "kmb-widget-container"
            },
            isFullContainerByDefault: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const t = i(() => {
                var n;
                return C((n = e.settings) == null ? void 0 : n.widgetContainerType, e.isFullContainerByDefault)
            });
            return {
                className: i(() => t.value ? l(e.fullContainerClassName) ? "kmb-widget-container-fluid" : `kmb-widget-container-fluid ${e.fullContainerClassName}` : e.defaultContainerClassName)
            }
        },
        render() {
            return o("div", {
                class: u(this.className)
            }, [this.$slots.default && this.$slots.default({})])
        }
    });
export {
    f as W, C as i
};