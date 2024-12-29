import {
    dH as e,
    d as n,
    h as l,
    c as o,
    dG as c,
    k,
    l as a,
    dI as u,
    ad as w,
    dJ as m
} from "./DTouipjj.js";
import {
    F as b
} from "./BXkygopT.js";
const d = s => {
        switch (s) {
            case e.Facebook:
                return "Facebook";
            case e.Instagram:
                return "Instagram";
            case e.Twitter:
                return "Twitter";
            case e.Whatsapp:
                return "WhatsApp";
            case e.Linkedin:
                return "LinkedIn";
            case e.Telegram:
                return "Telegram";
            case e.Behance:
                return "Behance";
            case e.Dribbble:
                return "Dribbble";
            case e.Youtube:
                return "YouTube";
            case e.Vimeo:
                return "Vimeo";
            case e.Pinterest:
                return "Pinterest";
            case e.ApplePodcasts:
                return "Apple podcasts";
            case e.SpotifyPodcasts:
                return "Spotify podcasts";
            case e.TikTok:
                return "Tiktok";
            case e.Vk:
                return "vk";
            default:
                return ""
        }
    },
    h = n({
        name: "FooterSocialNetworks",
        props: {
            site: {
                type: Object,
                required: !0
            },
            columnSize: {
                type: String,
                default: "lg_w-1-3 md_w-1-3 sm_w-1-2"
            },
            isEnabledTitle: {
                type: Boolean,
                default: !0
            }
        },
        setup(s) {
            const t = l(() => {
                var r;
                return (r = s.site.footerSettings) == null ? void 0 : r.showUsernameInFooterSocialNetworks
            });
            return {
                socialNetworks: l(() => {
                    var r;
                    return ((r = s.site.footerSettings) == null ? void 0 : r.socialNetworks) || {}
                }),
                showUsernameInFooterSocialNetworks: t
            }
        },
        render() {
            return o("div", {
                class: a(this.columnSize, "w-full kmb-widget-col kmb-site-default-dir kmb-footer-column kmb-footer-social-networks-column", {
                    "kmb-footer-social-networks-list-show-labels": this.showUsernameInFooterSocialNetworks
                })
            }, [o("div", {
                class: "footer-social-networks"
            }, [this.isEnabledTitle && o(b, {
                site: this.site,
                type: c.SocialNetworks
            }, null), !k(this.socialNetworks) && o("ul", {
                class: a("kmb-footer-list kmb-footer-social-networks-list kmb-widget-row kmb-footer-block flex is-center-icons", {
                    "flex-col": this.showUsernameInFooterSocialNetworks
                })
            }, [Object.entries(this.socialNetworks).map(([s, t]) => {
                const i = +s;
                if (this.socialNetworks[i]) return o("li", {
                    class: a("kmb-footer-social-network-item kmb-widget-col", {
                        "w-full": this.showUsernameInFooterSocialNetworks
                    })
                }, [o("a", {
                    href: t != null && t.value ? u(t.value) : "#",
                    target: "_blank",
                    ref: "noreferrer",
                    title: w(e[s]),
                    class: a("kmb-footer-social-network-item-link flex kmb-widget-text-body2", {
                        "items-center": this.showUsernameInFooterSocialNetworks
                    })
                }, [o("i", {
                    class: a("kmb-footer-social-network-icon", m(i))
                }, null), this.showUsernameInFooterSocialNetworks && (t == null ? void 0 : t.value) && o("span", {
                    class: "kmb-footer-social-network-label ml-2 kmb-widget-text-body2"
                }, [d(i)])])])
            })])])])
        }
    });
export {
    h as
    default
};