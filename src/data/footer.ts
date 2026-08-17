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
            text: "Contact",
            url: "#contact"
        }
    ],
    // TODO: real phone/email weren't collected on the intake form — get these from Aubriell.
    email: '[need real business email from Aubriell]',
    telephone: '[need real business phone from Aubriell]',
    address: '4088 S Washington St, Suite 214, Grand Forks, ND 58201',
    // Thursday assumed same as Tue/Wed (10am-6pm) — her form had a typo (listed "Tuesday" twice, no Thursday). Confirm.
    hours: 'Mon 11-7 · Tue-Thu 10-6 · Fri 9-4 · Sat 10-2 · Sun 12-3',
    // No Google Business Profile found yet (brand-new studio) — add once she has one.
    googleReviewUrl: '',
    socials: {
        instagram: 'https://www.instagram.com/k.esthetics/',
        facebook: 'https://www.facebook.com/61592233396314',
    }
}
