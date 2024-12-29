import {
    d as o,
    dG as u,
    w as d,
    h as a,
    k as c,
    dK as i,
    c as m,
    l as b
} from "./DTouipjj.js";
const O = o({
    name: "FooterColumnTitle",
    props: {
        site: {
            type: Object,
            required: !0
        },
        type: {
            type: Number,
            default: u.Contacts
        }
    },
    setup(t) {
        const {
            t: r
        } = d(), l = a(() => {
            var e;
            return ((e = t.site.footerSettings) == null ? void 0 : e.enabledSettings) || {}
        });
        return {
            labelOverride: a(() => {
                var e, n, s;
                return c(l.value) ? r(i[t.type]) : ((s = (n = (e = l.value) == null ? void 0 : e[t.type]) == null ? void 0 : n.labelOverride) == null ? void 0 : s.lczValue) || r(i[t.type])
            })
        }
    },
    render() {
        return m("div", {
            class: b("footer-col-title kmb-widget-title-h4"),
            innerHTML: this.labelOverride
        }, null)
    }
});
export {
    O as F
};