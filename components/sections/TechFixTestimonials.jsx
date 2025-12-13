'use client';

import { useState, useEffect } from 'react';
import { phoneNumber } from '@/utils/phoneNumber';

const TechFixTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      location: 'Dubai Marina',
      rating: 5,
      text: 'Excellent service! My refrigerator was fixed within 2 hours. The technician was professional and explained everything clearly. Highly recommended!',
      service: 'Refrigerator Repair',
      date: '2 days ago',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Mohammed Al-Rashid',
      location: 'Abu Dhabi',
      rating: 5,
      text: 'Swift Repairs UAE saved my washing machine! Same-day service and excellent quality. The technician was knowledgeable and friendly. Will definitely use again.',
      service: 'Washing Machine Repair',
      date: '1 week ago',
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Fatima Hassan',
      location: 'Sharjah',
      rating: 5,
      text: 'Outstanding customer service! My dishwasher was making strange noises, and they fixed it perfectly. The warranty gives me peace of mind.',
      service: 'Dishwasher Repair',
      date: '3 days ago',
      avatar: '👩‍🏫'
    },
    {
      id: 4,
      name: 'Ahmed Khalil',
      location: 'Ajman',
      rating: 5,
      text: 'Quick response and professional service. My AC was not cooling properly, and they diagnosed and fixed the issue in no time. Great value for money!',
      service: 'AC Repair',
      date: '5 days ago',
      avatar: '👨‍🔧'
    },
    {
      id: 5,
      name: 'Layla Mansour',
      location: 'Ras Al Khaimah',
      rating: 5,
      text: 'Amazing experience! The technician arrived on time and fixed my oven heating issue. Clean work and professional service. Thank you Swift Repairs UAE!',
      service: 'Oven Repair',
      date: '1 week ago',
      avatar: '👩‍🍳'
    },
    {
      id: 6,
      name: 'Omar Al-Zahra',
      location: 'Fujairah',
      rating: 5,
      text: 'Professional team with excellent technical skills. My TV mounting was done perfectly, and they even helped with cable management. Highly satisfied!',
      service: 'TV Installation',
      date: '4 days ago',
      avatar: '👨‍💼'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const stats = [
    { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
    { number: '2,500+', label: 'Reviews', icon: '💬' },
    { number: '98%', label: 'Would Recommend', icon: '👍' },
    { number: '15min', label: 'Avg Response Time', icon: '⚡' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Customer Reviews
          </div>
          <h2 className="text-heading text-gray-900 mb-6">
            What Our Customers
            <span className="block gradient-text">Say About Us</span>
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers 
            across the UAE have to say about our appliance repair services.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-modern p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">{testimonials[currentTestimonial].avatar}</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-white">{testimonials[currentTestimonial].location}</div>
                  <div className="text-xs text-blue-600 font-medium">{testimonials[currentTestimonial].service}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mt-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div key={testimonial.id} className="card-modern p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">{testimonial.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-white">{testimonial.location}</div>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-white mb-3 line-clamp-3">{testimonial.text}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="text-blue-600 font-medium">{testimonial.service}</span>
                <span>{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-modern p-8 max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Experience Our Service?
            </h3>
            <p className="text-gray-700 mb-6">
              Join thousands of satisfied customers who trust Swift Repairs UAE for their appliance repair needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                className="btn-primary"
              >
                Book Service Now
              </a>
              <a
                href="#contact"
                className="btn-outline"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFixTestimonials;
