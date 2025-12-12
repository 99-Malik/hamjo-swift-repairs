'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Wrench, Facebook, Twitter, Instagram, Linkedin, Phone } from 'lucide-react';
import { phoneNumber } from '@/utils/phoneNumber';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-950 pt-20 border-t border-white/5">
            <Container>
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2 space-y-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl flex items-center justify-center shadow-glow">
                                <Wrench className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white font-display leading-none">Fast<span className="text-secondary-400">Repairs</span></h3>
                                <span className="text-slate-500 text-xs tracking-widest font-light">Pro Service</span>
                            </div>
                        </div>
                        <p className="text-slate-400 max-w-sm leading-relaxed font-light">
                            The UAE's leading premium appliance repair service.
                            We bring factory-certified expertise to your doorstep 24/7.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-secondary-500 hover:text-white transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-slate-400 font-light text-sm">
                            {['Refrigerator Repair', 'Washing Machine', 'Dishwasher', 'AC Repair', 'Oven & Stove'].map(item => (
                                <li key={item}><Link href="#services" className="hover:text-secondary-400 transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-400">
                                <Phone className="w-4 h-4 text-secondary-400" />
                                <span className="font-bold text-white">{phoneNumber}</span>
                            </div>
                            <p className="text-slate-400 text-sm font-light">Dubai, United Arab Emirates</p>
                            <p className="text-slate-400 text-sm font-light">support@fastrepairs.pro</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs font-medium tracking-wide">
                    <div>&copy; {currentYear} Fast Repairs Pro. All rights reserved.</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-slate-400">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-400">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
