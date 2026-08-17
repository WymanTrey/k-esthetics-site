import React from 'react';
import Link from 'next/link';

import { serviceCategories } from '@/data/services';
import { ctaDetails } from '@/data/cta';

const Services: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-12">
            {serviceCategories.map((category) => (
                <div key={category.name}>
                    <div className="flex items-center gap-3 mb-4 border-b border-primary/20 pb-3">
                        <span className="text-primary">{category.icon}</span>
                        <h3 className="text-xl font-bold">{category.name}</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {category.services.map((service) => (
                            <div key={service.name} className="flex items-center justify-between py-3 gap-4">
                                <div>
                                    <p className="font-semibold">{service.name}</p>
                                    <p className="text-sm text-foreground-accent">{service.duration}</p>
                                </div>
                                <div className="flex items-center gap-4 shrink-0">
                                    <span className="font-bold text-secondary">{service.price}</span>
                                    <Link
                                        href={ctaDetails.bookingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-semibold uppercase tracking-wide text-white bg-primary hover:bg-primary-accent px-4 py-2 rounded-full transition-colors"
                                    >
                                        Book
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
