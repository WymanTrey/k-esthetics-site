import React from 'react';
import Link from 'next/link';

import KLogo from './KLogo';
import { heroDetails } from '@/data/hero';
import { footerDetails } from '@/data/footer';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-16 pt-40 md:pt-48 px-5 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 w-full shiny-black">
                <div
                    className="absolute inset-0 h-full w-full opacity-40"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(45deg, rgba(184,147,90,0.12) 0px, rgba(184,147,90,0.12) 2px, transparent 2px, transparent 16px), repeating-linear-gradient(-45deg, rgba(184,147,90,0.08) 0px, rgba(184,147,90,0.08) 2px, transparent 2px, transparent 16px)',
                    }}
                />
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_50%,transparent_100%)] shiny-black" />
            </div>

            <div className="text-center max-w-3xl mx-auto">
                <KLogo variant="light" size="lg" className="mx-auto" />

                <span className="mt-6 inline-block bg-primary/15 text-primary border border-primary/30 text-xs md:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    Now Open in Grand Forks, ND
                </span>

                <h1 className="mt-6 text-3xl md:text-5xl md:leading-tight font-bold text-white max-w-2xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-white/80 max-w-xl mx-auto">{heroDetails.subheading}</p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:gap-4 gap-3 w-fit mx-auto">
                    <Link href="#book" className="text-white bg-primary hover:bg-primary-accent shadow-lg shadow-primary/30 hover:scale-105 px-8 py-3 rounded-full transition-all duration-200 font-semibold w-full sm:w-auto text-center">
                        Book Your Appointment
                    </Link>
                    <Link href="#services" className="text-white border border-white/30 hover:border-white/60 hover:bg-white/5 hover:scale-105 px-8 py-3 rounded-full transition-all duration-200 font-semibold w-full sm:w-auto text-center">
                        View Services &amp; Pricing
                    </Link>
                </div>

                <p className="mt-6 text-sm text-white/50">{footerDetails.address} · {footerDetails.hours}</p>
            </div>
        </section>
    );
};

export default Hero;
