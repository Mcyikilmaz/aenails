var u = Object.defineProperty;
var s = (n, t, l) => t in n ? u(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: l
}) : n[t] = l;
var e = (n, t, l) => s(n, typeof t != "symbol" ? t + "" : t, l);
import {
    dX as o,
    dP as d,
    dY as i,
    dZ as p,
    d_ as a,
    d$ as g,
    F as r,
    e0 as y
} from "./DTouipjj.js";
class B extends o {
    constructor(l) {
        super(l);
        e(this, "lczText", new d({
            lczValue: "Button"
        }));
        e(this, "type", i.Button);
        e(this, "labelType", p.Text);
        e(this, "urlType", a.Page);
        e(this, "contactType", a.Email);
        e(this, "elementType", null);
        e(this, "formRefenceType", null);
        e(this, "page", new g);
        e(this, "defaultLinkingPageType", r.AboutUs);
        e(this, "externalLink", null);
        e(this, "email", null);
        e(this, "phone", null);
        e(this, "file", null);
        e(this, "isTargetBlank", !1);
        e(this, "isEnabledIcon", !1);
        e(this, "isEnabled", !0);
        e(this, "popUp", null);
        e(this, "style", new y);
        e(this, "backgroundColor", null);
        Object.assign(this, l)
    }
}
export {
    B as W
};