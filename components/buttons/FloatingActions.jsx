'use client';

import { useState, useEffect } from 'react';
import { phoneNumber } from '@/utils/phoneNumber';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 animate-fade-in-up">
            {/* WhatsApp */}
            <a
                href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-green-500/20"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-7 h-7" />
            </a>

            {/* Call */}
            <a
                href={`tel:${phoneNumber}`}
                className="w-14 h-14 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-secondary-500/30"
                aria-label="Call Now"
            >
                <Phone className="w-6 h-6" />
            </a>
        </div>
    );
};

export default FloatingActions;
