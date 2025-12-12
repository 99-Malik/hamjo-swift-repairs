'use client';

import { phoneNumber } from '@/utils/phoneNumber';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Clock, Award, Hammer, Users } from 'lucide-react';

const AboutSection = () => {
    const stats = [
        { number: '10k+', label: 'Happy Clients', icon: Users },
        { number: '15+', label: 'Years Active', icon: Award },
        { number: '99%', label: 'Success Rate', icon: ShieldCheck },
    ];

    const features = [
        { icon: Award, title: 'Certified Experts', desc: 'Factory-trained technicians.' },
        { icon: Clock, title: 'Same-Day Fix', desc: 'Most repairs within 24h.' },
        { icon: ShieldCheck, title: 'Warranty Assured', desc: 'Coverage on parts & labor.' },
        { icon: Hammer, title: 'Genuine Parts', desc: 'Original components only.' },
    ];

    return (
        <Section id="about" className="relative py-24 bg-primary-950">

            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <div className="inline-flex items-center px-4 py-2 bg-secondary-500/10 border border-secondary-500/20 rounded-full">
                            <span className="text-secondary-400 text-sm font-medium tracking-wide">Serving UAE Since 2008</span>
                        </div>

                        <h2 className="text-display leading-tight">
                            Dubai's Most <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-600">Reliable Team</span>
                        </h2>

                        <p className="text-body text-lg border-l-2 border-secondary-500/50 pl-6">
                            We don't just fix appliances; we restore your home's functionality.
                            Built on trust, speed, and premium expertise.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="p-2 bg-secondary-500/10 rounded-lg text-secondary-400">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                                        <p className="text-sm text-slate-400 font-light">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className={`p-8 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-colors ${i === 2 ? 'col-span-2' : ''}`}>
                                    <stat.icon className="w-10 h-10 mx-auto mb-4 text-secondary-400" />
                                    <div className="text-4xl font-display font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-slate-400 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Glow */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary-500/20 blur-[100px] rounded-full"></div>
                    </div>

                </div>
            </Container>
        </Section>
    );
};

export default AboutSection;
