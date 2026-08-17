import React, { useId } from 'react';

interface Props {
    variant?: 'dark' | 'light';
    size?: 'sm' | 'lg';
    className?: string;
}

/**
 * Recreation of the real K. ESTHETICS logo (circle + serif "K." monogram +
 * small swash/dot + tracked wordmark below) as a scalable SVG instead of a
 * raster screenshot, so it stays crisp at any size and can recolor for the
 * dark hero vs. light body sections. The "light" variant (used on dark
 * backgrounds) gets a gold LED/neon glow via an SVG filter.
 */
const KLogo: React.FC<Props> = ({ variant = 'dark', size = 'sm', className = '' }: Props) => {
    const rawId = useId().replace(/:/g, '');
    const filterId = `k-logo-glow-${rawId}`;
    const isGlowing = variant === 'light';

    const color = variant === 'dark' ? '#1A1815' : '#FDF6E8';
    const accent = variant === 'dark' ? '#B8935A' : '#F2D9A0';
    const height = size === 'lg' ? 200 : 44;

    return (
        <svg
            viewBox="0 0 220 260"
            height={height}
            className={className}
            role="img"
            aria-label="K. ESTHETICS"
        >
            {isGlowing && (
                <defs>
                    <filter id={filterId} x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blurSmall" />
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blurLarge" />
                        <feFlood floodColor="#E8C078" floodOpacity="0.95" result="colorSmall" />
                        <feFlood floodColor="#D8A94F" floodOpacity="0.75" result="colorLarge" />
                        <feComposite in="colorSmall" in2="blurSmall" operator="in" result="glowSmall" />
                        <feComposite in="colorLarge" in2="blurLarge" operator="in" result="glowLarge" />
                        <feMerge>
                            <feMergeNode in="glowLarge" />
                            <feMergeNode in="glowSmall" />
                            <feMergeNode in="glowSmall" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            )}
            <g filter={isGlowing ? `url(#${filterId})` : undefined}>
                <circle cx="110" cy="105" r="78" fill="none" stroke={color} strokeWidth="2.5" />
                <text
                    x="102"
                    y="145"
                    textAnchor="middle"
                    className="logo-serif"
                    fontSize="104"
                    fill={color}
                >
                    K
                </text>
                <path
                    d="M 148 150 C 158 172, 170 178, 190 176"
                    fill="none"
                    stroke={color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <circle cx="196" cy="174" r="5" fill={accent} />
                <text
                    x="110"
                    y="228"
                    textAnchor="middle"
                    fontFamily="var(--font-manrope), sans-serif"
                    fontSize="20"
                    letterSpacing="6"
                    fill={color}
                >
                    — K. ESTHETICS —
                </text>
            </g>
        </svg>
    );
};

export default KLogo;
