var l = Object.defineProperty;
var i = (s, e, t) => e in s ? l(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t;
var a = (s, e, t) => i(s, typeof e != "symbol" ? e + "" : e, t);
import {
    ek as c,
    dP as r,
    D as u,
    W as d
} from "./DTouipjj.js";
class T extends c {
    constructor(t) {
        super(t);
        a(this, "lczText", new r({
            lczValue: "SubTitle"
        }));
        a(this, "tag", "h3");
        a(this, "maxChars", u[d.Subtitle]);
        Object.assign(this, t)
    }
}
export {
    T as W
};