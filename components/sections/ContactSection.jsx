'use client';

import { useState } from 'react';
import { phoneNumber } from '@/utils/phoneNumber';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const services = [
        'Refrigerator Repair',
        'Washing Machine',
        'Dishwasher',
        'AC Repair',
        'Oven & Stove',
        'TV Repair',
        'Other'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Message sent!');
            setSelectedService('');
            e.target.reset();
        }, 2000);
    };

    return (
        <Section id="contact" className="py-24 bg-primary-900 border-t border-white/5">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info Column */}
                    <div>
                        <span className="text-secondary-400 font-bold uppercase tracking-widest text-sm">Get in Touch</span>
                        <h2 className="text-display mt-2 mb-8">
                            Request <br /> Service
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-md font-light">
                            Ready to restore your appliance? Contact our dispatch team for immediate assistance.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                                <Phone className="w-8 h-8 text-secondary-400" />
                                <div>
                                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Emergency Line</div>
                                    <div className="text-2xl font-bold text-white">{phoneNumber}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 bg-transparent rounded-2xl border border-white/5">
                                <Clock className="w-6 h-6 text-slate-500" />
                                <div>
                                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Working Hours</div>
                                    <div className="text-lg text-slate-300">24 Hours / 7 Days</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 bg-transparent rounded-2xl border border-white/5">
                                <MapPin className="w-6 h-6 text-slate-500" />
                                <div>
                                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Service Area</div>
                                    <div className="text-lg text-slate-300">Dubai & All UAE</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
                        <h3 className="text-2xl font-bold text-white mb-8">Book Appointment</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase mb-2 ml-1">Your Name</label>
                                <input type="text" className="input-modern w-full" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase mb-2 ml-1">Phone Number</label>
                                <input type="tel" className="input-modern w-full" placeholder={phoneNumber} required />
                            </div>

                            {/* Custom Dropdown */}
                            <div className="relative">
                                <label className="block text-slate-400 text-xs font-bold uppercase mb-2 ml-1">Service Type</label>
                                <button
                                    type="button"
                                    className={`input-modern w-full flex items-center justify-between text-left ${!selectedService && 'text-slate-500'}`}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    {selectedService || 'Select Service'}
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#0f172a] border border-white/10 rounded-xl overflow-hidden z-50 shadow-2xl animate-fade-in-up">
                                        {services.map((service, index) => (
                                            <div
                                                key={index}
                                                className="px-4 py-3 hover:bg-white/5 text-slate-300 hover:text-white cursor-pointer transition-colors text-sm border-b border-white/5 last:border-0"
                                                onClick={() => {
                                                    setSelectedService(service);
                                                    setIsDropdownOpen(false);
                                                }}
                                            >
                                                {service}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {/* Hidden input for form submission if needed, or handle in state */}
                                <input type="hidden" name="service" value={selectedService} required />
                            </div>

                            <div>
                                <label className="block text-slate-400 text-xs font-bold uppercase mb-2 ml-1">Issue Description</label>
                                <textarea rows="3" className="textarea-modern w-full" placeholder="Describe the problem..."></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="w-full text-center justify-center">
                                {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default ContactSection;
