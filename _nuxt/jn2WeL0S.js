import {
    i as u
} from "./DSoJ1F4P.js";
const e = c => {
    try {
        if (!c) return {};
        const {
            params: t,
            query: i
        } = c, r = (t == null ? void 0 : t.id) || void 0, d = (i == null ? void 0 : i.id) || r, s = (t == null ? void 0 : t.slug) || (t == null ? void 0 : t.pathMatch) || void 0, n = r ? `${r}/${s}` : s, o = d ? void 0 : s;
        return o && u(o) ? {
            id: +o,
            slug: void 0,
            urlSlug: n
        } : {
            id: +d,
            slug: o,
            urlSlug: n
        }
    } catch (t) {
        throw t
    }
};
export {
    e as g
};