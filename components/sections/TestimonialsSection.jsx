'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Star, Quote, User, MapPin } from 'lucide-react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'Sarah Ahmed',
            location: 'Dubai Marina',
            text: 'My refrigerator was fixed within 2 hours. The technician was professional and explained everything clearly.',
            rating: 5,
        },
        {
            name: 'Mohammed Al-Rashid',
            location: 'Abu Dhabi',
            text: 'Saved my washing machine! Same-day service and flawless execution. Highly recommended.',
            rating: 5,
        },
        {
            name: 'Layla Mansour',
            location: 'RAK City',
            text: 'The team arrived on time and fixed the oven heating issue immediately. Clean work and very respectful.',
            rating: 5,
        }
    ];

    return (
        <Section id="testimonials" className="bg-primary-950 py-24 relative overflow-hidden">
            {/* BG Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-800/20 rounded-full blur-[100px] -z-0"></div>

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <span className="text-secondary-400 font-bold uppercase tracking-widest text-sm">Testimonials</span>
                    <h2 className="text-display mt-2">Verified Reviews</h2>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <Star className="w-5 h-5 text-secondary-400 fill-secondary-400" />
                        <span className="text-xl font-bold text-white">4.9/5</span>
                        <span className="text-slate-400 font-light text-sm">(2,500+ Happy Customers)</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-3xl relative hover:bg-white/10 transition-colors group">
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-secondary-500/20 transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, idx) => (
                                    <Star key={idx} className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                                ))}
                            </div>

                            <p className="text-slate-300 text-lg font-light italic mb-8 leading-relaxed">"{t.text}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">{t.name}</div>
                                    <div className="text-xs text-slate-500 flex items-center mt-0.5">
                                        <MapPin className="w-3 h-3 mr-1" /> {t.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default TestimonialsSection;
