import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    address: string;
    hours: string;
    googleReviewUrl: string;
    socials: ISocials;
} = {
    subheading: "Licensed esthetician studio specializing in full-body waxing, owned and operated by Aubriell Kraemer.",
    quickLinks: [
        {
            text: "About",
            url: "#about"
        },
        {
            text: "Services",
            url: "#services"
        },
        {
            text: "Reviews",
            url: "#reviews"
        },
        {
            text: "Contact",
            url: "#contact"
        }
    ],
    email: 'kestheticsstudio11@gmail.com',
    telephone: '+1 (701) 610-1855',
    address: '4088 S Washington St, Suite 214, Grand Forks, ND 58201',
    hours: 'Mon 11-7 · Tue-Thu 10-6 · Fri 9-4 · Sat 10-2 · Sun 12-3',
    // She has a Google Business Profile (0 reviews so far, brand new) — this
    // gives early clients a place to leave her very first reviews.
    googleReviewUrl: 'https://www.google.com/maps/place/K.+ESTHETICS/data=!4m7!3m6!1s0x52c6811e40675945:0xa55f906dca36d842!8m2!3d47.8813625!4d-97.0466128!16s%2Fg%2F11zwnr9yjb!19sChIJRVlnQB6BxlIRQtg2ym2QX6U',
    socials: {
        instagram: 'https://www.instagram.com/k.esthetics/',
        facebook: 'https://www.facebook.com/61592233396314',
    }
}
