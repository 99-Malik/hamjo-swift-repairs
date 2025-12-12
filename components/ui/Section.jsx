import React from 'react';

export const Section = ({ children, id, className, background = 'none' }) => {
    const bgClasses = {
        none: "",
        subtle: "bg-primary-900/50",
        dark: "bg-primary-950",
        gradient: "bg-gradient-to-b from-primary-900 to-primary-950"
    };

    return (
        <section id={id} className={`py-16 sm:py-24 ${bgClasses[background]} ${className || ''}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};
