import Link from "next/link"

import { ctaDetails } from "@/data/cta"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full shiny-black overflow-hidden">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    'linear-gradient(to right, rgba(184,147,90,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(184,147,90,0.10) 1px, transparent 1px)',
                                backgroundSize: '6rem 4rem',
                            }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,rgba(184,147,90,0.25),transparent)]" />
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{ctaDetails.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5">{ctaDetails.subheading}</p>

                        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4">
                        <Link href={ctaDetails.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-primary hover:bg-primary-accent shadow-lg shadow-primary/30 hover:scale-105 px-8 py-3 rounded-full transition-all duration-200 font-semibold">
                            Book Your Appointment
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
