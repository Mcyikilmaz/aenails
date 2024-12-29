var t = Object.defineProperty;
var a = (i, r, s) => r in i ? t(i, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : i[r] = s;
var e = (i, r, s) => a(i, typeof r != "symbol" ? r + "" : r, s);
import {
    aT as o
} from "./DTouipjj.js";
class y extends o {
    constructor(s) {
        super(s);
        e(this, "new");
        e(this, "queryParameters", {});
        e(this, "conditions", []);
        e(this, "arrayFields", []);
        e(this, "fields");
        e(this, "take", 10);
        e(this, "skip", 0);
        e(this, "orderByDesc");
        e(this, "orderBy", "-id");
        e(this, "orderByList");
        e(this, "groupBy");
        e(this, "orderByDescList");
        e(this, "include");
        e(this, "siteId");
        e(this, "urlPrefix");
        e(this, "search");
        Object.assign(this, s)
    }
}
export {
    y as F
};