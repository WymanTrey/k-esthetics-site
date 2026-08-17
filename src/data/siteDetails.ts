export const siteDetails = {
    siteName: 'K. ESTHETICS',
    brandTagline: 'a moment for you',
    reviewSummary: '',
    siteUrl: 'https://k-esthetics-site.vercel.app/',
    metadata: {
        title: 'K. ESTHETICS | Full Body Waxing in Grand Forks, ND',
        description: 'K. ESTHETICS is a licensed esthetician studio in Grand Forks, ND specializing in full-body waxing and skin add-ons. Book your appointment online — a moment for you.',
    },
    language: 'en-us',
    locale: 'en-US',
    siteLogo: `${process.env.BASE_PATH || ''}/images/logo.png`,
    googleAnalyticsId: '',

    schemaType: 'BeautySalon',
    // No real reviews yet (brand-new business, opened ~August 2026) — these
    // are unused while reviews.ts is empty. Fill in once she has real ones.
    schemaRating: '',
    schemaReviewCount: '',
    schemaAddress: {
        streetAddress: '4088 S Washington St, Suite 214',
        addressLocality: 'Grand Forks',
        addressRegion: 'ND',
        postalCode: '58201',
    },
    // Thu hours were ambiguous on her intake form (typo'd as "Tuesday"
    // twice) — assumed same as Tue/Wed (10am-6pm) pending her confirmation.
    schemaHours: [
        { days: ['Monday'], opens: '11:00', closes: '19:00' },
        { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '10:00', closes: '18:00' },
        { days: ['Friday'], opens: '09:00', closes: '16:00' },
        { days: ['Saturday'], opens: '10:00', closes: '14:00' },
        { days: ['Sunday'], opens: '12:00', closes: '15:00' },
    ],
}
