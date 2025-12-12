'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Wrench, Snowflake, Waves, Utensils, Thermometer, Tv, Wind, ArrowRight } from 'lucide-react';
import { phoneNumber } from '@/utils/phoneNumber';

const ServicesGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Kitchen', 'Laundry', 'Climate'];

  const services = [
    {
      title: 'Refrigerator Repair',
      icon: Snowflake,
      category: 'Kitchen',
      desc: 'Compressor fixes, gas refill, cooling issues.',
      image: '/images/services/refrigerator.png'
    },
    {
      title: 'Washing Machine',
      icon: Waves,
      category: 'Laundry',
      desc: 'Drum repair, motor issues, water leakage.',
      image: '/images/services/washing-machine.png'
    },
    {
      title: 'Dishwasher',
      icon: Utensils,
      category: 'Kitchen',
      desc: 'Pump replacement, drainage, electronic faults.',
      image: '/images/services/dishwasher.png'
    },
    {
      title: 'AC Repair',
      icon: Wind,
      category: 'Climate',
      desc: 'Filter cleaning, gas top-up, cooling optimization.',
      image: '/images/services/ac-repair.png'
    },
    {
      title: 'Oven & Stove',
      icon: Thermometer,
      category: 'Kitchen',
      desc: 'Heating elements, gas valve repair, ignition.',
      image: '/images/services/oven-stove.png'
    },
    {
      title: 'TV Repair',
      icon: Tv,
      category: 'Other',
      desc: 'Screen issues, sound problems, power supply.',
      image: '/images/services/tv-repair.png'
    },
  ];

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <Section id="services" className="bg-primary-950">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-secondary-400 font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            <h2 className="text-display mt-2">Premium Repair <br /> Services</h2>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0 flex-wrap justify-center md:justify-end pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm md:px-6 md:text-base rounded-full font-medium transition-all ${activeCategory === cat
                  ? 'bg-secondary-500 text-white shadow-glow'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Background / Header */}
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 to-transparent z-10"></div>
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-primary-900 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-white/5" />
                  </div>
                )}

                <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-lg">
                  <service.icon className="w-5 h-5 text-secondary-400" />
                </div>
              </div>

              <div className="p-8 relative z-20 -mt-12">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary-400 transition-colors drop-shadow-md">{service.title}</h3>
                <p className="text-slate-300 mb-6 font-light text-sm line-clamp-2">{service.desc}</p>

                <a href={`tel:${phoneNumber}`} className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-white hover:text-secondary-400 transition-colors">
                  <span>Book Now</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ml-3 group-hover:bg-secondary-500 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ServicesGrid;
