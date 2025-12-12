'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Phone, Search, Wrench, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
    const steps = [
        { icon: Phone, title: 'Contact Support', desc: 'Call or book online. 24/7 availability.' },
        { icon: Search, title: 'Expert Diagnosis', desc: 'Thorough inspection to identify root cause.' },
        { icon: Wrench, title: 'Presicion Repair', desc: 'Original parts and certified technicians.' },
        { icon: CheckCircle, title: 'Quality Assurance', desc: 'Testing & comprehensive warranty.' },
    ];

    return (
        <Section className="bg-primary-900 py-24 relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <Container>
                <div className="text-center mb-20">
                    <span className="text-secondary-400 font-bold uppercase tracking-widest text-sm">Workflow</span>
                    <h2 className="text-display mt-2 mb-4">How It Works</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">Seamless service from start to finish. We respect your time and property.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-800 via-secondary-500/50 to-primary-800 -z-0"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-primary-800/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-glow transform group-hover:scale-110 transition-all duration-300">
                                <step.icon className="w-8 h-8 text-secondary-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed">{step.desc}</p>

                            {/* Step Number */}
                            <div className="absolute -top-6 -right-2 text-6xl font-display font-bold text-white/5 select-none -z-10">0{i + 1}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default ProcessSection;
