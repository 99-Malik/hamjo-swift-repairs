'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
    const faqs = [
        { q: 'How quickly can you arrive?', a: 'We offer same-day service. In many cases, we can be at your door within 60 minutes of your call.' },
        { q: 'Do you provide a warranty?', a: 'Yes, all our repairs come with a comprehensive warranty on parts and labor for your peace of mind.' },
        { q: 'Are your technicians certified?', a: 'Absolutely. Our team consists of factory-trained and certified professionals with years of experience.' },
        { q: 'What areas do you cover?', a: 'We cover Dubai, Sharjah, Ajman, and major parts of the UAE. Call us to verify your location.' },
        { q: 'Do you use original parts?', a: 'We always prioritize genuine manufacturer parts to ensure the longevity and performance of your appliances.' },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <Section className="bg-primary-900 py-8 sm:py-12 md:py-16 lg:py-24">
            <Container>
                <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display mb-4 sm:mb-6">
                            Common <br className="hidden sm:block" /> Questions
                        </h2>
                        <p className="text-slate-400 text-base sm:text-lg mb-6 sm:mb-8 font-light">
                            Everything you need to know about our premium repair services.
                        </p>
                        <div className="p-6 sm:p-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl sm:rounded-2xl shadow-glow text-white">
                            <h4 className="font-bold text-lg sm:text-xl mb-2">Still support needed?</h4>
                            <p className="text-white/90 font-medium mb-3 sm:mb-4 text-xs sm:text-sm">Our team is available 24/7.</p>
                            <span className="text-xl sm:text-2xl font-bold block">Call Anytime</span>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`border rounded-xl sm:rounded-2xl transition-all duration-300 ${openIndex === i ? 'bg-white/5 border-secondary-500/50 shadow-soft' : 'bg-transparent border-white/5 hover:bg-white/5'}`}>
                                <button
                                    onClick={() => setOpenIndex(i === openIndex ? null : i)}
                                    className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left gap-4"
                                >
                                    <span className={`text-base sm:text-lg font-medium flex-1 ${openIndex === i ? 'text-white' : 'text-slate-300'}`}>{faq.q}</span>
                                    <div className="flex-shrink-0">
                                        {openIndex === i ? (
                                            <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-400" />
                                        ) : (
                                            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500" />
                                        )}
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48 sm:max-h-64' : 'max-h-0'}`}>
                                    <p className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default FAQSection;
