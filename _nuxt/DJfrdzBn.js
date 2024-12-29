var o = Object.defineProperty;
var s = (r, e, t) => e in r ? o(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : r[e] = t;
var a = (r, e, t) => s(r, typeof e != "symbol" ? e + "" : e, t);
import {
    dP as i,
    d_ as l,
    ei as n
} from "./DTouipjj.js";
import {
    W as u
} from "./DHnrZBvq.js";
class c extends u {
    constructor(t) {
        super(t);
        a(this, "lczText", new i({
            lczValue: "Button"
        }));
        a(this, "urlType", l.Page);
        a(this, "elementType", n.Primary);
        Object.assign(this, t)
    }
}
export {
    c as W
};