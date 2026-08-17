import React from 'react';
import Image from 'next/image';

import { aboutDetails } from '@/data/about';

const About: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="p-1.5 rounded-2xl bg-gradient-to-br from-primary to-secondary w-fit mx-auto lg:mx-0">
                <Image
                    src="/images/about-photo.webp"
                    alt={aboutDetails.photoAlt}
                    width={384}
                    height={480}
                    quality={100}
                    className="rounded-xl object-cover block"
                />
            </div>
            <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-1">{aboutDetails.name}</h3>
                <p className="text-primary font-semibold uppercase tracking-wide text-sm mb-4">{aboutDetails.title}</p>
                <p className="text-foreground-accent text-lg leading-relaxed">{aboutDetails.bio}</p>
            </div>
        </div>
    );
};

export default About;
