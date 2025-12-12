import React from 'react';

export const Card = ({ children, variant = 'modern', className, ...props }) => {
    const baseClasses = {
        modern: "card-modern",
        glass: "card-glass",
        gradient: "card-gradient",
        plain: "bg-primary-900 border border-primary-800 rounded-2xl"
    };

    return (
        <div className={`${baseClasses[variant] || baseClasses.modern} ${className || ''}`} {...props}>
            {children}
        </div>
    );
};
