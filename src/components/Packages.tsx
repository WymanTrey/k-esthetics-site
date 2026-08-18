import React from 'react';
import Link from 'next/link';

import { packages } from '@/data/packages';
import { ctaDetails } from '@/data/cta';

const Packages: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
            {packages.map((pkg) => (
                <div
                    key={pkg.name}
                    className="relative flex flex-col rounded-2xl border border-primary/15 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                    <span className="absolute -top-3 right-6 text-xs font-semibold uppercase tracking-wide text-white bg-primary px-3 py-1 rounded-full shadow-sm">
                        {pkg.savings}
                    </span>
                    <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
                    <p className="text-sm text-foreground-accent flex-1 mb-4">{pkg.description}</p>
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-2xl font-bold text-secondary">{pkg.price}</span>
                        <Link
                            href={ctaDetails.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold uppercase tracking-wide text-white bg-primary hover:bg-primary-accent px-5 py-2.5 rounded-full transition-colors"
                        >
                            Book
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Packages;
