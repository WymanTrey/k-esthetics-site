import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope, Playfair_Display } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternDivider from "@/components/PatternDivider";
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { reviews } from '@/data/reviews';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-logo-serif' });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg'],
  },
};

// No real reviews yet (brand-new business) — omit aggregateRating/review
// entirely rather than showing a fake or zeroed-out rating. Add them back
// in once she has genuine reviews to point to.
const hasRealReviews = reviews.length > 0;

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': siteDetails.schemaType,
  name: siteDetails.siteName,
  image: `${siteDetails.siteUrl}images/about-photo.webp`,
  url: siteDetails.siteUrl,
  telephone: footerDetails.telephone,
  email: footerDetails.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    ...siteDetails.schemaAddress,
    addressCountry: 'US',
  },
  openingHoursSpecification: siteDetails.schemaHours.map((block) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: block.days,
    opens: block.opens,
    closes: block.closes,
  })),
  ...(hasRealReviews && {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteDetails.schemaRating,
      reviewCount: siteDetails.schemaReviewCount,
    },
    review: reviews.slice(0, 3).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: r.message,
    })),
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${manrope.variable} ${sourceSans.className} ${playfairDisplay.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>
          {children}
        </main>
        <PatternDivider />
        <Footer />
      </body>
    </html>
  );
}
