var i = Object.defineProperty;
var l = (a, e, s) => e in a ? i(a, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : a[e] = s;
var t = (a, e, s) => l(a, typeof e != "symbol" ? e + "" : e, s);
import {
    el as n,
    dP as c,
    D as r,
    W as o
} from "./DTouipjj.js";
class g extends n {
    constructor(s) {
        super(s);
        t(this, "lczText", new c({
            lczValue: "Nam at lectus urna duis convallis convallis tellus integer feugiat scelerisque."
        }));
        t(this, "isEnabled", !0);
        t(this, "maxChars", r[o.Description]);
        t(this, "isTextAnimationEnabled", !1);
        Object.assign(this, s)
    }
}
export {
    g as W
};