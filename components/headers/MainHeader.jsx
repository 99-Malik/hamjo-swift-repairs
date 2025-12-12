'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { phoneNumber } from '@/utils/phoneNumber';

const MainHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Reviews', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-900/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                                <Wrench className="w-5 h-5 text-white" />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-white tracking-tight font-display leading-none">Fast<span className="text-secondary-400">Repairs</span></h1>
                                <span className="text-xs text-slate-400 font-light tracking-widest uppercase block">Pro Service UAE</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/5">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-secondary-400 -translate-x-1/2 transition-all duration-300 group-hover:w-1/2"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Button
                            href={`tel:${phoneNumber}`}
                            variant="primary"
                            className="!py-2.5 !px-6 text-sm shadow-glow"
                            icon={Phone}
                        >
                            Call Expert
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-300 hover:text-white transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-primary-900/95 backdrop-blur-xl border-b border-white/10 shadow-xl animate-fade-in-down">
                    <div className="container mx-auto px-4 py-6 space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-white/10">
                            <Button
                                href={`tel:${phoneNumber}`}
                                className="w-full justify-center"
                                icon={Phone}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Call Now
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default MainHeader;
