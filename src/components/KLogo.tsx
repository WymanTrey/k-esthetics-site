import React from 'react';

interface Props {
    variant?: 'dark' | 'light';
    size?: 'sm' | 'lg';
    className?: string;
}

/**
 * Recreation of the real K. ESTHETICS logo (circle + serif "K." monogram +
 * small swash/dot + tracked wordmark below) as a scalable SVG instead of a
 * raster screenshot, so it stays crisp at any size and can recolor for the
 * dark hero vs. light body sections.
 */
const KLogo: React.FC<Props> = ({ variant = 'dark', size = 'sm', className = '' }: Props) => {
    const color = variant === 'dark' ? '#1A1815' : '#FBF9F5';
    const accent = variant === 'dark' ? '#B8935A' : '#D8B87C';
    const height = size === 'lg' ? 200 : 44;

    return (
        <svg
            viewBox="0 0 220 260"
            height={height}
            className={className}
            role="img"
            aria-label="K. ESTHETICS"
        >
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
        </svg>
    );
};

export default KLogo;
