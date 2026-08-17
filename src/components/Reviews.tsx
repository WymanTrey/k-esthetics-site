import React from 'react';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';

import { reviews } from '@/data/reviews';
import { footerDetails } from '@/data/footer';

const Reviews: React.FC = () => {
    const hasReviews = reviews.length > 0;

    return (
        <div>
            {hasReviews && (
                <div className="grid gap-8 max-w-lg w-full mx-auto lg:gap-6 lg:grid-cols-3 lg:max-w-full mb-12">
                    {reviews.slice(0, 6).map((review, index) => (
                        <div key={index} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                            <div className="flex items-center gap-3 mb-3">
                                <div
                                    aria-hidden="true"
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold shrink-0"
                                >
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{review.name}</p>
                                    <p className="text-xs text-foreground-accent">{review.timeAgo}</p>
                                </div>
                            </div>
                            <div className="text-primary text-sm mb-2" aria-hidden="true">★★★★★</div>
                            <p className="text-foreground-accent text-sm">&quot;{review.message}&quot;</p>
                        </div>
                    ))}
                </div>
            )}

            <div className="text-center">
                {!hasReviews && (
                    <p className="text-foreground-accent mb-4">
                        K. ESTHETICS is brand new — be one of the first to leave a review!
                    </p>
                )}
                {hasReviews && (
                    <p className="text-foreground-accent mb-4">Had a great visit? Leave us a review on Google.</p>
                )}
                <Link
                    href={footerDetails.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-secondary/40 text-secondary hover:bg-secondary/10 hover:scale-105 px-6 py-3 rounded-full font-semibold transition-all duration-200"
                >
                    <FaGoogle /> Leave a Google Review
                </Link>
            </div>
        </div>
    );
};

export default Reviews;
