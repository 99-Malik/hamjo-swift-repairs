'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Phone, CheckCircle, Clock, ShieldCheck, Wrench, ArrowRight, Star } from 'lucide-react';
import { phoneNumber } from '@/utils/phoneNumber';

const HeroSection = () => {
    const services = ['Washing Machine', 'Refrigerator', 'AC Repair', 'Dishwasher', 'Ovens'];
    const [currentService, setCurrentService] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Section className="relative min-h-[90vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            {/* Premium Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Premium Appliance Repair"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/80 to-primary-950/60"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-secondary-400 font-medium text-sm animate-fade-in-up shadow-lg">
                            <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></span>
                            #1 Rated Appliance Repair in Dubai
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
                            Premium Repair for <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500 relative">
                                {services[currentService]}
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary-500 opacity-30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 9.75001 59.5492 7.00003 105.861 6.36809C152.173 5.73615 197.697 2.05926 198.001 2" stroke="currentColor" strokeWidth="3" /></svg>
                            </span>
                        </h1>

                        <p className="text-slate-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                            Expert diagnostics and rapid repairs for high-end home appliances.
                            <strong className="text-white font-medium"> Certified technicians</strong>, original parts, and a
                            <strong className="text-white font-medium"> 100% satisfaction guarantee</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start pt-6">
                            <Button
                                href={`tel:${phoneNumber}`}
                                variant="primary"
                                icon={Phone}
                                className="shadow-2xl hover:shadow-secondary-500/20 py-3 text-base md:py-4 md:text-lg w-full sm:w-auto transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                Call {phoneNumber}
                            </Button>

                            <Button
                                href="#contact"
                                variant="outline"
                                className="backdrop-blur-md bg-white/5 flex flex-row items-center border-white/20 hover:bg-white/10 py-3 text-base md:py-4 md:text-lg w-full sm:w-auto group"
                            >
                                Book Online
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-8 lg:max-w-md mx-auto lg:mx-0 border-t border-white/5 mt-8">
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-br from-white/10 to-white/5 rounded-lg text-secondary-400 shadow-inner ring-1 ring-white/10">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <span className="block text-white font-semibold text-sm">60 Min</span>
                                    <span className="text-slate-500 text-xs">Response Time</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-br from-white/10 to-white/5 rounded-lg text-secondary-400 shadow-inner ring-1 ring-white/10">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <span className="block text-white font-semibold text-sm">Warranty</span>
                                    <span className="text-slate-500 text-xs">Included</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Content - Glass Card */}
                    <div className="relative hidden lg:block animate-float">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-primary-600/20 rounded-3xl blur-3xl transform rotate-6"></div>
                        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl ring-1 ring-white/10">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <div className="inline-flex items-center space-x-2 text-green-400 text-xs font-bold uppercase tracking-wider mb-1">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <span>System Online</span>
                                    </div>
                                    <h3 className="text-white font-bold text-xl tracking-tight">Visual Diagnostics</h3>
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-xl flex items-center justify-center border border-white/10 shadow-lg">
                                    <Wrench className="w-6 h-6 text-secondary-400" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {['Compressor Status', 'Cooling Efficiency', 'Motor Voltage', 'Sensor Calibration'].map((item, i) => (
                                    <div key={i} className="bg-white/5 rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors cursor-default group">
                                        <span className="text-slate-300 text-sm font-medium">{item}</span>
                                        <span className="flex items-center text-green-400 text-xs font-bold bg-green-500/10 px-3 py-1 rounded-full group-hover:bg-green-500/20 transition-colors">
                                            <CheckCircle className="w-3 h-3 mr-1.5" /> OK
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-primary-900 relative z-10 flex items-center justify-center text-xs text-white overflow-hidden shadow-md">
                                            <UserIcon />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end">
                                        <Star className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                                        <span className="text-white font-bold ml-1.5 text-lg">4.9/5</span>
                                    </div>
                                    <span className="text-slate-500 text-xs font-medium">From 2,500+ Reviews</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements for depth */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-secondary-500/10 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"></div>
                    </div>

                </div>
            </Container>
        </Section>
    );
};

const UserIcon = () => (
    <svg className="w-full h-full text-slate-400 bg-slate-800" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export default HeroSection;
