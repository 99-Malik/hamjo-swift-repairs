'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Check, Shield, Clock, Award, Star } from 'lucide-react';

const WhyUsSection = () => {
    return (
        <Section className="py-12 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-950 to-primary-900"></div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-secondary-400 font-bold uppercase tracking-widest text-sm">The Premium Standard</span>
                        <h2 className="text-display leading-tight mt-2 mb-8">
                            Why Choose <br /> Fast Repairs
                        </h2>

                        <div className="space-y-6">
                            {[
                                { title: 'Manufacturer Certified', desc: 'Technicians trained directly by major brands.' },
                                { title: 'Transparent Pricing', desc: 'No hidden fees. Quote approved before work begins.' },
                                { title: 'Fully Stocked Vans', desc: '90% of repairs completed on the first visit.' },
                                { title: 'Satisfaction Guarantee', desc: 'We only close the job when you are happy.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-secondary-500/10 flex-shrink-0 flex items-center justify-center border border-secondary-500/20 group-hover:bg-secondary-500 transition-colors">
                                        <Check className="w-4 h-4 text-secondary-400 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-secondary-400 transition-colors">{item.title}</h4>
                                        <p className="text-slate-400 font-light text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary-500 blur-[100px] opacity-10"></div>
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl grid grid-cols-2 gap-4">

                            <div className="bg-primary-900/50 p-6 text-center rounded-2xl border border-white/5">
                                <Shield className="w-10 h-10 text-secondary-400 mx-auto mb-3" />
                                <div className="text-white font-bold text-3xl">100%</div>
                                <div className="text-slate-400 text-xs uppercase tracking-wider mt-1">Insured</div>
                            </div>
                            <div className="bg-primary-900/50 p-6 text-center rounded-2xl border border-white/5">
                                <Clock className="w-10 h-10 text-secondary-400 mx-auto mb-3" />
                                <div className="text-white font-bold text-3xl">24/7</div>
                                <div className="text-slate-400 text-xs uppercase tracking-wider mt-1">Support</div>
                            </div>
                            <div className="bg-primary-900/50 p-6 text-center rounded-2xl border border-white/5 col-span-2">
                                <Award className="w-10 h-10 text-secondary-400 mx-auto mb-3" />
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                                </div>
                                <div className="text-white font-bold text-xl">Top Rated Service</div>
                                <div className="text-slate-400 text-xs uppercase tracking-wider mt-1">Across UAE</div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default WhyUsSection;
