import React from 'react';
import Link from 'next/link';

export const Button = ({ children, variant = 'primary', href, className, icon: Icon, ...props }) => {
    const baseClasses = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        outline: "btn-outline",
        ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white px-4 py-2 rounded-full transition-all"
    };

    // Defaults to primary if variant not found
    const variantClass = baseClasses[variant] || baseClasses.primary;
    const combinedClass = `${variantClass} flex items-center justify-center gap-2 ${className || ''}`;

    // Render as Link if href is present
    if (href) {
        return (
            <Link href={href} className={combinedClass} {...props}>
                {Icon && <Icon className="w-5 h-5" />}
                <span>{children}</span>
            </Link>
        );
    }

    // Render as standard button
    return (
        <button className={combinedClass} {...props}>
            {Icon && <Icon className="w-5 h-5" />}
            <span>{children}</span>
        </button>
    );
};
