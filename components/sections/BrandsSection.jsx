'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { AlertTriangle, Droplets, Zap, Thermometer, Volume2, PowerOff } from 'lucide-react';

const BrandsSection = () => {
    const problems = [
        { icon: Droplets, text: 'Leaking Water?' },
        { icon: Volume2, text: 'Strange Noises?' },
        { icon: Thermometer, text: 'Not Cooling?' },
        { icon: AlertTriangle, text: 'Error Codes?' },
        { icon: Zap, text: 'Sparking?' },
        { icon: PowerOff, text: 'Won\'t Start?' },
    ];

    return (
        <Section className="py-8 border-b border-white/5 bg-primary-950/50 overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="w-full md:w-auto text-center md:text-left">
                        <span className="text-secondary-400 font-bold uppercase tracking-widest text-xs animate-pulse">Troubleshooting</span>
                        <h3 className="text-xl font-bold text-white mt-1">Facing Issues?</h3>
                    </div>

                    <div className="flex-1 w-full overflow-hidden relative">
                        {/* Gradient Masks for scrolling effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-primary-950 to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-primary-950 to-transparent z-10"></div>

                        <div className="flex gap-8 items-center animate-scroll whitespace-nowrap">
                            {/* Duplicate list for infinite scroll effect if needed, or just static list if it fits */}
                            {[...problems, ...problems].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5 mx-2 min-w-max">
                                    <item.icon className="w-4 h-4 text-red-400" />
                                    <span className="text-slate-200 font-medium text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default BrandsSection;
