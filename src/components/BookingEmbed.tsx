import React from 'react';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

import { ctaDetails } from '@/data/cta';
import { siteDetails } from '@/data/siteDetails';

const BookingEmbed: React.FC = () => {
    return (
        <div>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                <iframe
                    src={ctaDetails.bookingUrl}
                    className="w-full border-0"
                    style={{ height: '900px' }}
                    loading="lazy"
                    title={`Book an appointment with ${siteDetails.siteName}`}
                />
            </div>
            <p className="text-center text-sm text-foreground-accent mt-4">
                Booking not loading?{' '}
                <Link
                    href={ctaDetails.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary-accent"
                >
                    Open booking in a new tab <FiExternalLink size={14} />
                </Link>
            </p>
        </div>
    );
};

export default BookingEmbed;
