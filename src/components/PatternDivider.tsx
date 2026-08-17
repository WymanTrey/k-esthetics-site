import React from 'react';

const PatternDivider: React.FC = () => {
    return (
        <div
            aria-hidden="true"
            className="h-4 w-full"
            style={{
                background: 'var(--hero-background)',
                backgroundImage:
                    'linear-gradient(135deg, var(--secondary) 25%, transparent 25%), linear-gradient(225deg, var(--secondary) 25%, transparent 25%), linear-gradient(315deg, var(--primary) 25%, transparent 25%), linear-gradient(45deg, var(--primary) 25%, transparent 25%)',
                backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
                backgroundSize: '20px 20px',
                backgroundRepeat: 'repeat-x',
            }}
        />
    );
};

export default PatternDivider;
