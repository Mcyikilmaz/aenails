import {
    ai as e
} from "./DTouipjj.js";
const a = {
    widgetId: {
        type: String
    },
    widgetKey: {
        type: Number
    },
    widgetIndex: {
        type: Number,
        default: 0
    },
    widgetType: {
        type: Number,
        default: e.AboutUs
    },
    site: {
        type: Object
    },
    page: {
        type: Object
    },
    widget: {
        type: Object,
        required: !0
    },
    settings: {
        type: Object,
        required: !0
    },
    isEnabledAnimation: {
        type: Boolean,
        default: !1
    },
    animateClassName: {
        type: String,
        default: "animate__fadeInUp"
    },
    linkButtonLabelType: {
        type: Number
    }
};
export {
    a as D
};