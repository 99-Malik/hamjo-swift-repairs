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
        <Section className="bg-primary-900 py-24">
            <Container>
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-display text-4xl mb-6">Common <br /> Questions</h2>
                        <p className="text-slate-400 text-lg mb-8 font-light">Everything you need to know about our premium repair services.</p>
                        <div className="p-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl shadow-glow text-white">
                            <h4 className="font-bold text-xl mb-2">Still support needed?</h4>
                            <p className="text-white/90 font-medium mb-4 text-sm">Our team is available 24/7.</p>
                            <span className="text-2xl font-bold block">Call Anytime</span>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`border rounded-2xl transition-all duration-300 ${openIndex === i ? 'bg-white/5 border-secondary-500/50 shadow-soft' : 'bg-transparent border-white/5 hover:bg-white/5'}`}>
                                <button
                                    onClick={() => setOpenIndex(i === openIndex ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`text-lg font-medium ${openIndex === i ? 'text-white' : 'text-slate-300'}`}>{faq.q}</span>
                                    {openIndex === i ? <Minus className="text-secondary-400" /> : <Plus className="text-slate-500" />}
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48' : 'max-h-0'}`}>
                                    <p className="px-6 pb-6 text-slate-400 font-light leading-relaxed">
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
