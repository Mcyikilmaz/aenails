var t = Object.defineProperty;
var s = (e, l, o) => l in e ? t(e, l, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
}) : e[l] = o;
var r = (e, l, o) => s(e, typeof l != "symbol" ? l + "" : l, o);
import {
    eB as a
} from "./DTouipjj.js";
class c extends a {
    constructor(o) {
        super(o);
        r(this, "labelColor", null);
        r(this, "fieldColor", null);
        r(this, "fieldBorderColor", null);
        r(this, "fieldBackgroundColor", null);
        Object.assign(this, o)
    }
}
export {
    c as W
};