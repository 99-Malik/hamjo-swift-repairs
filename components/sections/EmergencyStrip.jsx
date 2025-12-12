'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { phoneNumber } from '@/utils/phoneNumber';
import { Phone } from 'lucide-react';

const EmergencyStrip = () => {
    return (
        <Section className="py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-secondary-500 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-white mb-2">Emergency Breakdown?</h2>
                        <p className="text-white/90 font-medium text-lg">Don't let a broken appliance ruin your day. We are here 24/7.</p>
                    </div>

                    <a href={`tel:${phoneNumber}`} className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                        <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                        Call {phoneNumber}
                    </a>
                </div>
            </Container>
        </Section>
    );
};

export default EmergencyStrip;
