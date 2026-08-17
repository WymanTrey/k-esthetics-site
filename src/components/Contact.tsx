import React from 'react';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

import { footerDetails } from '@/data/footer';
import { ctaDetails } from '@/data/cta';
import { siteDetails } from '@/data/siteDetails';

const Contact: React.FC = () => {
    const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(footerDetails.address)}&output=embed`;

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm min-h-[300px]">
                <iframe
                    src={mapSrc}
                    className="w-full h-full min-h-[300px] border-0"
                    loading="lazy"
                    title={`${siteDetails.siteName} location`}
                />
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 shadow-sm bg-white flex flex-col justify-center">
                <div className="flex items-start gap-3 mb-5">
                    <FiMapPin className="text-primary mt-1 shrink-0" size={22} />
                    <p>{footerDetails.address}</p>
                </div>
                <div className="flex items-start gap-3 mb-5">
                    <FiPhone className="text-primary mt-1 shrink-0" size={22} />
                    <a href={`tel:${footerDetails.telephone}`} className="hover:text-primary">{footerDetails.telephone}</a>
                </div>
                <div className="flex items-start gap-3 mb-5">
                    <FiClock className="text-primary mt-1 shrink-0" size={22} />
                    <p>{footerDetails.hours}</p>
                </div>
                <div className="flex items-start gap-3 mb-8">
                    <FiMail className="text-primary mt-1 shrink-0" size={22} />
                    <a href={`mailto:${footerDetails.email}`} className="hover:text-primary break-all">{footerDetails.email}</a>
                </div>
                <Link
                    href={ctaDetails.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-primary hover:bg-primary-accent shadow-lg shadow-primary/30 hover:scale-105 px-8 py-3 rounded-full transition-all duration-200 font-semibold text-center"
                >
                    Book Your Appointment
                </Link>
            </div>
        </div>
    );
};

export default Contact;
